import { obj } from './obj.mjs';
const setAttributes = (o) =>Object.keys(o).map(x => `${x}="${o[x]}"`).join(' ');
const setHtml = (o) =>`<${o.name} ${setAttributes(o.attributes)}>${o.content}</${o.name}>`


const document = {
    html:{
        head:{},
        body:{}
    }
};
["title","meta","links","style"].forEach(x => document.html.head[x] = "");
["header","main","footer","nav","dialog"].forEach(x => document.html.body[x] = '');
document.html.body.header = {
    div:{
        span:"hallo"
    }
}
document.html.body.main = 'JAJA'

const html = (o)=>Object.keys(o).map(x => `<${x}>${typeof o[x] === 'object'? html(o[x]):o[x]}</${x}>`).join(' ')

console.log(html(document.html.body))