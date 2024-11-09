//Етап1
var array = [-2, 4, 6, -1, -3, 2, -5];
//Етап2
function Subarray(n) {
    var current_sum = n[0];
    var max_sum = n[0];
    var first_number = 0;
    var last_number = 0;
    var temp_number = 0;
//Етап 3
    for (var i = 1; i < n.length; i++) {
        if (n[i] > current_sum + n[i]) {
            current_sum = n[i];
            temp_number = i;
        }
        else {
            current_sum += n[i];
        }
        if (current_sum > max_sum) {
            max_sum = current_sum;
            first_number = temp_number;
            last_number = i;
        }
    }
    return n.slice(first_number, last_number + 1);
}
//Етап4
var Max_Subarray = Subarray(array);
console.log("Підмасив, сума елементів якого максимальна:", Max_Subarray);