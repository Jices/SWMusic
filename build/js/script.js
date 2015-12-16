"use strict";var App={};
"use strict";!function(){for(var n=0,i=["webkit","moz"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var a=(new Date).getTime(),t=Math.max(0,16-(a-n)),o=window.setTimeout(function(){i(a+t)},t);return n=a+t,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}();
"use strict";var $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document);
"use strict";window.TOGGLE_SELECTION_LISTENER=function(e){var n=150,t=(e.screenX-n)/(window.screen.width-2*n)*100;t=Math.max(Math.min(t,100),0);var E=t*(100-100/1.75)/100;$(".select .cards").style.transform="translateX(-"+E+"%)"},App.toggleSelection=function(e){e?document.addEventListener("mousemove",window.TOGGLE_SELECTION_LISTENER):document.removeEventListener("mousemove",window.TOGGLE_SELECTION_LISTENER)};
"use strict";window.GLOBAL_SPEED=.1,window.HYPERSPACE=!0,function(n){if(n.width=window.innerWidth,n.height=window.innerHeight,n.getContext){for(var o=n.getContext("2d"),t=n.width,i=n.height,e=100,r=10,w=[],d=function(){var n=Math.random(),o=Math.random(),e=~~(80*Math.random()+20);return{x:n*t,y:o*i,xs:(n*t-t/2)/500,ys:(o*i-i/2)/500,size:~~(e/20),length:Math.random()*r,color:"rgb("+e+", "+e+", "+~~(e+20*Math.random())+")"}},a=0;e>a;a++)w.push(d());!function h(){window.HYPERSPACE&&window.requestAnimationFrame(h),o.clearRect(0,0,t,i);for(var n=0;e>n;n++){var r=w[n];(r.x<0||r.y<0||r.x>t||r.y>i)&&(r=w[n]=d()),o.strokeStyle=r.color,o.lineWidth=r.size,o.shadowBlur=5,o.lineCap="round",o.shadowColor="#555",o.beginPath(),o.moveTo(r.x,r.y),o.lineTo(r.x+.1+r.length*r.xs*window.GLOBAL_SPEED,r.y+r.length*r.ys*window.GLOBAL_SPEED),o.stroke(),r.x+=r.xs*window.GLOBAL_SPEED,r.y+=r.ys*window.GLOBAL_SPEED}}()}}($(".hyperspace"));
"use strict";App["goto"]=function(e,t){var i=$("section.visible"),n=$("."+e),s=t?"up":"down";if(!n||"boolean"!=typeof t)throw new Error("Wrong arguments: "+n+", "+t);if(i==n)throw new Error("Moving to the same page..");App.toggleSelection("select"===e),i&&(i.classList.remove("visible"),i.classList.add("exit-"+s),i.addEventListener("animationend",function a(e){i.removeEventListener("animationend",a),i.classList.remove("exit-"+s)})),n.classList.add("visible"),n.classList.add("enter-"+s),n.addEventListener("animationend",function o(t){n.removeEventListener("animationend",o),n.classList.remove("enter-"+s),App.setLocation(e)})},App.setLocation=function(e){window.location.hash="#/"+e},$(".begin").addEventListener("click",function(e){TOGGLE_SELECTION_LISTENER(e);var t=setInterval(function(){window.GLOBAL_SPEED=1.3*(window.GLOBAL_SPEED+.1),window.GLOBAL_SPEED>70&&clearInterval(t)},100),i=$(".home"),n=$(".select");n.addEventListener("animationend",function s(e){i.removeEventListener("animationend",s),window.HYPERSPACE=!1,i.classList.remove("visible"),i.classList.remove("exit-hyperspace"),n.classList.add("visible"),n.classList.remove("enter-hyperspace"),App.setLocation("select")}),i.classList.add("exit-hyperspace"),n.classList.add("enter-hyperspace"),App.toggleSelection(!0)}),window.addEventListener("hashchange",function(e){e.preventDefault()});for(var bindNavigation=function(e){e.addEventListener("click",function(e){App["goto"](this.getAttribute("data-target"),"up"===this.getAttribute("data-direction")),e.preventDefault()})},elements=$$(".navigation"),i=elements.length-1;i>=0;i--)bindNavigation(elements[i]);if(window.location.hash&&window.location.hash.length>2){var hash=window.location.hash.substring(2),page=$("."+hash);if(page&&page.classList.contains("page")){var current=$("section.visible");current&&current.classList.remove("visible"),page.classList.add("visible"),App.toggleSelection("select"===hash),window.HYPERSPACE="home"===hash}}
"use strict";console.log("Libs and App loaded !");
//# sourceMappingURL=script.js.map
