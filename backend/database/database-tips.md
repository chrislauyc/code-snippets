Have descriptive names for tables
Give them unique names that appears once in the db
    - don't have a column called "id" in multiple tables
    - use "user_id" or "customer_id"
Hold a single values
    - for example, hieght and weight
Don'ts
    - duplicate columns
    - multi-part columns
    - multi-valued columns
    - non public key columns
        - columns that depend on other columns for their info
        - for example empId | empName | bossName | bossEmail
        - what if you have a new boss?