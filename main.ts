import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
function run(p, inp) {
const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),out=new Uint8Array(65536);let sp=0,cp=0,ol=0,ip=0,pc=0,st=0;
  try {
    for (;;) {
if(st===1000000)throw 10;if(pc<0||pc>=p.length)throw 9;const op=p[pc];if(!(op<8||op>15&&op<35&&op!=31||op>47&&op<53||op>63&&op<66||op>79&&op<84))throw 5;const im=op==1?1:op==2?4:op>47&&op<52?2:0;if(pc+im>=p.length)throw 9;st++;const nx=pc+1+im,pp=op<8?[0,0,0,1,1,2,2,3][op]:op<35?op==23||op==27?1:2:op<53?op==49||op==50?1:0:op<66?op-63:op==82?0:1,pu=op<8?[0,1,1,0,2,2,3,3][op]:op<35||op==64||op==82?1:0;if(sp<pp)throw 2;if(sp-pp+pu>256)throw 3;pc=nx;
if(op===0)throw 0;else if(op===1)D[sp++]=(p[nx-1]<<24)>>24;else if(op===2)D[sp++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;else if(op===3)sp--;else if(op===4)D[sp]=D[sp-1],sp++;else if(op===5)[D[sp-1],D[sp-2]]=[D[sp-2],D[sp-1]];else if(op===6)D[sp]=D[sp-2],sp++;else if(op===7)[D[sp-3],D[sp-2],D[sp-1]]=[D[sp-2],D[sp-1],D[sp-3]];else if(op===23)D[sp-1]=-D[sp-1]|0;else if(op===27)D[sp-1]=~D[sp-1];
else if(op>=16&&op<=34){const a=D[sp-2],b=D[sp-1];if(op>=19&&op<=22&&!b)throw 4;D[sp-2]=op==16?(a+b)|0:op==17?(a-b)|0:op==18?Math.imul(a,b):op==19?a==-2147483648&&b==-1?a:Math.trunc(a/b)|0:op==20?b==-1?0:a%b:op==21?Math.floor((a>>>0)/(b>>>0))|0:op==22?(a>>>0)%(b>>>0)|0:op==24?a&b:op==25?a|b:op==26?a^b:op==28?a<<(b&31):op==29?a>>(b&31):op==30?(a>>>(b&31))|0:op==32?a==b?1:0:op==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;sp--;}
else if(op>=48&&op<=50){const r=((p[nx-2]|p[nx-1]<<8)<<16)>>16;if(op==48||(op==49?!D[--sp]:D[--sp]))pc=nx+r;}
else if(op===51){if(cp===64)throw 7;C[cp++]=nx;pc=p[nx-2]|p[nx-1]<<8;}else if(op===52){if(!cp)throw 8;pc=C[--cp];}else if(op===64){const a=D[sp-1];if(a<0||a>255)throw 6;D[sp-1]=M[a];}else if(op===65){const a=D[sp-1];if(a<0||a>255)throw 6;M[a]=D[sp-2];sp-=2;}else if(op===80){const s=String(D[--sp]);if(ol+s.length>65536)throw 11;out.set(Buffer.from(s),ol);ol+=s.length;}else if(op===81){if(ol>=65536)throw 11;out[ol++]=D[--sp]&255;}else if(op===82)D[sp++]=ip<inp.length?inp[ip++]:-1;else if(op===83)throw D[--sp]&255;
    }
  }catch(e){if(typeof e=='number')return[out.slice(0,ol),e];throw e;}
}
for(const id of readdirSync(I)){const[o,e]=run(readFileSync(I+'/'+id+'/program.bin'),readFileSync(I+'/'+id+'/input.bin'));mkdirSync(O+'/'+id,{recursive:true});writeFileSync(O+'/'+id+'/stdout.bin',o);writeFileSync(O+'/'+id+'/exit.txt',e+'\n');}
