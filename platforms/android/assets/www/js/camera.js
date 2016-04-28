/**
 * Created by Glenn on 01-04-2016.
 */
var imageURI;
lat;
long;


function capturePhoto(){
    navigator.camera.getPicture(successPhoto,failPhoto,{sourceType:1,quality:60,targetWidth:1024,targetHeight:768});
}

//,targetWidth:1024,targetHeight:768
function failPhoto(){
alert("photo failed");
}


function successPhoto(data){
// this is where you would send the image file to server
    //var cameraPic= document.getElementById(cameraPic);
//output image to screen
    cameraPic.src = data;
    //alert(data);
    imageURI = data;
    navigator.geolocation.getCurrentPosition(
        function(position) {

            //alert(position.coords.latitude);
            //alert(position.coords.longitude);
       lat=position.coords.latitude;
       long=position.coords.longitude;

        },
        function() {
            alert('Error getting location');
        });
}


function uploadPhoto(){
//alert(img_uri);
//alert(document.getElementById("desc").value);
var desc=document.getElementById("desc").value;
//document.getElementById("upload").disabled=true;
//document.getElementById("upload").value='Uploading...';
var ip = window.localStorage.getItem("ip_add");
var sess_id = window.localStorage.getItem("sess_id");
var pst_id = window.localStorage.getItem("pst_id");
var project_id = window.localStorage.getItem("project_id");
//document.getElementById("description").innerHTML;

//lat=position.coords.latitude;
//long=position.coords.longitude;
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.emp_id = sess_id;
    params.lat = lat;
    params.long = long;
    params.pst_id = pst_id;
    params.project_id = project_id;
    params.desc = desc;
   // alert(sess_id);
    //alert(long);

    options.params = params;
    options.chunkedMode = false;
    options.headers = {
          Connection: "close"
       };
    ft = new FileTransfer();
    ft.upload(imageURI, "http://"+ip+":8080/rems_android/upload.php", win, fail, options);
}

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    document.getElementById("upload").disabled=false;
    //alert("successful");
    window.plugins.toast.showLongBottom("Successfully Uploaded")
   window.location="index.html";
}

function fail(error) {
    switch(error.code) {
    case 1:
        window.plugins.toast.showLongBottom("FileTransferError.FILE_NOT_FOUND_ERR")
        break;
    case 2:
         window.plugins.toast.showLongBottom("FileTransferError.INVALID_URL_ERR")
        break;
    case 3:
         window.plugins.toast.showLongBottom("FileTransferError.CONNECTION_ERR")
        break;
    case 4:
         window.plugins.toast.showLongBottom("FileTransferError.ABORT_ERR")
        break;
    case 5:
         window.plugins.toast.showLongBottom("FileTransferError.NOT_MODIFIED_ERR")
        break;
    default:
        window.plugins.toast.showLongBottom("Unknown Error Occured")
    }
    alert("An error has occurred: Code = "+ error.code);
    document.getElementById("upload").disabled=false;
}


function cancelPhoto(){
//ft.abort();
window.location="index.html";
}