//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More={version:"1.2.5.1",build:"254884f2b83651bf95260eed5c6cceb838e22d8e"};var Color=new Native({initialize:function(b,c){if(arguments.length>=3){c="rgb";
b=Array.slice(arguments,0,3);}else{if(typeof b=="string"){if(b.match(/rgb/)){b=b.rgbToHex().hexToRgb(true);}else{if(b.match(/hsb/)){b=b.hsbToRgb();}else{b=b.hexToRgb(true);
}}}}c=c||"rgb";switch(c){case"hsb":var a=b;b=b.hsbToRgb();b.hsb=a;break;case"hex":b=b.hexToRgb(true);break;}b.rgb=b.slice(0,3);b.hsb=b.hsb||b.rgbToHsb();
b.hex=b.rgbToHex();return $extend(b,this);}});Color.implement({mix:function(){var a=Array.slice(arguments);var c=($type(a.getLast())=="number")?a.pop():50;
var b=this.slice();a.each(function(d){d=new Color(d);for(var e=0;e<3;e++){b[e]=Math.round((b[e]/100*(100-c))+(d[e]/100*c));}});return new Color(b,"rgb");
},invert:function(){return new Color(this.map(function(a){return 255-a;}));},setHue:function(a){return new Color([a,this.hsb[1],this.hsb[2]],"hsb");},setSaturation:function(a){return new Color([this.hsb[0],a,this.hsb[2]],"hsb");
},setBrightness:function(a){return new Color([this.hsb[0],this.hsb[1],a],"hsb");}});var $RGB=function(d,c,a){return new Color([d,c,a],"rgb");};var $HSB=function(d,c,a){return new Color([d,c,a],"hsb");
};var $HEX=function(a){return new Color(a,"hex");};Array.implement({rgbToHsb:function(){var b=this[0],c=this[1],j=this[2],g=0;var i=Math.max(b,c,j),e=Math.min(b,c,j);
var k=i-e;var h=i/255,f=(i!=0)?k/i:0;if(f!=0){var d=(i-b)/k;var a=(i-c)/k;var l=(i-j)/k;if(b==i){g=l-a;}else{if(c==i){g=2+d-l;}else{g=4+a-d;}}g/=6;if(g<0){g++;
}}return[Math.round(g*360),Math.round(f*100),Math.round(h*100)];},hsbToRgb:function(){var c=Math.round(this[2]/100*255);if(this[1]==0){return[c,c,c];}else{var a=this[0]%360;
var e=a%60;var g=Math.round((this[2]*(100-this[1]))/10000*255);var d=Math.round((this[2]*(6000-this[1]*e))/600000*255);var b=Math.round((this[2]*(6000-this[1]*(60-e)))/600000*255);
switch(Math.floor(a/60)){case 0:return[c,b,g];case 1:return[d,c,g];case 2:return[g,c,b];case 3:return[g,d,c];case 4:return[b,g,c];case 5:return[c,g,d];
}}return false;}});String.implement({rgbToHsb:function(){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHsb():null;},hsbToRgb:function(){var a=this.match(/\d{1,3}/g);
return(a)?a.hsbToRgb():null;}});