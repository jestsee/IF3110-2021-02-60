<body>
    <div class="centered">
        <section class="signin-form">
            <link href="css/variantstylesheet.css" rel="stylesheet">
            <h2>Insert New Variant</h2>
            <form action="includes/insertVariant.inc.php" method="post" enctype="multipart/form-data">

                <!-- <input type="text" name="name" placeholder="Nama..." required="required"><br> -->

                <div for="cars">Pilih nama varian:</div>
                <select name="name" id="name">
                    <!-- <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option> -->
                    <?php
                    $client = new SoapClient("http://localhost:8080/service/DorayakiService?wsdl");

                    $response = $client->__soapCall("getVarians", array());
                    $result = get_object_vars($response)['return'];


                    ?>
                    <?php for ($i = 0; $i < sizeof($result); $i++) { ?>
                        <option value="<?php echo get_object_vars($result[$i])['varian']; ?>"><?php echo get_object_vars($result[$i])['varian'];     ?></option>
                    <?php } ?>
                </select>

                <input type="text" name="desc" placeholder="Deskripsi..." required="required"><br>
                <input type="number" name="price" placeholder="Harga..." required="required"><br>
                <input type="number" name="stock" placeholder="Stok..." required="required"><br>
                <label for="fileToUpload">Upload photo</label>
                <input type="file" id="fileToUpload" name="fileToUpload" accept="image/*" required="required"><br><br>
                <!--- TODO: Validasi harga sama stok itu angka, filenya cuma boleh gambar --->
                <button type="submit" name="submit">Add</button>
                <br><br>

                <?php
                // class newVariant {
                //     public function __construct($name, $desc, $price, $stock){
                //         $this->name = $name;
                //         $this->desc = $desc;
                //         $this->price = $price;
                //         $this->stock = $stock;
                //     }
                // }

                // $client = new SoapClient("http://localhost:3000/service/DorayakiService?wsdl");

                // /*Yang mau dikirim*/
                // $newvar = new newVariane(name, desc, price, stock);

                // /*Set param for the request*/
                // $params = array(
                //     "newVariant" => $newvar,
                //     "desription" => "new variant want to be added" 
                // );

                // $response = $client->__soapCall("Function1", array($params));

                // var_dump($response);


                ?>
            </form>

        </section>
    </div>
</body>

<script src="insertVariant.js"></script>
<script>
</script>