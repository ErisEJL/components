export const combine = (a,b,res={}) =>{
    Object.keys(b).forEach(x => typeof b[x] === 'object' && typeof a[x] === 'object'?  b[x] =  {...a[x],...b[x]}:b[x])
    return {...a,...b};
}
export const obj = fn => (attributes) => add => add ? obj(fn)(combine(attributes,add)) : fn ? fn(attributes):attributes;



export const att = (...keys) => (...values) => {
    let res = {}
    keys.forEach((x,i) => res[x] = values[i]);
    return obj(res) 
};
