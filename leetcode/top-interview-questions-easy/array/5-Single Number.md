# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/)

# Algorithm

- XOR-based Algorithm
  - _Time O(n) Space O(1)_

# Solution

## ?

```java
class Solution {
    public int singleNumber(int[] nums) {
        int result = 0;
        for (int i = 0; i < nums.length ; i++) {
            result ^= nums[i];
        }
        return result;
    }
}
```
