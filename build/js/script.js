"use strict";var App={};!function(){for(var e=0,n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[n[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[t]+"CancelAnimationFrame"]||window[n[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var i=(new Date).getTime(),o=Math.max(0,16-(i-e)),a=window.setTimeout(function(){n(i+o)},o);return e=i+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document);window.GLOBAL_SPEED=.1,window.HYPERSPACE=!0,$(".begin").addEventListener("click",function(e){var n=setInterval(function(){window.GLOBAL_SPEED=1.3*(window.GLOBAL_SPEED+.1),window.GLOBAL_SPEED>70&&clearInterval(n)},100);setTimeout(function(){$(".home").classList.add("exit-hyperspace"),$(".select").classList.add("enter-hyperspace")},2e3),setTimeout(function(){window.HYPERSPACE=!1,$(".home").classList.remove("visible")},3e3)}),function(e){if(e.width=window.innerWidth,e.height=window.innerHeight,e.getContext){var n=e.getContext("2d"),t=e.width,i=e.height,o=100,a=10,r=[];n.lineCap="round";for(var d=function(e){var n,o;e?(n=100*Math.random()-50,o=100*Math.random()-50):(n=Math.random()*t,o=Math.random()*i);var r=e?t/2:0+n,d=e?i/2:0+o,s=~~(80*Math.random()+20);return{x:r,y:d,xs:(n-t/2)/500,ys:(o-i/2)/500,size:~~(s/20),length:Math.random()*a,color:"rgb("+s+", "+s+", "+~~(s+20*Math.random())+")"}},s=0;o>s;s++)r.push(d(!1));!function w(){window.HYPERSPACE&&window.requestAnimationFrame(w),n.clearRect(0,0,t,i);for(var e=0;o>e;e++){var a=r[e];(a.x<0||a.y<0||a.x>t||a.y>i)&&(a=r[e]=d(!1)),n.strokeStyle=a.color,n.lineWidth=a.size,n.shadowBlur=5,n.shadowColor="#555",n.beginPath(),n.moveTo(a.x,a.y),n.lineTo(a.x+.1+a.length*a.xs*window.GLOBAL_SPEED,a.y+a.length*a.ys*window.GLOBAL_SPEED),n.stroke(),a.x+=a.xs*window.GLOBAL_SPEED,a.y+=a.ys*window.GLOBAL_SPEED}}()}}($(".hyperspace")),App["goto"]=function(e,n){var t=$("section.visible"),i=$("."+e),o=n?"up":"down";if(!i||"boolean"!=typeof n)throw new Error("Wrong arguments: "+i+", "+n);if(t==i)throw new Error("Moving to the same page..");t&&(t.classList.remove("visible"),t.classList.add("exit-"+o),t.addEventListener("animationend",function(e){t.classList.remove("exit-"+o)})),i.classList.add("visible"),i.classList.add("enter-"+o),i.addEventListener("animationend",function(e){i.classList.remove("enter-"+o)})};for(var bindNavigation=function(e){e.addEventListener("click",function(e){App["goto"](this.getAttribute("data-target"),"up"===this.getAttribute("data-direction"))})},elements=$$(".navigation"),i=elements.length-1;i>=0;i--)bindNavigation(elements[i]);console.log("Libs and App loaded !");
//# sourceMappingURL=script.js.map
