/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var nIndex = n; //keep track of next point to add after index n
    var numsIndex = 0; //keep track of next point to add after index 0
    var ans = []; 
    for(i = 0; i < n; i++){
        ans[numsIndex] = nums[i];
        ans[numsIndex + 1] = nums[nIndex];
        nIndex++
        numsIndex += 2 //go to index after the 2 added numbers
    }
    return ans
};
