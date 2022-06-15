import { obj,combine,att } from './obj.mjs';


const grid = n => obj({display:"grid"})({"grid-area":n});
const flex = obj({display:"flex"});
const center = obj({"align-items":"center","justify-content":"center"});
const full = obj({"width":"100%",height:"100%"});
const top = obj({"grid-row":'1/2'});
const mid = obj({"grid-row":'2/3'});
const bottom = obj({"grid-row":"3/4"});
const background = {
    image:(url,size)=>obj({"background-image":`url(${url})`})({"background-size":size})(),
    color:(h,s,l,a)=>obj({"background-color":`hsla(${h},${s}%,${l}%,${a})`})()
}


