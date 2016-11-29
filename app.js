console.log('sanity Check');



angular.module('movieApp', [])
  .controller('MovieController', MovieController);

function MovieController(){
  vm = this;

  vm.submit = function(){
    if(vm.text){
      vm.movieList.push({title: vm.text});
      vm.text = '';
    }
  }
  vm.deleteMovie = function(movie){
    var idx = vm.movieList.indexOf(movie);
    vm.movieList.splice(idx, 1);
  }
  vm.movieList = [
    {title: "Dark Knight"},
    {title: 'Inception'},
    {title: "Intersellar"},
    {title: "Casa Blanca"},
    {title: "The Avengers"}
  ]

}
