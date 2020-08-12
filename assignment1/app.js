(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',function($scope){
$scope.list = "";
$scope.msg = "";
$scope.LunchChecker = function(){
	var displayedmsg = msgdisplay($scope.list);
	$scope.msg = displayedmsg;
};
var msgdisplay = function(string){
	var string = string.trim()
	var items = string.split(',')
	var mesg = ""
	if (string == ''){
		mesg = "Please enter data first";
	}  else if (items.length <= 3){
		mesg = "Enjoy!";
	} else {
		mesg = "Too much!";
	}
	return mesg
};
});



})();