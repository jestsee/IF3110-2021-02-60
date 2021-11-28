<?php

/* cara aktifin SOAP php
1. cari php.init
2. hapus semicolon buat extension soap
*/

/* WORK */
print_r('getVarians<br>');
$client = new SoapClient("http://localhost:8080/service/DorayakiService?wsdl");

$response = $client->__soapCall("getVarians", array());
$res = get_object_vars(get_object_vars($response)['return'][0])['varian'];
var_dump($res);

/* WORK */
$client1 = new SoapClient("http://localhost:8080/service/RequestService?wsdl");

print_r('<br><br>getAllRequestStatus<br>');
$response1 = $client1->__soapCall("getAllRequestStatus", array());
var_dump($response1);

class Dorayaki
{
    public function __construct($varian, $jumlah)
    {
        $this->varian = $varian;
        $this->jumlah = $jumlah;
    }
}

$params = array(
    'arg0' => 'keju',
    'arg1' => 10
);

$dorayaki = new Dorayaki('keju', 10);

// print_r('<br><br>addRequest<br>');
// var_dump($params);
// $response2 = $client1->__soapCall("addRequest", array($parameters => $params)); // gini cara pass parameternya
// var_dump($response2);

// dah bisa semua : D
