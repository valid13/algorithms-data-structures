# Definition

The Hash-Based Search Algorithm utilizes a hash table (or hash map) to quickly determine the existence of an element within a dataset. By mapping keys to values, it allows for average-case constant time complexity for search operations.

# Problem It Solves

Efficiently checks for the existence of an element (or retrieves values associated with keys) in a collection, achieving faster lookups compared to linear search methods.

# Steps

1. Create a Hash Table: Initialize an empty hash table (or dictionary) to store the elements.
2. Insert Elements: For each element in the dataset, insert it into the hash table.
3. Search for Element: To check if an element exists, compute its hash and look it up in the hash table.

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

# Complexity

## Time Complexity

O(1)

## Space Complexity

O(n)

# Applicable Data Structures

- Hash Tables/Hash Maps: The algorithm is directly based on the use of hash tables for storing and retrieving key-value pairs.
- Sets: Similar logic can be applied when using sets, which internally also use hash tables.
