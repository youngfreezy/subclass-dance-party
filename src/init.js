$(document).ready(function(){
  window.dancers = [];
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(document).on("click", ".lineUpDancersButton", function(event){
    // var dancerChangerFunctionName = $(this).data("dancer-changer-function-name");
    // var dancerChangerFunction = window[dancerChangerFunctionName]();

    // dancerChangerFunction();

    for (var i = 0; i < window.dancers.length; i++) {
      // save a position 40px to the right of previous element
      var position = i*40+'px';
      // interrupt and break out of animation cycle
      dancers[i].$node.finish();
      // reposition node into a horizontal line
      dancers[i].$node.css({"left": position, "top": "400px"});
      // interrupt the Timeout cycle set when node was instantiated
      clearTimeout(dancers[i].myTimeOut);
      // if node is toggled off, toggle on
      if (dancers[i]._toggled) {
        dancers[i].$node.toggle();
        dancers[i]._toggled = true;
      }
      // $dancers[i].setPosition(300, i*30);

      // $( "div.example" ).css( "width", function( index ) {
      //   return index * 50;
      // });

    }
  });
});

