# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/)

# Algorithm

- Additional memory: using a temp array to write result
  - _Time O(n) Space O(n)_
- Jungling algo
  - _Time O(n) Space O(1)_
- Reversal algorithm
  - _Time O(n) Space O(1)_

# Solution

## Additional memory

```java
class Solution {
    // Additional memory
    public void rotate(int[] nums, int k) {
        // [1,2,3,4,5,6,7], k = 3
        k = k % nums.length; // adjust the shift, no need for 3 shift in array of 2 just 1
        int[] result = new int[nums.length];
        if (k == 0) // no rotation needed
            return;

        for (int i = 0; i < nums.length; i++) {
            int newIndex = (i + k) % nums.length;
            result[newIndex] = nums[i];
        }
        for (int j = 0; j < result.length; j++) {
            nums[j] = result[j];
        }
    }
}
```

## Jungling Algo

```java
class Solution {
    // Jungling algo
    public void rotate(int[] nums, int k) {
        // [1,2,3,4,5,6,7], k = 3
        k = k % nums.length; // adjust the shift with modulo: no need for 3 shift in array of 2 just 1
        if (k == 0) // no rotation needed
            return;
        k = nums.length - k; // to do a right rotation instead of left (eg 2k left rotation on size 6 = 4k (6-2) right rotation )
        int nbSet = gcd(nums.length, k);
        for (int i = 0; i < nbSet; i++) {
            int temp = nums[i]; // Store the initial element of the cycle
            int currIdx = i; // j index of receiving element

            while(true) {
                int nextIndex = (currIdx + k) % nums.length; // Calculate the new index after k shifts
                if (nextIndex == i)
                    break;
                nums[currIdx] = nums[nextIndex];
                currIdx = nextIndex;
            }
            nums[currIdx] = temp; // put the first element of the cycle
        }

    }

    private int gcd(int n, int k) {
        if (k == 0)
            return n;
        else
            return gcd(k, n % k);
    }
}
```

## Reversal algo

```java
class Solution {
    // Reversal algo
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        // [1,2,3,4,5,6,7], k = 3
        k = k % n; // adjust the shift with modulo: no need for 3 shift in array of 2 just 1
        if (k == 0) // no rotation needed
            return;
        // 1/ reverse all array eg: [7,6,5,4,3,2,1]
        nums = reverse(nums, 0, n - 1);
        // 2/ reverse k first element  eg: [5,6,7,| 4,3,2,1]
        nums = reverse(nums, 0, k - 1);
        // 3/ reverse n - k elements left eg: [5,6,7,| 1,2,3,4]
        nums = reverse(nums, k, n - 1);
    }

    private int[] reverse(int[] nums, int start, int end) {
        while(start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
        return nums;
    }
}
```
