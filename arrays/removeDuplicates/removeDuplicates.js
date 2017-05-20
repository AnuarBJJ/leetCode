// my solution
/*
var removeDuplicates = function(nums) {
    var slow = 0;
    var fast = 0;
    while(fast<nums.length){
        fast ++;
        console.log("Comparison of " + nums[fast] + " and " + nums[slow] + " produces " + (nums[fast] === nums[slow]))
        while(nums[fast] === nums[slow]){
            fast ++;
        }
        slow ++;
        if(nums[fast] !== undefined){
          var temp = nums[fast];
          nums[fast] = nums[slow];
          nums[slow] = temp;
        }
    }
    while(nums.length > slow){
        nums.pop();
    }

    return nums.length;
};
*/
// better solution

const removeDuplicates = function(nums) {
  let runner = 1;
  for(let i =1; i<nums.length; i++){
    if(nums[i] !== nums[i-1]){
      nums[runner] = nums[i];
      runner ++;
    }
  }
  while(nums.length > slow){
    nums.pop();
  }

  return nums.length;
};
