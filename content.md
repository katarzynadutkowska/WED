WED contains water fluxes and parameters describing the emitting source properties. It currently covers 79 observed water transitions up to the para-H<sub>2</sub>O 9<sub>19</sub> - 8<sub>08</sub> transition. Emitting sources at these transitions include the whole range of Galactic protostellar sources, with the majority of low-mass protostars. Currently we are working on adding all of the Galactic data to the database. In the future we will also extend WED with the extragalactic data.

Water Emission Database is stored and extended using the MySQL Database Service. The data is shared through regularly updated CSV files and is independent of the database driver for safety measures. The tables are constructed in the following way:

| obs_id  | object | obj_type | ra_2000 | dec_2000 | transition | freq | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Ordinal numbers | Name of the object | Object type<sup>*</sup> | RA (J2000) | Dec (J2000) | Transition | Frequency (GHz)<sup>**</sup> |

|telescope | instrument | obs_res | distance | luminosity| 
| ---- | ---- | ---- | ---- | ---- |
| Name of the telescope | Instrument used for observations | Resolution ('') | Distance to the source (pc)| *L*<sub>bol</sub> (*L*<sub><span style='font-size:10px;'>&#9737;</span></sub>) |

| tbol | menv | vlsr | flux | flux_err |
| ---- | ---- | ---- | ---- | ---- | 
|  Bolometric temperature (K) | Envelope mass (*M*<sub><span style='font-size:10px;'>&#9737;</span></sub>) | Velocity (km/s) | Observed flux | Flux error |

| unit | ref | extra |
| ---- | ---- | ---- |
| Unit of flux <br>(K km s<sup>-1</sup> / W cm<sup>-2</sup> / W m<sup>-2</sup> / erg s<sup>-1</sup> cm<sup>-2</sup>) | References to flux measurements | Additional information |

<sup>1</sup> 
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

<sup>2</sup> All of the frequencies to corresponding transitions are taken from the [LAMDA database](https://home.strw.leidenuniv.nl/~moldata/) ([Schöier, F.L., van der Tak, F.F.S., van Dishoeck E.F., Black, J.H. 2005, A&A 432, 369-379](https://ui.adsabs.harvard.edu/abs/2005A%26A...432..369S/abstract)).
