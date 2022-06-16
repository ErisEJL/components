const test = {
            name:"main",
            attributes:{ class:"koe"},
            innerHTML:[{
                name:"div",
                class:"koe",
                content:"Hallo"
            },
            {
                name:"span",
                class:"aap",
                innerHTML:[{
                    name:"p",
                    content:"tata"
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
const element = (obj) => `<${obj.name}>${obj.content}</${obj.name}>`
const stringify = (obj) => `<${obj.name}${getAttributes(obj)}>${obj.innerHTML ? obj.innerHTML.map(x => stringify(x)).join(''):obj.content}</${obj.name}>`
console.log(stringify(test))