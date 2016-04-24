export default ($log, $state, $window) => {
  'ngInject';
  return {
    templateUrl: 'app/common/directives/page/page.html', 
    restrict: 'E',
    link: function(scope, element, attr) {
      scope.previous = () => {
        updateIndex(scope.currentIndex - 1); 
        scope.$broadcast("previous", {index: scope.currentPage});
      };

      scope.next = () => {
        updateIndex(scope.currentIndex + 1);
        scope.$broadcast("next", {index: scope.currentPage});
      };

      scope.changePage = (index) => {
        // Update current index.
        updateIndex(index);
        scope.$broadcast("change", {index: scope.currentPage});
      };

      function updateIndex(index) {
        scope.currentIndex = index;
        scope.currentPage = scope.pages[index];
      }
    }
  };
};
