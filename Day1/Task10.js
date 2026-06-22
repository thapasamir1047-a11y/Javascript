//Merge and destructure objects
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const mergedobj ={...obj1,...obj2};
console.log(mergedobj);
const {a,d} = mergedobj;
console.log(a);
console.log(d);
