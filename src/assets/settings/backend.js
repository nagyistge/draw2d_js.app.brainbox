// This configuration file will be overridden if the application
// is provided by a node.js server. In this case we store all
// circuits and shapes on the local node.js server instead of
// using the global available repository.
// Check the special route in the ./server/main.js for this.
//
// This is useful if you want run the DigitalTrainingStudio local on
// RaspberryPi or another IoT device
//
//
var conf={
    fileSuffix : ".circuit",
    backend: {
        oauth     : "http://draw2d.org/backend/oauth2.php",
        isLoggedIn: "http://draw2d.org/backend/isLoggedIn.php",
        file:{
            list : "http://draw2d.org/backend/file_list.php",
            get  : "http://draw2d.org/backend/file_get.php",
            save : "http://draw2d.org/backend/file_save.php"
        }
    },
    shapesUrl : "http://freegroup.github.io/draw2d_js.shapes/assets/shapes/"
};
