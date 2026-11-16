var Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},em=0,dd=1,nm=2;var Wo=1,im=2,La=3,$s=0,zn=1,kn=2,Tr=0,Da=1,wr=2,fd=3,pd=4,sm=5;var Ar=100,rm=101,am=102,om=103,lm=104,cm=200,hm=201,um=202,dm=203,md=204,gd=205,fm=206,pm=207,mm=208,gm=209,_m=210,xm=211,ym=212,vm=213,Mm=214,lc=0,cc=1,hc=2,fa=3,uc=4,dc=5,fc=6,pc=7,_d=0,Sm=1,bm=2,Zi=0,xd=1,yd=2,vd=3,Na=4,Md=5,Sd=6,bd=7;var Ed=300,Rr=301,Ua=302,Vc=303,Wc=304,pa=1e3,Gi=1001,mc=1002,ln=1003,Em=1004;var Xo=1005;var Un=1006,Xc=1007;var _s=1008;var Yn=1009,Td=1010,wd=1011,Oa=1012,qc=1013,Li=1014,Si=1015,Di=1016,$c=1017,Yc=1018,Cr=1020,Ad=35902,Rd=35899,Cd=1021,Pd=1022,Ni=1023,ds=1026,xs=1027,Zc=1028,Jc=1029,Ys=1030,Kc=1031;var jc=1033,qo=33776,$o=33777,Yo=33778,Zo=33779,Qc=35840,th=35841,eh=35842,nh=35843,ih=36196,sh=37492,rh=37496,ah=37488,oh=37489,Jo=37490,lh=37491,ch=37808,hh=37809,uh=37810,dh=37811,fh=37812,ph=37813,mh=37814,gh=37815,_h=37816,xh=37817,yh=37818,vh=37819,Mh=37820,Sh=37821,bh=36492,Eh=36494,Th=36495,wh=36283,Ah=36284,Ko=36285,Rh=36286;var xo=2300,gc=2301,ac=2302,nd=2303,id=2400,sd=2401,rd=2402;var Tm=3200;var Ch=0,wm=1,ys="",an="srgb",yo="srgb-linear",vo="linear",de="srgb";var oc=7680;var Am=519,Rm=512,Cm=513,Pm=514,Id=515,Im=516,Lm=517,Ld=518,Dd=519,Nd=35044,Ud=35048;var Od="300 es",vi=2e3,ma=2001;function e_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function n_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dm(){let i=Mo("canvas");return i.style.display="block",i}var yp={},ga=null;function So(...i){let t="THREE."+i.shift();ga?ga("log",t,...i):console.log(t,...i)}function Nm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Nm(i);let t="THREE."+i.shift();if(ga)ga("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=Nm(i);let t="THREE."+i.shift();if(ga)ga("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fo(...i){let t=i.join(" ");t in yp||(yp[t]=!0,Ot(...i))}function Um(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Om={[lc]:lc,[hc]:fc,[uc]:uc,[fa]:dc,[cc]:cc,[fc]:hc,[pc]:pc,[dc]:fa},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vp=1234567,po=Math.PI/180,_a=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Fd(i,t){return(i%t+t)%t}function i_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function s_(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function r_(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function a_(i,t=1){return t-Math.abs(Fd(i,t*2)-t)}function o_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function l_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function c_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function h_(i,t){return i+Math.random()*(t-i)}function u_(i){return i*(.5-Math.random())}function d_(i){i!==void 0&&(vp=i);let t=vp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function f_(i){return i*po}function p_(i){return i*_a}function m_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function g_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function __(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ph(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zd(i,t){if(t.constructor===Float32Array)return i;let e=Ph(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function kd(i,t){if(t.constructor===Float32Array)return i;let e=Ph(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Hd={DEG2RAD:po,RAD2DEG:_a,generateUUID:Zs,clamp:Jt,euclideanModulo:Fd,mapLinear:i_,inverseLerp:s_,lerp:mo,damp:r_,pingpong:a_,smoothstep:o_,smootherstep:l_,randInt:c_,randFloat:h_,randFloatSpread:u_,seededRandom:d_,degToRad:f_,radToDeg:p_,isPowerOfTwo:m_,ceilPowerOfTwo:g_,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:__,normalize:kd,denormalize:zd},pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let x=Math.acos(m),E=Math.sin(x);p=Math.sin(p*x)/E,o=Math.sin(o*x)/E,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lu.copy(this).projectOnVector(t),this.sub(Lu)}reflect(t){return this.sub(Lu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lu=new L,Mp=new cn,Ht=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],E=s[4],M=s[7],R=s[2],T=s[5],_=s[8];return r[0]=a*v+o*x+l*R,r[3]=a*m+o*E+l*T,r[6]=a*p+o*M+l*_,r[1]=c*v+h*x+d*R,r[4]=c*m+h*E+d*T,r[7]=c*p+h*M+d*_,r[2]=u*v+f*x+g*R,r[5]=u*m+f*E+g*T,r[8]=u*p+f*M+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Du.makeScale(t,e)),this}rotate(t){return fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Du.makeRotation(-t)),this}translate(t,e){return fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Du=new Ht,Sp=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x_(){let i={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=da(s.r),s.g=da(s.g),s.b=da(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ys?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yo]:{primaries:t,whitePoint:n,transfer:vo,toXYZ:Sp,fromXYZ:bp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Sp,fromXYZ:bp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var ne=x_();function us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yr,_c=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yr===void 0&&(Yr=Mo("canvas")),Yr.width=t.width,Yr.height=t.height;let s=Yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=us(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},y_=0,xa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nu(s[a].image)):r.push(Nu(s[a]))}else r=Nu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var v_=0,Uu=new L,On=class i extends Ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Un,a=_s,o=Ni,l=Yn,c=i.DEFAULT_ANISOTROPY,h=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Zs(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ed;On.DEFAULT_ANISOTROPY=1;var Te=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(f+1)/2,R=(p+1)/2,T=(h+u)/4,_=(d+v)/4,b=(g+m)/4;return E>M&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=b/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new On({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bo=class extends On{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends On{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Vt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),r=1/Zr.setFromMatrixColumn(t,1).length(),a=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M_,t,S_)}lookAt(t,e,n){let s=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ls.crossVectors(n,ii),Ls.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ls.crossVectors(n,ii)),Ls.normalize(),Nl.crossVectors(ii,Ls),s[0]=Ls.x,s[4]=Nl.x,s[8]=ii.x,s[1]=Ls.y,s[5]=Nl.y,s[9]=ii.y,s[2]=Ls.z,s[6]=Nl.z,s[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],E=n[7],M=n[11],R=n[15],T=s[0],_=s[4],b=s[8],N=s[12],C=s[1],I=s[5],O=s[9],H=s[13],P=s[2],G=s[6],X=s[10],V=s[14],nt=s[3],$=s[7],Q=s[11],et=s[15];return r[0]=a*T+o*C+l*P+c*nt,r[4]=a*_+o*I+l*G+c*$,r[8]=a*b+o*O+l*X+c*Q,r[12]=a*N+o*H+l*V+c*et,r[1]=h*T+d*C+u*P+f*nt,r[5]=h*_+d*I+u*G+f*$,r[9]=h*b+d*O+u*X+f*Q,r[13]=h*N+d*H+u*V+f*et,r[2]=g*T+v*C+m*P+p*nt,r[6]=g*_+v*I+m*G+p*$,r[10]=g*b+v*O+m*X+p*Q,r[14]=g*N+v*H+m*V+p*et,r[3]=x*T+E*C+M*P+R*nt,r[7]=x*_+E*I+M*G+R*$,r[11]=x*b+E*O+M*X+R*Q,r[15]=x*N+E*H+M*V+R*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],x=l*f-c*u,E=o*f-c*d,M=o*u-l*d,R=a*f-c*h,T=a*u-l*h,_=a*d-o*h;return e*(v*x-m*E+p*M)-n*(g*x-m*R+p*T)+s*(g*E-v*R+p*_)-r*(g*M-v*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=e*o-n*a,E=e*l-s*a,M=e*c-r*a,R=n*l-s*o,T=n*c-r*o,_=s*c-r*l,b=h*v-d*g,N=h*m-u*g,C=h*p-f*g,I=d*m-u*v,O=d*p-f*v,H=u*p-f*m,P=x*H-E*O+M*I+R*C-T*N+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return t[0]=(o*H-l*O+c*I)*G,t[1]=(s*O-n*H-r*I)*G,t[2]=(v*_-m*T+p*R)*G,t[3]=(u*T-d*_-f*R)*G,t[4]=(l*C-a*H-c*N)*G,t[5]=(e*H-s*C+r*N)*G,t[6]=(m*M-g*_-p*E)*G,t[7]=(h*_-u*M+f*E)*G,t[8]=(a*O-o*C+c*b)*G,t[9]=(n*C-e*O-r*b)*G,t[10]=(g*T-v*M+p*x)*G,t[11]=(d*M-h*T-f*x)*G,t[12]=(o*N-a*I-l*b)*G,t[13]=(e*I-n*N+s*b)*G,t[14]=(v*E-g*R-m*x)*G,t[15]=(h*R-d*E+u*x)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,x=l*c,E=l*h,M=l*d,R=n.x,T=n.y,_=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+M)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(m-x)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zr.set(s[0],s[1],s[2]).length(),o=Zr.set(s[4],s[5],s[6]).length(),l=Zr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ri.copy(this);let c=1/a,h=1/o,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,e.setFromRotationMatrix(Ri),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===vi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ma)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===vi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ma)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zr=new L,Ri=new Vt,M_=new L(0,0,0),S_=new L(1,1,1),Ls=new L,Nl=new L,ii=new L,Ep=new Vt,Tp=new cn,qn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ep,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},b_=0,wp=new L,Jr=new cn,rs=new Vt,Ul=new L,io=new L,E_=new L,T_=new cn,Ap=new L(1,0,0),Rp=new L(0,1,0),Cp=new L(0,0,1),Pp={type:"added"},w_={type:"removed"},Kr={type:"childadded",child:null},Ou={type:"childremoved",child:null},hn=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new qn,n=new cn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Ht}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Ap,t)}rotateY(t){return this.rotateOnAxis(Rp,t)}rotateZ(t){return this.rotateOnAxis(Cp,t)}translateOnAxis(t,e){return wp.copy(t).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ap,t)}translateY(t){return this.translateOnAxis(Rp,t)}translateZ(t){return this.translateOnAxis(Cp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ul.copy(t):Ul.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(io,Ul,this.up):rs.lookAt(Ul,io,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(rs),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pp),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(w_),Ou.child=t,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pp),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,E_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,T_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new L(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Fu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Fd(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fu(a,r,t+1/3),this.g=Fu(a,r,t),this.b=Fu(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=Fm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ne.workingToColorSpace(wn.copy(this),t),Math.round(Jt(wn.r*255,0,255))*65536+Math.round(Jt(wn.g*255,0,255))*256+Math.round(Jt(wn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(wn.copy(this),e);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=an){ne.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,s=wn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(Ol);let n=mo(Ds.h,Ol.h,e),s=mo(Ds.s,Ol.s,e),r=mo(Ds.l,Ol.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Bt;Bt.NAMES=Fm;var Eo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ma=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ci=new L,as=new L,Bu=new L,os=new L,jr=new L,Qr=new L,Ip=new L,zu=new L,ku=new L,Hu=new L,Gu=new Te,Vu=new Te,Wu=new Te,hs=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ci.subVectors(t,e),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ci.subVectors(s,e),as.subVectors(n,e),Bu.subVectors(t,e);let a=Ci.dot(Ci),o=Ci.dot(as),l=Ci.dot(Bu),c=as.dot(as),h=as.dot(Bu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,os.x),l.addScaledVector(a,os.y),l.addScaledVector(o,os.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Gu.setScalar(0),Vu.setScalar(0),Wu.setScalar(0),Gu.fromBufferAttribute(t,e),Vu.fromBufferAttribute(t,n),Wu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Gu,r.x),a.addScaledVector(Vu,r.y),a.addScaledVector(Wu,r.z),a}static isFrontFacing(t,e,n,s){return Ci.subVectors(n,e),as.subVectors(t,e),Ci.cross(as).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Ci.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;jr.subVectors(s,n),Qr.subVectors(r,n),zu.subVectors(t,n);let l=jr.dot(zu),c=Qr.dot(zu);if(l<=0&&c<=0)return e.copy(n);ku.subVectors(t,s);let h=jr.dot(ku),d=Qr.dot(ku);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(jr,a);Hu.subVectors(t,r);let f=jr.dot(Hu),g=Qr.dot(Hu);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Qr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ip.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Ip,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(jr,a).addScaledVector(Qr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pi):Pi.fromBufferAttribute(r,a),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fl.copy(n.boundingBox)),Fl.applyMatrix4(t.matrixWorld),this.union(Fl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),Bl.subVectors(this.max,so),ta.subVectors(t.a,so),ea.subVectors(t.b,so),na.subVectors(t.c,so),Ns.subVectors(ea,ta),Us.subVectors(na,ea),vr.subVectors(ta,na);let e=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-vr.z,vr.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,vr.z,0,-vr.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-vr.y,vr.x,0];return!Xu(e,ta,ea,na,Bl)||(e=[1,0,0,0,1,0,0,0,1],!Xu(e,ta,ea,na,Bl))?!1:(zl.crossVectors(Ns,Us),e=[zl.x,zl.y,zl.z],Xu(e,ta,ea,na,Bl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ls=[new L,new L,new L,new L,new L,new L,new L,new L],Pi=new L,Fl=new Vi,ta=new L,ea=new L,na=new L,Ns=new L,Us=new L,vr=new L,so=new L,Bl=new L,zl=new L,Mr=new L;function Xu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mr.fromArray(i,r);let o=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),h=n.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new L,kl=new pt,R_=0,Nn=class extends Ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nd,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=t!==void 0?Ph(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kl.fromBufferAttribute(this,e),kl.applyMatrix3(t),this.setXY(e,kl.x,kl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):zd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):kd(t,this.array)}};var To=class extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wo=class extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},C_=new Vi,ro=new L,qu=new L,fs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):C_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(qu)),this.expandByPoint(ro.copy(t.center).sub(qu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},P_=0,yi=new Vt,$u=new hn,ia=new L,si=new Vi,ao=new Vi,rn=new L,Fe=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e_(t)?wo:To)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return $u.lookAt(t),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(si.min,ao.min),si.expandByPoint(rn),rn.addVectors(si.max,ao.max),si.expandByPoint(rn)):(si.expandByPoint(ao.min),si.expandByPoint(ao.max))}si.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(ia.fromBufferAttribute(t,c),rn.add(ia)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new L,l[N]=new L;let h=new L,d=new L,u=new L,f=new pt,g=new pt,v=new pt,m=new L,p=new L;function x(N,C,I){c[N]=c[C]=c[I]=1,h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,I),d.sub(h),u.sub(h),g.sub(f),v.sub(f);let O=1/(g.x*v.y-v.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(O),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(O),o[N].add(m),o[C].add(m),o[I].add(m),l[N].add(p),l[C].add(p),l[I].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,C=E.length;N<C;++N){let I=E[N],O=I.start,H=I.count;for(let P=O,G=O+H;P<G;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new L,R=new L,T=new L,_=new L;function b(N){T.fromBufferAttribute(s,N),_.copy(T);let C=o[N];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),R.crossVectors(_,C);let O=R.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,O)}for(let N=0,C=n.count;N<C;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Nn(u,h,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nd,this.updateRanges=[],this.version=0,this.uuid=Zs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Lp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Lp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Lp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Zs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Dn=new L,Ao=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Ph(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix4(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyNormalMatrix(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.transformDirection(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):zd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):kd(t,this.data.array)}},Yu=new L,I_=new L,L_=new Ht,ri=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yu.subVectors(n,e).cross(I_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Yu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||L_.getNormalMatrix(t),s=this.coplanarPoint(Yu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},D_=0,Wi=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Da,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ps=class extends Wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sa,oo=new L,ra=new L,aa=new L,oa=new pt,lo=new pt,Bm=new Vt,Hl=new L,co=new L,Gl=new L,Dp=new pt,Zu=new pt,Np=new pt,Fs=class extends hn{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",sa===void 0){sa=new Fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vc(e,5);sa.setIndex([0,1,2,0,2,3]),sa.setAttribute("position",new Ao(n,3,0,!1)),sa.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=sa,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ra.setFromMatrixScale(this.matrixWorld),Bm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),aa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ra.multiplyScalar(-aa.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Vl(Hl.set(-.5,-.5,0),aa,a,ra,s,r),Vl(co.set(.5,-.5,0),aa,a,ra,s,r),Vl(Gl.set(.5,.5,0),aa,a,ra,s,r),Dp.set(0,0),Zu.set(1,0),Np.set(1,1);let o=t.ray.intersectTriangle(Hl,co,Gl,!1,oo);if(o===null&&(Vl(co.set(-.5,.5,0),aa,a,ra,s,r),Zu.set(0,1),o=t.ray.intersectTriangle(Hl,Gl,co,!1,oo),o===null))return;let l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:hs.getInterpolation(oo,Hl,co,Gl,Dp,Zu,Np,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Vl(i,t,e,n,s,r){oa.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lo.x=r*oa.x-s*oa.y,lo.y=s*oa.x+r*oa.y):lo.copy(oa),i.copy(t),i.x+=lo.x,i.y+=lo.y,i.applyMatrix4(Bm)}var cs=new L,Ju=new L,Wl=new L,Xl=new L,Bs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cs.copy(this.origin).addScaledVector(this.direction,e),cs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ju.copy(t).add(e).multiplyScalar(.5),Wl.copy(e).sub(t).normalize(),Xl.copy(this.origin).sub(Ju);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wl),o=Xl.dot(this.direction),l=-Xl.dot(Wl),c=Xl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ju).addScaledVector(Wl,u),f}intersectSphere(t,e){if(t.radius<0)return null;cs.subVectors(t.center,this.origin);let n=cs.dot(this.direction),s=cs.dot(cs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,cs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,x=n.y-a.y,E=n.z-a.z,M=Math.abs(l),R=Math.abs(c),T=Math.abs(h),_,b,N,C,I,O,H,P,G,X,V,nt;if(M>=R&&M>=T?(N=l,O=d,G=g,nt=p,l>=0?(_=c,b=h,C=u,I=f,H=v,P=m,X=x,V=E):(_=h,b=c,C=f,I=u,H=m,P=v,X=E,V=x)):R>=T?(N=c,O=u,G=v,nt=x,c>=0?(_=h,b=l,C=f,I=d,H=m,P=g,X=E,V=p):(_=l,b=h,C=d,I=f,H=g,P=m,X=p,V=E)):(N=h,O=f,G=m,nt=E,h>=0?(_=l,b=c,C=d,I=u,H=g,P=v,X=p,V=x):(_=c,b=l,C=u,I=d,H=v,P=g,X=x,V=p)),N===0)return null;let $=_/N,Q=b/N,et=1/N,At=C-$*O,Wt=I-Q*O,J=H-$*G,xt=P-Q*G,Et=X-$*nt,Nt=V-Q*nt,yt=Et*xt-Nt*J,$t=At*Nt-Wt*Et,ke=J*Wt-xt*At;if(s){if(yt<0||$t<0||ke<0)return null}else if((yt<0||$t<0||ke<0)&&(yt>0||$t>0||ke>0))return null;let zt=yt+$t+ke;if(zt===0)return null;let fe=et*(yt*O+$t*G+ke*nt);return(zt>0?fe<0:fe>0)?null:this.at(fe/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zs=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Up=new Vt,Sr=new Bs,ql=new fs,Op=new L,$l=new L,Yl=new L,Zl=new L,Ku=new L,Jl=new L,Fp=new L,Kl=new L,$n=class extends hn{constructor(t=new Fe,e=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ku.fromBufferAttribute(d,t),a?Jl.addScaledVector(Ku,h):Jl.addScaledVector(Ku.sub(e),h))}e.add(Jl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(r),Sr.copy(t.ray).recast(t.near),!(ql.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(ql,Op)===null||Sr.origin.distanceToSquared(Op)>(t.far-t.near)**2))&&(Up.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(Up),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,R=E;M<R;M+=3){let T=o.getX(M),_=o.getX(M+1),b=o.getX(M+2);s=jl(this,p,t,n,c,h,d,T,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=jl(this,a,t,n,c,h,d,x,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,R=E;M<R;M+=3){let T=M,_=M+1,b=M+2;s=jl(this,p,t,n,c,h,d,T,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=m,E=m+1,M=m+2;s=jl(this,a,t,n,c,h,d,x,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function N_(i,t,e,n,s,r,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$s,o),l===null)return null;Kl.copy(o),Kl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kl);return c<e.near||c>e.far?null:{distance:c,point:Kl.clone(),object:i}}function jl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$l),i.getVertexPosition(l,Yl),i.getVertexPosition(c,Zl);let h=N_(i,t,e,n,$l,Yl,Zl,Fp);if(h){let d=new L;hs.getBarycoord(Fp,$l,Yl,Zl,d),s&&(h.uv=hs.getInterpolatedAttribute(s,o,l,c,d,new pt)),r&&(h.uv1=hs.getInterpolatedAttribute(r,o,l,c,d,new pt)),a&&(h.normal=hs.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};hs.getNormal($l,Yl,Zl,u.normal),h.face=u,h.barycoord=d}return h}var Ro=class extends On{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ln,h=ln,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=class extends Nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},la=new Vt,Bp=new Vt,Ql=[],zp=new Vi,U_=new Vt,ho=new $n,uo=new fs,ks=class extends $n{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,U_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,la),zp.copy(t.boundingBox).applyMatrix4(la),this.boundingBox.union(zp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,la),uo.copy(t.boundingSphere).applyMatrix4(la),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,la),Bp.multiplyMatrices(n,la),ho.matrixWorld=Bp,ho.raycast(t,Ql);for(let a=0,o=Ql.length;a<o;a++){let l=Ql[a];l.instanceId=r,l.object=this,e.push(l)}Ql.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,Zc,Si));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},br=new fs,O_=new pt(.5,.5),tc=new L,Hs=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],E=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,p-g,R-x).normalize(),s[1].setComponents(c+a,f+h,p+g,R+x).normalize(),s[2].setComponents(c+o,f+d,p+v,R+E).normalize(),s[3].setComponents(c-o,f-d,p-v,R-E).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,R-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-M).normalize(),e===vi)s[5].setComponents(c+l,f+u,p+m,R+M).normalize();else if(e===ma)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);let e=O_.distanceTo(t.center);return br.radius=.7071067811865476+e,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(tc.x=s.normal.x>0?t.max.x:t.min.x,tc.y=s.normal.y>0?t.max.y:t.min.y,tc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kp=new Vt,Mc=class i{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];kp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Hs),n[s].setFromProjectionMatrix(kp,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Hs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Er=class extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hp=new Vt,ad=new Bs,ec=new fs,nc=new L,Sa=class extends hn{constructor(t=new Fe,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,t.ray.intersectsSphere(ec)===!1)return;Hp.copy(s).invert(),ad.copy(t.ray).applyMatrix4(Hp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);nc.fromBufferAttribute(d,m),Gp(nc,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)nc.fromBufferAttribute(d,g),Gp(nc,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gp(i,t,e,n,s,r,a){let o=ad.distanceSqToPoint(i);if(o<e){let l=new L;ad.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Co=class extends On{constructor(t=[],e=Rr,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gs=class extends On{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends On{constructor(t,e,n=Li,s,r,a,o=ln,l=ln,c,h=ds,d=1){if(h!==ds&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Po=class extends ms{constructor(t,e=Li,n=Rr,s,r,a=ln,o=ln,l,c=ds){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Io=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function g(v,m,p,x,E,M,R,T,_,b,N){let C=M/_,I=R/b,O=M/2,H=R/2,P=T/2,G=_+1,X=b+1,V=0,nt=0,$=new L;for(let Q=0;Q<X;Q++){let et=Q*I-H;for(let At=0;At<G;At++){let Wt=At*C-O;$[v]=Wt*x,$[m]=et*E,$[p]=P,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(At/_),d.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let et=0;et<_;et++){let At=u+et+G*Q,Wt=u+et+G*(Q+1),J=u+(et+1)+G*(Q+1),xt=u+(et+1)+G*Q;l.push(At,Wt,xt),l.push(Wt,J,xt),nt+=6}o.addGroup(f,nt,N),f+=nt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Lo=class i extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qi=class i extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function x(){let M=new L,R=new L,T=0,_=(e-t)/n;for(let b=0;b<=r;b++){let N=[],C=b/r,I=C*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,P=H*l+o,G=Math.sin(P),X=Math.cos(P);R.x=I*G,R.y=-C*n+m,R.z=I*X,d.push(R.x,R.y,R.z),M.set(G,_,X).normalize(),u.push(M.x,M.y,M.z),f.push(H,1-C),N.push(g++)}v.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let C=v[N][b],I=v[N+1][b],O=v[N+1][b+1],H=v[N][b+1];(t>0||N!==0)&&(h.push(C,I,H),T+=3),(e>0||N!==r-1)&&(h.push(I,O,H),T+=3)}c.addGroup(p,T,0),p+=T}function E(M){let R=g,T=new pt,_=new L,b=0,N=M===!0?t:e,C=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let I=g;for(let O=0;O<=s;O++){let P=O/s*l+o,G=Math.cos(P),X=Math.sin(P);_.x=N*X,_.y=m*C,_.z=N*G,d.push(_.x,_.y,_.z),u.push(0,C,0),T.x=G*.5+.5,T.y=X*.5*C+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let H=R+O,P=I+O;M===!0?h.push(P,P+1,H):h.push(P+1,P,H),b+=3}c.addGroup(p,b,M===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vs=class i extends qi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Do=class i extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new L,M=new L,R=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],M),f(e[T+2],R),l(E,M,R,x)}function l(x,E,M,R){let T=R+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let N=x.clone().lerp(M,b/T),C=E.clone().lerp(M,b/T),I=T-b;for(let O=0;O<=I;O++)O===0&&b===T?_[b][O]=N:_[b][O]=N.clone().lerp(C,O/I)}for(let b=0;b<T;b++)for(let N=0;N<2*(T-b)-1;N++){let C=Math.floor(N/2);N%2===0?(u(_[b][C+1]),u(_[b+1][C]),u(_[b][C])):(u(_[b][C+1]),u(_[b+1][C+1]),u(_[b+1][C]))}}function c(x){let E=new L;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(x),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let x=new L;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let M=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(M,1-R)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){let E=a[x+0],M=a[x+2],R=a[x+4],T=Math.max(E,M,R),_=Math.min(E,M,R);T>.9&&_<.1&&(E<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,E){let M=x*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){let x=new L,E=new L,M=new L,R=new L,T=new pt,_=new pt,b=new pt;for(let N=0,C=0;N<r.length;N+=9,C+=6){x.set(r[N+0],r[N+1],r[N+2]),E.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),R.copy(x).add(E).add(M).divideScalar(3);let I=m(R);v(T,C+0,x,I),v(_,C+2,E,I),v(b,C+4,M,I)}}function v(x,E,M,R){R<0&&x.x===1&&(a[E]=x.x-1),M.x===0&&M.z===0&&(a[E]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ba=class i extends Do{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new Vt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},No=class extends Mi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sc=class extends No{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gd(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Vp=new L,Wp=new L,ju=new Gd,Qu=new Gd,td=new Gd,Ea=class extends Mi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Wp.subVectors(s[0],s[1]).add(s[0]),c=Wp);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Vp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ju.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Qu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),td.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ju.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Qu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),td.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ju.calc(l),Qu.calc(l),td.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xp(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function F_(i,t){let e=1-i;return e*e*t}function B_(i,t){return 2*(1-i)*i*t}function z_(i,t){return i*i*t}function go(i,t,e,n){return F_(i,t)+B_(i,e)+z_(i,n)}function k_(i,t){let e=1-i;return e*e*e*t}function H_(i,t){let e=1-i;return 3*e*e*i*t}function G_(i,t){return 3*(1-i)*i*i*t}function V_(i,t){return i*i*i*t}function _o(i,t,e,n,s){return k_(i,t)+H_(i,e)+G_(i,n)+V_(i,s)}var bc=class extends Mi{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_o(t,s.x,r.x,a.x,o.x),_o(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ec=class extends Mi{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_o(t,s.x,r.x,a.x,o.x),_o(t,s.y,r.y,a.y,o.y),_o(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends Mi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends Mi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends Mi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(go(t,s.x,r.x,a.x),go(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Mi{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(go(t,s.x,r.x,a.x),go(t,s.y,r.y,a.y),go(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Xp(o,l.x,c.x,h.x,d.x),Xp(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},W_=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:Ea,CubicBezierCurve:bc,CubicBezierCurve3:Ec,EllipseCurve:No,LineCurve:Tc,LineCurve3:wc,QuadraticBezierCurve:Ac,QuadraticBezierCurve3:Uo,SplineCurve:Rc});var Ta=class i extends Do{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var gs=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*u-a;for(let E=0;E<c;E++){let M=E*d-r;g.push(M,-x,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let E=x+c*p,M=x+c*(p+1),R=x+1+c*(p+1),T=x+1+c*p;f.push(E,M,T),f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Oo=class i extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new L,g=new pt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let x=p+m,E=x,M=x+n+1,R=x+n+2,T=x+1;o.push(E,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fn=class i extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],E=p/n,M=a+E*o,R=t*Math.cos(M),T=Math.sqrt(t*t-R*R),_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let N=b/e,C=s+N*r;d.x=-T*Math.cos(C),d.y=R,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(N+_,1-E),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let E=h[p][x+1],M=h[p][x],R=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&f.push(E,M,T),(p!==n-1||l<Math.PI)&&f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oi=class i extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,x=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(p,x,M),l.push(x,E,M)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var wa=class i extends Fe{constructor(t=new Uo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new pt,h=new L,d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function v(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),x(),p()}function m(E){h=t.getPointAt(E/e,h);let M=a.normals[E],R=a.binormals[E];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,b=Math.sin(_),N=-Math.cos(_);l.x=N*M.x+b*R.x,l.y=N*M.y+b*R.y,l.z=N*M.z+b*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let M=1;M<=s;M++){let R=(s+1)*(E-1)+(M-1),T=(s+1)*E+(M-1),_=(s+1)*E+M,b=(s+1)*(E-1)+M;g.push(R,T,b),g.push(T,_,b)}}function x(){for(let E=0;E<=e;E++)for(let M=0;M<=s;M++)c.x=E/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new W_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Pr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qp(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){let t={};for(let e=0;e<i.length;e++){let n=Pr(i[e]);for(let s in n)t[s]=n[s]}return t}function qp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function X_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var zm={clone:Pr,merge:An},q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$i=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=X_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Vt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cc=class extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yi=class extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pc=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ic=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ca(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ic(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Lc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:id,endingEnd:id}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sd:r=t,o=2*e-n;break;case rd:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sd:a=t,l=2*n-e;break;case rd:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[c+R]+E*a[l+R]+M*a[d+R];return r}},Dc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Nc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Uc=class extends Ws{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*u+g*2,x=d[p],E=d[p+1],M=t*u+g*2,R=h[M],T=h[M+1],_=Z_(n,e,x,R,s);r[g]=km(_,v,E,T,m)}return r}};function km(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Y_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Z_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=km(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Y_(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var li=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ic(t.settings)&&(n.settings={inTangents:ca(t.settings.inTangents,Array),outTangents:ca(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Uc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case gc:e=this.InterpolantFactoryMethodLinear;break;case ac:e=this.InterpolantFactoryMethodSmooth;break;case nd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return gc;case this.InterpolantFactoryMethodSmooth:return ac;case this.InterpolantFactoryMethodBezier:return nd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ic(this.settings)&&($p(this.settings.inTangents,t),$p(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ic(this.settings)&&(Yp(this.settings.inTangents,t),Yp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&n_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ac,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ic(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $p(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Yp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=gc;var Xs=class extends li{constructor(t,e,n){super(t,e,n)}};Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=xo;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends li{constructor(t,e,n,s){super(t,e,n,s)}};Oc.prototype.ValueTypeName="color";var Fc=class extends li{constructor(t,e,n,s){super(t,e,n,s)}};Fc.prototype.ValueTypeName="number";var Bc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fo=class extends li{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends li{constructor(t,e,n){super(t,e,n)}};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=xo;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends li{constructor(t,e,n,s){super(t,e,n,s)}};zc.prototype.ValueTypeName="vector";var kc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hm=new kc,Hc=class{constructor(t){this.manager=t!==void 0?t:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Aa=class extends hn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ra=class extends Aa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ed=new Vt,Zp=new L,Jp=new L,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zp),Jp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ed,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ma||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},sc=new L,rc=new cn,Hi=new L,zo=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sc,rc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,rc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(sc,rc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,rc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new L,Kp=new pt,jp=new pt,on=class extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,e){return this.getViewBounds(t,Kp,jp),e.subVectors(jp,Kp)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var od=class extends Bo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},ko=class extends Aa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new od}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ho=class extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ld=class extends Bo{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends Aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new ld}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ha=-90,ua=1,Pa=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ha,ua,t,e);s.layers=this.layers,this.add(s);let r=new on(ha,ua,t,e);r.layers=this.layers,this.add(r);let a=new on(ha,ua,t,e);a.layers=this.layers,this.add(a);let o=new on(ha,ua,t,e);o.layers=this.layers,this.add(o);let l=new on(ha,ua,t,e);l.layers=this.layers,this.add(l);let c=new on(ha,ua,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gc=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Wd="\\[\\]\\.:\\/",J_=new RegExp("["+Wd+"]","g"),Xd="[^"+Wd+"]",K_="[^"+Wd.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",Xd),Q_=/(WCOD+)?/.source.replace("WCOD",K_),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xd),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xd),nx=new RegExp("^"+j_+Q_+tx+ex+"$"),ix=["material","materials","bones","map"],cd=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J_,"")}static parseTrackName(t){let e=nx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ix.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=cd;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bb=new Float32Array(1);var Qp=new Vt,Go=class{constructor(t,e,n=0,s=1/0){this.ray=new Bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qp),this}intersectObject(t,e=!0,n=[]){return hd(t,this,n,e),n.sort(tm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hd(t[s],this,n,e);return n.sort(tm),n}};function tm(i,t){return i.distance-t.distance}function hd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hd(r[a],t,e,!0)}}var Ia=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ud=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Vo=class extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function qd(i,t,e,n){let s=sx(n);switch(e){case Cd:return i*t;case Zc:return i*t/s.components*s.byteLength;case Jc:return i*t/s.components*s.byteLength;case Ys:return i*t*2/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case Pd:return i*t*3/s.components*s.byteLength;case Ni:return i*t*4/s.components*s.byteLength;case jc:return i*t*4/s.components*s.byteLength;case qo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case th:case nh:return Math.max(i,16)*Math.max(t,8)/4;case Qc:case eh:return Math.max(i,8)*Math.max(t,8)/2;case ih:case sh:case ah:case oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rh:case Jo:case lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ph:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bh:case Eh:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wh:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ko:case Rh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sx(i){switch(i){case Yn:case Td:return{byteLength:1,components:1};case Oa:case wd:case Di:return{byteLength:2,components:1};case $c:case Yc:return{byteLength:2,components:4};case Li:case qc:case Si:return{byteLength:4,components:1};case Ad:case Rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function c0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ax(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
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
#endif`,sy=`uniform sampler2D dfgLUT;
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
}`,ry=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gy=`#if defined( USE_POINTS_UV )
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
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
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
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform float backgroundBlurriness;
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,bv=`#define LAMBERT
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
}`,Ev=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,wv=`#define NORMAL
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Iv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Nv=`uniform float size;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Fv=`uniform vec3 color;
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
}`,Bv=`uniform float rotation;
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
}`,zv=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:ox,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:hx,alphatest_fragment:ux,alphatest_pars_fragment:dx,aomap_fragment:fx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:_x,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:vx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:bx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Tx,color_fragment:wx,color_pars_fragment:Ax,color_pars_vertex:Rx,color_vertex:Cx,common:Px,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Lx,displacementmap_vertex:Dx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ux,colorspace_fragment:Ox,colorspace_pars_fragment:Fx,envmap_fragment:Bx,envmap_common_pars_fragment:zx,envmap_pars_fragment:kx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:jx,envmap_vertex:Gx,fog_vertex:Vx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:Yx,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Kx,lights_toon_fragment:Qx,lights_toon_pars_fragment:ty,lights_phong_fragment:ey,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:sy,lights_fragment_begin:ry,lights_fragment_maps:ay,lights_fragment_end:oy,lightprobes_pars_fragment:ly,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:dy,map_fragment:fy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:xy,morphinstance_vertex:yy,morphcolor_vertex:vy,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:by,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:wy,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Ny,packing:Uy,premultiplied_alpha_fragment:Oy,project_vertex:Fy,dithering_fragment:By,dithering_pars_fragment:zy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:qy,skinning_pars_vertex:$y,skinning_vertex:Yy,skinnormal_vertex:Zy,specularmap_fragment:Jy,specularmap_pars_fragment:Ky,tonemapping_fragment:jy,tonemapping_pars_fragment:Qy,transmission_fragment:tv,transmission_pars_fragment:ev,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:av,background_frag:ov,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distance_vert:pv,distance_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:yv,meshbasic_vert:vv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:bv,meshmatcap_vert:Ev,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Iv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Nv,points_frag:Uv,shadow_vert:Ov,shadow_frag:Fv,sprite_vert:Bv,sprite_frag:zv},_t={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Ki={basic:{uniforms:An([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:An([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:An([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:An([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:An([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:An([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:An([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:An([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:An([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:An([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:An([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:An([_t.common,_t.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:An([_t.lights,_t.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ki.physical={uniforms:An([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Ih={r:0,b:0,g:0},kv=new Vt,h0=new Ht;h0.set(-1,0,0,0,1,0,0,0,1);function Hv(i,t,e,n,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let M=x.backgroundBlurriness>0;E=t.get(E,M)}return E}function g(x){let E=!1,M=f(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,E){let M=f(E);M&&M.isCubeTexture?(c===void 0&&(c=new $n(new $e(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Pr(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(h0),c.material.toneMapped=ne.getTransfer(M.colorSpace)!==de,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $n(new gs(2,2),new $i({name:"BackgroundMaterial",uniforms:Pr(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ne.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(Ih,Vd(i)),e.buffers.color.setClear(Ih.r,Ih.g,Ih.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Gv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,O,H,P,G){let X=!1,V=d(I,P,H,O);r!==V&&(r=V,c(r.object)),X=f(I,P,H,G),X&&g(I,P,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(I,O,H,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,O,H,P){let G=P.wireframe===!0,X=n[O.id];X===void 0&&(X={},n[O.id]=X);let V=I.isInstancedMesh===!0?I.id:0,nt=X[V];nt===void 0&&(nt={},X[V]=nt);let $=nt[H.id];$===void 0&&($={},nt[H.id]=$);let Q=$[G];return Q===void 0&&(Q=u(l()),$[G]=Q),Q}function u(I){let O=[],H=[],P=[];for(let G=0;G<e;G++)O[G]=0,H[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,O,H,P){let G=r.attributes,X=O.attributes,V=0,nt=H.getAttributes();for(let $ in nt)if(nt[$].location>=0){let et=G[$],At=X[$];if(At===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),et===void 0||et.attribute!==At||At&&et.data!==At.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function g(I,O,H,P){let G={},X=O.attributes,V=0,nt=H.getAttributes();for(let $ in nt)if(nt[$].location>=0){let et=X[$];et===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let At={};At.attribute=et,et&&et.data&&(At.data=et.data),G[$]=At,V++}r.attributes=G,r.attributesNum=V,r.index=P}function v(){let I=r.newAttributes;for(let O=0,H=I.length;O<H;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){let H=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;H[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),G[I]!==O&&(i.vertexAttribDivisor(I,O),G[I]=O)}function x(){let I=r.newAttributes,O=r.enabledAttributes;for(let H=0,P=O.length;H<P;H++)O[H]!==I[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function E(I,O,H,P,G,X,V){V===!0?i.vertexAttribIPointer(I,O,H,G,X):i.vertexAttribPointer(I,O,H,P,G,X)}function M(I,O,H,P){v();let G=P.attributes,X=H.getAttributes(),V=O.defaultAttributeValues;for(let nt in X){let $=X[nt];if($.location>=0){let Q=G[nt];if(Q===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){let et=Q.normalized,At=Q.itemSize,Wt=t.get(Q);if(Wt===void 0)continue;let J=Wt.buffer,xt=Wt.type,Et=Wt.bytesPerElement,Nt=xt===i.INT||xt===i.UNSIGNED_INT||Q.gpuType===qc;if(Q.isInterleavedBufferAttribute){let yt=Q.data,$t=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,ke=Q.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let zt=0;zt<$.locationSize;zt++)p($.location+zt,yt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let zt=0;zt<$.locationSize;zt++)m($.location+zt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let zt=0;zt<$.locationSize;zt++)E($.location+zt,At/$.locationSize,xt,et,$t*Et,(ke+At/$.locationSize*zt)*Et,Nt)}else{if(Q.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)p($.location+yt,Q.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let yt=0;yt<$.locationSize;yt++)m($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let yt=0;yt<$.locationSize;yt++)E($.location+yt,At/$.locationSize,xt,et,At*Et,At/$.locationSize*yt*Et,Nt)}}else if(V!==void 0){let et=V[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv($.location,et);break;case 3:i.vertexAttrib3fv($.location,et);break;case 4:i.vertexAttrib4fv($.location,et);break;default:i.vertexAttrib1fv($.location,et)}}}}x()}function R(){N();for(let I in n){let O=n[I];for(let H in O){let P=O[H];for(let G in P){let X=P[G];for(let V in X)h(X[V].object),delete X[V];delete P[G]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let H in O){let P=O[H];for(let G in P){let X=P[G];for(let V in X)h(X[V].object),delete X[V];delete P[G]}}delete n[I.id]}function _(I){for(let O in n){let H=n[O];for(let P in H){let G=H[P];if(G[I.id]===void 0)continue;let X=G[I.id];for(let V in X)h(X[V].object),delete X[V];delete G[I.id]}}}function b(I){for(let O in n){let H=n[O],P=I.isInstancedMesh===!0?I.id:0,G=H[P];if(G!==void 0){for(let X in G){let V=G[X];for(let nt in V)h(V[nt].object),delete V[nt];delete G[X]}delete H[P],Object.keys(H).length===0&&delete n[O]}}}function N(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Vv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Wv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Ni&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Yn&&_!==Si&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,maxSamples:R,samples:T}}function Xv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ri,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,E=x*4,M=p.clippingState||null;l.value=M,M=h(g,u,E,f);for(let R=0;R!==E;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==v;++E,M+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var tl=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Co(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Tr});r.uniforms.tEquirect.value=e;let a=new $n(s,r),o=e.minFilter;return e.minFilter===_s&&(e.minFilter=Un),new Pa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Gm=256,qv=3,$v=20,u0=256,d0=16,Yv=3,Zv=new L,Jv=new Bt,Dh=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pa(1,10,null),this._boxMesh=new $n(new $e(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Zv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Jv));let m=new Pa(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gm,Bd(t))}_fromTexture(t,e){t.mapping===Rr||t.mapping===Ua?this._setSize(t.image.length===0?Gm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vm(t,!1,!1),n=Math.log2(t)-qv;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Rr||t.mapping===Ua?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Kv(),this._integrationMaterial=jv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/d0);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Yv)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(u0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Qv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vm(i,t,e){return new tl(i,{minFilter:_s,generateMipmaps:t,type:Di,colorSpace:yo,depthBuffer:e})}function nl(i,t,e){return new $i({name:i,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:zn,blending:Tr,depthTest:!1,depthWrite:!1})}function Kv(){return nl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${u0}u

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
	`)}function jv(){return nl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:d0}},`

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
	`)}function Qv(){return nl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$v}
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
	`)}function Wm(){return nl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xm(){return nl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Vc||f===Wc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new tl(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Vc||f===Wc,v=f===Rr||f===Ua;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Dh(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Dh(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Vc?u.mapping=Rr:f===Wc&&(u.mapping=Ua),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function eM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fo("WebGLRenderer: "+n+" extension not supported."),s}}}function nM(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)t.update(v[m],i.ARRAY_BUFFER)}function d(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,E=m.count>=65535?wo:To,M=new E(Math.ceil(x/3)*6,1),R=M.array;if(v!==null){let _=v.array;p=v.version;for(let b=0,N=0;b<x;b+=3){let C=_[b+0],I=_[b+1],O=_[b+2];R[N++]=C,R[N++]=I,R[N++]=I,R[N++]=O,R[N++]=O,R[N++]=C}}else{p=m.version;for(let _=0,b=0;_<x;_+=3){let N=_+0,C=_+1,I=_+2;R[b++]=N,R[b++]=C,R[b++]=C,R[b++]=I,R[b++]=I,R[b++]=N}}M.version=p;let T=r.get(g);T&&t.remove(T),r.set(g,M)}function u(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function iM(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rM(i,t,e){let n=new WeakMap,s=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*R*4*d),_=new bo(T,M,R,d);_.type=Si,_.needsUpdate=!0;let b=E*4;for(let C=0;C<d;C++){let I=m[C],O=p[C],H=x[C],P=M*R*4*C;for(let G=0;G<I.count;G++){let X=G*b;f===!0&&(s.fromBufferAttribute(I,G),T[P+X+0]=s.x,T[P+X+1]=s.y,T[P+X+2]=s.z,T[P+X+3]=0),g===!0&&(s.fromBufferAttribute(O,G),T[P+X+4]=s.x,T[P+X+5]=s.y,T[P+X+6]=s.z,T[P+X+7]=0),v===!0&&(s.fromBufferAttribute(H,G),T[P+X+8]=s.x,T[P+X+9]=s.y,T[P+X+10]=s.z,T[P+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new pt(M,R)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function aM(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var oM={[xd]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[vd]:"CINEON_TONE_MAPPING",[Na]:"ACES_FILMIC_TONE_MAPPING",[Sd]:"AGX_TONE_MAPPING",[bd]:"NEUTRAL_TONE_MAPPING",[Md]:"CUSTOM_TONE_MAPPING"};function lM(i,t,e,n,s,r){let a=new ai(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Fe;h.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new jt([0,2,0,0,2,0],2));let d=new Cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $n(h,d),f=new Ho(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,x=null,E=[],M=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(R,T)}},this.setEffects=function(R){E=R,M=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new ai(T,_,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new ai(T,_,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ms(T,_),r===!0&&(c.format=xs,c.type=Cr)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<E.length;N++){let C=E[N];C.setSize&&C.setSize(T,_),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(R,T){if(m||R.toneMapping===Zi&&E.length===0)return!1;if(x=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return M===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=Zi,!0},this.hasRenderPass=function(){return M},this.end=function(R,T){R.toneMapping=p,m=!0;let _=a,b=o;for(let N=0;N<E.length;N++){let C=E[N];C.enabled!==!1&&(C.render(R,b,_,T),C.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,d.defines={},ne.getTransfer(g)===de&&(d.defines.SRGB_TRANSFER="");let N=oM[v];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(x),R.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var f0=new On,p0=new ms(1,1),m0=new Po(1),g0=new bo,_0=new yc,x0=new Co,qm=[],$m=[],Ym=new Float32Array(16),Zm=new Float32Array(9),Jm=new Float32Array(4);function Ba(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qm[s];if(r===void 0&&(r=new Float32Array(s),qm[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nh(i,t){let e=$m[t];e===void 0&&(e=new Int32Array(t),$m[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function uM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function dM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function fM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Jm.set(n),i.uniformMatrix2fv(this.addr,!1,Jm),Ze(e,n)}}function pM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Zm.set(n),i.uniformMatrix3fv(this.addr,!1,Zm),Ze(e,n)}}function mM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Ym.set(n),i.uniformMatrix4fv(this.addr,!1,Ym),Ze(e,n)}}function gM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _M(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function xM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function vM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function SM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function bM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function Uh(i){return i.version===0&&(i.compareFunction=Dd,i.needsUpdate=!0),i}function EM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Uh(p0):r=f0,e.setTexture2D(t||r,s)}function TM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_0,s)}function wM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Uh(m0):r=x0,e.setTextureCube(t||r,s)}function AM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||g0,s)}function RM(i){switch(i){case 5126:return cM;case 35664:return hM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return vM;case 36294:return MM;case 36295:return SM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(i,t){i.uniform1fv(this.addr,t)}function PM(i,t){let e=Ba(t,this.size,2);i.uniform2fv(this.addr,e)}function IM(i,t){let e=Ba(t,this.size,3);i.uniform3fv(this.addr,e)}function LM(i,t){let e=Ba(t,this.size,4);i.uniform4fv(this.addr,e)}function DM(i,t){let e=Ba(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function NM(i,t){let e=Ba(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function UM(i,t){let e=Ba(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function OM(i,t){i.uniform1iv(this.addr,t)}function FM(i,t){i.uniform2iv(this.addr,t)}function BM(i,t){i.uniform3iv(this.addr,t)}function zM(i,t){i.uniform4iv(this.addr,t)}function kM(i,t){i.uniform1uiv(this.addr,t)}function HM(i,t){i.uniform2uiv(this.addr,t)}function GM(i,t){i.uniform3uiv(this.addr,t)}function VM(i,t){i.uniform4uiv(this.addr,t)}function WM(i,t,e){let n=this.cache,s=t.length,r=Nh(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uh(p0):a=f0;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function XM(i,t,e){let n=this.cache,s=t.length,r=Nh(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_0,r[a])}function qM(i,t,e){let n=this.cache,s=t.length,r=Nh(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Uh(m0):a=x0;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function $M(i,t,e){let n=this.cache,s=t.length,r=Nh(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||g0,r[a])}function YM(i){switch(i){case 5126:return CM;case 35664:return PM;case 35665:return IM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return HM;case 36295:return GM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return $M}}var Zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=RM(e.type)}},Jd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YM(e.type)}},Kd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$d=/(\w+)(\])?(\[|\.)?/g;function Km(i,t){i.seq.push(t),i.map[t.id]=t}function ZM(i,t,e){let n=i.name,s=n.length;for($d.lastIndex=0;;){let r=$d.exec(n),a=$d.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Km(e,c===void 0?new Zd(o,i,t):new Jd(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Kd(o),Km(e,d)),e=d}}}var Fa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ZM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function jm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var JM=37297,KM=0;function jM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qm=new Ht;function QM(i){ne._getMatrix(Qm,ne.workingColorSpace,i);let t=`mat3( ${Qm.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case vo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function t0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jM(i.getShaderSource(t),o)}else return r}function tS(i,t){let e=QM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var eS={[xd]:"Linear",[yd]:"Reinhard",[vd]:"Cineon",[Na]:"ACESFilmic",[Sd]:"AgX",[bd]:"Neutral",[Md]:"Custom"};function nS(i,t){let e=eS[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lh=new L;function iS(){ne.getLuminanceCoefficients(Lh);let i=Lh.x.toFixed(4),t=Lh.y.toFixed(4),e=Lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function rS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function aS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qo(i){return i!==""}function e0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function n0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oS=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(i){return i.replace(oS,lS)}function lS(i,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return jd(e)}var cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(i){return i.replace(cS,hS)}function hS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function s0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var uS={[Wo]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function dS(i){return uS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fS={[Ua]:"ENVMAP_MODE_REFRACTION"};function pS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mS={[_d]:"ENVMAP_BLENDING_MULTIPLY",[Sm]:"ENVMAP_BLENDING_MIX",[bm]:"ENVMAP_BLENDING_ADD"};function gS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mS[i.combine]||"ENVMAP_BLENDING_NONE"}function _S(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=pS(e),d=gS(e),u=sS(e),f=rS(r),g=s.createProgram(),v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qo).join(`
`),m.length>0&&(m+=`
`)):(v=[s0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),m=[s0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?nS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,tS("linearToOutputTexel",e.outputColorSpace),iS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),a=jd(a),a=e0(a,e),a=n0(a,e),o=jd(o),o=e0(o,e),o=n0(o,e),a=i0(a),o=i0(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+v+a,E=p+m+o,M=jm(s,s.VERTEX_SHADER,x),R=jm(s,s.FRAGMENT_SHADER,E);s.attachShader(g,M),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(R)||"",P=I.trim(),G=O.trim(),X=H.trim(),V=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,R);else{let $=t0(s,M,"vertex"),Q=t0(s,R,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+$+`
`+Q)}else P!==""?Ot("WebGLProgram: Program Info Log:",P):(G===""||X==="")&&(nt=!1);nt&&(C.diagnostics={runnable:V,programLog:P,vertexShader:{log:G,prefix:v},fragmentShader:{log:X,prefix:m}})}s.deleteShader(M),s.deleteShader(R),_=new Fa(s,g),b=aS(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,JM)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}var xS=0,Qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tf(t),e.set(t,n)),n}},tf=class{constructor(t){this.id=xS++,this.code=t,this.usedTimes=0}};function yS(i){return i===Ys||i===Jo||i===Ko}function vS(i,t,e,n,s,r){let a=new ya,o=new Qd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,N,C,I,O){let H=C.fog,P=I.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||G,X),nt=u[_.type],$=n.precision;_.precision!==null&&($=n.getMaxPrecision(_.precision),$!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",$,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=Q!==void 0?Q.length:0,At=0;P.morphAttributes.position!==void 0&&(At=1),P.morphAttributes.normal!==void 0&&(At=2),P.morphAttributes.color!==void 0&&(At=3);let Wt,J,xt,Et;if(nt){let gt=Ki[nt];Wt=gt.vertexShader,J=gt.fragmentShader}else{Wt=_.vertexShader,J=_.fragmentShader;let gt=o.getVertexShaderStage(_),pe=o.getFragmentShaderStage(_);o.update(_,gt,pe),xt=gt.id,Et=pe.id}let Nt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),$t=I.isInstancedMesh===!0,ke=I.isBatchedMesh===!0,zt=!!_.map,fe=!!_.matcap,_e=!!V,Qt=_e&&V.isPMREMTexture===!0,mn=!!_.aoMap,Xe=!!_.lightMap,Xn=!!_.bumpMap&&_.wireframe===!1,Pe=!!_.normalMap,ki=!!_.displacementMap,en=!!_.emissiveMap,mi=!!_.metalnessMap,gi=!!_.roughnessMap,_i=_.anisotropy>0,F=_.clearcoat>0,xi=_.diffuseRoughness>0,be=_.dispersion>0,Ee=_.retroreflectivity>0,mt=_.iridescence>0,qe=_.sheen>0,Ut=_.transmission>0,Gt=_i&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,y=F&&!!_.clearcoatNormalMap,z=F&&!!_.clearcoatRoughnessMap,it=xi&&!!_.diffuseRoughnessMap,j=mt&&!!_.iridescenceMap,at=mt&&!!_.iridescenceThicknessMap,dt=qe&&!!_.sheenColorMap,Y=qe&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ct=!!_.specularColorMap,D=!!_.specularIntensityMap,K=Ut&&!!_.transmissionMap,q=Ut&&!!_.thicknessMap,ht=!!_.gradientMap,rt=!!_.alphaMap,ot=_.alphaTest>0,Ct=!!_.alphaHash,Zt=!!_.extensions,st=Zi;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(st=i.toneMapping);let It=Qt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Yt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Wt,fragmentShader:J,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:Et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:$,batching:ke,batchingColor:ke&&I._colorsTexture!==null,instancing:$t,instancingColor:$t&&I.instanceColor!==null,instancingMorph:$t&&I.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:fe,envMap:_e,envMapMode:_e&&V.mapping,envMapPMREM:Qt,envMapMaxLod:Qt?It.length-1:null,envMapSize:Qt?It[0].width:null,aoMap:mn,lightMap:Xe,bumpMap:Xn,normalMap:Pe,displacementMap:ki,emissiveMap:en,normalMapObjectSpace:Pe&&_.normalMapType===wm,normalMapTangentSpace:Pe&&_.normalMapType===Ch,packedNormalMap:Pe&&_.normalMapType===Ch&&yS(_.normalMap.format),metalnessMap:mi,roughnessMap:gi,anisotropy:_i,anisotropyMap:Gt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:xi,diffuseRoughnessMap:it,dispersion:be,retroreflection:Ee,iridescence:mt,iridescenceMap:j,iridescenceThicknessMap:at,sheen:qe,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ct,specularIntensityMap:D,transmission:Ut,transmissionMap:K,thicknessMap:q,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Da&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:Ct,combine:_.combine,mapUv:zt&&f(_.map.channel),aoMapUv:mn&&f(_.aoMap.channel),lightMapUv:Xe&&f(_.lightMap.channel),bumpMapUv:Xn&&f(_.bumpMap.channel),normalMapUv:Pe&&f(_.normalMap.channel),displacementMapUv:ki&&f(_.displacementMap.channel),emissiveMapUv:en&&f(_.emissiveMap.channel),metalnessMapUv:mi&&f(_.metalnessMap.channel),roughnessMapUv:gi&&f(_.roughnessMap.channel),anisotropyMapUv:Gt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:ct&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:rt&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Pe||_i),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(zt||rt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:At,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(gt=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:en&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kn,flipSided:_.side===zn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||ke)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function v(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(b,_),p(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let b=u[_.type],N;if(b){let C=Ki[b];N=zm.clone(C.uniforms)}else N=_.uniforms;return N}function E(_,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new _S(i,b,_,s),c.push(N),h.set(b,N)),N}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:E,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:T}}function MS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function SS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function r0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function a0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=g,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function l(u,f,g,v,m,p,x){x.reversedDepth===!0&&(m=-m);let E=o(u,f,g,v,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,v,m,p){let x=o(u,f,g,v,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||SS),n.length>1&&n.sort(f||r0),s.length>1&&s.sort(f||r0)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function bS(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new a0,i.set(n,[a])):s>=r.length?(a=new a0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ES(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function TS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var wS=0;function AS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function RS(i){let t=new ES,e=TS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Vt,a=new Vt;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,E=0,M=0,R=0,T=0,_=0,b=0,N=0,C=0;c.sort(AS);for(let O=0,H=c.length;O<H;O++){let P=c[O],G=P.color,X=P.intensity,V=P.distance,nt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ys?nt=P.shadow.map.texture:nt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*X,d+=G.g*X,u+=G.b*X;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],X);C++}else if(P.isSunLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=nt;let At=Q.getViewportCount();for(let Wt=0;Wt<At;Wt++)n.sunShadowMatrix[v+Wt]=Q.getMatrix(Wt),n.sunShadowCascade[v+Wt]=Q._cascadeData[Wt];v+=At,g++}n.sun[f]=$,f++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=P.shadow.matrix,R++}n.directional[m]=$,m++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(G).multiplyScalar(X),$.distance=V,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[x]=$;let Q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[x]=Q.matrix,P.castShadow){let et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=nt,_++}x++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(G).multiplyScalar(X),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=$,E++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let Q=P.shadow,et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=$,p++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(X),$.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[M]=$,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==E||I.hemiLength!==M||I.numSunShadows!==g||I.numDirectionalShadows!==R||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==b||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=E,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=x,I.rectAreaLength=E,I.hemiLength=M,I.numSunShadows=g,I.numDirectionalShadows=R,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=b,I.numLightProbes=C,n.version=wS++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let M=c[x];if(M.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=n.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function o0(i){let t=new RS(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function CS(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new o0(i),t.set(s,[o])):r>=a.length?(o=new o0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
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
}`,LS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],DS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],l0=new Vt,jo=new L,Yd=new L;function NS(i,t,e){let n=new Hs,s=new pt,r=new pt,a=new Te,o=new Pc,l=new Ic,c={},h=e.maxTextureSize,d={[$s]:zn,[zn]:$s,[kn]:kn},u=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:PS,fragmentShader:IS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new $n(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let p=this.type;this.render=function(T,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===im&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wo);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Tr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=T.length;P<G;P++){let X=T[P],V=X.shadow;if(V===void 0){Ot("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===La){if(X.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ai(s.x,s.y,{format:Ys,type:Di,minFilter:Un,magFilter:Un,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new ms(s.x,s.y,Si),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=ds,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ln,V.map.depthTexture.magFilter=ln}else X.isPointLight?(V.map=new tl(s.x),V.map.depthTexture=new Po(s.x,Li)):(V.map=new ai(s.x,s.y),V.map.depthTexture=new ms(s.x,s.y,Li)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=ds,this.type===Wo?(V.map.depthTexture.compareFunction=$?Ld:Id,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ln,V.map.depthTexture.magFilter=ln);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,b);let et=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let At=0;At<Q;At++){let Wt=V.getCamera(At);if(X.isPointLight){let J=V.camera,xt=V.matrix,Et=X.distance||J.far;Et!==J.far&&(J.far=Et,J.updateProjectionMatrix()),jo.setFromMatrixPosition(X.matrixWorld),J.position.copy(jo),Yd.copy(J.position),Yd.add(LS[At]),J.up.copy(DS[At]),J.lookAt(Yd),J.updateMatrixWorld(),xt.makeTranslation(-jo.x,-jo.y,-jo.z),l0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(l0,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,At),i.clear();else{At===0&&(i.setRenderTarget(V.map),i.clear());let J=V.getViewport(At);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=V.getFrustum(At),M(_,b,Wt,X,et,this.type)}V.isPointLightShadow!==!0&&this.type===La&&x(V,b),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,I)};function x(T,_){let b=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ai(s.x,s.y,{format:Ys,type:Di}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,b,f,v,null)}function E(T,_,b,N){let C=null,I=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=C.uuid,H=_.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let G=P[H];G===void 0&&(G=C.clone(),P[H]=G,_.addEventListener("dispose",R)),C=G}if(C.visible=_.visible,C.wireframe=_.wireframe,N===La?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=b}return C}function M(T,_,b,N,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===La)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=t.update(T),G=T.material;if(Array.isArray(G)){let X=P.groups;for(let V=0,nt=X.length;V<nt;V++){let $=X[V],Q=G[$.materialIndex];if(Q&&Q.visible){let et=E(T,Q,N,I);T.onBeforeShadow(i,T,_,b,P,et,$),i.renderBufferDirect(b,null,P,et,T,$),T.onAfterShadow(i,T,_,b,P,et,$)}}}else if(G.visible){let X=E(T,G,N,I);T.onBeforeShadow(i,T,_,b,P,X,null),i.renderBufferDirect(b,null,P,X,T,null),T.onAfterShadow(i,T,_,b,P,X,null)}}let H=T.children;for(let P=0,G=H.length;P<G;P++)M(H[P],_,b,N,C,I)}function R(T){T.target.removeEventListener("dispose",R);for(let b in c){let N=c[b],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function US(i,t){function e(){let D=!1,K=new Te,q=null,ht=new Te(0,0,0,0);return{setMask:function(rt){q!==rt&&!D&&(i.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){D=rt},setClear:function(rt,ot,Ct,Zt,st){st===!0&&(rt*=Zt,ot*=Zt,Ct*=Zt),K.set(rt,ot,Ct,Zt),ht.equals(K)===!1&&(i.clearColor(rt,ot,Ct,Zt),ht.copy(K))},reset:function(){D=!1,q=null,ht.set(-1,0,0,0)}}}function n(){let D=!1,K=!1,q=null,ht=null,rt=null;return{setReversed:function(ot){if(K!==ot){let Ct=t.get("EXT_clip_control");ot?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),K=ot;let Zt=rt;rt=null,this.setClear(Zt)}},getReversed:function(){return K},setTest:function(ot){ot?yt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(ot){q!==ot&&!D&&(i.depthMask(ot),q=ot)},setFunc:function(ot){if(K&&(ot=Om[ot]),ht!==ot){switch(ot){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=ot}},setLocked:function(ot){D=ot},setClear:function(ot){rt!==ot&&(rt=ot,K&&(ot=1-ot),i.clearDepth(ot))},reset:function(){D=!1,q=null,ht=null,rt=null,K=!1}}}function s(){let D=!1,K=null,q=null,ht=null,rt=null,ot=null,Ct=null,Zt=null,st=null;return{setTest:function(It){D||(It?yt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(It){K!==It&&!D&&(i.stencilMask(It),K=It)},setFunc:function(It,Yt,gt){(q!==It||ht!==Yt||rt!==gt)&&(i.stencilFunc(It,Yt,gt),q=It,ht=Yt,rt=gt)},setOp:function(It,Yt,gt){(ot!==It||Ct!==Yt||Zt!==gt)&&(i.stencilOp(It,Yt,gt),ot=It,Ct=Yt,Zt=gt)},setLocked:function(It){D=It},setClear:function(It){st!==It&&(i.clearStencil(It),st=It)},reset:function(){D=!1,K=null,q=null,ht=null,rt=null,ot=null,Ct=null,Zt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,E=null,M=null,R=null,T=null,_=null,b=new Bt(0,0,0),N=0,C=!1,I=null,O=null,H=null,P=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),V=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=nt>=2);let Q=null,et={},At=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),J=new Te().fromArray(At),xt=new Te().fromArray(Wt);function Et(D,K,q,ht){let rt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(D,ot),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<q;Ct++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(K+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ot}let Nt={};Nt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),a.setFunc(fa),Xn(!1),Pe(dd),yt(i.CULL_FACE),mn(Tr);function yt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function $t(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ke(D,K){return u[D]!==K?(i.bindFramebuffer(D,K),u[D]=K,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function zt(D,K){let q=g,ht=!1;if(D){q=f.get(K),q===void 0&&(q=[],f.set(K,q));let rt=D.textures;if(q.length!==rt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ct=rt.length;ot<Ct;ot++)q[ot]=i.COLOR_ATTACHMENT0+ot;q.length=rt.length,ht=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(q)}function fe(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let _e={[Ar]:i.FUNC_ADD,[rm]:i.FUNC_SUBTRACT,[am]:i.FUNC_REVERSE_SUBTRACT};_e[om]=i.MIN,_e[lm]=i.MAX;let Qt={[cm]:i.ZERO,[hm]:i.ONE,[um]:i.SRC_COLOR,[md]:i.SRC_ALPHA,[_m]:i.SRC_ALPHA_SATURATE,[mm]:i.DST_COLOR,[fm]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[gd]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[xm]:i.CONSTANT_COLOR,[ym]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[Mm]:i.ONE_MINUS_CONSTANT_ALPHA};function mn(D,K,q,ht,rt,ot,Ct,Zt,st,It){if(D===Tr){m===!0&&($t(i.BLEND),m=!1);return}if(m===!1&&(yt(i.BLEND),m=!0),D!==sm){if(D!==p||It!==C){if((x!==Ar||R!==Ar)&&(i.blendEquation(i.FUNC_ADD),x=Ar,R=Ar),It)switch(D){case Da:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fd:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pd:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}E=null,M=null,T=null,_=null,b.set(0,0,0),N=0,p=D,C=It}return}rt=rt||K,ot=ot||q,Ct=Ct||ht,(K!==x||rt!==R)&&(i.blendEquationSeparate(_e[K],_e[rt]),x=K,R=rt),(q!==E||ht!==M||ot!==T||Ct!==_)&&(i.blendFuncSeparate(Qt[q],Qt[ht],Qt[ot],Qt[Ct]),E=q,M=ht,T=ot,_=Ct),(Zt.equals(b)===!1||st!==N)&&(i.blendColor(Zt.r,Zt.g,Zt.b,st),b.copy(Zt),N=st),p=D,C=!1}function Xe(D,K){D.side===kn?$t(i.CULL_FACE):yt(i.CULL_FACE);let q=D.side===zn;K&&(q=!q),Xn(q),D.blending===Da&&D.transparent===!1?mn(Tr):mn(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ht=D.stencilWrite;o.setTest(ht),ht&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),en(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xn(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function Pe(D){D!==em?(yt(i.CULL_FACE),D!==O&&(D===dd?i.cullFace(i.BACK):D===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),O=D}function ki(D){D!==H&&(V&&i.lineWidth(D),H=D)}function en(D,K,q){D?(yt(i.POLYGON_OFFSET_FILL),(P!==K||G!==q)&&(P=K,G=q,a.getReversed()&&(K=-K,q=-q),i.polygonOffset(K,q))):$t(i.POLYGON_OFFSET_FILL)}function mi(D){D?yt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function gi(D){D===void 0&&(D=i.TEXTURE0+X-1),Q!==D&&(i.activeTexture(D),Q=D)}function _i(D,K,q){q===void 0&&(Q===null?q=i.TEXTURE0+X-1:q=Q);let ht=et[q];ht===void 0&&(ht={type:void 0,texture:void 0},et[q]=ht),(ht.type!==D||ht.texture!==K)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(D,K||Nt[D]),ht.type=D,ht.texture=K)}function F(){let D=et[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xi(){try{i.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function be(){try{i.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Ee(){try{i.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function mt(){try{i.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function qe(){try{i.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Gt(){try{i.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function y(){try{i.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function z(){try{i.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function it(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function j(D,K){d[D]!==K&&(i.pixelStorei(D,K),d[D]=K)}function at(D){J.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function dt(D){xt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),xt.copy(D))}function Y(D,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let ht=q.get(D);ht===void 0&&(ht=i.getUniformBlockIndex(K,D.name),i.uniformBlockBinding(K,ht,ht),q.set(D,ht))}function Z(D,K,q){let rt=c.get(K).get(D);l[rt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,q),l[rt]=q)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,et={},u={},l={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,E=null,M=null,R=null,T=null,_=null,b=new Bt(0,0,0),N=0,C=!1,I=null,O=null,H=null,P=null,G=null,J.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:$t,bindFramebuffer:ke,drawBuffers:zt,useProgram:fe,setBlending:mn,setMaterial:Xe,setFlipSided:Xn,setCullFace:Pe,setLineWidth:ki,setPolygonOffset:en,setScissorTest:mi,activeTexture:gi,bindTexture:_i,unbindTexture:F,compressedTexImage2D:xi,compressedTexImage3D:be,texImage2D:y,texImage3D:z,pixelStorei:j,getParameter:it,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Gt,texStorage3D:A,texSubImage2D:Ee,texSubImage3D:mt,compressedTexSubImage2D:qe,compressedTexSubImage3D:Ut,scissor:at,viewport:dt,reset:ct}}function OS(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,v=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,y){return m?new OffscreenCanvas(A,y):Mo("canvas")}function x(A,y,z){let it=1,j=Gt(A);if((j.width>z||j.height>z)&&(it=z/Math.max(j.width,j.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let at=Math.floor(it*j.width),dt=Math.floor(it*j.height);u===void 0&&(u=p(at,dt));let Y=y?p(at,dt):u;return Y.width=at,Y.height=dt,Y.getContext("2d").drawImage(A,0,0,at,dt),Ot("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+dt+")."),Y}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,y,z,it,j,at=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;it&&(dt=t.get("EXT_texture_norm16"),dt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),z===i.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),z===i.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),z===i.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){let Z=at?vo:ne.getTransfer(j);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Z===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),z===i.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(A,y){let z;return A?y===null||y===Li||y===Cr?z=i.DEPTH24_STENCIL8:y===Si?z=i.DEPTH32F_STENCIL8:y===Oa&&(z=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===Cr?z=i.DEPTH_COMPONENT24:y===Si?z=i.DEPTH_COMPONENT32F:y===Oa&&(z=i.DEPTH_COMPONENT16),z}function b(A,y){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==Un?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function N(A){let y=new WeakRef(A);n.get(A).__ref=y,g.add(y),v.register(A,y,y)}function C(A){let y=n.get(A).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function I(A){H(A.target)}function O(A){P(A.target)}function H(A){A.removeEventListener("dispose",I),C(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",O),C(A),nt(A)}function G(){for(let A of g){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):H(y))}g.clear(),d.clear()}function X(A){let y=n.get(A);if(y.__webglInit===void 0)return;let z=A.source,it=f.get(z);if(it){let j=it[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(A),Object.keys(it).length===0&&f.delete(z)}n.remove(A)}function V(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let z=A.source,it=f.get(z);delete it[y.__cacheKey],a.memory.textures--}function nt(A){let y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&H(z),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let at=0;at<y.__webglFramebuffer[j].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[j][at]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let it=A.textures;for(let j=0,at=it.length;j<at;j++){let dt=n.get(it[j]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(it[j])}n.remove(A)}let $=0;function Q(){$=0}function et(){return $}function At(A){$=A}function Wt(){let A=$;return A>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function J(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function xt(A,y){let z=n.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let it=A.image;if(it===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function Et(A,y){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Xe(z,A,y);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Nt(A,y){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Xe(z,A,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function yt(A,y){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Xn(z,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let $t={[pa]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},ke={[ln]:i.NEAREST,[Em]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[_s]:i.LINEAR_MIPMAP_LINEAR},zt={[Rm]:i.NEVER,[Dd]:i.ALWAYS,[Cm]:i.LESS,[Id]:i.LEQUAL,[Pm]:i.EQUAL,[Ld]:i.GEQUAL,[Im]:i.GREATER,[Lm]:i.NOTEQUAL};function fe(A,y){if(y.type===Si&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Un||y.magFilter===Xc||y.magFilter===Xo||y.magFilter===_s||y.minFilter===Un||y.minFilter===Xc||y.minFilter===Xo||y.minFilter===_s)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,$t[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$t[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$t[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ke[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ke[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,zt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==Xo&&y.minFilter!==_s||y.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function _e(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",I),N(y));let it=y.source,j=f.get(it);j===void 0&&(j={},f.set(it,j));let at=J(y);if(at!==A.__cacheKey){j[at]===void 0&&(j[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[at].usedTimes++;let dt=j[A.__cacheKey];dt!==void 0&&(j[A.__cacheKey].usedTimes--,dt.usedTimes===0&&V(y)),A.__cacheKey=at,A.__webglTexture=j[at].texture}return z}function Qt(A,y,z){return Math.floor(Math.floor(A/z)/y)}function mn(A,y,z,it){let at=A.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,it,y.data);else{at.sort((D,K)=>D.start-K.start);let dt=0;for(let D=1;D<at.length;D++){let K=at[dt],q=at[D],ht=K.start+K.count,rt=Qt(q.start,y.width,4),ot=Qt(K.start,y.width,4);q.start<=ht+1&&rt===ot&&Qt(q.start+q.count-1,y.width,4)===rt?K.count=Math.max(K.count,q.start+q.count-K.start):(++dt,at[dt]=q)}at.length=dt+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let D=0,K=at.length;D<K;D++){let q=at[D],ht=Math.floor(q.start/4),rt=Math.ceil(q.count/4),ot=ht%y.width,Ct=Math.floor(ht/y.width),Zt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(i.TEXTURE_2D,0,ot,Ct,Zt,st,z,it,y.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function Xe(A,y,z){let it=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(it=i.TEXTURE_3D);let j=_e(A,y),at=y.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+z);let dt=n.get(at);if(at.version!==dt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let st=ne.getPrimaries(ne.workingColorSpace),It=y.colorSpace===ys?null:ne.getPrimaries(y.colorSpace),Yt=y.colorSpace===ys||st===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Z=x(y.image,!1,s.maxTextureSize);Z=Ut(y,Z);let ct=r.convert(y.format,y.colorSpace),D=r.convert(y.type),K=T(y.internalFormat,ct,D,y.normalized,y.colorSpace,y.isVideoTexture);fe(it,y);let q,ht=y.mipmaps,rt=y.isVideoTexture!==!0,ot=dt.__version===void 0||j===!0,Ct=at.dataReady,Zt=b(y,Z);if(y.isDepthTexture)K=_(y.format===xs,y.type),ot&&(rt?e.texStorage2D(i.TEXTURE_2D,1,K,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,ct,D,null));else if(y.isDataTexture)if(ht.length>0){rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Zt,K,ht[0].width,ht[0].height);for(let st=0,It=ht.length;st<It;st++)q=ht[st],rt?Ct&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,ct,D,q.data):e.texImage2D(i.TEXTURE_2D,st,K,q.width,q.height,0,ct,D,q.data);y.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(i.TEXTURE_2D,Zt,K,Z.width,Z.height),Ct&&mn(y,Z,ct,D)):e.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,ct,D,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,K,ht[0].width,ht[0].height,Z.depth);for(let st=0,It=ht.length;st<It;st++)if(q=ht[st],y.format!==Ni)if(ct!==null)if(rt){if(Ct)if(y.layerUpdates.size>0){let Yt=qd(q.width,q.height,y.format,y.type);for(let gt of y.layerUpdates){let pe=q.data.subarray(gt*Yt/q.data.BYTES_PER_ELEMENT,(gt+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,gt,q.width,q.height,1,ct,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,Z.depth,ct,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,K,q.width,q.height,Z.depth,0,q.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,Z.depth,ct,D,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,K,q.width,q.height,Z.depth,0,ct,D,q.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Zt,K,ht[0].width,ht[0].height);for(let st=0,It=ht.length;st<It;st++)q=ht[st],y.format!==Ni?ct!==null?rt?Ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,ct,q.data):e.compressedTexImage2D(i.TEXTURE_2D,st,K,q.width,q.height,0,q.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ct&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,ct,D,q.data):e.texImage2D(i.TEXTURE_2D,st,K,q.width,q.height,0,ct,D,q.data)}else if(y.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,K,Z.width,Z.height,Z.depth),Ct)if(y.layerUpdates.size>0){let st=qd(Z.width,Z.height,y.format,y.type);for(let It of y.layerUpdates){let Yt=Z.data.subarray(It*st/Z.data.BYTES_PER_ELEMENT,(It+1)*st/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,Z.width,Z.height,1,ct,D,Yt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ct,D,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,ct,D,Z.data);else if(y.isData3DTexture)rt?(ot&&e.texStorage3D(i.TEXTURE_3D,Zt,K,Z.width,Z.height,Z.depth),Ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ct,D,Z.data)):e.texImage3D(i.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,ct,D,Z.data);else if(y.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(i.TEXTURE_2D,Zt,K,Z.width,Z.height);else{let st=Z.width,It=Z.height;for(let Yt=0;Yt<Zt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,K,st,It,0,ct,D,null),st>>=1,It>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Z.parentNode!==st){st.appendChild(Z),d.add(y),st.onpaint=It=>{let Yt=It.changedElements;for(let gt of d)Yt.includes(gt.image)&&(gt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Yt=i.RGBA,gt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,gt,pe,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(rt&&ot){let st=Gt(ht[0]);e.texStorage2D(i.TEXTURE_2D,Zt,K,st.width,st.height)}for(let st=0,It=ht.length;st<It;st++)q=ht[st],rt?Ct&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct,D,q):e.texImage2D(i.TEXTURE_2D,st,K,ct,D,q);y.generateMipmaps=!1}else if(rt){if(ot){let st=Gt(Z);e.texStorage2D(i.TEXTURE_2D,Zt,K,st.width,st.height)}Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,D,Z)}else e.texImage2D(i.TEXTURE_2D,0,K,ct,D,Z);E(y)&&y.mipmapsAutoUpdate===!0&&M(it),dt.__version=at.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Xn(A,y,z){if(y.image.length!==6)return;let it=_e(A,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let at=n.get(j);if(j.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+z);let dt=ne.getPrimaries(ne.workingColorSpace),Y=y.colorSpace===ys?null:ne.getPrimaries(y.colorSpace),Z=y.colorSpace===ys||dt===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ct=y.isCompressedTexture||y.image[0].isCompressedTexture,D=y.image[0]&&y.image[0].isDataTexture,K=[];for(let gt=0;gt<6;gt++)!ct&&!D?K[gt]=x(y.image[gt],!0,s.maxCubemapSize):K[gt]=D?y.image[gt].image:y.image[gt],K[gt]=Ut(y,K[gt]);let q=K[0],ht=r.convert(y.format,y.colorSpace),rt=r.convert(y.type),ot=T(y.internalFormat,ht,rt,y.normalized,y.colorSpace),Ct=y.isVideoTexture!==!0,Zt=at.__version===void 0||it===!0,st=j.dataReady,It=b(y,q);fe(i.TEXTURE_CUBE_MAP,y);let Yt;if(y.isDepthTexture){if(ot=_(y.format===xs,y.type),Zt)if(Ct)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let gt=0;gt<6;gt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,q.width,q.height,0,ht,rt,null)}else if(ct){Ct&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ot,q.width,q.height);for(let gt=0;gt<6;gt++){Yt=K[gt].mipmaps;for(let pe=0;pe<Yt.length;pe++){let nn=Yt[pe];y.format!==Ni?ht!==null?Ct?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,0,0,nn.width,nn.height,ht,nn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,ot,nn.width,nn.height,0,nn.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,0,0,nn.width,nn.height,ht,rt,nn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe,ot,nn.width,nn.height,0,ht,rt,nn.data)}}}else{if(Yt=y.mipmaps,Ct&&Zt){Yt.length>0&&It++;let gt=Gt(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(D){Ct?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,K[gt].width,K[gt].height,ht,rt,K[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,K[gt].width,K[gt].height,0,ht,rt,K[gt].data);for(let pe=0;pe<Yt.length;pe++){let Ps=Yt[pe].image[gt].image;Ct?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,0,0,Ps.width,Ps.height,ht,rt,Ps.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,ot,Ps.width,Ps.height,0,ht,rt,Ps.data)}}else{Ct?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ht,rt,K[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,ht,rt,K[gt]);for(let pe=0;pe<Yt.length;pe++){let nn=Yt[pe];Ct?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,0,0,ht,rt,nn.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,pe+1,ot,ht,rt,nn.image[gt])}}}E(y)&&y.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),at.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Pe(A,y,z,it,j,at){let dt=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),Z=T(z.internalFormat,dt,Y,z.normalized,z.colorSpace),ct=n.get(y),D=n.get(z);if(D.__renderTarget=y,!ct.__hasExternalTextures){let K=Math.max(1,y.width>>at),q=Math.max(1,y.height>>at);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,at,Z,K,q,y.depth,0,dt,Y,null):e.texImage2D(j,at,Z,K,q,0,dt,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,D.__webglTexture,0,Ee(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,j,D.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ki(A,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let it=y.depthTexture,j=it&&it.isDepthTexture?it.type:null,at=_(y.stencilBuffer,j),dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(y),at,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(y),at,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,at,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,A)}else{let it=y.textures;for(let j=0;j<it.length;j++){let at=it[j],dt=r.convert(at.format,at.colorSpace),Y=r.convert(at.type),Z=T(at.internalFormat,dt,Y,at.normalized,at.colorSpace);mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(y),Z,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(y),Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function en(A,y,z){let it=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);j.__renderTarget=y;let at=it?y.depthTexture.image[0]:y.depthTexture.image;(!j.__webglTexture||at.width!==y.width||at.height!==y.height)&&(at.width=y.width,at.height=y.height,y.depthTexture.needsUpdate=!0),it?yt(y.depthTexture,0):xt(y.depthTexture,0);let dt=j.__webglTexture,Y=Ee(y),Z=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ct=y.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ds)mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Z,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ct,Z,dt,0);else if(y.depthTexture.format===xs)mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Z,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ct,Z,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mi(A){let y=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let it=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),it){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=it}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)en(y.__webglFramebuffer[it],A,it);else A.texture.mipmaps.length>0?en(y.__webglFramebuffer[0],A,0):en(y.__webglFramebuffer,A,0);else if(z){y.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[it]),y.__webglDepthbuffer[it]===void 0)y.__webglDepthbuffer[it]=i.createRenderbuffer(),ki(y.__webglDepthbuffer[it],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ki(y.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gi(A,y,z){let it=n.get(A);y!==void 0&&Pe(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&mi(A)}function _i(A){let y=A.texture,z=n.get(A),it=n.get(y);A.addEventListener("dispose",O),N(A);let j=A.textures,at=A.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(dt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=y.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Y=0,Z=j.length;Y<Z;Y++){let ct=n.get(j[Y]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let Z=j[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let ct=r.convert(Z.format,Z.colorSpace),D=r.convert(Z.type),K=T(Z.internalFormat,ct,D,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),q=Ee(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ki(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),fe(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Pe(z.__webglFramebuffer[Y][Z],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Pe(z.__webglFramebuffer[Y],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(y)?M(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Y=0,Z=j.length;Y<Z;Y++){let ct=j[Y],D=n.get(ct),K=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,D.__webglTexture),fe(K,ct),Pe(z.__webglFramebuffer,A,ct,i.COLOR_ATTACHMENT0+Y,K,0),E(ct)&&M(K)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,it.__webglTexture),fe(Y,y),y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Pe(z.__webglFramebuffer[Z],A,y,i.COLOR_ATTACHMENT0,Y,Z);else Pe(z.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Y,0);E(y)?M(Y):y.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&mi(A)}function F(A){let y=A.textures;for(let z=0,it=y.length;z<it;z++){let j=y[z];if(E(j)&&j.mipmapsAutoUpdate===!0){let at=R(A),dt=n.get(j).__webglTexture;e.bindTexture(at,dt),M(at),e.unbindTexture()}}}let xi=[];function be(A){if(A.samples>0){if(mt(A)===!1){let y=A.textures,z=A.width,it=A.height,j=i.COLOR_BUFFER_BIT,at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(A),Y=y.length>1;if(Y)for(let ct=0;ct<y.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<y.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let D=n.get(y[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,z,it,0,0,z,it,j,i.NEAREST),l===!0&&(xi.length=0,xi.push(i.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&xi.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xi))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ct=0;ct<y.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let D=n.get(y[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ee(A){return Math.min(s.maxSamples,A.samples)}function mt(A){let y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function qe(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Ut(A,y){let z=A.colorSpace,it=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==yo&&z!==ys&&(ne.getTransfer(z)===de?(it!==Ni||j!==Yn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",z)),y}function Gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Wt,this.resetTextureUnits=Q,this.getTextureUnits=et,this.setTextureUnits=At,this.setTexture2D=xt,this.setTexture2DArray=Et,this.setTexture3D=Nt,this.setTextureCube=yt,this.rebindTextures=gi,this.setupRenderTarget=_i,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=mi,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=mt,this.dispose=G}function FS(i,t){function e(n,s=ys){let r,a=ne.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Td)return i.BYTE;if(n===wd)return i.SHORT;if(n===Oa)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Cd)return i.ALPHA;if(n===Pd)return i.RGB;if(n===Ni)return i.RGBA;if(n===ds)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===Ys)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===qo||n===$o||n===Yo||n===Zo)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===th||n===eh||n===nh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ih||n===sh||n===rh||n===ah||n===oh||n===Jo||n===lh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ih||n===sh)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ah)return r.COMPRESSED_R11_EAC;if(n===oh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===lh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ch||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===yh||n===vh||n===Mh||n===Sh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ch)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ph)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_h)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sh)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bh||n===Eh||n===Th)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bh)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===Ah||n===Ko||n===Rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var BS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
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

}`,ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $i({vertexShader:BS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $n(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nf=class extends Ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new ef,p={},x=e.getContextAttributes(),E=null,M=null,R=[],T=[],_=new pt,b=null,N=null,C=new on;C.viewport=new Te;let I=new on;I.viewport=new Te;let O=[C,I],H=new Gc,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xt=R[J];return xt===void 0&&(xt=new va,R[J]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(J){let xt=R[J];return xt===void 0&&(xt=new va,R[J]=xt),xt.getGripSpace()},this.getHand=function(J){let xt=R[J];return xt===void 0&&(xt=new va,R[J]=xt),xt.getHandSpace()};function X(J){let xt=T.indexOf(J.inputSource);if(xt===-1)return;let Et=R[xt];Et!==void 0&&(Et.update(J.inputSource,J.frame,c||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let J=0;J<R.length;J++){let xt=T[J];xt!==null&&(T[J]=null,R[J].disconnect(xt))}P=null,G=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),N!==null){let J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Nt=null,yt=null;x.depth&&(yt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=x.stencil?xs:ds,Nt=x.stencil?Cr:Li);let $t={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ai(u.textureWidth,u.textureHeight,{format:Ni,type:Yn,depthTexture:new ms(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ai(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(J){for(let xt=0;xt<J.removed.length;xt++){let Et=J.removed[xt],Nt=T.indexOf(Et);Nt>=0&&(T[Nt]=null,R[Nt].disconnect(Et))}for(let xt=0;xt<J.added.length;xt++){let Et=J.added[xt],Nt=T.indexOf(Et);if(Nt===-1){for(let $t=0;$t<R.length;$t++)if($t>=T.length){T.push(Et),Nt=$t;break}else if(T[$t]===null){T[$t]=Et,Nt=$t;break}if(Nt===-1)break}let yt=R[Nt];yt&&yt.connect(Et)}}function $(J,xt){xt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let xt=J.near,Et=J.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),H.near=I.near=C.near=xt,H.far=I.far=C.far=Et,(P!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,G=H.far),H.layers.mask=J.layers.mask|6,C.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Nt=J.parent,yt=H.cameras;$(H,Nt);for(let $t=0;$t<yt.length;$t++)$(yt[$t],Nt);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,H,Nt)};function Q(J,xt,Et){Et===null?J.matrix.copy(xt.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(xt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xt.projectionMatrix),J.projectionMatrixInverse.copy(xt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_a*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(J){return p[J]};let et=null;function At(J,xt){if(h=xt.getViewerPose(c||a),g=xt,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Nt=!1;Et.length!==H.cameras.length&&(H.cameras.length=0,Nt=!0);for(let zt=0;zt<Et.length;zt++){let fe=Et[zt],_e=null;if(f!==null)_e=f.getViewport(fe);else{let mn=d.getViewSubImage(u,fe);_e=mn.viewport,zt===0&&(t.setRenderTargetTextures(M,mn.colorTexture,mn.depthStencilTexture),t.setRenderTarget(M))}let Qt=O[zt];Qt===void 0&&(Qt=new on,Qt.layers.enable(zt),Qt.viewport=new Te,O[zt]=Qt),Qt.matrix.fromArray(fe.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(fe.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(_e.x,_e.y,_e.width,_e.height),zt===0&&(H.matrix.copy(Qt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Nt===!0&&H.cameras.push(Qt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let zt=d.getDepthInformation(Et[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<Et.length;zt++){let fe=Et[zt].camera;if(fe){let _e=p[fe];_e||(_e=new Io,p[fe]=_e);let Qt=d.getCameraImage(fe);_e.sourceTexture=Qt}}}}for(let Et=0;Et<R.length;Et++){let Nt=T[Et],yt=R[Et];Nt!==null&&yt!==void 0&&yt.update(Nt,xt,c||a)}et&&et(J,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let Wt=new c0;Wt.setAnimationLoop(At),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},kS=new Vt,y0=new Ht;y0.set(-1,0,0,0,1,0,0,0,1);function HS(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),E=x.envMap,M=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(y0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function GS(i,t,e,n){let s={},r={};function a(x,E){let M=E.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,E){let M=s[x.id];M===void 0&&(g(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(x,R);let T=t.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let E=i.createBuffer(),M=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(x){let E=s[x.id],M=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=M.length;T<_;T++){let b=M[T];if(Array.isArray(b))for(let N=0,C=b.length;N<C;N++)h(b[N],T,N,R);else h(b,T,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,E,M,R){if(u(x,E,M,R)===!0){let T=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let N=0;N<_.length;N++){let C=_[N],I=v(C,!0);d(C,x.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function d(x,E,M){typeof x=="number"||typeof x=="boolean"?E[M]=x:x.isMatrix3?(E[M]=x.elements[0],E[M+1]=x.elements[1],E[M+2]=x.elements[2],E[M+3]=0,E[M+4]=x.elements[3],E[M+5]=x.elements[4],E[M+6]=x.elements[5],E[M+7]=0,E[M+8]=x.elements[6],E[M+9]=x.elements[7],E[M+10]=x.elements[8],E[M+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-M),M):x.toArray(E,M)}function u(x,E,M,R){let T=x.value,_=E+"_"+M;if(Array.isArray(T)){R[_]===void 0&&(R[_]=[]);let b=R[_],N=!1;for(let C=0;C<T.length;C++)f(T[C],b,C)===!0&&(N=!0);return N}return f(T,R,_)}function f(x,E,M){if(E[M]===void 0)return typeof x=="number"||typeof x=="boolean"?E[M]=x:ArrayBuffer.isView(x)?E[M]=x.slice():E[M]=x.clone(),!0;{let R=E[M];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(x){let E=x.uniforms,M=0,R=16;for(let _=0,b=E.length;_<b;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,I=N.length;C<I;C++){let O=N[C],H=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(E[_])||Array.isArray(O.value),G=M;for(let V=0,nt=H.length;V<nt;V++){let $=H[V],Q=v($,P),et=M%R,At=et%Q.boundary,Wt=et+At;M+=At,Wt!==0&&R-Wt<Q.storage&&(M+=R-Wt),V===0&&(G=M),M+=Q.storage}let X=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new X((M-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}let T=M%R;return T>0&&(M+=R-T),x.__size=M,x.__cache={},this}function v(x,E){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){let E=x.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}var VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function WS(){return Ji===null&&(Ji=new Ro(VS,16,16,Ys,Di),Ji.name="DFG_LUT",Ji.minFilter=Un,Ji.magFilter=Un,Ji.wrapS=Gi,Ji.wrapT=Gi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var el=class{constructor(t={}){let{canvas:e=Dm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Yn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([jc,Kc,Jc]),p=new Set([Yn,Li,Oa,Cr,$c,Yc]),x=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,T=null,_=[],b=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,O=null,H=null,P=null,G=null;this._outputColorSpace=an;let X=0,V=0,nt=null,$=-1,Q=null,et=new Te,At=new Te,Wt=null,J=new Bt(0),xt=0,Et=e.width,Nt=e.height,yt=1,$t=null,ke=null,zt=new Te(0,0,Et,Nt),fe=new Te(0,0,Et,Nt),_e=!1,Qt=new Hs,mn=new Mc,Xe=!1,Xn=!1,Pe=new Vt,ki=new L,en=new Te,mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gi=!1;function _i(){return nt===null?yt:1}let F=n;function xi(S,U){return e.getContext(S,U)}let be,Ee,mt,qe,Ut,Gt,A,y,z,it,j,at,dt,Y,Z,ct,D,K,q,ht,rt,ot,Ct;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),F===null){let U="webgl2";if(F=xi(U,S),F===null)throw xi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(S){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),kt("WebGLRenderer: "+S.message),S}function Zt(){be=new eM(F),be.init(),rt=new FS(F,be),Ee=new Wv(F,be,t,rt),mt=new US(F,be),Ee.reversedDepthBuffer&&u&&mt.buffers.depth.setReversed(!0),H=F.createFramebuffer(),P=F.createFramebuffer(),G=F.createFramebuffer(),qe=new sM(F),Ut=new MS,Gt=new OS(F,be,mt,Ut,Ee,rt,qe),A=new tM(C),y=new ax(F),ot=new Gv(F,y),z=new nM(F,y,qe,ot),it=new aM(F,z,y,ot,qe),K=new rM(F,Ee,Gt),Z=new Xv(Ut),j=new vS(C,A,be,Ee,ot,Z),at=new HS(C,Ut),dt=new bS,Y=new CS(be),D=new Hv(C,A,mt,it,g,l),ct=new NS(C,it,Ee),Ct=new GS(F,qe,Ee,mt),q=new Vv(F,be,qe),ht=new iM(F,be,qe),qe.programs=j.programs,C.capabilities=Ee,C.extensions=be,C.properties=Ut,C.renderLists=dt,C.shadowMap=ct,C.state=mt,C.info=qe}v!==Yn&&(N=new lM(v,e.width,e.height,o,s,r));let st=new nf(C,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(S){S!==void 0&&(yt=S,this.setSize(Et,Nt,!1))},this.getSize=function(S){return S.set(Et,Nt)},this.setSize=function(S,U,W=!0){if(st.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=S,Nt=U,e.width=Math.floor(S*yt),e.height=Math.floor(U*yt),W===!0&&(e.style.width=S+"px",e.style.height=U+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Et*yt,Nt*yt).floor()},this.setDrawingBufferSize=function(S,U,W){Et=S,Nt=U,yt=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Yn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(zt)},this.setViewport=function(S,U,W,B){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,U,W,B),mt.viewport(et.copy(zt).multiplyScalar(_i()).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,U,W,B){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,U,W,B),mt.scissor(At.copy(fe).multiplyScalar(_i()).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(S){mt.setScissorTest(_e=S)},this.setOpaqueSort=function(S){$t=S},this.setTransparentSort=function(S){ke=S},this.getClearColor=function(S){return S.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let B=0;if(S){let k=!1;if(nt!==null){let ft=nt.texture.format;k=m.has(ft)}if(k){let ft=nt.texture.type,bt=p.has(ft),ut=D.getClearColor(),vt=D.getClearAlpha(),Rt=ut.r,Xt=ut.g,te=ut.b;bt?(x[0]=Rt,x[1]=Xt,x[2]=te,x[3]=vt,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=Rt,E[1]=Xt,E[2]=te,E[3]=vt,F.clearBufferiv(F.COLOR,0,E))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),D.dispose(),dt.dispose(),Y.dispose(),Gt.dispose(),Ut.dispose(),A.dispose(),it.dispose(),z.dispose(),ot.dispose(),Ct.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",cp),st.removeEventListener("sessionend",hp),_r.stop()};function It(S){S.preventDefault(),So("WebGLRenderer: Context Lost."),I=!0}function Yt(){So("WebGLRenderer: Context Restored."),I=!1;let S=qe.autoReset,U=ct.enabled,W=ct.autoUpdate,B=ct.needsUpdate,k=ct.type;Zt(),qe.autoReset=S,ct.enabled=U,ct.autoUpdate=W,ct.needsUpdate=B,ct.type=k}function gt(S){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){let U=S.target;U.removeEventListener("dispose",pe),nn(U)}function nn(S){Ps(S),Ut.remove(S)}function Ps(S){let U=Ut.get(S).programs;U!==void 0&&(U.forEach(function(W){j.releaseProgram(W)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,B,k,ft){U===null&&(U=mi);let bt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ut=jg(S,U,W,B,k);mt.setMaterial(B,bt);let vt=W.index,Rt=1;if(B.wireframe===!0){if(vt=z.getWireframeAttribute(W),vt===void 0)return;Rt=2}let Xt=W.drawRange,te=W.attributes.position,Tt=Xt.start*Rt,ee=(Xt.start+Xt.count)*Rt;ft!==null&&(Tt=Math.max(Tt,ft.start*Rt),ee=Math.min(ee,(ft.start+ft.count)*Rt)),vt!==null?(Tt=Math.max(Tt,0),ee=Math.min(ee,vt.count)):te!=null&&(Tt=Math.max(Tt,0),ee=Math.min(ee,te.count));let He=ee-Tt;if(He<0||He===1/0)return;ot.setup(k,B,ut,W,vt);let ye,xe=q;if(vt!==null&&(ye=y.get(vt),xe=ht,xe.setIndex(ye)),k.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*_i()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(k.isLine){let bn=B.linewidth;bn===void 0&&(bn=1),mt.setLineWidth(bn*_i()),k.isLineSegments?xe.setMode(F.LINES):k.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else k.isPoints?xe.setMode(F.POINTS):k.isSprite&&xe.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(be.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let bn=k._multiDrawStarts,wt=k._multiDrawCounts,Ln=k._multiDrawCount,he=vt?y.get(vt).bytesPerElement:1,xr=Ut.get(B).currentProgram.getUniforms();for(let En=0;En<Ln;En++)xr.setValue(F,"_gl_DrawID",En),xe.render(bn[En]/he,wt[En])}else if(k.isInstancedMesh)xe.renderInstances(Tt,He,k.count);else if(W.isInstancedBufferGeometry){let bn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wt=Math.min(W.instanceCount,bn);xe.renderInstances(Tt,He,wt)}else xe.render(Tt,He)};function lp(S,U,W,B){O!==null&&S.isNodeMaterial&&O.setObject(B,S),Xe===!0&&Z.setState(S,W,!1),S.transparent===!0&&S.side===kn&&S.forceSinglePass===!1?(S.side=zn,S.needsUpdate=!0,no(S,U,B),S.side=$s,S.needsUpdate=!0,no(S,U,B),S.side=kn):no(S,U,B)}this.compile=function(S,U,W=null){W===null&&(W=S),O!==null&&O.renderStart(S,U,W),T=Y.get(W),T.init(U),b.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Xn=this.localClippingEnabled,Xe=Z.init(this.clippingPlanes,Xn),Xe===!0&&Z.setGlobalState(this.clippingPlanes,U),O!==null&&ct.render(T.state.shadowsArray,W,U);let B=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ft=k.material;if(ft)if(Array.isArray(ft))for(let bt=0;bt<ft.length;bt++){let ut=ft[bt];lp(ut,W,U,k),B.add(ut)}else lp(ft,W,U,k),B.add(ft)}),T=b.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(S,U,W=null){let B=this.compile(S,U,W);return new Promise(k=>{function ft(){if(B.forEach(function(bt){let vt=Ut.get(bt).currentProgram;(vt===void 0||vt.isReady())&&B.delete(bt)}),B.size===0){k(S);return}setTimeout(ft,10)}be.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Pu=null;function Jg(S){Pu&&Pu(S)}function cp(){_r.stop()}function hp(){_r.start()}let _r=new c0;_r.setAnimationLoop(Jg),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(S){Pu=S,st.setAnimationLoop(S),S===null?_r.stop():_r.start()},st.addEventListener("sessionstart",cp),st.addEventListener("sessionend",hp),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(S,U);let W=st.enabled===!0&&st.isPresenting===!0,B=N!==null&&(nt===null||W)&&N.begin(C,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,nt),T=Y.get(S,b.length),T.init(U),T.state.textureUnits=Gt.getTextureUnits(),b.push(T),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?mn.setFromArrayCamera(U):Qt.setFromProjectionMatrix(Pe,vi,U.reversedDepth),Xn=this.localClippingEnabled,Xe=Z.init(this.clippingPlanes,Xn),R=dt.get(S,_.length),R.init(),_.push(R),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let bt=C.xr.getDepthSensingMesh();bt!==null&&Iu(bt,U,-1/0,C.sortObjects)}Iu(S,U,0,C.sortObjects),R.finish(),O!==null&&O.updateLights(T.state.lightsArray),C.sortObjects===!0&&R.sort($t,ke),gi=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,gi&&D.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Z.beginShadows();let k=T.state.shadowsArray;if(ct.render(k,S,U),Xe===!0&&Z.endShadows(),(B&&N.hasRenderPass())===!1){let bt=R.opaque,ut=R.transmissive;if(T.setupLights(),U.isArrayCamera){let vt=U.cameras;if(ut.length>0)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){let te=vt[Rt];dp(bt,ut,S,te)}gi&&D.render(S);for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){let te=vt[Rt];up(R,S,te,te.viewport)}}else ut.length>0&&dp(bt,ut,S,U),gi&&D.render(S),up(R,S,U)}nt!==null&&V===0&&(Gt.updateMultisampleRenderTarget(nt),Gt.updateRenderTargetMipmap(nt)),B&&N.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),ot.resetDefaultState(),$=-1,Q=null,b.pop(),b.length>0?(T=b[b.length-1],Gt.setTextureUnits(T.state.textureUnits),Xe===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,O!==null&&O.renderEnd()};function Iu(S,U,W,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let bt=U.isArrayCamera?mn:Qt;if(!S.frustumCulled||S.intersectsFrustum(bt)){B&&en.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);let ut=it.update(S),vt=S.material;vt.visible&&R.push(S,ut,vt,W,en.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let bt=U.isArrayCamera?mn:Qt;if(!S.frustumCulled||S.intersectsFrustum(bt)){let ut=it.update(S),vt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),en.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),en.copy(ut.boundingSphere.center)),en.applyMatrix4(S.matrixWorld).applyMatrix4(Pe)),Array.isArray(vt)){let Rt=ut.groups;for(let Xt=0,te=Rt.length;Xt<te;Xt++){let Tt=Rt[Xt],ee=vt[Tt.materialIndex];ee&&ee.visible&&R.push(S,ut,ee,W,en.z,Tt,U)}}else vt.visible&&R.push(S,ut,vt,W,en.z,null,U)}}}let ft=S.children;for(let bt=0,ut=ft.length;bt<ut;bt++)Iu(ft[bt],U,W,B)}function up(S,U,W,B){let{opaque:k,transmissive:ft,transparent:bt}=S;T.setupLightsView(W),Xe===!0&&Z.setGlobalState(C.clippingPlanes,W),B&&mt.viewport(et.copy(B)),k.length>0&&Ll(k,U,W),ft.length>0&&Ll(ft,U,W),bt.length>0&&Ll(bt,U,W),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function dp(S,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Tt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new ai(1,1,{generateMipmaps:!0,type:Tt?Di:Yn,minFilter:_s,samples:Math.max(4,Ee.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let ft=T.state.transmissionRenderTarget[B.id],bt=B.viewport||et;ft.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);let ut=C.getRenderTarget(),vt=C.getActiveCubeFace(),Rt=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(J),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),gi&&D.render(W);let Xt=C.toneMapping;C.toneMapping=Zi;let te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Xe===!0&&Z.setGlobalState(C.clippingPlanes,B),Ll(S,W,B),Gt.updateMultisampleRenderTarget(ft),Gt.updateRenderTargetMipmap(ft),be.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ee=0,He=U.length;ee<He;ee++){let ye=U[ee],{object:xe,geometry:bn,material:wt,group:Ln}=ye;if(wt.side===kn&&xe.layers.test(B.layers)){let he=wt.side;wt.side=zn,wt.needsUpdate=!0,fp(xe,W,B,bn,wt,Ln),wt.side=he,wt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Gt.updateMultisampleRenderTarget(ft),Gt.updateRenderTargetMipmap(ft))}C.setRenderTarget(ut,vt,Rt),C.setClearColor(J,xt),te!==void 0&&(B.viewport=te),C.toneMapping=Xt}function Ll(S,U,W){let B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ft=S.length;k<ft;k++){let bt=S[k],{object:ut,geometry:vt,group:Rt}=bt,Xt=bt.material;Xt.allowOverride===!0&&B!==null&&(Xt=B),ut.layers.test(W.layers)&&fp(ut,U,W,vt,Xt,Rt)}}function fp(S,U,W,B,k,ft){O!==null&&k.isNodeMaterial&&O.setObject(S,k),S.onBeforeRender(C,U,W,B,k,ft),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(C,U,W,B,S,ft),k.transparent===!0&&k.side===kn&&k.forceSinglePass===!1?(k.side=zn,k.needsUpdate=!0,C.renderBufferDirect(W,U,B,k,S,ft),k.side=$s,k.needsUpdate=!0,C.renderBufferDirect(W,U,B,k,S,ft),k.side=kn):C.renderBufferDirect(W,U,B,k,S,ft),S.onAfterRender(C,U,W,B,k,ft)}function pp(S){let U=0;for(let W of S)W.texture!==null&&U++;return U}function no(S,U,W){U.isScene!==!0&&(U=mi);let B=Ut.get(S),k=T.state.lights,ft=T.state.shadowsArray,bt=k.state.version,ut=j.getParameters(S,k.state,ft,U,W,T.state.lightProbeGridArray),vt=j.getProgramCacheKey(ut),Rt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Xt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=A.get(S.envMap||B.environment,Xt),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",pe),Rt=new Map,B.programs=Rt,B.programVariants=new Map);let te=Rt.get(vt);if(te!==void 0){if(B.currentProgram===te&&B.lightsStateVersion===bt)return gp(S,ut),te}else ut.uniforms=j.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,W,ut),S.onBeforeCompile(ut,C),te=j.acquireProgram(ut,vt),Rt.set(vt,te),B.uniforms=ut.uniforms;let Tt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=Z.uniform),gp(S,ut),B.needsLights=t_(S),B.lightsStateVersion=bt,B.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.sunLights.value=k.state.sun,Tt.sunLightShadows.value=k.state.sunShadow,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.sunShadowMatrix.value=k.state.sunShadowMatrix,Tt.sunShadowCascade.value=k.state.sunShadowCascade,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=pp(T.state.lightProbeGridArray),B.currentProgram=te,B.uniformsList=null,te}function Kg(S,U,W,B,k){let ft=Ut.get(S),bt=ft.currentProgram.id+","+B+","+k,ut=ft.programVariants.get(bt);return ut===void 0?(ut=no(S,U,W),ft.programVariants.set(bt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=B,ft.toneMapping=k),ut}function mp(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Fa.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function gp(S,U){let W=Ut.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function jg(S,U,W,B,k){U.isScene!==!0&&(U=mi),Gt.resetTextureUnits();let ft=U.fog,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ut=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Rt=A.get(B.envMap||bt,vt),Xt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,te=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,He=!!W.morphAttributes.color,ye=Zi;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ye=C.toneMapping);let xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,bn=xe!==void 0?xe.length:0,wt=Ut.get(B),Ln=T.state.lights;if(Xe===!0&&(Xn===!0||S!==Q)){let Ie=S===Q&&B.id===$;Z.setState(B,S,Ie)}let he=!1,xr=!1;B.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==Ln.state.version||k.isBatchedMesh&&wt.batching===!1||!k.isBatchedMesh&&wt.batching===!0||k.isBatchedMesh&&wt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&wt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&wt.instancing===!1||!k.isInstancedMesh&&wt.instancing===!0||k.isSkinnedMesh&&wt.skinning===!1||!k.isSkinnedMesh&&wt.skinning===!0||k.isInstancedMesh&&wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&wt.instancingMorph===!1&&k.morphTexture!==null||wt.envMap!==Rt||B.fog===!0&&wt.fog!==ft||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Z.numPlanes||wt.numIntersection!==Z.numIntersection)||wt.vertexAlphas!==Xt||wt.vertexTangents!==te||wt.morphTargets!==Tt||wt.morphNormals!==ee||wt.morphColors!==He||wt.morphTargetsCount!==bn||wt.numLightProbeGrids!==pp(T.state.lightProbeGridArray)?he=!0:(wt.outputColorSpace!==ut||wt.toneMapping!==ye)&&(xr=!0):(he=!0,wt.__version=B.version);let En=wt.currentProgram;(he===!0||xr===!0)&&(En=xr===!0?Kg(B,U,k,ut,ye):no(B,U,k),O&&B.isNodeMaterial&&O.onUpdateProgram(B,En,wt));let Dl=!1,Is=!1,yr=!1,re=En.getUniforms(),gn=wt.uniforms;if(mt.useProgram(En.program)&&(Dl=!0,Is=!0,yr=!0),B.id!==$&&($=B.id,Is=!0),Dl||Q!==S){mt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),re.setValue(F,"projectionMatrix",S.projectionMatrix),re.setValue(F,"viewMatrix",S.matrixWorldInverse);let sn=re.map.cameraPosition;sn!==void 0&&sn.setValue(F,ki.setFromMatrixPosition(S.matrixWorld)),Ee.logarithmicDepthBuffer&&re.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Is=!0,yr=!0)}if(wt.needsLights&&(Ln.state.sunShadowMap.length>0&&re.setValue(F,"sunShadowMap",Ln.state.sunShadowMap,Gt),Ln.state.directionalShadowMap.length>0&&re.setValue(F,"directionalShadowMap",Ln.state.directionalShadowMap,Gt),Ln.state.spotShadowMap.length>0&&re.setValue(F,"spotShadowMap",Ln.state.spotShadowMap,Gt),Ln.state.pointShadowMap.length>0&&re.setValue(F,"pointShadowMap",Ln.state.pointShadowMap,Gt)),k.isSkinnedMesh){re.setOptional(F,k,"bindMatrix"),re.setOptional(F,k,"bindMatrixInverse");let Ie=k.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),re.setValue(F,"boneTexture",Ie.boneTexture,Gt))}k.isBatchedMesh&&(re.setOptional(F,k,"batchingTexture"),re.setValue(F,"batchingTexture",k._matricesTexture,Gt),re.setOptional(F,k,"batchingIdTexture"),re.setValue(F,"batchingIdTexture",k._indirectTexture,Gt),re.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&re.setValue(F,"batchingColorTexture",k._colorsTexture,Gt));let Ai=W.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&K.update(k,W,En),(Is||wt.receiveShadow!==k.receiveShadow)&&(wt.receiveShadow=k.receiveShadow,re.setValue(F,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=WS()),Is){if(re.setValue(F,"toneMappingExposure",C.toneMappingExposure),wt.needsLights&&Qg(gn,yr),ft&&B.fog===!0&&at.refreshFogUniforms(gn,ft),at.refreshMaterialUniforms(gn,B,yt,Nt,T.state.transmissionRenderTarget[S.id]),wt.needsLights&&wt.numLightProbeGrids>0){let Ie=M,sn=0;for(let ss of T.state.lightProbeGridArray)ss.texture!==null&&(Ie.textures[sn]=ss.texture,Ie.min[sn]=ss.boundingBox.min,Ie.max[sn]=ss.boundingBox.max,Ie.resolution[sn]=ss.resolution,sn++);for(let ss in Ie)Ie[ss].length=sn;gn.probesSH.value=Ie.textures,gn.probesMin.value=Ie.min,gn.probesMax.value=Ie.max,gn.probesResolution.value=Ie.resolution}Fa.upload(F,mp(wt),gn,Gt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fa.upload(F,mp(wt),gn,Gt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(F,"center",k.center),re.setValue(F,"modelViewMatrix",k.modelViewMatrix),re.setValue(F,"normalMatrix",k.normalMatrix),re.setValue(F,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let Ie=B.uniformsGroups;for(let sn=0,ss=Ie.length;sn<ss;sn++){let xp=Ie[sn];Ct.update(xp,En),Ct.bind(xp,En)}}return En}function Qg(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function t_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,U,W){let B=Ut.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ut.get(S.texture).__webglTexture=U,Ut.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let W=Ut.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){nt=S,X=U,V=W;let B=null,k=!1,ft=!1;if(S){let ut=Ut.get(S);if(ut.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(F.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(S.viewport),At.copy(S.scissor),Wt=S.scissorTest,mt.viewport(et),mt.scissor(At),mt.setScissorTest(Wt),$=-1;return}else if(ut.__webglFramebuffer===void 0)Gt.setupRenderTarget(S);else if(ut.__hasExternalTextures)Gt.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xt=S.depthTexture;if(ut.__boundDepthTexture!==Xt){if(Xt!==null&&Ut.has(Xt)&&(S.width!==Xt.image.width||S.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(S)}}let vt=S.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let Rt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?B=Rt[U][W]:B=Rt[U],k=!0):S.samples>0&&Gt.useMultisampledRTT(S)===!1?B=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[W]:B=Rt,et.copy(S.viewport),At.copy(S.scissor),Wt=S.scissorTest}else et.copy(zt).multiplyScalar(yt).floor(),At.copy(fe).multiplyScalar(yt).floor(),Wt=_e;if(W!==0&&(B=H),mt.bindFramebuffer(F.FRAMEBUFFER,B)&&mt.drawBuffers(S,B),mt.viewport(et),mt.scissor(At),mt.setScissorTest(Wt),k){let ut=Ut.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,W)}else if(ft){let ut=U;for(let vt=0;vt<S.textures.length;vt++){let Rt=Ut.get(S.textures[vt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+vt,Rt.__webglTexture,W,ut)}}else if(S!==null&&W!==0){let ut=Ut.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ut.__webglTexture,W)}$=-1};function _p(S){let U=Ut.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=Ee.textureFormatReadable(S.format),U.__typeReadable=Ee.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,W,B,k,ft,bt,ut=0){if(!(S&&S.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(vt=vt[bt],Array.isArray(vt)&&(vt=vt[0])),vt){mt.bindFramebuffer(F.FRAMEBUFFER,vt);try{let Rt=S.textures[ut],Xt=Rt.format,te=Rt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);let Tt=_p(Rt);if(Tt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&W>=0&&W<=S.height-k&&F.readPixels(U,W,B,k,rt.convert(Xt),rt.convert(te),ft)}finally{let Rt=nt!==null?Ut.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,B,k,ft,bt,ut=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(vt=vt[bt],Array.isArray(vt)&&(vt=vt[0])),vt)if(U>=0&&U<=S.width-B&&W>=0&&W<=S.height-k){mt.bindFramebuffer(F.FRAMEBUFFER,vt);let Rt=S.textures[ut],Xt=Rt.format,te=Rt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);let Tt=_p(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(U,W,B,k,rt.convert(Xt),rt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let He=nt!==null?Ut.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,He);let ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Um(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(ye),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){let B=Math.pow(2,-W),k=Math.floor(S.image.width*B),ft=Math.floor(S.image.height*B),bt=U!==null?U.x:0,ut=U!==null?U.y:0;Gt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,bt,ut,k,ft),mt.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,B=null,k=0,ft=0){let bt,ut,vt,Rt,Xt,te,Tt,ee,He,ye=S.isCompressedTexture?S.mipmaps[ft]:S.image;if(W!==null)bt=W.max.x-W.min.x,ut=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Xt=W.min.y,te=W.isBox3?W.min.z:0;else{let re=Math.pow(2,-k);bt=Math.floor(ye.width*re),ut=Math.floor(ye.height*re),S.isDataArrayTexture?vt=ye.depth:S.isData3DTexture?vt=Math.floor(ye.depth*re):vt=1,Rt=0,Xt=0,te=0}B!==null?(Tt=B.x,ee=B.y,He=B.z):(Tt=0,ee=0,He=0);let xe=rt.convert(U.format),bn=rt.convert(U.type),wt;U.isData3DTexture?(Gt.setTexture3D(U,0),wt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Gt.setTexture2DArray(U,0),wt=F.TEXTURE_2D_ARRAY):(Gt.setTexture2D(U,0),wt=F.TEXTURE_2D),mt.activeTexture(F.TEXTURE0),mt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),mt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),mt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=mt.getParameter(F.UNPACK_ROW_LENGTH),he=mt.getParameter(F.UNPACK_IMAGE_HEIGHT),xr=mt.getParameter(F.UNPACK_SKIP_PIXELS),En=mt.getParameter(F.UNPACK_SKIP_ROWS),Dl=mt.getParameter(F.UNPACK_SKIP_IMAGES);mt.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),mt.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let Is=S.isDataArrayTexture||S.isData3DTexture,yr=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let re=Ut.get(S),gn=Ut.get(U),Ai=Ut.get(re.__renderTarget),Ie=Ut.get(gn.__renderTarget);mt.bindFramebuffer(F.READ_FRAMEBUFFER,Ai.__webglFramebuffer),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let sn=0;sn<vt;sn++)Is&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(S).__webglTexture,k,te+sn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,ft,He+sn)),F.blitFramebuffer(Rt,Xt,Rt+bt,Xt+ut,Tt,ee,Tt+bt,ee+ut,F.DEPTH_BUFFER_BIT,F.NEAREST);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Ut.has(S)){let re=Ut.get(S),gn=Ut.get(U);mt.bindFramebuffer(F.READ_FRAMEBUFFER,P),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let Ai=0;Ai<vt;Ai++)Is?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,re.__webglTexture,k,te+Ai):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,re.__webglTexture,k),yr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,ft,He+Ai):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,ft),k!==0?F.blitFramebuffer(Rt,Xt,Rt+bt,Xt+ut,Tt,ee,Tt+bt,ee+ut,F.COLOR_BUFFER_BIT,F.NEAREST):yr?F.copyTexSubImage3D(wt,ft,Tt,ee,He+Ai,Rt,Xt,bt,ut):F.copyTexSubImage2D(wt,ft,Tt,ee,Rt,Xt,bt,ut);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yr?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(wt,ft,Tt,ee,He,bt,ut,vt,xe,bn,ye.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,ft,Tt,ee,He,bt,ut,vt,xe,ye.data):F.texSubImage3D(wt,ft,Tt,ee,He,bt,ut,vt,xe,bn,ye):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ft,Tt,ee,bt,ut,xe,bn,ye.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ft,Tt,ee,ye.width,ye.height,xe,ye.data):F.texSubImage2D(F.TEXTURE_2D,ft,Tt,ee,bt,ut,xe,bn,ye);mt.pixelStorei(F.UNPACK_ROW_LENGTH,Ln),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,xr),mt.pixelStorei(F.UNPACK_SKIP_ROWS,En),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,Dl),ft===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(wt),mt.unbindTexture()},this.initRenderTarget=function(S){Ut.get(S).__webglFramebuffer===void 0&&Gt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Gt.setTextureCube(S,0):S.isData3DTexture?Gt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Gt.setTexture2DArray(S,0):Gt.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){X=0,V=0,nt=null,mt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var v0={type:"change"},rf={type:"start"},S0={type:"end"},Oh=new Bs,M0=new ri,qS=Math.cos(70*Hd.DEG2RAD),Je=new L,Zn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sf=1e-6,Fh=class extends Vo{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new cn,this._lastTargetPosition=new L,this._quat=new cn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ia,this._sphericalDelta=new Ia,this._scale=1,this._panOffset=new L,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new L,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YS.bind(this),this._onPointerDown=$S.bind(this),this._onPointerUp=ZS.bind(this),this._onContextMenu=n1.bind(this),this._onMouseWheel=jS.bind(this),this._onKeyDown=QS.bind(this),this._onTouchStart=t1.bind(this),this._onTouchMove=e1.bind(this),this._onMouseDown=JS.bind(this),this._onMouseMove=KS.bind(this),this._interceptControlDown=i1.bind(this),this._interceptControlUp=s1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(v0),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zn:n>Math.PI&&(n-=Zn),s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Je.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Oh.origin.copy(this.object.position),Oh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oh.direction))<qS?this.object.lookAt(this.target):(M0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oh.intersectPlane(M0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sf||this._lastTargetPosition.distanceToSquared(this.target)>sf?(this.dispatchEvent(v0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){this.screenSpacePanning===!0?Je.setFromMatrixColumn(e,1):(Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je)),Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Je.copy(s).sub(this.target);let r=Je.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function $S(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ZS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(S0),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function JS(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case Bn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case Bn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(rf)}function KS(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jS(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(rf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(S0))}function QS(i){this.enabled!==!1&&this._handleKeyDown(i)}function t1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1){this.state=ue.NONE;break}this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1){this.state=ue.NONE;break}this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(rf)}function e1(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function n1(i){this.enabled!==!1&&i.preventDefault()}function i1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bl="\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744",pl="ugauga_village",r1="\uC54C",hi="\uC6B0\uAC00",ws=[{name:"\uB3D9\uAD74",at:0,pet:"\uC9D1 \uC606 \uB465\uC9C0\uC5D0 \uC54C\uC774 \uB193\uC5EC\uC694"},{name:"\uC6C0\uB9C9",at:100,pet:"\uC54C\uC5D0 \uAE08\uC774 \uAC00\uC694"},{name:"\uB3CC\uC9D1",at:1e3,pet:"\uC54C\uC774 \uAE68\uACE0 \uC544\uAE30 \uACF5\uB8E1\uC774 \uB098\uC640\uC694"},{name:"\uACF5\uB8E1",at:5e3,pet:"\uB2E4 \uC790\uB780 \uACF5\uB8E1\uC774 \uB9C8\uC744\uC744 \uAC78\uC5B4 \uB2E4\uB140\uC694. \uB9C8\uC744\uB3C4 \uB113\uC5B4\uC838\uC694"}],zf=100,a1="2026-11-12",w=i=>document.getElementById(i),In=new URLSearchParams(location.search),ns=60,gf=86,fi=[[16,14],[23,20],[30,26]];function X0(i){if(!i)return{x:0,z:0};let t=1;for(;i>3*t*(t+1);)t++;let e=i-3*t*(t-1)-1,n=Math.floor(e/t),s=e%t,r=n*Math.PI/3,a=r+2*Math.PI/3,o=l=>Math.sin(i*12.9898+l)*43758.5453%1*4;return{x:(Math.cos(r)*t+Math.cos(a)*s)*gf+o(1),z:(Math.sin(r)*t+Math.sin(a)*s)*gf+o(2)}}function kf(i){let t=Math.floor(i/ns),e=X0(t),n=i%ns,s=0;for(;n>=fi[s][1];)n-=fi[s++][1];let[r,a]=fi[s],o=n/a*2*Math.PI+s*.5+t;return{x:e.x+Math.cos(o)*r,z:e.z+Math.sin(o)*r,cx:e.x,cz:e.z}}var We=+In.get("demo")||0,ni=/^http:\/\/localhost:\d+$/.test(In.get("api"))?In.get("api"):"https://ugauga-api.ugauga-village.workers.dev",[Xa,_f]=await Promise.all([fetch("./residents.json",{cache:"no-store"}).then(i=>i.json()).catch(()=>({followers:0,residents:[]})),ni&&!We?fetch(ni+"/api/residents",{signal:AbortSignal.timeout(3e3)}).then(i=>i.json()).catch(()=>null):null]);if(_f){let i=new Set(Xa.residents.map(t=>t.toLowerCase()));for(let t of _f.joined||[])i.has(t.toLowerCase())||(i.add(t.toLowerCase()),Xa.residents.push(t))}var le=We?Array.from({length:We},(i,t)=>"sample_"+(t+1)):Xa.residents,Oe=le.length,El=We||Math.max(Xa.followers||0,_f?.followers||0,Oe),ge=In.has("era")?Math.min(ws.length-1,Math.max(0,+In.get("era")||0)):ws.findLastIndex(i=>El>=i.at),ze=ge===3;ze&&(gf=176,fi=[[26,14],[42,20],[58,26]]);var q0=fi[1][0]-fi[0][0],b0=ze?2.6:.75,qa=i=>fi[i][0]+q0/2,Ti=fi[2][0]+q0/2+4,ar=fi[0][0]-3.5;if(In.has("test")){let i=1/0,t=Array.from({length:1500},(e,n)=>kf(n));for(let e=0;e<t.length;e++)for(let n=0;n<e;n++)i=Math.min(i,Math.hypot(t[e].x-t[n].x,t[e].z-t[n].z));console.assert(i>5,"plots overlap",i),document.title=`plot test ${i>5?"OK":"FAIL"} min=${i.toFixed(2)}`}var $0=Math.floor(Oe/ns)+1,dn=Array.from({length:$0},(i,t)=>X0(t)),oe=Math.max(...dn.map(i=>Math.hypot(i.x,i.z)))+Ti+10,pn=In.has("fps");document.body.classList.toggle("shoot",pn);var Y0=Math.max(1,Math.floor((Date.now()-new Date(a1+"T00:00:00+09:00"))/864e5)+1);w("vname").textContent=bl;w("vname").insertAdjacentHTML("beforeend",`<small>${Y0}\uC77C\uC9F8</small>`);w("medal").textContent=ws[ge].name;w("vstat").textContent=`${ws[ge].name} \uC2DC\uB300 \xB7 \uC9D1 ${Oe.toLocaleString()}\uCC44`+(Oe>ns?` \xB7 \uB3D9\uB124 ${Math.ceil(Oe/ns)}\uACF3`:"");var or=ws[ge+1];w("vnext").textContent=or?`${or.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,or.at-El).toLocaleString()}\uBA85`:"";var o1=300,E0=100,l1=(Math.floor(El/E0)+1)*E0;w("kw").textContent=`\u300C${r1}\u300D`;w("istat").textContent=`\uC9D1 ${Oe.toLocaleString()}\uCC44 \xB7 ${ws[ge].name} \uC2DC\uB300`;pl&&(w("iglink").href=`https://www.instagram.com/${pl}/`);w("join").onclick=()=>w("how").showModal();w("howx").onclick=()=>w("how").close();var pi=matchMedia("(pointer:coarse)").matches||innerWidth<700||In.has("lite"),c1=15776138,Ae=new el({canvas:w("c"),antialias:!0,powerPreference:"high-performance"});Ae.setPixelRatio(Math.min(devicePixelRatio,pi?1.5:2));Ae.toneMapping=Na;Ae.toneMappingExposure=.95;Ae.shadowMap.enabled=!0;var se=new Ma;se.fog=new Eo(c1,160,720+oe*2);var me=new on(50,1,.5,Math.max(2500,oe*4+700));me.position.set(0,oe*.9+15,oe*1.3+25);var qt=new Fh(me,Ae.domElement);qt.enableDamping=!0;qt.maxPolarAngle=1.45;qt.minDistance=8;qt.maxDistance=oe*3+80;qt.autoRotate=!0;qt.autoRotateSpeed=.3;qt.screenSpacePanning=!1;var T0={map:[{LEFT:Bn.PAN,MIDDLE:Bn.DOLLY,RIGHT:Bn.ROTATE},{ONE:ci.PAN,TWO:ci.DOLLY_ROTATE}],look:[{LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.ROTATE},{ONE:ci.ROTATE,TWO:ci.DOLLY_ROTATE}]},Hf=i=>{Object.assign(qt.mouseButtons,T0[i][0]),Object.assign(qt.touches,T0[i][1]),qt.enablePan=qt.zoomToCursor=i==="map"};Hf("map");{let i=new Map,t=Ae.domElement,e=null,n=()=>{let[r,a]=[...i.values()];return Math.atan2(a.y-r.y,a.x-r.x)};t.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(i.set(r.pointerId,{x:r.clientX,y:r.clientY}),e=i.size===2?n():null)}),t.addEventListener("pointermove",r=>{if(!i.has(r.pointerId)||(i.set(r.pointerId,{x:r.clientX,y:r.clientY}),i.size!==2||e===null))return;let a=n(),o=Math.atan2(Math.sin(a-e),Math.cos(a-e));e=a,qt._rotateLeft(-o*1.3)});let s=r=>{i.delete(r.pointerId),e=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}var di=null;qt.addEventListener("start",()=>{qt.autoRotate=!1,di=null});var xf=new Ra(16773336,6969920,.95);se.add(xf);var ml=new L(-80,110,60),Bh=Math.min(oe+12,95),Ve=new Ca(16765600,2.7);Ve.castShadow=!0;Ve.shadow.mapSize.setScalar(pi?1024:2048);Object.assign(Ve.shadow.camera,{left:-Bh,right:Bh,top:Bh,bottom:-Bh,near:1,far:420});Ve.shadow.bias=-5e-4;Ve.shadow.normalBias=.35;Ve.shadow.autoUpdate=!1;se.add(Ve,Ve.target);function Gf(){Ae.setSize(innerWidth,innerHeight,!1),me.aspect=innerWidth/innerHeight,me.updateProjectionMatrix()}addEventListener("resize",Gf);Gf();var za=7,Ft=()=>{za|=0,za=za+1831565813|0;let i=Math.imul(za^za>>>15,1|za);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296},Be=(i,t=0)=>{let e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},Z0=Ae.capabilities.getMaxAnisotropy();function Hn(i,t,e=1,n=1){let s=document.createElement("canvas");s.width=s.height=i,t(s.getContext("2d"),i);let r=new Gs(s);return r.colorSpace=an,r.wrapS=r.wrapT=pa,r.repeat.set(e,n),r.anisotropy=Z0,r}var Fr=(i,t,e)=>{let n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n},Qh=[-1,0,1],Kn=(i,t,e)=>{i.globalAlpha=1,i.fillStyle=e,i.fillRect(0,0,t,t)};function Ke(i,t,e,n,s,r,a){for(let o=0;o<e;o++){let l=s+Ft()*(r-s),c=l*(.6+Ft()*.6),h=Ft()*t,d=Ft()*t,u=Ft()*3.14;i.globalAlpha=a*(.4+Ft()*.6),i.fillStyle=n[o%n.length];for(let f of Qh)for(let g of Qh)i.beginPath(),i.ellipse(h+f*t,d+g*t,l,c,u,0,6.283),i.fill()}}function Jn(i,t,e,n,s,r,a,o,l){i.lineCap="round";for(let c=0;c<e;c++){let h=Ft()*t,d=Ft()*t,u=a+(Ft()-.5)*o,f=s*(.5+Ft());i.globalAlpha=l*(.4+Ft()*.6),i.strokeStyle=n[c%n.length],i.lineWidth=r*(.5+Ft());for(let g of Qh)for(let v of Qh)i.beginPath(),i.moveTo(h+g*t,d+v*t),i.lineTo(h+g*t+Math.cos(u)*f,d+v*t+Math.sin(u)*f),i.stroke()}}var St=Math.PI/2,Ce={grass:Hn(1024,(i,t)=>{Kn(i,t,"#6f8246"),Ke(i,t,260,["#5f7a3a","#83924c","#566e36","#8f9652"],12,70,.35),Jn(i,t,2600,["#4c6630","#93a25a","#62803c"],10,1.6,-St,1.2,.5),Ke(i,t,70,["#9a8452","#b39a62"],3,12,.4)},120,120),dirt:Hn(512,(i,t)=>{Kn(i,t,"#b39262"),Ke(i,t,200,["#a08052","#c4a674","#8f7046"],6,40,.4),Ke(i,t,600,["#7a6648","#d8c193"],1,3,.7),Jn(i,t,120,["#8a6c44"],16,1.2,0,6.28,.4)},3,3),rock:Hn(512,(i,t)=>{Kn(i,t,"#8f877b"),Ke(i,t,180,["#7b7469","#a39c90","#6e675d","#b0a898"],8,50,.45),Jn(i,t,70,["#4d473f"],60,1.8,0,6.28,.6),Ke(i,t,700,["#5c554c","#c2bbac"],.8,2.2,.6),Ke(i,t,30,["#6f7a4e"],6,18,.35)}),hide:Hn(512,(i,t)=>{Kn(i,t,"#b07d4c"),Ke(i,t,120,["#9c6a3c","#c4925e","#8a5c33"],15,60,.4),Jn(i,t,1500,["#7c5430","#c99a66"],7,1,St,.5,.35),Jn(i,t,12,["#5e3d22"],700,3.5,St,.04,.8),Jn(i,t,260,["#ecd6ae"],8,1.6,0,.3,.7)},3,1),thatch:Hn(512,(i,t)=>{Kn(i,t,"#c9a352"),Jn(i,t,3200,["#a8823a","#e0c070","#8e6c2e","#d6b25e"],42,2,St,.25,.6),Jn(i,t,5,["#6e5220"],700,6,0,.02,.5)},4,1),wood:Hn(256,(i,t)=>{Kn(i,t,"#6e4f33"),Jn(i,t,700,["#553a24","#86633f","#4a321e"],60,2,St,.12,.6),Ke(i,t,10,["#3c2a18"],3,7,.7)}),leaf:Hn(256,(i,t)=>{Kn(i,t,"#4f7f3a"),Jn(i,t,420,["#3d6a2c","#74a04d","#8db85e"],60,2,St,.2,.5)}),egg:Hn(256,(i,t)=>{Kn(i,t,"#fbf3df"),Ke(i,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6)}),eggCrack:Hn(256,(i,t)=>{Kn(i,t,"#fbf3df"),Ke(i,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6);for(let e=0;e<9;e++){let n=Ft()*t,s=Ft()*t,r=Ft()*6.28;i.globalAlpha=1,i.strokeStyle="#2e2014",i.lineWidth=5,i.lineJoin="miter",i.beginPath(),i.moveTo(n,s);for(let a=0;a<7;a++)r+=(Ft()-.5)*2.2,n+=Math.cos(r)*20,s+=Math.sin(r)*20,i.lineTo(n,s);i.stroke()}}),fur:Hn(256,(i,t)=>{Kn(i,t,"#d39a3e"),Jn(i,t,1100,["#b07a2c","#e6b860"],6,1,St,.6,.4),Ke(i,t,60,["#3a2614"],5,12,.85)}),bone:Hn(256,(i,t)=>{Kn(i,t,"#efe6d0"),Ke(i,t,90,["#d6c9aa","#fff8e8"],3,20,.4),Jn(i,t,60,["#b8a986"],30,1,St,.5,.5)}),soft:Hn(128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})},il=(i,t,e)=>Hn(256,(n,s)=>{Kn(n,s,i),Ke(n,s,340,t,3,9,.5),e&&Jn(n,s,26,[e],130,13,St,.35,.5),Ke(n,s,500,["#00000022"],1,2,.5)},2,2),J0=(()=>{let i=document.createElement("canvas");i.width=4,i.height=256;let t=i.getContext("2d"),e=new Gs(i);return e.colorSpace=an,se.background=e,(n,s,r,a)=>{let o=t.createLinearGradient(0,0,0,256);[[0,n],[.3,s],[.5,r],[.62,a],[1,a]].forEach(([l,c])=>o.addColorStop(l,c)),t.fillStyle=o,t.fillRect(0,0,4,256),e.needsUpdate=!0}})();J0("#4f95c0","#9cc7d3","#f3cf9f","#f0b98a");var Qe=(i,t={})=>new Yi({color:i,flatShading:!0,roughness:1,...t}),Ue=(i,t={})=>new Yi({map:i,bumpMap:i,bumpScale:2.5,flatShading:!0,roughness:.95,...t}),je=(i,t={})=>new zs({color:i,fog:!1,...t}),lt=(i,t,e=[0,0,0],n,s)=>{let r=new $n(i,t);return r.position.set(...e),n&&r.scale.set(...n),s&&r.rotation.set(...s),r},Cs=(...i)=>{i.forEach(t=>{t.traverse(e=>{e.isMesh&&e.material.isMeshStandardMaterial&&(e.castShadow=!0,e.receiveShadow=!0)}),se.add(t)})},Dt=(i,t,e=5)=>new Vs(i,t,e),Mt=(i,t,e,n=5)=>new qi(i,t,e,n),ce=new Fn(1,9,7),Le=new Ta(1,0),ts=new ba(1,0),Vf=new ba(1,1),Br=Qe(1840144),yf=Qe(16183522),ll=Qe(1840144,{emissive:16751168,emissiveIntensity:0}),Qn=Ue(Ce.rock),ae=Ue(Ce.wood),af=Ue(Ce.hide),w0=Ue(Ce.thatch),Ur=Ue(Ce.leaf,{side:kn}),Re=Ue(Ce.bone,{bumpScale:1}),tu=new Vt,fn=new Bt;function Se(i,t,{vary:e=.16,cast:n=!0,recv:s=!0}={}){return t.length?i.filter(r=>!(r[5]&&t.length>(pi?300:700))).map(([r,a,o=[0,0,0],l=[1,1,1],c=[0,0,0],h],d)=>{let u=new ks(r,a,t.length),f=new Vt().compose(new L(...o),new cn().setFromEuler(new qn(...c)),new L(...l));return t.forEach((g,v)=>{if(u.setMatrixAt(v,tu.multiplyMatrices(g,f)),e){let m=1-e*Be(v,d);u.setColorAt(v,fn.setRGB(m,m*(.97+.03*Be(v,9)),m*(.94+.06*Be(v,5))))}}),u.castShadow=n&&!h,u.receiveShadow=s,u.userData={L:f,mats:t},se.add(u),u}):[]}var gu=(i,t,e=0,n=1)=>new Vt().compose(new L(i,0,t),new cn().setFromEuler(new qn(0,e,0)),new L(n,n,n)),_u=(i,t,e,n,s,r,a=0)=>new Vt().compose(new L(i,t,e),new cn().setFromEuler(new qn(0,a,0)),new L(n,s,r)),gl=i=>new Lo(i,48).rotateX(-St),of=(i,t,e=3)=>{let n=Math.floor(i),s=Math.floor(t),r=(i-n)**2*(3-2*(i-n)),a=(t-s)**2*(3-2*(t-s)),o=(l,c)=>Be(l*157+c*311,e);return(o(n,s)*(1-r)+o(n+1,s)*r)*(1-a)+(o(n,s+1)*(1-r)+o(n+1,s+1)*r)*a};function K0(i,t,e){let n=i.attributes.position,s=[],r=new L;i.computeBoundingBox();let{min:a,max:o}=i.boundingBox;for(let l=0;l<n.count;l++){r.fromBufferAttribute(n,l);let c=Math.round(r.x*50)*7+Math.round(r.y*50)*131+Math.round(r.z*50)*17,h=Be(c,1),d=(r.y-a.y)/(o.y-a.y);if(Math.hypot(r.x,r.z)>.001){let f=1+(h-.5)*t;n.setXYZ(l,r.x*f,r.y+(Be(c,2)-.5)*t*.3*(o.y-a.y)*(d>.01&&d<.99),r.z*f)}if(e){let f=e(d,h);s.push(f.r,f.g,f.b)}}return e&&i.setAttribute("color",new jt(s,3)),i.computeVertexNormals(),i}var vf=Math.max(1500,oe+950);Ce.grass.repeat.setScalar(vf/12.5);var h1=(()=>{let i=new gs(vf*2,vf*2,pi?90:160,pi?90:160).rotateX(-St),t=i.attributes.position,e=[],n=new Bt;for(let r=0;r<t.count;r++){let a=t.getX(r),o=t.getZ(r),l=of(a/140,o/140),c=of(a/45,o/45,5),h=Math.max(0,of(a/220,o/220,7)-.55)*2.2,d=.82+l*.22+(c-.5)*.12;n.setRGB(d*(1+h*.2),d*(1+h*.06),d*(1-h*.25)),e.push(n.r,n.g,n.b)}i.setAttribute("color",new jt(e,3));let s=lt(i,Ue(Ce.grass,{flatShading:!1,bumpScale:1.5,vertexColors:!0}));return s.receiveShadow=!0,se.add(s),s})(),Tl=dn.map(i=>gu(i.x,i.z)),u1=Se([[gl(ar),Ue(Fr(Ce.dirt,ar/4.2,ar/4.2),{flatShading:!1}),[0,.06,0]],...fi.map((i,t)=>{let e=qa(t);return[new Oo(e-b0,e+b0,72).rotateX(-St),Ue(Fr(Ce.dirt,e/3,e/3),{flatShading:!1}),[0,.04,0]]})],Tl,{vary:0,cast:!1}),j0=[];for(let i=1;i<$0;i++){let t=dn[i],e=dn.slice(0,i).reduce((r,a)=>Math.hypot(a.x-t.x,a.z-t.z)<Math.hypot(r.x-t.x,r.z-t.z)?a:r),n=Math.hypot(e.x-t.x,e.z-t.z),s=lt(new gs(n,ze?6:3.2).rotateX(-St),Ue(Fr(Ce.dirt,n/6,.5),{flatShading:!1}),[(t.x+e.x)/2,.035,(t.z+e.z)/2],null,[0,-Math.atan2(e.z-t.z,e.x-t.x),0]);s.receiveShadow=!0,se.add(s),j0.push([t,e])}var d1=(i,t,e)=>dn.every(n=>(i-n.x)**2+(t-n.z)**2>e*e)&&j0.every(([n,s])=>{let r=s.x-n.x,a=s.z-n.z,o=Math.max(0,Math.min(1,((i-n.x)*r+(t-n.z)*a)/(r*r+a*a)));return Math.hypot(i-n.x-r*o,t-n.z-a*o)>4}),zh=["\uBAA8\uB2E5\uBD88\uACE8","\uBC14\uC704\uACE8","\uD070\uB098\uBB34\uACE8","\uBF08\uC5B8\uB355","\uBB3C\uAC00\uB9D0","\uBD88\uC528\uACE8","\uB3CC\uD0D1\uB9D0","\uACE0\uC0AC\uB9AC\uB9D0","\uC1A1\uACF3\uB2C8\uACE8","\uCCA8\uBC99\uB9D0","\uD683\uBD88\uB9D0","\uB108\uB7ED\uBC14\uC704\uACE8","\uADF8\uB298\uB9D0","\uAC08\uBE44\uBF08\uACE8","\uAC1C\uC6B8\uB9D0"],$a=i=>zh[i%zh.length]+(i>=zh.length?" "+(Math.floor(i/zh.length)+1):""),wl=i=>i?i%5:0;Se([[new oi(1.5,.32,4,9),Qn,[0,.2,0],,[St,0,0]],[Dt(.7,1.9,6),je(16747050),[0,1.1,0]],[Dt(.35,1.2,6),je(16769162),[0,.9,0]],...[0,2.1,4.2].map(i=>[Mt(.13,.16,1.9,5),ae,[Math.cos(i)*.4,.8,Math.sin(i)*.4],,[Math.sin(i)*.5,0,-Math.cos(i)*.5]]),...[.6,2.7,4.8].map(i=>[Mt(.34,.38,2.4,7),ae,[Math.cos(i)*5,.38,Math.sin(i)*5],,[St,0,-i]])],Tl.filter((i,t)=>t&&wl(t)===0),{vary:0});var xu=i=>Tl.filter((t,e)=>e&&wl(e)===i);Se([[Vf,Qn,[0,1.7,0],[2.7,2.5,2.5]],[ts,Qn,[2.5,.6,.9],[1.1,.9,1]],[ts,Qn,[-2.1,.5,-1.3],[1,.7,1.1]]],xu(1),{vary:0});Se([[Mt(.7,1,6,7),ae,[0,3,0]],[Dt(4,4.6,8),Ur,[0,6.6,0]],[Dt(3,4,8),Ur,[0,9.2,0]],[Dt(1.8,3.2,8),Ur,[0,11.6,0]]],xu(2),{vary:0});Se([[Mt(.9,1.1,1,7),Re,[0,.5,0]],[Mt(.7,.9,1,7),Re,[0,1.5,0]],[Mt(.5,.7,1,7),Re,[0,2.5,0]],[ce,Re,[0,3.6,0],[.8,.65,.75]],[Dt(.15,1,6),Re,[.7,4,0],,[0,0,-.6]],[Dt(.15,1,6),Re,[-.7,4,0],,[0,0,.6]]],xu(3),{vary:0});Se([[gl(3.4),new Yi({color:5218224,roughness:.12,metalness:.2}),[0,.09,0]],[new oi(3.5,.4,5,12),Qn,[0,.15,0],,[St,0,0]]],xu(4),{vary:0,cast:!1});dn.slice(1).forEach((i,t)=>to("\uB3D9\uB124",$a(t+1),!0,1.4).position.set(i.x,wl(t+1)===2?15:8,i.z));{let i=[16777215,14078150,14479300,16773836,13493478,16766644];u1.forEach(t=>{Tl.forEach((e,n)=>t.setColorAt(n,fn.setHex(i[n%i.length]))),t.instanceColor.needsUpdate=!0})}var Q0=Tl.slice(1).map(i=>i.clone().multiply(new Vt().makeTranslation(0,0,ar-2.5))),A0=Se([[ce,Ue(Ce.fur,{flatShading:!1}),[0,1.15,0],[.62,.72,.52]],[ce,Qe(14723192),[0,2.1,0],[.42,.42,.42]],[ce,Qe(2759698),[0,2.33,-.06],[.47,.34,.45]],[Le,Br,[.15,2.16,.38],[.05,.05,.04]],[Le,Br,[-.15,2.16,.38],[.05,.05,.04]],[Mt(.16,.15,.6),Qe(14723192),[.22,.3,0]],[Mt(.16,.15,.6),Qe(14723192),[-.22,.3,0]],[Mt(.08,.22,1.3,6),ae,[.75,1.3,.1],,[0,0,-.5]]],Q0,{vary:0});{let i=[];for(let n=0;n<70;n++){let s=Ft()*6.283,r=Ft()*(oe+260),a=30+Ft()*70;i.push(_u(Math.cos(s)*r,.02,Math.sin(s)*r,a,1,a))}let[t]=Se([[new gs(1,1).rotateX(-St),new zs({map:Ce.soft,transparent:!0,opacity:.28,depthWrite:!1})]],i,{vary:0,cast:!1,recv:!1}),e=[5205550,11972186,6193208,10259018];i.forEach((n,s)=>t.setColorAt(s,fn.setHex(e[s%4]))),t.instanceColor.needsUpdate=!0,t.renderOrder=1}var R0=(i,t,e,n=.6)=>Array.from({length:t},(s,r)=>{let a=n+r*(6.283-2*n)/(t-1);return[ts,Qn,[Math.sin(a)*i,e*.5,Math.cos(a)*i],[e,e*.7,e*1.1],[0,a,0],1]}),Mf=[[[Vf,Qn,[0,1.2,0],[2.5,1.9,2.3]],[ts,Qn,[-2,.6,.6],[1.1,.95,1]],[ts,Qn,[1.9,.5,-.5],[1,.75,1.1]],[ts,Qn,[.3,2.6,-.4],[1,.55,.9]],[ce,ll,[0,.65,1.95],[.85,.95,.5]],[Mt(.12,.12,2.1),ae,[0,1.62,2.3],,[0,0,St],1],[Mt(.11,.14,1.6),ae,[-.95,.8,2.3],,[0,0,-.1],1],[Mt(.11,.14,1.6),ae,[.95,.8,2.3],,[0,0,.1],1],[Le,Re,[-1.3,.2,2.6],[.24,.2,.22],,1],[Mt(.05,.05,.7),Re,[-1.05,.08,2.9],,[St,0,.6],1]],[[new Vs(2.1,3.2,10),af,[0,1.6,0]],[Dt(.75,1.7,3),ll,[0,.85,1.5],[1,1,.45]],[Mt(.06,.06,1.7,4),ae,[0,3.3,0],,[.38,0,0],1],[Mt(.06,.06,1.7,4),ae,[0,3.3,0],,[-.2,0,.36],1],[Mt(.06,.06,1.7,4),ae,[0,3.3,0],,[-.2,0,-.36],1],[Mt(.07,.07,2,4),ae,[-.52,.92,1.66],,[-.58,0,-.28],1],[Mt(.07,.07,2,4),ae,[.52,.92,1.66],,[-.58,0,.28],1],[new oi(1.46,.07,4,12),ae,[0,1,0],,[St,0,0],1],[new oi(.69,.06,4,9),ae,[0,2.2,0],,[St,0,0],1],...R0(2.15,5,.38),[Mt(.06,.06,1.5,4),ae,[2.5,.75,-.9],,,1],[Mt(.06,.06,1.5,4),ae,[2.5,.75,.3],,,1],[Mt(.05,.05,1.5,4),ae,[2.5,1.5,-.3],,[St,0,0],1],[new $e(.05,.6,.42),af,[2.5,1.15,-.6],,,1],[new $e(.05,.5,.36),af,[2.5,1.2,0],,,1]],[[Mt(1.9,2.05,1.7,12),Ue(Fr(Ce.rock,3,1)),[0,.85,0]],[new Vs(2.7,2.3,12),w0,[0,2.85,0]],[new oi(2.55,.13,4,14),w0,[0,1.76,0],,[St,0,0],1],[new $e(.85,1.25,.3),ll,[0,.63,1.95]],[new $e(.14,1.4,.2),ae,[-.55,.7,2.06],,,1],[new $e(.14,1.4,.2),ae,[.55,.7,2.06],,,1],[new $e(1.36,.16,.24),ae,[0,1.44,2.06],,,1],[new $e(.46,.4,.2),ll,[1.69,1.05,.98],,[0,1.047,0],1],[Mt(.08,.08,.8,4),ae,[0,4.25,0],,,1],...R0(2.2,4,.42,1),[Mt(.13,.13,.95),ae,[2.6,.13,-.75],,[St,0,0],1],[Mt(.13,.13,.95),ae,[2.87,.13,-.75],,[St,0,0],1],[Mt(.13,.13,.95),ae,[2.73,.36,-.75],,[St,0,0],1]]];Mf[3]=[...Mf[2],[Dt(.17,2.6,6),Re,[-1,1.3,2.25],,[0,0,-.28]],[Dt(.17,2.6,6),Re,[1,1.3,2.25],,[0,0,.28]],[Le,Re,[0,1.85,2.2],[.3,.26,.24],,1]];var As=le.map((i,t)=>kf(t)),Ya=As.map((i,t)=>gu(i.x,i.z,Math.atan2(i.cx-i.x,i.cz-i.z)+(Be(t,1)-.5)*.3,(.92+Be(t,2)*.2)*(ze?1.25:1))),f1=Se(Mf[ge],Ya),Fi=i=>{let t=0;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return(Math.imul(t,2654435761)>>>0)/4294967296},tg=new Set,eg=(i,t,e)=>{i&&(tg.add(i),le.forEach((n,s)=>i.setColorAt(s,fn.setHSL(Fi(n),t,e))),i.instanceColor.needsUpdate=!0)},Qs=Ue(ge===1?Ce.eggCrack:Ce.egg,{roughness:.6,flatShading:!1,bumpScale:.6,side:kn}),ei=Ya.map(i=>i.clone().multiply(new Vt().makeTranslation(1.9,0,1.6))),yu=ei.map(i=>i.clone().multiply(new Vt().makeScale(1.5,1.5,1.5)));Se([[new oi(.5,.15,4,8),ae,[0,.13,0],,[St,0,0],1]],ei);var Pn=["\uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD0C0\uB974\uBCF4\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD53C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD2B8\uB9AC\uCF00\uB77C\uD1B1\uC2A4","\uD504\uD14C\uB77C\uB178\uB3C8","\uBE0C\uB77C\uD0A4\uC624\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD14C\uACE0\uC0AC\uC6B0\uB8E8\uC2A4","\uC548\uD0AC\uB85C\uC0AC\uC6B0\uB8E8\uC2A4","\uD30C\uB77C\uC0AC\uC6B0\uB864\uB85C\uD478\uC2A4","\uBCA8\uB85C\uD0A4\uB78D\uD1A0\uB974"],Sf=[1,1,1,0,1,0,0,0,0,1],ka={plant_patrick_gg:{rank:1,bow:1},nx_er75:{rank:2},mini_manymo1:{rank:3}},kh=In.get("award"),Oi=le.map((i,t)=>ka[i.toLowerCase()]||(kh&&t===4?kh==="bow"?{bow:1}:kh==="name"?{rank:3,name:"\uBF40\uC9DD\uC774"}:{kind:+kh,rank:2}:null)),p1=Oi.flatMap((i,t)=>i?.bow?[t]:[]),yn=le.map((i,t)=>Oi[t]?.kind??Math.floor(Fi(i+"!")*Pn.length)),Wf=["","\uD669\uAE08","\uBB34\uC9C0\uAC1C"],C0=+In.get("rare")||0,ur=le.map((i,t)=>{if(C0)return t%9===4?C0:0;if(Oi[t]?.bow)return 2;let e=Fi(i+"*");return e<.001?2:e<.011?1:0}),P0=i=>new Fn(1,9,4,0,6.283,i?0:St,St),Xf=(()=>{let i=new Fn(1,16,6,0,6.283,St-.12,St+.12),t=i.attributes.position;for(let e=0;e<=16;e++)t.setY(e,t.getY(e)+(e%2?.2:-.03));return i.computeVertexNormals(),i})(),bf=[],bs=[];if(ge===0)bs.push(...Se([[ce,Qs,[0,.66,0],[.45,.6,.45]]],ei,{vary:0}));else if(ge===1)bs.push(...Se([[ce,Qe(16762980,{emissive:16747040,emissiveIntensity:.9}),[0,.68,0],[.4,.55,.4]]],ei,{vary:0,cast:!1}),...Se([[P0(0),Qs,[0,.66,0],[.45,.6,.45]],[P0(1).translate(0,.2,0).rotateZ(.24),Qs,[0,.66,0],[.45,.6,.45]]],ei,{vary:0}));else{let i=new Fn(1,5,2,0,2.2,.4,.8),t=Se([[Xf,Qs,[0,.72,0],[.58,.68,.58]],[i,Qs,[-.8,.03,.4],[.22,.22,.22],[.5,1,2.6],1],[i,Qs,[.65,.03,.7],[.16,.16,.16],[2.4,2,.3],1]],yu,{vary:0,cast:Oe<=1500});t.forEach(e=>eg(e,.62,.76)),ge===2&&bs.push(t[0]),bf.push(...t)}bs.forEach(i=>i.material===Qs&&eg(i,.62,.76));var m1={S:1,B:.62,K:.36},ng={value:0};function eu(i,t=1,e=0){let n=[],s=[],r=[],a=[],o=[],l=[],c=new Vt,h=new Bt;for(let[f,g,v=[0,0,0],m=[1,1,1],p=[0,0,0],x]of i){let E=e&&v1.get(f)||f,M=(E.index?E.toNonIndexed():E.clone()).applyMatrix4(c.compose(new L(...v),new cn().setFromEuler(new qn(...p)),new L(...m)));if(e&&(M.computeBoundingSphere(),M.boundingSphere.radius<e)){M.dispose();continue}let R=M.attributes.position,T=M.attributes.normal,_=M.attributes.uv,b=typeof g=="string",N=m1[g];b||h.setHex(g);for(let C=0;C<R.count;C++){let I=R.getZ(C)*t;n.push(R.getX(C)*t,R.getY(C)*t,I),s.push(T.getX(C),T.getY(C),T.getZ(C)),r.push(b?_.getX(C):0,b?_.getY(C):0),b?a.push(N,N,N):a.push(h.r,h.g,h.b),o.push(+b),x?x[0]==="leg"?l.push(x[2]*t,x[3]*t,x[1],0):x[0]==="wing"?l.push(x[2]*t,x[3]*t,x[1]*2,0):l.push(0,0,0,Math.max(0,x[0]==="tail"?x[1]*t-I:I-x[1]*t)*x[2]):l.push(0,0,0,0)}M.dispose()}let d=new Fe,u=(f,g)=>new jt(f,g);return d.setAttribute("position",u(n,3)),d.setAttribute("normal",u(s,3)),d.setAttribute("uv",u(r,2)),d.setAttribute("color",u(a,3)),d.setAttribute("aTint",u(o,1)),d.setAttribute("aAnim",u(l,4)),d.computeBoundingSphere(),d}var g1=[`float ph = aPhase;
   if (abs(aAnim.z) > 1.5) { float a = sin(ph) * 0.42 * sign(aAnim.z); vec2 d = transformed.xy - aAnim.xy; transformed.xy = aAnim.xy + vec2(d.x * cos(a) - d.y * sin(a), d.x * sin(a) + d.y * cos(a)); }
   else if (aAnim.z != 0.0) { float a = sin(ph) * 0.5 * aAnim.z; vec2 d = transformed.yz - aAnim.xy; transformed.yz = aAnim.xy + vec2(d.x * cos(a) - d.y * sin(a), d.x * sin(a) + d.y * cos(a)); }
   else transformed.y += sin(ph * 2.0) * 0.05;
   transformed.x += sin(ph * 0.5 - transformed.z * 0.3) * aAnim.w;`,`float ph = uTime * (1.5 + fract(aPhase) * 0.9) + aPhase * 6.283, w = smoothstep(0.7, 1.25, transformed.y), h = transformed.y - 0.7;
   transformed.x += h * sin(ph) * 0.13 * w; transformed.z += h * sin(ph * 1.31 + 1.0) * 0.08 * w; transformed.y += abs(sin(ph * 0.5)) * 0.05 * w;`];function qf(i,t,e){let n=new Yi({map:i,bumpMap:i,bumpScale:.8,roughness:.78,flatShading:t,vertexColors:!0});return n.onBeforeCompile=s=>{s.uniforms.uTime=ng,s.vertexShader=`attribute float aTint; attribute vec4 aAnim; attribute float aPhase; attribute float aRare; uniform float uTime; varying float vTint; varying float vRare;
`+s.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
vTint = aTint; vRare = aRare; if (aTint < 0.5) vColor.rgb = color.rgb;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+g1[+e]),s.fragmentShader=`varying float vTint; varying float vRare; uniform float uTime;
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
        }`)},n.customProgramCacheKey=()=>"dino"+ +e,n}var _1=Hn(256,(i,t)=>{Kn(i,t,"#ffffff"),Ke(i,t,520,["#d0d0d0","#ececec","#bcbcbc"],3,8,.55),Ke(i,t,28,["#8c8c8c"],8,16,.5)},2,2),ig=Hn(512,(i,t)=>{Kn(i,t,"#ffffff"),Ke(i,t,1500,["#cfcfcf","#e6e6e6","#b4b4b4","#f4f4f4"],4,10,.6),Ke(i,t,70,["#7e7e7e"],10,26,.45),Jn(i,t,160,["#9a9a9a"],26,2,0,6.28,.35)},4,3),qr=qf(_1,!1,!0),x1=qf(ig,!1,!1),y1=qf(ig,!0,!1);qr.bumpScale=.5;var Ms=new Fn(1,pi?10:12,pi?6:8),sl=new Fn(1,8,5),ji=new Fn(1,8,6),Ss=new Ta(1,1),Js=new $e(1,1,1),xn=new Fn(1,12,8),v1=new Map([[xn,new Fn(1,7,5)],[Ms,new Fn(1,7,5)],[ji,new Fn(1,6,4)],[Ss,Le]]),M1=new qi(.6,1,1,4).rotateY(Math.PI/4),I0=16773584,Ui=15722192,Ef=1577228,Hh=14207392,Ir=13616292,S1=8006178,sg=(()=>{let i=[[Ms,"S",[0,.74,0],[.38,.44,.38]],[Ms,I0,[0,.7,.09],[.29,.37,.32]]],t=(c,h,d,u=1.24,f=.18)=>[Ms,"S",[0,u,f],[c,h,d]],e=(c,h,d,u=.06)=>{let[,,[,f,g],[v,m,p]]=c,x=f+d,E=g+p*Math.sqrt(Math.max(.05,1-(h/v)**2-(d/m)**2))-u*.25;return[-1,1].flatMap(M=>[[sl,16777215,[M*h,x,E],[u*1.5,u*1.7,u]],[sl,Ef,[M*h,x-u*.1,E+u*.5],[u,u*1.2,u*.7]],[Le,16777215,[M*h+u*.35,x+u*.45,E+u*1.1],[u*.32,u*.32,u*.2]],[sl,16748444,[M*h*1.3,x-u*2.5,E-u*.2],[u*1.1,u*.6,u*.5]]])},n=(c,h,d)=>[-1,1].map(u=>[Le,Ef,[u*c,h,d],[.022,.022,.016]]),s=(c,h,d,u,f)=>[Ms,"S",[0,u,f],[c,h,d]],r=(c,h,d)=>[-1,1].map(u=>[Dt(.028,.08,6),16777215,[u*c,h,d],,[Math.PI,0,0]]),a=[-1,1].map(c=>[Mt(.04,.03,.24,6),"S",[c*.26,.98,.34],,[1,0,0]]),o=(c,h=.06)=>c.map(([d,u])=>[sl,"B",[0,d,u],[h*.7,h,h]]),l;return[[...i,l=t(.37,.33,.36,1.27,.14),s(.23,.15,.2,1.17,.44),...r(.09,1.04,.56),...a,...o([[1.6,.06],[1.56,-.1],[1.46,-.22]],.07),...n(.06,1.22,.63),...e(l,.19,.1,.07)],[...i,l=t(.32,.3,.34,1.26,.14),s(.17,.12,.26,1.17,.46),...r(.07,1.07,.64),...a,...o([[1.31,.56],[1.3,.66],[1.57,.14],[1.56,.02],[1.5,-.1]],.045),...n(.045,1.2,.71),...e(l,.17,.09)],[...i,l=t(.27,.25,.3,1.25,.12),s(.12,.09,.34,1.18,.5),...r(.05,1.1,.74),[new qi(1,1,.07,12,1,!1,0,Math.PI).rotateZ(St),"B",[0,.98,-.18],[1,.66,.42]],...n(.035,1.22,.82),...e(l,.14,.08,.055)],[...i,l=t(.38,.33,.4,1.22,.16),[Mt(.44,.44,.06,14),"B",[0,1.42,-.1],,[St-.3,0,0]],[Dt(.05,.32,8),Ui,[-.15,1.55,.36],,[.8,0,0]],[Dt(.05,.32,8),Ui,[.15,1.55,.36],,[.8,0,0]],[Dt(.05,.2,8),Ui,[0,1.24,.6],,[St,0,0]],...e(l,.19,.08)],[...i,l=t(.28,.26,.29,1.25,.12),[Dt(.1,.5,10),15779944,[0,1.19,.6],,[St,0,0]],[Dt(.09,.5,10),"B",[0,1.55,-.14],,[-1,0,0]],...[-1,1].map(c=>[Ms,"B",[c*.48,.98,0],[.3,.035,.17],[0,0,c*.5]]),...e(l,.15,.08,.06)],[...i,[Mt(.1,.14,.7,10),"S",[0,1.35,.08],,[.25,0,0]],l=t(.2,.17,.27,1.76,.26),...n(.05,1.82,.5),...e(l,.12,.04,.05)],[...i,l=t(.3,.26,.34,1.2),...[[1.55,.1],[1.5,-.14],[1.3,-.36]].map(([c,h])=>[Ms,"B",[0,c-.06,h],[.04,.17,.13]]),...n(.07,1.24,.5),...e(l,.15,.08)],[...i,l=t(.36,.22,.34,1.16),...[[-.14,.05],[.14,.05],[0,-.14],[-.2,-.2],[.2,-.2]].map(([c,h])=>[sl,"B",[c,1.37,.18+h],[.07,.06,.07]]),[Dt(.05,.2,8),Ui,[-.38,1.2,.1],,[0,0,St]],[Dt(.05,.2,8),Ui,[.38,1.2,.1],,[0,0,-St]],...e(l,.17,.06)],[...i,l=t(.26,.24,.36,1.24),[Ms,I0,[0,1.16,.52],[.17,.08,.16]],[Mt(.07,.05,.6,10),"B",[0,1.56,-.08],,[-1.1,0,0]],...e(l,.14,.08)],[...i,l=t(.25,.23,.27,1.25,.13),s(.12,.09,.2,1.19,.44),...r(.05,1.11,.56),...[[-.4,-.08],[0,0],[.4,.08]].map(([c,h])=>[Dt(.05,.34,8),"B",[h,1.52,.02],,[-.4,0,-c]]),...[-1,1].map(c=>[Ms,"B",[c*.42,.98,.1],[.2,.03,.1],[0,0,c*.6]]),...n(.035,1.22,.62),...e(l,.14,.08,.06)]]})(),ja=sg.map(i=>eu(i)),Bi=(()=>{let i=l=>{let c=l?5:9;return{leg:(h,d,u,f,g)=>{let v=["leg",g,u,d];return l?[[Mt(f,f*.75,u*.47,c),"S",[h,u*.415,d+u*.025],,[.64,0,0],v],[Mt(f*.72,f*.6,u*.27,c),"S",[h,u*.14,d-u*.04],,[-.64,0,0],v],[Js,"K",[h,f*.3,d+u*.12],[f*2,f*.6,f*3.2],,v]]:[[Mt(f*1.3,f*.8,u,c),"S",[h,u/2,d],,,v],[ji,"K",[h,f*.4,d+f*.15],[f*1.2,f*.5,f*1.4],,v]]},tail:(h,d,u,f,g=0,v=.05)=>[Dt(u,f,c).rotateX(-St),"S",[0,d-Math.sin(g)*f/2,h-f/2+.3],,[-g,0,0],["tail",h,v]],eye:(h,d,u,f,g)=>[-1,1].flatMap(v=>l?[[Le,15909424,[v*h,d,u],[f*.55,f,f],,g],[Le,Ef,[v*(h+f*.32),d,u+f*.1],[f*.3,f*.85,f*.3],,g]]:[[Le,2365970,[v*h,d,u],[f*.55,f,f],,g],[Le,16777215,[v*(h+f*.4),d+f*.35,u+f*.3],[f*.2,f*.26,f*.26],,g]])}},t=i(!0),e=i(!1),n=({w:l=1,hs:c=1,sl:h=1.5,sw:d=.85,al:u=.8,teeth:f=5,tail:g=4.4,extra:v=()=>[]})=>{let m=(p,x,E,M=[1,1,1],R)=>[p,x,[E[0]*c,4.8+E[1]*c,3.3+E[2]*c],M.map(T=>T*c),R];return[[Ss,"S",[0,3.5,0],[1.15*l,1.3,2.3]],[Ss,Ir,[0,3.05,.35],[.95*l,1,1.9]],...[-1.1,0,1.1].map(p=>[Ss,"K",[0,3.95,p],[l,.9*Math.sqrt(1-(p/2.3)**2)+.06,.2]]),[Mt(.7*l,l,2,5),"S",[0,4.25,2.35],,[.95,0,0]],m(Ss,"S",[0,0,0],[.78,.8,1]),m(M1,"S",[0,-.08,.55+h/2],[d,h,.8],[St,0,0]),m(Js,"S",[0,-.74,.3+h/2],[d*1.05,.2,h+.5],[.2,0,0]),m(Js,S1,[0,-.56,.4+h/2],[d*.8,.08,h],[.12,0,0]),...Array.from({length:f},(p,x)=>{let E=(x+.6)/f,M=.707-.283*E;return[-1,1].map(R=>m(Dt(.07,.3,4),16777215,[R*(d*M-.06),-.2-.8*M,.55+h*E],void 0,[Math.PI,0,0]))}).flat(),...[-1,1].map(p=>m(Js,"K",[p*.5,.6,.4],[.32,.18,.8],[.14,0,-p*.36])),...t.eye(.6*c,4.8+.3*c,3.3+.42*c,.17*c),...[-1,1].map(p=>[Mt(.13,.09,u,5),"S",[p*.8*l,3.1,2.3+u*.35],,[1.15,0,0]]),t.tail(-1.7,3.7,l,g),...[-1,1].flatMap(p=>[[Ss,"S",[p*.85*l,2.95,-.2],[.5,1.05,.9],,["leg",p,3.2,-.2]],...t.leg(p*.9*l,-.2,3.2,.36,p)]),...[-1.4,-.5,.4,1.3].map(p=>[Dt(.17,.42,4),"K",[0,4.72-.11*p*p,p]]),...v(m)]},s=[new qi(1,1,.14,7,1,!1,0,Math.PI).rotateZ(St),"B",[0,4.5,-.2],[1,2.6,2.5]],r=(l,c,h,d,u)=>h.map(f=>[ji,"K",[0,l,f],[d,c,u]]),a=(l,c,h,d,u)=>{let f=eu(l,c);return f.computeBoundingBox(),{g:f,lo:eu(l,c,.5),m:h?y1:x1,hip:d*c,len:f.boundingBox.max.z-f.boundingBox.min.z,fly:u}},o=["neck",2.4,.04];return[a(n({}),.9,1,3.2),a(n({w:.9,hs:.9,sl:1.8,sw:.7,extra:l=>[0,1,2,3].map(c=>l(Dt(.1,.22,4),"K",[0,.46-.075*c,.9+.4*c]))}),.76,1,3.2),a(n({w:.92,hs:.78,sl:2.7,sw:.5,al:1.4,tail:5,teeth:7,extra:()=>[s]}),.95,1,3.2),a([[xn,"S",[0,2.15,-.3],[1.5,1.45,2.6]],[xn,Ir,[0,1.8,-.2],[1.25,1.15,2.2]],...r(2.75,.85,[-1.4,-.3,.8],1.2,.28),[xn,"S",[0,2,2.75],[.95,.9,1.3]],[ji,Hh,[0,1.6,3.95],[.38,.45,.45]],[Mt(1.75,1.75,.22,14),"B",[0,2.95,1.95],,[St-.5,0,0]],[Mt(1.15,1.15,.26,14),"K",[0,2.95,1.97],,[St-.5,0,0]],...[-1,1].map(l=>[Dt(.17,1.6,8),Ui,[l*.45,3.25,3.35],,[1,0,0]]),[Dt(.15,.6,8),Ui,[0,2.55,3.85],,[.5,0,0]],...e.eye(.86,2.3,3.1,.13),e.tail(-2.5,2.1,.85,3,.15),...[-1,1].flatMap(l=>[...e.leg(l*.95,1.25,1.75,.42,l),...e.leg(l,-1.8,1.8,.46,-l)])],.8,0,1.75),a([[Ss,"S",[0,0,0],[.55,.5,1.2]],[Ss,Ir,[0,-.15,.1],[.42,.4,1]],[Mt(.2,.3,1.2,5),"S",[0,.35,1.3],,[.9,0,0]],[Ss,"S",[0,.75,1.95],[.36,.36,.5]],[Dt(.2,2.4,4).rotateX(St),14266970,[0,.68,3.5]],[Dt(.2,1.9,4).rotateX(-St),"B",[0,1.15,1.2],,[.35,0,0]],...[-1,1].flatMap(l=>{let c=["wing",l,l*.4,0];return[[Js,"B",[l*1.6,0,.15],[2.6,.08,1.7],,c],[Js,"S",[l*3.9,0,.45],[2.2,.07,1],[0,-l*.3,0],c],[Mt(.06,.06,4.8,4).rotateZ(St),"K",[l*2.7,.06,.98],,[0,-l*.12,0],c],[Mt(.07,.05,1,4).rotateX(St),"S",[l*.25,-.2,-1.5]]]}),...t.eye(.3,.85,2.12,.1)],.7,1,1,1),a([[xn,"S",[0,4.6,0],[1.9,2,3.4]],[xn,Ir,[0,4.15,.1],[1.6,1.6,2.9]],...[-1.6,0,1.6].flatMap(l=>[-1,1].map(c=>[ji,"B",[c*.8,6.32-.1*l*l,l],[.55,.3,.65]])),[Mt(.55,1.2,7.6,9),"S",[0,9,4.2],,[.45,0,0],o],[xn,"S",[0,12.55,6.25],[.62,.55,.95],,o],[ji,"S",[0,13.05,6.05],[.36,.4,.45],,o],...e.eye(.55,12.65,6.6,.12,o),e.tail(-2.9,4.5,1.15,5.6,.2),...[-1,1].flatMap(l=>[...e.leg(l*1.15,1.9,4.4,.6,l),...e.leg(l*1.2,-2,3.9,.62,-l)])],.8,0,4.2),a([[xn,"S",[0,2.3,-.2],[1.3,1.6,2.7]],[xn,Ir,[0,1.9,-.1],[1.1,1.25,2.3]],[Mt(.4,.7,1.7,9),"S",[0,1.85,2.75],,[1.8,0,0]],[xn,"S",[0,1.55,3.75],[.42,.4,.8]],[ji,Hh,[0,1.45,4.45],[.25,.22,.25]],...e.eye(.36,1.7,3.9,.09),...Array.from({length:8},(l,c)=>{let h=2-c*.62,d=(h+.2)/2.7,u=.6+.55*Math.sin(c/7*Math.PI);return[Dt(.7,1.4,4),"B",[c%2?.22:-.22,2.3+1.6*Math.sqrt(1-d*d)+u*.45,h],[.2*u,u,u]]}),e.tail(-2.5,2.3,.75,3.8,.1),...[-5.2,-5.75].flatMap(l=>[-1,1].map(c=>[Dt(.1,.95,6),Ui,[c*.4,2.3,l],,[0,0,-c*1.1],["tail",-2.5,.05]])),...[-1,1].flatMap(l=>[...e.leg(l*.75,1.5,1.5,.36,l),...e.leg(l*.85,-1.4,2.2,.45,-l)])],.73,0,1.9),a([[xn,"S",[0,1.5,0],[1.9,1,2.6]],[xn,"B",[0,1.72,-.1],[1.78,.92,2.45]],[xn,Ir,[0,1.25,0],[1.6,.8,2.3]],...[-2,-1,0,1,2].flatMap(l=>[-1,0,1].map(c=>[Le,"K",[c*.85,1.72+.92*Math.sqrt(1-(c*.85/1.78)**2-(l*.85/2.45)**2),l*.85-.1],[.24,.17,.24]])),...[-2,-1,0,1,2].flatMap(l=>[-1,1].map(c=>[Dt(.2,.75,6),Ui,[c*1.8*Math.sqrt(1-(l*.9/2.6)**2),1.45,l*.9],,[0,0,-c*St]])),[xn,"S",[0,1.3,2.95],[.78,.55,.8]],[ji,Hh,[0,1.15,3.65],[.4,.3,.3]],...[-1,1].map(l=>[Dt(.14,.5,6),Ui,[l*.6,1.7,2.55],,[-.6,0,-l*.7]]),...e.eye(.68,1.42,3.25,.1),e.tail(-2.4,1.45,.55,3.4,0,.07),[ji,Ui,[0,1.45,-5.6],[.8,.5,.7],,["tail",-2.4,.07]],...[-1,1].flatMap(l=>[...e.leg(l*1.15,1.5,1.05,.4,l),...e.leg(l*1.15,-1.5,1.05,.4,-l)])],.63,0,1.05),a([[xn,"S",[0,3,-.2],[1.2,1.5,2.6]],[xn,Ir,[0,2.6,0],[1,1.2,2.2]],...r(3.65,.85,[-1.3,-.2,.9],.95,.26),[Mt(.48,.85,2.6,9),"S",[0,4.4,2.75],,[.75,0,0]],[xn,"S",[0,5.5,3.8],[.52,.5,.95]],[ji,Hh,[0,5.28,4.7],[.42,.2,.5]],[Mt(.1,.24,2.8,9),"B",[0,6.35,2.75],,[-1.05,0,0]],...e.eye(.47,5.62,4.05,.1),e.tail(-2.4,3.1,.9,4.6,.05),...[-1,1].flatMap(l=>[...e.leg(l*.75,-.9,2.9,.46,l),...e.leg(l*.6,1.7,2.4,.26,-l)])],.72,0,2.9),a(n({w:.7,hs:.75,sl:1.5,sw:.55,al:1.6,tail:4.6,teeth:4,extra:l=>[...[-.35,0,.35].map(c=>l(Dt(.14,1,4),"B",[c*.5,.95,-.5],void 0,[-.9,0,-c])),...[-1,1].map(c=>[Js,"B",[c*1.05,2.95,2.7],[1.1,.06,1.5],[.35,0,c*.45]]),[Js,"B",[0,3.7,-5.6],[1.5,.06,1.7],,["tail",-1.7,.05]]]}),.4,1,3.2)]})(),vu=le.map((i,t)=>.9+Be(t,3)*.18),b1=ge===2?sg.map(i=>eu(i,1,.13)):[],fl=new Float32Array(Oe*3),E1={x:0,y:0,z:0,sn:0,cs:1,s:1,ph:0};le.forEach((i,t)=>{let e=Fi(i),n=ur[t];(n===1?fn.setHSL(.1,.88,.4):n===2?fn.setRGB(.95,.95,.95):ze?fn.setHSL(e,.18+Be(t,5)*.14,.36+Be(t,6)*.12):fn.setHSL(e,.6,.6)).toArray(fl,t*3)});var rg=(ze?Bi.map(i=>[i.g,i.lo,i.m]):ge===2?ja.map((i,t)=>[i,b1[t],qr]):[]).map(([i,t,e],n)=>{let s=yn.flatMap((a,o)=>a===n?[o]:[]);if(!s.length)return null;let r=(a,o)=>{let l=new ks(a,e,s.length),c=new Xi(new Float32Array(s.length),1),h=new Xi(new Float32Array(s.length),1);return l.setColorAt(0,fn),a.setAttribute("aPhase",c),a.setAttribute("aRare",h),l.castShadow=o,l.frustumCulled=!1,l.count=0,[l.instanceMatrix,l.instanceColor,c,h].forEach(d=>d.setUsage(Ud)),se.add(l),{im:l,ph:c,rare:h,id:new Int32Array(s.length)}};return{idx:s,hi:r(i,!0),lo:r(t,!1),A:Bi[n]}}),Gh=ze?(()=>{let i=new Float32Array(Oe),t=new Float32Array(Oe),e=new Float32Array(Oe),n=new Float32Array(Oe);return le.forEach((s,r)=>{let a=As[r],o=r%ns,l=o<fi[0][1]?0:o<fi[0][1]+fi[1][1]?1:2,c=Bi[yn[r]].fly;i[r]=Math.atan2(a.z-a.cz,a.x-a.cx),e[r]=qa(l)+(Be(r,7)-.5)*(c?14:2.2),t[r]=(l%2?-1:1)*(c?7:1.7)/qa(l),n[r]=c?11+Be(r,8)*8:0}),{a0:i,w:t,R:e,y:n}})():null,tt=null,tn=new Map;function ag(i,t){let e=E1,n=tt&&tt.i===i?tt:tn.get(i),s=!!n;if(!ze){let o=yu[i].elements;if(e.s=Math.hypot(o[0],o[2])*fr[i],e.ph=Be(i,4)*9,s)e.x=n.x,e.y=n.hop,e.z=n.z,e.sn=Math.sin(n.a+n.rot),e.cs=Math.cos(n.a+n.rot);else{let l=e.s/fr[i];e.x=o[12]+Rl[i],e.y=0,e.z=o[14]+Cl[i],e.sn=o[8]/l,e.cs=o[10]/l}return e}let{hip:r,fly:a}=Bi[yn[i]];if(e.s=vu[i],s)e.x=n.x,e.z=n.z,e.y=a?3.2+Math.sin(t*2)*.3:0,e.sn=Math.sin(n.a),e.cs=Math.cos(n.a),e.ph=a?t*5:n.dist*Math.PI/(r*e.s);else{let o=Gh.w[i],l=Gh.a0[i]+o*t,c=Gh.R[i],h=Math.sign(o),d=As[i];e.x=d.cx+Math.cos(l)*c,e.z=d.cz+Math.sin(l)*c,e.y=Gh.y[i]+(a?Math.sin(t*.6+i)*1.5:0),e.sn=-Math.sin(l)*h,e.cs=Math.cos(l)*h,e.ph=a?t*4+i:Math.abs(o)*c*t*Math.PI/(r*e.s)+i}return e}function T1(i){let t=me.position,e=(ze?150:75)**2;for(let n of rg){if(!n)continue;let s=0,r=0;for(let a=0;a<n.idx.length;a++){let o=n.idx[a],{x:l,y:c,z:h,sn:d,cs:u,s:f,ph:g}=ag(o,i),v=(l-t.x)**2+(c-t.y)**2+(h-t.z)**2<e,m=v?n.hi:n.lo,p=v?s++:r++,x=m.im.instanceMatrix.array,E=p*16,M=m.im.instanceColor.array;x[E]=f*u,x[E+1]=0,x[E+2]=-f*d,x[E+3]=0,x[E+4]=0,x[E+5]=f,x[E+6]=0,x[E+7]=0,x[E+8]=f*d,x[E+9]=0,x[E+10]=f*u,x[E+11]=0,x[E+12]=l,x[E+13]=c,x[E+14]=h,x[E+15]=1,M[p*3]=fl[o*3],M[p*3+1]=fl[o*3+1],M[p*3+2]=fl[o*3+2],m.ph.array[p]=g,m.rare.array[p]=ur[o],m.id[p]=o}n.hi.im.count=s,n.lo.im.count=r;for(let a of[n.hi,n.lo])a.im.instanceMatrix.needsUpdate=a.im.instanceColor.needsUpdate=a.ph.needsUpdate=a.rare.needsUpdate=!0}}Se([[Mt(.05,.06,3.2,4),ae,[-2.2,1.6,1.3]],[new $e(.9,.55,.05),Qe(15906354,{emissive:7031296}),[-1.72,2.9,1.3]]],Ya.slice(0,zf),{vary:0});{let i=[14241594,3837913,5221978,10117072,14715434,3126696,14245786],t=Se([[Mt(.04,.05,2.4,4),ae,[2.35,1.2,-1.5]],[new $e(.72,.44,.04),Qe(16777215),[2.72,2.15,-1.5]]],Ya,{vary:0,cast:!1})[1];t&&(Ya.forEach((e,n)=>t.setColorAt(n,fn.setHex(i[Math.floor(n/ns)%i.length]))),t.instanceColor.needsUpdate=!0)}var nu=kf(Oe),og=lt(new oi(2.2,.14,6,24),je(16766042),[nu.x,.25,nu.z],null,[St,0,0]);se.add(og);var Qa=(i,t,e,n,s,r=0)=>Array.from({length:i},()=>{let a,o,l=0;do{let c=Ft()*6.283,h=t+Ft()*(e-t);a=Math.cos(c)*h,o=Math.sin(c)*h}while(r&&!d1(a,o,r)&&++l<30);return gu(a,o,Ft()*6.283,n+Ft()*(s-n))}),Al=ze?Math.min(3,Math.max(1,oe/300)):1,lg=Qa(Math.round((pi?130:230)*Al),Ti+.5,oe+240,.7,1.6,Ti+.5),cg=Qa(Math.round((pi?60:120)*Al),Ti+2.5,oe+260,.8,1.7,Ti+1.5),hg=Qa(110,Ti-1.5,oe+250,.4,2,Ti-1.5),ug=(i,t)=>Array.from({length:i},(e,n)=>[t(n).rotateY(n*6.283/i+.3),Ur]);Se([[Mt(.32,.46,2.7,6),ae,[0,1.35,0]],[Mt(.24,.32,2.7,6),ae,[.2,3.9,0],,[0,0,-.15]],[Le,Qe(4862496),[.55,5,.2],[.22,.22,.22],,1],[Le,Qe(4862496),[.2,4.95,-.35],[.22,.22,.22],,1],...ug(7,i=>Dt(.62,3.8,4).scale(1,1,.2).translate(0,1.9,0).rotateZ(-1.2-i%2*.25).translate(.4,5.1,0))],lg);Se([[Mt(.28,.5,7,6),ae,[0,3.5,0]],[Dt(2.4,3,7),Ur,[0,5,0]],[Dt(1.8,2.8,7),Ur,[0,7,0]],[Dt(1.1,2.6,7),Ur,[0,8.9,0]]],cg);Se(ug(5,()=>Dt(.3,1.9,4).scale(1,1,.3).translate(0,.95,0).rotateZ(-1)),Qa(Math.round((pi?120:320)*Al),Ti-2,oe+150,.6,1.5,Ti-2),{cast:!1});Se([-.3,0,.3].map((i,t)=>[Dt(.1,.8,3).translate(0,.4,0).rotateZ(i).rotateY(t*2),Qe(8824906)]),Qa(Math.round((pi?700:2600)*Al),ar+.5,oe+70,.6,1.5),{cast:!1,vary:.3});Se([[Vf,Qn,[0,.45,0],[1.3,.8,1]],[ts,Qn,[1.1,.25,.5],[.5,.4,.5],,1]],hg);{let i=[];for(let n=0;n<(pi?90:220)*Al;n++){let[s]=Qa(1,Ti,oe+140,1,1,Ti),r=s.elements[12],a=s.elements[14];for(let o=0;o<4;o++)i.push(gu(r+(Ft()-.5)*2.4,a+(Ft()-.5)*2.4,Ft()*6,.7+Ft()*.6))}let[,t]=Se([[Mt(.03,.04,.6,3),Qe(7313982),[0,.3,0]],[Le,Qe(16777215,{emissive:2236962}),[0,.65,0],[.16,.1,.16]]],i,{cast:!1,vary:0}),e=[16774886,16767050,16748464,12029183,16751178];i.forEach((n,s)=>t.setColorAt(s,fn.setHex(e[Math.floor(s/4)%e.length]))),t.instanceColor.needsUpdate=!0}var w1=new Bt,lf=[[0,6253125],[.28,8218198],[.75,10783350],[1,14206640]].map(([i,t])=>[i,new Bt(t)]),A1=(i,t)=>{i=Math.min(1,Math.max(0,i+(t-.5)*.18));let e=lf.findIndex(o=>o[0]>=i),[n,s]=lf[Math.max(0,e-1)],[r,a]=lf[e];return w1.copy(s).lerp(a,r>n?(i-n)/(r-n):0)};Se([[K0(new Vs(1,1,11,4),.32,A1),Qe(16777215,{vertexColors:!0}),[0,.5,0]]],Array.from({length:16},(i,t)=>{let e=t*.393+Ft()*.2,n=oe+480+Ft()*220,s=70+Ft()*110,r=s*(1.1+Ft()*.6);return _u(Math.cos(e)*n,-2,Math.sin(e)*n,r,s,r,Ft()*3)}),{cast:!1,recv:!1});var $f=(i,t,e,n={})=>{let s=new Fs(new ps({map:Ce.soft,color:i,fog:!1,transparent:!0,depthWrite:!1,...n}));return s.scale.setScalar(t),s.position.set(...e),se.add(s),s},cf=$f(16773568,420,ml.clone().normalize().multiplyScalar(1600).toArray(),{opacity:.9}),dg=je(16774372,{transparent:!0,opacity:.85}),fg=(()=>{let t=new Float32Array(1500);for(let s=0;s<500;s++){let r=Ft()*6.283,a=.12+Ft()*1.4;t.set([Math.cos(r)*Math.cos(a)*1900,Math.sin(a)*1900,Math.sin(r)*Math.cos(a)*1900],s*3)}let e=new Fe;e.setAttribute("position",new Nn(t,3));let n=new Sa(e,new Er({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return n.frustumCulled=!1,se.add(n),n})();{let i=[];for(let t=0;t<9;t++){let e=Ft()*6.283,n=500+Ft()*500,s=190+Ft()*90;for(let r=0;r<4;r++)i.push(_u(Math.cos(e)*n+(r*22-33)*Math.sin(e),s+Ft()*6,Math.sin(e)*n-(r*22-33)*Math.cos(e),22+Ft()*14,8+Ft()*5,22+Ft()*14))}Se([[ce,dg]],i,{vary:0,cast:!1,recv:!1})}var Mn=-(oe+170),Sn=-(oe+90);{let i=new Bt,t=new Bt(11575432),e=new Bt(3812390);Cs(lt(K0(new qi(14,80,85,26,7,!0),.06,(n,s)=>i.copy(t).lerp(e,Math.min(1,n*1.15+(s-.5)*.25))),Ue(Fr(Ce.rock,6,3),{vertexColors:!0,side:kn}),[Mn,42.5,Sn]))}se.add(lt(Mt(13,13,1,16),je(16738842),[Mn,85.2,Sn]));Se([[ts,Qe(3023904),[0,0,0]]],Array.from({length:16},(i,t)=>{let e=t*.393+Ft()*.2,n=2.4+Ft()*2.2;return _u(Mn+Math.cos(e)*14,85+n*.2,Sn+Math.sin(e)*14,n,n*.8,n,Ft()*3)}),{vary:.2,cast:!1});var R1=(i,t,e=0)=>{let n=14+66*(1-t/85)+e;return new L(Mn+Math.cos(i)*n,t,Sn+Math.sin(i)*n)};for(let[i,t,e]of[[.4,62,2.4],[1.9,40,1.8],[3.3,70,2.8],[4.7,34,1.6],[5.6,52,2]]){let n=[];for(let r=0;r<=10;r++){let a=85-t/107.6*85*(r/10);n.push(R1(i+Math.sin(r*1.3+i*3)*.035,a,.8))}let s=new Ea(n);se.add(lt(new wa(s,40,e*.55,5),je(16734740)),lt(new wa(s,40,e*.25,5).translate(0,.25,0),je(16761418)))}$f(16742954,90,[Mn,90,Sn],{blending:wr,opacity:.7});var Jh=Array.from({length:8},()=>$f(6971480,1,[0,0,0])),Rn={x:Math.cos(5.3)*(oe+34),z:Math.sin(5.3)*(oe+34)},Gn={x:Math.cos(2.2)*(oe+22),z:Math.sin(2.2)*(oe+22)};{let{x:i,z:t}=Rn,e=lt(gl(19),Ue(Fr(Ce.dirt,5,5),{flatShading:!1}),[i,.03,t],[1,1,.75]);e.receiveShadow=!0,se.add(e,lt(gl(16),new Yi({color:5218224,roughness:.12,metalness:.2,transparent:!0,opacity:.88}),[i,.08,t],[1,1,.72]));for(let n=0;n<9;n++)Cs(lt(ts,Qn,[i+Math.cos(n*.7)*17,.4,t+Math.sin(n*.7)*12.6],[.9+Ft(),.7,.9+Ft()],[0,Ft()*3,0]))}{let i=new _n,t=2.2,e=oe+22;i.position.set(Math.cos(t)*e,0,Math.sin(t)*e),i.rotation.y=.9,i.scale.setScalar(1.5);let n=lt(gl(10),Ue(Fr(Ce.dirt,3,3),{flatShading:!1}),[1,.03,0],[1.3,1,.7]);n.receiveShadow=!0,i.add(n);for(let s=0;s<7;s++)i.add(lt(Mt(.12,.16,1.2+Ft(),5),Re,[-6+Ft()*14,.15,(Ft()-.5)*9],null,[St,Ft()*3,0]));i.add(lt(Mt(.2,.36,17,6),Re,[-.5,4.2,0],null,[0,0,St]),lt(ce,Re,[9.6,4.5,0],[1.6,1.15,1.05]),lt(Dt(.7,2.2,5),Re,[11.2,3.9,0],null,[0,0,-St-.2]),lt(Le,Br,[9.9,4.8,.85],[.32,.32,.2]),lt(Le,Br,[9.9,4.8,-.85],[.32,.32,.2]));for(let s=0;s<8;s++)i.add(lt(new oi(2.7-s*.2,.16,5,12,Math.PI).rotateZ(Math.PI).rotateY(St),Re,[6-s*1.5,4.2,0]));for(let[s,r]of[[5,1.6],[5,-1.6],[-3,1.4],[-3,-1.4]])i.add(lt(Mt(.22,.3,4.2,5),Re,[s,2.1,r],null,[r>0?.25:-.25,0,0]));Cs(i)}for(let i=0;i<6;i++)Cs(lt(Mt(.16,.2,2.6,6),ae,[Math.cos(i*1.047)*.55,1.05,Math.sin(i*1.047)*.55],null,[Math.sin(i*1.047)*.5,0,-Math.cos(i*1.047)*.5]));for(let i=0;i<12;i++)Cs(lt(ts,Qn,[Math.cos(i*.5236)*2.4,.28,Math.sin(i*.5236)*2.4],[.5+Be(i)*.2,.42,.5],[0,i,0]));for(let i=0;i<5;i++){let t=i*1.2566+.5;Cs(lt(Mt(.38,.42,2.6,7),ae,[Math.cos(t)*5.4,.4,Math.sin(t)*5.4],null,[St,0,-t]))}var C1=[[1,2.8,16742938,.85],[.62,2.1,16756778,.9],[.32,1.4,16773280,1]].map(([i,t,e,n])=>{let s=lt(Dt(i,t,7),je(e,{transparent:!0,opacity:n}),[0,.6+t/2,0]);return se.add(s),s}),Yf=new ko(16747066,110,70);Yf.position.set(0,3,0);se.add(Yf);var pg=48,Zf=new Fe;Zf.setAttribute("position",new Nn(new Float32Array(pg*3),3));se.add(new Sa(Zf,new Er({map:Ce.soft,color:16756832,size:.35,transparent:!0,depthWrite:!1,blending:wr,fog:!1})));var vn=new _n;vn.position.set(0,0,11);vn.scale.setScalar(1.3);{let i=Qe(14723192),t=Ue(Ce.fur,{flatShading:!1}),e=Qe(2759698),n=(r,a)=>lt(Mt(.16,.14,.9).translate(0,-.45,0),i,[r,2.05,0],null,[0,0,a]),s=n(.85,2.4);s.add(lt(Mt(.1,.32,1.4,7),ae,[0,-1.5,0])),vn.add(lt(Mt(.22,.2,.8),i,[.3,.4,0]),lt(Mt(.22,.2,.8),i,[-.3,.4,0]),lt(ce,t,[0,1.5,0],[.85,.95,.7]),lt(ce,i,[0,2.75,0],[.55,.55,.55]),lt(ce,e,[0,3.05,-.08],[.62,.45,.6]),lt(Dt(.42,.7),e,[0,2.35,.3],null,[Math.PI,0,0]),lt(Le,yf,[.2,2.85,.47],[.1,.1,.07]),lt(Le,yf,[-.2,2.85,.47],[.1,.1,.07]),lt(Le,Br,[.2,2.85,.53],[.055,.055,.04]),lt(Le,Br,[-.2,2.85,.53],[.055,.055,.04]),lt(ce,i,[0,2.68,.55],[.11,.09,.1]),lt(Mt(.06,.06,.9),Re,[0,3.5,0],null,[0,0,St]),lt(ce,Re,[.45,3.5,0],[.12,.12,.12]),lt(ce,Re,[-.45,3.5,0],[.12,.12,.12]),lt(new oi(.45,.05,4,10),Re,[0,2.25,.05],null,[St+.3,0,0]),n(-.85,-.3),s,lt(ce,new zs({visible:!1}),[0,2,0],[2.4,3,2.4])),vn.userData.club=s,Cs(vn)}function hf(i,t,e,n,s){return lt(Mt(e,e*.85,t,6).translate(0,-t/2,0),i,[n,t,s])}var uf=(i,t,e,n,s)=>{for(let r of[1,-1])i.add(lt(Le,yf,[t,e,n*r],[s,s,s*.6]),lt(Le,Br,[t+s*.3,e,n*r+r*s*.35],[s*.55,s*.55,s*.4]))},mg={long:Ue(il("#7f9a6a",["#62804f","#9db487","#55724a"]),{flatShading:!1}),horn:Ue(il("#b07a52",["#8f5e3b","#c9966c"],"#6e4428"),{flatShading:!1}),run:Ue(il("#d08a3c",["#b8732c","#e6a85a"],"#5a3214"),{flatShading:!1}),rex:Ue(il("#66784f",["#4e6040","#7f9164"],"#2f3b26"),{flatShading:!1}),fly:Ue(il("#8a6a8a",["#6e5270","#a888a6"]),{flatShading:!1})};function P1(i){let t=new _n,e=mg[i],n;if(i==="long"){t.add(lt(ce,e,[0,3.4,0],[3,1.8,1.6]),lt(Mt(.45,.7,5.4,8),e,[3.4,5.9,0],null,[0,0,-.55]),lt(ce,e,[5.2,8.2,0],[.95,.55,.55]),lt(Dt(.9,5.5,7),e,[-5.2,3.2,0],null,[0,0,St]));for(let s=0;s<6;s++)t.add(lt(Dt(.22,.6,4),e,[-2+s*.8,5.25-Math.abs(s-2.5)*.12,0]));uf(t,5.6,8.35,.4,.14),n=[[1.6,.9],[1.6,-.9],[-1.6,.9],[-1.6,-.9]].map(([s,r])=>hf(e,2.6,.45,s,r))}else if(i==="horn")t.add(lt(ce,e,[0,1.9,0],[2.2,1.3,1.3]),lt(ce,e,[2.6,1.8,0],[1,.75,.85]),lt(Mt(1.3,1.3,.15,9),e,[2,2.5,0],null,[0,0,St-.3]),lt(Dt(.12,1.1),Re,[3.4,2.4,.35],null,[0,0,-St]),lt(Dt(.12,1.1),Re,[3.4,2.4,-.35],null,[0,0,-St]),lt(Dt(.1,.5),Re,[3.7,1.9,0],null,[0,0,-St+.5]),lt(Dt(.6,2.6,7),e,[-3,1.8,0],null,[0,0,St])),uf(t,3.15,2.05,.68,.13),n=[[1.2,.7],[1.2,-.7],[-1.2,.7],[-1.2,-.7]].map(([s,r])=>hf(e,1.4,.35,s,r));else{let s=i==="rex"?1.7:1;t.add(lt(ce,e,[0,1.5,0],[1.1,.6,.5]),lt(Mt(.18,.25,.9,6),e,[1.1,2,0],null,[0,0,-.6]),lt(ce,e,[1.6+.15*s,2.45,0],[.5*s,.28*s,.25*s]),lt(Dt(.3,2.4,6),e,[-2.1,1.6,0],null,[0,0,St]),lt(Mt(.05,.04,.45,4),e,[.8,1.25,.32],null,[0,0,-1]),lt(Mt(.05,.04,.45,4),e,[.8,1.25,-.32],null,[0,0,-1])),uf(t,1.75+.2*s,2.55+.05*s,.2*s,.07*s),n=[[0,.3],[0,-.3]].map(([r,a])=>hf(e,1.2,.14,r,a))}return n.forEach(s=>t.add(s)),t.userData.legs=n,Cs(t),t}var Jf=[["long",oe+28,.03,0,1],["long",oe+50,-.025,3,1.25],["long",oe+44,-.025,3.25,.5],["horn",oe+12,.06,1,1],["horn",oe+16,-.05,4,.85],["rex",oe+78,.022,4.4,3.2],["run",8,.35,0,1],["run",9.5,.33,.5,.8],["run",7,-.3,3,.9]].map(([i,t,e,n,s])=>{let r=P1(i);return r.scale.setScalar(s),{o:r,R:t,w:e,a0:n,y:0,gait:i==="run"?12:3}});for(let[i,t,e,n]of[[oe*.7,.22,0,30],[oe*.9+20,-.17,2,40]]){let s=new _n,r=mg.fly,a=lt(new $e(1.4,.08,3.4).translate(0,0,1.7),r),o=lt(new $e(1.4,.08,3.4).translate(0,0,-1.7),r);s.add(lt(Dt(.4,3,6),r,[0,0,0],null,[0,0,-St]),lt(Dt(.16,1.1,4),r,[1.3,.35,0],null,[0,0,.9]),a,o),s.userData.wings=[a,o],Cs(s),Jf.push({o:s,R:i,w:t,a0:e,y:n,gait:0})}var rl=[];function to(i,t,e,n=1){let s=document.createElement("canvas");s.width=256,s.height=96;let r=s.getContext("2d");r.fillStyle=e?"#f6cf5a":"#e4d9c4",r.strokeStyle="#6b5a45",r.lineWidth=5,r.beginPath(),r.roundRect(4,4,248,88,14),r.fill(),r.stroke(),r.fillStyle="#2e2418",r.textAlign="center";let a='Pretendard,"Apple SD Gothic Neo","Malgun Gothic",sans-serif';r.font=`600 20px ${a}`,r.fillText(i,128,34);let o=30;do r.font=`800 ${o}px ${a}`;while(r.measureText(t).width>232&&--o>12);r.fillText(t,128,72);let l=new Gs(s);l.colorSpace=an,l.anisotropy=Z0;let c=new Fs(new ps({map:l,toneMapped:!1,fog:!1}));return c.scale.set(3.6*n,1.35*n,1),se.add(c),c}var Mu=i=>(i<zf?"\uCCAB \uC8FC\uBBFC ":"")+$a(Math.floor(i/ns))+" "+(i+1)+"\uBC88\uC9C0",I1=to("\uB2E4\uC74C \uC9D1 \uC790\uB9AC","\uC5EC\uAE30\uC608\uC694",!0);I1.position.set(nu.x,3,nu.z);var iu=to("\uC871\uC7A5",hi,!0);iu.position.set(0,5.9,11);var gg=[["\uBAA8\uB2E5\uBD88 \uAD11\uC7A5","\uB9C8\uC744 \uD55C\uAC00\uC6B4\uB370. \uBD88\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uC544\uC694.",[0,8.5,0],1.5,[0,2,0],[0,16,30]],[`\uC871\uC7A5 ${hi}`,"\uB204\uB974\uBA74 \uD55C\uB9C8\uB514 \uD574\uC694.",null,0,[0,3.2,11],[0,5.5,20.5]],["\uC6B0\uB974\uB989 \uD654\uC0B0","\uBA40\uB9AC\uC11C \uC5F0\uAE30\uB97C \uBFDC\uC5B4\uC694.",[Mn,112,Sn],14,[Mn,45,Sn],[Mn*.45,70,Sn*.45]],["\uCCA8\uBC99 \uC6C5\uB369\uC774","\uACF5\uB8E1\uB4E4\uC774 \uBB3C \uB9C8\uC2DC\uB7EC \uC624\uB294 \uACF3.",[Rn.x,7,Rn.z],3,[Rn.x,0,Rn.z],[Rn.x*.7,26,Rn.z*.7+30]],["\uD070 \uACF5\uB8E1 \uBF08","\uC544\uC8FC \uC624\uB798\uC804\uC5D0 \uC0B4\uB358 \uD070 \uACF5\uB8E1\uC758 \uBF08.",[Gn.x,11,Gn.z],3,[Gn.x,3,Gn.z],[Gn.x*.75,14,Gn.z*.75-14]]];gg.forEach(([i,,t,e])=>t&&to("\uBA85\uC18C",i,!0,e).position.set(...t));function L1(){let i=me.position;iu.visible=i.distanceTo(iu.position)>13;for(let t=0;t<Oe;t++){let e=As[t],n=(e.x-i.x)**2+i.y**2+(e.z-i.z)**2,s=n<2025&&n>81;if(s&&!rl[t]){let r=ge>=2&&ur[t];rl[t]=to(Mu(t)+(Oi[t]?` \xB7 \uBA39\uC774 ${Oi[t].rank||1}\uB4F1`+(Oi[t].name?` \xB7 ${Oi[t].name}`:""):"")+(r?` \xB7 ${Wf[r]} \uACF5\uB8E1`:""),le[t],t<zf||!!r||!!Oi[t]),rl[t].position.set(e.x,ze?6.2:4.9,e.z)}rl[t]&&(rl[t].visible=s)}}var zr=new Date(Date.now()+9*36e5).toISOString().slice(0,10),De={get(i){try{return JSON.parse(localStorage.getItem(i))||{}}catch{return{}}},set(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}},wi=()=>{try{return localStorage.getItem("uga-id")}catch{return null}},tr=null;function D1(i){let t=De.get("uga-care"),e=t.day!==zr;e&&De.set("uga-care",{day:zr,n:(t.n||0)+1});let n=De.get("uga-care").n||1;tr={i,t0:Pt},w("cinfo").textContent=e?`${ge<2?"\uC54C\uC774 \uB530\uB73B\uD574\uC84C\uC5B4\uC694":"\uACF5\uB8E1\uC774 \uC88B\uC544\uD574\uC694"}. \uC9C0\uAE08\uAE4C\uC9C0 ${n}\uC77C \uB3CC\uBD24\uC5B4\uC694.`:`\uC624\uB298\uC740 \uC774\uBBF8 \uB3CC\uBD24\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640\uC694. \uC9C0\uAE08\uAE4C\uC9C0 ${n}\uC77C \uB3CC\uBD24\uC5B4\uC694.`}var er=(()=>{let i=+zr.replace(/-/g,""),t=Math.floor(Be(i,1)*Math.max(1,Math.ceil(Oe/ns))),e=Be(i,3)*6.283,n=qa(Math.floor(Be(i,2)*3)),s=new _n,r=je(16765498);return s.position.set(dn[t].x+Math.cos(e)*n,1.1,dn[t].z+Math.sin(e)*n),s.userData.hood=$a(t),s.add(lt(Mt(.09,.09,.9,6),r,[0,0,0],null,[0,0,St]),lt(ce,r,[.5,0,0],[.2,.2,.2]),lt(ce,r,[-.5,0,0],[.2,.2,.2])),s.visible=De.get("uga-bone").day!==zr,se.add(s),s})(),Tf=30;function N1(){let i=De.get("uga-bone"),t=(i.n||0)+1;De.set("uga-bone",{day:zr,n:t}),er.visible=!1,cu(Tf),gr(`\uC871\uC7A5 ${hi}`,`\uC6B0\uAC00! \uAE08\uBE5B \uBF08 \uCC3E\uC558\uB2E4. \uB208 \uC88B\uB2E4. \uBA39\uC774 ${Tf}\uAC1C \uC900\uB2E4. \uB0B4\uC77C\uC740 \uB2E4\uB978 \uB370 \uC228\uAE34\uB2E4. \uC9C0\uAE08\uAE4C\uC9C0 ${t}\uBC88 \uCC3E\uC558\uB2E4.`,"")}var Dr=-1,Kf=!1,Qi=null,_l=(i,t)=>{di={t:new L(...i),p:new L(...t)},qt.autoRotate=!1,Cu(!1)};function U1(i,t){let e=Oi[i];if(!e)return"";let n=`\uBA39\uC774 ${e.rank||1}\uB4F1`;return e.name?` \xB7 ${n} \xB7 \uC54C \uC774\uB984 ${e.name}`:e.bow?pr(i)<2?` \xB7 ${n} \uBB34\uC9C0\uAC1C \uC54C`:` \xB7 ${n}`:e.kind==null?` \xB7 ${n} ${e.rank===3?"\uC54C \uC774\uB984 \uC9D3\uB294 \uC911":"\uACF5\uB8E1 \uACE0\uB974\uB294 \uC911"}`:` \xB7 ${n}\uC774 \uACE0\uB978 ${t}`}function _g(i){let t=Pn[yn[i]],e=ur[i]?Wf[ur[i]]+" ":"",n=e?" \xB7 \uC544\uC8FC \uB4DC\uBB38 \uC0C9\uC774\uC5D0\uC694":"";return["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`${e}\uC544\uAE30 ${t}${n}`+(ge<2?" \xB7 \uBA39\uC774 \uBA39\uACE0 \uBA3C\uC800 \uAE7C\uC5B4\uC694":""),`\uB2E4 \uC790\uB780 ${e}${t}${n}`][pr(i)]+U1(i,t)}function zi(i){let t=As[i],e=Math.hypot(t.x-t.cx,t.z-t.cz),n=(t.x-t.cx)/e,s=(t.z-t.cz)/e,r=ze?1.3:1;if(ze)_l([t.x-n*1.5,1.6,t.z-s*1.5],[t.x-n*7*r,12*r,t.z-s*7*r]);else{let c=ei[i].elements,h=c[12]+Rl[i],d=c[14]+Cl[i];_l([h-n*2.5,.4,d-s*2.5],[h-n*10,7,d-s*10])}let a=le[i],o=_g(i),l=Gr(i);if(gr("@"+a,`${bl} ${Mu(i)} \xB7 ${o}`+(l?` \xB7 \uBA39\uC774 ${l.toLocaleString()}\uAC1C \uBA39\uC74C`:""),/^[\w.]{1,30}$/.test(a)&&!We?"https://www.instagram.com/"+a+"/":""),ou.has(i)){let c=ou.get(i);w("cinfo").textContent+=` \xB7 \uC9DD\uAFCD @${le[c]}`,w("cpair").hidden=!1,w("cpair").textContent=`\uC9DD\uAFCD @${le[c]} \uC9D1 \uAC00\uAE30`,w("cpair").onclick=()=>zi(c)}if(!We&&a===wi()&&!tt){w("ccare").hidden=!1,w("ccare").textContent=pr(i)<2?"\uC54C \uC4F0\uB2E4\uB4EC\uAE30":"\uACF5\uB8E1 \uC4F0\uB2E4\uB4EC\uAE30",w("ccare").onclick=()=>D1(i);let c=Eg();c&&(w("cnest").hidden=!1,w("cnest").textContent=`\uB465\uC9C0 \uBA39\uC774 \uC90D\uAE30 (${c}\uAC1C)`,w("cnest").onclick=()=>{Lt.t=Date.now(),cu(c),w("cnest").hidden=!0,w("cinfo").textContent=`\uB465\uC9C0\uC5D0\uC11C \uBA39\uC774 ${c}\uAC1C\uB97C \uC8FC\uC6E0\uC5B4\uC694. 30\uBD84\uC5D0 \uD558\uB098\uC529 \uC313\uC5EC\uC694.`}),w("cfeed").hidden=!1,Ag(),w("cshare").hidden=!1,w("cphoto").onclick=()=>O1(i),w("cinvite").onclick=()=>B1(i),vg()}else!We&&Es()&&i!==is()&&!tt&&(w("ccare").hidden=!1,w("ccare").textContent=`${pr(i)<2?"\uC54C":"\uACF5\uB8E1"} \uC4F0\uB2E4\uB4EC\uAE30 \xB7 \uB458 \uB2E4 \uBA39\uC774 5\uAC1C`,w("ccare").onclick=()=>es("pet",a).then(c=>{c&&(c.got&&(tr={i,t0:Pt}),w("cinfo").textContent=c.got?`\uC4F0\uB2E4\uB4EC\uC5C8\uC5B4\uC694. \uB098\uB3C4 @${a} \uB2D8\uB3C4 \uBA39\uC774 5\uAC1C\uC529. \uC624\uB298 ${c.lim.pet-c.cnt.pet}\uBC88 \uB354 \uD560 \uC218 \uC788\uC5B4\uC694.`:c.no)}))}function gr(i,t,e){eo(),w("news").classList.remove("open"),w("cid").textContent=i,w("cinfo").textContent=t,w("clink").hidden=!e,e&&(w("clink").href=e),w("ccare").hidden=w("cnest").hidden=w("cfeed").hidden=w("cshare").hidden=w("cpair").hidden=!0,w("card").hidden=!1}var Ne=1080,jn=1920,Wa='"Pretendard","Apple SD Gothic Neo","Malgun Gothic",sans-serif';function xg(i,t,e){let n=Ae.getPixelRatio();Ae.setPixelRatio(1),Ae.setSize(Ne,jn,!1),Ve.target.position.set(t,0,e),Ve.position.copy(Ve.target.position).add(ml),Ve.shadow.needsUpdate=!0;let s=se.children.filter(a=>a.isSprite&&a.visible&&!a.material.transparent);s.forEach(a=>{a.visible=!1}),Ae.render(se,i),s.forEach(a=>{a.visible=!0});let r=Object.assign(document.createElement("canvas"),{width:Ne,height:jn});return r.getContext("2d").drawImage(Ae.domElement,0,0,Ne,jn),Ae.setPixelRatio(n),Gf(),r}var su=(i,t,e,n,s=800)=>{let r=e;do i.font=`${s} ${r}px ${Wa}`;while(i.measureText(t).width>n&&(r-=4)>30)};function yg(i,t,e){let n=i.toDataURL("image/jpeg",.92);w("ptitle").textContent=e,w("pimg").src=n,w("psave").href=n,w("psave").download=t,w("pmsg").textContent=`\uD734\uB300\uD3F0\uC740 \uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574\uB3C4 \uB3FC\uC694. \uC2A4\uD1A0\uB9AC\uC5D0 \uC62C\uB9B4 \uB54C @${pl}\uB97C \uD0DC\uADF8\uD574 \uC8FC\uC138\uC694.`;let s=new File([Uint8Array.from(atob(n.split(",")[1]),r=>r.charCodeAt(0))],t,{type:"image/jpeg"});w("pshare").hidden=!navigator.canShare?.({files:[s]}),w("pshare").onclick=()=>navigator.share({files:[s]}).catch(()=>{}),w("photo").showModal()}w("px").onclick=()=>w("photo").close();function O1(i){let t=As[i],e=ei[i].elements,n=e[12],s=e[14],r=Math.hypot(t.x-t.cx,t.z-t.cz),a=(t.x-t.cx)/r,o=(t.z-t.cz)/r,l=ze?1.6:1,c=new on(52,Ne/jn,.3,me.far);c.position.set(n-a*3.8*l,2.6*l,s-o*3.8*l),c.lookAt(n*.7+t.x*.3,.55*l,s*.7+t.z*.3);let h=xg(c,n,s),d=h.getContext("2d"),u=d.createLinearGradient(0,jn*.66,0,jn);u.addColorStop(0,"rgba(30,22,12,0)"),u.addColorStop(1,"rgba(30,22,12,.82)"),d.fillStyle=u,d.fillRect(0,jn*.66,Ne,jn*.34),d.textAlign="center",d.fillStyle="#fffaf0",d.shadowColor="rgba(0,0,0,.45)",d.shadowBlur=12;let f="@"+le[i];su(d,f,92,Ne-120),d.fillText(f,Ne/2,jn-290);let g=["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`\uC544\uAE30 ${Pn[yn[i]]}`,`\uB2E4 \uC790\uB780 ${Pn[yn[i]]}`][pr(i)],v=Gr(i),m=`${bl} ${Mu(i)} \xB7 ${g}`;su(d,m,46,Ne-100),d.fillText(m,Ne/2,jn-208),v&&pr(i)<2&&(d.font=`700 40px ${Wa}`,d.fillStyle="#ffd98a",d.fillText(`\uBA39\uC774 ${v.toLocaleString()}\uAC1C \uBA39\uACE0 ${dr(v).toFixed(1)}\uBC30`,Ne/2,jn-148)),d.fillStyle="rgba(255,250,240,.85)",d.font=`600 34px ${Wa}`,d.fillText(`\uB313\uAE00 \uB2EC\uBA74 \uB0B4 \uC9D1\uACFC \uACF5\uB8E1 \uC54C \uD558\uB098 \xB7 @${pl}`,Ne/2,jn-72),yg(h,`ugauga_${le[i]}.jpg`,"\uB0B4 \uC54C \uC0AC\uC9C4")}var ru=300,F1=i=>location.origin+location.pathname+"?from="+encodeURIComponent(le[i]),vg=()=>{w("cinvite").textContent=Lt.inv?`\uCE5C\uAD6C \uB370\uB824\uC624\uAE30 (${Lt.inv}\uBA85)`:"\uCE5C\uAD6C \uB370\uB824\uC624\uAE30"};async function B1(i){let t=F1(i),e=`\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744 \uAC19\uC774 \uD558\uC790. \uC774 \uB9C1\uD06C\uB85C \uC640\uC11C \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${ru}\uAC1C.`;if(navigator.share)try{await navigator.share({text:e,url:t});return}catch(n){if(n.name==="AbortError")return}try{await navigator.clipboard.writeText(t),w("cinfo").textContent=`\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694. \uCE5C\uAD6C\uAC00 \uC774 \uB9C1\uD06C\uB85C \uC640\uC11C \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${ru}\uAC1C\uB97C \uBC1B\uC544\uC694.`}catch{w("cinfo").textContent=`\uC774 \uB9C1\uD06C\uB97C \uCE5C\uAD6C\uC5D0\uAC8C \uBCF4\uB0B4 \uC8FC\uC138\uC694: ${t}`}}var Mg=zr<="2026-11-19"?"\uC6B0\uAC00! \uBA39\uC774 \uC21C\uC704 \uC815\uD574\uC84C\uB2E4. 1\uB4F1 \uBB34\uC9C0\uAC1C \uACF5\uB8E1, 2\uB4F1 \uACF5\uB8E1 \uACE0\uB974\uAE30, 3\uB4F1 \uC54C \uC774\uB984 \uC9D3\uAE30. \uCD95\uD558\uD55C\uB2E4.":Xa.notice,au=[Mg,`\uC6B0\uAC00! \uB098 \uC871\uC7A5 ${hi}. \uC5EC\uAE30 ${bl}.`,"\uB313\uAE00 \uB2EC\uBA74 \uC9D1 \uC900\uB2E4. \uC54C\uB3C4 \uC900\uB2E4. \uBA87 \uBD84\uC774\uBA74 \uB41C\uB2E4. \uC6B0\uAC00.",[`\uC54C \uAC74\uB4DC\uB9AC\uC9C0 \uB9C8\uB77C. \uC5B8\uC820\uAC00 \uAE6C\uB2E4. \uBB50 \uB098\uC62C\uC9C0 ${hi}\uB3C4 \uBAA8\uB978\uB2E4.`,`\uC54C\uC5D0 \uAE08 \uAC14\uB2E4. \uACE7 \uB098\uC628\uB2E4. ${hi} \uC7A0 \uBABB \uC794\uB2E4.`,"\uC54C \uAE7C\uB2E4. \uC544\uAE30 \uACF5\uB8E1 \uB098\uC654\uB2E4. \uBB3C\uBA74 \uC544\uD504\uB2E4. \uC6B0\uAC00.",`\uC544\uAE30 \uB2E4 \uCEF8\uB2E4. \uC774\uC81C ${hi}\uBCF4\uB2E4 \uD06C\uB2E4. \uAE38 \uBE44\uCF1C\uB77C. \uC6B0\uAC00.`][ge],`\uC0AC\uB78C \uB9CE\uC544\uC9C0\uBA74 \uB9C8\uC744 \uCEE4\uC9C4\uB2E4. ${hi} \uBC14\uBE60\uC9C4\uB2E4. \uC6B0\uAC00\uC6B0\uAC00.`,`\uBC24\uC5D0 \uACF5\uB8E1 \uC6B4\uB2E4. \uBB34\uC11C\uC6CC \uB9C8\uB77C. ${hi}\uB3C4 \uBB34\uC12D\uB2E4.`].filter(Boolean),z1=["\uBD88 \uAEBC\uB728\uB9AC\uC9C0 \uB9C8\uB77C. \uB300\uC7A5 \uD63C\uB09C\uB2E4.","\uD070 \uBC14\uC704\uB2E4. \uC62E\uAE30\uB824\uB2E4 \uD5C8\uB9AC \uB098\uAC14\uB2E4.","\uD070 \uB098\uBB34\uB2E4. \uADF8\uB298 \uC88B\uB2E4. \uB0AE\uC7A0 \uC794\uB2E4.","\uBF08 \uC313\uC558\uB2E4. \uBB34\uB108\uB728\uB9AC\uBA74 \uB610 \uC313\uC544\uC57C \uD55C\uB2E4.","\uBB3C \uC788\uB2E4. \uACF5\uB8E1\uB3C4 \uB9C8\uC2E0\uB2E4. \uC904 \uC11C\uB77C."];function k1(i){let t=Q0[i-1].elements;_l([t[12],2.4,t[14]],[t[12],4.5,t[14]+8]),gr(`${$a(i)} \uB300\uC7A5`,`\uC6B0\uAC00. \uC5EC\uAE30 ${$a(i)}. ${z1[wl(i)]}`,"")}var H1=0;function jf(){let i=vn.position,t=H1++,e=Cn&&!Cn.chest&&t%2===0;_l([i.x,3.2,i.z],[i.x,5.5,i.z+9.5]),gr(`\uC871\uC7A5 ${hi}`,e?"\uC6B0\uAC00. \uC624\uB298 \uD560 \uC77C\uC774\uB2E4. "+Cn.mis.map(([n,s,r])=>`${n} ${s}/${r}`).join(", ")+". \uC14B \uB2E4 \uD558\uBA74 \uBCF4\uBB3C \uC0C1\uC790 \uC900\uB2E4.":au[t%au.length],"")}w("news").append(Object.assign(document.createElement("b"),{textContent:"\uC871\uC7A5"}),au[Mg?0:Y0%au.length]);{let i=We||pn?[]:le.map((t,e)=>[t,e]).slice(-12).filter(([,t])=>!ur[t]).slice(-3).map(([t])=>"@"+t);i.length&&w("news").append(Object.assign(document.createElement("small"),{textContent:`\uC0C8\uB85C \uC628 \uC8FC\uBBFC ${i.join(" ")}. \uBC18\uAC11\uB2E4.`}))}w("news").onclick=()=>{matchMedia("(max-width:600px)").matches&&!w("news").classList.contains("open")?w("news").classList.add("open"):jf()};var G1=()=>{w("hud").offsetHeight&&(w("news").style.top=w("hud").getBoundingClientRect().bottom+8+"px")};new ResizeObserver(G1).observe(w("hud"));w("card").querySelector(".x").onclick=()=>{w("card").hidden=!0};var Wn=i=>le.findIndex(t=>t.toLowerCase()===i.trim().replace(/^@/,"").toLowerCase()),ou=new Map;(We?[]:Xa.pairs||[]).forEach(([i,t])=>{let e=Wn(i),n=Wn(t);e>=0&&n>=0&&e!==n&&(ou.set(e,n),ou.set(n,e))});var lu=i=>{let t=Wn(i);if(t<0)return!1;if(Dr=t,!We)try{localStorage.setItem("uga-id",le[t])}catch{}return zi(t),$r(),kr()?Ei().then(zg):Qf(),!0},kr=()=>{let i=De.get("uga-tok"),t=wi();return t&&i.id===t.toLowerCase()?i.tok:""},cl="";function Qf(){let i=wi();!ni||We||pn||!i||kr()||w("pin").open||(cl="",w("pinmsg").textContent="",w("pinv").value="",w("pinh").textContent=`@${i}`,w("pinp").textContent="\uD655\uC778\uD558\uB294 \uC911\uC774\uC5D0\uC694\u2026",w("pin").dataset.set="1",w("pin").showModal(),fetch(ni+"/api/pin?id="+encodeURIComponent(i)).then(t=>t.json()).then(t=>{w("pin").dataset.set=t.set?"1":"",w("pinp").textContent=t.set?"\uB0B4 \uC54C\uC744 \uC9C0\uD0A4\uB294 \uC22B\uC790 4\uC790\uB9AC(PIN)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.":"\uCC98\uC74C\uC774\uC5D0\uC694. \uB0B4 \uC54C\uC744 \uC9C0\uD0AC \uC22B\uC790 4\uC790\uB9AC(PIN)\uB97C \uC815\uD574 \uC8FC\uC138\uC694. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C\uB3C4 \uC774 \uC22B\uC790\uB85C \uB4E4\uC5B4\uC640\uC694. \uC544\uBB34\uC5D0\uAC8C\uB3C4 \uC54C\uB824 \uC8FC\uC9C0 \uB9C8\uC138\uC694."}).catch(()=>{w("pinp").textContent="\uC22B\uC790 4\uC790\uB9AC(PIN)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694."}))}w("pinf").onsubmit=i=>{i.preventDefault();let t=wi(),e=w("pinv").value.trim(),n=w("pinmsg");if(!/^\d{4}$/.test(e)){n.textContent="\uC22B\uC790 4\uC790\uB9AC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.";return}if(!w("pin").dataset.set&&cl!==e){n.textContent=cl?"\uC55E\uC5D0\uC11C \uB123\uC740 \uC22B\uC790\uC640 \uB2EC\uB77C\uC694. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC815\uD574 \uC8FC\uC138\uC694.":"\uD55C \uBC88 \uB354 \uB123\uC5B4 \uC8FC\uC138\uC694.",cl=cl?"":e,w("pinv").value="",w("pinv").focus();return}n.textContent="\uD655\uC778\uD558\uB294 \uC911\uC774\uC5D0\uC694\u2026",fetch(ni+"/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t,pin:e})}).then(s=>s.json().then(r=>[s.ok,r])).then(([s,r])=>{if(w("pinv").value="",!s){n.textContent=r.error==="\uC8FC\uBBFC \uBA85\uB2E8\uC5D0 \uC5C6\uB294 \uC544\uC774\uB514"?"\uC544\uC9C1 \uC8FC\uBBFC \uBA85\uB2E8\uC5D0 \uC5C6\uB294 \uC544\uC774\uB514\uC608\uC694.":r.error||"\uC798 \uC548 \uB410\uC5B4\uC694. \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694.";return}De.set("uga-tok",{id:t.toLowerCase(),tok:r.tok}),w("pin").close(),r.made&&ui("PIN\uC744 \uC815\uD588\uC5B4\uC694. \uC78A\uC73C\uBA74 \uC778\uC2A4\uD0C0 @ugauga_village\uC5D0 DM \uC8FC\uC138\uC694."),Ei().then(zg),Il()}).catch(()=>{n.textContent="\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694."})};w("pinx").onclick=()=>w("pin").close();var Sg=()=>{De.set("uga-tok",{}),Il(),Qf()},wf="\uC544\uC9C1 \uADF8 \uC544\uC774\uB514\uB85C \uB41C \uC9D1\uC740 \uC5C6\uC5B4\uC694";w("find").onsubmit=i=>{i.preventDefault(),lu(w("q").value)?w("q").blur():Ig(w("q").value)?w("msg").textContent=wf+". \uADF8 \uC544\uC774\uB514 \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1\uC744 \uBCF4\uC5EC \uB4DC\uB838\uC5B4\uC694.":w("msg").textContent=wf+"."};w("lot").onsubmit=i=>{i.preventDefault();let t=parseInt(w("qn").value,10);t>=1&&t<=Oe?zi(t-1):w("msg").textContent=Oe?`\uBC88\uC9C0\uB294 1\uBC88\uBD80\uD130 ${Oe.toLocaleString()}\uBC88\uAE4C\uC9C0 \uC788\uC5B4\uC694.`:"\uC544\uC9C1 \uC9D1\uC774 \uD55C \uCC44\uB3C4 \uC5C6\uC5B4\uC694."};function Hr(i){Qi=Qi===i?null:i,w("sheet").hidden=!Qi,w("msg").textContent="",w("sheet").querySelectorAll("[data-tab]").forEach(t=>{t.hidden=t.dataset.tab!==Qi}),w("menu").querySelectorAll("button").forEach(t=>t.classList.toggle("on",!!Qi&&t.dataset.tab===Qi)),Qi&&(w("card").hidden=!0),Qi==="dex"&&j1()}function eo(){Qi&&Hr(Qi)}w("menu").querySelectorAll("[data-tab]").forEach(i=>{i.onclick=()=>Hr(i.dataset.tab)});w("sheet").querySelector(".x").onclick=eo;var Or=(i,t,e)=>{let n=document.createElement(i);return n.append(Object.assign(document.createElement("b"),{textContent:t}),e),n};gg.forEach(([i,t,,,e,n],s)=>{let r=Or("button",i,t);r.onclick=()=>{eo(),s===1?jf():_l(e,n)},w("spots").append(r)});ws.forEach((i,t)=>{let e=Or("div",`${i.name} \uC2DC\uB300`+(t===ge?" \xB7 \uC9C0\uAE08":""),`${t?`\uD314\uB85C\uC6CC ${i.at.toLocaleString()}\uBA85\uBD80\uD130`:"\uCC98\uC74C\uBD80\uD130"} \xB7 ${i.pet}`);t===ge&&(e.className="now"),w("eras").append(e)});w("eranext").textContent=(or?`${or.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,or.at-El).toLocaleString()}\uBA85 \uB0A8\uC558\uC5B4\uC694.`:"\uB9C8\uC9C0\uB9C9 \uC2DC\uB300\uC608\uC694. \uACF5\uB8E1\uC774 \uB2E4 \uC790\uB790\uC5B4\uC694.")+` \uD314\uB85C\uC6CC ${l1.toLocaleString()}\uBA85\uC774 \uB418\uBA74 \uC8FC\uBBFC \uBAA8\uB450\uC5D0\uAC8C \uBA39\uC774 ${o1}\uAC1C\uB97C \uC120\uBB3C\uD574\uC694.`;w("erabar").style.width=(or?Math.min(1,Math.max(0,(El-ws[ge].at)/(or.at-ws[ge].at)))*100:100)+"%";var Cn=null,hl="",Lt=De.get("uga-shell");Lt.n||=0;Lt.fed||=0;Lt.t||=Date.now();Lt.owed||=0;var lr=ge<2?"\uC54C":"\uACF5\uB8E1",bg=1e5,dr=i=>i<=2e3?1+Math.sqrt(i/2e3):2+5*Math.sqrt(Math.min(1,(i-2e3)/(bg-2e3))),fr=new Float32Array(Oe).fill(1),Rl=new Float32Array(Oe),Cl=new Float32Array(Oe);function Af(i,t){let e=ei[i].elements,n=As[i],s=e[12]-n.x,r=e[14]-n.z,a=Math.hypot(s,r)||1;fr[i]=t,Rl[i]=s/a*(t-1)*.55,Cl[i]=r/a*(t-1)*.55}function Su(i){let t=Rs.get(i);yu[i].decompose(t.position,t.quaternion,t.scale),t.scale.multiplyScalar(fr[i]),t.position.x+=Rl[i],t.position.z+=Cl[i]}var Eg=()=>Math.min(24,Math.floor((Date.now()-Lt.t)/18e5)),is=()=>We||pn?-1:Wn(wi()||""),Es=()=>!!ni&&is()>=0&&!!kr(),xl={fed:{},top:[]},Rf=0,ul=null,Gr=i=>i===is()?Lt.fed:xl.fed[le[i].toLowerCase()]||0;function Ei(i){if(clearTimeout(Rf),!Es())return Promise.resolve(!1);if(ul)return ul.then(r=>i?Ei(!0):r);let t=wi(),e=!Lt.srv,n=e?Lt.n:Lt.owed,s=e?De.get("uga-from").id:void 0;return ul=fetch(ni+"/api/sync",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t,tok:kr(),add:n,feed:!!i,from:s})}).then(r=>r.ok?r.json():Promise.reject(r.status===401&&Sg())).then(r=>{Lt.owed=e?0:Lt.owed-n,Lt.n=r.n+Lt.owed,Lt.fed=r.fed,Lt.inv=r.inv||0,Lt.srv=1,De.set("uga-shell",Lt),$r(),vg();let a=[r.bonus&&`@${r.bonus} \uB530\uB77C\uC654\uAD6C\uB098. \uBA39\uC774 ${ru}\uAC1C \uC900\uB2E4. @${r.bonus}\uB3C4 \uC900\uB2E4.`,r.gift&&`\uD314\uB85C\uC6CC \uB298\uC5C8\uB2E4. \uB9C8\uC744 \uC120\uBB3C\uC774\uB2E4. \uBA39\uC774 ${r.gift.toLocaleString()}\uAC1C \uBC1B\uC544\uB77C.`].filter(Boolean);return a.length&&gr(`\uC871\uC7A5 ${hi}`,"\uC6B0\uAC00. "+a.join(" "),""),!0}).catch(()=>!1).finally(()=>{ul=null})}function cu(i){Lt.n+=i,Lt.owed+=i,De.set("uga-shell",Lt),$r(),Es()&&(clearTimeout(Rf),Rf=setTimeout(Ei,2e4))}var Tg=ei.map(i=>i.clone()),Cf=[],Pf=new L,V1=new Vt;function wg(){if(ge===2){le.forEach((i,t)=>{if(Af(t,dr(Gr(t))),tt&&tt.i===t)return;let e=tu.copy(yu[t]).scale(Pf.setScalar(fr[t]));e.elements[12]+=Rl[t],e.elements[14]+=Cl[t],bf.forEach(n=>n.setMatrixAt(t,V1.multiplyMatrices(e,n.userData.L)))}),bf.forEach(i=>{i.instanceMatrix.needsUpdate=!0});return}ge>2||(le.forEach((i,t)=>{let e=dr(Gr(t));if(Rs.has(t)){fr[t]!==e&&(Af(t,e),tt&&tt.i===t||Su(t));return}(Cf[t]||1)!==e&&(Cf[t]=e,ei[t].copy(Tg[t]).scale(Pf.set(e,e,e)),bs.forEach(n=>{n.setMatrixAt(t,tu.multiplyMatrices(ei[t],n.userData.L)),n.instanceMatrix.needsUpdate=!0}))}),X1())}var W1=5e3,Rs=new Map,pr=i=>ge<2&&Rs.has(i)?2:ge;function X1(){ge>1||We||pn||le.forEach((i,t)=>{if(Rs.has(t)||Gr(t)<W1)return;let e=yn[t],n=ja[e].clone(),s=new _n,r=Qs.clone();n.setAttribute("aPhase",new Xi(new Float32Array([Be(t,4)*9]),1)),n.setAttribute("aRare",new Xi(new Float32Array([ur[t]]),1));let a=new ks(n,qr,1);a.setMatrixAt(0,new Vt),a.setColorAt(0,fn.fromArray(fl,t*3)),a.castShadow=!0,a.frustumCulled=!1,r.color.setHSL(Fi(i),.62,.76);let o=lt(Xf,r,[0,.72,0],[.58,.68,.58]);o.castShadow=!0,s.add(a,o),se.add(s),Rs.set(t,s),Af(t,dr(Gr(t))),Su(t),ei[t].copy(Tg[t]).scale(Pf.set(0,0,0)),Cf[t]=0,bs.forEach(l=>{l.setMatrixAt(t,tu.multiplyMatrices(ei[t],l.userData.L)),l.instanceMatrix.needsUpdate=!0}),t===is()&&!tt&&De.get("uga-hatch").id!==i&&(De.set("uga-hatch",{id:i}),zi(t),w("cinfo").textContent=`\uC6B0\uAC00! \uC54C\uC774 \uAE7C\uC5B4\uC694. \uBA39\uC774\uB97C \uB9CE\uC774 \uBA39\uC5B4\uC11C \uB9C8\uC744\uBCF4\uB2E4 \uBA3C\uC800 \uB098\uC654\uC5B4\uC694. \uC544\uAE30 ${Pn[e]}.`)})}function q1(){w("rankbox").hidden=!xl.top.length,w("rank").replaceChildren(...xl.top.map((i,t)=>{let e=Wn(i.id),n=Or("button",`${t+1}\uC704 @${i.id}`,`\uBA39\uC774 ${i.fed.toLocaleString()}\uAC1C \uBA39\uC74C \xB7 \uD06C\uAE30 ${dr(i.fed).toFixed(1)}\uBC30`);return n.disabled=e<0,n.onclick=()=>zi(e),n}))}async function tp(){let i=Lt.n,t=is();if(!(t<0||!i)){if(ni){if(!await Ei(!0)){let e="\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC138\uC694.";w("decomsg").textContent=e,w("card").hidden||(w("cinfo").textContent=e);return}}else Lt.fed+=i,Lt.n=0,De.set("uga-shell",Lt),$r();zi(t),tr={i:t,t0:Pt},w("cinfo").textContent=`${lr}\uC774 \uBA39\uC774 ${i.toLocaleString()}\uAC1C\uB97C \uBA39\uC5C8\uC5B4\uC694.`+(Cn?.hot?" \uD654\uC0B0 \uC5F4\uAE30 \uB355\uBD84\uC5D0 1.5\uBC30\uB85C \uB4E4\uC5B4\uAC14\uC5B4\uC694.":"")+` \uD06C\uAE30 ${dr(Lt.fed).toFixed(1)}\uBC30.`}}function Ag(){w("cfeed").textContent=Lt.n?`\uBA39\uC774 \uC8FC\uAE30 (${Lt.n.toLocaleString()}\uAC1C)`:"\uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uBAA8\uC73C\uAE30",w("cfeed").onclick=Lt.n?tp:Ja,w("cfeed").classList.toggle("walk",!Lt.n)}function $r(){let i=is(),t=i>=0,e=Lt.n.toLocaleString();w("purse").textContent=`\uBA39\uC774 ${e}`,w("shn").textContent=`\uC9C0\uAE08 \uBA39\uC774 ${e}\uAC1C.`,w("join").textContent=t?`\uB0B4 ${lr}`:"\uC54C \uBC1B\uAE30",w("join").onclick=t?()=>zi(i):()=>w("how").showModal();let n="\uAE38\uC5D0 \uB5A8\uC5B4\uC9C4 \uC5F4\uB9E4\xB7\uBC84\uC12F\xB7\uACE0\uAE30\uB97C \uC8FC\uC6CC\uC694";w("decomsg").textContent=t?`\uB0B4 ${lr}\uC740 \uC9C0\uAE08\uAE4C\uC9C0 \uBA39\uC774 ${Lt.fed.toLocaleString()}\uAC1C\uB97C \uBA39\uC5C8\uC5B4\uC694. \uD06C\uAE30 ${dr(Lt.fed).toFixed(1)}\uBC30.`+(Lt.fed>=bg?" \uAC00\uC7A5 \uD06C\uAC8C \uCEF8\uC5B4\uC694. \uB354 \uBA39\uC5EC\uB3C4 \uC21C\uC704\uB294 \uC62C\uB77C\uAC00\uC694.":" 10\uB9CC \uAC1C\uB97C \uBA39\uC73C\uBA74 7\uBC30\uAE4C\uC9C0 \uCEE4\uC838\uC694."):"\uC544\uB798 \uC21C\uC11C\uB300\uB85C \uD558\uBA74 \uB3FC\uC694.";let s=Or(t?"div":"button",t?"1. \uB0B4 \uC9D1 \uCC3E\uAE30 \xB7 \uC644\uB8CC":"1. \uB0B4 \uC9D1 \uCC3E\uAE30",t?`@${le[i]} \uC9D1\uC744 \uCC3E\uC558\uC5B4\uC694`:"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uB123\uC5B4\uC694");t||(s.onclick=()=>Hr("find"));let r=Or("button","2. \uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uC90D\uAE30",`${n}. \uC9C0\uAE08 \uBA39\uC774 ${e}\uAC1C`);r.onclick=Ja;let a=Or("button",`3. ${lr}\uC5D0\uAC8C \uBA39\uC774 \uC8FC\uAE30`,t?Lt.n?`\uAC00\uC9C4 \uBA39\uC774 ${e}\uAC1C\uB97C \uC804\uBD80 \uC918\uC694`:"\uBA39\uC774\uAC00 \uC5C6\uC5B4\uC694. \uC0B0\uCC45\uD558\uBA70 \uBAA8\uC544\uC694":"\uBA3C\uC800 \uB0B4 \uC9D1\uC744 \uCC3E\uC544\uC694");a.disabled=!t||!Lt.n,a.onclick=tp,(t?Lt.n?a:r:s).className="now",w("deco").replaceChildren(s,r,a),w("cfeed").hidden||Ag(),wg(),bu()}function bu(){let i=is(),t=Eg(),e=w("next"),n=hl?Au().find(o=>o.n):null,s=Cn&&!Cn.chest&&Cn.mis.every(([,o,l])=>o>=l),[r,a]=n?[n.kind==="rain"?"\uBA39\uC774 \uBE44! \uD669\uAE08 \uC5F4\uB9E4 \uC8FC\uC6B0\uB7EC \uAC00\uAE30":"\uD654\uC0B0 \uBD84\uCD9C! \uBD88\uC528 \uC5F4\uB9E4 \uC8FC\uC6B0\uB7EC \uAC00\uAE30",Ja]:s?["\uC624\uB298 \uBBF8\uC158 \uB05D \xB7 \uBCF4\uBB3C \uC0C1\uC790 \uC5F4\uAE30",()=>Hr("quest")]:i<0?["\uB0B4 \uC544\uC774\uB514\uB85C \uB0B4 \uACF5\uB8E1 \uCC3E\uAE30",()=>{Hr("find"),w("q").focus()}]:t?[`\uB465\uC9C0\uC5D0 \uC313\uC778 \uBA39\uC774 ${t}\uAC1C \uC90D\uAE30`,()=>zi(i)]:Lt.n?[`${lr}\uC5D0\uAC8C \uBA39\uC774 \uC8FC\uAE30 \xB7 ${Lt.n.toLocaleString()}\uAC1C`,tp]:["\uC0B0\uCC45\uD558\uBA70 \uBA39\uC774 \uC90D\uAE30",Ja];e.querySelector("b").textContent=r,e.onclick=a,e.hidden=pn}pn||setInterval(bu,6e4);w("purse").onclick=()=>Hr("shell");var cr=new _n;cr.visible=!1;se.add(cr);var ep=()=>Math.max(1,Math.ceil(Oe/ns)),If=i=>{let t=0;for(let e=1;e<ep();e++)Math.hypot(dn[e].x-tt.x,dn[e].z-tt.z)<Math.hypot(dn[t].x-tt.x,dn[t].z-tt.z)&&(t=e);do{let e=Math.random()*6.283,n=qa(Math.floor(Math.random()*3));i.position.set(dn[t].x+Math.cos(e)*n,0,dn[t].z+Math.sin(e)*n)}while(Math.hypot(i.position.x-tt.x,i.position.z-tt.z)<12)},$1=[["\uD070 \uC5F4\uB9E4",5,1,"\uD070 \uC5F4\uB9E4\uB2E4"],["\uACE0\uAE30",3,3,"\uACE0\uAE30\uB2E4"],["\uBC84\uC12F",2,5,"\uBC84\uC12F\uC774\uB2E4"],["\uBE68\uAC04 \uC5F4\uB9E4",1,15,""]],Y1=i=>{if(i==="\uBC84\uC12F"){let n=new _n,s=je(16774108);return n.add(lt(Mt(.2,.26,.7,6),je(15984328),[0,-.35,0]),lt(ce,je(14239023),[0,.05,0],[.7,.42,.7]),lt(ce,s,[.28,.3,.15],[.12,.07,.12]),lt(ce,s,[-.22,.32,-.15],[.1,.06,.1]),lt(ce,s,[0,.42,.3],[.09,.05,.09])),n.userData.h=.95,n}if(i==="\uACE0\uAE30"){let n=new _n,s=je(15985368);return n.add(lt(Mt(.09,.09,1.7,5),s,[0,0,0],null,[0,0,St]),lt(ce,je(11883054),[0,0,0],[.62,.48,.48]),...[-.85,.85].map(r=>lt(ce,s,[r,0,0],[.18,.18,.18]))),n.userData.h=.9,n}let t=i==="\uD070 \uC5F4\uB9E4"?1:.55,e=lt(ce,je(15217231),[0,0,0],[t,t,t]);return e.add(lt(Dt(.45,.7,4),je(5216826),[0,1.1,0])),e.userData.h=t+.15,e};for(let[i,t,e,n]of $1)for(let s=0;s<e;s++){let r=Y1(i);Object.assign(r.userData,{name:i,pay:t,line:n}),cr.add(r)}var Vh=new L;function nr(i,t,e,n,s=""){if(t===void 0){i.hidden=!0;return}Vh.set(t,e,n).project(me);let r=Vh.x,a=Vh.y,o=Vh.z>1;if(o&&(r=-r,a=-a,Math.abs(r)+Math.abs(a)<.01&&(a=-1)),!o&&Math.abs(r)<.85&&a>-.6&&a<.75){i.hidden=!0;return}let l=Math.max(Math.abs(r)/.8,a>0?a/.62:-a/.5)||1;r/=l,a/=l;let c=i.offsetWidth/2+6||20;i.hidden=!1,i.style.left=Math.min(innerWidth-c,Math.max(c,(r+1)/2*innerWidth))+"px",i.style.top=(1-a)/2*innerHeight+"px",i.style.setProperty("--a",Math.atan2(r,a)+"rad"),i.lastChild.textContent!==s&&(i.lastChild.textContent=s)}var hr=lt(Mt(1.4,1.4,44,12),je(16765498,{transparent:!0,opacity:.32,depthWrite:!1}),[0,22,0]);hr.visible=!1;se.add(hr);var un=null,Rg="",np=0,Ts=0,ti=i=>{Rg=i,np=Pt+4},L0=50,yl=5,Cg=()=>new Date().toLocaleDateString("sv"),hu=()=>{let i=De.get("uga-errand");return i.d===Cg()&&i.n||0},ip=()=>un?"\uC2EC\uBD80\uB984 \uADF8\uB9CC\uB450\uAE30":hu()>=yl?"\uC624\uB298 \uC2EC\uBD80\uB984 \uB05D":`\uC871\uC7A5 \uC2EC\uBD80\uB984 \uBC1B\uAE30 (${yl-hu()}\uBC88 \uB0A8\uC74C)`;function Z1(){if(un)un=null,hr.visible=!1,ti("\uC6B0\uAC00. \uC2EC\uBD80\uB984 \uADF8\uB9CC\uB480\uB2E4.");else if(hu()>=yl)ti("\uC6B0\uAC00. \uC624\uB298 \uC2EC\uBD80\uB984 \uB2E4 \uD588\uB2E4. \uB0B4\uC77C \uB610 \uC640\uB77C.");else{let i=[...dn.slice(0,ep()).map((n,s)=>[n.x,n.z,s?$a(s):"\uBAA8\uB2E5\uBD88 \uAD11\uC7A5"]),[Rn.x,Rn.z,"\uCCA8\uBC99 \uC6C5\uB369\uC774"],[Gn.x,Gn.z,"\uD070 \uACF5\uB8E1 \uBF08"]].filter(n=>Math.hypot(n[0]-tt.x,n[1]-tt.z)>30),t=i[Math.floor(Math.random()*i.length)],e=Math.hypot(t[0]-tt.x,t[1]-tt.z);un={x:t[0],z:t[1],name:t[2],pay:L0},hr.position.set(t[0],22,t[1]),hr.visible=!0,ti(`\uC6B0\uAC00. ${t[2]}\uC5D0 \uACE0\uAE30 \uAC16\uB2E4 \uC918\uB77C. \uBA39\uC774 ${L0}\uAC1C \uC900\uB2E4.`)}w("errand").textContent=ip()}w("errand").onclick=Z1;function J1(){let i=null,t=1e9;cr.children.forEach((s,r)=>{let a=Math.hypot(tt.x-s.position.x,tt.z-s.position.z),{pay:o,line:l}=s.userData;s.position.y=s.userData.h+Math.sin(Pt*3+r)*.15,s.rotation.y=Pt*1.5,a<2.2+tt.r?(If(s),cu(o),Ts=Pt+.5,l&&ti(`\uC6B0\uAC00! ${l}. \uBA39\uC774 ${o}\uAC1C.`)):a>Ti*2.5?If(s):a<t&&(t=a,i=s)}),i?nr(w("afood"),i.position.x,i.position.y,i.position.z):nr(w("afood")),w("wstat").classList.toggle("got",Pt<Ts);let e="";if(un){let s=Math.hypot(tt.x-un.x,tt.z-un.z);if(hr.material.opacity=.3+Math.sin(Pt*4)*.08,s<9){let r=hu()+1;De.set("uga-errand",{d:Cg(),n:r}),cu(un.pay),ti(`\uC6B0\uAC00! \uC798 \uAC16\uB2E4 \uC92C\uB2E4. \uBA39\uC774 ${un.pay}\uAC1C \uC900\uB2E4.`+(r>=yl?" \uC624\uB298 \uC2EC\uBD80\uB984\uC740 \uB05D\uC774\uB2E4.":` \uC624\uB298 ${yl-r}\uBC88 \uB354 \uD560 \uC218 \uC788\uB2E4.`)),un=null,hr.visible=!1,w("errand").textContent=ip()}else e=`\uC2EC\uBD80\uB984: ${un.name}\uAE4C\uC9C0 ${Math.round(s)}\uAC78\uC74C`}un?nr(w("ajob"),un.x,3,un.z,`${un.name} ${Math.round(Math.hypot(tt.x-un.x,tt.z-un.z))}\uAC78\uC74C`):nr(w("ajob")),e||(e=Ff);let n=`\uBA39\uC774 ${Lt.n.toLocaleString()}\uAC1C`+(Pt<np?`
`+Rg:e?`
`+e:"");w("wstat").textContent!==n&&(w("wstat").textContent=n)}$r();ni&&!We&&!pn&&fetch(ni+"/api/world").then(i=>i.json()).then(i=>{xl=i,$r(),q1(),Ei()}).catch(()=>{});var K1=["\uD070 \uBA38\uB9AC\uC640 \uAD75\uC740 \uC774\uBE68. \uC55E\uB2E4\uB9AC\uB294 \uC544\uC8FC \uC9E7\uC544\uC694.","\uC544\uC2DC\uC544\uC5D0 \uC0B4\uB358 \uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4\uC758 \uCE5C\uCC99. \uBA38\uB9AC\uAC00 \uB354 \uC881\uACE0 \uAE38\uC5B4\uC694.","\uB4F1\uC5D0 \uB3DB\uC774 \uC19F\uC544 \uC788\uACE0, \uAE34 \uC8FC\uB465\uC774\uB85C \uBB3C\uACE0\uAE30\uB97C \uC7A1\uC544\uC694.","\uBFD4 \uC14B\uACFC \uB113\uC740 \uBAA9 \uD504\uB9B4\uC774 \uC788\uC5B4\uC694.","\uD558\uB298\uC744 \uB098\uB294 \uC775\uB8E1. \uB2E4 \uC790\uB77C\uBA74 \uB9C8\uC744 \uC704\uB97C \uB0A0\uC544\uB2E4\uB140\uC694.","\uBAA9\uC774 \uC544\uC8FC \uAE38\uC5B4\uC694. \uB9C8\uC744\uC5D0\uC11C \uD0A4\uAC00 \uC81C\uC77C \uCEE4\uC694.","\uB4F1\uC5D0 \uD310\uC774 \uC904\uC9C0\uC5B4 \uC11C \uC788\uACE0, \uAF2C\uB9AC \uB05D\uC5D0 \uAC00\uC2DC\uAC00 \uC788\uC5B4\uC694.","\uC628\uBAB8\uC774 \uAC11\uC637\uC774\uC5D0\uC694. \uAF2C\uB9AC \uB05D\uC5D0 \uACE4\uBD09\uC774 \uB2EC\uB838\uC5B4\uC694.","\uBA38\uB9AC \uB4A4\uB85C \uAE34 \uBCCF\uC774 \uBED7\uC5B4 \uC788\uC5B4\uC694.","\uBAB8\uC740 \uC791\uC9C0\uB9CC \uBE60\uB974\uACE0, \uAE43\uD138\uC774 \uC788\uC5B4\uC694."];Pn.forEach((i,t)=>{let e=document.createElement("article");e.innerHTML=`<div class="pics"><figure><canvas width="220" height="220"></canvas>\uC544\uAE30</figure><figure><canvas width="220" height="220"></canvas>\uB2E4 \uC790\uB77C\uBA74</figure></div><b></b><em class="${Sf[t]?"c":"h"}">${Sf[t]?"\uC721\uC2DD":"\uCD08\uC2DD"}</em><p></p>`,e.querySelector("b").textContent=i,e.querySelector("p").textContent=K1[t],w("dex").append(e)});function Eu(i){let t=new el({antialias:!0,alpha:!0});t.setSize(i,i,!1),t.toneMapping=Na;let e=new Ma,n=new on(28,1,.1,300),s=new Ca(16773336,2.4);s.position.set(4,6,7),e.add(new Ra(16777215,9075296,1.35),s);let r=new Yi({map:Ce.egg,side:kn,roughness:.6});return{shot:(o,l,c,h,d,u)=>{let f=new ks(l,c,1),g=!d&&lt(Xf,r,[0,.72,0],[.58,.68,.58]);f.frustumCulled=!1,f.setMatrixAt(0,new Vt),f.setColorAt(0,u===1?fn.setHSL(.1,.88,.45):u===2?fn.setHSL(.8,.45,.78):d?fn.setHSL(h,.26,.42):fn.setHSL(h,.6,.6)),g&&r.color.setHSL(h,.62,.76),e.add(f),g&&e.add(g);let v=l.boundingSphere,m=v.center,p=v.radius/Math.sin(14*Math.PI/180)*(d?.86:1.12),[x,E]=d?[.88,.42]:[.62,.75];n.position.set(m.x+p*x,m.y+p*.22,m.z+p*E),n.lookAt(m),t.render(e,n);let M=o.getContext("2d");M.clearRect(0,0,o.width,o.height),M.drawImage(t.domElement,0,0,o.width,o.height),e.remove(f),g&&e.remove(g),f.dispose()},done:()=>{t.dispose(),t.forceContextLoss()}}}var D0=!1;function j1(){if([...w("dex").children].forEach((e,n)=>e.classList.toggle("mine",Dr>=0&&yn[Dr]===n)),D0)return;D0=!0;let{shot:i,done:t}=Eu(220);[...w("dex").children].forEach((e,n)=>{let s=e.querySelectorAll("canvas"),r=Dr>=0&&yn[Dr]===n?Fi(le[Dr]):(n*.618+.08)%1;i(s[0],ja[n],qr,r,0),i(s[1],Bi[n].g,Bi[n].m,r,1)}),t()}var Pg="";function Ig(i){let t=i.trim().replace(/^@/,"");if(!/^[\w.]{1,30}$/.test(t))return!1;let e=Math.floor(Fi(t+"!")*Pn.length),n=Fi(t),{shot:s,done:r}=Eu(440);return Pg=t,s(w("kpic"),ja[e],qr,n,0),r(),w("kh").textContent=`@${t} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,w("kname").textContent=`\uC544\uAE30 ${Pn[e]}`,w("kmsg").textContent=`${Sf[e]?"\uC721\uC2DD":"\uCD08\uC2DD"} \uACF5\uB8E1\uC774\uC5D0\uC694. \uD669\uAE08\uC774\uB098 \uBB34\uC9C0\uAC1C \uAC19\uC740 \uB4DC\uBB38 \uC0C9\uC778\uC9C0\uB294 \uC54C\uC774 \uAE70 \uB54C \uC54C \uC218 \uC788\uC5B4\uC694. \uD314\uB85C\uC6B0\uD558\uACE0 \uAC8C\uC2DC\uBB3C\uC5D0 \uB313\uAE00\uC744 \uB2EC\uBA74 \uBA87 \uBD84 \uC548\uC5D0 \uC774 \uC54C\uC774 \uB0B4 \uC9D1 \uB465\uC9C0\uC5D0 \uB193\uC5EC\uC694.`,w("peek").showModal(),!0}function Q1(i){let t=Wn(i);if(t<0)return;let e=le[t],n=pr(t),s=n>=2?ur[t]:0,r=Gr(t),a=xl.top.findIndex(c=>c.id===e.toLowerCase()),{shot:o,done:l}=Eu(440);o(w("ppic"),n===3?Bi[yn[t]].g:ja[yn[t]],n===3?Bi[yn[t]].m:qr,Fi(e),n===3,s),l(),w("ppic").className=s?"r"+s:"",w("ph").textContent="@"+e,w("pname").textContent=n<2?`\uC54C\uC5D0\uC11C \uB098\uC62C ${Pn[yn[t]]}`:(s?Wf[s]+" ":"")+(n===3?"":"\uC544\uAE30 ")+Pn[yn[t]]+(Oi[t]?.name?` \xB7 ${Oi[t].name}`:""),w("pinfo").textContent=`${bl} ${Mu(t)} \xB7 ${_g(t)} \xB7 \uBA39\uC774 ${r.toLocaleString()}\uAC1C \uBA39\uC74C \xB7 \uD06C\uAE30 ${dr(r).toFixed(1)}\uBC30`+(a>=0?` \xB7 \uBA39\uC774 \uC21C\uC704 ${a+1}\uC704`:"")+(tn.has(t)?" \xB7 \uC9C0\uAE08 \uC0B0\uCC45 \uC911":""),w("pgo").hidden=!!tt,w("pgo").onclick=()=>{w("prof").close(),zi(t)},w("prof").showModal()}w("prx").onclick=()=>w("prof").close();function tb(){let i=Pg,t=Math.floor(Fi(i+"!")*Pn.length),e=me.clone();e.aspect=Ne/jn,e.updateProjectionMatrix();let n=xg(e,qt.target.x,qt.target.z),s=n.getContext("2d");s.fillStyle="rgba(46,36,24,.42)",s.fillRect(0,0,Ne,jn);let r=Object.assign(document.createElement("canvas"),{width:900,height:900}),a=Eu(900);a.shot(r,ja[t],qr,Fi(i),0),a.done(),s.fillStyle="rgba(255,250,240,.16)",s.beginPath(),s.arc(Ne/2,820,420,0,Math.PI*2),s.fill(),s.drawImage(r,(Ne-900)/2,370),s.textAlign="center",s.fillStyle="#fffaf0",s.shadowColor="rgba(0,0,0,.5)",s.shadowBlur=14,su(s,`@${i} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,54,Ne-120,700),s.fillText(`@${i} \uC54C\uC5D0\uC11C \uB098\uC62C \uACF5\uB8E1`,Ne/2,250),s.fillStyle="#ffd98a",su(s,`\uC544\uAE30 ${Pn[t]}`,104,Ne-100),s.fillText(`\uC544\uAE30 ${Pn[t]}`,Ne/2,1420),s.fillStyle="#fffaf0",s.font=`700 44px ${Wa}`,s.fillText("\uB4DC\uBB38 \uC0C9\uC778\uC9C0\uB294 \uC54C\uC774 \uAE70 \uB54C \uC54C \uC218 \uC788\uB2E4",Ne/2,1510),s.font=`800 52px ${Wa}`,s.fillText("\uB108\uB294 \uBB50 \uB098\uC640?",Ne/2,1700),s.fillStyle="rgba(255,250,240,.85)",s.font=`600 36px ${Wa}`,s.fillText(`@${pl} \uD504\uB85C\uD544 \uB9C1\uD06C\uC5D0\uC11C \uC544\uC774\uB514 \uB123\uC5B4 \uBCF4\uAE30`,Ne/2,1780),w("peek").close(),yg(n,`ugauga_${i}_\uACF5\uB8E1.jpg`,"\uACF5\uB8E1 \uBBF8\uB9AC\uBCF4\uAE30 \uC0AC\uC9C4")}w("kx").onclick=()=>w("peek").close();w("kphoto").onclick=tb;w("kjoin").onclick=()=>{w("peek").close(),Tu(),w("how").showModal()};var Tu=()=>{w("intro").hidden=!0,document.body.classList.remove("intro")};w("ilook").onclick=Tu;w("ijoin").onclick=()=>{Tu(),w("how").showModal()};w("ifind").onsubmit=i=>{i.preventDefault(),lu(w("iq").value)?Tu():Ig(w("iq").value)||(w("iq").value="",w("iq").placeholder=wf)};var Kh=new Map,uu=i=>Math.floor(i/8),wu=i=>Math.hypot(i.elements[0],i.elements[2]),Pl=(i,t,e)=>{let n=uu(i)+","+uu(t);Kh.has(n)||Kh.set(n,[]),Kh.get(n).push(i,t,e)};Ya.forEach(i=>Pl(i.elements[12],i.elements[14],2.5*wu(i)));lg.forEach(i=>Pl(i.elements[12],i.elements[14],.55*wu(i)));cg.forEach(i=>Pl(i.elements[12],i.elements[14],.6*wu(i)));hg.forEach(i=>Pl(i.elements[12],i.elements[14],1.25*wu(i)));dn.forEach((i,t)=>Pl(i.x,i.z,t?wl(t)?3.8:1.9:3.4));function Lg(i){let t=uu(i.x),e=uu(i.z);for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){let r=Kh.get(t+n+","+(e+s));if(r)for(let a=0;a<r.length;a+=3){let o=i.x-r[a],l=i.z-r[a+1],c=Math.hypot(o,l),h=r[a+2]+i.r;c<h&&c>1e-4&&(i.x=r[a]+o/c*h,i.z=r[a+1]+l/c*h)}}}var Za=new Set,bi={x:0,y:0},Vr=new Vt,eb=new Vt,Dg=new L,nb=[qt.minDistance,qt.maxDistance],N0=0;w("walkhint").onclick=()=>w("walkhint").classList.toggle("mini");var vl=[];function Ja(){if(tt)return;eo(),w("card").hidden=!0,di=null,Cu(!1),qt.autoRotate=!1;let i=Dr,t=i>=0?yn[i]:-1,e=vn.position.x,n=vn.position.z,s=0,r=.8,a=9,o=`\uC871\uC7A5 ${hi}`;if(i>=0)if(o=`@${le[i]}\uC758 `+["\uC54C","\uAE08 \uAC04 \uC54C",`\uC544\uAE30 ${Pn[t]}`,Pn[t]][pr(i)],ze){let c=ag(i,Pt),h=Bi[t].len*vu[i];e=c.x,n=c.z,s=Math.atan2(c.sn,c.cs),r=Math.min(2.4,h*.17),a=Math.max(10,h*1.7)}else{let c=ei[i].elements;e=c[12],n=c[14],s=Math.atan2(As[i].cx-e,As[i].cz-n),e+=Math.sin(s)*3,n+=Math.cos(s)*3,r=.6,a=0,vl=Rs.has(i)?[{obj:Rs.get(i),j:i}]:bs.map(h=>({im:h,j:i,s:ge===2?1.5:1})),vl.forEach(h=>{h.im&&(h.im.frustumCulled=!1)})}tt={i,x:e,z:n,a:s,r,dist:0,hop:0,rot:0,eye:a*.22+(a?.6:1.2)},Lg(tt);let l=a*(me.aspect<1?1.5:1);qt.target.set(tt.x,tt.eye,tt.z),me.position.set(tt.x-Math.sin(s)*(l||6.5),l*.55||5,tt.z-Math.cos(s)*(l||6.5)),qt.minDistance=3,qt.maxDistance=(a||9)*4,qt.minPolarAngle=.4,qt.maxPolarAngle=2.3,Hf("look"),w("walkhint").replaceChildren(Object.assign(document.createElement("b"),{textContent:o}),matchMedia("(pointer:coarse)").matches?"\uB3D9\uADF8\uB77C\uBBF8\uB97C \uBC00\uBA74 \uAC78\uC5B4\uC694. \uB05D\uAE4C\uC9C0 \uBC00\uBA74 \uB2EC\uB824\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uB458\uB7EC\uBD10\uC694.":"WASD\uB85C \uAC77\uACE0 Shift\uB85C \uB2EC\uB824\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uB458\uB7EC\uBD10\uC694."," \uBE68\uAC04 \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00\uBA74 \uBA39\uC774\uAC00 \uC788\uC5B4\uC694. \uC5F4\uB9E4 1\uAC1C, \uBC84\uC12F 2\uAC1C, \uACE0\uAE30 3\uAC1C, \uD070 \uC5F4\uB9E4 5\uAC1C."," \uBA85\uC18C\uC5D0\uC11C\uB3C4 \uB180 \uC218 \uC788\uC5B4\uC694: \uC6C5\uB369\uC774 \uB09A\uC2DC, \uD070 \uBF08 \uD654\uC11D \uD30C\uAE30, \uD654\uC0B0 \uC54C \uB370\uC6B0\uAE30, \uBAA8\uB2E5\uBD88 \uC26C\uAE30. \uBA85\uC18C\uC5D0 \uAC00\uBA74 \uB3C4\uC7A5\uC774 \uCC0D\uD600\uC694.",i<0?" \uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uB0B4 \uACF5\uB8E1\uC73C\uB85C \uAC78\uC744 \uC218 \uC788\uC5B4\uC694.":"",er.visible?` \uC624\uB298\uC758 \uAE08\uBE5B \uBF08\uB294 ${er.userData.hood} \uAE38 \uC5B4\uB518\uAC00\uC5D0 \uC228\uC5B4 \uC788\uC5B4\uC694. \uCC3E\uC73C\uBA74 \uBA39\uC774 ${Tf}\uAC1C.`:" \uC624\uB298 \uAE08\uBE5B \uBF08\uB294 \uC774\uBBF8 \uCC3E\uC558\uC5B4\uC694. \uB0B4\uC77C \uB2E4\uB978 \uACF3\uC5D0 \uB610 \uC228\uC5B4\uC694."),w("walkhint").classList.remove("mini"),clearTimeout(N0),N0=setTimeout(()=>w("walkhint").classList.add("mini"),9e3),document.body.classList.add("walking"),w("walkui").hidden=!1,cr.children.forEach(c=>If(c)),cr.visible=!0,w("errand").textContent=ip(),[4,9,10].forEach((c,h)=>cr.children[c].position.set(tt.x+Math.sin(s)*(6+h*3.5),0,tt.z+Math.cos(s)*(6+h*3.5))),Il()}function Ng(){if(tt&&(vl.forEach(({im:i,obj:t,j:e})=>{if(t)return Su(e);i.setMatrixAt(e,Vr.multiplyMatrices(i.userData.mats[e],i.userData.L)),i.instanceMatrix.needsUpdate=!0}),vl=[],cr.visible=hr.visible=!1,un=null,np=0,we&&we.readyState===1&&we.send("0"),Lf="",vn.position.set(0,0,11),vn.rotation.y=0,tt=null,wg(),bi.x=bi.y=0,Za.clear(),[qt.minDistance,qt.maxDistance]=nb,qt.minPolarAngle=0,qt.maxPolarAngle=1.45,Hf("map"),document.body.classList.remove("walking"),w("walkui").hidden=!0,nr(w("ajob")),nr(w("afood")),!We&&!pn)){let i=is(),t=Lt.n.toLocaleString();i>=0?(zi(i),w("cinfo").textContent=Lt.n?`\uBA39\uC774 ${t}\uAC1C\uB97C \uBAA8\uC558\uC5B4\uC694. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C ${lr}\uC5D0\uAC8C \uC918\uC694.`:"\uC774\uBC88\uC5D4 \uBA39\uC774\uB97C \uBABB \uC8FC\uC6E0\uC5B4\uC694. \uB2E4\uC74C \uC0B0\uCC45\uC5D0\uC11C \uBE68\uAC04 \uD654\uC0B4\uD45C\uB97C \uB530\uB77C\uAC00 \uBD10\uC694."):Lt.n&&gr(`\uBA39\uC774 ${t}\uAC1C`,"\uCC3E\uAE30\uC5D0\uC11C \uB0B4 \uC778\uC2A4\uD0C0 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uB0B4 \uC54C\uC5D0\uAC8C \uBA39\uC774\uB97C \uC904 \uC218 \uC788\uC5B4\uC694.","")}}function ib(i,t){let e=tt,n=e.x,s=e.z,r=p=>Za.has(p)?1:0,a=bi.x+r("d")+r("arrowright")-r("a")-r("arrowleft"),o=-bi.y+r("w")+r("arrowup")-r("s")-r("arrowdown"),l=Math.hypot(a,o);if(l>.08){let p=qt.target.x-me.position.x,x=qt.target.z-me.position.z,E=Math.hypot(p,x)||1,M=Math.min(1,l)/l,R=(p*o-x*a)/E*M,T=(x*o+p*a)/E*M,_=(Za.has("shift")||bi.run?16:10)*(ze&&e.i>=0?1.5:1)*i;e.x+=R*_,e.z+=T*_;let b=Math.atan2(R,T)-e.a;e.a+=Math.atan2(Math.sin(b),Math.cos(b))*Math.min(1,i*10),Lg(e);let N=oe+230,C=Math.hypot(e.x,e.z);C>N&&(e.x*=N/C,e.z*=N/C),e.dist+=Math.hypot(e.x-n,e.z-s)}let[c,h]=Xg("me"),d=e.hop=Math.abs(Math.sin(e.dist*2.2))*.28+c;e.rot=Math.sin(e.dist*2.2)*.12+h;let[u,f]=Gg("me"),g=e.x+u,v=e.z+f;e.i<0&&(vn.position.set(g,d,v),vn.rotation.y=e.a),vl.forEach(({im:p,obj:x,j:E,s:M})=>{if(x){x.position.set(g,d,v),x.rotation.set(0,e.a+e.rot,0);return}Vr.makeRotationY(e.a+e.rot).scale(Dg.set(M,M,M)).setPosition(g,d,v),p.setMatrixAt(E,Vr.multiply(p.userData.L)),p.instanceMatrix.needsUpdate=!0});let m=Math.max(0,qt.getPolarAngle()-1.35)*qt.getDistance()*1.6;me.position.x+=e.x-n,me.position.z+=e.z-s,me.position.y+=m-(e.lift||0),e.lift=m,qt.target.set(e.x,e.eye+m,e.z)}w("walkgo").onclick=Ja;w("walkend").onclick=Ng;{let i=w("stick"),t=i.firstElementChild,e=n=>{let s=i.getBoundingClientRect(),r=(n.clientX-s.left-s.width/2)/40,a=(n.clientY-s.top-s.height/2)/40,o=Math.hypot(r,a);o>1&&(r/=o,a/=o),bi.x=r,bi.y=a,bi.run=o>1.1,i.classList.toggle("run",bi.run),t.style.transform=`translate(${r*36}px,${a*36}px)`};i.onpointerdown=n=>{n.stopPropagation(),i.setPointerCapture(n.pointerId),e(n)},i.onpointermove=n=>{n.stopPropagation(),i.hasPointerCapture(n.pointerId)&&e(n)},i.onpointerup=i.onpointercancel=i.onlostpointercapture=n=>{n.stopPropagation(),bi.x=bi.y=0,bi.run=!1,i.classList.remove("run"),t.style.transform=""}}addEventListener("keydown",i=>{if(i.target.tagName==="INPUT"){i.key==="Escape"&&i.target.blur();return}Za.add(i.key.toLowerCase()),i.key==="Escape"&&Ng()});addEventListener("keyup",i=>Za.delete(i.key.toLowerCase()));addEventListener("blur",()=>Za.clear());var we=null,Wr=null,U0=0,Lf="",Df=0,ir=[];function Il(){if(!ni||pn||We||!window.WebSocket)return;let i=is()>=0&&kr()?wi():"";if(we&&Wr===i)return;we&&(we.onclose=null,we.close(),tn.forEach((e,n)=>df(n))),Wr=i,w("cform").hidden=!i,w("cpin").hidden=!!i,ir.length=0,Ru();let t=we=new WebSocket(ni.replace(/^http/,"ws")+"/api/live"+(i?"?id="+encodeURIComponent(i)+"&tok="+kr():""));t.onopen=()=>{Df=Date.now()},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}n.forEach(s=>{let[r,a,o,l]=s;if(r==="!")return lb(...s.slice(1));let c=Wn(r);if(c<0)return;let h=tn.get(c);if(a===void 0){h&&df(c);return}if(h){h.tx=a,h.tz=o,h.ta=l;return}let d=ze?[]:Rs.has(c)?[{obj:Rs.get(c)}]:bs.map(u=>(u.frustumCulled=!1,{im:u,s:ge===2?1.5:1}));tn.set(c,{j:c,x:a,z:o,a:l,tx:a,tz:o,ta:l,dist:0,hop:0,rot:0,items:d,tag:to("\uC0B0\uCC45 \uC911","@"+le[c],!1,.7)})})},t.onclose=()=>{we===t&&(we=null,tn.forEach((e,n)=>df(n)),setTimeout(Il,5e3))}}function df(i){let t=tn.get(i);t&&(tn.delete(i),t.items.forEach(({im:e,obj:n})=>{if(n)return Su(i);e.setMatrixAt(i,Vr.multiplyMatrices(e.userData.mats[i],e.userData.L)),e.instanceMatrix.needsUpdate=!0}),se.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose())}function sb(i){if(tt&&tt.i>=0&&Wr&&we&&we.readyState===1){let n=JSON.stringify([tt.x,tt.z,tt.a].map(s=>Math.round(s*10)/10));Pt-U0>(n===Lf?3:.25)&&(we.send(n),U0=Pt,Lf=n)}let t=Math.min(1,i*6),e=n=>ze?2+Bi[yn[n]].len*vu[n]*.45:2.4;tn.forEach(n=>{if(tt&&tt.i===n.j)return;let s=n.x,r=n.z,a=n.ta-n.a;n.x+=(n.tx-n.x)*t,n.z+=(n.tz-n.z)*t,n.a+=Math.atan2(Math.sin(a),Math.cos(a))*t,n.dist+=Math.hypot(n.x-s,n.z-r);let[o,l]=Xg(n.j);n.hop=Math.abs(Math.sin(n.dist*2.2))*.28+o,n.rot=Math.sin(n.dist*2.2)*.12+l;let[c,h]=Gg(n.j),d=n.x+c,u=n.z+h;n.items.forEach(({im:f,obj:g,s:v})=>{if(g){g.position.set(d,n.hop,u),g.rotation.set(0,n.a+n.rot,0);return}Vr.makeRotationY(n.a+n.rot).scale(Dg.set(v,v,v)).setPosition(d,n.hop,u),f.setMatrixAt(n.j,Vr.multiply(f.userData.L)),f.instanceMatrix.needsUpdate=!0}),n.tag.position.set(n.x,e(n.j)+n.hop,n.z)})}Il();var Ug=i=>new Date(i+9*36e5),sp=i=>{let t=2166136261;for(let e of i)t=Math.imul(t^e.charCodeAt(0),16777619)>>>0;return t/4294967296};function Au(i=Date.now()){let t=Ug(i),e=t.toISOString().slice(0,10),n=t.getUTCHours(),s=n*60+t.getUTCMinutes(),r=[];for(let a=0;a<4;a++){let o=600+a*195+Math.floor(sp(e+"r"+a)*180);s>=o&&s<o+5&&r.push({kind:"rain",key:e+"r"+a,n:30,pay:8,end:o+5})}return t.getUTCMinutes()<3&&r.push({kind:"boom",key:e+"v"+n,n:12,pay:15,end:n*60+3}),s>=1260&&s<1270&&r.push({kind:"camp",key:e+"c",end:1270}),Nf&&r.push({rain:{kind:"rain",key:e+"rT",n:30,pay:8},boom:{kind:"boom",key:e+"vT",n:12,pay:15},camp:{kind:"camp",key:e+"cT"}}[Nf]||[]),r.flat().map(a=>({end:s+5,...a}))}var Nf=ni.startsWith("http://localhost")&&In.get("ev")||"",Og=["\uC6B0\uAC00!","\uC548\uB155","\uAC19\uC774 \uAC00\uC790","\uBA39\uC774 \uC5EC\uAE30!","\uACE0\uB9C8\uC6CC","\uD558\uD558\uD558","\uBC18\uAC00\uC6CC","\uC798 \uAC00","\uB530\uB77C\uC640","\uAE30\uB2E4\uB824","\uC5EC\uAE30 \uB9CE\uB2E4!","\uBAA8\uC5EC\uB77C!","\uCD95\uD558\uD574","\uB300\uB2E8\uD574","\uBBF8\uC548","\uC88B\uC544","\uBC30\uACE0\uD30C","\uB0B4 \uC54C \uBD10 \uC918","\uC4F0\uB2E4\uB4EC\uC5B4 \uC904\uAC8C","\uB0B4\uC77C \uB610 \uC640"],rb=["\uC810\uD504","\uBE59\uAE00\uBE59\uAE00","\uC190 \uD754\uB4E4\uAE30"],Wh={ev:[10,3,8,11,0,5,4,13],camp:[11,1,6,0,5,4,19,7],spot:[2,8,9,13,12,0,4,5],base:[0,1,6,2,8,17,18,4]},Fg=["\uC774\uBE68","\uBC1C\uD1B1","\uAC08\uBE44\uBF08","\uB4F1\uBF08","\uAF2C\uB9AC\uBF08","\uBA38\uB9AC\uBF08","\uBFD4","\uC54C \uAECD\uB370\uAE30","\uBC1C\uC790\uAD6D","\uB0A0\uAC1C\uBF08"],ab=[30,40,50,60,80,100,200],Bg=[["\uBAA8\uB2E5\uBD88 \uAD11\uC7A5",0,0,ar+1.5],["\uC871\uC7A5 \uC6B0\uAC00",0,11,5],["\uC6B0\uB974\uB989 \uD654\uC0B0",Mn,Sn,100],["\uCCA8\uBC99 \uC6C5\uB369\uC774",Rn.x,Rn.z,24],["\uD070 \uACF5\uB8E1 \uBF08",Gn.x,Gn.z,18]],O0=Promise.resolve();function es(i,t){return Es()?O0=O0.then(()=>ul||(Lt.srv?0:Ei())).then(()=>fetch(ni+"/api/act",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:wi(),tok:kr(),k:i,arg:t})})).then(e=>e.ok?e.json():(e.status===401&&Sg(),null)).then(e=>(e&&(Cn=e,(e.tk||[]).forEach(n=>Ka.add(n)),Lt.n=e.n+Lt.owed,Lt.fed=e.fed,De.set("uga-shell",Lt),$r(),ob()),e)).catch(()=>null):Promise.resolve(null)}function ui(i){let t=Object.assign(document.createElement("p"),{textContent:i}),e=w("chat");for(w("toast").style.top=e.offsetHeight?e.getBoundingClientRect().bottom+8+"px":"",w("toast").append(t);w("toast").children.length>3;)w("toast").firstChild.remove();setTimeout(()=>t.remove(),4500)}var F0="";function zg(){!Es()||F0===wi()||(F0=wi(),es("login").then(i=>{i&&(w("qbtn").hidden=!1,i.got&&gr(`\uC871\uC7A5 ${hi}`,i.first?`\uC6B0\uAC00! \uCC98\uC74C \uC654\uAD6C\uB098. \uBA39\uC774 ${i.got}\uAC1C \uC900\uB2E4. \uB0B4\uC77C \uB610 \uC624\uBA74 \uB610 \uC900\uB2E4. \uC624\uB978\uCABD \uC704 "\uC624\uB298 \uBBF8\uC158"\uB3C4 \uD574 \uBD10\uB77C.`:`\uC6B0\uAC00. \uC5F0\uC18D \uCD9C\uC11D ${i.streak}\uC77C\uC9F8. \uBA39\uC774 ${i.got}\uAC1C \uC900\uB2E4.`+((i.streak-1)%7===5?" \uB0B4\uC77C \uC624\uBA74 200\uAC1C\uB2E4.":""),""))}))}function ob(){let i=Cn;if(!i)return;let t=i.mis.filter(([,s,r])=>s>=r).length,e=i.streak?(i.streak-1)%7:-1;w("qbtn").textContent=i.chest?"\uC624\uB298 \uBBF8\uC158 \uC644\uB8CC":`\uC624\uB298 \uBBF8\uC158 ${t}/3`,w("qbtn").classList.toggle("hot",t===3&&!i.chest),w("qsn").textContent=i.streak?`\uC5F0\uC18D \uCD9C\uC11D ${i.streak}\uC77C\uC9F8. \uD558\uB8E8\uB77C\uB3C4 \uBE60\uC9C0\uBA74 1\uC77C\uC9F8\uBD80\uD130 \uB2E4\uC2DC\uC608\uC694.`:"\uC624\uB298 \uCC98\uC74C\uC774\uC5D0\uC694.",w("qstreak").replaceChildren(...ab.map((s,r)=>Object.assign(document.createElement("span"),{className:(r<=e?"on":"")+(r===e?" today":""),textContent:`${r+1}\uC77C
${s}`}))),w("qmis").replaceChildren(...i.mis.map(([s,r,a])=>{let o=Or("div",(r>=a?"\uC644\uB8CC \xB7 ":"")+s,` ${r}/${a}`);return r>=a&&(o.className="ok"),o}));let n=w("qchest");n.disabled=i.chest||t<3,n.textContent=i.chest?"\uC624\uB298 \uBCF4\uBB3C \uC0C1\uC790\uB294 \uC5F4\uC5C8\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640\uC694":t<3?`\uBBF8\uC158 ${3-t}\uAC1C \uB354 \uD558\uBA74 \uBCF4\uBB3C \uC0C1\uC790 \xB7 \uBA39\uC774 150\uAC1C`:"\uBCF4\uBB3C \uC0C1\uC790 \uC5F4\uAE30 \xB7 \uBA39\uC774 150\uAC1C",w("qstamp").replaceChildren(...Bg.map(([s],r)=>Object.assign(document.createElement("span"),{className:i.stamps[r]?"on":"",textContent:s}))),w("qfn").textContent=`${i.fos.length}/10 \uBAA8\uC558\uC5B4\uC694. \uD070 \uACF5\uB8E1 \uBF08\uC5D0\uC11C \uD30C\uBA74 \uB098\uC640\uC694. 10\uAC1C\uB97C \uB2E4 \uBAA8\uC73C\uBA74 \uBA39\uC774 500\uAC1C.`,w("qfos").replaceChildren(...Fg.map((s,r)=>Object.assign(document.createElement("span"),{className:i.fos.includes(r)?"on":"",textContent:i.fos.includes(r)?s:"?"}))),w("qleft").textContent=`\uC624\uB298 \uB180\uAC70\uB9AC\uB85C \uB354 \uBC1B\uC744 \uC218 \uC788\uB294 \uBA39\uC774 ${i.left}\uAC1C(\uD558\uB8E8 800\uAC1C\uAE4C\uC9C0).`+(i.hot?` \uC54C\uC774 \uB530\uB73B\uD574\uC694: ${Math.ceil(i.hot/60)}\uBD84 \uB3D9\uC548 \uBA39\uC778 \uBA39\uC774\uAC00 1.5\uBC30\uB85C \uB4E4\uC5B4\uAC00\uC694.`:""),bu()}w("qbtn").onclick=()=>Hr("quest");w("qchest").onclick=()=>es("chest").then(i=>{i&&(eo(),gr("\uBCF4\uBB3C \uC0C1\uC790",i.got?`\uC6B0\uAC00! \uC624\uB298 \uBBF8\uC158 \uB2E4 \uD588\uB2E4. \uBA39\uC774 ${i.got}\uAC1C \uC900\uB2E4. \uB0B4\uC77C \uC0C8 \uBBF8\uC158 \uC900\uB2E4.`:i.no,""))});var Vn=i=>!!wi()&&String(i).toLowerCase()===wi().toLowerCase();function lb(i,t,e,n,...s){if(i==="chat")cb(t,e,n);else if(/^d[qsrw]$/.test(i))fb(i,t,e,n,...s);else if(i==="hide"){let r=ir.findIndex(a=>a[0]===t);r>=0&&(ir.splice(r,1),Ru())}else if(i==="note")ui(t);else if(i==="n")w("online").hidden=!(t>1),w("online").textContent=`\uC9C0\uAE08 ${t}\uBA85\uC774 \uB9C8\uC744\uC5D0`;else if(i==="say"){let r=Wn(t);tn.has(r)&&Xr(r,e)}else if(i==="emo"){let r=Wn(t);tn.has(r)&&Sl(r,e)}else i==="take"?Ka.add(t):i==="pet"?Vn(e)?(ui(`@${t} \uB2D8\uC774 \uB0B4 ${lr}\uC744 \uC4F0\uB2E4\uB4EC\uC5C8\uC5B4\uC694. \uBA39\uC774 5\uAC1C!`),Ei()):Vn(t)||ui(`@${t} \uB2D8\uC774 @${e} \uB2D8 ${lr}\uC744 \uC4F0\uB2E4\uB4EC\uC5C8\uC5B4\uC694`):i==="fish"&&!Vn(t)?ui(`@${t} \uB2D8\uC774 \uD669\uAE08 \uBB3C\uACE0\uAE30\uB97C \uB09A\uC558\uC5B4\uC694! \uBA39\uC774 100\uAC1C`):i==="fossil"&&!Vn(t)?ui(`@${t} \uB2D8\uC774 \uD654\uC11D 10\uAC1C\uB97C \uB2E4 \uBAA8\uC558\uC5B4\uC694! \uBA39\uC774 500\uAC1C`):i==="chest"&&!Vn(t)&&ui(`@${t} \uB2D8\uC774 \uC624\uB298 \uBBF8\uC158 \uBCF4\uBB3C \uC0C1\uC790\uB97C \uC5F4\uC5C8\uC5B4\uC694`)}function cb(i,t,e){if(!ir.some(n=>n[0]===i))if(ir.push([i,t,e]),ir.length>30&&ir.shift(),Ru(),w("chat").hidden&&!Vn(t)&&we?.readyState===1&&Df&&Date.now()-Df>1500&&(Ha++,kg()),Vn(t))w("cin").value.trim()===e&&(w("cin").value=""),tt&&Xr("me",e);else{let n=Wn(t);tn.has(n)&&Xr(n,e)}}function Ru(){w("clog").replaceChildren(...ir.map(([i,t,e])=>{let n=document.createElement("p");return n.append(Object.assign(document.createElement("b"),{className:"who",textContent:"@"+t,onclick:()=>Q1(t)}),e),Wr&&!Vn(t)&&n.append(Object.assign(document.createElement("button"),{className:"rep",textContent:"\uC2E0\uACE0",onclick:()=>{mr()&&confirm(`@${t} \uB2D8\uC758 \uC774 \uB9D0\uC744 \uC2E0\uACE0\uD560\uAE4C\uC694?
"${e}"

3\uBA85\uC774 \uC2E0\uACE0\uD558\uBA74 \uBC14\uB85C \uC0AC\uB77C\uC9C0\uACE0, \uC6B4\uC601\uC790\uAC00 \uBD10\uC694.`)&&we.send(JSON.stringify({r:i}))}})),n})),w("clog").scrollTop=1e9}var Ha=0,kg=()=>{w("chatb").textContent=Ha?`\uCC44\uD305 ${Ha>9?"9+":Ha}`:"\uCC44\uD305",w("chatb").classList.toggle("hot",!!Ha)},rp=i=>{if(w("chat").hidden=!i,!i)return w("cin").blur();Ha=0,kg(),Ru(),Wr&&w("cin").focus()};w("chatb").onclick=()=>rp(w("chat").hidden);w("chat").querySelector(".x").onclick=()=>rp(!1);w("cpin").onclick=()=>{is()>=0?Qf():ui('\uC0B0\uCC45\uC744 \uB05D\uB0B4\uACE0 "\uCC3E\uAE30"\uC5D0\uC11C \uB0B4 \uC544\uC774\uB514\uB97C \uBA3C\uC800 \uCC3E\uC544 \uC8FC\uC138\uC694.')};w("cform").onsubmit=i=>{i.preventDefault();let t=w("cin").value.trim();t&&mr()&&we.send(JSON.stringify({c:t}))};var Ml=new Map;function Xr(i,t){let e=document.createElement("canvas");e.width=256,e.height=112;let n=e.getContext("2d");n.fillStyle="#fffaf0",n.strokeStyle="#6b5a45",n.lineWidth=5,n.beginPath(),n.roundRect(6,6,244,76,30),n.moveTo(112,80),n.lineTo(128,104),n.lineTo(144,80),n.fill(),n.stroke(),n.fillStyle="#fffaf0",n.fillRect(110,74,36,9),n.fillStyle="#2e2418",n.textAlign="center";let s=34,r=typeof t=="string"?t:Og[t]||"";do n.font=`800 ${s}px Pretendard,"Apple SD Gothic Neo","Malgun Gothic",sans-serif`;while(n.measureText(r).width>224&&--s>16);for(;r.length>1&&n.measureText(r).width>224;)r=r.slice(0,-2)+"\u2026";n.fillText(r,128,57);let a=new Gs(e);a.colorSpace=an;let o=new Fs(new ps({map:a,toneMapped:!1,fog:!1,depthTest:!1}));o.scale.set(1.9,.83,1),o.renderOrder=9,se.add(o),Hg(i),Ml.set(i,{s:o,until:Pt+3.5})}function Hg(i){let t=Ml.get(i);t&&(se.remove(t.s),t.s.material.map.dispose(),t.s.material.dispose(),Ml.delete(i))}var mr=()=>we&&we.readyState===1&&Wr;function hb(){let i=Au(),t=(s,r)=>tt?Math.hypot(tt.x-s,tt.z-r):1e9,e=i.some(s=>s.n)?Wh.ev:i.some(s=>s.kind==="camp")||t(0,0)<ar+4?Wh.camp:t(Rn.x,Rn.z)<24||t(Gn.x,Gn.z)<18||t(Mn,Sn)<100?Wh.spot:Wh.base,n=(s,r,a)=>Object.assign(document.createElement("button"),{className:r,textContent:s,onclick:()=>{w("saybox").hidden=!0,mr()&&a()}});w("saybox").replaceChildren(...rb.map((s,r)=>n(s,"move",()=>{we.send(JSON.stringify({m:r})),Sl("me",r)})),...e.map(s=>n(Og[s],"ghost",()=>{we.send(JSON.stringify({e:s})),Xr("me",s)})))}w("sayb").onclick=()=>{w("saybox").hidden&&hb(),w("saybox").hidden=!w("saybox").hidden};var Ga=["\uBC15\uCE58\uAE30","\uAF2C\uB9AC\uCE58\uAE30","\uBB3C\uAE30"],ap="\uBC15\uCE58\uAE30 > \uAF2C\uB9AC\uCE58\uAE30 > \uBB3C\uAE30 > \uBC15\uCE58\uAE30",ub=[10,30,50],Me=null,ff="";function sr(i,t,e){w("duh").textContent=i,w("dum").textContent=t,w("dub").replaceChildren(...e.map(([n,s,r])=>Object.assign(document.createElement("button"),{textContent:n,className:r||"",onclick:s}))),w("duel").open||w("duel").show()}var Uf=new Map;function Gg(i){let t=Uf.get(i);if(!t)return[0,0];let e=(Pt-t.t0)/1.6;if(e>=1)return Uf.delete(i),[0,0];let n=e<.45?0:Math.sin(Math.min(1,(e-.45)/.25)*Math.PI/2),s=Math.max(0,(e-.7)/.3),r=e<.28?-.8*Math.sin(e/.28*Math.PI/2):e<.45?-.8+2.1*(e-.28)/.17:(1.3-(t.res<0?4:t.res?0:1.6)*n)*(1-s);return[t.dx*r,t.dz*r]}var du=i=>Vn(i)&&tt?tt:tn.get(Wn(i)),Vg=i=>Vn(i)&&tt?"me":Wn(i);function Wg(i,t){if(i==="me")tt.a=t;else{let e=tn.get(i);e&&(e.a=e.ta=t)}}function db(i,t,e,n){let s=du(i),r=du(t);if(!s||!r)return;let a=e===n?0:(e+1)%3===n?1:-1,o=r.x-s.x,l=r.z-s.z,c=Math.hypot(o,l)||1;o/=c,l/=c,[[i,o,l,a],[t,-o,-l,-a]].forEach(([h,d,u,f])=>{let g=Vg(h);g!==-1&&(Uf.set(g,{dx:d,dz:u,t0:Pt,res:f}),Wg(g,Math.atan2(d,u)),setTimeout(()=>{f>0?Sl(g,0):f<0&&Sl(g,1),Xr(g,f>0?"\uC6B0\uAC00!":f<0?"\uC544\uC57C!":"\uCFF5!")},760))}),(Vn(i)||Vn(t)||tt&&Math.hypot(s.x-tt.x,s.z-tt.z)<35)&&(fu("whoosh",.42),fu("thud",.72))}var al=null;function fu(i,t=0){try{al=al||new AudioContext,al.state==="suspended"&&al.resume()}catch{return}let e=al,n=e.currentTime+t,s=()=>{let o=e.createGain();return o.connect(e.destination),o},r=o=>{let l=e.createBuffer(1,Math.ceil(e.sampleRate*o),e.sampleRate),c=l.getChannelData(0);for(let d=0;d<c.length;d++)c[d]=Math.random()*2-1;let h=e.createBufferSource();return h.buffer=l,h},a=(o,l,c,h,d="sine",u=n)=>{let f=e.createOscillator(),g=s();f.type=d,f.frequency.setValueAtTime(o,u),f.frequency.exponentialRampToValueAtTime(l,u+c),g.gain.setValueAtTime(1e-4,u),g.gain.exponentialRampToValueAtTime(h,u+.012),g.gain.exponentialRampToValueAtTime(1e-4,u+c),f.connect(g),f.start(u),f.stop(u+c+.05)};if(i==="whoosh"){let o=r(.35),l=e.createBiquadFilter(),c=s();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,n),l.frequency.exponentialRampToValueAtTime(2400,n+.28),c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.35,n+.2),c.gain.exponentialRampToValueAtTime(1e-4,n+.33),o.connect(l).connect(c),o.start(n)}if(i==="thud"){a(170,42,.38,.9);let o=r(.16),l=e.createBiquadFilter(),c=s();l.type="lowpass",l.frequency.value=900,c.gain.setValueAtTime(.6,n),c.gain.exponentialRampToValueAtTime(1e-4,n+.14),o.connect(l).connect(c),o.start(n)}i==="start"&&[0,.2,.4].forEach((o,l)=>a(l<2?130:210,55,.32,.7,"sine",n+o)),i==="win"&&[523,659,784,1047].forEach((o,l)=>a(o,o,.5,.28,"triangle",n+l*.11)),i==="lose"&&[392,330,262].forEach((o,l)=>a(o,o*.96,.55,.24,"triangle",n+l*.17))}var rr=()=>w("duel").open&&w("duel").close();w("dux").onclick=rr;w("duelb").onclick=()=>{if(!mr()||!tt)return;if(Me)return w("duel").show();let i=[...tn.values()].filter(t=>!Vn(le[t.j])&&Math.hypot(t.x-tt.x,t.z-tt.z)<20).map(t=>le[t.j]);if(!i.length)return sr("\uBC15\uCE58\uAE30 \uB300\uACB0","\uAC00\uAE4C\uC774\uC5D0 \uC0B0\uCC45 \uC911\uC778 \uC8FC\uBBFC\uC774 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC8FC\uBBFC \uC606(20\uAC78\uC74C \uC548)\uC73C\uB85C \uAC00\uBA74 \uB300\uACB0\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC5B4\uC694.",[["\uC54C\uACA0\uC5B4\uC694",rr,"ghost"]]);sr("\uB204\uAD6C\uC640 \uACA8\uB8F0\uAE4C\uC694?",`3\uD310 2\uC120\uC2B9, \uBA39\uC774\uB97C \uAC78\uACE0 \uACA8\uB904\uC694. ${ap}`,i.slice(0,6).map(t=>["@"+t,()=>sr(`@${t} \uB2D8\uACFC \uB300\uACB0`,`\uBA87 \uAC1C\uB97C \uAC78\uAE4C\uC694? \uC774\uAE30\uBA74 \uB450 \uBC30\uB97C \uBC1B\uACE0, \uC9C0\uBA74 \uAC74 \uB9CC\uD07C \uC783\uC5B4\uC694. \uC9C0\uAE08 \uAC00\uC9C4 \uBA39\uC774 ${Lt.n.toLocaleString()}\uAC1C.`,[...ub.map(e=>[`\uBA39\uC774 ${e}\uAC1C`,()=>{if(Lt.n<e)return ui(`\uAC00\uC9C4 \uBA39\uC774\uAC00 ${e}\uAC1C\uBCF4\uB2E4 \uC801\uC5B4\uC694.`);Ei().then(()=>{mr()&&we.send(JSON.stringify({dq:t,b:e}))}),rr()}]),["\uADF8\uB9CC\uB450\uAE30",rr,"ghost"]])]))};function Of(i=""){let t=Me.me==="A"?Me.B:Me.A,[e,n]=Me.me==="A"?[Me.sA,Me.sB]:[Me.sB,Me.sA];sr(`\uB098 ${e} : ${n} @${t}`,(i?i+" ":"")+(Me.picked>=0?`${Ga[Me.picked]}\uB97C \uACE8\uB790\uC5B4\uC694. \uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026`:`\uBA39\uC774 ${Me.bet}\uAC1C \xB7 15\uCD08 \uC548\uC5D0 \uACE8\uB77C\uC694 \xB7 ${ap}`),Me.picked>=0?[]:Ga.map((s,r)=>[s,()=>{!Me||Me.picked>=0||!mr()||(Me.picked=r,we.send(JSON.stringify({dp:r})),Of(i))}]))}function fb(i,t,e,n,s,r,a){if(i==="dq"){ff=t,sr("\uB300\uACB0 \uC2E0\uCCAD\uC774 \uC654\uC5B4\uC694",`@${t} \uB2D8\uC774 \uBA39\uC774 ${e}\uAC1C\uB97C \uAC78\uACE0 \uBC15\uCE58\uAE30 \uB300\uACB0\uC744 \uC2E0\uCCAD\uD588\uC5B4\uC694. 3\uD310 2\uC120\uC2B9\uC774\uC5D0\uC694. \uC774\uAE30\uBA74 ${e*2}\uAC1C\uB97C \uBC1B\uACE0, \uC9C0\uBA74 ${e}\uAC1C\uB97C \uC783\uC5B4\uC694. ${ap}`,[["\uBC1B\uAE30",()=>{if(Lt.n<e)return ui(`\uAC00\uC9C4 \uBA39\uC774\uAC00 ${e}\uAC1C\uBCF4\uB2E4 \uC801\uC5B4\uC694.`);Ei().then(()=>{mr()&&we.send(JSON.stringify({da:t}))}),rr()}],["\uAC70\uC808",()=>{mr()&&we.send(JSON.stringify({dn:t})),rr()},"ghost"]]),setTimeout(()=>{ff===t&&!Me&&w("duel").open&&w("duh").textContent==="\uB300\uACB0 \uC2E0\uCCAD\uC774 \uC654\uC5B4\uC694"&&rr()},25e3);return}let o=Vn(t)?"A":Vn(e)?"B":"";if(i==="ds"){let l=du(t),c=du(e);if(l&&c){let h=Math.atan2(c.x-l.x,c.z-l.z);[[t,h],[e,h+Math.PI]].forEach(([d,u])=>{let f=Vg(d);f!==-1&&(Wg(f,u),Xr(f,"\uB364\uBCBC\uB77C!"))})}return o?(fu("start"),Me={A:t,B:e,bet:n,me:o,sA:0,sB:0,picked:-1},ff="",Ei(),Of()):ui(`@${t} \uB2D8\uACFC @${e} \uB2D8\uC774 \uBA39\uC774 ${n}\uAC1C\uB97C \uAC78\uACE0 \uBC15\uCE58\uAE30 \uB300\uACB0\uC744 \uC2DC\uC791\uD588\uC5B4\uC694!`)}if(i==="dr"){if(db(t,e,n,s),!Me||!o)return;let[l,c]=o==="A"?[n,s]:[s,n],h=l===c?"\uBE44\uACBC\uC5B4\uC694.":(l+1)%3===c?"\uC774\uBC88 \uD310\uC740 \uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694!":"\uC774\uBC88 \uD310\uC740 \uC84C\uC5B4\uC694.",d=`\uB098 ${Ga[l]} vs \uC0C1\uB300 ${Ga[c]}: ${h}`;Me.sA=r,Me.sB=a,Me.picked=9,sr(`${Ga[l]} vs ${Ga[c]}`,"\uCFF5!",[]),setTimeout(()=>{Me&&(Me.picked=-1,r<2&&a<2?Of(d):sr("\uBC15\uCE58\uAE30 \uB300\uACB0",d,[]))},1400);return}i==="dw"&&setTimeout(()=>{if(!o){n&&ui(`@${t} \uB2D8\uC774 @${e} \uB2D8\uC744 \uBC15\uCE58\uAE30\uB85C \uC774\uACBC\uC5B4\uC694!`);return}Me=null,Ei();let l=o==="A",c=n?l?s?`@${e} \uB2D8\uC774 \uB098\uAC00\uC11C \uC774\uACBC\uC5B4\uC694. \uBA39\uC774 ${n*2}\uAC1C\uB97C \uBC1B\uC558\uC5B4\uC694.`:`\uC774\uACBC\uC5B4\uC694! \uBA39\uC774 ${n*2}\uAC1C\uB97C \uBC1B\uC558\uC5B4\uC694.`:`\uC84C\uC5B4\uC694. \uBA39\uC774 ${n}\uAC1C\uB97C \uC783\uC5C8\uC5B4\uC694. \uB2E4\uC74C\uC5D4 \uC774\uAE38 \uAC70\uC608\uC694.`:"\uC544\uD649 \uD310 \uB0B4\uB0B4 \uBE44\uACA8\uC11C \uAC74 \uBA39\uC774\uB97C \uADF8\uB300\uB85C \uB3CC\uB824\uBC1B\uC558\uC5B4\uC694.";n&&fu(l?"win":"lose"),l&&n&&(Sl("me",1),Xr("me","\uC774\uACBC\uB2E4! \uC6B0\uAC00!")),sr(l&&n?"\uC774\uACBC\uB2E4! \uC6B0\uAC00!":"\uB300\uACB0 \uB05D",c,[["\uB2EB\uAE30",rr,"ghost"]])},s?0:1500)}var pu=new Map,Sl=(i,t)=>pu.set(i,{k:t,t0:Pt});function Xg(i){let t=pu.get(i);if(!t)return[0,0];let e=(Pt-t.t0)/1.1;return e>=1?(pu.delete(i),[0,0]):t.k===0?[Math.sin(Math.PI*e)*1.6,0]:t.k===1?[Math.sin(Math.PI*e)*.4,e*6.283]:[0,Math.sin(e*Math.PI*6)*.45*(1-e)]}var B0=i=>i<0?2.6:ze?2+Bi[yn[i]].len*vu[i]*.45:2.4*(fr[i]||1),Nr=new Map,Ka=new Set,pb=i=>new Fs(new ps({map:Ce.soft,color:i,blending:wr,transparent:!0,depthWrite:!1,fog:!1}));function mb(i){let t=i==="rain"?16762938:16734746,e=lt(ce,je(t),[0,0,0],[.75,.75,.75]);e.add(lt(Dt(.4,.6,4),je(i==="rain"?5216826:3811872),[0,1.15,0]));let n=pb(t);return n.scale.setScalar(2.6),n.material.opacity=.75,e.add(n),e}function gb(i,t){let e=r=>sp(i.key+":"+t+r);if(i.kind==="rain"){let r=Math.floor(e("c")*ep()),a=e("a")*6.283,o=qa(Math.floor(e("r")*3));return[dn[r].x+Math.cos(a)*o,dn[r].z+Math.sin(a)*o]}let n=Math.atan2(-Sn,-Mn)+(e("a")-.5)*1.4,s=84+e("r")*14;return[Mn+Math.cos(n)*s,Sn+Math.sin(n)*s]}var z0=0,k0=0,Lr=0,H0=-1,Ff="",Bf=-99;function _b(i){let{key:t,ev:e}=i.userData;if(Ka.add(t),!Es()){ti("\uC6B0\uAC00. \uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC544\uC57C \uC8FC\uC6B8 \uC218 \uC788\uB2E4.");return}es(e.kind,t).then(n=>{n&&(n.got?(Ts=Pt+.5,ti(`\uC6B0\uAC00! ${e.kind==="rain"?"\uD558\uB298 \uC5F4\uB9E4":"\uBD88\uC528 \uC5F4\uB9E4"}\uB2E4. \uBA39\uC774 ${n.got}\uAC1C.`)):n.no&&ti("\uC6B0\uAC00. "+n.no))})}function xb(){let i=pn||We?[]:Au(),t=i.filter(c=>c.n).map(c=>c.key).join();if(t!==hl){Nr.forEach(c=>se.remove(c)),Nr.clear();for(let c of i)if(c.n)for(let h=0;h<c.n;h++){let d=c.key+":"+h;if(Ka.has(d))continue;let[u,f]=gb(c,h),g=mb(c.kind);g.userData={key:d,ev:c,x:u,z:f,t0:Pt+sp(d)*(c.kind==="rain"?8:3)},g.visible=!1,se.add(g),Nr.set(d,g)}if(hl!==""||t){let c=i.find(h=>h.n&&!hl.includes(h.key));c&&(ui(c.kind==="rain"?"\uBA39\uC774 \uBE44\uAC00 \uC640\uC694! 5\uBD84 \uB3D9\uC548 \uD669\uAE08 \uC5F4\uB9E4 30\uAC1C":"\uC6B0\uB974\uB989! \uD654\uC0B0\uC774 \uD130\uC84C\uC5B4\uC694. \uBD88\uC528 \uC5F4\uB9E4 12\uAC1C"),c.kind==="boom"&&(Bf=Pt))}hl=t,bu()}let e=i.find(c=>c.kind==="rain")||i.find(c=>c.kind==="boom")||i.find(c=>c.kind==="camp"),n=w("evbar");if(!e){n.hidden=!0;return}let s=Ug(Date.now()),r=Math.max(0,e.end*60-(s.getUTCHours()*3600+s.getUTCMinutes()*60+s.getUTCSeconds())),a=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,o=[...Nr.values()].filter(c=>c.userData.ev.key===e.key&&!Ka.has(c.userData.key)).length,l=[...tn.values()].filter(c=>Math.hypot(c.x,c.z)<20).length+(tt&&Math.hypot(tt.x,tt.z)<20?1:0);n.className=e.kind,n.hidden=!1,tt&&w("walkhint").classList.add("mini"),n.firstChild.textContent=e.kind==="rain"?`\uBA39\uC774 \uBE44! \uD669\uAE08 \uC5F4\uB9E4 ${o}\uAC1C \uB0A8\uC74C \xB7 ${a}`:e.kind==="boom"?`\uD654\uC0B0 \uBD84\uCD9C! \uBD88\uC528 \uC5F4\uB9E4 ${o}\uAC1C \xB7 ${a}`:`\uBAA8\uB2E5\uBD88 \uBAA8\uC784 \xB7 \uAD11\uC7A5\uC5D0 ${Math.max(0,l)}\uBA85 \xB7 ${a}`,n.lastChild.textContent=e.kind==="camp"?"\uBAA8\uB2E5\uBD88\uB85C":"\uC8FC\uC6B0\uB7EC \uAC00\uAE30",n.lastChild.onclick=Ja}function yb(i){(z0-=i)<0&&(z0=.5,xb());let t=tt&&tt.i>=0?tt:null,e=null,n=1e9;if(Nr.forEach(h=>{let{key:d,ev:u,x:f,z:g,t0:v}=h.userData;if(Ka.has(d)){se.remove(h),Nr.delete(d);return}let m=(Pt-v)/(u.kind==="rain"?2.5:3);if(h.visible=m>0,!(m<=0)){if(m<1){u.kind==="rain"?h.position.set(f,1+60*(1-m)**2,g):h.position.set(Mn+(f-Mn)*m,88*(1-m)+1+Math.sin(Math.PI*m)*45,Sn+(g-Sn)*m);return}if(h.position.set(f,1.1+Math.sin(Pt*3+f)*.2,g),h.rotation.y=Pt*2,tt){let p=Math.hypot(tt.x-f,tt.z-g);p<2.6+tt.r?_b(h):p<n&&(n=p,e=h)}}}),tt?nr(w("aev"),e?.position.x,2,e?.position.z,e?`${e.userData.ev.kind==="rain"?"\uD669\uAE08 \uC5F4\uB9E4":"\uBD88\uC528 \uC5F4\uB9E4"} ${Math.round(n)}\uAC78\uC74C`:""):nr(w("aev")),Pt-Bf<8){let h=(Pt-Bf)/8;Jh.forEach(d=>{d.material.color.setHex(3813418),d.scale.multiplyScalar(1.6-h*.6)})}else Jh[0].material.color.getHex()!==6971480&&Jh.forEach(h=>h.material.color.setHex(6971480));if(Ml.forEach((h,d)=>{let u=d==="me"?tt:tn.get(d);if(!u||Pt>h.until)return Hg(d);h.s.position.set(u.x,(d==="me"?ze?B0(tt.i):tt.i<0?4.3:1.9*(fr[tt.i]||1):B0(d)+1.15)+(u.hop||0),u.z)}),w("sayb").hidden=w("duelb").hidden=!(t&&Wr),tt||(w("saybox").hidden=!0,w("chat").hidden||rp(!1)),Ff="",!tt){w("mini").hidden||op(),w("spotact").hidden=!0,Lr=0;return}let s=(h,d)=>Math.hypot(tt.x-h,tt.z-d);t&&Cn&&Bg.forEach(([h,d,u,f],g)=>{Cn.stamps[g]||s(d,u)>f||vs.has("st"+g)||(vs.add("st"+g),es("stamp",g).then(v=>{vs.delete("st"+g),v?.got&&(Ts=Pt+.5,ti(`\uC6B0\uAC00! ${h} \uB3C4\uC7A5 \uCF85. \uBA39\uC774 ${v.got}\uAC1C.`+(v.all?" \uB3C4\uC7A5 \uB2E4\uC12F \uAC1C \uB2E4 \uCC0D\uC5C8\uB2E4!":"")))}))});let r=s(Rn.x,Rn.z)<24?"fish":s(Gn.x,Gn.z)<18?"dig":s(Mn,Sn)<100?"heat":"",a="";if(r){let h=Cn?.cnt||{},d=Cn?.lim||{};a=!t||!Es()?"\uB0B4 \uC544\uC774\uB514\uB97C \uCC3E\uC73C\uBA74 \uD560 \uC218 \uC788\uC5B4\uC694":r==="fish"?h.fish>=d.fish?"\uC624\uB298 \uB09A\uC2DC \uB05D":`\uB09A\uC2DC\uD558\uAE30 \xB7 ${d.fish-h.fish}\uBC88 \uB0A8\uC74C`:r==="dig"?h.dig>=d.dig?"\uC624\uB298 \uD30C\uAE30 \uB05D":`\uD654\uC11D \uD30C\uAE30 \xB7 ${d.dig-h.dig}\uBC88 \uB0A8\uC74C`:h.heat?"\uC624\uB298\uC740 \uC54C\uC744 \uB370\uC6E0\uC5B4\uC694":"\uC54C \uB370\uC6B0\uAE30 \xB7 30\uBD84 \uBA39\uC774 1.5\uBC30"}let o=w("spotact");o.hidden=!r,o.textContent!==a&&(o.textContent=a),o.disabled=!t||!Es()||/ 끝$|데웠어요$/.test(a),o.dataset.k=r;let l=Math.hypot(tt.x,tt.z),c=tt.dist===H0;H0=tt.dist,t&&Es()&&l<ar+1.5?(Lr=c?Lr+i:0,Lr>60&&!vs.has("sit")&&(vs.add("sit"),Lr=0,es("sit").then(h=>{vs.delete("sit"),h?.got?(Ts=Pt+.5,ti(`\uC6B0\uAC00. \uC798 \uC26C\uC5C8\uB2E4. \uBA39\uC774 ${h.got}\uAC1C.`)):h?.no&&ti("\uC6B0\uAC00. "+h.no)})),Ff=c?`\uBAA8\uB2E5\uBD88 \uCB10\uB294 \uC911 \xB7 ${Math.ceil(60-Lr)}\uCD08 \uB4A4 \uBA39\uC774 15\uAC1C`:"\uBAA8\uB2E5\uBD88 \uC606\uC5D0 \uAC00\uB9CC\uD788 \uC11C \uC788\uC73C\uBA74 1\uBD84\uB9C8\uB2E4 \uBA39\uC774 15\uAC1C",Au().some(h=>h.kind==="camp")&&Cn&&!Cn.cnt.camp&&(k0+=i)>15&&!vs.has("camp")&&(vs.add("camp"),es("camp").then(h=>{vs.delete("camp"),h?.got&&(Ts=Pt+.5,ti(`\uC6B0\uAC00! \uBAA8\uB2E5\uBD88 \uBAA8\uC784\uC774\uB2E4. ${h.count}\uBA85 \uBAA8\uC600\uB2E4. \uBA39\uC774 ${h.got}\uAC1C.`))}))):Lr=k0=0}var vs=new Set;Nf&&(window.dbgv={go:(i,t)=>{tt&&(me.position.x+=i-tt.x,me.position.z+=t-tt.z,tt.x=i,tt.z=t)},fruits:()=>[...Nr.values()].filter(i=>i.visible).map(i=>[i.userData.key,i.position.x,i.position.z]),spots:{POND:Rn,BONES:Gn,vx:Mn,vz:Sn},me:()=>Cn,bub:()=>[...Ml.keys()],emo:()=>[...pu.keys()],ghosts:()=>[...tn.values()].map(i=>[le[i.j],i.x,i.z])});function op(){w("mini").hidden=!0,clearTimeout(dl)}var dl=0;w("mx").onclick=op;w("spotact").onclick=()=>{let i=w("spotact").dataset.k,t=w("mt"),e=w("mp"),n=w("mb"),s=w("mbob"),r=l=>l.lim[i]-l.cnt[i],a=(l,c,h)=>{t.textContent=l,e.textContent=c,n.disabled=!1,n.className=h?"":"ghost",n.textContent=h?"\uD55C \uBC88 \uB354":"\uB2EB\uAE30",n.onclick=h?o:op};if(i==="heat")return es("heat").then(l=>{if(l){if(l.no)return ti("\uC6B0\uAC00. "+l.no);Ts=Pt+.5,ti("\uC6B0\uAC00! \uC54C\uC774 \uB728\uB048\uB728\uB048\uD558\uB2E4. 30\uBD84 \uB3D9\uC548 \uBA39\uC778 \uBA39\uC774\uAC00 1.5\uBC30\uB85C \uB4E4\uC5B4\uAC04\uB2E4.")}});function o(){if(w("mini").hidden=!1,n.disabled=!1,s.className=i==="dig"?"dig":"",i==="fish"){let l="wait",c=()=>{l="wait",s.className="",t.textContent="\uB09A\uC2DC \uC911",e.textContent="\uCC0C\uAC00 \uB9C8\uAD6C \uD754\uB4E4\uB9AC\uBA74 \uBC14\uB85C \uB2F9\uACA8\uC694.",n.className="ghost",n.textContent="\uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",clearTimeout(dl),dl=setTimeout(()=>{l="bite",s.className="bite",t.textContent="\uC9C0\uAE08!",n.className="",n.textContent="\uB2F9\uAE30\uAE30!",dl=setTimeout(()=>{l==="bite"&&(l="miss",s.className="",t.textContent="\uB193\uCCE4\uB2E4",e.textContent="\uBB3C\uACE0\uAE30\uAC00 \uB3C4\uB9DD\uAC14\uC5B4\uC694.",n.className="ghost",n.textContent="\uB2E4\uC2DC \uB358\uC9C0\uAE30")},900)},1500+Math.random()*3e3)};n.onclick=()=>{if(l==="miss")return c();if(clearTimeout(dl),l==="wait"){l="miss",t.textContent="\uB108\uBB34 \uBE68\uB790\uB2E4",e.textContent="\uCC0C\uAC00 \uD754\uB4E4\uB9B4 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC694.",n.textContent="\uB2E4\uC2DC \uB358\uC9C0\uAE30";return}l="done",s.className="",n.disabled=!0,t.textContent="\uB04C\uC5B4\uC62C\uB9AC\uB294 \uC911\u2026",es("fish").then(h=>{if(!h)return a("\uC6B0\uAC00","\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uD574\uC694.");if(h.no)return a("\uC6B0\uAC00",h.no);Ts=Pt+.5,a(h.gold?"\uD669\uAE08 \uBB3C\uACE0\uAE30!":"\uC7A1\uC558\uB2E4!",`\uBA39\uC774 ${h.got}\uAC1C\uB97C \uBC1B\uC558\uC5B4\uC694.`+(h.gold?" \uB9C8\uC744 \uBAA8\uB450\uC5D0\uAC8C \uC18C\uBB38\uB0AC\uC5B4\uC694.":"")+` \uC624\uB298 ${r(h)}\uBC88 \uB354 \uB09A\uC744 \uC218 \uC788\uC5B4\uC694.`,r(h)>0)})},c()}else{let l=0;t.textContent="\uD654\uC11D \uD30C\uAE30",e.textContent="\uD759\uC744 \uB2E4\uC12F \uBC88 \uD30C\uC694. \uC5B4\uB5A4 \uC870\uAC01\uC774 \uB098\uC62C\uAE4C\uC694?",n.className="",n.textContent="\uD30C\uAE30 0/5",n.onclick=()=>{l>=5||(l++,n.textContent=`\uD30C\uAE30 ${l}/5`,s.className="dig",s.offsetWidth,s.className="dig hit",!(l<5)&&(n.disabled=!0,t.textContent="\uBB54\uAC00 \uB098\uC654\uB2E4\u2026",es("dig").then(c=>{if(!c)return a("\uC6B0\uAC00","\uC11C\uBC84\uC5D0 \uB2FF\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uD574\uC694.");if(c.no)return a("\uC6B0\uAC00",c.no);Ts=Pt+.5,a(`${Fg[c.f]} \uD654\uC11D!`,(c.newf?"\uC0C8 \uC870\uAC01\uC774\uC5D0\uC694.":"\uC774\uBBF8 \uC788\uB294 \uC870\uAC01\uC774\uC5D0\uC694.")+` \uBA39\uC774 ${c.got}\uAC1C. \uD654\uC11D ${c.fos.length}/10.`+(c.all?" \uD654\uC11D\uC744 \uB2E4 \uBAA8\uC558\uC5B4\uC694! \uBA39\uC774 500\uAC1C\uB97C \uB354 \uBC1B\uC558\uC5B4\uC694.":"")+` \uC624\uB298 ${r(c)}\uBC88 \uB354 \uD314 \uC218 \uC788\uC5B4\uC694.`,r(c)>0)})))}}}o()};var Ks=Jf.at(-2);function Cu(i){Kf=i,w("ride").textContent=i?"\uB530\uB77C\uAC00\uAE30 \uB05D":"\uC775\uB8E1 \uB530\uB77C\uAC00\uAE30",i&&(di=null,qt.autoRotate=!1,w("card").hidden=!0,eo())}w("ride").onclick=()=>Cu(!Kf);qt.addEventListener("start",()=>Cu(!1));var ie=null,jh=!1;function vb(i){if(jh=i,w("snd").textContent=i?"\uB9C8\uC744 \uC18C\uB9AC \uB044\uAE30":"\uB9C8\uC744 \uC18C\uB9AC \uCF1C\uAE30",!ie){if(!i)return;ie=new AudioContext;let t=ie.createDynamicsCompressor();t.connect(ie.destination);let e=ie.createBuffer(1,ie.sampleRate*2,ie.sampleRate),n=e.getChannelData(0);for(let I=0;I<n.length;I++)n[I]=Math.random()*2-1;let s=(I,O,H,P=t)=>{let G=ie.createBufferSource(),X=ie.createBiquadFilter(),V=ie.createGain();return G.buffer=e,G.loop=!0,X.type=I,X.frequency.value=O,V.gain.value=H,G.connect(X).connect(V).connect(P),G.start(),V},r=s("lowpass",420,.04),a=ie.createOscillator(),o=ie.createGain();a.frequency.value=.09,o.gain.value=.025,a.connect(o).connect(r.gain),a.start();let l=ie.createGain();l.connect(t),l.gain.value=.5;let c=s("lowpass",260,.09,l),h=ie.createOscillator(),d=ie.createGain();h.frequency.value=.7,d.gain.value=.035,h.connect(d).connect(c.gain),h.start(),s("bandpass",700,.012,l);let u=(I,O)=>{let H=ie.createBufferSource(),P=ie.createGain(),G=ie.createBiquadFilter();H.buffer=e,G.type=O?"bandpass":"highpass",G.frequency.value=O?900+Math.random()*900:1800+Math.random()*2600,G.Q.value=O?3:.7,P.gain.setValueAtTime(O?.22:.05+Math.random()*.08,I),P.gain.exponentialRampToValueAtTime(1e-4,I+(O?.09:.02+Math.random()*.05)),H.connect(G).connect(P).connect(l),H.start(I,Math.random()*1.5,.15)};setInterval(()=>{if(!jh)return;let I=ie.currentTime,O=tt||qt.target,H=Math.hypot(O.x,O.z);l.gain.setTargetAtTime(Math.max(.12,Math.min(1,1.15-H/45)),I,.4);for(let P=1+Math.random()*4|0;P--;)u(I+Math.random()*.4,Math.random()<.08)},420);let f=ie.createGain();f.gain.value=.16,f.connect(t);let g=ie.createDelay();g.delayTime.value=.47;let v=ie.createGain();v.gain.value=.28;let m=ie.createGain();m.gain.value=.22,f.connect(g).connect(v).connect(g),g.connect(m).connect(t);let p=I=>261.63*2**(I/12),x=[0,2,4,7,9,12,14,16],E=[[-12,-5],[-15,-8],[-19,-12],[-17,-10]],M=(I,O,H)=>{for(let[P,G,X]of[[1,H,.9],[3.93,H*.18,.12]]){let V=ie.createOscillator(),nt=ie.createGain();V.type="sine",V.frequency.value=p(O)*P,nt.gain.setValueAtTime(0,I),nt.gain.linearRampToValueAtTime(G,I+.006),nt.gain.exponentialRampToValueAtTime(1e-4,I+X),V.connect(nt).connect(f),V.start(I),V.stop(I+X+.05)}},R=(I,O)=>{let H=ie.createOscillator(),P=ie.createGain();H.frequency.setValueAtTime(140,I),H.frequency.exponentialRampToValueAtTime(55,I+.18),P.gain.setValueAtTime(O,I),P.gain.exponentialRampToValueAtTime(1e-4,I+.32),H.connect(P).connect(f),H.start(I),H.stop(I+.35)},T=I=>{let O=ie.createBufferSource(),H=ie.createBiquadFilter(),P=ie.createGain();O.buffer=e,H.type="highpass",H.frequency.value=6e3,P.gain.setValueAtTime(.05,I),P.gain.exponentialRampToValueAtTime(1e-4,I+.05),O.connect(H).connect(P).connect(f),O.start(I,Math.random(),.06)},_=60/96/4,b=0,N=ie.currentTime+.1,C=4;setInterval(()=>{if(jh)for(N<ie.currentTime&&(N=ie.currentTime+.05);N<ie.currentTime+.25;){let I=b%16,O=(b/16|0)%4,H=E[O];(I===0||I===10)&&R(N,.5),I===6&&R(N,.28),I%4===2&&T(N),(I===0||I===8)&&H.forEach(P=>M(N,P,.11)),[0,3,6,8,10,13].includes(I)&&Math.random()<.8&&(C=Math.max(0,Math.min(x.length-1,C+[-2,-1,-1,0,1,1,2][Math.random()*7|0])),M(N,x[C],.16)),N+=_,b++}},60)}i?ie.resume():ie.suspend()}w("snd").onclick=()=>vb(!jh);var Xh=["#101a3c","#1f2c5c","#33427a","#3a4a80",11123967,1.6,.85,1.08,1,[60,110,-70]],qh=[[0,...Xh],[5,...Xh],[6.5,"#5a78b0","#c9a6b4","#f3b99a","#f2a780",16756864,2.1,.9,.98,.25,[120,42,60]],[9,"#4f95c0","#a9d2e0","#e6e2c6","#e3d2ac",16773336,2.6,1,.95,0,[80,95,60]],[15,"#4f95c0","#9cc7d3","#f3cf9f","#f0b98a",16765600,2.7,.95,.95,0,[-80,110,60]],[18,"#3f5f9c","#d99a86","#f39a62","#ee8a55",16751184,2.4,.95,1,.2,[-125,42,60]],[19.5,...Xh],[24,...Xh]],js=0,ol=new Bt,qg=new L;function Mb(i){let t=qh.findIndex(o=>o[0]>i);t<1&&(t=qh.length-1);let e=qh[t-1],n=qh[t],s=(i-e[0])/(n[0]-e[0]),r=o=>"#"+fn.set(e[o]).lerp(ol.set(n[o]),s).getHexString(),a=o=>e[o]+(n[o]-e[o])*s;J0(r(1),r(2),r(3),r(4)),se.fog.color.set(r(4)),Ve.color.set(e[5]).lerp(ol.set(n[5]),s),Ve.intensity=a(6),xf.intensity=a(7),Ae.toneMappingExposure=a(8),js=a(9),ll.emissiveIntensity=js*1.6,fg.material.opacity=js,dg.color.set(16774372).lerp(ol.set(3752042),js),xf.color.set(16773336).lerp(ol.set(9675992),js),ml.set(...e[10]).lerp(qg.set(...n[10]),s),cf.position.copy(ml).normalize().multiplyScalar(1600),cf.scale.setScalar(420-250*js),cf.material.color.set(16773568).lerp(ol.set(14674175),js)}var $g=In.has("hour")?+In.get("hour"):pn?15:null,G0=i=>String(Math.floor(i)).padStart(2,"0");function Yg(){let i=new Date,t=$g??i.getHours()+i.getMinutes()/60;Mb(t),w("clock").textContent=`${t<5||t>=19.5?"\uBC24":t<7?"\uC0C8\uBCBD":t<17?"\uB0AE":"\uC800\uB141"} ${G0(t)}:${G0(t%1*60)}`}Yg();$g==null&&setInterval(Yg,3e4);var $h=new Go,mu={x:0,y:0},Yh=new Map(rg.filter(Boolean).flatMap(i=>[[i.hi.im,i.hi.id],[i.lo.im,i.lo.id]]));Ae.domElement.addEventListener("pointerdown",i=>{mu.x=i.clientX,mu.y=i.clientY});Ae.domElement.addEventListener("pointerup",i=>{if(tt||Math.hypot(i.clientX-mu.x,i.clientY-mu.y)>6)return;if($h.setFromCamera(new pt(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),me),$h.intersectObject(vn,!0).length)return jf();Yh.forEach((n,s)=>s.computeBoundingSphere());let t=A0.length?$h.intersectObjects(A0)[0]:null;if(t)return k1(t.instanceId+1);let e=$h.intersectObjects([...f1,...Yh.keys()])[0];e&&zi(Yh.has(e.object)?Yh.get(e.object)[e.instanceId]:e.instanceId)});{let i=(In.get("from")||"").replace(/^@/,"");/^[\w.]{1,30}$/.test(i)&&Wn(i)>=0&&!We&&!pn&&(!De.get("uga-from").id&&!Lt.srv&&De.set("uga-from",{id:le[Wn(i)]}),w("ifrom").hidden=!1,w("ifrom").textContent=`@${le[Wn(i)]} \uB2D8\uC774 \uBD88\uB800\uC5B4\uC694. \uC8FC\uBBFC\uC774 \uB418\uBA74 \uB458 \uB2E4 \uBA39\uC774 ${ru}\uAC1C\uB97C \uBC1B\uC544\uC694.`)}var Va=(()=>{try{return!We&&!pn&&localStorage.getItem("uga-id")}catch{return null}})();In.get("id")?lu(In.get("id")):Va&&lu(Va)||pn||(w("intro").hidden=!1,document.body.classList.add("intro"));{let i=ka[(Va||"").toLowerCase()],t="uga-aw1116"+(i?"me":""),e=["\uC9C0\uAE08 \uBB34\uC9C0\uAC1C \uACF5\uB8E1\uC73C\uB85C \uBCC0\uC2E0","\uACF5\uB8E1 \uACE0\uB974\uAE30\uAD8C","\uC54C \uC774\uB984 \uBD99\uC774\uAE30\uAD8C"],n=[`@${Va} \uB2D8\uC774 \uBA39\uC774 1\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uB0B4 \uACF5\uB8E1\uC774 \uC9C0\uAE08 \uBB34\uC9C0\uAC1C \uACF5\uB8E1\uC774 \uB410\uC5B4\uC694. \uB0B4 \uC9D1\uC5D0 \uAC00\uC11C \uC0C9\uC774 \uB3C4\uB294 \uAC78 \uBD10 \uC8FC\uC138\uC694.`,`@${Va} \uB2D8\uC774 \uBA39\uC774 2\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uB0B4 \uACF5\uB8E1\uC744 \uC9C1\uC811 \uACE0\uB97C \uC218 \uC788\uC5B4\uC694. ${Pn.join(", ")} \uC911 \uD558\uB098\uB97C \uACE8\uB77C \uC778\uC2A4\uD0C0 @ugauga_village\uC5D0 DM\uC73C\uB85C \uBCF4\uB0B4 \uC8FC\uC138\uC694.`,`@${Va} \uB2D8\uC774 \uBA39\uC774 3\uB4F1\uC774\uC5D0\uC694! \uC0C1\uC73C\uB85C \uB0B4 \uC54C\uC5D0 \uC774\uB984\uC744 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694. 6\uAE00\uC790 \uC548\uCABD \uC774\uB984\uC744 \uC778\uC2A4\uD0C0 @ugauga_village\uC5D0 DM\uC73C\uB85C \uBCF4\uB0B4 \uC8FC\uC138\uC694. \uC9C4\uC9DC \uC774\uB984, \uD559\uAD50, \uB098\uC05C \uB9D0\uC740 \uB123\uC744 \uC218 \uC5C6\uC5B4\uC694.`];!We&&!pn&&zr<="2026-11-19"&&!De.get(t).seen&&(w("awme").hidden=!i,i&&(w("awme").textContent=n[i.rank-1]),w("awlist").replaceChildren(...Object.keys(ka).sort((s,r)=>ka[s].rank-ka[r].rank).map(s=>Object.assign(document.createElement("li"),{textContent:`@${s} \xB7 ${e[ka[s].rank-1]}`}))),w("award").onclose=()=>De.set(t,{seen:1}),w("awx").onclick=()=>w("award").close(),w("award").showModal())}var Sb=0,pf=0,V0=0,Zh=0,mf=0,W0=performance.now(),Pt=0;function Zg(i){Pt+=i,ng.value=Pt;for(let e of Jf){let n=e.a0+Pt*e.w,s=Math.sign(e.w);e.o.position.set(Math.cos(n)*e.R,e.y,Math.sin(n)*e.R),e.o.rotation.y=Math.atan2(-Math.cos(n)*s,-Math.sin(n)*s),e.o.userData.legs?.forEach((r,a)=>{r.rotation.z=Math.sin(Pt*e.gait+(a===1||a===2?Math.PI:0))*.45}),e.o.userData.wings?.forEach((r,a)=>{r.rotation.x=Math.sin(Pt*5)*.5*(a?1:-1)})}if(tt&&(ib(i,Pt),J1()),sb(i),er.rotation.y=Pt*2,er.position.y=1.1+Math.sin(Pt*3)*.15,tt&&er.visible&&Math.hypot(tt.x-er.position.x,tt.z-er.position.z)<2.6&&N1(),p1.forEach(e=>tg.forEach(n=>{n.setColorAt(e,fn.setHSL((Pt*.08+e*.37)%1,.55,.82)),n.instanceColor.needsUpdate=!0})),tr){let e=Pt-tr.t0,n=e<1.4?Math.sin(e*18)*.28*(1-e/1.4):0;bs.forEach(s=>{s.setMatrixAt(tr.i,Vr.copy(s.userData.mats[tr.i]).multiply(eb.makeRotationZ(n)).multiply(s.userData.L)),s.instanceMatrix.needsUpdate=!0}),e>=1.4&&(tr=null)}(ze||tt||tn.size||Sb++%20===0)&&T1(Pt),Jh.forEach((e,n)=>{let s=(Pt*.06+n/8)%1;e.position.set(Mn+s*40,90+s*90,Sn),e.scale.setScalar(26+s*70),e.material.opacity=.75*(1-s)}),C1.forEach((e,n)=>{e.scale.set(1+Math.sin(Pt*9+n)*.08,.85+Math.sin(Pt*13+n*2)*.12+Math.sin(Pt*7.3+n)*.08,1),e.rotation.y=Pt*(n+1)}),Yf.intensity=(110+Math.sin(Pt*11)*25)*(1+js*1.5);let t=Zf.attributes.position;for(let e=0;e<pg;e++){let n=(Pt*(.25+Be(e)*.3)+Be(e,1))%1;t.setXYZ(e,Math.sin(e*2.4+Pt)*(.3+n*1.2),1+n*6,Math.cos(e*1.7+Pt*.8)*(.3+n*1.2))}if(t.needsUpdate=!0,og.scale.setScalar(1+Math.sin(Pt*3)*.08),tt&&tt.i<0||(vn.position.y=Math.abs(Math.sin(Pt*2.5))*.15),vn.userData.club.rotation.z=2.4+Math.sin(Pt*2.5)*.3,iu.position.set(vn.position.x,5.9,vn.position.z),yb(i),Kf){let e=Ks.a0+Pt*Ks.w-Math.sign(Ks.w)*20/Ks.R,n=1-Math.exp(-i*3);qt.target.lerp(Ks.o.position,n),me.position.lerp(qg.set(Math.cos(e)*(Ks.R+5),Ks.y+7,Math.sin(e)*(Ks.R+5)),n)}}pn&&(window.dbg={renderer:Ae,scene:se,sun:Ve,ground:h1,camera:me,jump:()=>{di&&(me.position.copy(di.p),qt.target.copy(di.t),di=null)}},window.bench=(i=30)=>{let t=Ae.getContext(),e=new Uint8Array(4),n=performance.now();for(let s=0;s<i;s++)Zg(1/60),Ve.shadow.needsUpdate=s%2===0,Ae.render(se,me),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,e);return+((performance.now()-n)/i).toFixed(1)});Ae.setAnimationLoop(i=>{let t=Math.min((i-W0)/1e3,.1);if(W0=i,Ve.shadow.needsUpdate=pf%(pi?4:2)===0,Zg(t),di){let e=1-Math.exp(-t*4);me.position.lerp(di.p,e),qt.target.lerp(di.t,e),me.position.distanceTo(di.p)<.1&&(di=null)}if(!tt){let e=qt.target,n=Math.hypot(e.x,e.z),s=oe+120;if(n>s){let r=e.x*(s/n-1),a=e.z*(s/n-1);e.x+=r,e.z+=a,me.position.x+=r,me.position.z+=a}e.y=Math.min(Math.max(e.y,0),12)}qt.update(),fg.position.copy(me.position),Ve.target.position.set(Math.round(qt.target.x/4)*4,0,Math.round(qt.target.z/4)*4),Ve.position.copy(Ve.target.position).add(ml),pf++%10===0&&L1(),Ae.render(se,me),pf===2&&(clearInterval(window.loadTick),w("load").classList.add("done"),setTimeout(()=>w("load").remove(),600)),mf++,Zh+=t,Zh>1&&(V0=Math.round(mf/Zh),mf=Zh=0,pn&&(document.title=`${V0}fps \xB7 ${Ae.info.render.calls} calls \xB7 ${Math.round(Ae.info.render.triangles/1e3)}k tris`))});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
