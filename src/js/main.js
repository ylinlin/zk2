require.config({
    baseUrl: 'js/app',
    paths: {
        'jquery': "../libs/jquery-2.1.1.min",
        'index': 'index',
        'handlebars':"../libs/handlebars"
   
    }})
require(["index"])

