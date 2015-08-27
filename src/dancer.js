// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.xPos;
  this.yPos;
  this.setPosition(top, left);
  this.step();


  

};



// add prototype methods
Dancer.prototype.step = function(){
 
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

 this.myTimeOut = setTimeout(this.step.bind(this), this._timeBetweenSteps);
 // this.xPos = $dancers[$dancers.length-1].offsetLeft;
 // this.yPos = $dancers[$dancers.length-1].offsetTop;
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

Dancer.prototype.lineUp = function(){
  // have all the dancers lineup.  



}

