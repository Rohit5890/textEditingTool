(function(){
    angular.module('myApp',[])
    .controller('editController',editController)
    .directive('toolPanelDirective', toolPanelDirective);
    editController.$injest = ['$scope','$compile'];
    toolPanelDirective.$injest = [];
    function editController($scope,$compile){
        this.enableToolPanel = function enableToolPanelFunc(){
            var editBtnElem = document.querySelector('.editor-btn'),
            toolPanelSection = $compile('<section class="tool-panel" tool-panel-directive></section>')($scope);
            angular.element(editBtnElem).on('click',function(){
                angular.element(document).find('main').append(toolPanelSection);
                document.querySelector('input[name="textEdit"]').style.fontSize = '14px';
            })
        }
        this.enableToolPanel();
    }
    function toolPanelDirective(){
       return{
           restrict:'A',
           scope:'',
           template:'<button class="editor-btn glyphicon glyphicon-pencil" ng-click="getToolpanel()"></button><button class="editor-btn glyphicon glyphicon-pencil" ng-click="getToolpanel1()"></button><button class="editor-btn glyphicon glyphicon-pencil" ng-click="getToolpanel2()"></button><button class="editor-btn glyphicon glyphicon-pencil"></button>',
           link: function(scope){
                scope.getToolpanel=function(){
                    var inputElem = document.querySelector('input[name="textEdit"]');
                    angular.element(inputElem).addClass('text-bold');
                }
                scope.getToolpanel1=function(){
                    var inputElem = document.querySelector('input[name="textEdit"]');
                    angular.element(inputElem).toggleClass('text-italic');
                }
                scope.getToolpanel2=function(){
                    var inputElem = document.querySelector('input[name="textEdit"]'),
                    currentStringFontSize = angular.element(inputElem).css('font-size'),
                    currentNumericFontSize = currentStringFontSize.split('px')[0],
                    increasedFontSize = (parseInt(currentNumericFontSize,10) + 1);
                    angular.element(inputElem)[0].style.fontSize = increasedFontSize + 'px';
                }
           }
       }
    }
})();
