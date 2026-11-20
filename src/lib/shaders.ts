// GLSL for the two WebGL canvases: the global CRT overlay and the hero signal shader.
export const VS = 'attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';

// Global overlay: vignette + curvature mask, grain, flicker, and the three section-transition variants (uB.z)
export const FS_CRT = `precision mediump float;
varying vec2 vUv;
uniform vec2 uRes;uniform float uTime,uGrain,uVig,uCurve,uGlow,uFlick,uRoll;uniform vec3 uB;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  vec2 uv=vUv;float sy=1.-uv.y;vec2 c=uv-.5;float r2=dot(c,c);
  vec2 cc=c*(1.+uCurve*r2*1.8);
  vec2 e=abs(c*(1.+uCurve*r2*.12))*2.;
  float inside=smoothstep(1.,.994,e.x)*smoothstep(1.,.994,e.y);
  float vig=smoothstep(1.12,.3,length(cc*vec2(.92,1.06)));
  float a=(1.-mix(1.,vig,uVig))*.6;a=max(a,1.-inside);
  vec3 col=vec3(.88,.19,.11)*(1.-vig)*inside*uGlow*.14;
  float g=h(floor(gl_FragCoord.xy)+fract(uTime*7.)*91.)-.5;
  col+=vec3(max(g,0.))*uGrain;a+=max(-g,0.)*uGrain;
  float rp=fract(uTime*.06)*1.4-.2;col+=vec3(smoothstep(.1,0.,abs(sy-rp))*.03*uRoll);
  a+=uFlick;
  float I=uB.y;
  if(I>.002){
    float d=sy-uB.x;float t=uTime;
    if(uB.z<.5){
      float wy=uB.x+sin(uv.x*9.+t*5.)*.028*I+sin(uv.x*31.-t*9.)*.009*I;
      col+=vec3(.88,.19,.11)*smoothstep(.004,0.,abs(sy-wy))*1.2*I+vec3(.95)*smoothstep(.0025,0.,abs(sy-wy-.014*I))*.45*I;
      float m=smoothstep(.24*I,0.,abs(d));
      float tear=step(.86,h(vec2(floor(sy*90.),floor(t*14.))))*m;
      col+=vec3(.9)*tear*.2*I;a+=tear*.25*I+step(.5,fract(sy*140.+t*3.))*m*.1*I;
    }else if(uB.z<1.5){
      float tp=uB.x+(fract(t*.9)-.5)*.36*I;float dd=abs(sy-tp);
      a+=smoothstep(.05,.0,dd)*.55*I;
      float edge=smoothstep(.007,0.,abs(dd-.05));
      float sn=h(vec2(floor(uv.x*uRes.x/3.),floor(sy*uRes.y/2.))+fract(t*9.));
      col+=vec3(sn)*edge*.55*I+vec3(.88,.19,.11)*edge*.5*I;
      float m=smoothstep(.2*I,0.,abs(d));
      col+=vec3(.88,.19,.11)*step(.9,h(vec2(floor(sy*60.),floor(t*10.))))*m*.35*I;
    }else{
      float m=smoothstep(.15*I,0.,abs(d));
      float sn=h(floor(gl_FragCoord.xy/2.)+fract(t*13.)*57.);
      col+=vec3(sn)*m*.26*I;a+=(1.-sn)*m*.18*I;
      col+=vec3(.88,.19,.11)*smoothstep(.0025,0.,abs(d+sin(t*30.)*.004))*I;
    }
  }
  gl_FragColor=vec4(col,clamp(a,0.,1.));
}`;

// Hero photo: B/W grade, wave displacement, tearing rows, tracking bar, orange chromatic fringe
export const FS_HERO = `precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;uniform vec2 uRes;uniform float uAspI,uTime,uWarp,uAb,uVel;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec2 cover(vec2 uv){float A=uRes.x/uRes.y;vec2 s=A>uAspI?vec2(1.,uAspI/A):vec2(A/uAspI,1.);return uv*s+(1.-s)*vec2(.45,.68);}
float L(vec2 uv){vec3 c=texture2D(uTex,cover(clamp(uv,0.,1.))).rgb;float l=dot(c,vec3(.299,.587,.114));return clamp((l-.5)*1.32+.5-.09,0.,1.);}
void main(){
  vec2 uv=vUv;float y=1.-uv.y;float w=uWarp;float t=uTime;
  float dx=sin(y*14.+t*3.)*.03*w+sin(y*47.-t*7.)*.008*w;
  float row=floor(y*32.);
  dx+=step(.8,h(vec2(row,floor(t*12.))))*(h(vec2(row,7.))-.5)*.14*w;
  float tp=fract(t*.45)*1.4-.2;float track=smoothstep(.07,0.,abs(y-tp))*w;
  dx+=track*.04*sin(y*200.);
  vec2 p=vec2(uv.x+dx,uv.y);
  float off=(.0022+.028*w+uVel*.006)*uAb;
  float l=L(p),lr=L(p+vec2(off,0.)),lw=L(p-vec2(off*.7,0.));
  vec3 col=vec3(l)+vec3(.88,.19,.11)*max(lr-l,0.)*1.5+vec3(.95)*max(lw-l,0.)*.25;
  float sn=h(floor(gl_FragCoord.xy/2.)+fract(t*11.)*37.);
  col=mix(col,vec3(sn),track*.35)*(1.-track*.25);
  gl_FragColor=vec4(col,1.);
}`;
