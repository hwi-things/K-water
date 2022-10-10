if(jQuery.browser.mobile==true){
    // console.log('mobile');
    location.href="./mobile/"
}
// console.log(location.href);



// fullpage

$(function () {
    $("#fullpage").fullpage({
        navigation: true,
        navigationPosition: "right",
    anchors:['slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5',
    'slide6',
    ],
    });

});



