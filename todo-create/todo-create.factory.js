(function () {
  "use strict";

  angular
    .module("todoCreate")
    .factory("todoCreateDataContext", ["$http", dataContext]);

  function dataContext($http) {
    var service = {
      createTodo: createTodo,
    };
    return service;

    function handleError(res) {
      console.log("Error when get todo detail!", res);

      return;
    }

    function handleSuccess(res) {
      return res.data;
    }

    function createTodo(todoObject) {
      var request = $http({
        method: "POST",
        url: 'https://63b7ee2f6f4d5660c6c62386.mockapi.io/api/v1/tasks',
        data: todoObject,
      });
      return request.then(handleSuccess, handleError);
    }
  }
})();
