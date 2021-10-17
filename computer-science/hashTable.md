### Hash Table

Uses hash function


### Hash Collision

The solution is chaining. And it is commonly implemented with a linked list

Or it can be done using linear probing


### Load Factor

Number of Items in Hash Table / Total Number of Slots

General rule of thumb is to resize hash table when load factor > 0.7

Rehash all items into the new hash table

### Time Complexity

O(1) on average even with resizing

```py
class HashTableEntry:
    """
    Hash table key/value pair to go in our collision chain
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value

# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

class HashTable:
    """
    A hash table with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table

        self.storage = []
        for _ in range(capacity):   # Initialize with empty lists
            self.storage.append([])

        self.item_count = 0

    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here

    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return len(self.storage)

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """
        str_key = str(key).encode()

        hash = FNV_offset_basis_64

        for b in str_key:
            hash *= FNV_prime_64
            hash ^= b
            hash &= 0xffffffffffffffff  # 64-bit hash

        return hash

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index between within the hash table's storage capacity.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """

        index = self.hash_index(key)
        chain = self.storage[index]
        #check if there is an existing entry
        existing_entry = None
        for current_entry in chain:
            if current_entry.key == key:
                existing_entry = current_entry
                break
        #
    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here

    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here
```
