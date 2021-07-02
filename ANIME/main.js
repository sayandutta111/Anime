 var playpause = anime({
    targets:'div.box',
    translateY:[
    { value: 200, duration:500},
    { value: 0, duration: 800}
    ],
    rotate:{
    	value:'1turn',
    	easing:'easeInOutSine'
    },
    
    backgroundColor:'#ddd',
    delay: function(el,i,l){return i * 1000},
    autoplay:false,
    loop:true

});

document.querySelector('#boxes .play').onclick = playpause.play;
document.querySelector('#boxes .pause').onclick = playpause.pause;