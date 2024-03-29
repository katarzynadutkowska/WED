## Content
<hr>

WED contains water fluxes and parameters describing the emitting source properties. It currently covers 79 observed water transitions up to the para-H<sub>2</sub>O 9<sub>19</sub> - 8<sub>08</sub> transition. Emitting sources at these transitions include the whole range of Galactic protostellar sources, with the majority of low-mass protostars. Currently we are working on adding all of the Galactic data to the database. In the future we will also extend WED with the extragalactic data.

Water Emission Database is stored and extended using the MySQL Database Service. The data is shared through regularly updated CSV files and is independent of the database driver for safety measures. The tables have **20 columns** and are constructed in the following way:

| obs_id  | object | obj_type | ra_2000 | dec_2000 |
| ---- | ---- | ---- | ---- | ---- |
| Ordinal numbers | Name of the object | Object type<sup>*</sup> | RA (J2000) | Dec (J2000) |

| transition | freq | telescope | instrument | obs_res |
| ---- | ---- | ---- | ---- | ---- |
| Transition | <span style='font-size:15px;'>&nu;</span> (GHz)<sup>**</sup> | Telescope used | Instrument used for observations | Resolution ('') |

| distance | luminosity |  tbol | menv | vlsr |
| ---- | ---- | ---- | ---- | ---- |
| Distance to the source (pc)| *L*<sub>bol</sub> (*L*<sub><span style='font-size:10px;'>&#9737;</span></sub>) | Bolometric temperature (K) | Envelope mass (*M*<sub><span style='font-size:10px;'>&#9737;</span></sub>) | Velocity (km/s) |

| flux | flux_err | unit |
| ---- | ---- |  ---- |
| Observed flux | Flux error | Unit of flux <br>(K km s<sup>-1</sup> / W cm<sup>-2</sup> / W m<sup>-2</sup> / erg s<sup>-1</sup> cm<sup>-2</sup>) |

| ref | extra |
| ---- | ---- |
| References to flux measurements | Additional information/references to other data|

<sup>*</sup> 
Legend:
 - YSO   - Young Stellar Object
 - IM    - Intermediate-mass
 - LM    - Low-mass
 - IR-q  - IR-quiet
 - HM    - high-mass
 - mIR-q - mIR-quiet
 - HMPO  - high-mass protostellar object
 - HMC   - hot molecular core
 - UCHII - ultra-compact HII region
 - C0    - class 0
 - CI    - class I
 - CII   - class II
 - PS    - possible pre-stellar core
 - PDR   - photodissociation region

<sup>**</sup> All of the frequencies to corresponding transitions are taken from the [LAMDA database](https://home.strw.leidenuniv.nl/~moldata/) ([Schöier, F.L., van der Tak, F.F.S., van Dishoeck E.F., Black, J.H. 2005, A&A 432, 369-379](https://ui.adsabs.harvard.edu/abs/2005A%26A...432..369S/abstract)).
