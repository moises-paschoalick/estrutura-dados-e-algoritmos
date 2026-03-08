// 1570. Dot Product of Two Sparse Vectors
// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/ (precisa da subscrition)


const sumDotProduct = (v1, v2) => {

    let sum = 0
    for(i in v1)
       sum += (v1[i] * v2[i])
    
    return sum;
}

let nums1 = [1,0,0,2,3];
let nums2 = [0,3,0,4,0];

console.log(sumDotProduct(nums1, nums2)); //8

let nums1b = [0,1,0,0,0];
let nums2b = [0,0,0,0,2];

console.log(sumDotProduct(nums1b, nums2b)); //8