(function(){
    angular.module("App", [])
        .directive('app', [() => {
            return {
                restrict: 'E',
                templateUrl: 'index.html'
            }
        }])
        .controller("mainController", mainController)
        .filter('nonSelect', () => {
            return (input, otherInput) => {
                let output = [];
                angular.forEach(input, function(option){
                    if(option.label != otherInput.label){
                        output.push(option);
                    }
                });
                return output;
            }
        });
        function mainController($scope){
            var self = this;
            
            self.options = [
                {label:"Option 1", value:1}, 
                {label:"Option 2", value:2}, 
                {label:"Option 3", value:3}
            ];
            self.option1 = self.options[0];
            self.option2 = "n/a";
            self.option3 = "n/a";
            self.option4 = "n/a";


            self.clear = () => {
                self.option1 = "";
                self.option2 = "";
                self.option3 = "";
                self.option4 = "";
            }
        }
})();