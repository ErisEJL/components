import { obj,combine,att } from './obj.mjs';

const color =(h,s,l,a)=> `hsla(${h},${s}%,${l}%,${a})`

const grid = n => obj({display:"grid"})({"grid-area":n});
const flex = obj({display:"flex"});
const center = obj({"align-items":"center","justify-content":"center"});
const full = obj({"width":"100%",height:"100%"});
const top = obj({"grid-row":'1/2'});
const mid = obj({"grid-row":'2/3'});
const bottom = obj({"grid-row":"3/4"});
const background = {
    image:(url,size)=>obj({"background-image":`url(${url})`})({"background-size":size})(),
    color:(...args)=>obj({"background-color":color(...args)})()
}


const body = {
    default:(o)=>obj(grid(`10vh 80vh 10vh /50px 1fr 50px`)(center())({height:"100vh",width:"100vw",margin:"0"})(o))()
};
