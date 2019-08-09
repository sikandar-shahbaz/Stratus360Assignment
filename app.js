//Global instances
const url = './get.php';

comicImage = document.getElementById("comicImage");
titleComponent = document.getElementById("title");
timeComponent = document.getElementById("date");

let params = (new URL(document.location)).searchParams;


/**
 * Gets data from server as page loads
 */
get(url, function(data) {
    resp = JSON.parse(data);
    if(params.get('imageId')){
        getDataFromID()
    }
    else {
        setDataToComponents(data);
    }
    latestComicNum = parseInt(resp.num);
});

/**
 * Sets the data to components
 * 
 * @param {response} resp 
 */
function setDataToComponents(resp) {
    const data = JSON.parse(resp)
    comicImage.src= data.img;
    title.innerHTML= data.title;
    currentComicNum = parseInt(data.num);
    //let createdOn = new Date(data.year, data.month, data.day);
    let createdOn = data.day + "/" + data.month + "/" + data.year;
    date.innerHTML = "<b>Created On: </b>" + createdOn;
}

/**
 * onClick listener for get next image
 */
function getNext() {
    let newInt = currentComicNum + 1;
    if (newInt > latestComicNum) {
        alert('This the latest commic')
    }
    else{
        params.set('imageId',newInt)
        getDataFromID()
    } 
}

 /**
 * onClick listener for get random image
 */
function getRand(){
    let newInt = Math.floor(Math.random() * latestComicNum); 
    params.set('imageId', newInt)
    getDataFromID()
}

/**
 * onClick listener for get previous image
 */
function getPrev() {
    let newInt = currentComicNum - 1;
    if (newInt < 0) {
        alert('This earliest commic')
    }
    else{
        params.set('imageId', newInt)
        getDataFromID()
    } 
}

/**
 * Uses id param from URL and gets data
 */
function getDataFromID() {
    get(getURL(params.get('imageId')),  function(data){
        setDataToComponents(data);
    });
}

/**
 * 
 * @param {string} id 
 * @return {string} irl with id in it
 * 
 */
function getURL(id){
    return url+'?id='+id;
}

/**
 * Makes async call to URL
 */

function get(url, callback) 
{
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var data = xmlhttp.responseText;
                    
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
            console.log(data);
        }
    };
 
    xmlhttp.open("GET",url, true);
    xmlhttp.send();
}