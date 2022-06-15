import { obj,combine,att } from './obj.mjs';
const setStyle = (o) =>({
    style:Object.keys(o).map(x => `${x}:${o[x]}`).join(';')
})
const color =(h,s,l,a)=> `hsla(${h},${s}%,${l}%,${a})`;
const style = obj(setStyle);
