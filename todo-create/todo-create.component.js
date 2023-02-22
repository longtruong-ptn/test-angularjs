(function () {
  "use strict";

  angular.module("todoCreate").component("todoCreate", {
    templateUrl: "/todo-create/todo-create.template.html",
    controller: [
      "$window",
      "todoCreateDataContext", 
      function ($window, todoCreateDataContext) {
        var vm = this;

        vm.createNewTodo = function () {
          var todoObject = {
            title: vm.title,
            description: vm.description,
          };

          todoCreateDataContext.createTodo(todoObject).then(function (data) {
            console.log("RES create: ", data);
            vm.todoCreate = data;

            $window.location.href = '/#!/todo-list';
          });
        };
      },
    ],
  });
})();
