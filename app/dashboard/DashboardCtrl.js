angular
    .module('MusicSearch')
    .controller('DashboardCtrl', DashboardController);

function DashboardController(getMusic) {

    //variables 
	/* jshint validthis: true */
    var db = this;
    db.name = "";
    db.allMusicItems = "";
    db.allMusicLen = 0;
    db.noResult = "";
    db.selectedName = "";
    db.selectedItemImage = "";

    //album's tracks varibles
    db.albumTracks = "";
   
    //artist's albums variables
    db.artistAlbums = "";

    db.noMore = 0;

    //open popup on service call success
    var typePopup = function(type,e) {
        $('[data-popup="' +  type + '"]').fadeIn(350);        
        $('body').addClass('modal-open');
        e.preventDefault();
    };
    
    //function to open popup window
    db.openPopup = function(itemObj,e){

        $('[data-popup="artist"]').fadeOut(350);        
        $('body').removeClass('modal-open');
        e.preventDefault();

        common.showLoading();
        db.selectedName = itemObj.name;
        if(common.validData(itemObj.images)){ 
           db.selectedItemImage = itemObj.images[0].url;
        }
        //service call
        if(itemObj.type == 'album'){
            //get Album's tracks
            getMusic.getAlbumsTrack(itemObj.id).then(function(data) {
                if(common.validData(data)){
                    common.hideLoading();
                    db.albumTracks = data.items;
                    //typePopup(itemObj.type,e);
                }else{
                    common.hideLoading();
                }
            },
            function() {
                common.hideLoading();
                console.log('Albums tracks retrieval failed.');
            });
        }else{
            //get Artist's albums
            getMusic.getArtistsAlbum(itemObj.id).then(function(data) {
                if(common.validData(data)){
                    common.hideLoading();
                    db.artistAlbums = data.items;
                    //typePopup(itemObj.type,e);
                }else{
                    common.hideLoading();
                }
            },
            function() {
                common.hideLoading();
                console.log('Artists albums retrieval failed.');
            });
        }
        $('[data-popup="' +  itemObj.type + '"]').fadeIn(350);        
        $('body').addClass('modal-open');
        e.preventDefault();
    };

    //function to close popup window
    db.closePopup = function(e,itemType){
        var targeted_popup_class = e.currentTarget.getAttribute('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);        
        $('body').removeClass('modal-open');
        e.preventDefault();
    };

    //fucntion to set logic to wrap search items - set 4 results in 1 column
    db.searchRange = function(n) {
        return new Array(n);
    };

    //show more search results
    db.showMore = function(){

        db.allMusicLen = db.allMusicLen + 3;
        if(db.allMusicLen > db.restricMusicSearchLen){
            db.noMore = 0;
        }
    };

    //function to search music
    db.searchMusic = function(){ 
        common.showLoading();
        
        getMusic.getAllMusic(db.name).then(function(data) {
            if(common.validData(data)){
                if(common.validData(data.albums) && common.validData(data.albums.items) && common.validData(data.albums.items.length)|| (common.validData(data.artists) && common.validData(data.artists.items) && common.validData(data.artists.items.length))){
                    common.hideLoading();
                    db.allMusicItems = data.albums.items.concat(data.artists.items);
                    db.allMusicLen = db.allMusicItems.length;
                    db.allMusicLen =  Math.ceil((db.allMusicLen)/4);
                    db.restricMusicSearchLen = db.allMusicLen;
                    if(db.restricMusicSearchLen > 3){
                        db.noMore = 1;
                        db.allMusicLen = 3;
                    }else{
                        db.noMore = 0;
                    }
                    db.name = "";
                }else{
                    common.hideLoading();
                    db.allMusicItems = "";
                    db.name = "";
                    db.noResult = "No search results";
                }
            }else{
                common.hideLoading();
                db.allMusicItems = "";
                db.name = "";
                alert("No results found.");
            }
        },
        function() {
            common.hideLoading();
            db.name = "";
            console.log('Music retrieval failed.');
        });
    };

}