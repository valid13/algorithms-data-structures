# Description

Greedy is an approach where the solution is constructed step by step, making the locally optimal choice at each step with the hope that these local solutions will lead to a globally optimal solution. Greedy algorithms are typically used for optimization problems where the goal is to find the best solution according to some criteria.

Key Features of Greedy Algorithms:

- Locally Optimal Choice: At each step, the algorithm makes the best choice that looks optimal at that moment.
- Irrevocable Decision: Once a choice is made, it is final and cannot be changed later.
- Efficiency: Greedy algorithms are usually faster because they make decisions without considering future consequences, but they do not always produce the optimal solution for every problem.

Greedy algorithms work well when the problem exhibits the greedy choice property, meaning a locally optimal choice leads to a globally optimal solution. They are also effective when the problem has an optimal substructure, where an optimal solution can be constructed from optimal solutions to its subproblems.

# Example

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
