// my solution
var twoSum = function(nums, target) {
    let runner = 0;
    while(runner < nums.length){cd ..
        const diff =  target-nums[runner];
        const hasDiff = nums.indexOf(diff);
        console.log(hasDiff)
        if(hasDiff > -1){
            return [runner, nums.indexOf(target-nums[runner]) ]
        }
        runner++
    }
    return 'The array has no solution with the target'
};
