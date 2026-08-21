const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'scene_to_test');
const ids = n => 1000000000 + n;
const spots = [1,2,3,4,5,6], lyres = [7,8,9,10];
const blinders = Array.from({length:20}, (_,i)=>i+11);
const beams = [...Array.from({length:14},(_,i)=>i+31), ...Array.from({length:14},(_,i)=>i+59), ...Array.from({length:14},(_,i)=>i+87), ...Array.from({length:14},(_,i)=>i+115)];
const rvbs = [...Array.from({length:14},(_,i)=>i+45), ...Array.from({length:14},(_,i)=>i+73), ...Array.from({length:14},(_,i)=>i+101), ...Array.from({length:14},(_,i)=>i+129)];
const universe = [...spots, ...lyres, ...blinders, ...beams, ...rvbs];
function kind(n){return spots.includes(n)?'wash':lyres.includes(n)?'lyre':blinders.includes(n)?'blinder':beams.includes(n)?'beam':'rvb'}
function name(n){const k=kind(n); return k==='wash'?String(n):k==='lyre'?`Lyre #${n-6}`:k==='blinder'?`Blinder #${n-10}`:`Hybrid ${k==='beam'?'Beam':'RVB'} #${(k==='beam'?beams:rvbs).indexOf(n)+1}`}
function model(n){const k=kind(n);return k==='wash'?'MyWash':k==='lyre'?'MyLyre':k==='blinder'?'MyBlinder':`Hybrid ${k==='beam'?'Beam':'RVB'}`}
function ch(n,v){const k=kind(n); if(k==='wash') return [['dimmer',v?.[0]??0],['red',v?.[1]??0],['green',v?.[2]??0],['blue',v?.[3]??0]]; if(k==='rvb') return [['red',v?.[0]??0],['green',v?.[1]??0],['blue',v?.[2]??0]]; if(k==='lyre') return [['pan',v?.[0]??127],['tilt',v?.[1]??90]]; return [[k==='beam'?'white':'dimmer',v??0]]}
function all(groups){return [...new Set(groups.flat())]}
function base(n){const k=kind(n); return k==='wash'?[0,0,0,0]:k==='rvb'?[0,0,0]:k==='lyre'?[127,90]:0}
function blend(a,b,t){if(Array.isArray(a)) return a.map((x,i)=>Math.round(x+(b[i]-x)*t)); return Math.round(a+(b-a)*t)}
function dense(steps){const result=[],divisions=6; for(let i=0;i<steps.length-1;i++){const [length,a]=steps[i],b=steps[i+1][1]; for(let j=0;j<divisions;j++){const t=j/divisions,values={}; for(const n of universe) values[n]=blend(a[n]===undefined?base(n):a[n],b[n]===undefined?base(n):b[n],t); result.push([Math.max(1,Math.round(length/divisions)),values])}} result.push(steps[steps.length-1]); return result}
function active(v){if(v===undefined||v===null) return false; return Array.isArray(v)?v.some(x=>x!==0):v!==0}
function make(file, groups, steps, exact=false){const fixtures=universe.filter(n=>steps.some(s=>active(s[1][n]))), fixture=fixtures.map(n=>`    <Fixture id="${ids(n)}" name="${name(n)}" model="${model(n)}" />`).join('\n'); const rendered=exact?steps:dense(steps); const body=rendered.map((s,si)=>`    <Step name="Step ${si+1}" length="${s[0]}">\n${fixtures.map(n=>`      <Fixture id="${ids(n)}">${ch(n,s[1][n]).map((x,i)=>`<Channel index="${i}" name="${x[0]}" value="${x[1]}" />`).join('')}</Fixture>`).join('\n')}\n    </Step>`).join('\n'); const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<Scene>\n  <Fixtures>\n${fixture}\n  </Fixtures>\n  <Steps>\n${body}\n  </Steps>\n</Scene>\n`; require('fs').writeFileSync(path.join(out,file),xml,'utf8')}
const zero=(g,v=0)=>Object.fromEntries(g.map(n=>[n,v]));
const wash=(g,v)=>zero(g,v); const rvb=(g,v)=>zero(g,v); const beam=(g,v)=>zero(g,v); const lyre=(g,v)=>zero(g,v);
make('01_hybrid_centre_exterieur.scex',[rvbs],[[8,rvb(rvbs,[0,0,0])],[8,Object.fromEntries(rvbs.map(n=>[n,rvbs.indexOf(n)%14>=6&&rvbs.indexOf(n)%14<=7?[0,180,255]:[0,0,0]]))],[8,Object.fromEntries(rvbs.map(n=>[n,[0,180,255].map(x=>x)]))],[8,rvb(rvbs,[0,0,0])]]);
const lstep = (pan, tilt) => Object.fromEntries(lyres.map((n,i)=>[n,[i<2?pan:255-pan, tilt + (i%2)*10]]));
make('02_lyres_fan.scex',[lyres],[[20,lstep(35,90)],[20,lstep(90,110)],[20,lstep(165,110)],[20,lstep(220,90)]]);
make('03_avant_chaud_arriere_froid.scex',[spots,rvbs],[[30,{...wash(spots.slice(0,3),[220,255,90,20]),...wash(spots.slice(3),[0,0,0,0]),...rvb(rvbs,[0,80,255])}],[30,{...wash(spots.slice(0,3),[0,0,0,0]),...wash(spots.slice(3),[220,255,90,20]),...rvb(rvbs,[0,0,0])}]]);
make('04_blinder_double_impact.scex',[blinders],[[12,zero(blinders)],[12,Object.fromEntries(blinders.map(n=>[n,n<=20?255:0]))],[12,Object.fromEntries(blinders.map(n=>[n,n<=20?0:255]))],[12,zero(blinders,255)],[12,zero(blinders)]]);
make('05_drop_complet.scex',[spots,lyres,blinders,beams,rvbs],[[20,{}],[8,{...wash(spots,[255,255,255,255]),...lyre(lyres,[127,90]),...zero(blinders,255),...zero(beams,255),...rvb(rvbs,[255,255,255])}],[8,{}]]);
function chase(file,g,vals){make(file,[g],vals.map(v=>[6,Object.fromEntries(g.map((n,i)=>[n,i%vals.length===0?0:v]))]))}
make('06_hybrid_wave_vertical.scex',[rvbs],Array.from({length:4},(_,i)=>[5,Object.fromEntries(rvbs.map(n=>[n,rvbs.indexOf(n)%14===i*4?[0,180,255]:[0,0,0]]))]));
make('07_hybrid_miroir.scex',[rvbs],[[8,Object.fromEntries(rvbs.map(n=>[n,[0,13].includes(rvbs.indexOf(n)%14)?[255,0,40]:[0,0,0]]))],[8,Object.fromEntries(rvbs.map(n=>[n,[5,8].includes(rvbs.indexOf(n)%14)?[255,0,40]:[0,0,0]]))]]);
make('08_hybrid_color_chase_beam.scex',[rvbs,beams],[[6,{...Object.fromEntries(rvbs.map((n,i)=>[n,i%4===0?[255,0,0]:[0,0,0]])),...Object.fromEntries(beams.map((n,i)=>[n,i%4===0?255:0]))}],[6,{...Object.fromEntries(rvbs.map((n,i)=>[n,i%4===1?[0,0,255]:[0,0,0]])),...Object.fromEntries(beams.map((n,i)=>[n,i%4===1?255:0]))}],[6,{...Object.fromEntries(rvbs.map((n,i)=>[n,i%4===2?[0,255,0]:[0,0,0]])),...Object.fromEntries(beams.map((n,i)=>[n,i%4===2?255:0]))}]]);
make('09_hybrid_respiration.scex',[rvbs,beams],[[20,{...rvb(rvbs,[80,0,160]),...zero(beams,40)}],[20,{...rvb(rvbs,[255,0,255]),...zero(beams,180)}],[20,{...rvb(rvbs,[80,0,160]),...zero(beams,40)}]]);
make('10_hybrid_pixel_rain.scex',[rvbs,beams],Array.from({length:4},(_,i)=>[5,{...Object.fromEntries(rvbs.map((n,j)=>[n,j%14===i*4?[0,180,255]:[0,0,0]])),...Object.fromEntries(beams.map((n,j)=>[n,j%14===i*4?255:0]))}]));
make('11_hybrid_groupes_alternes.scex',[rvbs,beams],[[10,{...Object.fromEntries(rvbs.map((n,i)=>[n,Math.floor(i/14)%2?[0,0,0]:[255,0,0]])),...Object.fromEntries(beams.map((n,i)=>[n,Math.floor(i/14)%2?255:0]))}],[10,{...Object.fromEntries(rvbs.map((n,i)=>[n,Math.floor(i/14)%2?[0,0,255]:[0,0,0]])),...Object.fromEntries(beams.map((n,i)=>[n,Math.floor(i/14)%2?0:255]))}]]);
const lyreNames=['lyres_convergence','lyres_balaye_public','lyres_opposition','lyres_figure_huit','lyres_battement','lyres_miroir']; lyreNames.forEach((x,i)=>make(`${i+12}_${x}.scex`,[lyres],[[20,Object.fromEntries(lyres.map((n,j)=>[n,[40+i*25+j*35,90+(j%2)*20]]))],[20,Object.fromEntries(lyres.map((n,j)=>[n,[215-i*25-j*35,110-(j%2)*20]]))]]));
make('18_spots_crossfade_avant_arriere.scex',[spots],[[20,{...wash(spots.slice(0,3),[255,255,255,255]),...wash(spots.slice(3),[0,0,0,0])}],[20,{...wash(spots.slice(0,3),[0,0,0,0]),...wash(spots.slice(3),[255,255,255,255])}]]);
make('19_spots_complementaires.scex',[spots],[[15,{...wash(spots.filter((_,i)=>i%2===0),[255,0,0,255]),...wash(spots.filter((_,i)=>i%2),[0,255,0,255])}],[15,{...wash(spots.filter((_,i)=>i%2===0),[0,0,255,255]),...wash(spots.filter((_,i)=>i%2),[255,255,0,255])}]]);
make('20_spots_degrade_gauche_droite.scex',[spots],[[20,Object.fromEntries(spots.map((n,i)=>[n,[255,220-i*35,40,20]]))],[20,Object.fromEntries(spots.map((n,i)=>[n,[255,40+i*35,40,20]]))]]); make('21_spots_silhouette.scex',[spots],[[30,zero(spots)],[30,{...zero(spots.slice(0,3)),...wash(spots.slice(3),[100,100,100,100])}]]);
make('22_blinder_centre_exterieur.scex',[blinders],[[8,Object.fromEntries(blinders.map(n=>[n,[9,10].includes((n-11)%10)?255:0]))],[8,Object.fromEntries(blinders.map(n=>[n,[0,1,8,9].includes((n-11)%10)?255:0]))],[8,zero(blinders)]]); make('23_blinder_gauche_droite.scex',[blinders],[[10,Object.fromEntries(blinders.map(n=>[n,n<=20?255:0]))],[10,Object.fromEntries(blinders.map(n=>[n,n<=20?0:255]))],[10,zero(blinders)]]); make('24_blinder_montee_halogene.scex',[blinders],[[30,zero(blinders,40)],[30,zero(blinders,120)],[30,zero(blinders,255)],[20,zero(blinders)]]); make('25_blinder_beam.scex',[blinders,beams],[[8,{...zero(blinders,255),...zero(beams)}],[8,{...zero(blinders),...zero(beams,255)}],[8,{...zero(blinders,255),...zero(beams,255)}],[8,{}]]);
make('26_intro.scex',[spots,beams,rvbs],[[30,{}],[30,{...wash(spots,[40,0,0,80]),...zero(beams,20),...rvb(rvbs,[0,0,80])}]]); make('27_buildup.scex',[spots,blinders,beams,rvbs],[[15,{...wash(spots,[80,0,80,160]),...zero(blinders,50),...zero(beams,80),...rvb(rvbs,[80,0,160])}],[10,{...wash(spots,[180,0,180,255]),...zero(blinders,140),...zero(beams,180),...rvb(rvbs,[180,0,255])}],[5,{...wash(spots,[255,255,255,255]),...zero(blinders,255),...zero(beams,255),...rvb(rvbs,[255,255,255])}]]); make('28_break_calme.scex',[spots,beams,rvbs],[[40,{...wash(spots,[30,0,0,70]),...zero(beams,20),...rvb(rvbs,[0,0,40])}],[40,{...wash(spots,[10,0,0,40]),...zero(beams),...rvb(rvbs,[0,0,10])}]]); make('29_finale.scex',[spots,lyres,blinders,beams,rvbs],[[8,{...wash(spots,[255,255,255,255]),...lyre(lyres,[127,90]),...zero(blinders,255),...zero(beams,255),...rvb(rvbs,[255,255,255])}],[8,{}],[8,{...wash(spots,[255,0,0,255]),...lyre(lyres,[80,110]),...zero(blinders,255),...zero(beams,255),...rvb(rvbs,[255,0,0])}],[8,{}]]);

// New paired effects: the same choreography is emitted for RVB and Beam fixtures.
const bars = [0,1,2,3].map(i => (i < 2 ? rvbs : beams).slice(i % 2 * 14, i % 2 * 14 + 14));
const rvbColor = (i, mode) => mode === 0 ? [255,20,0] : mode === 1 ? [0,100,255] : [180,0,255];
function paired(number, namePart, rvbSteps, beamSteps){
  make(`${number}_hybrid_rvb_${namePart}.scex`, [rvbs], rvbSteps);
  make(`${number}_hybrid_beam_${namePart}.scex`, [beams], beamSteps);
}
function sweepValues(group, pos, value, tail){
  const v = {};
  group.forEach((n,i)=>{ const d = Math.abs(i-pos); v[n] = tail ? Math.max(0, value-d*55) : (d===0 ? value : 0); });
  return v;
}
// Explicit bar-aware patterns keep the physical order of every 14-pixel vertical bar.
function verticalSweep(group, color, beamMode=false){
  return Array.from({length:14},(_,pos)=>[5,Object.fromEntries(group.map((n,i)=>[n,beamMode?(i%14===pos?255:0):(i%14===pos?color:[0,0,0])]))]);
}
function mirrorIn(group, color, beamMode=false){
  return Array.from({length:7},(_,pos)=>[7,Object.fromEntries(group.map((n,i)=>[n,beamMode?([pos,13-pos].includes(i%14)?255:0):([pos,13-pos].includes(i%14)?color:[0,0,0])]))]);
}
function barChase(group, color, beamMode=false){
  return Array.from({length:8},(_,step)=>[8,Object.fromEntries(group.map((n,i)=>[n,Math.floor(i/14)%4===step%4?(beamMode?255:color): (beamMode?0:[0,0,0])]))]);
}
function meteor(group, color, beamMode=false){
  return Array.from({length:14},(_,pos)=>[5,Object.fromEntries(group.map((n,i)=>{const d=(i%14)-pos; const level=d===0?255:d===-1?170:d===-2?80:0; return [n,beamMode?level:(level?color:[0,0,0])]}))]);
}
function sparkle(group, color, beamMode=false){
  return Array.from({length:12},(_,step)=>[4,Object.fromEntries(group.map((n,i)=>{const on=((i*7+step*5)%17)<3; return [n,beamMode?(on?255:0):(on?color:[0,0,0])]}))]);
}
paired(30,'balayage_vertical',verticalSweep(rvbs,[0,180,255]),verticalSweep(beams,255,true));
paired(31,'miroir_exterieur_centre',mirrorIn(rvbs,[255,0,80]),mirrorIn(beams,255,true));
paired(32,'chase_barres_alterne',barChase(rvbs,[0,255,80]),barChase(beams,255,true));
paired(33,'meteore_traine',meteor(rvbs,[255,40,0]),meteor(beams,255,true));
paired(34,'scintillement_diamant',sparkle(rvbs,[180,0,255]),sparkle(beams,255,true));

// Deploy variants of the centre/exterieur choreography, using the colour
// families configured in Full - Prod's Hybrid RVB generator projects.
const deployPalettes = {
  'Blanc': [[255,255,255], [255,255,255]],
  'Bleu': [[0,80,255], [0,0,255]],
  'Rouge': [[255,0,0], [180,0,0]],
  'Cyan': [[0,220,255], [0,180,255]],
  'Mauve': [[180,0,255], [255,0,180]],
  'Blue Red': [[0,0,255], [255,0,0]],
  'Cyan Violet': [[0,220,255], [180,0,255]],
  'Rainbow': 'rainbow',
  'Red Violet': [[255,0,0], [180,0,255]],
  'Smooth Pink Turquoise': [[255,0,180], [0,220,180]],
  'Smooth Red Blue': [[255,0,0], [0,80,255]]
};
const rainbow = i => {
  const hue = (i % 14) / 14 * 360;
  const c = 255, x = Math.round(c * (1 - Math.abs((hue / 60) % 2 - 1)));
  if (hue < 60) return [c,x,0];
  if (hue < 120) return [x,c,0];
  if (hue < 180) return [0,c,x];
  if (hue < 240) return [0,x,c];
  if (hue < 300) return [x,0,c];
  return [c,0,x];
};
function deploySteps(palette) {
  if (palette === 'rainbow') {
    const colours = Object.fromEntries(rvbs.map((n, i) => [n, rainbow(i)]));
    const shifted = Object.fromEntries(rvbs.map((n, i) => [n, rainbow(i + 4)]));
    return [
      [8, rvb(rvbs, [0,0,0])],
      [8, Object.fromEntries(rvbs.map((n, i) => [n, i % 14 >= 6 && i % 14 <= 7 ? colours[n] : [0,0,0]]))],
      [8, shifted],
      [8, rvb(rvbs, [0,0,0])]
    ];
  }
  const [first, second] = palette;
  return [
    [8, rvb(rvbs, [0,0,0])],
    [8, Object.fromEntries(rvbs.map((n, i) => [n, i % 14 >= 6 && i % 14 <= 7 ? first : [0,0,0]]))],
    [8, rvb(rvbs, second)],
    [8, rvb(rvbs, [0,0,0])]
  ];
}
Object.entries(deployPalettes).forEach(([colour, palette]) => {
  make(`Hybrid RVB - Deploy ${colour}.scex`, [rvbs], deploySteps(palette));
});

// Hybrid Beam has a single white channel; keep the requested colour label
// in the scene name while applying the same centre/exterieur movement.
function beamDeploySteps() {
  return [
    [8, beam(beams, 0)],
    [8, Object.fromEntries(beams.map((n, i) => [n, i % 14 >= 6 && i % 14 <= 7 ? 255 : 0]))],
    [8, beam(beams, 255)],
    [8, beam(beams, 0)]
  ];
}
['Blanc', 'Bleu', 'Rouge', 'Cyan', 'Mauve'].forEach(colour => {
  make(`Hybrid Beam - Deploy ${colour}.scex`, [beams], beamDeploySteps());
});
make('Hybrid Beam - Deploy.scex', [beams], beamDeploySteps());

// Colour versions of model 30's vertical-down movement, using the
// Full - Prod HybridRVB Size1 / Offset0 naming convention.
const deployRgbColours = {
  'Blanc': [255,255,255],
  'Bleu': [0,0,255],
  'Rouge': [255,0,0],
  'Cyan': [0,255,255],
  'Mauve': [180,0,255]
};
Object.entries(deployRgbColours).forEach(([colour, rgb]) => {
  make(`HybridRVB - Vertical Down ${colour} - Size1 Offset0.scex`, [rvbs], verticalSweep(rvbs, rgb));
});

// Inverse of model 31: expand from the centre pair toward the outside.
function expandFromCentre(group, colour) {
  return Array.from({length:7}, (_, step) => [
    7,
    Object.fromEntries(group.map((n, i) => {
      const position = i % 14;
      const active = [6 - step, 7 + step].includes(position);
      return [n, active ? colour : [0,0,0]];
    }))
  ]);
}
Object.entries(deployRgbColours).forEach(([colour, rgb]) => {
  make(`Hybrid RVB - Expand ${colour}.scex`, [rvbs], expandFromCentre(rvbs, rgb));
});

function beamExpandFromCentre() {
  return Array.from({length:7}, (_, step) => [
    7,
    Object.fromEntries(beams.map((n, i) => {
      const position = i % 14;
      return [n, [6 - step, 7 + step].includes(position) ? 255 : 0];
    }))
  ]);
}
make('Hybrid Beam - Expand.scex', [beams], beamExpandFromCentre());

// Model 32 in ping-pong order across the four 14-pixel bars.
const pingPongBars = [
  [null, 100],
  [0, 10], [1, 10], [2, 10], [3, 10],
  [null, 100],
  [2, 10], [1, 10], [0, 10]
];
function pingPongRvb(colour) {
  return pingPongBars.map(([bar, length]) => [length, Object.fromEntries(
    rvbs.map((n, i) => [n, bar !== null && Math.floor(i / 14) === bar ? colour : [0,0,0]])
  )]);
}
function pingPongBeam() {
  return pingPongBars.map(([bar, length]) => [length, Object.fromEntries(
    beams.map((n, i) => [n, bar !== null && Math.floor(i / 14) === bar ? 255 : 0])
  )]);
}
function mirroredChase(base) {
  const steps = dense(base)
    .filter((_, index) => index % 4 === 0)
    .map(([_, values]) => [10, values]);
  return [[100, {}], ...steps, [100, {}], ...steps.slice().reverse()];
}
function mirroredRvb(colour) {
  return mirroredChase(barChase(rvbs, colour).slice(0, 4));
}
function mirroredBeam() {
  return mirroredChase(barChase(beams, 255, true).slice(0, 4));
}
Object.entries(deployRgbColours).forEach(([colour, rgb]) => {
  make(`Hybrid RVB - Ping Pong ${colour}.scex`, [rvbs], mirroredRvb(rgb), true);
});
make('Hybrid Beam - Ping Pong.scex', [beams], mirroredBeam(), true);

// Deterministic random chase based on model 32: the bar order is shuffled
// while keeping the original timing and one active bar at a time.
const randomBarOrder = [2, 0, 3, 1, 3, 2, 0, 1];
function randomChaseRvb(colour) {
  return randomBarOrder.map(bar => [8, Object.fromEntries(
    rvbs.map((n, i) => [n, Math.floor(i / 14) === bar ? colour : [0,0,0]])
  )]);
}
function randomChaseBeam() {
  return randomBarOrder.map(bar => [8, Object.fromEntries(
    beams.map((n, i) => [n, Math.floor(i / 14) === bar ? 255 : 0])
  )]);
}
Object.entries(deployRgbColours).forEach(([colour, rgb]) => {
  make(`Hybrid RVB - Random Chase ${colour}.scex`, [rvbs], randomChaseRvb(rgb));
});
make('Hybrid Beam - Random Chase.scex', [beams], randomChaseBeam());

const randomVariants = {
  Double: [[2,0], [3,1], [0,3], [1,2], [3,0], [2,1], [0,1], [3,2]],
  Pause: [[2], [0], [], [3], [1], [], [3], [2]],
  Burst: [[2,0], [2,0], [3,1], [3,1], [0,3], [0,3], [1,2], [1,2]]
};
function variantRvb(variant, colour) {
  return randomVariants[variant].map(bars => [8, Object.fromEntries(
    rvbs.map((n, i) => [n, bars.includes(Math.floor(i / 14)) ? colour : [0,0,0]])
  )]);
}
function variantBeam(variant) {
  return randomVariants[variant].map(bars => [8, Object.fromEntries(
    beams.map((n, i) => [n, bars.includes(Math.floor(i / 14)) ? 255 : 0])
  )]);
}
Object.keys(randomVariants).forEach(variant => {
  Object.entries(deployRgbColours).forEach(([colour, rgb]) => {
    make(`Hybrid RVB - Random Chase ${variant} ${colour}.scex`, [rvbs], variantRvb(variant, rgb));
  });
  make(`Hybrid Beam - Random Chase ${variant}.scex`, [beams], variantBeam(variant));
});
