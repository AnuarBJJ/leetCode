var rotateHelper = function(arr, a, b){
    let beg = a;
    let end = b;

    while (end > beg){
        const temp = arr[beg];
        arr[beg] = arr[end];
        arr[end] = temp;
        beg ++;
        end --;
    }
};

var rotate = function(nums, k) {

    if(nums.length < 2 || k === 0 ||  (k %= nums.length) === 0 ){
        return;
    }
    k %= nums.length;

    rotateHelper(nums, 0, nums.length-1);

    rotateHelper(nums, 0, k-1);
    rotateHelper(nums, k, nums.length-1);
};
