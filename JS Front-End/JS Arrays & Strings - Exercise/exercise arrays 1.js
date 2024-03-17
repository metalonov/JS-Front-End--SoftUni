function arrayStringDemo(arr, rotations){

    for (let index = 0; index < rotations; index++){
        
        arr.push(arr.shift());
    }

    console.log(arr.join(" "))
    
}
arrayStringDemo([51, 47, 32, 61, 21], 2);