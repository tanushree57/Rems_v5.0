/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obta`in a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function ext_load(){
var url = document.getElementById('url').value;
var ref=cordova.InAppBrowser.open(url, '_self', 'location=no');
ref.addEventListener('loadstop', function(event) {
    if (event.url.match("trial")) {
        ref.close();
         window.location="camera.html";
    }
});
}


function side_load(page){
    var ip = window.localStorage.getItem("ip_add");
    var url= "http://"+ip+":8080/rems/"+page;
    var ref=cordova.InAppBrowser.open(url, '_blank', 'location=no,zoom=no');
    ref.addEventListener('loadstop', function(event) {
        if (event.url.match("home")) {
            ref.close();
            window.location="index.html";
        }

         if (event.url.match("camera")) {
                    ref.close();
                    window.location="camera.html";
  }

    });

ref.addEventListener('loadstart', function(event) {

ref.executeScript({file:"js/jquery.js"});

         var sess_id = window.localStorage.getItem("sess_id");
         var ip = window.localStorage.getItem("ip_add");
         var username = window.localStorage.getItem("username");
         var password = window.localStorage.getItem("password");

   $.ajax({
                    type: "POST",
                    url: "http://"+ip+":8080/rems/androids/user_login_process",
                    data: "username="+username+"&password="+password,
                    success: function(html){
                        if(html=='true')    {
                            //$("#add_err").html("right username or password");
                            // window.location="dashboard.php";
                            //alert("logged in")
                        }
                        else    {
                            alert("Connection error");
                        }
                    },

                });
                return false;

});

}