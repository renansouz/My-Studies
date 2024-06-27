/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
      let width = right - left;
      let currentHeight = Math.min(height[left], height[right]);
      let area = currentHeight * width;
      maxArea = Math.max(maxArea, area);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return maxArea;
};
