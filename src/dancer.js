// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.xPos;
  this.yPos;
  this.setPosition(top, left);
  this.step();
  setInterval(this.distanceFromOthers, 50);


  

};



// add prototype methods
Dancer.prototype.step = function(){
 
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

 this.myTimeOut = setTimeout(this.step.bind(this), this._timeBetweenSteps);
 // this.xPos = window.$dancers[$dancers.length-1].offsetLeft;
 // this.yPos = window.$dancers[$dancers.length-1].offsetTop;
};




Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.distanceFromOthers = function(){
  var xValues = [];
  var yValues = [];
    //we need an array that contains all the x positions of everything in $dancers
    // also an array for y positions.  
    //distance returns the pythag theoroem

     var distance = function(x1, x2, y1, y2){
      return Math.sqrt((Math.abs(x2-x1) * Math.abs(x2-x1)) + (Math.abs(y2-y1) * Math.abs(y2-y1)))
     }
 
    // var xs = 
    // var ys = 

    for (var i = 0; i<$dancers.length; i++){ 
      xValues.push($dancers[i].offsetLeft);
    }
    for (var i = 0; i<$dancers.length; i++){ 
      yValues.push($dancers[i].offsetTop);
    }

    for( var i = 0; i<xValues.length-1; i++){
      for (var j = 0; j < yValues.length-1; j++){
          if (distance(xValues[i], xValues[i+1], yValues[i], yValues[i+1]) < 50 && 
            distance(xValues[i], xValues[i+1], yValues[i], yValues[i+1]) !== 0) {
            debugger
            window.dancers[i].$node.css("border", "orange solid 30px");
            window.dancers[j].$node.css("border", "orange solid 30px");
          };
      }
    }

    }



