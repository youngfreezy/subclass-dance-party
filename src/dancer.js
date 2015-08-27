// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this.setPosition(top, left);
  this.step();
  this._toggled = false;


  

};



// add prototype methods
Dancer.prototype.step = function(){
 
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // console.log('hello');
  //debugger
  //window.stepping = 
 this.myTimeOut = setTimeout(this.step.bind(this), this._timeBetweenSteps);
  //clearTimeout(myTimeOut);
  //window.myTimeOut = setTimeout(this.step.bind(this), this._timeBetweenSteps);

};

// clearTimeout(Dancer.prototype.step);



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
  //window.clearTimeout(window.stepping);


}

