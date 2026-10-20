/* three.js 0.186.1 | Copyright 2010-2026 Three.js Authors | MIT License | https://github.com/mrdoob/three.js */
var Sg=Object.defineProperty;var Tg=(s,t)=>{for(var e in t)Sg(s,e,{get:t[e],enumerable:!0})};var gf={};Tg(gf,{ACESFilmicToneMapping:()=>Jr,AddEquation:()=>ns,AddOperation:()=>Ld,AdditiveAnimationBlendMode:()=>lu,AdditiveBlending:()=>Wh,AgXToneMapping:()=>Qh,AlphaFormat:()=>au,AlwaysCompare:()=>Xd,AlwaysDepth:()=>Na,AlwaysStencilFunc:()=>zd,AmbientLight:()=>zo,AnimationAction:()=>Jo,AnimationClip:()=>ji,AnimationLoader:()=>ih,AnimationMixer:()=>gh,AnimationObjectGroup:()=>mh,AnimationUtils:()=>nh,ArcCurve:()=>ro,ArrayCamera:()=>qo,ArrowHelper:()=>Bh,AttachedBindMode:()=>Uc,Audio:()=>$o,AudioAnalyser:()=>ph,AudioContext:()=>Yr,AudioListener:()=>dh,AudioLoader:()=>hh,AxesHelper:()=>zh,BackSide:()=>dn,BasicDepthPacking:()=>Od,BasicShadowMap:()=>Np,BatchedMesh:()=>Ja,BezierInterpolant:()=>Do,Bone:()=>Tr,BooleanKeyframeTrack:()=>ci,Box2:()=>Ko,Box3:()=>He,Box3Helper:()=>Fh,BoxGeometry:()=>Zi,BoxHelper:()=>Uh,BufferAttribute:()=>Ae,BufferGeometry:()=>de,BufferGeometryLoader:()=>Wo,ByteType:()=>nu,Cache:()=>Jn,Camera:()=>Ri,CameraHelper:()=>Nh,CanvasTexture:()=>Qc,CapsuleGeometry:()=>eo,CatmullRomCurve3:()=>ao,CineonToneMapping:()=>Kh,CircleGeometry:()=>no,ClampToEdgeWrapping:()=>gn,Clock:()=>Mh,Color:()=>Xt,ColorKeyframeTrack:()=>Gr,ColorManagement:()=>xe,Compatibility:()=>Mm,CompressedArrayTexture:()=>Kc,CompressedCubeTexture:()=>jc,CompressedTexture:()=>ws,CompressedTextureLoader:()=>sh,ConeGeometry:()=>Cr,ConstantAlphaFactor:()=>Rd,ConstantColorFactor:()=>Ed,Controls:()=>Vh,CubeCamera:()=>Xo,CubeDepthTexture:()=>to,CubeReflectionMapping:()=>ii,CubeRefractionMapping:()=>Pi,CubeTexture:()=>$i,CubeTextureLoader:()=>rh,CubeUVReflectionMapping:()=>Us,CubicBezierCurve:()=>Rr,CubicBezierCurve3:()=>oo,CubicInterpolant:()=>Po,CullFaceBack:()=>Hh,CullFaceFront:()=>ud,CullFaceFrontBack:()=>Dp,CullFaceNone:()=>hd,Curve:()=>wn,CurvePath:()=>co,CustomBlending:()=>fd,CustomToneMapping:()=>jh,CylinderGeometry:()=>Er,Cylindrical:()=>Th,Data3DTexture:()=>Ms,DataArrayTexture:()=>bs,DataTexture:()=>_n,DataTextureLoader:()=>ah,DataUtils:()=>kc,DecrementStencilOp:()=>Qp,DecrementWrapStencilOp:()=>em,DefaultLoadingManager:()=>Kd,DepthFormat:()=>Kn,DepthStencilFormat:()=>Li,DepthTexture:()=>ti,DetachedBindMode:()=>Dd,DirectionalLight:()=>Bo,DirectionalLightHelper:()=>Dh,DiscreteInterpolant:()=>Lo,DodecahedronGeometry:()=>io,DoubleSide:()=>Dn,DstAlphaFactor:()=>Md,DstColorFactor:()=>Td,DynamicCopyUsage:()=>gm,DynamicDrawUsage:()=>hm,DynamicReadUsage:()=>fm,EdgesGeometry:()=>so,EllipseCurve:()=>Es,EqualCompare:()=>Gd,EqualDepth:()=>Fa,EqualStencilFunc:()=>rm,EquirectangularReflectionMapping:()=>Kr,EquirectangularRefractionMapping:()=>jr,Euler:()=>kn,EventDispatcher:()=>An,ExternalTexture:()=>wr,ExtrudeGeometry:()=>po,FileLoader:()=>Vn,Float16BufferAttribute:()=>qc,Float32BufferAttribute:()=>qt,FloatType:()=>hn,Fog:()=>Ha,FogExp2:()=>Ga,FramebufferTexture:()=>Jc,FrontSide:()=>Ii,Frustum:()=>li,FrustumArray:()=>Za,GLBufferAttribute:()=>bh,GLSL1:()=>xm,GLSL3:()=>cu,GreaterCompare:()=>Hd,GreaterDepth:()=>Ba,GreaterEqualCompare:()=>Ol,GreaterEqualDepth:()=>Oa,GreaterEqualStencilFunc:()=>cm,GreaterStencilFunc:()=>om,GridHelper:()=>Ph,Group:()=>Mi,HTMLTexture:()=>th,HalfFloatType:()=>Hn,HemisphereLight:()=>Uo,HemisphereLightHelper:()=>Ih,IcosahedronGeometry:()=>mo,ImageBitmapLoader:()=>ch,ImageLoader:()=>Qi,ImageUtils:()=>Va,IncrementStencilOp:()=>jp,IncrementWrapStencilOp:()=>tm,InstancedBufferAttribute:()=>Ai,InstancedBufferGeometry:()=>Ho,InstancedInterleavedBuffer:()=>vh,InstancedMesh:()=>$a,Int16BufferAttribute:()=>Wc,Int32BufferAttribute:()=>Xc,Int8BufferAttribute:()=>Vc,IntType:()=>Qo,InterleavedBuffer:()=>As,InterleavedBufferAttribute:()=>Yi,Interpolant:()=>Ci,InterpolateBezier:()=>Fc,InterpolateDiscrete:()=>pr,InterpolateLinear:()=>ka,InterpolateSmooth:()=>Ea,InterpolationSamplingMode:()=>bm,InterpolationSamplingType:()=>vm,InvertStencilOp:()=>nm,KeepStencilOp:()=>Ca,KeyframeTrack:()=>xn,LOD:()=>Xa,LatheGeometry:()=>go,Layers:()=>Ss,LessCompare:()=>Vd,LessDepth:()=>Ua,LessEqualCompare:()=>Fl,LessEqualDepth:()=>ys,LessEqualStencilFunc:()=>am,LessStencilFunc:()=>sm,Light:()=>ei,LightProbe:()=>Vo,LightShadow:()=>Ls,Line:()=>Qn,Line3:()=>wh,LineBasicMaterial:()=>Ke,LineCurve:()=>Ir,LineCurve3:()=>lo,LineDashedMaterial:()=>Io,LineLoop:()=>Ka,LineSegments:()=>Ln,LinearFilter:()=>Ie,LinearInterpolant:()=>Vr,LinearMipMapLinearFilter:()=>zp,LinearMipMapNearestFilter:()=>Bp,LinearMipmapLinearFilter:()=>si,LinearMipmapNearestFilter:()=>Qr,LinearSRGBColorSpace:()=>gr,LinearToneMapping:()=>Zh,LinearTransfer:()=>_r,Loader:()=>rn,LoaderUtils:()=>qr,LoadingManager:()=>Wr,LoopOnce:()=>Nd,LoopPingPong:()=>Fd,LoopRepeat:()=>Ud,MOUSE:()=>Pp,Material:()=>Ge,MaterialBlending:()=>Up,MaterialLoader:()=>Go,MathUtils:()=>Im,Matrix2:()=>Ah,Matrix3:()=>he,Matrix4:()=>ce,MaxEquation:()=>_d,Mesh:()=>Le,MeshBasicMaterial:()=>jn,MeshDepthMaterial:()=>zr,MeshDistanceMaterial:()=>kr,MeshLambertMaterial:()=>Co,MeshMatcapMaterial:()=>Ro,MeshNormalMaterial:()=>Rs,MeshPhongMaterial:()=>wo,MeshPhysicalMaterial:()=>Ao,MeshStandardMaterial:()=>Br,MeshToonMaterial:()=>Eo,MinEquation:()=>gd,MirroredRepeatWrapping:()=>fr,MixOperation:()=>Pd,MultiplyBlending:()=>qh,MultiplyOperation:()=>Zr,NearestFilter:()=>Pe,NearestMipMapLinearFilter:()=>Op,NearestMipMapNearestFilter:()=>Fp,NearestMipmapLinearFilter:()=>Fs,NearestMipmapNearestFilter:()=>eu,NeutralToneMapping:()=>tu,NeverCompare:()=>kd,NeverDepth:()=>Da,NeverStencilFunc:()=>im,NoBlending:()=>ni,NoColorSpace:()=>di,NoNormalPacking:()=>Yp,NoToneMapping:()=>Gn,NormalAnimationBlendMode:()=>Ul,NormalBlending:()=>Ns,NormalGAPacking:()=>Zp,NormalRGPacking:()=>$p,NotEqualCompare:()=>Wd,NotEqualDepth:()=>za,NotEqualStencilFunc:()=>lm,NumberKeyframeTrack:()=>Is,Object3D:()=>be,ObjectLoader:()=>lh,ObjectSpaceNormalMap:()=>Bd,OctahedronGeometry:()=>Ur,OneFactor:()=>yd,OneMinusConstantAlphaFactor:()=>Id,OneMinusConstantColorFactor:()=>Cd,OneMinusDstAlphaFactor:()=>Sd,OneMinusDstColorFactor:()=>Ad,OneMinusSrcAlphaFactor:()=>$h,OneMinusSrcColorFactor:()=>bd,OrthographicCamera:()=>ts,PCFShadowMap:()=>es,PCFSoftShadowMap:()=>dd,PMREMGenerator:()=>Gl,Path:()=>Ji,PerspectiveCamera:()=>Fe,Plane:()=>On,PlaneGeometry:()=>Ei,PlaneHelper:()=>Oh,PointLight:()=>Oo,PointLightHelper:()=>Rh,Points:()=>ja,PointsMaterial:()=>Ar,PolarGridHelper:()=>Lh,PolyhedronGeometry:()=>wi,PositionalAudio:()=>fh,PropertyBinding:()=>Te,PropertyMixer:()=>Zo,QuadraticBezierCurve:()=>Pr,QuadraticBezierCurve3:()=>Lr,Quaternion:()=>Je,QuaternionKeyframeTrack:()=>Ps,QuaternionLinearInterpolant:()=>No,R11_EAC_Format:()=>dl,RED_GREEN_RGTC2_Format:()=>aa,RED_RGTC1_Format:()=>Ll,REVISION:()=>cd,RG11_EAC_Format:()=>ra,RGBADepthPacking:()=>Wp,RGBAFormat:()=>un,RGBAIntegerFormat:()=>sl,RGBA_ASTC_10x10_Format:()=>wl,RGBA_ASTC_10x5_Format:()=>Sl,RGBA_ASTC_10x6_Format:()=>Tl,RGBA_ASTC_10x8_Format:()=>Al,RGBA_ASTC_12x10_Format:()=>El,RGBA_ASTC_12x12_Format:()=>Cl,RGBA_ASTC_4x4_Format:()=>ml,RGBA_ASTC_5x4_Format:()=>gl,RGBA_ASTC_5x5_Format:()=>_l,RGBA_ASTC_6x5_Format:()=>xl,RGBA_ASTC_6x6_Format:()=>yl,RGBA_ASTC_8x5_Format:()=>vl,RGBA_ASTC_8x6_Format:()=>bl,RGBA_ASTC_8x8_Format:()=>Ml,RGBA_BPTC_Format:()=>Rl,RGBA_ETC2_EAC_Format:()=>ul,RGBA_PVRTC_2BPPV1_Format:()=>ll,RGBA_PVRTC_4BPPV1_Format:()=>ol,RGBA_S3TC_DXT1_Format:()=>na,RGBA_S3TC_DXT3_Format:()=>ia,RGBA_S3TC_DXT5_Format:()=>sa,RGBDepthPacking:()=>Xp,RGBFormat:()=>ou,RGBIntegerFormat:()=>kp,RGB_BPTC_SIGNED_Format:()=>Il,RGB_BPTC_UNSIGNED_Format:()=>Pl,RGB_ETC1_Format:()=>cl,RGB_ETC2_Format:()=>hl,RGB_PVRTC_2BPPV1_Format:()=>al,RGB_PVRTC_4BPPV1_Format:()=>rl,RGB_S3TC_DXT1_Format:()=>ea,RGDepthPacking:()=>qp,RGFormat:()=>Di,RGIntegerFormat:()=>il,RawShaderMaterial:()=>Or,Ray:()=>Ti,Raycaster:()=>$r,RectAreaLight:()=>ko,RedFormat:()=>nl,RedIntegerFormat:()=>ta,ReinhardToneMapping:()=>Jh,RenderObjectRefreshType:()=>Sm,RenderTarget:()=>vr,RenderTarget3D:()=>_h,RepeatWrapping:()=>dr,ReplaceStencilOp:()=>Kp,ReverseSubtractEquation:()=>md,RingGeometry:()=>_o,SIGNED_R11_EAC_Format:()=>fl,SIGNED_RED_GREEN_RGTC2_Format:()=>Nl,SIGNED_RED_RGTC1_Format:()=>Dl,SIGNED_RG11_EAC_Format:()=>pl,SRGBColorSpace:()=>nn,SRGBTransfer:()=>Me,Scene:()=>qi,ShaderChunk:()=>_e,ShaderLib:()=>ri,ShaderMaterial:()=>sn,ShadowMaterial:()=>To,Shape:()=>Ki,ShapeGeometry:()=>xo,ShapePath:()=>kh,ShapeUtils:()=>zn,ShortType:()=>iu,Skeleton:()=>Ya,SkeletonHelper:()=>Ch,SkinnedMesh:()=>qa,Source:()=>Oc,Sphere:()=>Ve,SphereGeometry:()=>Fr,Spherical:()=>Sh,SphericalHarmonics3:()=>Xr,SplineCurve:()=>Dr,SpotLight:()=>Fo,SpotLightHelper:()=>Eh,Sprite:()=>Wa,SpriteMaterial:()=>Sr,SrcAlphaFactor:()=>Yh,SrcAlphaSaturateFactor:()=>wd,SrcColorFactor:()=>vd,StaticCopyUsage:()=>mm,StaticDrawUsage:()=>Bl,StaticReadUsage:()=>dm,StereoCamera:()=>uh,StreamCopyUsage:()=>_m,StreamDrawUsage:()=>um,StreamReadUsage:()=>pm,StringKeyframeTrack:()=>hi,SubtractEquation:()=>pd,SubtractiveBlending:()=>Xh,TOUCH:()=>Lp,TangentSpaceNormalMap:()=>ui,TetrahedronGeometry:()=>yo,Texture:()=>Oe,TextureLoader:()=>oh,TextureSource:()=>Bn,TextureUtils:()=>Gh,Timer:()=>Yo,TimestampQuery:()=>ym,TorusGeometry:()=>vo,TorusKnotGeometry:()=>bo,Triangle:()=>Zn,TriangleFanDrawMode:()=>Hp,TriangleStripDrawMode:()=>Gp,TrianglesDrawMode:()=>Vp,TubeGeometry:()=>Mo,UVMapping:()=>jo,Uint16BufferAttribute:()=>br,Uint32BufferAttribute:()=>Mr,Uint8BufferAttribute:()=>Gc,Uint8ClampedBufferAttribute:()=>Hc,Uniform:()=>xh,UniformsGroup:()=>yh,UniformsLib:()=>Ht,UniformsUtils:()=>Jd,UnsignedByteType:()=>yn,UnsignedInt101111Type:()=>ru,UnsignedInt248Type:()=>Bs,UnsignedInt5999Type:()=>su,UnsignedIntType:()=>vn,UnsignedShort4444Type:()=>tl,UnsignedShort5551Type:()=>el,UnsignedShortType:()=>Os,VSMShadowMap:()=>Ds,Vector2:()=>yt,Vector3:()=>U,Vector4:()=>ve,VectorKeyframeTrack:()=>Hr,VideoFrameTexture:()=>Zc,VideoTexture:()=>Qa,WebGL3DRenderTarget:()=>zc,WebGLArrayRenderTarget:()=>Bc,WebGLCoordinateSystem:()=>Tn,WebGLCubeRenderTarget:()=>Hl,WebGLRenderTarget:()=>We,WebGLRenderer:()=>Wl,WebGLUtils:()=>pg,WebGPUCoordinateSystem:()=>Wi,WebXRController:()=>Ts,WireframeGeometry:()=>So,WrapAroundEnding:()=>mr,ZeroCurvatureEnding:()=>Gi,ZeroFactor:()=>xd,ZeroSlopeEnding:()=>Hi,ZeroStencilOp:()=>Jp,createCanvasElement:()=>qd,error:()=>ee,getConsoleFunction:()=>wm,log:()=>yr,setConsoleFunction:()=>Am,warn:()=>Vt,warnOnce:()=>oi});var cd="186",Pp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,Hh=1,ud=2,Dp=3,Np=0,es=1,dd=2,Ds=3,Ii=0,dn=1,Dn=2,ni=0,Ns=1,Wh=2,Xh=3,qh=4,fd=5,Up=6,ns=100,pd=101,md=102,gd=103,_d=104,xd=200,yd=201,vd=202,bd=203,Yh=204,$h=205,Md=206,Sd=207,Td=208,Ad=209,wd=210,Ed=211,Cd=212,Rd=213,Id=214,Da=0,Na=1,Ua=2,ys=3,Fa=4,Oa=5,Ba=6,za=7,Zr=0,Pd=1,Ld=2,Gn=0,Zh=1,Jh=2,Kh=3,Jr=4,jh=5,Qh=6,tu=7,Uc="attached",Dd="detached",jo=300,ii=301,Pi=302,Kr=303,jr=304,Us=306,dr=1e3,gn=1001,fr=1002,Pe=1003,eu=1004,Fp=1004,Fs=1005,Op=1005,Ie=1006,Qr=1007,Bp=1007,si=1008,zp=1008,yn=1009,nu=1010,iu=1011,Os=1012,Qo=1013,vn=1014,hn=1015,Hn=1016,tl=1017,el=1018,Bs=1020,su=35902,ru=35899,au=1021,ou=1022,un=1023,Kn=1026,Li=1027,nl=1028,ta=1029,Di=1030,il=1031,kp=1032,sl=1033,ea=33776,na=33777,ia=33778,sa=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37488,fl=37489,ra=37490,pl=37491,ml=37808,gl=37809,_l=37810,xl=37811,yl=37812,vl=37813,bl=37814,Ml=37815,Sl=37816,Tl=37817,Al=37818,wl=37819,El=37820,Cl=37821,Rl=36492,Il=36494,Pl=36495,Ll=36283,Dl=36284,aa=36285,Nl=36286,Nd=2200,Ud=2201,Fd=2202,pr=2300,ka=2301,Ea=2302,Fc=2303,Gi=2400,Hi=2401,mr=2402,Ul=2500,lu=2501,Vp=0,Gp=1,Hp=2,Od=3200,Wp=3201,Xp=3202,qp=3203,ui=0,Bd=1,di="",nn="srgb",gr="srgb-linear",_r="linear",Me="srgb",Yp="",$p="rg",Zp="ga",Jp=0,Ca=7680,Kp=7681,jp=7682,Qp=7683,tm=34055,em=34056,nm=5386,im=512,sm=513,rm=514,am=515,om=516,lm=517,cm=518,zd=519,kd=512,Vd=513,Gd=514,Fl=515,Hd=516,Wd=517,Ol=518,Xd=519,Bl=35044,hm=35048,um=35040,dm=35045,fm=35049,pm=35041,mm=35046,gm=35050,_m=35042,xm="100",cu="300 es",Tn=2e3,Wi=2001,ym={COMPUTE:"compute",RENDER:"render"},vm={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},bm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Mm={TEXTURE_COMPARE:"depthTextureCompare"},Sm={NONE:0,SHARED:1,FULL:2};function Ag(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var wg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function hr(s,t){return new wg[s](t)}function Tm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){let s=xr("canvas");return s.style.display="block",s}var vf={},Xi=null;function Am(s){Xi=s}function wm(){return Xi}function yr(...s){let t="THREE."+s.shift();Xi?Xi("log",t,...s):console.log(t,...s)}function Em(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=Em(s);let t="THREE."+s.shift();if(Xi)Xi("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=Em(s);let t="THREE."+s.shift();if(Xi)Xi("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function oi(...s){let t=s.join(" ");t in vf||(vf[t]=!0,Vt(...s))}function Cm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rm={[Da]:Na,[Ua]:Ba,[Fa]:za,[ys]:Oa,[Na]:Da,[Ba]:Ua,[za]:Fa,[Oa]:ys},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=1234567,xs=Math.PI/180,vs=180/Math.PI;function Pn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function Yd(s,t){return(s%t+t)%t}function Eg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Cg(s,t,e){return s!==t?(e-s)/(t-s):0}function Ra(s,t,e){return(1-e)*s+e*t}function Rg(s,t,e,n){return Ra(s,t,1-Math.exp(-e*n))}function Ig(s,t=1){return t-Math.abs(Yd(s,t*2)-t)}function Pg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Lg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Dg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ng(s,t){return s+Math.random()*(t-s)}function Ug(s){return s*(.5-Math.random())}function Fg(s){s!==void 0&&(bf=s);let t=bf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Og(s){return s*xs}function Bg(s){return s*vs}function zg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function kg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gg(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Im={DEG2RAD:xs,RAD2DEG:vs,generateUUID:Pn,clamp:le,euclideanModulo:Yd,mapLinear:Eg,inverseLerp:Cg,lerp:Ra,damp:Rg,pingpong:Ig,smoothstep:Pg,smootherstep:Lg,randInt:Dg,randFloat:Ng,randFloatSpread:Ug,seededRandom:Fg,degToRad:Og,radToDeg:Bg,isPowerOfTwo:zg,ceilPowerOfTwo:kg,floorPowerOfTwo:Vg,setQuaternionFromProperEuler:Gg,normalize:ge,denormalize:mn},yt=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*y;g<0&&(u=-u,f=-f,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),C=Math.sin(S);m=Math.sin(m*S)/C,o=Math.sin(o*S)/C,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mu.copy(this).projectOnVector(t),this.sub(mu)}reflect(t){return this.sub(mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mu=new U,Mf=new Je,he=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=i[0],g=i[3],m=i[6],S=i[1],C=i[4],b=i[7],R=i[2],w=i[5],D=i[8];return r[0]=a*y+o*S+l*R,r[3]=a*g+o*C+l*w,r[6]=a*m+o*b+l*D,r[1]=c*y+h*S+d*R,r[4]=c*g+h*C+d*w,r[7]=c*m+h*b+d*D,r[2]=u*y+f*S+p*R,r[5]=u*g+f*C+p*w,r[8]=u*m+f*b+p*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=u*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gu.makeScale(t,e)),this}rotate(t){return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gu.makeRotation(-t)),this}translate(t,e){return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gu=new he,Sf=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hg(){let s={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?_r:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gr]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:Sf,fromXYZ:Tf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Sf,fromXYZ:Tf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),s}var xe=Hg();function Si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ws,Va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=xr("canvas")),Ws.width=t.width,Ws.height=t.height;let i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wg=0,Bn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_u(i[a].image)):r.push(_u(i[a]))}else r=_u(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function _u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Oc=class extends Bn{constructor(t=null){oi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},Xg=0,xu=new U,Oe=class s extends An{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=gn,i=gn,r=Ie,a=si,o=un,l=yn,c=s.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Pn(),this.name="",this.source=new Bn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=jo;Oe.DEFAULT_ANISOTROPY=1;var ve=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,b=(f+1)/2,R=(m+1)/2,w=(h+u)/4,D=(d+y)/4,x=(p+g)/4;return C>b&&C>R?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=w/n,r=D/n):b>R?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=w/i,r=x/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=D/r,i=x/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vr=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Oe(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Bn(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends vr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Bc=class extends We{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new bs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Ms=class extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},zc=class extends We{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ms(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},ce=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),a=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qg,t,Yg)}lookAt(t,e,n){let i=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Fi.crossVectors(n,Rn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Fi.crossVectors(n,Rn)),Fi.normalize(),ql.crossVectors(Rn,Fi),i[0]=Fi.x,i[4]=ql.x,i[8]=Rn.x,i[1]=Fi.y,i[5]=ql.y,i[9]=Rn.y,i[2]=Fi.z,i[6]=ql.z,i[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],S=n[3],C=n[7],b=n[11],R=n[15],w=i[0],D=i[4],x=i[8],I=i[12],F=i[1],V=i[5],H=i[9],j=i[13],X=i[2],J=i[6],at=i[10],rt=i[14],xt=i[3],it=i[7],pt=i[11],dt=i[15];return r[0]=a*w+o*F+l*X+c*xt,r[4]=a*D+o*V+l*J+c*it,r[8]=a*x+o*H+l*at+c*pt,r[12]=a*I+o*j+l*rt+c*dt,r[1]=h*w+d*F+u*X+f*xt,r[5]=h*D+d*V+u*J+f*it,r[9]=h*x+d*H+u*at+f*pt,r[13]=h*I+d*j+u*rt+f*dt,r[2]=p*w+y*F+g*X+m*xt,r[6]=p*D+y*V+g*J+m*it,r[10]=p*x+y*H+g*at+m*pt,r[14]=p*I+y*j+g*rt+m*dt,r[3]=S*w+C*F+b*X+R*xt,r[7]=S*D+C*V+b*J+R*it,r[11]=S*x+C*H+b*at+R*pt,r[15]=S*I+C*j+b*rt+R*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],y=t[7],g=t[11],m=t[15],S=l*f-c*u,C=o*f-c*d,b=o*u-l*d,R=a*f-c*h,w=a*u-l*h,D=a*d-o*h;return e*(y*S-g*C+m*b)-n*(p*S-g*R+m*w)+i*(p*C-y*R+m*D)-r*(p*b-y*w+g*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],y=t[13],g=t[14],m=t[15],S=e*o-n*a,C=e*l-i*a,b=e*c-r*a,R=n*l-i*o,w=n*c-r*o,D=i*c-r*l,x=h*y-d*p,I=h*g-u*p,F=h*m-f*p,V=d*g-u*y,H=d*m-f*y,j=u*m-f*g,X=S*j-C*H+b*V+R*F-w*I+D*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/X;return t[0]=(o*j-l*H+c*V)*J,t[1]=(i*H-n*j-r*V)*J,t[2]=(y*D-g*w+m*R)*J,t[3]=(u*w-d*D-f*R)*J,t[4]=(l*F-a*j-c*I)*J,t[5]=(e*j-i*F+r*I)*J,t[6]=(g*b-p*D-m*C)*J,t[7]=(h*D-u*b+f*C)*J,t[8]=(a*H-o*F+c*x)*J,t[9]=(n*F-e*H-r*x)*J,t[10]=(p*w-y*b+m*S)*J,t[11]=(d*b-h*w-f*S)*J,t[12]=(o*I-a*V-l*x)*J,t[13]=(e*V-n*I+i*x)*J,t[14]=(y*C-p*R-g*S)*J,t[15]=(h*R-d*C+u*S)*J,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,y=a*h,g=a*d,m=o*d,S=l*c,C=l*h,b=l*d,R=n.x,w=n.y,D=n.z;return i[0]=(1-(y+m))*R,i[1]=(f+b)*R,i[2]=(p-C)*R,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(u+m))*w,i[6]=(g+S)*w,i[7]=0,i[8]=(p+C)*D,i[9]=(g-S)*D,i[10]=(1-(u+y))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xs.set(i[0],i[1],i[2]).length(),o=Xs.set(i[4],i[5],i[6]).length(),l=Xs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xn.copy(this);let c=1/a,h=1/o,d=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,e.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Tn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Tn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Wi)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Tn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Tn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===Wi)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xs=new U,Xn=new ce,qg=new U(0,0,0),Yg=new U(1,1,1),Fi=new U,ql=new U,Rn=new U,Af=new ce,wf=new Je,kn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Af,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wf.setFromEuler(this),this.setFromQuaternion(wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$g=0,Ef=new U,qs=new Je,mi=new ce,Yl=new U,fa=new U,Zg=new U,Jg=new Je,Cf=new U(1,0,0),Rf=new U(0,1,0),If=new U(0,0,1),Pf={type:"added"},Kg={type:"removed"},Ys={type:"childadded",child:null},yu={type:"childremoved",child:null},be=class s extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new kn,n=new Je,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new he}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Cf,t)}rotateY(t){return this.rotateOnAxis(Rf,t)}rotateZ(t){return this.rotateOnAxis(If,t)}translateOnAxis(t,e){return Ef.copy(t).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cf,t)}translateY(t){return this.translateOnAxis(Rf,t)}translateZ(t){return this.translateOnAxis(If,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yl.copy(t):Yl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(fa,Yl,this.up):mi.lookAt(Yl,fa,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),qs.setFromRotationMatrix(mi),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kg),yu.child=t,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,Zg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Jg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};be.DEFAULT_UP=new U(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},$l={h:0,s:0,l:0};function vu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=Yd(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vu(a,r,t+1/3),this.g=vu(a,r,t),this.b=vu(a,r,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=Pm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return xe.workingToColorSpace(ln.copy(this),t),Math.round(le(ln.r*255,0,255))*65536+Math.round(le(ln.g*255,0,255))*256+Math.round(le(ln.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,r=ln.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=nn){xe.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL($l);let n=Ra(Oi.h,$l.h,e),i=Ra(Oi.s,$l.s,e),r=Ra(Oi.l,$l.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Xt;Xt.NAMES=Pm;var Ga=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ha=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new U,gi=new U,bu=new U,_i=new U,$s=new U,Zs=new U,Lf=new U,Mu=new U,Su=new U,Tu=new U,Au=new ve,wu=new ve,Eu=new ve,Zn=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),gi.subVectors(n,e),bu.subVectors(t,e);let a=qn.dot(qn),o=qn.dot(gi),l=qn.dot(bu),c=gi.dot(gi),h=gi.dot(bu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Au.setScalar(0),wu.setScalar(0),Eu.setScalar(0),Au.fromBufferAttribute(t,e),wu.fromBufferAttribute(t,n),Eu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Au,r.x),a.addScaledVector(wu,r.y),a.addScaledVector(Eu,r.z),a}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),gi.subVectors(t,e),qn.cross(gi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;$s.subVectors(i,n),Zs.subVectors(r,n),Mu.subVectors(t,n);let l=$s.dot(Mu),c=Zs.dot(Mu);if(l<=0&&c<=0)return e.copy(n);Su.subVectors(t,i);let h=$s.dot(Su),d=Zs.dot(Su);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector($s,a);Tu.subVectors(t,r);let f=$s.dot(Tu),p=Zs.dot(Tu);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Zs,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Lf.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(Lf,o);let m=1/(g+y+u);return a=y*m,o=u*m,e.copy(n).addScaledVector($s,a).addScaledVector(Zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},He=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zl.copy(n.boundingBox)),Zl.applyMatrix4(t.matrixWorld),this.union(Zl)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Jl.subVectors(this.max,pa),Js.subVectors(t.a,pa),Ks.subVectors(t.b,pa),js.subVectors(t.c,pa),Bi.subVectors(Ks,Js),zi.subVectors(js,Ks),as.subVectors(Js,js);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-as.z,as.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,as.z,0,-as.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-as.y,as.x,0];return!Cu(e,Js,Ks,js,Jl)||(e=[1,0,0,0,1,0,0,0,1],!Cu(e,Js,Ks,js,Jl))?!1:(Kl.crossVectors(Bi,zi),e=[Kl.x,Kl.y,Kl.z],Cu(e,Js,Ks,js,Jl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new U,new U,new U,new U,new U,new U,new U,new U],Yn=new U,Zl=new He,Js=new U,Ks=new U,js=new U,Bi=new U,zi=new U,as=new U,pa=new U,Jl=new U,Kl=new U,os=new U;function Cu(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){os.fromArray(s,r);let o=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var bi=Qg();function Qg(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Sn(s){Math.abs(s)>65504&&Vt("DataUtils.toHalfFloat(): Value out of range."),s=le(s,-65504,65504),bi.floatView[0]=s;let t=bi.uint32View[0],e=t>>23&511;return bi.baseTable[e]+((t&8388607)>>bi.shiftTable[e])}function Aa(s){let t=s>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[t]+(s&1023)]+bi.exponentTable[t],bi.floatView[0]}var kc=class{static toHalfFloat(t){return Sn(t)}static fromHalfFloat(t){return Aa(t)}},ke=new U,jl=new yt,t0=0,Ae=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jl.fromBufferAttribute(this,e),jl.applyMatrix3(t),this.setXY(e,jl.x,jl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Vc=class extends Ae{constructor(t,e,n){super(new Int8Array(t),e,n)}},Gc=class extends Ae{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Hc=class extends Ae{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},Wc=class extends Ae{constructor(t,e,n){super(new Int16Array(t),e,n)}},br=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Xc=class extends Ae{constructor(t,e,n){super(new Int32Array(t),e,n)}},Mr=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}},qc=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Aa(this.array[t*this.itemSize]);return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=Sn(e),this}getY(t){let e=Aa(this.array[t*this.itemSize+1]);return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=Sn(e),this}getZ(t){let e=Aa(this.array[t*this.itemSize+2]);return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=Sn(e),this}getW(t){let e=Aa(this.array[t*this.itemSize+3]);return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=Sn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=Sn(e),this.array[t+1]=Sn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=Sn(e),this.array[t+1]=Sn(n),this.array[t+2]=Sn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=Sn(e),this.array[t+1]=Sn(n),this.array[t+2]=Sn(i),this.array[t+3]=Sn(r),this}},qt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},e0=new He,ma=new U,Ru=new U,Ve=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):e0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ru.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(Ru)),this.expandByPoint(ma.copy(t.center).sub(Ru))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},n0=0,Fn=new ce,Iu=new be,Qs=new U,In=new He,ga=new He,Ze=new U,de=class s extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ag(t)?Mr:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Iu.lookAt(t),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new He);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ve);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(In.min,ga.min),In.expandByPoint(Ze),Ze.addVectors(In.max,ga.max),In.expandByPoint(Ze)):(In.expandByPoint(ga.min),In.expandByPoint(ga.max))}In.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(t,c),Ze.add(Qs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new U,l[x]=new U;let c=new U,h=new U,d=new U,u=new yt,f=new yt,p=new yt,y=new U,g=new U;function m(x,I,F){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,F),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,F),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let V=1/(f.x*p.y-p.x*f.y);isFinite(V)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(V),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(V),o[x].add(y),o[I].add(y),o[F].add(y),l[x].add(g),l[I].add(g),l[F].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,I=S.length;x<I;++x){let F=S[x],V=F.start,H=F.count;for(let j=V,X=V+H;j<X;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let C=new U,b=new U,R=new U,w=new U;function D(x){R.fromBufferAttribute(i,x),w.copy(R);let I=o[x];C.copy(I),C.sub(R.multiplyScalar(R.dot(I))).normalize(),b.crossVectors(w,I);let V=b.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,V)}for(let x=0,I=S.length;x<I;++x){let F=S[x],V=F.start,H=F.count;for(let j=V,X=V+H;j<X;j+=3)D(t.getX(j+0)),D(t.getX(j+1)),D(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Ae(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},pn=new U,Yi=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pu=new U,i0=new U,s0=new he,On=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Pu.subVectors(n,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||s0.getNormalMatrix(t),i=this.coplanarPoint(Pu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},r0=0,Ge=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Ns,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=$h,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new On().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sr=class extends Ge{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tr,_a=new U,er=new U,nr=new U,ir=new yt,xa=new yt,Lm=new ce,Ql=new U,ya=new U,tc=new U,Df=new yt,Lu=new yt,Nf=new yt,Wa=class extends be{constructor(t=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new As(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Yi(n,3,0,!1)),tr.setAttribute("uv",new Yi(n,2,3,!1))}this.geometry=tr,this.material=t,this.center=new yt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Lm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ec(Ql.set(-.5,-.5,0),nr,a,er,i,r),ec(ya.set(.5,-.5,0),nr,a,er,i,r),ec(tc.set(.5,.5,0),nr,a,er,i,r),Df.set(0,0),Lu.set(1,0),Nf.set(1,1);let o=t.ray.intersectTriangle(Ql,ya,tc,!1,_a);if(o===null&&(ec(ya.set(-.5,.5,0),nr,a,er,i,r),Lu.set(0,1),o=t.ray.intersectTriangle(Ql,tc,ya,!1,_a),o===null))return;let l=t.ray.origin.distanceTo(_a);l<t.near||l>t.far||e.push({distance:l,point:_a.clone(),uv:Zn.getInterpolation(_a,Ql,ya,tc,Df,Lu,Nf,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ec(s,t,e,n,i,r){ir.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(xa.x=r*ir.x-i*ir.y,xa.y=i*ir.x+r*ir.y):xa.copy(ir),s.copy(t),s.x+=xa.x,s.y+=xa.y,s.applyMatrix4(Lm)}var nc=new U,Uf=new U,Xa=class extends be{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){nc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(nc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){nc.setFromMatrixPosition(t.matrixWorld),Uf.setFromMatrixPosition(this.matrixWorld);let n=nc.distanceTo(Uf)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},yi=new U,Du=new U,ic=new U,sc=new U,Ti=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Du.copy(t).add(e).multiplyScalar(.5),ic.copy(e).sub(t).normalize(),sc.copy(this.origin).sub(Du);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ic),o=sc.dot(this.direction),l=-sc.dot(ic),c=sc.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Du).addScaledVector(ic,u),f}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,y=e.y-a.y,g=e.z-a.z,m=n.x-a.x,S=n.y-a.y,C=n.z-a.z,b=Math.abs(l),R=Math.abs(c),w=Math.abs(h),D,x,I,F,V,H,j,X,J,at,rt,xt;if(b>=R&&b>=w?(I=l,H=d,J=p,xt=m,l>=0?(D=c,x=h,F=u,V=f,j=y,X=g,at=S,rt=C):(D=h,x=c,F=f,V=u,j=g,X=y,at=C,rt=S)):R>=w?(I=c,H=u,J=y,xt=S,c>=0?(D=h,x=l,F=f,V=d,j=g,X=p,at=C,rt=m):(D=l,x=h,F=d,V=f,j=p,X=g,at=m,rt=C)):(I=h,H=f,J=g,xt=C,h>=0?(D=l,x=c,F=d,V=u,j=p,X=y,at=m,rt=S):(D=c,x=l,F=u,V=d,j=y,X=p,at=S,rt=m)),I===0)return null;let it=D/I,pt=x/I,dt=1/I,Yt=F-it*H,Wt=V-pt*H,fe=j-it*J,St=X-pt*J,se=at-it*xt,st=rt-pt*xt,ft=se*St-st*fe,It=Yt*st-Wt*se,Lt=fe*Wt-St*Yt;if(i){if(ft<0||It<0||Lt<0)return null}else if((ft<0||It<0||Lt<0)&&(ft>0||It>0||Lt>0))return null;let Dt=ft+It+Lt;if(Dt===0)return null;let ne=dt*(ft*H+It*J+Lt*xt);return(Dt>0?ne<0:ne>0)?null:this.at(ne/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jn=class extends Ge{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ff=new ce,ls=new Ti,rc=new Ve,Of=new U,ac=new U,oc=new U,lc=new U,Nu=new U,cc=new U,Bf=new U,hc=new U,Le=class extends be{constructor(t=new de,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){cc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Nu.fromBufferAttribute(d,t),a?cc.addScaledVector(Nu,h):cc.addScaledVector(Nu.sub(e),h))}e.add(cc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(rc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(rc,Of)===null||ls.origin.distanceToSquared(Of)>(t.far-t.near)**2))&&(Ff.copy(r).invert(),ls.copy(t.ray).applyMatrix4(Ff),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),C=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,R=C;b<R;b+=3){let w=o.getX(b),D=o.getX(b+1),x=o.getX(b+2);i=uc(this,m,t,n,c,h,d,w,D,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let S=o.getX(g),C=o.getX(g+1),b=o.getX(g+2);i=uc(this,a,t,n,c,h,d,S,C,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),C=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,R=C;b<R;b+=3){let w=b,D=b+1,x=b+2;i=uc(this,m,t,n,c,h,d,w,D,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let S=g,C=g+1,b=g+2;i=uc(this,a,t,n,c,h,d,S,C,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function a0(s,t,e,n,i,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ii,o),l===null)return null;hc.copy(o),hc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(hc);return c<e.near||c>e.far?null:{distance:c,point:hc.clone(),object:s}}function uc(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ac),s.getVertexPosition(l,oc),s.getVertexPosition(c,lc);let h=a0(s,t,e,n,ac,oc,lc,Bf);if(h){let d=new U;Zn.getBarycoord(Bf,ac,oc,lc,d),i&&(h.uv=Zn.getInterpolatedAttribute(i,o,l,c,d,new yt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,d,new yt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Zn.getNormal(ac,oc,lc,u.normal),h.face=u,h.barycoord=d}return h}var va=new ve,zf=new ve,kf=new ve,o0=new ve,Vf=new ce,dc=new U,Uu=new Ve,Gf=new ce,Fu=new Ti,qa=class extends Le{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new ce,this.bindMatrixInverse=new ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new He),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,dc),this.boundingBox.expandByPoint(dc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ve),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,dc),this.boundingSphere.expandByPoint(dc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uu.copy(this.boundingSphere),Uu.applyMatrix4(i),t.ray.intersectsSphere(Uu)!==!1&&(Gf.copy(i).invert(),Fu.copy(t.ray).applyMatrix4(Gf),!(this.boundingBox!==null&&Fu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Fu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;zf.fromBufferAttribute(i.attributes.skinIndex,t),kf.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(va.copy(e),e.set(0,0,0,0)):(va.set(...e,1),e.set(0,0,0)),va.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=kf.getComponent(r);if(a!==0){let o=zf.getComponent(r);Vf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(o0.copy(va).applyMatrix4(Vf),a)}}return e.isVector4&&(e.w=va.w),e.applyMatrix4(this.bindMatrixInverse)}},Tr=class extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}},_n=class extends Oe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Pe,h=Pe,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hf=new ce,l0=new ce,Ya=class s{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ce;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:l0;Hf.multiplyMatrices(o,e[r]),Hf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new _n(e,t,t,un,hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=e[r];a===void 0&&(Vt("Skeleton: No bone found with UUID:",r),a=new Tr),this.bones.push(a),this.boneInverses.push(new ce().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Ai=class extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new ce,Wf=new ce,fc=[],Xf=new He,c0=new ce,ba=new Le,Ma=new Ve,$a=class extends Le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,c0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new He),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Xf.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(Xf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ve),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Ma.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),t.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),Wf.multiplyMatrices(n,sr),ba.matrixWorld=Wf,ba.raycast(t,fc);for(let a=0,o=fc.length;a<o;a++){let l=fc[a];l.instanceId=r,l.object=this,e.push(l)}fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _n(new Float32Array(i*this.count),i,this.count,nl,hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new Ve,h0=new yt(.5,.5),pc=new U,li=class{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,a=new On){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],y=r[9],g=r[10],m=r[11],S=r[12],C=r[13],b=r[14],R=r[15];if(i[0].setComponents(c-a,f-h,m-p,R-S).normalize(),i[1].setComponents(c+a,f+h,m+p,R+S).normalize(),i[2].setComponents(c+o,f+d,m+y,R+C).normalize(),i[3].setComponents(c-o,f-d,m-y,R-C).normalize(),n)i[4].setComponents(l,u,g,b).normalize(),i[5].setComponents(c-l,f-u,m-g,R-b).normalize();else if(i[4].setComponents(c-l,f-u,m-g,R-b).normalize(),e===Tn)i[5].setComponents(c+l,f+u,m+g,R+b).normalize();else if(e===Wi)i[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=h0.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(pc.x=i.normal.x>0?t.max.x:t.min.x,pc.y=i.normal.y>0?t.max.y:t.min.y,pc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qf=new ce,Za=class s{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];qf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new li),n[i].setFromProjectionMatrix(qf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new li),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};function Ou(s,t){return s-t}function u0(s,t){return s.z-t.z}function d0(s,t){return t.z-s.z}var Ku=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Mn=new ce,f0=new Xt(1,1,1),p0=new li,m0=new Za,mc=new He,hs=new Ve,Sa=new U,Yf=new U,g0=new U,Bu=new Ku,cn=new Le,gc=[];function _0(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function us(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}var Ja=class extends Le{constructor(t,e,n=e*2,i){super(new de,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new _n(e,t,t,un,hn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new _n(e,t,t,ta,vn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new _n(e,t,t,un,hn);n.colorSpace=xe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new Ae(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Ae(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new He);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Mn),this.getBoundingBoxAt(r,mc).applyMatrix4(Mn),t.union(mc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ve);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Mn),this.getBoundingSphereAt(r,hs).applyMatrix4(Mn),t.union(hs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ou),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Mn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(f0.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ou),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let d=e.getAttribute(h),u=n.getAttribute(h);_0(d,u,l);let f=d.itemSize;for(let p=d.count,y=c;p<y;p++){let g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){let h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,y=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+y;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:y,itemSize:g}=p;y.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new He,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Sa.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Ve;this.getBoundingBoxAt(t,mc),mc.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Sa.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(Sa))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Ou);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);us(this._multiDrawCounts,i),us(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),us(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),us(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),us(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new de,this._initializeGeometry(r));let a=this.geometry;r.index&&us(r.index.array,a.index.array);for(let o in r.attributes)us(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;cn.material=this.material,cn.geometry.index=a.index,cn.geometry.attributes=a.attributes,cn.geometry.boundingBox===null&&(cn.geometry.boundingBox=new He),cn.geometry.boundingSphere===null&&(cn.geometry.boundingSphere=new Ve);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=i[c];cn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,cn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,cn.geometry.boundingBox),this.getBoundingSphereAt(c,cn.geometry.boundingSphere),cn.raycast(t,gc);for(let d=0,u=gc.length;d<u;d++){let f=gc[d];f.object=this,f.batchId=o,e.push(f)}gc.length=0}cn.material=null,cn.geometry.index=null,cn.geometry.attributes={},cn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,y=p.image.data,g=n.isArrayCamera?m0:p0;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(Mn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Mn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Mn.copy(this.matrixWorld).invert(),Sa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Mn),Yf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Mn);for(let b=0,R=c.length;b<R;b++)if(c[b].visible&&c[b].active){let w=c[b].geometryIndex;this.getMatrixAt(b,Mn),this.getBoundingSphereAt(w,hs).applyMatrix4(Mn);let D=!1;if(f&&(D=!g.intersectsSphere(hs)),!D){let x=u[w],I=g0.subVectors(hs.center,Sa).dot(Yf);Bu.push(x.start,x.count,I,b)}}let S=Bu.list,C=this.customSort;C===null?S.sort(r.transparent?d0:u0):C.call(this,S,n);for(let b=0,R=S.length;b<R;b++){let w=S[b];h[m]=w.start*o*l,d[m]=w.count*l,y[m]=w.index,m++}Bu.reset()}else for(let S=0,C=c.length;S<C;S++)if(c[S].visible&&c[S].active){let b=c[S].geometryIndex,R=!1;if(f&&(this.getMatrixAt(S,Mn),this.getBoundingSphereAt(b,hs).applyMatrix4(Mn),R=!g.intersectsSphere(hs)),!R){let w=u[b];h[m]=w.start*o*l,d[m]=w.count*l,y[m]=S,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}},Ke=class extends Ge{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yc=new U,$c=new U,$f=new ce,Ta=new Ti,_c=new Ve,zu=new U,Zf=new U,Qn=class extends be{constructor(t=new de,e=new Ke){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Yc.fromBufferAttribute(e,i-1),$c.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yc.distanceTo($c);t.setAttribute("lineDistance",new qt(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(i),_c.radius+=r,t.ray.intersectsSphere(_c)===!1)return;$f.copy(i).invert(),Ta.copy(t.ray).applyMatrix4($f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,g=p-1;y<g;y+=c){let m=h.getX(y),S=h.getX(y+1),C=xc(this,t,Ta,l,m,S,y);C&&e.push(C)}if(this.isLineLoop){let y=h.getX(p-1),g=h.getX(f),m=xc(this,t,Ta,l,y,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=f,g=p-1;y<g;y+=c){let m=xc(this,t,Ta,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=xc(this,t,Ta,l,p-1,f,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xc(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Yc.fromBufferAttribute(o,i),$c.fromBufferAttribute(o,r),e.distanceSqToSegment(Yc,$c,zu,Zf)>n)return;zu.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(zu);if(!(c<t.near||c>t.far))return{distance:c,point:Zf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Jf=new U,Kf=new U,Ln=class extends Qn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Jf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jf.distanceTo(Kf);t.setAttribute("lineDistance",new qt(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends Qn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ar=class extends Ge{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jf=new ce,ju=new Ti,yc=new Ve,vc=new U,ja=class extends be{constructor(t=new de,e=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(i),yc.radius+=r,t.ray.intersectsSphere(yc)===!1)return;jf.copy(i).invert(),ju.copy(t.ray).applyMatrix4(jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,y=f;p<y;p++){let g=c.getX(p);vc.fromBufferAttribute(d,g),Qf(vc,g,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,y=f;p<y;p++)vc.fromBufferAttribute(d,p),Qf(vc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qf(s,t,e,n,i,r,a){let o=ju.distanceSqToPoint(s);if(o<e){let l=new U;ju.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Qa=class extends Oe{constructor(t,e,n,i,r=Ie,a=Ie,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Zc=class extends Qa{constructor(t,e,n,i,r,a,o,l){super({},t,e,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},Jc=class extends Oe{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Pe,this.minFilter=Pe,this.generateMipmaps=!1,this.needsUpdate=!0}},ws=class extends Oe{constructor(t,e,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},Kc=class extends ws{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=gn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},jc=class extends ws{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},$i=class extends Oe{constructor(t=[],e=ii,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qc=class extends Oe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},th=class extends Oe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},ti=class extends Oe{constructor(t,e,n=vn,i,r,a,o=Pe,l=Pe,c,h=Kn,d=1){if(h!==Kn&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},to=class extends ti{constructor(t,e=vn,n=ii,i,r,a=Pe,o=Pe,l,c=Kn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zi=class s extends de{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function p(y,g,m,S,C,b,R,w,D,x,I){let F=b/D,V=R/x,H=b/2,j=R/2,X=w/2,J=D+1,at=x+1,rt=0,xt=0,it=new U;for(let pt=0;pt<at;pt++){let dt=pt*V-j;for(let Yt=0;Yt<J;Yt++){let Wt=Yt*F-H;it[y]=Wt*S,it[g]=dt*C,it[m]=X,c.push(it.x,it.y,it.z),it[y]=0,it[g]=0,it[m]=w>0?1:-1,h.push(it.x,it.y,it.z),d.push(Yt/D),d.push(1-pt/x),rt+=1}}for(let pt=0;pt<x;pt++)for(let dt=0;dt<D;dt++){let Yt=u+dt+J*pt,Wt=u+dt+J*(pt+1),fe=u+(dt+1)+J*(pt+1),St=u+(dt+1)+J*pt;l.push(Yt,Wt,St),l.push(Wt,fe,St),xt+=6}o.addGroup(f,xt,I),f+=xt,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},eo=class s extends de{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,y=i+1,g=new U,m=new U;for(let S=0;S<=p;S++){let C=0,b=0,R=0,w=0;if(S<=n){let I=S/n,F=I*Math.PI/2;b=-h-t*Math.cos(F),R=t*Math.sin(F),w=-t*Math.cos(F),C=I*d}else if(S<=n+r){let I=(S-n)/r;b=-h+I*e,R=t,w=0,C=d+I*u}else{let I=(S-n-r)/n,F=I*Math.PI/2;b=h+t*Math.sin(F),R=t*Math.cos(F),w=t*Math.sin(F),C=d+u+I*d}let D=Math.max(0,Math.min(1,C/f)),x=0;S===0?x=.5/i:S===p&&(x=-.5/i);for(let I=0;I<=i;I++){let F=I/i,V=F*Math.PI*2,H=Math.sin(V),j=Math.cos(V);m.x=-R*j,m.y=b,m.z=R*H,o.push(m.x,m.y,m.z),g.set(-R*j,w,R*H),g.normalize(),l.push(g.x,g.y,g.z),c.push(F+x,D)}if(S>0){let I=(S-1)*y;for(let F=0;F<i;F++){let V=I+F,H=I+F+1,j=S*y+F,X=S*y+F+1;a.push(V,H,j),a.push(H,X,j)}}}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},no=class s extends de{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Er=class s extends de{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,y=[],g=n/2,m=0;S(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function S(){let b=new U,R=new U,w=0,D=(e-t)/n;for(let x=0;x<=r;x++){let I=[],F=x/r,V=F*(e-t)+t;for(let H=0;H<=i;H++){let j=H/i,X=j*l+o,J=Math.sin(X),at=Math.cos(X);R.x=V*J,R.y=-F*n+g,R.z=V*at,d.push(R.x,R.y,R.z),b.set(J,D,at).normalize(),u.push(b.x,b.y,b.z),f.push(j,1-F),I.push(p++)}y.push(I)}for(let x=0;x<i;x++)for(let I=0;I<r;I++){let F=y[I][x],V=y[I+1][x],H=y[I+1][x+1],j=y[I][x+1];(t>0||I!==0)&&(h.push(F,V,j),w+=3),(e>0||I!==r-1)&&(h.push(V,H,j),w+=3)}c.addGroup(m,w,0),m+=w}function C(b){let R=p,w=new yt,D=new U,x=0,I=b===!0?t:e,F=b===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,g*F,0),u.push(0,F,0),f.push(.5,.5),p++;let V=p;for(let H=0;H<=i;H++){let X=H/i*l+o,J=Math.cos(X),at=Math.sin(X);D.x=I*at,D.y=g*F,D.z=I*J,d.push(D.x,D.y,D.z),u.push(0,F,0),w.x=J*.5+.5,w.y=at*.5*F+.5,f.push(w.x,w.y),p++}for(let H=0;H<i;H++){let j=R+H,X=V+H;b===!0?h.push(X,X+1,j):h.push(X+1,X,j),x+=3}c.addGroup(m,x,b===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class s extends Er{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class s extends de{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let C=new U,b=new U,R=new U;for(let w=0;w<e.length;w+=3)f(e[w+0],C),f(e[w+1],b),f(e[w+2],R),l(C,b,R,S)}function l(S,C,b,R){let w=R+1,D=[];for(let x=0;x<=w;x++){D[x]=[];let I=S.clone().lerp(b,x/w),F=C.clone().lerp(b,x/w),V=w-x;for(let H=0;H<=V;H++)H===0&&x===w?D[x][H]=I:D[x][H]=I.clone().lerp(F,H/V)}for(let x=0;x<w;x++)for(let I=0;I<2*(w-x)-1;I++){let F=Math.floor(I/2);I%2===0?(u(D[x][F+1]),u(D[x+1][F]),u(D[x][F])):(u(D[x][F+1]),u(D[x+1][F+1]),u(D[x+1][F]))}}function c(S){let C=new U;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(S),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function h(){let S=new U;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let b=g(S)/2/Math.PI+.5,R=m(S)/Math.PI+.5;a.push(b,1-R)}p(),d()}function d(){for(let S=0;S<a.length;S+=6){let C=a[S+0],b=a[S+2],R=a[S+4],w=Math.max(C,b,R),D=Math.min(C,b,R);w>.9&&D<.1&&(C<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,C){let b=S*3;C.x=t[b+0],C.y=t[b+1],C.z=t[b+2]}function p(){let S=new U,C=new U,b=new U,R=new U,w=new yt,D=new yt,x=new yt;for(let I=0,F=0;I<r.length;I+=9,F+=6){S.set(r[I+0],r[I+1],r[I+2]),C.set(r[I+3],r[I+4],r[I+5]),b.set(r[I+6],r[I+7],r[I+8]),w.set(a[F+0],a[F+1]),D.set(a[F+2],a[F+3]),x.set(a[F+4],a[F+5]),R.copy(S).add(C).add(b).divideScalar(3);let V=g(R);y(w,F+0,S,V),y(D,F+2,C,V),y(x,F+4,b,V)}}function y(S,C,b,R){R<0&&S.x===1&&(a[C]=S.x-1),b.x===0&&b.z===0&&(a[C]=R/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},io=class s extends wi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},bc=new U,Mc=new U,ku=new U,Sc=new Zn,so=class extends de{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(xs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:y,b:g,c:m}=Sc;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Sc.getNormal(ku),d[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let C=(S+1)%3,b=d[S],R=d[C],w=Sc[h[S]],D=Sc[h[C]],x=`${b}_${R}`,I=`${R}_${b}`;I in u&&u[I]?(ku.dot(u[I].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(D.x,D.y,D.z)),u[I]=null):x in u||(u[x]={index0:c[S],index1:c[C],normal:ku.clone()})}}for(let p in u)if(u[p]){let{index0:y,index1:g}=u[p];bc.fromBufferAttribute(o,y),Mc.fromBufferAttribute(o,g),f.push(bc.x,bc.y,bc.z),f.push(Mc.x,Mc.y,Mc.z)}this.setAttribute("position",new qt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new yt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],r=[],a=[],o=new U,l=new ce;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(le(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Es=class extends wn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new yt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ro=class extends Es{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $d(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var tp=new U,ep=new U,Vu=new $d,Gu=new $d,Hu=new $d,ao=class extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ep.subVectors(i[0],i[1]).add(i[0]),c=ep);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(tp.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=tp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Vu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,y,g),Gu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,y,g),Hu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(Vu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Gu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Vu.calc(l),Gu.calc(l),Hu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function np(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function x0(s,t){let e=1-s;return e*e*t}function y0(s,t){return 2*(1-s)*s*t}function v0(s,t){return s*s*t}function Ia(s,t,e,n){return x0(s,t)+y0(s,e)+v0(s,n)}function b0(s,t){let e=1-s;return e*e*e*t}function M0(s,t){let e=1-s;return 3*e*e*s*t}function S0(s,t){return 3*(1-s)*s*s*t}function T0(s,t){return s*s*s*t}function Pa(s,t,e,n,i){return b0(s,t)+M0(s,e)+S0(s,n)+T0(s,i)}var Rr=class extends wn{constructor(t=new yt,e=new yt,n=new yt,i=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(t,i.x,r.x,a.x,o.x),Pa(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends wn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(t,i.x,r.x,a.x,o.x),Pa(t,i.y,r.y,a.y,o.y),Pa(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends wn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends wn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends wn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ia(t,i.x,r.x,a.x),Ia(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends wn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ia(t,i.x,r.x,a.x),Ia(t,i.y,r.y,a.y),Ia(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(np(o,l.x,c.x,h.x,d.x),np(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new yt().fromArray(i))}return this}},eh=Object.freeze({__proto__:null,ArcCurve:ro,CatmullRomCurve3:ao,CubicBezierCurve:Rr,CubicBezierCurve3:oo,EllipseCurve:Es,LineCurve:Ir,LineCurve3:lo,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:Lr,SplineCurve:Dr}),co=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new eh[i.type]().fromJSON(i))}return this}},Ji=class extends co{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ir(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Pr(this.currentPoint.clone(),new yt(t,e),new yt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Rr(this.currentPoint.clone(),new yt(t,e),new yt(n,i),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Dr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Es(t,e,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ki=class extends Ji{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ji().fromJSON(i))}return this}};function A0(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Dm(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=I0(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<i;u+=e){let f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ho(r,a,e,o,l,c,0),a}function Dm(s,t,e,n,i){let r;if(i===V0(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=ip(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ip(a/n|0,s[a],s[a+1],r);return r&&Nr(r,r.next)&&(fo(r),r=r.next),r}function Cs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Nr(e,e.next)||Ne(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(s,t,e,n,i,r,a){if(!s)return;!a&&r&&U0(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?E0(s,n,i,r):w0(s)){t.push(l.i,s.i,c.i),fo(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=C0(Cs(s),t),ho(s,t,e,n,i,r,2)):a===2&&R0(s,t,e,n,i,r):ho(Cs(s),t,e,n,i,r,1);break}}}function w0(s){let t=s.prev,e=s,n=s.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&wa(i,o,r,l,a,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function E0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Ne(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),y=Math.max(o,l,c),g=Math.max(h,d,u),m=Qu(f,p,t,e,n),S=Qu(y,g,t,e,n),C=s.prevZ,b=s.nextZ;for(;C&&C.z>=m&&b&&b.z<=S;){if(C.x>=f&&C.x<=y&&C.y>=p&&C.y<=g&&C!==i&&C!==a&&wa(o,h,l,d,c,u,C.x,C.y)&&Ne(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=f&&b.x<=y&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&wa(o,h,l,d,c,u,b.x,b.y)&&Ne(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=m;){if(C.x>=f&&C.x<=y&&C.y>=p&&C.y<=g&&C!==i&&C!==a&&wa(o,h,l,d,c,u,C.x,C.y)&&Ne(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=y&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&wa(o,h,l,d,c,u,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function C0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Nr(n,i)&&Um(n,e,e.next,i)&&uo(n,i)&&uo(i,n)&&(t.push(n.i,e.i,i.i),fo(e),fo(e.next),e=s=i),e=e.next}while(e!==s);return Cs(e)}function R0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&B0(a,o)){let l=Fm(a,o);a=Cs(a,a.next),l=Cs(l,l.next),ho(a,t,e,n,i,r,0),ho(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function I0(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Dm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(O0(c))}i.sort(P0);for(let r=0;r<i.length;r++)e=L0(i[r],e);return e}function P0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function L0(s,t){let e=D0(s,t);if(!e)return t;let n=Fm(e,s);return Cs(n,n.next),Cs(e,e.next)}function D0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Nr(s,e))return e;do{if(Nr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Nm(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);uo(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&N0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function N0(s,t){return Ne(s.prev,s,t.prev)<0&&Ne(t.next,s,s.next)<0}function U0(s,t,e,n){let i=s;do i.z===0&&(i.z=Qu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,F0(i)}function F0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Qu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function O0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Nm(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function wa(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Nm(s,t,e,n,i,r,a,o)}function B0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!z0(s,t)&&(uo(s,t)&&uo(t,s)&&k0(s,t)&&(Ne(s.prev,s,t.prev)||Ne(s,t.prev,t))||Nr(s,t)&&Ne(s.prev,s,s.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Nr(s,t){return s.x===t.x&&s.y===t.y}function Um(s,t,e,n){let i=Ac(Ne(s,t,e)),r=Ac(Ne(s,t,n)),a=Ac(Ne(e,n,s)),o=Ac(Ne(e,n,t));return!!(i!==r&&a!==o||i===0&&Tc(s,e,t)||r===0&&Tc(s,n,t)||a===0&&Tc(e,s,n)||o===0&&Tc(e,t,n))}function Tc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ac(s){return s>0?1:s<0?-1:0}function z0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Um(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function uo(s,t){return Ne(s.prev,s,s.next)<0?Ne(s,t,s.next)>=0&&Ne(s,s.prev,t)>=0:Ne(s,t,s.prev)<0||Ne(s,s.next,t)<0}function k0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Fm(s,t){let e=td(s.i,s.x,s.y),n=td(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ip(s,t,e,n){let i=td(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function td(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function V0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ed=class{static triangulate(t,e,n=2){return A0(t,e,n)}},zn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];sp(t),rp(n,t);let a=t.length;e.forEach(sp);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,rp(n,e[l]);let o=ed.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sp(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function rp(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var po=class s extends de{constructor(t=new Ki([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:G0,C,b=!1,R,w,D,x;if(m){C=m.getSpacedPoints(h),b=!0,u=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,nt),w=new U,D=new U,x=new U}u||(g=0,f=0,p=0,y=0);let I=o.extractPoints(c),F=I.shape,V=I.holes;if(!zn.isClockWise(F)){F=F.reverse();for(let nt=0,bt=V.length;nt<bt;nt++){let vt=V[nt];zn.isClockWise(vt)&&(V[nt]=vt.reverse())}}function j(nt){let vt=10000000000000001e-36,Q=nt[0];for(let _t=1;_t<=nt.length;_t++){let Mt=_t%nt.length,gt=nt[Mt],At=gt.x-Q.x,Bt=gt.y-Q.y,k=At*At+Bt*Bt,re=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(Q.x),Math.abs(Q.y)),Et=vt*re*re;if(k<=Et){nt.splice(Mt,1),_t--;continue}Q=gt}}j(F),V.forEach(j);let X=V.length,J=F;for(let nt=0;nt<X;nt++){let bt=V[nt];F=F.concat(bt)}function at(nt,bt,vt){return bt||ee("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(bt,vt)}let rt=F.length;function xt(nt,bt,vt){let Q,_t,Mt,gt=nt.x-bt.x,At=nt.y-bt.y,Bt=vt.x-nt.x,k=vt.y-nt.y,re=gt*gt+At*At,Et=gt*k-At*Bt;if(Math.abs(Et)>Number.EPSILON){let N=Math.sqrt(re),M=Math.sqrt(Bt*Bt+k*k),G=bt.x-At/N,et=bt.y+gt/N,ct=vt.x-k/M,Ct=vt.y+Bt/M,Pt=((ct-G)*k-(Ct-et)*Bt)/(gt*k-At*Bt);Q=G+gt*Pt-nt.x,_t=et+At*Pt-nt.y;let ht=Q*Q+_t*_t;if(ht<=2)return new yt(Q,_t);Mt=Math.sqrt(ht/2)}else{let N=!1;gt>Number.EPSILON?Bt>Number.EPSILON&&(N=!0):gt<-Number.EPSILON?Bt<-Number.EPSILON&&(N=!0):Math.sign(At)===Math.sign(k)&&(N=!0),N?(Q=-At,_t=gt,Mt=Math.sqrt(re)):(Q=gt,_t=At,Mt=Math.sqrt(re/2))}return new yt(Q/Mt,_t/Mt)}let it=[];for(let nt=0,bt=J.length,vt=bt-1,Q=nt+1;nt<bt;nt++,vt++,Q++)vt===bt&&(vt=0),Q===bt&&(Q=0),it[nt]=xt(J[nt],J[vt],J[Q]);let pt=[],dt,Yt=it.concat();for(let nt=0,bt=X;nt<bt;nt++){let vt=V[nt];dt=[];for(let Q=0,_t=vt.length,Mt=_t-1,gt=Q+1;Q<_t;Q++,Mt++,gt++)Mt===_t&&(Mt=0),gt===_t&&(gt=0),dt[Q]=xt(vt[Q],vt[Mt],vt[gt]);pt.push(dt),Yt=Yt.concat(dt)}let Wt;if(g===0)Wt=zn.triangulateShape(J,V);else{let nt=[],bt=[];for(let vt=0;vt<g;vt++){let Q=vt/g,_t=f*Math.cos(Q*Math.PI/2),Mt=p*Math.sin(Q*Math.PI/2)+y;for(let gt=0,At=J.length;gt<At;gt++){let Bt=at(J[gt],it[gt],Mt);It(Bt.x,Bt.y,-_t),Q===0&&nt.push(Bt)}for(let gt=0,At=X;gt<At;gt++){let Bt=V[gt];dt=pt[gt];let k=[];for(let re=0,Et=Bt.length;re<Et;re++){let N=at(Bt[re],dt[re],Mt);It(N.x,N.y,-_t),Q===0&&k.push(N)}Q===0&&bt.push(k)}}Wt=zn.triangulateShape(nt,bt)}let fe=Wt.length,St=p+y;for(let nt=0;nt<rt;nt++){let bt=u?at(F[nt],Yt[nt],St):F[nt];b?(D.copy(R.normals[0]).multiplyScalar(bt.x),w.copy(R.binormals[0]).multiplyScalar(bt.y),x.copy(C[0]).add(D).add(w),It(x.x,x.y,x.z)):It(bt.x,bt.y,0)}for(let nt=1;nt<=h;nt++)for(let bt=0;bt<rt;bt++){let vt=u?at(F[bt],Yt[bt],St):F[bt];b?(D.copy(R.normals[nt]).multiplyScalar(vt.x),w.copy(R.binormals[nt]).multiplyScalar(vt.y),x.copy(C[nt]).add(D).add(w),It(x.x,x.y,x.z)):It(vt.x,vt.y,d/h*nt)}for(let nt=g-1;nt>=0;nt--){let bt=nt/g,vt=f*Math.cos(bt*Math.PI/2),Q=p*Math.sin(bt*Math.PI/2)+y;for(let _t=0,Mt=J.length;_t<Mt;_t++){let gt=at(J[_t],it[_t],Q);It(gt.x,gt.y,d+vt)}for(let _t=0,Mt=V.length;_t<Mt;_t++){let gt=V[_t];dt=pt[_t];for(let At=0,Bt=gt.length;At<Bt;At++){let k=at(gt[At],dt[At],Q);b?It(k.x,k.y+C[h-1].y,C[h-1].x+vt):It(k.x,k.y,d+vt)}}}se(),st();function se(){let nt=i.length/3;if(u){let bt=0,vt=rt*bt;for(let Q=0;Q<fe;Q++){let _t=Wt[Q];Lt(_t[2]+vt,_t[1]+vt,_t[0]+vt)}bt=h+g*2,vt=rt*bt;for(let Q=0;Q<fe;Q++){let _t=Wt[Q];Lt(_t[0]+vt,_t[1]+vt,_t[2]+vt)}}else{for(let bt=0;bt<fe;bt++){let vt=Wt[bt];Lt(vt[2],vt[1],vt[0])}for(let bt=0;bt<fe;bt++){let vt=Wt[bt];Lt(vt[0]+rt*h,vt[1]+rt*h,vt[2]+rt*h)}}n.addGroup(nt,i.length/3-nt,0)}function st(){let nt=i.length/3,bt=0;ft(J,bt),bt+=J.length;for(let vt=0,Q=V.length;vt<Q;vt++){let _t=V[vt];ft(_t,bt),bt+=_t.length}n.addGroup(nt,i.length/3-nt,1)}function ft(nt,bt){let vt=nt.length;for(;--vt>=0;){let Q=vt,_t=vt-1;_t<0&&(_t=nt.length-1);for(let Mt=0,gt=h+g*2;Mt<gt;Mt++){let At=rt*Mt,Bt=rt*(Mt+1),k=bt+Q+At,re=bt+_t+At,Et=bt+_t+Bt,N=bt+Q+Bt;Dt(k,re,Et,N)}}}function It(nt,bt,vt){l.push(nt),l.push(bt),l.push(vt)}function Lt(nt,bt,vt){ne(nt),ne(bt),ne(vt);let Q=i.length/3,_t=S.generateTopUV(n,i,Q-3,Q-2,Q-1);pe(_t[0]),pe(_t[1]),pe(_t[2])}function Dt(nt,bt,vt,Q){ne(nt),ne(bt),ne(Q),ne(bt),ne(vt),ne(Q);let _t=i.length/3,Mt=S.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);pe(Mt[0]),pe(Mt[1]),pe(Mt[3]),pe(Mt[1]),pe(Mt[2]),pe(Mt[3])}function ne(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function pe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return H0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new eh[i.type]().fromJSON(i)),new s(n,t.options)}},G0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new yt(r,a),new yt(o,l),new yt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],y=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new yt(a,1-l),new yt(c,1-d),new yt(u,1-p),new yt(y,1-m)]:[new yt(o,1-l),new yt(h,1-d),new yt(f,1-p),new yt(g,1-m)]}};function H0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mo=class s extends wi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},go=class s extends de{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=le(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new U,u=new yt,f=new U,p=new U,y=new U,g=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let S=0;S<=e;S++){let C=n+S*h*i,b=Math.sin(C),R=Math.cos(C);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*b,d.y=t[w].y,d.z=t[w].x*R,a.push(d.x,d.y,d.z),u.x=S/e,u.y=w/(t.length-1),o.push(u.x,u.y);let D=l[3*w+0]*b,x=l[3*w+1],I=l[3*w+0]*R;c.push(D,x,I)}}for(let S=0;S<e;S++)for(let C=0;C<t.length-1;C++){let b=C+S*t.length,R=b,w=b+t.length,D=b+t.length+1,x=b+1;r.push(R,w,x),r.push(D,x,w)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ur=class s extends wi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ei=class s extends de{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let S=m*u-a;for(let C=0;C<c;C++){let b=C*d-r;p.push(b,-S,0),y.push(0,0,1),g.push(C/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let C=S+c*m,b=S+c*(m+1),R=S+1+c*(m+1),w=S+1+c*m;f.push(C,b,w),f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},_o=class s extends de{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new U,p=new yt;for(let y=0;y<=i;y++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let y=0;y<i;y++){let g=y*(n+1);for(let m=0;m<n;m++){let S=m+g,C=S,b=S+n+1,R=S+n+2,w=S+1;o.push(C,b,w),o.push(b,R,w)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xo=class s extends de{constructor(t=new Ki([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(i,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(a,2));function c(h){let d=i.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;zn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];zn.isClockWise(S)===!0&&(p[g]=S.reverse())}let y=zn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){let S=f[g];i.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,m=y.length;g<m;g++){let S=y[g],C=S[0]+d,b=S[1]+d,R=S[2]+d;n.push(C,b,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return W0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function W0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Fr=class s extends de{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,u=new U,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let S=[],C=m/n,b=a+C*o,R=t*Math.cos(b),w=Math.sqrt(t*t-R*R),D=0;m===0&&a===0?D=.5/e:m===n&&l===Math.PI&&(D=-.5/e);for(let x=0;x<=e;x++){let I=x/e,F=i+I*r;d.x=-w*Math.cos(F),d.y=R,d.z=w*Math.sin(F),p.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(I+D,1-C),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let C=h[m][S+1],b=h[m][S],R=h[m+1][S],w=h[m+1][S+1];(m!==0||a>0)&&f.push(C,b,w),(m!==n-1||l<Math.PI)&&f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},yo=class s extends wi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},vo=class s extends de{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new U,f=new U,p=new U;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=i;m++){let S=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let m=(i+1)*y+g-1,S=(i+1)*(y-1)+g-1,C=(i+1)*(y-1)+g,b=(i+1)*y+g;l.push(m,S,b),l.push(S,C,b)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},bo=class s extends de{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new U,u=new U,f=new U,p=new U,y=new U,g=new U,m=new U;for(let C=0;C<=n;++C){let b=C/n*r*Math.PI*2;S(b,r,a,t,f),S(b+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),y.crossVectors(g,m),m.crossVectors(y,g),y.normalize(),m.normalize();for(let R=0;R<=i;++R){let w=R/i*Math.PI*2,D=-e*Math.cos(w),x=e*Math.sin(w);d.x=f.x+(D*m.x+x*y.x),d.y=f.y+(D*m.y+x*y.y),d.z=f.z+(D*m.z+x*y.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(C/n),h.push(R/i)}}for(let C=1;C<=n;C++)for(let b=1;b<=i;b++){let R=(i+1)*(C-1)+(b-1),w=(i+1)*C+(b-1),D=(i+1)*C+b,x=(i+1)*(C-1)+b;o.push(R,w,x),o.push(w,D,x)}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2));function S(C,b,R,w,D){let x=Math.cos(C),I=Math.sin(C),F=R/b*C,V=Math.cos(F);D.x=w*(2+V)*.5*x,D.y=w*(2+V)*I*.5,D.z=w*Math.sin(F)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Mo=class s extends de{constructor(t=new Lr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new yt,h=new U,d=[],u=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function y(){for(let C=0;C<e;C++)g(C);g(r===!1?e:0),S(),m()}function g(C){h=t.getPointAt(C/e,h);let b=a.normals[C],R=a.binormals[C];for(let w=0;w<=i;w++){let D=w/i*Math.PI*2,x=Math.sin(D),I=-Math.cos(D);l.x=I*b.x+x*R.x,l.y=I*b.y+x*R.y,l.z=I*b.z+x*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let C=1;C<=e;C++)for(let b=1;b<=i;b++){let R=(i+1)*(C-1)+(b-1),w=(i+1)*C+(b-1),D=(i+1)*C+b,x=(i+1)*(C-1)+b;p.push(R,w,x),p.push(w,D,x)}}function S(){for(let C=0;C<=e;C++)for(let b=0;b<=i;b++)c.x=C/e,c.y=b/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new eh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},So=class extends de{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new U,r=new U;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,y=u+f;p<y;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),S=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,S),ap(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),ap(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function ap(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var op=Object.freeze({__proto__:null,BoxGeometry:Zi,CapsuleGeometry:eo,CircleGeometry:no,ConeGeometry:Cr,CylinderGeometry:Er,DodecahedronGeometry:io,EdgesGeometry:so,ExtrudeGeometry:po,IcosahedronGeometry:mo,LatheGeometry:go,OctahedronGeometry:Ur,PlaneGeometry:Ei,PolyhedronGeometry:wi,RingGeometry:_o,ShapeGeometry:xo,SphereGeometry:Fr,TetrahedronGeometry:yo,TorusGeometry:vo,TorusKnotGeometry:bo,TubeGeometry:Mo,WireframeGeometry:So}),To=class extends Ge{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function zs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(lp(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(lp(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function fn(s){let t={};for(let e=0;e<s.length;e++){let n=zs(s[e]);for(let i in n)t[i]=n[i]}return t}function lp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function X0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Jd={clone:zs,merge:fn},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ge{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new yt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new he().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Or=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Br=class extends Ge{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends Br{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},wo=class extends Ge{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Eo=class extends Ge{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rs=class extends Ge{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Co=class extends Ge{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zr=class extends Ge{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kr=class extends Ge{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ro=class extends Ge{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Xt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},Io=class extends Ke{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function $n(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function La(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Om(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function nd(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Bm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function $0(s,t,e,n,i=30){let r=s.clone();r.name=t;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let y=0;y<h;++y)u.push(c.values[f*h+y])}}d.length!==0&&(c.times=$n(d,c.times.constructor),c.values=$n(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Z0(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){let o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=o.times.length-1,y;if(r<=o.times[0]){let m=h,S=d-h;y=o.values.slice(m,S)}else if(r>=o.times[p]){let m=p*d+h,S=m+d-h;y=o.values.slice(m,S)}else{let m=o.createInterpolant(),S=h,C=d-h;m.evaluate(r),y=m.resultBuffer.slice(S,C)}l==="quaternion"&&new Je().fromArray(y).normalize().conjugate().toArray(y);let g=c.times.length;for(let m=0;m<g;++m){let S=m*f+u;if(l==="quaternion")Je.multiplyQuaternionsFlat(c.values,S,y,0,c.values,S);else{let C=f-u*2;for(let b=0;b<C;++b)c.values[S+b]-=y[b]}}}return s.blendMode=lu,s}var nh=class{static convertArray(t,e){return $n(t,e)}static isTypedArray(t){return Tm(t)}static hasTangents(t){return La(t)}static getKeyframeOrder(t){return Om(t)}static sortedArray(t,e,n){return nd(t,e,n)}static flattenJSON(t,e,n,i){Bm(t,e,n,i)}static subclip(t,e,n,i,r=30){return $0(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return Z0(t,e,n,i)}},Ci=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends Ci{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hi:r=t,o=2*e-n;break;case mr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:a=t,l=2*n-e;break;case mr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,S=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,C=(-1-f)*g+(1.5+f)*y+.5*p,b=f*g-f*y;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+S*a[c+R]+C*a[l+R]+b*a[d+R];return r}},Vr=class extends Ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Lo=class extends Ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Do=class extends Ci{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),y=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=f*u+p*2,S=d[m],C=d[m+1],b=t*u+p*2,R=h[b],w=h[b+1],D=K0(n,e,S,R,i);r[p]=zm(D,y,C,w,g)}return r}};function zm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function J0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function K0(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=zm(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=J0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$n(e,this.TimeBufferType),this.values=$n(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$n(t.times,Array),values:$n(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),La(t.settings)&&(n.settings={inTangents:$n(t.settings.inTangents,Array),outTangents:$n(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Do(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case Fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;La(this.settings)&&(cp(this.settings.inTangents,t),cp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ee("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Tm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[u+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,La(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function cp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=ka;var ci=class extends xn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=pr;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};Gr.prototype.ValueTypeName="color";var Is=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};Is.prototype.ValueTypeName="number";var No=class extends Ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Je.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ps=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}};Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends xn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=pr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};Hr.prototype.ValueTypeName="vector";var ji=class{constructor(t="",e=-1,n=[],i=Ul){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Q0(n[a]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Om(l);l=nd(l,1,h),c=nd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Is(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function j0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return Gr;case"quaternion":return Ps;case"bool":case"boolean":return ci;case"string":return hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Q0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=j0(s.type);if(s.times===void 0){let n=[],i=[];Bm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),La(s.settings)&&(e.settings={inTangents:$n(s.settings.inTangents,Float32Array),outTangents:$n(s.settings.outTangents,Float32Array)}),e}var Jn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(hp(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!hp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function hp(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Wr=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kd=new Wr,rn=class{constructor(t){this.manager=t!==void 0?t:Kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rn.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},id=class extends Error{constructor(t,e){super(t),this.response=e}},Vn=class extends rn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Jn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(vi[t]!==void 0){vi[t].push({onLoad:e,onProgress:n,onError:i});return}vi[t]=[],vi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Vt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=vi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,y=0,g=new ReadableStream({start(m){S();function S(){d.read().then(({done:C,value:b})=>{if(C)m.close();else{y+=b.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let w=0,D=h.length;w<D;w++){let x=h[w];x.onProgress&&x.onProgress(R)}m.enqueue(b),S()}},C=>{m.error(C)})}}});return new Response(g)}else throw new id(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Jn.add(`file:${t}`,c);let h=vi[t];delete vi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=vi[t];if(h===void 0)throw this.manager.itemError(t),c;delete vi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ih=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Vn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):ee(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=ji.parse(t[n]);e.push(i)}return e}},sh=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=[],o=new ws,l=new Vn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){let f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Ie),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let y=0;y<u.mipmapCount;y++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+y]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Ie),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}},rr=new WeakMap,Qi=class extends rn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Jn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=rr.get(a);d===void 0&&(d=[],rr.set(a,d)),d.push({onLoad:e,onError:i})}return a}let o=xr("img");function l(){h(),e&&e(this);let d=rr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}rr.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),Jn.remove(`image:${t}`);let u=rr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}rr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}},rh=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=new $i;r.colorSpace=nn;let a=new Qi(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},ah=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new _n,o=new Vn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):ee(h);return}r._applyTexData(a,c),e&&e(a,c)},n,i),a}createDataTexture(t){let e=new _n;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:gn,t.wrapT=e.wrapT!==void 0?e.wrapT:gn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ie,t.minFilter=e.minFilter!==void 0?e.minFilter:Ie,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=si),e.mipmapCount===1&&(t.minFilter=Ie),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},oh=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=new Oe,a=new Qi(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ei=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Uo=class extends ei{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wu=new ce,up=new U,dp=new U,Ls=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new li,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;up.setFromMatrixPosition(t.matrixWorld),e.position.copy(up),dp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Wi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Wu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=new U,Ec=new Je,ai=new U,Ri=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wc,Ec,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wc,Ec,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new U,fp=new yt,pp=new yt,Fe=class extends Ri{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,fp,pp),e.subVectors(pp,fp)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},sd=class extends Ls{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=vs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Fo=class extends ei{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new sd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},rd=class extends Ls{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0}},Oo=class extends ei{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ts=class extends Ri{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ad=class extends Ls{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bo=class extends ei{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new ad}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},zo=class extends ei{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},ko=class extends ei{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},Xr=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new U)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},Vo=class extends ei{constructor(t=new Xr,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},mp={},Go=class s extends rn{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,a=new Vn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):ee(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:To,SpriteMaterial:Sr,RawShaderMaterial:Or,ShaderMaterial:sn,PointsMaterial:Ar,MeshPhysicalMaterial:Ao,MeshStandardMaterial:Br,MeshPhongMaterial:wo,MeshToonMaterial:Eo,MeshNormalMaterial:Rs,MeshLambertMaterial:Co,MeshDepthMaterial:zr,MeshDistanceMaterial:kr,MeshBasicMaterial:jn,MeshMatcapMaterial:Ro,LineDashedMaterial:Io,LineBasicMaterial:Ke,Material:Ge,...mp}[t],i;return n===void 0?(oi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Ge):i=new n,i}static registerMaterial(t,e){mp[t]=e}},qr=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Ho=class extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Wo=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Vn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):ee(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];let g=f.interleavedBuffers[p],m=r(f,g.buffer),S=hr(g.type,m),C=new As(S,g.stride);return C.uuid=g.uuid,g.usage!==void 0&&C.setUsage(g.usage),e[p]=C,C}function r(f,p){if(n[p]!==void 0)return n[p];let g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}let a=t.isInstancedBufferGeometry?new Ho:new de,o=t.data.index;if(o!==void 0){let f=hr(o.type,o.array);a.setIndex(new Ae(f,1))}let l=t.data.attributes;for(let f in l){let p=l[f],y;if(p.isInterleavedBufferAttribute){let g=i(t.data,p.data);y=new Yi(g,p.itemSize,p.offset,p.normalized)}else{let g=hr(p.type,p.array),m=p.isInstancedBufferAttribute?Ai:Ae;y=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(y.name=p.name),p.usage!==void 0&&y.setUsage(p.usage),p.gpuType!==void 0&&(y.gpuType=p.gpuType),a.setAttribute(f,y)}let c=t.data.morphAttributes;if(c)for(let f in c){let p=c[f],y=[];for(let g=0,m=p.length;g<m;g++){let S=p[g],C;if(S.isInterleavedBufferAttribute){let b=i(t.data,S.data);C=new Yi(b,S.itemSize,S.offset,S.normalized)}else{let b=hr(S.type,S.array);C=new Ae(b,S.itemSize,S.normalized)}S.name!==void 0&&(C.name=S.name),S.usage!==void 0&&C.setUsage(S.usage),S.gpuType!==void 0&&(C.gpuType=S.gpuType),y.push(C)}a.morphAttributes[f]=y}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let y=d[f];a.addGroup(y.start,y.count,y.materialIndex)}let u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Ve().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}},Xu={},lh=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=this.path===""?qr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;let o=new Vn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),ee("ObjectLoader: Can't parse "+t+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),ee("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?qr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Vn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(t,e),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(let u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Xu[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new Ki().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=new Ya().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Wo;for(let r=0,a=t.length;r<a;r++){let o,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in op?o=op[l.type].fromJSON(l,e):l.type in Xu?o=Xu[l.type].fromJSON(l,e):Vt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new Go;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){let l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=ji.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:hr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Wr(e);r=new Qi(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let d=t[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,y=u.length;p<y;p++){let g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new _n(m.data,m.width,m.height)))}i[d.uuid]=new Bn(f)}else{let f=o(d.url);i[d.uuid]=new Bn(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:hr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Qi(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new _n(p.data,p.width,p.height)))}n[l.uuid]=new Bn(h)}else{let h=await r(l.url);n[l.uuid]=new Bn(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(Vt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=t[r];o.image===void 0&&Vt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&Vt("ObjectLoader: Undefined image",o.image);let l=e[o.image],c=l.data,h;Array.isArray(c)?(h=new $i,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new _n:h=new Oe,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,t_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],gp),h.wrapT=n(o.wrap[1],gp)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,_p)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,_p)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(u){return e[u]===void 0&&Vt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,y=u.length;p<y;p++){let g=u[p];n[g]===void 0&&Vt("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&Vt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&Vt("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":a=new qi,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new Xt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Ha(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Ga(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Fe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new ts(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new zo(t.color,t.intensity);break;case"DirectionalLight":a=new Bo(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Oo(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new ko(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Fo(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new Uo(t.color,t.groundColor,t.intensity);break;case"LightProbe":let u=new Xr().fromArray(t.sh);a=new Vo(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new qa(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new Le(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);let f=t.count,p=t.instanceMatrix,y=t.instanceColor;a=new $a(h,d,f),a.instanceMatrix=new Ai(new Float32Array(p.array),16),y!==void 0&&(a.instanceColor=new Ai(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new Ja(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,S=null;return g.boundingBox!==void 0&&(m=new He().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(S=new Ve().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:S}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Ve().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new He().fromJSON(t.boundingBox));break;case"LOD":a=new Xa;break;case"Line":a=new Qn(o(t.geometry),l(t.material));break;case"LineLoop":a=new Ka(o(t.geometry),l(t.material));break;case"LineSegments":a=new Ln(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new ja(o(t.geometry),l(t.material));break;case"Sprite":a=new Wa(l(t.material));break;case"Group":a=new Mi;break;case"Bone":a=new Tr;break;default:a=new be}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new U().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){let u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){let u=t.animations;for(let f=0;f<u.length;f++){let p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);let u=t.levels;for(let f=0;f<u.length;f++){let p=u[f],y=a.getObjectByProperty("uuid",p.object);y!==void 0&&a.addLevel(y,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?Vt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new be}})}},t_={UVMapping:jo,CubeReflectionMapping:ii,CubeRefractionMapping:Pi,EquirectangularReflectionMapping:Kr,EquirectangularRefractionMapping:jr,CubeUVReflectionMapping:Us},gp={RepeatWrapping:dr,ClampToEdgeWrapping:gn,MirroredRepeatWrapping:fr},_p={NearestFilter:Pe,NearestMipmapNearestFilter:eu,NearestMipmapLinearFilter:Fs,LinearFilter:Ie,LinearMipmapNearestFilter:Qr,LinearMipmapLinearFilter:si},qu=new WeakMap,ch=class extends rn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Vt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Vt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Jn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{qu.has(a)===!0?(i&&i(qu.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),qu.set(l,c),Jn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Cc,Yr=class{static getContext(){return Cc===void 0&&(Cc=new(window.AudioContext||window.webkitAudioContext)),Cc}static setContext(t){Cc=t}},hh=class extends rn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Vn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{let c=l.slice(0),h=Yr.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){i?i(l):ee(l),r.manager.itemError(t)}}},xp=new ce,yp=new ce,ds=new ce,uh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Fe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Fe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ds.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(xs*e.fov*.5)/e.zoom,o,l;yp.elements[12]=-i,xp.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,ds.elements[0]=2*e.near/(l-o),ds.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ds),o=-a*e.aspect-r,l=a*e.aspect-r,ds.elements[0]=2*e.near/(l-o),ds.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ds)}this.cameraL.matrix.copy(t.matrixWorld).multiply(yp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(xp),this.cameraR.matrixWorldNeedsUpdate=!0}},ar=-90,or=1,Xo=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(ar,or,t,e);i.layers=this.layers,this.add(i);let r=new Fe(ar,or,t,e);r.layers=this.layers,this.add(r);let a=new Fe(ar,or,t,e);a.layers=this.layers,this.add(a);let o=new Fe(ar,or,t,e);o.layers=this.layers,this.add(o);let l=new Fe(ar,or,t,e);l.layers=this.layers,this.add(l);let c=new Fe(ar,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},qo=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Yo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=e_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function e_(){this._document.hidden===!1&&this.reset()}var fs=new U,Yu=new Je,n_=new U,ps=new U,ms=new U,dh=class extends be{constructor(){super(),this.type="AudioListener",this.context=Yr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Yo}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(fs,Yu,n_),ps.set(0,0,-1).applyQuaternion(Yu),ms.set(0,1,0).applyQuaternion(Yu),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(fs.x,n),e.positionY.linearRampToValueAtTime(fs.y,n),e.positionZ.linearRampToValueAtTime(fs.z,n),e.forwardX.linearRampToValueAtTime(ps.x,n),e.forwardY.linearRampToValueAtTime(ps.y,n),e.forwardZ.linearRampToValueAtTime(ps.z,n),e.upX.linearRampToValueAtTime(ms.x,n),e.upY.linearRampToValueAtTime(ms.y,n),e.upZ.linearRampToValueAtTime(ms.z,n)}else e.setPosition(fs.x,fs.y,fs.z),e.setOrientation(ps.x,ps.y,ps.z,ms.x,ms.y,ms.z)}},$o=class extends be{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Vt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Vt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Vt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Vt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Vt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Vt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Vt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Vt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},gs=new U,vp=new Je,i_=new U,_s=new U,fh=class extends $o{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(gs,vp,i_),_s.set(0,0,1).applyQuaternion(vp);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(gs.x,n),e.positionY.linearRampToValueAtTime(gs.y,n),e.positionZ.linearRampToValueAtTime(gs.z,n),e.orientationX.linearRampToValueAtTime(_s.x,n),e.orientationY.linearRampToValueAtTime(_s.y,n),e.orientationZ.linearRampToValueAtTime(_s.z,n)}else e.setPosition(gs.x,gs.y,gs.z),e.setOrientation(_s.x,_s.y,_s.z)}},ph=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Zo=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Je.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let a=this._workIndex*r;Je.multiplyQuaternionsFlat(t,a,t,e,t,n),Je.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},jd="\\[\\]\\.:\\/",s_=new RegExp("["+jd+"]","g"),Qd="[^"+jd+"]",r_="[^"+jd.replace("\\.","")+"]",a_=/((?:WC+[\/:])*)/.source.replace("WC",Qd),o_=/(WCOD+)?/.source.replace("WCOD",r_),l_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qd),c_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qd),h_=new RegExp("^"+a_+o_+l_+c_+"$"),u_=["material","materials","bones","map"],od=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s_,"")}static parseTrackName(t){let e=h_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=od;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let y=0,g=a;y!==g;++y)r[y].push(new Te(u,n[y],i[y]))}else if(p<c){o=t[p];let y=--c,g=t[y];e[g.uuid]=p,t[p]=g,e[f]=y,t[y]=u;for(let m=0,S=a;m!==S;++m){let C=r[m],b=C[y],R=C[p];C[p]=b,R===void 0&&(R=new Te(u,n[m],i[m])),C[y]=R}}else t[p]!==o&&ee("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){let y=n[f],g=y[d],m=y[h];y[h]=g,y[d]=m}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){let u=--r,f=t[u],p=--a,y=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[y.uuid]=u),t[u]=y,t.pop();for(let g=0,m=i;g!==m;++g){let S=n[g],C=S[u],b=S[p];S[d]=C,S[u]=b,S.pop()}}else{let u=--a,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,y=i;p!==y;++p){let g=n[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new Te(p,t,e)}return d}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=i[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},Jo=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Gi,endingEnd:Gi};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ud,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case lu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ul:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,a=n===Fd;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Nd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(t?i.endingStart=this.zeroSlopeAtStart?Hi:Gi:i.endingStart=mr,e?i.endingEnd=this.zeroSlopeAtEnd?Hi:Gi:i.endingEnd=mr)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},d_=new Float32Array(1),gh=class extends An{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=i[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let y=e&&e._propertyBindings[d].binding.parsedPath;p=new Zo(Te.create(n,f,y),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Vr(new Float32Array(2),new Float32Array(2),1,d_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,a=typeof t=="string"?ji.findByName(i,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ul),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Jo(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?ji.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},_h=class extends vr{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new Ms(null,t,e,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(i)}},xh=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},f_=0,yh=class extends An{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:f_++}),this.name="",this.usage=Bl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},vh=class extends As{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},bh=class{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},bp=new ce,$r=class{constructor(t,e,n=0,i=1/0){this.ray=new Ti(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bp),this}intersectObject(t,e=!0,n=[]){return ld(t,this,n,e),n.sort(Mp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ld(t[i],this,n,e);return n.sort(Mp),n}};function Mp(s,t){return s.distance-t.distance}function ld(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)ld(r[a],t,e,!0)}}var Mh=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Sh=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Th=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Ah=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},Sp=new yt,Ko=class{constructor(t=new yt(1/0,1/0),e=new yt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sp.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sp).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Tp=new U,Rc=new U,lr=new U,cr=new U,$u=new U,p_=new U,m_=new U,wh=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Tp.subVectors(t,this.start),Rc.subVectors(this.end,this.start);let n=Rc.dot(Rc);if(n===0)return 0;let r=Rc.dot(Tp)/n;return e&&(r=le(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=p_,n=m_){let i=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;lr.subVectors(c,o),cr.subVectors(h,l),$u.subVectors(o,l);let d=lr.dot(lr),u=cr.dot(cr),f=cr.dot($u);if(d<=i&&u<=i)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,a=f/u,a=le(a,0,1);else{let p=lr.dot($u);if(u<=i)a=0,r=le(-p/d,0,1);else{let y=lr.dot(cr),g=d*u-y*y;g!==0?r=le((y*f-p*u)/g,0,1):r=0,a=(y*r+f)/u,a<0?(a=0,r=le(-p/d,0,1)):a>1&&(a=1,r=le((y-p)/d,0,1))}}return e.copy(o).addScaledVector(lr,r),n.copy(l).addScaledVector(cr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Ap=new U,Eh=class extends be{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new de,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new qt(i,3));let r=new Ke({fog:!1,toneMapped:!1});this.cone=new Ln(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Ap.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ap),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Vi=new U,Ic=new ce,Zu=new ce,Ch=class extends Ln{constructor(t){let e=km(t),n=new de,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new qt(i,3)),n.setAttribute("color",new qt(r,3));let a=new Ke({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let o=new Xt(255),l=new Xt(65280);this.setColors(o,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Zu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){let o=e[r];o.parent&&o.parent.isBone&&(Ic.multiplyMatrices(Zu,o.matrixWorld),Vi.setFromMatrixPosition(Ic),i.setXYZ(a,Vi.x,Vi.y,Vi.z),Ic.multiplyMatrices(Zu,o.parent.matrixWorld),Vi.setFromMatrixPosition(Ic),i.setXYZ(a+1,Vi.x,Vi.y,Vi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function km(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...km(s.children[e]));return t}var Rh=class extends Le{constructor(t,e,n){let i=new Fr(e,4,2),r=new jn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},g_=new U,wp=new Xt,Ep=new Xt,Ih=class extends be{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Ur(e);i.rotateY(Math.PI*.5),this.material=new jn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Ae(a,3)),this.add(new Le(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");wp.copy(this.light.color),Ep.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?wp:Ep;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(g_.setFromMatrixPosition(this.light.matrixWorld).negate())}},Ph=class extends Ln{constructor(t=10,e=10,n=4473924,i=8947848){n=new Xt(n),i=new Xt(i);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let y=u===r?n:i;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}let h=new de;h.setAttribute("position",new qt(l,3)),h.setAttribute("color",new qt(c,3));let d=new Ke({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Lh=class extends Ln{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new Xt(r),a=new Xt(a);let o=[],l=[];if(e>1)for(let d=0;d<e;d++){let u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);let y=d&1?r:a;l.push(y.r,y.g,y.b),l.push(y.r,y.g,y.b)}for(let d=0;d<n;d++){let u=d&1?r:a,f=t-t/n*d;for(let p=0;p<i;p++){let y=p/i*(Math.PI*2),g=Math.sin(y)*f,m=Math.cos(y)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),y=(p+1)/i*(Math.PI*2),g=Math.sin(y)*f,m=Math.cos(y)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}let c=new de;c.setAttribute("position",new qt(o,3)),c.setAttribute("color",new qt(l,3));let h=new Ke({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Cp=new U,Pc=new U,Rp=new U,Dh=class extends be{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new de;i.setAttribute("position",new qt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Ke({fog:!1,toneMapped:!1});this.lightPlane=new Qn(i,r),this.add(this.lightPlane),i=new de,i.setAttribute("position",new qt([0,0,0,0,0,1],3)),this.targetLine=new Qn(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Cp.setFromMatrixPosition(this.light.matrixWorld),Pc.setFromMatrixPosition(this.light.target.matrixWorld),Rp.subVectors(Pc,Cp),this.lightPlane.lookAt(Pc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Pc),this.targetLine.scale.z=Rp.length()}},Lc=new U,Ue=new Ri,Nh=class extends Ln{constructor(t){let e=new de,n=new Ke({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,y){l(p),l(y)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new qt(i,3)),e.setAttribute("color",new qt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Xt(16755200),h=new Xt(16711680),d=new Xt(43775),u=new Xt(16777215),f=new Xt(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,a;if(Ue.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Tn)r=-1,a=1;else if(this.camera.coordinateSystem===Wi)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);ze("c",e,t,Ue,0,0,r),ze("t",e,t,Ue,0,0,a),ze("n1",e,t,Ue,-n,-i,r),ze("n2",e,t,Ue,n,-i,r),ze("n3",e,t,Ue,-n,i,r),ze("n4",e,t,Ue,n,i,r),ze("f1",e,t,Ue,-n,-i,a),ze("f2",e,t,Ue,n,-i,a),ze("f3",e,t,Ue,-n,i,a),ze("f4",e,t,Ue,n,i,a),ze("u1",e,t,Ue,n*.7,i*1.1,r),ze("u2",e,t,Ue,-n*.7,i*1.1,r),ze("u3",e,t,Ue,0,i*2,r),ze("cf1",e,t,Ue,-n,0,a),ze("cf2",e,t,Ue,n,0,a),ze("cf3",e,t,Ue,0,-i,a),ze("cf4",e,t,Ue,0,i,a),ze("cn1",e,t,Ue,-n,0,r),ze("cn2",e,t,Ue,n,0,r),ze("cn3",e,t,Ue,0,-i,r),ze("cn4",e,t,Ue,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ze(s,t,e,n,i,r,a){Lc.set(i,r,a).unproject(n);let o=t[s];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Lc.x,Lc.y,Lc.z)}}var Dc=new He,Uh=class extends Ln{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new de;r.setIndex(new Ae(n,1)),r.setAttribute("position",new Ae(i,3)),super(r,new Ke({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Dc.setFromObject(this.object),Dc.isEmpty())return;let t=Dc.min,e=Dc.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Fh=class extends Ln{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new de;r.setIndex(new Ae(n,1)),r.setAttribute("position",new qt(i,3)),super(r,new Ke({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Oh=class extends Qn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new de;a.setAttribute("position",new qt(r,3)),a.computeBoundingSphere(),super(a,new Ke({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new de;l.setAttribute("position",new qt(o,3)),l.computeBoundingSphere(),this.add(new Le(l,new jn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Ip=new U,Nc,Ju,Bh=class extends be{constructor(t=new U(0,0,1),e=new U(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Nc===void 0&&(Nc=new de,Nc.setAttribute("position",new qt([0,0,0,0,1,0],3)),Ju=new Cr(.5,1,5,1),Ju.translate(0,-.5,0)),this.position.copy(e),this.line=new Qn(Nc,new Ke({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Le(Ju,new jn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ip.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ip,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},zh=class extends Ln{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new de;i.setAttribute("position",new qt(e,3)),i.setAttribute("color",new qt(n,3));let r=new Ke({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new Xt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},kh=class{constructor(){this.type="ShapePath",this.color=new Xt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Ji,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],y=c[f];p.y>l.y!=y.y>l.y&&l.x<(y.x-p.x)*(l.y-p.y)/(y.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new yt);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let y=l[p],g=l[(p+1)%f];if(y.y>d!=g.y>d){let m=y.x+(d-y.y)*(g.x-y.x)/(g.y-y.y);u.push(m)}}return u.length>1&&(u.sort((p,y)=>p-y),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Vt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=zn.area(c);if(h===0)continue;let d=new Ko;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Ki;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Ji;h.curves=l.subPath.curves,c.holes.push(h)}return a}},Vh=class extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function __(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function x_(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function y_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function hu(s,t,e,n){let i=v_(n);switch(e){case au:return s*t;case nl:return s*t/i.components*i.byteLength;case ta:return s*t/i.components*i.byteLength;case Di:return s*t*2/i.components*i.byteLength;case il:return s*t*2/i.components*i.byteLength;case ou:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case sl:return s*t*4/i.components*i.byteLength;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(s,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(s,8)*Math.max(t,8)/2;case cl:case hl:case dl:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ul:case ra:case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Il:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ll:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v_(s){switch(s){case yn:case nu:return{byteLength:1,components:1};case Os:case iu:case Hn:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case vn:case Qo:case hn:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Gh=class{static contain(t,e){return __(t,e)}static cover(t,e){return x_(t,e)}static fill(t){return y_(t)}static getByteLength(t,e,n,i){return hu(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lg(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function b_(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y_=`vec3 transformedNormal = objectNormal;
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
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,vx=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,bx=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,ky=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Gy=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,$y=`#define TOON
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
}`,Zy=`#define TOON
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
}`,Jy=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,tv=`uniform float rotation;
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
}`,ev=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:M_,alphahash_pars_fragment:S_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:w_,alphatest_pars_fragment:E_,aomap_fragment:C_,aomap_pars_fragment:R_,batching_pars_vertex:I_,batching_vertex:P_,begin_vertex:L_,beginnormal_vertex:D_,bsdfs:N_,iridescence_fragment:U_,bumpmap_pars_fragment:F_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:k_,color_fragment:V_,color_pars_fragment:G_,color_pars_vertex:H_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:$_,displacementmap_vertex:Z_,emissivemap_fragment:J_,emissivemap_pars_fragment:K_,colorspace_fragment:j_,colorspace_pars_fragment:Q_,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:rx,fog_pars_vertex:ax,fog_fragment:ox,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:hx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:dx,lights_pars_begin:fx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:vx,lights_fragment_begin:bx,lights_fragment_maps:Mx,lights_fragment_end:Sx,lightprobes_pars_fragment:Tx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Ix,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ux,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:kx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Hx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Zx,opaque_fragment:Jx,packing:Kx,premultiplied_alpha_fragment:jx,project_vertex:Qx,dithering_fragment:ty,dithering_pars_fragment:ey,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:hy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:xy,uv_pars_vertex:yy,uv_vertex:vy,worldpos_vertex:by,background_vert:My,background_frag:Sy,backgroundCube_vert:Ty,backgroundCube_frag:Ay,cube_vert:wy,cube_frag:Ey,depth_vert:Cy,depth_frag:Ry,distance_vert:Iy,distance_frag:Py,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Ny,linedashed_frag:Uy,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:zy,meshmatcap_vert:ky,meshmatcap_frag:Vy,meshnormal_vert:Gy,meshnormal_frag:Hy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:Yy,meshtoon_vert:$y,meshtoon_frag:Zy,points_vert:Jy,points_frag:Ky,shadow_vert:jy,shadow_frag:Qy,sprite_vert:tv,sprite_frag:ev},Ht={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ri={basic:{uniforms:fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:fn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:fn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:fn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:fn([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:fn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:fn([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:fn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:fn([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:fn([Ht.common,Ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:fn([Ht.lights,Ht.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ri.physical={uniforms:fn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var uu={r:0,b:0,g:0},nv=new ce,cg=new he;cg.set(-1,0,0,0,1,0,0,0,1);function iv(s,t,e,n,i,r){let a=new Xt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let b=S.backgroundBlurriness>0;C=t.get(C,b)}return C}function p(S){let C=!1,b=f(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),C=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,C){let b=f(C);b&&(b.isCubeTexture||b.mapping===Us)?(c===void 0&&(c=new Le(new Zi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:zs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cg),c.material.toneMapped=xe.getTransfer(b.colorSpace)!==Me,(h!==b||d!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Le(new Ei(2,2),new sn({name:"BackgroundMaterial",uniforms:zs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=xe.getTransfer(b.colorSpace)!==Me,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,C){S.getRGB(uu,Zd(s)),e.buffers.color.setClear(uu.r,uu.g,uu.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:y,dispose:m}}function sv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(V,H,j,X,J){let at=!1,rt=d(V,X,j,H);r!==rt&&(r=rt,c(r.object)),at=f(V,X,j,J),at&&p(V,X,j,J),J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(at||a)&&(a=!1,b(V,H,j,X),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return s.createVertexArray()}function c(V){return s.bindVertexArray(V)}function h(V){return s.deleteVertexArray(V)}function d(V,H,j,X){let J=X.wireframe===!0,at=n[H.id];at===void 0&&(at={},n[H.id]=at);let rt=V.isInstancedMesh===!0?V.id:0,xt=at[rt];xt===void 0&&(xt={},at[rt]=xt);let it=xt[j.id];it===void 0&&(it={},xt[j.id]=it);let pt=it[J];return pt===void 0&&(pt=u(l()),it[J]=pt),pt}function u(V){let H=[],j=[],X=[];for(let J=0;J<e;J++)H[J]=0,j[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:X,object:V,attributes:{},index:null}}function f(V,H,j,X){let J=r.attributes,at=H.attributes,rt=0,xt=j.getAttributes();for(let it in xt)if(xt[it].location>=0){let dt=J[it],Yt=at[it];if(Yt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(Yt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(Yt=V.instanceColor)),dt===void 0||dt.attribute!==Yt||Yt&&dt.data!==Yt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==X}function p(V,H,j,X){let J={},at=H.attributes,rt=0,xt=j.getAttributes();for(let it in xt)if(xt[it].location>=0){let dt=at[it];dt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(dt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(dt=V.instanceColor));let Yt={};Yt.attribute=dt,dt&&dt.data&&(Yt.data=dt.data),J[it]=Yt,rt++}r.attributes=J,r.attributesNum=rt,r.index=X}function y(){let V=r.newAttributes;for(let H=0,j=V.length;H<j;H++)V[H]=0}function g(V){m(V,0)}function m(V,H){let j=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;j[V]=1,X[V]===0&&(s.enableVertexAttribArray(V),X[V]=1),J[V]!==H&&(s.vertexAttribDivisor(V,H),J[V]=H)}function S(){let V=r.newAttributes,H=r.enabledAttributes;for(let j=0,X=H.length;j<X;j++)H[j]!==V[j]&&(s.disableVertexAttribArray(j),H[j]=0)}function C(V,H,j,X,J,at,rt){rt===!0?s.vertexAttribIPointer(V,H,j,J,at):s.vertexAttribPointer(V,H,j,X,J,at)}function b(V,H,j,X){y();let J=X.attributes,at=j.getAttributes(),rt=H.defaultAttributeValues;for(let xt in at){let it=at[xt];if(it.location>=0){let pt=J[xt];if(pt===void 0&&(xt==="instanceMatrix"&&V.instanceMatrix&&(pt=V.instanceMatrix),xt==="instanceColor"&&V.instanceColor&&(pt=V.instanceColor)),pt!==void 0){let dt=pt.normalized,Yt=pt.itemSize,Wt=t.get(pt);if(Wt===void 0)continue;let fe=Wt.buffer,St=Wt.type,se=Wt.bytesPerElement,st=St===s.INT||St===s.UNSIGNED_INT||pt.gpuType===Qo;if(pt.isInterleavedBufferAttribute){let ft=pt.data,It=ft.stride,Lt=pt.offset;if(ft.isInstancedInterleavedBuffer){for(let Dt=0;Dt<it.locationSize;Dt++)m(it.location+Dt,ft.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Dt=0;Dt<it.locationSize;Dt++)g(it.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Dt=0;Dt<it.locationSize;Dt++)C(it.location+Dt,Yt/it.locationSize,St,dt,It*se,(Lt+Yt/it.locationSize*Dt)*se,st)}else{if(pt.isInstancedBufferAttribute){for(let ft=0;ft<it.locationSize;ft++)m(it.location+ft,pt.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ft=0;ft<it.locationSize;ft++)g(it.location+ft);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let ft=0;ft<it.locationSize;ft++)C(it.location+ft,Yt/it.locationSize,St,dt,Yt*se,Yt/it.locationSize*ft*se,st)}}else if(rt!==void 0){let dt=rt[xt];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(it.location,dt);break;case 3:s.vertexAttrib3fv(it.location,dt);break;case 4:s.vertexAttrib4fv(it.location,dt);break;default:s.vertexAttrib1fv(it.location,dt)}}}}S()}function R(){I();for(let V in n){let H=n[V];for(let j in H){let X=H[j];for(let J in X){let at=X[J];for(let rt in at)h(at[rt].object),delete at[rt];delete X[J]}}delete n[V]}}function w(V){if(n[V.id]===void 0)return;let H=n[V.id];for(let j in H){let X=H[j];for(let J in X){let at=X[J];for(let rt in at)h(at[rt].object),delete at[rt];delete X[J]}}delete n[V.id]}function D(V){for(let H in n){let j=n[H];for(let X in j){let J=j[X];if(J[V.id]===void 0)continue;let at=J[V.id];for(let rt in at)h(at[rt].object),delete at[rt];delete J[V.id]}}}function x(V){for(let H in n){let j=n[H],X=V.isInstancedMesh===!0?V.id:0,J=j[X];if(J!==void 0){for(let at in J){let rt=J[at];for(let xt in rt)h(rt[xt].object),delete rt[xt];delete J[at]}delete j[X],Object.keys(j).length===0&&delete n[H]}}}function I(){F(),a=!0,r!==i&&(r=i,c(r.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function rv(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function av(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==un&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let x=D===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==yn&&D!==hn&&!x&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:b,maxSamples:R,samples:w}}function ov(s){let t=this,e=null,n=0,i=!1,r=!1,a=new On,o=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,C=S*4,b=m.clippingState||null;l.value=b,b=h(p,u,C,f);for(let R=0;R!==C;++R)b[R]=e[R];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let C=0,b=f;C!==y;++C,b+=4)a.copy(d[C]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var la=4,lv=6,cv=20,hv=256,zl=new ts,Vm=new Xt,tf=null,ef=0,nf=0,sf=!1,uv=new U,ks=new U,Gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=uv}=r;tf=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tf,ef,nf),this._renderer.xr.enabled=sf,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ii||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tf=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:Hn,format:un,colorSpace:gr,depthBuffer:!1},i=Gm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gm(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dv(r)),this._blurMaterial=pv(r,t,e),this._ggxMaterial=fv(r,t,e)}return i}_compileMaterial(t){let e=new Le(new de,t);this._renderer.compile(e,zl)}_sceneToCubeUV(t,e,n,i,r){let l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Vm),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Zi,new jn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(Vm),m=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):b===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let R=this._cubeSize;oa(i,b*R,C>2?R:0,R,R),d.setRenderTarget(i),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ii||t.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;oa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,y=this._sizeLods[n],g=3*y*(n>p-la?n-p+la:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,oa(r,g,m,3*y,2*y),i.setRenderTarget(r),i.render(o,zl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,oa(t,g,m,3*y,2*y),i.setRenderTarget(t),i.render(o,zl)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-la?i-this._lodMax+la:0),u=4*(this._cubeSize-h);oa(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,zl)}};function dv(s){let t=[],e=[],n=s,i=s-la+1+lv;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,C=m>2?0:-1,b=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];p.set(b,f*u*m);for(let R=0;R<u;R++){let w=h[R*2]*2-1,D=h[R*2+1]*2-1;m===0?ks.set(1,D,w):m===1?ks.set(-w,1,-D):m===2?ks.set(-w,D,1):m===3?ks.set(-1,D,-w):m===4?ks.set(-w,-1,D):ks.set(w,D,-1),ks.toArray(y,(m*u+R)*f)}}let g=new de;g.setAttribute("position",new Ae(p,f)),g.setAttribute("outputDirection",new Ae(y,f)),e.push(new Le(g,null)),n>la&&n--}return{lodMeshes:e,sizeLods:t}}function Gm(s,t,e){let n=new We(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function fv(s,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function pv(s,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:cv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Hm(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Wm(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hl=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new $i(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zi(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ni});r.uniforms.tEquirect.value=e;let a=new Le(i,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=Ie),new Xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function mv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Kr||f===jr)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Hl(p.height);return y.fromEquirectangularTexture(s,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Kr||f===jr,y=f===ii||f===Pi;if(p||y){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Gl(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return p&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Gl(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Kr?u.mapping=ii:f===jr&&(u.mapping=Pi),u}function l(u){let f=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function gv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&oi("WebGLRenderer: "+n+" extension not supported."),i}}}function _v(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,y=0;if(p===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let C=0,b=S.length;C<b;C+=3){let R=S[C+0],w=S[C+1],D=S[C+2];u.push(R,w,w,D,D,R)}}else{let S=p.array;y=p.version;for(let C=0,b=S.length/3-1;C<b;C+=3){let R=C+0,w=C+1,D=C+2;u.push(R,w,w,D,D,R)}}let g=new(p.count>=65535?Mr:br)(u,1);g.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xv(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vv(s,t,e){let n=new WeakMap,i=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let I=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],C=0;f===!0&&(C=1),p===!0&&(C=2),y===!0&&(C=3);let b=o.attributes.position.count*C,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*R*4*d),D=new bs(w,b,R,d);D.type=hn,D.needsUpdate=!0;let x=C*4;for(let F=0;F<d;F++){let V=g[F],H=m[F],j=S[F],X=b*R*4*F;for(let J=0;J<V.count;J++){let at=J*x;f===!0&&(i.fromBufferAttribute(V,J),w[X+at+0]=i.x,w[X+at+1]=i.y,w[X+at+2]=i.z,w[X+at+3]=0),p===!0&&(i.fromBufferAttribute(H,J),w[X+at+4]=i.x,w[X+at+5]=i.y,w[X+at+6]=i.z,w[X+at+7]=0),y===!0&&(i.fromBufferAttribute(j,J),w[X+at+8]=i.x,w[X+at+9]=i.y,w[X+at+10]=i.z,w[X+at+11]=j.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new yt(b,R)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function bv(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Mv={[Zh]:"LINEAR_TONE_MAPPING",[Jh]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[Qh]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function Sv(s,t,e,n,i,r){let a=new We(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new de;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new Or({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Le(c,h),u=new ts(-1,1,1,-1,0,1),f=null,p=null,y=!1,g,m=null,S=[],C=!1;this.setSize=function(b,R){a.setSize(b,R),o!==null&&o.setSize(b,R),l!==null&&l.setSize(b,R);for(let w=0;w<S.length;w++){let D=S[w];D.setSize&&D.setSize(b,R)}},this.setEffects=function(b){S=b,C=S.length>0&&S[0].isRenderPass===!0;let R=a.width,w=a.height;S.length>0&&o===null&&(o=new We(R,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new We(R,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<S.length;D++){let x=S[D];x.setSize&&x.setSize(R,w)}},this.begin=function(b,R){if(y||b.toneMapping===Gn&&S.length===0)return!1;if(m=R,R!==null){let w=R.width,D=R.height;(a.width!==w||a.height!==D)&&this.setSize(w,D)}return C===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Gn,!0},this.hasRenderPass=function(){return C},this.end=function(b,R){b.toneMapping=g,y=!0;let w=a,D=o;for(let x=0;x<S.length;x++){let I=S[x];I.enabled!==!1&&(I.render(b,D,w,R),I.needsSwap!==!1&&(w=D,D=D===o?l:o))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,h.defines={},xe.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let x=Mv[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(m),b.render(d,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var hg=new Oe,of=new ti(1,1),ug=new bs,dg=new Ms,fg=new $i,Xm=[],qm=[],Ym=new Float32Array(16),$m=new Float32Array(9),Zm=new Float32Array(4);function ha(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Xm[i];if(r===void 0&&(r=new Float32Array(i),Xm[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function pu(s,t){let e=qm[t];e===void 0&&(e=new Int32Array(t),qm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function wv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function Ev(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function Cv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Zm.set(n),s.uniformMatrix2fv(this.addr,!1,Zm),qe(e,n)}}function Rv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;$m.set(n),s.uniformMatrix3fv(this.addr,!1,$m),qe(e,n)}}function Iv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Ym.set(n),s.uniformMatrix4fv(this.addr,!1,Ym),qe(e,n)}}function Pv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function Dv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function Nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function Uv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Fv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function Ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function Bv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function zv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(of.compareFunction=e.isReversedDepthBuffer()?Ol:Fl,r=of):r=hg,e.setTexture2D(t||r,i)}function kv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dg,i)}function Vv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fg,i)}function Gv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ug,i)}function Hv(s){switch(s){case 5126:return Tv;case 35664:return Av;case 35665:return wv;case 35666:return Ev;case 35674:return Cv;case 35675:return Rv;case 35676:return Iv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Wv(s,t){s.uniform1fv(this.addr,t)}function Xv(s,t){let e=ha(t,this.size,2);s.uniform2fv(this.addr,e)}function qv(s,t){let e=ha(t,this.size,3);s.uniform3fv(this.addr,e)}function Yv(s,t){let e=ha(t,this.size,4);s.uniform4fv(this.addr,e)}function $v(s,t){let e=ha(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Zv(s,t){let e=ha(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Jv(s,t){let e=ha(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kv(s,t){s.uniform1iv(this.addr,t)}function jv(s,t){s.uniform2iv(this.addr,t)}function Qv(s,t){s.uniform3iv(this.addr,t)}function tb(s,t){s.uniform4iv(this.addr,t)}function eb(s,t){s.uniform1uiv(this.addr,t)}function nb(s,t){s.uniform2uiv(this.addr,t)}function ib(s,t){s.uniform3uiv(this.addr,t)}function sb(s,t){s.uniform4uiv(this.addr,t)}function rb(s,t,e){let n=this.cache,i=t.length,r=pu(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=of:a=hg;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function ab(s,t,e){let n=this.cache,i=t.length,r=pu(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dg,r[a])}function ob(s,t,e){let n=this.cache,i=t.length,r=pu(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fg,r[a])}function lb(s,t,e){let n=this.cache,i=t.length,r=pu(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ug,r[a])}function cb(s){switch(s){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return $v;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return Kv;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}var lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hv(e.type)}},cf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cb(e.type)}},hf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},rf=/(\w+)(\])?(\[|\.)?/g;function Jm(s,t){s.seq.push(t),s.map[t.id]=t}function hb(s,t,e){let n=s.name,i=n.length;for(rf.lastIndex=0;;){let r=rf.exec(n),a=rf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Jm(e,c===void 0?new lf(o,s,t):new cf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new hf(o),Jm(e,d)),e=d}}}var ca=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);hb(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Km(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var ub=37297,db=0;function fb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jm=new he;function pb(s){xe._getMatrix(jm,xe.workingColorSpace,s);let t=`mat3( ${jm.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case _r:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+fb(s.getShaderSource(t),o)}else return r}function mb(s,t){let e=pb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gb={[Zh]:"Linear",[Jh]:"Reinhard",[Kh]:"Cineon",[Jr]:"ACESFilmic",[Qh]:"AgX",[tu]:"Neutral",[jh]:"Custom"};function _b(s,t){let e=gb[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var du=new U;function xb(){xe.getLuminanceCoefficients(du);let s=du.x.toFixed(4),t=du.y.toFixed(4),e=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function vb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Vl(s){return s!==""}function tg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(s){return s.replace(Mb,Tb)}var Sb=new Map;function Tb(s,t){let e=_e[t];if(e===void 0){let n=Sb.get(t);if(n!==void 0)e=_e[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return uf(e)}var Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(s){return s.replace(Ab,wb)}function wb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ig(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Eb={[es]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Cb(s){return Eb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rb={[ii]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function Ib(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Rb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pb={[Pi]:"ENVMAP_MODE_REFRACTION"};function Lb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Pb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Db={[Zr]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function Nb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Db[s.combine]||"ENVMAP_BLENDING_NONE"}function Ub(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fb(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cb(e),c=Ib(e),h=Lb(e),d=Nb(e),u=Ub(e),f=yb(e),p=vb(r),y=i.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vl).join(`
`),m.length>0&&(m+=`
`)):(g=[ig(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),m=[ig(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?_e.tonemapping_pars_fragment:"",e.toneMapping!==Gn?_b("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,mb("linearToOutputTexel",e.outputColorSpace),xb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vl).join(`
`)),a=uf(a),a=tg(a,e),a=eg(a,e),o=uf(o),o=tg(o,e),o=eg(o,e),a=ng(a),o=ng(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=S+g+a,b=S+m+o,R=Km(i,i.VERTEX_SHADER,C),w=Km(i,i.FRAGMENT_SHADER,b);i.attachShader(y,R),i.attachShader(y,w),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function D(V){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(y)||"",j=i.getShaderInfoLog(R)||"",X=i.getShaderInfoLog(w)||"",J=H.trim(),at=j.trim(),rt=X.trim(),xt=!0,it=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(xt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,R,w);else{let pt=Qm(i,R,"vertex"),dt=Qm(i,w,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+pt+`
`+dt)}else J!==""?Vt("WebGLProgram: Program Info Log:",J):(at===""||rt==="")&&(it=!1);it&&(V.diagnostics={runnable:xt,programLog:J,vertexShader:{log:at,prefix:g},fragmentShader:{log:rt,prefix:m}})}i.deleteShader(R),i.deleteShader(w),x=new ca(i,y),I=bb(i,y)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let I;this.getAttributes=function(){return I===void 0&&D(this),I};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(y,ub)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=db++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=w,this}var Ob=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ff(t),e.set(t,n)),n}},ff=class{constructor(t){this.id=Ob++,this.code=t,this.usedTimes=0}};function Bb(s){return s===Di||s===ra||s===aa}function zb(s,t,e,n,i,r){let a=new Ss,o=new df,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,I,F,V,H,j){let X=V.fog,J=H.geometry,at=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?V.environment:null,rt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,xt=t.get(x.envMap||at,rt),it=xt&&xt.mapping===Us?xt.image.height:null,pt=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Yt=dt!==void 0?dt.length:0,Wt=0;J.morphAttributes.position!==void 0&&(Wt=1),J.morphAttributes.normal!==void 0&&(Wt=2),J.morphAttributes.color!==void 0&&(Wt=3);let fe,St,se,st;if(pt){let Se=ri[pt];fe=Se.vertexShader,St=Se.fragmentShader}else{fe=x.vertexShader,St=x.fragmentShader;let Se=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,Se,me),se=Se.id,st=me.id}let ft=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Lt=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,ne=!!x.map,pe=!!x.matcap,nt=!!xt,bt=!!x.aoMap,vt=!!x.lightMap,Q=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Mt=!!x.displacementMap,gt=!!x.emissiveMap,At=!!x.metalnessMap,Bt=!!x.roughnessMap,k=x.anisotropy>0,re=x.clearcoat>0,Et=x.dispersion>0,N=x.retroreflectivity>0,M=x.iridescence>0,G=x.sheen>0,et=x.transmission>0,ct=k&&!!x.anisotropyMap,Ct=re&&!!x.clearcoatMap,Pt=re&&!!x.clearcoatNormalMap,ht=re&&!!x.clearcoatRoughnessMap,mt=M&&!!x.iridescenceMap,Rt=M&&!!x.iridescenceThicknessMap,$t=G&&!!x.sheenColorMap,Nt=G&&!!x.sheenRoughnessMap,Ut=!!x.specularMap,jt=!!x.specularColorMap,Zt=!!x.specularIntensityMap,oe=et&&!!x.transmissionMap,Y=et&&!!x.thicknessMap,wt=!!x.gradientMap,ut=!!x.alphaMap,zt=x.alphaTest>0,Gt=!!x.alphaHash,K=!!x.extensions,Qt=Gn;x.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Qt=s.toneMapping);let Jt={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:St,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ne,matcap:pe,envMap:nt,envMapMode:nt&&xt.mapping,envMapCubeUVHeight:it,aoMap:bt,lightMap:vt,bumpMap:Q,normalMap:_t,displacementMap:Mt,emissiveMap:gt,normalMapObjectSpace:_t&&x.normalMapType===Bd,normalMapTangentSpace:_t&&x.normalMapType===ui,packedNormalMap:_t&&x.normalMapType===ui&&Bb(x.normalMap.format),metalnessMap:At,roughnessMap:Bt,anisotropy:k,anisotropyMap:ct,clearcoat:re,clearcoatMap:Ct,clearcoatNormalMap:Pt,clearcoatRoughnessMap:ht,dispersion:Et,retroreflection:N,iridescence:M,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:G,sheenColorMap:$t,sheenRoughnessMap:Nt,specularMap:Ut,specularColorMap:jt,specularIntensityMap:Zt,transmission:et,transmissionMap:oe,thicknessMap:Y,gradientMap:wt,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:zt,alphaHash:Gt,combine:x.combine,mapUv:ne&&p(x.map.channel),aoMapUv:bt&&p(x.aoMap.channel),lightMapUv:vt&&p(x.lightMap.channel),bumpMapUv:Q&&p(x.bumpMap.channel),normalMapUv:_t&&p(x.normalMap.channel),displacementMapUv:Mt&&p(x.displacementMap.channel),emissiveMapUv:gt&&p(x.emissiveMap.channel),metalnessMapUv:At&&p(x.metalnessMap.channel),roughnessMapUv:Bt&&p(x.roughnessMap.channel),anisotropyMapUv:ct&&p(x.anisotropyMap.channel),clearcoatMapUv:Ct&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ut&&p(x.specularMap.channel),specularColorMapUv:jt&&p(x.specularColorMap.channel),specularIntensityMapUv:Zt&&p(x.specularIntensityMap.channel),transmissionMapUv:oe&&p(x.transmissionMap.channel),thicknessMapUv:Y&&p(x.thicknessMap.channel),alphaMapUv:ut&&p(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_t||k),vertexNormals:!!J.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(ne||ut),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||J.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:It,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:Wt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ne&&x.map.isVideoTexture===!0&&xe.getTransfer(x.map.colorSpace)===Me,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&xe.getTransfer(x.emissiveMap.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:K&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&x.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function g(x){let I=[];if(x.shaderID?I.push(x.shaderID):(I.push(x.customVertexShaderID),I.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)I.push(F),I.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(m(I,x),S(I,x),I.push(s.outputColorSpace)),I.push(x.customProgramCacheKey),I.join()}function m(x,I){x.push(I.precision),x.push(I.outputColorSpace),x.push(I.envMapMode),x.push(I.envMapCubeUVHeight),x.push(I.mapUv),x.push(I.alphaMapUv),x.push(I.lightMapUv),x.push(I.aoMapUv),x.push(I.bumpMapUv),x.push(I.normalMapUv),x.push(I.displacementMapUv),x.push(I.emissiveMapUv),x.push(I.metalnessMapUv),x.push(I.roughnessMapUv),x.push(I.anisotropyMapUv),x.push(I.clearcoatMapUv),x.push(I.clearcoatNormalMapUv),x.push(I.clearcoatRoughnessMapUv),x.push(I.iridescenceMapUv),x.push(I.iridescenceThicknessMapUv),x.push(I.sheenColorMapUv),x.push(I.sheenRoughnessMapUv),x.push(I.specularMapUv),x.push(I.specularColorMapUv),x.push(I.specularIntensityMapUv),x.push(I.transmissionMapUv),x.push(I.thicknessMapUv),x.push(I.combine),x.push(I.fogExp2),x.push(I.sizeAttenuation),x.push(I.morphTargetsCount),x.push(I.morphAttributeCount),x.push(I.numSunLights),x.push(I.numDirLights),x.push(I.numPointLights),x.push(I.numSpotLights),x.push(I.numSpotLightMaps),x.push(I.numHemiLights),x.push(I.numRectAreaLights),x.push(I.numSunLightShadows),x.push(I.numDirLightShadows),x.push(I.numPointLightShadows),x.push(I.numSpotLightShadows),x.push(I.numSpotLightShadowsWithMaps),x.push(I.numLightProbes),x.push(I.shadowMapType),x.push(I.toneMapping),x.push(I.numClippingPlanes),x.push(I.numClipIntersection),x.push(I.depthPacking)}function S(x,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let I=f[x.type],F;if(I){let V=ri[I];F=Jd.clone(V.uniforms)}else F=x.uniforms;return F}function b(x,I){let F=h.get(I);return F!==void 0?++F.usedTimes:(F=new Fb(s,I,x,i),c.push(F),h.set(I,F)),F}function R(x){if(--x.usedTimes===0){let I=c.indexOf(x);c[I]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function D(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:b,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:D}}function kb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Vb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function sg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,y,g,m){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},s[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=g,S.group=m),t++,S}function l(u,f,p,y,g,m,S){S.reversedDepth===!0&&(g=-g);let C=o(u,f,p,y,g,m);p.transmission>0?n.push(C):p.transparent===!0?i.push(C):e.push(C)}function c(u,f,p,y,g,m){let S=o(u,f,p,y,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||Vb),n.length>1&&n.sort(f||sg),i.length>1&&i.sort(f||sg)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Gb(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new rg,s.set(n,[a])):i>=r.length?(a=new rg,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Hb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Xt};break;case"SpotLight":e={position:new U,direction:new U,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Wb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Xb=0;function qb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yb(s){let t=new Hb,e=Wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new ce,a=new ce;function o(c){let h=0,d=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,S=0,C=0,b=0,R=0,w=0,D=0,x=0,I=0,F=0;c.sort(qb);for(let H=0,j=c.length;H<j;H++){let X=c[H],J=X.color,at=X.intensity,rt=X.distance,xt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Di?xt=X.shadow.map.texture:xt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)h+=J.r*at,d+=J.g*at,u+=J.b*at;else if(X.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(X.sh.coefficients[it],at);F++}else if(X.isSunLight){let it=t.get(X);if(it.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let pt=X.shadow,dt=e.get(X);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),n.sunShadow[p]=dt,n.sunShadowMap[p]=xt;let Yt=pt.getViewportCount();for(let Wt=0;Wt<Yt;Wt++)n.sunShadowMatrix[y+Wt]=pt.getMatrix(Wt),n.sunShadowCascade[y+Wt]=pt._cascadeData[Wt];y+=Yt,p++}n.sun[f]=it,f++}else if(X.isDirectionalLight){let it=t.get(X);if(it.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let pt=X.shadow,dt=e.get(X);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,n.directionalShadow[g]=dt,n.directionalShadowMap[g]=xt,n.directionalShadowMatrix[g]=X.shadow.matrix,R++}n.directional[g]=it,g++}else if(X.isSpotLight){let it=t.get(X);it.position.setFromMatrixPosition(X.matrixWorld),it.color.copy(J).multiplyScalar(at),it.distance=rt,it.coneCos=Math.cos(X.angle),it.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),it.decay=X.decay,n.spot[S]=it;let pt=X.shadow;if(X.map&&(n.spotLightMap[x]=X.map,x++,pt.updateMatrices(X),X.castShadow&&I++),n.spotLightMatrix[S]=pt.matrix,X.castShadow){let dt=e.get(X);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,n.spotShadow[S]=dt,n.spotShadowMap[S]=xt,D++}S++}else if(X.isRectAreaLight){let it=t.get(X);it.color.copy(J).multiplyScalar(at),it.halfWidth.set(X.width*.5,0,0),it.halfHeight.set(0,X.height*.5,0),n.rectArea[C]=it,C++}else if(X.isPointLight){let it=t.get(X);if(it.color.copy(X.color).multiplyScalar(X.intensity),it.distance=X.distance,it.decay=X.decay,X.castShadow){let pt=X.shadow,dt=e.get(X);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,dt.shadowCameraNear=pt.camera.near,dt.shadowCameraFar=pt.camera.far,n.pointShadow[m]=dt,n.pointShadowMap[m]=xt,n.pointShadowMatrix[m]=X.shadow.matrix,w++}n.point[m]=it,m++}else if(X.isHemisphereLight){let it=t.get(X);it.skyColor.copy(X.color).multiplyScalar(at),it.groundColor.copy(X.groundColor).multiplyScalar(at),n.hemi[b]=it,b++}}C>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let V=n.hash;(V.sunLength!==f||V.directionalLength!==g||V.pointLength!==m||V.spotLength!==S||V.rectAreaLength!==C||V.hemiLength!==b||V.numSunShadows!==p||V.numDirectionalShadows!==R||V.numPointShadows!==w||V.numSpotShadows!==D||V.numSpotMaps!==x||V.numLightProbes!==F)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=C,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+x-I,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=F,V.sunLength=f,V.directionalLength=g,V.pointLength=m,V.spotLength=S,V.rectAreaLength=C,V.hemiLength=b,V.numSunShadows=p,V.numDirectionalShadows=R,V.numPointShadows=w,V.numSpotShadows=D,V.numSpotMaps=x,V.numLightProbes=F,n.version=Xb++)}function l(c,h){let d=0,u=0,f=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let S=0,C=c.length;S<C;S++){let b=c[S];if(b.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),d++}else if(b.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(m),u++}else if(b.isSpotLight){let R=n.spot[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function ag(s){let t=new Yb(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $b(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new ag(s),t.set(i,[o])):r>=a.length?(o=new ag(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
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
}`,Kb=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],jb=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],og=new ce,kl=new U,af=new U;function Qb(s,t,e){let n=new li,i=new yt,r=new yt,a=new ve,o=new zr,l=new kr,c={},h=e.maxTextureSize,d={[Ii]:dn,[dn]:Ii,[Dn]:Dn},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Zb,fragmentShader:Jb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new de;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Le(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let m=this.type;this.render=function(w,D,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===dd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let I=s.getRenderTarget(),F=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ni),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=m!==this.type;j&&D.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(J=>J.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,J=w.length;X<J;X++){let at=w[X],rt=at.shadow;if(rt===void 0){Vt("WebGLShadowMap:",at,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;i.copy(rt.mapSize);let xt=rt.getFrameExtents();i.multiply(xt),r.copy(rt.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/xt.x),i.x=r.x*xt.x,rt.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/xt.y),i.y=r.y*xt.y,rt.mapSize.y=r.y));let it=s.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=it,rt.map===null||j===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Ds){if(at.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new We(i.x,i.y,{format:Di,type:Hn,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),rt.map.texture.name=at.name+".shadowMap",rt.map.depthTexture=new ti(i.x,i.y,hn),rt.map.depthTexture.name=at.name+".shadowMapDepth",rt.map.depthTexture.format=Kn,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=Pe,rt.map.depthTexture.magFilter=Pe}else at.isPointLight?(rt.map=new Hl(i.x),rt.map.depthTexture=new to(i.x,vn)):(rt.map=new We(i.x,i.y),rt.map.depthTexture=new ti(i.x,i.y,vn)),rt.map.depthTexture.name=at.name+".shadowMap",rt.map.depthTexture.format=Kn,this.type===es?(rt.map.depthTexture.compareFunction=it?Ol:Fl,rt.map.depthTexture.minFilter=Ie,rt.map.depthTexture.magFilter=Ie):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=Pe,rt.map.depthTexture.magFilter=Pe);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==i.x||rt.map.height!==i.y)&&rt.map.setSize(i.x,i.y);let pt=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();at.isPointLight!==!0&&rt.updateMatrices(at,x);for(let dt=0;dt<pt;dt++){let Yt=rt.getCamera(dt);if(at.isPointLight){let Wt=rt.camera,fe=rt.matrix,St=at.distance||Wt.far;St!==Wt.far&&(Wt.far=St,Wt.updateProjectionMatrix()),kl.setFromMatrixPosition(at.matrixWorld),Wt.position.copy(kl),af.copy(Wt.position),af.add(Kb[dt]),Wt.up.copy(jb[dt]),Wt.lookAt(af),Wt.updateMatrixWorld(),fe.makeTranslation(-kl.x,-kl.y,-kl.z),og.multiplyMatrices(Wt.projectionMatrix,Wt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(og,Wt.coordinateSystem,Wt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)s.setRenderTarget(rt.map,dt),s.clear();else{dt===0&&(s.setRenderTarget(rt.map),s.clear());let Wt=rt.getViewport(dt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),H.viewport(a)}n=rt.getFrustum(dt),b(D,x,Yt,at,this.type)}rt.isPointLightShadow!==!0&&this.type===Ds&&S(rt,x),rt.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(I,F,V)};function S(w,D){let x=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new We(i.x,i.y,{format:Di,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(D,null,x,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(D,null,x,f,y,null)}function C(w,D,x,I){let F=null,V=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)F=V;else if(F=x.isPointLight===!0?l:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=F.uuid,j=D.uuid,X=c[H];X===void 0&&(X={},c[H]=X);let J=X[j];J===void 0&&(J=F.clone(),X[j]=J,D.addEventListener("dispose",R)),F=J}if(F.visible=D.visible,F.wireframe=D.wireframe,I===Ds?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:d[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let H=s.properties.get(F);H.light=x}return F}function b(w,D,x,I,F){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Ds)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let j=t.update(w),X=w.material;if(Array.isArray(X)){let J=j.groups;for(let at=0,rt=J.length;at<rt;at++){let xt=J[at],it=X[xt.materialIndex];if(it&&it.visible){let pt=C(w,it,I,F);w.onBeforeShadow(s,w,D,x,j,pt,xt),s.renderBufferDirect(x,null,j,pt,w,xt),w.onAfterShadow(s,w,D,x,j,pt,xt)}}}else if(X.visible){let J=C(w,X,I,F);w.onBeforeShadow(s,w,D,x,j,J,null),s.renderBufferDirect(x,null,j,J,w,null),w.onAfterShadow(s,w,D,x,j,J,null)}}let H=w.children;for(let j=0,X=H.length;j<X;j++)b(H[j],D,x,I,F)}function R(w){w.target.removeEventListener("dispose",R);for(let x in c){let I=c[x],F=w.target.uuid;F in I&&(I[F].dispose(),delete I[F])}}}function tM(s,t){function e(){let Y=!1,wt=new ve,ut=null,zt=new ve(0,0,0,0);return{setMask:function(Gt){ut!==Gt&&!Y&&(s.colorMask(Gt,Gt,Gt,Gt),ut=Gt)},setLocked:function(Gt){Y=Gt},setClear:function(Gt,K,Qt,Jt,Se){Se===!0&&(Gt*=Jt,K*=Jt,Qt*=Jt),wt.set(Gt,K,Qt,Jt),zt.equals(wt)===!1&&(s.clearColor(Gt,K,Qt,Jt),zt.copy(wt))},reset:function(){Y=!1,ut=null,zt.set(-1,0,0,0)}}}function n(){let Y=!1,wt=!1,ut=null,zt=null,Gt=null;return{setReversed:function(K){if(wt!==K){let Qt=t.get("EXT_clip_control");K?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),wt=K;let Jt=Gt;Gt=null,this.setClear(Jt)}},getReversed:function(){return wt},setTest:function(K){K?ft(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(K){ut!==K&&!Y&&(s.depthMask(K),ut=K)},setFunc:function(K){if(wt&&(K=Rm[K]),zt!==K){switch(K){case Da:s.depthFunc(s.NEVER);break;case Na:s.depthFunc(s.ALWAYS);break;case Ua:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case Ba:s.depthFunc(s.GREATER);break;case za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=K}},setLocked:function(K){Y=K},setClear:function(K){Gt!==K&&(Gt=K,wt&&(K=1-K),s.clearDepth(K))},reset:function(){Y=!1,ut=null,zt=null,Gt=null,wt=!1}}}function i(){let Y=!1,wt=null,ut=null,zt=null,Gt=null,K=null,Qt=null,Jt=null,Se=null;return{setTest:function(me){Y||(me?ft(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(me){wt!==me&&!Y&&(s.stencilMask(me),wt=me)},setFunc:function(me,je,Ye){(ut!==me||zt!==je||Gt!==Ye)&&(s.stencilFunc(me,je,Ye),ut=me,zt=je,Gt=Ye)},setOp:function(me,je,Ye){(K!==me||Qt!==je||Jt!==Ye)&&(s.stencilOp(me,je,Ye),K=me,Qt=je,Jt=Ye)},setLocked:function(me){Y=me},setClear:function(me){Se!==me&&(s.clearStencil(me),Se=me)},reset:function(){Y=!1,wt=null,ut=null,zt=null,Gt=null,K=null,Qt=null,Jt=null,Se=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,S=null,C=null,b=null,R=null,w=null,D=null,x=new Xt(0,0,0),I=0,F=!1,V=null,H=null,j=null,X=null,J=null,at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,xt=0,it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(it)[1]),rt=xt>=1):it.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),rt=xt>=2);let pt=null,dt={},Yt=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),fe=new ve().fromArray(Yt),St=new ve().fromArray(Wt);function se(Y,wt,ut,zt){let Gt=new Uint8Array(4),K=s.createTexture();s.bindTexture(Y,K),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<ut;Qt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Gt):s.texImage2D(wt+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Gt);return K}let st={};st[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(s.DEPTH_TEST),a.setFunc(ys),Q(!1),_t(Hh),ft(s.CULL_FACE),bt(ni);function ft(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function It(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function Lt(Y,wt){return u[Y]!==wt?(s.bindFramebuffer(Y,wt),u[Y]=wt,Y===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=wt),Y===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Dt(Y,wt){let ut=p,zt=!1;if(Y){ut=f.get(wt),ut===void 0&&(ut=[],f.set(wt,ut));let Gt=Y.textures;if(ut.length!==Gt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let K=0,Qt=Gt.length;K<Qt;K++)ut[K]=s.COLOR_ATTACHMENT0+K;ut.length=Gt.length,zt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,zt=!0);zt&&s.drawBuffers(ut)}function ne(Y){return y!==Y?(s.useProgram(Y),y=Y,!0):!1}let pe={[ns]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};pe[gd]=s.MIN,pe[_d]=s.MAX;let nt={[xd]:s.ZERO,[yd]:s.ONE,[vd]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[wd]:s.SRC_ALPHA_SATURATE,[Td]:s.DST_COLOR,[Md]:s.DST_ALPHA,[bd]:s.ONE_MINUS_SRC_COLOR,[$h]:s.ONE_MINUS_SRC_ALPHA,[Ad]:s.ONE_MINUS_DST_COLOR,[Sd]:s.ONE_MINUS_DST_ALPHA,[Ed]:s.CONSTANT_COLOR,[Cd]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[Id]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(Y,wt,ut,zt,Gt,K,Qt,Jt,Se,me){if(Y===ni){g===!0&&(It(s.BLEND),g=!1);return}if(g===!1&&(ft(s.BLEND),g=!0),Y!==fd){if(Y!==m||me!==F){if((S!==ns||R!==ns)&&(s.blendEquation(s.FUNC_ADD),S=ns,R=ns),me)switch(Y){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wh:s.blendFunc(s.ONE,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qh:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",Y);break}C=null,b=null,w=null,D=null,x.set(0,0,0),I=0,m=Y,F=me}return}Gt=Gt||wt,K=K||ut,Qt=Qt||zt,(wt!==S||Gt!==R)&&(s.blendEquationSeparate(pe[wt],pe[Gt]),S=wt,R=Gt),(ut!==C||zt!==b||K!==w||Qt!==D)&&(s.blendFuncSeparate(nt[ut],nt[zt],nt[K],nt[Qt]),C=ut,b=zt,w=K,D=Qt),(Jt.equals(x)===!1||Se!==I)&&(s.blendColor(Jt.r,Jt.g,Jt.b,Se),x.copy(Jt),I=Se),m=Y,F=!1}function vt(Y,wt){Y.side===Dn?It(s.CULL_FACE):ft(s.CULL_FACE);let ut=Y.side===dn;wt&&(ut=!ut),Q(ut),Y.blending===Ns&&Y.transparent===!1?bt(ni):bt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let zt=Y.stencilWrite;o.setTest(zt),zt&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),gt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(Y){V!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),V=Y)}function _t(Y){Y!==hd?(ft(s.CULL_FACE),Y!==H&&(Y===Hh?s.cullFace(s.BACK):Y===ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),H=Y}function Mt(Y){Y!==j&&(rt&&s.lineWidth(Y),j=Y)}function gt(Y,wt,ut){Y?(ft(s.POLYGON_OFFSET_FILL),(X!==wt||J!==ut)&&(X=wt,J=ut,a.getReversed()&&(wt=-wt),s.polygonOffset(wt,ut))):It(s.POLYGON_OFFSET_FILL)}function At(Y){Y?ft(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function Bt(Y){Y===void 0&&(Y=s.TEXTURE0+at-1),pt!==Y&&(s.activeTexture(Y),pt=Y)}function k(Y,wt,ut){ut===void 0&&(pt===null?ut=s.TEXTURE0+at-1:ut=pt);let zt=dt[ut];zt===void 0&&(zt={type:void 0,texture:void 0},dt[ut]=zt),(zt.type!==Y||zt.texture!==wt)&&(pt!==ut&&(s.activeTexture(ut),pt=ut),s.bindTexture(Y,wt||st[Y]),zt.type=Y,zt.texture=wt)}function re(){let Y=dt[pt];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Et(){try{s.compressedTexImage2D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function M(){try{s.texSubImage2D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function G(){try{s.texSubImage3D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function ct(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function Ct(){try{s.texStorage2D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function Pt(){try{s.texStorage3D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function ht(){try{s.texImage2D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function mt(){try{s.texImage3D(...arguments)}catch(Y){ee("WebGLState:",Y)}}function Rt(Y){return d[Y]!==void 0?d[Y]:s.getParameter(Y)}function $t(Y,wt){d[Y]!==wt&&(s.pixelStorei(Y,wt),d[Y]=wt)}function Nt(Y){fe.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),fe.copy(Y))}function Ut(Y){St.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),St.copy(Y))}function jt(Y,wt){let ut=c.get(wt);ut===void 0&&(ut=new WeakMap,c.set(wt,ut));let zt=ut.get(Y);zt===void 0&&(zt=s.getUniformBlockIndex(wt,Y.name),ut.set(Y,zt))}function Zt(Y,wt){let zt=c.get(wt).get(Y);l.get(wt)!==zt&&(s.uniformBlockBinding(wt,zt,Y.__bindingPointIndex),l.set(wt,zt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},pt=null,dt={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,S=null,C=null,b=null,R=null,w=null,D=null,x=new Xt(0,0,0),I=0,F=!1,V=null,H=null,j=null,X=null,J=null,fe.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:It,bindFramebuffer:Lt,drawBuffers:Dt,useProgram:ne,setBlending:bt,setMaterial:vt,setFlipSided:Q,setCullFace:_t,setLineWidth:Mt,setPolygonOffset:gt,setScissorTest:At,activeTexture:Bt,bindTexture:k,unbindTexture:re,compressedTexImage2D:Et,compressedTexImage3D:N,texImage2D:ht,texImage3D:mt,pixelStorei:$t,getParameter:Rt,updateUBOMapping:jt,uniformBlockBinding:Zt,texStorage2D:Ct,texStorage3D:Pt,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:et,compressedTexSubImage3D:ct,scissor:Nt,viewport:Ut,reset:oe}}function eM(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,M){return p?new OffscreenCanvas(N,M):xr("canvas")}function g(N,M,G){let et=1,ct=Et(N);if((ct.width>G||ct.height>G)&&(et=G/Math.max(ct.width,ct.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Ct=Math.floor(et*ct.width),Pt=Math.floor(et*ct.height);u===void 0&&(u=y(Ct,Pt));let ht=M?y(Ct,Pt):u;return ht.width=Ct,ht.height=Pt,ht.getContext("2d").drawImage(N,0,0,Ct,Pt),Vt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Ct+"x"+Pt+")."),ht}else return"data"in N&&Vt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),N;return N}function m(N){return N.generateMipmaps}function S(N){s.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(N,M,G,et,ct,Ct=!1){if(N!==null){if(s[N]!==void 0)return s[N];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pt;et&&(Pt=t.get("EXT_texture_norm16"),Pt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=M;if(M===s.RED&&(G===s.FLOAT&&(ht=s.R32F),G===s.HALF_FLOAT&&(ht=s.R16F),G===s.UNSIGNED_BYTE&&(ht=s.R8),G===s.UNSIGNED_SHORT&&Pt&&(ht=Pt.R16_EXT),G===s.SHORT&&Pt&&(ht=Pt.R16_SNORM_EXT)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ht=s.R8UI),G===s.UNSIGNED_SHORT&&(ht=s.R16UI),G===s.UNSIGNED_INT&&(ht=s.R32UI),G===s.BYTE&&(ht=s.R8I),G===s.SHORT&&(ht=s.R16I),G===s.INT&&(ht=s.R32I)),M===s.RG&&(G===s.FLOAT&&(ht=s.RG32F),G===s.HALF_FLOAT&&(ht=s.RG16F),G===s.UNSIGNED_BYTE&&(ht=s.RG8),G===s.UNSIGNED_SHORT&&Pt&&(ht=Pt.RG16_EXT),G===s.SHORT&&Pt&&(ht=Pt.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ht=s.RG8UI),G===s.UNSIGNED_SHORT&&(ht=s.RG16UI),G===s.UNSIGNED_INT&&(ht=s.RG32UI),G===s.BYTE&&(ht=s.RG8I),G===s.SHORT&&(ht=s.RG16I),G===s.INT&&(ht=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),G===s.UNSIGNED_INT&&(ht=s.RGB32UI),G===s.BYTE&&(ht=s.RGB8I),G===s.SHORT&&(ht=s.RGB16I),G===s.INT&&(ht=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),G===s.UNSIGNED_INT&&(ht=s.RGBA32UI),G===s.BYTE&&(ht=s.RGBA8I),G===s.SHORT&&(ht=s.RGBA16I),G===s.INT&&(ht=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_SHORT&&Pt&&(ht=Pt.RGB16_EXT),G===s.SHORT&&Pt&&(ht=Pt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),M===s.RGBA){let mt=Ct?_r:xe.getTransfer(ct);G===s.FLOAT&&(ht=s.RGBA32F),G===s.HALF_FLOAT&&(ht=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ht=mt===Me?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&Pt&&(ht=Pt.RGBA16_EXT),G===s.SHORT&&Pt&&(ht=Pt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function R(N,M){let G;return N?M===null||M===vn||M===Bs?G=s.DEPTH24_STENCIL8:M===hn?G=s.DEPTH32F_STENCIL8:M===Os&&(G=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vn||M===Bs?G=s.DEPTH_COMPONENT24:M===hn?G=s.DEPTH_COMPONENT32F:M===Os&&(G=s.DEPTH_COMPONENT16),G}function w(N,M){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Pe&&N.minFilter!==Ie?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function D(N){let M=N.target;M.removeEventListener("dispose",D),I(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function x(N){let M=N.target;M.removeEventListener("dispose",x),V(M)}function I(N){let M=n.get(N);if(M.__webglInit===void 0)return;let G=N.source,et=f.get(G);if(et){let ct=et[M.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&F(N),Object.keys(et).length===0&&f.delete(G)}n.remove(N)}function F(N){let M=n.get(N);s.deleteTexture(M.__webglTexture);let G=N.source,et=f.get(G);delete et[M.__cacheKey],a.memory.textures--}function V(N){let M=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let ct=0;ct<M.__webglFramebuffer[et].length;ct++)s.deleteFramebuffer(M.__webglFramebuffer[et][ct]);else s.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)s.deleteFramebuffer(M.__webglFramebuffer[et]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=N.textures;for(let et=0,ct=G.length;et<ct;et++){let Ct=n.get(G[et]);Ct.__webglTexture&&(s.deleteTexture(Ct.__webglTexture),a.memory.textures--),n.remove(G[et])}n.remove(N)}let H=0;function j(){H=0}function X(){return H}function J(N){H=N}function at(){let N=H;return N>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,N}function rt(N){let M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function xt(N,M){let G=n.get(N);if(N.isVideoTexture&&k(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let et=N.image;if(et===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{It(G,N,M);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function it(N,M){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){It(G,N,M);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function pt(N,M){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){It(G,N,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function dt(N,M){let G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){Lt(G,N,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let Yt={[dr]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[fr]:s.MIRRORED_REPEAT},Wt={[Pe]:s.NEAREST,[eu]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Ie]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},fe={[kd]:s.NEVER,[Xd]:s.ALWAYS,[Vd]:s.LESS,[Fl]:s.LEQUAL,[Gd]:s.EQUAL,[Ol]:s.GEQUAL,[Hd]:s.GREATER,[Wd]:s.NOTEQUAL};function St(N,M){if(M.type===hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ie||M.magFilter===Qr||M.magFilter===Fs||M.magFilter===si||M.minFilter===Ie||M.minFilter===Qr||M.minFilter===Fs||M.minFilter===si)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Yt[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Yt[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Yt[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Wt[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Wt[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pe||M.minFilter!==Fs&&M.minFilter!==si||M.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function se(N,M){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",D));let et=M.source,ct=f.get(et);ct===void 0&&(ct={},f.set(et,ct));let Ct=rt(M);if(Ct!==N.__cacheKey){ct[Ct]===void 0&&(ct[Ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ct[Ct].usedTimes++;let Pt=ct[N.__cacheKey];Pt!==void 0&&(ct[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&F(M)),N.__cacheKey=Ct,N.__webglTexture=ct[Ct].texture}return G}function st(N,M,G){return Math.floor(Math.floor(N/G)/M)}function ft(N,M,G,et){let Ct=N.updateRanges;if(Ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,et,M.data);else{Ct.sort(($t,Nt)=>$t.start-Nt.start);let Pt=0;for(let $t=1;$t<Ct.length;$t++){let Nt=Ct[Pt],Ut=Ct[$t],jt=Nt.start+Nt.count,Zt=st(Ut.start,M.width,4),oe=st(Nt.start,M.width,4);Ut.start<=jt+1&&Zt===oe&&st(Ut.start+Ut.count-1,M.width,4)===Zt?Nt.count=Math.max(Nt.count,Ut.start+Ut.count-Nt.start):(++Pt,Ct[Pt]=Ut)}Ct.length=Pt+1;let ht=e.getParameter(s.UNPACK_ROW_LENGTH),mt=e.getParameter(s.UNPACK_SKIP_PIXELS),Rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let $t=0,Nt=Ct.length;$t<Nt;$t++){let Ut=Ct[$t],jt=Math.floor(Ut.start/4),Zt=Math.ceil(Ut.count/4),oe=jt%M.width,Y=Math.floor(jt/M.width),wt=Zt,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(s.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(s.TEXTURE_2D,0,oe,Y,wt,ut,G,et,M.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ht),e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function It(N,M,G){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);let ct=se(N,M),Ct=M.source;e.bindTexture(et,N.__webglTexture,s.TEXTURE0+G);let Pt=n.get(Ct);if(Ct.version!==Pt.__version||ct===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ut=xe.getPrimaries(xe.workingColorSpace),zt=M.colorSpace===di?null:xe.getPrimaries(M.colorSpace),Gt=M.colorSpace===di||ut===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let mt=g(M.image,!1,i.maxTextureSize);mt=re(M,mt);let Rt=r.convert(M.format,M.colorSpace),$t=r.convert(M.type),Nt=b(M.internalFormat,Rt,$t,M.normalized,M.colorSpace,M.isVideoTexture);St(et,M);let Ut,jt=M.mipmaps,Zt=M.isVideoTexture!==!0,oe=Pt.__version===void 0||ct===!0,Y=Ct.dataReady,wt=w(M,mt);if(M.isDepthTexture)Nt=R(M.format===Li,M.type),oe&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Nt,mt.width,mt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,mt.width,mt.height,0,Rt,$t,null));else if(M.isDataTexture)if(jt.length>0){Zt&&oe&&e.texStorage2D(s.TEXTURE_2D,wt,Nt,jt[0].width,jt[0].height);for(let ut=0,zt=jt.length;ut<zt;ut++)Ut=jt[ut],Zt?Y&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,Rt,$t,Ut.data):e.texImage2D(s.TEXTURE_2D,ut,Nt,Ut.width,Ut.height,0,Rt,$t,Ut.data);M.generateMipmaps=!1}else Zt?(oe&&e.texStorage2D(s.TEXTURE_2D,wt,Nt,mt.width,mt.height),Y&&ft(M,mt,Rt,$t)):e.texImage2D(s.TEXTURE_2D,0,Nt,mt.width,mt.height,0,Rt,$t,mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Nt,jt[0].width,jt[0].height,mt.depth);for(let ut=0,zt=jt.length;ut<zt;ut++)if(Ut=jt[ut],M.format!==un)if(Rt!==null)if(Zt){if(Y)if(M.layerUpdates.size>0){let Gt=hu(Ut.width,Ut.height,M.format,M.type);for(let K of M.layerUpdates){let Qt=Ut.data.subarray(K*Gt/Ut.data.BYTES_PER_ELEMENT,(K+1)*Gt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,K,Ut.width,Ut.height,1,Rt,Qt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,mt.depth,Rt,Ut.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Nt,Ut.width,Ut.height,mt.depth,0,Ut.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?Y&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,mt.depth,Rt,$t,Ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,Nt,Ut.width,Ut.height,mt.depth,0,Rt,$t,Ut.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Zt&&oe&&e.texStorage2D(s.TEXTURE_2D,wt,Nt,jt[0].width,jt[0].height);for(let ut=0,zt=jt.length;ut<zt;ut++)Ut=jt[ut],M.format!==un?Rt!==null?Zt?Y&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,Rt,Ut.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,Nt,Ut.width,Ut.height,0,Ut.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Y&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,Rt,$t,Ut.data):e.texImage2D(s.TEXTURE_2D,ut,Nt,Ut.width,Ut.height,0,Rt,$t,Ut.data)}else if(M.isDataArrayTexture)if(Zt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Nt,mt.width,mt.height,mt.depth),Y)if(M.layerUpdates.size>0){let ut=hu(mt.width,mt.height,M.format,M.type);for(let zt of M.layerUpdates){let Gt=mt.data.subarray(zt*ut/mt.data.BYTES_PER_ELEMENT,(zt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,zt,mt.width,mt.height,1,Rt,$t,Gt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Rt,$t,mt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,mt.width,mt.height,mt.depth,0,Rt,$t,mt.data);else if(M.isData3DTexture)Zt?(oe&&e.texStorage3D(s.TEXTURE_3D,wt,Nt,mt.width,mt.height,mt.depth),Y&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Rt,$t,mt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,mt.width,mt.height,mt.depth,0,Rt,$t,mt.data);else if(M.isFramebufferTexture){if(oe)if(Zt)e.texStorage2D(s.TEXTURE_2D,wt,Nt,mt.width,mt.height);else{let ut=mt.width,zt=mt.height;for(let Gt=0;Gt<wt;Gt++)e.texImage2D(s.TEXTURE_2D,Gt,Nt,ut,zt,0,Rt,$t,null),ut>>=1,zt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),mt.parentNode!==ut){ut.appendChild(mt),d.add(M),ut.onpaint=zt=>{let Gt=zt.changedElements;for(let K of d)Gt.includes(K.image)&&(K.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,mt);else{let Gt=s.RGBA,K=s.RGBA,Qt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Gt,K,Qt,mt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(jt.length>0){if(Zt&&oe){let ut=Et(jt[0]);e.texStorage2D(s.TEXTURE_2D,wt,Nt,ut.width,ut.height)}for(let ut=0,zt=jt.length;ut<zt;ut++)Ut=jt[ut],Zt?Y&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Rt,$t,Ut):e.texImage2D(s.TEXTURE_2D,ut,Nt,Rt,$t,Ut);M.generateMipmaps=!1}else if(Zt){if(oe){let ut=Et(mt);e.texStorage2D(s.TEXTURE_2D,wt,Nt,ut.width,ut.height)}Y&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,$t,mt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,Rt,$t,mt);m(M)&&S(et),Pt.__version=Ct.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Lt(N,M,G){if(M.image.length!==6)return;let et=se(N,M),ct=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+G);let Ct=n.get(ct);if(ct.version!==Ct.__version||et===!0){e.activeTexture(s.TEXTURE0+G);let Pt=xe.getPrimaries(xe.workingColorSpace),ht=M.colorSpace===di?null:xe.getPrimaries(M.colorSpace),mt=M.colorSpace===di||Pt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,$t=M.image[0]&&M.image[0].isDataTexture,Nt=[];for(let K=0;K<6;K++)!Rt&&!$t?Nt[K]=g(M.image[K],!0,i.maxCubemapSize):Nt[K]=$t?M.image[K].image:M.image[K],Nt[K]=re(M,Nt[K]);let Ut=Nt[0],jt=r.convert(M.format,M.colorSpace),Zt=r.convert(M.type),oe=b(M.internalFormat,jt,Zt,M.normalized,M.colorSpace),Y=M.isVideoTexture!==!0,wt=Ct.__version===void 0||et===!0,ut=ct.dataReady,zt=w(M,Ut);St(s.TEXTURE_CUBE_MAP,M);let Gt;if(Rt){Y&&wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,oe,Ut.width,Ut.height);for(let K=0;K<6;K++){Gt=Nt[K].mipmaps;for(let Qt=0;Qt<Gt.length;Qt++){let Jt=Gt[Qt];M.format!==un?jt!==null?Y?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt,0,0,Jt.width,Jt.height,jt,Jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt,oe,Jt.width,Jt.height,0,Jt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt,0,0,Jt.width,Jt.height,jt,Zt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt,oe,Jt.width,Jt.height,0,jt,Zt,Jt.data)}}}else{if(Gt=M.mipmaps,Y&&wt){Gt.length>0&&zt++;let K=Et(Nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,oe,K.width,K.height)}for(let K=0;K<6;K++)if($t){Y?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Nt[K].width,Nt[K].height,jt,Zt,Nt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,oe,Nt[K].width,Nt[K].height,0,jt,Zt,Nt[K].data);for(let Qt=0;Qt<Gt.length;Qt++){let Se=Gt[Qt].image[K].image;Y?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt+1,0,0,Se.width,Se.height,jt,Zt,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt+1,oe,Se.width,Se.height,0,jt,Zt,Se.data)}}else{Y?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,jt,Zt,Nt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,oe,jt,Zt,Nt[K]);for(let Qt=0;Qt<Gt.length;Qt++){let Jt=Gt[Qt];Y?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt+1,0,0,jt,Zt,Jt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt+1,oe,jt,Zt,Jt.image[K])}}}m(M)&&S(s.TEXTURE_CUBE_MAP),Ct.__version=ct.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Dt(N,M,G,et,ct,Ct){let Pt=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),mt=b(G.internalFormat,Pt,ht,G.normalized,G.colorSpace),Rt=n.get(M),$t=n.get(G);if($t.__renderTarget=M,!Rt.__hasExternalTextures){let Nt=Math.max(1,M.width>>Ct),Ut=Math.max(1,M.height>>Ct);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,Ct,mt,Nt,Ut,M.depth,0,Pt,ht,null):e.texImage2D(ct,Ct,mt,Nt,Ut,0,Pt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),Bt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,ct,$t.__webglTexture,0,At(M)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,ct,$t.__webglTexture,Ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(N,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){let et=M.depthTexture,ct=et&&et.isDepthTexture?et.type:null,Ct=R(M.stencilBuffer,ct),Pt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(M),Ct,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(M),Ct,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ct,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,N)}else{let et=M.textures;for(let ct=0;ct<et.length;ct++){let Ct=et[ct],Pt=r.convert(Ct.format,Ct.colorSpace),ht=r.convert(Ct.type),mt=b(Ct.internalFormat,Pt,ht,Ct.normalized,Ct.colorSpace);Bt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(M),mt,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(M),mt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,mt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(N,M,G){let et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(M.depthTexture);if(ct.__renderTarget=M,(!ct.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),et){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,M.depthTexture.addEventListener("dispose",D)),ct.__webglTexture===void 0){ct.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),St(s.TEXTURE_CUBE_MAP,M.depthTexture);let Rt=r.convert(M.depthTexture.format),$t=r.convert(M.depthTexture.type),Nt;M.depthTexture.format===Kn?Nt=s.DEPTH_COMPONENT24:M.depthTexture.format===Li&&(Nt=s.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Nt,M.width,M.height,0,Rt,$t,null)}}else xt(M.depthTexture,0);let Ct=ct.__webglTexture,Pt=At(M),ht=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,mt=M.depthTexture.format===Li?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Kn)Bt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,ht,Ct,0,Pt):s.framebufferTexture2D(s.FRAMEBUFFER,mt,ht,Ct,0);else if(M.depthTexture.format===Li)Bt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,ht,Ct,0,Pt):s.framebufferTexture2D(s.FRAMEBUFFER,mt,ht,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(N){let M=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){let et=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){let ct=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",ct)};et.addEventListener("dispose",ct),M.__depthDisposeCallback=ct}M.__boundDepthTexture=et}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let et=0;et<6;et++)pe(M.__webglFramebuffer[et],N,et);else{let et=N.texture.mipmaps;et&&et.length>0?pe(M.__webglFramebuffer[0],N,0):pe(M.__webglFramebuffer,N,0)}else if(G){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=s.createRenderbuffer(),ne(M.__webglDepthbuffer[et],N,!1);else{let ct=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,Ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,Ct)}}else{let et=N.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ne(M.__webglDepthbuffer,N,!1);else{let ct=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,Ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(N,M,G){let et=n.get(N);M!==void 0&&Dt(et.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&nt(N)}function vt(N){let M=N.texture,G=n.get(N),et=n.get(M);N.addEventListener("dispose",x);let ct=N.textures,Ct=N.isWebGLCubeRenderTarget===!0,Pt=ct.length>1;if(Pt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,a.memory.textures++),Ct){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let mt=0;mt<M.mipmaps.length;mt++)G.__webglFramebuffer[ht][mt]=s.createFramebuffer()}else G.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)G.__webglFramebuffer[ht]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let ht=0,mt=ct.length;ht<mt;ht++){let Rt=n.get(ct[ht]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&Bt(N)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<ct.length;ht++){let mt=ct[ht];G.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);let Rt=r.convert(mt.format,mt.colorSpace),$t=r.convert(mt.type),Nt=b(mt.internalFormat,Rt,$t,mt.normalized,mt.colorSpace,N.isXRRenderTarget===!0),Ut=At(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Nt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),St(s.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Dt(G.__webglFramebuffer[ht][mt],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else Dt(G.__webglFramebuffer[ht],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(M)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ht=0,mt=ct.length;ht<mt;ht++){let Rt=ct[ht],$t=n.get(Rt),Nt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Nt,$t.__webglTexture),St(Nt,Rt),Dt(G.__webglFramebuffer,N,Rt,s.COLOR_ATTACHMENT0+ht,Nt,0),m(Rt)&&S(Nt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ht=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),St(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Dt(G.__webglFramebuffer[mt],N,M,s.COLOR_ATTACHMENT0,ht,mt);else Dt(G.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,ht,0);m(M)&&S(ht),e.unbindTexture()}N.depthBuffer&&nt(N)}function Q(N){let M=N.textures;for(let G=0,et=M.length;G<et;G++){let ct=M[G];if(m(ct)){let Ct=C(N),Pt=n.get(ct).__webglTexture;e.bindTexture(Ct,Pt),S(Ct),e.unbindTexture()}}}let _t=[],Mt=[];function gt(N){if(N.samples>0){if(Bt(N)===!1){let M=N.textures,G=N.width,et=N.height,ct=s.COLOR_BUFFER_BIT,Ct=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(N),ht=M.length>1;if(ht)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let mt=N.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);let $t=n.get(M[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,G,et,0,0,G,et,ct,s.NEAREST),l===!0&&(_t.length=0,Mt.length=0,_t.push(s.COLOR_ATTACHMENT0+Rt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(_t.push(Ct),Mt.push(Ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);let $t=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function At(N){return Math.min(i.maxSamples,N.samples)}function Bt(N){let M=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(N){let M=a.render.frame;h.get(N)!==M&&(h.set(N,M),N.update())}function re(N,M){let G=N.colorSpace,et=N.format,ct=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==gr&&G!==di&&(xe.getTransfer(G)===Me?(et!==un||ct!==yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",G)),M}function Et(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=at,this.resetTextureUnits=j,this.getTextureUnits=X,this.setTextureUnits=J,this.setTexture2D=xt,this.setTexture2DArray=it,this.setTexture3D=pt,this.setTextureCube=dt,this.rebindTextures=bt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pg(s,t){function e(n,i=di){let r,a=xe.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===el)return s.UNSIGNED_SHORT_5_5_5_1;if(n===su)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return s.BYTE;if(n===iu)return s.SHORT;if(n===Os)return s.UNSIGNED_SHORT;if(n===Qo)return s.INT;if(n===vn)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===au)return s.ALPHA;if(n===ou)return s.RGB;if(n===un)return s.RGBA;if(n===Kn)return s.DEPTH_COMPONENT;if(n===Li)return s.DEPTH_STENCIL;if(n===nl)return s.RED;if(n===ta)return s.RED_INTEGER;if(n===Di)return s.RG;if(n===il)return s.RG_INTEGER;if(n===sl)return s.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===ra||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dl)return r.COMPRESSED_R11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===bl||n===Ml||n===Sl||n===Tl||n===Al||n===wl||n===El||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Il||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Dl||n===aa||n===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends An{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new pf,m={},S=e.getContextAttributes(),C=null,b=null,R=[],w=[],D=new yt,x=null,I=null,F=new Fe;F.viewport=new ve;let V=new Fe;V.viewport=new ve;let H=[F,V],j=new qo,X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=R[st];return ft===void 0&&(ft=new Ts,R[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=R[st];return ft===void 0&&(ft=new Ts,R[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=R[st];return ft===void 0&&(ft=new Ts,R[st]=ft),ft.getHandSpace()};function at(st){let ft=w.indexOf(st.inputSource);if(ft===-1)return;let It=R[ft];It!==void 0&&(It.update(st.inputSource,st.frame,c||a),It.dispatchEvent({type:st.type,data:st.inputSource}))}function rt(){i.removeEventListener("select",at),i.removeEventListener("selectstart",at),i.removeEventListener("selectend",at),i.removeEventListener("squeeze",at),i.removeEventListener("squeezestart",at),i.removeEventListener("squeezeend",at),i.removeEventListener("end",rt),i.removeEventListener("inputsourceschange",xt);for(let st=0;st<R.length;st++){let ft=w[st];ft!==null&&(w[st]=null,R[st].disconnect(ft))}X=null,J=null,g.reset();for(let st in m)delete m[st];if(t.setRenderTarget(C),f=null,u=null,d=null,i=null,b=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(D.width,D.height,!1),I!==null){let st=I.camera;st.fov=I.fov,st.zoom=I.zoom,st.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(st){if(i=st,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",at),i.addEventListener("selectstart",at),i.addEventListener("selectend",at),i.addEventListener("squeeze",at),i.addEventListener("squeezestart",at),i.addEventListener("squeezeend",at),i.addEventListener("end",rt),i.addEventListener("inputsourceschange",xt),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,Lt=null,Dt=null;S.depth&&(Dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=S.stencil?Li:Kn,Lt=S.stencil?Bs:vn);let ne={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ne),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new We(u.textureWidth,u.textureHeight,{format:un,type:yn,depthTexture:new ti(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let It={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,It),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new We(f.framebufferWidth,f.framebufferHeight,{format:un,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function xt(st){for(let ft=0;ft<st.removed.length;ft++){let It=st.removed[ft],Lt=w.indexOf(It);Lt>=0&&(w[Lt]=null,R[Lt].disconnect(It))}for(let ft=0;ft<st.added.length;ft++){let It=st.added[ft],Lt=w.indexOf(It);if(Lt===-1){for(let ne=0;ne<R.length;ne++)if(ne>=w.length){w.push(It),Lt=ne;break}else if(w[ne]===null){w[ne]=It,Lt=ne;break}if(Lt===-1)break}let Dt=R[Lt];Dt&&Dt.connect(It)}}let it=new U,pt=new U;function dt(st,ft,It){it.setFromMatrixPosition(ft.matrixWorld),pt.setFromMatrixPosition(It.matrixWorld);let Lt=it.distanceTo(pt),Dt=ft.projectionMatrix.elements,ne=It.projectionMatrix.elements,pe=Dt[14]/(Dt[10]-1),nt=Dt[14]/(Dt[10]+1),bt=(Dt[9]+1)/Dt[5],vt=(Dt[9]-1)/Dt[5],Q=(Dt[8]-1)/Dt[0],_t=(ne[8]+1)/ne[0],Mt=pe*Q,gt=pe*_t,At=Lt/(-Q+_t),Bt=At*-Q;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Bt),st.translateZ(At),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Dt[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let k=pe+At,re=nt+At,Et=Mt-Bt,N=gt+(Lt-Bt),M=bt*nt/re*k,G=vt*nt/re*k;st.projectionMatrix.makePerspective(Et,N,M,G,k,re),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Yt(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(i===null)return;let ft=st.near,It=st.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(It=g.depthFar)),j.near=V.near=F.near=ft,j.far=V.far=F.far=It,(X!==j.near||J!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),X=j.near,J=j.far),j.layers.mask=st.layers.mask|6,F.layers.mask=j.layers.mask&-5,V.layers.mask=j.layers.mask&-3;let Lt=st.parent,Dt=j.cameras;Yt(j,Lt);for(let ne=0;ne<Dt.length;ne++)Yt(Dt[ne],Lt);Dt.length===2?dt(j,F,V):j.projectionMatrix.copy(F.projectionMatrix),I===null&&st.isPerspectiveCamera&&(I={camera:st,fov:st.fov,zoom:st.zoom}),Wt(st,j,Lt)};function Wt(st,ft,It){It===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(It.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=vs*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(st){l=st,u!==null&&(u.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(st){return m[st]};let fe=null;function St(st,ft){if(h=ft.getViewerPose(c||a),p=ft,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Lt=!1;It.length!==j.cameras.length&&(j.cameras.length=0,Lt=!0);for(let nt=0;nt<It.length;nt++){let bt=It[nt],vt=null;if(f!==null)vt=f.getViewport(bt);else{let _t=d.getViewSubImage(u,bt);vt=_t.viewport,nt===0&&(t.setRenderTargetTextures(b,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(b))}let Q=H[nt];Q===void 0&&(Q=new Fe,Q.layers.enable(nt),Q.viewport=new ve,H[nt]=Q),Q.matrix.fromArray(bt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(bt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(vt.x,vt.y,vt.width,vt.height),nt===0&&(j.matrix.copy(Q.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Lt===!0&&j.cameras.push(Q)}let Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let nt=d.getDepthInformation(It[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,i.renderState)}if(Dt&&Dt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<It.length;nt++){let bt=It[nt].camera;if(bt){let vt=m[bt];vt||(vt=new wr,m[bt]=vt);let Q=d.getCameraImage(bt);vt.sourceTexture=Q}}}}for(let It=0;It<R.length;It++){let Lt=w[It],Dt=R[It];Lt!==null&&Dt!==void 0&&Dt.update(Lt,ft,c||a)}fe&&fe(st,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),p=null}let se=new lg;se.setAnimationLoop(St),this.setAnimationLoop=function(st){fe=st},this.dispose=function(){}}},sM=new ce,mg=new he;mg.set(-1,0,0,0,1,0,0,0,1);function rM(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zd(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,C,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,C):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),C=S.envMap,b=S.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,C){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=C*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aM(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,R){let w=R.program;n.uniformBlockBinding(b,w)}function c(b,R){let w=i[b.id];w===void 0&&(g(b),w=h(b),i[b.id]=w,b.addEventListener("dispose",S));let D=R.program;n.updateUBOMapping(b,D);let x=t.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function h(b){let R=d();b.__bindingPointIndex=R;let w=s.createBuffer(),D=b.__size,x=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,D,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let R=i[b.id],w=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let x=0,I=w.length;x<I;x++){let F=w[x];if(Array.isArray(F))for(let V=0,H=F.length;V<H;V++)f(F[V],x,V,D);else f(F,x,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,R,w,D){if(y(b,R,w,D)===!0){let x=b.__offset,I=b.value;if(Array.isArray(I)){let F=0;for(let V=0;V<I.length;V++){let H=I[V],j=m(H);p(H,b.__data,F),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(I,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,b.__data)}}function p(b,R,w){typeof b=="number"||typeof b=="boolean"?R[0]=b:b.isMatrix3?(R[0]=b.elements[0],R[1]=b.elements[1],R[2]=b.elements[2],R[3]=0,R[4]=b.elements[3],R[5]=b.elements[4],R[6]=b.elements[5],R[7]=0,R[8]=b.elements[6],R[9]=b.elements[7],R[10]=b.elements[8],R[11]=0):ArrayBuffer.isView(b)?R.set(new b.constructor(b.buffer,b.byteOffset,R.length)):b.toArray(R,w)}function y(b,R,w,D){let x=b.value,I=R+"_"+w;if(D[I]===void 0)return typeof x=="number"||typeof x=="boolean"?D[I]=x:ArrayBuffer.isView(x)?D[I]=x.slice():D[I]=x.clone(),!0;{let F=D[I];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return D[I]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function g(b){let R=b.uniforms,w=0,D=16;for(let I=0,F=R.length;I<F;I++){let V=Array.isArray(R[I])?R[I]:[R[I]];for(let H=0,j=V.length;H<j;H++){let X=V[H],J=Array.isArray(X.value)?X.value:[X.value];for(let at=0,rt=J.length;at<rt;at++){let xt=J[at],it=m(xt),pt=w%D,dt=pt%it.boundary,Yt=pt+dt;w+=dt,Yt!==0&&D-Yt<it.storage&&(w+=D-Yt),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=it.storage}}}let x=w%D;return x>0&&(w+=D-x),b.__size=w,b.__cache={},this}function m(b){let R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(R.boundary=16,R.storage=b.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",b),R}function S(b){let R=b.target;R.removeEventListener("dispose",S);let w=a.indexOf(R.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[R.id]),delete i[R.id],delete r[R.id]}function C(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:C}}var oM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function lM(){return fi===null&&(fi=new _n(oM,16,16,Di,Hn),fi.name="DFG_LUT",fi.minFilter=Ie,fi.magFilter=Ie,fi.wrapS=gn,fi.wrapT=gn,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Wl=class{constructor(t={}){let{canvas:e=qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,g=new Set([sl,il,ta]),m=new Set([yn,vn,Os,Bs,tl,el]),S=new Uint32Array(4),C=new Int32Array(4),b=new U,R=null,w=null,D=[],x=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,V=!1,H=null,j=null,X=null,J=null;this._outputColorSpace=nn;let at=0,rt=0,xt=null,it=-1,pt=null,dt=new ve,Yt=new ve,Wt=null,fe=new Xt(0),St=0,se=e.width,st=e.height,ft=1,It=null,Lt=null,Dt=new ve(0,0,se,st),ne=new ve(0,0,se,st),pe=!1,nt=new li,bt=!1,vt=!1,Q=new ce,_t=new U,Mt=new ve,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Bt(){return xt===null?ft:1}let k=n;function re(_,E){return e.getContext(_,E)}let Et,N,M,G,et,ct,Ct,Pt,ht,mt,Rt,$t,Nt,Ut,jt,Zt,oe,Y,wt,ut,zt,Gt,K;try{let _={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",je,!1),k===null){let E="webgl2";if(k=re(E,_),k===null)throw re(E)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(_){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",je,!1),ee("WebGLRenderer: "+_.message),_}function Qt(){Et=new gv(k),Et.init(),zt=new pg(k,Et),N=new av(k,Et,t,zt),M=new tM(k,Et),N.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),j=k.createFramebuffer(),X=k.createFramebuffer(),J=k.createFramebuffer(),G=new yv(k),et=new kb,ct=new eM(k,Et,M,et,N,zt,G),Ct=new mv(F),Pt=new b_(k),Gt=new sv(k,Pt),ht=new _v(k,Pt,G,Gt),mt=new bv(k,ht,Pt,Gt,G),Y=new vv(k,N,ct),jt=new ov(et),Rt=new zb(F,Ct,Et,N,Gt,jt),$t=new rM(F,et),Nt=new Gb,Ut=new $b(Et),oe=new iv(F,Ct,M,mt,p,l),Zt=new Qb(F,mt,N),K=new aM(k,G,N,M),wt=new rv(k,Et,G),ut=new xv(k,Et,G),G.programs=Rt.programs,F.capabilities=N,F.extensions=Et,F.properties=et,F.renderLists=Nt,F.shadowMap=Zt,F.state=M,F.info=G}y!==yn&&(I=new Sv(y,e.width,e.height,o,i,r));let Jt=new mf(F,k);this.xr=Jt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let _=Et.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Et.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(_){_!==void 0&&(ft=_,this.setSize(se,st,!1))},this.getSize=function(_){return _.set(se,st)},this.setSize=function(_,E,P=!0){if(Jt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=_,st=E,e.width=Math.floor(_*ft),e.height=Math.floor(E*ft),P===!0&&(e.style.width=_+"px",e.style.height=E+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,_,E)},this.getDrawingBufferSize=function(_){return _.set(se*ft,st*ft).floor()},this.setDrawingBufferSize=function(_,E,P){se=_,st=E,ft=P,e.width=Math.floor(_*P),e.height=Math.floor(E*P),this.setViewport(0,0,_,E)},this.setEffects=function(_){if(y===yn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let E=0;E<_.length;E++)if(_[E].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(dt)},this.getViewport=function(_){return _.copy(Dt)},this.setViewport=function(_,E,P,v){_.isVector4?Dt.set(_.x,_.y,_.z,_.w):Dt.set(_,E,P,v),M.viewport(dt.copy(Dt).multiplyScalar(ft).round())},this.getScissor=function(_){return _.copy(ne)},this.setScissor=function(_,E,P,v){_.isVector4?ne.set(_.x,_.y,_.z,_.w):ne.set(_,E,P,v),M.scissor(Yt.copy(ne).multiplyScalar(ft).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(_){M.setScissorTest(pe=_)},this.setOpaqueSort=function(_){It=_},this.setTransparentSort=function(_){Lt=_},this.getClearColor=function(_){return _.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(_=!0,E=!0,P=!0){let v=0;if(_){let A=!1;if(xt!==null){let O=xt.texture.format;A=g.has(O)}if(A){let O=xt.texture.type,$=m.has(O),Z=oe.getClearColor(),tt=oe.getClearAlpha(),z=Z.r,B=Z.g,ot=Z.b;$?(S[0]=z,S[1]=B,S[2]=ot,S[3]=tt,k.clearBufferuiv(k.COLOR,0,S)):(C[0]=z,C[1]=B,C[2]=ot,C[3]=tt,k.clearBufferiv(k.COLOR,0,C))}else v|=k.COLOR_BUFFER_BIT}E&&(v|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),P&&(v|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v!==0&&k.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),H=_},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",je,!1),oe.dispose(),Nt.dispose(),Ut.dispose(),et.dispose(),Ct.dispose(),mt.dispose(),Gt.dispose(),K.dispose(),Rt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",ye),Jt.removeEventListener("sessionend",De),Ce.stop()};function Se(_){_.preventDefault(),yr("WebGLRenderer: Context Lost."),V=!0}function me(){yr("WebGLRenderer: Context Restored."),V=!1;let _=G.autoReset,E=Zt.enabled,P=Zt.autoUpdate,v=Zt.needsUpdate,A=Zt.type;Qt(),G.autoReset=_,Zt.enabled=E,Zt.autoUpdate=P,Zt.needsUpdate=v,Zt.type=A}function je(_){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ye(_){let E=_.target;E.removeEventListener("dispose",Ye),is(E)}function is(_){ua(_),et.remove(_)}function ua(_){let E=et.get(_).programs;E!==void 0&&(E.forEach(function(P){Rt.releaseProgram(P)}),_.isShaderMaterial&&Rt.releaseShaderCache(_))}this.renderBufferDirect=function(_,E,P,v,A,O){E===null&&(E=gt);let $=A.isMesh&&A.matrixWorld.determinantAffine()<0,Z=T(_,E,P,v,A);M.setMaterial(v,$);let tt=P.index,z=1;if(v.wireframe===!0){if(tt=ht.getWireframeAttribute(P),tt===void 0)return;z=2}let B=P.drawRange,ot=P.attributes.position,lt=B.start*z,Ft=(B.start+B.count)*z;O!==null&&(lt=Math.max(lt,O.start*z),Ft=Math.min(Ft,(O.start+O.count)*z)),tt!==null?(lt=Math.max(lt,0),Ft=Math.min(Ft,tt.count)):ot!=null&&(lt=Math.max(lt,0),Ft=Math.min(Ft,ot.count));let Kt=Ft-lt;if(Kt<0||Kt===1/0)return;Gt.setup(A,v,Z,P,tt);let kt,Ot=wt;if(tt!==null&&(kt=Pt.get(tt),Ot=ut,Ot.setIndex(kt)),A.isMesh)v.wireframe===!0?(M.setLineWidth(v.wireframeLinewidth*Bt()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if(A.isLine){let te=v.linewidth;te===void 0&&(te=1),M.setLineWidth(te*Bt()),A.isLineSegments?Ot.setMode(k.LINES):A.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else A.isPoints?Ot.setMode(k.POINTS):A.isSprite&&Ot.setMode(k.TRIANGLES);if(A.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Ot.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{let te=A._multiDrawStarts,Tt=A._multiDrawCounts,ue=A._multiDrawCount,ae=tt?Pt.get(tt).bytesPerElement:1,$e=et.get(v).currentProgram.getUniforms();for(let an=0;an<ue;an++)$e.setValue(k,"_gl_DrawID",an),Ot.render(te[an]/ae,Tt[an])}else if(A.isInstancedMesh)Ot.renderInstances(lt,Kt,A.count);else if(P.isInstancedBufferGeometry){let te=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,Tt=Math.min(P.instanceCount,te);Ot.renderInstances(lt,Kt,Tt)}else Ot.render(lt,Kt)};function Ee(_,E,P,v){H!==null&&_.isNodeMaterial&&H.setObject(v,_),bt===!0&&jt.setState(_,P,!1),_.transparent===!0&&_.side===Dn&&_.forceSinglePass===!1?(_.side=dn,_.needsUpdate=!0,ss(_,E,v),_.side=Ii,_.needsUpdate=!0,ss(_,E,v),_.side=Dn):ss(_,E,v)}this.compile=function(_,E,P=null){P===null&&(P=_),H!==null&&H.renderStart(_,E,P),w=Ut.get(P),w.init(E),x.push(w),P.traverseVisible(function(A){A.isLight&&A.layers.test(E.layers)&&(w.pushLight(A),A.castShadow&&w.pushShadow(A))}),_!==P&&_.traverseVisible(function(A){A.isLight&&A.layers.test(E.layers)&&(w.pushLight(A),A.castShadow&&w.pushShadow(A))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),vt=this.localClippingEnabled,bt=jt.init(this.clippingPlanes,vt),bt===!0&&jt.setGlobalState(this.clippingPlanes,E),H!==null&&Zt.render(w.state.shadowsArray,P,E);let v=new Set;return _.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;let O=A.material;if(O)if(Array.isArray(O))for(let $=0;$<O.length;$++){let Z=O[$];Ee(Z,P,E,A),v.add(Z)}else Ee(O,P,E,A),v.add(O)}),w=x.pop(),H!==null&&H.renderEnd(),v},this.compileAsync=function(_,E,P=null){let v=this.compile(_,E,P);return new Promise(A=>{function O(){if(v.forEach(function($){let tt=et.get($).currentProgram;(tt===void 0||tt.isReady())&&v.delete($)}),v.size===0){A(_);return}setTimeout(O,10)}Et.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Qe=null;function Un(_){Qe&&Qe(_)}function ye(){Ce.stop()}function De(){Ce.start()}let Ce=new lg;Ce.setAnimationLoop(Un),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(_){Qe=_,Jt.setAnimationLoop(_),_===null?Ce.stop():Ce.start()},Jt.addEventListener("sessionstart",ye),Jt.addEventListener("sessionend",De),this.render=function(_,E){if(E!==void 0&&E.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;H!==null&&H.renderStart(_,E);let P=Jt.enabled===!0&&Jt.isPresenting===!0,v=I!==null&&(xt===null||P)&&I.begin(F,xt);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(E),E=Jt.getCamera()),_.isScene===!0&&_.onBeforeRender(F,_,E,xt),w=Ut.get(_,x.length),w.init(E),w.state.textureUnits=ct.getTextureUnits(),x.push(w),Q.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),nt.setFromProjectionMatrix(Q,Tn,E.reversedDepth),vt=this.localClippingEnabled,bt=jt.init(this.clippingPlanes,vt),R=Nt.get(_,D.length),R.init(),D.push(R),Jt.enabled===!0&&Jt.isPresenting===!0){let $=F.xr.getDepthSensingMesh();$!==null&&En($,E,-1/0,F.sortObjects)}En(_,E,0,F.sortObjects),R.finish(),H!==null&&H.updateLights(w.state.lightsArray),F.sortObjects===!0&&R.sort(It,Lt),At=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,At&&oe.addToRenderList(R,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&jt.beginShadows();let A=w.state.shadowsArray;if(Zt.render(A,_,E),bt===!0&&jt.endShadows(),(v&&I.hasRenderPass())===!1){let $=R.opaque,Z=R.transmissive;if(w.setupLights(),E.isArrayCamera){let tt=E.cameras;if(Z.length>0)for(let z=0,B=tt.length;z<B;z++){let ot=tt[z];Wn($,Z,_,ot)}At&&oe.render(_);for(let z=0,B=tt.length;z<B;z++){let ot=tt[z];bn(R,_,ot,ot.viewport)}}else Z.length>0&&Wn($,Z,_,E),At&&oe.render(_),bn(R,_,E)}xt!==null&&rt===0&&(ct.updateMultisampleRenderTarget(xt),ct.updateRenderTargetMipmap(xt)),v&&I.end(F),_.isScene===!0&&_.onAfterRender(F,_,E),Gt.resetDefaultState(),it=-1,pt=null,x.pop(),x.length>0?(w=x[x.length-1],ct.setTextureUnits(w.state.textureUnits),bt===!0&&jt.setGlobalState(F.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?R=D[D.length-1]:R=null,H!==null&&H.renderEnd()};function En(_,E,P,v){if(_.visible===!1)return;if(_.layers.test(E.layers)){if(_.isGroup)P=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(E);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(nt)){v&&Mt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Q);let $=mt.update(_),Z=_.material;Z.visible&&R.push(_,$,Z,P,Mt.z,null,E)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(nt))){let $=mt.update(_),Z=_.material;if(v&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Mt.copy(_.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Mt.copy($.boundingSphere.center)),Mt.applyMatrix4(_.matrixWorld).applyMatrix4(Q)),Array.isArray(Z)){let tt=$.groups;for(let z=0,B=tt.length;z<B;z++){let ot=tt[z],lt=Z[ot.materialIndex];lt&&lt.visible&&R.push(_,$,lt,P,Mt.z,ot,E)}}else Z.visible&&R.push(_,$,Z,P,Mt.z,null,E)}}let O=_.children;for(let $=0,Z=O.length;$<Z;$++)En(O[$],E,P,v)}function bn(_,E,P,v){let{opaque:A,transmissive:O,transparent:$}=_;w.setupLightsView(P),bt===!0&&jt.setGlobalState(F.clippingPlanes,P),v&&M.viewport(dt.copy(v)),A.length>0&&tn(A,E,P),O.length>0&&tn(O,E,P),$.length>0&&tn($,E,P),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Wn(_,E,P,v){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[v.id]===void 0){let lt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[v.id]=new We(1,1,{generateMipmaps:!0,type:lt?Hn:yn,minFilter:si,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let O=w.state.transmissionRenderTarget[v.id],$=v.viewport||dt;O.setSize($.z*F.transmissionResolutionScale,$.w*F.transmissionResolutionScale);let Z=F.getRenderTarget(),tt=F.getActiveCubeFace(),z=F.getActiveMipmapLevel();F.setRenderTarget(O),F.getClearColor(fe),St=F.getClearAlpha(),St<1&&F.setClearColor(16777215,.5),F.clear(),At&&oe.render(P);let B=F.toneMapping;F.toneMapping=Gn;let ot=v.viewport;if(v.viewport!==void 0&&(v.viewport=void 0),w.setupLightsView(v),bt===!0&&jt.setGlobalState(F.clippingPlanes,v),tn(_,P,v),ct.updateMultisampleRenderTarget(O),ct.updateRenderTargetMipmap(O),Et.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ft=0,Kt=E.length;Ft<Kt;Ft++){let kt=E[Ft],{object:Ot,geometry:te,material:Tt,group:ue}=kt;if(Tt.side===Dn&&Ot.layers.test(v.layers)){let ae=Tt.side;Tt.side=dn,Tt.needsUpdate=!0,da(Ot,P,v,te,Tt,ue),Tt.side=ae,Tt.needsUpdate=!0,lt=!0}}lt===!0&&(ct.updateMultisampleRenderTarget(O),ct.updateRenderTargetMipmap(O))}F.setRenderTarget(Z,tt,z),F.setClearColor(fe,St),ot!==void 0&&(v.viewport=ot),F.toneMapping=B}function tn(_,E,P){let v=E.isScene===!0?E.overrideMaterial:null;for(let A=0,O=_.length;A<O;A++){let $=_[A],{object:Z,geometry:tt,group:z}=$,B=$.material;B.allowOverride===!0&&v!==null&&(B=v),Z.layers.test(P.layers)&&da(Z,E,P,tt,B,z)}}function da(_,E,P,v,A,O){H!==null&&A.isNodeMaterial&&H.setObject(_,A),_.onBeforeRender(F,E,P,v,A,O),_.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),A.onBeforeRender(F,E,P,v,_,O),A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,F.renderBufferDirect(P,E,v,A,_,O),A.side=Ii,A.needsUpdate=!0,F.renderBufferDirect(P,E,v,A,_,O),A.side=Dn):F.renderBufferDirect(P,E,v,A,_,O),_.onAfterRender(F,E,P,v,A,O)}function ss(_,E,P){E.isScene!==!0&&(E=gt);let v=et.get(_),A=w.state.lights,O=w.state.shadowsArray,$=A.state.version,Z=Rt.getParameters(_,A.state,O,E,P,w.state.lightProbeGridArray),tt=Rt.getProgramCacheKey(Z),z=v.programs;v.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,v.fog=E.fog;let B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;v.envMap=Ct.get(_.envMap||v.environment,B),v.envMapRotation=v.environment!==null&&_.envMap===null?E.environmentRotation:_.envMapRotation,z===void 0&&(_.addEventListener("dispose",Ye),z=new Map,v.programs=z);let ot=z.get(tt);if(ot!==void 0){if(v.currentProgram===ot&&v.lightsStateVersion===$)return en(_,Z),ot}else Z.uniforms=Rt.getUniforms(_),H!==null&&_.isNodeMaterial&&H.build(_,P,Z),_.onBeforeCompile(Z,F),ot=Rt.acquireProgram(Z,tt),z.set(tt,ot),v.uniforms=Z.uniforms;let lt=v.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(lt.clippingPlanes=jt.uniform),en(_,Z),v.needsLights=q(_),v.lightsStateVersion=$,v.needsLights&&(lt.ambientLightColor.value=A.state.ambient,lt.lightProbe.value=A.state.probe,lt.sunLights.value=A.state.sun,lt.sunLightShadows.value=A.state.sunShadow,lt.directionalLights.value=A.state.directional,lt.directionalLightShadows.value=A.state.directionalShadow,lt.spotLights.value=A.state.spot,lt.spotLightShadows.value=A.state.spotShadow,lt.rectAreaLights.value=A.state.rectArea,lt.ltc_1.value=A.state.rectAreaLTC1,lt.ltc_2.value=A.state.rectAreaLTC2,lt.pointLights.value=A.state.point,lt.pointLightShadows.value=A.state.pointShadow,lt.hemisphereLights.value=A.state.hemi,lt.sunShadowMatrix.value=A.state.sunShadowMatrix,lt.sunShadowCascade.value=A.state.sunShadowCascade,lt.directionalShadowMatrix.value=A.state.directionalShadowMatrix,lt.spotLightMatrix.value=A.state.spotLightMatrix,lt.spotLightMap.value=A.state.spotLightMap,lt.pointShadowMatrix.value=A.state.pointShadowMatrix),v.lightProbeGrid=w.state.lightProbeGridArray.length>0,v.currentProgram=ot,v.uniformsList=null,ot}function pi(_){if(_.uniformsList===null){let E=_.currentProgram.getUniforms();_.uniformsList=ca.seqWithValue(E.seq,_.uniforms)}return _.uniformsList}function en(_,E){let P=et.get(_);P.outputColorSpace=E.outputColorSpace,P.batching=E.batching,P.batchingColor=E.batchingColor,P.instancing=E.instancing,P.instancingColor=E.instancingColor,P.instancingMorph=E.instancingMorph,P.skinning=E.skinning,P.morphTargets=E.morphTargets,P.morphNormals=E.morphNormals,P.morphColors=E.morphColors,P.morphTargetsCount=E.morphTargetsCount,P.numClippingPlanes=E.numClippingPlanes,P.numIntersection=E.numClipIntersection,P.vertexAlphas=E.vertexAlphas,P.vertexTangents=E.vertexTangents,P.toneMapping=E.toneMapping}function rs(_,E){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;b.setFromMatrixPosition(E.matrixWorld);for(let P=0,v=_.length;P<v;P++){let A=_[P];if(A.texture!==null&&A.boundingBox.containsPoint(b))return A}return null}function T(_,E,P,v,A){E.isScene!==!0&&(E=gt),ct.resetTextureUnits();let O=E.fog,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,Z=xt===null?F.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:xe.workingColorSpace,tt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=Ct.get(v.envMap||$,tt),B=v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,ot=!!P.attributes.tangent&&(!!v.normalMap||v.anisotropy>0),lt=!!P.morphAttributes.position,Ft=!!P.morphAttributes.normal,Kt=!!P.morphAttributes.color,kt=Gn;v.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(kt=F.toneMapping);let Ot=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=Ot!==void 0?Ot.length:0,Tt=et.get(v),ue=w.state.lights;if(bt===!0&&(vt===!0||_!==pt)){let Re=_===pt&&v.id===it;jt.setState(v,_,Re)}let ae=!1;v.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ue.state.version||Tt.outputColorSpace!==Z||A.isBatchedMesh&&Tt.batching===!1||!A.isBatchedMesh&&Tt.batching===!0||A.isBatchedMesh&&Tt.batchingColor===!0&&A._colorsTexture===null||A.isBatchedMesh&&Tt.batchingColor===!1&&A._colorsTexture!==null||A.isInstancedMesh&&Tt.instancing===!1||!A.isInstancedMesh&&Tt.instancing===!0||A.isSkinnedMesh&&Tt.skinning===!1||!A.isSkinnedMesh&&Tt.skinning===!0||A.isInstancedMesh&&Tt.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Tt.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&Tt.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&Tt.instancingMorph===!1&&A.morphTexture!==null||Tt.envMap!==z||v.fog===!0&&Tt.fog!==O||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==jt.numPlanes||Tt.numIntersection!==jt.numIntersection)||Tt.vertexAlphas!==B||Tt.vertexTangents!==ot||Tt.morphTargets!==lt||Tt.morphNormals!==Ft||Tt.morphColors!==Kt||Tt.toneMapping!==kt||Tt.morphTargetsCount!==te||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Tt.__version=v.version);let $e=Tt.currentProgram;ae===!0&&($e=ss(v,E,A),H&&v.isNodeMaterial&&H.onUpdateProgram(v,$e,Tt));let an=!1,Cn=!1,Gs=!1,we=$e.getUniforms(),Be=Tt.uniforms;if(M.useProgram($e.program)&&(an=!0,Cn=!0,Gs=!0),v.id!==it&&(it=v.id,Cn=!0),Tt.needsLights){let Re=rs(w.state.lightProbeGridArray,A);Tt.lightProbeGrid!==Re&&(Tt.lightProbeGrid=Re,Cn=!0)}if(an||pt!==_){M.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),we.setValue(k,"projectionMatrix",_.projectionMatrix),we.setValue(k,"viewMatrix",_.matrixWorldInverse);let Ui=we.map.cameraPosition;Ui!==void 0&&Ui.setValue(k,_t.setFromMatrixPosition(_.matrixWorld)),N.logarithmicDepthBuffer&&we.setValue(k,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(v.isMeshPhongMaterial||v.isMeshToonMaterial||v.isMeshLambertMaterial||v.isMeshBasicMaterial||v.isMeshStandardMaterial||v.isShaderMaterial)&&we.setValue(k,"isOrthographic",_.isOrthographicCamera===!0),pt!==_&&(pt=_,Cn=!0,Gs=!0)}if(Tt.needsLights&&(ue.state.sunShadowMap.length>0&&we.setValue(k,"sunShadowMap",ue.state.sunShadowMap,ct),ue.state.directionalShadowMap.length>0&&we.setValue(k,"directionalShadowMap",ue.state.directionalShadowMap,ct),ue.state.spotShadowMap.length>0&&we.setValue(k,"spotShadowMap",ue.state.spotShadowMap,ct),ue.state.pointShadowMap.length>0&&we.setValue(k,"pointShadowMap",ue.state.pointShadowMap,ct)),A.isSkinnedMesh){we.setOptional(k,A,"bindMatrix"),we.setOptional(k,A,"bindMatrixInverse");let Re=A.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),we.setValue(k,"boneTexture",Re.boneTexture,ct))}A.isBatchedMesh&&(we.setOptional(k,A,"batchingTexture"),we.setValue(k,"batchingTexture",A._matricesTexture,ct),we.setOptional(k,A,"batchingIdTexture"),we.setValue(k,"batchingIdTexture",A._indirectTexture,ct),we.setOptional(k,A,"batchingColorTexture"),A._colorsTexture!==null&&we.setValue(k,"batchingColorTexture",A._colorsTexture,ct));let Ni=P.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Y.update(A,P,$e),(Cn||Tt.receiveShadow!==A.receiveShadow)&&(Tt.receiveShadow=A.receiveShadow,we.setValue(k,"receiveShadow",A.receiveShadow)),(v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial)&&v.envMap===null&&E.environment!==null&&(Be.envMapIntensity.value=E.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=lM()),Cn){if(we.setValue(k,"toneMappingExposure",F.toneMappingExposure),Tt.needsLights&&W(Be,Gs),O&&v.fog===!0&&$t.refreshFogUniforms(Be,O),$t.refreshMaterialUniforms(Be,v,ft,st,w.state.transmissionRenderTarget[_.id]),Tt.needsLights&&Tt.lightProbeGrid){let Re=Tt.lightProbeGrid;Be.probesSH.value=Re.texture,Be.probesMin.value.copy(Re.boundingBox.min),Be.probesMax.value.copy(Re.boundingBox.max),Be.probesResolution.value.copy(Re.resolution)}ca.upload(k,pi(Tt),Be,ct)}if(v.isShaderMaterial&&v.uniformsNeedUpdate===!0&&(ca.upload(k,pi(Tt),Be,ct),v.uniformsNeedUpdate=!1),v.isSpriteMaterial&&we.setValue(k,"center",A.center),we.setValue(k,"modelViewMatrix",A.modelViewMatrix),we.setValue(k,"normalMatrix",A.normalMatrix),we.setValue(k,"modelMatrix",A.matrixWorld),v.uniformsGroups!==void 0){let Re=v.uniformsGroups;for(let Ui=0,Hs=Re.length;Ui<Hs;Ui++){let yf=Re[Ui];K.update(yf,$e),K.bind(yf,$e)}}return $e}function W(_,E){_.ambientLightColor.needsUpdate=E,_.lightProbe.needsUpdate=E,_.sunLights.needsUpdate=E,_.sunLightShadows.needsUpdate=E,_.directionalLights.needsUpdate=E,_.directionalLightShadows.needsUpdate=E,_.pointLights.needsUpdate=E,_.pointLightShadows.needsUpdate=E,_.spotLights.needsUpdate=E,_.spotLightShadows.needsUpdate=E,_.rectAreaLights.needsUpdate=E,_.hemisphereLights.needsUpdate=E}function q(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return xt},this.setRenderTargetTextures=function(_,E,P){let v=et.get(_);v.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,v.__autoAllocateDepthBuffer===!1&&(v.__useRenderToTexture=!1),et.get(_.texture).__webglTexture=E,et.get(_.depthTexture).__webglTexture=v.__autoAllocateDepthBuffer?void 0:P,v.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,E){let P=et.get(_);P.__webglFramebuffer=E,P.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(_,E=0,P=0){xt=_,at=E,rt=P;let v=null,A=!1,O=!1;if(_){let Z=et.get(_);if(Z.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,Z.__webglFramebuffer),dt.copy(_.viewport),Yt.copy(_.scissor),Wt=_.scissorTest,M.viewport(dt),M.scissor(Yt),M.setScissorTest(Wt),it=-1;return}else if(Z.__webglFramebuffer===void 0)ct.setupRenderTarget(_);else if(Z.__hasExternalTextures)ct.rebindTextures(_,et.get(_.texture).__webglTexture,et.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let B=_.depthTexture;if(Z.__boundDepthTexture!==B){if(B!==null&&et.has(B)&&(_.width!==B.image.width||_.height!==B.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(_)}}let tt=_.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(O=!0);let z=et.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(z[E])?v=z[E][P]:v=z[E],A=!0):_.samples>0&&ct.useMultisampledRTT(_)===!1?v=et.get(_).__webglMultisampledFramebuffer:Array.isArray(z)?v=z[P]:v=z,dt.copy(_.viewport),Yt.copy(_.scissor),Wt=_.scissorTest}else dt.copy(Dt).multiplyScalar(ft).floor(),Yt.copy(ne).multiplyScalar(ft).floor(),Wt=pe;if(P!==0&&(v=j),M.bindFramebuffer(k.FRAMEBUFFER,v)&&M.drawBuffers(_,v),M.viewport(dt),M.scissor(Yt),M.setScissorTest(Wt),A){let Z=et.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+E,Z.__webglTexture,P)}else if(O){let Z=E;for(let tt=0;tt<_.textures.length;tt++){let z=et.get(_.textures[tt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+tt,z.__webglTexture,P,Z)}}else if(_!==null&&P!==0){let Z=et.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Z.__webglTexture,P)}it=-1};function L(_){let E=et.get(_);return(E.__readFormat!==_.format||E.__readType!==_.type)&&(E.__readFormat=_.format,E.__readType=_.type,E.__formatReadable=N.textureFormatReadable(_.format),E.__typeReadable=N.textureTypeReadable(_.type)),E}this.readRenderTargetPixels=function(_,E,P,v,A,O,$,Z=0){if(!(_&&_.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=et.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&$!==void 0&&(tt=tt[$]),tt){M.bindFramebuffer(k.FRAMEBUFFER,tt);try{let z=_.textures[Z],B=z.format,ot=z.type;_.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Z);let lt=L(z);if(lt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=_.width-v&&P>=0&&P<=_.height-A&&k.readPixels(E,P,v,A,zt.convert(B),zt.convert(ot),O)}finally{let z=xt!==null?et.get(xt).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,z)}}},this.readRenderTargetPixelsAsync=async function(_,E,P,v,A,O,$,Z=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=et.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&$!==void 0&&(tt=tt[$]),tt)if(E>=0&&E<=_.width-v&&P>=0&&P<=_.height-A){M.bindFramebuffer(k.FRAMEBUFFER,tt);let z=_.textures[Z],B=z.format,ot=z.type;_.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Z);let lt=L(z);if(lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ft),k.bufferData(k.PIXEL_PACK_BUFFER,O.byteLength,k.STREAM_READ),k.readPixels(E,P,v,A,zt.convert(B),zt.convert(ot),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Kt=xt!==null?et.get(xt).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Kt);let kt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Cm(k,kt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ft),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,O),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ft),k.deleteSync(kt),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,E=null,P=0){let v=Math.pow(2,-P),A=Math.floor(_.image.width*v),O=Math.floor(_.image.height*v),$=E!==null?E.x:0,Z=E!==null?E.y:0;ct.setTexture2D(_,0),k.copyTexSubImage2D(k.TEXTURE_2D,P,0,0,$,Z,A,O),M.unbindTexture()},this.copyTextureToTexture=function(_,E,P=null,v=null,A=0,O=0){let $,Z,tt,z,B,ot,lt,Ft,Kt,kt=_.isCompressedTexture?_.mipmaps[O]:_.image;if(P!==null)$=P.max.x-P.min.x,Z=P.max.y-P.min.y,tt=P.isBox3?P.max.z-P.min.z:1,z=P.min.x,B=P.min.y,ot=P.isBox3?P.min.z:0;else{let Be=Math.pow(2,-A);$=Math.floor(kt.width*Be),Z=Math.floor(kt.height*Be),_.isDataArrayTexture?tt=kt.depth:_.isData3DTexture?tt=Math.floor(kt.depth*Be):tt=1,z=0,B=0,ot=0}v!==null?(lt=v.x,Ft=v.y,Kt=v.z):(lt=0,Ft=0,Kt=0);let Ot=zt.convert(E.format),te=zt.convert(E.type),Tt;E.isData3DTexture?(ct.setTexture3D(E,0),Tt=k.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(ct.setTexture2DArray(E,0),Tt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(E,0),Tt=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,E.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,E.unpackAlignment);let ue=M.getParameter(k.UNPACK_ROW_LENGTH),ae=M.getParameter(k.UNPACK_IMAGE_HEIGHT),$e=M.getParameter(k.UNPACK_SKIP_PIXELS),an=M.getParameter(k.UNPACK_SKIP_ROWS),Cn=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,kt.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,kt.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,z),M.pixelStorei(k.UNPACK_SKIP_ROWS,B),M.pixelStorei(k.UNPACK_SKIP_IMAGES,ot);let Gs=_.isDataArrayTexture||_.isData3DTexture,we=E.isDataArrayTexture||E.isData3DTexture;if(_.isDepthTexture){let Be=et.get(_),Ni=et.get(E),Re=et.get(Be.__renderTarget),Ui=et.get(Ni.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,Re.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Hs=0;Hs<tt;Hs++)Gs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.get(_).__webglTexture,A,ot+Hs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.get(E).__webglTexture,O,Kt+Hs)),k.blitFramebuffer(z,B,$,Z,lt,Ft,$,Z,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(A!==0||_.isRenderTargetTexture||et.has(_)){let Be=et.get(_),Ni=et.get(E);M.bindFramebuffer(k.READ_FRAMEBUFFER,X),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,J);for(let Re=0;Re<tt;Re++)Gs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,A,ot+Re):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,A),we?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ni.__webglTexture,O,Kt+Re):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ni.__webglTexture,O),A!==0?k.blitFramebuffer(z,B,$,Z,lt,Ft,$,Z,k.COLOR_BUFFER_BIT,k.NEAREST):we?k.copyTexSubImage3D(Tt,O,lt,Ft,Kt+Re,z,B,$,Z):k.copyTexSubImage2D(Tt,O,lt,Ft,z,B,$,Z);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else we?_.isDataTexture||_.isData3DTexture?k.texSubImage3D(Tt,O,lt,Ft,Kt,$,Z,tt,Ot,te,kt.data):E.isCompressedArrayTexture?k.compressedTexSubImage3D(Tt,O,lt,Ft,Kt,$,Z,tt,Ot,kt.data):k.texSubImage3D(Tt,O,lt,Ft,Kt,$,Z,tt,Ot,te,kt):_.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,lt,Ft,$,Z,Ot,te,kt.data):_.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,lt,Ft,kt.width,kt.height,Ot,kt.data):k.texSubImage2D(k.TEXTURE_2D,O,lt,Ft,$,Z,Ot,te,kt);M.pixelStorei(k.UNPACK_ROW_LENGTH,ue),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),M.pixelStorei(k.UNPACK_SKIP_PIXELS,$e),M.pixelStorei(k.UNPACK_SKIP_ROWS,an),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Cn),O===0&&E.generateMipmaps&&k.generateMipmap(Tt),M.unbindTexture()},this.initRenderTarget=function(_){et.get(_).__webglFramebuffer===void 0&&ct.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?ct.setTextureCube(_,0):_.isData3DTexture?ct.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?ct.setTexture2DArray(_,0):ct.setTexture2D(_,0),M.unbindTexture()},this.resetState=function(){at=0,rt=0,xt=null,M.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var ie=s=>document.getElementById(s),cM={cut:0,cutY:null,xray:0,explode:0,focus:[],iso:0,lab:null,labEx:0,build:null,spin:0,dim:0,sway:0,lean:0,labels:[]};var hM=s=>{let t=Math.min(1,Math.max(0,s));return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},uM=`uniform sampler2D tN,tD;uniform vec2 px,nf;uniform vec3 ink;
uniform vec4 dEdge,nEdge,fall;uniform float alpha;
varying vec2 vUv;
float L(vec2 u){float z=texture2D(tD,u).x*2.-1.;return 2.*nf.x*nf.y/(nf.y+nf.x-z*(nf.y-nf.x));}
void main(){float d=L(vUv);vec3 n=texture2D(tN,vUv).xyz;float dd=0.,nd=0.;
  for(int i=0;i<4;i++){vec2 o=i==0?vec2(px.x,0.):i==1?vec2(-px.x,0.):i==2?vec2(0.,px.y):vec2(0.,-px.y);
    float di=L(vUv+o);float m=min(di,d);float den=dEdge.z>0.?max(m,dEdge.z):m;
    dd=max(dd,abs(di-d)/den);nd=max(nd,distance(texture2D(tN,vUv+o).xyz,n));}
  float e=max(smoothstep(dEdge.x,dEdge.y,dd),smoothstep(nEdge.x,nEdge.y,nd))*clamp(fall.x-min(d,fall.y)/fall.z,fall.w,1.);
  gl_FragColor=vec4(ink,e*alpha);}`;function dM(s){let t=ie("err");t&&(t.hidden=!1,t.textContent=s),ie("loading")?.classList.add("gone")}async function gg(s){let t=ie("gl"),e=ie("stage"),n;try{n=new Wl({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!!s.preserveDrawingBuffer})}catch(v){dM("三维场景没有加载成功。"+(v&&v.message?v.message:""));return}n.setClearColor(0,0),n.outputColorSpace=nn,n.toneMapping=Jr,n.toneMappingExposure=s.exposure,n.shadowMap.enabled=!0,n.shadowMap.type=es,n.shadowMap.autoUpdate=!1,n.localClippingEnabled=!0;let i=Math.min(screen.width,screen.height)<600;n.setPixelRatio(Math.min(devicePixelRatio||1,s.pixelRatio(i))),s.awaitFonts&&await Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(v=>setTimeout(v,1200))]);let r=matchMedia("(prefers-reduced-motion: reduce)").matches,a=/[?&]fast(?:&|$)/.test(location.search),o=r||a,l=new qi,c=new Fe(s.camera.fov,1,s.camera.near,s.camera.far),h=s.createStage({THREE:gf,scene:l,camera:c,renderer:n,reduced:o,fast:a,mobile:i});h.cams&&Object.assign(s.cams,h.cams);let d=s.pages,u=h.steps,f=u.length,p={t:new U(...s.view0.t),r:s.view0.r,th:s.view0.th,ph:s.view0.ph},y=null,g=0;function m(v,A){let O=Math.tan(c.fov*Math.PI/360);return(Math.max(A/2/O,v/2/(O*c.aspect))+v*.3)*1.14}function S(v){if(!v||(typeof v=="string"&&(v=s.cams[v]),!v))return null;let A=Array.isArray(v.t)?new U(...v.t):v.t.clone(),O=v.r!=null?v.r:m(v.w,v.h);return{t:A,r:O,th:v.th,ph:v.ph}}function C(){let{t:v,r:A,th:O,ph:$}=p;if(!(A>0)||![O,$,v.x,v.y,v.z].every(Number.isFinite))return!1;c.position.set(v.x+A*Math.sin($)*Math.sin(O),v.y+A*Math.cos($),v.z+A*Math.sin($)*Math.cos(O)),c.lookAt(v),c.updateMatrixWorld();let Z=c.matrixWorld.elements;for(let tt=0;tt<16;tt++)if(!Number.isFinite(Z[tt]))return!1;return!0}function b(v,A=s.camDur){let O=S(v);if(!O)return;if(o){p.t.copy(O.t),p.r=O.r,p.th=O.th,p.ph=O.ph,y=null,_();return}let $=O.th-p.th;$=(($+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,O.th=p.th+$,y={from:{t:p.t.clone(),r:p.r,th:p.th,ph:p.ph},to:O,t0:null,dur:A*1e3},_()}function R(v){if(!y)return!1;y.t0==null&&(y.t0=v);let A=Math.max(1,y.dur),O=(v-y.t0)/A;Number.isFinite(O)||(O=1),O=Math.min(1,Math.max(0,O));let $=hM(O),{from:Z,to:tt}=y;p.t.lerpVectors(Z.t,tt.t,$);let z=Z.r>0?Z.r:tt.r,B=tt.r>0?tt.r:z;return p.r=Math.exp(Math.log(z)+(Math.log(B)-Math.log(z))*$),p.th=Z.th+(tt.th-Z.th)*$,p.ph=Z.ph+(tt.ph-Z.ph)*$,O>=1&&(y=null),!0}let w=s.gesture,D=new Map,x=0,I=null;t.addEventListener("pointerdown",v=>{if(t.setPointerCapture(v.pointerId),D.set(v.pointerId,{x:v.clientX,y:v.clientY}),y=null,g=performance.now(),I={x:v.clientX,y:v.clientY,t:performance.now(),n:D.size},D.size===2){let[A,O]=[...D.values()];x=Math.hypot(A.x-O.x,A.y-O.y)}Mt(),_()}),t.addEventListener("pointermove",v=>{if(!D.has(v.pointerId))return;let A=D.get(v.pointerId),O=v.clientX-A.x,$=v.clientY-A.y;if(A.x=v.clientX,A.y=v.clientY,g=performance.now(),D.size===1)p.th-=O*.0065,p.ph=Math.min(w.ph[1],Math.max(w.ph[0],p.ph-$*.005));else if(D.size===2){let[Z,tt]=[...D.values()],z=Math.hypot(Z.x-tt.x,Z.y-tt.y);x&&(p.r=Math.min(w.r[1],Math.max(w.r[0],p.r*x/z))),x=z,p.t.y=Math.min(w.y[1],Math.max(w.y[0],p.t.y+$*w.pan*p.r))}_()});let F=v=>{D.has(v.pointerId)&&(D.delete(v.pointerId),x=0,I&&I.n===1&&D.size===0&&performance.now()-I.t<320&&Math.hypot(v.clientX-I.x,v.clientY-I.y)<7&&ua(v),D.size===0&&(I=null))};t.addEventListener("pointerup",F),t.addEventListener("pointercancel",F),t.addEventListener("wheel",v=>{v.preventDefault(),y=null,g=performance.now(),p.r=Math.min(w.r[1],Math.max(w.r[0],p.r*Math.exp(v.deltaY*w.wheel))),_()},{passive:!1});let V=!/[?&]noink(?:&|$)/.test(location.search),H=s.ink,j=new We(1,1,{minFilter:Pe,magFilter:Pe});j.depthTexture=new ti(1,1),j.depthTexture.type=vn;let X=new Rs({side:Dn,clippingPlanes:h.inkPlanes||[]}),J=new Le(new Ei(2,2),new sn({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{tN:{value:j.texture},tD:{value:j.depthTexture},px:{value:new yt(1,1)},nf:{value:new yt(c.near,c.far)},ink:{value:new U(...H.color)},dEdge:{value:new ve(H.depth[0],H.depth[1],H.eps,0)},nEdge:{value:new ve(H.normal[0],H.normal[1],0,0)},fall:{value:new ve(...H.fall)},alpha:{value:H.alpha}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:uM}));J.frustumCulled=!1;let at=new qi;at.add(J);let rt=new Ri,xt=[];l.traverse(v=>{v.isMesh&&xt.push(v)});function it(){if(C()){if(V){let v=[];for(let A of xt)A.visible&&h.inkHide(A)&&(A.visible=!1,v.push(A));l.overrideMaterial=X,n.setRenderTarget(j),n.clear(),n.render(l,c),l.overrideMaterial=null,n.setRenderTarget(null);for(let A of v)A.visible=!0}window.__noShadowUpd||(n.shadowMap.needsUpdate=!0),window.__inkOnly?n.clear():n.render(l,c),V&&(n.autoClear=!1,n.render(at,rt),n.autoClear=!0)}}function pt(){let v=e.clientWidth,A=e.clientHeight;if(!v||!A)return;n.setSize(v,A,!1),c.aspect=v/A,c.updateProjectionMatrix();let O=n.getPixelRatio(),$=H.pxScale?H.pxScale(O):1;j.setSize(Math.round(v*O),Math.round(A*O)),J.material.uniforms.px.value.set($/(v*O),$/(A*O)),J.material.uniforms.nf.value.set(c.near,c.far),_()}new ResizeObserver(pt).observe(e);let dt=ie("panel"),Yt=ie("cap"),Wt=ie("hint"),fe=ie("tip"),St=null,se=[],st=-1,ft={},It=-1,Lt=0,Dt=!1,ne=0,pe=null,nt=f,bt=0,vt=new Array(f).fill(-1e9),Q={dt:0,now:0,shown:nt,buildT:pe,reduced:o,fast:a},_t={};Object.values(d).forEach(v=>{v.up&&(_t[v.up]||=[]).push(v.id)});function Mt(){Wt.classList.add("gone"),fe.hidden=!0}function gt(v,A){if(clearTimeout(gt.t),!v){Yt.hidden=!0;return}Yt.innerHTML=`<b>${v}</b>${A||""}`,Yt.hidden=!1,gt.t=setTimeout(()=>{Yt.hidden=!0},s.captionMs)}let At=()=>It>=0&&St?.acts?St.acts[It]:null;function Bt(){let v=At(),A=Object.assign({},cM,St.st||{},(v||{}).st||{},ft),O=v&&v.hot||St.hot||{};return A.labels=[...v&&v.labels||St.labels||[],...Object.keys(O)],A.hot=O,St.build&&Object.assign(A,s.build.state(Lt,u)),A}function k(v,A){return St.build?s.build.cam(Lt,u):s.explodeCam&&v.explode&&!(St.st&&St.st.explode)&&!(A&&A.cam)?s.explodeCam:A&&A.cam||St.cam||"wide"}function re(v){let A=Bt();pe=St.build?Lt:null,h.apply(A),v&&b(k(A,At()),St.build&&s.buildCamDur?s.buildCamDur:s.camDur),$t(),_()}function Et(v,A=!0,O=!1){let $=d[v];if(!(!$||St===$)&&(O||en(),A&&(se=se.slice(0,st+1),se.push(v),st=se.length-1),wt(),St=$,ft={},It=-1,fe.hidden=!0,gt(null),h.onNavigate?.(),$.build&&(Lt=0),ie("pk").textContent=$.k,ie("pt").textContent=$.t,ie("ps").textContent=$.s,N(ie("plate")),Ct(),ht(),re(!0),$.build&&!o&&!O&&Y(),W(),s.hash!==!1&&location.hash.slice(1)!==v)){let Z=scrollX,tt=scrollY;history.replaceState(null,"","#"+v),scrollTo(Z,tt)}}function N(v){v.classList.remove("turn"),v.offsetWidth,v.classList.add("turn")}let M=matchMedia("(max-width:880px)");function G(){M.matches&&ie("win").scrollIntoView({behavior:o?"auto":"smooth",block:"start"})}function et(v){return v.img?`<li class="pic${v.fit?" fit":""}"><img src="${v.img}" alt="${v.t}" loading="lazy"><span>${v.t}</span>${v.x?`<small>${v.x}</small>`:""}</li>`:s.richFacts?`<li${v.b?"":' class="wide"'}>${v.b?`<b>${v.b}</b>`:""}<div><span>${v.t}</span>${v.x?`<small>${v.x}</small>`:""}</div></li>`:`<li${v.b?"":' class="wide"'}><b>${v.b||""}</b><div><span>${v.t}</span>${v.x?`<small>${v.x}</small>`:""}</div></li>`}let ct=v=>{let A=d[v];return`<button class="lk" type="button" data-go="${v}"><span><strong>${A.t}</strong><small>${A.s}</small></span><i aria-hidden="true">›</i></button>`};function Ct(){let v=St,A="";v.build?A=Ut():(A=`<p class="lead">${v.lead}</p>`,v.tl&&(A+=`<ol class="tl">${v.tl.map(([O,$,Z])=>`<li><b>${O}</b><strong>${$}</strong>${Z?`<span>${Z}</span>`:""}</li>`).join("")}</ol>`),v.facts&&(A+=`<ul class="facts">${v.facts.map(et).join("")}</ul>`),v.links&&(A+=`<h3 class="dh">往下钻${v.hot?"<span>也可以点图上的红点</span>":""}</h3><div class="links">${v.links.map(ct).join("")}</div>`)),v.up&&(A+=`<button class="upbtn" type="button" data-go="${v.up}">‹ 回到上一级：${d[v.up].t}</button>`),dt.innerHTML=A,dt.scrollTop=0,N(dt),v.build&&jt()}dt.addEventListener("click",v=>{let A=v.target.closest("[data-go]");A&&(Et(A.dataset.go),G())});function Pt(v){let A=[];for(let O=d[v];O;O=d[O.up])A.unshift(O);return A}function ht(){let v=Pt(St.id);ie("addr").innerHTML=v.map((A,O)=>O<v.length-1?`<button type="button" data-go="${A.id}">${A.t}</button><i>›</i>`:`<span aria-current="page">${A.t}</span>`).join(""),ie("addr").scrollLeft=1e4,ie("back").disabled=st<=0,ie("fwd").disabled=st>=se.length-1,ie("buildBtn").setAttribute("aria-pressed",St.id==="build")}ie("addr").addEventListener("click",v=>{let A=v.target.closest("[data-go]");A&&Et(A.dataset.go)}),ie("back").onclick=()=>{st>0&&Et(se[--st],!1)},ie("fwd").onclick=()=>{st<se.length-1&&Et(se[++st],!1)},ie("navHome").onclick=()=>Et("home"),ie("buildBtn").onclick=()=>Et("build");let mt=v=>{let A=_t[v]||[];return`<li><button type="button" data-go="${v}"${v===St.id?' aria-current="page"':""}>${d[v].t}</button>${A.length?`<ul>${A.map(mt).join("")}</ul>`:""}</li>`};function Rt(v){let A=ie("toc");v=v===void 0?A.hidden:v,v&&(A.innerHTML=`<ul>${mt("home")}</ul>`),A.hidden=!v,ie("tocBtn").setAttribute("aria-expanded",String(v))}ie("tocBtn").onclick=()=>Rt(),ie("toc").addEventListener("click",v=>{let A=v.target.closest("[data-go]");A&&(Rt(!1),Et(A.dataset.go),G())}),document.addEventListener("click",v=>{!ie("toc").hidden&&!ie("toc").contains(v.target)&&v.target!==ie("tocBtn")&&Rt(!1)});function $t(){let v=Bt(),A="";St.build?A=`<button type="button" data-b="-1" ${Lt<=0?"disabled":""}>‹ 上一步</button><button type="button" class="act" data-b="play" aria-pressed="${Dt}">${Nt()}</button><button type="button" data-b="1" ${Lt>=f?"disabled":""}>下一步 ›</button>`:(v.lab||(A+=s.tools.map(O=>`<button type="button" data-t="${O.id}" aria-pressed="${!!v[O.id]}">${O.label}</button>`).join("")),A+=`<button type="button" data-t="spin" aria-pressed="${!!v.spin}">旋转</button>`),St.acts&&(A+='<span class="sep"></span>'+St.acts.map((O,$)=>`<button type="button" class="act" data-a="${$}" aria-pressed="${It===$}">${O.t}</button>`).join("")),ie("tools").innerHTML=A}ie("tools").addEventListener("click",v=>{let A=v.target.closest("button");if(!A)return;if(gt(null),A.dataset.b){en(),A.dataset.b==="play"?Dt?wt():Y():(wt(),Zt(Lt+ +A.dataset.b));return}if(A.dataset.a!==void 0){let tt=+A.dataset.a;It=It===tt?-1:tt,ft={},re(!0);return}let O=A.dataset.t,$=!Bt()[O];ft[O]=$?O==="spin"?s.spinOn:1:0;let Z=s.tools.find(tt=>tt.id===O);if(Z?.cam){let tt=At();b($?Z.cam:tt&&tt.cam||St.cam||"wide")}re(!1)});let Nt=()=>Dt?"暂停":Lt>=f?"再盖一遍":Lt?"继续建造":"开始建造",Ut=()=>`<p class="lead">${s.build.lead}</p>
    <div class="bnow" id="bnow"></div>
    <div class="bctl"><button type="button" id="bprev">‹ 上一步</button><button type="button" id="bplay" class="pri"></button><button type="button" id="bnext">下一步 ›</button></div>
    <label class="bsl" for="bsl"><span>进度</span><input type="range" id="bsl" min="0" max="${f}" step="1"><output id="bval"></output></label>
    <ol class="blist" id="blist">${u.map((v,A)=>`<li><button type="button" data-b="${A+1}"><i>${A+1}</i>${v.name}</button></li>`).join("")}</ol>`;function jt(){ie("bprev").onclick=()=>{en(),wt(),Zt(Lt-1)},ie("bnext").onclick=()=>{en(),wt(),Zt(Lt+1)},ie("bplay").onclick=()=>{en(),Dt?wt():Y()},ie("bsl").oninput=v=>{en(),wt(),Zt(+v.target.value)},ie("blist").onclick=v=>{let A=v.target.closest("[data-b]");A&&(en(),wt(),Zt(+A.dataset.b))},oe()}function Zt(v){Lt=Math.max(0,Math.min(f,v)),re(!0),oe()}function oe(){if(!St?.build)return;let v=Lt?u[Lt-1]:null;if($t(),ie("ps").textContent=Lt>=f?`全部 ${f} 步 · 落成`:v?`第 ${Lt} / ${f} 步 · ${v.name}`:s.build.emptyPs,ie("bnow").innerHTML=s.build.card(Lt,u),ie("bsl").value=Lt,ie("bval").textContent=`${Lt}/${f}`,ie("bplay").textContent=Nt(),ie("bprev").disabled=Lt<=0,ie("bnext").disabled=Lt>=f,document.querySelectorAll("#blist button").forEach((A,O)=>{A.classList.toggle("done",O<Lt-1),A.toggleAttribute("aria-current",O===Lt-1)}),s.build.scroll){let A=document.querySelector("#blist [aria-current]");A&&!M.matches&&(dt.scrollTop=Math.max(0,A.offsetTop-dt.clientHeight*.55))}}function Y(){Lt>=f&&Zt(0),Dt=!0,oe(),clearTimeout(ne),ne=setTimeout(ut,s.build.playDelay(Lt))}function wt(){Dt=!1,clearTimeout(ne),St?.build&&oe()}function ut(){if(!(!Dt||!St?.build)){if(nt<Lt){ne=setTimeout(ut,s.build.hold);return}if(Lt>=f){Dt=!1,oe();return}Zt(Lt+1),ne=setTimeout(ut,s.build.tickDelay(Lt,u))}}addEventListener("keydown",v=>{v.key==="Escape"&&Rt(!1),!(!St?.build||v.target.closest?.("input"))&&(v.key==="ArrowRight"?(en(),wt(),Zt(Lt+1)):v.key==="ArrowLeft"&&(en(),wt(),Zt(Lt-1)))});function zt(v){let A=pe===null?f:pe,O=!1;if(pe===null){if(nt!==f){if(s.build.snapOnExit)vt.fill(-1e9);else for(let $=nt;$<f;$++)vt[$]=-1e9;nt=f}}else if(A<nt)nt=A;else if(A>nt&&s.build.skip(a,o)){for(let $=nt;$<A;$++)vt[$]=-1e9;nt=A}else if(A>nt&&v>=bt){vt[nt]=v;let $=u[nt];nt++,bt=v+s.build.gap($),O=!0}return u.forEach(($,Z)=>{let tt=Z<nt?Math.min(1,(v-vt[Z])/s.build.appearMs):0;$.drop=tt,$.dropK=tt,tt<1&&Z<nt&&(O=!0)}),Q.shown=nt,Q.buildT=pe,Q.now=v,h.syncBuild?.(Q),O||pe!==null&&A!==nt}let Gt=ie("labels"),K={},Qt=new U;function Jt(){let v=At();return v&&v.hot||St?.hot||{}}function Se(){let v=e.clientWidth,A=e.clientHeight,O=Jt(),$=[];St&&!St.build&&($=[...At()?.labels||St.labels||[],...Object.keys(O)]),h.filterLabels&&($=h.filterLabels($));let Z=new Set($);h.prepareLabels?.();for(let tt of Z){let z=K[tt];z||(z=document.createElement("div"),z.className="lb",z.innerHTML="<i></i><span></span>",z.onclick=()=>{let Tt=Jt()[tt];Tt&&Et(Array.isArray(Tt)?Tt[0]:Tt)},z.onkeydown=Tt=>{(Tt.key==="Enter"||Tt.key===" ")&&(Tt.preventDefault(),z.onclick())},Gt.appendChild(z),K[tt]=z);let B=h.labelPoint(tt),ot=O[tt],lt=!!ot;if(z.classList.toggle("go",lt),lt?(z.tabIndex=0,z.setAttribute("role","button")):(z.removeAttribute("tabindex"),z.removeAttribute("role")),!B){z.classList.remove("on");continue}let Ft=Array.isArray(ot)&&ot[1]||B.text;z.lastChild.textContent=lt?Ft+" ›":Ft,Qt.copy(B.point).project(c);let Kt=(Qt.x+1)/2*v,kt=(1-Qt.y)/2*A,Ot=Qt.z<1&&Kt>-20&&Kt<v+20&&kt>-10&&kt<A+10;z.classList.toggle("on",Ot);let te=B.flip==="l"?!0:B.flip==="r"?!1:Kt>v*.62;z.classList.toggle("flip",te),z.style.transform=`translate(${Kt.toFixed(1)}px,${kt.toFixed(1)}px)`}for(let tt in K)if(!Z.has(tt)){let z=K[tt];z.classList.remove("on","go"),z.removeAttribute("tabindex"),z.removeAttribute("role")}}let me=new $r,je=new yt;function Ye(v,A){let O=t.getBoundingClientRect();je.set((v-O.left)/O.width*2-1,-(A-O.top)/O.height*2+1),me.setFromCamera(je,c);let $=h.pickables();return me.intersectObjects($,!1).find(Z=>h.acceptHit(Z))||null}let is={go:Et,caption:gt,apply:re,kick:_};function ua(v){if(!St||St.build)return;let A=Ye(v.clientX,v.clientY);if(!A){gt(null);return}h.onPick(A,St,is)}t.addEventListener("pointermove",v=>{if(v.pointerType!=="mouse"||D.size||!St||St.build)return;let A=Ye(v.clientX,v.clientY),O=h.onHover(A,St)||{text:""};if(O.dirty&&_(),t.style.cursor=A?"pointer":"",fe.hidden=!O.text,O.text){let $=e.getBoundingClientRect();fe.textContent=O.text,fe.style.transform=`translate(${Math.max(8,Math.min(v.clientX-$.left+14,$.width-fe.offsetWidth-8))}px,${v.clientY-$.top+18}px)`}}),t.addEventListener("pointerleave",()=>{h.onHover(null,St)?.dirty&&_(),fe.hidden=!0});let Ee=!1,Qe=!1,Un=0,ye=0,De=0,Ce=s.tour,En=s.tourRoute,bn=v=>new Promise(A=>setTimeout(A,v)),Wn=v=>bn(Ce.say(v,a));function tn(v){ie("ttxt").textContent=v,ie("tpos").textContent=`导览 ${ye+1} / ${En.length} · ${d[En[ye]].t}`}async function da(v){let A=()=>v===Un;for(;ye<En.length;){let O=En[ye],$=d[O];if(St.id!==O?(De=0,Et(O,!0,!0)):Ce.retake&&De===0&&(It=-1,ft={},re(!0)),$.build){if(await ss(A),!A())return}else{let Z=($.say||[]).map(tt=>typeof tt=="string"?{s:tt}:tt);if(De===0&&(tn(""),await bn(Ce.intro(o)),!A()))return;for(;De<Z.length;De++){let tt=Z[De];if(tt.act!==void 0&&It!==tt.act&&(It=tt.act,ft={},re(!0),await bn(Ce.actPause),!A())||(tn(tt.s),await Wn(tt.s),!A())||Ce.afterSay&&(await bn(Ce.afterSay),!A()))return}}De=0,ye++}rs()}async function ss(v){if(wt(),De===0){if(Zt(0),tn(Ce.buildIntro),await Wn(Ce.buildIntro),!v())return;De=1}for(;De<=f;De++){Lt!==De&&Zt(De);let A=u[De-1],O=Ce.stepLine(A);if(tn(O),await Wn(O),!v())return;for(;nt<De;)if(await bn(Ce.poll),!v())return;if(Ce.afterStep&&(await bn(Ce.afterStep),!v()))return}tn(Ce.buildEnd),await Wn(Ce.buildEnd)}function pi(){Ee||(Ee=Qe=!0,gt(null),Mt(),W(),G(),da(++Un))}function en(){Ee&&(Ee=!1,Un++,W())}function rs(){Ee=Qe=!1,Un++,ye=De=0,W()}function T(){if(Ee=!1,Un++,St?.build&&En[ye]==="build"&&Zt(f),De=0,++ye>=En.length){rs();return}pi()}function W(){let v=ie("tourBtn");v.textContent=Ee?"❚❚ 导览":Qe?"▶ 继续":"▶ 导览",v.setAttribute("aria-pressed",String(Ee)),v.setAttribute("aria-label",Ee?"暂停导览":Qe?"继续导览":"开始自动导览"),ie("tsub").hidden=!(Ee||Qe&&St&&St.id===En[ye]),ie("tPause").textContent=Ee?"暂停":"继续",!Ee&&Qe&&(ie("ttxt").textContent="导览已暂停。点“继续”接着讲，或者自己点着往下看。")}ie("tourBtn").onclick=()=>Ee?en():pi(),ie("tPause").onclick=()=>Ee?en():pi(),ie("tNext").onclick=T,ie("tEnd").onclick=rs;let q=3,L=performance.now();function _(){q=Math.max(q,3)}function E(v){requestAnimationFrame(E);let A=Math.min(.05,(v-L)/1e3);if(L=v,Q.dt=A,Q.now=v,document.hidden&&q<=0&&!y&&!Dt&&!Ee)return;let O=R(v);h.spin&&!y&&v-g>s.spinDelay&&(p.th+=h.spin*A,O=!0),O=h.scalars(A)||O,O=zt(v)||O,O=h.mats(A)||O,D.size&&(O=!0);let $=window.__camFrame;$&&(p.t.set($.t[0],$.t[1],$.t[2]),p.r=$.r,p.th=$.th,p.ph=$.ph,O=!0),O&&_(),(q>0||window.__forceRender)&&(q>0&&q--,h.place(v,Q),it(),Se())}s.intro&&s.intro(p,m),pt();let P=location.hash.slice(1);Et(d[P]?P:"home"),requestAnimationFrame(E),setTimeout(()=>ie("loading").classList.add("gone"),60),window.__app={go:Et,PAGES:d,view:p,S:h.S,TG:h.TG,steps:u,STEPS:u,NSTEP:f,renderer:n,scene:l,cam:c,setState:v=>h.apply(v),camTo:b,bSet:Zt,bStop:wt,tourPlay:pi,tourPause:en,tourStop:rs,tour:{play:()=>pi(),pause:()=>en(),next:()=>T(),state:()=>({T_on:Ee,T_i:ye,T_j:De})},get bk(){return Lt},get shown(){return nt},get buildShown(){return nt},get moving(){return!!y}}}var Nn=["台基","一层","一层暗层","二层","二层暗层","三层","三层暗层","四层","四层暗层","五层","塔刹"],_g={wide:{t:[0,33,0],w:40,h:70,th:.55,ph:1.45},wideL:{t:[0,33,0],w:40,h:70,th:-.55,ph:1.42},up:{t:[0,35,0],w:34,h:72,th:.3,ph:1.7},base:{t:[0,5,8],w:44,h:16,th:.42,ph:1.22},eave1:{t:[0,11,4],w:36,h:20,th:.6,ph:1.33},eaveLow:{t:[0,10,0],w:42,h:26,th:.5,ph:1.4},pz:{t:[0,20.5,4],w:26,h:15,th:.5,ph:1.36},spire:{t:[0,61,0],w:11,h:15.5,th:.5,ph:1.32},top:{t:[0,54.5,0],w:30,h:27,th:.55,ph:1.2},explode:{t:[0,57,0],w:40,h:116,th:.55,ph:1.46},sect:{t:[0,33,0],w:36,h:70,th:0,ph:1.53},sect1:{t:[0,10.8,0],w:24,h:18.5,th:0,ph:1.5},sectUp:{t:[0,37,0],w:26,h:40,th:0,ph:1.5},plan:{t:[0,6,0],w:40,h:40,th:.001,ph:.06},dark:{t:[0,16,2],w:26,h:11,th:.45,ph:1.4},front:{t:[0,33,0],w:40,h:70,th:0,ph:1.52},bLab:{t:[1.4,4.7,0],w:7.8,h:6.8,th:.62,ph:1.3},bLabW:{t:[1.1,5.7,0],w:7.6,h:9.6,th:.62,ph:1.3},bLabX:{t:[1.3,5.9,0],w:8,h:12.8,th:.62,ph:1.3},fLab:{t:[0,3.6,0],w:3.8,h:6.8,th:.62,ph:1.28},cLab:{t:[.1,4.4,0],w:11,h:9.8,th:.42,ph:1.46},jLab:{t:[-.1,2.1,0],w:5.8,h:4.2,th:.4,ph:.82},build0:{t:[0,20,0],w:48,h:44,th:.5,ph:1.2},layout:{t:[0,4,0],w:42,h:30,th:.3,ph:.7},rise:{t:[0,36,0],w:40,h:72,th:.7,ph:1.42}},xg=["home","history","spire","eaves","fujie","pingzuo","levels","dark","section","tube","statues","bracket","brktypes","scale","fork","shoufen","joint","quake","today","build"];function _f(s){let t=Nn[s.level],e={base:"夯实地基，用石块包砌出两层台基：下层方形，上层八角。",layout:"在台面上放出三圈八角形的柱网线，摆好柱础。",cols:"立首层柱：内槽 8 根，外槽 24 根，副阶再一圈 24 根。",beams:"用阑额和普拍枋把柱头连成一圈，箍成整体。",brk:"在柱头上安装斗拱，一跳一跳向外挑出：外檐双杪双下昂，内槽华拱四跳，副阶双杪偷心。",roof:"把内外两圈柱子包进下厚上薄的土墼墙，在坐像头顶架起斗八藻井，再架椽铺瓦，副阶和首层的两重屋檐就出来了。楼梯也装进了两圈柱子之间。",spire:"在塔顶立起铁刹，用八条铁链拉结到八条屋脊上。"};return e[s.tag]?e[s.tag]:s.tag==="statue"?`${t}的塑像就位，檐下挂上牌匾。`:/斜撑$/.test(s.name)?`搭${t}：立短柱，在内外两圈柱子之间装斜撑，箍上一道“腰箍”。`:/平坐$/.test(s.name)?`在暗层顶上架平坐斗拱，铺楼板，围上勾栏，${s.name.replace("平坐","")}的地面就有了。`:/立柱$/.test(s.name)?`用叉柱造把${t}的柱子骑在下方的斗拱上；每层都比下层向内收进一点。`:/斗拱$/.test(s.name)?`安装${t}的外檐斗拱（${["","","双杪双下昂","三杪","双杪","半栱承单杪"][(s.level+1)/2]}）和内槽斗拱（华拱四跳）。`:s.tag==="top"?"四正面当心间装门，其余各间做编道抹灰墙，内槽柱间立叉子，盖上八角攒尖的塔顶。":`四正面当心间装门，其余各间做编道抹灰墙，内槽柱间立叉子，铺楼板，盖起${t}的屋檐。`}var Xl={home:{say:["这是山西应县佛宫寺释迦塔，人们叫它应县木塔。","它建于辽清宁二年，也就是公元一零五六年，到今天快一千岁了。","塔高六十七点三一米，约合二十多层楼，是世界上现存最高、最古老的木结构楼阁式塔。讲到宋、辽、金的佛塔，梁思成说：木塔，唯应县佛宫寺释迦塔一孤例。","接下来，我们把它一层层拆开来看。这里的三维模型，按梁思成书中的测绘图和记述搭建。"],k:"封面",t:"应县木塔",s:"佛宫寺释迦塔 · 辽清宁二年（1056）",cam:"wide",st:{spin:.05},lead:"山西应县佛宫寺里，立着一座快一千岁的木塔，是世界上现存最高、最古老的木结构楼阁式塔。这里的三维模型按梁思成书中的测绘图和记述搭建。图上的红点能点，塔上每一类构件也能点，一层层往下看。",facts:[{b:"1056",t:"辽清宁二年起建"},{b:"67.31 m",t:"塔高，约合二十多层楼",x:"模型用这个数。梁思成只写“全高约六十七米”"},{b:"5 + 4",t:"外看五层，里面九层",x:"明五暗四"},{b:"孤例",t:"宋、辽、金的木塔，只此一座",x:"原文：“唯应县佛宫寺释迦塔一孤例”。同节记正定天宁寺塔下半为砖、上半为木"},{img:"ta-1933.jpg",t:"应县木塔外景",x:"《中国建筑史》图 64「佛宫寺塔外景」，未注年份"}],hot:{spire:["spire","塔刹"],e3:["eaves","六重屋檐"],pz2:["pingzuo","平坐与勾栏"],dou1:["bracket","斗拱"],fujie:["fujie","副阶周匝"],taiji:["base","台基"]},links:["levels","section","bracket","quake","history","today","build"]},history:{say:["塔是随佛教从印度传来的。汉末有人起浮屠，“上累金盘，下为重楼”，就是把印度的窣堵坡放在中国的楼阁顶上。","南北朝时木塔很多，北魏洛阳永宁寺的九层木塔，百里之外就能望见。梁思成说，这种木塔今国内虽已无此实例。","再看它自己的履历。辽代在边城应州起建这座塔，到金代明昌六年增修完毕。","元代一场大地震连震七日，据记载塔身屹立不倒。明成祖题了“峻极神工”，明武宗题了“天下奇观”。","近代战火中，据说它身中二百余发炮弹，依然没有倒下。","一九三四年，梁思成和莫宗江到应县，把木塔从头到脚量了一遍。正立面的渲染图和断面图，第二年才画完。","一九四四年，他在四川李庄写成《中国建筑史》。据该书编者前言，那时他要穿着金属背心支撑身体，才能伏案写作。"],k:"年表",t:"千年履历",s:"从辽到今天",up:"home",cam:"wideL",st:{spin:.06},lead:"契丹人建立的辽朝，在边城应州起了这座塔，用的却是中原一脉相承的木构技艺。梁思成说辽代建筑“以雄朴为主，结构完固，不尚华饰”。讲到宋、辽、金的佛塔，他又说：木塔，唯应县佛宫寺释迦塔一孤例。",tl:[["汉末","“上累金盘，下为重楼”","笮融起浮屠。梁思成认为，这是把印度的窣堵坡放在中国原有的重楼之上，于是有了木塔。"],["北魏","永宁寺九层木塔","《洛阳伽蓝记》：“架木为之……去京师百里，已遥见之。”南北朝的木塔，国内已无实例。"],["1056","辽清宁二年起建","当时的应州在辽国西南边地，与北宋隔着雁门关一带相望。"],["1195","金明昌六年增修完毕","这一年不见于《中国建筑史》。"],["元","大地震","据记载连震七日，塔身屹立不倒。"],["元以后","不再建木塔","梁思成：“自元以后，不复见木塔之建造。”"],["明","两位皇帝题匾","明成祖题“峻极神工”，明武宗题“天下奇观”。塔上挂有历代牌匾五十多块。"],["近代","战火","据说身中二百余发炮弹，依然没有倒下。"],["1934","应县实测","梁思成、莫宗江全面测量。据王南序，读库版《图像中国建筑史》。"],["1935","立面与断面","正立面渲染图和断面图这一年绘成，即《中国建筑史》图 65、图 65-1。"],["1944","《中国建筑史》","在四川李庄写成。宋、辽、金佛塔一节里，木塔记为“唯应县佛宫寺释迦塔一孤例”。据编者前言，他当时要穿金属背心才能伏案。"],["1974","秘藏重现","四层佛像腹中发现辽代秘藏经卷。"],["2016","吉尼斯认证","世界最高的木塔。"]],facts:[{img:"liang-elev.jpg",fit:1,t:"营造学社测绘的立面渲染图",x:"《中国建筑史》图 65，一九三五年绘成。读库版《图像中国建筑史》序里补印过，不是那本书的原图版"}],links:["statues","today"]},spire:{say:["塔的源头，是印度埋藏舍利的窣堵坡。汉末传入中国，“上累金盘，下为重楼”：窣堵坡被放在了中国原有的楼阁之上，成了可以登临的楼阁式塔。","塔顶的刹，就是一座缩小的窣堵坡。梁思成记：以砖砌仰莲两层为座，上面是铁仰莲，承托覆钵、相轮、宝盖和圆光。再往上是仰月和宝珠。",{s:"八条铁链从宝盖拉到八条屋脊上，像八根风缆，稳住高处的塔刹。",act:0}],k:"塔顶",t:"塔刹",s:"塔顶上一座缩小的窣堵坡",up:"home",cam:"spire",labels:["s_lotus","s_bowl","s_rings","s_gai","s_halo","s_moon","s_pearl"],lead:"塔的源头是印度的窣堵坡，一座埋藏舍利的半球形坟冢。汉末传入中国，“上累金盘，下为重楼”，窣堵坡被放在中国原有的楼阁之上，长成了可以登临的楼阁式塔；塔顶的刹，就是一座缩小的窣堵坡。",facts:[{b:"汉末",t:"“上累金盘，下为重楼”",x:"《后汉书·陶谦传》；梁思成认为即以窣堵坡置于中国原有的重楼之上"},{b:"砖座",t:"砖砌仰莲两层为座",x:"梁思成《中国建筑史》"},{b:"铁刹",t:"铁仰莲之上，依次是覆钵、相轮、宝盖、圆光",x:"顶上是仰月和宝珠"},{b:"约 12 m",t:"塔刹高度",x:"按剖面图比例推算"},{b:"8 条",t:"铁链",x:"从宝盖拉到八条屋脊上，像八根风缆。条数不是《中国建筑史》里的"},{img:"liang-spire.jpg",fit:1,t:"塔刹近景",x:"梁思成《中国建筑史》图 65-3"}],acts:[{t:"看铁链",cam:"top",st:{focus:["chain"]},labels:["chain"]}],links:["history"]},eaves:{say:["从外面看，五层塔身，加上首层外面副阶的一重，一共六重屋檐。","越往下，斗拱出挑越多，屋檐伸得越远；越往上越简，屋檐一层层收窄。",{s:"屋角翘起，挂着铁马风铃，风一吹就响。",act:0}],k:"外观",t:"六重屋檐",s:"五层六檐，檐角起翘",up:"home",cam:"wideL",labels:["e1","e2","e4","e5","e6"],hot:{dou1:["bracket","屋檐靠什么挑出去？"]},lead:"五层塔身，加上首层外面副阶的一重，一共六重屋檐。檐口向上凹曲，屋角翘起。越往上，斗拱出挑越少，屋檐也越收越窄。",facts:[{b:"6 重",t:"五层六檐",x:"首层有两重檐：副阶一重，塔身一重"},{b:"出挑",t:"一、二层外檐出双杪双下昂，出挑最远",x:"往上依次是三杪、双杪、单杪（梁思成）"},{b:"翘角",t:"屋角起翘",x:"屋面在角上抬高、外伸，檐线成一条弧"},{b:"风铃",t:"铁马风铃",x:"挂在屋角，风吹作响"}],acts:[{t:"看屋角",cam:"cornerCam",labels:["corner","bell"]}],links:["brktypes","bracket","fujie"]},pingzuo:{say:["二层以上，每层屋檐上方都挑出一圈平坐，外缘围着勾栏，可以绕塔一周。","四个正面的当心间开门，其余各间是木条编道抹灰墙。","平坐的斗拱后面，藏着一个从外面看不出来的暗层。"],k:"外观",t:"平坐与勾栏",s:"每层挑出的一圈环廊",up:"home",cam:"pz",labels:["pz2","lattice"],hot:{dark1:["dark","平坐后面藏着什么？"]},lead:"二层以上，每层屋檐上方挑出一圈平坐，外缘围着勾栏，可以绕塔一周。平坐柱怎么落下去，梁思成写了两说：一说“立于下一层之草栿上”，一说下端“叉于下层斗栱之上”。",facts:[{b:"4 圈",t:"平坐",x:"二至五层各一圈"},{b:"三杪",t:"二、三、四层平坐斗拱",x:"重栱计心（梁思成）；五层为双杪"},{b:"勾栏",t:"斗子蜀柱，华版无华",x:"华版素面，不雕花"},{b:"门 · 墙",t:"四个正面的当心间辟门",x:"其余各间是木条编道抹灰墙"},{t:"平坐斗拱后面藏着一个暗层，从外面看不出来"}],links:["levels","dark"]},fujie:{say:["首层外面绕着一圈带屋檐的回廊，叫副阶周匝，所以首层有两重屋檐。","梁思成记，最下层内外两圈柱子，都包砌在土墼墙里。剖开来看，墙体下厚上薄，底层格外稳。"],k:"一层",t:"首层与副阶",s:"副阶周匝：绕着首层的回廊",up:"home",cam:"eave1",labels:["fujie"],hot:{door1:["section","进门，剖开看"],taiji:["base","台基"]},lead:"首层外面绕了一圈带屋檐的回廊，叫“副阶周匝”，所以首层有两重屋檐。梁思成记：最下层内外两圈柱子，都包砌在土墼墙里。",facts:[{b:"24 根",t:"副阶檐柱",x:"比塔身外槽柱再往外一圈"},{b:"双杪",t:"副阶斗拱出双杪，偷心",x:"偷心：跳头上不施横拱"},{b:"土墼墙",t:"内外两圈柱都包在厚墙里",x:"剖面图上墙体下厚上薄，底层格外稳"},{b:"两门",t:"首层南北各开一门"}],links:["section","base"]},base:{k:"地基",t:"台基",s:"下方上八角",up:"home",cam:"base",labels:["taiji"],lead:"木塔坐在石砌的台基上。台基分两层：下层方形，上层八角，和塔身的八角平面对齐。",facts:[{b:"2 层",t:"石台基",x:"下层方，上层八角"},{b:"3–4 m",t:"台基高度",x:"剖面图上约 3.6 米"}],acts:[{t:"俯看柱网",cam:"plan",st:{cutY:9.6,focus:["col"]},labels:["in8","out24","fj24"]}],links:["tube","build"]},levels:{say:["把塔一层层拉开，就能数清楚：五个明层之间，各夹着一个暗层，一共九层。这就是明五暗四。","暗层也就是平坐层。上一层的平坐柱落在哪里，书里有两说：立在下一层的草栿上，或者下端叉在下层斗栱上。"],k:"结构",t:"明五暗四",s:"外看五层，里面九层",up:"home",cam:"explode",st:{explode:1},labels:["L1","L3","L5","L7","L9"],hot:{L2:"dark",L4:"dark",L6:"dark",L8:"dark"},lead:"把塔一层层拉开，就能数清楚：五个明层之间，各夹着一个暗层，一共九层。暗层藏在平坐斗拱后面，外面看不出来。",facts:[{b:"5",t:"明层",x:"供佛、登临"},{b:"4",t:"暗层",x:"即平坐层，里面是斜撑"},{b:"9",t:"合计"},{t:"每层以内外两周柱为主，柱上施斗拱，上承乳栿，其上更施草栿",x:"梁思成《中国建筑史》"},{b:"两说",t:"平坐柱的落点",x:"一说“即立于下一层之草栿上”；一说“将下端叉于下层斗栱之上”"}],links:["dark","section"]},dark:{say:["把墙变透明，暗层的秘密就露出来了：内外两圈柱子之间，用斜撑连成一个个三角形。",{s:"三角形最不容易变形。四个暗层就像四道刚性的腰箍，把内外两圈柱筒牢牢箍在一起。",act:0},"明层以柔为主，暗层以刚为主，一刚一柔，层层相间。"],k:"结构",t:"暗层斜撑",s:"四道刚性的腰箍",up:"levels",cam:"dark",st:{xray:1,focus:["brace"],iso:1},labels:["brace1"],lead:"把墙变透明，暗层的秘密就露出来了：内外两圈柱子之间，用斜撑连成一个个三角形。三角形最不容易变形。",facts:[{b:"4 道",t:"腰箍",x:"四个暗层把内外两圈柱筒牢牢箍在一起"},{b:"刚柔",t:"层层相间",x:"明层柱间是门和编道墙，以柔为主；暗层以刚为主"},{t:"民国时期的一次改造拆改了部分墙体和斜撑",x:"有研究认为这削弱了结构刚度"}],acts:[{t:"看全部四层",cam:"wideL",st:{iso:0},labels:["dark1","dark2","dark3","dark4"]}],links:["quake","today"]},section:{say:["现在，沿着中轴线把木塔剖开。","每一层都是两圈柱子围成的两个八角形筒子：里面供佛，外面走人，楼梯就藏在两圈柱子之间。这张剖面的比例，按《中国建筑史》图 65-1 来推算。"],k:"内部",t:"剖开看",s:"沿中轴线一刀剖开",up:"home",cam:"sect",st:{cut:1},labels:["b2","b3","b4","b5"],hot:{b1:"statues",stair:"stair",bucket:["tube","筒中筒"]},lead:"沿着中轴线把木塔剖开。每一层都是两圈柱子围成的两个八角形筒子：里面供佛，外面走人，楼梯藏在两圈柱子之间。三维剖面的比例按《中国建筑史》图 65-1 来推算。",facts:[{b:"≈11 m",t:"一层释迦牟尼坐像",x:"这个高度不是《中国建筑史》里的数字"},{b:"筒中筒",t:"内槽 + 外槽，两圈柱子"},{b:"5 层",t:"每个明层都供着佛像",x:"塑像造型为示意"},{img:"liang-sect.jpg",fit:1,t:"营造学社测绘的断面图",x:"《中国建筑史》图 65-1，一九三五年绘成"}],links:["tube","statues","stair"]},tube:{say:["从上往下看首层的柱网：内圈八根，外圈二十四根，副阶再一圈二十四根。","梁思成记，内周各层柱均微侧脚；下四层上下中线相直，顶层才退进少许。",{s:"两个八角形的柱筒套在一起，和今天许多超高层建筑的筒中筒结构异曲同工。",act:0}],k:"内部",t:"筒中筒",s:"两个套在一起的八角筒",up:"section",cam:"plan",st:{cutY:9.6,focus:["col"]},labels:["in8","out24","fj24"],lead:"从上往下看首层的柱网：内圈 8 根，外圈 24 根，副阶再一圈 24 根。内外两圈柱子各自连成八角形的筒，套在一起。",facts:[{b:"8",t:"内槽柱",x:"根数是按图数的，书里没写"},{b:"24",t:"外槽柱",x:"根数是按图数的，书里没写"},{b:"24",t:"副阶柱",x:"根数是按图数的，书里没写"},{b:"相直",t:"内槽柱下四层上下中线相直",x:"顶层退入少许。侧脚只在内周各层柱（梁思成）"},{t:"这种“筒中筒”的思路，和今天许多超高层建筑的框筒结构异曲同工"}],acts:[{t:"侧面剖开",cam:"sect1",st:{cut:1,cutY:null},labels:["bucket","ambul"]}],links:["shoufen","fork"]},statues:{say:["五个明层都供着佛像，梁思成说它们都是辽代原塑，颇为精美。",{s:"一层是一尊释迦牟尼坐像，约十一米高，这个高度书里没写；头顶是斗八藻井。",act:0},"一九七四年，人们在四层佛像的腹中，发现了辽代秘藏的经卷。"],k:"内部",t:"各层塑像",s:"一座木构的佛国",up:"section",cam:"sectUp",st:{cut:1,focus:["buddha"]},labels:["b2","b3","b4","b5"],lead:"五个明层都供着佛像，梁思成记为“均为辽代原塑，颇精美”。一层是一尊释迦牟尼坐像，约 11 米，这个高度书里没写；头顶是斗八藻井。",facts:[{b:"一层",t:"释迦牟尼坐像，约 11 米",x:"约 11 米不是梁思成写的数字。斗八藻井不施斗栱，他记木塔藻井无斗栱"},{b:"二层",t:"一佛二菩萨二胁侍"},{b:"三层",t:"四方佛"},{b:"四层",t:"释迦与弟子、菩萨",x:"1974 年在这一层佛像腹中发现辽代秘藏经卷"},{b:"五层",t:"毗卢遮那佛与八大菩萨"}],acts:[{t:"看一层坐像",cam:"sect1",labels:["b1"]}],links:["history"]},stair:{k:"内部",t:"楼梯",s:"藏在两圈柱子之间",up:"section",cam:"sect",st:{cut:1,focus:["stair"],iso:1},labels:["stair"],lead:"楼梯夹在内外两圈柱子之间，一段段转着方向往上爬。梁思成记，观音阁的扶梯经后世改过，木塔的梯“尚完全保存原状”。",facts:[{b:"45°",t:"楼梯斜度大致为四十五度",x:"两颊夹安踏板与促版"},{b:"卧棂",t:"扶梯勾栏",x:"颊上安斗子蜀柱勾栏，不施华版，用卧棂一条"},{b:"9 层",t:"楼梯经过全部明层和暗层"}],links:["levels"]},bracket:{say:["屋檐为什么能挑出去这么远？秘密在柱头上的斗拱。","这是一组首层外檐斗拱，梁思成记为双杪双下昂。最底下是栌斗，向外一层层挑出的是华拱，斜着伸出去的两根长杆是下昂。",{s:"把它拆开来看：一组斗拱由几十个构件咬合而成。梁思成统计，木塔各层内外共有斗拱三十余种。",act:0}],k:"构造",t:"斗拱",s:"柱头上层层出挑的木构件",up:"home",cam:"bLab",st:{lab:"bracket"},labels:["栌斗","华拱","下昂","令拱","耍头"],lead:"屋檐为什么能挑出去这么远？秘密在柱头上的斗拱。这是一组首层外檐斗拱，梁思成记为“双杪双下昂”，单独取下来放大。点任何一块木头，看它叫什么。",facts:[{b:"30余种",t:"梁思成统计：各层内外共有斗拱三十余种",x:"今天通行的说法是 54 种，分类口径不同"},{b:"斗拱昂",t:"三类构件",x:"斗是垫块，拱是横臂，昂是斜杆"},{b:"一跳",t:"每向外挑出一层"},{b:"偷心",t:"第一及第三跳不施横栱",x:"观音阁上层檐的原文；木塔一、二层“如”它“所见”。第二跳画成重栱，是推出来的"},{img:"liang-dougong.jpg",t:"照片里有人坐在斗拱之间，可以看出斗拱有多大",x:"梁思成《中国建筑史》图 65-2"}],acts:[{t:"拆开构件",cam:"bLabX",st:{labEx:1},labels:["华拱","泥道拱","瓜子拱","令拱","下昂","橑檐方","椽子"]},{t:"放回塔上",cam:"dou1Cam",st:{lab:null,focus:["brk","ang"]},labels:["dou1"]}],links:["scale","brktypes","ang","fork","joint"]},brktypes:{say:["而且每一层的斗拱都不一样。","副阶双杪偷心；一层、二层双杪双下昂，出挑最远；三层三杪，四层双杪，五层半栱承单杪。","平坐二到四层出三杪，五层出双杪；内槽一律出华拱四跳。越往上越简，正好配合屋檐一层层收窄。"],k:"构造",t:"各层斗拱",s:"每一层的铺作都不一样",up:"bracket",cam:"wideL",st:{focus:["brk","ang"]},labels:["k1","k2","k3","k4","k5","k6"],lead:"梁思成逐层记下了木塔斗拱的做法：越往下出挑越多，越往上越简，正好配合屋檐一层层收窄。",tl:[["副阶","双杪，偷心","跳头上不施横拱"],["一层","双杪双下昂","如独乐寺观音阁上层檐：第一及第三跳偷心。第二跳作重栱是推演"],["二层","双杪双下昂","与一层同，如观音阁上层檐所见"],["三层","三杪","不用昂"],["四层","双杪",""],["五层","半栱承单杪",""],["平坐","二、三、四层三杪重栱计心，五层出双杪",""],["内槽","一律出华拱四跳","跳头或施横拱，或偷心"],["补间","驼峰短柱承大斗，或用斜拱相交","如善化寺大殿及普贤阁所见"]],facts:[{b:"计心",t:"跳头施横栱叫计心，不施叫偷心",x:"横栱一层为单栱，两层为重栱（梁思成）"},{t:"模型按上表逐层配置铺作；补间铺作按“驼峰短柱承大斗”做，斜拱从略"}],links:["scale","ang","eaves"]},scale:{say:["同样高的柱子，看看上面的斗拱有多大。","左边是应县木塔首层外檐的斗拱，高度约为柱高的一半；右边按明、清的比例，只有柱高的五分之一到六分之一。","梁思成说，燕云一带的辽代建筑尚多存唐风，斗栱之高，竟及柱高之半。到了清代，连度量单位也从“材”换成了更小的“斗口”。"],k:"构造",t:"斗拱变小了",s:"从辽到明清",up:"bracket",cam:"cLab",st:{lab:"compare"},labels:["辽：斗栱约为柱高之半","明、清：仅为柱高五分或六分之一","1 / 2","1 / 6"],lead:"把两组斗拱放在一样高的柱子上比一比。梁思成写道：“斗栱之高，在辽、宋为柱高之半者，至明、清仅为柱高五分或六分之一。”",facts:[{b:"1 / 2",t:"辽、宋：斗栱之高约为柱高之半",x:"应县木塔、独乐寺观音阁等燕云一带的辽建“尚多存唐风”"},{b:"1 / 5–1 / 6",t:"明、清：仅为柱高五分或六分之一",x:"梁思成《中国建筑史》"},{b:"材 → 斗口",t:"度量单位也变小了",x:"宋式以“材”为度量单位，清式以斗口为准，斗口即宋式之材厚"},{t:"右边的明清斗拱只按比例缩小示意，不是清代实物的构造"}],links:["brktypes","bracket"]},ang:{k:"构造",t:"下昂",s:"一根杠杆挑起屋檐",up:"bracket",cam:"bLabX",st:{lab:"bracket",labEx:.85,focus:["ang"]},labels:["下昂","柱头方","交互斗"],lead:"斜着伸出的两根长杆叫下昂。它像一根杠杆：里端被屋架压住，外端向上挑起屋檐。木塔只在一、二层外檐用下昂。",facts:[{b:"2 根",t:"这组斗拱里的下昂",x:"一、二层外檐都是双杪双下昂"},{b:"平 / 斜",t:"华拱平着出挑，下昂斜着出挑"}],links:["joint"]},fork:{say:["上下两层的柱子，并不是一根通到顶的。",{s:"上层柱的柱脚开出十字口，像叉子一样，骑在下层柱头斗拱的十字交叉处。",act:0},"梁思成写过两处。总论平坐，说平坐柱“均将下端叉于下层斗栱之上”；写这座塔，又说每层平坐柱“即立于下一层之草栿上”。两说都留着，模型按前一说画。"],k:"构造",t:"叉柱造",s:"上层柱怎么接到下层",up:"bracket",cam:"fLab",st:{lab:"fork"},labels:["上层柱","下层柱"],lead:"上下两层的柱子不是一根通到顶。梁思成有两说：一处写平坐柱“将下端叉于下层斗栱之上”，一处写“即立于下一层之草栿上”。这里按叉在斗拱上来演示。",facts:[{b:"叉于斗栱",t:"下端叉在下层斗栱上",x:"总论平坐：观音阁、木塔、普贤阁都写在这一句里"},{b:"立于草栿",t:"另一说：立在下一层草栿上",x:"“佛宫寺释迦木塔”一节。两说并列，模型按叉柱造画"}],acts:[{t:"拆开",cam:{t:[0,4.3,0],w:4.2,h:7.6,th:.7,ph:1.42},st:{labEx:1},labels:["柱脚开叉","十字相交的拱","栌斗"]}],links:["shoufen"]},shoufen:{say:["而且外圈每一层的平坐柱，都比下一层的檐柱稍稍退进一点。塔身就这样逐层收小，重心压得又低又稳。"],k:"结构",t:"逐层收分",s:"越往上越往里收",up:"fork",cam:"front",st:{xray:1,focus:["col"]},labels:["shoufen"],lead:"塔身逐层收小。梁思成记：外檐每层的平坐柱，都比下一层的檐柱稍稍退进一点，“促成塔全部向上递收之势”。",facts:[{b:"退入",t:"平坐柱较下一层檐柱微退入"},{b:"相直",t:"内槽柱下四层上下相直",x:"顶层退入少许"},{b:"重心低",t:"下大上小，更稳"}],links:["quake"]},joint:{say:["构件之间，全靠榫卯咬合。",{s:"这是一种燕尾榫：榫头大、颈小，插进卯口以后越拉越紧。榫卯能承重，也能微微转动，把震动的能量一点点消耗掉。",act:0},"木塔的主材是华北落叶松，据资料，部分斗拱用了榆木。"],k:"构造",t:"榫卯",s:"不靠钉子，靠咬合",up:"bracket",cam:"jLab",st:{lab:"joint"},labels:["榫（燕尾凸头）","卯（凹口）"],lead:"构件之间靠榫卯咬合。这是一种燕尾榫：榫头大、颈小，插进卯口以后越拉越紧。",facts:[{b:"半刚性",t:"节点",x:"能承重，也能微微转动"},{b:"耗能",t:"震动时一点点消耗能量"},{b:"落叶松",t:"主材是华北落叶松",x:"纹理顺直、强度高、富含树脂较耐腐；据资料部分斗拱用了榆木"}],acts:[{t:"拆开",st:{labEx:1}}],links:["quake"]},quake:{say:["地震来时，斗拱层像一层层减震垫，暗层像四道腰箍，榫卯在转动中消耗能量。","它能晃、能消耗、还能回来。刚柔相济，这就是它扛过多次大地震的秘密。"],k:"抗震",t:"为什么震不倒",s:"刚柔相济",up:"home",cam:"wideL",st:{sway:1},hot:{dou1:["bracket","斗拱：减震垫"],dark1:["dark","暗层：腰箍"]},lead:"据记载，元代一场大地震连震七日，塔身屹立不倒。它靠的不是硬扛，而是能晃、能消耗、能回来。",facts:[{b:"斗拱",t:"像一层层减震垫"},{b:"暗层",t:"像四道腰箍"},{b:"榫卯",t:"半刚性节点，在转动中消耗能量"}],links:["joint","dark","today"]},today:{say:["近千年的荷载、地震和战火，让二层的柱子明显倾斜、扭曲，是全塔最危险的部位。模型里把倾斜夸大了，方便看清。","怎么修，争论了近三十年。现在的做法是变形监测、全面测绘、建立信息模型，并推进局部加固。","二零二六年全国两会上，山西代表团建议在附近另选址，按一比一做一座研究性复建，先把古人的手艺摸透。"],k:"现状",t:"今天的木塔",s:"歪了，怎么修",up:"home",cam:"front",st:{lean:1},labels:["lean"],lead:"近千年的荷载、地震和战火，让二层的柱子明显倾斜、扭曲，是全塔最危险的部位。模型里把倾斜夸大了，方便看清。",facts:[{b:"二层",t:"倾斜最严重"},{b:"近 30 年",t:"修缮方案的争论",x:"有研究认为民国时期一次改造拆改了部分墙体和斜撑，削弱了刚度"},{b:"现在",t:"变形监测、全面测绘、信息模型、局部加固",x:"网传“马上落架大修”已被官方辟谣"},{b:"1 : 1",t:"研究性复建的建议",x:"2026 年全国两会，山西代表团建议在附近另选址复建，先把古人的手艺摸透"}],acts:[{t:"透视看斜撑",st:{xray:1,focus:["brace"]}}],links:["dark","build"]},build:{k:"建造",t:"重建木塔",s:"从一块空地开始",up:"home",build:!0}};Object.entries(Xl).forEach(([s,t])=>{t.id=s});function yg(s){let t=s.THREE,{scene:e,mobile:n}=s,i=(T=0,W=0,q=0)=>new t.Vector3(T,W,q),r=Math.PI,a=r/8,o=Math.tan(a),l=Math.cos(a),c=T=>new t.Color(T),h=7,d=()=>{h|=0,h=h+1831565813|0;let T=Math.imul(h^h>>>15,1|h);return T=T+Math.imul(T^T>>>7,61|T)^T,((T^T>>>14)>>>0)/4294967296},u=(T,W=.07)=>{let q=c(T),L=1+(d()*2-1)*W;return q.multiplyScalar(L)},f=T=>r/2+T*r/4;function p(T,W,q,L){let _=f(T),E=Math.cos(_),P=Math.sin(_),v=W*q*o;return i(E*q-P*v,L,P*q+E*v)}function y(T,W,q){let L=[];for(let _=0;_<8;_++)for(let E=0;E<W;E++){let P=-1+2*E/W;L.push({p:p(_,P,T,q),al:E===0?f(_)-a:f(_),corner:E===0,k:_,j:E})}return L}function g(T,W,q){let L=[];for(let _=0;_<8;_++)for(let E=0;E<W;E++){let P=-1+(2*E+1)/W;L.push({p:p(_,P,T,q),al:f(_),k:_,j:E})}return L}function m(T,W,q,L=!0){let _=document.createElement("canvas");_.width=T,_.height=W;let E=_.getContext("2d");q(E,T,W);let P=new t.CanvasTexture(_);return P.colorSpace=t.SRGBColorSpace,L&&(P.wrapS=P.wrapT=t.RepeatWrapping),P.anisotropy=8,P}let S={tile:m(128,128,(T,W,q)=>{T.fillStyle="#4f575d",T.fillRect(0,0,W,q);for(let L=0;L<W;L+=32){let _=T.createLinearGradient(L,0,L+32,0);_.addColorStop(0,"#2f363b"),_.addColorStop(.25,"#6c767c"),_.addColorStop(.5,"#7d878c"),_.addColorStop(.75,"#5a646a"),_.addColorStop(1,"#2c3337"),T.fillStyle=_,T.fillRect(L+16,0,16,q),T.fillStyle="#3c4448",T.fillRect(L,0,16,q);for(let E=0;E<q;E+=16)T.fillStyle="rgba(0,0,0,.35)",T.fillRect(L,E,16,2),T.fillStyle="rgba(0,0,0,.25)",T.fillRect(L+16,E+8,16,2)}}),raf:m(64,64,(T,W,q)=>{T.fillStyle="#2a1a10",T.fillRect(0,0,W,q);let L=T.createLinearGradient(0,0,W,0);L.addColorStop(0,"#5a3a22"),L.addColorStop(.3,"#9a6a40"),L.addColorStop(.6,"#7a5030"),L.addColorStop(1,"#4a2e1a"),T.fillStyle=L,T.fillRect(6,0,W*.62,q)}),lat:m(128,128,(T,W,q)=>{T.fillStyle="#5c3a25",T.fillRect(0,0,W,q),T.fillStyle="#17110c";let L=q*.66;for(let _=10;_<L-4;_+=12)for(let E=10;E<W-10;E+=12)T.fillRect(E,_,8,8);T.fillStyle="#4a2e1c",T.fillRect(10,L+4,W-20,q-L-14),T.strokeStyle="#7a5234",T.lineWidth=2,T.strokeRect(10,L+4,W-20,q-L-14)},!1),wall:m(64,64,(T,W,q)=>{T.fillStyle="#e8dcc0",T.fillRect(0,0,W,q);for(let L=0;L<260;L++)T.fillStyle=`rgba(90,70,40,${Math.random()*.06})`,T.fillRect(Math.random()*W,Math.random()*q,2+Math.random()*4,2+Math.random()*4)}),stone:m(128,128,(T,W,q)=>{T.fillStyle="#8f887b",T.fillRect(0,0,W,q),T.strokeStyle="rgba(40,34,26,.55)",T.lineWidth=2;for(let L=0;L<=q;L+=32){T.beginPath(),T.moveTo(0,L),T.lineTo(W,L),T.stroke();for(let _=L/32%2?0:32;_<W;_+=64)T.beginPath(),T.moveTo(_,L),T.lineTo(_,L+32),T.stroke()}for(let L=0;L<500;L++)T.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,T.fillRect(Math.random()*W,Math.random()*q,2,2)}),plaque:m(128,48,(T,W,q)=>{T.fillStyle="#caa24f",T.fillRect(0,0,W,q),T.fillStyle="#1d3644",T.fillRect(6,6,W-12,q-12),T.fillStyle="rgba(214,178,94,.85)";for(let L=0;L<3;L++)T.fillRect(26+L*28,15,14,3),T.fillRect(31+L*28,15,3,20),T.fillRect(24+L*28,26,18,3)},!1)},C=new t.Plane(i(0,0,-1),1e4),b=new t.Plane(i(0,-1,0),1e4),R={};function w(T,W={}){let q=new t.MeshStandardMaterial(Object.assign({color:16777215,roughness:.82,metalness:0,side:t.DoubleSide,clippingPlanes:[C,b],clipShadows:!0},W));return q.userData.cat=T,(R[T]=R[T]||[]).push(q),q}let D={};["stone","layout","col","beam","brk","ang","brace","wall","deck","rail","stair","ridge","fascia","bell","plaque","iron","buddha","dim"].forEach(T=>D[T]=w(T)),D.brk.flatShading=!0,D.ang.flatShading=!0,D.layout.emissive=c(13785659),D.layout.emissiveIntensity=.9,D.dim.emissive=c(14924642),D.dim.emissiveIntensity=.9,D.iron.metalness=.55,D.iron.roughness=.42,D.bell.metalness=.5,D.buddha.metalness=.3,D.buddha.roughness=.5,D.wall.map=S.wall,D.stone.map=S.stone,D.lattice=w("lattice",{map:S.lat}),D.plaque.map=S.plaque,D.roof=w("roof",{map:S.tile,roughness:.9}),D.soffit=w("soffit",{map:S.raf,roughness:.9});let x={col:6175783,beam:7424303,brk:9265986,dou:10450514,ang:8147508,brace:7095081,wall:13813162,wallD:9403233,wall1:12758414,deck:5190948,rail:7224102,stair:6176296,stone:11577236,stone2:9800828,ridge:4475470,fascia:4139548,iron:4144185,gold:13279570,lat:16777215,plaque:16777215,lay:13785659},I={box:new t.BoxGeometry(1,1,1),cyl:new t.CylinderGeometry(.5,.5,1,14),cyl8:new t.CylinderGeometry(.5,.5,1,8),cone:new t.CylinderGeometry(.18,.5,1,8)};I.dou=new t.LatheGeometry([i(0,-.5),i(.51,-.5),i(.6,-.22),i(.707,-.08),i(.707,.5),i(0,.5)].map(W=>new t.Vector2(W.x,W.y)),4,r/4);let F=[],V=null;function H(T,W,q){return V={name:T,level:W,tag:q,top:0,items:new Map,meshes:[],i:F.length},F.push(V),V}let j=new t.Matrix4,X=new t.Quaternion,J=new t.Quaternion,at=i(),rt=i(0,1,0),xt=i(0,0,1),it=i(),pt=i(),dt=i(),Yt=new t.Matrix4;function Wt(T,W,q,L,_,E){q.y>V.top&&(V.top=q.y);let P=T+"|"+W,v=V.items.get(P);v||(v={cat:T,kind:W,m:[],c:[]},V.items.set(P,v)),j.compose(q,L,_);for(let A=0;A<16;A++)v.m.push(j.elements[A]);v.c.push(E)}function fe(T,W,q,L,_,E,P,v,A,O,$,Z=0){let tt=Math.cos(L),z=Math.sin(L);X.setFromAxisAngle(rt,-L),Z&&(J.setFromAxisAngle(xt,Z),X.multiply(J)),Wt(T,W,i(q.x+tt*_-z*P,q.y+E,q.z+z*_+tt*P),X,at.set(v,A,O),$)}function St(T,W,q,L,_,E,P="box"){it.subVectors(q,W);let v=it.length();it.divideScalar(v);let A=Math.abs(it.y)>.97?i(1,0,0):rt;dt.crossVectors(it,A).normalize(),pt.crossVectors(dt,it),Yt.makeBasis(it,pt,dt),X.setFromRotationMatrix(Yt),Wt(T,P,i().addVectors(W,q).multiplyScalar(.5),X,at.set(v,_,L),E)}function se(T,W,q,L,_,E="cyl"){it.subVectors(q,W);let P=it.length();it.divideScalar(P),X.setFromUnitVectors(rt,it),Wt(T,E,i().addVectors(W,q).multiplyScalar(.5),X,at.set(2*L,P,2*L),_)}function st(T,W,q){W.computeBoundingBox(),V.top=Math.max(V.top,W.boundingBox.max.y),V.meshes.push({cat:T,geo:W,m:q})}function ft(T,W,q,L={}){let _=[],$=T-W,Z=(ot,lt,Ft,Kt,kt,Ot,te)=>_.push({name:ot,kind:"dou",x:lt,y:Ft+Ot/2,z:Kt,sx:kt,sy:Ot,sz:kt,t:te}),tt=(ot,lt,Ft,Kt,kt)=>_.push({name:ot,kind:"box",x:(lt+Ft)/2,y:Kt+.26/2,z:0,sx:Ft-lt,sy:.26,sz:.17,t:kt}),z=(ot,lt,Ft,Kt,kt)=>_.push({name:ot,kind:"box",x:lt,y:Ft+.26/2,z:0,sx:.17,sy:.26,sz:Kt,t:kt});Z("栌斗",0,0,0,.62,.36,0);for(let ot=1;ot<=T;ot++){let lt=.36+(ot-1)*.44;ot<=$&&(tt("华拱",-(L.inner?ot*q:.3+.25*ot),ot*q+.13,lt,ot),Z("交互斗",ot*q,lt+.26,0,.3,.18,ot));let Ft=ot%2?1.24:1.86;z(ot%2?"泥道拱":"慢拱",0,lt,Ft,ot),Z("散斗",0,lt+.26,Ft/2-.14,.28,.18,ot),Z("散斗",0,lt+.26,-(Ft/2-.14),.28,.18,ot);let Kt=ot>=2&&(L.heads&&L.heads[ot-1]||"single");if(Kt&&Kt!=="none"){let kt=(ot-1)*q;z(ot===T&&W===0?"令拱":"瓜子拱",kt,lt,1.14,ot),Z("散斗",kt,lt+.26,.43,.28,.18,ot),Z("散斗",kt,lt+.26,-.43,.28,.18,ot),Kt==="double"&&(z("慢拱",kt,lt+.44,1.86,ot+1),Z("散斗",kt,lt+.44+.26,.79,.28,.18,ot+1),Z("散斗",kt,lt+.44+.26,-.79,.28,.18,ot+1))}}for(let ot=1;ot<=W;ot++){let lt=$+ot,Ft=.36+(lt-1)*.44,Kt=-.42,kt=lt*q,Ot=Ft+.26/2,te=kt+.42,Tt=-(1+.35*ot),ue=Ot+Kt*(te-kt),ae=Ot+Kt*(Tt-kt),$e=Math.hypot(te-Tt,ue-ae);_.push({name:"下昂",kind:"box",ang:1,x:(Tt+te)/2,y:(ae+ue)/2,z:0,sx:$e,sy:.26,sz:.17,pitch:Math.atan2(ue-ae,te-Tt),t:lt}),Z("交互斗",kt,Ot+.26*.62,0,.3,.18,lt)}let B=.36+T*.44;return z("令拱",T*q,B,1.44,T+1),Z("散斗",T*q,B+.26,.58,.28,.18,T+1),Z("散斗",T*q,B+.26,-.58,.28,.18,T+1),Z("散斗",T*q,B+.26,0,.28,.18,T+1),tt("耍头",(T-1)*q,T*q+.55,B,T+1),{P:_,h:B+.26+.18,proj:T*q}}function It(T,W,q,L,_="brk"){for(let E of q.P){let P=E.kind==="dou"?u(x.dou,.045):E.ang?u(x.ang,.04):u(x.brk,.05);fe(E.ang?"ang":_,E.kind,T,W,E.x*L,E.y*L,E.z*L,E.sx*L,E.sy*L,E.sz*L,P,E.pitch||0)}}function Lt(T,W,q,L){let _=[],E=[],P=v=>(_.push(v.x,v.y,v.z),_.length/3-1);for(let v=0;v<8;v++){let A=[[W,L,-1],[W,L,1],[T,L,1],[T,L,-1]],O=[p(v,-1,W,L),p(v,1,W,L),p(v,1,T,L),p(v,-1,T,L)],$=O.map(tt=>i(tt.x,q,tt.z)),Z=(tt,z,B,ot)=>{let lt=[tt,z,B,ot].map(P);E.push(lt[0],lt[2],lt[1],lt[0],lt[3],lt[2])};Z(O[0],O[1],O[2],O[3]),Z($[3],$[2],$[1],$[0]),Z($[0],$[1],O[1],O[0]),T>0&&Z(O[3],O[2],$[2],$[3])}return Dt(_,E)}function Dt(T,W,q){let L=new t.BufferGeometry;if(L.setAttribute("position",new t.Float32BufferAttribute(T,3)),q&&L.setAttribute("uv",new t.Float32BufferAttribute(q,2)),L.setIndex(W),L=L.toNonIndexed(),L.computeVertexNormals(),!q){let _=L.attributes.position,E=[];for(let P=0;P<_.count;P++)E.push(_.getX(P)*.25+_.getZ(P)*.25,_.getY(P)*.25);L.setAttribute("uv",new t.Float32BufferAttribute(E,2))}return L}function ne(T,W,q,L,_={}){let E=_.expo||1.5,P=_.lift||.9,v=_.flare||.6,A=_.NT||10,O=_.NU||14,$=_.th||.4,Z=(lt,Ft,Kt)=>{let kt=T+(W-T)*Kt,Ot=Math.pow(Math.abs(Ft),2.6)*Math.pow(1-Kt,1.6),te=kt+v*Ot;return p(lt,Ft,te,q+(L-q)*Math.pow(Kt,E)+P*Ot)},tt={p:[],uv:[],i:[]},z={p:[],uv:[],i:[]},B={p:[],i:[]};for(let lt=0;lt<8;lt++){let Ft=tt.p.length/3;for(let kt=0;kt<=A;kt++){let Ot=kt/A;for(let te=0;te<=O;te++){let Tt=-1+2*te/O,ue=Z(lt,Tt,Ot),ae=T+(W-T)*Ot;tt.p.push(ue.x,ue.y,ue.z),tt.uv.push(Tt*ae*o/1.05,(T-ae)*1.15/1.05),z.p.push(ue.x,ue.y-$,ue.z),z.uv.push(Tt*ae*o/.62,Ot*3)}}for(let kt=0;kt<A;kt++)for(let Ot=0;Ot<O;Ot++){let te=Ft+kt*(O+1)+Ot,Tt=te+1,ue=te+O+1,ae=ue+1;tt.i.push(te,ue,Tt,Tt,ue,ae),z.i.push(te,Tt,ue,Tt,ae,ue)}let Kt=B.p.length/3;for(let kt=0;kt<=O;kt++){let Ot=-1+2*kt/O,te=Z(lt,Ot,0);B.p.push(te.x,te.y,te.z,te.x,te.y-$-.05,te.z)}for(let kt=0;kt<O;kt++){let Ot=Kt+kt*2;B.i.push(Ot,Ot+1,Ot+2,Ot+2,Ot+1,Ot+3)}}let ot=[];for(let lt=0;lt<8;lt++){let Ft=[];for(let Kt=0;Kt<=A;Kt++)Ft.push(Z(lt,1,Kt/A).add(i(0,.12,0)));ot.push(Ft)}return{top:Dt(tt.p,tt.i,tt.uv),bot:Dt(z.p,z.i,z.uv),edge:Dt(B.p,B.i),hips:ot,P:Z}}let pe={};function nt(T,W,q={}){let L=T+W+JSON.stringify(q);if(!pe[L]){let _=D[T];pe[L]=w(T,Object.assign({color:c(W),map:_&&_.map||null,roughness:_?_.roughness:.8,metalness:_?_.metalness:0,flatShading:_?_.flatShading:!1},q))}return pe[L]}function bt(T){let W=[],q=[],L=[],_=new t.Matrix3;for(let{g:P,m:v}of T){let A=P.index?P.toNonIndexed():P.clone();v&&A.applyMatrix4(v),A.attributes.normal||A.computeVertexNormals();let O=A.attributes.position,$=A.attributes.normal,Z=A.attributes.uv;for(let tt=0;tt<O.count;tt++)W.push(O.getX(tt),O.getY(tt),O.getZ(tt)),q.push($.getX(tt),$.getY(tt),$.getZ(tt)),Z?L.push(Z.getX(tt),Z.getY(tt)):L.push(0,0)}let E=new t.BufferGeometry;return E.setAttribute("position",new t.Float32BufferAttribute(W,3)),E.setAttribute("normal",new t.Float32BufferAttribute(q,3)),E.setAttribute("uv",new t.Float32BufferAttribute(L,2)),E}let vt=(T=0,W=0,q=0,L=0,_=1,E)=>new t.Matrix4().compose(i(T,W,q),new t.Quaternion().setFromAxisAngle(rt,L),i(_,E===void 0?_:E,_)),Q=new t.SphereGeometry(1,20,14),_t=new t.CylinderGeometry(1,1,1,20);function Mt(T,W,q,L,_,E,P){return{g:T,m:new t.Matrix4().compose(i(W,q,L),new t.Quaternion,i(_,E,P))}}function gt(T,W,q,L){return{g:new t.CylinderGeometry(T,W,q,20),m:new t.Matrix4().makeTranslation(0,L,0)}}function At(T,W,q,L,_,E,P=!0,v=0){let A=[];E?A.push(gt(.1*L,.16*L,.52*L,.26*L),gt(.1*L,.12*L,.24*L,.62*L),Mt(Q,0,.72*L,0,.17*L,.065*L,.1*L),gt(.035*L,.04*L,.06*L,.77*L),Mt(Q,0,.83*L,0,.07*L,.085*L,.075*L),Mt(Q,0,.915*L,0,.035*L,.035*L,.035*L),Mt(Q,.16*L,.55*L,.02*L,.035*L,.17*L,.04*L),Mt(Q,-.16*L,.55*L,.02*L,.035*L,.17*L,.04*L)):A.push(Mt(Q,0,.11*L,.05*L,.44*L,.12*L,.27*L),gt(.16*L,.2*L,.34*L,.37*L),Mt(Q,0,.52*L,0,.24*L,.085*L,.15*L),Mt(Q,0,.22*L,.2*L,.12*L,.05*L,.08*L),Mt(Q,.2*L,.36*L,.05*L,.06*L,.16*L,.07*L),Mt(Q,-.2*L,.36*L,.05*L,.06*L,.16*L,.07*L),gt(.06*L,.07*L,.08*L,.6*L),Mt(Q,0,.69*L,0,.105*L,.125*L,.11*L),Mt(Q,0,.8*L,0,.05*L,.05*L,.05*L));let O=new t.Matrix4().compose(i(T,W+v,q),new t.Quaternion().setFromAxisAngle(rt,_),i(1,1,1)),$=A.map(Z=>({g:Z.g,m:O.clone().multiply(Z.m)}));if(v){let Z=Math.min(L,7.2);$.push({g:new t.CylinderGeometry(.5,.42,1,8),m:vt(T,W+v*.275,q,_,Z,v*.55)}),$.push({g:new t.CylinderGeometry(.56,.44,1,16),m:vt(T,W+v*.72,q,_,Z,v*.56)})}if(P){let Z=new t.RingGeometry(L*.11,L*.2,32),tt=new t.Matrix4().compose(i(T-Math.sin(_)*L*.16,W+v+L*(E?.84:.7),q-Math.cos(_)*L*.16),new t.Quaternion().setFromAxisAngle(rt,_),i(1,1,1));$.push({g:Z,m:tt})}return $}let Bt=3.6,k=[Bt,18.2,27.4,36.1,44.5],re=54.8,Et=[{A:11.4,Ai:6,hc:7.9,n:4,nAng:2,s:.5,sc:1,ep:3.7,r:.33,pz:3},{A:11.1,Ai:6,hc:3.2,n:4,nAng:2,s:.5,sc:.86,ep:3.6,r:.29,pz:3},{A:10.75,Ai:6,hc:3.1,n:3,nAng:0,s:.5,sc:.86,ep:3.4,r:.28,pz:3},{A:10.4,Ai:6,hc:3,n:2,nAng:0,s:.5,sc:.86,ep:2.9,r:.27,pz:2},{A:10,Ai:5.6,hc:3,n:1,nAng:0,s:.5,sc:.86,ep:2.7,r:.27}],N=[],M={s:.62,sc:.82},G={A:15,hc:4.1,n:2,s:.45,sc:.72,ep:2.4},et={1:"none",2:"double",3:"none"},ct={1:"none"},Ct={1:"double",2:"double"},Pt={},ht=(T,W,q,L)=>{let _=[T,W,q,!!(L&&L.inner),JSON.stringify(L&&L.heads||0)].join();return Pt[_]||(Pt[_]=ft(T,W,q,L),Pt[_].mid=T>1?ft(Math.max(1,T-2),0,q,L):Pt[_]),Pt[_]};(function(){Et.forEach((T,W)=>{if(T.y=k[W],T.top=T.y+T.hc,T.yb=T.top+.2,T.B=ht(T.n,T.nAng,T.s,W<2?{heads:et}:void 0),T.ybt=T.yb+T.B.h*T.sc,T.Bi=ht(4,0,.42,{inner:1}),T.sci=T.B.h*T.sc/T.Bi.h,W<4){T.Ad=(T.A+Et[W+1].A)/2,T.Adi=(T.Ai+Et[W+1].Ai)/2,T.PZB=ht(T.pz,0,M.s,T.pz===3?{heads:Ct}:void 0);let q=T.PZB.h*M.sc;N[W]=k[W+1]-.25-q-.2-T.ybt,T.ydt=T.ybt+N[W],T.pzb=T.ydt+.2,T.pzt=T.pzb+q}}),G.y=Bt,G.top=G.y+G.hc,G.yb=G.top+.2,G.B=ht(G.n,0,G.s,{heads:ct}),G.ybt=G.yb+G.B.h*G.sc})();let mt=67.31;function Rt(T,W,q,L,_,E,P=1){for(let v=0;v<8;v++)for(let A=0;A<P;A++){let O=-1+2*A/P,$=-1+2*(A+1)/P;St(T,p(v,O,W,q),p(v,$,W,q),L,_,u(E,.05))}}function $t(T,W,q,L,_,E=x.col){for(let P of y(T,W,q))se("col",P.p,i(P.p.x,q+L,P.p.z),_,u(E,.06))}function Nt(T,W,q,L=1){Rt("beam",T,q-.27*L,.24*L,.5*L,x.beam,W),Rt("beam",T,q+.1,.46*L,.2,x.beam,W)}function Ut(T,W,q,L,_,E=!0,P="brk"){for(let v of y(T,W,q))It(v.p,v.al,L,_,P);if(E){let v=L.mid||L,A=(L.h-v.h)*_;for(let O of g(T,W,q))A>.25&&(fe(P,"box",O.p,O.al,0,.15*_,0,.42*_,.3*_,1.2*_,u(x.dou,.05)),se(P,i(O.p.x,q+.28*_,O.p.z),i(O.p.x,q+A,O.p.z),.12*_,u(x.brk,.05))),It(i(O.p.x,q+A,O.p.z),O.al,v,_,P)}for(let v=2;v<=Math.min(4,L.P.reduce((A,O)=>Math.max(A,O.t),0));v++)Rt("beam",T,q+(.36+.44*(v-1)+.13)*_,.17*_,.26*_,x.beam,1)}function jt(T,W,q,L,_,E,P=()=>!1,v="wall"){for(let A=0;A<8;A++)for(let O=0;O<W;O++){let $=P(A,O);if($===!0)continue;let Z=-1+2*O/W,tt=-1+2*(O+1)/W;if($&&$.door){let z=q+$.door;St(v,p(A,Z,T,(z+L)/2),p(A,tt,T,(z+L)/2),_,L-z,u(E,.03));continue}if($&&$.lattice){St("lattice",p(A,Z+.04,T,(q+L)/2),p(A,tt-.04,T,(q+L)/2),.16,L-q,c(16777215));continue}St(v,p(A,Z,T,(q+L)/2),p(A,tt,T,(q+L)/2),_,L-q,u(E,.03))}}function Zt(T,W,q,L,_,E,P,v=()=>!1){let A=[],O=$=>_+(E-_)*($-q)/(L-q);for(let $=0;$<8;$++)for(let Z=0;Z<W;Z++){let tt=v($,Z);if(tt===!0)continue;let z=p($,-1+2*Z/W,T,0),B=p($,-1+2*(Z+1)/W,T,0),ot=i().subVectors(B,z).normalize(),lt=i(-ot.z,0,ot.x),Ft=_/2*o;Z===0&&(z=z.clone().addScaledVector(ot,-Ft)),Z===W-1&&(B=B.clone().addScaledVector(ot,Ft));let Kt=tt&&tt.door?q+tt.door:q,kt=O(Kt),Ot=(ae,$e,an,Cn)=>[ae.x+lt.x*an*Cn/2,$e,ae.z+lt.z*an*Cn/2],te=[Ot(z,Kt,kt,-1),Ot(B,Kt,kt,-1),Ot(B,Kt,kt,1),Ot(z,Kt,kt,1),Ot(z,L,E,-1),Ot(B,L,E,-1),Ot(B,L,E,1),Ot(z,L,E,1)],Tt=[],ue=[];te.forEach(ae=>Tt.push(...ae)),[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]].forEach(([ae,$e,an,Cn])=>ue.push(ae,$e,an,ae,an,Cn)),A.push({g:Dt(Tt,ue)})}st("wall",bt(A),nt("wall",P))}function oe(T,W){for(let q=0;q<8;q++){let L=p(q,-1,T,W),_=p(q,1,T,W),E=Math.floor(L.distanceTo(_)/.3);St("rail",i(L.x,W+1.15,L.z),i(_.x,W+1.15,_.z),.1,.1,c(x.rail)),St("rail",i(L.x,W+.12,L.z),i(_.x,W+.12,_.z),.12,.12,c(x.rail));for(let P=1;P<E;P++){let v=i().lerpVectors(L,_,P/E);se("rail",i(v.x,W+.1,v.z),i(v.x,W+1.32,v.z),.035,c(x.rail),"cyl8")}}}function Y(T,W,q,L,_={}){let E=ne(T,W,q,L,_);st("roof",E.top,D.roof),st("soffit",E.bot,D.soffit),st("fascia",E.edge,nt("fascia",x.fascia));for(let P of E.hips){for(let $=0;$<P.length-1;$++)se("ridge",P[$],P[$+1],.17,c(x.ridge));let v=P[0],A=i().subVectors(P[0],P[1]).normalize();St("ridge",v,i().addVectors(v,A.clone().multiplyScalar(.7)).add(i(0,.35,0)),.3,.3,c(3817282));for(let $=1;$<=3;$++){let Z=i().lerpVectors(P[0],P[1],$*.24).add(i(0,.22,0));se("ridge",Z,i(Z.x,Z.y+.32,Z.z),.1,c(5330779),"cyl8")}let O=i(v.x,v.y-.45,v.z);se("bell",i(v.x,v.y-.1,v.z),O,.02,c(x.iron)),se("bell",i(O.x,O.y-.42,O.z),O,.13,c(5919306),"cone")}return _.noRidge||Rt("ridge",W+.05,L+.12,.34,.34,x.ridge),E}function wt(T,W,q,L,_,E){let P=Math.pow((T-L)/(T-W),E);return(_-q*P)/(1-P)}function ut(T,W,q,L,_="deck",E=x.deck){st(_,Lt(T,W,q,L),nt(_,E))}function zt(T,W){let q=y(T,3,W);for(let L=0;L<q.length;L++){let _=q[L].p,E=q[(L+1)%q.length].p;se("rail",_,i(_.x,W+1.25,_.z),.07,u(x.rail,.05),"cyl8"),St("rail",i(_.x,W+1.05,_.z),i(E.x,W+1.05,E.z),.08,.08,c(x.rail)),St("rail",i(_.x,W+.72,_.z),i(E.x,W+.72,E.z),.12,.08,c(x.rail)),St("rail",i(_.x,W+.08,_.z),i(E.x,W+.08,E.z),.16,.16,c(x.rail)),St("rail",i(_.x,W+.42,_.z),i(E.x,W+.42,E.z),.04,.5,c(6172446));let P=_.distanceTo(E),v=Math.floor(P/.9);for(let A=1;A<v;A++){let O=i().lerpVectors(_,E,A/v);se("rail",i(O.x,W+.76,O.z),i(O.x,W+1.05,O.z),.035,c(x.rail))}}}function Gt(T,W,q,L,_){let E=(_-L)/q;for(let P=0;P<q;P++){let v=(W+P)%8,A=Math.max(8,Math.round(E/.3));for(let Z=0;Z<A;Z++){let tt=-.72+1.44*(Z+.5)/A,z=p(v,tt,T,L+P*E+(Z+.5)*E/A),B=p(v,tt+1.44/A,T,z.y);St("stair",i(z.x,z.y-E/A/2,z.z),i(B.x,z.y-E/A/2,B.z),1.2,E/A,u(x.stair,.04))}let O=p(v,-.72,T,L+P*E),$=p(v,.72,T,L+(P+1)*E);for(let Z of[-.62,.62]){let tt=i(Math.cos(f(v)),0,Math.sin(f(v))).multiplyScalar(Z);St("stair",O.clone().add(tt).add(i(0,-.25,0)),$.clone().add(tt).add(i(0,-.25,0)),.12,.35,c(5058332))}}}let K={};function Qt(){let T=Et[0];H("夯基筑台",0,"base"),Wt("stone","box",i(0,.8,0),X.set(0,0,0,1),i(40,1.6,40),c(x.stone2)),ut(0,17.6,1.6,Bt,"stone",x.stone),ut(17.3,17.9,Bt-.15,Bt+.05,"stone",10327170);for(let z=0;z<8;z++){let ot=(Bt-1.6)/8;Wt("stone","box",i(0,.2*(z+1)/2,23.2-z*.4),X.set(0,0,0,1),i(7,.2*(z+1),.4),c(10129791)),Wt("stone","box",i(0,1.6+ot*(z+1)/2,19.85-z*.3),X.set(0,0,0,1),i(5.4,ot*(z+1),.3),c(10721928))}K.taiji=i(0,2.6,17.7),K.taiji2=i(-14,1.2,20.1),H("放线定柱网",0,"layout");for(let z of[T.A,T.Ai,G.A])Rt("layout",z,Bt+.03,.12,.05,x.lay);for(let z=0;z<8;z++)St("layout",i(0,Bt+.03,0),p(z,-1,G.A+1.2,Bt+.03),.1,.05,c(x.lay));for(let[z,B]of[[T.A,3],[T.Ai,1],[G.A,3]])for(let ot of y(z,B,Bt))se("stone",ot.p,i(ot.p.x,Bt+.22,ot.p.z),.6,u(12103322,.04),"cyl8");H("立首层柱",1,"cols"),$t(T.A,3,Bt,T.hc,T.r),$t(T.Ai,1,Bt,T.hc,T.r),$t(G.A,3,Bt,G.hc,.28),K.col_out=p(7,-1/3,T.A,9),K.col_in=p(0,-1,T.Ai,9),H("阑额普拍枋",1,"beams"),Nt(T.A,3,T.top),Nt(T.Ai,1,T.top),Nt(G.A,3,G.top,.8),H("安斗拱",1,"brk"),Ut(T.A,3,T.yb,T.B,T.sc),Rt("beam",T.A+T.B.proj*T.sc,T.ybt+.15,.3,.3,x.beam),Ut(T.Ai,1,T.yb,T.Bi,T.sci),Ut(G.A,3,G.yb,G.B,G.sc),Rt("beam",G.A+G.B.proj*G.sc,G.ybt+.12,.24,.24,x.beam);for(let z=0;z<8;z++)St("beam",p(z,-1,T.Ai,T.yb+.9),p(z,-1,T.A,T.yb+.9),.3,.45,u(x.beam));K.dou1=p(7,1/3,T.A+1.2,T.yb+1.2),H("铺椽盖瓦",1,"roof"),Zt(T.A,3,Bt,T.top-.52,2.2,1,x.wall1,(z,B)=>(z===0||z===4)&&B===1?{door:5.6}:!1),Zt(T.Ai,1,Bt,T.top-.52,2,.9,x.wall1,z=>z===0?{door:7}:z===4?{door:5.6}:!1),ut(T.Ai-.3,T.A-.3,T.ybt,T.ybt+.22);{let z=k[1]-.7-T.ybt,B=new t.CylinderGeometry(.5,(T.Ai-.4)/l,z,8,1,!0);B.rotateY(a),B.translate(0,T.ybt+z/2,0),st("beam",B,nt("beam",7162417))}{let z=T.A+.5,B=T.top+.3,ot=G.A+G.B.proj*G.sc,lt=G.A+G.ep,Ft=wt(lt,z,B,ot,G.ybt+.72,1.5);G.roof=Y(lt,z,Ft,B,{lift:.7,flare:.5}),G.ye=Ft}{let z=T.A+T.ep,B=T.Ad+.2,ot=T.ydt-.1,lt=T.A+T.B.proj*T.sc,Ft=wt(z,B,ot,lt,T.ybt+.72,1.5);T.roof=Y(z,B,Ft,ot,{lift:1,flare:.7}),T.ye=Ft}Gt((T.A+T.Ai)/2+.2,5,3,T.y,Et[1].y),K.fujie=p(7,.2,G.A+G.ep-.6,G.ye+.6),K.door1=p(0,0,T.A+.5,7);for(let z=0;z<5;z++){let B=Et[z],ot=2*z+1;if(z>0){H(`${Nn[ot]}立柱`,ot,"up"),$t(B.A,3,B.y,B.hc,B.r),$t(B.Ai,1,B.y,B.hc,B.r),Nt(B.A,3,B.top,B.sc),Nt(B.Ai,1,B.top,B.sc),H(`${Nn[ot]}斗拱`,ot,"up"),Ut(B.A,3,B.yb,B.B,B.sc),Rt("beam",B.A+B.B.proj*B.sc,B.ybt+.15,.28,.28,x.beam),Ut(B.Ai,1,B.yb,B.Bi,B.sci);for(let lt=0;lt<8;lt++)St("beam",p(lt,-1,B.Ai,B.yb+.8),p(lt,-1,B.A,B.yb+.8),.28,.42,u(x.beam));if(H(`${Nn[ot]}墙与屋檐`,ot,z===4?"top":"up"),jt(B.A,3,B.y,B.top-.5,.34,x.wall,(lt,Ft)=>lt%2===0&&Ft===1?{lattice:1}:!1),oe(B.Ai,B.y),ut(0,B.Ai-.6,B.y,B.y+.75,"stone",11050892),z<4){ut(0,B.A-.3,B.ybt,B.ybt+.2);let lt=B.A+B.ep,Ft=B.Ad+.2,Kt=B.ydt-.1,kt=B.A+B.B.proj*B.sc,Ot=wt(lt,Ft,Kt,kt,B.ybt+.7,1.5);B.roof=Y(lt,Ft,Ot,Kt,{lift:.85,flare:.6}),B.ye=Ot,Gt((B.A+B.Ai)/2+.2,z%2?5:1,2,B.y,Et[z+1].y)}else{let lt=B.A+B.ep,Ft=1.25,Kt=B.A+B.B.proj*B.sc,kt=re,Ot=wt(lt,Ft,kt,Kt,B.ybt+.7,1.9);B.roof=Y(lt,Ft,Ot,kt,{expo:1.9,lift:1.1,flare:.8,NT:14,noRidge:!0}),B.ye=Ot,B.apex=kt,ut(0,B.A-.3,B.ybt,B.ybt+.2)}}if(z<4){let lt=ot+1,Ft=Et[z+1];H(`${Nn[lt]}斜撑`,lt,z===0?"dark":"up"),$t(B.Ad,3,B.ybt,N[z]+.02,.25),$t(B.Adi,1,B.ybt,N[z]+.02,.25),Nt(B.Ad,3,B.ydt,.8),Nt(B.Adi,1,B.ydt,.8);let Kt=y(B.Ad,3,0),kt=y(B.Adi,1,0);for(let Ot=0;Ot<Kt.length;Ot++){let te=Kt[Ot].p,Tt=Kt[(Ot+1)%Kt.length].p,ue=Ot%2===0;St("brace",i(te.x,ue?B.ybt+.15:B.ydt-.2,te.z),i(Tt.x,ue?B.ydt-.2:B.ybt+.15,Tt.z),.2,.24,u(x.brace)),St("brace",i(te.x,(B.ybt+B.ydt)/2,te.z),i(Tt.x,(B.ybt+B.ydt)/2,Tt.z),.16,.2,u(x.brace))}for(let Ot=0;Ot<8;Ot++){let te=kt[Ot].p,Tt=kt[(Ot+1)%8].p;St("brace",i(te.x,B.ybt+.15,te.z),i(Tt.x,B.ydt-.2,Tt.z),.2,.24,u(x.brace)),St("brace",i(Tt.x,B.ybt+.15,Tt.z),i(te.x,B.ydt-.2,te.z),.2,.24,u(x.brace));let ue=Kt[Ot*3].p;St("brace",i(ue.x,B.ybt+.15,ue.z),i(te.x,B.ydt-.2,te.z),.2,.24,u(x.brace)),St("brace",i(te.x,B.ybt+.15,te.z),i(ue.x,B.ydt-.2,ue.z),.2,.24,u(x.brace)),St("beam",i(ue.x,B.ydt-.05,ue.z),i(te.x,B.ydt-.05,te.z),.26,.3,u(x.beam))}jt(B.Ad,3,B.ybt+.1,B.ydt-.3,.3,x.wallD),jt(B.Adi,1,B.ybt+.1,B.ydt-.3,.3,x.wallD),K["dark"+(z+1)]=p(1,-.1,B.Ad,(B.ybt+B.ydt)/2),K["brace"+(z+1)]=p(0,.33,B.Ad,(B.ybt+B.ydt)/2),H(`${Nn[ot+2]}平坐`,lt,z===0?"pz":"up"),Ut(B.Ad,3,B.pzb,B.PZB,M.sc),ut(0,Ft.A+1.5,Ft.y-.25,Ft.y),Rt("beam",Ft.A+1.4,Ft.y-.4,.3,.3,x.beam),zt(Ft.A+1.38,Ft.y),K["pz"+(z+2)]=p(7,.15,Ft.A+1.45,Ft.y+.6)}}let W=Et[4],q=W.apex;H("立铁刹",10,"spire");let L=(z,B=24)=>new t.LatheGeometry(z.map(([ot,lt])=>new t.Vector2(ot,lt)),B);{let z=L([[0,-.7],[1.9,-.7],[1.9,.2],[1.45,.45],[1.3,.75],[1.7,1.05],[1.85,1.2],[1.3,1.3],[1.15,1.55],[1.55,1.85],[1.7,2],[0,2]],8);z.rotateY(a),z.translate(0,q,0),st("stone",z,nt("stone",9208434))}let _=[],E=q+2;_.push({g:L([[0,0],[.6,0],[1.2,.35],[1.3,.45],[.8,.45],[0,.45]]),m:vt(0,E,0)}),_.push({g:L([[0,0],[.8,0],[1.25,.4],[1.42,1],[1.35,1.55],[1,2],[.55,2.25],[0,2.25]]),m:vt(0,E+.45,0)});let P=E+2.7;for(let z=0;z<6;z++){let B=1.02-z*.03;_.push({g:new t.CylinderGeometry(B,B,.24,28),m:vt(0,P+.15+z*.37,0)})}let v=P+2.35;_.push({g:L([[0,0],[1.35,0],[1.35,.12],[.9,.3],[0,.3]]),m:vt(0,v,0)});let A=v+1.45;_.push({g:new t.TorusGeometry(1,.09,8,40),m:vt(0,A,0)});let O=A+1.35;_.push({g:new t.TorusGeometry(.45,.07,6,20,r),m:new t.Matrix4().compose(i(0,O+.45,0),new t.Quaternion().setFromAxisAngle(i(0,0,1),r),i(1,1,1))}),_.push({g:new t.SphereGeometry(.32,16,12),m:vt(0,O+.75,0)}),_.push({g:new t.SphereGeometry(.18,12,10),m:vt(0,O+1.3,0)}),_.push({g:new t.CylinderGeometry(.06,.13,mt-E,8),m:vt(0,(mt+E)/2,0)}),st("iron",bt(_),nt("iron",x.iron)),K.s_lotus=i(1.85,q+1.1,0),K.s_bowl=i(1.42,E+1.45,0),K.s_rings=i(1.02,P+1.1,0),K.s_gai=i(1.35,v+.1,0),K.s_halo=i(1,A,0),K.s_moon=i(.45,O+.1,0),K.s_pearl=i(.32,O+.75,0);let $=[],Z=i(0,v+.05,0);for(let z=0;z<8;z++){let B=W.roof.hips[z][0].clone().add(i(0,.3,0)),ot=i().lerpVectors(Z,B,.5);ot.y-=1.1;let lt=new t.QuadraticBezierCurve3(Z.clone().add(i(B.x,0,B.z).normalize().multiplyScalar(1.25)),ot,B);$.push({g:new t.TubeGeometry(lt,24,.06,5)})}st("chain",bt($),nt("chain",3025962,{metalness:.5,roughness:.5})),K.chain=i().lerpVectors(Z,W.roof.hips[7][0],.55).add(i(0,-.7,0)),K.spire=i(1.9,q+1.2,0);let tt={1:[],3:[],5:[],7:[],9:[]};tt[1].push(...At(0,Bt,-.4,10.3,0,!1,!0,3));{let z=Et[1].y+.75;tt[3].push(...At(0,z,-.6,2.6,0,!1,!0,1),...At(-2,z,0,2.8,0,!0),...At(2,z,0,2.8,0,!0),...At(-3.4,z,.6,2.2,0,!0,!1),...At(3.4,z,.6,2.2,0,!0,!1))}{let z=Et[2].y+.75;for(let B=0;B<4;B++){let ot=B*r/2;tt[5].push(...At(Math.sin(ot)*1.9,z,Math.cos(ot)*1.9,2.4,ot,!1,!0,.8))}}{let z=Et[3].y+.75;tt[7].push(...At(0,z,-.6,2.5,0,!1,!0,1),...At(-1.8,z,.2,2.4,0,!0,!1),...At(1.8,z,.2,2.4,0,!0,!1),...At(-3.2,z,.6,2.6,0,!0),...At(3.2,z,.6,2.6,0,!0))}{let z=Et[4].y+.75;tt[9].push(...At(0,z,0,2.5,0,!1,!0,1));for(let B=0;B<8;B++){let ot=B*r/4+a;tt[9].push(...At(Math.sin(ot)*3.4,z,Math.cos(ot)*3.4,1.5,ot,!1,!1,.5))}}[1,3,5,7,9].forEach((z,B)=>{H(`${Nn[z]}塑像`,z,"statue"),st("buddha",bt(tt[z]),nt("buddha",x.gold));let ot=Et[B];St("plaque",p(0,-.2,ot.A+(B?.25:.55),ot.top-1.1),p(0,.2,ot.A+(B?.25:.55),ot.top-1.1),.14,.95,c(16777215))}),K.b1=i(0,13,0),K.b2=i(0,Et[1].y+3.8,0),K.b3=i(0,Et[2].y+2.8,0),K.b4=i(0,Et[3].y+3,0),K.b5=i(0,Et[4].y+2.6,0),K.stair=p(6,0,(T.A+T.Ai)/2+.2,9);for(let z=0;z<5;z++){let B=Et[z];K["L"+(2*z+1)]=p(2,0,B.A+2,(B.y+B.top)/2),z<4&&(K["L"+(2*z+2)]=p(2,0,B.Ad+2,(B.ybt+B.ydt)/2))}K.L0=p(2,0,20,1.8),K.L10=i(-2,mt-4,0),K.eave=[p(1,1,G.A+G.ep+.5,G.ye),...Et.map(z=>p(1,1,z.A+z.ep+.7,z.ye+.9))],K.corner=Et[1].roof.hips[7][0].clone(),K.bell=K.corner.clone().add(i(0,-1,0)),K.lattice=p(0,0,Et[1].A+.3,Et[1].y+1.6),K.lean=p(0,.33,Et[1].A,Et[1].y+2)}let Jt=T=>new t.Color().setHex(T,t.LinearSRGBColorSpace),Se=new t.HemisphereLight(Jt(15920610),Jt(7035461),.95*r);e.add(Se);let me=new t.DirectionalLight(Jt(16770754),1.5*r);me.position.set(-48,95,70),me.castShadow=!0,me.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(me.shadow.camera,{left:-46,right:46,top:80,bottom:-10,near:20,far:260}),me.shadow.bias=-6e-4,me.shadow.normalBias=.04,me.target.position.set(0,26,0),e.add(me,me.target);let je=new t.DirectionalLight(Jt(12571356),.4*r);je.position.set(60,40,-50),e.add(je);let Ye=new t.Mesh(new t.CircleGeometry(260,64),new t.ShadowMaterial({opacity:.17}));Ye.rotation.x=-r/2,Ye.receiveShadow=!0,e.add(Ye);let is=new t.Group;e.add(is);function ua(){F.forEach(T=>{let W=new t.Group;W.userData={level:T.level,step:T.i},T.group=W,T.items.forEach(q=>{let L=q.c.length,_=new t.InstancedMesh(I[q.kind],D[q.cat]||D.beam,L);for(let E=0;E<L;E++)j.fromArray(q.m,E*16),_.setMatrixAt(E,j),_.setColorAt(E,q.c[E]);_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),_.frustumCulled=!1,_.castShadow=q.cat!=="layout",_.receiveShadow=!0,_.userData={cat:q.cat,level:T.level},W.add(_)}),T.meshes.forEach(({cat:q,geo:L,m:_})=>{let E=new t.Mesh(L,_);E.castShadow=E.receiveShadow=!0,E.userData={cat:q,level:T.level},W.add(E)}),is.add(W)})}let Ee=new t.Group;Ee.visible=!1,e.add(Ee);let Qe={};function Un(T,W,q,L,_,E,P=0){let v=new t.Mesh(q,_);return v.applyMatrix4(L),v.castShadow=v.receiveShadow=!0,v.userData={name:W,ex:E||i(),base:v.position.clone(),tier:P},T.add(v),v}function ye(T,W,q,L,_,E,P,v,A,O,$,Z=0,tt="box",z=0){let B=new t.Quaternion().setFromAxisAngle(rt,z);return Z&&B.multiply(new t.Quaternion().setFromAxisAngle(xt,Z)),Un(T,W,I[tt],new t.Matrix4().compose(i(_,E,P),B,i(v,A,O)),nt(q,L),$)}function De(){{let T=new t.Group;T.userData.id="bracket",Ee.add(T);let W=ft(4,2,.5,{heads:et}),q=2.8,L=.5,_=.62;ye(T,"柱","col",x.col,0,q/2-.2,0,.62,q-.4,.62,i(0,0,0),0,"cyl"),ye(T,"阑额","beam",x.beam,0,q-.47,0,.24,.5,3.4,i(0,0,0)),ye(T,"普拍枋","beam",8081974,0,q-.1,0,.46,.2,3.6,i(0,_*.5,0));let E=P=>_*(P+1);for(let P of W.P){let v=P.kind==="dou"?x.dou:P.ang?x.ang:x.brk,A=i(P.ang?.35:0,E(P.t)+(P.kind==="dou"?_*.45:0),0);ye(T,P.name,P.ang?"ang":"brk",v,P.x,q+P.y,P.z,P.sx,P.sy,P.sz,A,P.pitch||0,P.kind).userData.q=P}for(let P=2;P<=4;P++)ye(T,"柱头方","beam",x.beam,0,q+.36+.44*(P-1)+.13,0,.17,.26,3.6,i(0,E(P)+_*.2,0)).userData.q={t:P};ye(T,"橑檐方","beam",x.beam,4*L,q+W.h+.15,0,.3,.3,3.6,i(0,E(6),0));for(let P=-3;P<=3;P++){let v=P*.5,A=i(-.6,q+W.h+.72,v),O=i(4*L+1.8,q+W.h+.05,v),$=A.distanceTo(O),Z=i().addVectors(A,O).multiplyScalar(.5),tt=new t.Quaternion().setFromUnitVectors(rt,i().subVectors(O,A).normalize());Un(T,"椽子",I.cyl,new t.Matrix4().compose(Z,tt,i(.2,$,.2)),nt("beam",8016436),i(0,E(7),0)).userData.q={i:P}}Ce(T,[["栌斗",null,[0,.5,.5]],["华拱",P=>P.t===2,[.5,.5,0]],["泥道拱",P=>P.t===1,[0,.5,.5]],["慢拱",P=>P.t===2,[0,.5,-.5]],["瓜子拱",P=>P.t===3,[0,.5,.5]],["散斗",P=>P.t===1&&P.z<0,[0,.5,0]],["交互斗",P=>P.t===1,[.5,.5,0]],["下昂",null,[.5,0,0]],["令拱",null,[0,.5,.5]],["耍头",null,[.5,.5,0]],["橑檐方",null,[0,.5,.5]],["柱头方",P=>P.t===3,[0,.5,-.5]],["普拍枋",null,[0,.5,-.5]],["阑额",null,[0,0,.5]],["柱",null,[0,.28,.5]],["椽子",P=>P.i===3,[0,.5,0]]]),T.userData.anchor={栌斗:1,华拱:1,泥道拱:1,瓜子拱:1,慢拱:1,散斗:1,交互斗:1,下昂:1,令拱:1,耍头:1,橑檐方:1,柱头方:1,普拍枋:1,阑额:1,柱:1,椽子:1},Qe.bracket=T}{let T=new t.Group;T.userData.id="fork",Ee.add(T);let W=2.4;ye(T,"下层柱","col",x.col,0,W/2,0,.62,W,.62,i(),0,"cyl"),ye(T,"普拍枋","beam",8081974,0,W+.1,0,.9,.2,2.4,i(0,.25,0)),ye(T,"栌斗","brk",x.dou,0,W+.2+.18,0,.62,.36,.62,i(0,.5,0),0,"dou"),ye(T,"十字相交的拱","brk",x.brk,0,W+.56+.13,0,2.2,.26,.17,i(0,.8,0)),ye(T,"十字相交的拱","brk",x.brk,0,W+.56+.13,0,.17,.26,1.6,i(0,.8,0));let q=W+.56,L=.26,_=i(0,2.2,0);for(let[E,P]of[[1,1],[1,-1],[-1,1],[-1,-1]])ye(T,"柱脚开叉","col",10119748,E*.2,q+L/2,P*.2,.23,L,.23,_);ye(T,"上层柱","col",x.col,0,q+L+1.6,0,.56,3.2,.56,_,0,"cyl"),Ce(T,[["上层柱",null,[0,.3,.5]],["下层柱",null,[0,-.1,.5]],["柱脚开叉",null,[.5,-.5,.5]],["十字相交的拱",null,[.5,.5,0]],["栌斗",null,[0,.2,.5]],["普拍枋",null,[0,.5,.5]]]),Qe.fork=T}{let T=new t.Group;T.userData.id="joint",Ee.add(T);let W=E=>{let P=new t.Shape;return E.forEach(([v,A],O)=>O?P.lineTo(v,A):P.moveTo(v,A)),P},q=E=>{let P=new t.ExtrudeGeometry(E,{depth:.5,bevelEnabled:!1});return P.rotateX(r/2),P.translate(0,.5,0),P},L=q(W([[-2.2,-.28],[0,-.28],[0,-.12],[.42,-.22],[.42,.22],[0,.12],[0,.28],[-2.2,.28]])),_=q(W([[0,.28],[0,.12],[.42,.22],[.42,-.22],[0,-.12],[0,-.28],[2.2,-.28],[2.2,.28]]));Un(T,"卯（凹口）",_,new t.Matrix4().makeTranslation(0,1.4,0),nt("beam",9068608),i()),Un(T,"榫（燕尾凸头）",L,new t.Matrix4().makeTranslation(0,1.4,0),nt("brk",10450514),i(-.7,1.1,0)),ye(T,"支架","stone",9077362,-1.2,.7,0,.4,1.4,.8,i()),ye(T,"支架","stone",9077362,1.4,.7,0,.4,1.4,.8,i()),Ce(T,[["榫（燕尾凸头）",null,[-1.2,.5,0]],["卯（凹口）",null,[1.3,.5,0]]]),Qe.joint=T}{let T=new t.Group;T.userData.id="compare",Ee.add(T);let W=ft(4,2,.5,{heads:et}),q=ft(3,0,.5),L=W.h*2,_={},E=(P,v,A,O,$,Z)=>{ye(T,"柱","col",x.col,P,L/2,0,O,L,O,i(),0,"cyl");let tt=null;for(let ot of v.P){let lt=ot.kind==="dou"?x.dou:ot.ang?x.ang:x.brk,Ft=ye(T,ot.name,ot.ang?"ang":"brk",lt,P+ot.x*A,L+ot.y*A,ot.z*A,ot.sx*A,ot.sy*A,ot.sz*A,i(),ot.pitch||0,ot.kind);ot.name==="令拱"&&(!tt||Ft.position.y>tt.position.y)&&(tt=Ft)}let z=v.h*A,B=P-2.2;ye(T,"柱高","dim",12036749,B,L/2,0,.07,L,.07,i()),ye(T,"斗栱高","dim",11615528,B,L+z/2,0,.12,z,.12,i());for(let ot of[0,L,L+z])ye(T,ot===L?"柱高":"斗栱高","dim",9075296,B,ot,0,.5,.05,.05,i());_[$]={m:tt,loc:i(0,.5,0)},_[Z]={m:T.children[T.children.length-4],loc:i(0,0,0)}};E(-3.4,W,1,.64,"辽：斗栱约为柱高之半","1 / 2"),E(3.6,q,L/6/q.h,L/10,"明、清：仅为柱高五分或六分之一","1 / 6"),T.userData.anch=_,Qe.compare=T}Object.values(Qe).forEach(T=>T.visible=!1)}function Ce(T,W){T.userData.anch={};for(let[q,L,_]of W){let E=T.children.find(P=>P.userData.name===q&&(!L||L(P.userData.q||{})));E&&(T.userData.anch[q]={m:E,loc:i(..._)})}}function En(T,W){let q=T.userData.anch&&T.userData.anch[W];if(q)return q.m.updateMatrixWorld(),q.m.localToWorld(q.loc.clone());for(let L of T.children)if(L.userData.name===W){let _=new t.Box3().setFromObject(L),E=_.getCenter(i());return E.y=_.max.y+.05,E}return null}Qt(),ua(),De();let bn=new t.Group;bn.visible=!1,e.add(bn);{let T=nt("dim",14924642),W=-27,q=6,L=(_,E)=>{let P=new t.Mesh(_,T);P.position.copy(E),bn.add(P)};L(new t.BoxGeometry(.18,mt,.18),i(W,mt/2,q)),L(new t.BoxGeometry(3,.18,.18),i(W,.1,q)),L(new t.BoxGeometry(3,.18,.18),i(W,mt,q));for(let _=10;_<mt;_+=10)L(new t.BoxGeometry(1.2,.12,.12),i(W,_,q))}let Wn={};F.forEach(T=>(Wn[T.level]=Wn[T.level]||[]).push(T.group));let tn={taiji:["台基：下方上八角",K.taiji,0],fujie:["副阶周匝：首层外廊",K.fujie,1],pz2:["平坐与勾栏",K.pz2,2],lattice:["当心间辟门",K.lattice,3],corner:["垂脊与兽头",K.corner,3],bell:["铁马风铃",K.bell,3],dou1:["斗拱",K.dou1,1],spire:["塔刹",K.spire,10],chain:["铁链",K.chain,10],s_lotus:["砖砌仰莲座",K.s_lotus,10],s_gai:["宝盖",K.s_gai,10],s_halo:["圆光",K.s_halo,10],s_bowl:["覆钵",K.s_bowl,10],s_rings:["相轮",K.s_rings,10],s_moon:["仰月",K.s_moon,10],s_pearl:["宝珠",K.s_pearl,10],in8:["内槽 8 柱",p(3,-1,Et[0].Ai,9),1],out24:["外槽 24 柱",p(0,1/3,Et[0].A,9),1],fj24:["副阶 24 柱",p(6,0,G.A,7),1],b1:["释迦牟尼坐像 约11米",K.b1,1],b2:["二层：一佛二菩萨二胁侍",K.b2,3],b3:["三层：四方佛",K.b3,5],b4:["四层：释迦与弟子、菩萨",K.b4,7],b5:["五层：毗卢遮那佛与八大菩萨",K.b5,9],stair:["楼梯",K.stair,1],h67:["67.31 米",i(-27,mt/2,6),-1],lean:["二层柱：倾斜最严重（示意已夸大）",K.lean,3],shoufen:["逐层内收",p(0,0,Et[3].A,Et[3].y+1),7],door1:["首层南门",K.door1,1],bucket:["内筒供佛",i(0,6,0),1],ambul:["外筒走人",p(7,0,(Et[0].A+Et[0].Ai)/2,6),1]};for(let T=1;T<=4;T++)tn["dark"+T]=["暗层"+["一","二","三","四"][T-1]+"：斜撑",K["dark"+T],2*T],tn["brace"+T]=["斜撑",K["brace"+T],2*T];for(let T=0;T<=10;T++)tn["L"+T]=[Nn[T],K["L"+T],T];K.eave.forEach((T,W)=>tn["e"+(W+1)]=["第"+"一二三四五六"[W]+"重檐",T,W?2*W-1:1]),["副阶：双杪偷心","一层：双杪双下昂","二层：双杪双下昂","三层：三杪","四层：双杪","五层：半栱承单杪"].forEach((T,W)=>tn["k"+(W+1)]=[T,K.eave[W],W?2*W-1:1]);let da=i();return{steps:F,FL:Et,LBL:K,oct:p,LT:tn,LSIDE:{"辽：斗栱约为柱高之半":"r","明、清：仅为柱高五分或六分之一":"r","1 / 2":"l","1 / 6":"l",泥道拱:"l",散斗:"l",华拱:"r",交互斗:"r",瓜子拱:"r",令拱:"l",耍头:"r",橑檐方:"l",椽子:"r",下昂:"r",柱头方:"l",阑额:"l",普拍枋:"r",栌斗:"l",柱:"r"},labAnchor:En,byLevel:Wn,MATS:R,CUT:C,CUTY:b,LABS:Qe,labRoot:Ee,root:is,dimG:bn,ground:Ye,INFO:{col:["柱","内圈8根、外圈24根，逐层叠立；首层外还有副阶一圈。平坐柱的落点有两说：下端叉于下层斗拱，或立在下一层草栿上。"],brk:["斗拱","柱头与屋檐之间层层出挑的木构件，由斗、拱、昂组成。梁思成统计各层内外共有三十余种。"],ang:["下昂","斜置的长杆，像杠杆一样挑起屋檐。"],beam:["梁枋","阑额、普拍枋、柱头方、橑檐方等横向构件，把柱子箍成整体。"],brace:["暗层斜撑","藏在暗层墙里的斜向木撑，与柱梁组成三角形，是木塔的“腰箍”。"],wall:["墙体","首层内外两圈柱都包在下厚上薄的土墼墙里；上四层外圈是木条编道抹灰墙；暗层的墙把斜撑包在里面。"],lattice:["门","上四层外圈四个正面的当心间辟门。"],roof:["屋面","灰瓦屋面，檐口凹曲，屋角起翘。"],soffit:["椽子","屋檐下密排的椽子，搭在橑檐方上向外挑出。"],fascia:["连檐","椽头外侧的通长木条，收住檐口。"],ridge:["垂脊与脊饰","沿八条角线伸下的屋脊，脊端有兽头。"],deck:["楼板与平坐","每层楼板向外挑出成平坐，可以绕塔一周。"],rail:["勾栏与叉子","平坐外缘是斗子蜀柱勾栏；上四层内槽柱间不砌墙，只立叉子。"],stair:["楼梯","藏在内外两圈柱子之间，盘旋而上。"],stone:["台基与佛坛","石砌台基下方上八角；上层中央是佛坛。"],iron:["塔刹","砖砌仰莲两层为座，上为铁仰莲，承覆钵、相轮、宝盖、圆光，顶上是仰月、宝珠。"],chain:["铁链","八条铁链把塔刹拉结在八条屋脊上。"],buddha:["塑像（造型为示意）","各层供奉佛像，一层释迦坐像约11米。"],plaque:["牌匾","木塔上挂有历代牌匾五十多块。"],bell:["铁马风铃","挂在屋角，风吹作响。"],layout:["放线","施工前在台面上放出柱网。"],dim:["高度","塔高67.31米。"]},CAT2PAGE:{brk:"bracket",ang:"bracket",beam:"bracket",brace:"dark",col:"tube",buddha:"statues",stair:"stair",iron:"spire",chain:"spire",roof:"eaves",soffit:"eaves",fascia:"eaves",ridge:"eaves",bell:"eaves",rail:"pingzuo",deck:"pingzuo",lattice:"pingzuo",stone:"base",wall:"fujie",plaque:"history"},LABTIP:{栌斗:"斗拱最底下的大斗，坐在普拍枋上。",华拱:"沿出挑方向伸出的拱，每挑出一层叫一跳。",泥道拱:"柱中线上的横拱。",慢拱:"比泥道拱更长的横拱。",瓜子拱:"每一跳外端的横拱。",散斗:"垫在拱两端的小斗。",交互斗:"华拱或昂外端上的小斗。",齐心斗:"拱正中的小斗。",下昂:"斜置的长杆，像杠杆一样挑起屋檐。",令拱:"最外一跳的横拱，托住橑檐方。",耍头:"最上层伸出的构件端头。",橑檐方:"托住椽子的通长方木。",柱头方:"柱中线上层层叠放的横方。",普拍枋:"压在柱头上的平板枋。",阑额:"柱与柱之间的横梁。",柱:"承托斗拱的柱子。",椽子:"搭在橑檐方上的圆木，承托屋面。",下层柱:"下面一层的柱子。",十字相交的拱:"下层斗拱在栌斗上十字相交。",柱脚开叉:"上层柱底开出十字口。",上层柱:"骑在下层斗拱上的柱子。",柱高:"两边的柱子一样高。",斗栱高:"红色一段是斗拱的高度。","榫（燕尾凸头）":"头大颈小，越拉越紧。","卯（凹口）":"与榫对应的凹槽。",支架:"展示用支架。"}}}var vg={wall:.06,lattice:.06,roof:.07,soffit:.05,fascia:.08,ridge:.1,deck:.14,rail:.2,plaque:.1,bell:.15,stair:.35,stone:.5,buddha:.35,iron:.6,chain:.6},fM={brace:14174762,chain:14721088,stair:14721088,col:14721088,brk:14721088,ang:14721088,buddha:14721088},Vs=(s,t,e)=>s+(t-s)*e,bg=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function Mg(s){let{reduced:t,fast:e}=s,n=yg(s),{steps:i,FL:r,LBL:a,oct:o,LT:l,LSIDE:c,labAnchor:h,byLevel:d,MATS:u,CUT:f,CUTY:p,LABS:y,labRoot:g,root:m,dimG:S,ground:C,INFO:b,CAT2PAGE:R,LABTIP:w}=n,D=Object.keys(u),x={cut:0,cutY:0,xray:0,explode:0,labEx:0,sway:0,lean:0,iso:0},I=Object.assign({},x),F=9,V=[],H=null,j=!1,X=0,J=null,at="",rt=0,xt=null,it=0,pt={},dt={};D.forEach(Q=>{pt[Q]=1,dt[Q]=0});function Yt(Q){I.cut=Q.cut?1:0,Q.cutY!=null?(F=Q.cutY,I.cutY=1):I.cutY=0,I.xray=Q.xray?1:0,I.explode=Q.explode?1:0,I.sway=Q.sway?1:0,I.lean=Q.lean||0,V=Q.focus||[],I.iso=Q.iso?1:0,I.labEx=Q.labEx||0,Q.lab!==H&&(H=Q.lab||null,x.labEx=0,Object.entries(y).forEach(([_t,Mt])=>{Mt.visible=_t===H}),g.visible=!!H,m.visible=!H),j=!!Q.dim,X=t?0:Q.spin||0,xt=null}function Wt(Q){let _t=Q.buildT!==null&&Q.buildT<i.length;i.forEach((Mt,gt)=>{Mt.group.visible=gt<Q.shown,Mt.group.children.forEach(At=>{At.userData.cat==="layout"&&(At.visible=_t)})})}function fe(Q){let _t=Q/1e3,Mt=t?3:7.5,gt=-x.lean*.085,At=r[1].y,Bt=Math.sin(gt),k=Math.cos(gt);i.forEach(re=>{let Et=re.group,N=re.level,M=0,G=N*4.6*x.explode,et=0;if(N>=3&&(et+=gt,M+=At*Bt,G+=At*(1-k)),x.sway>.001){let Ct=Math.pow(N/10,1.4);M+=x.sway*(.28*Math.sin(Mt*_t)+1.1*Ct*Math.sin(Mt*_t-.7)),et+=-x.sway*.012*Ct*Math.cos(Mt*_t-.7)}let ct=re.dropK===void 0?1:re.dropK;G+=(1-(1-Math.pow(1-ct,3)))*9,Et.position.set(M,G,0),Et.rotation.z=et}),C.position.x=x.sway*.28*Math.sin(Mt*_t)}function St(Q){let _t=!1,Mt=e?1:1-Math.exp(-Q*5);for(let gt of D){let At=1;vg[gt]!==void 0&&(At=Vs(1,vg[gt],x.xray)),V.length&&!V.includes(gt)&&(At=Math.min(At,Vs(1,.1,x.iso))),(gt==="dim"||gt==="layout")&&(At=1);let Bt=V.includes(gt)||gt===J?1:0,k=pt[gt],re=dt[gt];pt[gt]=Math.abs(At-k)<.004?At:Vs(k,At,Mt),dt[gt]=Math.abs(Bt-re)<.004?Bt:Vs(re,Bt,Mt),(pt[gt]!==k||dt[gt]!==re)&&(_t=!0);for(let Et of u[gt]){let N=pt[gt],M=N<.995;Et.transparent!==M&&(Et.transparent=M,Et.needsUpdate=!0),Et.opacity=N,Et.depthWrite=N>.55,gt!=="dim"&&gt!=="layout"&&(Et.emissive.set(fM[gt]||14721088),Et.emissiveIntensity=dt[gt]*(.35+.15*Math.sin(performance.now()/300)))}}return _t||V.length>0||!!J}function se(Q){let _t=!1,Mt=e?1:1-Math.exp(-Q*(t?20:2.6));for(let gt in x){let At=x[gt],Bt=I[gt];Math.abs(At-Bt)<.002?x[gt]=Bt:(x[gt]=Vs(At,Bt,gt==="labEx"&&!e?1-Math.exp(-Q*2):Mt),_t=!0)}if(f.constant=x.cut<.002?1e4:Vs(48,0,bg(x.cut)),p.constant=x.cutY<.002?1e4:Vs(90,F,bg(x.cutY)),H)for(let gt of y[H].children)gt.position.copy(gt.userData.base).addScaledVector(gt.userData.ex,x.labEx);return S.visible=j&&!H,_t||x.sway>0}function st(){m.updateMatrixWorld(!0),H&&g.updateMatrixWorld(!0)}function ft(Q){let _t,Mt;if(l[Q]){_t=l[Q][0];let gt=l[Q][2];Mt=l[Q][1].clone(),gt>=0&&d[gt]&&(d[gt][0].updateMatrixWorld(),Mt.applyMatrix4(d[gt][0].matrixWorld))}else H&&(_t=Q,Mt=h(y[H],Q));return Mt?{point:Mt,text:_t,flip:c[Q]}:null}function It(Q){return xt||Q}function Lt(){if(H)return y[H].children;let Q=[];return m.children.forEach(_t=>{_t.visible&&_t.children.forEach(Mt=>{Mt.visible&&Q.push(Mt)})}),Q}function Dt(Q){if(f.distanceToPoint(Q.point)<0||p.distanceToPoint(Q.point)<0)return!1;let _t=Q.object.userData.cat;return!_t||pt[_t]>.3}function ne(){V=[],J=null,at="",xt=null,clearTimeout(it)}function pe(Q,_t,Mt){let gt=Q.object;if(H){let re=gt.userData.name;re&&(xt=[re],Mt.caption(re,w[re]||""),Mt.kick());return}let At=gt.userData.cat,Bt=R[At];if(Bt&&Bt!==_t.id){Mt.go(Bt);return}let k=b[At]||[At,""];V=[At],Mt.caption(`${k[0]}（${Nn[gt.userData.level]}）`,k[1]),clearTimeout(it),it=setTimeout(()=>Mt.apply(!1),2600),Mt.kick()}function nt(Q,_t){if(!Q){let k=J!==null;return J=null,at="",{text:"",dirty:k}}let Mt=performance.now();if(Mt-rt<60)return{text:at,dirty:!1};rt=Mt;let gt=null,At="";if(H)At=Q.object.userData.name||"";else{gt=Q.object.userData.cat;let k=R[gt];At=(b[gt]||[gt])[0]+(k&&k!==_t.id?`　点击进入「${Xl[k].t}」›`:"")}let Bt=gt!==J;return J=gt,at=At,{text:At,dirty:Bt}}function bt(Q){if(Q===C)return!0;let _t=Q.userData.cat||Q.material?.userData?.cat;return!!(_t&&pt[_t]<.5)}function vt(Q){if(Q<=0)return"build0";if(Q>=i.length)return"wide";let _t=i[Q-1];if(_t.tag==="layout")return"layout";if(_t.tag==="spire")return"top";if(_t.tag==="statue")return{t:[0,r[(_t.level-1)/2].y+(_t.level===1?5:2.6),0],w:_t.level===1?30:22,h:_t.level===1?16:10,th:0,ph:1.5};let Mt=0;for(let gt=0;gt<Q;gt++)Mt=Math.max(Mt,i[gt].top);return{t:[0,Math.max(5,Mt*.52),0],w:46,h:Math.max(22,Mt+8),th:.35+Q*.04,ph:Mt<20?1.22:1.38}}return{steps:i,S:x,TG:I,get spin(){return X},cams:{dou1Cam:{t:o(7,1/3,r[0].A+1.2,r[0].yb+1.2),w:12,h:8,th:.55,ph:1.62},cornerCam:{t:a.corner.clone(),w:9,h:7,th:.95,ph:1.42}},inkPlanes:[f,p],apply:Yt,scalars:se,mats:St,place:fe,syncBuild:Wt,prepareLabels:st,labelPoint:ft,filterLabels:It,pickables:Lt,acceptHit:Dt,onPick:pe,onHover:nt,onNavigate:ne,inkHide:bt,buildCam:vt}}var xf,pM={exposure:1.15,pixelRatio:s=>s?2:1.75,awaitFonts:!1,camera:{fov:34,near:.3,far:1500},createStage(s){return xf=Mg(s),xf},cams:_g,pages:Xl,view0:{t:[0,33,0],r:140,th:.55,ph:1.45},intro(s,t){s.r=t(40,70)*1.8,s.th=1.4},camDur:2.2,buildCamDur:1.8,gesture:{ph:[.05,1.66],r:[3,420],y:[0,80],pan:.5*.0025,wheel:.0012},ink:{color:[.15,.12,.09],depth:[.015,.045],eps:0,normal:[.22,.5],fall:[1.3,1e3,320,.35],alpha:.8,pxScale:s=>Math.max(1,s*.75)},captionMs:5e3,richFacts:!0,tools:[{id:"cut",label:"剖开"},{id:"xray",label:"透视"},{id:"explode",label:"分层",cam:"explode"},{id:"sway",label:"地震"}],spinOn:.08,explodeCam:"explode",spinDelay:3500,build:{lead:"像辽代工匠一样，从一块空地开始，按工序把木塔重新盖一遍。每一步都可以停下来，拖动着看。",emptyPs:"从一块空地开始",state(s,t){let e=s>=t.length,n=s?t[s-1]:null;return{build:s,cut:!e&&n&&n.tag==="statue"?1:0,spin:e?.06:0,labels:[]}},cam(s){return xf.buildCam(s)},card(s,t){let e=t.length,n=s?t[s-1]:null;return s>=e?`<small>第 ${e} / ${e} 步 · 落成</small><h3>一座木构的佛国</h3><p>从夯土筑台到塑像挂匾，一共 ${e} 道工序。现在可以拖动它，从任何角度看。</p>`:n?`<small>第 ${s} / ${e} 步 · ${Nn[n.level]}</small><h3>${n.name}</h3><p>${_f(n)}</p>`:`<small>第 0 / ${e} 步</small><h3>一块空地</h3><p>点“开始建造”，看它一步步立起来。</p>`},playDelay:s=>s?300:1200,tickDelay:(s,t)=>s>=t.length?300:t[s-1].tag==="up"?1400:2e3,hold:150,gap:s=>s.tag==="up"?300:650,skip:s=>s,appearMs:850,snapOnExit:!1,scroll:!0},tour:{say:s=>s.length*200+1e3,intro:s=>s?300:1500,afterSay:400,actPause:1e3,retake:!0,buildIntro:"最后，我们像辽代工匠一样，从一块空地开始，把木塔重新盖一遍。",buildEnd:"一座木构的佛国就此落成。导览到这里结束，你可以拖动它转着看，也可以自己点着往下钻。",stepLine:s=>`${s.name}。${_f(s)}`,poll:120,afterStep:300},tourRoute:xg};gg(pM).catch(s=>{console.error(s);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="三维场景初始化失败："+(s&&s.message?s.message:s)),document.getElementById("loading")?.classList.add("gone")});
