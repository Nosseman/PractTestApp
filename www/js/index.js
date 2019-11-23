// Juuso Nousiainen, 1751514

// if the user credentials are still in local storage they will be taken to page1 
$(document).on("ready", function () {
    databaseHandler.createDatabase();
    var user = window.localStorage.getItem("user");
    if (user) {
        openPage('page1')
    } 
});

// for registering the user
function addUser() {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();
    if (!username) {
        alert("Username is required");
    } else {
        var r = confirm("Register?" + "\n" + "Username: " + username + "\n" + "Password: ")
        if (r == true) {
            userHandler.addUser(username, password);
            $("txtUsername").val("");
            $("txtPassword").val("");
        }
        closeMenu('registerMenu')
    }
}


// login function
function login() {
    var username = $("#loginUsername").val();
    var password = $("#loginPassword").val();
    var userid = "" + username + password
    if (userHandler.getUser(userid)) {
        // only if userid is found the user is logged in
        openPage('page1')
    }
}

// logout function
function logout() {
    window.localStorage.removeItem("user");
    openPage('index')
}

// function to show the progress circle
function showProgressCr() {
    var config = {
        value: 86,
        subTitle: '% of Credits',
        subTitleColor: 'black',
        subTitleFontFamily: 'Chewy',
        durationAnimate: 3000,
        padding: '3px',
        color: 'black',
        trailColor: 'indigo-800',
        textSize: '30px',
        textFontFamily: 'Chewy',
        textColor: 'black',
        width: '150px',
        strokeWidth: '2',
        trailWidth: '8',
        height: '150px'
    }
    ProgressCircle.create(document.getElementById('progressMyCredits'), config);
}


// not sure if could have done with one function
// but functions for flipping the cards
function flip() {
    $('.card').toggleClass('flipped');
}

function flip2() {
    $('.card2').toggleClass('flipped');
}

function flip3() {
    $('.card3').toggleClass('flipped');
}

function flip4() {
    $('.card4').toggleClass('flipped');
}

function flip5() {
    $('.card5').toggleClass('flipped');
}

function flip6() {
    $('.card6').toggleClass('flipped');
}

function flip7() {
    $('.card7').toggleClass('flipped');
}

function flip8() {
    $('.card8').toggleClass('flipped');
}

function flip9() {
    $('.card9').toggleClass('flipped');
}

function flip10() {
    $('.card10').toggleClass('flipped');
}

function flip11() {
    $('.card11').toggleClass('flipped');
}

function flip12() {
    $('.card12').toggleClass('flipped');
}

function flip13() {
    $('.card13').toggleClass('flipped');
}

// for swiper we need an event listener
document.addEventListener('openPage', function (e) {
    if (e.detail.page == 'contact.html') {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    }
})


// for getting the geolocation
function getLocation() {
    navigator.geolocation.getCurrentPosition
        (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

var onMapSuccess = function (position) {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let center = ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');

    new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map',
        view: new ol.View({
            center: center,
            zoom: 15
        })
    });
}

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
