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


def solution(S):
    # write your code in Python 3.6
    if len(S) == 0:
        return 0
    blocks = []
    current = None
    for s in S:
        if len(blocks) == 0: 
            blocks.append(1)
            current = s
        else:
            if s == current:
                blocks[-1] += 1
            else:
                blocks.append(1)
                current = s
    largest = max(blocks)
    count = 0
    for b in blocks:
        count += largest-b

    return count


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 
// 2D table
// each cell has upper-case letter
// background color and text color set
// concat all strings
// need to skip if color == background color
function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    //
    // please note that element.innerText is not supported,
    // you can use element.textContent instead.
    const table = document.querySelector("tbody");

    return Object.values(table.children).reduce((acc,tr)=>{

        return acc+Object.values(tr.children).reduce((acc,td)=>{
            // console.log(td.style.color,td.style.backgroundColor);
            if(td.style.color !== td.style.backgroundColor){
                return acc+td.textContent;
            }
            return acc;
        },"")
    },"");
}


# A is an array with N integers
# K is an integer
# check if A contains numbers 1,2,...,K at least once and no other number


# can only modify at most 2 lines
def solution(A, K):
    n = len(A)
    for i in range(n - 1):
        if (A[i] + 1 < A[i + 1]):
            return False
    if (n == 0 or A[0] != 1 or A[n - 1] != K):
        return False
    else:
        return True




You are given two integer arrays a and b of the same length.

Let's define the difference between a and b as the sum of absolute differences of corresponding elements:

difference = |a[0] - b[0]| + |a[1] - b[1]| + ... + |a[a.length - 1] - b[b.length - 1]|
You can replace one element of a with any other element of a. Your task is to return the minimum possible difference between a and b that can be achieved by performing at most one such replacement on a. You can also choose to leave the array intact.

Example

For a = [1, 3, 5] and b = [5, 3, 1], the output should be minDiffOfArrays(a, b) = 4.

If we leave the array a intact, the difference is |1 - 5| + |3 - 3| + |5 - 1| = 8;
If we replace a[0] with a[1], we get a = [3, 3, 5] and the difference is |3 - 5| + |3 - 3| + |5 - 1| = 6;
If we replace a[0] with a[2], we get a = [5, 3, 5] and the difference is |5 - 5| + |3 - 3| + |5 - 1| = 4;
If we replace a[1] with a[0], we get a = [1, 1, 5] and the difference is |1 - 5| + |1 - 3| + |5 - 1| = 10;
If we replace a[1] with a[2], we get a = [1, 5, 5] and the difference is |1 - 5| + |5 - 3| + |5 - 1| = 10;
If we replace a[2] with a[0], we get a = [1, 3, 1] and the difference is |1 - 5| + |3 - 3| + |1 - 1| = 4;
If we replace a[2] with a[1], we get a = [1, 3, 3] and the difference is |1 - 5| + |3 - 3| + |3 - 1| = 6;
So the final answer is 4, since it's the minimum possible difference.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer a

The first array of integers.

Guaranteed constraints:
2 ≤ a.length ≤ 105,
-104 ≤ a[i] ≤ 104.

[input] array.integer b

The second array of integers.

Guaranteed constraints:
b.length = a.length,
-104 ≤ b[i] ≤ 104.

[output] integer

The minimum possible difference between a and b after replacing at most one element of a to any element from the same array, or leaving everything intact.




"""
input: s1 and s2

--> maintain the relative order

--> lexico smallest

you can simply compare the two strings in python

i = 0
j = n

indexS1 = [0,1,2,3,4]
indexS2 = [5,6,7,8,9]


for i in range(n-1,-1,-1)
    for j in range(n2)
        if i != n-1 and indexS1[i] < indexS1[i+1]
            if s1[indexS1[i]] > s2[indexS2[j]]
                t = s2[indexS2[j]]
                s2[indexS2[j]] = s1[indexS1[i]]
                s1[indexS1[i]] = t
newString = list(s1)+list(s2)

for i in indexS1
    newString[s1[i]]
for j in indexS2
    newString[s2[j]]
return "".join(newString)
"""

def mergeStrings(s1, s2):
    indexS1 = list(range(0,len(s1)))
    indexS2 = list


    def csReverseIntegerBits(n):
    num = n
    binary = ""
    for exp in range(len(bin(n))-3,-1,-1):
        # print(2**exp,num)
        if 2**exp <= num:
            num -= 2**exp
            binary += "1"
        else:
            binary +="0"
    return int(binary[::-1],2)