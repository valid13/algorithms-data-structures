# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/)

# Algorithm

- HashSet-based search algorithm
  - _Time O(n) Memory O(n)_

# Solution

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            Integer num = nums[i];
            if (!set.contains(num))
                set.add(num);
            else
                return true;
        }
        return false;
    }
}
```
