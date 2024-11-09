const arr1 = [1, 2, 5, 2, 7];
const arr2 = [2, 3, 9];
function Minus(arr1, arr2) {
    arr2.forEach(pineapple => {
        const index = arr1.indexOf(pineapple);
        if (index !== -1) {
            arr1.splice(index, 1);
        }
    });
    return arr1;
}
console.log(Minus(arr1, arr2));