function findMaxConsecutiveOnes(nums: number[]): number {
  let maxConsOnes = 0;
  let currentConsOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) currentConsOnes++;
    else {
      if (currentConsOnes > maxConsOnes) {
        maxConsOnes = currentConsOnes;
      }
      currentConsOnes = 0;
    }

    if (currentConsOnes > maxConsOnes) {
      maxConsOnes = currentConsOnes;
    }
  }

  return maxConsOnes;
}

let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));

nums = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0];
console.log(findMaxConsecutiveOnes(nums));
