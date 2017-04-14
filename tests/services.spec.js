describe('MusicSearch app ', function() {
	 
	  var $scope = null;
	  var ctrl = null;
	  var API_URL = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=album,artist';
	  var getMusic, httpBackend;

	  //you need to indicate your module in a test
	  beforeEach(module('MusicSearch'));

	  beforeEach(inject(function($rootScope, $controller, $injector, _getMusic_) {
	    $scope = $rootScope.$new();
	    httpBackend = $injector.get('$httpBackend');
	    getMusic = _getMusic_;

	    ctrl = $controller('DashboardCtrl', {
	      $scope: $scope
	    });
	  }));
	 
	  afterEach(function() {
	    httpBackend.verifyNoOutstandingExpectation();
	  });

	  it("should have a getMusic factory", function() {
	  	expect(getMusic).toBeDefined();
	  });

	  it("should have a getAllMusic service", function() {
	  	expect(getMusic.getAllMusic).toBeDefined();
	  	expect(typeof getMusic.getAllMusic).toBe('function');
	  });

	  it("should have a getArtistsAlbum service", function() {
	  	expect(getMusic.getArtistsAlbum).toBeDefined();
	  	expect(typeof getMusic.getArtistsAlbum).toBe('function');
	  });

	  it("should have a getAlbumsTrack service", function() {
	  	expect(getMusic.getAlbumsTrack).toBeDefined();
	  	expect(typeof getMusic.getAlbumsTrack).toBe('function');
	  });

	  it("should be a object", function() {
	  	expect(typeof getMusic).toBe('object');
	  });
	
});