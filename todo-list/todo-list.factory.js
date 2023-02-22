(function () {
  "use strict";

  angular
    .module("todoList")
    .factory("todoListDataContext", ["$http", "$routeParams", dataContext]);

  function dataContext($http) {
    var service = {
      getAllTodo: getAllTodo,
      deleteTodoById: deleteTodoById,
    };
    return service;

    function handleError(res) {
      console.log("Error when get todo list!", res);

      return;
    }

    function handleSuccess(res) {
      return res.data;
    }

    function getAllTodo() {
      var request = $http({
        method: "GET",
        url: "https://63b7ee2f6f4d5660c6c62386.mockapi.io/api/v1/tasks",
      });
      return request.then(handleSuccess, handleError);
    }

    function deleteTodoById(id) {
      var request = $http({
        method: "DELETE",
        url: `https://63b7ee2f6f4d5660c6c62386.mockapi.io/api/v1/tasks/${id}`,
      });
      return request.then(handleSuccess, handleError);
    }
  }
})();
