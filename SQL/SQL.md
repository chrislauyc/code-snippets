Data Definition Language (DDL):
```sql
--used to modify database objects. Some examples are: 
CREATE TABLE
ALTER TABLE
DROP TABLE

create table markets(
    id int,
    location text,
    name text
  )

```
 

Data Manipulation Language (DML):
```sql
--used to manipulate the data stored in the database.
INSERT
UPDATE
DELETE
```

Data Query Language (DQL):

```sql
--used to ask questions about the data stored in the database
SELECT
```

Data Control Language (DCL):
```sql
--used to manage database security and user's access to data. These commands fall into the realm of Database Administrators.
GRANT
REVOKE
```

Transaction Control Commands:
```sql
--used for managing groups of statements that must execute as a unit or not execute at all.
COMMIT
ROLLBACK
```

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
Unique and counting

```sql
SELECT COUNT( DISTINCT City)
FROM Customers
```
Length of value

```sql
SELECT * FROM Suppliers
WHERE length(SupplierName)>=20
```

Join
```sql
SELECT Categories.CategoryName
FROM Products
INNER JOIN Categories 
ON Products.CategoryID=Categories.CategoryID
WHERE CategoryName='Confections'
```
Another join example
```sql
select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
from employees as e
join departments as d
  on e.department_id = d.id
order by d.name, e.last_name
```

```
(INNER) JOIN: Returns records that have matching values in both tables

LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table

RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table

FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table
```

How to do multiple joins? This seems to not do the job
```sql
SELECT * FROM Products
INNER JOIN Suppliers
ON Products.SupplierID = Suppliers.SupplierID
INNER JOIN Categories
ON Products.CategoryID = Categories.CategoryID;
```

Other useful Snippets
```sql
select * from shippers
--delete from shippers where shipperid = 4
--update shippers set phone = "whatever", shippername = "hi" where shipperid = 4
--insert into shippers (shippername, phone) values ("Ye Olde Shipping", "(123) 456-7890")
--select
--	prod.categoryid,
--  categoryname,
--    count(prod.categoryid) Total,
--    avg(price) "Average Price"
--from products prod
--join categories cat
--	on prod.categoryid = cat.categoryid
--group by prod.categoryid
--order by "Average Price" desc
--select * from products order by price desc limit 5
--select orderid, customername from orders
--join customers
--on orders.customerid = customers.customerid
--SELECT orderid, shippername FROM Orders ord
--JOIN shippers ship
--ON ord.shipperid = ship.shipperid
--SELECT shipperid AS ID, shippername AS Name, phone AS Phone FROM Shippers
--WHERE shipperid < 2 AND shippername like "Speedy%"
--WHERE shipperid < 2 OR shipperid > 3
--WHERE Name like "%Express%"
--SELECT shipperid AS ID, shippername AS Name, phone AS Phone FROM SHIPPERS
--WHERE ID = 1
```


SELECT
  o.orderid,
  e.firstname || " " || e.lastname "Full Name",
  o.orderdate
from orders as o
left join employees as e

w3school playground
```sql
select
	o.orderid,
  e.firstname || " " || e.lastname "Full Name",
  o.orderdate,
  count(o.orderid) Sales
from employees e
left join orders o
on o.employeeid = e.employeeid
group by e.employeeid
order by sales 
```

```sql
select
	od.orderid,
    p.productname,
    sum(od.quantity) "Total Sold",
    p.unit,
    p.price,
    sum(p.price * od.quantity) Revenue
from orderdetails od
join products p
	on od.productid = p.productid
group by p.productname
```