//HERE WE IMPORT EVERY IMAGE
import luke from "../img/entities/luke.jpeg"
import beru from "../img/entities/beru.jpg"
import biggs from "../img/entities/biggs.jpeg"
import c3po from "../img/entities/c3po.jpeg"
import darth from "../img/entities/darth.jpeg"
import leia from "../img/entities/leia.jpeg"
import obiwan from "../img/entities/obiwan.jpeg"
import owen from "../img/entities/owen.jpeg"
import r2d2 from "../img/entities/r2d2.jpeg"
import r5d4 from "../img/entities/r5d4.jpeg"
import tatooine from "../img/entities/tatooine.jpeg"
import alderaan from "../img/entities/alderaan.jpeg"
import yavin from "../img/entities/yavin.jpeg"
import hoth from "../img/entities/hoth.jpeg"
import dagobah from "../img/entities/dagobah.jpeg"
import bespin from "../img/entities/bespin.jpeg"
import endor from "../img/entities/endor.jpeg"
import naboo from "../img/entities/naboo.jpeg"
import coruscant from "../img/entities/coruscant.jpeg"
import kamino from "../img/entities/kamino.jpeg"
import sandcrawler from "../img/entities/sandcrawler.jpeg"
import landspeeder from "../img/entities/landspeeder.jpeg"
import skyhopper from "../img/entities/skyhopper.jpg"
import starfighter from "../img/entities/starfighter.jpeg"
import snowspeeder from "../img/entities/snowspeeder.jpeg"
import atat from "../img/entities/atat.jpeg"
import atst from "../img/entities/atst.jpeg"
import cloud from "../img/entities/cloud.jpeg"
import sail from "../img/entities/sail.jpeg"
import bomber from "../img/entities/bomber.jpeg"
import background from "../img/background.gif"


export const images = {
    "Luke Skywalker": luke,
    "C-3PO": c3po,
    "R2-D2": r2d2,
    "Darth Vader": darth,
    "Leia Organa": leia,
    "Owen Lars": owen,
    "Beru Whitesun lars": beru,
    "R5-D4": r5d4,
    "Biggs Darklighter": biggs,
    "Obi-Wan Kenobi": obiwan,
    "Tatooine": tatooine,
    "Alderaan": alderaan,
    "Yavin IV": yavin,
    "Hoth": hoth,
    "Dagobah": dagobah,
    "Bespin": bespin,
    "Endor": endor,
    "Naboo": naboo,
    "Coruscant": coruscant,
    "Kamino": kamino,
    "Sand Crawler": sandcrawler,
    "X-34 landspeeder": landspeeder,
    "T-16 skyhopper": skyhopper,
    "TIE/LN starfighter": starfighter,
    "Snowspeeder": snowspeeder,
    "AT-AT": atat,
    "TIE bomber": bomber,
    "AT-ST": atst,
    "Storm IV Twin-Pod cloud car": cloud,
    "Sail barge": sail,
}

export const getImageFromName = (name) => {
    return images[name]
}
