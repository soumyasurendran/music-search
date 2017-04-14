angular
    .module('MusicSearch')
    .factory('getMusic', getMusic);

function getMusic($http, $q) { 
	var music = {}; 
	var commonUrl = "https://api.spotify.com/v1/";
	var searchType;
	var musicUrl;

	//get albums and artists result based on search term
	music.getAllMusic = function(keyName) {
    	searchType = "&type=album,artist";
    	musicUrl = commonUrl + 'search?q='+ keyName + searchType;
    	
    	var def = $q.defer();
    	
        $http({
		  method: 'GET',
		  url: musicUrl  , 
		}).then(function successCallback(response) {
		    def.resolve(response.data);
		}, function errorCallback(response) {
		    def.reject("Failed to get music");
		});
		return def.promise;
    }

    //get albums track based on album id
    music.getAlbumsTrack = function(albumId) {

    	//https://api.spotify.com/v1/albums/{id}/tracks
    	musicUrl = commonUrl + 'albums/'+ albumId + '/tracks';
    	
    	var def = $q.defer();
    	
        $http({
		  method: 'GET',
		  url: musicUrl  , 
		}).then(function successCallback(response) {
		    def.resolve(response.data);
		}, function errorCallback(response) {
		    def.reject("Failed to get albums track");
		});
		return def.promise;
    }

     //get albums track based on album id
    music.getArtistsAlbum = function(artistId) {

    	//https://api.spotify.com/v1/artists/{id}/albums
    	musicUrl = commonUrl + 'artists/'+ artistId + '/albums';
    	
    	var def = $q.defer();
    	
        $http({
		  method: 'GET',
		  url: musicUrl  , 
		}).then(function successCallback(response) {
		    def.resolve(response.data);
		}, function errorCallback(response) {
		    def.reject("Failed to get albums track");
		});
		return def.promise;
    }
   


    return music;
}