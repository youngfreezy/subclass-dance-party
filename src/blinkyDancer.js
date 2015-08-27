var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.myTimeOut;
  // copy over properties from Dancer()
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  
};

// Setting up inheritance
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
//Overwriting a prototype method
makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  this._toggled = !this._toggled;
};

var SmoothDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$pizza = $('<img src="pizza.gif" style="width:55px; height:55px">');
  this.$node.append(this.$pizza);
  this.$node.css({border: 'none'});

}

SmoothDancer.prototype = Object.create(Dancer.prototype);
SmoothDancer.prototype.constructor = SmoothDancer;

SmoothDancer.prototype.step = function () {
  var realVertMove = Math.floor((Math.random() * $(window).height()) + 1) + 'px';
  var realHorizMove = Math.floor((Math.random() * $(window).width()) + 1) + 'px';
  Dancer.prototype.step.call(this);
  this.$node.animate({top: realVertMove, left: realHorizMove},2000);
}

var MoonWalker = function  (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // body...
  this.$zangief = $('<img src="z.gif">');
  this.$node.append(this.$zangief);
  this.$node.css({border: 'none'});
}

MoonWalker.prototype = Object.create(Dancer.prototype);
MoonWalker.prototype.constructor = MoonWalker;

MoonWalker.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.animate({left: '0px'}, 9000);
}

// MoonWalker.prototype.setPosition = function(top, left){
//   var styleSettings = {left: '0px'};
//   this.$node.css(styleSettings)
// }