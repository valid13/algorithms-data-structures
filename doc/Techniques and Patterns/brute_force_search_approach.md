# Definition

The Brute-Force Search is a straightforward and simple approach that involves checking every possible option or combination to find a solution. It systematically explores all candidates for a solution until the desired result is found.

# Problem It Solves

It is typically used to solve problems where an exhaustive search is feasible or when simpler methods do not apply. While not always efficient, it guarantees finding a solution if one exists.

# Steps

1. Iterate Over All Elements: Loop through each element in the dataset.
2. Check Condition: For each element, check if it meets the specified condition (e.g., equals a target value).
3. Return Result: If a match is found, return true; if the loop ends without finding a match, return false.

```java
class Solution {
    public boolean bruteforceSearch(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            if (nums[i] == target)
                return true;
        }
        return false;
    }
}
```

# Complexity

## Time Complexity

O(n)

## Space Complexity

O(1)

# Applicable Data Structures

- Arrays: The brute-force approach is often applied to arrays for searching values.
- Strings: Can also be used for searching characters or substrings within strings.

# Common use case

- Simple Search Problems: Useful for problems that require a simple check for existence without additional constraints.
- Small Datasets: Effective when the dataset is small and a more complex solution would be unnecessary.
- Unsorted Data: Works well when the data is unsorted, as no pre-processing (like sorting) is needed.
