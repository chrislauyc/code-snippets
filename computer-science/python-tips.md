types
```python
int()
float()
str()
```


```python
my_string = "Bueller"
repeated = my_string * 3
print(repeated) # BuellerBuellerBueller

my_list = [1, 2, 3]
repeated_list = my_list * 3
print(repeated_list) # [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

format string


To format a string in Python, you use the % operator to format a set of stored variables in a tuple. You also include argument specifiers in your string with special symbols like %s and %d.



For example, let's say you want to insert a name variable inside a string. You would do the following:

```python
name = "Austen"
formatted_string = "Hello, %s!" % name
print(formatted_string) # Hello, Austen!
```

If you have more than one argument specifier, you need to enclose your arguments in a 
tuple:

```python
name = "Austen"
year = 2020
print("Hey %s! It's the year %d." % (name, year))
# Hey Austen! It's the year 2020.
```

Any object that is not a string can also be formatted using the %s operator. The string which returns from the object's repr method will be used in the formatted string.

```python
my_list = [1,2,3]
print("my_list: %s" % my_list)
# my_list: [1, 2, 3]
```

A few of the common argument specifiers are:
```
%s - String (or any object with a string representation)
%d - Integers
%f - Floating point numbers
%.<number of digits>f - Floating point numbers with a fixed amount of digits to the dot's right.
%x/%X - Integers in hexadecimal (lowercase/uppercase)
```



## string methods

The len() method prints out the number of characters in the string.
```py
my_string = "Hello, world!"
print(len(my_string)) # 12
```
The index() method prints out the index of the substring argument's first occurrence.
```py
my_string = "Hello, world!"
print(my_string.index("o"))   # 4
print(my_string.index(", w")) # 5
```
The count() method returns the number of occurrences of the substring argument.
```py
my_string = "Hello, world!"
print(my_string.count("o"))  # 2
print(my_string.count("ll")) # 1
```
To slice a string, you can use this syntax: [start:stop:step]. To reverse the string's order, you can set the step value to be -1.
```py
my_string = "Hello, world!"
print(my_string[3:7])   # lo,
print(my_string[3:7:2]) # l,
print(my_string[::-1])  # !dlrow ,olleH
```
You can convert a string to uppercase or lowercase with the upper() and lower() methods.
```py
my_string = "Hello, world!"
print(my_string.upper()) # HELLO, WORLD!
print(my_string.lower()) # hello, world!
```
You can determine if a string starts with or ends with a specific sequence with the startswith() and endswith() methods.
```py
my_string = "Hello, world!"
print(my_string.startswith("Hello")) # True
print(my_string.endswith("globe!"))  # False
```
The split() method allows you to split up a string into a list. The default separator is any whitespace. You can also specify the separator value with an argument if you want.
```python
my_string = "Hello, world!"
print(my_string.split())    # ['Hello,', 'world!']
print(my_string.split(",")) # ['Hello', ' world!']
print(my_string.split("l")) # ['He', '', 'o, wor', 'd!']
```

## operators

Any time you have an iterable object (like a list), you can check if a specific item exists inside that iterable by using the in operator.
```py
years = [2018, 2019, 2020, 2021]
year = 2020

if year in years:
    print("%s is in the years collection" % year)

# 2020 is in the years collection
```


If we want to determine if two objects are actually the same instance in memory, we use the is operator instead of the value comparison operator ==.
```py
a = [1,2,3]
b = [1,2,3]

print(a == b) # True because a and b have the same value
print(a is b) # False because a and b reference two different list objects

x = [1,2,3]
y = x

print(x == y) # True because x and y have the same value
print(x is y) # True because x and y reference the same list object
```

There is also the not operator, which inverts the boolean that follows it:
```py
print(not False)    # True
print(not (1 == 1)) # False because 1 == 1 is True and then is inverted by not
```


Here is an example of a few different ways you can use a range as the iterable for a for loop.
```py
# Prints 0, 1, 2, 3, 4
for x in range(5):
    print(x):

# Prints 2, 3, 4, 5, 6
for x in range(2, 7):
    print(x)

# Prints 1, 3, 5, 7
for x in range(1, 8, 2):
    print(x)
```
This example shows the simple usage of a while loop to print the same values as the for loops above.
```py
# Prints 0, 1, 2, 3, 4
count = 0
while count < 5:
    print(count)
    count += 1

# Prints 2, 3, 4, 5, 6
count = 2
while count < 7:
    print(count)
    count += 1

# Prints 1, 3, 5, 7
count = 1
while count < 8:
    print(count)
      count += 2
```
You can use a break statement to exit a for loop or a while loop.
```py
# Prints 0, 1, 2, 3, 4
count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break
```
You can also use a continue statement to skip the current block but not exit the loop entirely.
```py
# Prints 1, 3, 5, 7
for x in range(8):
    # if x is even, skip this block and do not print
    if x % 2 == 0:
        continue
    print(x)
```

```py
import math

print(dir(math))
# ['__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc']
```
```py
import somefile.somefunction as something
```

Reverse list
```py
arr[::-1]
```

```py
a = "asdfg"
"-".join([(c*(i+1)).capitalize() for i,c in enumerate(a)])
# 'A-Ss-Ddd-Ffff-Ggggg'
```


```py
for name, number in phonebook.items():
    print("Name: %s, Number: %s" % (name, number))
```
Everything in Python are objects.
All objects in Python have three things:
```
Identity
Type
Value


>>> a = 1
>>> # Identity
... id(a)
4483164816
>>> # Type
... type(a)
<class 'int'>
>>> # Value
... a
1
```


## Mutable Objects

- list
- set
- dict
- byte array
- instances of user-defined classes


*** All variables are storing the references to the objects
*** Python always pass by reference

## Immutable Objects

- Numbers (int, float, complex)
- Strings
- Bytes
- Booleans
- Tuples


```py

```