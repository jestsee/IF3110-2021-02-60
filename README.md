# Cara jalanin
## dorayaki-factory client
* cd ke backend
```
node server.js
```
* databasenya jangan lupa dibikin dulu (cd ke database)
```
node insert_db.js
node insert_recipe.js
node insert_request.js
```
* kalo bermasalah pas jalanin node/npm nya coba di-install dulu modul2nya
```
npm -i <nama-module>
```
di terminal lain jalanin
```
npm start
```

## dorayaki-supplier
* pastiin punya maven
* maks Java 15 (direkomendasiin Java 15)
* install dependencies (gosah cd kemana2) <br>
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
kalo yang java -jav ga bisa coba cd ke folder dimana App.java berada, terus run file javanya


## dorayaki-store
* jalanin server php kayak biasa, misalnya
``` 
php -S localhost:8000
```
