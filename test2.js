
function generateCardSequence () {
    while(arrayForMainItems.length <= 7) {
        let indexForItems = Math.round(Math.random() * 7);
        if(!arrayForMainItems.includes(indexForItems)) {
            arrayForMainItems.push(indexForItems);
    }
}
}
generateCardSequence();
// let anotherArr = arrayForMainItems.splice(6,7);


let kek = [[],[],[],[],[],[],[],[]];
let arr = []
// for (let i = 0; arr.length <= 7; i++) {
    //     let trashArr = arrayForMainItems.splice(6, 7);
    //     while(trashArr.length <= 7) {
        //         let indexForItems = Math.round(Math.random() * 7);
        //         if(!trashArr.includes(indexForItems)) {
            //             trashArr.push(indexForItems);
            //         }
            //     } 
            //     console.log('pushedTrash', trashArr)
            //     let bullShitArr = trashArr.splice(6, 7)
            //     arr.push(trashArr.splice(0, 6));
            //     trashArr = [];
            //     console.log('trash', trashArr)
            //     arrayForMainItems = [];
//     generateCardSequence()
//     console.log('forMain', arrayForMainItems)
// }

// console.log('kek', arrayForMainItems);
// let prek = arrayForMainItems.splice(0, 2);
// console.log('pre',arrayForMainItems);

let arrayForMainItems = [];
generateCardSequence();

for (let i = 0; arr.length <= 7; i++) {
    generateCardSequence();
    let lastIndex
    arrayForMainItems.splice(0, 6);
    while(arrayForMainItems.length < 6) {
        let indexForItems = Math.round(Math.random() * 7);
        if(!arrayForMainItems.includes(indexForItems)) {
            arrayForMainItems.push(indexForItems);
        }
    }
    lastIndex = arrayForMainItems;
    arr.push(arrayForMainItems); 
    arrayForMainItems = [];
    arrayForMainItems.push(...lastIndex);
}

console.log('arr', arr)



for (let i = 0; arr.length <= 7; i++) {
    // console.log('if', arrayForMainItems)
    // if (!i == 0) {
        // }
        // while(arrayForMainItems.length <= 7) {
            //     let indexForItems = Math.round(Math.random() * 7);
            //     if(!arrayForMainItems.includes(indexForItems)) {
                //         arrayForMainItems.push(indexForItems);
                //     }
                // } 
    generateCardSequence();
    let lastIndex
    arrayForMainItems.splice(0, 6);
    while(arrayForMainItems.length < 6) {
        let indexForItems = Math.round(Math.random() * 7);
        if(!arrayForMainItems.includes(indexForItems)) {
            arrayForMainItems.push(indexForItems);
        }
    }
    lastIndex = arrayForMainItems;
    arr.push(arrayForMainItems); 
    arrayForMainItems = [];
    arrayForMainItems.push(...lastIndex);
}

console.log('arr', arr)
