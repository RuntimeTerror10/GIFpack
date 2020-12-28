function clearDOM(){
    var container = document.querySelector(".main-container");
    container.innerHTML="";
    }
    var btn = document.querySelector(".search-btn");
    
     btn.addEventListener('click',function(){
        var input = document.querySelector(".input-box").value;
        clearDOM()
        getGif(input);
     });
     var enterEvent = document.querySelector(".user-input");
    
     enterEvent.addEventListener('keyup',function(e){
        var input = document.querySelector(".input-box").value;
    
         if(e.which === 13 ){
             clearDOM();
            getGif(input);
         }
     });
    
    function getGif(query){
    var url="https://api.giphy.com/v1/stickers/search?q="+ query +"&api_key=UYlkF1oPrRG8xHwxCKokJJHxglPEcEoJ";
    // AJAX call//
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load',function(e){
    
        var data = e.target.response;
        console.log(data);
        pushToPage(data);
    });
    
    }
    function pushToPage(data_input){
    var response = JSON.parse(data_input);
    
    var imgurls = response.data;
    imgurls.forEach(function(image){
        var src = image.images.fixed_height.url;
        console.log(src);
    
        var container = document.querySelector(".main-container");
        container.innerHTML += "<a href=\"" + src + "\" download><img src=\"" + src + "\" class=\"container-image\"></a>";
    
    });
    }
