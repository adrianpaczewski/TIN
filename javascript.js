let response_json =
    [
        {
            "name": "Ghost Riot Trail AL Full Party",
            "price": 14989,
            "pictureId": "ghost-riot-trail",
            "categoryId": "MTB-27,5"
        },
        {
            "name": "Orbea Occam H10",
            "price": 15299,
            "pictureId": "orbea-occam",
            "categoryId": "MTB-full"
        },
        {
            "name": "Giant Trance X 3",
            "price": 11699,
            "pictureId": "giant-trance-x-3",
            "categoryId": "MTB-full"
        },
        {
            "name": "Santa Cruz Tallboy 4 CC 29 XX1",
            "price": 40459,
            "pictureId": "santa-cruz-tallboy-4",
            "categoryId": "MTB-29"
        },
        {
            "name": "Ghost Riot Trail AL Essential",
            "price": 10529,
            "pictureId": "ghost-riot-trail-al-essential",
            "categoryId": "MTB-29"
        },
        {
            "name": "Santa Cruz Tallboy 4 AL 29 R-Kit",
            "price": 17099,
            "pictureId": "santa-cruz-tallboy-4-al-29",
            "categoryId": "MTB-29"
        },
        {
            "name": "Kona Process X CR/DL",
            "price": 40499,
            "pictureId": "kona-process-x",
            "categoryId": "MTB-full"
        },
        {
            "name": "Giant Reign Advanced Pro 0",
            "price": 31679,
            "pictureId": "giant-reign-advanced-pro",
            "categoryId": "MTB-29"
        },
        {
            "name": "Cube Access WS EXC",
            "price": 3249,
            "pictureId": "cube-access-ws",
            "categoryId": "MTB-27,5"
        },
        {
            "name": "Kona Cinder Cone",
            "price": 5399,
            "pictureId": "kona-cinder-cone",
            "categoryId": "MTB-27,5"
        },
        {
            "name": "Polygon Siskiu D7",
            "price": 8099,
            "pictureId": "polygon-siskiu-d7",
            "categoryId": "MTB-full"
        },
        {
            "name": "Votec VRX",
            "price": 8999,
            "pictureId": "votec-vrx-heritage",
            "categoryId": "gravel"
        },
        {
            "name": "Lapierre eSensium 5.2",
            "price": 11749,
            "pictureId": "lapierre-e-sensium-52",
            "categoryId": "gravel"
        },
        {
            "name": "Giant Contend AR 2",
            "price": 5629,
            "pictureId": "giant-contend-ar-2",
            "categoryId": "road"
        },
        {
            "name": "Cube Attain Race",
            "price": 5499,
            "pictureId": "cube-attain-race",
            "categoryId": "road"
        },
        {
            "name": "Kona Rove",
            "price": 6749,
            "pictureId": "kona-rove-dragonfly",
            "categoryId": "gravel"
        },
        {
            "name": "Bianchi Sprint 105",
            "price": 8999,
            "pictureId": "bianchi-sprint-105",
            "categoryId": "road"
        },
        {
            "name": "Cube Cross Race Pro",
            "price": 7999,
            "pictureId": "cube-cross-race-pro",
            "categoryId": "road"
        },
        {
            "name": "Koga Kimera Pro",
            "price": 34199,
            "pictureId": "koga-kimera-pro",
            "categoryId": "gravel"
        },
        {
            "name": "Vermont Brentwood",
            "price": 2159,
            "pictureId": "vermont-brentwood",
            "categoryId": "trekking"
        },
        {
            "name": "Ortler Lindau Trapeze",
            "price": 1669,
            "pictureId": "ortler-lindau-trapeze",
            "categoryId": "trekking"
        },
        {
            "name": "Cube Touring",
            "price": 2609,
            "pictureId": "cube-touring",
            "categoryId": "trekking"
        },
        {
            "name": "Lapierre crosshill 3.0",
            "price": 7199,
            "pictureId": "lapierre-crosshill-30",
            "categoryId": "city"
        },
        {
            "name": "Giant AllTour SLR 2",
            "price": 4499,
            "pictureId": "giant-alltour",
            "categoryId": "city"
        },
        {
            "name": "Kona Sutra SE",
            "price": 7649,
            "pictureId": "kona-sutra",
            "categoryId": "city"
        },
        {
            "name": "Haibike Trekking 9 Trapeze",
            "price": 15799,
            "pictureId": "haibike-trekking-9",
            "categoryId": "city"
        },
        {
            "name": "Cube Kathmandu Hybrid Pro 625",
            "price": 14310,
            "pictureId": "cube-kathmandu-hybrid",
            "categoryId": "city"
        },
        {
            "name": "Vermont Girly 18",
            "price": 535,
            "pictureId": "vermont-girly-18",
            "categoryId": "kids"
        },
        {
            "name": "Serious Superhero 16",
            "price": 715,
            "pictureId": "serious-superhero-16",
            "categoryId": "kids"
        },
        {
            "name": "Serious Rockville Street 24",
            "price": 1349,
            "pictureId": "serious-rockville-street-24",
            "categoryId": "teens"
        },
        {
            "name": "Academy Grade 5",
            "price": 2659,
            "pictureId": "academy-grade-5",
            "categoryId": "teens"
        }
    ];


const best_selling_response =
    [
        {
            "name":"Cube Kathmandu Hybrid Pro 625",
            "price":14310,
            "pictureId":"cube-kathmandu-hybrid",
            "categoryId":"city"
        },
        {
            "name":"Vermont Girly 18",
            "price":535,
            "pictureId":"vermont-girly-18",
            "categoryId":"kids"
        },
        {
            "name":"Serious Superhero 16",
            "price":715,
            "pictureId":"serious-superhero-16",
            "categoryId":"kids"
        },
        {
            "name":"Serious Rockville Street 24",
            "price":1349,
            "pictureId":"serious-rockville-street-24",
            "categoryId":"teens"
        },
        {
            "name":"Academy Grade 5",
            "price":2659,
            "pictureId":"academy-grade-5",
            "categoryId":"teens"
        }
    ];


$(document).ready(function () {
    const navY = $('#menu-list').offset().top;

    const stickyNav = function () {
        const scrollY = $(window).scrollTop();
        if (scrollY > navY) {
            $('#menu-list').addClass('sticky');
        } else {
            $('#menu-list').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });
});

let timer = 0;
let number = 0;

function changePhotoLeft1() {

    number++;
    if (number > 3)
        number = 1;
    document.getElementById("leftDiv").innerHTML = "<img src=\"ad/foto" + number + ".jpg\">";
    $('#leftTwo').fadeIn(1500);
    timer = setTimeout("changePhotoLeft1()", 5000);
}

let number1 = 3;

function changePhotoLeft2() {

    number1++;
    if (number1 > 6)
        number1 = 3;
    document.getElementById("leftDiv1").innerHTML = "<img src=\"ad/foto" + number1 + ".jpg\">";
    $('#leftDiv1').fadeIn(1500);
    timer = setTimeout("changePhotoLeft2()", 5000);

}

let number2 = 6;

function changePhotoLeft3() {

    number2++;
    if (number2 > 9)
        number2 = 6;
    document.getElementById("leftDiv2").innerHTML = "<img src=\"ad/foto" + number2 + ".jpg\">";
    $('#leftDiv2').fadeIn(1500);
    timer = setTimeout("changePhotoLeft3()", 5000);


}

let number3 = 9;

function changePhotoLeft4() {

    number3++;
    if (number3 > 12)
        number3 = 9;
    document.getElementById("leftDiv3").innerHTML = "<img src=\"ad/foto" + number3 + ".jpg\">";
    $('#leftDiv3').fadeIn(1500);
    timer = setTimeout("changePhotoLeft4()", 5000);


}

function add_sort_option(header_content) {

    $(".main-bikes").append(
        "<h1 id=\"header\">" + header_content + "</h1>"
    );

    $(".main-bikes").append(
        "<div class =\"sorting\">" +
        "<label for=\"sort\">Sortowanie:</label>" +
        "<select name=\"sort\" id=\"sort\">" +
        "<option value=\"all\">Domyślne</option>" +
        "<option value=\"price_desc\">Cena malejąco</option>" +
        "<option value=\"price_asc\">Cena rosnąco</option>" +
        "<option value=\"name_desc\">Alfabetycznie A-Z</option>" +
        "<option value=\"name_asc\">Alfabetycznie Z-A</option>" +
        "</select>" +
        "<button id=\"button\" onClick=\"sort()\">Sortuj</button>" +
        "</div>"
    );
}


function loadBestSelling() {
    for (const bike of best_selling_response) {

        $('.rightMain').append(
            "<div class=\"sideBike\"><a href=\"#\"><img src=\"bikes/" + bike.pictureId + ".jpg\"></a><a href=\"#\" class=\"link\"></a>" +
            "<p class=\"product-info\">" + bike.name + "</p>" +
            "<p class=\"product-price\">" + bike.price + "PLN</p>" +
            "</div>");

    }
}

let cached_list = [];

function loadAllBikes() {
    cached_list = [...response_json];
    for (const bike of response_json) {
        $(".main-bikes").append(
            "<div class=\"mainBike\"><a href=\"#\"><img src=\"bikes/" + bike.pictureId + ".jpg\"></a><a href=\"#\" class=\"link\"></a>" +
            "<p class=\"product-info\">" + bike.name + "</p>" +
            "<p class=\"product-price\">" + bike.price + "PLN</p>" +
            "</div>"
        );
    }
}

function loadBikesByCategoryId(category, name) {

   add_sort_option(name)

    cached_list.length = 0;
   if (category === "all-bikes") {
       loadAllBikes()
   }
    else {
       console.log(response_json)
       for (const bike of response_json) {
           if (bike.categoryId === category) {
               cached_list.push(bike)
               $(".main-bikes").append(
                   "<div class=\"mainBike\"><a href=\"#\"><img src=\"bikes/" + bike.pictureId + ".jpg\"></a><a href=\"#\" class=\"link\"></a>" +
                   "<p class=\"product-info\">" + bike.name + "</p>" +
                   "<p class=\"product-price\">" + bike.price + "PLN</p>" +
                   "</div>"
               );
           }
       }
   }
}

$(".sub-menu2").click(function () {
    $(".main-bikes").empty();
    let category = $(this).attr("id")
    let name = $(this).parent().attr("id")
    loadBikesByCategoryId(category, name)
});


function sort() {
    let sort_type = document.getElementById("sort").value

    let bikes;

    switch (sort_type) {
        case "name_desc":
            bikes = cached_list.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            });
            break;
        case "name_asc":
            bikes = cached_list.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            });
            break;
        case "price_desc":
            bikes = cached_list.sort(function(a, b){
                return a.price - b.price;
            });
            break;
        case "price_asc":
            bikes = cached_list.sort(function(a, b){
                return b.price - a.price;
            });
            break;
        default:
            bikes = cached_list;
    }

    drawBikesList(bikes);

}

function drawBikesList(bikes) {

    let header_content = document.getElementById("header").textContent;

    $(".main-bikes").empty();

    add_sort_option(header_content);

    for (const bike of bikes) {
        $(".main-bikes").append(
            "<div class=\"mainBike\"><a href=\"#\"><img src=\"bikes/" + bike.pictureId + ".jpg\"></a><a href=\"#\" class=\"link\"></a>" +
            "<p class=\"product-info\">" + bike.name + "</p>" +
            "<p class=\"product-price\">" + bike.price + "PLN</p>" +
            "</div>"
        );
    }
}


changePhotoLeft1();
changePhotoLeft2();
changePhotoLeft3();
changePhotoLeft4();
loadAllBikes();
loadBestSelling();
