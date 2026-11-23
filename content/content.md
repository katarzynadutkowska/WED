---
title: Content of the database
---

WED contains water fluxes and parameters describing the emitting source properties. It currently covers 79 observed water transitions up to the para-H<sub>2</sub>O 9<sub>19</sub> – 8<sub>08</sub> transition. Emitting sources at these transitions include the whole range of Galactic protostellar sources, with the majority of low-mass protostars. Currently we are working on adding all of the Galactic data to the database. In the future we will also extend WED with the extragalactic data.

Water Emission Database is stored and extended using the MySQL Database Service. The data is shared through regularly updated CSV files and is independent of the database driver for safety measures.

## Columns

Every table has **20 columns**:

<table class="columns-table">
  <thead><tr><th>Column</th><th>Description</th><th>Unit</th></tr></thead>
  <tbody>
    <tr class="group"><td colspan="3">Source</td></tr>
    <tr><td>obs_id</td><td>Ordinal number</td><td>—</td></tr>
    <tr><td>object</td><td>Name of the object</td><td>—</td></tr>
    <tr><td>obj_type</td><td>Object type (see <a href="#object-types">object types</a>)</td><td>—</td></tr>
    <tr><td>ra_2000</td><td>Right ascension (J2000)</td><td>h m s</td></tr>
    <tr><td>dec_2000</td><td>Declination (J2000)</td><td>° ′ ″</td></tr>
    <tr class="group"><td colspan="3">Observation</td></tr>
    <tr><td>transition</td><td>Transition</td><td>—</td></tr>
    <tr><td>freq</td><td>Frequency <i>ν</i> of the transition<sup><a href="#freq-note">†</a></sup></td><td>GHz</td></tr>
    <tr><td>telescope</td><td>Telescope used</td><td>—</td></tr>
    <tr><td>instrument</td><td>Instrument used for observations</td><td>—</td></tr>
    <tr><td>obs_res</td><td>Resolution</td><td>″</td></tr>
    <tr class="group"><td colspan="3">Physical properties</td></tr>
    <tr><td>distance</td><td>Distance to the source</td><td>pc</td></tr>
    <tr><td>luminosity</td><td>Bolometric luminosity <i>L</i><sub>bol</sub></td><td><i>L</i><sub>☉</sub></td></tr>
    <tr><td>tbol</td><td>Bolometric temperature</td><td>K</td></tr>
    <tr><td>menv</td><td>Envelope mass</td><td><i>M</i><sub>☉</sub></td></tr>
    <tr><td>vlsr</td><td>Velocity</td><td>km s<sup>−1</sup></td></tr>
    <tr class="group"><td colspan="3">Flux</td></tr>
    <tr><td>flux</td><td>Observed flux</td><td>see <code>unit</code></td></tr>
    <tr><td>flux_err</td><td>Flux error</td><td>see <code>unit</code></td></tr>
    <tr><td>unit</td><td>Unit of flux: K km s<sup>−1</sup>, W cm<sup>−2</sup>, W m<sup>−2</sup> or erg s<sup>−1</sup> cm<sup>−2</sup></td><td>—</td></tr>
    <tr class="group"><td colspan="3">References</td></tr>
    <tr><td>ref</td><td>References to flux measurements</td><td>—</td></tr>
    <tr><td>extra</td><td>Additional information / references to other data</td><td>—</td></tr>
  </tbody>
</table>

<p class="footnote" id="freq-note">† All frequencies of the corresponding transitions are taken from the <a href="https://home.strw.leidenuniv.nl/~moldata/">LAMDA database</a> (<a href="https://scixplorer.org/abs/2005A%26A...432..369S/abstract">Schöier, F.L., van der Tak, F.F.S., van Dishoeck E.F., Black, J.H. 2005, A&amp;A 432, 369-379</a>).</p>

## Object types

Abbreviations used in the <code>obj_type</code> column:

<dl class="glossary">
  <div><dt>YSO</dt><dd>Young Stellar Object</dd></div>
  <div><dt>IM</dt><dd>Intermediate-mass</dd></div>
  <div><dt>LM</dt><dd>Low-mass</dd></div>
  <div><dt>HM</dt><dd>High-mass</dd></div>
  <div><dt>IR-q</dt><dd>IR-quiet</dd></div>
  <div><dt>mIR-q</dt><dd>mIR-quiet</dd></div>
  <div><dt>HMPO</dt><dd>High-mass protostellar object</dd></div>
  <div><dt>HMC</dt><dd>Hot molecular core</dd></div>
  <div><dt>UCHII</dt><dd>Ultra-compact HII region</dd></div>
  <div><dt>C0</dt><dd>Class 0</dd></div>
  <div><dt>CI</dt><dd>Class I</dd></div>
  <div><dt>CII</dt><dd>Class II</dd></div>
  <div><dt>PS</dt><dd>Possible pre-stellar core</dd></div>
  <div><dt>PDR</dt><dd>Photodissociation region</dd></div>
</dl>
