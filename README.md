# How to run
## dorayaki-factory client
* cd backend
```
node server.js
```
* please make sure the database is already exists (cd database)
```
node insert_db.js
node insert_recipe.js
node insert_request.js
```
* please make sure all modules already installed
```
npm -i <nama-module>
```
open separate terminal and then run
```
npm start
```

## dorayaki-supplier
* make sure maven already installed
* Java 15
* install all dependencies <br>
``` 
mvn package 
```
``` 
mvn install
```
```
mvn clean compile assembly:single
```
```
java -jar .\target\demo-1.0-SNAPSHOT-jar-with-dependencies.jar
```
if there's a problem with java -jav, try to go to the directory where App.java exists and then run the java file.

## dorayaki-store
* run php server
``` 
php -S localhost:8000
```
