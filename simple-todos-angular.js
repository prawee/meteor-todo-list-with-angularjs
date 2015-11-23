
Tasks=new Mongo.Collection('tasks');

if (Meteor.isClient) {
    angular.module('simple-todos',['angular-meteor']);
    angular.module('simple-todos').controller('TodosListCtrl',[
        '$scope','$meteor',function($scope,$meteor){
            /*$scope.tasks=[
                {text:'This is task 1'},
                {text:'This is task 2'},
                {text:'This is task 3'}
            ]*/
            $scope.tasks=$meteor.collection(Tasks);

            $scope.addTask=function(newTask){
                $scope.tasks.push({
                    text:newTask,
                    createdAt:new Date()
                });
            };
        }
    ]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
