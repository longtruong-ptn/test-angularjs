(function () {
  "use strict";

  angular.module("todoList").component("todoList", {
    templateUrl: "/todo-list/todo-list.template.html",
    controller: [
      "todoListDataContext",
      function (todoListDataContext) {
        var vm = this;
        vm.sortBy = "title";
        todoListDataContext.getAllTodo().then(function (data) {
          console.log("RES: ", data);
          vm.todoList = data;
        });

        vm.deleteTodo = function (id) {
          todoListDataContext.deleteTodoById(id).then(function (data) {
            console.log("RES Delete: ", data);

            //   Refresh data
            todoListDataContext.getAllTodo().then(function (data) {
              console.log("RES: ", data);

              vm.todoList = data;
            });
          });
        };
      },
    ],
  });
})();
