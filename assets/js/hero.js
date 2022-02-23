window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#faebd7", "white", "burlywood"],
  connectParticles: false,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "white", "burlywood"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.home').css('top',-(scrolled*0.0315)+'rem');
    $('.home > .home-content').css('padding-top',(scrolled*0.05)+'rem');
    $('.home > .home-content').css('opacity',1-(scrolled*.00175));
};