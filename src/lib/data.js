// Reads the editable content in /content and the CSV files in public/Database.
import fs from 'node:fs';
import path from 'node:path';
import { load as loadYaml } from 'js-yaml';

// Imported with ?raw so the live preview (npm run dev) reloads when you edit it.
import siteYaml from '../../content/site.yaml?raw';

const root = process.cwd();
export const site = loadYaml(siteYaml);

/** Parse CSV text (handles quoted fields with commas and "" escapes). */
export function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((v) => v !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((v) => v !== '')) rows.push(row);
  return rows;
}

/** Info about a database file: size, number of rows and (optionally) its table. */
export function csvFile(name) {
  const full = path.join(root, 'public', 'Database', name);
  if (!fs.existsSync(full)) throw new Error(`content/access.md lists ${name}, but public/Database/${name} does not exist`);
  const text = fs.readFileSync(full, 'utf8');
  const [header, ...rows] = parseCsv(text);
  const kb = fs.statSync(full).size / 1024;
  return { header, rows, size: kb < 1024 ? `${Math.max(1, Math.round(kb))} KB` : `${(kb / 1024).toFixed(1)} MB` };
}
