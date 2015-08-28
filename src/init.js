$(document).ready(function(){
  // window.dancers = [];
  // $(".addDancerButton").on("click", function(event){
  //   /* This function sets up the click handlers for the create-dancer
  //    * buttons on dancefloor.html. You should only need to make one small change to it.
  //    * As long as the "data-dancer-maker-function-name" attribute of a
  //    * class="addDancerButton" DOM node matches one of the names of the
  //    * maker functions available in the global scope, clicking that node
  //    * will call the function to make the dancer.
  //    */

  //    dancerMakerFunctionName is a string which must match
  //    * one of the dancer maker functions available in global scope.
  //    * A new object of the given type will be created and added
  //    * to the stage.
     
  //   var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

  //   // get the maker function for the kind of dancer we're supposed to make
  //   var dancerMakerFunction = window[dancerMakerFunctionName];

  //   // make a dancer with a random position

  //   var dancer = new dancerMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );

  //   $('body').append(dancer.$node);
  //   window.$dancers = document.getElementsByClassName("dancer");
  //   window.dancers.push(dancer);
  // });

  // $(document).on("click", ".lineUpDancersButton", function(event){ 
  //   debugger;
  //   // var dancerChangerFunctionName = $(this).data("dancer-changer-function-name");
  //   // var dancerChangerFunction = window[dancerChangerFunctionName]();


  //   for (var i = 0; i < window.dancers.length; i++) {
  //     // save a position 40px to the right of previous element
  //     var position = i*40+'px';
  //     // reposition node into a horizontal line
  //     dancers[i].$node.finish().animate({"left": position, "top": "400px"}, 1500);
  //     // interrupt the Timeout cycle set when node was instantiated
  //     clearTimeout(dancers[i].myTimeOut);
  //     // if node is toggled off, toggle on
  //     if (dancers[i]._toggled === false) {
  //       dancers[i].$node.toggle();
  //       dancers[i]._toggled = !dancers[i]._toggled;
  //     }



  //   }
  // })

  // $(document).on("mouseover", ".dancer", function(event){
  //   debugger
  //   for (var i = 0; i < dancers.length; i++) {
  //     if (dancers[i].style.top === this.style.top) {
  //       window.dancers[i].$node.css("border", "red 15px solid");
  //     }
  //   }
    

    
  //   console.log(this);
  //   console.log(this.$node);
  // })
});

