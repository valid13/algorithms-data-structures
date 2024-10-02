# Definition

Binary Search is an efficient algorithm for finding a target value within a sorted array or list. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, it narrows the search to the lower half; otherwise, it narrows it to the upper half. This process continues until the target value is found or the search interval is empty.

# Steps

## Recursive version

```java
    private int binarySearch(int[] nums, int searchedNum, int start, int end) {
        if (start <= end) {
            int middleIdx = start + (end - start) / 2;
            if (searchedNum == nums[middleIdx])  {
                return middleIdx;
            } else if (searchedNum < nums[middleIdx])  {
                return binarySearch(nums, searchedNum, start, middleIdx - 1);
            } else if (searchedNum > nums[middleIdx])  {
                return binarySearch(nums, searchedNum, middleIdx + 1, end);
            }
        }

        return -1;
    }
```

## Iterative version

```java
    private int binarySearch(int[] nums, int searchedNum) {
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            int num = nums[mid];
            if (searchedNum == num)  {
                return mid;
            } else if (searchedNum < num)  {
                end = mid - 1;
            } else if (searchedNum > num)  {
                start = mid + 1;
            }
        }

        return -1;
    }
```

# Complexity

## Time complexity

Explain the time complexity (Big O notation).

## Space Complexity

Mention the space complexity.

# Applicable Data Structures

List the data structures on which the algorithm works best.

Example: Provide code or a problem solved using this algorithm.

# Common Use Cases

Describe when and why to use this algorithm.
