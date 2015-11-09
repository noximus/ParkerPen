var BanTimeline = {
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    TweenLite.to(f3_img1, 0,{scaleX: 2,scaleY: 2, top:-120, left:125});    
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
    TweenLite.to(f2_img4, .3, {opacity:1, display: 'block', delay: .3, ease: Quad.easeOut});
    TweenLite.to(f2_img5, .3, {opacity:1, display: 'block', delay: .4, ease: Quad.easeOut});
    TweenLite.to(f2_img6, .3, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    TweenLite.to(f2_img7, .3, {opacity:1, display: 'block', delay: .6, ease: Quad.easeOut});
    TweenLite.to(f2_img8, .3, {opacity:1, display: 'block', delay: .7, ease: Quad.easeOut});
    TweenLite.to(f2_img9, .3, {opacity:1, display: 'block', delay: .8, ease: Quad.easeOut});
    TweenLite.to(f2_img10, .3, {opacity:1, display: 'block', delay: .9, ease: Quad.easeOut});
    TweenLite.to(f2_img11, .3, {opacity:1, display: 'block', delay: 1, ease: Quad.easeOut});
    TweenLite.to(f2_img12, .3, {opacity:1, display: 'block', delay: 1.1, ease: Quad.easeOut});
    TweenLite.to(f2_img13, .3, {opacity:1, display: 'block', delay: 1.2, ease: Quad.easeOut});
    TweenLite.to(f2_img14, .3, {opacity:1, display: 'block', delay: 1.3, ease: Quad.easeOut});
    TweenLite.to(f2_img15, .3, {opacity:1, display: 'block', delay: 1.4, ease: Quad.easeOut});
    TweenLite.to(f2_img16, .3, {opacity:1, display: 'block', delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(f2_img17, .3, {opacity:1, display: 'block', delay: 1.6, ease: Quad.easeOut});
    TweenLite.to(f2_img18, .3, {opacity:1, display: 'block', delay: 1.7, ease: Quad.easeOut});
    TweenLite.to(f2_img19, .3, {opacity:1, display: 'block', delay: 1.8, ease: Quad.easeOut});

    TweenLite.to(f1_img1, 1, {opacity:1, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img1, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img2, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img3, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img4, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img5, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img6, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img7, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img8, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img9, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img10, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img11, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img12, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img13, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img14, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img15, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img16, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img17, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img18, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img19, 1, {opacity:0, display: 'block',scaleX: .5,scaleY: .5, delay: 2.5, ease: Quad.easeOut});
    
    TweenLite.to(f1_img1, 0, {opacity:0, display: 'block', delay: 3, ease: Quad.easeOut});

    TweenLite.delayedCall(2.5, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(f3_img1, .5,{opacity:1, display: 'block'});
    TweenLite.to(f3_img1, 1, {opacity:1, display: 'block',top:0,left:0,scaleX: 1,scaleY: 1,rotation:0, delay: 0, ease: Quad.easeOut});
    TweenLite.to(bgColor, 0, {opacity:1, display: 'block', delay: 1.5}); 

    TweenLite.to(f3_img1, .5, {opacity:1, display: 'block',top:0,left:-300, delay: 2, ease: Quad.easeInOut});

    TweenLite.delayedCall(3, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    
    TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block' ,top:35, left:50,width:80, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block' ,top:-25, left:-60,scaleX: .8,scaleY: .8, ease: Quad.easeOut});

    TweenLite.to(f5_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f5_img2, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    TweenLite.to(cta, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
  }
};
BanTimeline.init();