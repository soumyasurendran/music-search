 var common = {};
(function() {
    'use strict';

    common.validData = function(data) { 
    	if(data == "" || data == undefined || data == " " || data == "undefined" || data == null || data == "null"){
    		return false;
    	}else{
    		return true;
    	}
    }

    common.millisToMinutesAndSeconds = function (millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}

	common.showLoading = function() { 
		$("body").addClass("loading");    
	},
    
    common.hideLoading = function() { 
    	$("body").removeClass("loading"); 
    }  

	
	
})();