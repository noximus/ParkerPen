var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  f2_img1: document.getElementById("f2_img1"),
  f2_img2: document.getElementById("f2_img2"),
  f2_img3: document.getElementById("f2_img3"),
  f3_img1: document.getElementById("f3_img1"),
  bgColor: document.getElementById("bgColor"),
  f4_img1: document.getElementById("f4_img1"),
  f4_img2: document.getElementById("f4_img2"),
  f5_img1: document.getElementById("f5_img1"),
  f5_img2: document.getElementById("f5_img2"),
  cta: document.getElementById("cta"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    TweenLite.to(f3_img1, 0,{scaleX: 3,scaleY: 3, top:10, left:170,rotation:5});    
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(f1_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    TweenLite.delayedCall(.5, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(f2_img1, .3, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f2_img2, .3, {opacity:1, display: 'block', delay: .1, ease: Quad.easeOut});
    TweenLite.to(f2_img3, .3, {opacity:1, display: 'block', delay: .2, ease: Quad.easeOut});

    TweenLite.to(f1_img1, 1, {opacity:1, display: 'block',scaleX: .5,scaleY: .5,rotation:-5,left:-100, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(f2_img1, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,rotation:-5,left:-100, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(f2_img2, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,rotation:-5,left:-100, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(f2_img3, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,rotation:-5,left:-100, delay: 1.5, ease: Quad.easeOut});
       
    TweenLite.to(f1_img1, 0, {opacity:0, display: 'block', delay: 3, ease: Quad.easeOut});

    TweenLite.delayedCall(1.5, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(f3_img1, .5, {opacity:1});
    TweenLite.to(f3_img1, 1, {opacity:1, display: 'block',scaleX: 1,scaleY: 1,top:0, left:0,rotation:0, delay: 0, ease: Quad.easeOut});
    TweenLite.to(bgColor, 0, {opacity:1, display: 'block', delay: 1});

    TweenLite.to(f3_img1, .5, {opacity:1, display: 'block',left:-350, delay: 2, ease: Quad.easeInOut});

    TweenLite.delayedCall(2, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    
    TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block' ,top:15, left:65,width:100, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block' ,top:-55, left:-60,scaleX: .8,scaleY: .8, ease: Quad.easeOut});

    TweenLite.to(f5_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f5_img2, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    TweenLite.to(cta, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
  }
};
BanTimeline.init();