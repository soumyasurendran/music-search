describe('MusicSearch app', function() {

  beforeEach(module('MusicSearch'));

  describe('Dashboard controller', function(){

    it('should be ...', inject(function($controller) {
      //spec body
      var dashboardCtrl = $controller('DashboardCtrl');
      expect(dashboardCtrl).toBeDefined();
    }));

  });
});