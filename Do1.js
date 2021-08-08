

// var msg = 'Hello World';
// console.log(msg);
// console.log(msg);


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// function pushFront(arr, val) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         arr[i+1] = arr[i];
//     }
//     arr[0] = val; 
// }
// var myArr = ["smores", "popcorn", "icecream", "milkduds"];
// pushFront(myArr, 6);
// console.log(myArr);

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popFront(arr) {
//     var returnVal = arr[0]; 
//     for (var i = 1; i < arr.length; i++) {
//         arr[i-1] = arr[i];
//     }
//     arr.pop(); 
//     return returnVal;
// }
// var myArr = ["snakes", "lizards", "monkeys", "dinosaurs"];
// var myArr = [5,4,3,2]
// popFront(myArr);
// console.log(myArr);

// Insert At
// function insertAt(arr, val, ind) {
//     for (var i = arr.length - 1; i >= ind; i--) {
//         arr[i+1] = arr[i];
//     }
//     arr[ind] = val;
// }
// var myArr = ["pizza", "hotdogs", "burgers", "fries"];
// insertAt(myArr, 369, 2);
// console.log(myArr);

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr, ind){
//     ind = Math.floor(ind);
//     if (ind >= arr.length || ind < 0) {
//         return null; 
//     }
//     var returnVal = arr[ind]; 
//     for (var i = ind + 1; i < arr.length; i++) {
//         arr[i-1] = arr[i];
//     }
//     arr.pop(); 
//     return returnVal;
// }
// var myArr = ["earth", "wind", "fire", 18, 45, 12];
// removeAt(myArr, 3);
// console.log(myArr);

// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// function swapPairs(arr) {
//     for (var i = 0; i < arr.length - 1; i += 2) {
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// }
// var myArr = ["sun", "moon", "stars", "planet"];
// var myArr = ["sun", "moon", "stars", "galaxy", "solar system", "black hole"];
// var myArr = ["sun", "moon", "stars"];
// swapPairs(myArr);
// console.log(myArr);

// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
function remove(arr) {
    if (arr.length <= 1) { 
        return;
    }
    var lastid = arr[0];
    var nextid = 1; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastid) {
            lastid = arr[i];
            arr[nextid] = arr[i];
            nextid++;
        }
    }
    arr.length = nextid; 
}
var myArr = ["Ashcroft", "Ballew", "Ballew", "Eades", "Stropas", "Stropas"];
remove(myArr);
console.log(myArr);

