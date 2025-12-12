let a = [1,2,2,3,4,5,5,6];
let b = [];

for(let i=0; i<a.length; i++){
    if(b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }
}

console.log(b);
