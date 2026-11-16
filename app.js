var Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hm=0,kd=1,Gm=2;var ul=1,Vm=2,to=3,cr=0,jn=1,Qn=2,Vr=0,eo=1,Wr=2,Hd=3,Gd=4,Wm=5;var Xr=100,Xm=101,$m=102,qm=103,Ym=104,Zm=200,Jm=201,Km=202,jm=203,Vd=204,Wd=205,Qm=206,t0=207,e0=208,n0=209,i0=210,s0=211,r0=212,a0=213,o0=214,Lc=0,Dc=1,Nc=2,Da=3,Uc=4,Oc=5,Fc=6,Bc=7,Xd=0,l0=1,c0=2,us=0,$d=1,qd=2,Yd=3,no=4,Zd=5,Jd=6,Kd=7;var jd=300,$r=301,io=302,fh=303,ph=304,Na=1e3,rs=1001,zc=1002,_n=1003,h0=1004;var dl=1005;var Zn=1006,mh=1007;var Os=1008;var oi=1009,Qd=1010,tf=1011,so=1012,gh=1013,Yi=1014,Oi=1015,Zi=1016,_h=1017,xh=1018,qr=1020,ef=35902,nf=35899,sf=1021,rf=1022,Ji=1023,Ps=1026,Fs=1027,yh=1028,vh=1029,hr=1030,Mh=1031;var Sh=1033,fl=33776,pl=33777,ml=33778,gl=33779,bh=35840,Eh=35841,Th=35842,wh=35843,Ah=36196,Ch=37492,Rh=37496,Ph=37488,Ih=37489,_l=37490,Lh=37491,Dh=37808,Nh=37809,Uh=37810,Oh=37811,Fh=37812,Bh=37813,zh=37814,kh=37815,Hh=37816,Gh=37817,Vh=37818,Wh=37819,Xh=37820,$h=37821,qh=36492,Yh=36494,Zh=36495,Jh=36283,Kh=36284,xl=36285,jh=36286;var zo=2300,kc=2301,Rc=2302,Pd=2303,Id=2400,Ld=2401,Dd=2402;var u0=3200;var Qh=0,d0=1,Bs="",pn="srgb",ko="srgb-linear",Ho="linear",fe="srgb";var Pc=7680;var f0=519,p0=512,m0=513,g0=514,af=515,_0=516,x0=517,of=518,lf=519,cf=35044,hf=35048;var uf="300 es",Ni=2e3,Ua=2001;function J_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function K_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y0(){let n=Oa("canvas");return n.style.display="block",n}var sm={},Fa=null;function Go(...n){let t="THREE."+n.shift();Fa?Fa("log",t,...n):console.log(t,...n)}function v0(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=v0(n);let t="THREE."+n.shift();if(Fa)Fa("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=v0(n);let t="THREE."+n.shift();if(Fa)Fa("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function No(...n){let t=n.join(" ");t in sm||(sm[t]=!0,zt(...n))}function M0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var S0={[Lc]:Lc,[Nc]:Fc,[Uc]:Uc,[Da]:Oc,[Dc]:Dc,[Fc]:Nc,[Bc]:Bc,[Oc]:Da},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rm=1234567,Uo=Math.PI/180,Ba=180/Math.PI;function ur(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function df(n,t){return(n%t+t)%t}function j_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Q_(n,t,e){return n!==t?(e-n)/(t-n):0}function Oo(n,t,e){return(1-e)*n+e*t}function tx(n,t,e,i){return Oo(n,t,1-Math.exp(-e*i))}function ex(n,t=1){return t-Math.abs(df(n,t*2)-t)}function nx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ix(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rx(n,t){return n+Math.random()*(t-n)}function ax(n){return n*(.5-Math.random())}function ox(n){n!==void 0&&(rm=n);let t=rm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lx(n){return n*Uo}function cx(n){return n*Ba}function hx(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ux(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ff(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dx(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*f,o*h,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pf(n,t){if(t.constructor===Float32Array)return n;let e=tu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function mf(n,t){if(t.constructor===Float32Array)return n;let e=tu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var gf={DEG2RAD:Uo,RAD2DEG:Ba,generateUUID:ur,clamp:jt,euclideanModulo:df,mapLinear:j_,inverseLerp:Q_,lerp:Oo,damp:tx,pingpong:ex,smoothstep:nx,smootherstep:ix,randInt:sx,randFloat:rx,randFloatSpread:ax,seededRandom:ox,degToRad:lx,radToDeg:cx,isPowerOfTwo:hx,ceilPowerOfTwo:ux,floorPowerOfTwo:ff,setQuaternionFromProperEuler:dx,normalize:mf,denormalize:pf},pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),b=Math.sin(_);p=Math.sin(p*_)/b,o=Math.sin(o*_)/b,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+y*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(am.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(am.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ad=new P,am=new xn,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],_=s[1],b=s[4],v=s[7],A=s[2],w=s[5],x=s[8];return r[0]=a*y+o*_+l*A,r[3]=a*g+o*b+l*w,r[6]=a*p+o*v+l*x,r[1]=c*y+h*_+d*A,r[4]=c*g+h*b+d*w,r[7]=c*p+h*v+d*x,r[2]=u*y+f*_+m*A,r[5]=u*g+f*b+m*w,r[8]=u*p+f*v+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return No("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(od.makeScale(t,e)),this}rotate(t){return No("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(od.makeRotation(-t)),this}translate(t,e){return No("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(od.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},od=new Gt,om=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fx(){let n={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=La(s.r),s.g=La(s.g),s.b=La(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bs?Ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ko]:{primaries:t,whitePoint:i,transfer:Ho,toXYZ:om,fromXYZ:lm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:om,fromXYZ:lm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}var re=fx();function Rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function La(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fa,Hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fa===void 0&&(fa=Oa("canvas")),fa.width=t.width,fa.height=t.height;let s=fa.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fa}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rs(e[i]/255)*255):e[i]=Rs(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},px=0,za=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ld(s[a].image)):r.push(ld(s[a]))}else r=ld(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ld(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var mx=0,cd=new P,Fn=class n extends $i{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rs,s=rs,r=Zn,a=Os,o=Ji,l=oi,c=n.DEFAULT_ANISOTROPY,h=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=ur(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=jd;Fn.DEFAULT_ANISOTROPY=1;var De=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+u)/4,x=(d+y)/4,T=(m+g)/4;return b>v&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=x/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=T/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=T/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-y)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends $i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Fn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new za(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Gc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Vo=class extends Fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vc=class extends Fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wt=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,m,y,g)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/pa.setFromMatrixColumn(t,0).length(),r=1/pa.setFromMatrixColumn(t,1).length(),a=1/pa.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u+y*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gx,t,_x)}lookAt(t,e,i){let s=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Js.crossVectors(i,fi),Js.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Js.crossVectors(i,fi)),Js.normalize(),ic.crossVectors(fi,Js),s[0]=Js.x,s[4]=ic.x,s[8]=fi.x,s[1]=Js.y,s[5]=ic.y,s[9]=fi.y,s[2]=Js.z,s[6]=ic.z,s[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],_=i[3],b=i[7],v=i[11],A=i[15],w=s[0],x=s[4],T=s[8],D=s[12],R=s[1],U=s[5],F=s[9],G=s[13],L=s[2],V=s[6],q=s[10],W=s[14],it=s[3],$=s[7],Q=s[11],et=s[15];return r[0]=a*w+o*R+l*L+c*it,r[4]=a*x+o*U+l*V+c*$,r[8]=a*T+o*F+l*q+c*Q,r[12]=a*D+o*G+l*W+c*et,r[1]=h*w+d*R+u*L+f*it,r[5]=h*x+d*U+u*V+f*$,r[9]=h*T+d*F+u*q+f*Q,r[13]=h*D+d*G+u*W+f*et,r[2]=m*w+y*R+g*L+p*it,r[6]=m*x+y*U+g*V+p*$,r[10]=m*T+y*F+g*q+p*Q,r[14]=m*D+y*G+g*W+p*et,r[3]=_*w+b*R+v*L+A*it,r[7]=_*x+b*U+v*V+A*$,r[11]=_*T+b*F+v*q+A*Q,r[15]=_*D+b*G+v*W+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15],_=l*f-c*u,b=o*f-c*d,v=o*u-l*d,A=a*f-c*h,w=a*u-l*h,x=a*d-o*h;return e*(y*_-g*b+p*v)-i*(m*_-g*A+p*w)+s*(m*b-y*A+p*x)-r*(m*v-y*w+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],_=e*o-i*a,b=e*l-s*a,v=e*c-r*a,A=i*l-s*o,w=i*c-r*o,x=s*c-r*l,T=h*y-d*m,D=h*g-u*m,R=h*p-f*m,U=d*g-u*y,F=d*p-f*y,G=u*p-f*g,L=_*G-b*F+v*U+A*R-w*D+x*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(o*G-l*F+c*U)*V,t[1]=(s*F-i*G-r*U)*V,t[2]=(y*x-g*w+p*A)*V,t[3]=(u*w-d*x-f*A)*V,t[4]=(l*R-a*G-c*D)*V,t[5]=(e*G-s*R+r*D)*V,t[6]=(g*v-m*x-p*b)*V,t[7]=(h*x-u*v+f*b)*V,t[8]=(a*F-o*R+c*T)*V,t[9]=(i*R-e*F-r*T)*V,t[10]=(m*w-y*v+p*_)*V,t[11]=(d*v-h*w-f*_)*V,t[12]=(o*D-a*U-l*T)*V,t[13]=(e*U-i*D+s*T)*V,t[14]=(y*b-m*A-g*_)*V,t[15]=(h*A-d*b+u*_)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,y=a*h,g=a*d,p=o*d,_=l*c,b=l*h,v=l*d,A=i.x,w=i.y,x=i.z;return s[0]=(1-(y+p))*A,s[1]=(f+v)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+p))*w,s[6]=(g+_)*w,s[7]=0,s[8]=(m+b)*x,s[9]=(g-_)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=pa.set(s[0],s[1],s[2]).length(),o=pa.set(s[4],s[5],s[6]).length(),l=pa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Vi.copy(this);let c=1/a,h=1/o,d=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=d,Vi.elements[9]*=d,Vi.elements[10]*=d,e.setFromRotationMatrix(Vi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Ni,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===Ni)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ua)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ni,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===Ni)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ua)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},pa=new P,Vi=new Wt,gx=new P(0,0,0),_x=new P(1,1,1),Js=new P,ic=new P,fi=new P,cm=new Wt,hm=new xn,ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cm,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hm.setFromEuler(this),this.setFromQuaternion(hm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xx=0,um=new P,ma=new xn,bs=new Wt,sc=new P,To=new P,yx=new P,vx=new xn,dm=new P(1,0,0),fm=new P(0,1,0),pm=new P(0,0,1),mm={type:"added"},Mx={type:"removed"},ga={type:"childadded",child:null},hd={type:"childremoved",child:null},yn=class n extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new ri,i=new xn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Gt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ma.setFromAxisAngle(t,e),this.quaternion.multiply(ma),this}rotateOnWorldAxis(t,e){return ma.setFromAxisAngle(t,e),this.quaternion.premultiply(ma),this}rotateX(t){return this.rotateOnAxis(dm,t)}rotateY(t){return this.rotateOnAxis(fm,t)}rotateZ(t){return this.rotateOnAxis(pm,t)}translateOnAxis(t,e){return um.copy(t).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dm,t)}translateY(t){return this.translateOnAxis(fm,t)}translateZ(t){return this.translateOnAxis(pm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sc.copy(t):sc.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(To,sc,this.up):bs.lookAt(sc,To,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),ma.setFromRotationMatrix(bs),this.quaternion.premultiply(ma.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mm),ga.child=t,this.dispatchEvent(ga),ga.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mx),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mm),ga.child=t,this.dispatchEvent(ga),ga.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,yx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,vx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new P(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sx={type:"move"},Ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},rc={h:0,s:0,l:0};function ud(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=df(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ud(a,r,t+1/3),this.g=ud(a,r,t),this.b=ud(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=pn){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let i=b0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return re.workingToColorSpace(On.copy(this),t),Math.round(jt(On.r*255,0,255))*65536+Math.round(jt(On.g*255,0,255))*256+Math.round(jt(On.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(On.copy(this),e);let i=On.r,s=On.g,r=On.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(On.copy(this),e),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=pn){re.workingToColorSpace(On.copy(this),t);let e=On.r,i=On.g,s=On.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ks),this.setHSL(Ks.h+t,Ks.s+e,Ks.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ks),t.getHSL(rc);let i=Oo(Ks.h,rc.h,e),s=Oo(Ks.s,rc.s,e),r=Oo(Ks.l,rc.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Ot;Ot.NAMES=b0;var Wo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ga=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wi=new P,Es=new P,dd=new P,Ts=new P,_a=new P,xa=new P,gm=new P,fd=new P,pd=new P,md=new P,gd=new De,_d=new De,xd=new De,Cs=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wi.subVectors(t,e),s.cross(Wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wi.subVectors(s,e),Es.subVectors(i,e),dd.subVectors(t,e);let a=Wi.dot(Wi),o=Wi.dot(Es),l=Wi.dot(dd),c=Es.dot(Es),h=Es.dot(dd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(a,Ts.y),l.addScaledVector(o,Ts.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return gd.setScalar(0),_d.setScalar(0),xd.setScalar(0),gd.fromBufferAttribute(t,e),_d.fromBufferAttribute(t,i),xd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gd,r.x),a.addScaledVector(_d,r.y),a.addScaledVector(xd,r.z),a}static isFrontFacing(t,e,i,s){return Wi.subVectors(i,e),Es.subVectors(t,e),Wi.cross(Es).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Wi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;_a.subVectors(s,i),xa.subVectors(r,i),fd.subVectors(t,i);let l=_a.dot(fd),c=xa.dot(fd);if(l<=0&&c<=0)return e.copy(i);pd.subVectors(t,s);let h=_a.dot(pd),d=xa.dot(pd);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(_a,a);md.subVectors(t,r);let f=_a.dot(md),m=xa.dot(md);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(xa,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return gm.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(gm,o);let p=1/(g+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(_a,a).addScaledVector(xa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),oc.subVectors(this.max,wo),ya.subVectors(t.a,wo),va.subVectors(t.b,wo),Ma.subVectors(t.c,wo),js.subVectors(va,ya),Qs.subVectors(Ma,va),Br.subVectors(ya,Ma);let e=[0,-js.z,js.y,0,-Qs.z,Qs.y,0,-Br.z,Br.y,js.z,0,-js.x,Qs.z,0,-Qs.x,Br.z,0,-Br.x,-js.y,js.x,0,-Qs.y,Qs.x,0,-Br.y,Br.x,0];return!yd(e,ya,va,Ma,oc)||(e=[1,0,0,0,1,0,0,0,1],!yd(e,ya,va,Ma,oc))?!1:(lc.crossVectors(js,Qs),e=[lc.x,lc.y,lc.z],yd(e,ya,va,Ma,oc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new P,new P,new P,new P,new P,new P,new P,new P],Xi=new P,ac=new as,ya=new P,va=new P,Ma=new P,js=new P,Qs=new P,Br=new P,wo=new P,oc=new P,lc=new P,zr=new P;function yd(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zr.fromArray(n,r);let o=s.x*Math.abs(zr.x)+s.y*Math.abs(zr.y)+s.z*Math.abs(zr.z),l=t.dot(zr),c=e.dot(zr),h=i.dot(zr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qe=new P,cc=new pt,bx=0,Yn=class extends $i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cf,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=t!==void 0?tu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cc.fromBufferAttribute(this,e),cc.applyMatrix3(t),this.setXY(e,cc.x,cc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):pf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):mf(t,this.array)}};var Xo=class extends Yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var $o=class extends Yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jt=class extends Yn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ex=new as,Ao=new P,vd=new P,Is=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ex.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);let e=Ao.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ao,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(vd)),this.expandByPoint(Ao.copy(t.center).sub(vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tx=0,Di=new Wt,Md=new yn,Sa=new P,pi=new as,Co=new as,fn=new P,Be=class n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(J_(t)?$o:Xo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,e,i){return Di.makeTranslation(t,e,i),this.applyMatrix4(Di),this}scale(t,e,i){return Di.makeScale(t,e,i),this.applyMatrix4(Di),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];pi.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Co.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(pi.min,Co.min),pi.expandByPoint(fn),fn.addVectors(pi.max,Co.max),pi.expandByPoint(fn)):(pi.expandByPoint(Co.min),pi.expandByPoint(Co.max))}pi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(Sa.fromBufferAttribute(t,c),fn.add(Sa)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;let h=new P,d=new P,u=new P,f=new pt,m=new pt,y=new pt,g=new P,p=new P;function _(D,R,U){c[D]=c[R]=c[U]=1,h.fromBufferAttribute(i,D),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,R),y.fromBufferAttribute(r,U),d.sub(h),u.sub(h),m.sub(f),y.sub(f);let F=1/(m.x*y.y-y.x*m.y);isFinite(F)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(F),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(F),o[D].add(g),o[R].add(g),o[U].add(g),l[D].add(p),l[R].add(p),l[U].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,R=b.length;D<R;++D){let U=b[D],F=U.start,G=U.count;for(let L=F,V=F+G;L<V;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new P,A=new P,w=new P,x=new P;function T(D){w.fromBufferAttribute(s,D),x.copy(w);let R=o[D];v.copy(R),v.sub(w.multiplyScalar(w.dot(R))).normalize(),A.crossVectors(x,R);let F=A.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,F)}for(let D=0,R=i.count;D<R;++D)c[D]&&T(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Yn(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cf,this.updateRanges=[],this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=_m(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=_m(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function _m(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ur()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var qn=new P,qo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?tu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):pf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):mf(t,this.data.array)}},Sd=new P,wx=new P,Ax=new Gt,mi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sd.subVectors(i,e).cross(wx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Sd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ax.getNormalMatrix(t),s=this.coplanarPoint(Sd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cx=0,os=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=eo,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Wd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pc,this.stencilZFail=Pc,this.stencilZPass=Pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ls=class extends os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ba,Ro=new P,Ea=new P,Ta=new P,wa=new pt,Po=new pt,E0=new Wt,hc=new P,Io=new P,uc=new P,xm=new pt,bd=new pt,ym=new pt,er=class extends yn{constructor(t=new Ls){if(super(),this.isSprite=!0,this.type="Sprite",ba===void 0){ba=new Be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wc(e,5);ba.setIndex([0,1,2,0,2,3]),ba.setAttribute("position",new qo(i,3,0,!1)),ba.setAttribute("uv",new qo(i,2,3,!1))}this.geometry=ba,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ea.setFromMatrixScale(this.matrixWorld),E0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ta.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ea.multiplyScalar(-Ta.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;dc(hc.set(-.5,-.5,0),Ta,a,Ea,s,r),dc(Io.set(.5,-.5,0),Ta,a,Ea,s,r),dc(uc.set(.5,.5,0),Ta,a,Ea,s,r),xm.set(0,0),bd.set(1,0),ym.set(1,1);let o=t.ray.intersectTriangle(hc,Io,uc,!1,Ro);if(o===null&&(dc(Io.set(-.5,.5,0),Ta,a,Ea,s,r),bd.set(0,1),o=t.ray.intersectTriangle(hc,uc,Io,!1,Ro),o===null))return;let l=t.ray.origin.distanceTo(Ro);l<t.near||l>t.far||e.push({distance:l,point:Ro.clone(),uv:Cs.getInterpolation(Ro,hc,Io,uc,xm,bd,ym,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function dc(n,t,e,i,s,r){wa.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Po.x=r*wa.x-s*wa.y,Po.y=s*wa.x+r*wa.y):Po.copy(wa),n.copy(t),n.x+=Po.x,n.y+=Po.y,n.applyMatrix4(E0)}var As=new P,Ed=new P,fc=new P,pc=new P,nr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=As.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,e),As.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ed.copy(t).add(e).multiplyScalar(.5),fc.copy(e).sub(t).normalize(),pc.copy(this.origin).sub(Ed);let r=t.distanceTo(e)*.5,a=-this.direction.dot(fc),o=pc.dot(this.direction),l=-pc.dot(fc),c=pc.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ed).addScaledVector(fc,u),f}intersectSphere(t,e){if(t.radius<0)return null;As.subVectors(t.center,this.origin);let i=As.dot(this.direction),s=As.dot(As)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=i.x-a.x,_=i.y-a.y,b=i.z-a.z,v=Math.abs(l),A=Math.abs(c),w=Math.abs(h),x,T,D,R,U,F,G,L,V,q,W,it;if(v>=A&&v>=w?(D=l,F=d,V=m,it=p,l>=0?(x=c,T=h,R=u,U=f,G=y,L=g,q=_,W=b):(x=h,T=c,R=f,U=u,G=g,L=y,q=b,W=_)):A>=w?(D=c,F=u,V=y,it=_,c>=0?(x=h,T=l,R=f,U=d,G=g,L=m,q=b,W=p):(x=l,T=h,R=d,U=f,G=m,L=g,q=p,W=b)):(D=h,F=f,V=g,it=b,h>=0?(x=l,T=c,R=d,U=u,G=m,L=y,q=p,W=_):(x=c,T=l,R=u,U=d,G=y,L=m,q=_,W=p)),D===0)return null;let $=x/D,Q=T/D,et=1/D,Rt=R-$*F,Xt=U-Q*F,J=G-$*V,yt=L-Q*V,Tt=q-$*it,Ft=W-Q*it,vt=Tt*yt-Ft*J,Yt=Rt*Ft-Xt*Tt,Xe=J*Xt-yt*Rt;if(s){if(vt<0||Yt<0||Xe<0)return null}else if((vt<0||Yt<0||Xe<0)&&(vt>0||Yt>0||Xe>0))return null;let kt=vt+Yt+Xe;if(kt===0)return null;let me=et*(vt*F+Yt*V+Xe*it);return(kt>0?me<0:me>0)?null:this.at(me/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ds=class extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vm=new Wt,kr=new nr,mc=new Is,Mm=new P,gc=new P,_c=new P,xc=new P,Td=new P,yc=new P,Sm=new P,vc=new P,Bn=class extends yn{constructor(t=new Be,e=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){yc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Td.fromBufferAttribute(d,t),a?yc.addScaledVector(Td,h):yc.addScaledVector(Td.sub(e),h))}e.add(yc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(r),kr.copy(t.ray).recast(t.near),!(mc.containsPoint(kr.origin)===!1&&(kr.intersectSphere(mc,Mm)===null||kr.origin.distanceToSquared(Mm)>(t.far-t.near)**2))&&(vm.copy(r).invert(),kr.copy(t.ray).applyMatrix4(vm),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kr)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,A=b;v<A;v+=3){let w=o.getX(v),x=o.getX(v+1),T=o.getX(v+2);s=Mc(this,p,t,i,c,h,d,w,x,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let _=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);s=Mc(this,a,t,i,c,h,d,_,b,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,A=b;v<A;v+=3){let w=v,x=v+1,T=v+2;s=Mc(this,p,t,i,c,h,d,w,x,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let _=g,b=g+1,v=g+2;s=Mc(this,a,t,i,c,h,d,_,b,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Rx(n,t,e,i,s,r,a,o){let l;if(t.side===jn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===cr,o),l===null)return null;vc.copy(o),vc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(vc);return c<e.near||c>e.far?null:{distance:c,point:vc.clone(),object:n}}function Mc(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,gc),n.getVertexPosition(l,_c),n.getVertexPosition(c,xc);let h=Rx(n,t,e,i,gc,_c,xc,Sm);if(h){let d=new P;Cs.getBarycoord(Sm,gc,_c,xc,d),s&&(h.uv=Cs.getInterpolatedAttribute(s,o,l,c,d,new pt)),r&&(h.uv1=Cs.getInterpolatedAttribute(r,o,l,c,d,new pt)),a&&(h.normal=Cs.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Cs.getNormal(gc,_c,xc,u.normal),h.face=u,h.barycoord=d}return h}var Yo=class extends Fn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=_n,h=_n,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=class extends Yn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Aa=new Wt,bm=new Wt,Sc=[],Em=new as,Px=new Wt,Lo=new Bn,Do=new Is,ir=class extends Bn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Px)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Aa),Em.copy(t.boundingBox).applyMatrix4(Aa),this.boundingBox.union(Em)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Is),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Aa),Do.copy(t.boundingSphere).applyMatrix4(Aa),this.boundingSphere.union(Do)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),t.ray.intersectsSphere(Do)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Aa),bm.multiplyMatrices(i,Aa),Lo.matrixWorld=bm,Lo.raycast(t,Sc);for(let a=0,o=Sc.length;a<o;a++){let l=Sc[a];l.instanceId=r,l.object=this,e.push(l)}Sc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yo(new Float32Array(s*this.count),s,this.count,yh,Oi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hr=new Is,Ix=new pt(.5,.5),bc=new P,sr=class{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,a=new mi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],_=r[12],b=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-m,A-_).normalize(),s[1].setComponents(c+a,f+h,p+m,A+_).normalize(),s[2].setComponents(c+o,f+d,p+y,A+b).normalize(),s[3].setComponents(c-o,f-d,p-y,A-b).normalize(),i)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,p-g,A-v).normalize();else if(s[4].setComponents(c-l,f-u,p-g,A-v).normalize(),e===Ni)s[5].setComponents(c+l,f+u,p+g,A+v).normalize();else if(e===Ua)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(t){Hr.center.set(0,0,0);let e=Ix.distanceTo(t.center);return Hr.radius=.7071067811865476+e,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(bc.x=s.normal.x>0?t.max.x:t.min.x,bc.y=s.normal.y>0?t.max.y:t.min.y,bc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Tm=new Wt,Xc=class n{constructor(){this.coordinateSystem=Ni,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Tm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new sr),i[s].setFromProjectionMatrix(Tm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new sr),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Gr=class extends os{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wm=new Wt,Nd=new nr,Ec=new Is,Tc=new P,Va=class extends yn{constructor(t=new Be,e=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,t.ray.intersectsSphere(Ec)===!1)return;wm.copy(s).invert(),Nd.copy(t.ray).applyMatrix4(wm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);Tc.fromBufferAttribute(d,g),Am(Tc,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,y=f;m<y;m++)Tc.fromBufferAttribute(d,m),Am(Tc,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Am(n,t,e,i,s,r,a){let o=Nd.distanceSqToPoint(n);if(o<e){let l=new P;Nd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Zo=class extends Fn{constructor(t=[],e=$r,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rr=class extends Fn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ns=class extends Fn{constructor(t,e,i=Yi,s,r,a,o=_n,l=_n,c,h=Ps,d=1){if(h!==Ps&&h!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends Ns{constructor(t,e=Yi,i=$r,s,r,a=_n,o=_n,l,c=Ps){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ko=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ye=class n extends Be{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function m(y,g,p,_,b,v,A,w,x,T,D){let R=v/x,U=A/T,F=v/2,G=A/2,L=w/2,V=x+1,q=T+1,W=0,it=0,$=new P;for(let Q=0;Q<q;Q++){let et=Q*U-G;for(let Rt=0;Rt<V;Rt++){let Xt=Rt*R-F;$[y]=Xt*_,$[g]=et*b,$[p]=L,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[p]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(Rt/x),d.push(1-Q/T),W+=1}}for(let Q=0;Q<T;Q++)for(let et=0;et<x;et++){let Rt=u+et+V*Q,Xt=u+et+V*(Q+1),J=u+(et+1)+V*(Q+1),yt=u+(et+1)+V*Q;l.push(Rt,Xt,yt),l.push(Xt,J,yt),it+=6}o.addGroup(f,it,D),f+=it,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var jo=class n extends Be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cs=class n extends Be{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=i/2,p=0;_(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function _(){let v=new P,A=new P,w=0,x=(e-t)/i;for(let T=0;T<=r;T++){let D=[],R=T/r,U=R*(e-t)+t;for(let F=0;F<=s;F++){let G=F/s,L=G*l+o,V=Math.sin(L),q=Math.cos(L);A.x=U*V,A.y=-R*i+g,A.z=U*q,d.push(A.x,A.y,A.z),v.set(V,x,q).normalize(),u.push(v.x,v.y,v.z),f.push(G,1-R),D.push(m++)}y.push(D)}for(let T=0;T<s;T++)for(let D=0;D<r;D++){let R=y[D][T],U=y[D+1][T],F=y[D+1][T+1],G=y[D][T+1];(t>0||D!==0)&&(h.push(R,U,G),w+=3),(e>0||D!==r-1)&&(h.push(U,F,G),w+=3)}c.addGroup(p,w,0),p+=w}function b(v){let A=m,w=new pt,x=new P,T=0,D=v===!0?t:e,R=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),m++;let U=m;for(let F=0;F<=s;F++){let L=F/s*l+o,V=Math.cos(L),q=Math.sin(L);x.x=D*q,x.y=g*R,x.z=D*V,d.push(x.x,x.y,x.z),u.push(0,R,0),w.x=V*.5+.5,w.y=q*.5*R+.5,f.push(w.x,w.y),m++}for(let F=0;F<s;F++){let G=A+F,L=U+F;v===!0?h.push(L,L+1,G):h.push(L+1,L,G),T+=3}c.addGroup(p,T,v===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class n extends cs{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qo=class n extends Be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new P,v=new P,A=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],b),f(e[w+1],v),f(e[w+2],A),l(b,v,A,_)}function l(_,b,v,A){let w=A+1,x=[];for(let T=0;T<=w;T++){x[T]=[];let D=_.clone().lerp(v,T/w),R=b.clone().lerp(v,T/w),U=w-T;for(let F=0;F<=U;F++)F===0&&T===w?x[T][F]=D:x[T][F]=D.clone().lerp(R,F/U)}for(let T=0;T<w;T++)for(let D=0;D<2*(w-T)-1;D++){let R=Math.floor(D/2);D%2===0?(u(x[T][R+1]),u(x[T+1][R]),u(x[T][R])):(u(x[T][R+1]),u(x[T+1][R+1]),u(x[T+1][R]))}}function c(_){let b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(_),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){let _=new P;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let v=g(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;a.push(v,1-A)}m(),d()}function d(){for(let _=0;_<a.length;_+=6){let b=a[_+0],v=a[_+2],A=a[_+4],w=Math.max(b,v,A),x=Math.min(b,v,A);w>.9&&x<.1&&(b<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,b){let v=_*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function m(){let _=new P,b=new P,v=new P,A=new P,w=new pt,x=new pt,T=new pt;for(let D=0,R=0;D<r.length;D+=9,R+=6){_.set(r[D+0],r[D+1],r[D+2]),b.set(r[D+3],r[D+4],r[D+5]),v.set(r[D+6],r[D+7],r[D+8]),w.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),T.set(a[R+4],a[R+5]),A.copy(_).add(b).add(v).divideScalar(3);let U=g(A);y(w,R+0,_,U),y(x,R+2,b,U),y(T,R+4,v,U)}}function y(_,b,v,A){A<0&&_.x===1&&(a[b]=_.x-1),v.x===0&&v.z===0&&(a[b]=A/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Wa=class n extends Qo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new Wt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},tl=class extends Ui{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$c=class extends tl{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _f(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Cm=new P,Rm=new P,wd=new _f,Ad=new _f,Cd=new _f,Xa=class extends Ui{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Rm.subVectors(s[0],s[1]).add(s[0]),c=Rm);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),wd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),Ad.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Cd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ad.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Cd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(wd.calc(l),Ad.calc(l),Cd.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pm(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Lx(n,t){let e=1-n;return e*e*t}function Dx(n,t){return 2*(1-n)*n*t}function Nx(n,t){return n*n*t}function Fo(n,t,e,i){return Lx(n,t)+Dx(n,e)+Nx(n,i)}function Ux(n,t){let e=1-n;return e*e*e*t}function Ox(n,t){let e=1-n;return 3*e*e*n*t}function Fx(n,t){return 3*(1-n)*n*n*t}function Bx(n,t){return n*n*n*t}function Bo(n,t,e,i,s){return Ux(n,t)+Ox(n,e)+Fx(n,i)+Bx(n,s)}var qc=class extends Ui{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Bo(t,s.x,r.x,a.x,o.x),Bo(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yc=class extends Ui{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Bo(t,s.x,r.x,a.x,o.x),Bo(t,s.y,r.y,a.y,o.y),Bo(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends Ui{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends Ui{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends Ui{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Fo(t,s.x,r.x,a.x),Fo(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends Ui{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Fo(t,s.x,r.x,a.x),Fo(t,s.y,r.y,a.y),Fo(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends Ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Pm(o,l.x,c.x,h.x,d.x),Pm(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},zx=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:Xa,CubicBezierCurve:qc,CubicBezierCurve3:Yc,EllipseCurve:tl,LineCurve:Zc,LineCurve3:Jc,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:el,SplineCurve:jc});var $a=class n extends Qo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Us=class n extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let _=p*u-a;for(let b=0;b<c;b++){let v=b*d-r;m.push(v,-_,0),y.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let b=_+c*p,v=_+c*(p+1),A=_+1+c*(p+1),w=_+1+c*p;f.push(b,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},nl=class n extends Be{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,m=new pt;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let _=p+g,b=_,v=_+i+1,A=_+i+2,w=_+1;o.push(b,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var zn=class n extends Be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let _=[],b=p/i,v=a+b*o,A=t*Math.cos(v),w=Math.sqrt(t*t-A*A),x=0;p===0&&a===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let D=T/e,R=s+D*r;d.x=-w*Math.cos(R),d.y=A,d.z=w*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(D+x,1-b),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let b=h[p][_+1],v=h[p][_],A=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(b,v,w),(p!==i-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ai=class n extends Be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,m=new P;for(let y=0;y<=i;y++){let g=a+y/i*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,_=(s+1)*(y-1)+g-1,b=(s+1)*(y-1)+g,v=(s+1)*y+g;l.push(p,_,v),l.push(_,b,v)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var qa=class n extends Be{constructor(t=new el(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new pt,h=new P,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function y(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),_(),p()}function g(b){h=t.getPointAt(b/e,h);let v=a.normals[b],A=a.binormals[b];for(let w=0;w<=s;w++){let x=w/s*Math.PI*2,T=Math.sin(x),D=-Math.cos(x);l.x=D*v.x+T*A.x,l.y=D*v.y+T*A.y,l.z=D*v.z+T*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let v=1;v<=s;v++){let A=(s+1)*(b-1)+(v-1),w=(s+1)*b+(v-1),x=(s+1)*b+v,T=(s+1)*(b-1)+v;m.push(A,w,T),m.push(w,x,T)}}function _(){for(let b=0;b<=e;b++)for(let v=0;v<=s;v++)c.x=b/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new zx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Yr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Im(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Im(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function kn(n){let t={};for(let e=0;e<n.length;e++){let i=Yr(n[e]);for(let s in i)t[s]=i[s]}return t}function Im(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var T0={clone:Yr,merge:kn},Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hs=class extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=kx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Wt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qc=class extends hs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jn=class extends os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var th=class extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eh=class extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ca(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ar=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nh=class extends ar{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Id,endingEnd:Id}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ld:r=t,o=2*e-i;break;case Dd:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ld:a=t,l=2*i-e;break;case Dd:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,_=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,b=(-1-f)*g+(1.5+f)*y+.5*m,v=f*g-f*y;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+_*a[c+A]+b*a[l+A]+v*a[d+A];return r}},ih=class extends ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},sh=class extends ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rh=class extends ar{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=f*u+m*2,_=d[p],b=d[p+1],v=t*u+m*2,A=h[v],w=h[v+1],x=Wx(i,e,_,A,s);r[m]=w0(x,y,b,w,g)}return r}};function w0(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Vx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Wx(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=w0(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Vx(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var _i=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ca(e,this.TimeBufferType),this.values=Ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ca(t.times,Array),values:Ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),wc(t.settings)&&(i.settings={inTangents:Ca(t.settings.inTangents,Array),outTangents:Ca(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zo:e=this.InterpolantFactoryMethodDiscrete;break;case kc:e=this.InterpolantFactoryMethodLinear;break;case Rc:e=this.InterpolantFactoryMethodSmooth;break;case Pd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return kc;case this.InterpolantFactoryMethodSmooth:return Rc;case this.InterpolantFactoryMethodBezier:return Pd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;wc(this.settings)&&(Lm(this.settings.inTangents,t),Lm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;wc(this.settings)&&(Dm(this.settings.inTangents,t),Dm(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&K_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rc,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,wc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lm(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Dm(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=kc;var or=class extends _i{constructor(t,e,i){super(t,e,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=zo;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}};ah.prototype.ValueTypeName="color";var oh=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}};oh.prototype.ValueTypeName="number";var lh=class extends ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},il=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new lh(this.times,this.values,this.getValueSize(),t)}};il.prototype.ValueTypeName="quaternion";il.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends _i{constructor(t,e,i){super(t,e,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=zo;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var ch=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}};ch.prototype.ValueTypeName="vector";var Ic={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Nm(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Nm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Nm(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var hh=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},A0=new hh,Ya=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=new WeakMap,uh=class extends Ya{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ic.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ra.get(a);d===void 0&&(d=[],Ra.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=Oa("img");function l(){h(),e&&e(this);let d=Ra.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Ra.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Ic.remove(`image:${t}`);let u=Ra.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}Ra.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ic.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var sl=class extends Ya{constructor(t){super(t)}load(t,e,i,s){let r=new Fn,a=new uh(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Za=class extends yn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ja=class extends Za{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rd=new Wt,Um=new P,Om=new P,rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Um.setFromMatrixPosition(t.matrixWorld),e.position.copy(Um),Om.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Om),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Rd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Rd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ua||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ac=new P,Cc=new xn,ss=new P,al=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ac,Cc,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Cc,ss.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ac,Cc,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Cc,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new P,Fm=new pt,Bm=new pt,mn=class extends al{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tr.x,tr.y).multiplyScalar(-t/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-t/tr.z)}getViewSize(t,e){return this.getViewBounds(t,Fm,Bm),e.subVectors(Bm,Fm)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ud=class extends rl{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},ol=class extends Za{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ll=class extends al{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Od=class extends rl{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends Za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Od}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Pa=-90,Ia=1,ja=class extends yn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Pa,Ia,t,e);s.layers=this.layers,this.add(s);let r=new mn(Pa,Ia,t,e);r.layers=this.layers,this.add(r);let a=new mn(Pa,Ia,t,e);a.layers=this.layers,this.add(a);let o=new mn(Pa,Ia,t,e);o.layers=this.layers,this.add(o);let l=new mn(Pa,Ia,t,e);l.layers=this.layers,this.add(l);let c=new mn(Pa,Ia,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},dh=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var yf="\\[\\]\\.:\\/",Xx=new RegExp("["+yf+"]","g"),vf="[^"+yf+"]",$x="[^"+yf.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",vf),Yx=/(WCOD+)?/.source.replace("WCOD",$x),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vf),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vf),Kx=new RegExp("^"+qx+Yx+Zx+Jx+"$"),jx=["material","materials","bones","map"],Fd=class{constructor(t,e,i){let s=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(t){let e=Kx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Fd;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NE=new Float32Array(1);var zm=new Wt,cl=class{constructor(t,e,i=0,s=1/0){this.ray=new nr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(t,e=!0,i=[]){return Bd(t,this,i,e),i.sort(km),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bd(t[s],this,i,e);return i.sort(km),i}};function km(n,t){return n.distance-t.distance}function Bd(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Bd(r[a],t,e,!0)}}var Qa=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zd=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var hl=class extends $i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Mf(n,t,e,i){let s=Qx(i);switch(e){case sf:return n*t;case yh:return n*t/s.components*s.byteLength;case vh:return n*t/s.components*s.byteLength;case hr:return n*t*2/s.components*s.byteLength;case Mh:return n*t*2/s.components*s.byteLength;case rf:return n*t*3/s.components*s.byteLength;case Ji:return n*t*4/s.components*s.byteLength;case Sh:return n*t*4/s.components*s.byteLength;case fl:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eh:case wh:return Math.max(n,16)*Math.max(t,8)/4;case bh:case Th:return Math.max(n,8)*Math.max(t,8)/2;case Ah:case Ch:case Ph:case Ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Rh:case _l:case Lh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case kh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qh:case Yh:case Zh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jh:case Kh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xl:case jh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qx(n){switch(n){case oi:case Qd:return{byteLength:1,components:1};case so:case tf:case Zi:return{byteLength:2,components:1};case _h:case xh:return{byteLength:2,components:4};case Yi:case gh:case Oi:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Z0(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ey(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
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
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
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
#endif`,Qy=`uniform sampler2D dfgLUT;
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
}`,tv=`
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uv=`#if defined( USE_POINTS_UV )
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
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS )
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
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kv=`float getShadowMask() {
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
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform float backgroundBlurriness;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,cM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,yM=`#define MATCAP
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
}`,vM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,bM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,TM=`#define STANDARD
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
}`,wM=`#define STANDARD
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
}`,AM=`#define TOON
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
}`,CM=`#define TOON
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
}`,RM=`uniform float size;
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
}`,PM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:sy,alphamap_pars_fragment:ry,alphatest_fragment:ay,alphatest_pars_fragment:oy,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:hy,batching_vertex:uy,begin_vertex:dy,beginnormal_vertex:fy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:vy,color_fragment:My,color_pars_fragment:Sy,color_pars_vertex:by,color_vertex:Ey,common:Ty,defaultnormal_vertex:wy,displacementmap_pars_vertex:Ay,displacementmap_vertex:Cy,emissivemap_fragment:Ry,emissivemap_pars_fragment:Py,colorspace_fragment:Iy,colorspace_pars_fragment:Ly,envmap_fragment:Dy,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Uy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:qy,envmap_vertex:Fy,fog_vertex:By,fog_pars_vertex:zy,fog_fragment:ky,fog_pars_fragment:Hy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:Xy,lights_pars_begin:$y,lights_toon_fragment:Yy,lights_toon_pars_fragment:Zy,lights_phong_fragment:Jy,lights_phong_pars_fragment:Ky,lights_physical_fragment:jy,lights_physical_pars_fragment:Qy,lights_fragment_begin:tv,lights_fragment_maps:ev,lights_fragment_end:nv,lightprobes_pars_fragment:iv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:rv,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:ov,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:hv,map_particle_pars_fragment:uv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:fv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:gv,morphtarget_pars_vertex:_v,morphtarget_vertex:xv,normal_fragment_begin:yv,normal_fragment_maps:vv,normal_pars_fragment:Mv,normal_pars_vertex:Sv,normal_vertex:bv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:wv,clearcoat_pars_fragment:Av,iridescence_pars_fragment:Cv,opaque_fragment:Rv,packing:Pv,premultiplied_alpha_fragment:Iv,project_vertex:Lv,dithering_fragment:Dv,dithering_pars_fragment:Nv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Bv,shadowmap_vertex:zv,shadowmask_pars_fragment:kv,skinbase_vertex:Hv,skinning_pars_vertex:Gv,skinning_vertex:Vv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:$v,tonemapping_fragment:qv,tonemapping_pars_fragment:Yv,transmission_fragment:Zv,transmission_pars_fragment:Jv,uv_pars_fragment:Kv,uv_pars_vertex:jv,uv_vertex:Qv,worldpos_vertex:tM,background_vert:eM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:sM,cube_vert:rM,cube_frag:aM,depth_vert:oM,depth_frag:lM,distance_vert:cM,distance_frag:hM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:xM,meshmatcap_vert:yM,meshmatcap_frag:vM,meshnormal_vert:MM,meshnormal_frag:SM,meshphong_vert:bM,meshphong_frag:EM,meshphysical_vert:TM,meshphysical_frag:wM,meshtoon_vert:AM,meshtoon_frag:CM,points_vert:RM,points_frag:PM,shadow_vert:IM,shadow_frag:LM,sprite_vert:DM,sprite_frag:NM},xt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},fs={basic:{uniforms:kn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:kn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:kn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:kn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:kn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:kn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:kn([xt.points,xt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:kn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:kn([xt.common,xt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:kn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:kn([xt.sprite,xt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:kn([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:kn([xt.lights,xt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};fs.physical={uniforms:kn([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var eu={r:0,b:0,g:0},UM=new Wt,J0=new Gt;J0.set(-1,0,0,0,1,0,0,0,1);function OM(n,t,e,i,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let v=_.backgroundBlurriness>0;b=t.get(b,v)}return b}function m(_){let b=!1,v=f(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),b=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,b){let v=f(b);v&&v.isCubeTexture?(c===void 0&&(c=new Bn(new Ye(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:Yr(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(J0),c.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Bn(new Us(2,2),new hs({name:"BackgroundMaterial",uniforms:Yr(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(eu,xf(n)),e.buffers.color.setClear(eu.r,eu.g,eu.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:y,dispose:p}}function FM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(U,F,G,L,V){let q=!1,W=d(U,L,G,F);r!==W&&(r=W,c(r.object)),q=f(U,L,G,V),q&&m(U,L,G,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(U,F,G,L),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function d(U,F,G,L){let V=L.wireframe===!0,q=i[F.id];q===void 0&&(q={},i[F.id]=q);let W=U.isInstancedMesh===!0?U.id:0,it=q[W];it===void 0&&(it={},q[W]=it);let $=it[G.id];$===void 0&&($={},it[G.id]=$);let Q=$[V];return Q===void 0&&(Q=u(l()),$[V]=Q),Q}function u(U){let F=[],G=[],L=[];for(let V=0;V<e;V++)F[V]=0,G[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,F,G,L){let V=r.attributes,q=F.attributes,W=0,it=G.getAttributes();for(let $ in it)if(it[$].location>=0){let et=V[$],Rt=q[$];if(Rt===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Rt=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Rt=U.instanceColor)),et===void 0||et.attribute!==Rt||Rt&&et.data!==Rt.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function m(U,F,G,L){let V={},q=F.attributes,W=0,it=G.getAttributes();for(let $ in it)if(it[$].location>=0){let et=q[$];et===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let Rt={};Rt.attribute=et,et&&et.data&&(Rt.data=et.data),V[$]=Rt,W++}r.attributes=V,r.attributesNum=W,r.index=L}function y(){let U=r.newAttributes;for(let F=0,G=U.length;F<G;F++)U[F]=0}function g(U){p(U,0)}function p(U,F){let G=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;G[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),V[U]!==F&&(n.vertexAttribDivisor(U,F),V[U]=F)}function _(){let U=r.newAttributes,F=r.enabledAttributes;for(let G=0,L=F.length;G<L;G++)F[G]!==U[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function b(U,F,G,L,V,q,W){W===!0?n.vertexAttribIPointer(U,F,G,V,q):n.vertexAttribPointer(U,F,G,L,V,q)}function v(U,F,G,L){y();let V=L.attributes,q=G.getAttributes(),W=F.defaultAttributeValues;for(let it in q){let $=q[it];if($.location>=0){let Q=V[it];if(Q===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let et=Q.normalized,Rt=Q.itemSize,Xt=t.get(Q);if(Xt===void 0)continue;let J=Xt.buffer,yt=Xt.type,Tt=Xt.bytesPerElement,Ft=yt===n.INT||yt===n.UNSIGNED_INT||Q.gpuType===gh;if(Q.isInterleavedBufferAttribute){let vt=Q.data,Yt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,Xe=Q.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let kt=0;kt<$.locationSize;kt++)p($.location+kt,vt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let kt=0;kt<$.locationSize;kt++)g($.location+kt);n.bindBuffer(n.ARRAY_BUFFER,J);for(let kt=0;kt<$.locationSize;kt++)b($.location+kt,Rt/$.locationSize,yt,et,Yt*Tt,(Xe+Rt/$.locationSize*kt)*Tt,Ft)}else{if(Q.isInstancedBufferAttribute){for(let vt=0;vt<$.locationSize;vt++)p($.location+vt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let vt=0;vt<$.locationSize;vt++)g($.location+vt);n.bindBuffer(n.ARRAY_BUFFER,J);for(let vt=0;vt<$.locationSize;vt++)b($.location+vt,Rt/$.locationSize,yt,et,Rt*Tt,Rt/$.locationSize*vt*Tt,Ft)}}else if(W!==void 0){let et=W[it];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv($.location,et);break;case 3:n.vertexAttrib3fv($.location,et);break;case 4:n.vertexAttrib4fv($.location,et);break;default:n.vertexAttrib1fv($.location,et)}}}}_()}function A(){D();for(let U in i){let F=i[U];for(let G in F){let L=F[G];for(let V in L){let q=L[V];for(let W in q)h(q[W].object),delete q[W];delete L[V]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let G in F){let L=F[G];for(let V in L){let q=L[V];for(let W in q)h(q[W].object),delete q[W];delete L[V]}}delete i[U.id]}function x(U){for(let F in i){let G=i[F];for(let L in G){let V=G[L];if(V[U.id]===void 0)continue;let q=V[U.id];for(let W in q)h(q[W].object),delete q[W];delete V[U.id]}}}function T(U){for(let F in i){let G=i[F],L=U.isInstancedMesh===!0?U.id:0,V=G[L];if(V!==void 0){for(let q in V){let W=V[q];for(let it in W)h(W[it].object),delete W[it];delete V[q]}delete G[L],Object.keys(G).length===0&&delete i[F]}}}function D(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function BM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Ji&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let T=x===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==oi&&x!==Oi&&!T&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,maxSamples:A,samples:w}}function kM(n){let t=this,e=null,i=0,s=!1,r=!1,a=new mi,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,b=_*4,v=p.clippingState||null;l.value=v,v=h(m,u,b,f);for(let A=0;A!==b;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,v=f;b!==y;++b,v+=4)a.copy(d[b]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Ml=class extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Zo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new hs({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:Vr});r.uniforms.tEquirect.value=e;let a=new Bn(s,r),o=e.minFilter;return e.minFilter===Os&&(e.minFilter=Zn),new ja(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},C0=256,HM=3,GM=20,K0=256,j0=16,VM=3,WM=new P,XM=new Ot,iu=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ja(1,10,null),this._boxMesh=new Bn(new Ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=WM}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(XM));let g=new ja(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(C0,ff(t))}_fromTexture(t,e){t.mapping===$r||t.mapping===io?this._setSize(t.image.length===0?C0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=R0(t,!1,!1),i=Math.log2(t)-HM;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=R0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===$r||t.mapping===io?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=P0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$M(),this._integrationMaterial=qM());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/j0);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-VM)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(K0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=YM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function R0(n,t,e){return new Ml(n,{minFilter:Os,generateMipmaps:t,type:Zi,colorSpace:ko,depthBuffer:e})}function bl(n,t,e){return new hs({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:jn,blending:Vr,depthTest:!1,depthWrite:!1})}function $M(){return bl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${K0}u

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
	`)}function qM(){return bl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:j0}},`

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
	`)}function YM(){return bl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${GM}
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
	`)}function P0(){return bl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function I0(){return bl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ZM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===fh||f===ph)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Ml(m.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===fh||f===ph,y=f===$r||f===io;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new iu(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return m&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new iu(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===fh?u.mapping=$r:f===ph&&(u.mapping=io),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function JM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&No("WebGLRenderer: "+i+" extension not supported."),s}}}function KM(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let y=r.get(m);y&&(t.remove(y),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(m){let y=m.attributes;for(let g in y)t.update(y[g],n.ARRAY_BUFFER)}function d(m){let y=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let _=y!==null?y.array.length:g.array.length/3-1,b=g.count>=65535?$o:Xo,v=new b(Math.ceil(_/3)*6,1),A=v.array;if(y!==null){let x=y.array;p=y.version;for(let T=0,D=0;T<_;T+=3){let R=x[T+0],U=x[T+1],F=x[T+2];A[D++]=R,A[D++]=U,A[D++]=U,A[D++]=F,A[D++]=F,A[D++]=R}}else{p=g.version;for(let x=0,T=0;x<_;x+=3){let D=x+0,R=x+1,U=x+2;A[T++]=D,A[T++]=R,A[T++]=R,A[T++]=U,A[T++]=U,A[T++]=D}}v.version=p;let w=r.get(m);w&&t.remove(w),r.set(m,v)}function u(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function jM(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function QM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function tS(n,t,e){let i=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),y===!0&&(b=3);let v=o.attributes.position.count*b,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*A*4*d),x=new Vo(w,v,A,d);x.type=Oi,x.needsUpdate=!0;let T=b*4;for(let R=0;R<d;R++){let U=g[R],F=p[R],G=_[R],L=v*A*4*R;for(let V=0;V<U.count;V++){let q=V*T;f===!0&&(s.fromBufferAttribute(U,V),w[L+q+0]=s.x,w[L+q+1]=s.y,w[L+q+2]=s.z,w[L+q+3]=0),m===!0&&(s.fromBufferAttribute(F,V),w[L+q+4]=s.x,w[L+q+5]=s.y,w[L+q+6]=s.z,w[L+q+7]=0),y===!0&&(s.fromBufferAttribute(G,V),w[L+q+8]=s.x,w[L+q+9]=s.y,w[L+q+10]=s.z,w[L+q+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new pt(v,A)},i.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function eS(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var nS={[$d]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[Yd]:"CINEON_TONE_MAPPING",[no]:"ACES_FILMIC_TONE_MAPPING",[Jd]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[Zd]:"CUSTOM_TONE_MAPPING"};function iS(n,t,e,i,s,r){let a=new gi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Be;h.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let d=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Bn(h,d),f=new ll(-1,1,1,-1,0,1),m=null,y=null,g=!1,p,_=null,b=[],v=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let x=0;x<b.length;x++){let T=b[x];T.setSize&&T.setSize(A,w)}},this.setEffects=function(A){b=A,v=b.length>0&&b[0].isRenderPass===!0;let w=a.width,x=a.height;b.length>0&&o===null&&(o=new gi(w,x,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),l=new gi(w,x,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&b.some(D=>D.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Ns(w,x),r===!0&&(c.format=Fs,c.type=qr)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let D=0;D<b.length;D++){let R=b[D];R.setSize&&R.setSize(w,x),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,w){if(g||A.toneMapping===us&&b.length===0)return!1;if(_=w,w!==null){let x=w.width,T=w.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return v===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=us,!0},this.hasRenderPass=function(){return v},this.end=function(A,w){A.toneMapping=p,g=!0;let x=a,T=o;for(let D=0;D<b.length;D++){let R=b[D];R.enabled!==!1&&(R.render(A,T,x,w),R.needsSwap!==!1&&(x=T,T=T===o?l:o))}if(m!==A.outputColorSpace||y!==A.toneMapping){m=A.outputColorSpace,y=A.toneMapping,d.defines={},re.getTransfer(m)===fe&&(d.defines.SRGB_TRANSFER="");let D=nS[y];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(_),A.render(u,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Q0=new Fn,tg=new Ns(1,1),eg=new Jo(1),ng=new Vo,ig=new Vc,sg=new Zo,L0=[],D0=[],N0=new Float32Array(16),U0=new Float32Array(9),O0=new Float32Array(4);function ao(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=L0[s];if(r===void 0&&(r=new Float32Array(s),L0[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function su(n,t){let e=D0[t];e===void 0&&(e=new Int32Array(t),D0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function aS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function oS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function lS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;O0.set(i),n.uniformMatrix2fv(this.addr,!1,O0),rn(e,i)}}function cS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;U0.set(i),n.uniformMatrix3fv(this.addr,!1,U0),rn(e,i)}}function hS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;N0.set(i),n.uniformMatrix4fv(this.addr,!1,N0),rn(e,i)}}function uS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function fS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function pS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function mS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function _S(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function xS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function ru(n){return n.version===0&&(n.compareFunction=lf,n.needsUpdate=!0),n}function yS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ru(tg):r=Q0,e.setTexture2D(t||r,s)}function vS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ig,s)}function MS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ru(eg):r=sg,e.setTextureCube(t||r,s)}function SS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ng,s)}function bS(n){switch(n){case 5126:return sS;case 35664:return rS;case 35665:return aS;case 35666:return oS;case 35674:return lS;case 35675:return cS;case 35676:return hS;case 5124:case 35670:return uS;case 35667:case 35671:return dS;case 35668:case 35672:return fS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return SS}}function ES(n,t){n.uniform1fv(this.addr,t)}function TS(n,t){let e=ao(t,this.size,2);n.uniform2fv(this.addr,e)}function wS(n,t){let e=ao(t,this.size,3);n.uniform3fv(this.addr,e)}function AS(n,t){let e=ao(t,this.size,4);n.uniform4fv(this.addr,e)}function CS(n,t){let e=ao(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function RS(n,t){let e=ao(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function PS(n,t){let e=ao(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function IS(n,t){n.uniform1iv(this.addr,t)}function LS(n,t){n.uniform2iv(this.addr,t)}function DS(n,t){n.uniform3iv(this.addr,t)}function NS(n,t){n.uniform4iv(this.addr,t)}function US(n,t){n.uniform1uiv(this.addr,t)}function OS(n,t){n.uniform2uiv(this.addr,t)}function FS(n,t){n.uniform3uiv(this.addr,t)}function BS(n,t){n.uniform4uiv(this.addr,t)}function zS(n,t,e){let i=this.cache,s=t.length,r=su(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ru(tg):a=Q0;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function kS(n,t,e){let i=this.cache,s=t.length,r=su(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ig,r[a])}function HS(n,t,e){let i=this.cache,s=t.length,r=su(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ru(eg):a=sg;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function GS(n,t,e){let i=this.cache,s=t.length,r=su(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ng,r[a])}function VS(n){switch(n){case 5126:return ES;case 35664:return TS;case 35665:return wS;case 35666:return AS;case 35674:return CS;case 35675:return RS;case 35676:return PS;case 5124:case 35670:return IS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return OS;case 36295:return FS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return GS}}var Ef=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=bS(e.type)}},Tf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VS(e.type)}},wf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Sf=/(\w+)(\])?(\[|\.)?/g;function F0(n,t){n.seq.push(t),n.map[t.id]=t}function WS(n,t,e){let i=n.name,s=i.length;for(Sf.lastIndex=0;;){let r=Sf.exec(i),a=Sf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){F0(e,c===void 0?new Ef(o,n,t):new Tf(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new wf(o),F0(e,d)),e=d}}}var ro=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);WS(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function B0(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var XS=37297,$S=0;function qS(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var z0=new Gt;function YS(n){re._getMatrix(z0,re.workingColorSpace,n);let t=`mat3( ${z0.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Ho:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function k0(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qS(n.getShaderSource(t),o)}else return r}function ZS(n,t){let e=YS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var JS={[$d]:"Linear",[qd]:"Reinhard",[Yd]:"Cineon",[no]:"ACESFilmic",[Jd]:"AgX",[Kd]:"Neutral",[Zd]:"Custom"};function KS(n,t){let e=JS[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nu=new P;function jS(){re.getLuminanceCoefficients(nu);let n=nu.x.toFixed(4),t=nu.y.toFixed(4),e=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function t1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function e1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function vl(n){return n!==""}function H0(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function G0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(n){return n.replace(n1,i1)}function i1(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Af(e)}var s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(n){return n.replace(s1,r1)}function r1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function W0(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var a1={[ul]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function o1(n){return a1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l1={[io]:"ENVMAP_MODE_REFRACTION"};function c1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":l1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h1={[Xd]:"ENVMAP_BLENDING_MULTIPLY",[l0]:"ENVMAP_BLENDING_MIX",[c0]:"ENVMAP_BLENDING_ADD"};function u1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":h1[n.combine]||"ENVMAP_BLENDING_NONE"}function d1(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=o1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=c1(e),d=u1(e),u=QS(e),f=t1(r),m=s.createProgram(),y,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vl).join(`
`),g.length>0&&(g+=`
`)):(y=[W0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),g=[W0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?Qt.tonemapping_pars_fragment:"",e.toneMapping!==us?KS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ZS("linearToOutputTexel",e.outputColorSpace),jS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vl).join(`
`)),a=Af(a),a=H0(a,e),a=G0(a,e),o=Af(o),o=H0(o,e),o=G0(o,e),a=V0(a),o=V0(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=p+y+a,b=p+g+o,v=B0(s,s.VERTEX_SHADER,_),A=B0(s,s.FRAGMENT_SHADER,b);s.attachShader(m,v),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(R){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(v)||"",G=s.getShaderInfoLog(A)||"",L=U.trim(),V=F.trim(),q=G.trim(),W=!0,it=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,v,A);else{let $=k0(s,v,"vertex"),Q=k0(s,A,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+$+`
`+Q)}else L!==""?zt("WebGLProgram: Program Info Log:",L):(V===""||q==="")&&(it=!1);it&&(R.diagnostics={runnable:W,programLog:L,vertexShader:{log:V,prefix:y},fragmentShader:{log:q,prefix:g}})}s.deleteShader(v),s.deleteShader(A),x=new ro(s,m),T=e1(s,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,XS)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$S++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=A,this}var f1=0,Cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Rf(t),e.set(t,i)),i}},Rf=class{constructor(t){this.id=f1++,this.code=t,this.usedTimes=0}};function p1(n){return n===hr||n===_l||n===xl}function m1(n,t,e,i,s,r){let a=new ka,o=new Cf,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,T,D,R,U,F){let G=R.fog,L=U.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||V,q),it=u[x.type],$=i.precision;x.precision!==null&&($=i.getMaxPrecision(x.precision),$!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));let Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=Q!==void 0?Q.length:0,Rt=0;L.morphAttributes.position!==void 0&&(Rt=1),L.morphAttributes.normal!==void 0&&(Rt=2),L.morphAttributes.color!==void 0&&(Rt=3);let Xt,J,yt,Tt;if(it){let _t=fs[it];Xt=_t.vertexShader,J=_t.fragmentShader}else{Xt=x.vertexShader,J=x.fragmentShader;let _t=o.getVertexShaderStage(x),ge=o.getFragmentShaderStage(x);o.update(x,_t,ge),yt=_t.id,Tt=ge.id}let Ft=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Yt=U.isInstancedMesh===!0,Xe=U.isBatchedMesh===!0,kt=!!x.map,me=!!x.matcap,ye=!!W,ne=ye&&W.isPMREMTexture===!0,Tn=!!x.aoMap,en=!!x.lightMap,si=!!x.bumpMap&&x.wireframe===!1,Oe=!!x.normalMap,is=!!x.displacementMap,hn=!!x.emissiveMap,Ri=!!x.metalnessMap,Pi=!!x.roughnessMap,Ii=x.anisotropy>0,O=x.clearcoat>0,Li=x.diffuseRoughness>0,Ie=x.dispersion>0,Le=x.retroreflectivity>0,mt=x.iridescence>0,nn=x.sheen>0,Bt=x.transmission>0,Vt=Ii&&!!x.anisotropyMap,C=O&&!!x.clearcoatMap,M=O&&!!x.clearcoatNormalMap,z=O&&!!x.clearcoatRoughnessMap,nt=Li&&!!x.diffuseRoughnessMap,j=mt&&!!x.iridescenceMap,ot=mt&&!!x.iridescenceThicknessMap,dt=nn&&!!x.sheenColorMap,Y=nn&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ct=!!x.specularColorMap,I=!!x.specularIntensityMap,K=Bt&&!!x.transmissionMap,X=Bt&&!!x.thicknessMap,ht=!!x.gradientMap,rt=!!x.alphaMap,lt=x.alphaTest>0,Dt=!!x.alphaHash,Kt=!!x.extensions,st=us;x.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(st=n.toneMapping);let Nt=ne?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Zt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:J,defines:x.defines,customVertexShaderID:yt,customFragmentShaderID:Tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:Xe,batchingColor:Xe&&U._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&U.instanceColor!==null,instancingMorph:Yt&&U.morphTexture!==null,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:me,envMap:ye,envMapMode:ye&&W.mapping,envMapPMREM:ne,envMapMaxLod:ne?Nt.length-1:null,envMapSize:ne?Nt[0].width:null,aoMap:Tn,lightMap:en,bumpMap:si,normalMap:Oe,displacementMap:is,emissiveMap:hn,normalMapObjectSpace:Oe&&x.normalMapType===d0,normalMapTangentSpace:Oe&&x.normalMapType===Qh,packedNormalMap:Oe&&x.normalMapType===Qh&&p1(x.normalMap.format),metalnessMap:Ri,roughnessMap:Pi,anisotropy:Ii,anisotropyMap:Vt,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:Li,diffuseRoughnessMap:nt,dispersion:Ie,retroreflection:Le,iridescence:mt,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:nn,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ct,specularIntensityMap:I,transmission:Bt,transmissionMap:K,thicknessMap:X,gradientMap:ht,opaque:x.transparent===!1&&x.blending===eo&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Dt,combine:x.combine,mapUv:kt&&f(x.map.channel),aoMapUv:Tn&&f(x.aoMap.channel),lightMapUv:en&&f(x.lightMap.channel),bumpMapUv:si&&f(x.bumpMap.channel),normalMapUv:Oe&&f(x.normalMap.channel),displacementMapUv:is&&f(x.displacementMap.channel),emissiveMapUv:hn&&f(x.emissiveMap.channel),metalnessMapUv:Ri&&f(x.metalnessMap.channel),roughnessMapUv:Pi&&f(x.roughnessMap.channel),anisotropyMapUv:Vt&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:ct&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:K&&f(x.transmissionMap.channel),thicknessMapUv:X&&f(x.thicknessMap.channel),alphaMapUv:rt&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Oe||Ii),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(kt||rt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:hn&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||Xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function y(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(T,x),p(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function p(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let T=u[x.type],D;if(T){let R=fs[T];D=T0.clone(R.uniforms)}else D=x.uniforms;return D}function b(x,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new d1(n,T,x,s),c.push(D),h.set(T,D)),D}function v(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:w}}function g1(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function X0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $0(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,y,g,p){let _=n[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},n[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=a(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=g,_.group=p),t++,_}function l(u,f,m,y,g,p,_){_.reversedDepth===!0&&(g=-g);let b=o(u,f,m,y,g,p);m.transmission>0?i.push(b):m.transparent===!0?s.push(b):e.push(b)}function c(u,f,m,y,g,p){let _=o(u,f,m,y,g,p);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||_1),i.length>1&&i.sort(f||X0),s.length>1&&s.sort(f||X0)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function x1(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new $0,n.set(i,[a])):s>=r.length?(a=new $0,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function y1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ot};break;case"SpotLight":e={position:new P,direction:new P,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function v1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var M1=0;function S1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function b1(n){let t=new y1,e=v1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Wt,a=new Wt;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,_=0,b=0,v=0,A=0,w=0,x=0,T=0,D=0,R=0;c.sort(S1);for(let F=0,G=c.length;F<G;F++){let L=c[F],V=L.color,q=L.intensity,W=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hr?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*q,d+=V.g*q,u+=V.b*q;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],q);R++}else if(L.isSunLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=et,i.sunShadowMap[m]=it;let Rt=Q.getViewportCount();for(let Xt=0;Xt<Rt;Xt++)i.sunShadowMatrix[y+Xt]=Q.getMatrix(Xt),i.sunShadowCascade[y+Xt]=Q._cascadeData[Xt];y+=Rt,m++}i.sun[f]=$,f++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=L.shadow.matrix,A++}i.directional[g]=$,g++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(V).multiplyScalar(q),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[_]=$;let Q=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Q.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[_]=Q.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[_]=et,i.spotShadowMap[_]=it,x++}_++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(V).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=$,b++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let Q=L.shadow,et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=$,p++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(q),$.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[v]=$,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==b||U.hemiLength!==v||U.numSunShadows!==m||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==T||U.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=_,U.rectAreaLength=b,U.hemiLength=v,U.numSunShadows=m,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=T,U.numLightProbes=R,i.version=M1++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let v=c[_];if(v.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(v.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function q0(n){let t=new b1(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E1(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new q0(n),t.set(s,[o])):r>=a.length?(o=new q0(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var T1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
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
}`,A1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],C1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Y0=new Wt,yl=new P,bf=new P;function R1(n,t,e){let i=new sr,s=new pt,r=new pt,a=new De,o=new th,l=new eh,c={},h=e.maxTextureSize,d={[cr]:jn,[jn]:cr,[Qn]:Qn},u=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:T1,fragmentShader:w1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Be;m.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bn(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let p=this.type;this.render=function(w,x,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Vm&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ul);let D=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Vr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==this.type;G&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=w.length;L<V;L++){let q=w[L],W=q.shadow;if(W===void 0){zt("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===to){if(q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new gi(s.x,s.y,{format:hr,type:Zi,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Ns(s.x,s.y,Oi),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Ps,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n}else q.isPointLight?(W.map=new Ml(s.x),W.map.depthTexture=new Jo(s.x,Yi)):(W.map=new gi(s.x,s.y),W.map.depthTexture=new Ns(s.x,s.y,Yi)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Ps,this.type===ul?(W.map.depthTexture.compareFunction=$?of:af,W.map.depthTexture.minFilter=Zn,W.map.depthTexture.magFilter=Zn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,T);let et=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:T.layers;for(let Rt=0;Rt<Q;Rt++){let Xt=W.getCamera(Rt);if(q.isPointLight){let J=W.camera,yt=W.matrix,Tt=q.distance||J.far;Tt!==J.far&&(J.far=Tt,J.updateProjectionMatrix()),yl.setFromMatrixPosition(q.matrixWorld),J.position.copy(yl),bf.copy(J.position),bf.add(A1[Rt]),J.up.copy(C1[Rt]),J.lookAt(bf),J.updateMatrixWorld(),yt.makeTranslation(-yl.x,-yl.y,-yl.z),Y0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Y0,J.coordinateSystem,J.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Rt),n.clear();else{Rt===0&&(n.setRenderTarget(W.map),n.clear());let J=W.getViewport(Rt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),F.viewport(a)}i=W.getFrustum(Rt),v(x,T,Xt,q,et,this.type)}W.isPointLightShadow!==!0&&this.type===to&&_(W,T),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(D,R,U)};function _(w,x){let T=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new gi(s.x,s.y,{format:hr,type:Zi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,T,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,T,f,y,null)}function b(w,x,T,D){let R=null,U=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=T.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=R.uuid,G=x.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let V=L[G];V===void 0&&(V=R.clone(),L[G]=V,x.addEventListener("dispose",A)),R=V}if(R.visible=x.visible,R.wireframe=x.wireframe,D===to?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=T}return R}function v(w,x,T,D,R,U){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===to)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let L=t.update(w),V=w.material;if(Array.isArray(V)){let q=L.groups;for(let W=0,it=q.length;W<it;W++){let $=q[W],Q=V[$.materialIndex];if(Q&&Q.visible){let et=b(w,Q,D,U);w.onBeforeShadow(n,w,x,T,L,et,$),n.renderBufferDirect(T,null,L,et,w,$),w.onAfterShadow(n,w,x,T,L,et,$)}}}else if(V.visible){let q=b(w,V,D,U);w.onBeforeShadow(n,w,x,T,L,q,null),n.renderBufferDirect(T,null,L,q,w,null),w.onAfterShadow(n,w,x,T,L,q,null)}}let G=w.children;for(let L=0,V=G.length;L<V;L++)v(G[L],x,T,D,R,U)}function A(w){w.target.removeEventListener("dispose",A);for(let T in c){let D=c[T],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function P1(n,t){function e(){let I=!1,K=new De,X=null,ht=new De(0,0,0,0);return{setMask:function(rt){X!==rt&&!I&&(n.colorMask(rt,rt,rt,rt),X=rt)},setLocked:function(rt){I=rt},setClear:function(rt,lt,Dt,Kt,st){st===!0&&(rt*=Kt,lt*=Kt,Dt*=Kt),K.set(rt,lt,Dt,Kt),ht.equals(K)===!1&&(n.clearColor(rt,lt,Dt,Kt),ht.copy(K))},reset:function(){I=!1,X=null,ht.set(-1,0,0,0)}}}function i(){let I=!1,K=!1,X=null,ht=null,rt=null;return{setReversed:function(lt){if(K!==lt){let Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),K=lt;let Kt=rt;rt=null,this.setClear(Kt)}},getReversed:function(){return K},setTest:function(lt){lt?vt(n.DEPTH_TEST):Yt(n.DEPTH_TEST)},setMask:function(lt){X!==lt&&!I&&(n.depthMask(lt),X=lt)},setFunc:function(lt){if(K&&(lt=S0[lt]),ht!==lt){switch(lt){case Lc:n.depthFunc(n.NEVER);break;case Dc:n.depthFunc(n.ALWAYS);break;case Nc:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case Fc:n.depthFunc(n.GREATER);break;case Bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=lt}},setLocked:function(lt){I=lt},setClear:function(lt){rt!==lt&&(rt=lt,K&&(lt=1-lt),n.clearDepth(lt))},reset:function(){I=!1,X=null,ht=null,rt=null,K=!1}}}function s(){let I=!1,K=null,X=null,ht=null,rt=null,lt=null,Dt=null,Kt=null,st=null;return{setTest:function(Nt){I||(Nt?vt(n.STENCIL_TEST):Yt(n.STENCIL_TEST))},setMask:function(Nt){K!==Nt&&!I&&(n.stencilMask(Nt),K=Nt)},setFunc:function(Nt,Zt,_t){(X!==Nt||ht!==Zt||rt!==_t)&&(n.stencilFunc(Nt,Zt,_t),X=Nt,ht=Zt,rt=_t)},setOp:function(Nt,Zt,_t){(lt!==Nt||Dt!==Zt||Kt!==_t)&&(n.stencilOp(Nt,Zt,_t),lt=Nt,Dt=Zt,Kt=_t)},setLocked:function(Nt){I=Nt},setClear:function(Nt){st!==Nt&&(n.clearStencil(Nt),st=Nt)},reset:function(){I=!1,K=null,X=null,ht=null,rt=null,lt=null,Dt=null,Kt=null,st=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,_=null,b=null,v=null,A=null,w=null,x=null,T=new Ot(0,0,0),D=0,R=!1,U=null,F=null,G=null,L=null,V=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec($)[1]),W=it>=1):$.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=it>=2);let Q=null,et={},Rt=n.getParameter(n.SCISSOR_BOX),Xt=n.getParameter(n.VIEWPORT),J=new De().fromArray(Rt),yt=new De().fromArray(Xt);function Tt(I,K,X,ht){let rt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(I,lt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<X;Dt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(K+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return lt}let Ft={};Ft[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ft[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ft[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),a.setFunc(Da),si(!1),Oe(kd),vt(n.CULL_FACE),Tn(Vr);function vt(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Yt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Xe(I,K){return u[I]!==K?(n.bindFramebuffer(I,K),u[I]=K,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function kt(I,K){let X=m,ht=!1;if(I){X=f.get(K),X===void 0&&(X=[],f.set(K,X));let rt=I.textures;if(X.length!==rt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Dt=rt.length;lt<Dt;lt++)X[lt]=n.COLOR_ATTACHMENT0+lt;X.length=rt.length,ht=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ht=!0);ht&&n.drawBuffers(X)}function me(I){return y!==I?(n.useProgram(I),y=I,!0):!1}let ye={[Xr]:n.FUNC_ADD,[Xm]:n.FUNC_SUBTRACT,[$m]:n.FUNC_REVERSE_SUBTRACT};ye[qm]=n.MIN,ye[Ym]=n.MAX;let ne={[Zm]:n.ZERO,[Jm]:n.ONE,[Km]:n.SRC_COLOR,[Vd]:n.SRC_ALPHA,[i0]:n.SRC_ALPHA_SATURATE,[e0]:n.DST_COLOR,[Qm]:n.DST_ALPHA,[jm]:n.ONE_MINUS_SRC_COLOR,[Wd]:n.ONE_MINUS_SRC_ALPHA,[n0]:n.ONE_MINUS_DST_COLOR,[t0]:n.ONE_MINUS_DST_ALPHA,[s0]:n.CONSTANT_COLOR,[r0]:n.ONE_MINUS_CONSTANT_COLOR,[a0]:n.CONSTANT_ALPHA,[o0]:n.ONE_MINUS_CONSTANT_ALPHA};function Tn(I,K,X,ht,rt,lt,Dt,Kt,st,Nt){if(I===Vr){g===!0&&(Yt(n.BLEND),g=!1);return}if(g===!1&&(vt(n.BLEND),g=!0),I!==Wm){if(I!==p||Nt!==R){if((_!==Xr||A!==Xr)&&(n.blendEquation(n.FUNC_ADD),_=Xr,A=Xr),Nt)switch(I){case eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wr:n.blendFunc(n.ONE,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",I);break}else switch(I){case eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hd:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",I);break}b=null,v=null,w=null,x=null,T.set(0,0,0),D=0,p=I,R=Nt}return}rt=rt||K,lt=lt||X,Dt=Dt||ht,(K!==_||rt!==A)&&(n.blendEquationSeparate(ye[K],ye[rt]),_=K,A=rt),(X!==b||ht!==v||lt!==w||Dt!==x)&&(n.blendFuncSeparate(ne[X],ne[ht],ne[lt],ne[Dt]),b=X,v=ht,w=lt,x=Dt),(Kt.equals(T)===!1||st!==D)&&(n.blendColor(Kt.r,Kt.g,Kt.b,st),T.copy(Kt),D=st),p=I,R=!1}function en(I,K){I.side===Qn?Yt(n.CULL_FACE):vt(n.CULL_FACE);let X=I.side===jn;K&&(X=!X),si(X),I.blending===eo&&I.transparent===!1?Tn(Vr):Tn(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ht=I.stencilWrite;o.setTest(ht),ht&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),hn(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function si(I){U!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),U=I)}function Oe(I){I!==Hm?(vt(n.CULL_FACE),I!==F&&(I===kd?n.cullFace(n.BACK):I===Gm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Yt(n.CULL_FACE),F=I}function is(I){I!==G&&(W&&n.lineWidth(I),G=I)}function hn(I,K,X){I?(vt(n.POLYGON_OFFSET_FILL),(L!==K||V!==X)&&(L=K,V=X,a.getReversed()&&(K=-K,X=-X),n.polygonOffset(K,X))):Yt(n.POLYGON_OFFSET_FILL)}function Ri(I){I?vt(n.SCISSOR_TEST):Yt(n.SCISSOR_TEST)}function Pi(I){I===void 0&&(I=n.TEXTURE0+q-1),Q!==I&&(n.activeTexture(I),Q=I)}function Ii(I,K,X){X===void 0&&(Q===null?X=n.TEXTURE0+q-1:X=Q);let ht=et[X];ht===void 0&&(ht={type:void 0,texture:void 0},et[X]=ht),(ht.type!==I||ht.texture!==K)&&(Q!==X&&(n.activeTexture(X),Q=X),n.bindTexture(I,K||Ft[I]),ht.type=I,ht.texture=K)}function O(){let I=et[Q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Li(){try{n.compressedTexImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function Ie(){try{n.compressedTexImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function Le(){try{n.texSubImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function mt(){try{n.texSubImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function nn(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function Vt(){try{n.texStorage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function C(){try{n.texStorage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function M(){try{n.texImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function z(){try{n.texImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function nt(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function j(I,K){d[I]!==K&&(n.pixelStorei(I,K),d[I]=K)}function ot(I){J.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function dt(I){yt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),yt.copy(I))}function Y(I,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let ht=X.get(I);ht===void 0&&(ht=n.getUniformBlockIndex(K,I.name),n.uniformBlockBinding(K,ht,ht),X.set(I,ht))}function Z(I,K,X){let rt=c.get(K).get(I);l[rt]!==X&&(n.bindBufferBase(n.UNIFORM_BUFFER,rt,X),l[rt]=X)}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,et={},u={},l={},f=new WeakMap,m=[],y=null,g=!1,p=null,_=null,b=null,v=null,A=null,w=null,x=null,T=new Ot(0,0,0),D=0,R=!1,U=null,F=null,G=null,L=null,V=null,J.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Yt,bindFramebuffer:Xe,drawBuffers:kt,useProgram:me,setBlending:Tn,setMaterial:en,setFlipSided:si,setCullFace:Oe,setLineWidth:is,setPolygonOffset:hn,setScissorTest:Ri,activeTexture:Pi,bindTexture:Ii,unbindTexture:O,compressedTexImage2D:Li,compressedTexImage3D:Ie,texImage2D:M,texImage3D:z,pixelStorei:j,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Vt,texStorage3D:C,texSubImage2D:Le,texSubImage3D:mt,compressedTexSubImage2D:nn,compressedTexSubImage3D:Bt,scissor:ot,viewport:dt,reset:ct}}function I1(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,y=new FinalizationRegistry(C=>m.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,M){return g?new OffscreenCanvas(C,M):Oa("canvas")}function _(C,M,z){let nt=1,j=Vt(C);if((j.width>z||j.height>z)&&(nt=z/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ot=Math.floor(nt*j.width),dt=Math.floor(nt*j.height);u===void 0&&(u=p(ot,dt));let Y=M?p(ot,dt):u;return Y.width=ot,Y.height=dt,Y.getContext("2d").drawImage(C,0,0,ot,dt),zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ot+"x"+dt+")."),Y}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function b(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,M,z,nt,j,ot=!1){if(C!==null){if(n[C]!==void 0)return n[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;nt&&(dt=t.get("EXT_texture_norm16"),dt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===n.RED&&(z===n.FLOAT&&(Y=n.R32F),z===n.HALF_FLOAT&&(Y=n.R16F),z===n.UNSIGNED_BYTE&&(Y=n.R8),z===n.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),z===n.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.R8UI),z===n.UNSIGNED_SHORT&&(Y=n.R16UI),z===n.UNSIGNED_INT&&(Y=n.R32UI),z===n.BYTE&&(Y=n.R8I),z===n.SHORT&&(Y=n.R16I),z===n.INT&&(Y=n.R32I)),M===n.RG&&(z===n.FLOAT&&(Y=n.RG32F),z===n.HALF_FLOAT&&(Y=n.RG16F),z===n.UNSIGNED_BYTE&&(Y=n.RG8),z===n.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),z===n.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RG8UI),z===n.UNSIGNED_SHORT&&(Y=n.RG16UI),z===n.UNSIGNED_INT&&(Y=n.RG32UI),z===n.BYTE&&(Y=n.RG8I),z===n.SHORT&&(Y=n.RG16I),z===n.INT&&(Y=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),z===n.UNSIGNED_INT&&(Y=n.RGB32UI),z===n.BYTE&&(Y=n.RGB8I),z===n.SHORT&&(Y=n.RGB16I),z===n.INT&&(Y=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),z===n.UNSIGNED_INT&&(Y=n.RGBA32UI),z===n.BYTE&&(Y=n.RGBA8I),z===n.SHORT&&(Y=n.RGBA16I),z===n.INT&&(Y=n.RGBA32I)),M===n.RGB&&(z===n.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),z===n.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),M===n.RGBA){let Z=ot?Ho:re.getTransfer(j);z===n.FLOAT&&(Y=n.RGBA32F),z===n.HALF_FLOAT&&(Y=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Y=Z===fe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),z===n.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(C,M){let z;return C?M===null||M===Yi||M===qr?z=n.DEPTH24_STENCIL8:M===Oi?z=n.DEPTH32F_STENCIL8:M===so&&(z=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===qr?z=n.DEPTH_COMPONENT24:M===Oi?z=n.DEPTH_COMPONENT32F:M===so&&(z=n.DEPTH_COMPONENT16),z}function T(C,M){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function D(C){let M=new WeakRef(C);i.get(C).__ref=M,m.add(M),y.register(C,M,M)}function R(C){let M=i.get(C).__ref;M!==void 0&&(m.delete(M),y.unregister(M))}function U(C){G(C.target)}function F(C){L(C.target)}function G(C){C.removeEventListener("dispose",U),R(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function L(C){C.removeEventListener("dispose",F),R(C),it(C)}function V(){for(let C of m){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):G(M))}m.clear(),d.clear()}function q(C){let M=i.get(C);if(M.__webglInit===void 0)return;let z=C.source,nt=f.get(z);if(nt){let j=nt[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&W(C),Object.keys(nt).length===0&&f.delete(z)}i.remove(C)}function W(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let z=C.source,nt=f.get(z);delete nt[M.__cacheKey],a.memory.textures--}function it(C){let M=i.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let z=C.depthTexture;if(z&&z.renderTarget===C&&G(z),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ot=0;ot<M.__webglFramebuffer[j].length;ot++)n.deleteFramebuffer(M.__webglFramebuffer[j][ot]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let nt=C.textures;for(let j=0,ot=nt.length;j<ot;j++){let dt=i.get(nt[j]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(nt[j])}i.remove(C)}let $=0;function Q(){$=0}function et(){return $}function Rt(C){$=C}function Xt(){let C=$;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,C}function J(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function yt(C,M){let z=i.get(C);if(C.isVideoTexture&&nn(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let nt=C.image;if(nt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{en(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Tt(C,M){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){en(z,C,M);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function Ft(C,M){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){en(z,C,M);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function vt(C,M){let z=i.get(C);if(C.version>0&&z.__version!==C.version){si(z,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}let Yt={[Na]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},Xe={[_n]:n.NEAREST,[h0]:n.NEAREST_MIPMAP_NEAREST,[dl]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[mh]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},kt={[p0]:n.NEVER,[lf]:n.ALWAYS,[m0]:n.LESS,[af]:n.LEQUAL,[g0]:n.EQUAL,[of]:n.GEQUAL,[_0]:n.GREATER,[x0]:n.NOTEQUAL};function me(C,M){if(M.type===Oi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Zn||M.magFilter===mh||M.magFilter===dl||M.magFilter===Os||M.minFilter===Zn||M.minFilter===mh||M.minFilter===dl||M.minFilter===Os)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Yt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Yt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Yt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Xe[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,kt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==dl&&M.minFilter!==Os||M.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ye(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",U),D(M));let nt=M.source,j=f.get(nt);j===void 0&&(j={},f.set(nt,j));let ot=J(M);if(ot!==C.__cacheKey){j[ot]===void 0&&(j[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ot].usedTimes++;let dt=j[C.__cacheKey];dt!==void 0&&(j[C.__cacheKey].usedTimes--,dt.usedTimes===0&&W(M)),C.__cacheKey=ot,C.__webglTexture=j[ot].texture}return z}function ne(C,M,z){return Math.floor(Math.floor(C/z)/M)}function Tn(C,M,z,nt){let ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,z,nt,M.data);else{ot.sort((I,K)=>I.start-K.start);let dt=0;for(let I=1;I<ot.length;I++){let K=ot[dt],X=ot[I],ht=K.start+K.count,rt=ne(X.start,M.width,4),lt=ne(K.start,M.width,4);X.start<=ht+1&&rt===lt&&ne(X.start+X.count-1,M.width,4)===rt?K.count=Math.max(K.count,X.start+X.count-K.start):(++dt,ot[dt]=X)}ot.length=dt+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let I=0,K=ot.length;I<K;I++){let X=ot[I],ht=Math.floor(X.start/4),rt=Math.ceil(X.count/4),lt=ht%M.width,Dt=Math.floor(ht/M.width),Kt=rt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(n.TEXTURE_2D,0,lt,Dt,Kt,st,z,nt,M.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function en(C,M,z){let nt=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=n.TEXTURE_3D);let j=ye(C,M),ot=M.source;e.bindTexture(nt,C.__webglTexture,n.TEXTURE0+z);let dt=i.get(ot);if(ot.version!==dt.__version||j===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let st=re.getPrimaries(re.workingColorSpace),Nt=M.colorSpace===Bs?null:re.getPrimaries(M.colorSpace),Zt=M.colorSpace===Bs||st===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=_(M.image,!1,s.maxTextureSize);Z=Bt(M,Z);let ct=r.convert(M.format,M.colorSpace),I=r.convert(M.type),K=w(M.internalFormat,ct,I,M.normalized,M.colorSpace,M.isVideoTexture);me(nt,M);let X,ht=M.mipmaps,rt=M.isVideoTexture!==!0,lt=dt.__version===void 0||j===!0,Dt=ot.dataReady,Kt=T(M,Z);if(M.isDepthTexture)K=x(M.format===Fs,M.type),lt&&(rt?e.texStorage2D(n.TEXTURE_2D,1,K,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,K,Z.width,Z.height,0,ct,I,null));else if(M.isDataTexture)if(ht.length>0){rt&&lt&&e.texStorage2D(n.TEXTURE_2D,Kt,K,ht[0].width,ht[0].height);for(let st=0,Nt=ht.length;st<Nt;st++)X=ht[st],rt?Dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,X.width,X.height,ct,I,X.data):e.texImage2D(n.TEXTURE_2D,st,K,X.width,X.height,0,ct,I,X.data);M.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(n.TEXTURE_2D,Kt,K,Z.width,Z.height),Dt&&Tn(M,Z,ct,I)):e.texImage2D(n.TEXTURE_2D,0,K,Z.width,Z.height,0,ct,I,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,K,ht[0].width,ht[0].height,Z.depth);for(let st=0,Nt=ht.length;st<Nt;st++)if(X=ht[st],M.format!==Ji)if(ct!==null)if(rt){if(Dt)if(M.layerUpdates.size>0){let Zt=Mf(X.width,X.height,M.format,M.type);for(let _t of M.layerUpdates){let ge=X.data.subarray(_t*Zt/X.data.BYTES_PER_ELEMENT,(_t+1)*Zt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,_t,X.width,X.height,1,ct,ge)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,Z.depth,ct,X.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,K,X.width,X.height,Z.depth,0,X.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,Z.depth,ct,I,X.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,K,X.width,X.height,Z.depth,0,ct,I,X.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(n.TEXTURE_2D,Kt,K,ht[0].width,ht[0].height);for(let st=0,Nt=ht.length;st<Nt;st++)X=ht[st],M.format!==Ji?ct!==null?rt?Dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,X.width,X.height,ct,X.data):e.compressedTexImage2D(n.TEXTURE_2D,st,K,X.width,X.height,0,X.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,X.width,X.height,ct,I,X.data):e.texImage2D(n.TEXTURE_2D,st,K,X.width,X.height,0,ct,I,X.data)}else if(M.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,K,Z.width,Z.height,Z.depth),Dt)if(M.layerUpdates.size>0){let st=Mf(Z.width,Z.height,M.format,M.type);for(let Nt of M.layerUpdates){let Zt=Z.data.subarray(Nt*st/Z.data.BYTES_PER_ELEMENT,(Nt+1)*st/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,Z.width,Z.height,1,ct,I,Zt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ct,I,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,ct,I,Z.data);else if(M.isData3DTexture)rt?(lt&&e.texStorage3D(n.TEXTURE_3D,Kt,K,Z.width,Z.height,Z.depth),Dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ct,I,Z.data)):e.texImage3D(n.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,ct,I,Z.data);else if(M.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(n.TEXTURE_2D,Kt,K,Z.width,Z.height);else{let st=Z.width,Nt=Z.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(n.TEXTURE_2D,Zt,K,st,Nt,0,ct,I,null),st>>=1,Nt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Z.parentNode!==st){st.appendChild(Z),d.add(M),st.onpaint=Nt=>{let Zt=Nt.changedElements;for(let _t of d)Zt.includes(_t.image)&&(_t.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let Zt=n.RGBA,_t=n.RGBA,ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Zt,_t,ge,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ht.length>0){if(rt&&lt){let st=Vt(ht[0]);e.texStorage2D(n.TEXTURE_2D,Kt,K,st.width,st.height)}for(let st=0,Nt=ht.length;st<Nt;st++)X=ht[st],rt?Dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ct,I,X):e.texImage2D(n.TEXTURE_2D,st,K,ct,I,X);M.generateMipmaps=!1}else if(rt){if(lt){let st=Vt(Z);e.texStorage2D(n.TEXTURE_2D,Kt,K,st.width,st.height)}Dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,I,Z)}else e.texImage2D(n.TEXTURE_2D,0,K,ct,I,Z);b(M)&&M.mipmapsAutoUpdate===!0&&v(nt),dt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function si(C,M,z){if(M.image.length!==6)return;let nt=ye(C,M),j=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let ot=i.get(j);if(j.version!==ot.__version||nt===!0){e.activeTexture(n.TEXTURE0+z);let dt=re.getPrimaries(re.workingColorSpace),Y=M.colorSpace===Bs?null:re.getPrimaries(M.colorSpace),Z=M.colorSpace===Bs||dt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ct=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,K=[];for(let _t=0;_t<6;_t++)!ct&&!I?K[_t]=_(M.image[_t],!0,s.maxCubemapSize):K[_t]=I?M.image[_t].image:M.image[_t],K[_t]=Bt(M,K[_t]);let X=K[0],ht=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),lt=w(M.internalFormat,ht,rt,M.normalized,M.colorSpace),Dt=M.isVideoTexture!==!0,Kt=ot.__version===void 0||nt===!0,st=j.dataReady,Nt=T(M,X);me(n.TEXTURE_CUBE_MAP,M);let Zt;if(M.isDepthTexture){if(lt=x(M.format===Fs,M.type),Kt)if(Dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,lt,X.width,X.height);else for(let _t=0;_t<6;_t++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,X.width,X.height,0,ht,rt,null)}else if(ct){Dt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,lt,X.width,X.height);for(let _t=0;_t<6;_t++){Zt=K[_t].mipmaps;for(let ge=0;ge<Zt.length;ge++){let un=Zt[ge];M.format!==Ji?ht!==null?Dt?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge,0,0,un.width,un.height,ht,un.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge,lt,un.width,un.height,0,un.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge,0,0,un.width,un.height,ht,rt,un.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge,lt,un.width,un.height,0,ht,rt,un.data)}}}else{if(Zt=M.mipmaps,Dt&&Kt){Zt.length>0&&Nt++;let _t=Vt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,lt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(I){Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,K[_t].width,K[_t].height,ht,rt,K[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,K[_t].width,K[_t].height,0,ht,rt,K[_t].data);for(let ge=0;ge<Zt.length;ge++){let Ys=Zt[ge].image[_t].image;Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge+1,0,0,Ys.width,Ys.height,ht,rt,Ys.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge+1,lt,Ys.width,Ys.height,0,ht,rt,Ys.data)}}else{Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ht,rt,K[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,ht,rt,K[_t]);for(let ge=0;ge<Zt.length;ge++){let un=Zt[ge];Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge+1,0,0,ht,rt,un.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ge+1,lt,ht,rt,un.image[_t])}}}b(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ot.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,z,nt,j,ot){let dt=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),Z=w(z.internalFormat,dt,Y,z.normalized,z.colorSpace),ct=i.get(M),I=i.get(z);if(I.__renderTarget=M,!ct.__hasExternalTextures){let K=Math.max(1,M.width>>ot),X=Math.max(1,M.height>>ot);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,ot,Z,K,X,M.depth,0,dt,Y,null):e.texImage2D(j,ot,Z,K,X,0,dt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),mt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,j,I.__webglTexture,0,Le(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,j,I.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function is(C,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let nt=M.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,ot=x(M.stencilBuffer,j),dt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(M),ot,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(M),ot,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,C)}else{let nt=M.textures;for(let j=0;j<nt.length;j++){let ot=nt[j],dt=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),Z=w(ot.internalFormat,dt,Y,ot.normalized,ot.colorSpace);mt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(M),Z,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function hn(C,M,z){let nt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(M.depthTexture);j.__renderTarget=M;let ot=nt?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||ot.width!==M.width||ot.height!==M.height)&&(ot.width=M.width,ot.height=M.height,M.depthTexture.needsUpdate=!0),nt?vt(M.depthTexture,0):yt(M.depthTexture,0);let dt=j.__webglTexture,Y=Le(M),Z=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ct=M.depthTexture.format===Fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ps)mt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,Z,dt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ct,Z,dt,0);else if(M.depthTexture.format===Fs)mt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,Z,dt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ct,Z,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ri(C){let M=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let nt=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=nt}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)hn(M.__webglFramebuffer[nt],C,nt);else C.texture.mipmaps.length>0?hn(M.__webglFramebuffer[0],C,0):hn(M.__webglFramebuffer,C,0);else if(z){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=n.createRenderbuffer(),is(M.__webglDepthbuffer[nt],C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ot)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),is(M.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pi(C,M,z){let nt=i.get(C);M!==void 0&&Oe(nt.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ri(C)}function Ii(C){let M=C.texture,z=i.get(C),nt=i.get(M);C.addEventListener("dispose",F),D(C);let j=C.textures,ot=C.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=M.version,a.memory.textures++),ot){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Z=0;Z<M.mipmaps.length;Z++)z.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else z.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)z.__webglFramebuffer[Y]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(dt)for(let Y=0,Z=j.length;Y<Z;Y++){let ct=i.get(j[Y]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&mt(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let Z=j[Y];z.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let ct=r.convert(Z.format,Z.colorSpace),I=r.convert(Z.type),K=w(Z.internalFormat,ct,I,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),X=Le(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,K,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),is(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),me(n.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Oe(z.__webglFramebuffer[Y][Z],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Oe(z.__webglFramebuffer[Y],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Y=0,Z=j.length;Y<Z;Y++){let ct=j[Y],I=i.get(ct),K=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,I.__webglTexture),me(K,ct),Oe(z.__webglFramebuffer,C,ct,n.COLOR_ATTACHMENT0+Y,K,0),b(ct)&&v(K)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,nt.__webglTexture),me(Y,M),M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Oe(z.__webglFramebuffer[Z],C,M,n.COLOR_ATTACHMENT0,Y,Z);else Oe(z.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,Y,0);b(M)?v(Y):M.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Ri(C)}function O(C){let M=C.textures;for(let z=0,nt=M.length;z<nt;z++){let j=M[z];if(b(j)&&j.mipmapsAutoUpdate===!0){let ot=A(C),dt=i.get(j).__webglTexture;e.bindTexture(ot,dt),v(ot),e.unbindTexture()}}}let Li=[];function Ie(C){if(C.samples>0){if(mt(C)===!1){let M=C.textures,z=C.width,nt=C.height,j=n.COLOR_BUFFER_BIT,ot=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(C),Y=M.length>1;if(Y)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let I=i.get(M[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,z,nt,0,0,z,nt,j,n.NEAREST),l===!0&&(Li.length=0,Li.push(n.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Li.push(ot),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Li))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let I=i.get(M[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,I,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Le(C){return Math.min(s.maxSamples,C.samples)}function mt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nn(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Bt(C,M){let z=C.colorSpace,nt=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ko&&z!==Bs&&(re.getTransfer(z)===fe?(nt!==Ji||j!==oi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",z)),M}function Vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Xt,this.resetTextureUnits=Q,this.getTextureUnits=et,this.setTextureUnits=Rt,this.setTexture2D=yt,this.setTexture2DArray=Tt,this.setTexture3D=Ft,this.setTextureCube=vt,this.rebindTextures=Pi,this.setupRenderTarget=Ii,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ri,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=mt,this.dispose=V}function L1(n,t){function e(i,s=Bs){let r,a=re.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===_h)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qd)return n.BYTE;if(i===tf)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===gh)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===Zi)return n.HALF_FLOAT;if(i===sf)return n.ALPHA;if(i===rf)return n.RGB;if(i===Ji)return n.RGBA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Fs)return n.DEPTH_STENCIL;if(i===yh)return n.RED;if(i===vh)return n.RED_INTEGER;if(i===hr)return n.RG;if(i===Mh)return n.RG_INTEGER;if(i===Sh)return n.RGBA_INTEGER;if(i===fl||i===pl||i===ml||i===gl)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bh||i===Eh||i===Th||i===wh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===Ch||i===Rh||i===Ph||i===Ih||i===_l||i===Lh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ah||i===Ch)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ph)return r.COMPRESSED_R11_EAC;if(i===Ih)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_l)return r.COMPRESSED_RG11_EAC;if(i===Lh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dh||i===Nh||i===Uh||i===Oh||i===Fh||i===Bh||i===zh||i===kh||i===Hh||i===Gh||i===Vh||i===Wh||i===Xh||i===$h)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$h)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qh||i===Yh||i===Zh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===qh)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jh||i===Kh||i===xl||i===jh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N1=`
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

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ko(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new hs({vertexShader:D1,fragmentShader:N1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},If=class extends $i{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new Pf,p={},_=e.getContextAttributes(),b=null,v=null,A=[],w=[],x=new pt,T=null,D=null,R=new mn;R.viewport=new De;let U=new mn;U.viewport=new De;let F=[R,U],G=new dh,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let yt=A[J];return yt===void 0&&(yt=new Ha,A[J]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(J){let yt=A[J];return yt===void 0&&(yt=new Ha,A[J]=yt),yt.getGripSpace()},this.getHand=function(J){let yt=A[J];return yt===void 0&&(yt=new Ha,A[J]=yt),yt.getHandSpace()};function q(J){let yt=w.indexOf(J.inputSource);if(yt===-1)return;let Tt=A[yt];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,c||a),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let J=0;J<A.length;J++){let yt=w[J];yt!==null&&(w[J]=null,A[J].disconnect(yt))}L=null,V=null,g.reset();for(let J in p)delete p[J];if(t.setRenderTarget(b),f=null,u=null,d=null,s=null,v=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(x.width,x.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ft=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=_.stencil?Fs:Ps,Ft=_.stencil?qr:Yi);let Yt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new gi(u.textureWidth,u.textureHeight,{format:Ji,type:oi,depthTexture:new Ns(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new gi(f.framebufferWidth,f.framebufferHeight,{format:Ji,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(J){for(let yt=0;yt<J.removed.length;yt++){let Tt=J.removed[yt],Ft=w.indexOf(Tt);Ft>=0&&(w[Ft]=null,A[Ft].disconnect(Tt))}for(let yt=0;yt<J.added.length;yt++){let Tt=J.added[yt],Ft=w.indexOf(Tt);if(Ft===-1){for(let Yt=0;Yt<A.length;Yt++)if(Yt>=w.length){w.push(Tt),Ft=Yt;break}else if(w[Yt]===null){w[Yt]=Tt,Ft=Yt;break}if(Ft===-1)break}let vt=A[Ft];vt&&vt.connect(Tt)}}function $(J,yt){yt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(yt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let yt=J.near,Tt=J.far;g.texture!==null&&(g.depthNear>0&&(yt=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),G.near=U.near=R.near=yt,G.far=U.far=R.far=Tt,(L!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,V=G.far),G.layers.mask=J.layers.mask|6,R.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;let Ft=J.parent,vt=G.cameras;$(G,Ft);for(let Yt=0;Yt<vt.length;Yt++)$(vt[Yt],Ft);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,G,Ft)};function Q(J,yt,Tt){Tt===null?J.matrix.copy(yt.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(yt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(yt.projectionMatrix),J.projectionMatrixInverse.copy(yt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ba*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(J){return p[J]};let et=null;function Rt(J,yt){if(h=yt.getViewerPose(c||a),m=yt,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ft=!1;Tt.length!==G.cameras.length&&(G.cameras.length=0,Ft=!0);for(let kt=0;kt<Tt.length;kt++){let me=Tt[kt],ye=null;if(f!==null)ye=f.getViewport(me);else{let Tn=d.getViewSubImage(u,me);ye=Tn.viewport,kt===0&&(t.setRenderTargetTextures(v,Tn.colorTexture,Tn.depthStencilTexture),t.setRenderTarget(v))}let ne=F[kt];ne===void 0&&(ne=new mn,ne.layers.enable(kt),ne.viewport=new De,F[kt]=ne),ne.matrix.fromArray(me.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(me.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ye.x,ye.y,ye.width,ye.height),kt===0&&(G.matrix.copy(ne.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ft===!0&&G.cameras.push(ne)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let kt=d.getDepthInformation(Tt[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,s.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let kt=0;kt<Tt.length;kt++){let me=Tt[kt].camera;if(me){let ye=p[me];ye||(ye=new Ko,p[me]=ye);let ne=d.getCameraImage(me);ye.sourceTexture=ne}}}}for(let Tt=0;Tt<A.length;Tt++){let Ft=w[Tt],vt=A[Tt];Ft!==null&&vt!==void 0&&vt.update(Ft,yt,c||a)}et&&et(J,yt),yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:yt}),m=null}let Xt=new Z0;Xt.setAnimationLoop(Rt),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},U1=new Wt,rg=new Gt;rg.set(-1,0,0,0,1,0,0,0,1);function O1(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,xf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),b=_.envMap,v=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rg),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function F1(n,t,e,i){let s={},r={};function a(_,b){let v=b.program;i.uniformBlockBinding(_,v,s[_.id])}function o(_,b){let v=s[_.id];v===void 0&&(m(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",g));let A=b.program;i.updateUBOMapping(_,A);let w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let b=n.createBuffer(),v=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,A),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],v=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,x=v.length;w<x;w++){let T=v[w];if(Array.isArray(T))for(let D=0,R=T.length;D<R;D++)h(T[D],w,D,A);else h(T,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,b,v,A){if(u(_,b,v,A)===!0){let w=_.__offset,x=_.value;if(Array.isArray(x)){let T=0;for(let D=0;D<x.length;D++){let R=x[D],U=y(R,!0);d(R,_.__data,T),T+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function d(_,b,v){typeof _=="number"||typeof _=="boolean"?b[v]=_:_.isMatrix3?(b[v]=_.elements[0],b[v+1]=_.elements[1],b[v+2]=_.elements[2],b[v+3]=0,b[v+4]=_.elements[3],b[v+5]=_.elements[4],b[v+6]=_.elements[5],b[v+7]=0,b[v+8]=_.elements[6],b[v+9]=_.elements[7],b[v+10]=_.elements[8],b[v+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-v),v):_.toArray(b,v)}function u(_,b,v,A){let w=_.value,x=b+"_"+v;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let T=A[x],D=!1;for(let R=0;R<w.length;R++)f(w[R],T,R)===!0&&(D=!0);return D}return f(w,A,x)}function f(_,b,v){if(b[v]===void 0)return typeof _=="number"||typeof _=="boolean"?b[v]=_:ArrayBuffer.isView(_)?b[v]=_.slice():b[v]=_.clone(),!0;{let A=b[v];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return b[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(_){let b=_.uniforms,v=0,A=16;for(let x=0,T=b.length;x<T;x++){let D=Array.isArray(b[x])?b[x]:[b[x]];for(let R=0,U=D.length;R<U;R++){let F=D[R],G=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(b[x])||Array.isArray(F.value),V=v;for(let W=0,it=G.length;W<it;W++){let $=G[W],Q=y($,L),et=v%A,Rt=et%Q.boundary,Xt=et+Rt;v+=Rt,Xt!==0&&A-Xt<Q.storage&&(v+=A-Xt),W===0&&(V=v),v+=Q.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((v-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}let w=v%A;return w>0&&(v+=A-w),_.__size=v,_.__cache={},this}function y(_,b){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(_){let b=_.target;b.removeEventListener("dispose",g),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}var B1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ds=null;function z1(){return ds===null&&(ds=new Yo(B1,16,16,hr,Zi),ds.name="DFG_LUT",ds.minFilter=Zn,ds.magFilter=Zn,ds.wrapS=rs,ds.wrapT=rs,ds.generateMipmaps=!1,ds.needsUpdate=!0),ds}var Sl=class{constructor(t={}){let{canvas:e=y0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let y=f,g=new Set([Sh,Mh,vh]),p=new Set([oi,Yi,so,qr,_h,xh]),_=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],T=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,F=null,G=null,L=null,V=null;this._outputColorSpace=pn;let q=0,W=0,it=null,$=-1,Q=null,et=new De,Rt=new De,Xt=null,J=new Ot(0),yt=0,Tt=e.width,Ft=e.height,vt=1,Yt=null,Xe=null,kt=new De(0,0,Tt,Ft),me=new De(0,0,Tt,Ft),ye=!1,ne=new sr,Tn=new Xc,en=!1,si=!1,Oe=new Wt,is=new P,hn=new De,Ri={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pi=!1;function Ii(){return it===null?vt:1}let O=i;function Li(E,N){return e.getContext(E,N)}let Ie,Le,mt,nn,Bt,Vt,C,M,z,nt,j,ot,dt,Y,Z,ct,I,K,X,ht,rt,lt,Dt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),O===null){let N="webgl2";if(O=Li(N,E),O===null)throw Li(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(E){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ht("WebGLRenderer: "+E.message),E}function Kt(){Ie=new JM(O),Ie.init(),rt=new L1(O,Ie),Le=new zM(O,Ie,t,rt),mt=new P1(O,Ie),Le.reversedDepthBuffer&&u&&mt.buffers.depth.setReversed(!0),G=O.createFramebuffer(),L=O.createFramebuffer(),V=O.createFramebuffer(),nn=new QM(O),Bt=new g1,Vt=new I1(O,Ie,mt,Bt,Le,rt,nn),C=new ZM(R),M=new ey(O),lt=new FM(O,M),z=new KM(O,M,nn,lt),nt=new eS(O,z,M,lt,nn),K=new tS(O,Le,Vt),Z=new kM(Bt),j=new m1(R,C,Ie,Le,lt,Z),ot=new O1(R,Bt),dt=new x1,Y=new E1(Ie),I=new OM(R,C,mt,nt,m,l),ct=new R1(R,nt,Le),Dt=new F1(O,nn,Le,mt),X=new BM(O,Ie,nn),ht=new jM(O,Ie,nn),nn.programs=j.programs,R.capabilities=Le,R.extensions=Ie,R.properties=Bt,R.renderLists=dt,R.shadowMap=ct,R.state=mt,R.info=nn}y!==oi&&(D=new iS(y,e.width,e.height,o,s,r));let st=new If(R,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(E){E!==void 0&&(vt=E,this.setSize(Tt,Ft,!1))},this.getSize=function(E){return E.set(Tt,Ft)},this.setSize=function(E,N,H=!0){if(st.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=E,Ft=N,e.width=Math.floor(E*vt),e.height=Math.floor(N*vt),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Tt*vt,Ft*vt).floor()},this.setDrawingBufferSize=function(E,N,H){Tt=E,Ft=N,vt=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(y===oi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(kt)},this.setViewport=function(E,N,H,B){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,N,H,B),mt.viewport(et.copy(kt).multiplyScalar(Ii()).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,N,H,B){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,N,H,B),mt.scissor(Rt.copy(me).multiplyScalar(Ii()).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){mt.setScissorTest(ye=E)},this.setOpaqueSort=function(E){Yt=E},this.setTransparentSort=function(E){Xe=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,H=!0){let B=0;if(E){let k=!1;if(it!==null){let ft=it.texture.format;k=g.has(ft)}if(k){let ft=it.texture.type,Et=p.has(ft),ut=I.getClearColor(),Mt=I.getClearAlpha(),Pt=ut.r,$t=ut.g,ie=ut.b;Et?(_[0]=Pt,_[1]=$t,_[2]=ie,_[3]=Mt,O.clearBufferuiv(O.COLOR,0,_)):(b[0]=Pt,b[1]=$t,b[2]=ie,b[3]=Mt,O.clearBufferiv(O.COLOR,0,b))}else B|=O.COLOR_BUFFER_BIT}N&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),I.dispose(),dt.dispose(),Y.dispose(),Vt.dispose(),Bt.dispose(),C.dispose(),nt.dispose(),z.dispose(),lt.dispose(),Dt.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",Yp),st.removeEventListener("sessionend",Zp),Ur.stop()};function Nt(E){E.preventDefault(),Go("WebGLRenderer: Context Lost."),U=!0}function Zt(){Go("WebGLRenderer: Context Restored."),U=!1;let E=nn.autoReset,N=ct.enabled,H=ct.autoUpdate,B=ct.needsUpdate,k=ct.type;Kt(),nn.autoReset=E,ct.enabled=N,ct.autoUpdate=H,ct.needsUpdate=B,ct.type=k}function _t(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ge(E){let N=E.target;N.removeEventListener("dispose",ge),un(N)}function un(E){Ys(E),Bt.remove(E)}function Ys(E){let N=Bt.get(E).programs;N!==void 0&&(N.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,B,k,ft){N===null&&(N=Ri);let Et=k.isMesh&&k.matrixWorld.determinantAffine()<0,ut=q_(E,N,H,B,k);mt.setMaterial(B,Et);let Mt=H.index,Pt=1;if(B.wireframe===!0){if(Mt=z.getWireframeAttribute(H),Mt===void 0)return;Pt=2}let $t=H.drawRange,ie=H.attributes.position,wt=$t.start*Pt,se=($t.start+$t.count)*Pt;ft!==null&&(wt=Math.max(wt,ft.start*Pt),se=Math.min(se,(ft.start+ft.count)*Pt)),Mt!==null?(wt=Math.max(wt,0),se=Math.min(se,Mt.count)):ie!=null&&(wt=Math.max(wt,0),se=Math.min(se,ie.count));let $e=se-wt;if($e<0||$e===1/0)return;lt.setup(k,B,ut,H,Mt);let be,ve=X;if(Mt!==null&&(be=M.get(Mt),ve=ht,ve.setIndex(be)),k.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*Ii()),ve.setMode(O.LINES)):ve.setMode(O.TRIANGLES);else if(k.isLine){let Dn=B.linewidth;Dn===void 0&&(Dn=1),mt.setLineWidth(Dn*Ii()),k.isLineSegments?ve.setMode(O.LINES):k.isLineLoop?ve.setMode(O.LINE_LOOP):ve.setMode(O.LINE_STRIP)}else k.isPoints?ve.setMode(O.POINTS):k.isSprite&&ve.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))ve.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Dn=k._multiDrawStarts,At=k._multiDrawCounts,$n=k._multiDrawCount,ue=Mt?M.get(Mt).bytesPerElement:1,Or=Bt.get(B).currentProgram.getUniforms();for(let Nn=0;Nn<$n;Nn++)Or.setValue(O,"_gl_DrawID",Nn),ve.render(Dn[Nn]/ue,At[Nn])}else if(k.isInstancedMesh)ve.renderInstances(wt,$e,k.count);else if(H.isInstancedBufferGeometry){let Dn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,Dn);ve.renderInstances(wt,$e,At)}else ve.render(wt,$e)};function qp(E,N,H,B){F!==null&&E.isNodeMaterial&&F.setObject(B,E),en===!0&&Z.setState(E,H,!1),E.transparent===!0&&E.side===Qn&&E.forceSinglePass===!1?(E.side=jn,E.needsUpdate=!0,Eo(E,N,B),E.side=cr,E.needsUpdate=!0,Eo(E,N,B),E.side=Qn):Eo(E,N,B)}this.compile=function(E,N,H=null){H===null&&(H=E),F!==null&&F.renderStart(E,N,H),w=Y.get(H),w.init(N),T.push(w),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),E!==H&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),si=this.localClippingEnabled,en=Z.init(this.clippingPlanes,si),en===!0&&Z.setGlobalState(this.clippingPlanes,N),F!==null&&ct.render(w.state.shadowsArray,H,N);let B=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ft=k.material;if(ft)if(Array.isArray(ft))for(let Et=0;Et<ft.length;Et++){let ut=ft[Et];qp(ut,H,N,k),B.add(ut)}else qp(ft,H,N,k),B.add(ft)}),w=T.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(E,N,H=null){let B=this.compile(E,N,H);return new Promise(k=>{function ft(){if(B.forEach(function(Et){let Mt=Bt.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&B.delete(Et)}),B.size===0){k(E);return}setTimeout(ft,10)}Ie.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let sd=null;function X_(E){sd&&sd(E)}function Yp(){Ur.stop()}function Zp(){Ur.start()}let Ur=new Z0;Ur.setAnimationLoop(X_),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(E){sd=E,st.setAnimationLoop(E),E===null?Ur.stop():Ur.start()},st.addEventListener("sessionstart",Yp),st.addEventListener("sessionend",Zp),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(E,N);let H=st.enabled===!0&&st.isPresenting===!0,B=D!==null&&(it===null||H)&&D.begin(R,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(N),N=st.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,it),w=Y.get(E,T.length),w.init(N),w.state.textureUnits=Vt.getTextureUnits(),T.push(w),Oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Tn.setFromArrayCamera(N):ne.setFromProjectionMatrix(Oe,Ni,N.reversedDepth),si=this.localClippingEnabled,en=Z.init(this.clippingPlanes,si),A=dt.get(E,x.length),A.init(),x.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Et=R.xr.getDepthSensingMesh();Et!==null&&rd(Et,N,-1/0,R.sortObjects)}rd(E,N,0,R.sortObjects),A.finish(),F!==null&&F.updateLights(w.state.lightsArray),R.sortObjects===!0&&A.sort(Yt,Xe),Pi=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Pi&&I.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),en===!0&&Z.beginShadows();let k=w.state.shadowsArray;if(ct.render(k,E,N),en===!0&&Z.endShadows(),(B&&D.hasRenderPass())===!1){let Et=A.opaque,ut=A.transmissive;if(w.setupLights(),N.isArrayCamera){let Mt=N.cameras;if(ut.length>0)for(let Pt=0,$t=Mt.length;Pt<$t;Pt++){let ie=Mt[Pt];Kp(Et,ut,E,ie)}Pi&&I.render(E);for(let Pt=0,$t=Mt.length;Pt<$t;Pt++){let ie=Mt[Pt];Jp(A,E,ie,ie.viewport)}}else ut.length>0&&Kp(Et,ut,E,N),Pi&&I.render(E),Jp(A,E,N)}it!==null&&W===0&&(Vt.updateMultisampleRenderTarget(it),Vt.updateRenderTargetMipmap(it)),B&&D.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),lt.resetDefaultState(),$=-1,Q=null,T.pop(),T.length>0?(w=T[T.length-1],Vt.setTextureUnits(w.state.textureUnits),en===!0&&Z.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,F!==null&&F.renderEnd()};function rd(E,N,H,B){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Et=N.isArrayCamera?Tn:ne;if(!E.frustumCulled||E.intersectsFrustum(Et)){B&&hn.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Oe);let ut=nt.update(E),Mt=E.material;Mt.visible&&A.push(E,ut,Mt,H,hn.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){let Et=N.isArrayCamera?Tn:ne;if(!E.frustumCulled||E.intersectsFrustum(Et)){let ut=nt.update(E),Mt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),hn.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),hn.copy(ut.boundingSphere.center)),hn.applyMatrix4(E.matrixWorld).applyMatrix4(Oe)),Array.isArray(Mt)){let Pt=ut.groups;for(let $t=0,ie=Pt.length;$t<ie;$t++){let wt=Pt[$t],se=Mt[wt.materialIndex];se&&se.visible&&A.push(E,ut,se,H,hn.z,wt,N)}}else Mt.visible&&A.push(E,ut,Mt,H,hn.z,null,N)}}}let ft=E.children;for(let Et=0,ut=ft.length;Et<ut;Et++)rd(ft[Et],N,H,B)}function Jp(E,N,H,B){let{opaque:k,transmissive:ft,transparent:Et}=E;w.setupLightsView(H),en===!0&&Z.setGlobalState(R.clippingPlanes,H),B&&mt.viewport(et.copy(B)),k.length>0&&ec(k,N,H),ft.length>0&&ec(ft,N,H),Et.length>0&&ec(Et,N,H),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Kp(E,N,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let wt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new gi(1,1,{generateMipmaps:!0,type:wt?Zi:oi,minFilter:Os,samples:Math.max(4,Le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let ft=w.state.transmissionRenderTarget[B.id],Et=B.viewport||et;ft.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);let ut=R.getRenderTarget(),Mt=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(J),yt=R.getClearAlpha(),yt<1&&R.setClearColor(16777215,.5),R.clear(),Pi&&I.render(H);let $t=R.toneMapping;R.toneMapping=us;let ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),en===!0&&Z.setGlobalState(R.clippingPlanes,B),ec(E,H,B),Vt.updateMultisampleRenderTarget(ft),Vt.updateRenderTargetMipmap(ft),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let se=0,$e=N.length;se<$e;se++){let be=N[se],{object:ve,geometry:Dn,material:At,group:$n}=be;if(At.side===Qn&&ve.layers.test(B.layers)){let ue=At.side;At.side=jn,At.needsUpdate=!0,jp(ve,H,B,Dn,At,$n),At.side=ue,At.needsUpdate=!0,wt=!0}}wt===!0&&(Vt.updateMultisampleRenderTarget(ft),Vt.updateRenderTargetMipmap(ft))}R.setRenderTarget(ut,Mt,Pt),R.setClearColor(J,yt),ie!==void 0&&(B.viewport=ie),R.toneMapping=$t}function ec(E,N,H){let B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,ft=E.length;k<ft;k++){let Et=E[k],{object:ut,geometry:Mt,group:Pt}=Et,$t=Et.material;$t.allowOverride===!0&&B!==null&&($t=B),ut.layers.test(H.layers)&&jp(ut,N,H,Mt,$t,Pt)}}function jp(E,N,H,B,k,ft){F!==null&&k.isNodeMaterial&&F.setObject(E,k),E.onBeforeRender(R,N,H,B,k,ft),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(R,N,H,B,E,ft),k.transparent===!0&&k.side===Qn&&k.forceSinglePass===!1?(k.side=jn,k.needsUpdate=!0,R.renderBufferDirect(H,N,B,k,E,ft),k.side=cr,k.needsUpdate=!0,R.renderBufferDirect(H,N,B,k,E,ft),k.side=Qn):R.renderBufferDirect(H,N,B,k,E,ft),E.onAfterRender(R,N,H,B,k,ft)}function Qp(E){let N=0;for(let H of E)H.texture!==null&&N++;return N}function Eo(E,N,H){N.isScene!==!0&&(N=Ri);let B=Bt.get(E),k=w.state.lights,ft=w.state.shadowsArray,Et=k.state.version,ut=j.getParameters(E,k.state,ft,N,H,w.state.lightProbeGridArray),Mt=j.getProgramCacheKey(ut),Pt=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let $t=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=C.get(E.envMap||B.environment,$t),B.envMapRotation=B.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",ge),Pt=new Map,B.programs=Pt,B.programVariants=new Map);let ie=Pt.get(Mt);if(ie!==void 0){if(B.currentProgram===ie&&B.lightsStateVersion===Et)return em(E,ut),ie}else ut.uniforms=j.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,H,ut),E.onBeforeCompile(ut,R),ie=j.acquireProgram(ut,Mt),Pt.set(Mt,ie),B.uniforms=ut.uniforms;let wt=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=Z.uniform),em(E,ut),B.needsLights=Z_(E),B.lightsStateVersion=Et,B.needsLights&&(wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.sunLights.value=k.state.sun,wt.sunLightShadows.value=k.state.sunShadow,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.sunShadowMatrix.value=k.state.sunShadowMatrix,wt.sunShadowCascade.value=k.state.sunShadowCascade,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Qp(w.state.lightProbeGridArray),B.currentProgram=ie,B.uniformsList=null,ie}function $_(E,N,H,B,k){let ft=Bt.get(E),Et=ft.currentProgram.id+","+B+","+k,ut=ft.programVariants.get(Et);return ut===void 0?(ut=Eo(E,N,H),ft.programVariants.set(Et,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=B,ft.toneMapping=k),ut}function tm(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ro.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function em(E,N){let H=Bt.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function q_(E,N,H,B,k){N.isScene!==!0&&(N=Ri),Vt.resetTextureUnits();let ft=N.fog,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ut=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:re.workingColorSpace,Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pt=C.get(B.envMap||Et,Mt),$t=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ie=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,$e=!!H.morphAttributes.color,be=us;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(be=R.toneMapping);let ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dn=ve!==void 0?ve.length:0,At=Bt.get(B),$n=w.state.lights;if(en===!0&&(si===!0||E!==Q)){let Fe=E===Q&&B.id===$;Z.setState(B,E,Fe)}let ue=!1,Or=!1;B.version===At.__version?At.needsLights&&At.lightsStateVersion!==$n.state.version||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==Pt||B.fog===!0&&At.fog!==ft||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Z.numPlanes||At.numIntersection!==Z.numIntersection)||At.vertexAlphas!==$t||At.vertexTangents!==ie||At.morphTargets!==wt||At.morphNormals!==se||At.morphColors!==$e||At.morphTargetsCount!==Dn||At.numLightProbeGrids!==Qp(w.state.lightProbeGridArray)?ue=!0:(At.outputColorSpace!==ut||At.toneMapping!==be)&&(Or=!0):(ue=!0,At.__version=B.version);let Nn=At.currentProgram;(ue===!0||Or===!0)&&(Nn=Or===!0?$_(B,N,k,ut,be):Eo(B,N,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Nn,At));let nc=!1,Zs=!1,Fr=!1,le=Nn.getUniforms(),wn=At.uniforms;if(mt.useProgram(Nn.program)&&(nc=!0,Zs=!0,Fr=!0),B.id!==$&&($=B.id,Zs=!0),nc||Q!==E){mt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),le.setValue(O,"projectionMatrix",E.projectionMatrix),le.setValue(O,"viewMatrix",E.matrixWorldInverse);let dn=le.map.cameraPosition;dn!==void 0&&dn.setValue(O,is.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&le.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Zs=!0,Fr=!0)}if(At.needsLights&&($n.state.sunShadowMap.length>0&&le.setValue(O,"sunShadowMap",$n.state.sunShadowMap,Vt),$n.state.directionalShadowMap.length>0&&le.setValue(O,"directionalShadowMap",$n.state.directionalShadowMap,Vt),$n.state.spotShadowMap.length>0&&le.setValue(O,"spotShadowMap",$n.state.spotShadowMap,Vt),$n.state.pointShadowMap.length>0&&le.setValue(O,"pointShadowMap",$n.state.pointShadowMap,Vt)),k.isSkinnedMesh){le.setOptional(O,k,"bindMatrix"),le.setOptional(O,k,"bindMatrixInverse");let Fe=k.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),le.setValue(O,"boneTexture",Fe.boneTexture,Vt))}k.isBatchedMesh&&(le.setOptional(O,k,"batchingTexture"),le.setValue(O,"batchingTexture",k._matricesTexture,Vt),le.setOptional(O,k,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",k._indirectTexture,Vt),le.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",k._colorsTexture,Vt));let Gi=H.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&K.update(k,H,Nn),(Zs||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,le.setValue(O,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(wn.envMapIntensity.value=N.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=z1()),Zs){if(le.setValue(O,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&Y_(wn,Fr),ft&&B.fog===!0&&ot.refreshFogUniforms(wn,ft),ot.refreshMaterialUniforms(wn,B,vt,Ft,w.state.transmissionRenderTarget[E.id]),At.needsLights&&At.numLightProbeGrids>0){let Fe=v,dn=0;for(let Ss of w.state.lightProbeGridArray)Ss.texture!==null&&(Fe.textures[dn]=Ss.texture,Fe.min[dn]=Ss.boundingBox.min,Fe.max[dn]=Ss.boundingBox.max,Fe.resolution[dn]=Ss.resolution,dn++);for(let Ss in Fe)Fe[Ss].length=dn;wn.probesSH.value=Fe.textures,wn.probesMin.value=Fe.min,wn.probesMax.value=Fe.max,wn.probesResolution.value=Fe.resolution}ro.upload(O,tm(At),wn,Vt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ro.upload(O,tm(At),wn,Vt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&le.setValue(O,"center",k.center),le.setValue(O,"modelViewMatrix",k.modelViewMatrix),le.setValue(O,"normalMatrix",k.normalMatrix),le.setValue(O,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let Fe=B.uniformsGroups;for(let dn=0,Ss=Fe.length;dn<Ss;dn++){let im=Fe[dn];Dt.update(im,Nn),Dt.bind(im,Nn)}}return Nn}function Y_(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Z_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,N,H){let B=Bt.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Bt.get(E.texture).__webglTexture=N,Bt.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let H=Bt.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){it=E,q=N,W=H;let B=null,k=!1,ft=!1;if(E){let ut=Bt.get(E);if(ut.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(E.viewport),Rt.copy(E.scissor),Xt=E.scissorTest,mt.viewport(et),mt.scissor(Rt),mt.setScissorTest(Xt),$=-1;return}else if(ut.__webglFramebuffer===void 0)Vt.setupRenderTarget(E);else if(ut.__hasExternalTextures)Vt.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let $t=E.depthTexture;if(ut.__boundDepthTexture!==$t){if($t!==null&&Bt.has($t)&&(E.width!==$t.image.width||E.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(E)}}let Mt=E.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);let Pt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[N])?B=Pt[N][H]:B=Pt[N],k=!0):E.samples>0&&Vt.useMultisampledRTT(E)===!1?B=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[H]:B=Pt,et.copy(E.viewport),Rt.copy(E.scissor),Xt=E.scissorTest}else et.copy(kt).multiplyScalar(vt).floor(),Rt.copy(me).multiplyScalar(vt).floor(),Xt=ye;if(H!==0&&(B=G),mt.bindFramebuffer(O.FRAMEBUFFER,B)&&mt.drawBuffers(E,B),mt.viewport(et),mt.scissor(Rt),mt.setScissorTest(Xt),k){let ut=Bt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,H)}else if(ft){let ut=N;for(let Mt=0;Mt<E.textures.length;Mt++){let Pt=Bt.get(E.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,Pt.__webglTexture,H,ut)}}else if(E!==null&&H!==0){let ut=Bt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,H)}$=-1};function nm(E){let N=Bt.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=Le.textureFormatReadable(E.format),N.__typeReadable=Le.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,H,B,k,ft,Et,ut=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){mt.bindFramebuffer(O.FRAMEBUFFER,Mt);try{let Pt=E.textures[ut],$t=Pt.format,ie=Pt.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let wt=nm(Pt);if(wt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-B&&H>=0&&H<=E.height-k&&O.readPixels(N,H,B,k,rt.convert($t),rt.convert(ie),ft)}finally{let Pt=it!==null?Bt.get(it).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,B,k,ft,Et,ut=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(N>=0&&N<=E.width-B&&H>=0&&H<=E.height-k){mt.bindFramebuffer(O.FRAMEBUFFER,Mt);let Pt=E.textures[ut],$t=Pt.format,ie=Pt.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let wt=nm(Pt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(N,H,B,k,rt.convert($t),rt.convert(ie),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $e=it!==null?Bt.get(it).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,$e);let be=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await M0(O,be,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(se),O.deleteSync(be),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,H=0){let B=Math.pow(2,-H),k=Math.floor(E.image.width*B),ft=Math.floor(E.image.height*B),Et=N!==null?N.x:0,ut=N!==null?N.y:0;Vt.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,Et,ut,k,ft),mt.unbindTexture()},this.copyTextureToTexture=function(E,N,H=null,B=null,k=0,ft=0){let Et,ut,Mt,Pt,$t,ie,wt,se,$e,be=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(H!==null)Et=H.max.x-H.min.x,ut=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,Pt=H.min.x,$t=H.min.y,ie=H.isBox3?H.min.z:0;else{let le=Math.pow(2,-k);Et=Math.floor(be.width*le),ut=Math.floor(be.height*le),E.isDataArrayTexture?Mt=be.depth:E.isData3DTexture?Mt=Math.floor(be.depth*le):Mt=1,Pt=0,$t=0,ie=0}B!==null?(wt=B.x,se=B.y,$e=B.z):(wt=0,se=0,$e=0);let ve=rt.convert(N.format),Dn=rt.convert(N.type),At;N.isData3DTexture?(Vt.setTexture3D(N,0),At=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Vt.setTexture2DArray(N,0),At=O.TEXTURE_2D_ARRAY):(Vt.setTexture2D(N,0),At=O.TEXTURE_2D),mt.activeTexture(O.TEXTURE0),mt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),mt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),mt.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let $n=mt.getParameter(O.UNPACK_ROW_LENGTH),ue=mt.getParameter(O.UNPACK_IMAGE_HEIGHT),Or=mt.getParameter(O.UNPACK_SKIP_PIXELS),Nn=mt.getParameter(O.UNPACK_SKIP_ROWS),nc=mt.getParameter(O.UNPACK_SKIP_IMAGES);mt.pixelStorei(O.UNPACK_ROW_LENGTH,be.width),mt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be.height),mt.pixelStorei(O.UNPACK_SKIP_PIXELS,Pt),mt.pixelStorei(O.UNPACK_SKIP_ROWS,$t),mt.pixelStorei(O.UNPACK_SKIP_IMAGES,ie);let Zs=E.isDataArrayTexture||E.isData3DTexture,Fr=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let le=Bt.get(E),wn=Bt.get(N),Gi=Bt.get(le.__renderTarget),Fe=Bt.get(wn.__renderTarget);mt.bindFramebuffer(O.READ_FRAMEBUFFER,Gi.__webglFramebuffer),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let dn=0;dn<Mt;dn++)Zs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(E).__webglTexture,k,ie+dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(N).__webglTexture,ft,$e+dn)),O.blitFramebuffer(Pt,$t,Pt+Et,$t+ut,wt,se,wt+Et,se+ut,O.DEPTH_BUFFER_BIT,O.NEAREST);mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||Bt.has(E)){let le=Bt.get(E),wn=Bt.get(N);mt.bindFramebuffer(O.READ_FRAMEBUFFER,L),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let Gi=0;Gi<Mt;Gi++)Zs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,le.__webglTexture,k,ie+Gi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,le.__webglTexture,k),Fr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wn.__webglTexture,ft,$e+Gi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wn.__webglTexture,ft),k!==0?O.blitFramebuffer(Pt,$t,Pt+Et,$t+ut,wt,se,wt+Et,se+ut,O.COLOR_BUFFER_BIT,O.NEAREST):Fr?O.copyTexSubImage3D(At,ft,wt,se,$e+Gi,Pt,$t,Et,ut):O.copyTexSubImage2D(At,ft,wt,se,Pt,$t,Et,ut);mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Fr?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(At,ft,wt,se,$e,Et,ut,Mt,ve,Dn,be.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(At,ft,wt,se,$e,Et,ut,Mt,ve,be.data):O.texSubImage3D(At,ft,wt,se,$e,Et,ut,Mt,ve,Dn,be):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,wt,se,Et,ut,ve,Dn,be.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,wt,se,be.width,be.height,ve,be.data):O.texSubImage2D(O.TEXTURE_2D,ft,wt,se,Et,ut,ve,Dn,be);mt.pixelStorei(O.UNPACK_ROW_LENGTH,$n),mt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue),mt.pixelStorei(O.UNPACK_SKIP_PIXELS,Or),mt.pixelStorei(O.UNPACK_SKIP_ROWS,Nn),mt.pixelStorei(O.UNPACK_SKIP_IMAGES,nc),ft===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(At),mt.unbindTexture()},this.initRenderTarget=function(E){Bt.get(E).__webglFramebuffer===void 0&&Vt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Vt.setTextureCube(E,0):E.isData3DTexture?Vt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Vt.setTexture2DArray(E,0):Vt.setTexture2D(E,0),mt.unbindTexture()},this.resetState=function(){q=0,W=0,it=null,mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var ag={type:"change"},Df={type:"start"},lg={type:"end"},au=new nr,og=new mi,H1=Math.cos(70*gf.DEG2RAD),an=new P,li=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lf=1e-6,ou=class extends hl{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new xn,this._lastTargetPosition=new P,this._quat=new xn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qa,this._sphericalDelta=new Qa,this._scale=1,this._panOffset=new P,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new P,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V1.bind(this),this._onPointerDown=G1.bind(this),this._onPointerUp=W1.bind(this),this._onContextMenu=K1.bind(this),this._onMouseWheel=q1.bind(this),this._onKeyDown=Y1.bind(this),this._onTouchStart=Z1.bind(this),this._onTouchMove=J1.bind(this),this._onMouseDown=X1.bind(this),this._onMouseMove=$1.bind(this),this._interceptControlDown=j1.bind(this),this._interceptControlUp=Q1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=de.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ag),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=li:i>Math.PI&&(i-=li),s<-Math.PI?s+=li:s>Math.PI&&(s-=li),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=an.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(au.origin.copy(this.object.position),au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(au.direction))<H1?this.object.lookAt(this.target):(og.setFromNormalAndCoplanarPoint(this.object.up,this.target),au.intersectPlane(og,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lf||this._lastTargetPosition.distanceToSquared(this.target)>Lf?(this.dispatchEvent(ag),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?li/60*this.autoRotateSpeed*t:li/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;an.copy(s).sub(this.target);let r=an.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(li*this._rotateDelta.x/e.clientHeight),this._rotateUp(li*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(li*this._rotateDelta.x/e.clientHeight),this._rotateUp(li*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function G1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function V1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function W1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lg),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function X1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case Kn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case Kn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Df)}function $1(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function q1(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(Df),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lg))}function Y1(n){this.enabled!==!1&&this._handleKeyDown(n)}function Z1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1){this.state=de.NONE;break}this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1){this.state=de.NONE;break}this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Df)}function J1(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function K1(n){this.enabled!==!1&&n.preventDefault()}function j1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Q1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Zl="\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744",zl="ugauga_village",tb="\uC54C",Si="\uC6B0\uAC00",Vs=[{name:"\uB3D9\uAD74",at:0,pet:"\uC9D1 \uC606 \uB465\uC9C0\uC5D0 \uC54C\uC774 \uB193\uC5EC\uC694"},{name:"\uC6C0\uB9C9",at:100,pet:"\uC54C\uC5D0 \uAE08\uC774 \uAC00\uC694"},{name:"\uB3CC\uC9D1",at:1e3,pet:"\uC54C\uC774 \uAE68\uACE0 \uC544\uAE30 \uACF5\uB8E1\uC774 \uB098\uC640\uC694"},{name:"\uACF5\uB8E1",at:5e3,pet:"\uB2E4 \uC790\uB780 \uACF5\uB8E1\uC774 \uB9C8\uC744\uC744 \uAC78\uC5B4 \uB2E4\uB140\uC694. \uB9C8\uC744\uB3C4 \uB113\uC5B4\uC838\uC694"}],yp=100,eb="2026-11-12",S=n=>document.getElementById(n),In=new URLSearchParams(location.search),ts=60,$f=86,hi=[[16,14],[23,20],[30,26]];function Dg(n){if(!n)return{x:0,z:0};let t=1;for(;n>3*t*(t+1);)t++;let e=n-3*t*(t-1)-1,i=Math.floor(e/t),s=e%t,r=i*Math.PI/3,a=r+2*Math.PI/3,o=l=>Math.sin(n*12.9898+l)*43758.5453%1*4;return{x:(Math.cos(r)*t+Math.cos(a)*s)*$f+o(1),z:(Math.sin(r)*t+Math.sin(a)*s)*$f+o(2)}}function vp(n){let t=Math.floor(n/ts),e=Dg(t),i=n%ts,s=0;for(;i>=hi[s][1];)i-=hi[s++][1];let[r,a]=hi[s],o=i/a*2*Math.PI+s*.5+t;return{x:e.x+Math.cos(o)*r,z:e.z+Math.sin(o)*r,cx:e.x,cz:e.z}}var Qe=+In.get("demo")||0,En=/^http:\/\/localhost:\d+$/.test(In.get("api"))?In.get("api"):"https://ugauga-api.ugauga-village.workers.dev",[fo,qf]=await Promise.all([fetch("./residents.json",{cache:"no-store"}).then(n=>n.json()).catch(()=>({followers:0,residents:[]})),En&&!Qe?fetch(En+"/api/residents",{signal:AbortSignal.timeout(3e3)}).then(n=>n.json()).catch(()=>null):null]);if(qf){let n=new Set(fo.residents.map(t=>t.toLowerCase()));for(let t of qf.joined||[])n.has(t.toLowerCase())||(n.add(t.toLowerCase()),fo.residents.push(t))}var ee=Qe?Array.from({length:Qe},(n,t)=>"sample_"+(t+1)):fo.residents,He=ee.length,Jl=Qe||Math.max(fo.followers||0,qf?.followers||0,He),_e=In.has("era")?Math.min(Vs.length-1,Math.max(0,+In.get("era")||0)):Vs.findLastIndex(n=>Jl>=n.at),Ve=_e===3;Ve&&($f=176,hi=[[26,14],[42,20],[58,26]]);var Ng=hi[1][0]-hi[0][0],cg=Ve?2.6:.75,po=n=>hi[n][0]+Ng/2,Hi=hi[2][0]+Ng/2+4,ks=hi[0][0]-3.5;if(In.has("test")){let n=1/0,t=Array.from({length:1500},(e,i)=>vp(i));for(let e=0;e<t.length;e++)for(let i=0;i<e;i++)n=Math.min(n,Math.hypot(t[e].x-t[i].x,t[e].z-t[i].z));console.assert(n>5,"plots overlap",n),document.title=`plot test ${n>5?"OK":"FAIL"} min=${n.toFixed(2)}`}var Ug=Math.floor(He/ts)+1,vn=Array.from({length:Ug},(n,t)=>Dg(t)),ae=Math.max(...vn.map(n=>Math.hypot(n.x,n.z)))+Hi+10,Ee={x:Math.cos(.6)*(ae+75),z:Math.sin(.6)*(ae+75),r:48,f:n=>48*(1+.08*Math.sin(3*n+.5)+.05*Math.sin(7*n+1.3))},nb=(n,t,e=10)=>Math.hypot(n-Ee.x,t-Ee.z)<Ee.f(Math.atan2(t-Ee.z,n-Ee.x))+e,cn=In.has("fps");document.body.classList.toggle("shoot",cn);var Og=Math.max(1,Math.floor((Date.now()-new Date(eb+"T00:00:00+09:00"))/864e5)+1);S("vname").textContent=Zl;S("vname").insertAdjacentHTML("beforeend",`<small>${Og}\uC77C\uC9F8</small>`);S("medal").textContent=Vs[_e].name;S("vstat").textContent=`${Vs[_e].name} \uC2DC\uB300 \xB7 \uC9D1 ${He.toLocaleString()}\uCC44`+(He>ts?` \xB7 \uB3D9\uB124 ${Math.ceil(He/ts)}\uACF3`:"");var Sr=Vs[_e+1];S("vnext").textContent=Sr?`${Sr.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,Sr.at-Jl).toLocaleString()}\uBA85`:"";var ib=300,hg=100,sb=(Math.floor(Jl/hg)+1)*hg;S("kw").textContent=`\u300C${tb}\u300D`;S("istat").textContent=`\uC9D1 ${He.toLocaleString()}\uCC44 \xB7 ${Vs[_e].name} \uC2DC\uB300`;zl?S("iglink").href=`https://www.instagram.com/${zl}/`:S("iglink").hidden=!0;S("join").onclick=()=>S("how").showModal();S("howx").onclick=()=>S("how").close();var Ei=matchMedia("(pointer:coarse)").matches||innerWidth<700||In.has("lite"),rb=15776138,Ne=new Sl({canvas:S("c"),antialias:!0,powerPreference:"high-performance"});Ne.setPixelRatio(Math.min(devicePixelRatio,Ei?1.5:2));Ne.toneMapping=no;Ne.toneMappingExposure=.95;Ne.shadowMap.enabled=!0;var te=new Ga;te.fog=new Wo(rb,160,720+ae*2);var pe=new mn(50,1,.5,Math.max(2500,ae*4+700));pe.position.set(0,ae*.9+15,ae*1.3+25);var qt=new ou(pe,Ne.domElement);qt.enableDamping=!0;qt.maxPolarAngle=1.45;qt.minDistance=8;qt.maxDistance=ae*3+80;qt.autoRotate=!0;qt.autoRotateSpeed=.3;qt.screenSpacePanning=!1;var ug={map:[{LEFT:Kn.PAN,MIDDLE:Kn.DOLLY,RIGHT:Kn.ROTATE},{ONE:xi.PAN,TWO:xi.DOLLY_ROTATE}],look:[{LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.ROTATE},{ONE:xi.ROTATE,TWO:xi.DOLLY_ROTATE}]},Mp=n=>{Object.assign(qt.mouseButtons,ug[n][0]),Object.assign(qt.touches,ug[n][1]),qt.enablePan=qt.zoomToCursor=n==="map"};Mp("map");{let n=new Map,t=Ne.domElement,e=null,i=()=>{let[r,a]=[...n.values()];return Math.atan2(a.y-r.y,a.x-r.x)};t.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(n.set(r.pointerId,{x:r.clientX,y:r.clientY}),e=n.size===2?i():null)}),t.addEventListener("pointermove",r=>{if(!n.has(r.pointerId)||(n.set(r.pointerId,{x:r.clientX,y:r.clientY}),n.size!==2||e===null))return;let a=i(),o=Math.atan2(Math.sin(a-e),Math.cos(a-e));e=a,qt._rotateLeft(-o*1.3)});let s=r=>{n.delete(r.pointerId),e=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}var bi=null;qt.addEventListener("start",()=>{qt.autoRotate=!1,bi=null});var Yf=new Ja(16773336,6969920,.95);te.add(Yf);var kl=new P(-80,110,60),lu=Math.min(ae+12,95),Ke=new Ka(16765600,2.7);Ke.castShadow=!0;Ke.shadow.mapSize.setScalar(Ei?1024:2048);Object.assign(Ke.shadow.camera,{left:-lu,right:lu,top:lu,bottom:-lu,near:1,far:420});Ke.shadow.bias=-5e-4;Ke.shadow.normalBias=.35;Ke.shadow.autoUpdate=!1;te.add(Ke,Ke.target);function Sp(){Ne.setSize(innerWidth,innerHeight,!1),pe.aspect=innerWidth/innerHeight,pe.updateProjectionMatrix()}addEventListener("resize",Sp);Sp();var oo=7,Lt=()=>{oo|=0,oo=oo+1831565813|0;let n=Math.imul(oo^oo>>>15,1|oo);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296},Pe=(n,t=0)=>{let e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},Fg=Ne.capabilities.getMaxAnisotropy();function Cn(n,t,e=1,i=1){let s=document.createElement("canvas");s.width=s.height=n,t(s.getContext("2d"),n);let r=new rr(s);return r.colorSpace=pn,r.wrapS=r.wrapT=Na,r.repeat.set(e,i),r.anisotropy=Fg,r}var sa=(n,t,e)=>{let i=n.clone();return i.repeat.set(t,e),i.needsUpdate=!0,i},Su=[-1,0,1],Gn=(n,t,e)=>{n.globalAlpha=1,n.fillStyle=e,n.fillRect(0,0,t,t)};function We(n,t,e,i,s,r,a){for(let o=0;o<e;o++){let l=s+Lt()*(r-s),c=l*(.6+Lt()*.6),h=Lt()*t,d=Lt()*t,u=Lt()*3.14;n.globalAlpha=a*(.4+Lt()*.6),n.fillStyle=i[o%i.length];for(let f of Su)for(let m of Su)n.beginPath(),n.ellipse(h+f*t,d+m*t,l,c,u,0,6.283),n.fill()}}function Hn(n,t,e,i,s,r,a,o,l){n.lineCap="round";for(let c=0;c<e;c++){let h=Lt()*t,d=Lt()*t,u=a+(Lt()-.5)*o,f=s*(.5+Lt());n.globalAlpha=l*(.4+Lt()*.6),n.strokeStyle=i[c%i.length],n.lineWidth=r*(.5+Lt());for(let m of Su)for(let y of Su)n.beginPath(),n.moveTo(h+m*t,d+y*t),n.lineTo(h+m*t+Math.cos(u)*f,d+y*t+Math.sin(u)*f),n.stroke()}}var bt=Math.PI/2,Se={grass:Cn(1024,(n,t)=>{Gn(n,t,"#6f8246"),We(n,t,260,["#5f7a3a","#83924c","#566e36","#8f9652"],12,70,.35),Hn(n,t,2600,["#4c6630","#93a25a","#62803c"],10,1.6,-bt,1.2,.5),We(n,t,70,["#9a8452","#b39a62"],3,12,.4)},120,120),dirt:Cn(512,(n,t)=>{Gn(n,t,"#b39262"),We(n,t,200,["#a08052","#c4a674","#8f7046"],6,40,.4),We(n,t,600,["#7a6648","#d8c193"],1,3,.7),Hn(n,t,120,["#8a6c44"],16,1.2,0,6.28,.4)},3,3),rock:Cn(512,(n,t)=>{Gn(n,t,"#8f877b"),We(n,t,180,["#7b7469","#a39c90","#6e675d","#b0a898"],8,50,.45),Hn(n,t,70,["#4d473f"],60,1.8,0,6.28,.6),We(n,t,700,["#5c554c","#c2bbac"],.8,2.2,.6),We(n,t,30,["#6f7a4e"],6,18,.35)}),hide:Cn(512,(n,t)=>{Gn(n,t,"#b07d4c"),We(n,t,120,["#9c6a3c","#c4925e","#8a5c33"],15,60,.4),Hn(n,t,1500,["#7c5430","#c99a66"],7,1,bt,.5,.35),Hn(n,t,12,["#5e3d22"],700,3.5,bt,.04,.8),Hn(n,t,260,["#ecd6ae"],8,1.6,0,.3,.7)},3,1),thatch:Cn(512,(n,t)=>{Gn(n,t,"#c9a352"),Hn(n,t,3200,["#a8823a","#e0c070","#8e6c2e","#d6b25e"],42,2,bt,.25,.6),Hn(n,t,5,["#6e5220"],700,6,0,.02,.5)},4,1),wood:Cn(256,(n,t)=>{Gn(n,t,"#6e4f33"),Hn(n,t,700,["#553a24","#86633f","#4a321e"],60,2,bt,.12,.6),We(n,t,10,["#3c2a18"],3,7,.7)}),leaf:Cn(256,(n,t)=>{Gn(n,t,"#4f7f3a"),Hn(n,t,420,["#3d6a2c","#74a04d","#8db85e"],60,2,bt,.2,.5)}),egg:Cn(256,(n,t)=>{Gn(n,t,"#fbf3df"),We(n,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6)}),eggCrack:Cn(256,(n,t)=>{Gn(n,t,"#fbf3df"),We(n,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6);for(let e=0;e<9;e++){let i=Lt()*t,s=Lt()*t,r=Lt()*6.28;n.globalAlpha=1,n.strokeStyle="#2e2014",n.lineWidth=5,n.lineJoin="miter",n.beginPath(),n.moveTo(i,s);for(let a=0;a<7;a++)r+=(Lt()-.5)*2.2,i+=Math.cos(r)*20,s+=Math.sin(r)*20,n.lineTo(i,s);n.stroke()}}),fur:Cn(256,(n,t)=>{Gn(n,t,"#d39a3e"),Hn(n,t,1100,["#b07a2c","#e6b860"],6,1,bt,.6,.4),We(n,t,60,["#3a2614"],5,12,.85)}),bone:Cn(256,(n,t)=>{Gn(n,t,"#efe6d0"),We(n,t,90,["#d6c9aa","#fff8e8"],3,20,.4),Hn(n,t,60,["#b8a986"],30,1,bt,.5,.5)}),soft:Cn(128,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)})};if(!cn||In.has("hq")){let n=new sl;Object.entries({grass:"grass",dirt:"dirt",rock:"rock",hide:"hide",thatch:"thatch",wood:"wood",leaf:"leaf",egg:"egg",eggCrack:"eggcrack",fur:"fur",bone:"bone"}).forEach(([t,e])=>n.load(`./tex/${e}.jpg`,i=>{Se[t].dispose(),Se[t].image=i.image,Se[t].needsUpdate=!0}))}var El=(n,t,e)=>Cn(256,(i,s)=>{Gn(i,s,n),We(i,s,340,t,3,9,.5),e&&Hn(i,s,26,[e],130,13,bt,.35,.5),We(i,s,500,["#00000022"],1,2,.5)},2,2),Bg=(()=>{let n=document.createElement("canvas");n.width=4,n.height=256;let t=n.getContext("2d"),e=new rr(n);return e.colorSpace=pn,te.background=e,(i,s,r,a)=>{let o=t.createLinearGradient(0,0,0,256);[[0,i],[.3,s],[.5,r],[.62,a],[1,a]].forEach(([l,c])=>o.addColorStop(l,c)),t.fillStyle=o,t.fillRect(0,0,4,256),e.needsUpdate=!0}})();Bg("#4f95c0","#9cc7d3","#f3cf9f","#f0b98a");var Ge=(n,t={})=>new Jn({color:n,flatShading:!0,roughness:1,...t}),ke=(n,t={})=>new Jn({map:n,bumpMap:n,bumpScale:2.5,flatShading:!0,roughness:.95,...t}),on=(n,t={})=>new Ds({color:n,fog:!1,...t}),at=(n,t,e=[0,0,0],i,s)=>{let r=new Bn(n,t);return r.position.set(...e),i&&r.scale.set(...i),s&&r.rotation.set(...s),r},es=(...n)=>{n.forEach(t=>{t.traverse(e=>{e.isMesh&&e.material.isMeshStandardMaterial&&(e.castShadow=!0,e.receiveShadow=!0)}),te.add(t)})},Ct=(n,t,e=5)=>new qi(n,t,e),St=(n,t,e,i=5)=>new cs(n,t,e,i),he=new zn(1,9,7),Te=new $a(1,0),ki=new Wa(1,0),bp=new Wa(1,1),ra=Ge(1840144),Zf=Ge(16183522),Pl=Ge(1840144,{emissive:16751168,emissiveIntensity:0}),Wn=ke(Se.rock),ce=ke(Se.wood),Nf=ke(Se.hide),dg=ke(Se.thatch),ea=ke(Se.leaf,{side:Qn}),Ue=ke(Se.bone,{bumpScale:1}),bu=new Wt,ln=new Ot;function Re(n,t,{vary:e=.16,cast:i=!0,recv:s=!0}={}){return t.length?n.filter(r=>!(r[5]&&t.length>(Ei?300:700))).map(([r,a,o=[0,0,0],l=[1,1,1],c=[0,0,0],h],d)=>{let u=new ir(r,a,t.length),f=new Wt().compose(new P(...o),new xn().setFromEuler(new ri(...c)),new P(...l));return t.forEach((m,y)=>{if(u.setMatrixAt(y,bu.multiplyMatrices(m,f)),e){let g=1-e*Pe(y,d);u.setColorAt(y,ln.setRGB(g,g*(.97+.03*Pe(y,9)),g*(.94+.06*Pe(y,5))))}}),u.castShadow=i&&!h,u.receiveShadow=s,u.userData={L:f,mats:t},te.add(u),u}):[]}var Wu=(n,t,e=0,i=1)=>new Wt().compose(new P(n,0,t),new xn().setFromEuler(new ri(0,e,0)),new P(i,i,i)),Xu=(n,t,e,i,s,r,a=0)=>new Wt().compose(new P(n,t,e),new xn().setFromEuler(new ri(0,a,0)),new P(i,s,r)),Hl=n=>new jo(n,48).rotateX(-bt),Uf=(n,t,e=3)=>{let i=Math.floor(n),s=Math.floor(t),r=(n-i)**2*(3-2*(n-i)),a=(t-s)**2*(3-2*(t-s)),o=(l,c)=>Pe(l*157+c*311,e);return(o(i,s)*(1-r)+o(i+1,s)*r)*(1-a)+(o(i,s+1)*(1-r)+o(i+1,s+1)*r)*a};function zg(n,t,e){let i=n.attributes.position,s=[],r=new P;n.computeBoundingBox();let{min:a,max:o}=n.boundingBox;for(let l=0;l<i.count;l++){r.fromBufferAttribute(i,l);let c=Math.round(r.x*50)*7+Math.round(r.y*50)*131+Math.round(r.z*50)*17,h=Pe(c,1),d=(r.y-a.y)/(o.y-a.y);if(Math.hypot(r.x,r.z)>.001){let f=1+(h-.5)*t;i.setXYZ(l,r.x*f,r.y+(Pe(c,2)-.5)*t*.3*(o.y-a.y)*(d>.01&&d<.99),r.z*f)}if(e){let f=e(d,h);s.push(f.r,f.g,f.b)}}return e&&n.setAttribute("color",new Jt(s,3)),n.computeVertexNormals(),n}var Jf=Math.max(1500,ae+950);Se.grass.repeat.setScalar(Jf/12.5);var ab=(()=>{let n=new Us(Jf*2,Jf*2,Ei?90:160,Ei?90:160).rotateX(-bt),t=n.attributes.position,e=[],i=new Ot;for(let r=0;r<t.count;r++){let a=t.getX(r),o=t.getZ(r),l=Uf(a/140,o/140),c=Uf(a/45,o/45,5),h=Math.max(0,Uf(a/220,o/220,7)-.55)*2.2,d=.82+l*.22+(c-.5)*.12;i.setRGB(d*(1+h*.2),d*(1+h*.06),d*(1-h*.25)),e.push(i.r,i.g,i.b)}n.setAttribute("color",new Jt(e,3));let s=at(n,ke(Se.grass,{flatShading:!1,bumpScale:1.5,vertexColors:!0}));return s.receiveShadow=!0,te.add(s),s})(),Kl=vn.map(n=>Wu(n.x,n.z)),ob=Re([[Hl(ks),ke(sa(Se.dirt,ks/4.2,ks/4.2),{flatShading:!1}),[0,.06,0]],...hi.map((n,t)=>{let e=po(t);return[new nl(e-cg,e+cg,72).rotateX(-bt),ke(sa(Se.dirt,e/3,e/3),{flatShading:!1}),[0,.04,0]]})],Kl,{vary:0,cast:!1}),kg=[];for(let n=1;n<Ug;n++){let t=vn[n],e=vn.slice(0,n).reduce((r,a)=>Math.hypot(a.x-t.x,a.z-t.z)<Math.hypot(r.x-t.x,r.z-t.z)?a:r),i=Math.hypot(e.x-t.x,e.z-t.z),s=at(new Us(i,Ve?6:3.2).rotateX(-bt),ke(sa(Se.dirt,i/6,.5),{flatShading:!1}),[(t.x+e.x)/2,.035,(t.z+e.z)/2],null,[0,-Math.atan2(e.z-t.z,e.x-t.x),0]);s.receiveShadow=!0,te.add(s),kg.push([t,e])}var lb=(n,t,e)=>vn.every(i=>(n-i.x)**2+(t-i.z)**2>e*e)&&kg.every(([i,s])=>{let r=s.x-i.x,a=s.z-i.z,o=Math.max(0,Math.min(1,((n-i.x)*r+(t-i.z)*a)/(r*r+a*a)));return Math.hypot(n-i.x-r*o,t-i.z-a*o)>4}),cu=["\uBAA8\uB2E5\uBD88\uACE8","\uBC14\uC704\uACE8","\uD070\uB098\uBB34\uACE8","\uBF08\uC5B8\uB355","\uBB3C\uAC00\uB9D0","\uBD88\uC528\uACE8","\uB3CC\uD0D1\uB9D0","\uACE0\uC0AC\uB9AC\uB9D0","\uC1A1\uACF3\uB2C8\uACE8","\uCCA8\uBC99\uB9D0","\uD683\uBD88\uB9D0","\uB108\uB7ED\uBC14\uC704\uACE8","\uADF8\uB298\uB9D0","\uAC08\uBE44\uBF08\uACE8","\uAC1C\uC6B8\uB9D0"],aa=n=>cu[n%cu.length]+(n>=cu.length?" "+(Math.floor(n/cu.length)+1):""),jl=n=>n?n%5:0;Re([[new ai(1.5,.32,4,9),Wn,[0,.2,0],,[bt,0,0]],[Ct(.7,1.9,6),on(16747050),[0,1.1,0]],[Ct(.35,1.2,6),on(16769162),[0,.9,0]],...[0,2.1,4.2].map(n=>[St(.13,.16,1.9,5),ce,[Math.cos(n)*.4,.8,Math.sin(n)*.4],,[Math.sin(n)*.5,0,-Math.cos(n)*.5]]),...[.6,2.7,4.8].map(n=>[St(.34,.38,2.4,7),ce,[Math.cos(n)*5,.38,Math.sin(n)*5],,[bt,0,-n]])],Kl.filter((n,t)=>t&&jl(t)===0),{vary:0});var $u=n=>Kl.filter((t,e)=>e&&jl(e)===n);Re([[bp,Wn,[0,1.7,0],[2.7,2.5,2.5]],[ki,Wn,[2.5,.6,.9],[1.1,.9,1]],[ki,Wn,[-2.1,.5,-1.3],[1,.7,1.1]]],$u(1),{vary:0});Re([[St(.7,1,6,7),ce,[0,3,0]],[Ct(4,4.6,8),ea,[0,6.6,0]],[Ct(3,4,8),ea,[0,9.2,0]],[Ct(1.8,3.2,8),ea,[0,11.6,0]]],$u(2),{vary:0});Re([[St(.9,1.1,1,7),Ue,[0,.5,0]],[St(.7,.9,1,7),Ue,[0,1.5,0]],[St(.5,.7,1,7),Ue,[0,2.5,0]],[he,Ue,[0,3.6,0],[.8,.65,.75]],[Ct(.15,1,6),Ue,[.7,4,0],,[0,0,-.6]],[Ct(.15,1,6),Ue,[-.7,4,0],,[0,0,.6]]],$u(3),{vary:0});Re([[Hl(3.4),new Jn({color:5218224,roughness:.12,metalness:.2}),[0,.09,0]],[new ai(3.5,.4,5,12),Wn,[0,.15,0],,[bt,0,0]]],$u(4),{vary:0,cast:!1});vn.slice(1).forEach((n,t)=>da("\uB3D9\uB124",aa(t+1),!0,1.4).position.set(n.x,jl(t+1)===2?15:8,n.z));{let n=[16777215,14078150,14479300,16773836,13493478,16766644];ob.forEach(t=>{Kl.forEach((e,i)=>t.setColorAt(i,ln.setHex(n[i%n.length]))),t.instanceColor.needsUpdate=!0})}var Ep=Kl.slice(1).map(n=>n.clone().multiply(new Wt().makeTranslation(0,0,ks-2.5))),fg=Re([[he,ke(Se.fur,{flatShading:!1}),[0,1.15,0],[.62,.72,.52]],[he,Ge(14723192),[0,2.1,0],[.42,.42,.42]],[he,Ge(2759698),[0,2.33,-.06],[.47,.34,.45]],[Te,ra,[.15,2.16,.38],[.05,.05,.04]],[Te,ra,[-.15,2.16,.38],[.05,.05,.04]],[St(.16,.15,.6),Ge(14723192),[.22,.3,0]],[St(.16,.15,.6),Ge(14723192),[-.22,.3,0]],[St(.08,.22,1.3,6),ce,[.75,1.3,.1],,[0,0,-.5]]],Ep,{vary:0});{let n=[];for(let i=0;i<70;i++){let s=Lt()*6.283,r=Lt()*(ae+260),a=30+Lt()*70;n.push(Xu(Math.cos(s)*r,.02,Math.sin(s)*r,a,1,a))}let[t]=Re([[new Us(1,1).rotateX(-bt),new Ds({map:Se.soft,transparent:!0,opacity:.28,depthWrite:!1})]],n,{vary:0,cast:!1,recv:!1}),e=[5205550,11972186,6193208,10259018];n.forEach((i,s)=>t.setColorAt(s,ln.setHex(e[s%4]))),t.instanceColor.needsUpdate=!0,t.renderOrder=1}var pg=(n,t,e,i=.6)=>Array.from({length:t},(s,r)=>{let a=i+r*(6.283-2*i)/(t-1);return[ki,Wn,[Math.sin(a)*n,e*.5,Math.cos(a)*n],[e,e*.7,e*1.1],[0,a,0],1]}),Kf=[[[bp,Wn,[0,1.2,0],[2.5,1.9,2.3]],[ki,Wn,[-2,.6,.6],[1.1,.95,1]],[ki,Wn,[1.9,.5,-.5],[1,.75,1.1]],[ki,Wn,[.3,2.6,-.4],[1,.55,.9]],[he,Pl,[0,.65,1.95],[.85,.95,.5]],[St(.12,.12,2.1),ce,[0,1.62,2.3],,[0,0,bt],1],[St(.11,.14,1.6),ce,[-.95,.8,2.3],,[0,0,-.1],1],[St(.11,.14,1.6),ce,[.95,.8,2.3],,[0,0,.1],1],[Te,Ue,[-1.3,.2,2.6],[.24,.2,.22],,1],[St(.05,.05,.7),Ue,[-1.05,.08,2.9],,[bt,0,.6],1]],[[new qi(2.1,3.2,10),Nf,[0,1.6,0]],[Ct(.75,1.7,3),Pl,[0,.85,1.5],[1,1,.45]],[St(.06,.06,1.7,4),ce,[0,3.3,0],,[.38,0,0],1],[St(.06,.06,1.7,4),ce,[0,3.3,0],,[-.2,0,.36],1],[St(.06,.06,1.7,4),ce,[0,3.3,0],,[-.2,0,-.36],1],[St(.07,.07,2,4),ce,[-.52,.92,1.66],,[-.58,0,-.28],1],[St(.07,.07,2,4),ce,[.52,.92,1.66],,[-.58,0,.28],1],[new ai(1.46,.07,4,12),ce,[0,1,0],,[bt,0,0],1],[new ai(.69,.06,4,9),ce,[0,2.2,0],,[bt,0,0],1],...pg(2.15,5,.38),[St(.06,.06,1.5,4),ce,[2.5,.75,-.9],,,1],[St(.06,.06,1.5,4),ce,[2.5,.75,.3],,,1],[St(.05,.05,1.5,4),ce,[2.5,1.5,-.3],,[bt,0,0],1],[new Ye(.05,.6,.42),Nf,[2.5,1.15,-.6],,,1],[new Ye(.05,.5,.36),Nf,[2.5,1.2,0],,,1]],[[St(1.9,2.05,1.7,12),ke(sa(Se.rock,3,1)),[0,.85,0]],[new qi(2.7,2.3,12),dg,[0,2.85,0]],[new ai(2.55,.13,4,14),dg,[0,1.76,0],,[bt,0,0],1],[new Ye(.85,1.25,.3),Pl,[0,.63,1.95]],[new Ye(.14,1.4,.2),ce,[-.55,.7,2.06],,,1],[new Ye(.14,1.4,.2),ce,[.55,.7,2.06],,,1],[new Ye(1.36,.16,.24),ce,[0,1.44,2.06],,,1],[new Ye(.46,.4,.2),Pl,[1.69,1.05,.98],,[0,1.047,0],1],[St(.08,.08,.8,4),ce,[0,4.25,0],,,1],...pg(2.2,4,.42,1),[St(.13,.13,.95),ce,[2.6,.13,-.75],,[bt,0,0],1],[St(.13,.13,.95),ce,[2.87,.13,-.75],,[bt,0,0],1],[St(.13,.13,.95),ce,[2.73,.36,-.75],,[bt,0,0],1]]];Kf[3]=[...Kf[2],[Ct(.17,2.6,6),Ue,[-1,1.3,2.25],,[0,0,-.28]],[Ct(.17,2.6,6),Ue,[1,1.3,2.25],,[0,0,.28]],[Te,Ue,[0,1.85,2.2],[.3,.26,.24],,1]];var Ws=ee.map((n,t)=>vp(t)),mo=Ws.map((n,t)=>Wu(n.x,n.z,Math.atan2(n.cx-n.x,n.cz-n.z)+(Pe(t,1)-.5)*.3,(.92+Pe(t,2)*.2)*(Ve?1.25:1))),cb=Re(Kf[_e],mo),Ti=n=>{let t=0;for(let e of n)t=t*31+e.charCodeAt(0)>>>0;return(Math.imul(t,2654435761)>>>0)/4294967296},Hg=new Set,Gg=(n,t,e)=>{n&&(Hg.add(n),ee.forEach((i,s)=>n.setColorAt(s,ln.setHSL(Ti(i),t,e))),n.instanceColor.needsUpdate=!0)},_r=ke(_e===1?Se.eggCrack:Se.egg,{roughness:.6,flatShading:!1,bumpScale:.6,side:Qn}),ui=mo.map(n=>n.clone().multiply(new Wt().makeTranslation(1.9,0,1.6))),qu=ui.map(n=>n.clone().multiply(new Wt().makeScale(1.5,1.5,1.5)));Re([[new ai(.5,.15,4,8),ce,[0,.13,0],,[bt,0,0],1]],ui);var tn=["\uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD0C0\uB974\uBCF4\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD53C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD2B8\uB9AC\uCF00\uB77C\uD1B1\uC2A4","\uD504\uD14C\uB77C\uB178\uB3C8","\uBE0C\uB77C\uD0A4\uC624\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD14C\uACE0\uC0AC\uC6B0\uB8E8\uC2A4","\uC548\uD0AC\uB85C\uC0AC\uC6B0\uB8E8\uC2A4","\uD30C\uB77C\uC0AC\uC6B0\uB864\uB85C\uD478\uC2A4","\uBCA8\uB85C\uD0A4\uB78D\uD1A0\uB974","\uC778\uB3C4\uBBF8\uB204\uC2A4 \uB809\uC2A4","\uBAA8\uC0AC\uC0AC\uC6B0\uB8E8\uC2A4"],jf=[1,1,1,0,1,0,0,0,0,1,1,1],pr={plant_patrick_gg:{rank:1,bow:1},nx_er75:{rank:2},mini_manymo1:{rank:3,name:"\uC774\uBB38\uB3D9\uC904\uC7C1\uC774"}},hu=In.get("award"),ji=ee.map((n,t)=>pr[n.toLowerCase()]||(hu&&t===4?hu==="bow"?{bow:1}:hu==="name"?{rank:3,name:"\uBF40\uC9DD\uC774"}:{kind:+hu,rank:2}:null)),hb=ji.flatMap((n,t)=>n?.bow?[t]:[]),oe=ee.map((n,t)=>ji[t]?.kind??Math.floor(Ti(n+"!")*10)),Tp=["","\uD669\uAE08","\uBB34\uC9C0\uAC1C"],mg=+In.get("rare")||0,ns=ee.map((n,t)=>{if(mg)return t%9===4?mg:0;if(ji[t]?.bow)return 2;let e=Ti(n+"*");return e<.001?2:e<.011?1:0}),gg=n=>new zn(1,9,4,0,6.283,n?0:bt,bt),wp=(()=>{let n=new zn(1,16,6,0,6.283,bt-.12,bt+.12),t=n.attributes.position;for(let e=0;e<=16;e++)t.setY(e,t.getY(e)+(e%2?.2:-.03));return n.computeVertexNormals(),n})(),Qf=[],Hs=[];if(_e===0)Hs.push(...Re([[he,_r,[0,.66,0],[.45,.6,.45]]],ui,{vary:0}));else if(_e===1)Hs.push(...Re([[he,Ge(16762980,{emissive:16747040,emissiveIntensity:.9}),[0,.68,0],[.4,.55,.4]]],ui,{vary:0,cast:!1}),...Re([[gg(0),_r,[0,.66,0],[.45,.6,.45]],[gg(1).translate(0,.2,0).rotateZ(.24),_r,[0,.66,0],[.45,.6,.45]]],ui,{vary:0}));else{let n=new zn(1,5,2,0,2.2,.4,.8),t=Re([[wp,_r,[0,.72,0],[.58,.68,.58]],[n,_r,[-.8,.03,.4],[.22,.22,.22],[.5,1,2.6],1],[n,_r,[.65,.03,.7],[.16,.16,.16],[2.4,2,.3],1]],qu,{vary:0,cast:He<=1500});t.forEach(e=>Gg(e,.62,.76)),_e===2&&Hs.push(t[0]),Qf.push(...t)}Hs.forEach(n=>n.material===_r&&Gg(n,.62,.76));var ub={S:1,B:.62,K:.36},Vg={value:0};function vr(n,t=1,e=0){let i=[],s=[],r=[],a=[],o=[],l=[],c=new Wt,h=new Ot;for(let[f,m,y=[0,0,0],g=[1,1,1],p=[0,0,0],_]of n){let b=e&&mb.get(f)||f,v=(b.index?b.toNonIndexed():b.clone()).applyMatrix4(c.compose(new P(...y),new xn().setFromEuler(new ri(...p)),new P(...g)));if(e&&(v.computeBoundingSphere(),v.boundingSphere.radius<e)){v.dispose();continue}let A=v.attributes.position,w=v.attributes.normal,x=v.attributes.uv,T=typeof m=="string",D=ub[m];T||h.setHex(m);for(let R=0;R<A.count;R++){let U=A.getZ(R)*t;i.push(A.getX(R)*t,A.getY(R)*t,U),s.push(w.getX(R),w.getY(R),w.getZ(R)),r.push(T?x.getX(R):0,T?x.getY(R):0),T?a.push(D,D,D):a.push(h.r,h.g,h.b),o.push(+T),_?_[0]==="leg"?l.push(_[2]*t,_[3]*t,_[1],0):_[0]==="wing"?l.push(_[2]*t,_[3]*t,_[1]*2,0):l.push(0,0,0,Math.max(0,_[0]==="tail"?_[1]*t-U:U-_[1]*t)*_[2]):l.push(0,0,0,0)}v.dispose()}let d=new Be,u=(f,m)=>new Jt(f,m);return d.setAttribute("position",u(i,3)),d.setAttribute("normal",u(s,3)),d.setAttribute("uv",u(r,2)),d.setAttribute("color",u(a,3)),d.setAttribute("aTint",u(o,1)),d.setAttribute("aAnim",u(l,4)),d.computeBoundingSphere(),d}var db=[`float ph = aPhase;
   if (abs(aAnim.z) > 1.5) { float a = sin(ph) * 0.42 * sign(aAnim.z); vec2 d = transformed.xy - aAnim.xy; transformed.xy = aAnim.xy + vec2(d.x * cos(a) - d.y * sin(a), d.x * sin(a) + d.y * cos(a)); }
   else if (aAnim.z != 0.0) { float a = sin(ph) * 0.5 * aAnim.z; vec2 d = transformed.yz - aAnim.xy; transformed.yz = aAnim.xy + vec2(d.x * cos(a) - d.y * sin(a), d.x * sin(a) + d.y * cos(a)); }
   else transformed.y += sin(ph * 2.0) * 0.05;
   transformed.x += sin(ph * 0.5 - transformed.z * 0.3) * aAnim.w;`,`float ph = uTime * (1.5 + fract(aPhase) * 0.9) + aPhase * 6.283, w = smoothstep(0.7, 1.25, transformed.y), h = transformed.y - 0.7;
   transformed.x += h * sin(ph) * 0.13 * w; transformed.z += h * sin(ph * 1.31 + 1.0) * 0.08 * w; transformed.y += abs(sin(ph * 0.5)) * 0.05 * w;`];function Ap(n,t,e){let i=new Jn({map:n,bumpMap:n,bumpScale:.8,roughness:.78,flatShading:t,vertexColors:!0});return i.onBeforeCompile=s=>{s.uniforms.uTime=Vg,s.vertexShader=`attribute float aTint; attribute vec4 aAnim; attribute float aPhase; attribute float aRare; uniform float uTime; varying float vTint; varying float vRare;
`+s.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
vTint = aTint; vRare = aRare; if (aTint < 0.5) vColor.rgb = color.rgb;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+db[+e]),s.fragmentShader=`varying float vTint; varying float vRare; uniform float uTime;
`+s.fragmentShader.replace("#include <map_fragment>",`vec4 d0 = diffuseColor;
#include <map_fragment>
diffuseColor = mix(d0, diffuseColor, vTint);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
if (vRare > 0.5 && vTint > 0.5) roughnessFactor = vRare < 1.5 ? 0.36 : 0.28;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (vRare > 0.5) {
          float fr = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.5); // \uAC00\uC7A5\uC790\uB9AC\uC77C\uC218\uB85D 1
          if (vRare < 1.5) { // \uD669\uAE08: \uD638\uBC15\uBE5B \uBAB8 + \uAC00\uC7A5\uC790\uB9AC \uAE08\uBE5B + \uB4DC\uBB38\uB4DC\uBB38 \uBC18\uC9DD\uC784
            float sp = pow(max(0.0, sin(vMapUv.x * 37.0 + uTime * 2.3) * sin(vMapUv.y * 31.0 - uTime * 1.6)), 26.0);
            totalEmissiveRadiance += (vec3(1.0, 0.6, 0.12) * fr * 0.6 + vec3(1.0, 0.95, 0.7) * sp * 1.6) * vTint;
          } else { // \uBB34\uC9C0\uAC1C(\uBA39\uC774 1\uB4F1 \uC0C1): \uC9C4\uC8FC\uBE5B \uBAB8\uC5D0 \uC740\uC740\uD55C \uBB34\uC9C0\uAC1C\uAC00 \uBCF4\uB294 \uAC01\uB3C4\xB7\uC2DC\uAC04\uC5D0 \uB530\uB77C \uBD80\uB4DC\uB7FD\uAC8C \uB118\uC5B4\uAC00\uACE0 \uAC00\uC7A5\uC790\uB9AC\uAC00 \uC0B4\uC9DD \uBE5B\uB09C\uB2E4
            float bd = fr * 1.1 + vMapUv.y * 0.55 + vMapUv.x * 0.25 + uTime * 0.1;
            vec3 rb = 0.5 + 0.5 * cos(6.2832 * (bd + vec3(0.0, 0.33, 0.67))); // \uBD80\uB4DC\uB7EC\uC6B4 \uC0C9 \uB760(\uC6D0\uC0C9 \uACBD\uACC4 \uC5C6\uC774)
            float sh = 0.6 + 0.4 * dot(diffuseColor.rgb, vec3(0.333)); // \uBE44\uB298 \uBB34\uB2AC \uBA85\uC554\uC740 \uB0A8\uAE34\uB2E4
            vec3 holo = mix(vec3(1.0), rb, 0.5) * sh;
            diffuseColor.rgb = mix(diffuseColor.rgb, holo, vTint);
            totalEmissiveRadiance += (rb * 0.08 + mix(vec3(1.0), rb.brg, 0.5) * fr * fr * 0.6) * vTint;
          }
        }`)},i.customProgramCacheKey=()=>"dino"+ +e,i}var fb=Cn(256,(n,t)=>{Gn(n,t,"#ffffff"),We(n,t,520,["#d0d0d0","#ececec","#bcbcbc"],3,8,.55),We(n,t,28,["#8c8c8c"],8,16,.5)},2,2),Wg=Cn(512,(n,t)=>{Gn(n,t,"#ffffff"),We(n,t,1500,["#cfcfcf","#e6e6e6","#b4b4b4","#f4f4f4"],4,10,.6),We(n,t,70,["#7e7e7e"],10,26,.45),Hn(n,t,160,["#9a9a9a"],26,2,0,6.28,.35)},4,3),qs=Ap(fb,!1,!0),pb=Ap(Wg,!1,!1),Xg=Ap(Wg,!0,!1);qs.bumpScale=.5;var Ki=new zn(1,Ei?10:12,Ei?6:8),Tl=new zn(1,8,5),ms=new zn(1,8,6),Fi=new $a(1,1),ti=new Ye(1,1,1),An=new zn(1,12,8),mb=new Map([[An,new zn(1,7,5)],[Ki,new zn(1,7,5)],[ms,new zn(1,6,4)],[Fi,Te]]),$g=new cs(.6,1,1,4).rotateY(Math.PI/4),_g=16773584,zi=15722192,Eu=1577228,uu=14207392,mr=13616292,qg=8006178,Yg=(()=>{let n=[[Ki,"S",[0,.74,0],[.38,.44,.38]],[Ki,_g,[0,.7,.09],[.29,.37,.32]]],t=(c,h,d,u=1.24,f=.18)=>[Ki,"S",[0,u,f],[c,h,d]],e=(c,h,d,u=.06)=>{let[,,[,f,m],[y,g,p]]=c,_=f+d,b=m+p*Math.sqrt(Math.max(.05,1-(h/y)**2-(d/g)**2))-u*.25;return[-1,1].flatMap(v=>[[Tl,16777215,[v*h,_,b],[u*1.5,u*1.7,u]],[Tl,Eu,[v*h,_-u*.1,b+u*.5],[u,u*1.2,u*.7]],[Te,16777215,[v*h+u*.35,_+u*.45,b+u*1.1],[u*.32,u*.32,u*.2]],[Tl,16748444,[v*h*1.3,_-u*2.5,b-u*.2],[u*1.1,u*.6,u*.5]]])},i=(c,h,d)=>[-1,1].map(u=>[Te,Eu,[u*c,h,d],[.022,.022,.016]]),s=(c,h,d,u,f)=>[Ki,"S",[0,u,f],[c,h,d]],r=(c,h,d)=>[-1,1].map(u=>[Ct(.028,.08,6),16777215,[u*c,h,d],,[Math.PI,0,0]]),a=[-1,1].map(c=>[St(.04,.03,.24,6),"S",[c*.26,.98,.34],,[1,0,0]]),o=(c,h=.06)=>c.map(([d,u])=>[Tl,"B",[0,d,u],[h*.7,h,h]]),l;return[[...n,l=t(.37,.33,.36,1.27,.14),s(.23,.15,.2,1.17,.44),...r(.09,1.04,.56),...a,...o([[1.6,.06],[1.56,-.1],[1.46,-.22]],.07),...i(.06,1.22,.63),...e(l,.19,.1,.07)],[...n,l=t(.32,.3,.34,1.26,.14),s(.17,.12,.26,1.17,.46),...r(.07,1.07,.64),...a,...o([[1.31,.56],[1.3,.66],[1.57,.14],[1.56,.02],[1.5,-.1]],.045),...i(.045,1.2,.71),...e(l,.17,.09)],[...n,l=t(.27,.25,.3,1.25,.12),s(.12,.09,.34,1.18,.5),...r(.05,1.1,.74),[new cs(1,1,.07,12,1,!1,0,Math.PI).rotateZ(bt),"B",[0,.98,-.18],[1,.66,.42]],...i(.035,1.22,.82),...e(l,.14,.08,.055)],[...n,l=t(.38,.33,.4,1.22,.16),[St(.44,.44,.06,14),"B",[0,1.42,-.1],,[bt-.3,0,0]],[Ct(.05,.32,8),zi,[-.15,1.55,.36],,[.8,0,0]],[Ct(.05,.32,8),zi,[.15,1.55,.36],,[.8,0,0]],[Ct(.05,.2,8),zi,[0,1.24,.6],,[bt,0,0]],...e(l,.19,.08)],[...n,l=t(.28,.26,.29,1.25,.12),[Ct(.1,.5,10),15779944,[0,1.19,.6],,[bt,0,0]],[Ct(.09,.5,10),"B",[0,1.55,-.14],,[-1,0,0]],...[-1,1].map(c=>[Ki,"B",[c*.48,.98,0],[.3,.035,.17],[0,0,c*.5]]),...e(l,.15,.08,.06)],[...n,[St(.1,.14,.7,10),"S",[0,1.35,.08],,[.25,0,0]],l=t(.2,.17,.27,1.76,.26),...i(.05,1.82,.5),...e(l,.12,.04,.05)],[...n,l=t(.3,.26,.34,1.2),...[[1.55,.1],[1.5,-.14],[1.3,-.36]].map(([c,h])=>[Ki,"B",[0,c-.06,h],[.04,.17,.13]]),...i(.07,1.24,.5),...e(l,.15,.08)],[...n,l=t(.36,.22,.34,1.16),...[[-.14,.05],[.14,.05],[0,-.14],[-.2,-.2],[.2,-.2]].map(([c,h])=>[Tl,"B",[c,1.37,.18+h],[.07,.06,.07]]),[Ct(.05,.2,8),zi,[-.38,1.2,.1],,[0,0,bt]],[Ct(.05,.2,8),zi,[.38,1.2,.1],,[0,0,-bt]],...e(l,.17,.06)],[...n,l=t(.26,.24,.36,1.24),[Ki,_g,[0,1.16,.52],[.17,.08,.16]],[St(.07,.05,.6,10),"B",[0,1.56,-.08],,[-1.1,0,0]],...e(l,.14,.08)],[...n,l=t(.25,.23,.27,1.25,.13),s(.12,.09,.2,1.19,.44),...r(.05,1.11,.56),...[[-.4,-.08],[0,0],[.4,.08]].map(([c,h])=>[Ct(.05,.34,8),"B",[h,1.52,.02],,[-.4,0,-c]]),...[-1,1].map(c=>[Ki,"B",[c*.42,.98,.1],[.2,.03,.1],[0,0,c*.6]]),...i(.035,1.22,.62),...e(l,.14,.08,.06)],[...n,l=t(.4,.34,.38,1.28,.15),s(.25,.16,.24,1.17,.46),...r(.1,1.04,.6),...r(.05,1.05,.64),...a,...[[1.62,.02],[1.58,-.12],[1.5,-.24],[1.36,-.34]].map(([c,h])=>[Ct(.05,.22,6),zi,[0,c,h],,[-.5,0,0]]),...[-1,1].map(c=>[Ki,"B",[c*.2,1.47,.3],[.13,.05,.09],[0,0,c*.4]]),...i(.06,1.22,.68),...e(l,.2,.09)],[...n,l=t(.3,.24,.36,1.2,.18),s(.2,.12,.36,1.1,.5),...r(.08,.98,.7),...r(.05,.99,.78),...[-1,1].map(c=>[Ki,"B",[c*.42,.9,.18],[.24,.04,.12],[.3,0,c*.5]]),[Ct(.06,.3,6),"B",[0,1.42,-.12],[1,1,2.2],[-.9,0,0]],...i(.05,1.12,.84),...e(l,.17,.07)]]})(),Pr=Yg.map(n=>vr(n)),tp,Je=(()=>{let n=l=>{let c=l?5:9;return{leg:(h,d,u,f,m)=>{let y=["leg",m,u,d];return l?[[St(f,f*.75,u*.47,c),"S",[h,u*.415,d+u*.025],,[.64,0,0],y],[St(f*.72,f*.6,u*.27,c),"S",[h,u*.14,d-u*.04],,[-.64,0,0],y],[ti,"K",[h,f*.3,d+u*.12],[f*2,f*.6,f*3.2],,y]]:[[St(f*1.3,f*.8,u,c),"S",[h,u/2,d],,,y],[ms,"K",[h,f*.4,d+f*.15],[f*1.2,f*.5,f*1.4],,y]]},tail:(h,d,u,f,m=0,y=.05)=>[Ct(u,f,c).rotateX(-bt),"S",[0,d-Math.sin(m)*f/2,h-f/2+.3],,[-m,0,0],["tail",h,y]],eye:(h,d,u,f,m)=>[-1,1].flatMap(y=>l?[[Te,15909424,[y*h,d,u],[f*.55,f,f],,m],[Te,Eu,[y*(h+f*.32),d,u+f*.1],[f*.3,f*.85,f*.3],,m]]:[[Te,2365970,[y*h,d,u],[f*.55,f,f],,m],[Te,16777215,[y*(h+f*.4),d+f*.35,u+f*.3],[f*.2,f*.26,f*.26],,m]])}},t=n(!0),e=n(!1),i=({w:l=1,hs:c=1,sl:h=1.5,sw:d=.85,al:u=.8,teeth:f=5,tail:m=4.4,extra:y=()=>[]})=>{let g=(p,_,b,v=[1,1,1],A)=>[p,_,[b[0]*c,4.8+b[1]*c,3.3+b[2]*c],v.map(w=>w*c),A];return[[Fi,"S",[0,3.5,0],[1.15*l,1.3,2.3]],[Fi,mr,[0,3.05,.35],[.95*l,1,1.9]],...[-1.1,0,1.1].map(p=>[Fi,"K",[0,3.95,p],[l,.9*Math.sqrt(1-(p/2.3)**2)+.06,.2]]),[St(.7*l,l,2,5),"S",[0,4.25,2.35],,[.95,0,0]],g(Fi,"S",[0,0,0],[.78,.8,1]),g($g,"S",[0,-.08,.55+h/2],[d,h,.8],[bt,0,0]),g(ti,"S",[0,-.74,.3+h/2],[d*1.05,.2,h+.5],[.2,0,0]),g(ti,qg,[0,-.56,.4+h/2],[d*.8,.08,h],[.12,0,0]),...Array.from({length:f},(p,_)=>{let b=(_+.6)/f,v=.707-.283*b;return[-1,1].map(A=>g(Ct(.07,.3,4),16777215,[A*(d*v-.06),-.2-.8*v,.55+h*b],void 0,[Math.PI,0,0]))}).flat(),...[-1,1].map(p=>g(ti,"K",[p*.5,.6,.4],[.32,.18,.8],[.14,0,-p*.36])),...t.eye(.6*c,4.8+.3*c,3.3+.42*c,.17*c),...[-1,1].map(p=>[St(.13,.09,u,5),"S",[p*.8*l,3.1,2.3+u*.35],,[1.15,0,0]]),t.tail(-1.7,3.7,l,m),...[-1,1].flatMap(p=>[[Fi,"S",[p*.85*l,2.95,-.2],[.5,1.05,.9],,["leg",p,3.2,-.2]],...t.leg(p*.9*l,-.2,3.2,.36,p)]),...[-1.4,-.5,.4,1.3].map(p=>[Ct(.17,.42,4),"K",[0,4.72-.11*p*p,p]]),...y(g)]};tp=i;let s=[new cs(1,1,.14,7,1,!1,0,Math.PI).rotateZ(bt),"B",[0,4.5,-.2],[1,2.6,2.5]],r=(l,c,h,d,u)=>h.map(f=>[ms,"K",[0,l,f],[d,c,u]]),a=(l,c,h,d,u)=>{let f=vr(l,c);return f.computeBoundingBox(),{g:f,lo:vr(l,c,.5),m:h?Xg:pb,hip:d*c,len:f.boundingBox.max.z-f.boundingBox.min.z,fly:u}},o=["neck",2.4,.04];return[a(i({}),.9,1,3.2),a(i({w:.9,hs:.9,sl:1.8,sw:.7,extra:l=>[0,1,2,3].map(c=>l(Ct(.1,.22,4),"K",[0,.46-.075*c,.9+.4*c]))}),.76,1,3.2),a(i({w:.92,hs:.78,sl:2.7,sw:.5,al:1.4,tail:5,teeth:7,extra:()=>[s]}),.95,1,3.2),a([[An,"S",[0,2.15,-.3],[1.5,1.45,2.6]],[An,mr,[0,1.8,-.2],[1.25,1.15,2.2]],...r(2.75,.85,[-1.4,-.3,.8],1.2,.28),[An,"S",[0,2,2.75],[.95,.9,1.3]],[ms,uu,[0,1.6,3.95],[.38,.45,.45]],[St(1.75,1.75,.22,14),"B",[0,2.95,1.95],,[bt-.5,0,0]],[St(1.15,1.15,.26,14),"K",[0,2.95,1.97],,[bt-.5,0,0]],...[-1,1].map(l=>[Ct(.17,1.6,8),zi,[l*.45,3.25,3.35],,[1,0,0]]),[Ct(.15,.6,8),zi,[0,2.55,3.85],,[.5,0,0]],...e.eye(.86,2.3,3.1,.13),e.tail(-2.5,2.1,.85,3,.15),...[-1,1].flatMap(l=>[...e.leg(l*.95,1.25,1.75,.42,l),...e.leg(l,-1.8,1.8,.46,-l)])],.8,0,1.75),a([[Fi,"S",[0,0,0],[.55,.5,1.2]],[Fi,mr,[0,-.15,.1],[.42,.4,1]],[St(.2,.3,1.2,5),"S",[0,.35,1.3],,[.9,0,0]],[Fi,"S",[0,.75,1.95],[.36,.36,.5]],[Ct(.2,2.4,4).rotateX(bt),14266970,[0,.68,3.5]],[Ct(.2,1.9,4).rotateX(-bt),"B",[0,1.15,1.2],,[.35,0,0]],...[-1,1].flatMap(l=>{let c=["wing",l,l*.4,0];return[[ti,"B",[l*1.6,0,.15],[2.6,.08,1.7],,c],[ti,"S",[l*3.9,0,.45],[2.2,.07,1],[0,-l*.3,0],c],[St(.06,.06,4.8,4).rotateZ(bt),"K",[l*2.7,.06,.98],,[0,-l*.12,0],c],[St(.07,.05,1,4).rotateX(bt),"S",[l*.25,-.2,-1.5]]]}),...t.eye(.3,.85,2.12,.1)],.7,1,1,1),a([[An,"S",[0,4.6,0],[1.9,2,3.4]],[An,mr,[0,4.15,.1],[1.6,1.6,2.9]],...[-1.6,0,1.6].flatMap(l=>[-1,1].map(c=>[ms,"B",[c*.8,6.32-.1*l*l,l],[.55,.3,.65]])),[St(.55,1.2,7.6,9),"S",[0,9,4.2],,[.45,0,0],o],[An,"S",[0,12.55,6.25],[.62,.55,.95],,o],[ms,"S",[0,13.05,6.05],[.36,.4,.45],,o],...e.eye(.55,12.65,6.6,.12,o),e.tail(-2.9,4.5,1.15,5.6,.2),...[-1,1].flatMap(l=>[...e.leg(l*1.15,1.9,4.4,.6,l),...e.leg(l*1.2,-2,3.9,.62,-l)])],.8,0,4.2),a([[An,"S",[0,2.3,-.2],[1.3,1.6,2.7]],[An,mr,[0,1.9,-.1],[1.1,1.25,2.3]],[St(.4,.7,1.7,9),"S",[0,1.85,2.75],,[1.8,0,0]],[An,"S",[0,1.55,3.75],[.42,.4,.8]],[ms,uu,[0,1.45,4.45],[.25,.22,.25]],...e.eye(.36,1.7,3.9,.09),...Array.from({length:8},(l,c)=>{let h=2-c*.62,d=(h+.2)/2.7,u=.6+.55*Math.sin(c/7*Math.PI);return[Ct(.7,1.4,4),"B",[c%2?.22:-.22,2.3+1.6*Math.sqrt(1-d*d)+u*.45,h],[.2*u,u,u]]}),e.tail(-2.5,2.3,.75,3.8,.1),...[-5.2,-5.75].flatMap(l=>[-1,1].map(c=>[Ct(.1,.95,6),zi,[c*.4,2.3,l],,[0,0,-c*1.1],["tail",-2.5,.05]])),...[-1,1].flatMap(l=>[...e.leg(l*.75,1.5,1.5,.36,l),...e.leg(l*.85,-1.4,2.2,.45,-l)])],.73,0,1.9),a([[An,"S",[0,1.5,0],[1.9,1,2.6]],[An,"B",[0,1.72,-.1],[1.78,.92,2.45]],[An,mr,[0,1.25,0],[1.6,.8,2.3]],...[-2,-1,0,1,2].flatMap(l=>[-1,0,1].map(c=>[Te,"K",[c*.85,1.72+.92*Math.sqrt(1-(c*.85/1.78)**2-(l*.85/2.45)**2),l*.85-.1],[.24,.17,.24]])),...[-2,-1,0,1,2].flatMap(l=>[-1,1].map(c=>[Ct(.2,.75,6),zi,[c*1.8*Math.sqrt(1-(l*.9/2.6)**2),1.45,l*.9],,[0,0,-c*bt]])),[An,"S",[0,1.3,2.95],[.78,.55,.8]],[ms,uu,[0,1.15,3.65],[.4,.3,.3]],...[-1,1].map(l=>[Ct(.14,.5,6),zi,[l*.6,1.7,2.55],,[-.6,0,-l*.7]]),...e.eye(.68,1.42,3.25,.1),e.tail(-2.4,1.45,.55,3.4,0,.07),[ms,zi,[0,1.45,-5.6],[.8,.5,.7],,["tail",-2.4,.07]],...[-1,1].flatMap(l=>[...e.leg(l*1.15,1.5,1.05,.4,l),...e.leg(l*1.15,-1.5,1.05,.4,-l)])],.63,0,1.05),a([[An,"S",[0,3,-.2],[1.2,1.5,2.6]],[An,mr,[0,2.6,0],[1,1.2,2.2]],...r(3.65,.85,[-1.3,-.2,.9],.95,.26),[St(.48,.85,2.6,9),"S",[0,4.4,2.75],,[.75,0,0]],[An,"S",[0,5.5,3.8],[.52,.5,.95]],[ms,uu,[0,5.28,4.7],[.42,.2,.5]],[St(.1,.24,2.8,9),"B",[0,6.35,2.75],,[-1.05,0,0]],...e.eye(.47,5.62,4.05,.1),e.tail(-2.4,3.1,.9,4.6,.05),...[-1,1].flatMap(l=>[...e.leg(l*.75,-.9,2.9,.46,l),...e.leg(l*.6,1.7,2.4,.26,-l)])],.72,0,2.9),a(i({w:.7,hs:.75,sl:1.5,sw:.55,al:1.6,tail:4.6,teeth:4,extra:l=>[...[-.35,0,.35].map(c=>l(Ct(.14,1,4),"B",[c*.5,.95,-.5],void 0,[-.9,0,-c])),...[-1,1].map(c=>[ti,"B",[c*1.05,2.95,2.7],[1.1,.06,1.5],[.35,0,c*.45]]),[ti,"B",[0,3.7,-5.6],[1.5,.06,1.7],,["tail",-1.7,.05]]]}),.4,1,3.2)]})();{let n=Xg,t=15722192,e=16722452;Je.push((()=>{let i=(()=>{let s=[],a=(o,l,c,h=[1,1,1],d)=>[o,l,[c[0]*1.15,4.8+c[1]*1.15,3.3+c[2]*1.15],h.map(u=>u*1.15),d];s.push(...[-1,1].flatMap(o=>[a(Ct(.11,.62,4),t,[o*.5,.95,.25],void 0,[-.7,0,-o*.45]),a(Ct(.08,.4,4),t,[o*.45,.7,.75],void 0,[-.4,0,-o*.6]),a(Te,e,[o*.64,.3,.46],[.09,.2,.2])]));for(let o of[-1.9,-1.2,-.5,.2,.9,1.6])for(let l of[-1,1])s.push([Ct(.15,.62-Math.abs(o)*.08,4),t,[l*.34,4.62-.1*o*o,o],,[0,0,-l*.3]]);for(let o of[-1,1])for(let l of[-1,0,1])s.push([Ct(.05,.45,4),t,[o*.88+l*.07,3.3,3.7],,[2,0,0]]);for(let o of[-1.5,-.7,.1,.9])for(let l of[-1,1])s.push([ti,5199454,[l*1.24*Math.sqrt(1-(o/2.3)**2),3.55,o],[.06,1,.18],[.25,0,0]]);for(let o of[-3.2,-4.2,-5.1])s.push([Ct(.11,.38,4),t,[0,3.95+(o+3.2)*.12,o],,,["tail",-1.7,.05]]);return s})();return{...(()=>{let s=vr([...tp({w:1.1,hs:1.15,sl:1.75,sw:.95,al:1.5,teeth:7,tail:5}),...i],1);return s.computeBoundingBox(),{g:s,lo:vr([...tp({w:1.1,hs:1.15,sl:1.75,sw:.95,al:1.5,tail:5})],1,.5)}})(),m:n,hip:3.2,len:0,fly:0}})()),Je[10].len=Je[10].g.boundingBox.max.z-Je[10].g.boundingBox.min.z,Je.push((()=>{let a=(h,d,u,f=[1,1,1],m)=>[h,d,[u[0]*.95,1.55+u[1]*.95,3.7+u[2]*.95],f.map(y=>y*.95),m],o=["tail",-2.6,.12],l=[[Fi,"S",[0,1.45,0],[1.15,.95,3.1]],[Fi,mr,[0,1.1,.3],[.95,.62,2.7]],[St(.72,.98,1.7,6),"S",[0,1.55,2.7],,[bt,0,0]],a(Fi,"S",[0,0,0],[.72,.58,.95]),a($g,"S",[0,-.05,.55+2.7/2],[.62,2.7,.7],[bt,0,0]),a(ti,"S",[0,-.46,.3+2.7/2],[.62*1.05,.18,2.7+.4],[.08,0,0]),a(ti,qg,[0,-.34,.4+2.7/2],[.62*.8,.07,2.7-.1],[.05,0,0]),...Array.from({length:8},(h,d)=>{let u=(d+.6)/8;return[-1,1].map(f=>a(Ct(.06,.26,4),16777215,[f*(.62*(.62-.22*u)-.05),-.3,.6+2.7*u],void 0,[Math.PI,0,0]))}).flat(),...[-1,1].flatMap(h=>[[Te,15909424,[h*.5*.95,1.55+.25*.95,3.7+.35*.95],[.08,.14,.14]],[Te,Eu,[h*.56*.95,1.55+.25*.95,3.7+.37*.95],[.04,.12,.05]]]),[Ct(.88,6.2,6).rotateX(-bt),"S",[0,1.4,-2.6-3.1+.3],,,o],[ti,"B",[0,.75,-8.2],[.1,1.5,1.1],[-.55,0,0],o],[ti,"B",[0,1.85,-8],[.1,.9,.8],[.6,0,0],o],...[-1,1].flatMap(h=>[[ti,"B",[h*1.45,.85,1.6],[1.7,.08,.75],[0,-h*.55,h*.3]],[ti,"B",[h*1.2,.85,-1.7],[1.25,.08,.6],[0,h*.55,h*.3]]]),[Ct(.55,1.2,4),"B",[0,2.55,-.8],[.22,1,1.1],[-.45,0,0]],...[-2.2,-1.4,-.6,.4,1.4,2.3].map(h=>[Ct(.09,.28,4),"K",[0,2.38-.04*h*h,h]])],c=vr(l,1.05);return c.computeBoundingBox(),{g:c,lo:vr(l,1.05,.5),m:n,hip:1.2,len:c.boundingBox.max.z-c.boundingBox.min.z,fly:0,sea:1}})())}var Yu=ee.map((n,t)=>.9+Pe(t,3)*.18),gb=_e===2?Yg.map(n=>vr(n,1,.13)):[],ho=new Float32Array(He*3),_b={x:0,y:0,z:0,sn:0,cs:1,s:1,ph:0};ee.forEach((n,t)=>{let e=Ti(n),i=ns[t];(i===1?ln.setHSL(.1,.88,.4):i===2?ln.setRGB(.95,.95,.95):Ve?ln.setHSL(e,.18+Pe(t,5)*.14,.36+Pe(t,6)*.12):ln.setHSL(e,.6,.6)).toArray(ho,t*3)});var Zg=()=>(Ve?Je.map(n=>[n.g,n.lo,n.m]):_e===2?Pr.map((n,t)=>[n,gb[t],qs]):[]).map(([n,t,e],i)=>{let s=oe.flatMap((a,o)=>a===i?[o]:[]);if(!s.length)return null;let r=(a,o)=>{let l=new ir(a,e,s.length),c=new ls(new Float32Array(s.length),1),h=new ls(new Float32Array(s.length),1);return l.setColorAt(0,ln),a.setAttribute("aPhase",c),a.setAttribute("aRare",h),l.castShadow=o,l.frustumCulled=!1,l.count=0,[l.instanceMatrix,l.instanceColor,c,h].forEach(d=>d.setUsage(hf)),te.add(l),{im:l,ph:c,rare:h,id:new Int32Array(s.length)}};return{idx:s,hi:r(n,!0),lo:r(t,!1),A:Je[i]}}),Ol=Zg(),xb=()=>{Ol.forEach(n=>n&&[n.hi,n.lo].forEach(t=>{te.remove(t.im),t.im.dispose()})),Ol=Zg();try{ta.clear(),Ol.filter(Boolean).forEach(n=>{ta.set(n.hi.im,n.hi.id),ta.set(n.lo.im,n.lo.id)})}catch{}},du=Ve?(()=>{let n=new Float32Array(He),t=new Float32Array(He),e=new Float32Array(He),i=new Float32Array(He);return ee.forEach((s,r)=>{let a=Ws[r],o=r%ts,l=o<hi[0][1]?0:o<hi[0][1]+hi[1][1]?1:2,c=Je[oe[r]].fly;n[r]=Math.atan2(a.z-a.cz,a.x-a.cx),e[r]=po(l)+(Pe(r,7)-.5)*(c?14:2.2),t[r]=(l%2?-1:1)*(c?7:1.7)/po(l),i[r]=c?11+Pe(r,8)*8:0}),{a0:n,w:t,R:e,y:i}})():null,tt=null,je=new Map;function Jg(n,t){let e=_b,i=tt&&tt.i===n?tt:je.get(n),s=!!i;if(!Ve){let o=qu[n].elements;if(e.s=Math.hypot(o[0],o[2])*Ms[n],e.ph=Pe(n,4)*9,s)e.x=i.x,e.y=i.hop,e.z=i.z,e.sn=Math.sin(i.a+i.rot),e.cs=Math.cos(i.a+i.rot);else{let l=e.s/Ms[n];e.x=o[12]+_s[n],e.y=oe[n]===11?-.5*e.s:0,e.z=o[14]+xs[n],e.sn=o[8]/l,e.cs=o[10]/l}return e}let{hip:r,fly:a}=Je[oe[n]];if(e.s=Yu[n],s)e.x=i.x,e.z=i.z,e.y=a?3.2+Math.sin(t*2)*.3:0,e.sn=Math.sin(i.a),e.cs=Math.cos(i.a),e.ph=a?t*5:i.dist*Math.PI/(r*e.s);else if(oe[n]===11){let o=10+Pe(n,10)*(Ee.r-20),l=Pe(n,9)*6.283+t*3/o;e.x=Ee.x+Math.cos(l)*o,e.z=Ee.z+Math.sin(l)*o,e.y=-1.1+Math.sin(t*.8+n)*.25,e.sn=-Math.sin(l),e.cs=Math.cos(l),e.ph=t*2+n}else{let o=du.w[n],l=du.a0[n]+o*t,c=du.R[n],h=Math.sign(o),d=Ws[n];e.x=d.cx+Math.cos(l)*c,e.z=d.cz+Math.sin(l)*c,e.y=du.y[n]+(a?Math.sin(t*.6+n)*1.5:0),e.sn=-Math.sin(l)*h,e.cs=Math.cos(l)*h,e.ph=a?t*4+n:Math.abs(o)*c*t*Math.PI/(r*e.s)+n}return e}function yb(n){let t=pe.position,e=(Ve?150:75)**2;for(let i of Ol){if(!i)continue;let s=0,r=0;for(let a=0;a<i.idx.length;a++){let o=i.idx[a],{x:l,y:c,z:h,sn:d,cs:u,s:f,ph:m}=Jg(o,n),y=(l-t.x)**2+(c-t.y)**2+(h-t.z)**2<e,g=y?i.hi:i.lo,p=y?s++:r++,_=g.im.instanceMatrix.array,b=p*16,v=g.im.instanceColor.array;_[b]=f*u,_[b+1]=0,_[b+2]=-f*d,_[b+3]=0,_[b+4]=0,_[b+5]=f,_[b+6]=0,_[b+7]=0,_[b+8]=f*d,_[b+9]=0,_[b+10]=f*u,_[b+11]=0,_[b+12]=l,_[b+13]=c,_[b+14]=h,_[b+15]=1,v[p*3]=ho[o*3],v[p*3+1]=ho[o*3+1],v[p*3+2]=ho[o*3+2],g.ph.array[p]=m,g.rare.array[p]=ns[o],g.id[p]=o}i.hi.im.count=s,i.lo.im.count=r;for(let a of[i.hi,i.lo])a.im.instanceMatrix.needsUpdate=a.im.instanceColor.needsUpdate=a.ph.needsUpdate=a.rare.needsUpdate=!0}}Re([[St(.05,.06,3.2,4),ce,[-2.2,1.6,1.3]],[new Ye(.9,.55,.05),Ge(15906354,{emissive:7031296}),[-1.72,2.9,1.3]]],mo.slice(0,yp),{vary:0});{let n=[14241594,3837913,5221978,10117072,14715434,3126696,14245786],t=Re([[St(.04,.05,2.4,4),ce,[2.35,1.2,-1.5]],[new Ye(.72,.44,.04),Ge(16777215),[2.72,2.15,-1.5]]],mo,{vary:0,cast:!1})[1];t&&(mo.forEach((e,i)=>t.setColorAt(i,ln.setHex(n[Math.floor(i/ts)%n.length]))),t.instanceColor.needsUpdate=!0)}var Tu=vp(He),Kg=at(new ai(2.2,.14,6,24),on(16766042),[Tu.x,.25,Tu.z],null,[bt,0,0]);te.add(Kg);var vo=(n,t,e,i,s,r=0)=>Array.from({length:n},()=>{let a,o,l=0;do{let c=Lt()*6.283,h=t+Lt()*(e-t);a=Math.cos(c)*h,o=Math.sin(c)*h}while((nb(a,o)||r&&!lb(a,o,r))&&++l<30);return Wu(a,o,Lt()*6.283,i+Lt()*(s-i))}),Ql=Ve?Math.min(3,Math.max(1,ae/300)):1,jg=vo(Math.round((Ei?130:230)*Ql),Hi+.5,ae+240,.7,1.6,Hi+.5),Qg=vo(Math.round((Ei?60:120)*Ql),Hi+2.5,ae+260,.8,1.7,Hi+1.5),t_=vo(110,Hi-1.5,ae+250,.4,2,Hi-1.5),e_=(n,t)=>Array.from({length:n},(e,i)=>[t(i).rotateY(i*6.283/n+.3),ea]);Re([[St(.32,.46,2.7,6),ce,[0,1.35,0]],[St(.24,.32,2.7,6),ce,[.2,3.9,0],,[0,0,-.15]],[Te,Ge(4862496),[.55,5,.2],[.22,.22,.22],,1],[Te,Ge(4862496),[.2,4.95,-.35],[.22,.22,.22],,1],...e_(7,n=>Ct(.62,3.8,4).scale(1,1,.2).translate(0,1.9,0).rotateZ(-1.2-n%2*.25).translate(.4,5.1,0))],jg);Re([[St(.28,.5,7,6),ce,[0,3.5,0]],[Ct(2.4,3,7),ea,[0,5,0]],[Ct(1.8,2.8,7),ea,[0,7,0]],[Ct(1.1,2.6,7),ea,[0,8.9,0]]],Qg);Re(e_(5,()=>Ct(.3,1.9,4).scale(1,1,.3).translate(0,.95,0).rotateZ(-1)),vo(Math.round((Ei?120:320)*Ql),Hi-2,ae+150,.6,1.5,Hi-2),{cast:!1});Re([-.3,0,.3].map((n,t)=>[Ct(.1,.8,3).translate(0,.4,0).rotateZ(n).rotateY(t*2),Ge(8824906)]),vo(Math.round((Ei?700:2600)*Ql),ks+.5,ae+70,.6,1.5),{cast:!1,vary:.3});Re([[bp,Wn,[0,.45,0],[1.3,.8,1]],[ki,Wn,[1.1,.25,.5],[.5,.4,.5],,1]],t_);{let n=[];for(let i=0;i<(Ei?90:220)*Ql;i++){let[s]=vo(1,Hi,ae+140,1,1,Hi),r=s.elements[12],a=s.elements[14];for(let o=0;o<4;o++)n.push(Wu(r+(Lt()-.5)*2.4,a+(Lt()-.5)*2.4,Lt()*6,.7+Lt()*.6))}let[,t]=Re([[St(.03,.04,.6,3),Ge(7313982),[0,.3,0]],[Te,Ge(16777215,{emissive:2236962}),[0,.65,0],[.16,.1,.16]]],n,{cast:!1,vary:0}),e=[16774886,16767050,16748464,12029183,16751178];n.forEach((i,s)=>t.setColorAt(s,ln.setHex(e[Math.floor(s/4)%e.length]))),t.instanceColor.needsUpdate=!0}var vb=new Ot,Of=[[0,6253125],[.28,8218198],[.75,10783350],[1,14206640]].map(([n,t])=>[n,new Ot(t)]),Mb=(n,t)=>{n=Math.min(1,Math.max(0,n+(t-.5)*.18));let e=Of.findIndex(o=>o[0]>=n),[i,s]=Of[Math.max(0,e-1)],[r,a]=Of[e];return vb.copy(s).lerp(a,r>i?(n-i)/(r-i):0)};Re([[zg(new qi(1,1,11,4),.32,Mb),Ge(16777215,{vertexColors:!0}),[0,.5,0]]],Array.from({length:16},(n,t)=>{let e=t*.393+Lt()*.2,i=ae+480+Lt()*220,s=70+Lt()*110,r=s*(1.1+Lt()*.6);return Xu(Math.cos(e)*i,-2,Math.sin(e)*i,r,s,r,Lt()*3)}),{cast:!1,recv:!1});var Cp=(n,t,e,i={})=>{let s=new er(new Ls({map:Se.soft,color:n,fog:!1,transparent:!0,depthWrite:!1,...i}));return s.scale.setScalar(t),s.position.set(...e),te.add(s),s},Ff=Cp(16773568,420,kl.clone().normalize().multiplyScalar(1600).toArray(),{opacity:.9}),n_=on(16774372,{transparent:!0,opacity:.85}),i_=(()=>{let t=new Float32Array(1500);for(let s=0;s<500;s++){let r=Lt()*6.283,a=.12+Lt()*1.4;t.set([Math.cos(r)*Math.cos(a)*1900,Math.sin(a)*1900,Math.sin(r)*Math.cos(a)*1900],s*3)}let e=new Be;e.setAttribute("position",new Yn(t,3));let i=new Va(e,new Gr({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return i.frustumCulled=!1,te.add(i),i})();{let n=[];for(let t=0;t<9;t++){let e=Lt()*6.283,i=500+Lt()*500,s=190+Lt()*90;for(let r=0;r<4;r++)n.push(Xu(Math.cos(e)*i+(r*22-33)*Math.sin(e),s+Lt()*6,Math.sin(e)*i-(r*22-33)*Math.cos(e),22+Lt()*14,8+Lt()*5,22+Lt()*14))}Re([[he,n_]],n,{vary:0,cast:!1,recv:!1})}var Sn=-(ae+170),bn=-(ae+90);{let n=new Ot,t=new Ot(11575432),e=new Ot(3812390);es(at(zg(new cs(14,80,85,26,7,!0),.06,(i,s)=>n.copy(t).lerp(e,Math.min(1,i*1.15+(s-.5)*.25))),ke(sa(Se.rock,6,3),{vertexColors:!0,side:Qn}),[Sn,42.5,bn]))}te.add(at(St(13,13,1,16),on(16738842),[Sn,85.2,bn]));Re([[ki,Ge(3023904),[0,0,0]]],Array.from({length:16},(n,t)=>{let e=t*.393+Lt()*.2,i=2.4+Lt()*2.2;return Xu(Sn+Math.cos(e)*14,85+i*.2,bn+Math.sin(e)*14,i,i*.8,i,Lt()*3)}),{vary:.2,cast:!1});var Sb=(n,t,e=0)=>{let i=14+66*(1-t/85)+e;return new P(Sn+Math.cos(n)*i,t,bn+Math.sin(n)*i)};for(let[n,t,e]of[[.4,62,2.4],[1.9,40,1.8],[3.3,70,2.8],[4.7,34,1.6],[5.6,52,2]]){let i=[];for(let r=0;r<=10;r++){let a=85-t/107.6*85*(r/10);i.push(Sb(n+Math.sin(r*1.3+n*3)*.035,a,.8))}let s=new Xa(i);te.add(at(new qa(s,40,e*.55,5),on(16734740)),at(new qa(s,40,e*.25,5).translate(0,.25,0),on(16761418)))}Cp(16742954,90,[Sn,90,bn],{blending:Wr,opacity:.7});var vu=Array.from({length:8},()=>Cp(6971480,1,[0,0,0])),Mn={x:Math.cos(5.3)*(ae+34),z:Math.sin(5.3)*(ae+34)},Rn={x:Math.cos(2.2)*(ae+22),z:Math.sin(2.2)*(ae+22)};{let{x:n,z:t}=Mn,e=at(Hl(19),ke(sa(Se.dirt,5,5),{flatShading:!1}),[n,.03,t],[1,1,.75]);e.receiveShadow=!0,te.add(e,at(Hl(16),new Jn({color:5218224,roughness:.12,metalness:.2,transparent:!0,opacity:.88}),[n,.08,t],[1,1,.72]));for(let i=0;i<9;i++)es(at(ki,Wn,[n+Math.cos(i*.7)*17,.4,t+Math.sin(i*.7)*12.6],[.9+Lt(),.7,.9+Lt()],[0,Lt()*3,0]))}var bb=n=>{let t=Pe(n,9)*6.283,e=8+Pe(n,10)*(Ee.r-16);return[Ee.x+Math.cos(t)*e,Ee.z+Math.sin(t)*e]},Eb=(()=>{let{x:n,z:t,f:e}=Ee,i=120,s=14,r=(_,b,v)=>{let A=[],w=[],x=[];A.push(0,0,0),v(0).toArray(w,0);for(let R=1;R<=s;R++)for(let U=0;U<i;U++){let F=U/i*6.283,G=R/s,L=_(F)*G;A.push(Math.cos(F)*L,0,Math.sin(F)*L),v(G).toArray(w,w.length)}for(let R=0;R<i;R++)x.push(0,1+(R+1)%i,1+R);for(let R=1;R<s;R++)for(let U=0;U<i;U++){let F=1+(R-1)*i+U,G=1+(R-1)*i+(U+1)%i,L=F+i,V=G+i;x.push(F,G,L,G,V,L)}let T=new Be;T.setAttribute("position",new Jt(A,3)),T.setAttribute("color",new Jt(w,3)),T.setIndex(x),T.computeVertexNormals();let D=new Bn(T);return D.position.set(n,b,t),D},a=new Ot,o=(_,b,v,A)=>_<.6?a.set(b).lerp(new Ot(v),_/.6):a.set(v).lerp(new Ot(A),(_-.6)/.4),l=Cn(512,(_,b)=>{Gn(_,b,"#f0d595"),We(_,b,260,["#f7e2aa","#e2c482","#fff0c4"],5,34,.45),We(_,b,900,["#b49a66","#fff4d6"],.7,2,.6)},10,10),c=r(_=>e(_)+11,.05,_=>a.set(16777215));c.material=new Jn({map:l,vertexColors:!0,roughness:1,emissive:4864024,emissiveIntensity:.6}),c.receiveShadow=!0,c.geometry.setAttribute("uv",new Jt(c.geometry.attributes.position.array.filter((_,b)=>b%3!==1).map(_=>_/30),2));let h=r(_=>e(_)+3,.1,()=>a.set(11770472));h.material=new Jn({color:16777215,vertexColors:!0,roughness:.5,transparent:!0,opacity:.55});let d=Cn(256,(_,b)=>{Gn(_,b,"#ffffff"),Hn(_,b,420,["#8fc3d8","#a9d4e4","#7ab4cc"],26,2.2,0,.3,.7),Hn(_,b,160,["#ffffff"],14,1.4,0,.3,.8)},8,8),u=r(e,.4,_=>o(_,671078,1276578,5425604));u.material=new Jn({map:d,vertexColors:!0,roughness:.12,metalness:.15,transparent:!0,opacity:.93}),u.geometry.setAttribute("uv",new Jt(u.geometry.attributes.position.array.filter((_,b)=>b%3!==1).map(_=>_/40),2));let f=r(_=>e(_)+1.2,.68,()=>a.set(16777215)),m=f.geometry,y=[];for(let _=0;_<i;_++){let b=1+(s-2)*i+_,v=1+(s-2)*i+(_+1)%i;y.push(b,v,b+i,v,v+i,b+i)}m.setIndex(y),f.material=new Ds({color:16777215,transparent:!0,opacity:.6,depthWrite:!1}),te.add(c,h,u,f);for(let _=0;_<16;_++){let b=_*.39+Lt()*.25;es(at(ki,Wn,[n+Math.cos(b)*(e(b)+6+Lt()*3),.5,t+Math.sin(b)*(e(b)+6+Lt()*3)],[1.2+Lt()*1.5,.8+Lt(),1.2+Lt()],[0,Lt()*3,0]))}for(let[_,b,v]of[[.4,.55,7],[.55,.62,4.5],[2.6,.7,5.5],[4.4,.5,8],[4.6,.58,3.5]])es(at(ki,Wn,[n+Math.cos(_)*e(_)*b,v*.35,t+Math.sin(_)*e(_)*b],[2.2+v*.25,v,2+v*.2],[0,_*3,0]));let g=u.geometry.attributes.position,p=Float32Array.from(g.array);return _=>{d.offset.set(_*.012,_*.007);for(let b=0;b<g.count;b++){let v=p[b*3],A=p[b*3+2];g.array[b*3+1]=Math.sin(v*.18+_*1.1)*.12+Math.sin(A*.23-_*.8)*.1}g.needsUpdate=!0,f.material.opacity=.45+Math.sin(_*1.6)*.2,f.scale.setScalar(1+Math.sin(_*1.6)*.008)}})();{let n=new gn,t=2.2,e=ae+22;n.position.set(Math.cos(t)*e,0,Math.sin(t)*e),n.rotation.y=.9,n.scale.setScalar(1.5);let i=at(Hl(10),ke(sa(Se.dirt,3,3),{flatShading:!1}),[1,.03,0],[1.3,1,.7]);i.receiveShadow=!0,n.add(i);for(let s=0;s<7;s++)n.add(at(St(.12,.16,1.2+Lt(),5),Ue,[-6+Lt()*14,.15,(Lt()-.5)*9],null,[bt,Lt()*3,0]));n.add(at(St(.2,.36,17,6),Ue,[-.5,4.2,0],null,[0,0,bt]),at(he,Ue,[9.6,4.5,0],[1.6,1.15,1.05]),at(Ct(.7,2.2,5),Ue,[11.2,3.9,0],null,[0,0,-bt-.2]),at(Te,ra,[9.9,4.8,.85],[.32,.32,.2]),at(Te,ra,[9.9,4.8,-.85],[.32,.32,.2]));for(let s=0;s<8;s++)n.add(at(new ai(2.7-s*.2,.16,5,12,Math.PI).rotateZ(Math.PI).rotateY(bt),Ue,[6-s*1.5,4.2,0]));for(let[s,r]of[[5,1.6],[5,-1.6],[-3,1.4],[-3,-1.4]])n.add(at(St(.22,.3,4.2,5),Ue,[s,2.1,r],null,[r>0?.25:-.25,0,0]));es(n)}for(let n=0;n<6;n++)es(at(St(.16,.2,2.6,6),ce,[Math.cos(n*1.047)*.55,1.05,Math.sin(n*1.047)*.55],null,[Math.sin(n*1.047)*.5,0,-Math.cos(n*1.047)*.5]));for(let n=0;n<12;n++)es(at(ki,Wn,[Math.cos(n*.5236)*2.4,.28,Math.sin(n*.5236)*2.4],[.5+Pe(n)*.2,.42,.5],[0,n,0]));for(let n=0;n<5;n++){let t=n*1.2566+.5;es(at(St(.38,.42,2.6,7),ce,[Math.cos(t)*5.4,.4,Math.sin(t)*5.4],null,[bt,0,-t]))}var Tb=[[1,2.8,16742938,.85],[.62,2.1,16756778,.9],[.32,1.4,16773280,1]].map(([n,t,e,i])=>{let s=at(Ct(n,t,7),on(e,{transparent:!0,opacity:i}),[0,.6+t/2,0]);return te.add(s),s}),Rp=new ol(16747066,110,70);Rp.position.set(0,3,0);te.add(Rp);var s_=48,Pp=new Be;Pp.setAttribute("position",new Yn(new Float32Array(s_*3),3));te.add(new Va(Pp,new Gr({map:Se.soft,color:16756832,size:.35,transparent:!0,depthWrite:!1,blending:Wr,fog:!1})));var Pn=new gn;Pn.position.set(0,0,11);Pn.scale.setScalar(1.3);{let n=Ge(14723192),t=ke(Se.fur,{flatShading:!1}),e=Ge(2759698),i=(r,a)=>at(St(.16,.14,.9).translate(0,-.45,0),n,[r,2.05,0],null,[0,0,a]),s=i(.85,2.4);s.add(at(St(.1,.32,1.4,7),ce,[0,-1.5,0])),Pn.add(at(St(.22,.2,.8),n,[.3,.4,0]),at(St(.22,.2,.8),n,[-.3,.4,0]),at(he,t,[0,1.5,0],[.85,.95,.7]),at(he,n,[0,2.75,0],[.55,.55,.55]),at(he,e,[0,3.05,-.08],[.62,.45,.6]),at(Ct(.42,.7),e,[0,2.35,.3],null,[Math.PI,0,0]),at(Te,Zf,[.2,2.85,.47],[.1,.1,.07]),at(Te,Zf,[-.2,2.85,.47],[.1,.1,.07]),at(Te,ra,[.2,2.85,.53],[.055,.055,.04]),at(Te,ra,[-.2,2.85,.53],[.055,.055,.04]),at(he,n,[0,2.68,.55],[.11,.09,.1]),at(St(.06,.06,.9),Ue,[0,3.5,0],null,[0,0,bt]),at(he,Ue,[.45,3.5,0],[.12,.12,.12]),at(he,Ue,[-.45,3.5,0],[.12,.12,.12]),at(new ai(.45,.05,4,10),Ue,[0,2.25,.05],null,[bt+.3,0,0]),i(-.85,-.3),s,at(he,new Ds({visible:!1}),[0,2,0],[2.4,3,2.4])),Pn.userData.club=s,es(Pn)}function Bf(n,t,e,i,s){return at(St(e,e*.85,t,6).translate(0,-t/2,0),n,[i,t,s])}var zf=(n,t,e,i,s)=>{for(let r of[1,-1])n.add(at(Te,Zf,[t,e,i*r],[s,s,s*.6]),at(Te,ra,[t+s*.3,e,i*r+r*s*.35],[s*.55,s*.55,s*.4]))},r_={long:ke(El("#7f9a6a",["#62804f","#9db487","#55724a"]),{flatShading:!1}),horn:ke(El("#b07a52",["#8f5e3b","#c9966c"],"#6e4428"),{flatShading:!1}),run:ke(El("#d08a3c",["#b8732c","#e6a85a"],"#5a3214"),{flatShading:!1}),rex:ke(El("#66784f",["#4e6040","#7f9164"],"#2f3b26"),{flatShading:!1}),fly:ke(El("#8a6a8a",["#6e5270","#a888a6"]),{flatShading:!1})};function wb(n){let t=new gn,e=r_[n],i;if(n==="long"){t.add(at(he,e,[0,3.4,0],[3,1.8,1.6]),at(St(.45,.7,5.4,8),e,[3.4,5.9,0],null,[0,0,-.55]),at(he,e,[5.2,8.2,0],[.95,.55,.55]),at(Ct(.9,5.5,7),e,[-5.2,3.2,0],null,[0,0,bt]));for(let s=0;s<6;s++)t.add(at(Ct(.22,.6,4),e,[-2+s*.8,5.25-Math.abs(s-2.5)*.12,0]));zf(t,5.6,8.35,.4,.14),i=[[1.6,.9],[1.6,-.9],[-1.6,.9],[-1.6,-.9]].map(([s,r])=>Bf(e,2.6,.45,s,r))}else if(n==="horn")t.add(at(he,e,[0,1.9,0],[2.2,1.3,1.3]),at(he,e,[2.6,1.8,0],[1,.75,.85]),at(St(1.3,1.3,.15,9),e,[2,2.5,0],null,[0,0,bt-.3]),at(Ct(.12,1.1),Ue,[3.4,2.4,.35],null,[0,0,-bt]),at(Ct(.12,1.1),Ue,[3.4,2.4,-.35],null,[0,0,-bt]),at(Ct(.1,.5),Ue,[3.7,1.9,0],null,[0,0,-bt+.5]),at(Ct(.6,2.6,7),e,[-3,1.8,0],null,[0,0,bt])),zf(t,3.15,2.05,.68,.13),i=[[1.2,.7],[1.2,-.7],[-1.2,.7],[-1.2,-.7]].map(([s,r])=>Bf(e,1.4,.35,s,r));else{let s=n==="rex"?1.7:1;t.add(at(he,e,[0,1.5,0],[1.1,.6,.5]),at(St(.18,.25,.9,6),e,[1.1,2,0],null,[0,0,-.6]),at(he,e,[1.6+.15*s,2.45,0],[.5*s,.28*s,.25*s]),at(Ct(.3,2.4,6),e,[-2.1,1.6,0],null,[0,0,bt]),at(St(.05,.04,.45,4),e,[.8,1.25,.32],null,[0,0,-1]),at(St(.05,.04,.45,4),e,[.8,1.25,-.32],null,[0,0,-1])),zf(t,1.75+.2*s,2.55+.05*s,.2*s,.07*s),i=[[0,.3],[0,-.3]].map(([r,a])=>Bf(e,1.2,.14,r,a))}return i.forEach(s=>t.add(s)),t.userData.legs=i,es(t),t}var Ip=[["long",ae+28,.03,0,1],["long",ae+50,-.025,3,1.25],["long",ae+44,-.025,3.25,.5],["horn",ae+12,.06,1,1],["horn",ae+16,-.05,4,.85],["rex",ae+78,.022,4.4,3.2],["run",8,.35,0,1],["run",9.5,.33,.5,.8],["run",7,-.3,3,.9]].map(([n,t,e,i,s])=>{let r=wb(n);return r.scale.setScalar(s),{o:r,R:t,w:e,a0:i,y:0,gait:n==="run"?12:3}});for(let[n,t,e,i]of[[ae*.7,.22,0,30],[ae*.9+20,-.17,2,40]]){let s=new gn,r=r_.fly,a=at(new Ye(1.4,.08,3.4).translate(0,0,1.7),r),o=at(new Ye(1.4,.08,3.4).translate(0,0,-1.7),r);s.add(at(Ct(.4,3,6),r,[0,0,0],null,[0,0,-bt]),at(Ct(.16,1.1,4),r,[1.3,.35,0],null,[0,0,.9]),a,o),s.userData.wings=[a,o],es(s),Ip.push({o:s,R:n,w:t,a0:e,y:i,gait:0})}var wl=[];function da(n,t,e,i=1){let s=document.createElement("canvas");s.width=256,s.height=96;let r=s.getContext("2d");r.fillStyle=e?"#f2b23a":"rgba(20,28,23,.92)",r.strokeStyle=e?"#fff0c4":"#d99a2b",r.lineWidth=4,r.beginPath(),r.roundRect(4,4,248,88,14),r.fill(),r.stroke(),r.fillStyle=e?"#2a1606":"#f6ecd8",r.textAlign="center";let a='Pretendard,"Apple SD Gothic Neo","Malgun Gothic",sans-serif';r.font=`600 20px ${a}`,r.fillText(n,128,34);let o=30;do r.font=`800 ${o}px ${a}`;while(r.measureText(t).width>232&&--o>12);r.fillText(t,128,72);let l=new rr(s);l.colorSpace=pn,l.anisotropy=Fg;let c=new er(new Ls({map:l,toneMapped:!1,fog:!1}));return c.scale.set(3.6*i,1.35*i,1),te.add(c),c}var Zu=n=>(n<yp?"\uCCAB \uC8FC\uBBFC ":"")+aa(Math.floor(n/ts))+" "+(n+1)+"\uBC88\uC9C0",Ab=da("\uB2E4\uC74C \uC9D1 \uC790\uB9AC","\uC5EC\uAE30\uC608\uC694",!0);Ab.position.set(Tu.x,3,Tu.z);var wu=da("\uC871\uC7A5",Si,!0);wu.position.set(0,5.9,11);var a_=[["\uBAA8\uB2E5\uBD88 \uAD11\uC7A5","\uB9C8\uC744 \uD55C\uAC00\uC6B4\uB370. \uBD88\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uC544\uC694.",[0,8.5,0],1.5,[0,2,0],[0,16,30]],[`\uC871\uC7A5 ${Si}`,"\uB204\uB974\uBA74 \uD55C\uB9C8\uB514 \uD574\uC694.",null,0,[0,3.2,11],[0,5.5,20.5]],["\uC6B0\uB974\uB989 \uD654\uC0B0","\uBA40\uB9AC\uC11C \uC5F0\uAE30\uB97C \uBFDC\uC5B4\uC694.",[Sn,112,bn],14,[Sn,45,bn],[Sn*.45,70,bn*.45]],["\uCCA8\uBC99 \uC6C5\uB369\uC774","\uACF5\uB8E1\uB4E4\uC774 \uBB3C \uB9C8\uC2DC\uB7EC \uC624\uB294 \uACF3.",[Mn.x,7,Mn.z],3,[Mn.x,0,Mn.z],[Mn.x*.7,26,Mn.z*.7+30]],["\uD070 \uACF5\uB8E1 \uBF08","\uC544\uC8FC \uC624\uB798\uC804\uC5D0 \uC0B4\uB358 \uD070 \uACF5\uB8E1\uC758 \uBF08.",[Rn.x,11,Rn.z],3,[Rn.x,3,Rn.z],[Rn.x*.75,14,Rn.z*.75-14]],["\uD478\uB978 \uBC14\uB2E4","\uBAA8\uC0AC\uC0AC\uC6B0\uB8E8\uC2A4\uAC00 \uD5E4\uC5C4\uCE58\uB294 \uBC14\uB2E4.",[Ee.x,9,Ee.z],4,[Ee.x,0,Ee.z],[Ee.x*.6,55,Ee.z*.6]]];a_.forEach(([n,,t,e])=>t&&da("\uBA85\uC18C",n,!0,e).position.set(...t));function Cb(){let n=pe.position;wu.visible=n.distanceTo(wu.position)>13;for(let t=0;t<He;t++){let e=Ws[t],i=(e.x-n.x)**2+n.y**2+(e.z-n.z)**2,s=i<2025&&i>81;if(s&&!wl[t]){let r=_e>=2&&ns[t];wl[t]=da(Zu(t)+(ji[t]?` \xB7 \uBA39\uC774 ${ji[t].rank||1}\uB4F1`+(ji[t].name?` \xB7 ${ji[t].name}`:""):"")+(r?` \xB7 ${Tp[r]} \uACF5\uB8E1`:""),ee[t],t<yp||!!r||!!ji[t]),wl[t].position.set(e.x,Ve?6.2:4.9,e.z)}wl[t]&&(wl[t].visible=s)}}var oa=new Date(Date.now()+9*36e5).toISOString().slice(0,10),xe={get(n){try{return JSON.parse(localStorage.getItem(n))||{}}catch{return{}}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},ii=()=>{try{return localStorage.getItem("uga-id")}catch{return null}},xr=null;function Rb(n){let t=xe.get("uga-care"),e=t.day!==oa;e&&xe.set("uga-care",{day:oa,n:(t.n||0)+1});let i=xe.get("uga-care").n||1;xr={i:n,t0:It},S("cinfo").textContent=e?`${_e<2?"\uC54C\uC774 \uB530\uB73B\uD574\uC84C\uC5B4\uC694":"\uACF5\uB8E1\uC774 \uC88B\uC544\uD574\uC694"}. \uC9C0\uAE08\uAE4C\uC9C0 ${i}\uC77C \uB3CC\uBD24\uC5B4\uC694.`:`\uC624\uB298\uC740 \uC774\uBBF8 \uB3CC\uBD24\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640\uC694. \uC9C0\uAE08\uAE4C\uC9C0 ${i}\uC77C \uB3CC\uBD24\uC5B4\uC694.`}var yr=(()=>{let n=+oa.replace(/-/g,""),t=Math.floor(Pe(n,1)*Math.max(1,Math.ceil(He/ts))),e=Pe(n,3)*6.283,i=po(Math.floor(Pe(n,2)*3)),s=new gn,r=on(16765498);return s.position.set(vn[t].x+Math.cos(e)*i,1.1,vn[t].z+Math.sin(e)*i),s.userData.hood=aa(t),s.add(at(St(.09,.09,.9,6),r,[0,0,0],null,[0,0,bt]),at(he,r,[.5,0,0],[.2,.2,.2]),at(he,r,[-.5,0,0],[.2,.2,.2])),s.visible=xe.get("uga-bone").day!==oa,te.add(s),s})(),ep=30;function Pb(){let n=xe.get("uga-bone"),t=(n.n||0)+1;xe.set("uga-bone",{day:oa,n:t}),yr.visible=!1,Lu(ep),Ir(`\uC871\uC7A5 ${Si}`,`\uC6B0\uAC00! \uAE08\uBE5B \uBF08 \uCC3E\uC558\uB2E4. \uB208 \uC88B\uB2E4. \uBA39\uC774 ${ep}\uAC1C \uC900\uB2E4. \uB0B4\uC77C\uC740 \uB2E4\uB978 \uB370 \uC228\uAE34\uB2E4. \uC9C0\uAE08\uAE4C\uC9C0 ${t}\uBC88 \uCC3E\uC558\uB2E4.`,"")}var Jr=-1,Lp=!1,yi=null,Gl=(n,t)=>{bi={t:new P(...n),p:new P(...t)},qt.autoRotate=!1,id(!1)};function Ib(n,t){let e=ji[n];if(!e)return"";let i=`\uBA39\uC774 ${e.rank||1}\uB4F1`;return e.name?` \xB7 ${i} \xB7 \uC54C \uC774\uB984 ${e.name}`:e.bow?Rr(n)<2?` \xB7 ${i} \uBB34\uC9C0\uAC1C \uC54C`:` \xB7 ${i}`:e.kind==null?` \xB7 ${i} ${e.rank===3?"\uC54C \uC774\uB984 \uC9D3\uB294 \uC911":"\uACF5\uB8E1 \uACE0\uB974\uB294 \uC911"}`:` \xB7 ${i}\uC774 \uACE0\uB978 ${t}`}function o_(n){let t=tn[oe[n]],e=ns[n]?Tp[ns[n]]+" ":"",i=e?" \xB7 \uC544\uC8FC \uB4DC\uBB38 \uC0C9\uC774\uC5D0\uC694":"";return["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`${e}\uC544\uAE30 ${t}${i}`+(_e<2?" \xB7 \uBA39\uC774 \uBA39\uACE0 \uBA3C\uC800 \uAE7C\uC5B4\uC694":""),`\uB2E4 \uC790\uB780 ${e}${t}${i}`][Rr(n)]+Ib(n,t)}function Lb(n){let t=S("cinfo").textContent;S("cinfo").replaceChildren(...t.split(" \xB7 ").filter(Boolean).map(o=>Object.assign(document.createElement("span"),{className:/드문|황금|무지개|등|짝꿍/.test(o)?"hot":"",textContent:o.replace(/^우가우가마을 /,"")})));let e=S("cpic"),i=Rr(n),s=i>=2?ns[n]:0,{shot:r,done:a}=Mo(160);r(e,i===3?Je[oe[n]].g:Pr[oe[n]],i===3?Je[oe[n]].m:qs,Ti(ee[n]),i===3,s,i>=2?[Ku(n),oe[n]]:null),a(),e.hidden=!1,e.className=s?"r"+s:""}var np=-1;function Ci(n){np=n;let t=Ws[n],e=Math.hypot(t.x-t.cx,t.z-t.cz),i=(t.x-t.cx)/e,s=(t.z-t.cz)/e,r=Ve?1.3:1;if(Ve)Gl([t.x-i*1.5,1.6,t.z-s*1.5],[t.x-i*7*r,12*r,t.z-s*7*r]);else{let c=ui[n].elements,h=c[12]+_s[n],d=c[14]+xs[n],u=Math.max(1,Ms[n]||1);Gl([h-i*2.5*u,.4*u,d-s*2.5*u],[h-i*10*u,7*u,d-s*10*u])}let a=ee[n],o=o_(n),l=la(n);if(Ir("@"+a,`${Zl} ${Zu(n)} \xB7 ${o}`+(l?` \xB7 \uBA39\uC774 ${l.toLocaleString()}\uAC1C \uBA39\uC74C`:""),/^[\w.]{1,30}$/.test(a)&&!Qe?"https://www.instagram.com/"+a+"/":""),Pu.has(n)){let c=Pu.get(n);S("cinfo").textContent+=` \xB7 \uC9DD\uAFCD @${ee[c]}`,S("cpair").hidden=!1,S("cpair").textContent="\uC9DD\uAFCD \uC9D1",S("cpair").title=`\uC9DD\uAFCD @${ee[c]} \uC9D1 \uAC00\uAE30`,S("cpair").onclick=()=>Ci(c)}if(Lb(n),!Qe&&a===ii()&&!tt){S("cwalk").hidden=!1,S("cwalk").onclick=ha,S("ccare").hidden=!1,S("ccare").textContent="\uC4F0\uB2E4\uB4EC\uAE30",S("ccare").onclick=()=>Rb(n);let c=__();c&&(S("cnest").hidden=!1,S("cnest").textContent=`\uB465\uC9C0 ${c}`,S("cnest").onclick=()=>{Ut.t=Date.now(),Lu(c),S("cnest").hidden=!0,S("cinfo").textContent=`\uB465\uC9C0\uC5D0\uC11C \uBA39\uC774 ${c}\uAC1C\uB97C \uC8FC\uC6E0\uC5B4\uC694. 30\uBD84\uC5D0 \uD558\uB098\uC529 \uC313\uC5EC\uC694.`}),S("cfeed").hidden=!1,y_(),S("cshare").hidden=!1,S("cphoto").onclick=()=>Db(n),S("cinvite").onclick=()=>Ub(n),h_()}else!Qe&&Qi()&&n!==Ln()&&!tt&&(S("ccare").hidden=!1,S("ccare").textContent="\uC4F0\uB2E4\uB4EC\uAE30 +5",S("ccare").title="\uC4F0\uB2E4\uB4EC\uC73C\uBA74 \uB098\uB3C4 \uADF8 \uC0AC\uB78C\uB3C4 \uBA39\uC774 5\uAC1C",S("ccare").onclick=()=>ys("pet",a).then(c=>{c&&(c.got&&(xr={i:n,t0:It}),S("cinfo").textContent=c.got?`\uC4F0\uB2E4\uB4EC\uC5C8\uC5B4\uC694. \uB098\uB3C4 @${a} \uB2D8\uB3C4 \uBA39\uC774 5\uAC1C\uC529. \uC624\uB298 ${c.lim.pet-c.cnt.pet}\uBC88 \uB354 \uD560 \uC218 \uC788\uC5B4\uC694.`:c.no)}))}function Ir(n,t,e){Lr(),S("news").classList.remove("open"),S("cid").textContent=n,S("cinfo").textContent=t,S("cpic").hidden=!0,S("clink").hidden=!e,e&&(S("clink").href=e),S("ccare").hidden=S("cwalk").hidden=S("cnest").hidden=S("cfeed").hidden=S("cshare").hidden=S("cpair").hidden=!0,S("card").hidden=!1}var ze=1080,ci=1920,uo='"Pretendard","Apple SD Gothic Neo","Malgun Gothic",sans-serif';function l_(n,t,e){let i=Ne.getPixelRatio();Ne.setPixelRatio(1),Ne.setSize(ze,ci,!1),Ke.target.position.set(t,0,e),Ke.position.copy(Ke.target.position).add(kl),Ke.shadow.needsUpdate=!0;let s=te.children.filter(a=>a.isSprite&&a.visible&&!a.material.transparent);s.forEach(a=>{a.visible=!1}),Ne.render(te,n),s.forEach(a=>{a.visible=!0});let r=Object.assign(document.createElement("canvas"),{width:ze,height:ci});return r.getContext("2d").drawImage(Ne.domElement,0,0,ze,ci),Ne.setPixelRatio(i),Sp(),r}var Au=(n,t,e,i,s=800)=>{let r=e;do n.font=`${s} ${r}px ${uo}`;while(n.measureText(t).width>i&&(r-=4)>30)};function c_(n,t,e){let i=n.toDataURL("image/jpeg",.92);S("ptitle").textContent=e,S("pimg").src=i,S("psave").href=i,S("psave").download=t,S("pmsg").textContent=`\uD734\uB300\uD3F0\uC740 \uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574\uB3C4 \uB3FC\uC694. \uC2A4\uD1A0\uB9AC\uC5D0 \uC62C\uB9B4 \uB54C @${zl}\uB97C \uD0DC\uADF8\uD574 \uC8FC\uC138\uC694.`;let s=new File([Uint8Array.from(atob(i.split(",")[1]),r=>r.charCodeAt(0))],t,{type:"image/jpeg"});S("pshare").hidden=!navigator.canShare?.({files:[s]}),S("pshare").onclick=()=>navigator.share({files:[s]}).catch(()=>{}),S("photo").showModal()}S("px").onclick=()=>S("photo").close();function Db(n){let t=Ws[n],e=ui[n].elements,i=e[12],s=e[14],r=Math.hypot(t.x-t.cx,t.z-t.cz),a=(t.x-t.cx)/r,o=(t.z-t.cz)/r,l=Ve?1.6:1,c=new mn(52,ze/ci,.3,pe.far);c.position.set(i-a*3.8*l,2.6*l,s-o*3.8*l),c.lookAt(i*.7+t.x*.3,.55*l,s*.7+t.z*.3);let h=l_(c,i,s),d=h.getContext("2d"),u=d.createLinearGradient(0,ci*.66,0,ci);u.addColorStop(0,"rgba(30,22,12,0)"),u.addColorStop(1,"rgba(30,22,12,.82)"),d.fillStyle=u,d.fillRect(0,ci*.66,ze,ci*.34),d.textAlign="center",d.fillStyle="#fffaf0",d.shadowColor="rgba(0,0,0,.45)",d.shadowBlur=12;let f="@"+ee[n];Au(d,f,92,ze-120),d.fillText(f,ze/2,ci-290);let m=["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`\uC544\uAE30 ${tn[oe[n]]}`,`\uB2E4 \uC790\uB780 ${tn[oe[n]]}`][Rr(n)],y=la(n),g=`${Zl} ${Zu(n)} \xB7 ${m}`;Au(d,g,46,ze-100),d.fillText(g,ze/2,ci-208),y&&Rr(n)<2&&(d.font=`700 40px ${uo}`,d.fillStyle="#ffd98a",d.fillText(`\uBA39\uC774 ${y.toLocaleString()}\uAC1C \uBA39\uACE0 ${Ar(y).toFixed(1)}\uBC30`,ze/2,ci-148)),d.fillStyle="rgba(255,250,240,.85)",d.font=`600 34px ${uo}`,d.fillText(`\uB313\uAE00 \uB2EC\uBA74 \uB0B4 \uC9D1\uACFC \uACF5\uB8E1 \uC54C \uD558\uB098 \xB7 @${zl}`,ze/2,ci-72),c_(h,`ugauga_${ee[n]}.jpg`,"\uB0B4 \uC54C \uC0AC\uC9C4")}var Cu=300,Nb=n=>location.origin+location.pathname+"?from="+encodeURIComponent(ee[n]),h_=()=>{S("cinvite").textContent=Ut.inv?`\uCE5C\uAD6C ${Ut.inv}\uBA85`:"\uCE5C\uAD6C \uCD08\uB300",S("cinvite").title="\uCE5C\uAD6C \uB370\uB824\uC624\uAE30: \uB458 \uB2E4 \uBA39\uC774\uB97C \uBC1B\uC544\uC694"};async function Ub(n){let t=Nb(n),e=`\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744 \uAC19\uC774 \uD558\uC790. \uC774 \uB9C1\uD06C\uB85C \uC640\uC11C \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${Cu}\uAC1C.`;if(navigator.share)try{await navigator.share({text:e,url:t});return}catch(i){if(i.name==="AbortError")return}try{await navigator.clipboard.writeText(t),S("cinfo").textContent=`\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694. \uCE5C\uAD6C\uAC00 \uC774 \uB9C1\uD06C\uB85C \uC640\uC11C \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${Cu}\uAC1C\uB97C \uBC1B\uC544\uC694.`}catch{S("cinfo").textContent=`\uC774 \uB9C1\uD06C\uB97C \uCE5C\uAD6C\uC5D0\uAC8C \uBCF4\uB0B4 \uC8FC\uC138\uC694: ${t}`}}var u_=oa<="2026-11-19"?"\uC6B0\uAC00! \uBA39\uC774 \uC21C\uC704 \uC815\uD574\uC84C\uB2E4. 1\uB4F1 \uBB34\uC9C0\uAC1C \uACF5\uB8E1, 2\uB4F1 \uACF5\uB8E1 \uACE0\uB974\uAE30, 3\uB4F1 \uC54C \uC774\uB984 \uC9D3\uAE30. \uCD95\uD558\uD55C\uB2E4.":fo.notice,Ru=[u_,`\uC6B0\uAC00! \uB098 \uC871\uC7A5 ${Si}. \uC5EC\uAE30 ${Zl}.`,"\uB313\uAE00 \uB2EC\uBA74 \uC9D1 \uC900\uB2E4. \uC54C\uB3C4 \uC900\uB2E4. \uBA87 \uBD84\uC774\uBA74 \uB41C\uB2E4. \uC6B0\uAC00.",[`\uC54C \uAC74\uB4DC\uB9AC\uC9C0 \uB9C8\uB77C. \uC5B8\uC820\uAC00 \uAE6C\uB2E4. \uBB50 \uB098\uC62C\uC9C0 ${Si}\uB3C4 \uBAA8\uB978\uB2E4.`,`\uC54C\uC5D0 \uAE08 \uAC14\uB2E4. \uACE7 \uB098\uC628\uB2E4. ${Si} \uC7A0 \uBABB \uC794\uB2E4.`,"\uC54C \uAE7C\uB2E4. \uC544\uAE30 \uACF5\uB8E1 \uB098\uC654\uB2E4. \uBB3C\uBA74 \uC544\uD504\uB2E4. \uC6B0\uAC00.",`\uC544\uAE30 \uB2E4 \uCEF8\uB2E4. \uC774\uC81C ${Si}\uBCF4\uB2E4 \uD06C\uB2E4. \uAE38 \uBE44\uCF1C\uB77C. \uC6B0\uAC00.`][_e],`\uC0AC\uB78C \uB9CE\uC544\uC9C0\uBA74 \uB9C8\uC744 \uCEE4\uC9C4\uB2E4. ${Si} \uBC14\uBE60\uC9C4\uB2E4. \uC6B0\uAC00\uC6B0\uAC00.`,`\uBC24\uC5D0 \uACF5\uB8E1 \uC6B4\uB2E4. \uBB34\uC11C\uC6CC \uB9C8\uB77C. ${Si}\uB3C4 \uBB34\uC12D\uB2E4.`].filter(Boolean),Ob=["\uBD88 \uAEBC\uB728\uB9AC\uC9C0 \uB9C8\uB77C. \uB300\uC7A5 \uD63C\uB09C\uB2E4.","\uD070 \uBC14\uC704\uB2E4. \uC62E\uAE30\uB824\uB2E4 \uD5C8\uB9AC \uB098\uAC14\uB2E4.","\uD070 \uB098\uBB34\uB2E4. \uADF8\uB298 \uC88B\uB2E4. \uB0AE\uC7A0 \uC794\uB2E4.","\uBF08 \uC313\uC558\uB2E4. \uBB34\uB108\uB728\uB9AC\uBA74 \uB610 \uC313\uC544\uC57C \uD55C\uB2E4.","\uBB3C \uC788\uB2E4. \uACF5\uB8E1\uB3C4 \uB9C8\uC2E0\uB2E4. \uC904 \uC11C\uB77C."];function Fb(n){let t=Ep[n-1].elements;Gl([t[12],2.4,t[14]],[t[12],4.5,t[14]+8]),Ir(`${aa(n)} \uB300\uC7A5`,`\uC6B0\uAC00. \uC5EC\uAE30 ${aa(n)}. ${Ob[jl(n)]}`,"")}var Bb=0;function Dp(){let n=Pn.position,t=Bb++,e=Me&&!Me.chest&&t%2===0;Gl([n.x,3.2,n.z],[n.x,5.5,n.z+9.5]),Ir(`\uC871\uC7A5 ${Si}`,e?"\uC6B0\uAC00. \uC624\uB298 \uD560 \uC77C\uC774\uB2E4. "+Me.mis.map(([i,s,r])=>`${i} ${s}/${r}`).join(", ")+". \uC14B \uB2E4 \uD558\uBA74 \uBCF4\uBB3C \uC0C1\uC790 \uC900\uB2E4.":Ru[t%Ru.length],"")}S("news").append(Object.assign(document.createElement("b"),{textContent:"\uC871\uC7A5"}),Ru[u_?0:Og%Ru.length]);{let n=Qe||cn?[]:ee.map((t,e)=>[t,e]).slice(-12).filter(([,t])=>!ns[t]).slice(-3).map(([t])=>"@"+t);n.length&&S("news").append(Object.assign(document.createElement("small"),{textContent:`\uC0C8\uB85C \uC628 \uC8FC\uBBFC ${n.join(" ")}. \uBC18\uAC11\uB2E4.`}))}S("news").onclick=()=>{matchMedia("(max-width:600px)").matches&&!S("news").classList.contains("open")?S("news").classList.add("open"):Dp()};{let n=S("news").textContent,t=Object.assign(document.createElement("button"),{className:"nx",ariaLabel:"\uC871\uC7A5 \uACF5\uC9C0 \uB2EB\uAE30",textContent:"\uB2EB\uAE30"});t.onclick=e=>{e.stopPropagation(),S("news").hidden=!0,xe.set("uga-newsx",{t:n})},S("news").prepend(t),xe.get("uga-newsx").t===n&&(S("news").hidden=!0)}var zb=()=>{S("hud").offsetHeight&&(S("news").style.top=S("hud").getBoundingClientRect().bottom+8+"px")};new ResizeObserver(zb).observe(S("hud"));S("card").querySelector(".x").onclick=()=>{S("card").hidden=!0};var Xn=n=>ee.findIndex(t=>t.toLowerCase()===n.trim().replace(/^@/,"").toLowerCase()),Pu=new Map;(Qe?[]:fo.pairs||[]).forEach(([n,t])=>{let e=Xn(n),i=Xn(t);e>=0&&i>=0&&e!==i&&(Pu.set(e,i),Pu.set(i,e))});var Iu=n=>{let t=Xn(n);if(t<0)return!1;if(Jr=t,!Qe)try{localStorage.setItem("uga-id",ee[t])}catch{}return Ci(t),Nr(),vs()?Dr().then(I_):Np(),!0},vs=()=>{let n=xe.get("uga-tok"),t=ii();return t&&n.id===t.toLowerCase()?n.tok:""},Il="";function Np(){let n=ii();!En||Qe||cn||!n||vs()||S("pin").open||(Il="",S("pinmsg").textContent="",S("pinv").value="",S("pinh").textContent=`@${n}`,S("pinp").textContent="\uD655\uC778\uD558\uB294 \uC911\uC774\uC5D0\uC694\u2026",S("pin").dataset.set="1",S("pin").showModal(),fetch(En+"/api/pin?id="+encodeURIComponent(n)).then(t=>t.json()).then(t=>{S("pin").dataset.set=t.set?"1":"",S("pinp").textContent=t.set?"\uB0B4 \uC54C\uC744 \uC9C0\uD0A4\uB294 \uC22B\uC790 4\uC790\uB9AC(PIN)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.":"\uCC98\uC74C\uC774\uC5D0\uC694. \uB0B4 \uC54C\uC744 \uC9C0\uD0AC \uC22B\uC790 4\uC790\uB9AC(PIN)\uB97C \uC815\uD574 \uC8FC\uC138\uC694. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C\uB3C4 \uC774 \uC22B\uC790\uB85C \uB4E4\uC5B4\uC640\uC694. \uC544\uBB34\uC5D0\uAC8C\uB3C4 \uC54C\uB824 \uC8FC\uC9C0 \uB9C8\uC138\uC694."}).catch(()=>{S("pinp").textContent="\uC22B\uC790 4\uC790\uB9AC(PIN)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694."}))}S("pinf").onsubmit=n=>{n.preventDefault();let t=ii(),e=S("pinv").value.trim(),i=S("pinmsg");if(!/^\d{4}$/.test(e)){i.textContent="\uC22B\uC790 4\uC790\uB9AC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.";return}if(!S("pin").dataset.set&&Il!==e){i.textContent=Il?"\uC55E\uC5D0\uC11C \uB123\uC740 \uC22B\uC790\uC640 \uB2EC\uB77C\uC694. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC815\uD574 \uC8FC\uC138\uC694.":"\uD55C \uBC88 \uB354 \uB123\uC5B4 \uC8FC\uC138\uC694.",Il=Il?"":e,S("pinv").value="",S("pinv").focus();return}i.textContent="\uD655\uC778\uD558\uB294 \uC911\uC774\uC5D0\uC694\u2026",fetch(En+"/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t,pin:e})}).then(s=>s.json().then(r=>[s.ok,r])).then(([s,r])=>{if(S("pinv").value="",!s){i.textContent=r.error==="\uC8FC\uBBFC \uBA85\uB2E8\uC5D0 \uC5C6\uB294 \uC544\uC774\uB514"?"\uC544\uC9C1 \uC8FC\uBBFC \uBA85\uB2E8\uC5D0 \uC5C6\uB294 \uC544\uC774\uB514\uC608\uC694.":r.error||"\uC798 \uC548 \uB410\uC5B4\uC694. \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694.";return}xe.set("uga-tok",{id:t.toLowerCase(),tok:r.tok}),S("pin").close(),r.made&&Ce("PIN\uC744 \uC815\uD588\uC5B4\uC694. \uC78A\uC73C\uBA74 \uC778\uC2A4\uD0C0 @ugauga_village\uC5D0 DM \uC8FC\uC138\uC694."),Dr().then(I_),tc()}).catch(()=>{i.textContent="\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694."})};S("pinx").onclick=()=>S("pin").close();var Up=()=>{xe.set("uga-tok",{}),tc(),Np()},ip="\uC544\uC9C1 \uADF8 \uC544\uC774\uB514\uB85C \uB41C \uC9D1\uC740 \uC5C6\uC5B4\uC694";S("find").onsubmit=n=>{n.preventDefault(),Iu(S("q").value)?S("q").blur():b_(S("q").value)?S("msg").textContent=ip+". \uADF8 \uC544\uC774\uB514 \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1\uC744 \uBCF4\uC5EC \uB4DC\uB838\uC5B4\uC694.":S("msg").textContent=ip+"."};S("lot").onsubmit=n=>{n.preventDefault();let t=parseInt(S("qn").value,10);t>=1&&t<=He?Ci(t-1):S("msg").textContent=He?`\uBC88\uC9C0\uB294 1\uBC88\uBD80\uD130 ${He.toLocaleString()}\uBC88\uAE4C\uC9C0 \uC788\uC5B4\uC694.`:"\uC544\uC9C1 \uC9D1\uC774 \uD55C \uCC44\uB3C4 \uC5C6\uC5B4\uC694."};function di(n){yi=yi===n?null:n,S("sheet").hidden=!yi,S("msg").textContent="",S("sheet").querySelectorAll("[data-tab]").forEach(t=>{t.hidden=t.dataset.tab!==yi}),S("menu").querySelectorAll("button").forEach(t=>t.classList.toggle("on",!!yi&&t.dataset.tab===yi)),yi&&(S("card").hidden=!0),yi==="dex"&&Zb(),yi==="spot"&&pE(),["bag","shop","dex"].includes(yi)&&Ai("me"),yi==="era"&&fE()}function Lr(){yi&&di(yi)}S("menu").querySelectorAll("[data-tab]").forEach(n=>{n.onclick=()=>di(n.dataset.tab)});S("medal").onclick=()=>di("era");S("medal").onkeydown=n=>{n.key==="Enter"&&di("era")};S("sheet").querySelector(".x").onclick=Lr;var br=(n,t,e)=>{let i=document.createElement(n);return i.append(Object.assign(document.createElement("b"),{textContent:t}),e),i};a_.forEach(([n,t,,,e,i],s)=>{let r=br("button",n,t);r.onclick=()=>{Lr(),s===1?Dp():Gl(e,i)},S("spots").append(r)});Vs.forEach((n,t)=>{let e=br("div",`${n.name} \uC2DC\uB300`+(t===_e?" \xB7 \uC9C0\uAE08":""),`${t?`\uD314\uB85C\uC6CC ${n.at.toLocaleString()}\uBA85\uBD80\uD130`:"\uCC98\uC74C\uBD80\uD130"} \xB7 ${n.pet}`);t===_e&&(e.className="now"),S("eras").append(e)});S("eranext").textContent=(Sr?`${Sr.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,Sr.at-Jl).toLocaleString()}\uBA85 \uB0A8\uC558\uC5B4\uC694.`:"\uB9C8\uC9C0\uB9C9 \uC2DC\uB300\uC608\uC694. \uACF5\uB8E1\uC774 \uB2E4 \uC790\uB790\uC5B4\uC694.")+` \uD314\uB85C\uC6CC ${sb.toLocaleString()}\uBA85\uC774 \uB418\uBA74 \uC8FC\uBBFC \uBAA8\uB450\uC5D0\uAC8C \uBA39\uC774 ${ib}\uAC1C\uB97C \uC120\uBB3C\uD574\uC694.`;S("erabar").style.width=(Sr?Math.min(1,Math.max(0,(Jl-Vs[_e].at)/(Sr.at-Vs[_e].at)))*100:100)+"%";var Me=null,Ll="",Ut=xe.get("uga-shell");Ut.n||=0;Ut.fed||=0;Ut.t||=Date.now();Ut.owed||=0;var Er=_e<2?"\uC54C":"\uACF5\uB8E1",d_=1e5,Ar=n=>n<=2e3?1+Math.sqrt(n/2e3):2+5*Math.sqrt(Math.min(1,(n-2e3)/(d_-2e3))),Ms=new Float32Array(He).fill(1),_s=new Float32Array(He),xs=new Float32Array(He);function sp(n,t){let e=ui[n].elements,i=Ws[n],s=e[12]-i.x,r=e[14]-i.z,a=Math.hypot(s,r)||1;if(Ms[n]=t,_s[n]=s/a*(t-1)*.55,xs[n]=r/a*(t-1)*.55,t>2.2){let o=i.x-i.cx,l=i.z-i.cz,c=Math.hypot(o,l)||1,h=hi.at(-1)[0]+7+t*1.7;_s[n]=i.cx+o/c*h-e[12],xs[n]=i.cz+l/c*h-e[14]}if(oe[n]===11){let[o,l]=bb(n);_s[n]=o-e[12],xs[n]=l-e[14]}else{let o=e[12]+_s[n]-Ee.x,l=e[14]+xs[n]-Ee.z,c=Math.hypot(o,l)||1,h=Ee.f(Math.atan2(l,o))+4+t;c<h&&(_s[n]+=o/c*(h-c),xs[n]+=l/c*(h-c))}}function Ju(n){let t=wi.get(n);qu[n].decompose(t.position,t.quaternion,t.scale),t.scale.multiplyScalar(Ms[n]),t.position.x+=_s[n],t.position.z+=xs[n],oe[n]===11&&(t.position.y-=.5*Ms[n])}var ps={leather:Ge(8014374,{roughness:.7}),stone:Ge(9407360,{roughness:.8}),obs:new Jn({color:1907490,roughness:.25,metalness:.35,flatShading:!0}),bone:Ge(15721412,{roughness:.6}),glow:new Jn({color:16765562,emissive:16751150,emissiveIntensity:.55,roughness:.4,flatShading:!0})},Fl=new Ye(1,1,1),f_=!1,xg=[[.37,.33,.36,1.27,.14],[.32,.3,.34,1.26,.14],[.27,.25,.3,1.25,.12],[.38,.33,.4,1.22,.16],[.28,.26,.29,1.25,.12],[.2,.17,.27,1.76,.26],[.3,.26,.34,1.2,.18],[.36,.22,.34,1.16,.18],[.26,.24,.36,1.24,.18],[.25,.23,.27,1.25,.13],[.4,.34,.38,1.28,.15],[.3,.24,.36,1.2,.18]];function p_(n,t){let e=new gn,[i,s,r,a,o]=xg[t]||xg[0];e.name="gear";let l=(h,d)=>/^b.2$/.test(h)?ps.glow:h[0]==="b"?ps.bone:d,c=(h,d,u,f=[1,1,1],m=[0,0,0])=>{let y=new Bn(h,d);return y.position.set(...u),y.scale.set(...f),y.rotation.set(...m),y.castShadow=!0,e.add(y),y};if(n.head&&(c(new zn(1,14,8,0,Math.PI*2,0,Math.PI*.42),l(n.head,ps.stone),[0,a,o],[i*1.08,s*1.12,r*1.08],[-.25,0,0]),c(new ai(1,.06,5,16),ps.leather,[0,a+s*.42,o+r*.1],[i*1,r*1,i],[Math.PI/2-.25,0,0]),[-1,1].forEach(h=>c(new qi(.045,.2,6),ps.bone,[h*i*.5,a+s*1,o-r*.15],[1,1,1],[-.45,0,h*-.35]))),n.body){c(Fl,l(n.body,ps.leather),[0,1.1184,-.2],[.42,.06,.3],[.55,0,0]);for(let u=-1;u<=1;u++)c(Fl,l(n.body,ps.stone),[0,1.1184+.04-u*.045,-.2+u*.085],[.32,.05,.07],[.55,0,0]);[-1,1].forEach(u=>c(Fl,ps.leather,[u*.32,1.1184-.1,-.2+.04],[.03,.16,.08],[.3,0,0]))}if(n.claw&&[-1,1].forEach(h=>[0,1,2].forEach(d=>c(new qi(.022,.09,5),l(n.claw,ps.obs),[h*(.24+d*.025),.92+d*.012,.47],[1,1,1],[Math.PI/2.2,0,0]))),n.tail)for(let h=0;h<4;h++)c(new qi(.035,.13-h*.015,5),l(n.tail,ps.bone),[0,1.04-h*.09,-.3-h*.04],[1,1,1],[-.9,0,0]);return e}var Ku=n=>{let t=ee[n].toLowerCase(),e=null;try{e=Vn}catch{}return n===Ln()&&e?Object.fromEntries(Object.entries(e.gear).map(([i,s])=>[i,s.item])):Cr.gear?.[t]||{}};function m_(n){let t=wi.get(n);if(!t||!f_)return;let e=Ku(n),i=JSON.stringify(e);if(t.userData.gearKey===i)return;t.userData.gearKey=i;let s=t.getObjectByName("gear");s&&(t.remove(s),s.traverse(r=>r.geometry&&r.geometry!==Fl&&r.geometry.dispose())),Object.keys(e).length&&t.add(p_(e,oe[n]))}var Op=()=>wi.forEach((n,t)=>m_(t));function g_(){let n=!1;for(let[t,e]of Object.entries(Cr.kinds||{})){let i=Xn(t);if(i<0||oe[i]===e)continue;oe[i]=e,n=!0,e===10&&!ns[i]&&ln.setHSL(.58,.06,Ve?.72:.86).toArray(ho,i*3);let s=wi.get(i);s&&(te.remove(s),wi.delete(i))}n&&(Fp(),(Ve||_e===2)&&xb(),np>=0&&!S("card").hidden&&Ci(np))}var __=()=>Math.min(24,Math.floor((Date.now()-Ut.t)/18e5)),Ln=()=>Qe||cn?-1:Xn(ii()||""),Qi=()=>!!En&&Ln()>=0&&!!vs(),Cr={fed:{},top:[]},rp=0,Dl=null,la=n=>n===Ln()?Ut.fed:Cr.fed[ee[n].toLowerCase()]||0;function Dr(n){if(clearTimeout(rp),!Qi())return Promise.resolve(!1);if(Dl)return Dl.then(r=>n?Dr(!0):r);let t=ii(),e=!Ut.srv,i=e?Ut.n:Ut.owed,s=e?xe.get("uga-from").id:void 0;return Dl=fetch(En+"/api/sync",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t,tok:vs(),add:i,feed:!!n,from:s})}).then(r=>r.ok?r.json():Promise.reject(r.status===401&&Up())).then(r=>{Ut.owed=e?0:Ut.owed-i,Ut.n=r.n+Ut.owed,Ut.fed=r.fed,Ut.inv=r.inv||0,Ut.srv=1,xe.set("uga-shell",Ut),Nr(),h_();let a=[r.bonus&&`@${r.bonus} \uB530\uB77C\uC654\uAD6C\uB098. \uBA39\uC774 ${Cu}\uAC1C \uC900\uB2E4. @${r.bonus}\uB3C4 \uC900\uB2E4.`,r.gift&&`\uD314\uB85C\uC6CC \uB298\uC5C8\uB2E4. \uB9C8\uC744 \uC120\uBB3C\uC774\uB2E4. \uBA39\uC774 ${r.gift.toLocaleString()}\uAC1C \uBC1B\uC544\uB77C.`].filter(Boolean);return a.length&&Ir(`\uC871\uC7A5 ${Si}`,"\uC6B0\uAC00. "+a.join(" "),""),!0}).catch(()=>!1).finally(()=>{Dl=null})}function Lu(n){Ut.n+=n,Ut.owed+=n,xe.set("uga-shell",Ut),Nr(),Qi()&&(clearTimeout(rp),rp=setTimeout(Dr,2e4))}var x_=ui.map(n=>n.clone()),ap=[],op=new P,kb=new Wt;function Fp(){if(_e===2){ee.forEach((n,t)=>{if(sp(t,Ar(la(t))),tt&&tt.i===t)return;let e=bu.copy(qu[t]).scale(op.setScalar(oe[t]===11?0:Ms[t]));e.elements[12]+=_s[t],e.elements[14]+=xs[t],Qf.forEach(i=>i.setMatrixAt(t,kb.multiplyMatrices(e,i.userData.L)))}),Qf.forEach(n=>{n.instanceMatrix.needsUpdate=!0});return}_e>2||(ee.forEach((n,t)=>{let e=Ar(la(t));if(wi.has(t)){Ms[t]!==e&&(sp(t,e),tt&&tt.i===t||Ju(t));return}(ap[t]||1)!==e&&(ap[t]=e,ui[t].copy(x_[t]).scale(op.set(e,e,e)),Hs.forEach(i=>{i.setMatrixAt(t,bu.multiplyMatrices(ui[t],i.userData.L)),i.instanceMatrix.needsUpdate=!0}))}),Gb())}var Hb=5e3,wi=new Map,Rr=n=>_e<2&&wi.has(n)?2:_e;function Gb(){_e>1||Qe||cn||ee.forEach((n,t)=>{if(wi.has(t)||la(t)<Hb)return;let e=oe[t],i=Pr[e].clone(),s=new gn,r=_r.clone();i.setAttribute("aPhase",new ls(new Float32Array([Pe(t,4)*9]),1)),i.setAttribute("aRare",new ls(new Float32Array([ns[t]]),1));let a=new ir(i,qs,1);a.setMatrixAt(0,new Wt),a.setColorAt(0,ln.fromArray(ho,t*3)),a.castShadow=!0,a.frustumCulled=!1,r.color.setHSL(Ti(n),.62,.76);let o=at(wp,r,[0,.72,0],[.58,.68,.58]);o.castShadow=!0,o.visible=e!==11,s.add(a,o),te.add(s),wi.set(t,s),sp(t,Ar(la(t))),Ju(t),m_(t),ui[t].copy(x_[t]).scale(op.set(0,0,0)),ap[t]=0,Hs.forEach(l=>{l.setMatrixAt(t,bu.multiplyMatrices(ui[t],l.userData.L)),l.instanceMatrix.needsUpdate=!0}),t===Ln()&&!tt&&xe.get("uga-hatch").id!==n&&(xe.set("uga-hatch",{id:n}),Ci(t),S("cinfo").textContent=`\uC6B0\uAC00! \uC54C\uC774 \uAE7C\uC5B4\uC694. \uBA39\uC774\uB97C \uB9CE\uC774 \uBA39\uC5B4\uC11C \uB9C8\uC744\uBCF4\uB2E4 \uBA3C\uC800 \uB098\uC654\uC5B4\uC694. \uC544\uAE30 ${tn[e]}.`)})}function Vb(){S("rankbox").hidden=!Cr.top.length,S("rank").replaceChildren(...Cr.top.map((n,t)=>{let e=Xn(n.id),i=br("button",`${t+1}\uC704 @${n.id}`,`\uBA39\uC774 ${n.fed.toLocaleString()}\uAC1C \uBA39\uC74C \xB7 \uD06C\uAE30 ${Ar(n.fed).toFixed(1)}\uBC30`);return i.disabled=e<0,i.onclick=()=>Ci(e),i}))}async function Bp(){let n=Ut.n,t=Ln();if(!(t<0||!n)){if(En){if(!await Dr(!0)){let e="\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC138\uC694.";S("decomsg").textContent=e,S("card").hidden||(S("cinfo").textContent=e);return}}else Ut.fed+=n,Ut.n=0,xe.set("uga-shell",Ut),Nr();Ci(t),xr={i:t,t0:It},S("cinfo").textContent=`${Er}\uC774 \uBA39\uC774 ${n.toLocaleString()}\uAC1C\uB97C \uBA39\uC5C8\uC5B4\uC694.`+(Me?.hot?" \uD654\uC0B0 \uC5F4\uAE30 \uB355\uBD84\uC5D0 1.5\uBC30\uB85C \uB4E4\uC5B4\uAC14\uC5B4\uC694.":"")+` \uD06C\uAE30 ${Ar(Ut.fed).toFixed(1)}\uBC30.`}}function y_(){S("cfeed").textContent=Ut.n?`\uBA39\uC774 \uC8FC\uAE30 (${Ut.n.toLocaleString()}\uAC1C)`:"\uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uBAA8\uC73C\uAE30",S("cfeed").onclick=Ut.n?Bp:ha,S("cfeed").classList.toggle("walk",!Ut.n)}function Nr(){let n=Ln(),t=n>=0,e=Ut.n.toLocaleString();S("purse").textContent=`\uBA39\uC774 ${e}`,S("shn").textContent=`\uC9C0\uAE08 \uBA39\uC774 ${e}\uAC1C.`,S("join").textContent=t?`\uB0B4 ${Er}`:"\uC54C \uBC1B\uAE30",S("join").hidden=!!t,S("join").onclick=t?()=>Ci(n):()=>S("how").showModal();let i="\uAE38\uC5D0 \uB5A8\uC5B4\uC9C4 \uC5F4\uB9E4\xB7\uBC84\uC12F\xB7\uACE0\uAE30\uB97C \uC8FC\uC6CC\uC694";S("decomsg").textContent=t?`\uB0B4 ${Er}\uC740 \uC9C0\uAE08\uAE4C\uC9C0 \uBA39\uC774 ${Ut.fed.toLocaleString()}\uAC1C\uB97C \uBA39\uC5C8\uC5B4\uC694. \uD06C\uAE30 ${Ar(Ut.fed).toFixed(1)}\uBC30.`+(Ut.fed>=d_?" \uAC00\uC7A5 \uD06C\uAC8C \uCEF8\uC5B4\uC694. \uB354 \uBA39\uC5EC\uB3C4 \uC21C\uC704\uB294 \uC62C\uB77C\uAC00\uC694.":" 10\uB9CC \uAC1C\uB97C \uBA39\uC73C\uBA74 7\uBC30\uAE4C\uC9C0 \uCEE4\uC838\uC694."):"\uC544\uB798 \uC21C\uC11C\uB300\uB85C \uD558\uBA74 \uB3FC\uC694.";let s=br(t?"div":"button",t?"1. \uB0B4 \uC9D1 \uCC3E\uAE30 \xB7 \uC644\uB8CC":"1. \uB0B4 \uC9D1 \uCC3E\uAE30",t?`@${ee[n]} \uC9D1\uC744 \uCC3E\uC558\uC5B4\uC694`:"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uB123\uC5B4\uC694");t||(s.onclick=()=>di("find"));let r=br("button","2. \uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uC90D\uAE30",`${i}. \uC9C0\uAE08 \uBA39\uC774 ${e}\uAC1C`);r.onclick=ha;let a=br("button",`3. ${Er}\uC5D0\uAC8C \uBA39\uC774 \uC8FC\uAE30`,t?Ut.n?`\uAC00\uC9C4 \uBA39\uC774 ${e}\uAC1C\uB97C \uC804\uBD80 \uC918\uC694`:"\uBA39\uC774\uAC00 \uC5C6\uC5B4\uC694. \uC0B0\uCC45\uD558\uBA70 \uBAA8\uC544\uC694":"\uBA3C\uC800 \uB0B4 \uC9D1\uC744 \uCC3E\uC544\uC694");a.disabled=!t||!Ut.n,a.onclick=Bp,(t?Ut.n?a:r:s).className="now",S("deco").replaceChildren(s,r,a),S("cfeed").hidden||y_(),Fp(),ju()}function ju(){let n=Ln(),t=__(),e=S("next"),i=Ll?ed().find(o=>o.n):null,s=Me&&!Me.chest&&Me.mis.every(([,o,l])=>o>=l),[r,a]=i?[i.kind==="rain"?"\uBA39\uC774 \uBE44! \uD669\uAE08 \uC5F4\uB9E4 \uC8FC\uC6B0\uB7EC \uAC00\uAE30":"\uD654\uC0B0 \uBD84\uCD9C! \uBD88\uC528 \uC5F4\uB9E4 \uC8FC\uC6B0\uB7EC \uAC00\uAE30",ha]:s?["\uC624\uB298 \uBBF8\uC158 \uB05D \xB7 \uBCF4\uBB3C \uC0C1\uC790 \uC5F4\uAE30",()=>di("quest")]:n<0?["\uB0B4 \uC544\uC774\uB514\uB85C \uB0B4 \uACF5\uB8E1 \uCC3E\uAE30",()=>{di("find"),S("q").focus()}]:t?[`\uB465\uC9C0\uC5D0 \uC313\uC778 \uBA39\uC774 ${t}\uAC1C \uC90D\uAE30`,()=>Ci(n)]:Ut.n?[`${Er}\uC5D0\uAC8C \uBA39\uC774 \uC8FC\uAE30 \xB7 ${Ut.n.toLocaleString()}\uAC1C`,Bp]:["\uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uC90D\uAE30",ha];e.querySelector("b").textContent=r,e.onclick=a,e.hidden=cn}cn||setInterval(ju,6e4);S("purse").onclick=()=>di("shell");var Tr=new gn;Tr.visible=!1;te.add(Tr);var zp=()=>Math.max(1,Math.ceil(He/ts)),lp=n=>{let t=0;for(let e=1;e<zp();e++)Math.hypot(vn[e].x-tt.x,vn[e].z-tt.z)<Math.hypot(vn[t].x-tt.x,vn[t].z-tt.z)&&(t=e);do{let e=Math.random()*6.283,i=po(Math.floor(Math.random()*3));n.position.set(vn[t].x+Math.cos(e)*i,0,vn[t].z+Math.sin(e)*i)}while(Math.hypot(n.position.x-tt.x,n.position.z-tt.z)<12)},Wb=[["\uD070 \uC5F4\uB9E4",5,1,"\uD070 \uC5F4\uB9E4\uB2E4"],["\uACE0\uAE30",3,3,"\uACE0\uAE30\uB2E4"],["\uBC84\uC12F",2,5,"\uBC84\uC12F\uC774\uB2E4"],["\uBE68\uAC04 \uC5F4\uB9E4",1,15,""]],Xb=n=>{if(n==="\uBC84\uC12F"){let i=new gn,s=on(16774108);return i.add(at(St(.2,.26,.7,6),on(15984328),[0,-.35,0]),at(he,on(14239023),[0,.05,0],[.7,.42,.7]),at(he,s,[.28,.3,.15],[.12,.07,.12]),at(he,s,[-.22,.32,-.15],[.1,.06,.1]),at(he,s,[0,.42,.3],[.09,.05,.09])),i.userData.h=.95,i}if(n==="\uACE0\uAE30"){let i=new gn,s=on(15985368);return i.add(at(St(.09,.09,1.7,5),s,[0,0,0],null,[0,0,bt]),at(he,on(11883054),[0,0,0],[.62,.48,.48]),...[-.85,.85].map(r=>at(he,s,[r,0,0],[.18,.18,.18]))),i.userData.h=.9,i}let t=n==="\uD070 \uC5F4\uB9E4"?1:.55,e=at(he,on(15217231),[0,0,0],[t,t,t]);return e.add(at(Ct(.45,.7,4),on(5216826),[0,1.1,0])),e.userData.h=t+.15,e};for(let[n,t,e,i]of Wb)for(let s=0;s<e;s++){let r=Xb(n);Object.assign(r.userData,{name:n,pay:t,line:i}),Tr.add(r)}var fu=new P;function gs(n,t,e,i,s=""){if(t===void 0){n.hidden=!0;return}fu.set(t,e,i).project(pe);let r=fu.x,a=fu.y,o=fu.z>1;if(o&&(r=-r,a=-a,Math.abs(r)+Math.abs(a)<.01&&(a=-1)),!o&&Math.abs(r)<.85&&a>-.6&&a<.75){n.hidden=!0;return}let l=Math.max(Math.abs(r)/.8,a>0?a/.62:-a/.5)||1;r/=l,a/=l;let c=n.offsetWidth/2+6||20;n.hidden=!1,n.style.left=Math.min(innerWidth-c,Math.max(c,(r+1)/2*innerWidth))+"px",n.style.top=(1-a)/2*innerHeight+"px",n.style.setProperty("--a",Math.atan2(r,a)+"rad"),n.lastChild.textContent!==s&&(n.lastChild.textContent=s)}var wr=at(St(1.4,1.4,44,12),on(16765498,{transparent:!0,opacity:.32,depthWrite:!1}),[0,22,0]);wr.visible=!1;te.add(wr);var Ze=null,v_="",kp=0,Gs=0,ni=n=>{v_=n,kp=It+4},yg=50,go=5,M_=()=>new Date().toLocaleDateString("sv"),Vl=()=>{let n=xe.get("uga-errand");return n.d===M_()&&n.n||0},Hp=()=>{let n=S("errand"),t=Math.max(0,go-Vl());n.textContent=kf(),n.setAttribute("aria-label",kf()),n.title=kf(),Ze?n.dataset.n="!":t?n.dataset.n=t:delete n.dataset.n,n.classList.toggle("hot",!!Ze)},kf=()=>Ze?"\uC2EC\uBD80\uB984 \uADF8\uB9CC\uB450\uAE30":Vl()>=go?"\uC624\uB298 \uC2EC\uBD80\uB984 \uB05D":`\uC2EC\uBD80\uB984 \uBC1B\uAE30 \xB7 ${go-Vl()}`;function $b(){if(Ze)Ze=null,wr.visible=!1,ni("\uC6B0\uAC00. \uC2EC\uBD80\uB984 \uADF8\uB9CC\uB480\uB2E4.");else if(Vl()>=go)ni("\uC6B0\uAC00. \uC624\uB298 \uC2EC\uBD80\uB984 \uB2E4 \uD588\uB2E4. \uB0B4\uC77C \uB610 \uC640\uB77C.");else{let n=[...vn.slice(0,zp()).map((i,s)=>[i.x,i.z,s?aa(s):"\uBAA8\uB2E5\uBD88 \uAD11\uC7A5"]),[Mn.x,Mn.z,"\uCCA8\uBC99 \uC6C5\uB369\uC774"],[Rn.x,Rn.z,"\uD070 \uACF5\uB8E1 \uBF08"]].filter(i=>Math.hypot(i[0]-tt.x,i[1]-tt.z)>30),t=n[Math.floor(Math.random()*n.length)],e=Math.hypot(t[0]-tt.x,t[1]-tt.z);Ze={x:t[0],z:t[1],name:t[2],pay:yg},wr.position.set(t[0],22,t[1]),wr.visible=!0,ni(`\uC6B0\uAC00. ${t[2]}\uC5D0 \uACE0\uAE30 \uAC16\uB2E4 \uC918\uB77C. \uBA39\uC774 ${yg}\uAC1C \uC900\uB2E4.`)}Hp()}S("errand").onclick=$b;function qb(){let n=null,t=1e9;Tr.children.forEach((r,a)=>{let o=Math.hypot(tt.x-r.position.x,tt.z-r.position.z),{pay:l,line:c}=r.userData;r.position.y=r.userData.h+Math.sin(It*3+a)*.15,r.rotation.y=It*1.5,o<2.2+tt.r?(lp(r),Lu(l),Gs=It+.5,c&&ni(`\uC6B0\uAC00! ${c}. \uBA39\uC774 ${l}\uAC1C.`)):o>Hi*2.5?lp(r):o<t&&(t=o,n=r)}),n?gs(S("afood"),n.position.x,n.position.y,n.position.z):gs(S("afood")),S("wstat").classList.toggle("got",It<Gs);let e="";if(Ze){let r=Math.hypot(tt.x-Ze.x,tt.z-Ze.z);if(wr.material.opacity=.3+Math.sin(It*4)*.08,r<9){let a=Vl()+1;xe.set("uga-errand",{d:M_(),n:a}),Lu(Ze.pay),ni(`\uC6B0\uAC00! \uC798 \uAC16\uB2E4 \uC92C\uB2E4. \uBA39\uC774 ${Ze.pay}\uAC1C \uC900\uB2E4.`+(a>=go?" \uC624\uB298 \uC2EC\uBD80\uB984\uC740 \uB05D\uC774\uB2E4.":` \uC624\uB298 ${go-a}\uBC88 \uB354 \uD560 \uC218 \uC788\uB2E4.`)),Ze=null,wr.visible=!1,Hp()}else e=`\uC2EC\uBD80\uB984: ${Ze.name}\uAE4C\uC9C0 ${Math.round(r)}\uAC78\uC74C`}if(Ze)gs(S("ajob"),Ze.x,3,Ze.z,`${Ze.name} ${Math.round(Math.hypot(tt.x-Ze.x,tt.z-Ze.z))}\uAC78\uC74C`);else if(vi){let r=Math.hypot(tt.x-vi.x,tt.z-vi.z);r<vi.r?(ni(`\uC6B0\uAC00! ${vi.name}\uC5D0 \uC654\uB2E4. ${vi.tip}`),vi=null,gs(S("ajob"))):gs(S("ajob"),vi.x,3,vi.z,`${vi.name} ${Math.round(r)}\uAC78\uC74C`)}else gs(S("ajob"));e||(e=_p);let i=`\uBA39\uC774 ${Ut.n.toLocaleString()}\uAC1C`,s=It<kp?v_:e;S("wstat").textContent!==i&&(S("wstat").textContent=i),S("wline").textContent!==s&&(S("wline").textContent=s,S("wline").hidden=!s)}Nr();En&&!Qe&&!cn&&fetch(En+"/api/world").then(n=>n.json()).then(n=>{Cr=n,g_(),Nr(),Vb(),Dr(),Op()}).catch(()=>{});var Yb=["\uD070 \uBA38\uB9AC\uC640 \uAD75\uC740 \uC774\uBE68. \uC55E\uB2E4\uB9AC\uB294 \uC544\uC8FC \uC9E7\uC544\uC694.","\uC544\uC2DC\uC544\uC5D0 \uC0B4\uB358 \uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4\uC758 \uCE5C\uCC99. \uBA38\uB9AC\uAC00 \uB354 \uC881\uACE0 \uAE38\uC5B4\uC694.","\uB4F1\uC5D0 \uB3DB\uC774 \uC19F\uC544 \uC788\uACE0, \uAE34 \uC8FC\uB465\uC774\uB85C \uBB3C\uACE0\uAE30\uB97C \uC7A1\uC544\uC694.","\uBFD4 \uC14B\uACFC \uB113\uC740 \uBAA9 \uD504\uB9B4\uC774 \uC788\uC5B4\uC694.","\uD558\uB298\uC744 \uB098\uB294 \uC775\uB8E1. \uB2E4 \uC790\uB77C\uBA74 \uB9C8\uC744 \uC704\uB97C \uB0A0\uC544\uB2E4\uB140\uC694.","\uBAA9\uC774 \uC544\uC8FC \uAE38\uC5B4\uC694. \uB9C8\uC744\uC5D0\uC11C \uD0A4\uAC00 \uC81C\uC77C \uCEE4\uC694.","\uB4F1\uC5D0 \uD310\uC774 \uC904\uC9C0\uC5B4 \uC11C \uC788\uACE0, \uAF2C\uB9AC \uB05D\uC5D0 \uAC00\uC2DC\uAC00 \uC788\uC5B4\uC694.","\uC628\uBAB8\uC774 \uAC11\uC637\uC774\uC5D0\uC694. \uAF2C\uB9AC \uB05D\uC5D0 \uACE4\uBD09\uC774 \uB2EC\uB838\uC5B4\uC694.","\uBA38\uB9AC \uB4A4\uB85C \uAE34 \uBCCF\uC774 \uBED7\uC5B4 \uC788\uC5B4\uC694.","\uBAB8\uC740 \uC791\uC9C0\uB9CC \uBE60\uB974\uACE0, \uAE43\uD138\uC774 \uC788\uC5B4\uC694.","\uC5EC\uB7EC \uC721\uC2DD \uACF5\uB8E1\uC744 \uC11E\uC740 \uD558\uC774\uBE0C\uB9AC\uB4DC. \uD2B9\uBCC4\uD55C \uC54C\uC5D0\uC11C\uB9CC \uB098\uC640\uC694.","\uBC14\uB2E4\uB97C \uB204\uBE44\uB358 \uAC70\uB300\uD55C \uD574\uC591 \uD30C\uCDA9\uB958. \uD2B9\uBCC4\uD55C \uC54C\uC5D0\uC11C\uB9CC \uB098\uC640\uC694."];tn.forEach((n,t)=>{let e=document.createElement("article");e.innerHTML=`<div class="pics"><figure><canvas width="220" height="220"></canvas>\uC544\uAE30</figure><figure><canvas width="220" height="220"></canvas>\uB2E4 \uC790\uB77C\uBA74</figure></div><b></b><em class="${jf[t]?"c":"h"}">${jf[t]?"\uC721\uC2DD":"\uCD08\uC2DD"}</em><p></p>`,e.querySelector("b").textContent=n,e.querySelector("p").textContent=Yb[t],S("dex").append(e)});function Mo(n){let t=new Sl({antialias:!0,alpha:!0});t.setSize(n,n,!1),t.toneMapping=no;let e=new Ga,i=new mn(28,1,.1,300),s=new Ka(16773336,2.4);s.position.set(4,6,7),e.add(new Ja(16777215,9075296,1.35),s);let r=new Jn({map:Se.egg,side:Qn,roughness:.6});return{shot:(o,l,c,h,d,u,f)=>{let m=new ir(l,c,1),y=!d&&at(wp,r,[0,.72,0],[.58,.68,.58]);m.frustumCulled=!1,m.setMatrixAt(0,new Wt),m.setColorAt(0,u===1?ln.setHSL(.1,.88,.45):u===2?ln.setHSL(.8,.45,.78):d?ln.setHSL(h,.26,.42):ln.setHSL(h,.6,.6)),y&&r.color.setHSL(h,.62,.76),e.add(m),y&&e.add(y);let g=null;f_&&f&&Object.keys(f[0]).length&&!d&&(g=p_(f[0],f[1]),e.add(g));let p=l.boundingSphere,_=p.center,b=p.radius/Math.sin(14*Math.PI/180)*(d?.86:1.12),[v,A]=d?[.88,.42]:[.62,.75];i.position.set(_.x+b*v,_.y+b*.22,_.z+b*A),i.lookAt(_),t.render(e,i);let w=o.getContext("2d");w.clearRect(0,0,o.width,o.height),w.drawImage(t.domElement,0,0,o.width,o.height),e.remove(m),y&&e.remove(y),m.dispose(),g&&(e.remove(g),g.traverse(x=>x.geometry&&x.geometry!==Fl&&x.geometry.dispose()))},done:()=>{t.dispose(),t.forceContextLoss()}}}var vg=!1;function Zb(){if([...S("dex").children].forEach((e,i)=>e.classList.toggle("mine",Jr>=0&&oe[Jr]===i)),vg)return;vg=!0;let{shot:n,done:t}=Mo(220);[...S("dex").children].forEach((e,i)=>{let s=e.querySelectorAll("canvas"),r=Jr>=0&&oe[Jr]===i?Ti(ee[Jr]):(i*.618+.08)%1;n(s[0],Pr[i],qs,r,0),n(s[1],Je[i].g,Je[i].m,r,1)}),t()}var S_="";function b_(n){let t=n.trim().replace(/^@/,"");if(!/^[\w.]{1,30}$/.test(t))return!1;let e=Math.floor(Ti(t+"!")*tn.length),i=Ti(t),{shot:s,done:r}=Mo(440);return S_=t,s(S("kpic"),Pr[e],qs,i,0),r(),S("kh").textContent=`@${t} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,S("kname").textContent=`\uC544\uAE30 ${tn[e]}`,S("kmsg").textContent=`${jf[e]?"\uC721\uC2DD":"\uCD08\uC2DD"} \uACF5\uB8E1\uC774\uC5D0\uC694. \uD669\uAE08\uC774\uB098 \uBB34\uC9C0\uAC1C \uAC19\uC740 \uB4DC\uBB38 \uC0C9\uC778\uC9C0\uB294 \uC54C\uC774 \uAE70 \uB54C \uC54C \uC218 \uC788\uC5B4\uC694. \uD314\uB85C\uC6B0\uD558\uACE0 \uAC8C\uC2DC\uBB3C\uC5D0 \uB313\uAE00\uC744 \uB2EC\uBA74 \uBA87 \uBD84 \uC548\uC5D0 \uC774 \uC54C\uC774 \uB0B4 \uC9D1 \uB465\uC9C0\uC5D0 \uB193\uC5EC\uC694.`,S("peek").showModal(),!0}function E_(n){let t=Xn(n);if(t<0)return;let e=ee[t],i=Rr(t),s=i>=2?ns[t]:0,r=la(t),a=Cr.top.findIndex(c=>c.id===e.toLowerCase()),{shot:o,done:l}=Mo(440);o(S("ppic"),i===3?Je[oe[t]].g:Pr[oe[t]],i===3?Je[oe[t]].m:qs,Ti(e),i===3,s,i>=2?[Ku(t),oe[t]]:null),l(),S("ppic").className=s?"r"+s:"",S("ph").textContent="@"+e,S("pname").textContent=i<2?`\uC54C\uC5D0\uC11C \uB098\uC62C ${tn[oe[t]]}`:(s?Tp[s]+" ":"")+(i===3?"":"\uC544\uAE30 ")+tn[oe[t]]+(ji[t]?.name?` \xB7 ${ji[t].name}`:""),S("pinfo").textContent=`${Zl} ${Zu(t)} \xB7 ${o_(t)} \xB7 \uBA39\uC774 ${r.toLocaleString()}\uAC1C \uBA39\uC74C \xB7 \uD06C\uAE30 ${Ar(r).toFixed(1)}\uBC30`+(a>=0?` \xB7 \uBA39\uC774 \uC21C\uC704 ${a+1}\uC704`:"")+(je.has(t)?" \xB7 \uC9C0\uAE08 \uC0B0\uCC45 \uC911":""),S("pgo").hidden=!!tt,S("pgo").onclick=()=>{S("prof").close(),Ci(t)},S("prof").showModal()}S("prx").onclick=()=>S("prof").close();function Jb(){let n=S_,t=Math.floor(Ti(n+"!")*tn.length),e=pe.clone();e.aspect=ze/ci,e.updateProjectionMatrix();let i=l_(e,qt.target.x,qt.target.z),s=i.getContext("2d");s.fillStyle="rgba(46,36,24,.42)",s.fillRect(0,0,ze,ci);let r=Object.assign(document.createElement("canvas"),{width:900,height:900}),a=Mo(900);a.shot(r,Pr[t],qs,Ti(n),0),a.done(),s.fillStyle="rgba(255,250,240,.16)",s.beginPath(),s.arc(ze/2,820,420,0,Math.PI*2),s.fill(),s.drawImage(r,(ze-900)/2,370),s.textAlign="center",s.fillStyle="#fffaf0",s.shadowColor="rgba(0,0,0,.5)",s.shadowBlur=14,Au(s,`@${n} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,54,ze-120,700),s.fillText(`@${n} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,ze/2,250),s.fillStyle="#ffd98a",Au(s,`\uC544\uAE30 ${tn[t]}`,104,ze-100),s.fillText(`\uC544\uAE30 ${tn[t]}`,ze/2,1420),s.fillStyle="#fffaf0",s.font=`700 44px ${uo}`,s.fillText("\uB4DC\uBB38 \uC0C9\uC778\uC9C0\uB294 \uC54C\uC774 \uAE70 \uB54C \uC54C \uC218 \uC788\uB2E4",ze/2,1510),s.font=`800 52px ${uo}`,s.fillText("\uB108\uB294 \uBB50 \uB098\uC640?",ze/2,1700),s.fillStyle="rgba(255,250,240,.85)",s.font=`600 36px ${uo}`,s.fillText(`@${zl} \uD504\uB85C\uD544 \uB9C1\uD06C\uC5D0\uC11C \uC544\uC774\uB514 \uB123\uC5B4 \uBCF4\uAE30`,ze/2,1780),S("peek").close(),c_(i,`ugauga_${n}_\uACF5\uB8E1.jpg`,"\uACF5\uB8E1 \uBBF8\uB9AC\uBCF4\uAE30 \uC0AC\uC9C4")}S("kx").onclick=()=>S("peek").close();S("kphoto").onclick=Jb;S("kjoin").onclick=()=>{S("peek").close(),Qu(),S("how").showModal()};var Qu=()=>{S("intro").hidden=!0,document.body.classList.remove("intro")};S("ilook").onclick=Qu;S("ijoin").onclick=()=>{Qu(),S("how").showModal()};S("ifind").onsubmit=n=>{n.preventDefault(),Iu(S("iq").value)?Qu():b_(S("iq").value)||(S("iq").value="",S("iq").placeholder=ip)};var Mu=new Map,Du=n=>Math.floor(n/8),td=n=>Math.hypot(n.elements[0],n.elements[2]),So=(n,t,e)=>{let i=Du(n)+","+Du(t);Mu.has(i)||Mu.set(i,[]),Mu.get(i).push(n,t,e)};mo.forEach(n=>So(n.elements[12],n.elements[14],2.5*td(n)));jg.forEach(n=>So(n.elements[12],n.elements[14],.55*td(n)));Qg.forEach(n=>So(n.elements[12],n.elements[14],.6*td(n)));t_.forEach(n=>So(n.elements[12],n.elements[14],1.25*td(n)));vn.forEach((n,t)=>So(n.x,n.z,t?jl(t)?3.8:1.9:3.4));Ep.forEach(n=>So(n.elements[12],n.elements[14],.8));function T_(n){let t=Du(n.x),e=Du(n.z);for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=Mu.get(t+l+","+(e+c));if(h)for(let d=0;d<h.length;d+=3){let u=n.x-h[d],f=n.z-h[d+1],m=Math.hypot(u,f),y=h[d+2]+n.r;m<y&&m>1e-4&&(n.x=h[d]+u/m*y,n.z=h[d+1]+f/m*y)}}let i=n.x-Ee.x,s=n.z-Ee.z,r=Math.hypot(i,s)||1,a=n.i>=0&&oe[n.i]===11,o=Ee.f(Math.atan2(s,i));if(a?r>o-3:r<o+1+n.r){let l=a?o-3:o+1+n.r;n.x=Ee.x+i/r*l,n.z=Ee.z+s/r*l}}var _o=new Set,Bi={x:0,y:0},ca=new Wt,Kb=new Wt,w_=new P,jb=[qt.minDistance,qt.maxDistance],Mg=0;S("walkhint").onclick=()=>S("walkhint").classList.toggle("mini");var Wl=[];function ha(){if(tt)return;Lr(),S("card").hidden=!0,bi=null,id(!1),qt.autoRotate=!1;let n=Jr,t=n>=0?oe[n]:-1,e=Pn.position.x,i=Pn.position.z,s=0,r=.8,a=9,o=1,l=`\uC871\uC7A5 ${Si}`;if(n>=0)if(l=`@${ee[n]}\uC758 `+["\uC54C","\uAE08 \uAC04 \uC54C",`\uC544\uAE30 ${tn[t]}`,tn[t]][Rr(n)],Ve){let h=Jg(n,It),d=Je[t].len*Yu[n];e=h.x,i=h.z,s=Math.atan2(h.sn,h.cs),r=Math.min(2.4,d*.17),a=Math.max(10,d*1.7)}else{let h=ui[n].elements;e=h[12]+_s[n],i=h[14]+xs[n],s=Math.atan2(Ws[n].cx-e,Ws[n].cz-i),o=Math.max(1,Ms[n]||1),e+=Math.sin(s)*3*o,i+=Math.cos(s)*3*o,r=.6,a=0,Wl=wi.has(n)?[{obj:wi.get(n),j:n}]:Hs.map(d=>({im:d,j:n,s:_e===2?1.5:1})),Wl.forEach(d=>{d.im&&(d.im.frustumCulled=!1)})}tt={i:n,x:e,z:i,a:s,r,dist:0,hop:0,rot:0,eye:a*.22+(a?.6:1.2*o)},T_(tt),n>=0&&(tt.tag=da("\uB098","@"+ee[n],!0,.7)),bE();let c=a*(pe.aspect<1?1.5:1);qt.target.set(tt.x,tt.eye,tt.z),pe.position.set(tt.x-Math.sin(s)*(c||6.5*o),c*.55||5*o,tt.z-Math.cos(s)*(c||6.5*o)),qt.minDistance=3,qt.maxDistance=(a||9*o)*4,qt.minPolarAngle=.4,qt.maxPolarAngle=2.3,Mp("look"),S("walkhint").replaceChildren(Object.assign(document.createElement("b"),{textContent:l}),matchMedia("(pointer:coarse)").matches?"\uB3D9\uADF8\uB77C\uBBF8\uB97C \uBC00\uBA74 \uAC78\uC5B4\uC694. \uB05D\uAE4C\uC9C0 \uBC00\uBA74 \uB2EC\uB824\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uB458\uB7EC\uBD10\uC694.":"WASD\uB85C \uAC77\uACE0 Shift\uB85C \uB2EC\uB824\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uB458\uB7EC\uBD10\uC694."," \uBE68\uAC04 \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00\uBA74 \uBA39\uC774\uAC00 \uC788\uC5B4\uC694. \uC5F4\uB9E4 1\uAC1C, \uBC84\uC12F 2\uAC1C, \uACE0\uAE30 3\uAC1C, \uD070 \uC5F4\uB9E4 5\uAC1C."," \uBA85\uC18C\uC5D0\uC11C\uB3C4 \uB180 \uC218 \uC788\uC5B4\uC694: \uC6C5\uB369\uC774 \uB09A\uC2DC, \uD070 \uBF08 \uD654\uC11D \uD30C\uAE30, \uD654\uC0B0 \uC54C \uB370\uC6B0\uAE30, \uBAA8\uB2E5\uBD88 \uC26C\uAE30. \uBA85\uC18C\uC5D0 \uAC00\uBA74 \uB3C4\uC7A5\uC774 \uCC0D\uD600\uC694.",n<0?" \uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uB0B4 \uACF5\uB8E1\uC73C\uB85C \uAC78\uC744 \uC218 \uC788\uC5B4\uC694.":"",yr.visible?` \uC624\uB298\uC758 \uAE08\uBE5B \uBF08\uB294 ${yr.userData.hood} \uAE38 \uC5B4\uB518\uAC00\uC5D0 \uC228\uC5B4 \uC788\uC5B4\uC694. \uCC3E\uC73C\uBA74 \uBA39\uC774 ${ep}\uAC1C.`:" \uC624\uB298 \uAE08\uBE5B \uBF08\uB294 \uC774\uBBF8 \uCC3E\uC558\uC5B4\uC694. \uB0B4\uC77C \uB2E4\uB978 \uACF3\uC5D0 \uB610 \uC228\uC5B4\uC694."),S("walkhint").classList.remove("mini"),clearTimeout(Mg),Mg=setTimeout(()=>S("walkhint").classList.add("mini"),9e3),document.body.classList.add("walking"),S("walkui").hidden=!1,Tr.children.forEach(h=>lp(h)),Tr.visible=!0,Hp(),[4,9,10].forEach((h,d)=>Tr.children[h].position.set(tt.x+Math.sin(s)*(6+d*3.5),0,tt.z+Math.cos(s)*(6+d*3.5))),tc()}function A_(){if(tt&&(Wl.forEach(({im:n,obj:t,j:e})=>{if(t)return Ju(e);n.setMatrixAt(e,ca.multiplyMatrices(n.userData.mats[e],n.userData.L)),n.instanceMatrix.needsUpdate=!0}),Wl=[],Tr.visible=wr.visible=!1,Ze=null,vi=null,kp=0,Ae&&Ae.readyState===1&&Ae.send("0"),cp="",tt.tag&&(te.remove(tt.tag),tt.tag.material.map.dispose(),tt.tag.material.dispose()),Pn.position.set(0,0,11),Pn.rotation.y=0,tt=null,Fp(),Bi.x=Bi.y=0,_o.clear(),[qt.minDistance,qt.maxDistance]=jb,qt.minPolarAngle=0,qt.maxPolarAngle=1.45,Mp("map"),document.body.classList.remove("walking"),S("walkui").hidden=!0,gs(S("ajob")),gs(S("afood")),!Qe&&!cn)){let n=Ln(),t=Ut.n.toLocaleString();n>=0?(Ci(n),S("cinfo").textContent=Ut.n?`\uBA39\uC774 ${t}\uAC1C\uB97C \uBAA8\uC558\uC5B4\uC694. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C ${Er}\uC5D0\uAC8C \uC918\uC694.`:"\uC774\uBC88\uC5D4 \uBA39\uC774\uB97C \uBABB \uC8FC\uC6E0\uC5B4\uC694. \uB2E4\uC74C \uC0B0\uCC45\uC5D0\uC11C \uBE68\uAC04 \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00 \uBD10\uC694."):Ut.n&&Ir(`\uBA39\uC774 ${t}\uAC1C`,"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uB0B4 \uC54C\uC5D0\uAC8C \uBA39\uC774\uB97C \uC904 \uC218 \uC788\uC5B4\uC694.","")}}function Qb(n,t){let e=tt,i=e.x,s=e.z,r=p=>_o.has(p)?1:0,a=Bi.x+r("d")+r("arrowright")-r("a")-r("arrowleft"),o=-Bi.y+r("w")+r("arrowup")-r("s")-r("arrowdown"),l=Math.hypot(a,o);if(l>.08){let p=qt.target.x-pe.position.x,_=qt.target.z-pe.position.z,b=Math.hypot(p,_)||1,v=Math.min(1,l)/l,A=(p*o-_*a)/b*v,w=(_*o+p*a)/b*v,x=(_o.has("shift")||Bi.run?16:10)*(Ve&&e.i>=0?1.5:1)*n;e.x+=A*x,e.z+=w*x;let T=Math.atan2(A,w)-e.a;e.a+=Math.atan2(Math.sin(T),Math.cos(T))*Math.min(1,n*10),T_(e);let D=ae+230,R=Math.hypot(e.x,e.z);R>D&&(e.x*=D/R,e.z*=D/R),e.dist+=Math.hypot(e.x-i,e.z-s)}let[c,h]=z_("me"),d=e.hop=Math.abs(Math.sin(e.dist*2.2))*.28+c;e.rot=Math.sin(e.dist*2.2)*.12+h;let[u,f]=O_("me"),m=e.x+u,y=e.z+f;e.i<0&&(Pn.position.set(m,d,y),Pn.rotation.y=e.a),e.tag&&e.tag.position.set(m,ql(e.i)+d,y),Wl.forEach(({im:p,obj:_,j:b,s:v})=>{if(_){_.position.set(m,d,y),_.rotation.set(0,e.a+e.rot,0);return}ca.makeRotationY(e.a+e.rot).scale(w_.set(v,v,v)).setPosition(m,d,y),p.setMatrixAt(b,ca.multiply(p.userData.L)),p.instanceMatrix.needsUpdate=!0});let g=Math.max(0,qt.getPolarAngle()-1.35)*qt.getDistance()*1.6;pe.position.x+=e.x-i,pe.position.z+=e.z-s,pe.position.y+=g-(e.lift||0),e.lift=g,qt.target.set(e.x,e.eye+g,e.z)}S("walkend").onclick=A_;S("myegg").onclick=()=>{Ln()>=0?(Lr(),Ci(Ln())):(di("find"),S("msg").textContent="\uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uC5EC\uAE30\uC11C \uBC14\uB85C \uB0B4 \uC54C\uB85C \uAC00\uC694.")};S("side").querySelector("[data-tab=find]").onclick=()=>di("find");{let n=S("stick"),t=n.firstElementChild,e=i=>{let s=n.getBoundingClientRect(),r=(i.clientX-s.left-s.width/2)/40,a=(i.clientY-s.top-s.height/2)/40,o=Math.hypot(r,a);o>1&&(r/=o,a/=o),Bi.x=r,Bi.y=a,Bi.run=o>1.1,n.classList.toggle("run",Bi.run),t.style.transform=`translate(${r*36}px,${a*36}px)`};n.onpointerdown=i=>{i.stopPropagation(),n.setPointerCapture(i.pointerId),e(i)},n.onpointermove=i=>{i.stopPropagation(),n.hasPointerCapture(i.pointerId)&&e(i)},n.onpointerup=n.onpointercancel=n.onlostpointercapture=i=>{i.stopPropagation(),Bi.x=Bi.y=0,Bi.run=!1,n.classList.remove("run"),t.style.transform=""}}addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"){n.key==="Escape"&&n.target.blur();return}_o.add(n.key.toLowerCase()),n.key==="Escape"&&A_()});addEventListener("keyup",n=>_o.delete(n.key.toLowerCase()));addEventListener("blur",()=>_o.clear());var Ae=null,Xs=null,Sg=0,cp="",hp=0,Mr=[];function tc(){if(!En||cn||Qe||!window.WebSocket)return;let n=Ln()>=0&&vs()?ii():"";if(Ae&&Xs===n)return;Ae&&(Ae.onclose=null,Ae.close(),je.forEach((e,i)=>Hf(i))),Xs=n,S("cform").hidden=!n,S("cpin").hidden=!!n,Mr.length=0,nd();let t=Ae=new WebSocket(En.replace(/^http/,"ws")+"/api/live"+(n?"?id="+encodeURIComponent(n)+"&tok="+vs():""));t.onopen=()=>{hp=Date.now()},t.onmessage=e=>{let i;try{i=JSON.parse(e.data)}catch{return}i.forEach(s=>{let[r,a,o,l]=s;if(r==="!")return mE(...s.slice(1));let c=Xn(r);if(c<0)return;let h=je.get(c);if(a===void 0){h&&Hf(c);return}if(h){h.tx=a,h.tz=o,h.ta=l;return}let d=Ve?[]:wi.has(c)?[{obj:wi.get(c)}]:Hs.map(u=>(u.frustumCulled=!1,{im:u,s:_e===2?1.5:1}));je.set(c,{j:c,x:a,z:o,a:l,tx:a,tz:o,ta:l,dist:0,hop:0,rot:0,items:d,tag:da("\uC0B0\uCC45 \uC911","@"+ee[c],!1,.7)})})},t.onclose=()=>{Ae===t&&(Ae=null,je.forEach((e,i)=>Hf(i)),setTimeout(tc,5e3))}}function Hf(n){let t=je.get(n);t&&(je.delete(n),t.items.forEach(({im:e,obj:i})=>{if(i)return Ju(n);e.setMatrixAt(n,ca.multiplyMatrices(e.userData.mats[n],e.userData.L)),e.instanceMatrix.needsUpdate=!0}),te.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose())}function tE(n){if(tt&&tt.i>=0&&Xs&&Ae&&Ae.readyState===1){let i=JSON.stringify([tt.x,tt.z,tt.a].map(s=>Math.round(s*10)/10));It-Sg>(i===cp?3:.25)&&(Ae.send(i),Sg=It,cp=i)}let t=Math.min(1,n*6),e=i=>Ve?2+Je[oe[i]].len*Yu[i]*.45:2.4;je.forEach(i=>{if(tt&&tt.i===i.j)return;let s=i.x,r=i.z,a=i.ta-i.a;i.x+=(i.tx-i.x)*t,i.z+=(i.tz-i.z)*t,i.a+=Math.atan2(Math.sin(a),Math.cos(a))*t,i.dist+=Math.hypot(i.x-s,i.z-r);let[o,l]=z_(i.j);i.hop=Math.abs(Math.sin(i.dist*2.2))*.28+o,i.rot=Math.sin(i.dist*2.2)*.12+l;let[c,h]=O_(i.j),d=i.x+c,u=i.z+h;i.items.forEach(({im:f,obj:m,s:y})=>{if(m){m.position.set(d,i.hop,u),m.rotation.set(0,i.a+i.rot,0);return}ca.makeRotationY(i.a+i.rot).scale(w_.set(y,y,y)).setPosition(d,i.hop,u),f.setMatrixAt(i.j,ca.multiply(f.userData.L)),f.instanceMatrix.needsUpdate=!0}),i.tag.position.set(i.x,e(i.j)+i.hop,i.z)})}tc();var C_=n=>new Date(n+9*36e5),Gp=n=>{let t=2166136261;for(let e of n)t=Math.imul(t^e.charCodeAt(0),16777619)>>>0;return t/4294967296};function ed(n=Date.now()){let t=C_(n),e=t.toISOString().slice(0,10),i=t.getUTCHours(),s=i*60+t.getUTCMinutes(),r=[];for(let a=0;a<4;a++){let o=600+a*195+Math.floor(Gp(e+"r"+a)*180);s>=o&&s<o+5&&r.push({kind:"rain",key:e+"r"+a,n:30,pay:8,end:o+5})}return t.getUTCMinutes()<3&&r.push({kind:"boom",key:e+"v"+i,n:12,pay:15,end:i*60+3}),s>=1260&&s<1270&&r.push({kind:"camp",key:e+"c",end:1270}),up&&r.push({rain:{kind:"rain",key:e+"rT",n:30,pay:8},boom:{kind:"boom",key:e+"vT",n:12,pay:15},camp:{kind:"camp",key:e+"cT"}}[up]||[]),r.flat().map(a=>({end:s+5,...a}))}var up=En.startsWith("http://localhost")&&In.get("ev")||"",R_=["\uC6B0\uAC00!","\uC548\uB155","\uAC19\uC774 \uAC00\uC790","\uBA39\uC774 \uC5EC\uAE30!","\uACE0\uB9C8\uC6CC","\uD558\uD558\uD558","\uBC18\uAC00\uC6CC","\uC798 \uAC00","\uB530\uB77C\uC640","\uAE30\uB2E4\uB824","\uC5EC\uAE30 \uB9CE\uB2E4!","\uBAA8\uC5EC\uB77C!","\uCD95\uD558\uD574","\uB300\uB2E8\uD574","\uBBF8\uC548","\uC88B\uC544","\uBC30\uACE0\uD30C","\uB0B4 \uC54C \uBD10 \uC918","\uC4F0\uB2E4\uB4EC\uC5B4 \uC904\uAC8C","\uB0B4\uC77C \uB610 \uC640"],eE=["\uC810\uD504","\uBE59\uAE00\uBE59\uAE00","\uC190 \uD754\uB4E4\uAE30"],pu={ev:[10,3,8,11,0,5,4,13],camp:[11,1,6,0,5,4,19,7],spot:[2,8,9,13,12,0,4,5],base:[0,1,6,2,8,17,18,4]},P_=["\uC774\uBE68","\uBC1C\uD1B1","\uAC08\uBE44\uBF08","\uB4F1\uBF08","\uAF2C\uB9AC\uBF08","\uBA38\uB9AC\uBF08","\uBFD4","\uC54C \uAECD\uB370\uAE30","\uBC1C\uC790\uAD6D","\uB0A0\uAC1C\uBF08"],nE=[30,40,50,60,80,100,200],Nu=[["\uBAA8\uB2E5\uBD88 \uAD11\uC7A5",0,0,ks+1.5],["\uC871\uC7A5 \uC6B0\uAC00",0,11,5],["\uC6B0\uB974\uB989 \uD654\uC0B0",Sn,bn,100],["\uCCA8\uBC99 \uC6C5\uB369\uC774",Mn.x,Mn.z,24],["\uD070 \uACF5\uB8E1 \uBF08",Rn.x,Rn.z,18]],bg=Promise.resolve();function ys(n,t){return Qi()?bg=bg.then(()=>Dl||(Ut.srv?0:Dr())).then(()=>fetch(En+"/api/act",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:ii(),tok:vs(),k:n,arg:t})})).then(e=>e.ok?e.json():(e.status===401&&Up(),null)).then(e=>(e&&(Me=e,(e.tk||[]).forEach(i=>yo.add(i)),Ut.n=e.n+Ut.owed,Ut.fed=e.fed,xe.set("uga-shell",Ut),Nr(),iE()),e)).catch(()=>null):Promise.resolve(null)}function Ce(n){let t=Object.assign(document.createElement("p"),{textContent:n}),e=S("chat");for(S("toast").style.top=e.offsetHeight?e.getBoundingClientRect().bottom+8+"px":"",S("toast").append(t);S("toast").children.length>3;)S("toast").firstChild.remove();setTimeout(()=>t.remove(),4500)}var Eg="";function I_(){!Qi()||Eg===ii()||(Eg=ii(),ys("login").then(n=>{n&&(S("qbtn").hidden=!1,Ai("me"),n.got&&Ir(`\uC871\uC7A5 ${Si}`,n.first?`\uC6B0\uAC00! \uCC98\uC74C \uC654\uAD6C\uB098. \uBA39\uC774 ${n.got}\uAC1C${n.coin?`, \uCF54\uC778 ${n.coin}\uAC1C`:""} \uC900\uB2E4. \uB0B4\uC77C \uB610 \uC624\uBA74 \uB610 \uC900\uB2E4. \uC624\uB978\uCABD \uC704 "\uC624\uB298 \uBBF8\uC158"\uB3C4 \uD574 \uBD10\uB77C.`:`\uC6B0\uAC00. \uC5F0\uC18D \uCD9C\uC11D ${n.streak}\uC77C\uC9F8. \uBA39\uC774 ${n.got}\uAC1C${n.coin?`, \uCF54\uC778 ${n.coin}\uAC1C`:""} \uC900\uB2E4.`+((n.streak-1)%7===5?" \uB0B4\uC77C \uC624\uBA74 200\uAC1C\uB2E4.":""),""))}))}function iE(){let n=Me;if(!n)return;let t=n.mis.filter(([,s,r])=>s>=r).length,e=n.streak?(n.streak-1)%7:-1;S("qbtn").textContent=n.chest?"\uBBF8\uC158 \uC644\uB8CC":`\uBBF8\uC158 ${t}/3`,S("qbtn").classList.toggle("hot",t===3&&!n.chest),S("qsn").textContent=n.streak?`\uC5F0\uC18D \uCD9C\uC11D ${n.streak}\uC77C\uC9F8. \uD558\uB8E8\uB77C\uB3C4 \uBE60\uC9C0\uBA74 1\uC77C\uC9F8\uBD80\uD130 \uB2E4\uC2DC\uC608\uC694.`:"\uC624\uB298 \uCC98\uC74C\uC774\uC5D0\uC694.",S("qstreak").replaceChildren(...nE.map((s,r)=>Object.assign(document.createElement("span"),{className:(r<=e?"on":"")+(r===e?" today":""),textContent:`${r+1}\uC77C
${s}`}))),S("qmis").replaceChildren(...n.mis.map(([s,r,a])=>{let o=br("div",(r>=a?"\uC644\uB8CC \xB7 ":"")+s,` ${r}/${a}`);return r>=a&&(o.className="ok"),o.append(Object.assign(document.createElement("i"),{className:"pbar",innerHTML:`<u style="width:${Math.min(100,r/a*100)}%"></u>`})),o}));let i=S("qchest");i.disabled=n.chest||t<3,i.textContent=n.chest?"\uC624\uB298 \uBCF4\uBB3C \uC0C1\uC790\uB294 \uC5F4\uC5C8\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640\uC694":t<3?`\uBBF8\uC158 ${3-t}\uAC1C \uB354 \uD558\uBA74 \uBCF4\uBB3C \uC0C1\uC790 \xB7 \uBA39\uC774 150\uAC1C`:"\uBCF4\uBB3C \uC0C1\uC790 \uC5F4\uAE30 \xB7 \uBA39\uC774 150\uAC1C",S("qstamp").replaceChildren(...Nu.map(([s],r)=>Object.assign(document.createElement("span"),{className:n.stamps[r]?"on":"",textContent:s}))),S("qfn").textContent=`${n.fos.length}/10 \uBAA8\uC558\uC5B4\uC694. \uD070 \uACF5\uB8E1 \uBF08\uC5D0\uC11C \uD30C\uBA74 \uB098\uC640\uC694. 10\uAC1C\uB97C \uB2E4 \uBAA8\uC73C\uBA74 \uBA39\uC774 500\uAC1C.`,S("qfos").replaceChildren(...P_.map((s,r)=>Object.assign(document.createElement("span"),{className:n.fos.includes(r)?"on":"",textContent:n.fos.includes(r)?s:"?"}))),S("qleft").textContent=`\uC624\uB298 \uB180\uAC70\uB9AC\uB85C \uB354 \uBC1B\uC744 \uC218 \uC788\uB294 \uBA39\uC774 ${n.left}\uAC1C(\uD558\uB8E8 800\uAC1C\uAE4C\uC9C0).`+(n.hot?` \uC54C\uC774 \uB530\uB73B\uD574\uC694: ${Math.ceil(n.hot/60)}\uBD84 \uB3D9\uC548 \uBA39\uC778 \uBA39\uC774\uAC00 1.5\uBC30\uB85C \uB4E4\uC5B4\uAC00\uC694.`:""),ju()}S("qbtn").onclick=()=>di("quest");var vi=null,sE={fish:()=>({x:Mn.x,z:Mn.z,r:22,name:"\uCCA8\uBC99 \uC6C5\uB369\uC774",tip:'\uBB3C\uAC00\uC5D0\uC11C "\uB09A\uC2DC\uD558\uAE30"\uB97C \uB20C\uB7EC\uB77C.'}),dig:()=>({x:Rn.x,z:Rn.z,r:16,name:"\uD070 \uACF5\uB8E1 \uBF08",tip:'"\uD654\uC11D \uD30C\uAE30"\uB97C \uB20C\uB7EC\uB77C.'}),heat:()=>({x:Sn,z:bn,r:95,name:"\uC6B0\uB974\uB989 \uD654\uC0B0",tip:'"\uC54C \uB370\uC6B0\uAE30"\uB97C \uB20C\uB7EC\uB77C.'}),sit:()=>({x:0,z:0,r:ks,name:"\uBAA8\uB2E5\uBD88 \uAD11\uC7A5",tip:"\uBD88 \uC606\uC5D0 \uAC00\uB9CC\uD788 \uC11C \uC788\uC73C\uBA74 1\uBD84\uB9C8\uB2E4 \uBA39\uC774 15\uAC1C."}),stamp:()=>{let n=Nu.findIndex((r,a)=>!Me?.stamps?.[a]),[t,e,i,s]=Nu[Math.max(0,n)];return{x:e,z:i,r:s-2,name:t,tip:"\uB3C4\uC7A5\uC774 \uC800\uC808\uB85C \uCC0D\uD78C\uB2E4."}}},rE=n=>/낚/.test(n)?"fish":/화석/.test(n)?"dig":/도장/.test(n)?"stamp":/화산/.test(n)?"heat":/모닥불/.test(n)?"sit":/쓰다듬/.test(n)?"pet":"";function aE(n){if(Lr(),n==="pet")return Ce('\uC774\uC6C3 \uC9D1 \uC54C\uC744 \uB204\uB974\uACE0 "\uC54C \uC4F0\uB2E4\uB4EC\uAE30"\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694.');if(Ln()<0)return Ce("\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uBA3C\uC800 \uCC3E\uC544 \uC8FC\uC138\uC694.");tt||ha(),vi=sE[n](),Ce(`${vi.name}\uB85C \uAC00\uC694. \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00\uC138\uC694.`)}var L_={hp:"\uCCB4\uB825",atk:"\uACF5\uACA9",def:"\uBC29\uC5B4",crit:"\uCE58\uBA85\uD0C0",critres:"\uCE58\uBA85\uD0C0 \uC800\uD56D",stun:"\uD63C\uC808",stunres:"\uD63C\uC808 \uD68C\uD53C",bond:"\uC720\uB300\uAC10"},Uu={head:"\uBA38\uB9AC",body:"\uBAB8",claw:"\uBC1C\uD1B1",tail:"\uAF2C\uB9AC"},Ou=["\uBCF4\uD1B5","\uC88B\uC74C","\uD76C\uADC0","\uC804\uC124"],oE={coin20:"\uCF54\uC778 20",m1:"\uBA39\uC774 100\uAC1C",bone0:"\uBCF4\uD1B5 \uBF08",potion:"\uBB3C\uC57D",bone1:"\uC88B\uC740 \uBF08",gear:"\uC0C1\uC810 \uC7A5\uBE44"},Vn=null,Fu=n=>Object.entries(n||{}).map(([t,e])=>`${L_[t]} +${e}`).join(" \xB7 ");function Ai(n,t={}){return!Qi()||!vs()?(zu(),Promise.resolve(null)):fetch(En+"/api/game",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:ii(),tok:vs(),do:n,...t})}).then(e=>e.ok?e.json():(e.status===401&&Up(),null)).then(e=>e?(Vn=e,Ut.n=e.n+Ut.owed,xe.set("uga-shell",Ut),Nr(),zu(),Op(),e.no&&Ce(e.no),e):null).catch(()=>null)}var gt=(n,t={},...e)=>{let i=Object.assign(document.createElement(n),t);return i.append(...e),i},D_=n=>gt("span",{className:"rar r"+n,textContent:Ou[n]}),lE=(n,t,e="ghost")=>gt("button",{className:"mini "+e,textContent:n,onclick:t}),dp=n=>{let t=Vn?.items?.[n];return t?`./ui/items/${t.t==="bone"?n.slice(0,2):n}.webp`:""},na=(n,t=0,e="")=>{let i=Vn.items[n];return gt("div",{className:`itile r${i.r} ${e}`},gt("img",{src:dp(n),alt:"",loading:"lazy",onerror(){this.style.visibility="hidden"}}),t>1?gt("i",{textContent:"\xD7"+t}):"")},mu="all",Al="all",fp="",cE={all:"\uC804\uCCB4",fish:"\uBB3C\uACE0\uAE30",bone:"\uBF08",gear:"\uC7A5\uBE44",potion:"\uBB3C\uC57D",egg:"\uC54C"},hE={all:"\uC804\uCCB4",auc:"\uAE08\uC694\uC77C \uACBD\uB9E4",egg:"\uD2B9\uBCC4\uD55C \uC54C",gear:"\uC7A5\uBE44",potion:"\uBB3C\uC57D",pack:"\uAFB8\uB7EC\uBBF8",food:"\uBA39\uC774"},uE={fish:"\uACE0\uB300\uC5B4",bone:"\uD654\uC11D \uBF08",gear:"\uC7A5\uBE44",potion:"\uBB3C\uC57D",food:"\uBA39\uC774",pack:"\uAFB8\uB7EC\uBBF8",egg:"\uD2B9\uBCC4\uD55C \uC54C"},Tg=(n,t,e,i)=>S(n).replaceChildren(...Object.entries(t).map(([s,r])=>gt("button",{className:"chip"+(s===e?" on":""),textContent:r,onclick:()=>{i(s),zu()}}))),Bu=n=>n.t==="egg"?`\uAE68\uBA74 \uB0B4 \uACF5\uB8E1\uC774 ${tn[n.kind]}\uB85C \uBC14\uB00C\uC5B4\uC694(\uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC5B4\uC694)`:n.eat?"\uBA39\uC774\uBA74 "+Fu(n.eat):n.st?`${Uu[n.slot]} \uC7A5\uCC29 \xB7 ${Fu(n.st)}`:n.food?`\uBA39\uC774 ${n.food}\uAC1C\uAC00 \uBC14\uB85C \uB4E4\uC5B4\uC640\uC694`:n.note||"",Nl=(n,t="")=>gt("span",{className:"cprice "+t},gt("img",{src:"./ui/coin.webp",alt:""}),n.toLocaleString());function wg(n,t){let e=Vn,i=e.items[n],s=e.inv[n]||0,r=t!=null;S("itpic").replaceChildren(na(n,0,"big")),S("itname").textContent=i.n+(r&&t?` +${t}`:""),S("itsub").replaceChildren(D_(i.r),` ${uE[i.t]}`+(r?" \xB7 \uC7A5\uCC29 \uC911":` \xB7 ${s}\uAC1C`)),S("itdesc").textContent=r?Fu(Object.fromEntries(Object.entries(i.st).map(([l,c])=>[l,Math.round(c*(1+.15*t))])))+" \xB7 \uAC15\uD654\uD558\uBA74 \uB2E8\uACC4\uB9C8\uB2E4 15%\uC529 \uB354":Bu(i)+(i.t==="fish"?" \xB7 \uC720\uB300\uAC10\uC774 \uAE4A\uC5B4\uC838\uC694":"");let a=(l,c,h)=>()=>Ai(l,c).then(d=>{d?.got&&(Ce(h(d)),S("itemd").close())}),o=r?[t<e.lvmax&&[`\uAC15\uD654 ${e.enh[t]}\uCF54\uC778`,a("enh",{slot:i.slot},l=>`${i.n} +${l.got.lv} \uAC15\uD654!`)],["\uBE7C\uAE30",a("unequip",{slot:i.slot},()=>"\uAC00\uBC29\uC73C\uB85C \uBE90\uC5B4\uC694"),"ghost"]]:[i.t==="egg"&&["\uC54C \uAE68\uAE30",()=>confirm(`${i.n}\uC744 \uAE70\uAE4C\uC694? \uB0B4 \uACF5\uB8E1\uC774 ${tn[i.kind]}\uB85C \uBC14\uB00C\uACE0 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC5B4\uC694.`)&&Ai("hatch",{item:n}).then(l=>{l?.got&&(Ce(`\uC6B0\uAC00! \uB0B4 \uACF5\uB8E1\uC774 ${tn[l.got.kind]}\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694`),S("itemd").close(),fetch(En+"/api/world?t="+Date.now()).then(c=>c.json()).then(c=>{Cr=c,g_(),Op(),fp="",zu()}))})],i.eat&&[i.t==="fish"?"\uBA39\uC774\uAE30":"\uB9C8\uC2DC\uAE30",a("eat",{item:n},l=>`${i.n}: ${Fu(l.got.eat)}`)],i.slot&&["\uC7A5\uCC29",a("equip",{item:n},()=>`${Uu[i.slot]}\uC5D0 \uB07C\uC6E0\uC5B4\uC694`)],i.t==="bone"&&i.r<2&&[s<3?`3\uAC1C \uD569\uC131 (${s}/3)`:"3\uAC1C \uD569\uC131",a("fuse",{item:n},l=>`\uD569\uC131 \uC131\uACF5: ${e.items[l.got.item].n}!`),s<3?"ghost off":"ghost"]];S("itacts").replaceChildren(...o.filter(Boolean).map(([l,c,h])=>gt("button",{className:(h||"").replace("off",""),textContent:l,onclick:c,disabled:/off/.test(h||"")}))),S("itemd").open||S("itemd").showModal()}S("itx").onclick=()=>S("itemd").close();function dE(n){let t=n.items,e=n.auc,i=new Date(e.next+"T00:00:00+09:00");if(!e.open){S("shopdeal").replaceChildren(gt("div",{className:"deal aucoff"},gt("span",{className:"ribbon",textContent:"\uAE08\uC694\uC77C \uACBD\uB9E4"}),gt("div",{className:"dinfo"},gt("b",{textContent:`${i.getMonth()+1}\uC6D4 ${i.getDate()}\uC77C \uAE08\uC694\uC77C\uC5D0 \uC5F4\uB824\uC694`}),gt("small",{textContent:"\uADF8\uB3D9\uC548 \uC544\uBB34\uB3C4 \uBAB0\uB790\uB358 \uC804\uC124 \uC7A5\uBE44\uAC00 \uB098\uC640\uC694. \uD76C\uADC0 \uC774\uC0C1 \uBB3C\uACE0\uAE30\xB7\uD654\uC11D\uB3C4 \uC62C\uB824\uC11C \uCF54\uC778\uC744 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694."})))),S("shoplist").replaceChildren();return}let s=new Date(Date.now()+9*36e5),r=1440-s.getUTCHours()*60-s.getUTCMinutes();S("shopdeal").replaceChildren(gt("div",{className:"aucbar"},gt("b",{textContent:"LIVE"}),` \uC624\uB298 \uC790\uC815\uAE4C\uC9C0 \xB7 ${Math.floor(r/60)}\uC2DC\uAC04 ${r%60}\uBD84 \uB0A8\uC74C \xB7 \uB354 \uB192\uC740 \uC785\uCC30\uC774 \uC624\uBA74 \uB9E1\uAE34 \uCF54\uC778\uC740 \uB3CC\uB824\uBC1B\uC544\uC694`));let a=e.list.map(l=>{let c=t[l.item],h=l.bid?Math.ceil(l.bid*1.1):l.price;return gt("div",{className:`scard r${c.r}`},gt("span",{className:"ribbon",textContent:l.seller?"@"+l.seller:"\uB9C8\uC744 \uCD9C\uD488"}),na(l.item),gt("b",{textContent:c.n}),gt("small",{textContent:l.bid?`\uC9C0\uAE08 ${l.bid} \xB7 @${l.bidder}`:`\uC2DC\uC791\uAC00 ${l.price}`}),gt("button",{className:"sbuy",disabled:l.mine||l.top,onclick:()=>Ai("aucbid",{n:l.n}).then(d=>d?.got&&Ce(`${c.n}\uC5D0 ${d.got.bid}\uCF54\uC778 \uC785\uCC30!`))},l.mine?"\uB0B4 \uCD9C\uD488":l.top?"\uCD5C\uACE0 \uC785\uCC30 \uC911":Nl(h)))}),o=Object.entries(n.inv).filter(([l])=>t[l]?.auc);S("shoplist").replaceChildren(...a.length?a:[gt("p",{className:"note",textContent:"\uC544\uC9C1 \uC62C\uB77C\uC628 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694."})],gt("div",{className:"aucsell"},gt("b",{textContent:"\uB0B4 \uBB3C\uAC74 \uC62C\uB9AC\uAE30"}),...o.length?o.map(([l,c])=>{let h=gt("input",{type:"number",min:10,value:[0,0,200,500][t[l].r]||300,ariaLabel:"\uC2DC\uC791\uAC00"});return gt("div",{className:"gearrow"},gt("div",{className:"aucrow"},na(l,c),gt("b",{textContent:t[l].n})),gt("div",{className:"acts"},h,lE("\uC62C\uB9AC\uAE30",()=>Ai("aucsell",{item:l,price:+h.value}).then(d=>d?.got&&Ce(`${t[l].n}\uC744 ${h.value}\uCF54\uC778\uBD80\uD130 \uC62C\uB838\uC5B4\uC694`)),"")))}):[gt("p",{className:"note",textContent:"\uD76C\uADC0 \uC774\uC0C1 \uBB3C\uACE0\uAE30\xB7\uD654\uC11D\xB7\uC804\uC124 \uC7A5\uBE44\uAC00 \uC0DD\uAE30\uBA74 \uC5EC\uAE30\uC11C \uC62C\uB9B4 \uC218 \uC788\uC5B4\uC694."})]))}function zu(){let n=Vn,t=Ln();if(!n){S("bagh").textContent="\uB0B4 \uACF5\uB8E1",S("bagmsg").textContent=t>=0&&!vs()?"PIN\uC744 \uB123\uACE0 \uB4E4\uC5B4\uC624\uBA74 \uB0B4 \uACF5\uB8E1\uC744 \uD0A4\uC6B8 \uC218 \uC788\uC5B4\uC694.":t<0?"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uBA3C\uC800 \uCC3E\uC544 \uC8FC\uC138\uC694.":"\uBD88\uB7EC\uC624\uB294 \uC911\u2026",["bagstat","baginv","shoplist","shopdeal","bagtabs","shoptabs"].forEach(u=>S(u).replaceChildren());return}let e=n.items;S("bagh").textContent=`@${ii()}\uC758 ${tn[n.kind]}`,S("bagmsg").replaceChildren(Nl(n.coin),` \xB7 \uC720\uB300\uAC10 ${n.bond} \xB7 \uC720\uB300 Lv.${Math.floor(n.bond/10)+1}`);let i=ii()+JSON.stringify(n.gear);if(fp!==i&&t>=0){fp=i;let u=gt("canvas",{width:300,height:300,className:"bagpic"}),{shot:f,done:m}=Mo(300),y=Rr(t);f(u,y===3?Je[oe[t]].g:Pr[oe[t]],y===3?Je[oe[t]].m:qs,Ti(ee[t]),y===3,y>=2?ns[t]:0,y>=2?[Ku(t),oe[t]]:null),m(),S("bagdino").replaceChildren(u)}let s=u=>{let f=n.gear[u],m=f&&e[f.item];return gt("button",{className:`eslot s-${u}`+(m?` r${m.r}`:""),onclick:()=>m?wg(f.item,f.lv):Ce(`\uAC00\uBC29\uC5D0\uC11C ${Uu[u]}\uC5D0 \uB07C\uC6B8 \uBB3C\uAC74\uC744 \uB20C\uB7EC\uC694`)},m?gt("img",{src:dp(f.item),alt:""}):gt("span",{textContent:Uu[u]}),m&&f.lv?gt("i",{textContent:"+"+f.lv}):"")};S("baggear").replaceChildren(s("head"),s("claw"),S("bagdino"),s("body"),s("tail")),S("bagstat").replaceChildren(...n.stats.map((u,f)=>{let m=n.s[u],y=u==="hp"?260:45,g=m-n.base[f];return gt("div",{className:"st"},gt("b",{textContent:L_[u]}),gt("i",{},gt("u",{style:`width:${Math.min(100,m/y*100)}%`})),gt("span",{},String(m),g?gt("em",{textContent:` +${g}`}):""))})),Tg("bagtabs",cE,mu,u=>mu=u);let r=Object.entries(n.inv).filter(([u])=>e[u]&&(mu==="all"||e[u].t===mu)).sort(([u],[f])=>e[f].r-e[u].r||u.localeCompare(f));S("baginv").replaceChildren(...r.length?r.map(([u,f])=>gt("button",{className:"icell",onclick:()=>wg(u)},na(u,f),gt("small",{textContent:e[u].n}))):[gt("p",{className:"note",textContent:"\uC544\uC9C1 \uBE44\uC5B4 \uC788\uC5B4\uC694. \uB09A\uC2DC\xB7\uD654\uC11D \uD30C\uAE30\xB7\uBF51\uAE30\xB7\uC0C1\uC810\uC5D0\uC11C \uBAA8\uC544\uC694."})]),S("bagdraw").textContent=n.drew?"\uC624\uB298 \uBF51\uAE30\uB294 \uD588\uC5B4\uC694 \xB7 \uB0B4\uC77C \uB610":"\uBB34\uB8CC \uBF51\uAE30 \uD55C \uBC88",S("bagdraw").disabled=n.drew,S("drawodds").textContent="\uB098\uC62C \uD655\uB960: "+n.draw.map(([u,f])=>`${oE[u]} ${f}%`).join(" \xB7 ");let a=(u,f)=>S(u).replaceChildren(...Object.entries(e).filter(([,m])=>f(m)).map(([m,y])=>{let g=n.coll.includes(m);return gt("div",{className:"cx r"+y.r+(g?" on":"")},gt("img",{src:dp(m),alt:"",loading:"lazy"}),gt("b",{textContent:g?y.n:"???"}),gt("small",{textContent:Ou[y.r]+(g&&n.inv[m]?` \xB7 ${n.inv[m]}\uAC1C`:"")}))}));a("dexfish",u=>u.t==="fish"),a("dexbone",u=>u.t==="bone"),S("shopcoin").replaceChildren(Nl(n.coin,"big")),S("coinp").hidden=!1,S("coinp").textContent=`\uCF54\uC778 ${n.coin.toLocaleString()}`,S("drawb").classList.toggle("dot",!n.drew),Tg("shoptabs",hE,Al,u=>Al=u);let o=n.deal,l=o&&e[o.item],c=new Date(Date.now()+9*36e5),h=1440-c.getUTCHours()*60-c.getUTCMinutes();if(Al==="auc")return dE(n);S("shopdeal").replaceChildren(...l?[gt("div",{className:"deal"},gt("span",{className:"ribbon",textContent:`\uC624\uB298\uC758 \uD2B9\uAC00 -${o.off}%`}),na(o.item,0,"big"),gt("div",{className:"dinfo"},gt("b",{textContent:l.n}),gt("small",{textContent:Bu(l)}),gt("em",{textContent:`${Math.floor(h/60)}\uC2DC\uAC04 ${h%60}\uBD84 \uB0A8\uC74C`})),gt("button",{className:"dbuy",onclick:()=>Ai("buy",{item:o.item}).then(u=>u?.got&&Ce(`${l.n}\uC744 \uD2B9\uAC00\uB85C \uC0C0\uC5B4\uC694!`))},gt("s",{textContent:l.price}),Nl(o.price)))]:[]);let d=u=>u.has?Math.round(Object.entries(u.has).reduce((f,[m,y])=>f+(e[m].price||0)*y,0)/u.price*100):0;S("shoplist").replaceChildren(...Object.entries(e).filter(([,u])=>u.price&&(Al==="all"||u.t===Al)).map(([u,f])=>{let m=o?.item===u,y=m?o.price:f.price;return gt("div",{className:`scard r${f.r}`+(f.t==="pack"?" pack":"")},f.t==="pack"?gt("span",{className:"ribbon",textContent:`\uAC00\uCE58 ${d(f)}%`}):m?gt("span",{className:"ribbon",textContent:`-${o.off}%`}):"",na(u),gt("b",{textContent:f.n}),gt("small",{textContent:Bu(f)}),gt("button",{className:"sbuy",onclick:()=>Ai("buy",{item:u}).then(g=>g?.got&&Ce(`${f.n}\uC744 \uC0C0\uC5B4\uC694!`))},Nl(y)))}))}S("shopb").onclick=()=>di("shop");S("coinp").onclick=()=>di("shop");S("drawb").onclick=()=>{if(!Vn)return di("bag");S("bagdraw").click()};S("bagdraw").onclick=()=>{if(!Qi())return;let n=S("reveal");n.className="reveal spin",S("rok").hidden=!0,n.showModal(),xo("start");let t=Date.now();Ai("draw").then(e=>setTimeout(()=>{if(!e?.got){n.close();return}let i=e.got,s=i.item&&e.items[i.item];S("rpic").replaceChildren(s?na(i.item,0,"big"):gt("div",{className:"itile big r"+(i.coin?1:0)},gt("img",{src:i.coin?"./ui/coin.webp":"./ui/food.webp",alt:""}))),S("rname").textContent=s?s.n:i.coin?`\uCF54\uC778 ${i.coin}\uAC1C`:`\uBA39\uC774 ${i.food}\uAC1C`,S("rsub").replaceChildren(s?D_(s.r):"",s?" "+Bu(s):" \uBC14\uB85C \uB4E4\uC5B4\uC654\uC5B4\uC694"),n.className="reveal open r"+(s?s.r:i.coin?1:0),xo(s&&s.r>=2?"win":"thud"),S("rok").hidden=!1},Math.max(0,1400-(Date.now()-t))))};S("rok").onclick=()=>S("reveal").close();function fE(){En&&fetch(En+"/api/hoods").then(n=>n.json()).then(n=>{let t=Ln()>=0?Math.floor(Ln()/ts):-1,e=Math.max(1,...n.list.map(r=>r.score)),i=new Date(n.week[1]+"T23:59:59+09:00"),s=Math.max(0,Math.ceil((i-Date.now())/864e5));S("hoodnote").textContent=`\uC6D4~\uC77C \uD55C \uC8FC \uB3D9\uC548 \uB3D9\uB124\uB9C8\uB2E4 \uB180\uC774 \uC810\uC218\uB97C \uB354\uD574\uC694(\uCD9C\uC11D 3 \xB7 \uB09A\uC2DC 2 \xB7 \uD654\uC11D 2 \xB7 \uB300\uACB0 3 \xB7 \uB3C4\uC7A5 1 \xB7 \uBAA8\uB2E5\uBD88 1). 1\uB4F1 \uB3D9\uB124\uC5D0\uC11C 1\uC810\uC774\uB77C\uB3C4 \uB0B8 \uC8FC\uBBFC\uC740 \uC6D4\uC694\uC77C\uC5D0 \uCF54\uC778 ${n.pay}\uAC1C. ${s}\uC77C \uB0A8\uC558\uC5B4\uC694.`,S("hoodlist").replaceChildren(...n.list.length?n.list.map((r,a)=>gt("div",{className:"hood"+(r.h===t?" me":"")+(a===0?" first":"")},gt("b",{textContent:`${a+1}\uC704 ${aa(r.h)}`+(r.h===t?" (\uC6B0\uB9AC \uB3D9\uB124)":"")}),gt("span",{textContent:`${r.score}\uC810 \xB7 ${r.n}\uBA85`}),gt("i",{},gt("u",{style:`width:${r.score/e*100}%`})),gt("small",{textContent:r.top.map(([o,l])=>`@${o} ${l}`).join(" \xB7 ")}))):[gt("p",{className:"note",textContent:"\uC774\uBC88 \uC8FC\uB294 \uC544\uC9C1 \uC810\uC218\uAC00 \uC5C6\uC5B4\uC694. \uB180\uC774\uB97C \uD558\uBA74 \uC6B0\uB9AC \uB3D9\uB124 \uC810\uC218\uAC00 \uC62C\uB77C\uC694."})])}).catch(()=>{})}function pE(){let n=Me?.cnt||{},t=Me?.lim||{},e=[];(Me?.mis||[]).forEach(([i,s,r])=>{let a=rE(i);e.push([(s>=r?"\uC644\uB8CC \xB7 ":"\uC624\uB298 \uBBF8\uC158 \xB7 ")+i,`${s}/${r}`,s<r&&a?a:""])}),e.push(["\uCCA8\uBC99 \uC6C5\uB369\uC774 \xB7 \uB09A\uC2DC",Me?`\uC624\uB298 ${Math.max(0,(t.fish||5)-(n.fish||0))}\uBC88 \uB0A8\uC74C`:"\uD558\uB8E8 5\uBC88","fish"],["\uD070 \uACF5\uB8E1 \uBF08 \xB7 \uD654\uC11D \uD30C\uAE30",Me?`\uC624\uB298 ${Math.max(0,(t.dig||3)-(n.dig||0))}\uBC88 \uB0A8\uC74C`:"\uD558\uB8E8 3\uBC88","dig"],["\uC6B0\uB974\uB989 \uD654\uC0B0 \xB7 \uC54C \uB370\uC6B0\uAE30",Me?.cnt?.heat?"\uC624\uB298\uC740 \uB370\uC6E0\uC5B4\uC694":"30\uBD84 \uB3D9\uC548 \uBA39\uC778 \uBA39\uC774 1.5\uBC30",Me?.cnt?.heat?"":"heat"],["\uBAA8\uB2E5\uBD88 \uAD11\uC7A5 \xB7 \uBD88 \uCB10\uAE30","1\uBD84\uB9C8\uB2E4 \uBA39\uC774 15\uAC1C","sit"],["\uBA85\uC18C \uB3C4\uC7A5 \uCC0D\uAE30",Me?`${(Me.stamps||[]).filter(Boolean).length}/5 \uCC0D\uC74C`:"\uB2E4\uC12F \uACF3",Me?.stamps?.every(Boolean)?"":"stamp"]),S("spotmis").replaceChildren(...e.map(([i,s,r])=>{let a=br(r?"button":"div",i," "+s);return r?a.onclick=()=>aE(r):a.className="ok",a}))}S("qchest").onclick=()=>ys("chest").then(n=>{n&&(Lr(),Ir("\uBCF4\uBB3C \uC0C1\uC790",n.got?`\uC6B0\uAC00! \uC624\uB298 \uBBF8\uC158 \uB2E4 \uD588\uB2E4. \uBA39\uC774 ${n.got}\uAC1C${n.coin?`, \uCF54\uC778 ${n.coin}\uAC1C`:""} \uC900\uB2E4. \uB0B4\uC77C \uC0C8 \uBBF8\uC158 \uC900\uB2E4.`:n.no,""))});var ei=n=>!!ii()&&String(n).toLowerCase()===ii().toLowerCase();function mE(n,t,e,i,...s){if(n==="chat")gE(t,e,i);else if(/^d[qsrw]$/.test(n))TE(n,t,e,i,...s);else if(n==="hide"){let r=Mr.findIndex(a=>a[0]===t);r>=0&&(Mr.splice(r,1),nd())}else if(n==="note")Ce(t);else if(n==="n")S("online").hidden=!(t>1),S("online").textContent=`\uC9C0\uAE08 ${t}\uBA85\uC774 \uB9C8\uC744\uC5D0`;else if(n==="say"){let r=Xn(t);je.has(r)&&ua(r,e)}else if(n==="emo"){let r=Xn(t);je.has(r)&&$l(r,e)}else n==="take"?yo.add(t):n==="pet"?ei(e)?(Ce(`@${t} \uB2D8\uC774 \uB0B4 ${Er}\uC744 \uC4F0\uB2E4\uB4EC\uC5C8\uC5B4\uC694. \uBA39\uC774 5\uAC1C!`),Dr()):ei(t)||Ce(`@${t} \uB2D8\uC774 @${e} \uB2D8 ${Er}\uC744 \uC4F0\uB2E4\uB4EC\uC5C8\uC5B4\uC694`):n==="fish"&&!ei(t)?Ce(`@${t} \uB2D8\uC774 \uD669\uAE08 \uBB3C\uACE0\uAE30\uB97C \uB09A\uC558\uC5B4\uC694! \uBA39\uC774 100\uAC1C`):n==="fossil"&&!ei(t)?Ce(`@${t} \uB2D8\uC774 \uD654\uC11D 10\uAC1C\uB97C \uB2E4 \uBAA8\uC558\uC5B4\uC694! \uBA39\uC774 500\uAC1C`):n==="chest"&&!ei(t)&&Ce(`@${t} \uB2D8\uC774 \uC624\uB298 \uBBF8\uC158 \uBCF4\uBB3C \uC0C1\uC790\uB97C \uC5F4\uC5C8\uC5B4\uC694`)}function gE(n,t,e){if(!Mr.some(i=>i[0]===n))if(Mr.push([n,t,e]),Mr.length>30&&Mr.shift(),nd(),S("chat").hidden&&!ei(t)&&Ae?.readyState===1&&hp&&Date.now()-hp>1500&&(lo++,N_()),ei(t))S("cin").value.trim()===e&&(S("cin").value=""),tt&&ua("me",e);else{let i=Xn(t);je.has(i)&&ua(i,e)}}function nd(){S("clog").replaceChildren(...Mr.map(([n,t,e])=>{let i=document.createElement("p");return i.append(Object.assign(document.createElement("b"),{className:"who",textContent:"@"+t,onclick:()=>E_(t)}),e),Xs&&!ei(t)&&i.append(Object.assign(document.createElement("button"),{className:"rep",textContent:"\uC2E0\uACE0",onclick:()=>{$s()&&confirm(`@${t} \uB2D8\uC758 \uC774 \uB9D0\uC744 \uC2E0\uACE0\uD560\uAE4C\uC694?
"${e}"

3\uBA85\uC774 \uC2E0\uACE0\uD558\uBA74 \uBC14\uB85C \uC0AC\uB77C\uC9C0\uACE0, \uC6B4\uC601\uC790\uAC00 \uBD10\uC694.`)&&Ae.send(JSON.stringify({r:n}))}})),i})),S("clog").scrollTop=1e9}var lo=0,N_=()=>{lo?S("chatb").dataset.n=lo>9?"9+":lo:delete S("chatb").dataset.n,S("chatb").classList.toggle("hot",!!lo)},Vp=n=>{if(S("chat").hidden=!n,!n)return S("cin").blur();lo=0,N_(),nd(),Xs&&S("cin").focus()};S("chatb").onclick=()=>Vp(S("chat").hidden);S("chat").querySelector(".x").onclick=()=>Vp(!1);S("cpin").onclick=()=>{Ln()>=0?Np():Ce('\uC0B0\uCC45\uC744 \uB05D\uB0B4\uACE0 "\uCC3E\uAE30"\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uBA3C\uC800 \uCC3E\uC544 \uC8FC\uC138\uC694.')};S("cform").onsubmit=n=>{n.preventDefault();let t=S("cin").value.trim();t&&$s()&&Ae.send(JSON.stringify({c:t}))};var Xl=new Map;function ua(n,t){let e=document.createElement("canvas");e.width=256,e.height=112;let i=e.getContext("2d");i.fillStyle="#fffaf0",i.strokeStyle="#6b5a45",i.lineWidth=5,i.beginPath(),i.roundRect(6,6,244,76,30),i.moveTo(112,80),i.lineTo(128,104),i.lineTo(144,80),i.fill(),i.stroke(),i.fillStyle="#fffaf0",i.fillRect(110,74,36,9),i.fillStyle="#2e2418",i.textAlign="center";let s=34,r=typeof t=="string"?t:R_[t]||"";do i.font=`800 ${s}px Pretendard,"Apple SD Gothic Neo","Malgun Gothic",sans-serif`;while(i.measureText(r).width>224&&--s>16);for(;r.length>1&&i.measureText(r).width>224;)r=r.slice(0,-2)+"\u2026";i.fillText(r,128,57);let a=new rr(e);a.colorSpace=pn;let o=new er(new Ls({map:a,toneMapped:!1,fog:!1,depthTest:!1}));o.scale.set(1.9,.83,1),o.renderOrder=9,te.add(o),U_(n),Xl.set(n,{s:o,until:It+3.5})}function U_(n){let t=Xl.get(n);t&&(te.remove(t.s),t.s.material.map.dispose(),t.s.material.dispose(),Xl.delete(n))}var $s=()=>Ae&&Ae.readyState===1&&Xs;function _E(n){let t=ed(),e=(h,d)=>tt?Math.hypot(tt.x-h,tt.z-d):1e9,i=(h,d)=>Object.assign(document.createElement(h),d),s=t.some(h=>h.n)?pu.ev:t.some(h=>h.kind==="camp")||e(0,0)<ks+4?pu.camp:e(Mn.x,Mn.z)<24||e(Rn.x,Rn.z)<18||e(Sn,bn)<100?pu.spot:pu.base,r=(h,d,u)=>i("button",{className:d,textContent:h,onclick:()=>{S("saybox").hidden=!0,$s()&&u()}}),a=n>=0&&je.get(n),o=a?ee[n]:"",l=a&&e(a.x,a.z)<20,c=a?[i("b",{className:"whohead",textContent:"@"+o}),i("button",{className:"move",textContent:l?"\uBC15\uCE58\uAE30 \uB300\uACB0":"\uB300\uACB0\uC740 \uB354 \uAC00\uAE4C\uC774",disabled:!l||!Xs,onclick:()=>{S("saybox").hidden=!0,EE(o)}}),i("button",{className:"move",textContent:"\uD504\uB85C\uD544",onclick:()=>{S("saybox").hidden=!0,E_(o)}})]:eE.map((h,d)=>r(h,"move",()=>{Ae.send(JSON.stringify({m:d})),$l("me",d)}));S("saybox").replaceChildren(...c,...Xs?s.map(h=>r(R_[h],"ghost",()=>{Ae.send(JSON.stringify({e:h})),ua("me",h)})):[]),S("saybox").hidden=!1}function xE(n,t){let e=null,i=90,s=new P,r=[["me",tt.x,tt.z,ql(tt.i)],...[...je.values()].filter(a=>!ei(ee[a.j])).map(a=>[a.j,a.x,a.z,ql(a.j)])];for(let[a,o,l,c]of r){if(s.set(o,c*.45,l).project(pe),s.z>1)continue;let h=Math.hypot((s.x+1)/2*innerWidth-n,(1-s.y)/2*innerHeight-t);h<i&&(i=h,e=a)}if(e===null)return S("saybox").hidden=!0;if(e==="me"&&!Xs)return Ce("PIN\uC744 \uB123\uC73C\uBA74 \uB9D0\uD558\uACE0 \uBAB8\uC9D3\uB3C4 \uD560 \uC218 \uC788\uC5B4\uC694.");_E(e==="me"?-1:e)}var yE=[10,30,50],vE=["\uD3EC\uD6A8 \uBB3C\uAE30","\uD131 \uD798","\uBB3C\uC5B4\uB72F\uAE30","\uBFD4 \uB3CC\uC9C4","\uAE09\uAC15\uD558","\uC721\uC911\uD55C \uCFF5","\uAC00\uC2DC \uAF2C\uB9AC","\uACE4\uBD09 \uAF2C\uB9AC","\uC6B8\uC74C\uC18C\uB9AC","\uC5F0\uC18D \uD560\uD034\uAE30","\uC704\uC7A5 \uC2B5\uACA9","\uC2EC\uD574 \uBB3C\uAE30"],ME=["2.2\uBC30 \uBB3C\uAE30","\uBC29\uC5B4\uB97C \uB6AB\uB294 1.6\uBC30","1.4\uBC30 + \uC900 \uD53C\uD574 40% \uD68C\uBCF5","1.5\uBC30 + \uD63C\uC808 35%","1.5\uBC30, \uBC18\uB4DC\uC2DC \uCE58\uBA85\uD0C0","0.8\uBC30 + \uCCB4\uB825 30% \uD68C\uBCF5","1.3\uBC30 + \uC774\uBC88 \uD134 \uD53C\uD574 40%\uB9CC","1.2\uBC30, \uBC18\uB4DC\uC2DC \uD63C\uC808","\uC0C1\uB300 \uACF5\uACA9 25% \uC57D\uD558\uAC8C","0.9\uBC30 \uB450 \uBC88 \uD560\uD034\uAE30","1.8\uBC30, \uBC18\uB4DC\uC2DC \uCE58\uBA85\uD0C0","1.7\uBC30 + \uC900 \uD53C\uD574 30% \uD68C\uBCF5"],co=(n,t)=>["\uACF5\uACA9","\uAC15\uD0C0","\uBC29\uC5B4",vE[t],"\uC720\uB300\uC758 \uC77C\uACA9"][n],Mi=null,Gf="";function Bl(n,t,e,i){S("duh").textContent=n,S("dum").textContent=t,S("dubar").replaceChildren(...i||[]),S("dub").replaceChildren(...e.map(([s,r,a])=>Object.assign(document.createElement("button"),{textContent:s,className:a||"",onclick:r}))),S("duel").open||S("duel").show()}var pp=new Map;function O_(n){let t=pp.get(n);if(!t)return[0,0];let e=(It-t.t0)/1.6;if(e>=1)return pp.delete(n),[0,0];let i=e<.45?0:Math.sin(Math.min(1,(e-.45)/.25)*Math.PI/2),s=Math.max(0,(e-.7)/.3),r=e<.28?-.8*Math.sin(e/.28*Math.PI/2):e<.45?-.8+2.1*(e-.28)/.17:(1.3-(t.res<0?4:t.res?0:1.6)*i)*(1-s);return[t.dx*r,t.dz*r]}var ku=n=>ei(n)&&tt?tt:je.get(Xn(n)),F_=n=>ei(n)&&tt?"me":Xn(n);function B_(n,t){if(n==="me")tt.a=t;else{let e=je.get(n);e&&(e.a=e.ta=t)}}function SE(n,t,e){let i=ku(n),s=ku(t);if(!i||!s)return;let r=s.x-i.x,a=s.z-i.z,o=Math.hypot(r,a)||1;r/=o,a/=o,[[n,r,a,e],[t,-r,-a,-e]].forEach(([l,c,h,d])=>{let u=F_(l);u!==-1&&(pp.set(u,{dx:c,dz:h,t0:It,res:d}),B_(u,Math.atan2(c,h)),setTimeout(()=>{d>0?$l(u,0):d<0&&$l(u,1),ua(u,d>0?"\uC6B0\uAC00!":d<0?"\uC544\uC57C!":"\uCFF5!")},760))}),(ei(n)||ei(t)||tt&&Math.hypot(i.x-tt.x,i.z-tt.z)<35)&&(xo("whoosh",.42),xo("thud",.72))}var mp={calm:.6,wind:.4,fire:1.6,whoosh:2.2,thud:1.4,start:.7,win:.7,lose:.7},Vf={},Cl=null,Wp=()=>{try{Cl=Cl||new AudioContext,Cl.state==="suspended"&&(Yl||Mi)&&Cl.resume()}catch{}return Cl},Xp=n=>Vf[n]||(Vf[n]=fetch(`./sound/${n}.mp3`).then(t=>t.arrayBuffer()).then(t=>new Promise((e,i)=>Wp().decodeAudioData(t,e,i))).catch(()=>(delete Vf[n],null)));function xo(n,t=0){let e=Wp();e&&(e.state==="suspended"&&e.resume(),Xp(n).then(i=>{if(!i)return;let s=e.createBufferSource(),r=e.createGain();s.buffer=i,r.gain.value=mp[n],s.connect(r).connect(e.destination),s.start(e.currentTime+t)}))}var bE=()=>["whoosh","thud","start","win","lose"].forEach(Xp),jr=()=>S("duel").open&&S("duel").close();S("dux").onclick=jr;function EE(n){if(!$s()||!tt)return;if(Mi)return S("duel").show();let t=Vn?.coin??0;Bl(`@${n} \uB2D8\uACFC \uACF5\uB8E1 \uB300\uACB0`,`HP\uB97C \uBA3C\uC800 0\uC73C\uB85C \uB9CC\uB4E4\uBA74 \uC774\uACA8\uC694. \uC774\uAE30\uBA74 \uAC74 \uCF54\uC778\uC758 \uB450 \uBC30, \uC9C0\uBA74 \uAC74 \uB9CC\uD07C \uC783\uC5B4\uC694. \uAC00\uC9C4 \uCF54\uC778 ${t.toLocaleString()}\uAC1C.`,[...yE.map(e=>[`\uCF54\uC778 ${e}`,()=>{if(t<e)return Ce(`\uCF54\uC778\uC774 ${e}\uAC1C\uBCF4\uB2E4 \uC801\uC5B4\uC694. \uCD9C\uC11D\xB7\uBBF8\uC158 \uC0C1\uC790\uB85C \uBAA8\uC544\uC694.`);$s()&&Ae.send(JSON.stringify({dq:n,b:e})),jr()}]),["\uADF8\uB9CC\uB450\uAE30",jr,"ghost"]])}var Hu=(n,t,e,i,s)=>gt("div",{className:"hpb"+(s?" me":"")},gt("b",{textContent:n}),gt("small",{textContent:tn[i]??""}),gt("i",{},gt("u",{style:`width:${Math.max(0,t/e*100)}%`+(t/e<.3?";background:linear-gradient(90deg,#e2553b,#ff8a5c)":"")})),gt("span",{textContent:`${t} / ${e}`}));function gp(){let n=Mi,t=n.me,e=t==="A"?"B":"A",i=n[e],s=[Hu("\uB098",n.hp[t],n.max[t],n.kind[t],1),Hu("@"+i,n.hp[e],n.max[e],n.kind[e])];n.stun&&n.picked<0&&(n.picked=0,$s()&&Ae.send(JSON.stringify({dp:0})));let r=(n.line?n.line+" ":"")+(n.stun?"\uD63C\uC808\uD574\uC11C \uC774\uBC88 \uD134\uC740 \uC26C\uC5B4\uC694\u2026":n.picked>=0?`${co(n.picked,n.kind[t])}! \uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026`:`\uCF54\uC778 ${n.bet} \xB7 15\uCD08 \uC548\uC5D0 \uACE8\uB77C\uC694`),a=[1,!n.cd,1,!n.sk,n.bs===0],o=n.picked>=0?[]:[0,1,2,3,4].map(l=>[l===1&&n.cd?`\uAC15\uD0C0 (${n.cd}\uD134 \uC27C)`:l===4&&n.bs<0?"\uC720\uB300\uC758 \uC77C\uACA9 (\uC720\uB300\uAC10 30)":co(l,n.kind[t]),()=>{!Mi||Mi.picked>=0||!$s()||!a[l]||(Mi.picked=l,Ae.send(JSON.stringify({dp:l})),gp())},"mv"+l]);Bl(`\uACF5\uB8E1 \uB300\uACB0 \xB7 ${n.turn||1}\uD134`,r,o,s),S("dub").querySelectorAll("button").forEach((l,c)=>{l.disabled=!a[c],c===3&&(l.title=ME[n.kind[t]])})}function TE(n,t,e,i,s,r,a,o,l,c,h,d,u,f){if(n==="dq"){Gf=t,Bl("\uB300\uACB0 \uC2E0\uCCAD\uC774 \uC654\uC5B4\uC694",`@${t} \uB2D8\uC774 \uCF54\uC778 ${e}\uAC1C\uB97C \uAC78\uACE0 \uACF5\uB8E1 \uB300\uACB0\uC744 \uC2E0\uCCAD\uD588\uC5B4\uC694. HP\uB97C \uBA3C\uC800 0\uC73C\uB85C \uB9CC\uB4E4\uBA74 \uC774\uACA8\uC694. \uC774\uAE30\uBA74 ${e*2}\uAC1C\uB97C \uBC1B\uACE0, \uC9C0\uBA74 ${e}\uAC1C\uB97C \uC783\uC5B4\uC694.`,[["\uBC1B\uAE30",()=>{if((Vn?.coin??0)<e)return Ce(`\uCF54\uC778\uC774 ${e}\uAC1C\uBCF4\uB2E4 \uC801\uC5B4\uC694.`);$s()&&Ae.send(JSON.stringify({da:t})),jr()}],["\uAC70\uC808",()=>{$s()&&Ae.send(JSON.stringify({dn:t})),jr()},"ghost"]]),setTimeout(()=>{Gf===t&&!Mi&&S("duel").open&&S("duh").textContent==="\uB300\uACB0 \uC2E0\uCCAD\uC774 \uC654\uC5B4\uC694"&&jr()},25e3);return}let m=ei(t)?"A":ei(e)?"B":"";if(n==="ds"){let y=ku(t),g=ku(e);if(y&&g){let p=Math.atan2(g.x-y.x,g.z-y.z);[[t,p],[e,p+Math.PI]].forEach(([_,b])=>{let v=F_(_);v!==-1&&(B_(v,b),ua(v,"\uB364\uBCBC\uB77C!"))})}return m?(xo("start"),Mi={A:t,B:e,bet:i,me:m,hp:{A:s,B:r},max:{A:s,B:r},kind:{A:a,B:o},cd:0,sk:0,bs:(m==="A"?l:c)?0:-1,stun:0,picked:-1,turn:1,line:""},Gf="",Ai("me"),gp()):Ce(`@${t} \uB2D8\uACFC @${e} \uB2D8\uC774 \uCF54\uC778 ${i}\uAC1C\uB97C \uAC78\uACE0 \uACF5\uB8E1 \uB300\uACB0\uC744 \uC2DC\uC791\uD588\uC5B4\uC694!`)}if(n==="dr"){let y=o,g=l;if(SE(t,e,y>g?1:y<g?-1:0),!Mi||!m)return;let p=Mi,_=String(c).split("|"),[b,v,A,w,x,T]=m==="A"?[i,s,y,g,_[0],_[1]]:[s,i,g,y,_[1],_[0]],D=m==="A"?"B":"A";p.hp={A:r,B:a},b===3&&!p.stun&&(p.sk=1),b===4&&!p.stun&&(p.bs=1),p.cd=m==="A"?h:d,p.stun=m==="A"?u:f,p.turn++;let R=U=>(/crit/.test(U)?" \uCE58\uBA85\uD0C0!":"")+(/stun(?!ned)/.test(U)?" \uD63C\uC808\uC2DC\uD0B4!":"");p.line=`\uB098 ${/stunned/.test(x)?"\uD63C\uC808":co(b,p.kind[m])} \u2192 ${A}${R(x)} / \uC0C1\uB300 ${/stunned/.test(T)?"\uD63C\uC808":co(v,p.kind[D])} \u2192 ${w}${R(T)}.`,p.picked=9,Bl(`${co(b,p.kind[m])} vs ${co(v,p.kind[D])}`,A>w?"\uCF85! \uB354 \uC138\uAC8C \uB54C\uB838\uB2E4!":A<w?"\uC544\uC57C! \uB354 \uC138\uAC8C \uB9DE\uC558\uB2E4\u2026":"\uCFF5!",[],[Hu("\uB098",p.hp[m],p.max[m],p.kind[m],1),Hu("@"+p[D],p.hp[D],p.max[D],p.kind[D])]),setTimeout(()=>{Mi&&(Mi.picked=-1,r>0&&a>0&&gp())},1400);return}n==="dw"&&setTimeout(()=>{if(!m){i&&Ce(`@${t} \uB2D8\uC774 @${e} \uB2D8\uC744 \uACF5\uB8E1 \uB300\uACB0\uB85C \uC774\uACBC\uC5B4\uC694!`);return}Mi=null,Ai("me");let y=m==="A",g=i?y?s?`@${e} \uB2D8\uC774 \uB098\uAC00\uC11C \uC774\uACBC\uC5B4\uC694. \uCF54\uC778 ${i*2}\uAC1C\uB97C \uBC1B\uC558\uC5B4\uC694.`:`\uC774\uACBC\uC5B4\uC694! \uCF54\uC778 ${i*2}\uAC1C\uB97C \uBC1B\uC558\uC5B4\uC694.`:`\uC84C\uC5B4\uC694. \uCF54\uC778 ${i}\uAC1C\uB97C \uC783\uC5C8\uC5B4\uC694. \uBB3C\uACE0\uAE30\uB97C \uBA39\uC774\uACE0 \uC7A5\uBE44\uB97C \uB07C\uC6CC \uB354 \uAC15\uD574\uC838\uC694.`:"20\uD134\uC774 \uC9C0\uB098\uB3C4 \uB611\uAC19\uC544\uC11C \uAC74 \uCF54\uC778\uC744 \uADF8\uB300\uB85C \uB3CC\uB824\uBC1B\uC558\uC5B4\uC694.";i&&xo(y?"win":"lose"),y&&i&&($l("me",1),ua("me","\uC774\uACBC\uB2E4! \uC6B0\uAC00!")),Bl(y&&i?"\uC2B9\uB9AC!":"\uB300\uACB0 \uB05D",g,[["\uB2EB\uAE30",jr,"ghost"]])},s?0:1500)}var Gu=new Map,$l=(n,t)=>Gu.set(n,{k:t,t0:It});function z_(n){let t=Gu.get(n);if(!t)return[0,0];let e=(It-t.t0)/1.1;return e>=1?(Gu.delete(n),[0,0]):t.k===0?[Math.sin(Math.PI*e)*1.6,0]:t.k===1?[Math.sin(Math.PI*e)*.4,e*6.283]:[0,Math.sin(e*Math.PI*6)*.45*(1-e)]}var ql=n=>n<0?2.6:Ve?2+Je[oe[n]].len*Yu[n]*.45:2.4*(Ms[n]||1),Qr=new Map,yo=new Set,wE=n=>new er(new Ls({map:Se.soft,color:n,blending:Wr,transparent:!0,depthWrite:!1,fog:!1}));function AE(n){let t=n==="rain"?16762938:16734746,e=at(he,on(t),[0,0,0],[.75,.75,.75]);e.add(at(Ct(.4,.6,4),on(n==="rain"?5216826:3811872),[0,1.15,0]));let i=wE(t);return i.scale.setScalar(2.6),i.material.opacity=.75,e.add(i),e}function CE(n,t){let e=r=>Gp(n.key+":"+t+r);if(n.kind==="rain"){let r=Math.floor(e("c")*zp()),a=e("a")*6.283,o=po(Math.floor(e("r")*3));return[vn[r].x+Math.cos(a)*o,vn[r].z+Math.sin(a)*o]}let i=Math.atan2(-bn,-Sn)+(e("a")-.5)*1.4,s=84+e("r")*14;return[Sn+Math.cos(i)*s,bn+Math.sin(i)*s]}var Ag=0,Cg=0,Zr=0,Rg=-1,_p="",xp=-99;function RE(n){let{key:t,ev:e}=n.userData;if(yo.add(t),!Qi()){ni("\uC6B0\uAC00. \uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC544\uC57C \uC8FC\uC6B8 \uC218 \uC788\uB2E4.");return}ys(e.kind,t).then(i=>{i&&(i.got?(Gs=It+.5,ni(`\uC6B0\uAC00! ${e.kind==="rain"?"\uD558\uB298 \uC5F4\uB9E4":"\uBD88\uC528 \uC5F4\uB9E4"}\uB2E4. \uBA39\uC774 ${i.got}\uAC1C.`)):i.no&&ni("\uC6B0\uAC00. "+i.no))})}function PE(){let n=cn||Qe?[]:ed(),t=n.filter(c=>c.n).map(c=>c.key).join();if(t!==Ll){Qr.forEach(c=>te.remove(c)),Qr.clear();for(let c of n)if(c.n)for(let h=0;h<c.n;h++){let d=c.key+":"+h;if(yo.has(d))continue;let[u,f]=CE(c,h),m=AE(c.kind);m.userData={key:d,ev:c,x:u,z:f,t0:It+Gp(d)*(c.kind==="rain"?8:3)},m.visible=!1,te.add(m),Qr.set(d,m)}if(Ll!==""||t){let c=n.find(h=>h.n&&!Ll.includes(h.key));c&&(Ce(c.kind==="rain"?"\uBA39\uC774 \uBE44\uAC00 \uC640\uC694! 5\uBD84 \uB3D9\uC548 \uD669\uAE08 \uC5F4\uB9E4 30\uAC1C":"\uC6B0\uB974\uB989! \uD654\uC0B0\uC774 \uD130\uC84C\uC5B4\uC694. \uBD88\uC528 \uC5F4\uB9E4 12\uAC1C"),c.kind==="boom"&&(xp=It))}Ll=t,ju()}let e=n.find(c=>c.kind==="rain")||n.find(c=>c.kind==="boom")||n.find(c=>c.kind==="camp"),i=S("evbar");if(!e){i.hidden=!0;return}let s=C_(Date.now()),r=Math.max(0,e.end*60-(s.getUTCHours()*3600+s.getUTCMinutes()*60+s.getUTCSeconds())),a=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,o=[...Qr.values()].filter(c=>c.userData.ev.key===e.key&&!yo.has(c.userData.key)).length,l=[...je.values()].filter(c=>Math.hypot(c.x,c.z)<20).length+(tt&&Math.hypot(tt.x,tt.z)<20?1:0);i.className=e.kind,i.hidden=!1,tt&&S("walkhint").classList.add("mini"),i.firstChild.textContent=e.kind==="rain"?`\uBA39\uC774 \uBE44! \uD669\uAE08 \uC5F4\uB9E4 ${o}\uAC1C \uB0A8\uC74C \xB7 ${a}`:e.kind==="boom"?`\uD654\uC0B0 \uBD84\uCD9C! \uBD88\uC528 \uC5F4\uB9E4 ${o}\uAC1C \xB7 ${a}`:`\uBAA8\uB2E5\uBD88 \uBAA8\uC784 \xB7 \uAD11\uC7A5\uC5D0 ${Math.max(0,l)}\uBA85 \xB7 ${a}`,i.lastChild.textContent=e.kind==="camp"?"\uBAA8\uB2E5\uBD88\uB85C":"\uC8FC\uC6B0\uB7EC \uAC00\uAE30",i.lastChild.onclick=ha}function IE(n){(Ag-=n)<0&&(Ag=.5,PE());let t=tt&&tt.i>=0?tt:null,e=null,i=1e9;if(Qr.forEach(h=>{let{key:d,ev:u,x:f,z:m,t0:y}=h.userData;if(yo.has(d)){te.remove(h),Qr.delete(d);return}let g=(It-y)/(u.kind==="rain"?2.5:3);if(h.visible=g>0,!(g<=0)){if(g<1){u.kind==="rain"?h.position.set(f,1+60*(1-g)**2,m):h.position.set(Sn+(f-Sn)*g,88*(1-g)+1+Math.sin(Math.PI*g)*45,bn+(m-bn)*g);return}if(h.position.set(f,1.1+Math.sin(It*3+f)*.2,m),h.rotation.y=It*2,tt){let p=Math.hypot(tt.x-f,tt.z-m);p<2.6+tt.r?RE(h):p<i&&(i=p,e=h)}}}),tt?gs(S("aev"),e?.position.x,2,e?.position.z,e?`${e.userData.ev.kind==="rain"?"\uD669\uAE08 \uC5F4\uB9E4":"\uBD88\uC528 \uC5F4\uB9E4"} ${Math.round(i)}\uAC78\uC74C`:""):gs(S("aev")),It-xp<8){let h=(It-xp)/8;vu.forEach(d=>{d.material.color.setHex(3813418),d.scale.multiplyScalar(1.6-h*.6)})}else vu[0].material.color.getHex()!==6971480&&vu.forEach(h=>h.material.color.setHex(6971480));if(Xl.forEach((h,d)=>{let u=d==="me"?tt:je.get(d);if(!u||It>h.until)return U_(d);h.s.position.set(u.x,(d==="me"?tt.i<0?4.3:ql(tt.i)+1.15:ql(d)+1.15)+(u.hop||0),u.z)}),tt||(S("saybox").hidden=!0,S("chat").hidden||Vp(!1)),_p="",!tt){S("mini").hidden||$p(),S("spotact").hidden=!0,Zr=0;return}let s=(h,d)=>Math.hypot(tt.x-h,tt.z-d);t&&Me&&Nu.forEach(([h,d,u,f],m)=>{Me.stamps[m]||s(d,u)>f||zs.has("st"+m)||(zs.add("st"+m),ys("stamp",m).then(y=>{zs.delete("st"+m),y?.got&&(Gs=It+.5,ni(`\uC6B0\uAC00! ${h} \uB3C4\uC7A5 \uCF85. \uBA39\uC774 ${y.got}\uAC1C.`+(y.all?" \uB3C4\uC7A5 \uB2E4\uC12F \uAC1C \uB2E4 \uCC0D\uC5C8\uB2E4!":"")))}))});let r=s(Mn.x,Mn.z)<24?"fish":s(Rn.x,Rn.z)<18?"dig":s(Sn,bn)<100?"heat":"",a="";if(r){let h=Me?.cnt||{},d=Me?.lim||{};a=!t||!Qi()?"\uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uD560 \uC218 \uC788\uC5B4\uC694":r==="fish"?h.fish>=d.fish?"\uC624\uB298 \uB09A\uC2DC \uB05D":`\uB09A\uC2DC\uD558\uAE30 \xB7 ${d.fish-h.fish}\uBC88 \uB0A8\uC74C`:r==="dig"?h.dig>=d.dig?"\uC624\uB298 \uD30C\uAE30 \uB05D":`\uD654\uC11D \uD30C\uAE30 \xB7 ${d.dig-h.dig}\uBC88 \uB0A8\uC74C`:h.heat?"\uC624\uB298\uC740 \uC54C\uC744 \uB370\uC6E0\uC5B4\uC694":"\uC54C \uB370\uC6B0\uAE30 \xB7 30\uBD84 \uBA39\uC774 1.5\uBC30"}let o=S("spotact");o.hidden=!r,o.textContent!==a&&(o.textContent=a),o.disabled=!t||!Qi()||/ 끝$|데웠어요$/.test(a),o.dataset.k=r;let l=Math.hypot(tt.x,tt.z),c=tt.dist===Rg;Rg=tt.dist,t&&Qi()&&l<ks+1.5?(Zr=c?Zr+n:0,Zr>60&&!zs.has("sit")&&(zs.add("sit"),Zr=0,ys("sit").then(h=>{zs.delete("sit"),h?.got?(Gs=It+.5,ni(`\uC6B0\uAC00. \uC798 \uC26C\uC5C8\uB2E4. \uBA39\uC774 ${h.got}\uAC1C.`)):h?.no&&ni("\uC6B0\uAC00. "+h.no)})),_p=c?`\uBAA8\uB2E5\uBD88 \uCB10\uB294 \uC911 \xB7 ${Math.ceil(60-Zr)}\uCD08 \uB4A4 \uBA39\uC774 15\uAC1C`:"\uBAA8\uB2E5\uBD88 \uC606\uC5D0 \uAC00\uB9CC\uD788 \uC11C \uC788\uC73C\uBA74 1\uBD84\uB9C8\uB2E4 \uBA39\uC774 15\uAC1C",ed().some(h=>h.kind==="camp")&&Me&&!Me.cnt.camp&&(Cg+=n)>15&&!zs.has("camp")&&(zs.add("camp"),ys("camp").then(h=>{zs.delete("camp"),h?.got&&(Gs=It+.5,ni(`\uC6B0\uAC00! \uBAA8\uB2E5\uBD88 \uBAA8\uC784\uC774\uB2E4. ${h.count}\uBA85 \uBAA8\uC600\uB2E4. \uBA39\uC774 ${h.got}\uAC1C.`))}))):Zr=Cg=0}var zs=new Set;up&&(window.dbgv={go:(n,t)=>{tt&&(pe.position.x+=n-tt.x,pe.position.z+=t-tt.z,tt.x=n,tt.z=t)},fruits:()=>[...Qr.values()].filter(n=>n.visible).map(n=>[n.userData.key,n.position.x,n.position.z]),spots:{POND:Mn,BONES:Rn,vx:Sn,vz:bn},me:()=>Me,bub:()=>[...Xl.keys()],emo:()=>[...Gu.keys()],ghosts:()=>[...je.values()].map(n=>[ee[n.j],n.x,n.z])});function $p(){S("mini").hidden=!0,clearTimeout(Ul)}var Ul=0;S("mx").onclick=$p;S("spotact").onclick=()=>{let n=S("spotact").dataset.k,t=S("mt"),e=S("mp"),i=S("mb"),s=S("mbob"),r=l=>l.lim[n]-l.cnt[n],a=(l,c,h)=>{t.textContent=l,e.textContent=c,i.disabled=!1,i.className=h?"":"ghost",i.textContent=h?"\uD55C \uBC88 \uB354":"\uB2EB\uAE30",i.onclick=h?o:$p};if(n==="heat")return ys("heat").then(l=>{if(l){if(l.no)return ni("\uC6B0\uAC00. "+l.no);Gs=It+.5,ni("\uC6B0\uAC00! \uC54C\uC774 \uB728\uB048\uB728\uB048\uD558\uB2E4. 30\uBD84 \uB3D9\uC548 \uBA39\uC778 \uBA39\uC774\uAC00 1.5\uBC30\uB85C \uB4E4\uC5B4\uAC04\uB2E4.")}});function o(){if(S("mini").hidden=!1,i.disabled=!1,s.className=n==="dig"?"dig":"",n==="fish"){let l="wait",c=()=>{l="wait",s.className="",t.textContent="\uB09A\uC2DC \uC911",e.textContent="\uCC0C\uAC00 \uB9C8\uAD6C \uD754\uB4E4\uB9AC\uBA74 \uBC14\uB85C \uB2F9\uACA8\uC694.",i.className="ghost",i.textContent="\uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",clearTimeout(Ul),Ul=setTimeout(()=>{l="bite",s.className="bite",t.textContent="\uC9C0\uAE08!",i.className="",i.textContent="\uB2F9\uAE30\uAE30!",Ul=setTimeout(()=>{l==="bite"&&(l="miss",s.className="",t.textContent="\uB193\uCCE4\uB2E4",e.textContent="\uBB3C\uACE0\uAE30\uAC00 \uB3C4\uB9DD\uAC14\uC5B4\uC694.",i.className="ghost",i.textContent="\uB2E4\uC2DC \uB358\uC9C0\uAE30")},900)},1500+Math.random()*3e3)};i.onclick=()=>{if(l==="miss")return c();if(clearTimeout(Ul),l==="wait"){l="miss",t.textContent="\uB108\uBB34 \uBE68\uB790\uB2E4",e.textContent="\uCC0C\uAC00 \uD754\uB4E4\uB9B4 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC694.",i.textContent="\uB2E4\uC2DC \uB358\uC9C0\uAE30";return}l="done",s.className="",i.disabled=!0,t.textContent="\uB04C\uC5B4\uC62C\uB9AC\uB294 \uC911\u2026",ys("fish").then(h=>{if(!h)return a("\uC6B0\uAC00","\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uD574\uC694.");if(h.no)return a("\uC6B0\uAC00",h.no);Gs=It+.5,Ai("me"),a(h.gold?"\uD669\uAE08 \uBB3C\uACE0\uAE30!":h.item&&Vn?.items?.[h.item]?`${Vn.items[h.item].n}!`:"\uC7A1\uC558\uB2E4!",(h.item&&Vn?.items?.[h.item]?`${Ou[Vn.items[h.item].r]} \uACE0\uB300\uC5B4\uAC00 \uAC00\uBC29\uC5D0 \uB4E4\uC5B4\uAC14\uC5B4\uC694. `:"")+`\uBA39\uC774 ${h.got}\uAC1C\uB97C \uBC1B\uC558\uC5B4\uC694.`+(h.gold?" \uB9C8\uC744 \uBAA8\uB450\uC5D0\uAC8C \uC18C\uBB38\uB0AC\uC5B4\uC694.":"")+` \uC624\uB298 ${r(h)}\uBC88 \uB354 \uB09A\uC744 \uC218 \uC788\uC5B4\uC694.`,r(h)>0)})},c()}else{let l=0;t.textContent="\uD654\uC11D \uD30C\uAE30",e.textContent="\uD759\uC744 \uB2E4\uC12F \uBC88 \uD30C\uC694. \uC5B4\uB5A4 \uC870\uAC01\uC774 \uB098\uC62C\uAE4C\uC694?",i.className="",i.textContent="\uD30C\uAE30 0/5",i.onclick=()=>{l>=5||(l++,i.textContent=`\uD30C\uAE30 ${l}/5`,s.className="dig",s.offsetWidth,s.className="dig hit",!(l<5)&&(i.disabled=!0,t.textContent="\uBB54\uAC00 \uB098\uC654\uB2E4\u2026",ys("dig").then(c=>{if(!c)return a("\uC6B0\uAC00","\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uD574\uC694.");if(c.no)return a("\uC6B0\uAC00",c.no);Gs=It+.5,Ai("me"),a(`${P_[c.f]} \uD654\uC11D!`,(c.item&&Vn?.items?.[c.item]?`${Vn.items[c.item].n}(${Ou[Vn.items[c.item].r]})\uC774 \uAC00\uBC29\uC5D0 \uB4E4\uC5B4\uAC14\uC5B4\uC694. `:"")+(c.newf?"\uC0C8 \uC870\uAC01\uC774\uC5D0\uC694.":"\uC774\uBBF8 \uC788\uB294 \uC870\uAC01\uC774\uC5D0\uC694.")+` \uBA39\uC774 ${c.got}\uAC1C. \uD654\uC11D ${c.fos.length}/10.`+(c.all?" \uD654\uC11D\uC744 \uB2E4 \uBAA8\uC558\uC5B4\uC694! \uBA39\uC774 500\uAC1C\uB97C \uB354 \uBC1B\uC558\uC5B4\uC694.":"")+` \uC624\uB298 ${r(c)}\uBC88 \uB354 \uD314 \uC218 \uC788\uC5B4\uC694.`,r(c)>0)})))}}}o()};var dr=Ip.at(-2);function id(n){Lp=n,S("ride").textContent=n?"\uADF8\uB9CC":"\uC775\uB8E1",n&&(bi=null,qt.autoRotate=!1,S("card").hidden=!0,Lr())}S("ride").onclick=()=>id(!Lp);qt.addEventListener("start",()=>id(!1));var Yl=!1,fr=null;function k_(n){Yl=n,bo();let t=Wp();if(t){if(n&&!fr){fr={};let e=t.createGain();e.connect(t.destination),fr.bus=e,["calm","wind","fire"].forEach(i=>Xp(i).then(s=>{if(!s)return;let r=t.createBufferSource(),a=t.createGain();r.buffer=s,r.loop=!0,a.gain.value=i==="fire"?0:mp[i],r.connect(a).connect(e),r.start(),fr[i]=a})),setInterval(()=>{if(!Yl||!fr.fire)return;let i=tt||qt.target,s=Math.hypot(i.x,i.z);fr.fire.gain.setTargetAtTime(mp.fire*Math.max(.08,Math.min(1,1.15-s/45)),t.currentTime,.5)},400)}fr&&fr.bus.gain.setTargetAtTime(n?1:0,t.currentTime,.3),n&&t.state==="suspended"&&t.resume()}}S("snd").onclick=()=>{bo(),S("set").showModal()};var ia=xe.get("uga-set");function bo(){document.body.classList.toggle("stickr",ia.side==="r"),S("sl").classList.toggle("on",ia.side!=="r"),S("sr").classList.toggle("on",ia.side==="r"),S("son").classList.toggle("on",Yl),S("soff").classList.toggle("on",!Yl)}S("setb").onclick=()=>{bo(),S("set").showModal()};S("setx").onclick=()=>S("set").close();S("sl").onclick=()=>{ia.side="l",xe.set("uga-set",ia),bo()};S("sr").onclick=()=>{ia.side="r",xe.set("uga-set",ia),bo()};S("son").onclick=()=>k_(!0);S("soff").onclick=()=>k_(!1);bo();var gu=["#101a3c","#1f2c5c","#33427a","#3a4a80",11123967,1.6,.85,1.08,1,[60,110,-70]],_u=[[0,...gu],[5,...gu],[6.5,"#5a78b0","#c9a6b4","#f3b99a","#f2a780",16756864,2.1,.9,.98,.25,[120,42,60]],[9,"#4f95c0","#a9d2e0","#e6e2c6","#e3d2ac",16773336,2.6,1,.95,0,[80,95,60]],[15,"#4f95c0","#9cc7d3","#f3cf9f","#f0b98a",16765600,2.7,.95,.95,0,[-80,110,60]],[18,"#3f5f9c","#d99a86","#f39a62","#ee8a55",16751184,2.4,.95,1,.2,[-125,42,60]],[19.5,...gu],[24,...gu]],gr=0,Rl=new Ot,H_=new P;function LE(n){let t=_u.findIndex(o=>o[0]>n);t<1&&(t=_u.length-1);let e=_u[t-1],i=_u[t],s=(n-e[0])/(i[0]-e[0]),r=o=>"#"+ln.set(e[o]).lerp(Rl.set(i[o]),s).getHexString(),a=o=>e[o]+(i[o]-e[o])*s;Bg(r(1),r(2),r(3),r(4)),te.fog.color.set(r(4)),Ke.color.set(e[5]).lerp(Rl.set(i[5]),s),Ke.intensity=a(6),Yf.intensity=a(7),Ne.toneMappingExposure=a(8),gr=a(9),Pl.emissiveIntensity=gr*1.6,i_.material.opacity=gr,n_.color.set(16774372).lerp(Rl.set(3752042),gr),Yf.color.set(16773336).lerp(Rl.set(9675992),gr),kl.set(...e[10]).lerp(H_.set(...i[10]),s),Ff.position.copy(kl).normalize().multiplyScalar(1600),Ff.scale.setScalar(420-250*gr),Ff.material.color.set(16773568).lerp(Rl.set(14674175),gr)}var G_=In.has("hour")?+In.get("hour"):cn?15:null,Pg=n=>String(Math.floor(n)).padStart(2,"0");function V_(){let n=new Date,t=G_??n.getHours()+n.getMinutes()/60;LE(t),S("clock").textContent=`${t<5||t>=19.5?"\uBC24":t<7?"\uC0C8\uBCBD":t<17?"\uB0AE":"\uC800\uB141"} ${Pg(t)}:${Pg(t%1*60)}`}V_();G_==null&&setInterval(V_,3e4);var xu=new cl,Vu={x:0,y:0},ta=new Map(Ol.filter(Boolean).flatMap(n=>[[n.hi.im,n.hi.id],[n.lo.im,n.lo.id]]));Ne.domElement.addEventListener("pointerdown",n=>{Vu.x=n.clientX,Vu.y=n.clientY});Ne.domElement.addEventListener("pointerup",n=>{if(Math.hypot(n.clientX-Vu.x,n.clientY-Vu.y)>6)return;if(tt)return xE(n.clientX,n.clientY);if(xu.setFromCamera(new pt(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),pe),xu.intersectObject(Pn,!0).length)return Dp();ta.forEach((i,s)=>s.computeBoundingSphere());let t=fg.length?xu.intersectObjects(fg)[0]:null;if(t)return Fb(t.instanceId+1);let e=xu.intersectObjects([...cb,...ta.keys()])[0];e&&Ci(ta.has(e.object)?ta.get(e.object)[e.instanceId]:e.instanceId)});{let n=(In.get("from")||"").replace(/^@/,"");/^[\w.]{1,30}$/.test(n)&&Xn(n)>=0&&!Qe&&!cn&&(!xe.get("uga-from").id&&!Ut.srv&&xe.set("uga-from",{id:ee[Xn(n)]}),S("ifrom").hidden=!1,S("ifrom").textContent=`@${ee[Xn(n)]} \uB2D8\uC774 \uBD88\uB800\uC5B4\uC694. \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${Cu}\uAC1C\uB97C \uBC1B\uC544\uC694.`)}var Kr=(()=>{try{return!Qe&&!cn&&localStorage.getItem("uga-id")}catch{return null}})();In.get("id")?Iu(In.get("id")):Kr&&Iu(Kr)||cn||(S("intro").hidden=!1,document.body.classList.add("intro"));{let n=pr[(Kr||"").toLowerCase()],t="uga-aw1116"+(n?"me":""),e=["\uC9C0\uAE08 \uBB34\uC9C0\uAC1C \uACF5\uB8E1\uC73C\uB85C \uBCC0\uC2E0","\uACF5\uB8E1 \uACE0\uB974\uAE30\uAD8C","\uC54C \uC774\uB984 \uBD99\uC774\uAE30\uAD8C"],i=[`@${Kr} \uB2D8\uC774 \uBA39\uC774 1\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uB0B4 \uACF5\uB8E1\uC774 \uC9C0\uAE08 \uBB34\uC9C0\uAC1C \uACF5\uB8E1\uC774 \uB410\uC5B4\uC694. \uB0B4 \uC9D1\uC5D0 \uAC00\uC11C \uC0C9\uC774 \uB3C4\uB294 \uAC78 \uBD10 \uC8FC\uC138\uC694.`,`@${Kr} \uB2D8\uC774 \uBA39\uC774 2\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uB0B4 \uACF5\uB8E1\uC744 \uC9C1\uC811 \uACE0\uB97C \uC218 \uC788\uC5B4\uC694. ${tn.slice(0,10).join(", ")} \uC911 \uD558\uB098\uB97C \uACE8\uB77C \uC778\uC2A4\uD0C0 @ugauga_village\uC5D0 DM\uC73C\uB85C \uBCF4\uB0B4 \uC8FC\uC138\uC694.`,`@${Kr} \uB2D8\uC774 \uBA39\uC774 3\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uB0B4 \uC54C\uC5D0 \uC774\uB984\uC744 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694. 6\uAE00\uC790 \uC548\uCABD \uC774\uB984\uC744 \uC778\uC2A4\uD0C0 @ugauga_village\uC5D0 DM\uC73C\uB85C \uBCF4\uB0B4 \uC8FC\uC138\uC694. \uC9C4\uC9DC \uC774\uB984, \uD559\uAD50, \uB098\uC05C \uB9D0\uC740 \uB123\uC744 \uC218 \uC5C6\uC5B4\uC694.`];n?.name&&(i[2]=`@${Kr} \uB2D8\uC774 \uBA39\uC774 3\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uBC1B\uC740 \uC54C \uC774\uB984\uC740 '${n.name}'\uB85C \uBD99\uC600\uC5B4\uC694. \uB0B4 \uC9D1\uC5D0 \uAC00\uC11C \uC774\uB984\uD45C\uB97C \uBD10 \uC8FC\uC138\uC694.`),!Qe&&!cn&&oa<="2026-11-19"&&!xe.get(t).seen&&(S("awme").hidden=!n,n&&(S("awme").textContent=i[n.rank-1]),S("awlist").replaceChildren(...Object.keys(pr).sort((s,r)=>pr[s].rank-pr[r].rank).map(s=>Object.assign(document.createElement("li"),{textContent:`@${s} \xB7 ${e[pr[s].rank-1]}`+(pr[s].name?` \u2192 '${pr[s].name}'`:"")}))),S("award").onclose=()=>xe.set(t,{seen:1}),S("awx").onclick=()=>S("award").close(),S("award").showModal())}var DE=0,Wf=0,Ig=0,yu=0,Xf=0,Lg=performance.now(),It=0;function W_(n){It+=n,Vg.value=It,Eb(It);for(let e of Ip){let i=e.a0+It*e.w,s=Math.sign(e.w);e.o.position.set(Math.cos(i)*e.R,e.y,Math.sin(i)*e.R),e.o.rotation.y=Math.atan2(-Math.cos(i)*s,-Math.sin(i)*s),e.o.userData.legs?.forEach((r,a)=>{r.rotation.z=Math.sin(It*e.gait+(a===1||a===2?Math.PI:0))*.45}),e.o.userData.wings?.forEach((r,a)=>{r.rotation.x=Math.sin(It*5)*.5*(a?1:-1)})}if(tt&&(Qb(n,It),qb()),tE(n),yr.rotation.y=It*2,yr.position.y=1.1+Math.sin(It*3)*.15,tt&&yr.visible&&Math.hypot(tt.x-yr.position.x,tt.z-yr.position.z)<2.6&&Pb(),hb.forEach(e=>Hg.forEach(i=>{i.setColorAt(e,ln.setHSL((It*.08+e*.37)%1,.55,.82)),i.instanceColor.needsUpdate=!0})),xr){let e=It-xr.t0,i=e<1.4?Math.sin(e*18)*.28*(1-e/1.4):0;Hs.forEach(s=>{s.setMatrixAt(xr.i,ca.copy(s.userData.mats[xr.i]).multiply(Kb.makeRotationZ(i)).multiply(s.userData.L)),s.instanceMatrix.needsUpdate=!0}),e>=1.4&&(xr=null)}(Ve||tt||je.size||DE++%20===0)&&yb(It),vu.forEach((e,i)=>{let s=(It*.06+i/8)%1;e.position.set(Sn+s*40,90+s*90,bn),e.scale.setScalar(26+s*70),e.material.opacity=.75*(1-s)}),Tb.forEach((e,i)=>{e.scale.set(1+Math.sin(It*9+i)*.08,.85+Math.sin(It*13+i*2)*.12+Math.sin(It*7.3+i)*.08,1),e.rotation.y=It*(i+1)}),Rp.intensity=(110+Math.sin(It*11)*25)*(1+gr*1.5);let t=Pp.attributes.position;for(let e=0;e<s_;e++){let i=(It*(.25+Pe(e)*.3)+Pe(e,1))%1;t.setXYZ(e,Math.sin(e*2.4+It)*(.3+i*1.2),1+i*6,Math.cos(e*1.7+It*.8)*(.3+i*1.2))}if(t.needsUpdate=!0,Kg.scale.setScalar(1+Math.sin(It*3)*.08),tt&&tt.i<0||(Pn.position.y=Math.abs(Math.sin(It*2.5))*.15),Pn.userData.club.rotation.z=2.4+Math.sin(It*2.5)*.3,wu.position.set(Pn.position.x,5.9,Pn.position.z),IE(n),Lp){let e=dr.a0+It*dr.w-Math.sign(dr.w)*20/dr.R,i=1-Math.exp(-n*3);qt.target.lerp(dr.o.position,i),pe.position.lerp(H_.set(Math.cos(e)*(dr.R+5),dr.y+7,Math.sin(e)*(dr.R+5)),i)}}cn&&(window.dbg={renderer:Ne,scene:te,sun:Ke,ground:ab,camera:pe,jump:()=>{bi&&(pe.position.copy(bi.p),qt.target.copy(bi.t),bi=null)}},window.bench=(n=30)=>{let t=Ne.getContext(),e=new Uint8Array(4),i=performance.now();for(let s=0;s<n;s++)W_(1/60),Ke.shadow.needsUpdate=s%2===0,Ne.render(te,pe),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,e);return+((performance.now()-i)/n).toFixed(1)});Ne.setAnimationLoop(n=>{let t=Math.min((n-Lg)/1e3,.1);if(Lg=n,Ke.shadow.needsUpdate=Wf%(Ei?4:2)===0,W_(t),bi){let e=1-Math.exp(-t*4);pe.position.lerp(bi.p,e),qt.target.lerp(bi.t,e),pe.position.distanceTo(bi.p)<.1&&(bi=null)}if(!tt){let e=qt.target,i=Math.hypot(e.x,e.z),s=ae+120;if(i>s){let r=e.x*(s/i-1),a=e.z*(s/i-1);e.x+=r,e.z+=a,pe.position.x+=r,pe.position.z+=a}e.y=Math.min(Math.max(e.y,0),12)}qt.update(),i_.position.copy(pe.position),Ke.target.position.set(Math.round(qt.target.x/4)*4,0,Math.round(qt.target.z/4)*4),Ke.position.copy(Ke.target.position).add(kl),Wf++%10===0&&Cb(),Ne.render(te,pe),Wf===2&&(clearInterval(window.loadTick),S("load").classList.add("done"),setTimeout(()=>S("load").remove(),600)),Xf++,yu+=t,yu>1&&(Ig=Math.round(Xf/yu),Xf=yu=0,cn&&(document.title=`${Ig}fps \xB7 ${Ne.info.render.calls} calls \xB7 ${Math.round(Ne.info.render.triangles/1e3)}k tris`))});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
