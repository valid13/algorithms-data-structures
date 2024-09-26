# Definition

The Reversal Algorithm for array rotation is an efficient technique used to rotate an array to the left (or right) by a given number of positions. The idea is to reverse parts of the array to achieve the rotation rather than shifting elements one by one.

# Problem It Solves

Efficiently rotates an array by reversing specific segments of the array. It avoids the costly operation of shifting elements multiple times, resulting in a time-efficient solution.

# Steps

## Right rotation

1. reverse all array
2. reverse first k element
3. reverse n - k remaining element

## Left rotation

1. reverse first k element
2. reverse n - k remaining element
3. reverse all array

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

        System.out.println(Arrays.toString(nums));
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

# Complexity

## Time Complexity

O(n), where n is the size of the array. This is because we are simply reversing sections of the array, and each reversal operation takes O(n) time in total (three linear passes over the array).

## Space Complexity

O(1), since the array is modified in place without using any additional space (except for a few temporary variables).

# Applicable Data Structures

- Arrays: The algorithm is mainly designed for rotating elements in arrays or lists.
- Strings: Can be adapted for strings (if mutable) to rotate characters in the string.
