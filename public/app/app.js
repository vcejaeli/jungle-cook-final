//GLITCH COMMENT when deploying
//  https://jcfinal-bb049.web.app/
//not sure what happens but when launching the website keeps reloading something and gives me multiple errors...
// it looks fine on the local serve though
// I really did try fixing this issue, very weird. This upsets me beyond belief. Apologies. 
// DevTools failed to load source map: Could not parse content for https://jcfinal-bb049.web.app/firebase-firestore-compat.js.map: Unexpected token < in JSON at position 0

// cant even get the github to you due to the github please tell me who you are error, I'm afraid to mess things up. 
// tried fixing the error, but it's 2am and I give, honeslty forgot this error happened before or else I would've asked.

// in place of the readme
// Obviously, the firebase is connected, I have no idea how it deployed so horribly to where it keeps refreshing or looping or whatever. Everything I did is in public, as it should, all of the pages are responsive and successful to individual extents. I truly busted my butt styling and coding all of this but right now I feel very low from the firebase and github errors. It's somewhat defeating and I only have apologies to give out. 

function route() {
    let hashTag = window.location.hash;
    // console.log("hash tag " + hashTag);
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        // navToPage("home");
        MODEL.getMyVariable("home");

    } else {
        // navToPage(pageID);
        MODEL.getMyVariable(pageID);

    } 
    //use model
    MODEL.getMyVariable(pageID);
}
// end of mvc



function initFirebase() {
    firebase
    .auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("connected");
            // this is pname
            $(".login--hidden").css("display", "block");
        } else {
            console.log("user is not there");
            $(".login--hidden").css("display", "none");
        }
    });
}


function createUser(){
    let password = "password"; //$("password").val();
    let email = "vcejaeli@iu.edu";
    let fName = "Vlad";
    let lName = "Ceja";

    //from firebase
    firebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
}


function login(){
    let password = "password";
    let email = "vcejaeli@iu.edu";
    firebase
    .auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("signed in");
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}


function signOut(){
    firebase
    .auth()
    .signOut()
    .then(() => {
            // Sign-out successful.
            console.log("signed out");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
}


function initListeners() {
    //MVC
    $(window).on("hashchange", route);
    route();

    //login page login button
    $("login").click(function(e){
        e.preventDefault();
        let btnID = e.currentTarget.id;
        // console.log("I am clicked");
        if(btnID == "create"){
            createUser();
        }else if(btnID == "login"){
            login()
        }else if(btnID == "signout"){
            signOut();
        }
    });
}


$(document).ready(function() {
    try {
        let app = firebase.app();
        initFirebase();
        initListeners();
    } catch {
        console.error(e);
    }
});



// ORIGINAL
// function initListeners() {
//     //MVC
//     $(window).on("hashchange", route);
//     route();
// }

// $(document).ready(function() {
//     // navToPage("home");   //og
//     initListeners();        //og
// });
// ORIGNAL




//attempt
// ------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('loginBtn').addEventListener('click', initListeners);
// })

// attempting to target buttons in login
// const loginButton = document.getElementById('loginbtn');
// loginButton.addEventListener('mouseover', test);
// function initListeners() {
//     // MVC 
//     $(window).on("hashchange", route);
//     route();


//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             console.log("user");
//         } else {
//             // User is signed out
//             // ...
//             console.log("logged out");
//         }
//     });
// }

    // Login to Firebase
    // function login() {
    //         let email = $("#liemail").val();
    //         let password = $("#lipw").val();
    //         firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             var user = userCredential.user;
    //             // ...
    //             console.log("login");
    //             $("#liemail").val("");
    //             $("#lipw").val("");
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // }


    //sign up
    // function signUp() {
    //     console.log("signUp");
    //     let fName = $("#fName").val();
    //     let lName = $("#lName").val();
    //     let email = $("#email").val();
    //     let password = $("#pw").val();
    //     firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //         // let fullName = fName + "" + lName;
    //         // updateUser(fullName);

    //         $("#fName").val("");
    //         $("#lName").val("");
    //         $("#email").val("");
    //         $("#pw").val("");
    //         // Signed in
    //         var user = userCredential.user;
    //         // ...
    //         console.log("account created");
    //     })
    //     .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // ..
    //         console.log(errorMessage);
    //     });
    // }



// firebase
// function initFirebase() {
//     firebase
//         .auth()
//         .signInAnonymously()
//         .then(() => {
//             console.log("signed in");
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             _db = [];
//         });
// }


// $(document).ready(function() {
//     try {
//         let app = firebase.app();
//         initFirebase();
        
//     } catch {
//         // console.error(e);            //this broke it for some reason
//     }
//     initListeners();
//     //initListeners og spot
// });
