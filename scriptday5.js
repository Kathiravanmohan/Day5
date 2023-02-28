
//1)a)Print odd numbers in an array in anonymous function & IIFE


//IIFE
(function odd(arr){
	var temp=[]
	  for(var i=0;i<arr.length;i++){
	   if(arr[i]%2!=0){
	        temp.push(arr[i]);
	   }
  }
	    console.log(temp);
})([20,40,45,97,89]);

//Anonymous function:
var odd=function(arr){
	var temp=[]
	  for(var i=0;i<arr.length;i++){
	   if(arr[i]%2!=0){
	        temp.push(arr[i]);
	   }
  }
	    return temp;
}	
console.log(odd([1,2,3,5,9]));

//1)c)Sum of all numbers in an array

//Anonymous function:
var add = function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(add([12,89,35627,6528,092]));

//IIFE:
(function add(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
})([12,89,35627,6528,092]);


//1)d)Return all the prime numbers in an array
(function prime(r){
   var temp=[];
    for(var a=2;a<=prime;a++){
        var count=0;
        for(var i=1;i<=a;i++){
            if(a%i==0){
                count++
            }
            
        }
        if(count==2){
                temp.push(a);
            }
    }
    console.log(temp);
})(45);


//3)a)Print odd numbers in an array in arrow function
var arr=[79,26,78,95];
var res=arr.filter((ele)=>ele%2!=0);
console.log(res)


//c)Sum of all numbers in an array in arrow function

var arr=[79,26,78,95];
var res=arr.reduce((a,b)=>a+b,0);
console.log(res)

//d)Return all the prime numbers in an array

 var arr1 = [1,2,3,4,5,6,7,8,9,10,11];
  var res1 = arr1.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0)
      return false;
    }
    return num !== 1;
  });
  console.log(res1);
  


