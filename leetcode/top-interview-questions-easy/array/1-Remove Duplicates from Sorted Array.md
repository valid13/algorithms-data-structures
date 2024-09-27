# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/)

# Algorithm

- using Two Pointers technique
  - _Time O(n) Space O(1)_

# Solution

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        // [1,1,2]
        // [1,2,_]
        int uniqueNumsIndex = 0;
        for (int i = 0; i < nums.length ; i++) {
            if (nums[i] != nums[uniqueNumsIndex]) {
                uniqueNumsIndex++;
                nums[uniqueNumsIndex] = nums[i];
            } // else duplicate
        }
        return uniqueNumsIndex + 1;
    }
}
```
