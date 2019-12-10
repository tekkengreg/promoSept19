# mysql authentication issue
````
use mysql;
CREATE USER 'service'@'localhost'IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
```