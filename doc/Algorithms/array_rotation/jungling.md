# Definition

The Juggling Algorithm is used to rotate an array to the left by a given number of positions. Instead of shifting elements one by one, it divides the array into sets based on the greatest common divisor (GCD) of the array's length and the number of rotations. Each set is rotated individually to achieve the final rotated array.

# Problem It Solves

Efficiently rotates an array to the left (or right) by a given number of positions with a time complexity better than naive approaches (shifting elements one by one).

if k is shift and n array size then for right rotation (k = n - k) (eg 2k left rotation on size 6 = 4k (6-2) right rotation )
if k is shift and n array size then for left rotation (k = k)

# Steps

## Left rotation

1. Find GCD of the array length n and the number of positions k to rotate.
2. For each set of elements (number of sets = GCD), perform the rotation:
   - Store the first element of the set in a temporary variable.
   - Move each element of the set one position ahead.
   - Place the first element (stored in the temporary variable) in the correct position at the end of the set.
   - Repeat this process for all sets.

## Right rotation

Same but with k = n - k

```java
class Solution {
    public void rotate(int[] nums, int k) {
        // eg. [1,2,3,4,5,6,7], k = 3
        k = k % nums.length;
        if (k == 0)
            return;
        k = nums.length - k; // for right rotation
        int nbSet = gcd(nums.length, k);
        for (int i = 0; i < nbSet; i++) {
            int temp = nums[i];
            int currIdx = i;

            while(true) {
                int nextIndex = (currIdx + k) % nums.length;
                if (nextIndex == i)
                    break;
                nums[currIdx] = nums[nextIndex];
                currIdx = nextIndex;
            }
            nums[currIdx] = temp;
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

# Complexity

## Time Complexity

O(n), where n is the size of the array. This is because each element is moved at most once.
The number of sets depends on the GCD of n and d, but the overall time complexity remains O(n).

## Space Complexity

O(1), since only a few variables are used.

# Applicable Data Structures

- Arrays: The algorithm is particularly designed to rotate elements in arrays or lists.
- Circular Buffers: This technique can also be adapted for circular buffer implementations.

# Common use case

- Array Rotation: Efficiently rotates elements in arrays (e.g., circular buffers).
- Circular Scheduling: Allocates tasks or resources in a round-robin manner.
- Data Manipulation: Repositions data with minimal overhead (e.g., in games).
- Cyclic Permutations: Generates permutations of a set without excessive memory usage.
