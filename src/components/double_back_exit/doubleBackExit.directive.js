angular.module('tnf.IonicUtils', ['ionic'])
  .directive('tnfDblBackExit', function ($ionicPlatform, $timeout) {
    return {
      scope: {},
      restrict: 'E',
      template: '<div class="double-back-exit-label"><span class="label">Press Again To Exit</span></div>',
      replace: true,
      transclude: true,      
      link: function($scope, iElm, iAttrs, controller) {
        var exitApp = 0;

        $ionicPlatform.registerBackButtonAction(function (e) {
          e.preventDefault();

          if (exitApp === 1) {
            $scope.hide();
            ionic.Platform.exitApp();
          } else {
            $scope.show();
            exitApp++;
          }
        }, 100);

        $scope.show = function () {
          iElm.addClass('show');
          $timeout(function(){
            $scope.hide();            
          }, 1500);
        };

        $scope.hide = function () {
          iElm.removeClass('show');
        };

        $scope.hide();
      }
    };
  });