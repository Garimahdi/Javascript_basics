let obyek = {
    a:20,
    b:37,
    c:28
};
console.log(obyek);
obyek['a'] = 22;
console.log(obyek);

//Liat key dr obyek
console.log(Object.keys(obyek));
// Liat value dr obyek
console.log(Object.values(obyek));

let list1 = [1,10,2,3,5,8,13];
console.log(list1);

//Ngubah isi array
list1[list1.length - 1] = 21;
console.log(list1);

// akses satu-satu isi array pake forEach
list1.forEach(((value,index) => {
    console.log('Ini index: ',index);
    console.log('Ini nilai: ',value);
}))

// atau bs jg gini
list1.forEach(function(value,index){
    console.log('Index',index);
    console.log('Nilai',value);
})

//Nyari index dr nilai
let nyariIndex = list1.findIndex(function(value){
    return value == 3;
    }
)
console.log('index 2',nyariIndex);

// Mencari sum dr array
let total123 = list1.reduce(function(aggr,current){
    aggr += current
    return aggr;
},0
);
console.log(total123);