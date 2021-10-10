# Big O notation

Concerns how the input size grows with number of steps



| Classification | Description |
|---|---|
Constant O(1)	|The runtime is entirely unaffected by the input size. This is the ideal solution.
Logarithmic O(log n)|	As the input size increases, the runtime will grow slightly slower. This is a pretty good solution.
Linear O(n)	|As the input size increases, the runtime will grow at the same rate. This is a pretty good solution.
Polynomial O(n^c)|	As the input size increases, the runtime will grow at a faster rate. This might work for small inputs but is not a scalable solution.
Exponential O(c^n)|	As the input size increases, the runtime will grow at a much faster rate. This solution is inefficient.
Factorial O(n!)|	As the input size increases, the runtime will grow astronomically, even with relatively small inputs. This solution is exceptionally inefficient.


Having a finished product to iterate on is more important than maximally efficient code.


List comprehansion may decrease space complexity
```py
word_lengths = [len(word) for word in words if len(word) > 2]
```