var Tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Of=0,ru=1,Ff=2;var so=1,Bf=2,Zr=3,Ts=0,wn=1,Un=2,tr=0,Jr=1,Kr=2,au=3,ou=4,zf=5;var er=100,kf=101,Hf=102,Gf=103,Vf=104,Wf=200,Xf=201,qf=202,Yf=203,lu=204,cu=205,$f=206,Zf=207,Jf=208,Kf=209,jf=210,Qf=211,tp=212,ep=213,np=214,vl=0,Ml=1,Sl=2,Ir=3,bl=4,El=5,Tl=6,wl=7,hu=0,ip=1,sp=2,wi=0,uu=1,du=2,fu=3,jr=4,pu=5,mu=6,gu=7;var _u=300,nr=301,Qr=302,$l=303,Zl=304,Lr=1e3,vi=1001,Al=1002,je=1003,rp=1004;var ro=1005;var Sn=1006,Jl=1007;var $i=1008;var On=1009,xu=1010,yu=1011,ta=1012,Kl=1013,fi=1014,ai=1015,pi=1016,jl=1017,Ql=1018,ir=1020,vu=35902,Mu=35899,Su=1021,bu=1022,mi=1023,Wi=1026,Zi=1027,tc=1028,ec=1029,ws=1030,nc=1031;var ic=1033,ao=33776,oo=33777,lo=33778,co=33779,sc=35840,rc=35841,ac=35842,oc=35843,lc=36196,cc=37492,hc=37496,uc=37488,dc=37489,ho=37490,fc=37491,pc=37808,mc=37809,gc=37810,_c=37811,xc=37812,yc=37813,vc=37814,Mc=37815,Sc=37816,bc=37817,Ec=37818,Tc=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Ic=36283,Lc=36284,uo=36285,Dc=36286;var Na=2300,Rl=2301,xl=2302,Zh=2303,Jh=2400,Kh=2401,jh=2402;var ap=3200;var Nc=0,op=1,Ji="",on="srgb",Ua="srgb-linear",Oa="linear",ce="srgb";var yl=7680;var lp=519,cp=512,hp=513,up=514,Eu=515,dp=516,fp=517,Tu=518,wu=519,Au=35044,Ru=35048;var Cu="300 es",ri=2e3,Dr=2001;function E0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function T0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=Fa("canvas");return i.style.display="block",i}var nf={},Nr=null;function Ba(...i){let t="THREE."+i.shift();Nr?Nr("log",t,...i):console.log(t,...i)}function mp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=mp(i);let t="THREE."+i.shift();if(Nr)Nr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=mp(i);let t="THREE."+i.shift();if(Nr)Nr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ia(...i){let t=i.join(" ");t in nf||(nf[t]=!0,Nt(...i))}function gp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _p={[vl]:vl,[Sl]:Tl,[bl]:bl,[Ir]:El,[Ml]:Ml,[Tl]:Sl,[wl]:wl,[El]:Ir},di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=1234567,La=Math.PI/180,Ur=180/Math.PI;function As(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Pu(i,t){return(i%t+t)%t}function w0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function A0(i,t,e){return i!==t?(e-i)/(t-i):0}function Da(i,t,e){return(1-e)*i+e*t}function R0(i,t,e,n){return Da(i,t,1-Math.exp(-e*n))}function C0(i,t=1){return t-Math.abs(Pu(i,t*2)-t)}function P0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function I0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function L0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function D0(i,t){return i+Math.random()*(t-i)}function N0(i){return i*(.5-Math.random())}function U0(i){i!==void 0&&(sf=i);let t=sf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function O0(i){return i*La}function F0(i){return i*Ur}function B0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function z0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function k0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lu(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Du(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Nu={DEG2RAD:La,RAD2DEG:Ur,generateUUID:As,clamp:Jt,euclideanModulo:Pu,mapLinear:w0,inverseLerp:A0,lerp:Da,damp:R0,pingpong:C0,smoothstep:P0,smootherstep:I0,randInt:L0,randFloat:D0,randFloatSpread:N0,seededRandom:U0,degToRad:O0,radToDeg:F0,isPowerOfTwo:B0,ceilPowerOfTwo:z0,floorPowerOfTwo:Iu,setQuaternionFromProperEuler:k0,normalize:Du,denormalize:Lu},Tt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let x=Math.acos(m),E=Math.sin(x);p=Math.sin(p*x)/E,o=Math.sin(o*x)/E,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rh=new L,rf=new Qe,Ft=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],x=s[1],E=s[4],S=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*M+o*x+l*A,r[3]=a*m+o*E+l*T,r[6]=a*p+o*S+l*_,r[1]=c*M+h*x+d*A,r[4]=c*m+h*E+d*T,r[7]=c*p+h*S+d*_,r[2]=u*M+f*x+g*A,r[5]=u*m+f*E+g*T,r[8]=u*p+f*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ia("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(t,e)),this}rotate(t){return Ia("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-t)),this}translate(t,e){return Ia("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ch=new Ft,af=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H0(){let i={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?Oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ua]:{primaries:t,whitePoint:n,transfer:Oa,toXYZ:af,fromXYZ:of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:af,fromXYZ:of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var te=H0();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,Cl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{dr===void 0&&(dr=Fa("canvas")),dr.width=t.width,dr.height=t.height;let s=dr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},G0=0,Or=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ph(s[a].image)):r.push(Ph(s[a]))}else r=Ph(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var V0=0,Ih=new L,bn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=Sn,a=$i,o=mi,l=On,c=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=As(),this.name="",this.source=new Or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=_u;bn.DEFAULT_ANISOTROPY=1;var Se=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(f+1)/2,A=(p+1)/2,T=(h+u)/4,_=(d+M)/4,b=(g+m)/4;return E>S&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-M)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new bn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Or(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},za=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Gt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fr.setFromMatrixColumn(t,0).length(),r=1/fr.setFromMatrixColumn(t,1).length(),a=1/fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W0,t,X0)}lookAt(t,e,n){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ds.crossVectors(n,Vn),ds.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ds.crossVectors(n,Vn)),ds.normalize(),qo.crossVectors(Vn,ds),s[0]=ds.x,s[4]=qo.x,s[8]=Vn.x,s[1]=ds.y,s[5]=qo.y,s[9]=Vn.y,s[2]=ds.z,s[6]=qo.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],x=n[3],E=n[7],S=n[11],A=n[15],T=s[0],_=s[4],b=s[8],D=s[12],R=s[1],N=s[5],O=s[9],W=s[13],P=s[2],V=s[6],Y=s[10],G=s[14],nt=s[3],q=s[7],Q=s[11],tt=s[15];return r[0]=a*T+o*R+l*P+c*nt,r[4]=a*_+o*N+l*V+c*q,r[8]=a*b+o*O+l*Y+c*Q,r[12]=a*D+o*W+l*G+c*tt,r[1]=h*T+d*R+u*P+f*nt,r[5]=h*_+d*N+u*V+f*q,r[9]=h*b+d*O+u*Y+f*Q,r[13]=h*D+d*W+u*G+f*tt,r[2]=g*T+M*R+m*P+p*nt,r[6]=g*_+M*N+m*V+p*q,r[10]=g*b+M*O+m*Y+p*Q,r[14]=g*D+M*W+m*G+p*tt,r[3]=x*T+E*R+S*P+A*nt,r[7]=x*_+E*N+S*V+A*q,r[11]=x*b+E*O+S*Y+A*Q,r[15]=x*D+E*W+S*G+A*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],x=l*f-c*u,E=o*f-c*d,S=o*u-l*d,A=a*f-c*h,T=a*u-l*h,_=a*d-o*h;return e*(M*x-m*E+p*S)-n*(g*x-m*A+p*T)+s*(g*E-M*A+p*_)-r*(g*S-M*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],x=e*o-n*a,E=e*l-s*a,S=e*c-r*a,A=n*l-s*o,T=n*c-r*o,_=s*c-r*l,b=h*M-d*g,D=h*m-u*g,R=h*p-f*g,N=d*m-u*M,O=d*p-f*M,W=u*p-f*m,P=x*W-E*O+S*N+A*R-T*D+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return t[0]=(o*W-l*O+c*N)*V,t[1]=(s*O-n*W-r*N)*V,t[2]=(M*_-m*T+p*A)*V,t[3]=(u*T-d*_-f*A)*V,t[4]=(l*R-a*W-c*D)*V,t[5]=(e*W-s*R+r*D)*V,t[6]=(m*S-g*_-p*E)*V,t[7]=(h*_-u*S+f*E)*V,t[8]=(a*O-o*R+c*b)*V,t[9]=(n*R-e*O-r*b)*V,t[10]=(g*T-M*S+p*x)*V,t[11]=(d*S-h*T-f*x)*V,t[12]=(o*D-a*N-l*b)*V,t[13]=(e*N-n*D+s*b)*V,t[14]=(M*E-g*A-m*x)*V,t[15]=(h*A-d*E+u*x)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,x=l*c,E=l*h,S=l*d,A=n.x,T=n.y,_=n.z;return s[0]=(1-(M+p))*A,s[1]=(f+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(m-x)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),l=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);let c=1/a,h=1/o,d=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,e.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ri,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===ri)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ri,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===ri)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fr=new L,ci=new Gt,W0=new L(0,0,0),X0=new L(1,1,1),ds=new L,qo=new L,Vn=new L,lf=new Gt,cf=new Qe,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cf.setFromEuler(this),this.setFromQuaternion(cf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},q0=0,hf=new L,pr=new Qe,Fi=new Gt,Yo=new L,Sa=new L,Y0=new L,$0=new Qe,uf=new L(1,0,0),df=new L(0,1,0),ff=new L(0,0,1),pf={type:"added"},Z0={type:"removed"},mr={type:"childadded",child:null},Lh={type:"childremoved",child:null},tn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Dn,n=new Qe,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(uf,t)}rotateY(t){return this.rotateOnAxis(df,t)}rotateZ(t){return this.rotateOnAxis(ff,t)}translateOnAxis(t,e){return hf.copy(t).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uf,t)}translateY(t){return this.translateOnAxis(df,t)}translateZ(t){return this.translateOnAxis(ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yo.copy(t):Yo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Sa,Yo,this.up):Fi.lookAt(Yo,Sa,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Fi),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pf),mr.child=t,this.dispatchEvent(mr),mr.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Z0),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pf),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,Y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,$0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new L(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},J0={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Dh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Pu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dh(a,r,t+1/3),this.g=Dh(a,r,t),this.b=Dh(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return te.workingToColorSpace(pn.copy(this),t),Math.round(Jt(pn.r*255,0,255))*65536+Math.round(Jt(pn.g*255,0,255))*256+Math.round(Jt(pn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=on){te.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+e,fs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fs),t.getHSL($o);let n=Da(fs.h,$o.h,e),s=Da(fs.s,$o.s,e),r=Da(fs.l,$o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Vt;Vt.NAMES=xp;var ka=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},hi=new L,Bi=new L,Nh=new L,zi=new L,gr=new L,_r=new L,mf=new L,Uh=new L,Oh=new L,Fh=new L,Bh=new Se,zh=new Se,kh=new Se,Gi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hi.subVectors(t,e),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hi.subVectors(s,e),Bi.subVectors(n,e),Nh.subVectors(t,e);let a=hi.dot(hi),o=hi.dot(Bi),l=hi.dot(Nh),c=Bi.dot(Bi),h=Bi.dot(Nh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Bh.setScalar(0),zh.setScalar(0),kh.setScalar(0),Bh.fromBufferAttribute(t,e),zh.fromBufferAttribute(t,n),kh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bh,r.x),a.addScaledVector(zh,r.y),a.addScaledVector(kh,r.z),a}static isFrontFacing(t,e,n,s){return hi.subVectors(n,e),Bi.subVectors(t,e),hi.cross(Bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),_r.subVectors(r,n),Uh.subVectors(t,n);let l=gr.dot(Uh),c=_r.dot(Uh);if(l<=0&&c<=0)return e.copy(n);Oh.subVectors(t,s);let h=gr.dot(Oh),d=_r.dot(Oh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(gr,a);Fh.subVectors(t,r);let f=gr.dot(Fh),g=_r.dot(Fh);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_r,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return mf.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(mf,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(gr,a).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(t.matrixWorld),this.union(Zo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ba),Jo.subVectors(this.max,ba),xr.subVectors(t.a,ba),yr.subVectors(t.b,ba),vr.subVectors(t.c,ba),ps.subVectors(yr,xr),ms.subVectors(vr,yr),qs.subVectors(xr,vr);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-qs.z,qs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,qs.z,0,-qs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-qs.y,qs.x,0];return!Hh(e,xr,yr,vr,Jo)||(e=[1,0,0,0,1,0,0,0,1],!Hh(e,xr,yr,vr,Jo))?!1:(Ko.crossVectors(ps,ms),e=[Ko.x,Ko.y,Ko.z],Hh(e,xr,yr,vr,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ki=[new L,new L,new L,new L,new L,new L,new L,new L],ui=new L,Zo=new Mi,xr=new L,yr=new L,vr=new L,ps=new L,ms=new L,qs=new L,ba=new L,Jo=new L,Ko=new L,Ys=new L;function Hh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ys.fromArray(i,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=t.dot(Ys),c=e.dot(Ys),h=n.dot(Ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ue=new L,jo=new Tt,K0=0,Mn=class extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=ai,this.version=0,this._normalizationScale=t!==void 0?Uc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Lu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Du(t,this.array)}};var Ha=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ga=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},j0=new Mi,Ea=new L,Gh=new L,Xi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):j0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ea.subVectors(t,this.center);let e=Ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ea.copy(t.center).add(Gh)),this.expandByPoint(Ea.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Q0=0,si=new Gt,Vh=new tn,Mr=new L,Wn=new Mi,Ta=new Mi,Ze=new L,Oe=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(E0(t)?Ga:Ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(Wn.min,Ta.min),Wn.expandByPoint(Ze),Ze.addVectors(Wn.max,Ta.max),Wn.expandByPoint(Ze)):(Wn.expandByPoint(Ta.min),Wn.expandByPoint(Ta.max))}Wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),Ze.add(Mr)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;let h=new L,d=new L,u=new L,f=new Tt,g=new Tt,M=new Tt,m=new L,p=new L;function x(D,R,N){c[D]=c[R]=c[N]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,R),M.fromBufferAttribute(r,N),d.sub(h),u.sub(h),g.sub(f),M.sub(f);let O=1/(g.x*M.y-M.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(O),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-M.x).multiplyScalar(O),o[D].add(m),o[R].add(m),o[N].add(m),l[D].add(p),l[R].add(p),l[N].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,R=E.length;D<R;++D){let N=E[D],O=N.start,W=N.count;for(let P=O,V=O+W;P<V;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let S=new L,A=new L,T=new L,_=new L;function b(D){T.fromBufferAttribute(s,D),_.copy(T);let R=o[D];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(_,R);let O=A.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,O)}for(let D=0,R=n.count;D<R;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Mn(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=gf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=gf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function gf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=As()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var vn=new L,Va=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Uc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Lu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Du(t,this.data.array)}},Wh=new L,tg=new L,eg=new Ft,Xn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wh.subVectors(n,e).cross(tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Wh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||eg.getNormalMatrix(t),s=this.coplanarPoint(Wh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ng=0,Si=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Jr,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Js=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sr,wa=new L,br=new L,Er=new L,Tr=new Tt,Aa=new Tt,yp=new Gt,Qo=new L,Ra=new L,tl=new L,_f=new Tt,Xh=new Tt,xf=new Tt,kr=class extends tn{constructor(t=new Js){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ll(e,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Va(n,3,0,!1)),Sr.setAttribute("uv",new Va(n,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),yp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;el(Qo.set(-.5,-.5,0),Er,a,br,s,r),el(Ra.set(.5,-.5,0),Er,a,br,s,r),el(tl.set(.5,.5,0),Er,a,br,s,r),_f.set(0,0),Xh.set(1,0),xf.set(1,1);let o=t.ray.intersectTriangle(Qo,Ra,tl,!1,wa);if(o===null&&(el(Ra.set(-.5,.5,0),Er,a,br,s,r),Xh.set(0,1),o=t.ray.intersectTriangle(Qo,tl,Ra,!1,wa),o===null))return;let l=t.ray.origin.distanceTo(wa);l<t.near||l>t.far||e.push({distance:l,point:wa.clone(),uv:Gi.getInterpolation(wa,Qo,Ra,tl,_f,Xh,xf,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function el(i,t,e,n,s,r){Tr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Aa.x=r*Tr.x-s*Tr.y,Aa.y=s*Tr.x+r*Tr.y):Aa.copy(Tr),i.copy(t),i.x+=Aa.x,i.y+=Aa.y,i.applyMatrix4(yp)}var Hi=new L,qh=new L,nl=new L,il=new L,_s=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qh.copy(t).add(e).multiplyScalar(.5),nl.copy(e).sub(t).normalize(),il.copy(this.origin).sub(qh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(nl),o=il.dot(this.direction),l=-il.dot(nl),c=il.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qh).addScaledVector(nl,u),f}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,x=n.y-a.y,E=n.z-a.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,b,D,R,N,O,W,P,V,Y,G,nt;if(S>=A&&S>=T?(D=l,O=d,V=g,nt=p,l>=0?(_=c,b=h,R=u,N=f,W=M,P=m,Y=x,G=E):(_=h,b=c,R=f,N=u,W=m,P=M,Y=E,G=x)):A>=T?(D=c,O=u,V=M,nt=x,c>=0?(_=h,b=l,R=f,N=d,W=m,P=g,Y=E,G=p):(_=l,b=h,R=d,N=f,W=g,P=m,Y=p,G=E)):(D=h,O=f,V=m,nt=E,h>=0?(_=l,b=c,R=d,N=u,W=g,P=M,Y=p,G=x):(_=c,b=l,R=u,N=d,W=M,P=g,Y=x,G=p)),D===0)return null;let q=_/D,Q=b/D,tt=1/D,wt=R-q*O,kt=N-Q*O,J=W-q*V,gt=P-Q*V,Mt=Y-q*nt,Lt=G-Q*nt,_t=Mt*gt-Lt*J,Wt=wt*Lt-kt*Mt,De=J*kt-gt*wt;if(s){if(_t<0||Wt<0||De<0)return null}else if((_t<0||Wt<0||De<0)&&(_t>0||Wt>0||De>0))return null;let Ut=_t+Wt+De;if(Ut===0)return null;let ue=tt*(_t*O+Wt*V+De*nt);return(Ut>0?ue<0:ue>0)?null:this.at(ue/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xs=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yf=new Gt,$s=new _s,sl=new Xi,vf=new L,rl=new L,al=new L,ol=new L,Yh=new L,ll=new L,Mf=new L,cl=new L,Nn=class extends tn{constructor(t=new Oe,e=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ll.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Yh.fromBufferAttribute(d,t),a?ll.addScaledVector(Yh,h):ll.addScaledVector(Yh.sub(e),h))}e.add(ll)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(r),$s.copy(t.ray).recast(t.near),!(sl.containsPoint($s.origin)===!1&&($s.intersectSphere(sl,vf)===null||$s.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(yf.copy(r).invert(),$s.copy(t.ray).applyMatrix4(yf),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$s)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,A=E;S<A;S+=3){let T=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=hl(this,p,t,n,c,h,d,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let x=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=hl(this,a,t,n,c,h,d,x,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,A=E;S<A;S+=3){let T=S,_=S+1,b=S+2;s=hl(this,p,t,n,c,h,d,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let x=m,E=m+1,S=m+2;s=hl(this,a,t,n,c,h,d,x,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ig(i,t,e,n,s,r,a,o){let l;if(t.side===wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ts,o),l===null)return null;cl.copy(o),cl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(cl);return c<e.near||c>e.far?null:{distance:c,point:cl.clone(),object:i}}function hl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,rl),i.getVertexPosition(l,al),i.getVertexPosition(c,ol);let h=ig(i,t,e,n,rl,al,ol,Mf);if(h){let d=new L;Gi.getBarycoord(Mf,rl,al,ol,d),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Gi.getNormal(rl,al,ol,u.normal),h.face=u,h.barycoord=d}return h}var Wa=class extends bn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},wr=new Gt,Sf=new Gt,ul=[],bf=new Mi,sg=new Gt,Ca=new Nn,Pa=new Xi,ys=class extends Nn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),bf.copy(t.boundingBox).applyMatrix4(wr),this.boundingBox.union(bf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),Pa.copy(t.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Pa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),t.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),Sf.multiplyMatrices(n,wr),Ca.matrixWorld=Sf,Ca.raycast(t,ul);for(let a=0,o=ul.length;a<o;a++){let l=ul[a];l.instanceId=r,l.object=this,e.push(l)}ul.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wa(new Float32Array(s*this.count),s,this.count,tc,ai));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zs=new Xi,rg=new Tt(.5,.5),dl=new L,vs=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],x=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-x).normalize(),s[1].setComponents(c+a,f+h,p+g,A+x).normalize(),s[2].setComponents(c+o,f+d,p+M,A+E).normalize(),s[3].setComponents(c-o,f-d,p-M,A-E).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,A-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-S).normalize(),e===ri)s[5].setComponents(c+l,f+u,p+m,A+S).normalize();else if(e===Dr)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);let e=rg.distanceTo(t.center);return Zs.radius=.7071067811865476+e,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dl.x=s.normal.x>0?t.max.x:t.min.x,dl.y=s.normal.y>0?t.max.y:t.min.y,dl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ef=new Gt,Dl=class i{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ef.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new vs),n[s].setFromProjectionMatrix(Ef,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new vs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ks=class extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tf=new Gt,Qh=new _s,fl=new Xi,pl=new L,Hr=class extends tn{constructor(t=new Oe,e=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,t.ray.intersectsSphere(fl)===!1)return;Tf.copy(s).invert(),Qh.copy(t.ray).applyMatrix4(Tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){let m=c.getX(g);pl.fromBufferAttribute(d,m),wf(pl,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)pl.fromBufferAttribute(d,g),wf(pl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wf(i,t,e,n,s,r,a){let o=Qh.distanceSqToPoint(i);if(o<e){let l=new L;Qh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xa=class extends bn{constructor(t=[],e=nr,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},js=class extends bn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends bn{constructor(t,e,n=fi,s,r,a,o=je,l=je,c,h=Wi,d=1){if(h!==Wi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Or(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qa=class extends qi{constructor(t,e=fi,n=nr,s,r,a=je,o=je,l,c=Wi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ya=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(M,m,p,x,E,S,A,T,_,b,D){let R=S/_,N=A/b,O=S/2,W=A/2,P=T/2,V=_+1,Y=b+1,G=0,nt=0,q=new L;for(let Q=0;Q<Y;Q++){let tt=Q*N-W;for(let wt=0;wt<V;wt++){let kt=wt*R-O;q[M]=kt*x,q[m]=tt*E,q[p]=P,c.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(wt/_),d.push(1-Q/b),G+=1}}for(let Q=0;Q<b;Q++)for(let tt=0;tt<_;tt++){let wt=u+tt+V*Q,kt=u+tt+V*(Q+1),J=u+(tt+1)+V*(Q+1),gt=u+(tt+1)+V*Q;l.push(wt,kt,gt),l.push(kt,J,gt),nt+=6}o.addGroup(f,nt,D),f+=nt,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $a=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yi=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],m=n/2,p=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function x(){let S=new L,A=new L,T=0,_=(e-t)/n;for(let b=0;b<=r;b++){let D=[],R=b/r,N=R*(e-t)+t;for(let O=0;O<=s;O++){let W=O/s,P=W*l+o,V=Math.sin(P),Y=Math.cos(P);A.x=N*V,A.y=-R*n+m,A.z=N*Y,d.push(A.x,A.y,A.z),S.set(V,_,Y).normalize(),u.push(S.x,S.y,S.z),f.push(W,1-R),D.push(g++)}M.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let R=M[D][b],N=M[D+1][b],O=M[D+1][b+1],W=M[D][b+1];(t>0||D!==0)&&(h.push(R,N,W),T+=3),(e>0||D!==r-1)&&(h.push(N,O,W),T+=3)}c.addGroup(p,T,0),p+=T}function E(S){let A=g,T=new Tt,_=new L,b=0,D=S===!0?t:e,R=S===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let N=g;for(let O=0;O<=s;O++){let P=O/s*l+o,V=Math.cos(P),Y=Math.sin(P);_.x=D*Y,_.y=m*R,_.z=D*V,d.push(_.x,_.y,_.z),u.push(0,R,0),T.x=V*.5+.5,T.y=Y*.5*R+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let W=A+O,P=N+O;S===!0?h.push(P,P+1,W):h.push(P+1,P,W),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qs=class i extends Yi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Za=class i extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new L,S=new L,A=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],S),f(e[T+2],A),l(E,S,A,x)}function l(x,E,S,A){let T=A+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let D=x.clone().lerp(S,b/T),R=E.clone().lerp(S,b/T),N=T-b;for(let O=0;O<=N;O++)O===0&&b===T?_[b][O]=D:_[b][O]=D.clone().lerp(R,O/N)}for(let b=0;b<T;b++)for(let D=0;D<2*(T-b)-1;D++){let R=Math.floor(D/2);D%2===0?(u(_[b][R+1]),u(_[b+1][R]),u(_[b][R])):(u(_[b][R+1]),u(_[b+1][R+1]),u(_[b+1][R]))}}function c(x){let E=new L;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(x),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){let x=new L;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let S=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(S,1-A)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){let E=a[x+0],S=a[x+2],A=a[x+4],T=Math.max(E,S,A),_=Math.min(E,S,A);T>.9&&_<.1&&(E<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,E){let S=x*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function g(){let x=new L,E=new L,S=new L,A=new L,T=new Tt,_=new Tt,b=new Tt;for(let D=0,R=0;D<r.length;D+=9,R+=6){x.set(r[D+0],r[D+1],r[D+2]),E.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),T.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),A.copy(x).add(E).add(S).divideScalar(3);let N=m(A);M(T,R+0,x,N),M(_,R+2,E,N),M(b,R+4,S,N)}}function M(x,E,S,A){A<0&&x.x===1&&(a[E]=x.x-1),S.x===0&&S.z===0&&(a[E]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Gr=class i extends Za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vr=class i extends Za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ms=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let x=p*u-a;for(let E=0;E<c;E++){let S=E*d-r;g.push(S,-x,0),M.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let E=x+c*p,S=x+c*(p+1),A=x+1+c*(p+1),T=x+1+c*p;f.push(E,S,T),f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ja=class i extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new L,g=new Tt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let p=0;p<n;p++){let x=p+m,E=x,S=x+n+1,A=x+n+2,T=x+1;o.push(E,S,T),o.push(S,A,T)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var En=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let x=[],E=p/n,S=a+E*o,A=t*Math.cos(S),T=Math.sqrt(t*t-A*A),_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let D=b/e,R=s+D*r;d.x=-T*Math.cos(R),d.y=A,d.z=T*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(D+_,1-E),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let E=h[p][x+1],S=h[p][x],A=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&f.push(E,S,T),(p!==n-1||l<Math.PI)&&f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Yn=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,x=(s+1)*(M-1)+m-1,E=(s+1)*(M-1)+m,S=(s+1)*M+m;l.push(p,x,S),l.push(x,E,S)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function sr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Af(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Af(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=sr(i[e]);for(let s in n)t[s]=n[s]}return t}function Af(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ag(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var vp={clone:sr,merge:mn},og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nl=class extends Ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ti=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ul=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ol=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ml(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kh:r=t,o=2*e-n;break;case jh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kh:a=t,l=2*n-e;break;case jh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,x=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*M+.5*g,S=f*m-f*M;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+x*a[c+A]+E*a[l+A]+S*a[d+A];return r}},Bl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},zl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kl=class extends Ss{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*u+g*2,x=d[p],E=d[p+1],S=t*u+g*2,A=h[S],T=h[S+1],_=hg(n,e,x,A,s);r[g]=Mp(_,M,E,T,m)}return r}};function Mp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function cg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Mp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=cg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ml(t.settings)&&(n.settings={inTangents:Ar(t.settings.inTangents,Array),outTangents:Ar(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new kl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Na:e=this.InterpolantFactoryMethodDiscrete;break;case Rl:e=this.InterpolantFactoryMethodLinear;break;case xl:e=this.InterpolantFactoryMethodSmooth;break;case Zh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ml(this.settings)&&(Rf(this.settings.inTangents,t),Rf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ml(this.settings)&&(Cf(this.settings.inTangents,t),Cf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&T0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Cf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Rl;var bs=class extends $n{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Na;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Hl.prototype.ValueTypeName="color";var Gl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Gl.prototype.ValueTypeName="number";var Vl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ka=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends $n{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Na;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new Xl,ql=class{constructor(t){this.manager=t!==void 0?t:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends tn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xr=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},$h=new Gt,Pf=new L,If=new L,ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),If.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(If),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){$h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix($h,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Dr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gl=new L,_l=new Qe,yi=new L,Qa=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gl,_l,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(gl,_l,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new L,Lf=new Tt,Df=new Tt,Je=class extends Qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gs.x,gs.y).multiplyScalar(-t/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-t/gs.z)}getViewSize(t,e){return this.getViewBounds(t,Lf,Df),e.subVectors(Df,Lf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(La*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var tu=class extends ja{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},to=class extends Wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},eo=class extends Qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eu=class extends ja{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rr=-90,Cr=1,Yr=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Rr,Cr,t,e);s.layers=this.layers,this.add(s);let r=new Je(Rr,Cr,t,e);r.layers=this.layers,this.add(r);let a=new Je(Rr,Cr,t,e);a.layers=this.layers,this.add(a);let o=new Je(Rr,Cr,t,e);o.layers=this.layers,this.add(o);let l=new Je(Rr,Cr,t,e);l.layers=this.layers,this.add(l);let c=new Je(Rr,Cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ou="\\[\\]\\.:\\/",ug=new RegExp("["+Ou+"]","g"),Fu="[^"+Ou+"]",dg="[^"+Ou.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",Fu),pg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),_g=new RegExp("^"+fg+pg+mg+gg+"$"),xg=["material","materials","bones","map"],nu=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ug,"")}static parseTrackName(t){let e=_g.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=nu;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vS=new Float32Array(1);var Nf=new Gt,no=class{constructor(t,e,n=0,s=1/0){this.ray=new _s(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ot("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,n=[]){return iu(t,this,n,e),n.sort(Uf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)iu(t[s],this,n,e);return n.sort(Uf),n}};function Uf(i,t){return i.distance-t.distance}function iu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)iu(r[a],t,e,!0)}}var $r=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var su=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var io=class extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Bu(i,t,e,n){let s=yg(n);switch(e){case Su:return i*t;case tc:return i*t/s.components*s.byteLength;case ec:return i*t/s.components*s.byteLength;case ws:return i*t*2/s.components*s.byteLength;case nc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case mi:return i*t*4/s.components*s.byteLength;case ic:return i*t*4/s.components*s.byteLength;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:case oc:return Math.max(i,16)*Math.max(t,8)/4;case sc:case ac:return Math.max(i,8)*Math.max(t,8)/2;case lc:case cc:case uc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:case ho:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uo:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(i){switch(i){case On:case xu:return{byteLength:1,components:1};case ta:case yu:case pi:return{byteLength:2,components:1};case jl:case Ql:return{byteLength:2,components:4};case fi:case Kl:case ai:return{byteLength:4,components:1};case vu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ug=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,f_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,W_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Sg,alphahash_pars_fragment:bg,alphamap_fragment:Eg,alphamap_pars_fragment:Tg,alphatest_fragment:wg,alphatest_pars_fragment:Ag,aomap_fragment:Rg,aomap_pars_fragment:Cg,batching_pars_vertex:Pg,batching_vertex:Ig,begin_vertex:Lg,beginnormal_vertex:Dg,bsdfs:Ng,iridescence_fragment:Ug,bumpmap_pars_fragment:Og,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:kg,color_fragment:Hg,color_pars_fragment:Gg,color_pars_vertex:Vg,color_vertex:Wg,common:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:$g,emissivemap_fragment:Zg,emissivemap_pars_fragment:Jg,colorspace_fragment:Kg,colorspace_pars_fragment:jg,envmap_fragment:Qg,envmap_common_pars_fragment:t_,envmap_pars_fragment:e_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:f_,envmap_vertex:i_,fog_vertex:s_,fog_pars_vertex:r_,fog_fragment:a_,fog_pars_fragment:o_,gradientmap_pars_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:h_,lights_lambert_pars_fragment:u_,lights_pars_begin:d_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:__,lights_physical_fragment:x_,lights_physical_pars_fragment:y_,lights_fragment_begin:v_,lights_fragment_maps:M_,lights_fragment_end:S_,lightprobes_pars_fragment:b_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:A_,map_fragment:R_,map_pars_fragment:C_,map_particle_fragment:P_,map_particle_pars_fragment:I_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:D_,morphinstance_vertex:N_,morphcolor_vertex:U_,morphnormal_vertex:O_,morphtarget_pars_vertex:F_,morphtarget_vertex:B_,normal_fragment_begin:z_,normal_fragment_maps:k_,normal_pars_fragment:H_,normal_pars_vertex:G_,normal_vertex:V_,normalmap_pars_fragment:W_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:Y_,iridescence_pars_fragment:$_,opaque_fragment:Z_,packing:J_,premultiplied_alpha_fragment:K_,project_vertex:j_,dithering_fragment:Q_,dithering_pars_fragment:tx,roughnessmap_fragment:ex,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ax,skinbase_vertex:ox,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:hx,specularmap_fragment:ux,specularmap_pars_fragment:dx,tonemapping_fragment:fx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:xx,uv_vertex:yx,worldpos_vertex:vx,background_vert:Mx,background_frag:Sx,backgroundCube_vert:bx,backgroundCube_frag:Ex,cube_vert:Tx,cube_frag:wx,depth_vert:Ax,depth_frag:Rx,distance_vert:Cx,distance_frag:Px,equirect_vert:Ix,equirect_frag:Lx,linedashed_vert:Dx,linedashed_frag:Nx,meshbasic_vert:Ux,meshbasic_frag:Ox,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:kx,meshnormal_vert:Hx,meshnormal_frag:Gx,meshphong_vert:Vx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:qx,meshtoon_vert:Yx,meshtoon_frag:$x,points_vert:Zx,points_frag:Jx,shadow_vert:Kx,shadow_frag:jx,sprite_vert:Qx,sprite_frag:ty},mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ri={basic:{uniforms:mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:mn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:mn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:mn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:mn([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:mn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:mn([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:mn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:mn([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:mn([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:mn([mt.lights,mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Ri.physical={uniforms:mn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Oc={r:0,b:0,g:0},ey=new Gt,Xp=new Ft;Xp.set(-1,0,0,0,1,0,0,0,1);function ny(i,t,e,n,s,r){let a=new Vt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let S=x.backgroundBlurriness>0;E=t.get(E,S)}return E}function g(x){let E=!1,S=f(x);S===null?m(a,o):S&&S.isColor&&(m(S,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,E){let S=f(E);S&&S.isCubeTexture?(c===void 0&&(c=new Nn(new Fe(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:sr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xp),c.material.toneMapped=te.getTransfer(S.colorSpace)!==ce,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Nn(new Ms(2,2),new Ei({name:"BackgroundMaterial",uniforms:sr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==ce,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(Oc,Uu(i)),e.buffers.color.setClear(Oc.r,Oc.g,Oc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:M,dispose:p}}function iy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,W,P,V){let Y=!1,G=d(N,P,W,O);r!==G&&(r=G,c(r.object)),Y=f(N,P,W,V),Y&&g(N,P,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(N,O,W,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,W,P){let V=P.wireframe===!0,Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);let G=N.isInstancedMesh===!0?N.id:0,nt=Y[G];nt===void 0&&(nt={},Y[G]=nt);let q=nt[W.id];q===void 0&&(q={},nt[W.id]=q);let Q=q[V];return Q===void 0&&(Q=u(l()),q[V]=Q),Q}function u(N){let O=[],W=[],P=[];for(let V=0;V<e;V++)O[V]=0,W[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,O,W,P){let V=r.attributes,Y=O.attributes,G=0,nt=W.getAttributes();for(let q in nt)if(nt[q].location>=0){let tt=V[q],wt=Y[q];if(wt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function g(N,O,W,P){let V={},Y=O.attributes,G=0,nt=W.getAttributes();for(let q in nt)if(nt[q].location>=0){let tt=Y[q];tt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),V[q]=wt,G++}r.attributes=V,r.attributesNum=G,r.index=P}function M(){let N=r.newAttributes;for(let O=0,W=N.length;O<W;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){let W=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;W[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),V[N]!==O&&(i.vertexAttribDivisor(N,O),V[N]=O)}function x(){let N=r.newAttributes,O=r.enabledAttributes;for(let W=0,P=O.length;W<P;W++)O[W]!==N[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function E(N,O,W,P,V,Y,G){G===!0?i.vertexAttribIPointer(N,O,W,V,Y):i.vertexAttribPointer(N,O,W,P,V,Y)}function S(N,O,W,P){M();let V=P.attributes,Y=W.getAttributes(),G=O.defaultAttributeValues;for(let nt in Y){let q=Y[nt];if(q.location>=0){let Q=V[nt];if(Q===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let tt=Q.normalized,wt=Q.itemSize,kt=t.get(Q);if(kt===void 0)continue;let J=kt.buffer,gt=kt.type,Mt=kt.bytesPerElement,Lt=gt===i.INT||gt===i.UNSIGNED_INT||Q.gpuType===Kl;if(Q.isInterleavedBufferAttribute){let _t=Q.data,Wt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,De=Q.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Ut=0;Ut<q.locationSize;Ut++)p(q.location+Ut,_t.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ut=0;Ut<q.locationSize;Ut++)m(q.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ut=0;Ut<q.locationSize;Ut++)E(q.location+Ut,wt/q.locationSize,gt,tt,Wt*Mt,(De+wt/q.locationSize*Ut)*Mt,Lt)}else{if(Q.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)p(q.location+_t,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t);i.bindBuffer(i.ARRAY_BUFFER,J);for(let _t=0;_t<q.locationSize;_t++)E(q.location+_t,wt/q.locationSize,gt,tt,wt*Mt,wt/q.locationSize*_t*Mt,Lt)}}else if(G!==void 0){let tt=G[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(q.location,tt);break;case 3:i.vertexAttrib3fv(q.location,tt);break;case 4:i.vertexAttrib4fv(q.location,tt);break;default:i.vertexAttrib1fv(q.location,tt)}}}}x()}function A(){D();for(let N in n){let O=n[N];for(let W in O){let P=O[W];for(let V in P){let Y=P[V];for(let G in Y)h(Y[G].object),delete Y[G];delete P[V]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let W in O){let P=O[W];for(let V in P){let Y=P[V];for(let G in Y)h(Y[G].object),delete Y[G];delete P[V]}}delete n[N.id]}function _(N){for(let O in n){let W=n[O];for(let P in W){let V=W[P];if(V[N.id]===void 0)continue;let Y=V[N.id];for(let G in Y)h(Y[G].object),delete Y[G];delete V[N.id]}}}function b(N){for(let O in n){let W=n[O],P=N.isInstancedMesh===!0?N.id:0,V=W[P];if(V!==void 0){for(let Y in V){let G=V[Y];for(let nt in G)h(G[nt].object),delete G[nt];delete V[Y]}delete W[P],Object.keys(W).length===0&&delete n[O]}}}function D(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function sy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ry(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==mi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==On&&_!==ai&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function ay(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Xn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,E=x*4,S=p.clippingState||null;l.value=S,S=h(g,u,E,f);for(let A=0;A!==E;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==M;++E,S+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var mo=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fe(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:tr});r.uniforms.tEquirect.value=e;let a=new Nn(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=Sn),new Yr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},bp=256,oy=3,ly=20,qp=256,Yp=16,cy=3,hy=new L,uy=new Vt,Bc=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yr(1,10,null),this._boxMesh=new Nn(new Fe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=hy}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(uy));let m=new Yr(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(bp,Iu(t))}_fromTexture(t,e){t.mapping===nr||t.mapping===Qr?this._setSize(t.image.length===0?bp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Ep(t,!1,!1),n=Math.log2(t)-oy;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ep(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===nr||t.mapping===Qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=dy(),this._integrationMaterial=fy());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Yp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-cy)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(qp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=py());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Ep(i,t,e){return new mo(i,{minFilter:$i,generateMipmaps:t,type:pi,colorSpace:Ua,depthBuffer:e})}function _o(i,t,e){return new Ei({name:i,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:wn,blending:tr,depthTest:!1,depthWrite:!1})}function dy(){return _o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fy(){return _o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function py(){return _o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ly}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Tp(){return _o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function wp(){return _o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function my(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===$l||f===Zl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new mo(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===$l||f===Zl,M=f===nr||f===Qr;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Bc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return g&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new Bc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===$l?u.mapping=nr:f===Zl&&(u.mapping=Qr),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function gy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ia("WebGLRenderer: "+n+" extension not supported."),s}}}function _y(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(g){let M=g.attributes;for(let m in M)t.update(M[m],i.ARRAY_BUFFER)}function d(g){let M=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=M!==null?M.array.length:m.array.length/3-1,E=m.count>=65535?Ga:Ha,S=new E(Math.ceil(x/3)*6,1),A=S.array;if(M!==null){let _=M.array;p=M.version;for(let b=0,D=0;b<x;b+=3){let R=_[b+0],N=_[b+1],O=_[b+2];A[D++]=R,A[D++]=N,A[D++]=N,A[D++]=O,A[D++]=O,A[D++]=R}}else{p=m.version;for(let _=0,b=0;_<x;_+=3){let D=_+0,R=_+1,N=_+2;A[b++]=D,A[b++]=R,A[b++]=R,A[b++]=N,A[b++]=N,A[b++]=D}}S.version=p;let T=r.get(g);T&&t.remove(T),r.set(g,S)}function u(g){let M=r.get(g);if(M){let m=g.index;m!==null&&M.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function xy(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vy(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let S=o.attributes.position.count*E,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*A*4*d),_=new za(T,S,A,d);_.type=ai,_.needsUpdate=!0;let b=E*4;for(let R=0;R<d;R++){let N=m[R],O=p[R],W=x[R],P=S*A*4*R;for(let V=0;V<N.count;V++){let Y=V*b;f===!0&&(s.fromBufferAttribute(N,V),T[P+Y+0]=s.x,T[P+Y+1]=s.y,T[P+Y+2]=s.z,T[P+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,V),T[P+Y+4]=s.x,T[P+Y+5]=s.y,T[P+Y+6]=s.z,T[P+Y+7]=0),M===!0&&(s.fromBufferAttribute(W,V),T[P+Y+8]=s.x,T[P+Y+9]=s.y,T[P+Y+10]=s.z,T[P+Y+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Tt(S,A)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function My(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Sy={[uu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[fu]:"CINEON_TONE_MAPPING",[jr]:"ACES_FILMIC_TONE_MAPPING",[mu]:"AGX_TONE_MAPPING",[gu]:"NEUTRAL_TONE_MAPPING",[pu]:"CUSTOM_TONE_MAPPING"};function by(i,t,e,n,s,r){let a=new qn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Oe;h.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new se([0,2,0,0,2,0],2));let d=new Nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Nn(h,d),f=new eo(-1,1,1,-1,0,1),g=null,M=null,m=!1,p,x=null,E=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new qn(T,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new qn(T,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new qi(T,_),r===!0&&(c.format=Zi,c.type=ir)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<E.length;D++){let R=E[D];R.setSize&&R.setSize(T,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===wi&&E.length===0)return!1;if(x=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=wi,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=p,m=!0;let _=a,b=o;for(let D=0;D<E.length;D++){let R=E[D];R.enabled!==!1&&(R.render(A,b,_,T),R.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||M!==A.toneMapping){g=A.outputColorSpace,M=A.toneMapping,d.defines={},te.getTransfer(g)===ce&&(d.defines.SRGB_TRANSFER="");let D=Sy[M];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var $p=new bn,Zp=new qi(1,1),Jp=new qa(1),Kp=new za,jp=new Il,Qp=new Xa,Ap=[],Rp=[],Cp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);function na(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ap[s];if(r===void 0&&(r=new Float32Array(s),Ap[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zc(i,t){let e=Rp[t];e===void 0&&(e=new Int32Array(t),Rp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Ip.set(n),i.uniformMatrix2fv(this.addr,!1,Ip),Ge(e,n)}}function Cy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),Ge(e,n)}}function Py(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Cp.set(n),i.uniformMatrix4fv(this.addr,!1,Cp),Ge(e,n)}}function Iy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Uy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function kc(i){return i.version===0&&(i.compareFunction=wu,i.needsUpdate=!0),i}function zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=kc(Zp):r=$p,e.setTexture2D(t||r,s)}function ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jp,s)}function Hy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=kc(Jp):r=Qp,e.setTextureCube(t||r,s)}function Gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kp,s)}function Vy(i){switch(i){case 5126:return Ey;case 35664:return Ty;case 35665:return wy;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(i,t){i.uniform1fv(this.addr,t)}function Xy(i,t){let e=na(t,this.size,2);i.uniform2fv(this.addr,e)}function qy(i,t){let e=na(t,this.size,3);i.uniform3fv(this.addr,e)}function Yy(i,t){let e=na(t,this.size,4);i.uniform4fv(this.addr,e)}function $y(i,t){let e=na(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zy(i,t){let e=na(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jy(i,t){let e=na(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ky(i,t){i.uniform1iv(this.addr,t)}function jy(i,t){i.uniform2iv(this.addr,t)}function Qy(i,t){i.uniform3iv(this.addr,t)}function tv(i,t){i.uniform4iv(this.addr,t)}function ev(i,t){i.uniform1uiv(this.addr,t)}function nv(i,t){i.uniform2uiv(this.addr,t)}function iv(i,t){i.uniform3uiv(this.addr,t)}function sv(i,t){i.uniform4uiv(this.addr,t)}function rv(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=kc(Zp):a=$p;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function av(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jp,r[a])}function ov(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=kc(Jp):a=Qp;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function lv(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kp,r[a])}function cv(i){switch(i){case 5126:return Wy;case 35664:return Xy;case 35665:return qy;case 35666:return Yy;case 35674:return $y;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Ky;case 35667:case 35671:return jy;case 35668:case 35672:return Qy;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}var Hu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vy(e.type)}},Gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cv(e.type)}},Vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zu=/(\w+)(\])?(\[|\.)?/g;function Lp(i,t){i.seq.push(t),i.map[t.id]=t}function hv(i,t,e){let n=i.name,s=n.length;for(zu.lastIndex=0;;){let r=zu.exec(n),a=zu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lp(e,c===void 0?new Hu(o,i,t):new Gu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Vu(o),Lp(e,d)),e=d}}}var ea=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);hv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Dp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var uv=37297,dv=0;function fv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Np=new Ft;function pv(i){te._getMatrix(Np,te.workingColorSpace,i);let t=`mat3( ${Np.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Oa:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Up(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+fv(i.getShaderSource(t),o)}else return r}function mv(i,t){let e=pv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gv={[uu]:"Linear",[du]:"Reinhard",[fu]:"Cineon",[jr]:"ACESFilmic",[mu]:"AgX",[gu]:"Neutral",[pu]:"Custom"};function _v(i,t){let e=gv[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fc=new L;function xv(){te.getLuminanceCoefficients(Fc);let i=Fc.x.toFixed(4),t=Fc.y.toFixed(4),e=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function vv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function po(i){return i!==""}function Op(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Fp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(Sv,bv)}function bv(i,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Wu(e)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(Ev,Tv)}function Tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var wv={[so]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function Av(i){return wv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rv={[Qr]:"ENVMAP_MODE_REFRACTION"};function Cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pv={[hu]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[sp]:"ENVMAP_BLENDING_ADD"};function Iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pv[i.combine]||"ENVMAP_BLENDING_NONE"}function Lv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Av(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Cv(e),d=Iv(e),u=yv(e),f=vv(r),g=s.createProgram(),M,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(po).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(po).join(`
`),m.length>0&&(m+=`
`)):(M=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),m=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==wi?_v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(po).join(`
`)),a=Wu(a),a=Op(a,e),a=Fp(a,e),o=Wu(o),o=Op(o,e),o=Fp(o,e),a=Bp(a),o=Bp(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+M+a,E=p+m+o,S=Dp(s,s.VERTEX_SHADER,x),A=Dp(s,s.FRAGMENT_SHADER,E);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(S)||"",W=s.getShaderInfoLog(A)||"",P=N.trim(),V=O.trim(),Y=W.trim(),G=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,A);else{let q=Up(s,S,"vertex"),Q=Up(s,A,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?Nt("WebGLProgram: Program Info Log:",P):(V===""||Y==="")&&(nt=!1);nt&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:V,prefix:M},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(S),s.deleteShader(A),_=new ea(s,g),b=Mv(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,uv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var Dv=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new qu(t),e.set(t,n)),n}},qu=class{constructor(t){this.id=Dv++,this.code=t,this.usedTimes=0}};function Nv(i){return i===ws||i===ho||i===uo}function Uv(i,t,e,n,s,r){let a=new Fr,o=new Xu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,D,R,N,O){let W=R.fog,P=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||V,Y),nt=u[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,tt=Q!==void 0?Q.length:0,wt=0;P.morphAttributes.position!==void 0&&(wt=1),P.morphAttributes.normal!==void 0&&(wt=2),P.morphAttributes.color!==void 0&&(wt=3);let kt,J,gt,Mt;if(nt){let pt=Ri[nt];kt=pt.vertexShader,J=pt.fragmentShader}else{kt=_.vertexShader,J=_.fragmentShader;let pt=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,pt,de),gt=pt.id,Mt=de.id}let Lt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Wt=N.isInstancedMesh===!0,De=N.isBatchedMesh===!0,Ut=!!_.map,ue=!!_.matcap,me=!!G,Kt=me&&G.isPMREMTexture===!0,rn=!!_.aoMap,ze=!!_.lightMap,Ln=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,xi=!!_.displacementMap,qe=!!_.emissiveMap,ti=!!_.metalnessMap,ei=!!_.roughnessMap,ni=_.anisotropy>0,U=_.clearcoat>0,ii=_.diffuseRoughness>0,ve=_.dispersion>0,Me=_.retroreflectivity>0,ft=_.iridescence>0,ke=_.sheen>0,Dt=_.transmission>0,zt=ni&&!!_.anisotropyMap,w=U&&!!_.clearcoatMap,y=U&&!!_.clearcoatNormalMap,z=U&&!!_.clearcoatRoughnessMap,et=ii&&!!_.diffuseRoughnessMap,j=ft&&!!_.iridescenceMap,rt=ft&&!!_.iridescenceThicknessMap,ht=ke&&!!_.sheenColorMap,$=ke&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ot=!!_.specularColorMap,C=!!_.specularIntensityMap,K=Dt&&!!_.transmissionMap,X=Dt&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,at=_.alphaTest>0,Rt=!!_.alphaHash,qt=!!_.extensions,it=wi;_.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(it=i.toneMapping);let Pt=Kt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Xt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:J,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:De,batchingColor:De&&N._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&N.instanceColor!==null,instancingMorph:Wt&&N.morphTexture!==null,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ut,matcap:ue,envMap:me,envMapMode:me&&G.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?Pt.length-1:null,envMapSize:Kt?Pt[0].width:null,aoMap:rn,lightMap:ze,bumpMap:Ln,normalMap:Ee,displacementMap:xi,emissiveMap:qe,normalMapObjectSpace:Ee&&_.normalMapType===op,normalMapTangentSpace:Ee&&_.normalMapType===Nc,packedNormalMap:Ee&&_.normalMapType===Nc&&Nv(_.normalMap.format),metalnessMap:ti,roughnessMap:ei,anisotropy:ni,anisotropyMap:zt,clearcoat:U,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:ii,diffuseRoughnessMap:et,dispersion:ve,retroreflection:Me,iridescence:ft,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:ke,sheenColorMap:ht,sheenRoughnessMap:$,specularMap:Z,specularColorMap:ot,specularIntensityMap:C,transmission:Dt,transmissionMap:K,thicknessMap:X,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Jr&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Rt,combine:_.combine,mapUv:Ut&&f(_.map.channel),aoMapUv:rn&&f(_.aoMap.channel),lightMapUv:ze&&f(_.lightMap.channel),bumpMapUv:Ln&&f(_.bumpMap.channel),normalMapUv:Ee&&f(_.normalMap.channel),displacementMapUv:xi&&f(_.displacementMap.channel),emissiveMapUv:qe&&f(_.emissiveMap.channel),metalnessMapUv:ti&&f(_.metalnessMap.channel),roughnessMapUv:ei&&f(_.roughnessMap.channel),anisotropyMapUv:zt&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:ot&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:st&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ee||ni),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ut||st),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:wt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ut&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:qe&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Un,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&_.extensions.multiDraw===!0||De)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function M(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(b,_),p(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let b=u[_.type],D;if(b){let R=Ri[b];D=vp.clone(R.uniforms)}else D=_.uniforms;return D}function E(_,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new Lv(i,b,_,s),c.push(D),h.set(b,D)),D}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:x,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function Ov(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=g,x.materialVariant=a(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function l(u,f,g,M,m,p,x){x.reversedDepth===!0&&(m=-m);let E=o(u,f,g,M,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,M,m,p){let x=o(u,f,g,M,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||Fv),n.length>1&&n.sort(f||kp),s.length>1&&s.sort(f||kp)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Bv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Hp,i.set(n,[a])):s>=r.length?(a=new Hp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function kv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hv=0;function Gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vv(i){let t=new zv,e=kv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Gt,a=new Gt;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,x=0,E=0,S=0,A=0,T=0,_=0,b=0,D=0,R=0;c.sort(Gv);for(let O=0,W=c.length;O<W;O++){let P=c[O],V=P.color,Y=P.intensity,G=P.distance,nt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ws?nt=P.shadow.map.texture:nt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*Y,d+=V.g*Y,u+=V.b*Y;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],Y);R++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,tt=e.get(P);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=nt;let wt=Q.getViewportCount();for(let kt=0;kt<wt;kt++)n.sunShadowMatrix[M+kt]=Q.getMatrix(kt),n.sunShadowCascade[M+kt]=Q._cascadeData[kt];M+=wt,g++}n.sun[f]=q,f++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,tt=e.get(P);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=P.shadow.matrix,A++}n.directional[m]=q,m++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(V).multiplyScalar(Y),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[x]=q;let Q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[x]=Q.matrix,P.castShadow){let tt=e.get(P);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=nt,_++}x++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(V).multiplyScalar(Y),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=q,E++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let Q=P.shadow,tt=e.get(P);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=q,p++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(Y),q.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[S]=q,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=E,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=R,n.version=Hv++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let S=c[x];if(S.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(S.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Gp(i){let t=new Vv(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gp(i),t.set(s,[o])):r>=a.length?(o=new Gp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],$v=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Vp=new Gt,fo=new L,ku=new L;function Zv(i,t,e){let n=new vs,s=new Tt,r=new Tt,a=new Se,o=new Ul,l=new Ol,c={},h=e.maxTextureSize,d={[Ts]:wn,[wn]:Ts,[Un]:Un},u=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Nn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let p=this.type;this.render=function(T,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Bf&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(tr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=p!==this.type;W&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){let Y=T[P],G=Y.shadow;if(G===void 0){Nt("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Zr){if(Y.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qn(s.x,s.y,{format:ws,type:pi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new qi(s.x,s.y,ai),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=Wi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je}else Y.isPointLight?(G.map=new mo(s.x),G.map.depthTexture=new qa(s.x,fi)):(G.map=new qn(s.x,s.y),G.map.depthTexture=new qi(s.x,s.y,fi)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=Wi,this.type===so?(G.map.depthTexture.compareFunction=q?Tu:Eu,G.map.depthTexture.minFilter=Sn,G.map.depthTexture.magFilter=Sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let wt=0;wt<Q;wt++){let kt=G.getCamera(wt);if(Y.isPointLight){let J=G.camera,gt=G.matrix,Mt=Y.distance||J.far;Mt!==J.far&&(J.far=Mt,J.updateProjectionMatrix()),fo.setFromMatrixPosition(Y.matrixWorld),J.position.copy(fo),ku.copy(J.position),ku.add(Yv[wt]),J.up.copy($v[wt]),J.lookAt(ku),J.updateMatrixWorld(),gt.makeTranslation(-fo.x,-fo.y,-fo.z),Vp.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Vp,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(G.map),i.clear());let J=G.getViewport(wt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=G.getFrustum(wt),S(_,b,kt,Y,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Zr&&x(G,b),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,R,N)};function x(T,_){let b=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new qn(s.x,s.y,{format:ws,type:pi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,b,f,M,null)}function E(T,_,b,D){let R=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=R.uuid,W=_.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let V=P[W];V===void 0&&(V=R.clone(),P[W]=V,_.addEventListener("dispose",A)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,D===Zr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=b}return R}function S(T,_,b,D,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Zr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=t.update(T),V=T.material;if(Array.isArray(V)){let Y=P.groups;for(let G=0,nt=Y.length;G<nt;G++){let q=Y[G],Q=V[q.materialIndex];if(Q&&Q.visible){let tt=E(T,Q,D,N);T.onBeforeShadow(i,T,_,b,P,tt,q),i.renderBufferDirect(b,null,P,tt,T,q),T.onAfterShadow(i,T,_,b,P,tt,q)}}}else if(V.visible){let Y=E(T,V,D,N);T.onBeforeShadow(i,T,_,b,P,Y,null),i.renderBufferDirect(b,null,P,Y,T,null),T.onAfterShadow(i,T,_,b,P,Y,null)}}let W=T.children;for(let P=0,V=W.length;P<V;P++)S(W[P],_,b,D,R,N)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let D=c[b],R=T.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function Jv(i,t){function e(){let C=!1,K=new Se,X=null,lt=new Se(0,0,0,0);return{setMask:function(st){X!==st&&!C&&(i.colorMask(st,st,st,st),X=st)},setLocked:function(st){C=st},setClear:function(st,at,Rt,qt,it){it===!0&&(st*=qt,at*=qt,Rt*=qt),K.set(st,at,Rt,qt),lt.equals(K)===!1&&(i.clearColor(st,at,Rt,qt),lt.copy(K))},reset:function(){C=!1,X=null,lt.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,X=null,lt=null,st=null;return{setReversed:function(at){if(K!==at){let Rt=t.get("EXT_clip_control");at?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),K=at;let qt=st;st=null,this.setClear(qt)}},getReversed:function(){return K},setTest:function(at){at?_t(i.DEPTH_TEST):Wt(i.DEPTH_TEST)},setMask:function(at){X!==at&&!C&&(i.depthMask(at),X=at)},setFunc:function(at){if(K&&(at=_p[at]),lt!==at){switch(at){case vl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=at}},setLocked:function(at){C=at},setClear:function(at){st!==at&&(st=at,K&&(at=1-at),i.clearDepth(at))},reset:function(){C=!1,X=null,lt=null,st=null,K=!1}}}function s(){let C=!1,K=null,X=null,lt=null,st=null,at=null,Rt=null,qt=null,it=null;return{setTest:function(Pt){C||(Pt?_t(i.STENCIL_TEST):Wt(i.STENCIL_TEST))},setMask:function(Pt){K!==Pt&&!C&&(i.stencilMask(Pt),K=Pt)},setFunc:function(Pt,Xt,pt){(X!==Pt||lt!==Xt||st!==pt)&&(i.stencilFunc(Pt,Xt,pt),X=Pt,lt=Xt,st=pt)},setOp:function(Pt,Xt,pt){(at!==Pt||Rt!==Xt||qt!==pt)&&(i.stencilOp(Pt,Xt,pt),at=Pt,Rt=Xt,qt=pt)},setLocked:function(Pt){C=Pt},setClear:function(Pt){it!==Pt&&(i.clearStencil(Pt),it=Pt)},reset:function(){C=!1,K=null,X=null,lt=null,st=null,at=null,Rt=null,qt=null,it=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,x=null,E=null,S=null,A=null,T=null,_=null,b=new Vt(0,0,0),D=0,R=!1,N=null,O=null,W=null,P=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=nt>=2);let Q=null,tt={},wt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),J=new Se().fromArray(wt),gt=new Se().fromArray(kt);function Mt(C,K,X,lt){let st=new Uint8Array(4),at=i.createTexture();i.bindTexture(C,at),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<X;Rt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(K+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return at}let Lt={};Lt[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Ir),Ln(!1),Ee(ru),_t(i.CULL_FACE),rn(tr);function _t(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Wt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function De(C,K){return u[C]!==K?(i.bindFramebuffer(C,K),u[C]=K,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ut(C,K){let X=g,lt=!1;if(C){X=f.get(K),X===void 0&&(X=[],f.set(K,X));let st=C.textures;if(X.length!==st.length||X[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Rt=st.length;at<Rt;at++)X[at]=i.COLOR_ATTACHMENT0+at;X.length=st.length,lt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,lt=!0);lt&&i.drawBuffers(X)}function ue(C){return M!==C?(i.useProgram(C),M=C,!0):!1}let me={[er]:i.FUNC_ADD,[kf]:i.FUNC_SUBTRACT,[Hf]:i.FUNC_REVERSE_SUBTRACT};me[Gf]=i.MIN,me[Vf]=i.MAX;let Kt={[Wf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[lu]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[cu]:i.ONE_MINUS_SRC_ALPHA,[Kf]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[Qf]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function rn(C,K,X,lt,st,at,Rt,qt,it,Pt){if(C===tr){m===!0&&(Wt(i.BLEND),m=!1);return}if(m===!1&&(_t(i.BLEND),m=!0),C!==zf){if(C!==p||Pt!==R){if((x!==er||A!==er)&&(i.blendEquation(i.FUNC_ADD),x=er,A=er),Pt)switch(C){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",C);break}else switch(C){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",C);break}E=null,S=null,T=null,_=null,b.set(0,0,0),D=0,p=C,R=Pt}return}st=st||K,at=at||X,Rt=Rt||lt,(K!==x||st!==A)&&(i.blendEquationSeparate(me[K],me[st]),x=K,A=st),(X!==E||lt!==S||at!==T||Rt!==_)&&(i.blendFuncSeparate(Kt[X],Kt[lt],Kt[at],Kt[Rt]),E=X,S=lt,T=at,_=Rt),(qt.equals(b)===!1||it!==D)&&(i.blendColor(qt.r,qt.g,qt.b,it),b.copy(qt),D=it),p=C,R=!1}function ze(C,K){C.side===Un?Wt(i.CULL_FACE):_t(i.CULL_FACE);let X=C.side===wn;K&&(X=!X),Ln(X),C.blending===Jr&&C.transparent===!1?rn(tr):rn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),qe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ln(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function Ee(C){C!==Of?(_t(i.CULL_FACE),C!==O&&(C===ru?i.cullFace(i.BACK):C===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Wt(i.CULL_FACE),O=C}function xi(C){C!==W&&(G&&i.lineWidth(C),W=C)}function qe(C,K,X){C?(_t(i.POLYGON_OFFSET_FILL),(P!==K||V!==X)&&(P=K,V=X,a.getReversed()&&(K=-K,X=-X),i.polygonOffset(K,X))):Wt(i.POLYGON_OFFSET_FILL)}function ti(C){C?_t(i.SCISSOR_TEST):Wt(i.SCISSOR_TEST)}function ei(C){C===void 0&&(C=i.TEXTURE0+Y-1),Q!==C&&(i.activeTexture(C),Q=C)}function ni(C,K,X){X===void 0&&(Q===null?X=i.TEXTURE0+Y-1:X=Q);let lt=tt[X];lt===void 0&&(lt={type:void 0,texture:void 0},tt[X]=lt),(lt.type!==C||lt.texture!==K)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(C,K||Lt[C]),lt.type=C,lt.texture=K)}function U(){let C=tt[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ii(){try{i.compressedTexImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ve(){try{i.compressedTexImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Me(){try{i.texSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ft(){try{i.texSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ke(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function zt(){try{i.texStorage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function w(){try{i.texStorage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function y(){try{i.texImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function et(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function j(C,K){d[C]!==K&&(i.pixelStorei(C,K),d[C]=K)}function rt(C){J.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function ht(C){gt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),gt.copy(C))}function $(C,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let lt=X.get(C);lt===void 0&&(lt=i.getUniformBlockIndex(K,C.name),i.uniformBlockBinding(K,lt,lt),X.set(C,lt))}function Z(C,K,X){let st=c.get(K).get(C);l[st]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,X),l[st]=X)}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,tt={},u={},l={},f=new WeakMap,g=[],M=null,m=!1,p=null,x=null,E=null,S=null,A=null,T=null,_=null,b=new Vt(0,0,0),D=0,R=!1,N=null,O=null,W=null,P=null,V=null,J.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Wt,bindFramebuffer:De,drawBuffers:Ut,useProgram:ue,setBlending:rn,setMaterial:ze,setFlipSided:Ln,setCullFace:Ee,setLineWidth:xi,setPolygonOffset:qe,setScissorTest:ti,activeTexture:ei,bindTexture:ni,unbindTexture:U,compressedTexImage2D:ii,compressedTexImage3D:ve,texImage2D:y,texImage3D:z,pixelStorei:j,getParameter:et,updateUBOMapping:$,uniformBlockBinding:Z,texStorage2D:zt,texStorage3D:w,texSubImage2D:Me,texSubImage3D:ft,compressedTexSubImage2D:ke,compressedTexSubImage3D:Dt,scissor:rt,viewport:ht,reset:ot}}function Kv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,M=new FinalizationRegistry(w=>g.delete(w)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,y){return m?new OffscreenCanvas(w,y):Fa("canvas")}function x(w,y,z){let et=1,j=zt(w);if((j.width>z||j.height>z)&&(et=z/Math.max(j.width,j.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let rt=Math.floor(et*j.width),ht=Math.floor(et*j.height);u===void 0&&(u=p(rt,ht));let $=y?p(rt,ht):u;return $.width=rt,$.height=ht,$.getContext("2d").drawImage(w,0,0,rt,ht),Nt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+rt+"x"+ht+")."),$}else return"data"in w&&Nt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,y,z,et,j,rt=!1){if(w!==null){if(i[w]!==void 0)return i[w];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;et&&(ht=t.get("EXT_texture_norm16"),ht||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&ht&&($=ht.R16_EXT),z===i.SHORT&&ht&&($=ht.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),y===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&ht&&($=ht.RG16_EXT),z===i.SHORT&&ht&&($=ht.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&ht&&($=ht.RGB16_EXT),z===i.SHORT&&ht&&($=ht.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){let Z=rt?Oa:te.getTransfer(j);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Z===ce?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ht&&($=ht.RGBA16_EXT),z===i.SHORT&&ht&&($=ht.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(w,y){let z;return w?y===null||y===fi||y===ir?z=i.DEPTH24_STENCIL8:y===ai?z=i.DEPTH32F_STENCIL8:y===ta&&(z=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fi||y===ir?z=i.DEPTH_COMPONENT24:y===ai?z=i.DEPTH_COMPONENT32F:y===ta&&(z=i.DEPTH_COMPONENT16),z}function b(w,y){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==je&&w.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function D(w){let y=new WeakRef(w);n.get(w).__ref=y,g.add(y),M.register(w,y,y)}function R(w){let y=n.get(w).__ref;y!==void 0&&(g.delete(y),M.unregister(y))}function N(w){W(w.target)}function O(w){P(w.target)}function W(w){w.removeEventListener("dispose",N),R(w),Y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function P(w){w.removeEventListener("dispose",O),R(w),nt(w)}function V(){for(let w of g){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):W(y))}g.clear(),d.clear()}function Y(w){let y=n.get(w);if(y.__webglInit===void 0)return;let z=w.source,et=f.get(z);if(et){let j=et[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(w),Object.keys(et).length===0&&f.delete(z)}n.remove(w)}function G(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let z=w.source,et=f.get(z);delete et[y.__cacheKey],a.memory.textures--}function nt(w){let y=n.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=w.depthTexture;if(z&&z.renderTarget===w&&W(z),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let rt=0;rt<y.__webglFramebuffer[j].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[j][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let et=w.textures;for(let j=0,rt=et.length;j<rt;j++){let ht=n.get(et[j]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(et[j])}n.remove(w)}let q=0;function Q(){q=0}function tt(){return q}function wt(w){q=w}function kt(){let w=q;return w>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,w}function J(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function gt(w,y){let z=n.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let et=w.image;if(et===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,w,y);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function Mt(w,y){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ze(z,w,y);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Lt(w,y){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ze(z,w,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function _t(w,y){let z=n.get(w);if(w.version>0&&z.__version!==w.version){Ln(z,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let Wt={[Lr]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},De={[je]:i.NEAREST,[rp]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Jl]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},Ut={[cp]:i.NEVER,[wu]:i.ALWAYS,[hp]:i.LESS,[Eu]:i.LEQUAL,[up]:i.EQUAL,[Tu]:i.GEQUAL,[dp]:i.GREATER,[fp]:i.NOTEQUAL};function ue(w,y){if(y.type===ai&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===Jl||y.magFilter===ro||y.magFilter===$i||y.minFilter===Sn||y.minFilter===Jl||y.minFilter===ro||y.minFilter===$i)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Wt[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Wt[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Wt[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,De[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,De[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===je||y.minFilter!==ro&&y.minFilter!==$i||y.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function me(w,y){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",N),D(y));let et=y.source,j=f.get(et);j===void 0&&(j={},f.set(et,j));let rt=J(y);if(rt!==w.__cacheKey){j[rt]===void 0&&(j[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[rt].usedTimes++;let ht=j[w.__cacheKey];ht!==void 0&&(j[w.__cacheKey].usedTimes--,ht.usedTimes===0&&G(y)),w.__cacheKey=rt,w.__webglTexture=j[rt].texture}return z}function Kt(w,y,z){return Math.floor(Math.floor(w/z)/y)}function rn(w,y,z,et){let rt=w.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,et,y.data);else{rt.sort((C,K)=>C.start-K.start);let ht=0;for(let C=1;C<rt.length;C++){let K=rt[ht],X=rt[C],lt=K.start+K.count,st=Kt(X.start,y.width,4),at=Kt(K.start,y.width,4);X.start<=lt+1&&st===at&&Kt(X.start+X.count-1,y.width,4)===st?K.count=Math.max(K.count,X.start+X.count-K.start):(++ht,rt[ht]=X)}rt.length=ht+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let C=0,K=rt.length;C<K;C++){let X=rt[C],lt=Math.floor(X.start/4),st=Math.ceil(X.count/4),at=lt%y.width,Rt=Math.floor(lt/y.width),qt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(i.TEXTURE_2D,0,at,Rt,qt,it,z,et,y.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function ze(w,y,z){let et=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=i.TEXTURE_3D);let j=me(w,y),rt=y.source;e.bindTexture(et,w.__webglTexture,i.TEXTURE0+z);let ht=n.get(rt);if(rt.version!==ht.__version||j===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let it=te.getPrimaries(te.workingColorSpace),Pt=y.colorSpace===Ji?null:te.getPrimaries(y.colorSpace),Xt=y.colorSpace===Ji||it===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Z=x(y.image,!1,s.maxTextureSize);Z=Dt(y,Z);let ot=r.convert(y.format,y.colorSpace),C=r.convert(y.type),K=T(y.internalFormat,ot,C,y.normalized,y.colorSpace,y.isVideoTexture);ue(et,y);let X,lt=y.mipmaps,st=y.isVideoTexture!==!0,at=ht.__version===void 0||j===!0,Rt=rt.dataReady,qt=b(y,Z);if(y.isDepthTexture)K=_(y.format===Zi,y.type),at&&(st?e.texStorage2D(i.TEXTURE_2D,1,K,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,ot,C,null));else if(y.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(i.TEXTURE_2D,qt,K,lt[0].width,lt[0].height);for(let it=0,Pt=lt.length;it<Pt;it++)X=lt[it],st?Rt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,X.width,X.height,ot,C,X.data):e.texImage2D(i.TEXTURE_2D,it,K,X.width,X.height,0,ot,C,X.data);y.generateMipmaps=!1}else st?(at&&e.texStorage2D(i.TEXTURE_2D,qt,K,Z.width,Z.height),Rt&&rn(y,Z,ot,C)):e.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,ot,C,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){st&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,K,lt[0].width,lt[0].height,Z.depth);for(let it=0,Pt=lt.length;it<Pt;it++)if(X=lt[it],y.format!==mi)if(ot!==null)if(st){if(Rt)if(y.layerUpdates.size>0){let Xt=Bu(X.width,X.height,y.format,y.type);for(let pt of y.layerUpdates){let de=X.data.subarray(pt*Xt/X.data.BYTES_PER_ELEMENT,(pt+1)*Xt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,pt,X.width,X.height,1,ot,de)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,X.width,X.height,Z.depth,ot,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,K,X.width,X.height,Z.depth,0,X.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,X.width,X.height,Z.depth,ot,C,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,K,X.width,X.height,Z.depth,0,ot,C,X.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{st&&at&&e.texStorage2D(i.TEXTURE_2D,qt,K,lt[0].width,lt[0].height);for(let it=0,Pt=lt.length;it<Pt;it++)X=lt[it],y.format!==mi?ot!==null?st?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,X.width,X.height,ot,X.data):e.compressedTexImage2D(i.TEXTURE_2D,it,K,X.width,X.height,0,X.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Rt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,X.width,X.height,ot,C,X.data):e.texImage2D(i.TEXTURE_2D,it,K,X.width,X.height,0,ot,C,X.data)}else if(y.isDataArrayTexture)if(st){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,K,Z.width,Z.height,Z.depth),Rt)if(y.layerUpdates.size>0){let it=Bu(Z.width,Z.height,y.format,y.type);for(let Pt of y.layerUpdates){let Xt=Z.data.subarray(Pt*it/Z.data.BYTES_PER_ELEMENT,(Pt+1)*it/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,Z.width,Z.height,1,ot,C,Xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ot,C,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,ot,C,Z.data);else if(y.isData3DTexture)st?(at&&e.texStorage3D(i.TEXTURE_3D,qt,K,Z.width,Z.height,Z.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ot,C,Z.data)):e.texImage3D(i.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,ot,C,Z.data);else if(y.isFramebufferTexture){if(at)if(st)e.texStorage2D(i.TEXTURE_2D,qt,K,Z.width,Z.height);else{let it=Z.width,Pt=Z.height;for(let Xt=0;Xt<qt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,K,it,Pt,0,ot,C,null),it>>=1,Pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Z.parentNode!==it){it.appendChild(Z),d.add(y),it.onpaint=Pt=>{let Xt=Pt.changedElements;for(let pt of d)Xt.includes(pt.image)&&(pt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Xt=i.RGBA,pt=i.RGBA,de=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,pt,de,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){let it=zt(lt[0]);e.texStorage2D(i.TEXTURE_2D,qt,K,it.width,it.height)}for(let it=0,Pt=lt.length;it<Pt;it++)X=lt[it],st?Rt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ot,C,X):e.texImage2D(i.TEXTURE_2D,it,K,ot,C,X);y.generateMipmaps=!1}else if(st){if(at){let it=zt(Z);e.texStorage2D(i.TEXTURE_2D,qt,K,it.width,it.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,C,Z)}else e.texImage2D(i.TEXTURE_2D,0,K,ot,C,Z);E(y)&&y.mipmapsAutoUpdate===!0&&S(et),ht.__version=rt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ln(w,y,z){if(y.image.length!==6)return;let et=me(w,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let rt=n.get(j);if(j.version!==rt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);let ht=te.getPrimaries(te.workingColorSpace),$=y.colorSpace===Ji?null:te.getPrimaries(y.colorSpace),Z=y.colorSpace===Ji||ht===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ot=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,K=[];for(let pt=0;pt<6;pt++)!ot&&!C?K[pt]=x(y.image[pt],!0,s.maxCubemapSize):K[pt]=C?y.image[pt].image:y.image[pt],K[pt]=Dt(y,K[pt]);let X=K[0],lt=r.convert(y.format,y.colorSpace),st=r.convert(y.type),at=T(y.internalFormat,lt,st,y.normalized,y.colorSpace),Rt=y.isVideoTexture!==!0,qt=rt.__version===void 0||et===!0,it=j.dataReady,Pt=b(y,X);ue(i.TEXTURE_CUBE_MAP,y);let Xt;if(y.isDepthTexture){if(at=_(y.format===Zi,y.type),qt)if(Rt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,at,X.width,X.height);else for(let pt=0;pt<6;pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,X.width,X.height,0,lt,st,null)}else if(ot){Rt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,at,X.width,X.height);for(let pt=0;pt<6;pt++){Xt=K[pt].mipmaps;for(let de=0;de<Xt.length;de++){let Ye=Xt[de];y.format!==mi?lt!==null?Rt?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de,0,0,Ye.width,Ye.height,lt,Ye.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de,at,Ye.width,Ye.height,0,Ye.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de,0,0,Ye.width,Ye.height,lt,st,Ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de,at,Ye.width,Ye.height,0,lt,st,Ye.data)}}}else{if(Xt=y.mipmaps,Rt&&qt){Xt.length>0&&Pt++;let pt=zt(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,at,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,K[pt].width,K[pt].height,lt,st,K[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,K[pt].width,K[pt].height,0,lt,st,K[pt].data);for(let de=0;de<Xt.length;de++){let hs=Xt[de].image[pt].image;Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de+1,0,0,hs.width,hs.height,lt,st,hs.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de+1,at,hs.width,hs.height,0,lt,st,hs.data)}}else{Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,lt,st,K[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,lt,st,K[pt]);for(let de=0;de<Xt.length;de++){let Ye=Xt[de];Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de+1,0,0,lt,st,Ye.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,de+1,at,lt,st,Ye.image[pt])}}}E(y)&&y.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),rt.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ee(w,y,z,et,j,rt){let ht=r.convert(z.format,z.colorSpace),$=r.convert(z.type),Z=T(z.internalFormat,ht,$,z.normalized,z.colorSpace),ot=n.get(y),C=n.get(z);if(C.__renderTarget=y,!ot.__hasExternalTextures){let K=Math.max(1,y.width>>rt),X=Math.max(1,y.height>>rt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,rt,Z,K,X,y.depth,0,ht,$,null):e.texImage2D(j,rt,Z,K,X,0,ht,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,C.__webglTexture,0,Me(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,j,C.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xi(w,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let et=y.depthTexture,j=et&&et.isDepthTexture?et.type:null,rt=_(y.stencilBuffer,j),ht=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(y),rt,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(y),rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,w)}else{let et=y.textures;for(let j=0;j<et.length;j++){let rt=et[j],ht=r.convert(rt.format,rt.colorSpace),$=r.convert(rt.type),Z=T(rt.internalFormat,ht,$,rt.normalized,rt.colorSpace);ft(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(y),Z,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(y),Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(w,y,z){let et=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);j.__renderTarget=y;let rt=et?y.depthTexture.image[0]:y.depthTexture.image;(!j.__webglTexture||rt.width!==y.width||rt.height!==y.height)&&(rt.width=y.width,rt.height=y.height,y.depthTexture.needsUpdate=!0),et?_t(y.depthTexture,0):gt(y.depthTexture,0);let ht=j.__webglTexture,$=Me(y),Z=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ot=y.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Wi)ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Z,ht,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Z,ht,0);else if(y.depthTexture.format===Zi)ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Z,ht,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ti(w){let y=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let et=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),et){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,et.removeEventListener("dispose",j)};et.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=et}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let et=0;et<6;et++)qe(y.__webglFramebuffer[et],w,et);else w.texture.mipmaps.length>0?qe(y.__webglFramebuffer[0],w,0):qe(y.__webglFramebuffer,w,0);else if(z){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]===void 0)y.__webglDepthbuffer[et]=i.createRenderbuffer(),xi(y.__webglDepthbuffer[et],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,rt)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xi(y.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ei(w,y,z){let et=n.get(w);y!==void 0&&Ee(et.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ti(w)}function ni(w){let y=w.texture,z=n.get(w),et=n.get(y);w.addEventListener("dispose",O),D(w);let j=w.textures,rt=w.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=y.version,a.memory.textures++),rt){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[$][Z]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ht)for(let $=0,Z=j.length;$<Z;$++){let ot=n.get(j[$]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ft(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){let Z=j[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let ot=r.convert(Z.format,Z.colorSpace),C=r.convert(Z.type),K=T(Z.internalFormat,ot,C,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),X=Me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),xi(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ue(i.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Ee(z.__webglFramebuffer[$][Z],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Z);else Ee(z.__webglFramebuffer[$],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);E(y)?S(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let $=0,Z=j.length;$<Z;$++){let ot=j[$],C=n.get(ot),K=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,C.__webglTexture),ue(K,ot),Ee(z.__webglFramebuffer,w,ot,i.COLOR_ATTACHMENT0+$,K,0),E(ot)&&S(K)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,et.__webglTexture),ue($,y),y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Ee(z.__webglFramebuffer[Z],w,y,i.COLOR_ATTACHMENT0,$,Z);else Ee(z.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,$,0);E(y)?S($):y.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&ti(w)}function U(w){let y=w.textures;for(let z=0,et=y.length;z<et;z++){let j=y[z];if(E(j)&&j.mipmapsAutoUpdate===!0){let rt=A(w),ht=n.get(j).__webglTexture;e.bindTexture(rt,ht),S(rt),e.unbindTexture()}}}let ii=[];function ve(w){if(w.samples>0){if(ft(w)===!1){let y=w.textures,z=w.width,et=w.height,j=i.COLOR_BUFFER_BIT,rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(w),$=y.length>1;if($)for(let ot=0;ot<y.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<y.length;ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let C=n.get(y[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,et,0,0,z,et,j,i.NEAREST),l===!0&&(ii.length=0,ii.push(i.COLOR_ATTACHMENT0+ot),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ii.push(rt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ii))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ot=0;ot<y.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let C=n.get(y[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Me(w){return Math.min(s.maxSamples,w.samples)}function ft(w){let y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ke(w){let y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Dt(w,y){let z=w.colorSpace,et=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Ua&&z!==Ji&&(te.getTransfer(z)===ce?(et!==mi||j!==On)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",z)),y}function zt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=wt,this.setTexture2D=gt,this.setTexture2DArray=Mt,this.setTexture3D=Lt,this.setTextureCube=_t,this.rebindTextures=ei,this.setupRenderTarget=ni,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ti,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ft,this.dispose=V}function jv(i,t){function e(n,s=Ji){let r,a=te.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xu)return i.BYTE;if(n===yu)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===Kl)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===bu)return i.RGB;if(n===mi)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===ao||n===oo||n===lo||n===co)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===ac||n===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===hc||n===uc||n===dc||n===ho||n===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===cc)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return r.COMPRESSED_R11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ho)return r.COMPRESSED_RG11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===wc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Lc||n===uo||n===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ei({vertexShader:Qv,fragmentShader:tM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends di{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new Yu,p={},x=e.getContextAttributes(),E=null,S=null,A=[],T=[],_=new Tt,b=null,D=null,R=new Je;R.viewport=new Se;let N=new Je;N.viewport=new Se;let O=[R,N],W=new Yl,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=A[J];return gt===void 0&&(gt=new Br,A[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=A[J];return gt===void 0&&(gt=new Br,A[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=A[J];return gt===void 0&&(gt=new Br,A[J]=gt),gt.getHandSpace()};function Y(J){let gt=T.indexOf(J.inputSource);if(gt===-1)return;let Mt=A[gt];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,c||a),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let J=0;J<A.length;J++){let gt=T[J];gt!==null&&(T[J]=null,A[J].disconnect(gt))}P=null,V=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Lt=null,_t=null;x.depth&&(_t=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?Zi:Wi,Lt=x.stencil?ir:fi);let Wt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new qn(u.textureWidth,u.textureHeight,{format:mi,type:On,depthTexture:new qi(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new qn(f.framebufferWidth,f.framebufferHeight,{format:mi,type:On,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(J){for(let gt=0;gt<J.removed.length;gt++){let Mt=J.removed[gt],Lt=T.indexOf(Mt);Lt>=0&&(T[Lt]=null,A[Lt].disconnect(Mt))}for(let gt=0;gt<J.added.length;gt++){let Mt=J.added[gt],Lt=T.indexOf(Mt);if(Lt===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=T.length){T.push(Mt),Lt=Wt;break}else if(T[Wt]===null){T[Wt]=Mt,Lt=Wt;break}if(Lt===-1)break}let _t=A[Lt];_t&&_t.connect(Mt)}}function q(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let gt=J.near,Mt=J.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),W.near=N.near=R.near=gt,W.far=N.far=R.far=Mt,(P!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),P=W.near,V=W.far),W.layers.mask=J.layers.mask|6,R.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Lt=J.parent,_t=W.cameras;q(W,Lt);for(let Wt=0;Wt<_t.length;Wt++)q(_t[Wt],Lt);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,W,Lt)};function Q(J,gt,Mt){Mt===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ur*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(J){return p[J]};let tt=null;function wt(J,gt){if(h=gt.getViewerPose(c||a),g=gt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Lt=!1;Mt.length!==W.cameras.length&&(W.cameras.length=0,Lt=!0);for(let Ut=0;Ut<Mt.length;Ut++){let ue=Mt[Ut],me=null;if(f!==null)me=f.getViewport(ue);else{let rn=d.getViewSubImage(u,ue);me=rn.viewport,Ut===0&&(t.setRenderTargetTextures(S,rn.colorTexture,rn.depthStencilTexture),t.setRenderTarget(S))}let Kt=O[Ut];Kt===void 0&&(Kt=new Je,Kt.layers.enable(Ut),Kt.viewport=new Se,O[Ut]=Kt),Kt.matrix.fromArray(ue.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(ue.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(me.x,me.y,me.width,me.height),Ut===0&&(W.matrix.copy(Kt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Lt===!0&&W.cameras.push(Kt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Ut=d.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(_t&&_t.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Ut=0;Ut<Mt.length;Ut++){let ue=Mt[Ut].camera;if(ue){let me=p[ue];me||(me=new Ya,p[ue]=me);let Kt=d.getCameraImage(ue);me.sourceTexture=Kt}}}}for(let Mt=0;Mt<A.length;Mt++){let Lt=T[Mt],_t=A[Mt];Lt!==null&&_t!==void 0&&_t.update(Lt,gt,c||a)}tt&&tt(J,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let kt=new Wp;kt.setAnimationLoop(wt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}},eM=new Gt,tm=new Ft;tm.set(-1,0,0,0,1,0,0,0,1);function nM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Uu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,E,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),E=x.envMap,S=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iM(i,t,e,n){let s={},r={};function a(x,E){let S=E.program;n.uniformBlockBinding(x,S,s[x.id])}function o(x,E){let S=s[x.id];S===void 0&&(g(x),S=l(x),s[x.id]=S,x.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(x,A);let T=t.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let E=i.createBuffer(),S=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(x){let E=s[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=S.length;T<_;T++){let b=S[T];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)h(b[D],T,D,A);else h(b,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,E,S,A){if(u(x,E,S,A)===!0){let T=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let D=0;D<_.length;D++){let R=_[D],N=M(R,!0);d(R,x.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function d(x,E,S){typeof x=="number"||typeof x=="boolean"?E[S]=x:x.isMatrix3?(E[S]=x.elements[0],E[S+1]=x.elements[1],E[S+2]=x.elements[2],E[S+3]=0,E[S+4]=x.elements[3],E[S+5]=x.elements[4],E[S+6]=x.elements[5],E[S+7]=0,E[S+8]=x.elements[6],E[S+9]=x.elements[7],E[S+10]=x.elements[8],E[S+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-S),S):x.toArray(E,S)}function u(x,E,S,A){let T=x.value,_=E+"_"+S;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let b=A[_],D=!1;for(let R=0;R<T.length;R++)f(T[R],b,R)===!0&&(D=!0);return D}return f(T,A,_)}function f(x,E,S){if(E[S]===void 0)return typeof x=="number"||typeof x=="boolean"?E[S]=x:ArrayBuffer.isView(x)?E[S]=x.slice():E[S]=x.clone(),!0;{let A=E[S];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(x){let E=x.uniforms,S=0,A=16;for(let _=0,b=E.length;_<b;_++){let D=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,N=D.length;R<N;R++){let O=D[R],W=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(E[_])||Array.isArray(O.value),V=S;for(let G=0,nt=W.length;G<nt;G++){let q=W[G],Q=M(q,P),tt=S%A,wt=tt%Q.boundary,kt=tt+wt;S+=wt,kt!==0&&A-kt<Q.storage&&(S+=A-kt),G===0&&(V=S),S+=Q.storage}let Y=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Y((S-V)/Float32Array.BYTES_PER_ELEMENT),O.__offset=V}}let T=S%A;return T>0&&(S+=A-T),x.__size=S,x.__cache={},this}function M(x,E){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(x){let E=x.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}var sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function rM(){return Ai===null&&(Ai=new Wa(sM,16,16,ws,pi),Ai.name="DFG_LUT",Ai.minFilter=Sn,Ai.magFilter=Sn,Ai.wrapS=vi,Ai.wrapT=vi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var go=class{constructor(t={}){let{canvas:e=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=On}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([ic,nc,ec]),p=new Set([On,fi,ta,ir,jl,Ql]),x=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],b=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,W=null,P=null,V=null;this._outputColorSpace=on;let Y=0,G=0,nt=null,q=-1,Q=null,tt=new Se,wt=new Se,kt=null,J=new Vt(0),gt=0,Mt=e.width,Lt=e.height,_t=1,Wt=null,De=null,Ut=new Se(0,0,Mt,Lt),ue=new Se(0,0,Mt,Lt),me=!1,Kt=new vs,rn=new Dl,ze=!1,Ln=!1,Ee=new Gt,xi=new L,qe=new Se,ti={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ei=!1;function ni(){return nt===null?_t:1}let U=n;function ii(v,I){return e.getContext(v,I)}let ve,Me,ft,ke,Dt,zt,w,y,z,et,j,rt,ht,$,Z,ot,C,K,X,lt,st,at,Rt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let I="webgl2";if(U=ii(I,v),U===null)throw ii(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(v){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Ot("WebGLRenderer: "+v.message),v}function qt(){ve=new gy(U),ve.init(),st=new jv(U,ve),Me=new ry(U,ve,t,st),ft=new Jv(U,ve),Me.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),W=U.createFramebuffer(),P=U.createFramebuffer(),V=U.createFramebuffer(),ke=new yy(U),Dt=new Ov,zt=new Kv(U,ve,ft,Dt,Me,st,ke),w=new my(R),y=new Mg(U),at=new iy(U,y),z=new _y(U,y,ke,at),et=new My(U,z,y,at,ke),K=new vy(U,Me,zt),Z=new ay(Dt),j=new Uv(R,w,ve,Me,at,Z),rt=new nM(R,Dt),ht=new Bv,$=new Wv(ve),C=new ny(R,w,ft,et,g,l),ot=new Zv(R,et,Me),Rt=new iM(U,ke,Me,ft),X=new sy(U,ve,ke),lt=new xy(U,ve,ke),ke.programs=j.programs,R.capabilities=Me,R.extensions=ve,R.properties=Dt,R.renderLists=ht,R.shadowMap=ot,R.state=ft,R.info=ke}M!==On&&(D=new by(M,e.width,e.height,o,s,r));let it=new $u(R,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(v){v!==void 0&&(_t=v,this.setSize(Mt,Lt,!1))},this.getSize=function(v){return v.set(Mt,Lt)},this.setSize=function(v,I,H=!0){if(it.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=v,Lt=I,e.width=Math.floor(v*_t),e.height=Math.floor(I*_t),H===!0&&(e.style.width=v+"px",e.style.height=I+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Mt*_t,Lt*_t).floor()},this.setDrawingBufferSize=function(v,I,H){Mt=v,Lt=I,_t=H,e.width=Math.floor(v*H),e.height=Math.floor(I*H),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(M===On){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(Ut)},this.setViewport=function(v,I,H,B){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,I,H,B),ft.viewport(tt.copy(Ut).multiplyScalar(ni()).round())},this.getScissor=function(v){return v.copy(ue)},this.setScissor=function(v,I,H,B){v.isVector4?ue.set(v.x,v.y,v.z,v.w):ue.set(v,I,H,B),ft.scissor(wt.copy(ue).multiplyScalar(ni()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(v){ft.setScissorTest(me=v)},this.setOpaqueSort=function(v){Wt=v},this.setTransparentSort=function(v){De=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,H=!0){let B=0;if(v){let k=!1;if(nt!==null){let ut=nt.texture.format;k=m.has(ut)}if(k){let ut=nt.texture.type,vt=p.has(ut),ct=C.getClearColor(),xt=C.getClearAlpha(),At=ct.r,Ht=ct.g,jt=ct.b;vt?(x[0]=At,x[1]=Ht,x[2]=jt,x[3]=xt,U.clearBufferuiv(U.COLOR,0,x)):(E[0]=At,E[1]=Ht,E[2]=jt,E[3]=xt,U.clearBufferiv(U.COLOR,0,E))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),ht.dispose(),$.dispose(),zt.dispose(),Dt.dispose(),w.dispose(),et.dispose(),z.dispose(),at.dispose(),Rt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",qd),it.removeEventListener("sessionend",Yd),Vs.stop()};function Pt(v){v.preventDefault(),Ba("WebGLRenderer: Context Lost."),N=!0}function Xt(){Ba("WebGLRenderer: Context Restored."),N=!1;let v=ke.autoReset,I=ot.enabled,H=ot.autoUpdate,B=ot.needsUpdate,k=ot.type;qt(),ke.autoReset=v,ot.enabled=I,ot.autoUpdate=H,ot.needsUpdate=B,ot.type=k}function pt(v){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function de(v){let I=v.target;I.removeEventListener("dispose",de),Ye(I)}function Ye(v){hs(v),Dt.remove(v)}function hs(v){let I=Dt.get(v).programs;I!==void 0&&(I.forEach(function(H){j.releaseProgram(H)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,H,B,k,ut){I===null&&(I=ti);let vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ct=M0(v,I,H,B,k);ft.setMaterial(B,vt);let xt=H.index,At=1;if(B.wireframe===!0){if(xt=z.getWireframeAttribute(H),xt===void 0)return;At=2}let Ht=H.drawRange,jt=H.attributes.position,St=Ht.start*At,Qt=(Ht.start+Ht.count)*At;ut!==null&&(St=Math.max(St,ut.start*At),Qt=Math.min(Qt,(ut.start+ut.count)*At)),xt!==null?(St=Math.max(St,0),Qt=Math.min(Qt,xt.count)):jt!=null&&(St=Math.max(St,0),Qt=Math.min(Qt,jt.count));let Ne=Qt-St;if(Ne<0||Ne===1/0)return;at.setup(k,B,ct,H,xt);let _e,ge=X;if(xt!==null&&(_e=y.get(xt),ge=lt,ge.setIndex(_e)),k.isMesh)B.wireframe===!0?(ft.setLineWidth(B.wireframeLinewidth*ni()),ge.setMode(U.LINES)):ge.setMode(U.TRIANGLES);else if(k.isLine){let un=B.linewidth;un===void 0&&(un=1),ft.setLineWidth(un*ni()),k.isLineSegments?ge.setMode(U.LINES):k.isLineLoop?ge.setMode(U.LINE_LOOP):ge.setMode(U.LINE_STRIP)}else k.isPoints?ge.setMode(U.POINTS):k.isSprite&&ge.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))ge.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let un=k._multiDrawStarts,bt=k._multiDrawCounts,yn=k._multiDrawCount,ae=xt?y.get(xt).bytesPerElement:1,Ws=Dt.get(B).currentProgram.getUniforms();for(let dn=0;dn<yn;dn++)Ws.setValue(U,"_gl_DrawID",dn),ge.render(un[dn]/ae,bt[dn])}else if(k.isInstancedMesh)ge.renderInstances(St,Ne,k.count);else if(H.isInstancedBufferGeometry){let un=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bt=Math.min(H.instanceCount,un);ge.renderInstances(St,Ne,bt)}else ge.render(St,Ne)};function Xd(v,I,H,B){O!==null&&v.isNodeMaterial&&O.setObject(B,v),ze===!0&&Z.setState(v,H,!1),v.transparent===!0&&v.side===Un&&v.forceSinglePass===!1?(v.side=wn,v.needsUpdate=!0,Ma(v,I,B),v.side=Ts,v.needsUpdate=!0,Ma(v,I,B),v.side=Un):Ma(v,I,B)}this.compile=function(v,I,H=null){H===null&&(H=v),O!==null&&O.renderStart(v,I,H),T=$.get(H),T.init(I),b.push(T),H.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),v!==H&&v.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Ln=this.localClippingEnabled,ze=Z.init(this.clippingPlanes,Ln),ze===!0&&Z.setGlobalState(this.clippingPlanes,I),O!==null&&ot.render(T.state.shadowsArray,H,I);let B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ut=k.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){let ct=ut[vt];Xd(ct,H,I,k),B.add(ct)}else Xd(ut,H,I,k),B.add(ut)}),T=b.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(v,I,H=null){let B=this.compile(v,I,H);return new Promise(k=>{function ut(){if(B.forEach(function(vt){let xt=Dt.get(vt).currentProgram;(xt===void 0||xt.isReady())&&B.delete(vt)}),B.size===0){k(v);return}setTimeout(ut,10)}ve.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let wh=null;function y0(v){wh&&wh(v)}function qd(){Vs.stop()}function Yd(){Vs.start()}let Vs=new Wp;Vs.setAnimationLoop(y0),typeof self<"u"&&Vs.setContext(self),this.setAnimationLoop=function(v){wh=v,it.setAnimationLoop(v),v===null?Vs.stop():Vs.start()},it.addEventListener("sessionstart",qd),it.addEventListener("sessionend",Yd),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,I);let H=it.enabled===!0&&it.isPresenting===!0,B=D!==null&&(nt===null||H)&&D.begin(R,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,I,nt),T=$.get(v,b.length),T.init(I),T.state.textureUnits=zt.getTextureUnits(),b.push(T),Ee.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?rn.setFromArrayCamera(I):Kt.setFromProjectionMatrix(Ee,ri,I.reversedDepth),Ln=this.localClippingEnabled,ze=Z.init(this.clippingPlanes,Ln),A=ht.get(v,_.length),A.init(),_.push(A),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&Ah(vt,I,-1/0,R.sortObjects)}Ah(v,I,0,R.sortObjects),A.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Wt,De),ei=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ei&&C.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),ze===!0&&Z.beginShadows();let k=T.state.shadowsArray;if(ot.render(k,v,I),ze===!0&&Z.endShadows(),(B&&D.hasRenderPass())===!1){let vt=A.opaque,ct=A.transmissive;if(T.setupLights(),I.isArrayCamera){let xt=I.cameras;if(ct.length>0)for(let At=0,Ht=xt.length;At<Ht;At++){let jt=xt[At];Zd(vt,ct,v,jt)}ei&&C.render(v);for(let At=0,Ht=xt.length;At<Ht;At++){let jt=xt[At];$d(A,v,jt,jt.viewport)}}else ct.length>0&&Zd(vt,ct,v,I),ei&&C.render(v),$d(A,v,I)}nt!==null&&G===0&&(zt.updateMultisampleRenderTarget(nt),zt.updateRenderTargetMipmap(nt)),B&&D.end(R),v.isScene===!0&&v.onAfterRender(R,v,I),at.resetDefaultState(),q=-1,Q=null,b.pop(),b.length>0?(T=b[b.length-1],zt.setTextureUnits(T.state.textureUnits),ze===!0&&Z.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,O!==null&&O.renderEnd()};function Ah(v,I,H,B){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let vt=I.isArrayCamera?rn:Kt;if(!v.frustumCulled||v.intersectsFrustum(vt)){B&&qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ee);let ct=et.update(v),xt=v.material;xt.visible&&A.push(v,ct,xt,H,qe.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let vt=I.isArrayCamera?rn:Kt;if(!v.frustumCulled||v.intersectsFrustum(vt)){let ct=et.update(v),xt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),qe.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),qe.copy(ct.boundingSphere.center)),qe.applyMatrix4(v.matrixWorld).applyMatrix4(Ee)),Array.isArray(xt)){let At=ct.groups;for(let Ht=0,jt=At.length;Ht<jt;Ht++){let St=At[Ht],Qt=xt[St.materialIndex];Qt&&Qt.visible&&A.push(v,ct,Qt,H,qe.z,St,I)}}else xt.visible&&A.push(v,ct,xt,H,qe.z,null,I)}}}let ut=v.children;for(let vt=0,ct=ut.length;vt<ct;vt++)Ah(ut[vt],I,H,B)}function $d(v,I,H,B){let{opaque:k,transmissive:ut,transparent:vt}=v;T.setupLightsView(H),ze===!0&&Z.setGlobalState(R.clippingPlanes,H),B&&ft.viewport(tt.copy(B)),k.length>0&&Wo(k,I,H),ut.length>0&&Wo(ut,I,H),vt.length>0&&Wo(vt,I,H),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Zd(v,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let St=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new qn(1,1,{generateMipmaps:!0,type:St?pi:On,minFilter:$i,samples:Math.max(4,Me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let ut=T.state.transmissionRenderTarget[B.id],vt=B.viewport||tt;ut.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ct=R.getRenderTarget(),xt=R.getActiveCubeFace(),At=R.getActiveMipmapLevel();R.setRenderTarget(ut),R.getClearColor(J),gt=R.getClearAlpha(),gt<1&&R.setClearColor(16777215,.5),R.clear(),ei&&C.render(H);let Ht=R.toneMapping;R.toneMapping=wi;let jt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),ze===!0&&Z.setGlobalState(R.clippingPlanes,B),Wo(v,H,B),zt.updateMultisampleRenderTarget(ut),zt.updateRenderTargetMipmap(ut),ve.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Qt=0,Ne=I.length;Qt<Ne;Qt++){let _e=I[Qt],{object:ge,geometry:un,material:bt,group:yn}=_e;if(bt.side===Un&&ge.layers.test(B.layers)){let ae=bt.side;bt.side=wn,bt.needsUpdate=!0,Jd(ge,H,B,un,bt,yn),bt.side=ae,bt.needsUpdate=!0,St=!0}}St===!0&&(zt.updateMultisampleRenderTarget(ut),zt.updateRenderTargetMipmap(ut))}R.setRenderTarget(ct,xt,At),R.setClearColor(J,gt),jt!==void 0&&(B.viewport=jt),R.toneMapping=Ht}function Wo(v,I,H){let B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ut=v.length;k<ut;k++){let vt=v[k],{object:ct,geometry:xt,group:At}=vt,Ht=vt.material;Ht.allowOverride===!0&&B!==null&&(Ht=B),ct.layers.test(H.layers)&&Jd(ct,I,H,xt,Ht,At)}}function Jd(v,I,H,B,k,ut){O!==null&&k.isNodeMaterial&&O.setObject(v,k),v.onBeforeRender(R,I,H,B,k,ut),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(R,I,H,B,v,ut),k.transparent===!0&&k.side===Un&&k.forceSinglePass===!1?(k.side=wn,k.needsUpdate=!0,R.renderBufferDirect(H,I,B,k,v,ut),k.side=Ts,k.needsUpdate=!0,R.renderBufferDirect(H,I,B,k,v,ut),k.side=Un):R.renderBufferDirect(H,I,B,k,v,ut),v.onAfterRender(R,I,H,B,k,ut)}function Kd(v){let I=0;for(let H of v)H.texture!==null&&I++;return I}function Ma(v,I,H){I.isScene!==!0&&(I=ti);let B=Dt.get(v),k=T.state.lights,ut=T.state.shadowsArray,vt=k.state.version,ct=j.getParameters(v,k.state,ut,I,H,T.state.lightProbeGridArray),xt=j.getProgramCacheKey(ct),At=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Ht=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=w.get(v.envMap||B.environment,Ht),B.envMapRotation=B.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,At===void 0&&(v.addEventListener("dispose",de),At=new Map,B.programs=At,B.programVariants=new Map);let jt=At.get(xt);if(jt!==void 0){if(B.currentProgram===jt&&B.lightsStateVersion===vt)return Qd(v,ct),jt}else ct.uniforms=j.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,H,ct),v.onBeforeCompile(ct,R),jt=j.acquireProgram(ct,xt),At.set(xt,jt),B.uniforms=ct.uniforms;let St=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(St.clippingPlanes=Z.uniform),Qd(v,ct),B.needsLights=b0(v),B.lightsStateVersion=vt,B.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Kd(T.state.lightProbeGridArray),B.currentProgram=jt,B.uniformsList=null,jt}function v0(v,I,H,B,k){let ut=Dt.get(v),vt=ut.currentProgram.id+","+B+","+k,ct=ut.programVariants.get(vt);return ct===void 0?(ct=Ma(v,I,H),ut.programVariants.set(vt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=B,ut.toneMapping=k),ct}function jd(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=ea.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Qd(v,I){let H=Dt.get(v);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function M0(v,I,H,B,k){I.isScene!==!0&&(I=ti),zt.resetTextureUnits();let ut=I.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ct=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:te.workingColorSpace,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,At=w.get(B.envMap||vt,xt),Ht=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,jt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),St=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,Ne=!!H.morphAttributes.color,_e=wi;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(_e=R.toneMapping);let ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,un=ge!==void 0?ge.length:0,bt=Dt.get(B),yn=T.state.lights;if(ze===!0&&(Ln===!0||v!==Q)){let Te=v===Q&&B.id===q;Z.setState(B,v,Te)}let ae=!1,Ws=!1;B.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==yn.state.version||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==At||B.fog===!0&&bt.fog!==ut||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Z.numPlanes||bt.numIntersection!==Z.numIntersection)||bt.vertexAlphas!==Ht||bt.vertexTangents!==jt||bt.morphTargets!==St||bt.morphNormals!==Qt||bt.morphColors!==Ne||bt.morphTargetsCount!==un||bt.numLightProbeGrids!==Kd(T.state.lightProbeGridArray)?ae=!0:(bt.outputColorSpace!==ct||bt.toneMapping!==_e)&&(Ws=!0):(ae=!0,bt.__version=B.version);let dn=bt.currentProgram;(ae===!0||Ws===!0)&&(dn=Ws===!0?v0(B,I,k,ct,_e):Ma(B,I,k),O&&B.isNodeMaterial&&O.onUpdateProgram(B,dn,bt));let Xo=!1,us=!1,Xs=!1,ne=dn.getUniforms(),an=bt.uniforms;if(ft.useProgram(dn.program)&&(Xo=!0,us=!0,Xs=!0),B.id!==q&&(q=B.id,us=!0),Xo||Q!==v){ft.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ne.setValue(U,"projectionMatrix",v.projectionMatrix),ne.setValue(U,"viewMatrix",v.matrixWorldInverse);let $e=ne.map.cameraPosition;$e!==void 0&&$e.setValue(U,xi.setFromMatrixPosition(v.matrixWorld)),Me.logarithmicDepthBuffer&&ne.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ne.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,us=!0,Xs=!0)}if(bt.needsLights&&(yn.state.sunShadowMap.length>0&&ne.setValue(U,"sunShadowMap",yn.state.sunShadowMap,zt),yn.state.directionalShadowMap.length>0&&ne.setValue(U,"directionalShadowMap",yn.state.directionalShadowMap,zt),yn.state.spotShadowMap.length>0&&ne.setValue(U,"spotShadowMap",yn.state.spotShadowMap,zt),yn.state.pointShadowMap.length>0&&ne.setValue(U,"pointShadowMap",yn.state.pointShadowMap,zt)),k.isSkinnedMesh){ne.setOptional(U,k,"bindMatrix"),ne.setOptional(U,k,"bindMatrixInverse");let Te=k.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ne.setValue(U,"boneTexture",Te.boneTexture,zt))}k.isBatchedMesh&&(ne.setOptional(U,k,"batchingTexture"),ne.setValue(U,"batchingTexture",k._matricesTexture,zt),ne.setOptional(U,k,"batchingIdTexture"),ne.setValue(U,"batchingIdTexture",k._indirectTexture,zt),ne.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ne.setValue(U,"batchingColorTexture",k._colorsTexture,zt));let li=H.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&K.update(k,H,dn),(us||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,ne.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(an.envMapIntensity.value=I.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=rM()),us){if(ne.setValue(U,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&S0(an,Xs),ut&&B.fog===!0&&rt.refreshFogUniforms(an,ut),rt.refreshMaterialUniforms(an,B,_t,Lt,T.state.transmissionRenderTarget[v.id]),bt.needsLights&&bt.numLightProbeGrids>0){let Te=S,$e=0;for(let Oi of T.state.lightProbeGridArray)Oi.texture!==null&&(Te.textures[$e]=Oi.texture,Te.min[$e]=Oi.boundingBox.min,Te.max[$e]=Oi.boundingBox.max,Te.resolution[$e]=Oi.resolution,$e++);for(let Oi in Te)Te[Oi].length=$e;an.probesSH.value=Te.textures,an.probesMin.value=Te.min,an.probesMax.value=Te.max,an.probesResolution.value=Te.resolution}ea.upload(U,jd(bt),an,zt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ea.upload(U,jd(bt),an,zt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ne.setValue(U,"center",k.center),ne.setValue(U,"modelViewMatrix",k.modelViewMatrix),ne.setValue(U,"normalMatrix",k.normalMatrix),ne.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let Te=B.uniformsGroups;for(let $e=0,Oi=Te.length;$e<Oi;$e++){let ef=Te[$e];Rt.update(ef,dn),Rt.bind(ef,dn)}}return dn}function S0(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function b0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,I,H){let B=Dt.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Dt.get(v.texture).__webglTexture=I,Dt.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let H=Dt.get(v);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,H=0){nt=v,Y=I,G=H;let B=null,k=!1,ut=!1;if(v){let ct=Dt.get(v);if(ct.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(U.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(v.viewport),wt.copy(v.scissor),kt=v.scissorTest,ft.viewport(tt),ft.scissor(wt),ft.setScissorTest(kt),q=-1;return}else if(ct.__webglFramebuffer===void 0)zt.setupRenderTarget(v);else if(ct.__hasExternalTextures)zt.rebindTextures(v,Dt.get(v.texture).__webglTexture,Dt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ht=v.depthTexture;if(ct.__boundDepthTexture!==Ht){if(Ht!==null&&Dt.has(Ht)&&(v.width!==Ht.image.width||v.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(v)}}let xt=v.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ut=!0);let At=Dt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(At[I])?B=At[I][H]:B=At[I],k=!0):v.samples>0&&zt.useMultisampledRTT(v)===!1?B=Dt.get(v).__webglMultisampledFramebuffer:Array.isArray(At)?B=At[H]:B=At,tt.copy(v.viewport),wt.copy(v.scissor),kt=v.scissorTest}else tt.copy(Ut).multiplyScalar(_t).floor(),wt.copy(ue).multiplyScalar(_t).floor(),kt=me;if(H!==0&&(B=W),ft.bindFramebuffer(U.FRAMEBUFFER,B)&&ft.drawBuffers(v,B),ft.viewport(tt),ft.scissor(wt),ft.setScissorTest(kt),k){let ct=Dt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct.__webglTexture,H)}else if(ut){let ct=I;for(let xt=0;xt<v.textures.length;xt++){let At=Dt.get(v.textures[xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xt,At.__webglTexture,H,ct)}}else if(v!==null&&H!==0){let ct=Dt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ct.__webglTexture,H)}q=-1};function tf(v){let I=Dt.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=Me.textureFormatReadable(v.format),I.__typeReadable=Me.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,H,B,k,ut,vt,ct=0){if(!(v&&v.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt){ft.bindFramebuffer(U.FRAMEBUFFER,xt);try{let At=v.textures[ct],Ht=At.format,jt=At.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ct);let St=tf(At);if(St.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-B&&H>=0&&H<=v.height-k&&U.readPixels(I,H,B,k,st.convert(Ht),st.convert(jt),ut)}finally{let At=nt!==null?Dt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(v,I,H,B,k,ut,vt,ct=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt)if(I>=0&&I<=v.width-B&&H>=0&&H<=v.height-k){ft.bindFramebuffer(U.FRAMEBUFFER,xt);let At=v.textures[ct],Ht=At.format,jt=At.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ct);let St=tf(At);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.bufferData(U.PIXEL_PACK_BUFFER,ut.byteLength,U.STREAM_READ),U.readPixels(I,H,B,k,st.convert(Ht),st.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ne=nt!==null?Dt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,Ne);let _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gp(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ut),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Qt),U.deleteSync(_e),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,H=0){let B=Math.pow(2,-H),k=Math.floor(v.image.width*B),ut=Math.floor(v.image.height*B),vt=I!==null?I.x:0,ct=I!==null?I.y:0;zt.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,vt,ct,k,ut),ft.unbindTexture()},this.copyTextureToTexture=function(v,I,H=null,B=null,k=0,ut=0){let vt,ct,xt,At,Ht,jt,St,Qt,Ne,_e=v.isCompressedTexture?v.mipmaps[ut]:v.image;if(H!==null)vt=H.max.x-H.min.x,ct=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Ht=H.min.y,jt=H.isBox3?H.min.z:0;else{let ne=Math.pow(2,-k);vt=Math.floor(_e.width*ne),ct=Math.floor(_e.height*ne),v.isDataArrayTexture?xt=_e.depth:v.isData3DTexture?xt=Math.floor(_e.depth*ne):xt=1,At=0,Ht=0,jt=0}B!==null?(St=B.x,Qt=B.y,Ne=B.z):(St=0,Qt=0,Ne=0);let ge=st.convert(I.format),un=st.convert(I.type),bt;I.isData3DTexture?(zt.setTexture3D(I,0),bt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(zt.setTexture2DArray(I,0),bt=U.TEXTURE_2D_ARRAY):(zt.setTexture2D(I,0),bt=U.TEXTURE_2D),ft.activeTexture(U.TEXTURE0),ft.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),ft.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ft.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let yn=ft.getParameter(U.UNPACK_ROW_LENGTH),ae=ft.getParameter(U.UNPACK_IMAGE_HEIGHT),Ws=ft.getParameter(U.UNPACK_SKIP_PIXELS),dn=ft.getParameter(U.UNPACK_SKIP_ROWS),Xo=ft.getParameter(U.UNPACK_SKIP_IMAGES);ft.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,At),ft.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);let us=v.isDataArrayTexture||v.isData3DTexture,Xs=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let ne=Dt.get(v),an=Dt.get(I),li=Dt.get(ne.__renderTarget),Te=Dt.get(an.__renderTarget);ft.bindFramebuffer(U.READ_FRAMEBUFFER,li.__webglFramebuffer),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let $e=0;$e<xt;$e++)us&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(v).__webglTexture,k,jt+$e),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(I).__webglTexture,ut,Ne+$e)),U.blitFramebuffer(At,Ht,At+vt,Ht+ct,St,Qt,St+vt,Qt+ct,U.DEPTH_BUFFER_BIT,U.NEAREST);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||Dt.has(v)){let ne=Dt.get(v),an=Dt.get(I);ft.bindFramebuffer(U.READ_FRAMEBUFFER,P),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let li=0;li<xt;li++)us?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ne.__webglTexture,k,jt+li):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ne.__webglTexture,k),Xs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,ut,Ne+li):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,ut),k!==0?U.blitFramebuffer(At,Ht,At+vt,Ht+ct,St,Qt,St+vt,Qt+ct,U.COLOR_BUFFER_BIT,U.NEAREST):Xs?U.copyTexSubImage3D(bt,ut,St,Qt,Ne+li,At,Ht,vt,ct):U.copyTexSubImage2D(bt,ut,St,Qt,At,Ht,vt,ct);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xs?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(bt,ut,St,Qt,Ne,vt,ct,xt,ge,un,_e.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,ut,St,Qt,Ne,vt,ct,xt,ge,_e.data):U.texSubImage3D(bt,ut,St,Qt,Ne,vt,ct,xt,ge,un,_e):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ut,St,Qt,vt,ct,ge,un,_e.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ut,St,Qt,_e.width,_e.height,ge,_e.data):U.texSubImage2D(U.TEXTURE_2D,ut,St,Qt,vt,ct,ge,un,_e);ft.pixelStorei(U.UNPACK_ROW_LENGTH,yn),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,Ws),ft.pixelStorei(U.UNPACK_SKIP_ROWS,dn),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,Xo),ut===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(bt),ft.unbindTexture()},this.initRenderTarget=function(v){Dt.get(v).__webglFramebuffer===void 0&&zt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?zt.setTextureCube(v,0):v.isData3DTexture?zt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?zt.setTexture2DArray(v,0):zt.setTexture2D(v,0),ft.unbindTexture()},this.resetState=function(){Y=0,G=0,nt=null,ft.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var em={type:"change"},Ju={type:"start"},im={type:"end"},Hc=new _s,nm=new Xn,oM=Math.cos(70*Nu.DEG2RAD),Ve=new L,Fn=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zu=1e-6,Gc=class extends io{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Qe,this._lastTargetPosition=new L,this._quat=new Qe().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $r,this._sphericalDelta=new $r,this._scale=1,this._panOffset=new L,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new L,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cM.bind(this),this._onPointerDown=lM.bind(this),this._onPointerUp=hM.bind(this),this._onContextMenu=_M.bind(this),this._onMouseWheel=fM.bind(this),this._onKeyDown=pM.bind(this),this._onTouchStart=mM.bind(this),this._onTouchMove=gM.bind(this),this._onMouseDown=uM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=xM.bind(this),this._interceptControlUp=yM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(em),this.update(),this.state=oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fn:n>Math.PI&&(n-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<oM?this.object.lookAt(this.target):(nm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(nm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zu||this._lastTargetPosition.distanceToSquared(this.target)>Zu?(this.dispatchEvent(em),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function lM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(im),this.state=oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case Tn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case Tn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ju)}function dM(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fM(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(im))}function pM(i){this.enabled!==!1&&this._handleKeyDown(i)}function mM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zn.ROTATE:if(this.enableRotate===!1){this.state=oe.NONE;break}this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Zn.PAN:if(this.enablePan===!1){this.state=oe.NONE;break}this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ju)}function gM(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function _M(i){this.enabled!==!1&&i.preventDefault()}function xM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gh="\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744",wo="ugauga_village",vM="\uC54C",oi="\uC6B0\uAC00",rs=[{name:"\uB3D9\uAD74",at:0,pet:"\uC9D1 \uC606 \uB465\uC9C0\uC5D0 \uC54C\uC774 \uB193\uC5EC\uC694"},{name:"\uC6C0\uB9C9",at:100,pet:"\uC54C\uC5D0 \uAE08\uC774 \uAC00\uC694"},{name:"\uB3CC\uC9D1",at:1e3,pet:"\uC54C\uC774 \uAE68\uACE0 \uC544\uAE30 \uACF5\uB8E1\uC774 \uB098\uC640\uC694"},{name:"\uACF5\uB8E1",at:5e3,pet:"\uB2E4 \uC790\uB780 \uACF5\uB8E1\uC774 \uB9C8\uC744\uC744 \uAC78\uC5B4 \uB2E4\uB140\uC694. \uB9C8\uC744\uB3C4 \uB113\uC5B4\uC838\uC694"}],Sd=100,MM="2026-11-12",F=i=>document.getElementById(i),Pn=new URLSearchParams(location.search),Ii=60,sd=86,jn=[[16,14],[23,20],[30,26]];function Sm(i){if(!i)return{x:0,z:0};let t=1;for(;i>3*t*(t+1);)t++;let e=i-3*t*(t-1)-1,n=Math.floor(e/t),s=e%t,r=n*Math.PI/3,a=r+2*Math.PI/3,o=l=>Math.sin(i*12.9898+l)*43758.5453%1*4;return{x:(Math.cos(r)*t+Math.cos(a)*s)*sd+o(1),z:(Math.sin(r)*t+Math.sin(a)*s)*sd+o(2)}}function bd(i){let t=Math.floor(i/Ii),e=Sm(t),n=i%Ii,s=0;for(;n>=jn[s][1];)n-=jn[s++][1];let[r,a]=jn[s],o=n/a*2*Math.PI+s*.5+t;return{x:e.x+Math.cos(o)*r,z:e.z+Math.sin(o)*r,cx:e.x,cz:e.z}}var xn=+Pn.get("demo")||0,as=/^http:\/\/localhost:\d+$/.test(Pn.get("api"))?Pn.get("api"):"https://ugauga-api.ugauga-village.workers.dev",[la,rd]=await Promise.all([fetch("./residents.json",{cache:"no-store"}).then(i=>i.json()).catch(()=>({followers:0,residents:[]})),as&&!xn?fetch(as+"/api/residents",{signal:AbortSignal.timeout(3e3)}).then(i=>i.json()).catch(()=>null):null]);if(rd){let i=new Set(la.residents.map(t=>t.toLowerCase()));for(let t of rd.joined||[])i.has(t.toLowerCase())||(i.add(t.toLowerCase()),la.residents.push(t))}var fe=xn?Array.from({length:xn},(i,t)=>"sample_"+(t+1)):la.residents,Pe=fe.length,Do=xn||Math.max(la.followers||0,rd?.followers||0,Pe),pe=Pn.has("era")?Math.min(rs.length-1,Math.max(0,+Pn.get("era")||0)):rs.findLastIndex(i=>Do>=i.at),Xe=pe===3;Xe&&(sd=176,jn=[[26,14],[42,20],[58,26]]);var bm=jn[1][0]-jn[0][0],sm=Xe?2.6:.75,Ao=i=>jn[i][0]+bm/2,Li=jn[2][0]+bm/2+4,bo=jn[0][0]-3.5;if(Pn.has("test")){let i=1/0,t=Array.from({length:1500},(e,n)=>bd(n));for(let e=0;e<t.length;e++)for(let n=0;n<e;n++)i=Math.min(i,Math.hypot(t[e].x-t[n].x,t[e].z-t[n].z));console.assert(i>5,"plots overlap",i),document.title=`plot test ${i>5?"OK":"FAIL"} min=${i.toFixed(2)}`}var Em=Math.floor(Pe/Ii)+1,_n=Array.from({length:Em},(i,t)=>Sm(t)),re=Math.max(..._n.map(i=>Math.hypot(i.x,i.z)))+Li+10,In=Pn.has("fps");document.body.classList.toggle("shoot",In);var Tm=Math.max(1,Math.floor((Date.now()-new Date(MM+"T00:00:00+09:00"))/864e5)+1);F("vname").textContent=gh;F("vname").insertAdjacentHTML("beforeend",`<small>${Tm}\uC77C\uC9F8</small>`);F("medal").textContent=rs[pe].name;F("vstat").textContent=`${rs[pe].name} \uC2DC\uB300 \xB7 \uC9D1 ${Pe.toLocaleString()}\uCC44`+(Pe>Ii?` \xB7 \uB3D9\uB124 ${Math.ceil(Pe/Ii)}\uACF3`:"");var Us=rs[pe+1];F("vnext").textContent=Us?`${Us.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,Us.at-Do).toLocaleString()}\uBA85`:"";var SM=300,rm=100,bM=(Math.floor(Do/rm)+1)*rm;F("kw").textContent=`\u300C${vM}\u300D`;F("istat").textContent=`\uC9D1 ${Pe.toLocaleString()}\uCC44 \xB7 ${rs[pe].name} \uC2DC\uB300`;wo&&(F("iglink").href=`https://www.instagram.com/${wo}/`);F("join").onclick=()=>F("how").showModal();F("howx").onclick=()=>F("how").close();var Di=matchMedia("(pointer:coarse)").matches||innerWidth<700||Pn.has("lite"),EM=15776138,be=new go({canvas:F("c"),antialias:!0,powerPreference:"high-performance"});be.setPixelRatio(Math.min(devicePixelRatio,Di?1.5:2));be.toneMapping=jr;be.toneMappingExposure=.95;be.shadowMap.enabled=!0;var he=new zr;he.fog=new ka(EM,160,720+re*2);var xe=new Je(50,1,.5,Math.max(2500,re*4+700));xe.position.set(0,re*.9+15,re*1.3+25);var Zt=new Gc(xe,be.domElement);Zt.enableDamping=!0;Zt.maxPolarAngle=1.45;Zt.minDistance=8;Zt.maxDistance=re*3+80;Zt.autoRotate=!0;Zt.autoRotateSpeed=.3;Zt.screenSpacePanning=!1;var am={map:[{LEFT:Tn.PAN,MIDDLE:Tn.DOLLY,RIGHT:Tn.ROTATE},{ONE:Zn.PAN,TWO:Zn.DOLLY_ROTATE}],look:[{LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.ROTATE},{ONE:Zn.ROTATE,TWO:Zn.DOLLY_ROTATE}]},Ed=i=>{Object.assign(Zt.mouseButtons,am[i][0]),Object.assign(Zt.touches,am[i][1]),Zt.enablePan=Zt.zoomToCursor=i==="map"};Ed("map");{let i=new Map,t=be.domElement,e=null,n=()=>{let[r,a]=[...i.values()];return Math.atan2(a.y-r.y,a.x-r.x)};t.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(i.set(r.pointerId,{x:r.clientX,y:r.clientY}),e=i.size===2?n():null)}),t.addEventListener("pointermove",r=>{if(!i.has(r.pointerId)||(i.set(r.pointerId,{x:r.clientX,y:r.clientY}),i.size!==2||e===null))return;let a=n(),o=Math.atan2(Math.sin(a-e),Math.cos(a-e));e=a,Zt._rotateLeft(-o*1.3)});let s=r=>{i.delete(r.pointerId),e=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}var Kn=null;Zt.addEventListener("start",()=>{Zt.autoRotate=!1,Kn=null});var ad=new Xr(16773336,6969920,.95);he.add(ad);var Ro=new L(-80,110,60),Vc=Math.min(re+12,95),Be=new qr(16765600,2.7);Be.castShadow=!0;Be.shadow.mapSize.setScalar(Di?1024:2048);Object.assign(Be.shadow.camera,{left:-Vc,right:Vc,top:Vc,bottom:-Vc,near:1,far:420});Be.shadow.bias=-5e-4;Be.shadow.normalBias=.35;Be.shadow.autoUpdate=!1;he.add(Be,Be.target);function Td(){be.setSize(innerWidth,innerHeight,!1),xe.aspect=innerWidth/innerHeight,xe.updateProjectionMatrix()}addEventListener("resize",Td);Td();var ia=7,$t=()=>{ia|=0,ia=ia+1831565813|0;let i=Math.imul(ia^ia>>>15,1|ia);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296},sn=(i,t=0)=>{let e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},wm=be.capabilities.getMaxAnisotropy();function An(i,t,e=1,n=1){let s=document.createElement("canvas");s.width=s.height=i,t(s.getContext("2d"),i);let r=new js(s);return r.colorSpace=on,r.wrapS=r.wrapT=Lr,r.repeat.set(e,n),r.anisotropy=wm,r}var ca=(i,t,e)=>{let n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n},nh=[-1,0,1],zn=(i,t,e)=>{i.globalAlpha=1,i.fillStyle=e,i.fillRect(0,0,t,t)};function We(i,t,e,n,s,r,a){for(let o=0;o<e;o++){let l=s+$t()*(r-s),c=l*(.6+$t()*.6),h=$t()*t,d=$t()*t,u=$t()*3.14;i.globalAlpha=a*(.4+$t()*.6),i.fillStyle=n[o%n.length];for(let f of nh)for(let g of nh)i.beginPath(),i.ellipse(h+f*t,d+g*t,l,c,u,0,6.283),i.fill()}}function Bn(i,t,e,n,s,r,a,o,l){i.lineCap="round";for(let c=0;c<e;c++){let h=$t()*t,d=$t()*t,u=a+($t()-.5)*o,f=s*(.5+$t());i.globalAlpha=l*(.4+$t()*.6),i.strokeStyle=n[c%n.length],i.lineWidth=r*(.5+$t());for(let g of nh)for(let M of nh)i.beginPath(),i.moveTo(h+g*t,d+M*t),i.lineTo(h+g*t+Math.cos(u)*f,d+M*t+Math.sin(u)*f),i.stroke()}}var Et=Math.PI/2,Ie={grass:An(1024,(i,t)=>{zn(i,t,"#6f8246"),We(i,t,260,["#5f7a3a","#83924c","#566e36","#8f9652"],12,70,.35),Bn(i,t,2600,["#4c6630","#93a25a","#62803c"],10,1.6,-Et,1.2,.5),We(i,t,70,["#9a8452","#b39a62"],3,12,.4)},120,120),dirt:An(512,(i,t)=>{zn(i,t,"#b39262"),We(i,t,200,["#a08052","#c4a674","#8f7046"],6,40,.4),We(i,t,600,["#7a6648","#d8c193"],1,3,.7),Bn(i,t,120,["#8a6c44"],16,1.2,0,6.28,.4)},3,3),rock:An(512,(i,t)=>{zn(i,t,"#8f877b"),We(i,t,180,["#7b7469","#a39c90","#6e675d","#b0a898"],8,50,.45),Bn(i,t,70,["#4d473f"],60,1.8,0,6.28,.6),We(i,t,700,["#5c554c","#c2bbac"],.8,2.2,.6),We(i,t,30,["#6f7a4e"],6,18,.35)}),hide:An(512,(i,t)=>{zn(i,t,"#b07d4c"),We(i,t,120,["#9c6a3c","#c4925e","#8a5c33"],15,60,.4),Bn(i,t,1500,["#7c5430","#c99a66"],7,1,Et,.5,.35),Bn(i,t,12,["#5e3d22"],700,3.5,Et,.04,.8),Bn(i,t,260,["#ecd6ae"],8,1.6,0,.3,.7)},3,1),thatch:An(512,(i,t)=>{zn(i,t,"#c9a352"),Bn(i,t,3200,["#a8823a","#e0c070","#8e6c2e","#d6b25e"],42,2,Et,.25,.6),Bn(i,t,5,["#6e5220"],700,6,0,.02,.5)},4,1),wood:An(256,(i,t)=>{zn(i,t,"#6e4f33"),Bn(i,t,700,["#553a24","#86633f","#4a321e"],60,2,Et,.12,.6),We(i,t,10,["#3c2a18"],3,7,.7)}),leaf:An(256,(i,t)=>{zn(i,t,"#4f7f3a"),Bn(i,t,420,["#3d6a2c","#74a04d","#8db85e"],60,2,Et,.2,.5)}),egg:An(256,(i,t)=>{zn(i,t,"#fbf3df"),We(i,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6)}),eggCrack:An(256,(i,t)=>{zn(i,t,"#fbf3df"),We(i,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6);for(let e=0;e<9;e++){let n=$t()*t,s=$t()*t,r=$t()*6.28;i.globalAlpha=1,i.strokeStyle="#2e2014",i.lineWidth=5,i.lineJoin="miter",i.beginPath(),i.moveTo(n,s);for(let a=0;a<7;a++)r+=($t()-.5)*2.2,n+=Math.cos(r)*20,s+=Math.sin(r)*20,i.lineTo(n,s);i.stroke()}}),fur:An(256,(i,t)=>{zn(i,t,"#d39a3e"),Bn(i,t,1100,["#b07a2c","#e6b860"],6,1,Et,.6,.4),We(i,t,60,["#3a2614"],5,12,.85)}),bone:An(256,(i,t)=>{zn(i,t,"#efe6d0"),We(i,t,90,["#d6c9aa","#fff8e8"],3,20,.4),Bn(i,t,60,["#b8a986"],30,1,Et,.5,.5)}),soft:An(128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})},xo=(i,t,e)=>An(256,(n,s)=>{zn(n,s,i),We(n,s,340,t,3,9,.5),e&&Bn(n,s,26,[e],130,13,Et,.35,.5),We(n,s,500,["#00000022"],1,2,.5)},2,2),Am=(()=>{let i=document.createElement("canvas");i.width=4,i.height=256;let t=i.getContext("2d"),e=new js(i);return e.colorSpace=on,he.background=e,(n,s,r,a)=>{let o=t.createLinearGradient(0,0,0,256);[[0,n],[.3,s],[.5,r],[.62,a],[1,a]].forEach(([l,c])=>o.addColorStop(l,c)),t.fillStyle=o,t.fillRect(0,0,4,256),e.needsUpdate=!0}})();Am("#4f95c0","#9cc7d3","#f3cf9f","#f0b98a");var Rn=(i,t={})=>new Ti({color:i,flatShading:!0,roughness:1,...t}),Le=(i,t={})=>new Ti({map:i,bumpMap:i,bumpScale:2.5,flatShading:!0,roughness:.95,...t}),gn=(i,t={})=>new xs({color:i,fog:!1,...t}),dt=(i,t,e=[0,0,0],n,s)=>{let r=new Nn(i,t);return r.position.set(...e),n&&r.scale.set(...n),s&&r.rotation.set(...s),r},cs=(...i)=>{i.forEach(t=>{t.traverse(e=>{e.isMesh&&e.material.isMeshStandardMaterial&&(e.castShadow=!0,e.receiveShadow=!0)}),he.add(t)})},It=(i,t,e=5)=>new Qs(i,t,e),yt=(i,t,e,n=5)=>new Yi(i,t,e,n),le=new En(1,9,7),Ce=new Vr(1,0),ns=new Gr(1,0),wd=new Gr(1,1),ks=Rn(1840144),od=Rn(16183522),So=Rn(1840144,{emissive:16751168,emissiveIntensity:0}),Hn=Le(Ie.rock),ie=Le(Ie.wood),Ku=Le(Ie.hide),om=Le(Ie.thatch),lr=Le(Ie.leaf,{side:Un}),we=Le(Ie.bone,{bumpScale:1}),ih=new Gt,Cn=new Vt;function Ae(i,t,{vary:e=.16,cast:n=!0,recv:s=!0}={}){return t.length?i.filter(r=>!(r[5]&&t.length>(Di?300:700))).map(([r,a,o=[0,0,0],l=[1,1,1],c=[0,0,0],h],d)=>{let u=new ys(r,a,t.length),f=new Gt().compose(new L(...o),new Qe().setFromEuler(new Dn(...c)),new L(...l));return t.forEach((g,M)=>{if(u.setMatrixAt(M,ih.multiplyMatrices(g,f)),e){let m=1-e*sn(M,d);u.setColorAt(M,Cn.setRGB(m,m*(.97+.03*sn(M,9)),m*(.94+.06*sn(M,5))))}}),u.castShadow=n&&!h,u.receiveShadow=s,u.userData={L:f,mats:t},he.add(u),u}):[]}var Ad=(i,t,e=0,n=1)=>new Gt().compose(new L(i,0,t),new Qe().setFromEuler(new Dn(0,e,0)),new L(n,n,n)),Rd=(i,t,e,n,s,r,a=0)=>new Gt().compose(new L(i,t,e),new Qe().setFromEuler(new Dn(0,a,0)),new L(n,s,r)),Co=i=>new $a(i,48).rotateX(-Et),Rm=Math.max(1500,re+950);Ie.grass.repeat.setScalar(Rm/12.5);var Cd=dt(Co(Rm),Le(Ie.grass,{flatShading:!1,bumpScale:1.5}));Cd.receiveShadow=!0;he.add(Cd);var No=_n.map(i=>Ad(i.x,i.z)),TM=Ae([[Co(bo),Le(ca(Ie.dirt,bo/4.2,bo/4.2),{flatShading:!1}),[0,.06,0]],...jn.map((i,t)=>{let e=Ao(t);return[new Ja(e-sm,e+sm,72).rotateX(-Et),Le(ca(Ie.dirt,e/3,e/3),{flatShading:!1}),[0,.04,0]]})],No,{vary:0,cast:!1}),Cm=[];for(let i=1;i<Em;i++){let t=_n[i],e=_n.slice(0,i).reduce((r,a)=>Math.hypot(a.x-t.x,a.z-t.z)<Math.hypot(r.x-t.x,r.z-t.z)?a:r),n=Math.hypot(e.x-t.x,e.z-t.z),s=dt(new Ms(n,Xe?6:3.2).rotateX(-Et),Le(ca(Ie.dirt,n/6,.5),{flatShading:!1}),[(t.x+e.x)/2,.035,(t.z+e.z)/2],null,[0,-Math.atan2(e.z-t.z,e.x-t.x),0]);s.receiveShadow=!0,he.add(s),Cm.push([t,e])}var wM=(i,t,e)=>_n.every(n=>(i-n.x)**2+(t-n.z)**2>e*e)&&Cm.every(([n,s])=>{let r=s.x-n.x,a=s.z-n.z,o=Math.max(0,Math.min(1,((i-n.x)*r+(t-n.z)*a)/(r*r+a*a)));return Math.hypot(i-n.x-r*o,t-n.z-a*o)>4}),Wc=["\uBAA8\uB2E5\uBD88\uACE8","\uBC14\uC704\uACE8","\uD070\uB098\uBB34\uACE8","\uBF08\uC5B8\uB355","\uBB3C\uAC00\uB9D0","\uBD88\uC528\uACE8","\uB3CC\uD0D1\uB9D0","\uACE0\uC0AC\uB9AC\uB9D0","\uC1A1\uACF3\uB2C8\uACE8","\uCCA8\uBC99\uB9D0","\uD683\uBD88\uB9D0","\uB108\uB7ED\uBC14\uC704\uACE8","\uADF8\uB298\uB9D0","\uAC08\uBE44\uBF08\uACE8","\uAC1C\uC6B8\uB9D0"],ha=i=>Wc[i%Wc.length]+(i>=Wc.length?" "+(Math.floor(i/Wc.length)+1):""),Uo=i=>i?i%5:0;Ae([[new Yn(1.5,.32,4,9),Hn,[0,.2,0],,[Et,0,0]],[It(.7,1.9,6),gn(16747050),[0,1.1,0]],[It(.35,1.2,6),gn(16769162),[0,.9,0]],...[0,2.1,4.2].map(i=>[yt(.13,.16,1.9,5),ie,[Math.cos(i)*.4,.8,Math.sin(i)*.4],,[Math.sin(i)*.5,0,-Math.cos(i)*.5]]),...[.6,2.7,4.8].map(i=>[yt(.34,.38,2.4,7),ie,[Math.cos(i)*5,.38,Math.sin(i)*5],,[Et,0,-i]])],No.filter((i,t)=>t&&Uo(t)===0),{vary:0});var _h=i=>No.filter((t,e)=>e&&Uo(e)===i);Ae([[wd,Hn,[0,1.7,0],[2.7,2.5,2.5]],[ns,Hn,[2.5,.6,.9],[1.1,.9,1]],[ns,Hn,[-2.1,.5,-1.3],[1,.7,1.1]]],_h(1),{vary:0});Ae([[yt(.7,1,6,7),ie,[0,3,0]],[It(4,4.6,8),lr,[0,6.6,0]],[It(3,4,8),lr,[0,9.2,0]],[It(1.8,3.2,8),lr,[0,11.6,0]]],_h(2),{vary:0});Ae([[yt(.9,1.1,1,7),we,[0,.5,0]],[yt(.7,.9,1,7),we,[0,1.5,0]],[yt(.5,.7,1,7),we,[0,2.5,0]],[le,we,[0,3.6,0],[.8,.65,.75]],[It(.15,1,6),we,[.7,4,0],,[0,0,-.6]],[It(.15,1,6),we,[-.7,4,0],,[0,0,.6]]],_h(3),{vary:0});Ae([[Co(3.4),new Ti({color:5218224,roughness:.12,metalness:.2}),[0,.09,0]],[new Yn(3.5,.4,5,12),Hn,[0,.15,0],,[Et,0,0]]],_h(4),{vary:0,cast:!1});_n.slice(1).forEach((i,t)=>xa("\uB3D9\uB124",ha(t+1),!0,1.4).position.set(i.x,Uo(t+1)===2?15:8,i.z));{let i=[16777215,14078150,14479300,16773836,13493478,16766644];TM.forEach(t=>{No.forEach((e,n)=>t.setColorAt(n,Cn.setHex(i[n%i.length]))),t.instanceColor.needsUpdate=!0})}var Pm=No.slice(1).map(i=>i.clone().multiply(new Gt().makeTranslation(0,0,bo-2.5))),lm=Ae([[le,Le(Ie.fur,{flatShading:!1}),[0,1.15,0],[.62,.72,.52]],[le,Rn(14723192),[0,2.1,0],[.42,.42,.42]],[le,Rn(2759698),[0,2.33,-.06],[.47,.34,.45]],[Ce,ks,[.15,2.16,.38],[.05,.05,.04]],[Ce,ks,[-.15,2.16,.38],[.05,.05,.04]],[yt(.16,.15,.6),Rn(14723192),[.22,.3,0]],[yt(.16,.15,.6),Rn(14723192),[-.22,.3,0]],[yt(.08,.22,1.3,6),ie,[.75,1.3,.1],,[0,0,-.5]]],Pm,{vary:0});{let i=[];for(let n=0;n<70;n++){let s=$t()*6.283,r=$t()*(re+260),a=30+$t()*70;i.push(Rd(Math.cos(s)*r,.02,Math.sin(s)*r,a,1,a))}let[t]=Ae([[new Ms(1,1).rotateX(-Et),new xs({map:Ie.soft,transparent:!0,opacity:.28,depthWrite:!1})]],i,{vary:0,cast:!1,recv:!1}),e=[5205550,11972186,6193208,10259018];i.forEach((n,s)=>t.setColorAt(s,Cn.setHex(e[s%4]))),t.instanceColor.needsUpdate=!0,t.renderOrder=1}var cm=(i,t,e,n=.6)=>Array.from({length:t},(s,r)=>{let a=n+r*(6.283-2*n)/(t-1);return[ns,Hn,[Math.sin(a)*i,e*.5,Math.cos(a)*i],[e,e*.7,e*1.1],[0,a,0],1]}),ld=[[[wd,Hn,[0,1.2,0],[2.5,1.9,2.3]],[ns,Hn,[-2,.6,.6],[1.1,.95,1]],[ns,Hn,[1.9,.5,-.5],[1,.75,1.1]],[ns,Hn,[.3,2.6,-.4],[1,.55,.9]],[le,So,[0,.65,1.95],[.85,.95,.5]],[yt(.12,.12,2.1),ie,[0,1.62,2.3],,[0,0,Et],1],[yt(.11,.14,1.6),ie,[-.95,.8,2.3],,[0,0,-.1],1],[yt(.11,.14,1.6),ie,[.95,.8,2.3],,[0,0,.1],1],[Ce,we,[-1.3,.2,2.6],[.24,.2,.22],,1],[yt(.05,.05,.7),we,[-1.05,.08,2.9],,[Et,0,.6],1]],[[new Qs(2.1,3.2,10),Ku,[0,1.6,0]],[It(.75,1.7,3),So,[0,.85,1.5],[1,1,.45]],[yt(.06,.06,1.7,4),ie,[0,3.3,0],,[.38,0,0],1],[yt(.06,.06,1.7,4),ie,[0,3.3,0],,[-.2,0,.36],1],[yt(.06,.06,1.7,4),ie,[0,3.3,0],,[-.2,0,-.36],1],[yt(.07,.07,2,4),ie,[-.52,.92,1.66],,[-.58,0,-.28],1],[yt(.07,.07,2,4),ie,[.52,.92,1.66],,[-.58,0,.28],1],[new Yn(1.46,.07,4,12),ie,[0,1,0],,[Et,0,0],1],[new Yn(.69,.06,4,9),ie,[0,2.2,0],,[Et,0,0],1],...cm(2.15,5,.38),[yt(.06,.06,1.5,4),ie,[2.5,.75,-.9],,,1],[yt(.06,.06,1.5,4),ie,[2.5,.75,.3],,,1],[yt(.05,.05,1.5,4),ie,[2.5,1.5,-.3],,[Et,0,0],1],[new Fe(.05,.6,.42),Ku,[2.5,1.15,-.6],,,1],[new Fe(.05,.5,.36),Ku,[2.5,1.2,0],,,1]],[[yt(1.9,2.05,1.7,12),Le(ca(Ie.rock,3,1)),[0,.85,0]],[new Qs(2.7,2.3,12),om,[0,2.85,0]],[new Yn(2.55,.13,4,14),om,[0,1.76,0],,[Et,0,0],1],[new Fe(.85,1.25,.3),So,[0,.63,1.95]],[new Fe(.14,1.4,.2),ie,[-.55,.7,2.06],,,1],[new Fe(.14,1.4,.2),ie,[.55,.7,2.06],,,1],[new Fe(1.36,.16,.24),ie,[0,1.44,2.06],,,1],[new Fe(.46,.4,.2),So,[1.69,1.05,.98],,[0,1.047,0],1],[yt(.08,.08,.8,4),ie,[0,4.25,0],,,1],...cm(2.2,4,.42,1),[yt(.13,.13,.95),ie,[2.6,.13,-.75],,[Et,0,0],1],[yt(.13,.13,.95),ie,[2.87,.13,-.75],,[Et,0,0],1],[yt(.13,.13,.95),ie,[2.73,.36,-.75],,[Et,0,0],1]]];ld[3]=[...ld[2],[It(.17,2.6,6),we,[-1,1.3,2.25],,[0,0,-.28]],[It(.17,2.6,6),we,[1,1.3,2.25],,[0,0,.28]],[Ce,we,[0,1.85,2.2],[.3,.26,.24],,1]];var os=fe.map((i,t)=>bd(t)),ua=os.map((i,t)=>Ad(i.x,i.z,Math.atan2(i.cx-i.x,i.cz-i.z)+(sn(t,1)-.5)*.3,(.92+sn(t,2)*.2)*(Xe?1.25:1))),AM=Ae(ld[pe],ua),Ni=i=>{let t=0;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return(Math.imul(t,2654435761)>>>0)/4294967296},Im=new Set,Lm=(i,t,e)=>{i&&(Im.add(i),fe.forEach((n,s)=>i.setColorAt(s,Cn.setHSL(Ni(n),t,e))),i.instanceColor.needsUpdate=!0)},Is=Le(pe===1?Ie.eggCrack:Ie.egg,{roughness:.6,flatShading:!1,bumpScale:.6,side:Un}),Gn=ua.map(i=>i.clone().multiply(new Gt().makeTranslation(1.9,0,1.6))),xh=Gn.map(i=>i.clone().multiply(new Gt().makeScale(1.5,1.5,1.5)));Ae([[new Yn(.5,.15,4,8),ie,[0,.13,0],,[Et,0,0],1]],Gn);var Qn=["\uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD0C0\uB974\uBCF4\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD53C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD2B8\uB9AC\uCF00\uB77C\uD1B1\uC2A4","\uD504\uD14C\uB77C\uB178\uB3C8","\uBE0C\uB77C\uD0A4\uC624\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD14C\uACE0\uC0AC\uC6B0\uB8E8\uC2A4","\uC548\uD0AC\uB85C\uC0AC\uC6B0\uB8E8\uC2A4","\uD30C\uB77C\uC0AC\uC6B0\uB864\uB85C\uD478\uC2A4","\uBCA8\uB85C\uD0A4\uB78D\uD1A0\uB974"],cd=[1,1,1,0,1,0,0,0,0,1],RM={},Xc=Pn.get("award"),ts=fe.map((i,t)=>RM[i.toLowerCase()]||(Xc&&t===4?Xc==="bow"?{bow:1}:Xc==="name"?{rank:3,name:"\uBF40\uC9DD\uC774"}:{kind:+Xc,rank:2}:null)),CM=ts.flatMap((i,t)=>i?.bow?[t]:[]),_i=fe.map((i,t)=>ts[t]?.kind??Math.floor(Ni(i+"!")*Qn.length)),Dm=["","\uD669\uAE08","\uBB34\uC9C0\uAC1C"],hm=+Pn.get("rare")||0,cr=fe.map((i,t)=>{if(hm)return t%9===4?hm:0;if(ts[t]?.bow)return 2;let e=Ni(i+"*");return e<.001?2:e<.011?1:0}),um=i=>new En(1,9,4,0,6.283,i?0:Et,Et),Pd=(()=>{let i=new En(1,16,6,0,6.283,Et-.12,Et+.12),t=i.attributes.position;for(let e=0;e<=16;e++)t.setY(e,t.getY(e)+(e%2?.2:-.03));return i.computeVertexNormals(),i})(),hd=[],is=[];if(pe===0)is.push(...Ae([[le,Is,[0,.66,0],[.45,.6,.45]]],Gn,{vary:0}));else if(pe===1)is.push(...Ae([[le,ks,[0,.68,0],[.4,.55,.4]]],Gn,{vary:0,cast:!1}),...Ae([[um(0),Is,[0,.66,0],[.45,.6,.45]],[um(1).translate(0,.2,0).rotateZ(.24),Is,[0,.66,0],[.45,.6,.45]]],Gn,{vary:0}));else{let i=new En(1,5,2,0,2.2,.4,.8),t=Ae([[Pd,Is,[0,.72,0],[.58,.68,.58]],[i,Is,[-.8,.03,.4],[.22,.22,.22],[.5,1,2.6],1],[i,Is,[.65,.03,.7],[.16,.16,.16],[2.4,2,.3],1]],xh,{vary:0,cast:Pe<=1500});t.forEach(e=>Lm(e,.62,.76)),pe===2&&is.push(t[0]),hd.push(...t)}is.forEach(i=>i.material===Is&&Lm(i,.62,.76));var PM={S:1,B:.62,K:.36},Nm={value:0};function sh(i,t=1,e=0){let n=[],s=[],r=[],a=[],o=[],l=[],c=new Gt,h=new Vt;for(let[f,g,M=[0,0,0],m=[1,1,1],p=[0,0,0],x]of i){let E=e&&UM.get(f)||f,S=(E.index?E.toNonIndexed():E.clone()).applyMatrix4(c.compose(new L(...M),new Qe().setFromEuler(new Dn(...p)),new L(...m)));if(e&&(S.computeBoundingSphere(),S.boundingSphere.radius<e)){S.dispose();continue}let A=S.attributes.position,T=S.attributes.normal,_=S.attributes.uv,b=typeof g=="string",D=PM[g];b||h.setHex(g);for(let R=0;R<A.count;R++){let N=A.getZ(R)*t;n.push(A.getX(R)*t,A.getY(R)*t,N),s.push(T.getX(R),T.getY(R),T.getZ(R)),r.push(b?_.getX(R):0,b?_.getY(R):0),b?a.push(D,D,D):a.push(h.r,h.g,h.b),o.push(+b),x?x[0]==="leg"?l.push(x[2]*t,x[3]*t,x[1],0):x[0]==="wing"?l.push(x[2]*t,x[3]*t,x[1]*2,0):l.push(0,0,0,Math.max(0,x[0]==="tail"?x[1]*t-N:N-x[1]*t)*x[2]):l.push(0,0,0,0)}S.dispose()}let d=new Oe,u=(f,g)=>new se(f,g);return d.setAttribute("position",u(n,3)),d.setAttribute("normal",u(s,3)),d.setAttribute("uv",u(r,2)),d.setAttribute("color",u(a,3)),d.setAttribute("aTint",u(o,1)),d.setAttribute("aAnim",u(l,4)),d.computeBoundingSphere(),d}var IM=[`float ph = aPhase;
   if (abs(aAnim.z) > 1.5) { float a = sin(ph) * 0.42 * sign(aAnim.z); vec2 d = transformed.xy - aAnim.xy; transformed.xy = aAnim.xy + vec2(d.x * cos(a) - d.y * sin(a), d.x * sin(a) + d.y * cos(a)); }
   else if (aAnim.z != 0.0) { float a = sin(ph) * 0.5 * aAnim.z; vec2 d = transformed.yz - aAnim.xy; transformed.yz = aAnim.xy + vec2(d.x * cos(a) - d.y * sin(a), d.x * sin(a) + d.y * cos(a)); }
   else transformed.y += sin(ph * 2.0) * 0.05;
   transformed.x += sin(ph * 0.5 - transformed.z * 0.3) * aAnim.w;`,`float ph = uTime * (1.5 + fract(aPhase) * 0.9) + aPhase * 6.283, w = smoothstep(0.7, 1.25, transformed.y), h = transformed.y - 0.7;
   transformed.x += h * sin(ph) * 0.13 * w; transformed.z += h * sin(ph * 1.31 + 1.0) * 0.08 * w; transformed.y += abs(sin(ph * 0.5)) * 0.05 * w;`];function Id(i,t,e){let n=new Ti({map:i,bumpMap:i,bumpScale:.8,roughness:.78,flatShading:t,vertexColors:!0});return n.onBeforeCompile=s=>{s.uniforms.uTime=Nm,s.vertexShader=`attribute float aTint; attribute vec4 aAnim; attribute float aPhase; attribute float aRare; uniform float uTime; varying float vTint; varying float vRare;
`+s.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
vTint = aTint; vRare = aRare; if (aTint < 0.5) vColor.rgb = color.rgb;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+IM[+e]),s.fragmentShader=`varying float vTint; varying float vRare; uniform float uTime;
`+s.fragmentShader.replace("#include <map_fragment>",`vec4 d0 = diffuseColor;
#include <map_fragment>
diffuseColor = mix(d0, diffuseColor, vTint);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
if (vRare > 0.5 && vTint > 0.5) roughnessFactor = vRare < 1.5 ? 0.36 : 0.45;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (vRare > 0.5) {
          float fr = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.5); // \uAC00\uC7A5\uC790\uB9AC\uC77C\uC218\uB85D 1
          if (vRare < 1.5) { // \uD669\uAE08: \uD638\uBC15\uBE5B \uBAB8 + \uAC00\uC7A5\uC790\uB9AC \uAE08\uBE5B + \uB4DC\uBB38\uB4DC\uBB38 \uBC18\uC9DD\uC784
            float sp = pow(max(0.0, sin(vMapUv.x * 37.0 + uTime * 2.3) * sin(vMapUv.y * 31.0 - uTime * 1.6)), 26.0);
            totalEmissiveRadiance += (vec3(1.0, 0.6, 0.12) * fr * 0.6 + vec3(1.0, 0.95, 0.7) * sp * 1.6) * vTint;
          } else { // \uBB34\uC9C0\uAC1C: \uC9C4\uC8FC\uCC98\uB7FC \uBCF4\uB294 \uAC01\uB3C4\uC640 \uC2DC\uAC04\uC5D0 \uB530\uB77C \uC740\uC740\uD558\uAC8C \uC0C9\uC774 \uB3C8\uB2E4
            vec3 rb = 0.72 + 0.28 * cos(6.2832 * (uTime * 0.06 + fr * 0.55 + vMapUv.y * 0.16 + vec3(0.0, 0.33, 0.67)));
            diffuseColor.rgb *= mix(vec3(1.0), rb, vTint); totalEmissiveRadiance += rb * fr * 0.3 * vTint;
          }
        }`)},n.customProgramCacheKey=()=>"dino"+ +e,n}var LM=An(256,(i,t)=>{zn(i,t,"#ffffff"),We(i,t,520,["#d0d0d0","#ececec","#bcbcbc"],3,8,.55),We(i,t,28,["#8c8c8c"],8,16,.5)},2,2),Um=An(512,(i,t)=>{zn(i,t,"#ffffff"),We(i,t,1500,["#cfcfcf","#e6e6e6","#b4b4b4","#f4f4f4"],4,10,.6),We(i,t,70,["#7e7e7e"],10,26,.45),Bn(i,t,160,["#9a9a9a"],26,2,0,6.28,.35)},4,3),_a=Id(LM,!1,!0),DM=Id(Um,!1,!1),NM=Id(Um,!0,!1);_a.bumpScale=.5;var Ki=new En(1,Di?10:12,Di?6:8),yo=new En(1,8,5),Ci=new En(1,8,6),ji=new Vr(1,1),Rs=new Fe(1,1,1),ln=new En(1,12,8),UM=new Map([[ln,new En(1,7,5)],[Ki,new En(1,7,5)],[Ci,new En(1,6,4)],[ji,Ce]]),OM=new Yi(.6,1,1,4).rotateY(Math.PI/4),dm=16773584,gi=15722192,ud=1577228,qc=14207392,rr=13616292,FM=8006178,Om=(()=>{let i=[[Ki,"S",[0,.74,0],[.38,.44,.38]],[Ki,dm,[0,.7,.09],[.29,.37,.32]]],t=(c,h,d,u=1.24,f=.18)=>[Ki,"S",[0,u,f],[c,h,d]],e=(c,h,d,u=.06)=>{let[,,[,f,g],[M,m,p]]=c,x=f+d,E=g+p*Math.sqrt(Math.max(.05,1-(h/M)**2-(d/m)**2))-u*.25;return[-1,1].flatMap(S=>[[yo,16777215,[S*h,x,E],[u*1.5,u*1.7,u]],[yo,ud,[S*h,x-u*.1,E+u*.5],[u,u*1.2,u*.7]],[Ce,16777215,[S*h+u*.35,x+u*.45,E+u*1.1],[u*.32,u*.32,u*.2]],[yo,16748444,[S*h*1.3,x-u*2.5,E-u*.2],[u*1.1,u*.6,u*.5]]])},n=(c,h,d)=>[-1,1].map(u=>[Ce,ud,[u*c,h,d],[.022,.022,.016]]),s=(c,h,d,u,f)=>[Ki,"S",[0,u,f],[c,h,d]],r=(c,h,d)=>[-1,1].map(u=>[It(.028,.08,6),16777215,[u*c,h,d],,[Math.PI,0,0]]),a=[-1,1].map(c=>[yt(.04,.03,.24,6),"S",[c*.26,.98,.34],,[1,0,0]]),o=(c,h=.06)=>c.map(([d,u])=>[yo,"B",[0,d,u],[h*.7,h,h]]),l;return[[...i,l=t(.37,.33,.36,1.27,.14),s(.23,.15,.2,1.17,.44),...r(.09,1.04,.56),...a,...o([[1.6,.06],[1.56,-.1],[1.46,-.22]],.07),...n(.06,1.22,.63),...e(l,.19,.1,.07)],[...i,l=t(.32,.3,.34,1.26,.14),s(.17,.12,.26,1.17,.46),...r(.07,1.07,.64),...a,...o([[1.31,.56],[1.3,.66],[1.57,.14],[1.56,.02],[1.5,-.1]],.045),...n(.045,1.2,.71),...e(l,.17,.09)],[...i,l=t(.27,.25,.3,1.25,.12),s(.12,.09,.34,1.18,.5),...r(.05,1.1,.74),[new Yi(1,1,.07,12,1,!1,0,Math.PI).rotateZ(Et),"B",[0,.98,-.18],[1,.66,.42]],...n(.035,1.22,.82),...e(l,.14,.08,.055)],[...i,l=t(.38,.33,.4,1.22,.16),[yt(.44,.44,.06,14),"B",[0,1.42,-.1],,[Et-.3,0,0]],[It(.05,.32,8),gi,[-.15,1.55,.36],,[.8,0,0]],[It(.05,.32,8),gi,[.15,1.55,.36],,[.8,0,0]],[It(.05,.2,8),gi,[0,1.24,.6],,[Et,0,0]],...e(l,.19,.08)],[...i,l=t(.28,.26,.29,1.25,.12),[It(.1,.5,10),15779944,[0,1.19,.6],,[Et,0,0]],[It(.09,.5,10),"B",[0,1.55,-.14],,[-1,0,0]],...[-1,1].map(c=>[Ki,"B",[c*.48,.98,0],[.3,.035,.17],[0,0,c*.5]]),...e(l,.15,.08,.06)],[...i,[yt(.1,.14,.7,10),"S",[0,1.35,.08],,[.25,0,0]],l=t(.2,.17,.27,1.76,.26),...n(.05,1.82,.5),...e(l,.12,.04,.05)],[...i,l=t(.3,.26,.34,1.2),...[[1.55,.1],[1.5,-.14],[1.3,-.36]].map(([c,h])=>[Ki,"B",[0,c-.06,h],[.04,.17,.13]]),...n(.07,1.24,.5),...e(l,.15,.08)],[...i,l=t(.36,.22,.34,1.16),...[[-.14,.05],[.14,.05],[0,-.14],[-.2,-.2],[.2,-.2]].map(([c,h])=>[yo,"B",[c,1.37,.18+h],[.07,.06,.07]]),[It(.05,.2,8),gi,[-.38,1.2,.1],,[0,0,Et]],[It(.05,.2,8),gi,[.38,1.2,.1],,[0,0,-Et]],...e(l,.17,.06)],[...i,l=t(.26,.24,.36,1.24),[Ki,dm,[0,1.16,.52],[.17,.08,.16]],[yt(.07,.05,.6,10),"B",[0,1.56,-.08],,[-1.1,0,0]],...e(l,.14,.08)],[...i,l=t(.25,.23,.27,1.25,.13),s(.12,.09,.2,1.19,.44),...r(.05,1.11,.56),...[[-.4,-.08],[0,0],[.4,.08]].map(([c,h])=>[It(.05,.34,8),"B",[h,1.52,.02],,[-.4,0,-c]]),...[-1,1].map(c=>[Ki,"B",[c*.42,.98,.1],[.2,.03,.1],[0,0,c*.6]]),...n(.035,1.22,.62),...e(l,.14,.08,.06)]]})(),Oo=Om.map(i=>sh(i)),Hs=(()=>{let i=l=>{let c=l?5:9;return{leg:(h,d,u,f,g)=>{let M=["leg",g,u,d];return l?[[yt(f,f*.75,u*.47,c),"S",[h,u*.415,d+u*.025],,[.64,0,0],M],[yt(f*.72,f*.6,u*.27,c),"S",[h,u*.14,d-u*.04],,[-.64,0,0],M],[Rs,"K",[h,f*.3,d+u*.12],[f*2,f*.6,f*3.2],,M]]:[[yt(f*1.3,f*.8,u,c),"S",[h,u/2,d],,,M],[Ci,"K",[h,f*.4,d+f*.15],[f*1.2,f*.5,f*1.4],,M]]},tail:(h,d,u,f,g=0,M=.05)=>[It(u,f,c).rotateX(-Et),"S",[0,d-Math.sin(g)*f/2,h-f/2+.3],,[-g,0,0],["tail",h,M]],eye:(h,d,u,f,g)=>[-1,1].flatMap(M=>l?[[Ce,15909424,[M*h,d,u],[f*.55,f,f],,g],[Ce,ud,[M*(h+f*.32),d,u+f*.1],[f*.3,f*.85,f*.3],,g]]:[[Ce,2365970,[M*h,d,u],[f*.55,f,f],,g],[Ce,16777215,[M*(h+f*.4),d+f*.35,u+f*.3],[f*.2,f*.26,f*.26],,g]])}},t=i(!0),e=i(!1),n=({w:l=1,hs:c=1,sl:h=1.5,sw:d=.85,al:u=.8,teeth:f=5,tail:g=4.4,extra:M=()=>[]})=>{let m=(p,x,E,S=[1,1,1],A)=>[p,x,[E[0]*c,4.8+E[1]*c,3.3+E[2]*c],S.map(T=>T*c),A];return[[ji,"S",[0,3.5,0],[1.15*l,1.3,2.3]],[ji,rr,[0,3.05,.35],[.95*l,1,1.9]],...[-1.1,0,1.1].map(p=>[ji,"K",[0,3.95,p],[l,.9*Math.sqrt(1-(p/2.3)**2)+.06,.2]]),[yt(.7*l,l,2,5),"S",[0,4.25,2.35],,[.95,0,0]],m(ji,"S",[0,0,0],[.78,.8,1]),m(OM,"S",[0,-.08,.55+h/2],[d,h,.8],[Et,0,0]),m(Rs,"S",[0,-.74,.3+h/2],[d*1.05,.2,h+.5],[.2,0,0]),m(Rs,FM,[0,-.56,.4+h/2],[d*.8,.08,h],[.12,0,0]),...Array.from({length:f},(p,x)=>{let E=(x+.6)/f,S=.707-.283*E;return[-1,1].map(A=>m(It(.07,.3,4),16777215,[A*(d*S-.06),-.2-.8*S,.55+h*E],void 0,[Math.PI,0,0]))}).flat(),...[-1,1].map(p=>m(Rs,"K",[p*.5,.6,.4],[.32,.18,.8],[.14,0,-p*.36])),...t.eye(.6*c,4.8+.3*c,3.3+.42*c,.17*c),...[-1,1].map(p=>[yt(.13,.09,u,5),"S",[p*.8*l,3.1,2.3+u*.35],,[1.15,0,0]]),t.tail(-1.7,3.7,l,g),...[-1,1].flatMap(p=>[[ji,"S",[p*.85*l,2.95,-.2],[.5,1.05,.9],,["leg",p,3.2,-.2]],...t.leg(p*.9*l,-.2,3.2,.36,p)]),...[-1.4,-.5,.4,1.3].map(p=>[It(.17,.42,4),"K",[0,4.72-.11*p*p,p]]),...M(m)]},s=[new Yi(1,1,.14,7,1,!1,0,Math.PI).rotateZ(Et),"B",[0,4.5,-.2],[1,2.6,2.5]],r=(l,c,h,d,u)=>h.map(f=>[Ci,"K",[0,l,f],[d,c,u]]),a=(l,c,h,d,u)=>{let f=sh(l,c);return f.computeBoundingBox(),{g:f,lo:sh(l,c,.5),m:h?NM:DM,hip:d*c,len:f.boundingBox.max.z-f.boundingBox.min.z,fly:u}},o=["neck",2.4,.04];return[a(n({}),.9,1,3.2),a(n({w:.9,hs:.9,sl:1.8,sw:.7,extra:l=>[0,1,2,3].map(c=>l(It(.1,.22,4),"K",[0,.46-.075*c,.9+.4*c]))}),.76,1,3.2),a(n({w:.92,hs:.78,sl:2.7,sw:.5,al:1.4,tail:5,teeth:7,extra:()=>[s]}),.95,1,3.2),a([[ln,"S",[0,2.15,-.3],[1.5,1.45,2.6]],[ln,rr,[0,1.8,-.2],[1.25,1.15,2.2]],...r(2.75,.85,[-1.4,-.3,.8],1.2,.28),[ln,"S",[0,2,2.75],[.95,.9,1.3]],[Ci,qc,[0,1.6,3.95],[.38,.45,.45]],[yt(1.75,1.75,.22,14),"B",[0,2.95,1.95],,[Et-.5,0,0]],[yt(1.15,1.15,.26,14),"K",[0,2.95,1.97],,[Et-.5,0,0]],...[-1,1].map(l=>[It(.17,1.6,8),gi,[l*.45,3.25,3.35],,[1,0,0]]),[It(.15,.6,8),gi,[0,2.55,3.85],,[.5,0,0]],...e.eye(.86,2.3,3.1,.13),e.tail(-2.5,2.1,.85,3,.15),...[-1,1].flatMap(l=>[...e.leg(l*.95,1.25,1.75,.42,l),...e.leg(l,-1.8,1.8,.46,-l)])],.8,0,1.75),a([[ji,"S",[0,0,0],[.55,.5,1.2]],[ji,rr,[0,-.15,.1],[.42,.4,1]],[yt(.2,.3,1.2,5),"S",[0,.35,1.3],,[.9,0,0]],[ji,"S",[0,.75,1.95],[.36,.36,.5]],[It(.2,2.4,4).rotateX(Et),14266970,[0,.68,3.5]],[It(.2,1.9,4).rotateX(-Et),"B",[0,1.15,1.2],,[.35,0,0]],...[-1,1].flatMap(l=>{let c=["wing",l,l*.4,0];return[[Rs,"B",[l*1.6,0,.15],[2.6,.08,1.7],,c],[Rs,"S",[l*3.9,0,.45],[2.2,.07,1],[0,-l*.3,0],c],[yt(.06,.06,4.8,4).rotateZ(Et),"K",[l*2.7,.06,.98],,[0,-l*.12,0],c],[yt(.07,.05,1,4).rotateX(Et),"S",[l*.25,-.2,-1.5]]]}),...t.eye(.3,.85,2.12,.1)],.7,1,1,1),a([[ln,"S",[0,4.6,0],[1.9,2,3.4]],[ln,rr,[0,4.15,.1],[1.6,1.6,2.9]],...[-1.6,0,1.6].flatMap(l=>[-1,1].map(c=>[Ci,"B",[c*.8,6.32-.1*l*l,l],[.55,.3,.65]])),[yt(.55,1.2,7.6,9),"S",[0,9,4.2],,[.45,0,0],o],[ln,"S",[0,12.55,6.25],[.62,.55,.95],,o],[Ci,"S",[0,13.05,6.05],[.36,.4,.45],,o],...e.eye(.55,12.65,6.6,.12,o),e.tail(-2.9,4.5,1.15,5.6,.2),...[-1,1].flatMap(l=>[...e.leg(l*1.15,1.9,4.4,.6,l),...e.leg(l*1.2,-2,3.9,.62,-l)])],.8,0,4.2),a([[ln,"S",[0,2.3,-.2],[1.3,1.6,2.7]],[ln,rr,[0,1.9,-.1],[1.1,1.25,2.3]],[yt(.4,.7,1.7,9),"S",[0,1.85,2.75],,[1.8,0,0]],[ln,"S",[0,1.55,3.75],[.42,.4,.8]],[Ci,qc,[0,1.45,4.45],[.25,.22,.25]],...e.eye(.36,1.7,3.9,.09),...Array.from({length:8},(l,c)=>{let h=2-c*.62,d=(h+.2)/2.7,u=.6+.55*Math.sin(c/7*Math.PI);return[It(.7,1.4,4),"B",[c%2?.22:-.22,2.3+1.6*Math.sqrt(1-d*d)+u*.45,h],[.2*u,u,u]]}),e.tail(-2.5,2.3,.75,3.8,.1),...[-5.2,-5.75].flatMap(l=>[-1,1].map(c=>[It(.1,.95,6),gi,[c*.4,2.3,l],,[0,0,-c*1.1],["tail",-2.5,.05]])),...[-1,1].flatMap(l=>[...e.leg(l*.75,1.5,1.5,.36,l),...e.leg(l*.85,-1.4,2.2,.45,-l)])],.73,0,1.9),a([[ln,"S",[0,1.5,0],[1.9,1,2.6]],[ln,"B",[0,1.72,-.1],[1.78,.92,2.45]],[ln,rr,[0,1.25,0],[1.6,.8,2.3]],...[-2,-1,0,1,2].flatMap(l=>[-1,0,1].map(c=>[Ce,"K",[c*.85,1.72+.92*Math.sqrt(1-(c*.85/1.78)**2-(l*.85/2.45)**2),l*.85-.1],[.24,.17,.24]])),...[-2,-1,0,1,2].flatMap(l=>[-1,1].map(c=>[It(.2,.75,6),gi,[c*1.8*Math.sqrt(1-(l*.9/2.6)**2),1.45,l*.9],,[0,0,-c*Et]])),[ln,"S",[0,1.3,2.95],[.78,.55,.8]],[Ci,qc,[0,1.15,3.65],[.4,.3,.3]],...[-1,1].map(l=>[It(.14,.5,6),gi,[l*.6,1.7,2.55],,[-.6,0,-l*.7]]),...e.eye(.68,1.42,3.25,.1),e.tail(-2.4,1.45,.55,3.4,0,.07),[Ci,gi,[0,1.45,-5.6],[.8,.5,.7],,["tail",-2.4,.07]],...[-1,1].flatMap(l=>[...e.leg(l*1.15,1.5,1.05,.4,l),...e.leg(l*1.15,-1.5,1.05,.4,-l)])],.63,0,1.05),a([[ln,"S",[0,3,-.2],[1.2,1.5,2.6]],[ln,rr,[0,2.6,0],[1,1.2,2.2]],...r(3.65,.85,[-1.3,-.2,.9],.95,.26),[yt(.48,.85,2.6,9),"S",[0,4.4,2.75],,[.75,0,0]],[ln,"S",[0,5.5,3.8],[.52,.5,.95]],[Ci,qc,[0,5.28,4.7],[.42,.2,.5]],[yt(.1,.24,2.8,9),"B",[0,6.35,2.75],,[-1.05,0,0]],...e.eye(.47,5.62,4.05,.1),e.tail(-2.4,3.1,.9,4.6,.05),...[-1,1].flatMap(l=>[...e.leg(l*.75,-.9,2.9,.46,l),...e.leg(l*.6,1.7,2.4,.26,-l)])],.72,0,2.9),a(n({w:.7,hs:.75,sl:1.5,sw:.55,al:1.6,tail:4.6,teeth:4,extra:l=>[...[-.35,0,.35].map(c=>l(It(.14,1,4),"B",[c*.5,.95,-.5],void 0,[-.9,0,-c])),...[-1,1].map(c=>[Rs,"B",[c*1.05,2.95,2.7],[1.1,.06,1.5],[.35,0,c*.45]]),[Rs,"B",[0,3.7,-5.6],[1.5,.06,1.7],,["tail",-1.7,.05]]]}),.4,1,3.2)]})(),Ld=fe.map((i,t)=>.9+sn(t,3)*.18),BM=pe===2?Om.map(i=>sh(i,1,.13)):[],Eo=new Float32Array(Pe*3),zM={x:0,y:0,z:0,sn:0,cs:1,s:1,ph:0};fe.forEach((i,t)=>{let e=Ni(i),n=cr[t];(n===1?Cn.setHSL(.1,.88,.4):n===2?Cn.setRGB(.95,.95,.95):Xe?Cn.setHSL(e,.18+sn(t,5)*.14,.36+sn(t,6)*.12):Cn.setHSL(e,.6,.6)).toArray(Eo,t*3)});var Fm=(Xe?Hs.map(i=>[i.g,i.lo,i.m]):pe===2?Oo.map((i,t)=>[i,BM[t],_a]):[]).map(([i,t,e],n)=>{let s=_i.flatMap((a,o)=>a===n?[o]:[]);if(!s.length)return null;let r=(a,o)=>{let l=new ys(a,e,s.length),c=new bi(new Float32Array(s.length),1),h=new bi(new Float32Array(s.length),1);return l.setColorAt(0,Cn),a.setAttribute("aPhase",c),a.setAttribute("aRare",h),l.castShadow=o,l.frustumCulled=!1,l.count=0,[l.instanceMatrix,l.instanceColor,c,h].forEach(d=>d.setUsage(Ru)),he.add(l),{im:l,ph:c,rare:h,id:new Int32Array(s.length)}};return{idx:s,hi:r(i,!0),lo:r(t,!1),A:Hs[n]}}),Yc=Xe?(()=>{let i=new Float32Array(Pe),t=new Float32Array(Pe),e=new Float32Array(Pe),n=new Float32Array(Pe);return fe.forEach((s,r)=>{let a=os[r],o=r%Ii,l=o<jn[0][1]?0:o<jn[0][1]+jn[1][1]?1:2,c=Hs[_i[r]].fly;i[r]=Math.atan2(a.z-a.cz,a.x-a.cx),e[r]=Ao(l)+(sn(r,7)-.5)*(c?14:2.2),t[r]=(l%2?-1:1)*(c?7:1.7)/Ao(l),n[r]=c?11+sn(r,8)*8:0}),{a0:i,w:t,R:e,y:n}})():null,Ct=null,es=new Map;function Bm(i,t){let e=zM,n=Ct&&Ct.i===i?Ct:es.get(i),s=!!n;if(!Xe){let o=xh[i].elements;if(e.s=Math.hypot(o[0],o[2])*fa[i],e.ph=sn(i,4)*9,s)e.x=n.x,e.y=n.hop,e.z=n.z,e.sn=Math.sin(n.a+n.rot),e.cs=Math.cos(n.a+n.rot);else{let l=e.s/fa[i];e.x=o[12]+ko[i],e.y=0,e.z=o[14]+Ho[i],e.sn=o[8]/l,e.cs=o[10]/l}return e}let{hip:r,fly:a}=Hs[_i[i]];if(e.s=Ld[i],s)e.x=n.x,e.z=n.z,e.y=a?3.2+Math.sin(t*2)*.3:0,e.sn=Math.sin(n.a),e.cs=Math.cos(n.a),e.ph=a?t*5:n.dist*Math.PI/(r*e.s);else{let o=Yc.w[i],l=Yc.a0[i]+o*t,c=Yc.R[i],h=Math.sign(o),d=os[i];e.x=d.cx+Math.cos(l)*c,e.z=d.cz+Math.sin(l)*c,e.y=Yc.y[i]+(a?Math.sin(t*.6+i)*1.5:0),e.sn=-Math.sin(l)*h,e.cs=Math.cos(l)*h,e.ph=a?t*4+i:Math.abs(o)*c*t*Math.PI/(r*e.s)+i}return e}function kM(i){let t=xe.position,e=(Xe?150:75)**2;for(let n of Fm){if(!n)continue;let s=0,r=0;for(let a=0;a<n.idx.length;a++){let o=n.idx[a],{x:l,y:c,z:h,sn:d,cs:u,s:f,ph:g}=Bm(o,i),M=(l-t.x)**2+(c-t.y)**2+(h-t.z)**2<e,m=M?n.hi:n.lo,p=M?s++:r++,x=m.im.instanceMatrix.array,E=p*16,S=m.im.instanceColor.array;x[E]=f*u,x[E+1]=0,x[E+2]=-f*d,x[E+3]=0,x[E+4]=0,x[E+5]=f,x[E+6]=0,x[E+7]=0,x[E+8]=f*d,x[E+9]=0,x[E+10]=f*u,x[E+11]=0,x[E+12]=l,x[E+13]=c,x[E+14]=h,x[E+15]=1,S[p*3]=Eo[o*3],S[p*3+1]=Eo[o*3+1],S[p*3+2]=Eo[o*3+2],m.ph.array[p]=g,m.rare.array[p]=cr[o],m.id[p]=o}n.hi.im.count=s,n.lo.im.count=r;for(let a of[n.hi,n.lo])a.im.instanceMatrix.needsUpdate=a.im.instanceColor.needsUpdate=a.ph.needsUpdate=a.rare.needsUpdate=!0}}Ae([[yt(.05,.06,3.2,4),ie,[-2.2,1.6,1.3]],[new Fe(.9,.55,.05),Rn(15906354,{emissive:7031296}),[-1.72,2.9,1.3]]],ua.slice(0,Sd),{vary:0});{let i=[14241594,3837913,5221978,10117072,14715434,3126696,14245786],t=Ae([[yt(.04,.05,2.4,4),ie,[2.35,1.2,-1.5]],[new Fe(.72,.44,.04),Rn(16777215),[2.72,2.15,-1.5]]],ua,{vary:0,cast:!1})[1];t&&(ua.forEach((e,n)=>t.setColorAt(n,Cn.setHex(i[Math.floor(n/Ii)%i.length]))),t.instanceColor.needsUpdate=!0)}var rh=bd(Pe),zm=dt(new Yn(2.2,.14,6,24),gn(16766042),[rh.x,.25,rh.z],null,[Et,0,0]);he.add(zm);var Fo=(i,t,e,n,s,r=0)=>Array.from({length:i},()=>{let a,o,l=0;do{let c=$t()*6.283,h=t+$t()*(e-t);a=Math.cos(c)*h,o=Math.sin(c)*h}while(r&&!wM(a,o,r)&&++l<30);return Ad(a,o,$t()*6.283,n+$t()*(s-n))}),yh=Xe?Math.min(3,Math.max(1,re/300)):1,km=Fo(Math.round((Di?130:230)*yh),Li+.5,re+240,.7,1.6,Li+.5),Hm=Fo(Math.round((Di?60:120)*yh),Li+2.5,re+260,.8,1.7,Li+1.5),Gm=Fo(110,Li-1.5,re+250,.4,2,Li-1.5),Vm=(i,t)=>Array.from({length:i},(e,n)=>[t(n).rotateY(n*6.283/i+.3),lr]);Ae([[yt(.32,.46,2.7,6),ie,[0,1.35,0]],[yt(.24,.32,2.7,6),ie,[.2,3.9,0],,[0,0,-.15]],[Ce,Rn(4862496),[.55,5,.2],[.22,.22,.22],,1],[Ce,Rn(4862496),[.2,4.95,-.35],[.22,.22,.22],,1],...Vm(7,i=>It(.62,3.8,4).scale(1,1,.2).translate(0,1.9,0).rotateZ(-1.2-i%2*.25).translate(.4,5.1,0))],km);Ae([[yt(.28,.5,7,6),ie,[0,3.5,0]],[It(2.4,3,7),lr,[0,5,0]],[It(1.8,2.8,7),lr,[0,7,0]],[It(1.1,2.6,7),lr,[0,8.9,0]]],Hm);Ae(Vm(5,()=>It(.3,1.9,4).scale(1,1,.3).translate(0,.95,0).rotateZ(-1)),Fo(Math.round((Di?120:320)*yh),Li-2,re+150,.6,1.5,Li-2),{cast:!1});Ae([-.3,0,.3].map((i,t)=>[It(.1,.8,3).translate(0,.4,0).rotateZ(i).rotateY(t*2),Rn(8824906)]),Fo(Math.round((Di?700:2600)*yh),bo+.5,re+70,.6,1.5),{cast:!1,vary:.3});Ae([[wd,Hn,[0,.45,0],[1.3,.8,1]],[ns,Hn,[1.1,.25,.5],[.5,.4,.5],,1]],Gm);Ae([[It(1,1,7),Rn(9073768),[0,.5,0]]],Array.from({length:16},(i,t)=>{let e=t*.393+$t()*.2,n=re+480+$t()*220,s=70+$t()*110,r=s*(1.1+$t()*.6);return Rd(Math.cos(e)*n,-2,Math.sin(e)*n,r,s,r,$t()*3)}),{cast:!1,recv:!1});var Dd=(i,t,e,n={})=>{let s=new kr(new Js({map:Ie.soft,color:i,fog:!1,transparent:!0,depthWrite:!1,...n}));return s.scale.setScalar(t),s.position.set(...e),he.add(s),s},ju=Dd(16773568,420,Ro.clone().normalize().multiplyScalar(1600).toArray(),{opacity:.9}),Wm=gn(16774372,{transparent:!0,opacity:.85}),Xm=(()=>{let t=new Float32Array(1500);for(let s=0;s<500;s++){let r=$t()*6.283,a=.12+$t()*1.4;t.set([Math.cos(r)*Math.cos(a)*1900,Math.sin(a)*1900,Math.sin(r)*Math.cos(a)*1900],s*3)}let e=new Oe;e.setAttribute("position",new Mn(t,3));let n=new Hr(e,new Ks({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return n.frustumCulled=!1,he.add(n),n})();{let i=[];for(let t=0;t<9;t++){let e=$t()*6.283,n=500+$t()*500,s=190+$t()*90;for(let r=0;r<4;r++)i.push(Rd(Math.cos(e)*n+(r*22-33)*Math.sin(e),s+$t()*6,Math.sin(e)*n-(r*22-33)*Math.cos(e),22+$t()*14,8+$t()*5,22+$t()*14))}Ae([[le,Wm]],i,{vary:0,cast:!1,recv:!1})}var Os=-(re+170),Fs=-(re+90);cs(dt(yt(14,80,85,16),Le(ca(Ie.rock,6,3),{color:10126452}),[Os,42.5,Fs]));he.add(dt(yt(13,13,1,16),gn(16738842),[Os,85.2,Fs]));for(let[i,t,e]of[[.4,62,2.4],[1.9,40,1.8],[3.3,70,2.8],[4.7,34,1.6],[5.6,52,2]]){let n=new Ke;n.position.set(Os,0,Fs),n.rotation.y=i;let s=t/107.6/2;n.add(dt(new Fe(e,t,.5),gn(16734740),[14.6+66*s,85-85*s,0],null,[0,0,.66])),he.add(n)}Dd(16742954,90,[Os,90,Fs],{blending:Kr,opacity:.7});var HM=Array.from({length:8},()=>Dd(6971480,1,[0,0,0])),Qi={x:Math.cos(5.3)*(re+34),z:Math.sin(5.3)*(re+34)},Ls={x:Math.cos(2.2)*(re+22),z:Math.sin(2.2)*(re+22)};{let{x:i,z:t}=Qi,e=dt(Co(19),Le(ca(Ie.dirt,5,5),{flatShading:!1}),[i,.03,t],[1,1,.75]);e.receiveShadow=!0,he.add(e,dt(Co(16),new Ti({color:5218224,roughness:.12,metalness:.2,transparent:!0,opacity:.88}),[i,.08,t],[1,1,.72]));for(let n=0;n<9;n++)cs(dt(ns,Hn,[i+Math.cos(n*.7)*17,.4,t+Math.sin(n*.7)*12.6],[.9+$t(),.7,.9+$t()],[0,$t()*3,0]))}{let i=new Ke,t=2.2,e=re+22;i.position.set(Math.cos(t)*e,0,Math.sin(t)*e),i.rotation.y=.9,i.add(dt(yt(.2,.36,17,6),we,[-.5,4.2,0],null,[0,0,Et]),dt(le,we,[9.6,4.5,0],[1.6,1.15,1.05]),dt(It(.7,2.2,5),we,[11.2,3.9,0],null,[0,0,-Et-.2]),dt(Ce,ks,[9.9,4.8,.85],[.32,.32,.2]),dt(Ce,ks,[9.9,4.8,-.85],[.32,.32,.2]));for(let n=0;n<8;n++)i.add(dt(new Yn(2.7-n*.2,.16,5,12,Math.PI).rotateZ(Math.PI).rotateY(Et),we,[6-n*1.5,4.2,0]));for(let[n,s]of[[5,1.6],[5,-1.6],[-3,1.4],[-3,-1.4]])i.add(dt(yt(.22,.3,4.2,5),we,[n,2.1,s],null,[s>0?.25:-.25,0,0]));cs(i)}for(let i=0;i<6;i++)cs(dt(yt(.16,.2,2.6,6),ie,[Math.cos(i*1.047)*.55,1.05,Math.sin(i*1.047)*.55],null,[Math.sin(i*1.047)*.5,0,-Math.cos(i*1.047)*.5]));for(let i=0;i<12;i++)cs(dt(ns,Hn,[Math.cos(i*.5236)*2.4,.28,Math.sin(i*.5236)*2.4],[.5+sn(i)*.2,.42,.5],[0,i,0]));for(let i=0;i<5;i++){let t=i*1.2566+.5;cs(dt(yt(.38,.42,2.6,7),ie,[Math.cos(t)*5.4,.4,Math.sin(t)*5.4],null,[Et,0,-t]))}var GM=[[1,2.8,16742938,.85],[.62,2.1,16756778,.9],[.32,1.4,16773280,1]].map(([i,t,e,n])=>{let s=dt(It(i,t,7),gn(e,{transparent:!0,opacity:n}),[0,.6+t/2,0]);return he.add(s),s}),Nd=new to(16747066,110,70);Nd.position.set(0,3,0);he.add(Nd);var qm=48,Ud=new Oe;Ud.setAttribute("position",new Mn(new Float32Array(qm*3),3));he.add(new Hr(Ud,new Ks({map:Ie.soft,color:16756832,size:.35,transparent:!0,depthWrite:!1,blending:Kr,fog:!1})));var cn=new Ke;cn.position.set(0,0,11);cn.scale.setScalar(1.3);{let i=Rn(14723192),t=Le(Ie.fur,{flatShading:!1}),e=Rn(2759698),n=(r,a)=>dt(yt(.16,.14,.9).translate(0,-.45,0),i,[r,2.05,0],null,[0,0,a]),s=n(.85,2.4);s.add(dt(yt(.1,.32,1.4,7),ie,[0,-1.5,0])),cn.add(dt(yt(.22,.2,.8),i,[.3,.4,0]),dt(yt(.22,.2,.8),i,[-.3,.4,0]),dt(le,t,[0,1.5,0],[.85,.95,.7]),dt(le,i,[0,2.75,0],[.55,.55,.55]),dt(le,e,[0,3.05,-.08],[.62,.45,.6]),dt(It(.42,.7),e,[0,2.35,.3],null,[Math.PI,0,0]),dt(Ce,od,[.2,2.85,.47],[.1,.1,.07]),dt(Ce,od,[-.2,2.85,.47],[.1,.1,.07]),dt(Ce,ks,[.2,2.85,.53],[.055,.055,.04]),dt(Ce,ks,[-.2,2.85,.53],[.055,.055,.04]),dt(le,i,[0,2.68,.55],[.11,.09,.1]),dt(yt(.06,.06,.9),we,[0,3.5,0],null,[0,0,Et]),dt(le,we,[.45,3.5,0],[.12,.12,.12]),dt(le,we,[-.45,3.5,0],[.12,.12,.12]),dt(new Yn(.45,.05,4,10),we,[0,2.25,.05],null,[Et+.3,0,0]),n(-.85,-.3),s,dt(le,new xs({visible:!1}),[0,2,0],[2.4,3,2.4])),cn.userData.club=s,cs(cn)}function Qu(i,t,e,n,s){return dt(yt(e,e*.85,t,6).translate(0,-t/2,0),i,[n,t,s])}var td=(i,t,e,n,s)=>{for(let r of[1,-1])i.add(dt(Ce,od,[t,e,n*r],[s,s,s*.6]),dt(Ce,ks,[t+s*.3,e,n*r+r*s*.35],[s*.55,s*.55,s*.4]))},Ym={long:Le(xo("#7f9a6a",["#62804f","#9db487","#55724a"]),{flatShading:!1}),horn:Le(xo("#b07a52",["#8f5e3b","#c9966c"],"#6e4428"),{flatShading:!1}),run:Le(xo("#d08a3c",["#b8732c","#e6a85a"],"#5a3214"),{flatShading:!1}),rex:Le(xo("#66784f",["#4e6040","#7f9164"],"#2f3b26"),{flatShading:!1}),fly:Le(xo("#8a6a8a",["#6e5270","#a888a6"]),{flatShading:!1})};function VM(i){let t=new Ke,e=Ym[i],n;if(i==="long"){t.add(dt(le,e,[0,3.4,0],[3,1.8,1.6]),dt(yt(.45,.7,5.4,8),e,[3.4,5.9,0],null,[0,0,-.55]),dt(le,e,[5.2,8.2,0],[.95,.55,.55]),dt(It(.9,5.5,7),e,[-5.2,3.2,0],null,[0,0,Et]));for(let s=0;s<6;s++)t.add(dt(It(.22,.6,4),e,[-2+s*.8,5.25-Math.abs(s-2.5)*.12,0]));td(t,5.6,8.35,.4,.14),n=[[1.6,.9],[1.6,-.9],[-1.6,.9],[-1.6,-.9]].map(([s,r])=>Qu(e,2.6,.45,s,r))}else if(i==="horn")t.add(dt(le,e,[0,1.9,0],[2.2,1.3,1.3]),dt(le,e,[2.6,1.8,0],[1,.75,.85]),dt(yt(1.3,1.3,.15,9),e,[2,2.5,0],null,[0,0,Et-.3]),dt(It(.12,1.1),we,[3.4,2.4,.35],null,[0,0,-Et]),dt(It(.12,1.1),we,[3.4,2.4,-.35],null,[0,0,-Et]),dt(It(.1,.5),we,[3.7,1.9,0],null,[0,0,-Et+.5]),dt(It(.6,2.6,7),e,[-3,1.8,0],null,[0,0,Et])),td(t,3.15,2.05,.68,.13),n=[[1.2,.7],[1.2,-.7],[-1.2,.7],[-1.2,-.7]].map(([s,r])=>Qu(e,1.4,.35,s,r));else{let s=i==="rex"?1.7:1;t.add(dt(le,e,[0,1.5,0],[1.1,.6,.5]),dt(yt(.18,.25,.9,6),e,[1.1,2,0],null,[0,0,-.6]),dt(le,e,[1.6+.15*s,2.45,0],[.5*s,.28*s,.25*s]),dt(It(.3,2.4,6),e,[-2.1,1.6,0],null,[0,0,Et]),dt(yt(.05,.04,.45,4),e,[.8,1.25,.32],null,[0,0,-1]),dt(yt(.05,.04,.45,4),e,[.8,1.25,-.32],null,[0,0,-1])),td(t,1.75+.2*s,2.55+.05*s,.2*s,.07*s),n=[[0,.3],[0,-.3]].map(([r,a])=>Qu(e,1.2,.14,r,a))}return n.forEach(s=>t.add(s)),t.userData.legs=n,cs(t),t}var Od=[["long",re+28,.03,0,1],["long",re+50,-.025,3,1.25],["long",re+44,-.025,3.25,.5],["horn",re+12,.06,1,1],["horn",re+16,-.05,4,.85],["rex",re+78,.022,4.4,3.2],["run",8,.35,0,1],["run",9.5,.33,.5,.8],["run",7,-.3,3,.9]].map(([i,t,e,n,s])=>{let r=VM(i);return r.scale.setScalar(s),{o:r,R:t,w:e,a0:n,y:0,gait:i==="run"?12:3}});for(let[i,t,e,n]of[[re*.7,.22,0,30],[re*.9+20,-.17,2,40]]){let s=new Ke,r=Ym.fly,a=dt(new Fe(1.4,.08,3.4).translate(0,0,1.7),r),o=dt(new Fe(1.4,.08,3.4).translate(0,0,-1.7),r);s.add(dt(It(.4,3,6),r,[0,0,0],null,[0,0,-Et]),dt(It(.16,1.1,4),r,[1.3,.35,0],null,[0,0,.9]),a,o),s.userData.wings=[a,o],cs(s),Od.push({o:s,R:i,w:t,a0:e,y:n,gait:0})}var vo=[];function xa(i,t,e,n=1){let s=document.createElement("canvas");s.width=256,s.height=96;let r=s.getContext("2d");r.fillStyle=e?"#f6cf5a":"#e4d9c4",r.strokeStyle="#6b5a45",r.lineWidth=5,r.beginPath(),r.roundRect(4,4,248,88,14),r.fill(),r.stroke(),r.fillStyle="#2e2418",r.textAlign="center";let a='Pretendard,"Apple SD Gothic Neo","Malgun Gothic",sans-serif';r.font=`600 20px ${a}`,r.fillText(i,128,34);let o=30;do r.font=`800 ${o}px ${a}`;while(r.measureText(t).width>232&&--o>12);r.fillText(t,128,72);let l=new js(s);l.colorSpace=on,l.anisotropy=wm;let c=new kr(new Js({map:l,toneMapped:!1,fog:!1}));return c.scale.set(3.6*n,1.35*n,1),he.add(c),c}var Fd=i=>(i<Sd?"\uCCAB \uC8FC\uBBFC ":"")+ha(Math.floor(i/Ii))+" "+(i+1)+"\uBC88\uC9C0",WM=xa("\uB2E4\uC74C \uC9D1 \uC790\uB9AC","\uC5EC\uAE30\uC608\uC694",!0);WM.position.set(rh.x,3,rh.z);var $m=xa("\uC871\uC7A5",oi,!0);$m.position.set(0,5.9,11);var Zm=[["\uBAA8\uB2E5\uBD88 \uAD11\uC7A5","\uB9C8\uC744 \uD55C\uAC00\uC6B4\uB370. \uBD88\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uC544\uC694.",[0,8.5,0],1.5,[0,2,0],[0,16,30]],[`\uC871\uC7A5 ${oi}`,"\uB204\uB974\uBA74 \uD55C\uB9C8\uB514 \uD574\uC694.",null,0,[0,3.2,11],[0,5.5,20.5]],["\uC6B0\uB974\uB989 \uD654\uC0B0","\uBA40\uB9AC\uC11C \uC5F0\uAE30\uB97C \uBFDC\uC5B4\uC694.",[Os,112,Fs],14,[Os,45,Fs],[Os*.45,70,Fs*.45]],["\uCCA8\uBC99 \uC6C5\uB369\uC774","\uACF5\uB8E1\uB4E4\uC774 \uBB3C \uB9C8\uC2DC\uB7EC \uC624\uB294 \uACF3.",[Qi.x,7,Qi.z],3,[Qi.x,0,Qi.z],[Qi.x*.7,26,Qi.z*.7+30]],["\uD070 \uACF5\uB8E1 \uBF08","\uC544\uC8FC \uC624\uB798\uC804\uC5D0 \uC0B4\uB358 \uD070 \uACF5\uB8E1\uC758 \uBF08.",[Ls.x,11,Ls.z],3,[Ls.x,3,Ls.z],[Ls.x*.75,14,Ls.z*.75-14]]];Zm.forEach(([i,,t,e])=>t&&xa("\uBA85\uC18C",i,!0,e).position.set(...t));function XM(){let i=xe.position;for(let t=0;t<Pe;t++){let e=os[t],n=(e.x-i.x)**2+i.y**2+(e.z-i.z)**2,s=n<2025&&n>81;if(s&&!vo[t]){let r=pe>=2&&cr[t];vo[t]=xa(Fd(t)+(ts[t]?` \xB7 \uBA39\uC774 ${ts[t].rank||1}\uB4F1`+(ts[t].name?` \xB7 ${ts[t].name}`:""):"")+(r?` \xB7 ${Dm[r]} \uACF5\uB8E1`:""),fe[t],t<Sd||!!r||!!ts[t]),vo[t].position.set(e.x,Xe?6.2:4.9,e.z)}vo[t]&&(vo[t].visible=s)}}var da=new Date(Date.now()+9*36e5).toISOString().slice(0,10),hn={get(i){try{return JSON.parse(localStorage.getItem(i))||{}}catch{return{}}},set(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}},vh=()=>{try{return localStorage.getItem("uga-id")}catch{return null}},ar=null;function qM(i){let t=hn.get("uga-care"),e=t.day!==da;e&&hn.set("uga-care",{day:da,n:(t.n||0)+1});let n=hn.get("uga-care").n||1;ar={i,t0:ee},F("cinfo").textContent=e?`${pe<2?"\uC54C\uC774 \uB530\uB73B\uD574\uC84C\uC5B4\uC694":"\uACF5\uB8E1\uC774 \uC88B\uC544\uD574\uC694"}. \uC9C0\uAE08\uAE4C\uC9C0 ${n}\uC77C \uB3CC\uBD24\uC5B4\uC694.`:`\uC624\uB298\uC740 \uC774\uBBF8 \uB3CC\uBD24\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640\uC694. \uC9C0\uAE08\uAE4C\uC9C0 ${n}\uC77C \uB3CC\uBD24\uC5B4\uC694.`}var Ds=(()=>{let i=+da.replace(/-/g,""),t=Math.floor(sn(i,1)*Math.max(1,Math.ceil(Pe/Ii))),e=sn(i,3)*6.283,n=Ao(Math.floor(sn(i,2)*3)),s=new Ke,r=gn(16765498);return s.position.set(_n[t].x+Math.cos(e)*n,1.1,_n[t].z+Math.sin(e)*n),s.userData.hood=ha(t),s.add(dt(yt(.09,.09,.9,6),r,[0,0,0],null,[0,0,Et]),dt(le,r,[.5,0,0],[.2,.2,.2]),dt(le,r,[-.5,0,0],[.2,.2,.2])),s.visible=hn.get("uga-bone").day!==da,he.add(s),s})(),dd=30;function YM(){let i=hn.get("uga-bone"),t=(i.n||0)+1;hn.set("uga-bone",{day:da,n:t}),Ds.visible=!1,dh(dd),ya(`\uC871\uC7A5 ${oi}`,`\uC6B0\uAC00! \uAE08\uBE5B \uBF08 \uCC3E\uC558\uB2E4. \uB208 \uC88B\uB2E4. \uBA39\uC774 ${dd}\uAC1C \uC900\uB2E4. \uB0B4\uC77C\uC740 \uB2E4\uB978 \uB370 \uC228\uAE34\uB2E4. \uC9C0\uAE08\uAE4C\uC9C0 ${t}\uBC88 \uCC3E\uC558\uB2E4.`,"")}var or=-1,Bd=!1,Pi=null,Po=(i,t)=>{Kn={t:new L(...i),p:new L(...t)},Zt.autoRotate=!1,Th(!1)};function $M(i,t){let e=ts[i];if(!e)return"";let n=`\uBA39\uC774 ${e.rank||1}\uB4F1`;return e.name?` \xB7 ${n} \xB7 \uC54C \uC774\uB984 ${e.name}`:e.bow?ma(i)<2?` \xB7 ${n} \uBB34\uC9C0\uAC1C \uC54C`:` \xB7 ${n}`:` \xB7 ${n}\uC774 \uACE0\uB978 ${t}`}function Ui(i){let t=os[i],e=Math.hypot(t.x-t.cx,t.z-t.cz),n=(t.x-t.cx)/e,s=(t.z-t.cz)/e,r=Xe?1.3:1;if(Xe)Po([t.x-n*1.5,1.6,t.z-s*1.5],[t.x-n*7*r,12*r,t.z-s*7*r]);else{let u=Gn[i].elements,f=u[12]+ko[i],g=u[14]+Ho[i];Po([f-n*2.5,.4,g-s*2.5],[f-n*10,7,g-s*10])}let a=fe[i],o=Qn[_i[i]],l=cr[i]?Dm[cr[i]]+" ":"",c=l?" \xB7 \uC544\uC8FC \uB4DC\uBB38 \uC0C9\uC774\uC5D0\uC694":"",h=["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`${l}\uC544\uAE30 ${o}${c}`+(pe<2?" \xB7 \uBA39\uC774 \uBA39\uACE0 \uBA3C\uC800 \uAE7C\uC5B4\uC694":""),`\uB2E4 \uC790\uB780 ${l}${o}${c}`][ma(i)]+$M(i,o),d=pa(i);if(ya("@"+a,`${gh} ${Fd(i)} \xB7 ${h}`+(d?` \xB7 \uBA39\uC774 ${d.toLocaleString()}\uAC1C \uBA39\uC74C`:""),/^[\w.]{1,30}$/.test(a)&&!xn?"https://www.instagram.com/"+a+"/":""),ch.has(i)){let u=ch.get(i);F("cinfo").textContent+=` \xB7 \uC9DD\uAFCD @${fe[u]}`,F("cpair").hidden=!1,F("cpair").textContent=`\uC9DD\uAFCD @${fe[u]} \uC9D1 \uAC00\uAE30`,F("cpair").onclick=()=>Ui(u)}if(!xn&&a===vh()&&!Ct){F("ccare").hidden=!1,F("ccare").textContent=ma(i)<2?"\uC54C \uC4F0\uB2E4\uB4EC\uAE30":"\uACF5\uB8E1 \uC4F0\uB2E4\uB4EC\uAE30",F("ccare").onclick=()=>qM(i);let u=e0();u&&(F("cnest").hidden=!1,F("cnest").textContent=`\uB465\uC9C0 \uBA39\uC774 \uC90D\uAE30 (${u}\uAC1C)`,F("cnest").onclick=()=>{Bt.t=Date.now(),dh(u),F("cnest").hidden=!0,F("cinfo").textContent=`\uB465\uC9C0\uC5D0\uC11C \uBA39\uC774 ${u}\uAC1C\uB97C \uC8FC\uC6E0\uC5B4\uC694. 30\uBD84\uC5D0 \uD558\uB098\uC529 \uC313\uC5EC\uC694.`}),F("cfeed").hidden=!1,r0(),F("cshare").hidden=!1,F("cphoto").onclick=()=>ZM(i),F("cinvite").onclick=()=>KM(i),jm()}}function ya(i,t,e){zo(),F("news").classList.remove("open"),F("cid").textContent=i,F("cinfo").textContent=t,F("clink").hidden=!e,e&&(F("clink").href=e),F("ccare").hidden=F("cnest").hidden=F("cfeed").hidden=F("cshare").hidden=F("cpair").hidden=!0,F("card").hidden=!1}var Re=1080,kn=1920,ra='"Pretendard","Apple SD Gothic Neo","Malgun Gothic",sans-serif';function Jm(i,t,e){let n=be.getPixelRatio();be.setPixelRatio(1),be.setSize(Re,kn,!1),Be.target.position.set(t,0,e),Be.position.copy(Be.target.position).add(Ro),Be.shadow.needsUpdate=!0;let s=he.children.filter(a=>a.isSprite&&a.visible&&!a.material.transparent);s.forEach(a=>{a.visible=!1}),be.render(he,i),s.forEach(a=>{a.visible=!0});let r=Object.assign(document.createElement("canvas"),{width:Re,height:kn});return r.getContext("2d").drawImage(be.domElement,0,0,Re,kn),be.setPixelRatio(n),Td(),r}var ah=(i,t,e,n,s=800)=>{let r=e;do i.font=`${s} ${r}px ${ra}`;while(i.measureText(t).width>n&&(r-=4)>30)};function Km(i,t,e){let n=i.toDataURL("image/jpeg",.92);F("ptitle").textContent=e,F("pimg").src=n,F("psave").href=n,F("psave").download=t,F("pmsg").textContent=`\uD734\uB300\uD3F0\uC740 \uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574\uB3C4 \uB3FC\uC694. \uC2A4\uD1A0\uB9AC\uC5D0 \uC62C\uB9B4 \uB54C @${wo}\uB97C \uD0DC\uADF8\uD574 \uC8FC\uC138\uC694.`;let s=new File([Uint8Array.from(atob(n.split(",")[1]),r=>r.charCodeAt(0))],t,{type:"image/jpeg"});F("pshare").hidden=!navigator.canShare?.({files:[s]}),F("pshare").onclick=()=>navigator.share({files:[s]}).catch(()=>{}),F("photo").showModal()}F("px").onclick=()=>F("photo").close();function ZM(i){let t=os[i],e=Gn[i].elements,n=e[12],s=e[14],r=Math.hypot(t.x-t.cx,t.z-t.cz),a=(t.x-t.cx)/r,o=(t.z-t.cz)/r,l=Xe?1.6:1,c=new Je(52,Re/kn,.3,xe.far);c.position.set(n-a*3.8*l,2.6*l,s-o*3.8*l),c.lookAt(n*.7+t.x*.3,.55*l,s*.7+t.z*.3);let h=Jm(c,n,s),d=h.getContext("2d"),u=d.createLinearGradient(0,kn*.66,0,kn);u.addColorStop(0,"rgba(30,22,12,0)"),u.addColorStop(1,"rgba(30,22,12,.82)"),d.fillStyle=u,d.fillRect(0,kn*.66,Re,kn*.34),d.textAlign="center",d.fillStyle="#fffaf0",d.shadowColor="rgba(0,0,0,.45)",d.shadowBlur=12;let f="@"+fe[i];ah(d,f,92,Re-120),d.fillText(f,Re/2,kn-290);let g=["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`\uC544\uAE30 ${Qn[_i[i]]}`,`\uB2E4 \uC790\uB780 ${Qn[_i[i]]}`][ma(i)],M=pa(i),m=`${gh} ${Fd(i)} \xB7 ${g}`;ah(d,m,46,Re-100),d.fillText(m,Re/2,kn-208),M&&ma(i)<2&&(d.font=`700 40px ${ra}`,d.fillStyle="#ffd98a",d.fillText(`\uBA39\uC774 ${M.toLocaleString()}\uAC1C \uBA39\uACE0 ${hr(M).toFixed(1)}\uBC30`,Re/2,kn-148)),d.fillStyle="rgba(255,250,240,.85)",d.font=`600 34px ${ra}`,d.fillText(`\uB313\uAE00 \uB2EC\uBA74 \uB0B4 \uC9D1\uACFC \uACF5\uB8E1 \uC54C \uD558\uB098 \xB7 @${wo}`,Re/2,kn-72),Km(h,`ugauga_${fe[i]}.jpg`,"\uB0B4 \uC54C \uC0AC\uC9C4")}var oh=300,JM=i=>location.origin+location.pathname+"?from="+encodeURIComponent(fe[i]),jm=()=>{F("cinvite").textContent=Bt.inv?`\uCE5C\uAD6C \uB370\uB824\uC624\uAE30 (${Bt.inv}\uBA85)`:"\uCE5C\uAD6C \uB370\uB824\uC624\uAE30"};async function KM(i){let t=JM(i),e=`\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744 \uAC19\uC774 \uD558\uC790. \uC774 \uB9C1\uD06C\uB85C \uC640\uC11C \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${oh}\uAC1C.`;if(navigator.share)try{await navigator.share({text:e,url:t});return}catch(n){if(n.name==="AbortError")return}try{await navigator.clipboard.writeText(t),F("cinfo").textContent=`\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694. \uCE5C\uAD6C\uAC00 \uC774 \uB9C1\uD06C\uB85C \uC640\uC11C \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${oh}\uAC1C\uB97C \uBC1B\uC544\uC694.`}catch{F("cinfo").textContent=`\uC774 \uB9C1\uD06C\uB97C \uCE5C\uAD6C\uC5D0\uAC8C \uBCF4\uB0B4 \uC8FC\uC138\uC694: ${t}`}}var Qm=da<="2026-11-16"?"\uC6B0\uAC00. 16\uC77C \uBC24 9\uC2DC\uC5D0 \uBA39\uC774 \uC21C\uC704 \uBF51\uB294\uB2E4. 1\uB4F1\uC740 \uBB34\uC9C0\uAC1C \uC54C, \uACF5\uB8E1 \uACE0\uB974\uAE30 \uC911 \uD558\uB098 \uACE0\uB978\uB2E4. 2\uB4F1\uC740 \uB0A8\uC740 \uAC70 \uBC1B\uB294\uB2E4. 3\uB4F1\uC740 \uC54C \uC774\uB984 \uC9D3\uB294\uB2E4.":la.notice,lh=[Qm,`\uC6B0\uAC00! \uB098 \uC871\uC7A5 ${oi}. \uC5EC\uAE30 ${gh}.`,"\uB313\uAE00 \uB2EC\uBA74 \uC9D1 \uC900\uB2E4. \uC54C\uB3C4 \uC900\uB2E4. \uBA87 \uBD84\uC774\uBA74 \uB41C\uB2E4. \uC6B0\uAC00.",[`\uC54C \uAC74\uB4DC\uB9AC\uC9C0 \uB9C8\uB77C. \uC5B8\uC820\uAC00 \uAE6C\uB2E4. \uBB50 \uB098\uC62C\uC9C0 ${oi}\uB3C4 \uBAA8\uB978\uB2E4.`,`\uC54C\uC5D0 \uAE08 \uAC14\uB2E4. \uACE7 \uB098\uC628\uB2E4. ${oi} \uC7A0 \uBABB \uC794\uB2E4.`,"\uC54C \uAE7C\uB2E4. \uC544\uAE30 \uACF5\uB8E1 \uB098\uC654\uB2E4. \uBB3C\uBA74 \uC544\uD504\uB2E4. \uC6B0\uAC00.",`\uC544\uAE30 \uB2E4 \uCEF8\uB2E4. \uC774\uC81C ${oi}\uBCF4\uB2E4 \uD06C\uB2E4. \uAE38 \uBE44\uCF1C\uB77C. \uC6B0\uAC00.`][pe],`\uC0AC\uB78C \uB9CE\uC544\uC9C0\uBA74 \uB9C8\uC744 \uCEE4\uC9C4\uB2E4. ${oi} \uBC14\uBE60\uC9C4\uB2E4. \uC6B0\uAC00\uC6B0\uAC00.`,`\uBC24\uC5D0 \uACF5\uB8E1 \uC6B4\uB2E4. \uBB34\uC11C\uC6CC \uB9C8\uB77C. ${oi}\uB3C4 \uBB34\uC12D\uB2E4.`].filter(Boolean),jM=["\uBD88 \uAEBC\uB728\uB9AC\uC9C0 \uB9C8\uB77C. \uB300\uC7A5 \uD63C\uB09C\uB2E4.","\uD070 \uBC14\uC704\uB2E4. \uC62E\uAE30\uB824\uB2E4 \uD5C8\uB9AC \uB098\uAC14\uB2E4.","\uD070 \uB098\uBB34\uB2E4. \uADF8\uB298 \uC88B\uB2E4. \uB0AE\uC7A0 \uC794\uB2E4.","\uBF08 \uC313\uC558\uB2E4. \uBB34\uB108\uB728\uB9AC\uBA74 \uB610 \uC313\uC544\uC57C \uD55C\uB2E4.","\uBB3C \uC788\uB2E4. \uACF5\uB8E1\uB3C4 \uB9C8\uC2E0\uB2E4. \uC904 \uC11C\uB77C."];function QM(i){let t=Pm[i-1].elements;Po([t[12],2.4,t[14]],[t[12],4.5,t[14]+8]),ya(`${ha(i)} \uB300\uC7A5`,`\uC6B0\uAC00. \uC5EC\uAE30 ${ha(i)}. ${jM[Uo(i)]}`,"")}var tS=0;function zd(){let i=cn.position;Po([i.x,3.2,i.z],[i.x,5.5,i.z+9.5]),ya(`\uC871\uC7A5 ${oi}`,lh[tS++%lh.length],"")}F("news").append(Object.assign(document.createElement("b"),{textContent:"\uC871\uC7A5"}),lh[Qm?0:Tm%lh.length]);{let i=xn||In?[]:fe.map((t,e)=>[t,e]).slice(-12).filter(([,t])=>!cr[t]).slice(-3).map(([t])=>"@"+t);i.length&&F("news").append(Object.assign(document.createElement("small"),{textContent:`\uC0C8\uB85C \uC628 \uC8FC\uBBFC ${i.join(" ")}. \uBC18\uAC11\uB2E4.`}))}F("news").onclick=()=>{matchMedia("(max-width:600px)").matches&&!F("news").classList.contains("open")?F("news").classList.add("open"):zd()};var eS=()=>{F("hud").offsetHeight&&(F("news").style.top=F("hud").getBoundingClientRect().bottom+8+"px")};new ResizeObserver(eS).observe(F("hud"));F("card").querySelector(".x").onclick=()=>{F("card").hidden=!0};var ss=i=>fe.findIndex(t=>t.toLowerCase()===i.trim().replace(/^@/,"").toLowerCase()),ch=new Map;(xn?[]:la.pairs||[]).forEach(([i,t])=>{let e=ss(i),n=ss(t);e>=0&&n>=0&&e!==n&&(ch.set(e,n),ch.set(n,e))});var hh=i=>{let t=ss(i);if(t<0)return!1;if(or=t,!xn)try{localStorage.setItem("uga-id",fe[t])}catch{}return Ui(t),va(),Go(),!0},fd="\uC544\uC9C1 \uADF8 \uC544\uC774\uB514\uB85C \uB41C \uC9D1\uC740 \uC5C6\uC5B4\uC694";F("find").onsubmit=i=>{i.preventDefault(),hh(F("q").value)?F("q").blur():u0(F("q").value)?F("msg").textContent=fd+". \uADF8 \uC544\uC774\uB514 \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1\uC744 \uBCF4\uC5EC \uB4DC\uB838\uC5B4\uC694.":F("msg").textContent=fd+"."};F("lot").onsubmit=i=>{i.preventDefault();let t=parseInt(F("qn").value,10);t>=1&&t<=Pe?Ui(t-1):F("msg").textContent=Pe?`\uBC88\uC9C0\uB294 1\uBC88\uBD80\uD130 ${Pe.toLocaleString()}\uBC88\uAE4C\uC9C0 \uC788\uC5B4\uC694.`:"\uC544\uC9C1 \uC9D1\uC774 \uD55C \uCC44\uB3C4 \uC5C6\uC5B4\uC694."};function Bo(i){Pi=Pi===i?null:i,F("sheet").hidden=!Pi,F("msg").textContent="",F("sheet").querySelectorAll("[data-tab]").forEach(t=>{t.hidden=t.dataset.tab!==Pi}),F("menu").querySelectorAll("button").forEach(t=>t.classList.toggle("on",!!Pi&&t.dataset.tab===Pi)),Pi&&(F("card").hidden=!0),Pi==="dex"&&uS()}function zo(){Pi&&Bo(Pi)}F("menu").querySelectorAll("[data-tab]").forEach(i=>{i.onclick=()=>Bo(i.dataset.tab)});F("sheet").querySelector(".x").onclick=zo;var aa=(i,t,e)=>{let n=document.createElement(i);return n.append(Object.assign(document.createElement("b"),{textContent:t}),e),n};Zm.forEach(([i,t,,,e,n],s)=>{let r=aa("button",i,t);r.onclick=()=>{zo(),s===1?zd():Po(e,n)},F("spots").append(r)});rs.forEach((i,t)=>{let e=aa("div",`${i.name} \uC2DC\uB300`+(t===pe?" \xB7 \uC9C0\uAE08":""),`${t?`\uD314\uB85C\uC6CC ${i.at.toLocaleString()}\uBA85\uBD80\uD130`:"\uCC98\uC74C\uBD80\uD130"} \xB7 ${i.pet}`);t===pe&&(e.className="now"),F("eras").append(e)});F("eranext").textContent=(Us?`${Us.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,Us.at-Do).toLocaleString()}\uBA85 \uB0A8\uC558\uC5B4\uC694.`:"\uB9C8\uC9C0\uB9C9 \uC2DC\uB300\uC608\uC694. \uACF5\uB8E1\uC774 \uB2E4 \uC790\uB790\uC5B4\uC694.")+` \uD314\uB85C\uC6CC ${bM.toLocaleString()}\uBA85\uC774 \uB418\uBA74 \uC8FC\uBBFC \uBAA8\uB450\uC5D0\uAC8C \uBA39\uC774 ${SM}\uAC1C\uB97C \uC120\uBB3C\uD574\uC694.`;F("erabar").style.width=(Us?Math.min(1,Math.max(0,(Do-rs[pe].at)/(Us.at-rs[pe].at)))*100:100)+"%";var Bt=hn.get("uga-shell");Bt.n||=0;Bt.fed||=0;Bt.t||=Date.now();Bt.owed||=0;var oa=pe<2?"\uC54C":"\uACF5\uB8E1",t0=1e5,hr=i=>i<=2e3?1+Math.sqrt(i/2e3):2+5*Math.sqrt(Math.min(1,(i-2e3)/(t0-2e3))),fa=new Float32Array(Pe).fill(1),ko=new Float32Array(Pe),Ho=new Float32Array(Pe);function pd(i,t){let e=Gn[i].elements,n=os[i],s=e[12]-n.x,r=e[14]-n.z,a=Math.hypot(s,r)||1;fa[i]=t,ko[i]=s/a*(t-1)*.55,Ho[i]=r/a*(t-1)*.55}function Mh(i){let t=ls.get(i);xh[i].decompose(t.position,t.quaternion,t.scale),t.scale.multiplyScalar(fa[i]),t.position.x+=ko[i],t.position.z+=Ho[i]}var e0=()=>Math.min(24,Math.floor((Date.now()-Bt.t)/18e5)),Gs=()=>xn||In?-1:ss(vh()||""),n0=()=>!!as&&Gs()>=0,uh={fed:{},top:[]},md=0,$c=null,pa=i=>i===Gs()?Bt.fed:uh.fed[fe[i].toLowerCase()]||0;function Go(i){if(clearTimeout(md),!n0())return Promise.resolve(!1);if($c)return $c.then(r=>i?Go(!0):r);let t=vh(),e=!Bt.srv,n=e?Bt.n:Bt.owed,s=e?hn.get("uga-from").id:void 0;return $c=fetch(as+"/api/sync",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t,add:n,feed:!!i,from:s})}).then(r=>r.ok?r.json():Promise.reject(r.status)).then(r=>{Bt.owed=e?0:Bt.owed-n,Bt.n=r.n+Bt.owed,Bt.fed=r.fed,Bt.inv=r.inv||0,Bt.srv=1,hn.set("uga-shell",Bt),va(),jm();let a=[r.bonus&&`@${r.bonus} \uB530\uB77C\uC654\uAD6C\uB098. \uBA39\uC774 ${oh}\uAC1C \uC900\uB2E4. @${r.bonus}\uB3C4 \uC900\uB2E4.`,r.gift&&`\uD314\uB85C\uC6CC \uB298\uC5C8\uB2E4. \uB9C8\uC744 \uC120\uBB3C\uC774\uB2E4. \uBA39\uC774 ${r.gift.toLocaleString()}\uAC1C \uBC1B\uC544\uB77C.`].filter(Boolean);return a.length&&ya(`\uC871\uC7A5 ${oi}`,"\uC6B0\uAC00. "+a.join(" "),""),!0}).catch(()=>!1).finally(()=>{$c=null})}function dh(i){Bt.n+=i,Bt.owed+=i,hn.set("uga-shell",Bt),va(),n0()&&(clearTimeout(md),md=setTimeout(Go,2e4))}var i0=Gn.map(i=>i.clone()),gd=[],_d=new L,nS=new Gt;function s0(){if(pe===2){fe.forEach((i,t)=>{if(pd(t,hr(pa(t))),Ct&&Ct.i===t)return;let e=ih.copy(xh[t]).scale(_d.setScalar(fa[t]));e.elements[12]+=ko[t],e.elements[14]+=Ho[t],hd.forEach(n=>n.setMatrixAt(t,nS.multiplyMatrices(e,n.userData.L)))}),hd.forEach(i=>{i.instanceMatrix.needsUpdate=!0});return}pe>2||(fe.forEach((i,t)=>{let e=hr(pa(t));if(ls.has(t)){fa[t]!==e&&(pd(t,e),Ct&&Ct.i===t||Mh(t));return}(gd[t]||1)!==e&&(gd[t]=e,Gn[t].copy(i0[t]).scale(_d.set(e,e,e)),is.forEach(n=>{n.setMatrixAt(t,ih.multiplyMatrices(Gn[t],n.userData.L)),n.instanceMatrix.needsUpdate=!0}))}),sS())}var iS=5e3,ls=new Map,ma=i=>pe<2&&ls.has(i)?2:pe;function sS(){pe>1||xn||In||fe.forEach((i,t)=>{if(ls.has(t)||pa(t)<iS)return;let e=_i[t],n=Oo[e].clone(),s=new Ke,r=Is.clone();n.setAttribute("aPhase",new bi(new Float32Array([sn(t,4)*9]),1)),n.setAttribute("aRare",new bi(new Float32Array([cr[t]]),1));let a=new ys(n,_a,1);a.setMatrixAt(0,new Gt),a.setColorAt(0,Cn.fromArray(Eo,t*3)),a.castShadow=!0,a.frustumCulled=!1,r.color.setHSL(Ni(i),.62,.76);let o=dt(Pd,r,[0,.72,0],[.58,.68,.58]);o.castShadow=!0,s.add(a,o),he.add(s),ls.set(t,s),pd(t,hr(pa(t))),Mh(t),Gn[t].copy(i0[t]).scale(_d.set(0,0,0)),gd[t]=0,is.forEach(l=>{l.setMatrixAt(t,ih.multiplyMatrices(Gn[t],l.userData.L)),l.instanceMatrix.needsUpdate=!0}),t===Gs()&&!Ct&&hn.get("uga-hatch").id!==i&&(hn.set("uga-hatch",{id:i}),Ui(t),F("cinfo").textContent=`\uC6B0\uAC00! \uC54C\uC774 \uAE7C\uC5B4\uC694. \uBA39\uC774\uB97C \uB9CE\uC774 \uBA39\uC5B4\uC11C \uB9C8\uC744\uBCF4\uB2E4 \uBA3C\uC800 \uB098\uC654\uC5B4\uC694. \uC544\uAE30 ${Qn[e]}.`)})}function rS(){F("rankbox").hidden=!uh.top.length,F("rank").replaceChildren(...uh.top.map((i,t)=>{let e=ss(i.id),n=aa("button",`${t+1}\uC704 @${i.id}`,`\uBA39\uC774 ${i.fed.toLocaleString()}\uAC1C \uBA39\uC74C \xB7 \uD06C\uAE30 ${hr(i.fed).toFixed(1)}\uBC30`);return n.disabled=e<0,n.onclick=()=>Ui(e),n}))}async function kd(){let i=Bt.n,t=Gs();if(!(t<0||!i)){if(as){if(!await Go(!0)){let e="\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC138\uC694.";F("decomsg").textContent=e,F("card").hidden||(F("cinfo").textContent=e);return}}else Bt.fed+=i,Bt.n=0,hn.set("uga-shell",Bt),va();Ui(t),ar={i:t,t0:ee},F("cinfo").textContent=`${oa}\uC774 \uBA39\uC774 ${i.toLocaleString()}\uAC1C\uB97C \uBA39\uC5C8\uC5B4\uC694. \uD06C\uAE30 ${hr(Bt.fed).toFixed(1)}\uBC30.`}}function r0(){F("cfeed").textContent=Bt.n?`\uBA39\uC774 \uC8FC\uAE30 (${Bt.n.toLocaleString()}\uAC1C)`:"\uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uBAA8\uC73C\uAE30",F("cfeed").onclick=Bt.n?kd:Eh,F("cfeed").classList.toggle("walk",!Bt.n)}function va(){let i=Gs(),t=i>=0,e=Bt.n.toLocaleString();F("purse").textContent=`\uBA39\uC774 ${e}`,F("shn").textContent=`\uC9C0\uAE08 \uBA39\uC774 ${e}\uAC1C.`,F("join").textContent=t?`\uB0B4 ${oa}`:"\uC54C \uBC1B\uAE30",F("join").onclick=t?()=>Ui(i):()=>F("how").showModal();let n="\uAE38\uC5D0 \uB5A8\uC5B4\uC9C4 \uC5F4\uB9E4\xB7\uBC84\uC12F\xB7\uACE0\uAE30\uB97C \uC8FC\uC6CC\uC694";F("decomsg").textContent=t?`\uB0B4 ${oa}\uC740 \uC9C0\uAE08\uAE4C\uC9C0 \uBA39\uC774 ${Bt.fed.toLocaleString()}\uAC1C\uB97C \uBA39\uC5C8\uC5B4\uC694. \uD06C\uAE30 ${hr(Bt.fed).toFixed(1)}\uBC30.`+(Bt.fed>=t0?" \uAC00\uC7A5 \uD06C\uAC8C \uCEF8\uC5B4\uC694. \uB354 \uBA39\uC5EC\uB3C4 \uC21C\uC704\uB294 \uC62C\uB77C\uAC00\uC694.":" 10\uB9CC \uAC1C\uB97C \uBA39\uC73C\uBA74 7\uBC30\uAE4C\uC9C0 \uCEE4\uC838\uC694."):"\uC544\uB798 \uC21C\uC11C\uB300\uB85C \uD558\uBA74 \uB3FC\uC694.";let s=aa(t?"div":"button",t?"1. \uB0B4 \uC9D1 \uCC3E\uAE30 \xB7 \uC644\uB8CC":"1. \uB0B4 \uC9D1 \uCC3E\uAE30",t?`@${fe[i]} \uC9D1\uC744 \uCC3E\uC558\uC5B4\uC694`:"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uB123\uC5B4\uC694");t||(s.onclick=()=>Bo("find"));let r=aa("button","2. \uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uC90D\uAE30",`${n}. \uC9C0\uAE08 \uBA39\uC774 ${e}\uAC1C`);r.onclick=Eh;let a=aa("button",`3. ${oa}\uC5D0\uAC8C \uBA39\uC774 \uC8FC\uAE30`,t?Bt.n?`\uAC00\uC9C4 \uBA39\uC774 ${e}\uAC1C\uB97C \uC804\uBD80 \uC918\uC694`:"\uBA39\uC774\uAC00 \uC5C6\uC5B4\uC694. \uC0B0\uCC45\uD558\uBA70 \uBAA8\uC544\uC694":"\uBA3C\uC800 \uB0B4 \uC9D1\uC744 \uCC3E\uC544\uC694");a.disabled=!t||!Bt.n,a.onclick=kd,(t?Bt.n?a:r:s).className="now",F("deco").replaceChildren(s,r,a),F("cfeed").hidden||r0(),s0(),a0()}function a0(){let i=Gs(),t=e0(),e=F("next"),[n,s]=i<0?["\uB0B4 \uC544\uC774\uB514\uB85C \uB0B4 \uACF5\uB8E1 \uCC3E\uAE30",()=>{Bo("find"),F("q").focus()}]:t?[`\uB465\uC9C0\uC5D0 \uC313\uC778 \uBA39\uC774 ${t}\uAC1C \uC90D\uAE30`,()=>Ui(i)]:Bt.n?[`${oa}\uC5D0\uAC8C \uBA39\uC774 \uC8FC\uAE30 \xB7 ${Bt.n.toLocaleString()}\uAC1C`,kd]:["\uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uC90D\uAE30",Eh];e.querySelector("b").textContent=n,e.onclick=s,e.hidden=In}In||setInterval(a0,6e4);F("purse").onclick=()=>Bo("shell");var Bs=new Ke;Bs.visible=!1;he.add(Bs);var o0=()=>Math.max(1,Math.ceil(Pe/Ii)),xd=i=>{let t=0;for(let e=1;e<o0();e++)Math.hypot(_n[e].x-Ct.x,_n[e].z-Ct.z)<Math.hypot(_n[t].x-Ct.x,_n[t].z-Ct.z)&&(t=e);do{let e=Math.random()*6.283,n=Ao(Math.floor(Math.random()*3));i.position.set(_n[t].x+Math.cos(e)*n,0,_n[t].z+Math.sin(e)*n)}while(Math.hypot(i.position.x-Ct.x,i.position.z-Ct.z)<12)},aS=[["\uD070 \uC5F4\uB9E4",5,1,"\uD070 \uC5F4\uB9E4\uB2E4"],["\uACE0\uAE30",3,3,"\uACE0\uAE30\uB2E4"],["\uBC84\uC12F",2,5,"\uBC84\uC12F\uC774\uB2E4"],["\uBE68\uAC04 \uC5F4\uB9E4",1,15,""]],oS=i=>{if(i==="\uBC84\uC12F"){let n=new Ke,s=gn(16774108);return n.add(dt(yt(.2,.26,.7,6),gn(15984328),[0,-.35,0]),dt(le,gn(14239023),[0,.05,0],[.7,.42,.7]),dt(le,s,[.28,.3,.15],[.12,.07,.12]),dt(le,s,[-.22,.32,-.15],[.1,.06,.1]),dt(le,s,[0,.42,.3],[.09,.05,.09])),n.userData.h=.95,n}if(i==="\uACE0\uAE30"){let n=new Ke,s=gn(15985368);return n.add(dt(yt(.09,.09,1.7,5),s,[0,0,0],null,[0,0,Et]),dt(le,gn(11883054),[0,0,0],[.62,.48,.48]),...[-.85,.85].map(r=>dt(le,s,[r,0,0],[.18,.18,.18]))),n.userData.h=.9,n}let t=i==="\uD070 \uC5F4\uB9E4"?1:.55,e=dt(le,gn(15217231),[0,0,0],[t,t,t]);return e.add(dt(It(.45,.7,4),gn(5216826),[0,1.1,0])),e.userData.h=t+.15,e};for(let[i,t,e,n]of aS)for(let s=0;s<e;s++){let r=oS(i);Object.assign(r.userData,{name:i,pay:t,line:n}),Bs.add(r)}var Zc=new L;function sa(i,t,e,n,s=""){if(t===void 0){i.hidden=!0;return}Zc.set(t,e,n).project(xe);let r=Zc.x,a=Zc.y,o=Zc.z>1;if(o&&(r=-r,a=-a,Math.abs(r)+Math.abs(a)<.01&&(a=-1)),!o&&Math.abs(r)<.85&&a>-.6&&a<.75){i.hidden=!0;return}let l=Math.max(Math.abs(r)/.8,a>0?a/.62:-a/.5)||1;r/=l,a/=l;let c=i.offsetWidth/2+6||20;i.hidden=!1,i.style.left=Math.min(innerWidth-c,Math.max(c,(r+1)/2*innerWidth))+"px",i.style.top=(1-a)/2*innerHeight+"px",i.style.setProperty("--a",Math.atan2(r,a)+"rad"),i.lastChild.textContent!==s&&(i.lastChild.textContent=s)}var zs=dt(yt(1.4,1.4,44,12),gn(16765498,{transparent:!0,opacity:.32,depthWrite:!1}),[0,22,0]);zs.visible=!1;he.add(zs);var nn=null,l0="",Hd=0,fm=0,To=i=>{l0=i,Hd=ee+4},pm=50,Io=5,c0=()=>new Date().toLocaleDateString("sv"),fh=()=>{let i=hn.get("uga-errand");return i.d===c0()&&i.n||0},Gd=()=>nn?"\uC2EC\uBD80\uB984 \uADF8\uB9CC\uB450\uAE30":fh()>=Io?"\uC624\uB298 \uC2EC\uBD80\uB984 \uB05D":`\uC871\uC7A5 \uC2EC\uBD80\uB984 \uBC1B\uAE30 (${Io-fh()}\uBC88 \uB0A8\uC74C)`;function lS(){if(nn)nn=null,zs.visible=!1,To("\uC6B0\uAC00. \uC2EC\uBD80\uB984 \uADF8\uB9CC\uB480\uB2E4.");else if(fh()>=Io)To("\uC6B0\uAC00. \uC624\uB298 \uC2EC\uBD80\uB984 \uB2E4 \uD588\uB2E4. \uB0B4\uC77C \uB610 \uC640\uB77C.");else{let i=[..._n.slice(0,o0()).map((n,s)=>[n.x,n.z,s?ha(s):"\uBAA8\uB2E5\uBD88 \uAD11\uC7A5"]),[Qi.x,Qi.z,"\uCCA8\uBC99 \uC6C5\uB369\uC774"],[Ls.x,Ls.z,"\uD070 \uACF5\uB8E1 \uBF08"]].filter(n=>Math.hypot(n[0]-Ct.x,n[1]-Ct.z)>30),t=i[Math.floor(Math.random()*i.length)],e=Math.hypot(t[0]-Ct.x,t[1]-Ct.z);nn={x:t[0],z:t[1],name:t[2],pay:pm},zs.position.set(t[0],22,t[1]),zs.visible=!0,To(`\uC6B0\uAC00. ${t[2]}\uC5D0 \uACE0\uAE30 \uAC16\uB2E4 \uC918\uB77C. \uBA39\uC774 ${pm}\uAC1C \uC900\uB2E4.`)}F("errand").textContent=Gd()}F("errand").onclick=lS;function cS(){let i=null,t=1e9;Bs.children.forEach((s,r)=>{let a=Math.hypot(Ct.x-s.position.x,Ct.z-s.position.z),{pay:o,line:l}=s.userData;s.position.y=s.userData.h+Math.sin(ee*3+r)*.15,s.rotation.y=ee*1.5,a<2.2+Ct.r?(xd(s),dh(o),fm=ee+.5,l&&To(`\uC6B0\uAC00! ${l}. \uBA39\uC774 ${o}\uAC1C.`)):a>Li*2.5?xd(s):a<t&&(t=a,i=s)}),i?sa(F("afood"),i.position.x,i.position.y,i.position.z):sa(F("afood")),F("wstat").classList.toggle("got",ee<fm);let e="";if(nn){let s=Math.hypot(Ct.x-nn.x,Ct.z-nn.z);if(zs.material.opacity=.3+Math.sin(ee*4)*.08,s<9){let r=fh()+1;hn.set("uga-errand",{d:c0(),n:r}),dh(nn.pay),To(`\uC6B0\uAC00! \uC798 \uAC16\uB2E4 \uC92C\uB2E4. \uBA39\uC774 ${nn.pay}\uAC1C \uC900\uB2E4.`+(r>=Io?" \uC624\uB298 \uC2EC\uBD80\uB984\uC740 \uB05D\uC774\uB2E4.":` \uC624\uB298 ${Io-r}\uBC88 \uB354 \uD560 \uC218 \uC788\uB2E4.`)),nn=null,zs.visible=!1,F("errand").textContent=Gd()}else e=`\uC2EC\uBD80\uB984: ${nn.name}\uAE4C\uC9C0 ${Math.round(s)}\uAC78\uC74C`}nn?sa(F("ajob"),nn.x,3,nn.z,`${nn.name} ${Math.round(Math.hypot(Ct.x-nn.x,Ct.z-nn.z))}\uAC78\uC74C`):sa(F("ajob"));let n=`\uBA39\uC774 ${Bt.n.toLocaleString()}\uAC1C`+(ee<Hd?`
`+l0:e?`
`+e:"");F("wstat").textContent!==n&&(F("wstat").textContent=n)}va();as&&!xn&&!In&&fetch(as+"/api/world").then(i=>i.json()).then(i=>{uh=i,va(),rS(),Go()}).catch(()=>{});var hS=["\uD070 \uBA38\uB9AC\uC640 \uAD75\uC740 \uC774\uBE68. \uC55E\uB2E4\uB9AC\uB294 \uC544\uC8FC \uC9E7\uC544\uC694.","\uC544\uC2DC\uC544\uC5D0 \uC0B4\uB358 \uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4\uC758 \uCE5C\uCC99. \uBA38\uB9AC\uAC00 \uB354 \uC881\uACE0 \uAE38\uC5B4\uC694.","\uB4F1\uC5D0 \uB3DB\uC774 \uC19F\uC544 \uC788\uACE0, \uAE34 \uC8FC\uB465\uC774\uB85C \uBB3C\uACE0\uAE30\uB97C \uC7A1\uC544\uC694.","\uBFD4 \uC14B\uACFC \uB113\uC740 \uBAA9 \uD504\uB9B4\uC774 \uC788\uC5B4\uC694.","\uD558\uB298\uC744 \uB098\uB294 \uC775\uB8E1. \uB2E4 \uC790\uB77C\uBA74 \uB9C8\uC744 \uC704\uB97C \uB0A0\uC544\uB2E4\uB140\uC694.","\uBAA9\uC774 \uC544\uC8FC \uAE38\uC5B4\uC694. \uB9C8\uC744\uC5D0\uC11C \uD0A4\uAC00 \uC81C\uC77C \uCEE4\uC694.","\uB4F1\uC5D0 \uD310\uC774 \uC904\uC9C0\uC5B4 \uC11C \uC788\uACE0, \uAF2C\uB9AC \uB05D\uC5D0 \uAC00\uC2DC\uAC00 \uC788\uC5B4\uC694.","\uC628\uBAB8\uC774 \uAC11\uC637\uC774\uC5D0\uC694. \uAF2C\uB9AC \uB05D\uC5D0 \uACE4\uBD09\uC774 \uB2EC\uB838\uC5B4\uC694.","\uBA38\uB9AC \uB4A4\uB85C \uAE34 \uBCCF\uC774 \uBED7\uC5B4 \uC788\uC5B4\uC694.","\uBAB8\uC740 \uC791\uC9C0\uB9CC \uBE60\uB974\uACE0, \uAE43\uD138\uC774 \uC788\uC5B4\uC694."];Qn.forEach((i,t)=>{let e=document.createElement("article");e.innerHTML=`<div class="pics"><figure><canvas width="220" height="220"></canvas>\uC544\uAE30</figure><figure><canvas width="220" height="220"></canvas>\uB2E4 \uC790\uB77C\uBA74</figure></div><b></b><em class="${cd[t]?"c":"h"}">${cd[t]?"\uC721\uC2DD":"\uCD08\uC2DD"}</em><p></p>`,e.querySelector("b").textContent=i,e.querySelector("p").textContent=hS[t],F("dex").append(e)});function Vd(i){let t=new go({antialias:!0,alpha:!0});t.setSize(i,i,!1),t.toneMapping=jr;let e=new zr,n=new Je(28,1,.1,300),s=new qr(16773336,2.4);s.position.set(4,6,7),e.add(new Xr(16777215,9075296,1.35),s);let r=new Ti({map:Ie.egg,side:Un,roughness:.6});return{shot:(o,l,c,h,d)=>{let u=new ys(l,c,1),f=!d&&dt(Pd,r,[0,.72,0],[.58,.68,.58]);u.frustumCulled=!1,u.setMatrixAt(0,new Gt),u.setColorAt(0,d?Cn.setHSL(h,.26,.42):Cn.setHSL(h,.6,.6)),f&&r.color.setHSL(h,.62,.76),e.add(u),f&&e.add(f);let g=l.boundingSphere,M=g.center,m=g.radius/Math.sin(14*Math.PI/180)*(d?.86:1.12),[p,x]=d?[.88,.42]:[.62,.75];n.position.set(M.x+m*p,M.y+m*.22,M.z+m*x),n.lookAt(M),t.render(e,n);let E=o.getContext("2d");E.clearRect(0,0,o.width,o.height),E.drawImage(t.domElement,0,0,o.width,o.height),e.remove(u),f&&e.remove(f),u.dispose()},done:()=>{t.dispose(),t.forceContextLoss()}}}var mm=!1;function uS(){if([...F("dex").children].forEach((e,n)=>e.classList.toggle("mine",or>=0&&_i[or]===n)),mm)return;mm=!0;let{shot:i,done:t}=Vd(220);[...F("dex").children].forEach((e,n)=>{let s=e.querySelectorAll("canvas"),r=or>=0&&_i[or]===n?Ni(fe[or]):(n*.618+.08)%1;i(s[0],Oo[n],_a,r,0),i(s[1],Hs[n].g,Hs[n].m,r,1)}),t()}var h0="";function u0(i){let t=i.trim().replace(/^@/,"");if(!/^[\w.]{1,30}$/.test(t))return!1;let e=Math.floor(Ni(t+"!")*Qn.length),n=Ni(t),{shot:s,done:r}=Vd(440);return h0=t,s(F("kpic"),Oo[e],_a,n,0),r(),F("kh").textContent=`@${t} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,F("kname").textContent=`\uC544\uAE30 ${Qn[e]}`,F("kmsg").textContent=`${cd[e]?"\uC721\uC2DD":"\uCD08\uC2DD"} \uACF5\uB8E1\uC774\uC5D0\uC694. \uD669\uAE08\uC774\uB098 \uBB34\uC9C0\uAC1C \uAC19\uC740 \uB4DC\uBB38 \uC0C9\uC778\uC9C0\uB294 \uC54C\uC774 \uAE70 \uB54C \uC54C \uC218 \uC788\uC5B4\uC694. \uD314\uB85C\uC6B0\uD558\uACE0 \uAC8C\uC2DC\uBB3C\uC5D0 \uB313\uAE00\uC744 \uB2EC\uBA74 \uBA87 \uBD84 \uC548\uC5D0 \uC774 \uC54C\uC774 \uB0B4 \uC9D1 \uB465\uC9C0\uC5D0 \uB193\uC5EC\uC694.`,F("peek").showModal(),!0}function dS(){let i=h0,t=Math.floor(Ni(i+"!")*Qn.length),e=xe.clone();e.aspect=Re/kn,e.updateProjectionMatrix();let n=Jm(e,Zt.target.x,Zt.target.z),s=n.getContext("2d");s.fillStyle="rgba(46,36,24,.42)",s.fillRect(0,0,Re,kn);let r=Object.assign(document.createElement("canvas"),{width:900,height:900}),a=Vd(900);a.shot(r,Oo[t],_a,Ni(i),0),a.done(),s.fillStyle="rgba(255,250,240,.16)",s.beginPath(),s.arc(Re/2,820,420,0,Math.PI*2),s.fill(),s.drawImage(r,(Re-900)/2,370),s.textAlign="center",s.fillStyle="#fffaf0",s.shadowColor="rgba(0,0,0,.5)",s.shadowBlur=14,ah(s,`@${i} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,54,Re-120,700),s.fillText(`@${i} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,Re/2,250),s.fillStyle="#ffd98a",ah(s,`\uC544\uAE30 ${Qn[t]}`,104,Re-100),s.fillText(`\uC544\uAE30 ${Qn[t]}`,Re/2,1420),s.fillStyle="#fffaf0",s.font=`700 44px ${ra}`,s.fillText("\uB4DC\uBB38 \uC0C9\uC778\uC9C0\uB294 \uC54C\uC774 \uAE70 \uB54C \uC54C \uC218 \uC788\uB2E4",Re/2,1510),s.font=`800 52px ${ra}`,s.fillText("\uB108\uB294 \uBB50 \uB098\uC640?",Re/2,1700),s.fillStyle="rgba(255,250,240,.85)",s.font=`600 36px ${ra}`,s.fillText(`@${wo} \uD504\uB85C\uD544 \uB9C1\uD06C\uC5D0\uC11C \uC544\uC774\uB514 \uB123\uC5B4 \uBCF4\uAE30`,Re/2,1780),F("peek").close(),Km(n,`ugauga_${i}_\uACF5\uB8E1.jpg`,"\uACF5\uB8E1 \uBBF8\uB9AC\uBCF4\uAE30 \uC0AC\uC9C4")}F("kx").onclick=()=>F("peek").close();F("kphoto").onclick=dS;F("kjoin").onclick=()=>{F("peek").close(),Sh(),F("how").showModal()};var Sh=()=>{F("intro").hidden=!0,document.body.classList.remove("intro")};F("ilook").onclick=Sh;F("ijoin").onclick=()=>{Sh(),F("how").showModal()};F("ifind").onsubmit=i=>{i.preventDefault(),hh(F("iq").value)?Sh():u0(F("iq").value)||(F("iq").value="",F("iq").placeholder=fd)};var eh=new Map,ph=i=>Math.floor(i/8),bh=i=>Math.hypot(i.elements[0],i.elements[2]),Vo=(i,t,e)=>{let n=ph(i)+","+ph(t);eh.has(n)||eh.set(n,[]),eh.get(n).push(i,t,e)};ua.forEach(i=>Vo(i.elements[12],i.elements[14],2.5*bh(i)));km.forEach(i=>Vo(i.elements[12],i.elements[14],.55*bh(i)));Hm.forEach(i=>Vo(i.elements[12],i.elements[14],.6*bh(i)));Gm.forEach(i=>Vo(i.elements[12],i.elements[14],1.25*bh(i)));_n.forEach((i,t)=>Vo(i.x,i.z,t?Uo(t)?3.8:1.9:3.4));function d0(i){let t=ph(i.x),e=ph(i.z);for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){let r=eh.get(t+n+","+(e+s));if(r)for(let a=0;a<r.length;a+=3){let o=i.x-r[a],l=i.z-r[a+1],c=Math.hypot(o,l),h=r[a+2]+i.r;c<h&&c>1e-4&&(i.x=r[a]+o/c*h,i.z=r[a+1]+l/c*h)}}}var ga=new Set,Ns={x:0,y:0},ur=new Gt,fS=new Gt,f0=new L,pS=[Zt.minDistance,Zt.maxDistance],gm=0;F("walkhint").onclick=()=>F("walkhint").classList.toggle("mini");var Lo=[];function Eh(){if(Ct)return;zo(),F("card").hidden=!0,Kn=null,Th(!1),Zt.autoRotate=!1;let i=or,t=i>=0?_i[i]:-1,e=cn.position.x,n=cn.position.z,s=0,r=.8,a=9,o=`\uC871\uC7A5 ${oi}`;if(i>=0)if(o=`@${fe[i]}\uC758 `+["\uC54C","\uAE08 \uAC04 \uC54C",`\uC544\uAE30 ${Qn[t]}`,Qn[t]][ma(i)],Xe){let c=Bm(i,ee),h=Hs[t].len*Ld[i];e=c.x,n=c.z,s=Math.atan2(c.sn,c.cs),r=Math.min(2.4,h*.17),a=Math.max(10,h*1.7)}else{let c=Gn[i].elements;e=c[12],n=c[14],s=Math.atan2(os[i].cx-e,os[i].cz-n),e+=Math.sin(s)*3,n+=Math.cos(s)*3,r=.6,a=0,Lo=ls.has(i)?[{obj:ls.get(i),j:i}]:is.map(h=>({im:h,j:i,s:pe===2?1.5:1})),Lo.forEach(h=>{h.im&&(h.im.frustumCulled=!1)})}Ct={i,x:e,z:n,a:s,r,dist:0,hop:0,rot:0,eye:a*.22+(a?.6:1.2)},d0(Ct);let l=a*(xe.aspect<1?1.5:1);Zt.target.set(Ct.x,Ct.eye,Ct.z),xe.position.set(Ct.x-Math.sin(s)*(l||6.5),l*.55||5,Ct.z-Math.cos(s)*(l||6.5)),Zt.minDistance=3,Zt.maxDistance=(a||9)*4,Zt.minPolarAngle=.4,Ed("look"),F("walkhint").replaceChildren(Object.assign(document.createElement("b"),{textContent:o}),matchMedia("(pointer:coarse)").matches?"\uB3D9\uADF8\uB77C\uBBF8\uB97C \uBC00\uBA74 \uAC78\uC5B4\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uB458\uB7EC\uBD10\uC694.":"WASD\uB85C \uAC77\uACE0 Shift\uB85C \uB2EC\uB824\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uB458\uB7EC\uBD10\uC694."," \uBE68\uAC04 \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00\uBA74 \uBA39\uC774\uAC00 \uC788\uC5B4\uC694. \uC5F4\uB9E4 1\uAC1C, \uBC84\uC12F 2\uAC1C, \uACE0\uAE30 3\uAC1C, \uD070 \uC5F4\uB9E4 5\uAC1C.",i<0?" \uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uB0B4 \uACF5\uB8E1\uC73C\uB85C \uAC78\uC744 \uC218 \uC788\uC5B4\uC694.":"",Ds.visible?` \uC624\uB298\uC758 \uAE08\uBE5B \uBF08\uB294 ${Ds.userData.hood} \uAE38 \uC5B4\uB518\uAC00\uC5D0 \uC228\uC5B4 \uC788\uC5B4\uC694. \uCC3E\uC73C\uBA74 \uBA39\uC774 ${dd}\uAC1C.`:" \uC624\uB298 \uAE08\uBE5B \uBF08\uB294 \uC774\uBBF8 \uCC3E\uC558\uC5B4\uC694. \uB0B4\uC77C \uB2E4\uB978 \uACF3\uC5D0 \uB610 \uC228\uC5B4\uC694."),F("walkhint").classList.remove("mini"),clearTimeout(gm),gm=setTimeout(()=>F("walkhint").classList.add("mini"),9e3),document.body.classList.add("walking"),F("walkui").hidden=!1,Bs.children.forEach(c=>xd(c)),Bs.visible=!0,F("errand").textContent=Gd(),[4,9,10].forEach((c,h)=>Bs.children[c].position.set(Ct.x+Math.sin(s)*(6+h*3.5),0,Ct.z+Math.cos(s)*(6+h*3.5))),Wd()}function p0(){if(Ct&&(Lo.forEach(({im:i,obj:t,j:e})=>{if(t)return Mh(e);i.setMatrixAt(e,ur.multiplyMatrices(i.userData.mats[e],i.userData.L)),i.instanceMatrix.needsUpdate=!0}),Lo=[],Bs.visible=zs.visible=!1,nn=null,Hd=0,Jn&&Jn.readyState===1&&Jn.send("0"),vd="",cn.position.set(0,0,11),cn.rotation.y=0,Ct=null,s0(),Ns.x=Ns.y=0,ga.clear(),[Zt.minDistance,Zt.maxDistance]=pS,Zt.minPolarAngle=0,Ed("map"),document.body.classList.remove("walking"),F("walkui").hidden=!0,sa(F("ajob")),sa(F("afood")),!xn&&!In)){let i=Gs(),t=Bt.n.toLocaleString();i>=0?(Ui(i),F("cinfo").textContent=Bt.n?`\uBA39\uC774 ${t}\uAC1C\uB97C \uBAA8\uC558\uC5B4\uC694. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C ${oa}\uC5D0\uAC8C \uC918\uC694.`:"\uC774\uBC88\uC5D4 \uBA39\uC774\uB97C \uBABB \uC8FC\uC6E0\uC5B4\uC694. \uB2E4\uC74C \uC0B0\uCC45\uC5D0\uC11C \uBE68\uAC04 \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00 \uBD10\uC694."):Bt.n&&ya(`\uBA39\uC774 ${t}\uAC1C`,"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uB0B4 \uC54C\uC5D0\uAC8C \uBA39\uC774\uB97C \uC904 \uC218 \uC788\uC5B4\uC694.","")}}function mS(i,t){let e=Ct,n=e.x,s=e.z,r=h=>ga.has(h)?1:0,a=Ns.x+r("d")+r("arrowright")-r("a")-r("arrowleft"),o=-Ns.y+r("w")+r("arrowup")-r("s")-r("arrowdown"),l=Math.hypot(a,o);if(l>.08){let h=Zt.target.x-xe.position.x,d=Zt.target.z-xe.position.z,u=Math.hypot(h,d)||1,f=Math.min(1,l)/l,g=(h*o-d*a)/u*f,M=(d*o+h*a)/u*f,m=(ga.has("shift")?16:10)*(Xe&&e.i>=0?1.5:1)*i;e.x+=g*m,e.z+=M*m;let p=Math.atan2(g,M)-e.a;e.a+=Math.atan2(Math.sin(p),Math.cos(p))*Math.min(1,i*10),d0(e);let x=re+230,E=Math.hypot(e.x,e.z);E>x&&(e.x*=x/E,e.z*=x/E),e.dist+=Math.hypot(e.x-n,e.z-s)}let c=e.hop=Math.abs(Math.sin(e.dist*2.2))*.28;e.rot=Math.sin(e.dist*2.2)*.12,e.i<0&&(cn.position.set(e.x,c,e.z),cn.rotation.y=e.a),Lo.forEach(({im:h,obj:d,j:u,s:f})=>{if(d){d.position.set(e.x,c,e.z),d.rotation.set(0,e.a+e.rot,0);return}ur.makeRotationY(e.a+e.rot).scale(f0.set(f,f,f)).setPosition(e.x,c,e.z),h.setMatrixAt(u,ur.multiply(h.userData.L)),h.instanceMatrix.needsUpdate=!0}),xe.position.x+=e.x-n,xe.position.z+=e.z-s,Zt.target.set(e.x,e.eye,e.z)}F("walkgo").onclick=Eh;F("walkend").onclick=p0;{let i=F("stick"),t=i.firstElementChild,e=n=>{let s=i.getBoundingClientRect(),r=(n.clientX-s.left-s.width/2)/40,a=(n.clientY-s.top-s.height/2)/40,o=Math.hypot(r,a);o>1&&(r/=o,a/=o),Ns.x=r,Ns.y=a,t.style.transform=`translate(${r*36}px,${a*36}px)`};i.onpointerdown=n=>{n.stopPropagation(),i.setPointerCapture(n.pointerId),e(n)},i.onpointermove=n=>{n.stopPropagation(),i.hasPointerCapture(n.pointerId)&&e(n)},i.onpointerup=i.onpointercancel=i.onlostpointercapture=n=>{n.stopPropagation(),Ns.x=Ns.y=0,t.style.transform=""}}addEventListener("keydown",i=>{i.target.tagName!=="INPUT"&&ga.add(i.key.toLowerCase()),i.key==="Escape"&&p0()});addEventListener("keyup",i=>ga.delete(i.key.toLowerCase()));addEventListener("blur",()=>ga.clear());var Jn=null,yd=null,_m=0,vd="";function Wd(){if(!as||In||xn||!window.WebSocket)return;let i=Gs()>=0?vh():"";if(Jn&&yd===i)return;Jn&&(Jn.onclose=null,Jn.close(),es.forEach((e,n)=>ed(n))),yd=i;let t=Jn=new WebSocket(as.replace(/^http/,"ws")+"/api/live"+(i?"?id="+encodeURIComponent(i):""));t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}n.forEach(([s,r,a,o])=>{let l=ss(s);if(l<0)return;let c=es.get(l);if(r===void 0){c&&ed(l);return}if(c){c.tx=r,c.tz=a,c.ta=o;return}let h=Xe?[]:ls.has(l)?[{obj:ls.get(l)}]:is.map(d=>(d.frustumCulled=!1,{im:d,s:pe===2?1.5:1}));es.set(l,{j:l,x:r,z:a,a:o,tx:r,tz:a,ta:o,dist:0,hop:0,rot:0,items:h,tag:xa("\uC0B0\uCC45 \uC911","@"+fe[l],!1,.7)})})},t.onclose=()=>{Jn===t&&(Jn=null,es.forEach((e,n)=>ed(n)),setTimeout(Wd,5e3))}}function ed(i){let t=es.get(i);t&&(es.delete(i),t.items.forEach(({im:e,obj:n})=>{if(n)return Mh(i);e.setMatrixAt(i,ur.multiplyMatrices(e.userData.mats[i],e.userData.L)),e.instanceMatrix.needsUpdate=!0}),he.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose())}function gS(i){if(Ct&&Ct.i>=0&&yd&&Jn&&Jn.readyState===1){let n=JSON.stringify([Ct.x,Ct.z,Ct.a].map(s=>Math.round(s*10)/10));ee-_m>(n===vd?3:.25)&&(Jn.send(n),_m=ee,vd=n)}let t=Math.min(1,i*6),e=n=>Xe?2+Hs[_i[n]].len*Ld[n]*.45:2.4;es.forEach(n=>{if(Ct&&Ct.i===n.j)return;let s=n.x,r=n.z,a=n.ta-n.a;n.x+=(n.tx-n.x)*t,n.z+=(n.tz-n.z)*t,n.a+=Math.atan2(Math.sin(a),Math.cos(a))*t,n.dist+=Math.hypot(n.x-s,n.z-r),n.hop=Math.abs(Math.sin(n.dist*2.2))*.28,n.rot=Math.sin(n.dist*2.2)*.12,n.items.forEach(({im:o,obj:l,s:c})=>{if(l){l.position.set(n.x,n.hop,n.z),l.rotation.set(0,n.a+n.rot,0);return}ur.makeRotationY(n.a+n.rot).scale(f0.set(c,c,c)).setPosition(n.x,n.hop,n.z),o.setMatrixAt(n.j,ur.multiply(o.userData.L)),o.instanceMatrix.needsUpdate=!0}),n.tag.position.set(n.x,e(n.j)+n.hop,n.z)})}Wd();var Cs=Od.at(-2);function Th(i){Bd=i,F("ride").textContent=i?"\uB530\uB77C\uAC00\uAE30 \uB05D":"\uC775\uB8E1 \uB530\uB77C\uAC00\uAE30",i&&(Kn=null,Zt.autoRotate=!1,F("card").hidden=!0,zo())}F("ride").onclick=()=>Th(!Bd);Zt.addEventListener("start",()=>Th(!1));var en=null,Md=!1;function _S(i){if(Md=i,F("snd").textContent=i?"\uB9C8\uC744 \uC18C\uB9AC \uB044\uAE30":"\uB9C8\uC744 \uC18C\uB9AC \uCF1C\uAE30",!en){if(!i)return;en=new AudioContext;let t=en.createBuffer(1,en.sampleRate*2,en.sampleRate),e=t.getChannelData(0);for(let o=0;o<e.length;o++)e[o]=Math.random()*2-1;let n=(o,l,c)=>{let h=en.createBufferSource(),d=en.createBiquadFilter(),u=en.createGain();return h.buffer=t,h.loop=!0,d.type=o,d.frequency.value=l,u.gain.value=c,h.connect(d).connect(u).connect(en.destination),h.start(),u},s=n("lowpass",420,.05),r=en.createOscillator(),a=en.createGain();r.frequency.value=.09,a.gain.value=.03,r.connect(a).connect(s.gain),r.start(),n("bandpass",900,.012),setInterval(()=>{if(Md)for(let o=1+Math.random()*3|0;o--;){let l=en.createBufferSource(),c=en.createGain(),h=en.createBiquadFilter(),d=en.currentTime+Math.random()*.4;l.buffer=t,h.type="highpass",h.frequency.value=1500+Math.random()*2500,c.gain.setValueAtTime(.04+Math.random()*.07,d),c.gain.exponentialRampToValueAtTime(1e-4,d+.03+Math.random()*.05),l.connect(h).connect(c).connect(en.destination),l.start(d,Math.random()*1.5,.12)}},450)}i?en.resume():en.suspend()}F("snd").onclick=()=>_S(!Md);var Jc=["#101a3c","#1f2c5c","#33427a","#3a4a80",11123967,1.6,.85,1.08,1,[60,110,-70]],Kc=[[0,...Jc],[5,...Jc],[6.5,"#5a78b0","#c9a6b4","#f3b99a","#f2a780",16756864,2.1,.9,.98,.25,[120,42,60]],[9,"#4f95c0","#a9d2e0","#e6e2c6","#e3d2ac",16773336,2.6,1,.95,0,[80,95,60]],[15,"#4f95c0","#9cc7d3","#f3cf9f","#f0b98a",16765600,2.7,.95,.95,0,[-80,110,60]],[18,"#3f5f9c","#d99a86","#f39a62","#ee8a55",16751184,2.4,.95,1,.2,[-125,42,60]],[19.5,...Jc],[24,...Jc]],Ps=0,Mo=new Vt,m0=new L;function xS(i){let t=Kc.findIndex(o=>o[0]>i);t<1&&(t=Kc.length-1);let e=Kc[t-1],n=Kc[t],s=(i-e[0])/(n[0]-e[0]),r=o=>"#"+Cn.set(e[o]).lerp(Mo.set(n[o]),s).getHexString(),a=o=>e[o]+(n[o]-e[o])*s;Am(r(1),r(2),r(3),r(4)),he.fog.color.set(r(4)),Be.color.set(e[5]).lerp(Mo.set(n[5]),s),Be.intensity=a(6),ad.intensity=a(7),be.toneMappingExposure=a(8),Ps=a(9),So.emissiveIntensity=Ps*1.6,Xm.material.opacity=Ps,Wm.color.set(16774372).lerp(Mo.set(3752042),Ps),ad.color.set(16773336).lerp(Mo.set(9675992),Ps),Ro.set(...e[10]).lerp(m0.set(...n[10]),s),ju.position.copy(Ro).normalize().multiplyScalar(1600),ju.scale.setScalar(420-250*Ps),ju.material.color.set(16773568).lerp(Mo.set(14674175),Ps)}var g0=Pn.has("hour")?+Pn.get("hour"):In?15:null,xm=i=>String(Math.floor(i)).padStart(2,"0");function _0(){let i=new Date,t=g0??i.getHours()+i.getMinutes()/60;xS(t),F("clock").textContent=`${t<5||t>=19.5?"\uBC24":t<7?"\uC0C8\uBCBD":t<17?"\uB0AE":"\uC800\uB141"} ${xm(t)}:${xm(t%1*60)}`}_0();g0==null&&setInterval(_0,3e4);var jc=new no,mh={x:0,y:0},Qc=new Map(Fm.filter(Boolean).flatMap(i=>[[i.hi.im,i.hi.id],[i.lo.im,i.lo.id]]));be.domElement.addEventListener("pointerdown",i=>{mh.x=i.clientX,mh.y=i.clientY});be.domElement.addEventListener("pointerup",i=>{if(Ct||Math.hypot(i.clientX-mh.x,i.clientY-mh.y)>6)return;if(jc.setFromCamera(new Tt(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),xe),jc.intersectObject(cn,!0).length)return zd();Qc.forEach((n,s)=>s.computeBoundingSphere());let t=lm.length?jc.intersectObjects(lm)[0]:null;if(t)return QM(t.instanceId+1);let e=jc.intersectObjects([...AM,...Qc.keys()])[0];e&&Ui(Qc.has(e.object)?Qc.get(e.object)[e.instanceId]:e.instanceId)});{let i=(Pn.get("from")||"").replace(/^@/,"");/^[\w.]{1,30}$/.test(i)&&ss(i)>=0&&!xn&&!In&&(!hn.get("uga-from").id&&!Bt.srv&&hn.set("uga-from",{id:fe[ss(i)]}),F("ifrom").hidden=!1,F("ifrom").textContent=`@${fe[ss(i)]} \uB2D8\uC774 \uBD88\uB800\uC5B4\uC694. \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${oh}\uAC1C\uB97C \uBC1B\uC544\uC694.`)}var ym=(()=>{try{return!xn&&!In&&localStorage.getItem("uga-id")}catch{return null}})();Pn.get("id")?hh(Pn.get("id")):ym&&hh(ym)||In||(F("intro").hidden=!1,document.body.classList.add("intro"));var yS=0,nd=0,vm=0,th=0,id=0,Mm=performance.now(),ee=0;function x0(i){ee+=i,Nm.value=ee;for(let e of Od){let n=e.a0+ee*e.w,s=Math.sign(e.w);e.o.position.set(Math.cos(n)*e.R,e.y,Math.sin(n)*e.R),e.o.rotation.y=Math.atan2(-Math.cos(n)*s,-Math.sin(n)*s),e.o.userData.legs?.forEach((r,a)=>{r.rotation.z=Math.sin(ee*e.gait+(a===1||a===2?Math.PI:0))*.45}),e.o.userData.wings?.forEach((r,a)=>{r.rotation.x=Math.sin(ee*5)*.5*(a?1:-1)})}if(Ct&&(mS(i,ee),cS()),gS(i),Ds.rotation.y=ee*2,Ds.position.y=1.1+Math.sin(ee*3)*.15,Ct&&Ds.visible&&Math.hypot(Ct.x-Ds.position.x,Ct.z-Ds.position.z)<2.6&&YM(),CM.forEach(e=>Im.forEach(n=>{n.setColorAt(e,Cn.setHSL((ee*.25+e*.37)%1,.95,.62)),n.instanceColor.needsUpdate=!0})),ar){let e=ee-ar.t0,n=e<1.4?Math.sin(e*18)*.28*(1-e/1.4):0;is.forEach(s=>{s.setMatrixAt(ar.i,ur.copy(s.userData.mats[ar.i]).multiply(fS.makeRotationZ(n)).multiply(s.userData.L)),s.instanceMatrix.needsUpdate=!0}),e>=1.4&&(ar=null)}(Xe||Ct||es.size||yS++%20===0)&&kM(ee),HM.forEach((e,n)=>{let s=(ee*.06+n/8)%1;e.position.set(Os+s*40,90+s*90,Fs),e.scale.setScalar(26+s*70),e.material.opacity=.75*(1-s)}),GM.forEach((e,n)=>{e.scale.set(1+Math.sin(ee*9+n)*.08,.85+Math.sin(ee*13+n*2)*.12+Math.sin(ee*7.3+n)*.08,1),e.rotation.y=ee*(n+1)}),Nd.intensity=(110+Math.sin(ee*11)*25)*(1+Ps*1.5);let t=Ud.attributes.position;for(let e=0;e<qm;e++){let n=(ee*(.25+sn(e)*.3)+sn(e,1))%1;t.setXYZ(e,Math.sin(e*2.4+ee)*(.3+n*1.2),1+n*6,Math.cos(e*1.7+ee*.8)*(.3+n*1.2))}if(t.needsUpdate=!0,zm.scale.setScalar(1+Math.sin(ee*3)*.08),Ct&&Ct.i<0||(cn.position.y=Math.abs(Math.sin(ee*2.5))*.15),cn.userData.club.rotation.z=2.4+Math.sin(ee*2.5)*.3,$m.position.set(cn.position.x,5.9,cn.position.z),Bd){let e=Cs.a0+ee*Cs.w-Math.sign(Cs.w)*20/Cs.R,n=1-Math.exp(-i*3);Zt.target.lerp(Cs.o.position,n),xe.position.lerp(m0.set(Math.cos(e)*(Cs.R+5),Cs.y+7,Math.sin(e)*(Cs.R+5)),n)}}In&&(window.dbg={renderer:be,scene:he,sun:Be,ground:Cd,camera:xe,jump:()=>{Kn&&(xe.position.copy(Kn.p),Zt.target.copy(Kn.t),Kn=null)}},window.bench=(i=30)=>{let t=be.getContext(),e=new Uint8Array(4),n=performance.now();for(let s=0;s<i;s++)x0(1/60),Be.shadow.needsUpdate=s%2===0,be.render(he,xe),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,e);return+((performance.now()-n)/i).toFixed(1)});be.setAnimationLoop(i=>{let t=Math.min((i-Mm)/1e3,.1);if(Mm=i,Be.shadow.needsUpdate=nd%(Di?4:2)===0,x0(t),Kn){let e=1-Math.exp(-t*4);xe.position.lerp(Kn.p,e),Zt.target.lerp(Kn.t,e),xe.position.distanceTo(Kn.p)<.1&&(Kn=null)}if(!Ct){let e=Zt.target,n=Math.hypot(e.x,e.z),s=re+120;if(n>s){let r=e.x*(s/n-1),a=e.z*(s/n-1);e.x+=r,e.z+=a,xe.position.x+=r,xe.position.z+=a}e.y=Math.min(Math.max(e.y,0),12)}Zt.update(),Xm.position.copy(xe.position),Be.target.position.set(Math.round(Zt.target.x/4)*4,0,Math.round(Zt.target.z/4)*4),Be.position.copy(Be.target.position).add(Ro),nd++%10===0&&XM(),be.render(he,xe),nd===2&&(clearInterval(window.loadTick),F("load").classList.add("done"),setTimeout(()=>F("load").remove(),600)),id++,th+=t,th>1&&(vm=Math.round(id/th),id=th=0,In&&(document.title=`${vm}fps \xB7 ${be.info.render.calls} calls \xB7 ${Math.round(be.info.render.triangles/1e3)}k tris`))});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
