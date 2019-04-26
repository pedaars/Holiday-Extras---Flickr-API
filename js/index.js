$.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": "boat", "format": "json" }
});

function jsonFlickrFeed(json) {
    console.log(json);
  
    $.each(json.items, function (i, item) {        
        var out = '<div class="col-xs-3 d-flex align-items-stretch">';
        out += '<div class="card flex-container bg-light">';
        out += '<div class="card-img">'
        out += '<img class="lazy card-img" data-src="' + item.media.m + '" alt="">';
        out += '</div>';
        out += '<div class="card-body ">';
        out += '<h6 class="card-title">' + item.title + ' by' + " " + ' <a href="https://www.flickr.com/people/' + item.author_id + ' " class="card-link" target="blank">author</a>' + '</h6>';    
        out += '<p class="card-published">' + item.published + '</p>';
        var str = item.tags;
        var tags = str.split(" ");
        var tagStr = " ";
        $.each(tags, function (i, tag) {
            tagStr = tagStr + " " + tag;
        });
        out += '<p class="card-text">' + tagStr + '</p>';       
        out += '</div>';
        out += '</div>';
        out += '</div>';
        $('#images').append(out);    
    });
    $('.lazy').lazy(); {
        effect: "fadeIn"        
    };
};

function searchTag() {
    var tag = document.getElementById('search-input').value;
    console.log(tag);
    $('#search-input').val('');
        document.getElementById('images').innerHTML = "";        
    $.ajax({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: { "tags": "safe, " + tag, "format": "json" }
    });
}

(function (init) {
    init(window.jQuery, window, document);
}(function ($, window, document) {
        $(function () {
            $(this).scrollTop(0);            
                var input = document.getElementById("search-input");
                input.addEventListener("keyup", function (event) {
                     if (event.keyCode === 13) {
                        event.preventDefault();
                        document.getElementById("srchBtn").click();
                    }
                }); 
        });
}));