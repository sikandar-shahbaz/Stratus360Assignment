<?php 
//Created Proxy Server because of CORS Errors
if(isset($_GET)){
    if(isset($_GET['id'])){
        $url = 'https://xkcd.com/'.$_GET['id'].'/info.0.json';
    }
    else{
    //The URL with parameters / query string.
    $url = 'https://xkcd.com/info.0.json';
    }

//Once again, we use file_get_contents to GET the URL in question.
$contents = file_get_contents($url);
 
//If $contents is not a boolean FALSE value.
if($contents !== false){
    //Print out the contents.
    echo $contents;
}
}

?>