
(function () {
    var a = (b = 5);
})();

//console.log(a);
//console.log(b);

// a has it's scope within function, so a cannot be accessed outside the function and output
// is Reference Error. b is has a global scope it output is 5 👆👆

// make a unique array out of the above array (don't be use iterative method like filter , ruduce e.t.c.)
// eg => arr = [1,2,4,5,6,8,9]

var arr = [1,2,2,1,4,5,6,8,8,4,9]

// we using set 

// const newarr = [...new Set(arr)]
// const newarr = new Set(arr);
// console.log(newarr);

// guess the output of this question 

// var arr = [1,2,3,4,5,6];
// // console.log(arr[arr.length-1]++);
// console.log(arr[arr.length-1]++);
// console.log(arr.length);


let x = 10;

{
    let x = 20;
    {
        //console.log(x);
        let x = 30;
        console.log(x)
    }
}

console.log(x)



