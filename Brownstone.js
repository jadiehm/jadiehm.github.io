$("#CactusWindow").click(function(){
 TweenMax.to("#Cactus", 2, {y:-30, repeat: 1, repeatDelay: 7, yoyo:true});
});

$("#RoWindow").click(function(){
 TweenMax.to("#Cat", 2, {y:-55, repeat: 1, repeatDelay: 10, yoyo:true});
});

$("#BlindsWindow").click(function(){
 TweenMax.to("#Blinds", 2, {y:110, repeat: 1, repeatDelay: 8, yoyo:true});
});

$("#CurtainWindow").click(function(){
 TweenMax.to("#Curtain", 2, {x:30, repeat: 1, repeatDelay: 5, yoyo:true});
 TweenMax.to("#RCurtain", 2, {x:-32, repeat: 1, repeatDelay: 5, yoyo:true});
});

$("#LightBulbWindow").click(function(){
 TweenMax.to("#LBColor", 1, {css:{fill:"#e6f5fd"}, repeat: 1, repeatDelay: 6, yoyo:true});
});

$("#LBColor").click(function(){
  TweenMax.to("#LBColor", 1, {css:{fill:"#e6f5fd"}, repeat: 1, repeatDelay: 6, yoyo:true});
});

$("#PigeonBody").click(function(){
 TweenMax.to("#PigeonHead", 0.125, {x:-2.5, repeat: 9, repeatDelay: 0.25, yoyo:true});
});
