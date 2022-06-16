const ifSingle = el => ['link','meta','input'].includes(el) ? '': `</${el}>`
const test = {
    name:"html",
    innerHTML: [
        {
            name:"head",
            innerHTML:[
                {
                    name:"link",
                    attributes:{
                        rel:"stylesheet",
                        href:"https://koe"
                    }
                }
            ]
        },
        {
            name:"body",
            innerHTML:[{
                name:"header",
                content:"hallo"
            }]
        }
    ]
}



const keys = (obj) => Object.keys(obj);
const objectify = ((res)=>(keys,values)=>{
    keys.forEach((key,i) => res[key] = values[i]);
    return res;
})({});

const getAttributes = ob => ob.attributes ? ` ${keys(ob.attributes).map(x => `${x}="${ob.attributes[x]}"`).join(" ")}`:'';
const getValue = (inc,exc)=>arr=>arr.filter(x =>  exc ? !inc.includes(x):inc.includes(x));
const getContent = getValue(['listeners','style'],true);

const stringify = (obj) => `<${obj.name}${getAttributes(obj)}>${obj.innerHTML ? obj.innerHTML.map(x => stringify(x)).join(''):obj.content||''}${ifSingle(obj.name)}`
console.log(stringify(test))