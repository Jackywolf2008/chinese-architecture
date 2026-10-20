// 应县木塔的几何。从原来的单文件页面原样搬出，只换成阅读器传入的 THREE。
import { LEVELNAME } from './content.js';

export function assemble(ctx) {
  const T = ctx.THREE;
  const { scene, mobile } = ctx;
const V3=(x=0,y=0,z=0)=>new T.Vector3(x,y,z);
const PI=Math.PI, P8=PI/8, TAN8=Math.tan(P8), COS8=Math.cos(P8);
const C=h=>new T.Color(h); // 十六进制按 sRGB 写，three.js 自动换成线性值
let _seed=7;const rnd=()=>{_seed|=0;_seed=_seed+0x6D2B79F5|0;let t=Math.imul(_seed^_seed>>>15,1|_seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};
const jit=(h,j=.07)=>{const c=C(h),f=1+(rnd()*2-1)*j;return c.multiplyScalar(f);};
const ang=k=>PI/2+k*PI/4;
function oct(k,u,a,y){const t=ang(k),c=Math.cos(t),s=Math.sin(t),w=u*a*TAN8;return V3(c*a-s*w,y,s*a+c*w);}
function ringPts(a,bays,y){const r=[];for(let k=0;k<8;k++)for(let j=0;j<bays;j++){const u=-1+2*j/bays;r.push({p:oct(k,u,a,y),al:j===0?ang(k)-P8:ang(k),corner:j===0,k,j});}return r;}
function bayMids(a,bays,y){const r=[];for(let k=0;k<8;k++)for(let j=0;j<bays;j++){const u=-1+(2*j+1)/bays;r.push({p:oct(k,u,a,y),al:ang(k),k,j});}return r;}

// ================= 纹理 =================
function canvasTex(w,h,draw,rep=true){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');draw(g,w,h);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;if(rep){t.wrapS=t.wrapT=T.RepeatWrapping;}t.anisotropy=8;return t;}
const TEX={
 tile:canvasTex(128,128,(g,w,h)=>{g.fillStyle='#4f575d';g.fillRect(0,0,w,h);
   for(let x=0;x<w;x+=32){const gr=g.createLinearGradient(x,0,x+32,0);gr.addColorStop(0,'#2f363b');gr.addColorStop(.25,'#6c767c');gr.addColorStop(.5,'#7d878c');gr.addColorStop(.75,'#5a646a');gr.addColorStop(1,'#2c3337');g.fillStyle=gr;g.fillRect(x+16,0,16,h);
     g.fillStyle='#3c4448';g.fillRect(x,0,16,h);for(let y=0;y<h;y+=16){g.fillStyle='rgba(0,0,0,.35)';g.fillRect(x,y,16,2);g.fillStyle='rgba(0,0,0,.25)';g.fillRect(x+16,y+8,16,2);}}}),
 raf:canvasTex(64,64,(g,w,h)=>{g.fillStyle='#2a1a10';g.fillRect(0,0,w,h);const gr=g.createLinearGradient(0,0,w,0);gr.addColorStop(0,'#5a3a22');gr.addColorStop(.3,'#9a6a40');gr.addColorStop(.6,'#7a5030');gr.addColorStop(1,'#4a2e1a');g.fillStyle=gr;g.fillRect(6,0,w*.62,h);}),
 lat:canvasTex(128,128,(g,w,h)=>{g.fillStyle='#5c3a25';g.fillRect(0,0,w,h);g.fillStyle='#17110c';const ph=h*.66;for(let y=10;y<ph-4;y+=12)for(let x=10;x<w-10;x+=12)g.fillRect(x,y,8,8);g.fillStyle='#4a2e1c';g.fillRect(10,ph+4,w-20,h-ph-14);g.strokeStyle='#7a5234';g.lineWidth=2;g.strokeRect(10,ph+4,w-20,h-ph-14);},false),
 wall:canvasTex(64,64,(g,w,h)=>{g.fillStyle='#e8dcc0';g.fillRect(0,0,w,h);for(let i=0;i<260;i++){g.fillStyle=`rgba(90,70,40,${Math.random()*.06})`;g.fillRect(Math.random()*w,Math.random()*h,2+Math.random()*4,2+Math.random()*4);}}),
 stone:canvasTex(128,128,(g,w,h)=>{g.fillStyle='#8f887b';g.fillRect(0,0,w,h);g.strokeStyle='rgba(40,34,26,.55)';g.lineWidth=2;for(let y=0;y<=h;y+=32){g.beginPath();g.moveTo(0,y);g.lineTo(w,y);g.stroke();for(let x=(y/32)%2?0:32;x<w;x+=64){g.beginPath();g.moveTo(x,y);g.lineTo(x,y+32);g.stroke();}}for(let i=0;i<500;i++){g.fillStyle=`rgba(255,255,255,${Math.random()*.05})`;g.fillRect(Math.random()*w,Math.random()*h,2,2);}}),
 plaque:canvasTex(128,48,(g,w,h)=>{g.fillStyle='#caa24f';g.fillRect(0,0,w,h);g.fillStyle='#1d3644';g.fillRect(6,6,w-12,h-12);g.fillStyle='rgba(214,178,94,.85)';for(let i=0;i<3;i++){g.fillRect(26+i*28,15,14,3);g.fillRect(31+i*28,15,3,20);g.fillRect(24+i*28,26,18,3);}},false),
};

// ================= 材质（按类别） =================
const CUT=new T.Plane(V3(0,0,-1),1e4), CUTY=new T.Plane(V3(0,-1,0),1e4);
const MATS={};
function mat(cat,o={}){const m=new T.MeshStandardMaterial(Object.assign({color:0xffffff,roughness:.82,metalness:0,side:T.DoubleSide,clippingPlanes:[CUT,CUTY],clipShadows:true},o));m.userData.cat=cat;(MATS[cat]=MATS[cat]||[]).push(m);return m;}
const BASEMAT={};
['stone','layout','col','beam','brk','ang','brace','wall','deck','rail','stair','ridge','fascia','bell','plaque','iron','buddha','dim'].forEach(c=>BASEMAT[c]=mat(c));
BASEMAT.brk.flatShading=true;BASEMAT.ang.flatShading=true;
BASEMAT.layout.emissive=C(0xd25a3b);BASEMAT.layout.emissiveIntensity=.9;
BASEMAT.dim.emissive=C(0xe3bb62);BASEMAT.dim.emissiveIntensity=.9;
BASEMAT.iron.metalness=.55;BASEMAT.iron.roughness=.42;BASEMAT.bell.metalness=.5;
BASEMAT.buddha.metalness=.3;BASEMAT.buddha.roughness=.5;
BASEMAT.wall.map=TEX.wall;
BASEMAT.stone.map=TEX.stone;
BASEMAT.lattice=mat('lattice',{map:TEX.lat});
BASEMAT.plaque.map=TEX.plaque;
BASEMAT.roof=mat('roof',{map:TEX.tile,roughness:.9});
BASEMAT.soffit=mat('soffit',{map:TEX.raf,roughness:.9});

const COL={col:0x5e3c27,beam:0x71492f,brk:0x8d6342,dou:0x9f7652,ang:0x7c5234,brace:0x6c4329,wall:0xd2c5aa,wallD:0x8f7b61,wall1:0xc2ad8e,deck:0x4f3524,rail:0x6e3b26,stair:0x5e3e28,stone:0xb0a794,stone2:0x958c7c,ridge:0x444a4e,fascia:0x3f2a1c,iron:0x3f3c39,gold:0xcaa152,lat:0xffffff,plaque:0xffffff,lay:0xd25a3b};

// ================= 实例化构件收集器 =================
const GEO={box:new T.BoxGeometry(1,1,1),cyl:new T.CylinderGeometry(.5,.5,1,14),cyl8:new T.CylinderGeometry(.5,.5,1,8),cone:new T.CylinderGeometry(.18,.5,1,8)};
GEO.dou=(()=>{const g=new T.LatheGeometry([V3(0,-.5),V3(.51,-.5),V3(.6,-.22),V3(.707,-.08),V3(.707,.5),V3(0,.5)].map(v=>new T.Vector2(v.x,v.y)),4,PI/4);return g;})();
const STEPS=[];let cur=null;
function step(name,level,tag){cur={name,level,tag,top:0,items:new Map(),meshes:[],i:STEPS.length};STEPS.push(cur);return cur;}
const _M=new T.Matrix4(),_Q=new T.Quaternion(),_Qp=new T.Quaternion(),_S=V3(),_Y=V3(0,1,0),_Z=V3(0,0,1),_x=V3(),_y=V3(),_z=V3(),_mb=new T.Matrix4();
function put(cat,kind,pos,q,s,color){if(pos.y>cur.top)cur.top=pos.y;const key=cat+'|'+kind;let it=cur.items.get(key);if(!it){it={cat,kind,m:[],c:[]};cur.items.set(key,it);}_M.compose(pos,q,s);for(let i=0;i<16;i++)it.m.push(_M.elements[i]);it.c.push(color);}
function lbox(cat,kind,o,al,x,y,z,sx,sy,sz,color,pitch=0){const c=Math.cos(al),s=Math.sin(al);_Q.setFromAxisAngle(_Y,-al);if(pitch){_Qp.setFromAxisAngle(_Z,pitch);_Q.multiply(_Qp);}put(cat,kind,V3(o.x+c*x-s*z,o.y+y,o.z+s*x+c*z),_Q,_S.set(sx,sy,sz),color);}
function beam(cat,p1,p2,w,h,color,kind='box'){_x.subVectors(p2,p1);const L=_x.length();_x.divideScalar(L);const up=Math.abs(_x.y)>.97?V3(1,0,0):_Y;_z.crossVectors(_x,up).normalize();_y.crossVectors(_z,_x);_mb.makeBasis(_x,_y,_z);_Q.setFromRotationMatrix(_mb);put(cat,kind,V3().addVectors(p1,p2).multiplyScalar(.5),_Q,_S.set(L,h,w),color);}
function rod(cat,p1,p2,r,color,kind='cyl'){_x.subVectors(p2,p1);const L=_x.length();_x.divideScalar(L);_Q.setFromUnitVectors(_Y,_x);put(cat,kind,V3().addVectors(p1,p2).multiplyScalar(.5),_Q,_S.set(2*r,L,2*r),color);}
function mesh(cat,geo,m){geo.computeBoundingBox();cur.top=Math.max(cur.top,geo.boundingBox.max.y);cur.meshes.push({cat,geo,m});}

// ================= 斗拱构件生成（局部坐标：x 向外，y 向上，z 横向） =================
// opt.heads[j]：第 j 跳跳头的做法，'none' 偷心（不施横栱）、'double' 重栱（瓜子栱上再加慢栱），缺省为单栱计心
function bracketPieces(n,nAng,s,opt={}){
 const P=[],H=.26,W=.17,DH=.18,TI=.44,LD=.36,nH=n-nAng;
 const dou=(name,x,y,z,sz,h,t)=>P.push({name,kind:'dou',x,y:y+h/2,z,sx:sz,sy:h,sz:sz,t});
 const arm=(name,x0,x1,y,t)=>P.push({name,kind:'box',x:(x0+x1)/2,y:y+H/2,z:0,sx:x1-x0,sy:H,sz:W,t});
 const lat=(name,x,y,L,t)=>P.push({name,kind:'box',x,y:y+H/2,z:0,sx:W,sy:H,sz:L,t});
 dou('栌斗',0,0,0,.62,LD,0);
 for(let k=1;k<=n;k++){const yk=LD+(k-1)*TI;
  if(k<=nH){arm('华拱',-(opt.inner?k*s:.3+.25*k),k*s+.13,yk,k);dou('交互斗',k*s,yk+H,0,.3,DH,k);}
  const L=k%2?1.24:1.86;lat(k%2?'泥道拱':'慢拱',0,yk,L,k);dou('散斗',0,yk+H,L/2-.14,.28,DH,k);dou('散斗',0,yk+H,-(L/2-.14),.28,DH,k);
  const hd=k>=2&&(opt.heads&&opt.heads[k-1]||'single');
  if(hd&&hd!=='none'){const x=(k-1)*s;lat(k===n&&nAng===0?'令拱':'瓜子拱',x,yk,1.14,k);dou('散斗',x,yk+H,.43,.28,DH,k);dou('散斗',x,yk+H,-.43,.28,DH,k);
   if(hd==='double'){lat('慢拱',x,yk+TI,1.86,k+1);dou('散斗',x,yk+TI+H,.79,.28,DH,k+1);dou('散斗',x,yk+TI+H,-.79,.28,DH,k+1);}}
 }
 for(let j=1;j<=nAng;j++){const k=nH+j,yk=LD+(k-1)*TI,m=-.42,xc=k*s,yc=yk+H/2,x1=xc+.42,x0=-(1.0+.35*j);const y1=yc+m*(x1-xc),y0=yc+m*(x0-xc);
  const len=Math.hypot(x1-x0,y1-y0);P.push({name:'下昂',kind:'box',ang:1,x:(x0+x1)/2,y:(y0+y1)/2,z:0,sx:len,sy:H,sz:W,pitch:Math.atan2(y1-y0,x1-x0),t:k});
  dou('交互斗',xc,yc+H*.62,0,.3,DH,k);}
 const yt=LD+n*TI;
 lat('令拱',n*s,yt,1.44,n+1);dou('散斗',n*s,yt+H,.58,.28,DH,n+1);dou('散斗',n*s,yt+H,-.58,.28,DH,n+1);dou('散斗',n*s,yt+H,0,.28,DH,n+1);
 arm('耍头',(n-1)*s,n*s+.55,yt,n+1);
 return {P,h:yt+H+DH,proj:n*s};
}
function placeBracket(o,al,B,sc,cat='brk'){for(const q of B.P){const color=q.kind==='dou'?jit(COL.dou,.045):q.ang?jit(COL.ang,.04):jit(COL.brk,.05);
 lbox(q.ang?'ang':cat,q.kind,o,al,q.x*sc,q.y*sc,q.z*sc,q.sx*sc,q.sy*sc,q.sz*sc,color,q.pitch||0);}}

// ================= 几何：八角环板、屋面 =================
function octSlab(a0,a1,y0,y1){const pos=[],idx=[];const add=(p)=>{pos.push(p.x,p.y,p.z);return pos.length/3-1;};
 for(let k=0;k<8;k++){const q=[[a1,y1,-1],[a1,y1,1],[a0,y1,1],[a0,y1,-1]];
  const top=[oct(k,-1,a1,y1),oct(k,1,a1,y1),oct(k,1,a0,y1),oct(k,-1,a0,y1)],bot=top.map(p=>V3(p.x,y0,p.z));
  const quad=(a,b,c,d)=>{const i=[a,b,c,d].map(add);idx.push(i[0],i[2],i[1],i[0],i[3],i[2]);};
  quad(top[0],top[1],top[2],top[3]);quad(bot[3],bot[2],bot[1],bot[0]);quad(bot[0],bot[1],top[1],top[0]);if(a0>0)quad(top[3],top[2],bot[2],bot[3]);}
 return geomNI(pos,idx);}
function geomNI(pos,idx,uv){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));if(uv)g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g=g.toNonIndexed();g.computeVertexNormals();
 if(!uv){const p=g.attributes.position,u=[];for(let i=0;i<p.count;i++)u.push(p.getX(i)*.25+p.getZ(i)*.25,p.getY(i)*.25);g.setAttribute('uv',new T.Float32BufferAttribute(u,2));}return g;}
// 屋面：Ae 檐口半径(边心距) Ain 内缘；ye/yin 高度；expo 凹曲；lift 翘角
function roofGeo(Ae,Ain,ye,yin,o={}){const expo=o.expo||1.5,lift=o.lift||.9,flare=o.flare||.6,NT=o.NT||10,NU=o.NU||14,th=o.th||.4;
 const P=(k,u,t)=>{const a=Ae+(Ain-Ae)*t,c=Math.pow(Math.abs(u),2.6)*Math.pow(1-t,1.6),aa=a+flare*c;return oct(k,u,aa,ye+(yin-ye)*Math.pow(t,expo)+lift*c);};
 const top={p:[],uv:[],i:[]},bot={p:[],uv:[],i:[]},edge={p:[],i:[]};
 for(let k=0;k<8;k++){const b0=top.p.length/3;
  for(let it=0;it<=NT;it++){const t=it/NT;for(let iu=0;iu<=NU;iu++){const u=-1+2*iu/NU,p=P(k,u,t),a=Ae+(Ain-Ae)*t;
    top.p.push(p.x,p.y,p.z);top.uv.push(u*a*TAN8/1.05,(Ae-a)*1.15/1.05);bot.p.push(p.x,p.y-th,p.z);bot.uv.push(u*a*TAN8/.62,t*3);}}
  for(let it=0;it<NT;it++)for(let iu=0;iu<NU;iu++){const a=b0+it*(NU+1)+iu,b=a+1,c=a+NU+1,d=c+1;top.i.push(a,c,b,b,c,d);bot.i.push(a,b,c,b,d,c);}
  const e0=edge.p.length/3;for(let iu=0;iu<=NU;iu++){const u=-1+2*iu/NU,p=P(k,u,0);edge.p.push(p.x,p.y,p.z,p.x,p.y-th-.05,p.z);}
  for(let iu=0;iu<NU;iu++){const a=e0+iu*2;edge.i.push(a,a+1,a+2,a+2,a+1,a+3);}}
 const hips=[];for(let k=0;k<8;k++){const pts=[];for(let it=0;it<=NT;it++)pts.push(P(k,1,it/NT).add(V3(0,.12,0)));hips.push(pts);}
 return {top:geomNI(top.p,top.i,top.uv),bot:geomNI(bot.p,bot.i,bot.uv),edge:geomNI(edge.p,edge.i),hips,P};}

// ================= 通用合并 / 自定义材质 =================
const CMAT={};
function cmat(cat,color,o={}){const key=cat+color+JSON.stringify(o);if(!CMAT[key]){const b=BASEMAT[cat];CMAT[key]=mat(cat,Object.assign({color:C(color),map:b&&b.map||null,roughness:b?b.roughness:.8,metalness:b?b.metalness:0,flatShading:b?b.flatShading:false},o));}return CMAT[key];}
function merge(list){const pos=[],nor=[],uv=[];const nm=new T.Matrix3();for(const {g,m} of list){let q=g.index?g.toNonIndexed():g.clone();if(m)q.applyMatrix4(m);if(!q.attributes.normal)q.computeVertexNormals();const P=q.attributes.position,N=q.attributes.normal,U=q.attributes.uv;for(let i=0;i<P.count;i++){pos.push(P.getX(i),P.getY(i),P.getZ(i));nor.push(N.getX(i),N.getY(i),N.getZ(i));if(U)uv.push(U.getX(i),U.getY(i));else uv.push(0,0);}}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('normal',new T.Float32BufferAttribute(nor,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));return g;}
const mtx=(x=0,y=0,z=0,ry=0,s=1,sy)=>new T.Matrix4().compose(V3(x,y,z),new T.Quaternion().setFromAxisAngle(_Y,ry),V3(s,sy===undefined?s:sy,s));

// ================= 塑像（示意） =================
const SPH=new T.SphereGeometry(1,20,14),CYL=new T.CylinderGeometry(1,1,1,20);
function prim(g,x,y,z,sx,sy,sz){return {g,m:new T.Matrix4().compose(V3(x,y,z),new T.Quaternion(),V3(sx,sy,sz))};}
function taper(rt,rb,h,y){return {g:new T.CylinderGeometry(rt,rb,h,20),m:new T.Matrix4().makeTranslation(0,y,0)};}
function figure(x,y,z,h,ry,standing,halo=true,throne=0){const P=[];
 if(standing){P.push(taper(.1*h,.16*h,.52*h,.26*h),taper(.1*h,.12*h,.24*h,.62*h),prim(SPH,0,.72*h,0,.17*h,.065*h,.1*h),taper(.035*h,.04*h,.06*h,.77*h),prim(SPH,0,.83*h,0,.07*h,.085*h,.075*h),prim(SPH,0,.915*h,0,.035*h,.035*h,.035*h),
  prim(SPH,.16*h,.55*h,.02*h,.035*h,.17*h,.04*h),prim(SPH,-.16*h,.55*h,.02*h,.035*h,.17*h,.04*h));}
 else{P.push(prim(SPH,0,.11*h,.05*h,.44*h,.12*h,.27*h),taper(.16*h,.2*h,.34*h,.37*h),prim(SPH,0,.52*h,0,.24*h,.085*h,.15*h),prim(SPH,0,.22*h,.2*h,.12*h,.05*h,.08*h),
  prim(SPH,.2*h,.36*h,.05*h,.06*h,.16*h,.07*h),prim(SPH,-.2*h,.36*h,.05*h,.06*h,.16*h,.07*h),taper(.06*h,.07*h,.08*h,.6*h),prim(SPH,0,.69*h,0,.105*h,.125*h,.11*h),prim(SPH,0,.8*h,0,.05*h,.05*h,.05*h));}
 const M0=new T.Matrix4().compose(V3(x,y+throne,z),new T.Quaternion().setFromAxisAngle(_Y,ry),V3(1,1,1));const L=P.map(q=>({g:q.g,m:M0.clone().multiply(q.m)}));
 if(throne){const tw=Math.min(h,7.2);L.push({g:new T.CylinderGeometry(.5,.42,1,8),m:mtx(x,y+throne*.275,z,ry,tw,throne*.55)});L.push({g:new T.CylinderGeometry(.56,.44,1,16),m:mtx(x,y+throne*.72,z,ry,tw,throne*.56)});}
 if(halo){const ha=new T.RingGeometry(h*.11,h*.2,32);const m=new T.Matrix4().compose(V3(x-Math.sin(ry)*h*.16,y+throne+h*(standing?.84:.7),z-Math.cos(ry)*h*.16),new T.Quaternion().setFromAxisAngle(_Y,ry),V3(1,1,1));L.push({g:ha,m});}
 return L;}

// ================= 楼层参数 =================
const BASE_TOP=3.6;
// 楼层标高按《中国建筑史》图65-1断面图的比例推算（模型塔高 67.31 m；梁思成记约六十七米）；各层铺作按同书“佛宫寺释迦木塔”一节
const FY=[BASE_TOP,18.2,27.4,36.1,44.5],APEX=54.8;
// n/nAng：外檐出几跳、其中几跳为下昂。一、二层双杪双下昂，三层三杪，四层双杪，五层半栱承单杪；pz：其上平坐出几杪
const FL=[{A:11.4,Ai:6.0,hc:7.9,n:4,nAng:2,s:.5,sc:1,ep:3.7,r:.33,pz:3},{A:11.1,Ai:6.0,hc:3.2,n:4,nAng:2,s:.5,sc:.86,ep:3.6,r:.29,pz:3},{A:10.75,Ai:6.0,hc:3.1,n:3,nAng:0,s:.5,sc:.86,ep:3.4,r:.28,pz:3},{A:10.4,Ai:6.0,hc:3.0,n:2,nAng:0,s:.5,sc:.86,ep:2.9,r:.27,pz:2},{A:10.0,Ai:5.6,hc:3.0,n:1,nAng:0,s:.5,sc:.86,ep:2.7,r:.27}];
const HD=[],PZ={s:.62,sc:.82},FJ={A:15.0,hc:4.1,n:2,s:.45,sc:.72,ep:2.4};
// 跳头：副阶“出双杪，偷心”、平坐“三杪重栱计心”是梁思成写明的。一、二层外檐他只说“如独乐寺观音阁上层檐所见”，观音阁上层只写“第一及第三跳偷心”；第二跳作重栱是把计心和总论里的“重栱偷心”合起来推的
const HEADS_12={1:'none',2:'double',3:'none'},HEADS_FJ={1:'none'},HEADS_PZ3={1:'double',2:'double'};
// 补间铺作比柱头铺作少两跳，垫在驼峰短柱上
const BP={};const bp=(n,na,s,o)=>{const k=[n,na,s,!!(o&&o.inner),JSON.stringify(o&&o.heads||0)].join();if(!BP[k]){BP[k]=bracketPieces(n,na,s,o);BP[k].mid=n>1?bracketPieces(Math.max(1,n-2),0,s,o):BP[k];}return BP[k];};
(function(){FL.forEach((f,i)=>{f.y=FY[i];f.top=f.y+f.hc;f.yb=f.top+.2;f.B=bp(f.n,f.nAng,f.s,i<2?{heads:HEADS_12}:undefined);f.ybt=f.yb+f.B.h*f.sc;
 f.Bi=bp(4,0,.42,{inner:1});f.sci=f.B.h*f.sc/f.Bi.h; // 内槽一律出华栱四跳，顶面与外檐齐平
 if(i<4){f.Ad=(f.A+FL[i+1].A)/2;f.Adi=(f.Ai+FL[i+1].Ai)/2;f.PZB=bp(f.pz,0,PZ.s,f.pz===3?{heads:HEADS_PZ3}:undefined);const pzh=f.PZB.h*PZ.sc;HD[i]=FY[i+1]-.25-pzh-.2-f.ybt;f.ydt=f.ybt+HD[i];f.pzb=f.ydt+.2;f.pzt=f.pzb+pzh;}});
 FJ.y=BASE_TOP;FJ.top=FJ.y+FJ.hc;FJ.yb=FJ.top+.2;FJ.B=bp(FJ.n,0,FJ.s,{heads:HEADS_FJ});FJ.ybt=FJ.yb+FJ.B.h*FJ.sc;})();
const TOTAL_H=67.31;

// ================= 构件环 =================
function ringBeams(cat,a,y,w,h,color,bays=1){for(let k=0;k<8;k++)for(let j=0;j<bays;j++){const u0=-1+2*j/bays,u1=-1+2*(j+1)/bays;beam(cat,oct(k,u0,a,y),oct(k,u1,a,y),w,h,jit(color,.05));}}
function columns(a,bays,y0,h,r,color=COL.col){for(const c of ringPts(a,bays,y0))rod('col',c.p,V3(c.p.x,y0+h,c.p.z),r,jit(color,.06));}
function frameTop(a,bays,top,sc=1){ringBeams('beam',a,top-.27*sc,.24*sc,.5*sc,COL.beam,bays);ringBeams('beam',a,top+.1,.46*sc,.2,COL.beam,bays);}
function bracketRing(a,bays,yb,B,sc,withMid=true,cat='brk'){for(const c of ringPts(a,bays,yb))placeBracket(c.p,c.al,B,sc,cat);
 if(withMid){const M=B.mid||B,dy=(B.h-M.h)*sc;for(const c of bayMids(a,bays,yb)){if(dy>.25){lbox(cat,'box',c.p,c.al,0,.15*sc,0,.42*sc,.3*sc,1.2*sc,jit(COL.dou,.05));rod(cat,V3(c.p.x,yb+.28*sc,c.p.z),V3(c.p.x,yb+dy,c.p.z),.12*sc,jit(COL.brk,.05));}placeBracket(V3(c.p.x,yb+dy,c.p.z),c.al,M,sc,cat);}}
 for(let k=2;k<=Math.min(4,B.P.reduce((m,q)=>Math.max(m,q.t),0));k++)ringBeams('beam',a,yb+(.36+.44*(k-1)+.13)*sc,.17*sc,.26*sc,COL.beam,1);}
function walls(a,bays,y0,y1,th,color,skip=()=>false,cat='wall'){for(let k=0;k<8;k++)for(let j=0;j<bays;j++){const s=skip(k,j);if(s===true)continue;const u0=-1+2*j/bays,u1=-1+2*(j+1)/bays;
 if(s&&s.door){const yd=y0+s.door;beam(cat,oct(k,u0,a,(yd+y1)/2),oct(k,u1,a,(yd+y1)/2),th,y1-yd,jit(color,.03));continue;}
 if(s&&s.lattice){beam('lattice',oct(k,u0+.04,a,(y0+y1)/2),oct(k,u1-.04,a,(y0+y1)/2),.16,y1-y0,C(0xffffff));continue;}
 beam(cat,oct(k,u0,a,(y0+y1)/2),oct(k,u1,a,(y0+y1)/2),th,y1-y0,jit(color,.03));}}
// 首层内外两周柱“均甃以土墼墙”，剖面上下厚上薄
function batterWalls(a,bays,y0,y1,tb,tt,color,skip=()=>false){const L=[],th=y=>tb+(tt-tb)*(y-y0)/(y1-y0);
 for(let k=0;k<8;k++)for(let j=0;j<bays;j++){const s=skip(k,j);if(s===true)continue;let p0=oct(k,-1+2*j/bays,a,0),p1=oct(k,-1+2*(j+1)/bays,a,0);
  const d=V3().subVectors(p1,p0).normalize(),n=V3(-d.z,0,d.x),e=tb/2*TAN8;if(j===0)p0=p0.clone().addScaledVector(d,-e);if(j===bays-1)p1=p1.clone().addScaledVector(d,e);
  const ya=s&&s.door?y0+s.door:y0,ta=th(ya),P=(p,y,t,sg)=>[p.x+n.x*t*sg/2,y,p.z+n.z*t*sg/2];
  const v=[P(p0,ya,ta,-1),P(p1,ya,ta,-1),P(p1,ya,ta,1),P(p0,ya,ta,1),P(p0,y1,tt,-1),P(p1,y1,tt,-1),P(p1,y1,tt,1),P(p0,y1,tt,1)],pos=[],idx=[];
  v.forEach(q=>pos.push(...q));[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]].forEach(([q0,q1,q2,q3])=>idx.push(q0,q1,q2,q0,q2,q3));L.push({g:geomNI(pos,idx)});}
 mesh('wall',merge(L),cmat('wall',color));}
// 上四层“内柱间无墙壁，但立叉子”
function chazi(a,y){for(let k=0;k<8;k++){const p=oct(k,-1,a,y),q=oct(k,1,a,y),n=Math.floor(p.distanceTo(q)/.3);
 beam('rail',V3(p.x,y+1.15,p.z),V3(q.x,y+1.15,q.z),.1,.1,C(COL.rail));beam('rail',V3(p.x,y+.12,p.z),V3(q.x,y+.12,q.z),.12,.12,C(COL.rail));
 for(let b=1;b<n;b++){const r=V3().lerpVectors(p,q,b/n);rod('rail',V3(r.x,y+.1,r.z),V3(r.x,y+1.32,r.z),.035,C(COL.rail),'cyl8');}}}
function roof(Ae,Ain,ye,yin,o={}){const R=roofGeo(Ae,Ain,ye,yin,o);mesh('roof',R.top,BASEMAT.roof);mesh('soffit',R.bot,BASEMAT.soffit);mesh('fascia',R.edge,cmat('fascia',COL.fascia));
 for(const h of R.hips){for(let i=0;i<h.length-1;i++)rod('ridge',h[i],h[i+1],.17,C(COL.ridge));const e=h[0],d=V3().subVectors(h[0],h[1]).normalize();
  beam('ridge',e,V3().addVectors(e,d.clone().multiplyScalar(.7)).add(V3(0,.35,0)),.3,.3,C(0x3a3f42));
  for(let q=1;q<=3;q++){const p=V3().lerpVectors(h[0],h[1],q*.24).add(V3(0,.22,0));rod('ridge',p,V3(p.x,p.y+.32,p.z),.1,C(0x51575b),'cyl8');}
  const b=V3(e.x,e.y-.45,e.z);rod('bell',V3(e.x,e.y-.1,e.z),b,.02,C(COL.iron));rod('bell',V3(b.x,b.y-.42,b.z),b,.13,C(0x5a524a),'cone');}
 if(!o.noRidge)ringBeams('ridge',Ain+.05,yin+.12,.34,.34,COL.ridge);return R;}
function solveYe(Ae,Ain,yin,ap,Yp,expo){const t=Math.pow((Ae-ap)/(Ae-Ain),expo);return (Yp-yin*t)/(1-t);}
function slab(a0,a1,y0,y1,cat='deck',color=COL.deck){mesh(cat,octSlab(a0,a1,y0,y1),cmat(cat,color));}
function railing(a,y){const P=ringPts(a,3,y);for(let i=0;i<P.length;i++){const p=P[i].p,q=P[(i+1)%P.length].p;rod('rail',p,V3(p.x,y+1.25,p.z),.07,jit(COL.rail,.05),'cyl8');
 beam('rail',V3(p.x,y+1.05,p.z),V3(q.x,y+1.05,q.z),.08,.08,C(COL.rail));beam('rail',V3(p.x,y+.72,p.z),V3(q.x,y+.72,q.z),.12,.08,C(COL.rail));beam('rail',V3(p.x,y+.08,p.z),V3(q.x,y+.08,q.z),.16,.16,C(COL.rail));
 beam('rail',V3(p.x,y+.42,p.z),V3(q.x,y+.42,q.z),.04,.5,C(0x5e2f1e));const L=p.distanceTo(q),nb=Math.floor(L/.9);for(let b=1;b<nb;b++){const r=V3().lerpVectors(p,q,b/nb);rod('rail',V3(r.x,y+.76,r.z),V3(r.x,y+1.05,r.z),.035,C(COL.rail));}}}
function stairs(a,ks,nf,y0,y1){const rise=(y1-y0)/nf;for(let f=0;f<nf;f++){const k=(ks+f)%8,n=Math.max(8,Math.round(rise/.3));for(let i=0;i<n;i++){const u=-.72+1.44*(i+.5)/n,p=oct(k,u,a,y0+f*rise+(i+.5)*rise/n);
 const q=oct(k,u+1.44/n,a,p.y);beam('stair',V3(p.x,p.y-rise/n/2,p.z),V3(q.x,p.y-rise/n/2,q.z),1.2,rise/n,jit(COL.stair,.04));}
 const e0=oct(k,-.72,a,y0+f*rise),e1=oct(k,.72,a,y0+(f+1)*rise);for(const o of [-.62,.62]){const n0=V3(Math.cos(ang(k)),0,Math.sin(ang(k))).multiplyScalar(o);beam('stair',e0.clone().add(n0).add(V3(0,-.25,0)),e1.clone().add(n0).add(V3(0,-.25,0)),.12,.35,C(0x4d2f1c));}}}

// ================= 按“建造顺序”生成整座塔 =================
const LBL={};
function buildPagoda(){
 const f1=FL[0];
 // 0 台基
 step('夯基筑台',0,'base');
 put('stone','box',V3(0,.8,0),_Q.set(0,0,0,1),V3(40,1.6,40),C(COL.stone2));
 slab(0,17.6,1.6,BASE_TOP,'stone',COL.stone);slab(17.3,17.9,BASE_TOP-.15,BASE_TOP+.05,'stone',0x9d9482);
 for(let i=0;i<8;i++){const h=1.6/8,h2=(BASE_TOP-1.6)/8;put('stone','box',V3(0,h*(i+1)/2,23.2-i*.4),_Q.set(0,0,0,1),V3(7,h*(i+1),.4),C(0x9a917f));put('stone','box',V3(0,1.6+h2*(i+1)/2,19.85-i*.3),_Q.set(0,0,0,1),V3(5.4,h2*(i+1),.3),C(0xa39a88));}
 LBL.taiji=V3(0,2.6,17.7);LBL.taiji2=V3(-14,1.2,20.1);
 // 1 放线、柱础
 step('放线定柱网',0,'layout');
 for(const a of [f1.A,f1.Ai,FJ.A])ringBeams('layout',a,BASE_TOP+.03,.12,.05,COL.lay);
 for(let k=0;k<8;k++)beam('layout',V3(0,BASE_TOP+.03,0),oct(k,-1,FJ.A+1.2,BASE_TOP+.03),.1,.05,C(COL.lay));
 for(const [a,b] of [[f1.A,3],[f1.Ai,1],[FJ.A,3]])for(const c of ringPts(a,b,BASE_TOP))rod('stone',c.p,V3(c.p.x,BASE_TOP+.22,c.p.z),.6,jit(0xb8ae9a,.04),'cyl8');
 // 2 首层立柱
 step('立首层柱',1,'cols');
 columns(f1.A,3,BASE_TOP,f1.hc,f1.r);columns(f1.Ai,1,BASE_TOP,f1.hc,f1.r);columns(FJ.A,3,BASE_TOP,FJ.hc,.28);
 LBL.col_out=oct(7,-1/3,f1.A,9);LBL.col_in=oct(0,-1,f1.Ai,9);
 // 3 阑额普拍枋
 step('阑额普拍枋',1,'beams');frameTop(f1.A,3,f1.top);frameTop(f1.Ai,1,f1.top);frameTop(FJ.A,3,FJ.top,.8);
 // 4 斗拱
 step('安斗拱',1,'brk');
 bracketRing(f1.A,3,f1.yb,f1.B,f1.sc);ringBeams('beam',f1.A+f1.B.proj*f1.sc,f1.ybt+.15,.3,.3,COL.beam);
 bracketRing(f1.Ai,1,f1.yb,f1.Bi,f1.sci);
 bracketRing(FJ.A,3,FJ.yb,FJ.B,FJ.sc);ringBeams('beam',FJ.A+FJ.B.proj*FJ.sc,FJ.ybt+.12,.24,.24,COL.beam);
 for(let k=0;k<8;k++)beam('beam',oct(k,-1,f1.Ai,f1.yb+.9),oct(k,-1,f1.A,f1.yb+.9),.3,.45,jit(COL.beam));
 LBL.dou1=oct(7,1/3,f1.A+1.2,f1.yb+1.2);
 // 5 墙、屋面
 step('铺椽盖瓦',1,'roof');
 batterWalls(f1.A,3,BASE_TOP,f1.top-.52,2.2,1.0,COL.wall1,(k,j)=>(k===0||k===4)&&j===1?{door:5.6}:false);
 batterWalls(f1.Ai,1,BASE_TOP,f1.top-.52,2.0,.9,COL.wall1,(k)=>k===0?{door:7.0}:k===4?{door:5.6}:false);
 slab(f1.Ai-.3,f1.A-.3,f1.ybt,f1.ybt+.22);
 {const h=FY[1]-.7-f1.ybt,g=new T.CylinderGeometry(.5,(f1.Ai-.4)/COS8,h,8,1,true);g.rotateY(P8);g.translate(0,f1.ybt+h/2,0);mesh('beam',g,cmat('beam',0x6d4a31));} // 斗八藻井
 {const Ain=f1.A+.5,yin=f1.top+.3,ap=FJ.A+FJ.B.proj*FJ.sc,Ae=FJ.A+FJ.ep;const ye=solveYe(Ae,Ain,yin,ap,FJ.ybt+.72,1.5);FJ.roof=roof(Ae,Ain,ye,yin,{lift:.7,flare:.5});FJ.ye=ye;}
 {const Ae=f1.A+f1.ep,Ain=f1.Ad+.2,yin=f1.ydt-.1,ap=f1.A+f1.B.proj*f1.sc;const ye=solveYe(Ae,Ain,yin,ap,f1.ybt+.72,1.5);f1.roof=roof(Ae,Ain,ye,yin,{lift:1.0,flare:.7});f1.ye=ye;}
 stairs((f1.A+f1.Ai)/2+.2,5,3,f1.y,FL[1].y);
 LBL.fujie=oct(7,.2,FJ.A+FJ.ep-.6,FJ.ye+.6);LBL.door1=oct(0,0,f1.A+.5,7);
 // 各层
 for(let i=0;i<5;i++){const f=FL[i],L=2*i+1;
  if(i>0){
   step(`${LEVELNAME[L]}立柱`,L,'up');columns(f.A,3,f.y,f.hc,f.r);columns(f.Ai,1,f.y,f.hc,f.r);frameTop(f.A,3,f.top,f.sc);frameTop(f.Ai,1,f.top,f.sc);
   step(`${LEVELNAME[L]}斗拱`,L,'up');bracketRing(f.A,3,f.yb,f.B,f.sc);ringBeams('beam',f.A+f.B.proj*f.sc,f.ybt+.15,.28,.28,COL.beam);bracketRing(f.Ai,1,f.yb,f.Bi,f.sci);
   for(let k=0;k<8;k++)beam('beam',oct(k,-1,f.Ai,f.yb+.8),oct(k,-1,f.A,f.yb+.8),.28,.42,jit(COL.beam));
   step(`${LEVELNAME[L]}墙与屋檐`,L,i===4?'top':'up');
   walls(f.A,3,f.y,f.top-.5,.34,COL.wall,(k,j)=>k%2===0&&j===1?{lattice:1}:false);chazi(f.Ai,f.y);
   slab(0,f.Ai-.6,f.y,f.y+.75,'stone',0xa89f8c);
   if(i<4){slab(0,f.A-.3,f.ybt,f.ybt+.2);const Ae=f.A+f.ep,Ain=f.Ad+.2,yin=f.ydt-.1,ap=f.A+f.B.proj*f.sc;const ye=solveYe(Ae,Ain,yin,ap,f.ybt+.7,1.5);f.roof=roof(Ae,Ain,ye,yin,{lift:.85,flare:.6});f.ye=ye;
     stairs((f.A+f.Ai)/2+.2,i%2?5:1,2,f.y,FL[i+1].y);}
   else{const Ae=f.A+f.ep,Ain=1.25,ap=f.A+f.B.proj*f.sc,yin=APEX;const ye=solveYe(Ae,Ain,yin,ap,f.ybt+.7,1.9);f.roof=roof(Ae,Ain,ye,yin,{expo:1.9,lift:1.1,flare:.8,NT:14,noRidge:true});f.ye=ye;f.apex=yin;
     slab(0,f.A-.3,f.ybt,f.ybt+.2);}
  }
  if(i<4){const D=L+1,g=FL[i+1];
   step(`${LEVELNAME[D]}斜撑`,D,i===0?'dark':'up');
   columns(f.Ad,3,f.ybt,HD[i]+.02,.25);columns(f.Adi,1,f.ybt,HD[i]+.02,.25);frameTop(f.Ad,3,f.ydt,.8);frameTop(f.Adi,1,f.ydt,.8);
   const Po=ringPts(f.Ad,3,0),Pi=ringPts(f.Adi,1,0);
   for(let q=0;q<Po.length;q++){const a=Po[q].p,b=Po[(q+1)%Po.length].p,up=q%2===0;beam('brace',V3(a.x,up?f.ybt+.15:f.ydt-.2,a.z),V3(b.x,up?f.ydt-.2:f.ybt+.15,b.z),.2,.24,jit(COL.brace));beam('brace',V3(a.x,(f.ybt+f.ydt)/2,a.z),V3(b.x,(f.ybt+f.ydt)/2,b.z),.16,.2,jit(COL.brace));}
   for(let q=0;q<8;q++){const a=Pi[q].p,b=Pi[(q+1)%8].p;beam('brace',V3(a.x,f.ybt+.15,a.z),V3(b.x,f.ydt-.2,b.z),.2,.24,jit(COL.brace));beam('brace',V3(b.x,f.ybt+.15,b.z),V3(a.x,f.ydt-.2,a.z),.2,.24,jit(COL.brace));
    const o=Po[q*3].p;beam('brace',V3(o.x,f.ybt+.15,o.z),V3(a.x,f.ydt-.2,a.z),.2,.24,jit(COL.brace));beam('brace',V3(a.x,f.ybt+.15,a.z),V3(o.x,f.ydt-.2,o.z),.2,.24,jit(COL.brace));
    beam('beam',V3(o.x,f.ydt-.05,o.z),V3(a.x,f.ydt-.05,a.z),.26,.3,jit(COL.beam));}
   walls(f.Ad,3,f.ybt+.1,f.ydt-.3,.3,COL.wallD);walls(f.Adi,1,f.ybt+.1,f.ydt-.3,.3,COL.wallD);
   LBL['dark'+(i+1)]=oct(1,-.1,f.Ad,(f.ybt+f.ydt)/2);LBL['brace'+(i+1)]=oct(0,.33,f.Ad,(f.ybt+f.ydt)/2);
   step(`${LEVELNAME[L+2]}平坐`,D,i===0?'pz':'up');
   bracketRing(f.Ad,3,f.pzb,f.PZB,PZ.sc);slab(0,g.A+1.5,g.y-.25,g.y);ringBeams('beam',g.A+1.4,g.y-.4,.3,.3,COL.beam);railing(g.A+1.38,g.y);
   LBL['pz'+(i+2)]=oct(7,.15,g.A+1.45,g.y+.6);}
 }
 // 塔刹
 // 塔刹：“以砖砌仰莲两层为坐，上又为铁仰莲一层，以承覆钵、相轮、宝盖、圆光等部分”，顶上仰月、宝珠（据剖面图）
 const f5=FL[4],ya=f5.apex;
 step('立铁刹',10,'spire');
 const lat=(pts,seg=24)=>new T.LatheGeometry(pts.map(([r,y])=>new T.Vector2(r,y)),seg);
 {const g=lat([[0,-.7],[1.9,-.7],[1.9,.2],[1.45,.45],[1.3,.75],[1.7,1.05],[1.85,1.2],[1.3,1.3],[1.15,1.55],[1.55,1.85],[1.7,2.0],[0,2.0]],8);g.rotateY(P8);g.translate(0,ya,0);mesh('stone',g,cmat('stone',0x8c8272));}
 const sp=[],y0=ya+2.0;
 sp.push({g:lat([[0,0],[.6,0],[1.2,.35],[1.3,.45],[.8,.45],[0,.45]]),m:mtx(0,y0,0)});
 sp.push({g:lat([[0,0],[.8,0],[1.25,.4],[1.42,1.0],[1.35,1.55],[1.0,2.0],[.55,2.25],[0,2.25]]),m:mtx(0,y0+.45,0)});
 const yx=y0+2.7;for(let i=0;i<6;i++){const r=1.02-i*.03;sp.push({g:new T.CylinderGeometry(r,r,.24,28),m:mtx(0,yx+.15+i*.37,0)});}
 const yg=yx+2.35;sp.push({g:lat([[0,0],[1.35,0],[1.35,.12],[.9,.3],[0,.3]]),m:mtx(0,yg,0)});
 const yh=yg+1.45;sp.push({g:new T.TorusGeometry(1.0,.09,8,40),m:mtx(0,yh,0)});
 const ym=yh+1.35;sp.push({g:new T.TorusGeometry(.45,.07,6,20,PI),m:new T.Matrix4().compose(V3(0,ym+.45,0),new T.Quaternion().setFromAxisAngle(V3(0,0,1),PI),V3(1,1,1))});
 sp.push({g:new T.SphereGeometry(.32,16,12),m:mtx(0,ym+.75,0)});sp.push({g:new T.SphereGeometry(.18,12,10),m:mtx(0,ym+1.3,0)});
 sp.push({g:new T.CylinderGeometry(.06,.13,TOTAL_H-y0,8),m:mtx(0,(TOTAL_H+y0)/2,0)});
 mesh('iron',merge(sp),cmat('iron',COL.iron));
 LBL.s_lotus=V3(1.85,ya+1.1,0);LBL.s_bowl=V3(1.42,y0+1.45,0);LBL.s_rings=V3(1.02,yx+1.1,0);LBL.s_gai=V3(1.35,yg+.1,0);LBL.s_halo=V3(1.0,yh,0);LBL.s_moon=V3(.45,ym+.1,0);LBL.s_pearl=V3(.32,ym+.75,0);
 const ch=[];const top=V3(0,yg+.05,0);for(let k=0;k<8;k++){const e=f5.roof.hips[k][0].clone().add(V3(0,.3,0));const mid=V3().lerpVectors(top,e,.5);mid.y-=1.1;const cv=new T.QuadraticBezierCurve3(top.clone().add(V3(e.x,0,e.z).normalize().multiplyScalar(1.25)),mid,e);ch.push({g:new T.TubeGeometry(cv,24,.06,5)});}
 mesh('chain',merge(ch),cmat('chain',0x2e2c2a,{metalness:.5,roughness:.5}));
 LBL.chain=V3().lerpVectors(top,f5.roof.hips[7][0],.55).add(V3(0,-.7,0));LBL.spire=V3(1.9,ya+1.2,0);
 // 塑像与牌匾（每层一步）
 const FIG={1:[],3:[],5:[],7:[],9:[]};
 FIG[1].push(...figure(0,BASE_TOP,-.4,10.3,0,false,true,3.0));
 {const y=FL[1].y+.75;FIG[3].push(...figure(0,y,-.6,2.6,0,false,true,1),...figure(-2,y,0,2.8,0,true),...figure(2,y,0,2.8,0,true),...figure(-3.4,y,.6,2.2,0,true,false),...figure(3.4,y,.6,2.2,0,true,false));}
 {const y=FL[2].y+.75;for(let q=0;q<4;q++){const a=q*PI/2;FIG[5].push(...figure(Math.sin(a)*1.9,y,Math.cos(a)*1.9,2.4,a,false,true,.8));}}
 {const y=FL[3].y+.75;FIG[7].push(...figure(0,y,-.6,2.5,0,false,true,1),...figure(-1.8,y,.2,2.4,0,true,false),...figure(1.8,y,.2,2.4,0,true,false),...figure(-3.2,y,.6,2.6,0,true),...figure(3.2,y,.6,2.6,0,true));}
 {const y=FL[4].y+.75;FIG[9].push(...figure(0,y,0,2.5,0,false,true,1));for(let q=0;q<8;q++){const a=q*PI/4+P8;FIG[9].push(...figure(Math.sin(a)*3.4,y,Math.cos(a)*3.4,1.5,a,false,false,.5));}}
 [1,3,5,7,9].forEach((L,i)=>{step(`${LEVELNAME[L]}塑像`,L,'statue');mesh('buddha',merge(FIG[L]),cmat('buddha',COL.gold));
  const f=FL[i];beam('plaque',oct(0,-.2,f.A+(i?.25:.55),f.top-1.1),oct(0,.2,f.A+(i?.25:.55),f.top-1.1),.14,.95,C(0xffffff));});
 LBL.b1=V3(0,13,0);LBL.b2=V3(0,FL[1].y+3.8,0);LBL.b3=V3(0,FL[2].y+2.8,0);LBL.b4=V3(0,FL[3].y+3,0);LBL.b5=V3(0,FL[4].y+2.6,0);
 LBL.stair=oct(6,0,(f1.A+f1.Ai)/2+.2,9);
 for(let i=0;i<5;i++){const f=FL[i];LBL['L'+(2*i+1)]=oct(2,0,f.A+2,(f.y+f.top)/2);if(i<4)LBL['L'+(2*i+2)]=oct(2,0,f.Ad+2,(f.ybt+f.ydt)/2);}
 LBL.L0=oct(2,0,20,1.8);LBL.L10=V3(-2,TOTAL_H-4,0);
 LBL.eave=[oct(1,1,FJ.A+FJ.ep+.5,FJ.ye),...FL.map(f=>oct(1,1,f.A+f.ep+.7,f.ye+.9))];
 LBL.corner=FL[1].roof.hips[7][0].clone();LBL.bell=LBL.corner.clone().add(V3(0,-1,0));LBL.lattice=oct(0,0,FL[1].A+.3,FL[1].y+1.6);
 LBL.lean=oct(0,.33,FL[1].A,FL[1].y+2);
}

  // 光色按线性值给、强度乘 π，画面与旧版一致
  const LC = h => new T.Color().setHex(h, T.LinearSRGBColorSpace);
  const hemi = new T.HemisphereLight(LC(0xf2ede2), LC(0x6b5a45), .95 * PI);
  scene.add(hemi);
  const sun = new T.DirectionalLight(LC(0xffe6c2), 1.5 * PI);
  sun.position.set(-48, 95, 70);
  sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -46, right: 46, top: 80, bottom: -10, near: 20, far: 260 });
  sun.shadow.bias = -.0006;
  sun.shadow.normalBias = .04;
  sun.target.position.set(0, 26, 0);
  scene.add(sun, sun.target);
  const fill = new T.DirectionalLight(LC(0xbfd2dc), .4 * PI);
  fill.position.set(60, 40, -50);
  scene.add(fill);
  const ground = new T.Mesh(new T.CircleGeometry(260, 64), new T.ShadowMaterial({ opacity: .17 }));
  ground.rotation.x = -PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const root = new T.Group();
  scene.add(root);
  function finalize(){STEPS.forEach(s=>{const g=new T.Group();g.userData={level:s.level,step:s.i};s.group=g;
   s.items.forEach(it=>{const n=it.c.length,im=new T.InstancedMesh(GEO[it.kind],BASEMAT[it.cat]||BASEMAT.beam,n);for(let j=0;j<n;j++){_M.fromArray(it.m,j*16);im.setMatrixAt(j,_M);im.setColorAt(j,it.c[j]);}
    im.instanceMatrix.needsUpdate=true;if(im.instanceColor)im.instanceColor.needsUpdate=true;im.frustumCulled=false;im.castShadow=it.cat!=='layout';im.receiveShadow=true;im.userData={cat:it.cat,level:s.level};g.add(im);});
   s.meshes.forEach(({cat,geo,m})=>{const me=new T.Mesh(geo,m);me.castShadow=me.receiveShadow=true;me.userData={cat,level:s.level};g.add(me);});
   root.add(g);});}

// ================= 构件实验室：斗拱 / 叉柱造 / 榫卯 =================
const labRoot=new T.Group();labRoot.visible=false;scene.add(labRoot);
const LABS={};
function labMesh(group,name,geo,m,material,ex,tier=0){const me=new T.Mesh(geo,material);me.applyMatrix4(m);me.castShadow=me.receiveShadow=true;me.userData={name,ex:ex||V3(),base:me.position.clone(),tier};group.add(me);return me;}
function labBox(group,name,cat,color,x,y,z,sx,sy,sz,ex,pitch=0,kind='box',ry=0){const q=new T.Quaternion().setFromAxisAngle(_Y,ry);if(pitch)q.multiply(new T.Quaternion().setFromAxisAngle(_Z,pitch));return labMesh(group,name,GEO[kind],new T.Matrix4().compose(V3(x,y,z),q,V3(sx,sy,sz)),cmat(cat,color),ex);}
function buildLabs(){
 // ---- 斗拱：首层外檐 七铺作双杪双下昂（示意） ----
 {const g=new T.Group();g.userData.id='bracket';labRoot.add(g);const B=bracketPieces(4,2,.5,{heads:HEADS_12}),Y0=2.8,s=.5,gap=.62;
  labBox(g,'柱','col',COL.col,0,Y0/2-.2,0,.62,Y0-.4,.62,V3(0,0,0),0,'cyl');
  labBox(g,'阑额','beam',COL.beam,0,Y0-.47,0,.24,.5,3.4,V3(0,0,0));
  labBox(g,'普拍枋','beam',0x7b5236,0,Y0-.1,0,.46,.2,3.6,V3(0,gap*.5,0));
  const tierY=t=>gap*(t+1);
  for(const q of B.P){const color=q.kind==='dou'?COL.dou:q.ang?COL.ang:COL.brk;const ex=V3(q.ang?.35:0,tierY(q.t)+(q.kind==='dou'?gap*.45:0),0);
   labBox(g,q.name,q.ang?'ang':'brk',color,q.x,Y0+q.y,q.z,q.sx,q.sy,q.sz,ex,q.pitch||0,q.kind).userData.q=q;}
  for(let k=2;k<=4;k++)labBox(g,'柱头方','beam',COL.beam,0,Y0+.36+.44*(k-1)+.13,0,.17,.26,3.6,V3(0,tierY(k)+gap*.2,0)).userData.q={t:k};
  labBox(g,'橑檐方','beam',COL.beam,4*s,Y0+B.h+.15,0,.3,.3,3.6,V3(0,tierY(6),0));
  for(let i=-3;i<=3;i++){const z=i*.5,p1=V3(-.6,Y0+B.h+.72,z),p2=V3(4*s+1.8,Y0+B.h+.05,z);const L=p1.distanceTo(p2),mid=V3().addVectors(p1,p2).multiplyScalar(.5);
   const q=new T.Quaternion().setFromUnitVectors(_Y,V3().subVectors(p2,p1).normalize());labMesh(g,'椽子',GEO.cyl,new T.Matrix4().compose(mid,q,V3(.2,L,.2)),cmat('beam',0x7a5234),V3(0,tierY(7),0)).userData.q={i};}
  setAnch(g,[['栌斗',null,[0,.5,.5]],['华拱',q=>q.t===2,[.5,.5,0]],['泥道拱',q=>q.t===1,[0,.5,.5]],['慢拱',q=>q.t===2,[0,.5,-.5]],['瓜子拱',q=>q.t===3,[0,.5,.5]],['散斗',q=>q.t===1&&q.z<0,[0,.5,0]],['交互斗',q=>q.t===1,[.5,.5,0]],
   ['下昂',null,[.5,0,0]],['令拱',null,[0,.5,.5]],['耍头',null,[.5,.5,0]],['橑檐方',null,[0,.5,.5]],['柱头方',q=>q.t===3,[0,.5,-.5]],['普拍枋',null,[0,.5,-.5]],['阑额',null,[0,0,.5]],['柱',null,[0,.28,.5]],['椽子',q=>q.i===3,[0,.5,0]]]);
  g.userData.anchor={'栌斗':1,'华拱':1,'泥道拱':1,'瓜子拱':1,'慢拱':1,'散斗':1,'交互斗':1,'下昂':1,'令拱':1,'耍头':1,'橑檐方':1,'柱头方':1,'普拍枋':1,'阑额':1,'柱':1,'椽子':1};
  LABS.bracket=g;}
 // ---- 叉柱造 ----
 {const g=new T.Group();g.userData.id='fork';labRoot.add(g);const Y0=2.4;
  labBox(g,'下层柱','col',COL.col,0,Y0/2,0,.62,Y0,.62,V3(),0,'cyl');
  labBox(g,'普拍枋','beam',0x7b5236,0,Y0+.1,0,.9,.2,2.4,V3(0,.25,0));
  labBox(g,'栌斗','brk',COL.dou,0,Y0+.2+.18,0,.62,.36,.62,V3(0,.5,0),0,'dou');
  labBox(g,'十字相交的拱','brk',COL.brk,0,Y0+.56+.13,0,2.2,.26,.17,V3(0,.8,0));
  labBox(g,'十字相交的拱','brk',COL.brk,0,Y0+.56+.13,0,.17,.26,1.6,V3(0,.8,0));
  const yf=Y0+.56,h=.26,up=V3(0,2.2,0);
  for(const [sx,sz] of [[1,1],[1,-1],[-1,1],[-1,-1]])labBox(g,'柱脚开叉','col',0x9a6a44,sx*.2,yf+h/2,sz*.2,.23,h,.23,up);
  labBox(g,'上层柱','col',COL.col,0,yf+h+1.6,0,.56,3.2,.56,up,0,'cyl');
  setAnch(g,[['上层柱',null,[0,.3,.5]],['下层柱',null,[0,-.1,.5]],['柱脚开叉',null,[.5,-.5,.5]],['十字相交的拱',null,[.5,.5,0]],['栌斗',null,[0,.2,.5]],['普拍枋',null,[0,.5,.5]]]);
  LABS.fork=g;}
 // ---- 榫卯：燕尾榫 ----
 {const g=new T.Group();g.userData.id='joint';labRoot.add(g);
  const shp=(pts)=>{const s=new T.Shape();pts.forEach(([x,y],i)=>i?s.lineTo(x,y):s.moveTo(x,y));return s;};
  const ext=(s)=>{const e=new T.ExtrudeGeometry(s,{depth:.5,bevelEnabled:false});e.rotateX(PI/2);e.translate(0,.5,0);return e;};
  const tongue=ext(shp([[-2.2,-.28],[0,-.28],[0,-.12],[.42,-.22],[.42,.22],[0,.12],[0,.28],[-2.2,.28]]));
  const socket=ext(shp([[0,.28],[0,.12],[.42,.22],[.42,-.22],[0,-.12],[0,-.28],[2.2,-.28],[2.2,.28]]));
  labMesh(g,'卯（凹口）',socket,new T.Matrix4().makeTranslation(0,1.4,0),cmat('beam',0x8a6040),V3());
  labMesh(g,'榫（燕尾凸头）',tongue,new T.Matrix4().makeTranslation(0,1.4,0),cmat('brk',0x9f7652),V3(-.7,1.1,0));
  labBox(g,'支架','stone',0x8a8272,-1.2,.7,0,.4,1.4,.8,V3());labBox(g,'支架','stone',0x8a8272,1.4,.7,0,.4,1.4,.8,V3());
  setAnch(g,[['榫（燕尾凸头）',null,[-1.2,.5,0]],['卯（凹口）',null,[1.3,.5,0]]]);LABS.joint=g;}
 // ---- 斗拱古今：同样高的柱子上，辽代斗栱约为柱高之半，明、清仅为柱高五分或六分之一（梁思成《中国建筑史》）；清式只按比例缩小示意 ----
 {const g=new T.Group();g.userData.id='compare';labRoot.add(g);
  const BL=bracketPieces(4,2,.5,{heads:HEADS_12}),BQ=bracketPieces(3,0,.5),CH=BL.h*2,anch={};
  const set=(x0,B,sc,d,key,bar)=>{
   labBox(g,'柱','col',COL.col,x0,CH/2,0,d,CH,d,V3(),0,'cyl');let top=null;
   for(const q of B.P){const color=q.kind==='dou'?COL.dou:q.ang?COL.ang:COL.brk;
    const m=labBox(g,q.name,q.ang?'ang':'brk',color,x0+q.x*sc,CH+q.y*sc,q.z*sc,q.sx*sc,q.sy*sc,q.sz*sc,V3(),q.pitch||0,q.kind);if(q.name==='令拱'&&(!top||m.position.y>top.position.y))top=m;}
   const bh=B.h*sc,bx=x0-2.2;
   labBox(g,'柱高','dim',0xb7aa8d,bx,CH/2,0,.07,CH,.07,V3());labBox(g,'斗栱高','dim',0xb13d28,bx,CH+bh/2,0,.12,bh,.12,V3());
   for(const y of [0,CH,CH+bh])labBox(g,y===CH?'柱高':'斗栱高','dim',0x8a7a60,bx,y,0,.5,.05,.05,V3());
   anch[key]={m:top,loc:V3(0,.5,0)};anch[bar]={m:g.children[g.children.length-4],loc:V3(0,0,0)};};
  set(-3.4,BL,1,.64,'辽：斗栱约为柱高之半','1 / 2');
  set(3.6,BQ,CH/6/BQ.h,CH/10,'明、清：仅为柱高五分或六分之一','1 / 6');
  g.userData.anch=anch;LABS.compare=g;}
 Object.values(LABS).forEach(g=>g.visible=false);
}
function setAnch(g,specs){g.userData.anch={};for(const [name,pred,loc] of specs){const m=g.children.find(c=>c.userData.name===name&&(!pred||pred(c.userData.q||{})));if(m)g.userData.anch[name]={m,loc:V3(...loc)};}}
function labAnchor(g,name){const a=g.userData.anch&&g.userData.anch[name];if(a){a.m.updateMatrixWorld();return a.m.localToWorld(a.loc.clone());}for(const m of g.children)if(m.userData.name===name){const b=new T.Box3().setFromObject(m);const c=b.getCenter(V3());c.y=b.max.y+.05;return c;}return null;}

  buildPagoda();
  finalize();
  buildLabs();
const dimG=new T.Group();dimG.visible=false;scene.add(dimG);
{const m=cmat('dim',0xe3bb62);const x=-27,z=6;const add=(g,p)=>{const me=new T.Mesh(g,m);me.position.copy(p);dimG.add(me);};
 add(new T.BoxGeometry(.18,TOTAL_H,.18),V3(x,TOTAL_H/2,z));add(new T.BoxGeometry(3,.18,.18),V3(x,0.1,z));add(new T.BoxGeometry(3,.18,.18),V3(x,TOTAL_H,z));
 for(let y=10;y<TOTAL_H;y+=10)add(new T.BoxGeometry(1.2,.12,.12),V3(x,y,z));}
  const byLevel = {};
  STEPS.forEach(s => (byLevel[s.level] = byLevel[s.level] || []).push(s.group));
const LT={taiji:['台基：下方上八角',LBL.taiji,0],fujie:['副阶周匝：首层外廊',LBL.fujie,1],pz2:['平坐与勾栏',LBL.pz2,2],lattice:['当心间辟门',LBL.lattice,3],corner:['垂脊与兽头',LBL.corner,3],bell:['铁马风铃',LBL.bell,3],
 dou1:['斗拱',LBL.dou1,1],spire:['塔刹',LBL.spire,10],chain:['铁链',LBL.chain,10],s_lotus:['砖砌仰莲座',LBL.s_lotus,10],s_gai:['宝盖',LBL.s_gai,10],s_halo:['圆光',LBL.s_halo,10],s_bowl:['覆钵',LBL.s_bowl,10],s_rings:['相轮',LBL.s_rings,10],s_moon:['仰月',LBL.s_moon,10],s_pearl:['宝珠',LBL.s_pearl,10],
 in8:['内槽 8 柱',oct(3,-1,FL[0].Ai,9),1],out24:['外槽 24 柱',oct(0,1/3,FL[0].A,9),1],fj24:['副阶 24 柱',oct(6,0,FJ.A,7),1],
 b1:['释迦牟尼坐像 约11米',LBL.b1,1],b2:['二层：一佛二菩萨二胁侍',LBL.b2,3],b3:['三层：四方佛',LBL.b3,5],b4:['四层：释迦与弟子、菩萨',LBL.b4,7],b5:['五层：毗卢遮那佛与八大菩萨',LBL.b5,9],
 stair:['楼梯',LBL.stair,1],h67:['67.31 米',V3(-27,TOTAL_H/2,6),-1],lean:['二层柱：倾斜最严重（示意已夸大）',LBL.lean,3],shoufen:['逐层内收',oct(0,0,FL[3].A,FL[3].y+1),7],
 door1:['首层南门',LBL.door1,1],bucket:['内筒供佛',V3(0,6,0),1],ambul:['外筒走人',oct(7,0,(FL[0].A+FL[0].Ai)/2,6),1]};
for(let i=1;i<=4;i++){LT['dark'+i]=['暗层'+['一','二','三','四'][i-1]+'：斜撑',LBL['dark'+i],2*i];LT['brace'+i]=['斜撑',LBL['brace'+i],2*i];}
for(let L=0;L<=10;L++)LT['L'+L]=[LEVELNAME[L],LBL['L'+L],L];
LBL.eave.forEach((p,i)=>LT['e'+(i+1)]=['第'+'一二三四五六'[i]+'重檐',p,i?2*i-1:1]);
['副阶：双杪偷心','一层：双杪双下昂','二层：双杪双下昂','三层：三杪','四层：双杪','五层：半栱承单杪'].forEach((t,i)=>LT['k'+(i+1)]=[t,LBL.eave[i],i?2*i-1:1]);
const _v=V3();const LSIDE={'辽：斗栱约为柱高之半':'r','明、清：仅为柱高五分或六分之一':'r','1 / 2':'l','1 / 6':'l','泥道拱':'l','散斗':'l','华拱':'r','交互斗':'r','瓜子拱':'r','令拱':'l','耍头':'r','橑檐方':'l','椽子':'r','下昂':'r','柱头方':'l','阑额':'l','普拍枋':'r','栌斗':'l','柱':'r'};
const INFO={col:['柱','内圈8根、外圈24根，逐层叠立；首层外还有副阶一圈。平坐柱的落点有两说：下端叉于下层斗拱，或立在下一层草栿上。'],brk:['斗拱','柱头与屋檐之间层层出挑的木构件，由斗、拱、昂组成。梁思成统计各层内外共有三十余种。'],ang:['下昂','斜置的长杆，像杠杆一样挑起屋檐。'],
 beam:['梁枋','阑额、普拍枋、柱头方、橑檐方等横向构件，把柱子箍成整体。'],brace:['暗层斜撑','藏在暗层墙里的斜向木撑，与柱梁组成三角形，是木塔的“腰箍”。'],wall:['墙体','首层内外两圈柱都包在下厚上薄的土墼墙里；上四层外圈是木条编道抹灰墙；暗层的墙把斜撑包在里面。'],lattice:['门','上四层外圈四个正面的当心间辟门。'],
 roof:['屋面','灰瓦屋面，檐口凹曲，屋角起翘。'],soffit:['椽子','屋檐下密排的椽子，搭在橑檐方上向外挑出。'],fascia:['连檐','椽头外侧的通长木条，收住檐口。'],ridge:['垂脊与脊饰','沿八条角线伸下的屋脊，脊端有兽头。'],deck:['楼板与平坐','每层楼板向外挑出成平坐，可以绕塔一周。'],
 rail:['勾栏与叉子','平坐外缘是斗子蜀柱勾栏；上四层内槽柱间不砌墙，只立叉子。'],stair:['楼梯','藏在内外两圈柱子之间，盘旋而上。'],stone:['台基与佛坛','石砌台基下方上八角；上层中央是佛坛。'],iron:['塔刹','砖砌仰莲两层为座，上为铁仰莲，承覆钵、相轮、宝盖、圆光，顶上是仰月、宝珠。'],chain:['铁链','八条铁链把塔刹拉结在八条屋脊上。'],
 buddha:['塑像（造型为示意）','各层供奉佛像，一层释迦坐像约11米。'],plaque:['牌匾','木塔上挂有历代牌匾五十多块。'],bell:['铁马风铃','挂在屋角，风吹作响。'],layout:['放线','施工前在台面上放出柱网。'],dim:['高度','塔高67.31米。']};
const CAT2PAGE={brk:'bracket',ang:'bracket',beam:'bracket',brace:'dark',col:'tube',buddha:'statues',stair:'stair',iron:'spire',chain:'spire',roof:'eaves',soffit:'eaves',fascia:'eaves',ridge:'eaves',bell:'eaves',rail:'pingzuo',deck:'pingzuo',lattice:'pingzuo',stone:'base',wall:'fujie',plaque:'history'};
const LABTIP={'栌斗':'斗拱最底下的大斗，坐在普拍枋上。','华拱':'沿出挑方向伸出的拱，每挑出一层叫一跳。','泥道拱':'柱中线上的横拱。','慢拱':'比泥道拱更长的横拱。','瓜子拱':'每一跳外端的横拱。','散斗':'垫在拱两端的小斗。','交互斗':'华拱或昂外端上的小斗。','齐心斗':'拱正中的小斗。',
 '下昂':'斜置的长杆，像杠杆一样挑起屋檐。','令拱':'最外一跳的横拱，托住橑檐方。','耍头':'最上层伸出的构件端头。','橑檐方':'托住椽子的通长方木。','柱头方':'柱中线上层层叠放的横方。','普拍枋':'压在柱头上的平板枋。','阑额':'柱与柱之间的横梁。','柱':'承托斗拱的柱子。','椽子':'搭在橑檐方上的圆木，承托屋面。',
 '下层柱':'下面一层的柱子。','十字相交的拱':'下层斗拱在栌斗上十字相交。','柱脚开叉':'上层柱底开出十字口。','上层柱':'骑在下层斗拱上的柱子。','柱高':'两边的柱子一样高。','斗栱高':'红色一段是斗拱的高度。','榫（燕尾凸头）':'头大颈小，越拉越紧。','卯（凹口）':'与榫对应的凹槽。','支架':'展示用支架。'};
  return { steps: STEPS, FL, LBL, oct, LT, LSIDE, labAnchor, byLevel, MATS, CUT, CUTY, LABS, labRoot, root, dimG, ground, INFO, CAT2PAGE, LABTIP };
}
