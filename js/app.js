angular.module('calendarSam', ['ngDraggable'])
	.controller('dayCtrl',['$scope', function($scope){ 
		$scope.days = ["monday","tuesday","wednesday","thursday","friday"];
	}])
    .controller('CalendarCtrl', ['$scope', '$http', '$element', function($scope, $http, $element) {
        $http.get('js/tasks.json').then(function(res) {
            $scope.events = res.data;
            $scope.draggableObjects = $scope.events.items;
			$scope.droppedObjects1 = $scope.draggableObjects;
			$scope.droppedObjects2 = $scope.draggableObjects;
			$scope.droppedObjects3 = $scope.draggableObjects;
			$scope.droppedObjects4 = $scope.draggableObjects;
			$scope.droppedObjects5 = $scope.draggableObjects;
			$scope.onDropComplete1=function(data,evt){
	            var index = $scope.droppedObjects1.indexOf(data);
	            var dayOfTheWeek = $scope.$parent.days[0];
	            data.day = dayOfTheWeek;
	            if (index == -1)
	            $scope.droppedObjects1.push(data);
	        }
	        $scope.onDragSuccess1=function(data,evt){
	            var index = $scope.droppedObjects1.indexOf(data);
	            if (index > -1) {
	                $scope.droppedObjects1.splice(index, 1);
	            }
	        }
	        $scope.onDropComplete2=function(data,evt){
	            var index = $scope.droppedObjects2.indexOf(data);
	            var dayOfTheWeek = $scope.$parent.days[1];
	            data.day = dayOfTheWeek;
	            if (index == -1) 
	                $scope.droppedObjects2.push(data);
	        }
	        $scope.onDragSuccess2=function(data,evt){
	            var index = $scope.droppedObjects2.indexOf(data);
	            if (index > -1) {
	                $scope.droppedObjects2.splice(index, 1);
	            }
	        }
			$scope.onDropComplete3=function(data,evt){
	            var index = $scope.droppedObjects3.indexOf(data);
	            var dayOfTheWeek = $scope.$parent.days[2];
	            data.day = dayOfTheWeek;
	            if (index == -1)
	            $scope.droppedObjects3.push(data);
	        }
	        $scope.onDragSuccess3=function(data,evt){
	            var index = $scope.droppedObjects3.indexOf(data);
	            if (index > -1) {
	                $scope.droppedObjects3.splice(index, 1);
	            }
	        }
	        $scope.onDropComplete4=function(data,evt){
	            var index = $scope.droppedObjects4.indexOf(data);
	            var dayOfTheWeek = $scope.$parent.days[3];
	            data.day = dayOfTheWeek;
	            if (index == -1) 
	                $scope.droppedObjects4.push(data);
	        }
	        $scope.onDragSuccess4=function(data,evt){
	            var index = $scope.droppedObjects4.indexOf(data);
	            if (index > -1) {
	                $scope.droppedObjects4.splice(index, 1);
	            }
	        }
	        $scope.onDropComplete5=function(data,evt){
	            var index = $scope.droppedObjects5.indexOf(data);
	            var dayOfTheWeek = $scope.$parent.days[4];
	            data.day = dayOfTheWeek;
	            if (index == -1) 
	                $scope.droppedObjects5.push(data);
	        }
	        $scope.onDragSuccess5=function(data,evt){
	            var index = $scope.droppedObjects5.indexOf(data);
	            if (index > -1) {
	                $scope.droppedObjects5.splice(index, 1);
	            }
	        }
	        $scope.getData=function(data, element){
	        	$scope.obj = data;
	        	var showOverlay = angular.element(document.querySelector('.overlay'));
	        	showOverlay.addClass('show');	        	
	        }
	        $scope.hideOverlay=function(element){
	        	var hideOverlay = angular.element(document.querySelector('.overlay'));
	        	hideOverlay.removeClass('show');
	        }
        })
    }]);