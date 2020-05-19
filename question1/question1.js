// Dublicated Array
let array = [10, 5, 7, 5, 120, 3, 3, 8, 1];

// find duplicates
const duplicates = (arr) => {

    //array sort
    let sortedArr = arr.slice().sort();

    let final = [];

    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] == sortedArr[i]) {
            final.push(sortedArr[i]);
        }
    }

    return final;

}

console.log(duplicates(array));

