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
                content:"hallo",
                innerHTML:[{
                    name:"head"
                }]
            }]
        }
    ]
}
const document = {
    body:test,
    
}
const qu =(ob,q)=>  ob.name === q
const query = ((arr)=>(ob,q) => {
    qu(ob,q) ? arr.push(ob):''
    ob.innerHTML?.map(x => query(x,q));
    return arr;
})([]);
