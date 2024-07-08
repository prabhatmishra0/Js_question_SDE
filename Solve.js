
(function () {
    var a = (b = 5);
})();

//console.log(a);
//console.log(b);

// a has it's scope within function, so a cannot be accessed outside the function and output
// is Reference Error. b is has a global scope it output is 5 👆👆

// make a unique array out of the above array (don't be use iterative method like filter , ruduce e.t.c.)
// eg => arr = [1,2,4,5,6,8,9]

const arr = [1,2,2,1,4,5,6,8,8,4,9]

// we using set 

const newarr = [...new Set(arr)]
console.log(newarr);