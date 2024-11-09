//Етап1
var number1 = "347572378383895738475";
var number2 = "2037572875782347857345782754725454455";
function LargeNumbers(number1, number2) {
    var array1 = number1.split('').map(Number);
    var array2 = number2.split('').map(Number);
//Етап2
    var longest = Math.max(array1.length, array2.length);
    while (array1.length < longest) array1.unshift(0);
    while (array2.length < longest) array2.unshift(0);
//Етап3
    var left = 0;
    var result = [];
//Етап4
    for (var i = longest - 1; i >= 0; i--) {
        var sum = array1[i] + array2[i] + left;
        result.unshift(sum % 10);
        left = Math.floor(sum / 10);
    }
    if (left > 0) result.unshift(left);
    return result.join('');
}
console.log("Перше число:", number1);
console.log("Друге число:", number2);
console.log("Їх сума:", LargeNumbers(number1, number2));