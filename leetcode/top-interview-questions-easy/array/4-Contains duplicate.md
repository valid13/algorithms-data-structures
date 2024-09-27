# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/)

# Algorithm

- Hash-Based search algorithm
  - _Time O(n) Space O(n)_
- Sorting-Based search algorithm
  - _Time O(n log n) Space O(1)_
- Brute-force search algorithm
  - _Time O(n^2) Space O(1)_

# Solution

## HashSet-based search algorithm

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

## Sorting-Based search algorithm

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1])
                return true;
        }
        return false;
    }
}
```

## Brute force search algorithm

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j])
                    return true;
            }
        }
        return false;
    }
}
```
