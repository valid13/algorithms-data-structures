# Description

The two-pointer technique involves using two pointers to traverse the data structure (usually an array or list) simultaneously. Depending on the problem, the pointers can either move:

- In the same direction: One pointer moving at a slow pace, while the other pointer moves at twice the speed.
- Toward each other: Two pointers, each starting from the beginning and the end until they both meet. For problems like finding pairs in a sorted array that sum to a specific value.

# Example

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
