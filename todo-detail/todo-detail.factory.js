(function () {
  "use strict";

  angular
    .module("todoDetail")
    .factory("todoDetailDataContext", ["$http", "$routeParams", dataContext]);

  function dataContext($http, $routeParams) {
    var service = {
      getTodoById: getTodoById,
    };
    return service;

    function handleError(res) {
      console.log("Error when get todo detail!", res);

      return;
    }

    function handleSuccess(res) {
      return res.data;
    }

    function getTodoById() {
      var id = $routeParams.todoId;
      var request = $http({
        method: "GET",
        url: `https://63b7ee2f6f4d5660c6c62386.mockapi.io/api/v1/tasks/${id}`,
      });
      return request.then(handleSuccess, handleError);
    }
  }
})();
