// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/


var findNumbers = function(nums)  {

    let num = 0;
    for(i in nums){
       let digits = nums[i].toString().length;
       if(digits % 2 == 0) num++;
    }
    return num;

}

let nums1 = [12,345,2,6,7896];
let nums2 = [555,901,482,1771];

console.log(findNumbers(nums1));
console.log(findNumbers(nums2));