(function () {
  "use strict";

  angular.module("todoApp").config([
    "$routeProvider",
    function config($routeProvider) {
      $routeProvider
        .when("/todo-list", {
          template: "<todo-list></todo-list>",
        })
        .when("/todo-detail/:todoId", {
          template: "<todo-detail></todo-detail>",
        })
        .when("/create-new-todo", {
          template: "",
        })
        .otherwise("/todo-list");
    },
  ]);
})();
