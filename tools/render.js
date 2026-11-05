// Uso: node tools/render.js <archivo.html> <segundos> <salida.mp4>
// El HTML debe tener <canvas id="c" width="1080" height="1920"> y una función global draw(t) (t en segundos).
const {chromium}=require('playwright');const {execSync}=require('child_process');const fs=require('fs');const path=require('path');
(async()=>{const [html,dur,out]=process.argv.slice(2);const fps=30;const dir=fs.mkdtempSync('/tmp/frames-');
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+path.resolve(html));await p.evaluate(()=>document.fonts&&document.fonts.ready);
for(let i=0;i<Math.round(fps*dur);i++){await p.evaluate(t=>draw(t),i/fps);
 await p.locator('#c').screenshot({path:`${dir}/${String(i).padStart(4,'0')}.png`});}
await b.close();
execSync(`ffmpeg -y -loglevel error -framerate ${fps} -i ${dir}/%04d.png -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -movflags +faststart ${out}`);
fs.rmSync(dir,{recursive:true});console.log('ok',out);})();
