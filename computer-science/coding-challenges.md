```py
def csShortestWord(input_str):
    shortest = len(input_str)+1
    charCount = 0
    for i,c in enumerate(input_str):
        if (ord(c) >= 65 and ord(c) <= 90) or (ord(c) >= 97 and ord(c) <= 122):
            charCount += 1
        else:
            if charCount > 0: 
                shortest = min(shortest,charCount)
                charCount = 0
    if charCount > 0:
        shortest = min(shortest, charCount)
    return 0 if shortest == len(input_str)+1 else shortest
```


```
You are given the prices of a stock, in the form of an array of integers, prices. Let's say that prices[i] is the price of the stock on the ith day (0-based index). Assuming that you are allowed to buy and sell the stock only once, your task is to find the maximum possible profit (the difference between the buy and sell prices).

Note: You can assume there are no fees associated with buying or selling the stock.

Example

For prices = [6, 3, 1, 2, 5, 4], the output should be buyAndSellStock(prices) = 4.

It would be most profitable to buy the stock on day 2 and sell it on day 4. Thus, the maximum profit is prices[4] - prices[2] = 5 - 1 = 4.

For prices = [8, 5, 3, 1], the output should be buyAndSellStock(prices) = 0.

Since the value of the stock drops each day, there's no way to make a profit from selling it. Hence, the maximum profit is 0.

For prices = [3, 100, 1, 97], the output should be buyAndSellStock(prices) = 97.

It would be most profitable to buy the stock on day 0 and sell it on day 1. Thus, the maximum profit is prices[1] - prices[0] = 100 - 3 = 97.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer prices

Guaranteed constraints:
1 ≤ prices.length ≤ 105,
1 ≤ prices[i] ≤ 106.

[output] integer

The maximum possible profit.

```

```py

def buyAndSellStock(prices):
    if len(prices) == 1:
        return 0
    if len(prices) == 2:
        return max(prices[1] - prices[0],0)
            
    buy = prices[0]
    sell = prices[1]
    lowest = min(buy,sell)
    for i in range(2,len(prices)):
        new_buy = sell
        new_sell = prices[i]
        # print("sell: {}, buy: {}, new_sell: {}, new_buy: {}, profit: {}".format(sell,buy,new_sell,new_buy,sell-buy))

        if new_sell - new_buy > sell - buy:
            if new_buy < buy:
                buy = new_buy
            sell = new_sell
        elif new_sell - buy > sell - buy:
            sell = new_sell
        elif new_sell - lowest > sell - buy:
            sell = new_sell
            buy = lowest
        lowest = min(lowest,prices[i])
    return max(sell - buy,0)
```

```py

# As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:
# Poor: 300-599
# Fair: 600-699
# Good: 700-749
# Excellent: 750-799
# Elite: 800+
# Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.
# For example, if you had this input...
#   [330, 723, 730, 825]
# ...then you should return the following:
# [
#   'Good: 50.00%',
#   'Elite: 25.00%',
#   'Poor: 25.00%'
# ]

```

```py
cat = {
    "Poor":0,
    "Fair":0,
    "Good":0,
    "Excellent":0,
    "Elite":0
}
catOrder = {
    "Poor":0,
    "Fair":1,
    "Good":2,
    "Excellent":3,
    "Elite":4
}
for s in scores:
    if s >= 300 and s <= 599:
        cat["Poor"] += 1
    elif s >= 600 and s <= 699:
        cat["Fair"] += 1
    elif s >= 700 and s <= 749:
        cat["Good"] += 1
    elif s >= 750 and s <= 799:
        cat["Good"] += 1
    elif s >= 800:
        cat["Good"] += 1
def isBigger(cat,first,second):
    if cat[first] > cat[second]:
        return True
    elif cat[first] < cat[second]:
        return False
    else:
        return catOrder[first] > catOrder[second]

ret = []
while len(cat) > 0:
    largest = None
    for c in cat:
        if largest == None:
            largest = c
        else:
            if isBigger(cat,c,largest):
                largest = c
    if cat[largest] > 0:
        ret.append((largest,cat[largest]))
    del cat[largest]
sum = 0
for key,val in ret:
    sum += val
return ["{}: {}".format(key,val/sum*100) for key,val in ret]

```