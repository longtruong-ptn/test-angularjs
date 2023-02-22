(function () {
    "use strict";
  
    angular.module("todoDetail").component("todoDetail", {
      templateUrl: "/todo-detail/todo-detail.template.html",
      controller: [
        "todoDetailDataContext",
        function (todoDetailDataContext) {
          var vm = this;
          vm.sortBy = "title";
          todoDetailDataContext.getTodoById().then(function (data) {
            console.log("RES: ", data);
            vm.todo = data;
          });
        },
      ],
    });
  })();
  