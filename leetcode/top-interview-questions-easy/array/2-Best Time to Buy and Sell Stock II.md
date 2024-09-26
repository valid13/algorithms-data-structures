# Link

[Leetcode link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/)

# Algorithm

- Greedy algorithm
  - _Time O(n) and Memory O(1)_

# Solution

```java
class Solution {
    public int maxProfit(int[] prices) {
        // [7,1,5,3,6,4]
        int totalProfit = 0;
        for (int i = 0; i < prices.length - 1; i++) {
            int currentPrice = prices[i];
            int nextPrice = prices[i + 1];
            if (nextPrice - currentPrice > 0) {
                totalProfit += nextPrice - currentPrice;
            }

        }
        return totalProfit;
    }
}
```
