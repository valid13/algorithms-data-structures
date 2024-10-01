# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/)

1. What if the given array is already sorted? How would you optimize your algorithm?
2. What if nums1's size is small compared to nums2's size? Which algorithm is better?
3. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

# Algorithm

n largest size
m smallest size

- Hash-Based search algorithm (basic solution)
  - _Time O(n + m) Space O(n + m)_
- Sorting-Based search algorithm and Two pointers technique (answer 1)
  - _Time O(n log n + m log m) Space O(n + m)_
- Binary search algorithm (answer 2)
  - _Time O(n log n + m log n) Space O(n + min(n, m)) = n_

# Solution

## Hash-Based search algorithm

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int[] smallestNums = nums1;
        int[] largestNums = nums2;
        if (nums1.length < nums2.length ) {
            smallestNums = nums2;
            largestNums = nums1;
        }
        ArrayList<Integer> resultList = new ArrayList();
        HashMap<Integer, Integer> map = new HashMap();
        for (int i = 0; i < smallestNums.length; i++) {
            int num = smallestNums[i];
            if (map.containsKey( num ) )
                map.put(num, map.get(num) + 1);
            else
                map.put(num, 1);
        }

        for (int j = 0; j < largestNums.length; j++) {
            int num = largestNums[j];
            boolean exist = map.containsKey(num);
            if (exist) {
                int occ = map.get(num);
                if (occ > 0) {
                    resultList.add(num);
                    map.put(num, occ - 1);
                }
            }
        }
        int[] result = new int[resultList.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = resultList.get(i);
        }

        return result;
    }
}
```

## Sorting-Based search algorithm

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int[] smallestNums = nums1;
        int[] largestNums = nums2;
        if ( nums1.length > nums2.length ) {
            smallestNums = nums1;
            largestNums = nums2;
        }
        ArrayList<Integer> resultList = new ArrayList();
        int i = 0;
        int j = 0;
        while (i < smallestNums.length) {
            if (smallestNums[i] == largestNums[j]) {
                resultList.add(smallestNums[i]);
                i++;
                j++;
            } else if (smallestNums[i] < largestNums[j]) {
                i++;
            } else {
                j++;
            }
        }

        int[] result = new int[resultList.size()];
        for (int t = 0; t < result.length; t++) {
            result[t] = resultList.get(t);
        }

        return result;
    }
}
```

## Binary search algorithm

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int[] smallestNums = nums1;
        int[] largestNums = nums2;
        if ( nums1.length > nums2.length ) {
            smallestNums = nums1;
            largestNums = nums2;
        }
        Arrays.sort(largestNums);
        ArrayList<Integer> resultList = new ArrayList();
        HashMap<Integer, Integer> occMap = new HashMap();
        for (int i = 0; i < largestNums.length; i++) {
            int num = largestNums[i];
            if (!occMap.containsKey(num)) {
                occMap.put(num, 1);
            } else {
                occMap.put(num, occMap.get(num) + 1);
            }
        }
        for (int i = 0; i < smallestNums.length; i++) {
            int num = smallestNums[i];
            boolean exist = binarySearch(largestNums, num, 0, largestNums.length - 1);
            if (exist && occMap.get(num) > 0) {
                resultList.add(num);
                occMap.put(num, occMap.get(num) - 1);
            }
        }
        int[] result = new int[resultList.size()];
        for (int t = 0; t < result.length; t++) {
            result[t] = resultList.get(t);
        }

        return result;
    }

    private boolean binarySearch(int[] nums, int searchedNum, int start, int end) {
        System.out.println("Start " + start + " End " + end);
        if (start <= end) {
            int middleIdx = start + (end - start) / 2;
            System.out.println(middleIdx);
            if (searchedNum == nums[middleIdx])  {
                return true;
            } else if (searchedNum < nums[middleIdx])  {
                return binarySearch(nums, searchedNum, start, middleIdx - 1);
            } else if (searchedNum > nums[middleIdx])  {
                return binarySearch(nums, searchedNum, middleIdx + 1, end);
            }
        }

        return false;
    }
}
```
