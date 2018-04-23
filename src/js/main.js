require.config({
    baseUrl: 'js/app',
    paths: {
        'jquery': "../libs/jquery-2.1.1.min",
        'swiper': '../libs/swiper-4.2.0.min',
        'iscroll': '../libs/iscroll',
        'index': 'index',
        'handlebars':"../libs/handlebars"
   
    }})
require(["index"])

