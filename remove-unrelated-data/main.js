function removeUnrelated(object, key){
    let obj = object;
    delete obj[key];
    
    return obj;
}

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'address'));
console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'));
console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'));
