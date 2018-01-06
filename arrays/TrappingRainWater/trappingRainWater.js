/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let trapped = 0;
  let bottom = 0;
  const stack = [];

  height.forEach((h, i) => {
    if (stack.length === 0 || h < stack[stack.length - 1].h) {
      bottom = h;
      stack.push({ h, i });
    } else if (h > stack[stack.length - 1].h) {
      bottom = stack.pop().h;
      while (stack.length && stack[stack.length - 1].h <= h) {
        let popped = stack.pop();
        trapped += (popped.h - bottom) * (i - popped.i - 1);
        bottom = popped.h;
      }
      if (stack.length) {
        trapped += (h - bottom) * (i - stack[stack.length - 1].i - 1);
      }
      stack.push({ h, i });
    } else {
      stack.pop();
      stack.push({ h, i });
    }
  });

  return trapped;
};
/* 
better solution 
var trap = function(height) {
    var left = 0;
    var right = height.length - 1;
    var ans = 0;
    var left_max = 0;
    var right_max = 0;
    while (left < right) {
      if (height[left] < height[right]) {
        height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
        left++;
      }
      else {
        height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
        right--;
      }
    }
    return ans;
};
*/
