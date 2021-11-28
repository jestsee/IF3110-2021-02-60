var soap1 = require("soap");
var url1 = "http://localhost:8080/service/DorayakiService?wsdl";
var args2 = {};

/* WORK */
soap1.createClient(url1, function (err, client) {
  client.getVarians(args2, function (err, result) {
    console.log(result);
  });
});

var soap = require("soap");
var url = "http://localhost:8080/service/RequestService?wsdl";
var args = {};
var args1 = { arg0: "durian", arg1: "12" };

soap.createClient(url, function (err, client) {
  client.getAllRequestStatus(args, function (err, result) {
    console.log(result);
  });
  //   ,
  //     client.addRequest(args1, function (err, result1) {
  //       console.log(result1);
  //     });
});
