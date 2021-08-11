Data Definition Language (DDL): used to modify database objects. Some examples are: CREATE TABLE, ALTER TABLE, and DROP TABLE.

Data Manipulation Language (DML): used to manipulate the data stored in the database. Some examples are: INSERT, UPDATE, and DELETE.

Data Query Language (DQL): used to ask questions about the data stored in the database. The most commonly used SQL command is SELECT, and it falls in this category.

Data Control Language (DCL): used to manage database security and user's access to data. These commands fall into the realm of Database Administrators. Some examples are GRANT and REVOKE.

Transaction Control Commands: used for managing groups of statements that must execute as a unit or not execute at all. Examples are COMMIT and ROLLBACK.

Query

```sql
select <selection> from <table name>;

select * from employees;

select first_name, last_name, salary from employees;
```


Insert


```sql
insert into <table name> (<selection>) values (<values>)

insert into Customers (Country, CustomerName, ContactName, Address, City, PostalCode)

values ('USA', 'Lambda School', 'Austen Allred', '1 Lambda Court', 'Provo', '84601')
``` 

Modify

```sql
update <table name> set <field> = <value> where <condition>;

delete from <table name> where <condition>;
```

Where

```sql
select City, CustomerName, ContactName
from Customers
where City = 'Berlin'

select City, CustomerName, ContactName
from Customers
where Country = 'France' and City = 'Paris'

select * from employees where salary >= 50000
```

Order By

```sql
-- sorts the results first by salary in descending order, then by the last name in ascending order
select * from employees order by salary desc, last_name;

--In this case, the results are sorted by the department in ascending order first and then by salary in descending order. The numbers refer to the fields' position in the selection portion of the query, so 1 would be name, 2 would be salary, and so on.
select name, salary, department from employees order by 3, 2 desc;

select * from employees where salary > 50000 order by last_name;
```
Limit

```sql
select * from products
limit 10

--LIMIT clauses are often used in conjunction with ORDER BY. The following shows us the five cheapest products:
select * from products
order by price desc
limit 5
```

Insert
```sql
--All non-null fields must be listed out in the same order as their values. Some fields, like ids and timestamps, may be auto-generated and do not need to be included in an INSERT statement.

-- we can add fields in any order; the values need to be in the same ordinal position
-- the id will be assigned automatically
  insert into Customers (Country, CustomerName, ContactName, Address, City, PostalCode)
  values ('USA', 'Lambda School', 'Austen Allred', '1 Lambda Court', 'Provo', '84601');
```

Update

```sql
update Customers
set City = 'Silicon Valley', Country = 'USA'
where CustomerName = 'Lambda School'
```

Remove

```sql
delete from Customers
where CustomerName = 'Lambda School`;
```