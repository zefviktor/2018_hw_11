
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {
    var map;
    // В переменной map создаем объект карты GoogleMaps
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства

        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 55.760186, lng: 37.618711},

        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 18,

        // Добавляем свои стили для отображения карты
        styles: [
            {
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": 50
                    },
                    {
                        "gamma": 0
                    },
                    {
                        "hue": "#50a5d1"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "weight": 0.5
                    },
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "gamma": 1
                    },
                    {
                        "saturation": 50
                    }
                ]
            }
        ]
    });
}

window.onload = function(e){
    var itemLeft = document.querySelectorAll('.item-timeline__content:nth-child(2n) div');
    var itemRight = document.querySelectorAll('.item-timeline__content:nth-child(2n+1) div');


    for( var i = 0; i < itemLeft.length; i++){
        itemLeft[i].classList.add('item-timeline__content-arrow-left')
    }
    for( var i = 0; i < itemRight.length; i++){
        itemRight[i].classList.add('item-timeline__content-arrow-right')
    }
};






jQuery(document).ready(function($) {

    // init Masonry after all images have loaded
    $('.posts-gride').masonry({
        // options
        itemSelector: '.post-item',
        columnWidth: 380,
        isFitWidth: true
    });


    // init Masonry after all images have loaded
    $('.elements-gride').masonry({
        // options
        itemSelector: '.element-item',
        columnWidth: 399,
        isFitWidth: true
    });
});

// $(document).ready(function(){
//     $("body,html").on("click","a", function (event) {
//         //отменяем стандартную обработку нажатия по ссылке
//         event.preventDefault();
//
//         //забираем идентификатор бока с атрибута href
//         var id  = $(this).attr('href'),
//
//             //узнаем высоту от начала страницы до блока на который ссылается якорь
//             top = $(id).offset().top;
//
//         //анимируем переход на расстояние - top за 1500 мс
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });