<!DOCTYPE html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/login.css">

    </head>
    <body>
        <div class="split left">
            <h1></h1>
        </div>
        <div class="split right">
            <div class="centered">
                <h2><b>Register Account</b></h2><br>
                <form action="includes/register.inc.php" method="post">
                    
                    <input type="text" id='email' name='email' placeholder="Email" required>
                    <div id="error-email" class="error-email">Your email is not valid</div>

                    <input type="text" id='username' name='username' placeholder='Username' required>
                    <div id="error-username" class="error-username"></div>
                    <div id="avail-username" class="avail-username">Username is available</div>
                    <!-- keterangannya bisa udah taken atau formatnya ga valid -->

                    <input type="password" id='password' name='password'placeholder='Password' required><br><br>
                    <button type="submit" name="submit">Register</button>
                </form>
            </div>
        </div>
        <script src="includes/register.inc.js"></script>
    </body>
</html>