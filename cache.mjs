const cache = ((arr)=>(pl)=>{
 setImmediate(()=> arr = []);
    if(typeof pl === 'number'){
        return arr[pl]
    }   else {
        return ()=>cache(arr.push(pl) - 1);
    }
})([]);

const main = cache({name:"koe"})
const div = cache({
    name:"div"
})
const arr = [main,div];
console.log(arr.map(x => x().name));