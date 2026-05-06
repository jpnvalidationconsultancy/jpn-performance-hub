const DEFAULT_SETTINGS={weight:100,bodyFat:20,proteinGkg:2.1,runLimit:30,hydrationTarget:3000};

const DEFAULT_WEEK=[
{day:"Monday",type:"Hard / red-aware",training:"TrainerRoad bike or recovery depending on fatigue",weights:"No weights. Optional 15–20 min light upper only if fresh.",load:"hard"},
{day:"Tuesday",type:"Recovery",training:"Easy bike / recovery",weights:"No weights",load:"recovery"},
{day:"Wednesday",type:"Moderate",training:"Run max 30 min + swim",weights:"Upper body strength 40–45 min",load:"moderate"},
{day:"Thursday",type:"Endurance",training:"Zone 2 bike",weights:"No weights",load:"moderate"},
{day:"Friday",type:"Moderate",training:"Run max 30 min + swim",weights:"No weights",load:"moderate"},
{day:"Saturday",type:"Easy + strength",training:"Easy bike",weights:"Controlled lower body + ankle rehab",load:"moderate"},
{day:"Sunday",type:"Endurance",training:"Run max 30 min then bike/swim replacement if needed",weights:"No weights",load:"hard"}
];

const FOOD_DB={
"avocado (100g)":{cal:160,p:2,c:9,f:15,unit:"100g"},
"avocado (1 whole 150g)":{cal:240,p:3,c:12,f:22,unit:"1 whole (150g)"},
"broccoli (100g)":{cal:34,p:3,c:7,f:0.4,unit:"100g"},
"broccoli (1 floret 30g)":{cal:10,p:0.8,c:2,f:0.1,unit:"1 floret (30g)"},
"chicken breast (cooked)":{cal:165,p:31,c:0,f:3.6,unit:"100g"},
"roast chicken":{cal:239,p:27,c:0,f:14,unit:"100g"},
"roast pork":{cal:242,p:27,c:0,f:14,unit:"100g"},
"roast beef":{cal:217,p:26,c:0,f:12,unit:"100g"},
"beef steak (grilled)":{cal:271,p:26,c:0,f:19,unit:"100g"},
"roast lamb":{cal:294,p:25,c:0,f:21,unit:"100g"},
"lamb steak (grilled)":{cal:282,p:25,c:0,f:20,unit:"100g"},
"salmon":{cal:208,p:20,c:0,f:13,unit:"100g"},
"cod (grilled)":{cal:105,p:23,c:0,f:1,unit:"100g"},
"haddock (grilled)":{cal:110,p:24,c:0,f:1,unit:"100g"},
"prawns (boiled)":{cal:99,p:24,c:0,f:0.3,unit:"100g"},
"tuna (tinned, water) 120g can":{cal:140,p:30,c:0,f:1,unit:"1 can (120g drained)"},
"tuna (tinned, water)":{cal:116,p:26,c:0,f:1,unit:"100g"},
"egg (boiled)":{cal:70,p:6,c:0.5,f:5,unit:"1 large"},
"scrambled egg":{cal:180,p:12,c:2,f:14,unit:"2 eggs (~120g)"},
"bacon (grilled)":{cal:250,p:17,c:1,f:20,unit:"2 rashers (~60g)"},
"sausage (pork)":{cal:180,p:8,c:2,f:16,unit:"1 sausage (~60g)"},
"cheddar cheese (30g)":{cal:120,p:7,c:0.5,f:10,unit:"30g"},
"cheddar cheese":{cal:400,p:25,c:1.3,f:33,unit:"100g"},
"yogurt (low-fat)":{cal:63,p:5,c:7,f:1.5,unit:"100g"},
"banana":{cal:89,p:1.1,c:23,f:0.3,unit:"100g"},
"banana (1 medium 120g)":{cal:105,p:1.3,c:27,f:0.3,unit:"1 medium (120g)"},
"white rice (cooked)":{cal:130,p:2.5,c:28,f:0.3,unit:"100g"},
"white rice (1 cup 180g)":{cal:234,p:4.5,c:50,f:0.4,unit:"1 cup (180g)"},
"tilda basmati rice":{cal:360,p:7,c:78,f:1,unit:"1 pack (250g)"},
"bread (white)":{cal:100,p:3,c:20,f:1,unit:"1 slice (40g)"},
"bread (wholemeal)":{cal:90,p:4,c:18,f:1,unit:"1 slice (40g)"},
"warburtons white bread":{cal:96,p:3,c:18,f:1,unit:"1 slice"},
"wrap":{cal:180,p:5,c:30,f:4,unit:"1 wrap (60g)"},
"sweet potato":{cal:86,p:1.6,c:20,f:0.1,unit:"100g"},
"sweet potato (1 medium 150g)":{cal:130,p:2.4,c:30,f:0.2,unit:"1 medium (150g)"},
"roast potatoes":{cal:150,p:2,c:26,f:5,unit:"100g"},
"roast potatoes (200g portion)":{cal:300,p:4,c:52,f:10,unit:"1 portion (200g)"},
"olive oil (1 tbsp)":{cal:120,p:0,c:0,f:14,unit:"1 tbsp (15ml)"},
"olive oil (1 tsp)":{cal:40,p:0,c:0,f:4.5,unit:"1 tsp (5ml)"},
"mixed nuts (30g)":{cal:180,p:6,c:6,f:16,unit:"30g"},
"mixed nuts":{cal:600,p:20,c:20,f:50,unit:"100g"},
"pork scratchings (25g pack)":{cal:150,p:10,c:0,f:12,unit:"25g pack"},
"pork scratchings":{cal:600,p:40,c:0,f:48,unit:"100g"},
"myprotein impact whey protein":{cal:120,p:24,c:3,f:1.5,unit:"1 scoop (30g)"},
"semi skimmed milk":{cal:50,p:3.4,c:5,f:1.5,unit:"100ml"},

"pasta (cooked)":{cal:157,p:5.8,c:31,f:0.9,unit:"100g cooked"},
"pasta (dry)":{cal:350,p:12,c:72,f:1.5,unit:"100g dry"},
"bolognese sauce":{cal:120,p:6,c:8,f:6,unit:"100g"},
"spaghetti bolognese meal":{cal:650,p:35,c:75,f:22,unit:"1 bowl (~450g)"},
"katsu chicken curry":{cal:780,p:38,c:95,f:28,unit:"1 serving"},
"chicken katsu":{cal:420,p:30,c:32,f:18,unit:"1 breaded chicken portion"},
"katsu curry sauce":{cal:110,p:2,c:18,f:3,unit:"100g"},
"latte":{cal:150,p:8,c:12,f:7,unit:"1 medium with semi-skimmed milk"},
"flat white":{cal:120,p:7,c:9,f:6,unit:"1 regular with semi-skimmed milk"},
"magnum ice cream":{cal:260,p:3,c:25,f:16,unit:"1 standard bar"},
"brownie":{cal:280,p:4,c:35,f:14,unit:"1 slice (~70g)"},
"ginger cake":{cal:250,p:3,c:42,f:8,unit:"1 slice (~70g)"},
"mars bar":{cal:228,p:2,c:40,f:8,unit:"1 standard bar"},
"kit kat":{cal:104,p:1.5,c:13,f:5,unit:"2 finger bar"},
"aldi spanish grains":{cal:210,p:6,c:34,f:5,unit:"100g cooked pouch"},
"aldi french lentils":{cal:160,p:10,c:22,f:3,unit:"100g cooked pouch"},
"pesto":{cal:420,p:5,c:8,f:41,unit:"100g"},
"pesto (1 tbsp)":{cal:85,p:1,c:2,f:8,unit:"1 tbsp (20g)"},
"parmigiano reggiano":{cal:402,p:32,c:0,f:30,unit:"100g"},
"parmesan (10g)":{cal:40,p:3.2,c:0,f:3,unit:"10g grated"},
"tomatoes":{cal:18,p:0.9,c:3.9,f:0.2,unit:"100g"},
"onions":{cal:40,p:1.1,c:9.3,f:0.1,unit:"100g"},
"garlic":{cal:149,p:6.4,c:33,f:0.5,unit:"100g"},
"garlic clove":{cal:5,p:0.2,c:1,f:0,unit:"1 clove (~3g)"},
"olives":{cal:145,p:1,c:4,f:15,unit:"100g"},
"apple":{cal:52,p:0.3,c:14,f:0.2,unit:"100g"},
"apple (1 medium)":{cal:95,p:0.5,c:25,f:0.3,unit:"1 medium"},
"coke":{cal:140,p:0,c:35,f:0,unit:"330ml can"},
"diet coke":{cal:1,p:0,c:0,f:0,unit:"330ml can"},
"coke zero":{cal:1,p:0,c:0,f:0,unit:"330ml can"},
"vimto":{cal:70,p:0,c:17,f:0,unit:"250ml diluted serving"},
"cruzcampo":{cal:145,p:1,c:11,f:0,unit:"330ml bottle/can"},
"guinness":{cal:210,p:2,c:18,f:0,unit:"1 pint"},
"skyr yoghurt":{cal:65,p:11,c:4,f:0.2,unit:"100g"},
"white chocolate kvarg yoghurt":{cal:160,p:15,c:18,f:3,unit:"1 pot"},
"kefir":{cal:60,p:3.5,c:5,f:2.5,unit:"100ml"},
"impact whey protein":{cal:120,p:24,c:3,f:1.5,unit:"1 scoop (30g)"},
"ginger":{cal:80,p:1.8,c:18,f:0.8,unit:"100g"},
"ginger slice":{cal:2,p:0,c:0.4,f:0,unit:"1 thin slice"},
"oats":{cal:389,p:17,c:66,f:7,unit:"100g"},
"oats (40g)":{cal:156,p:6.8,c:26,f:2.8,unit:"40g"},
"greek yoghurt 0%":{cal:59,p:10,c:3.6,f:0.4,unit:"100g"},
"cottage cheese":{cal:98,p:11,c:3.4,f:4.3,unit:"100g"},
"eggs":{cal:140,p:12,c:1,f:10,unit:"2 large eggs"},
"5% beef mince":{cal:137,p:21,c:0,f:5,unit:"100g"},
"turkey mince":{cal:150,p:22,c:0,f:7,unit:"100g"},
"chicken thighs":{cal:209,p:26,c:0,f:11,unit:"100g cooked"},
"pork shoulder steak":{cal:250,p:25,c:0,f:16,unit:"100g cooked"},
"lentils cooked":{cal:116,p:9,c:20,f:0.4,unit:"100g"},
"rice cakes":{cal:35,p:0.7,c:7.3,f:0.3,unit:"1 cake"},
"popcorn":{cal:120,p:3,c:19,f:4,unit:"30g serving"},
"bagel":{cal:250,p:9,c:50,f:2,unit:"1 plain bagel"},
"sourdough bread":{cal:110,p:4,c:22,f:1,unit:"1 slice"},
"blueberries":{cal:57,p:0.7,c:14,f:0.3,unit:"100g"},
"spinach":{cal:23,p:2.9,c:3.6,f:0.4,unit:"100g"},
"peppers":{cal:31,p:1,c:6,f:0.3,unit:"100g"},
"mushrooms":{cal:22,p:3.1,c:3.3,f:0.3,unit:"100g"},
"salmon fillet":{cal:416,p:40,c:0,f:26,unit:"1 fillet (~200g)"},
"tuna steak":{cal:132,p:28,c:0,f:1.3,unit:"100g"}
};


let chartInstances = {};
const STRAVA_API_BASE=((window.STRAVA_API_BASE_URL||"").trim().replace(/\/$/,""));
function stravaApiUrl(path){return STRAVA_API_BASE?`${STRAVA_API_BASE}${path}`:path}

function getStore(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch(e){return f}}
function setStore(k,v){localStorage.setItem(k,JSON.stringify(v))}
function loadCustomFoodDb(){
  const custom=getStore("customFoodDb",{});
  Object.keys(custom).forEach(name=>{
    if(!FOOD_DB[name])FOOD_DB[name]=custom[name];
  });
}
function saveFoodToDatabaseIfNew(entry){
  const name=(entry.name||"").trim().toLowerCase();
  if(!name||name==="food")return;
  if(FOOD_DB[name])return;
  const item={cal:+entry.calories||0,p:+entry.protein||0,c:+entry.carbs||0,f:+entry.fat||0,unit:entry.qty||"manual entry"};
  FOOD_DB[name]=item;
  const custom=getStore("customFoodDb",{});
  custom[name]=item;
  setStore("customFoodDb",custom);
}
function settings(){return getStore("settings",DEFAULT_SETTINGS)}
function sessions(){return getStore("sessions",[])}
function metrics(){return getStore("metrics",[])}
function foods(){return getStore("foods",[])}
function hydrations(){return getStore("hydrations",[])}
function todayIso(){return new Date().toISOString().slice(0,10)}
function todayName(){return new Date().toLocaleDateString("en-GB",{weekday:"long"})}
function dayClass(load){return load==="hard"?"red":load==="recovery"?"yellow":"green"}
function kcalFor(load){if(load==="hard")return 2900;if(load==="recovery")return 2450;return 2700}
function kcalLabel(load){if(load==="hard")return"2,800–2,950 kcal";if(load==="recovery")return"2,350–2,500 kcal";return"2,600–2,750 kcal"}

function initNav(){
  document.querySelectorAll(".nav").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("show"));
    b.classList.add("active");
    document.getElementById(b.dataset.tab).classList.add("show");
    renderAll();
scheduleReminderCheck();
  }))
}

function unfoldIcs(text){return text.replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n[ \t]/g,"")}
function getIcsField(block,field){const lines=block.split("\n");for(const line of lines){if(line.startsWith(field+":")||line.startsWith(field+";")){const idx=line.indexOf(":");if(idx>-1)return line.slice(idx+1).replace(/\\n/g," ").replace(/\\,/g,",").replace(/\\;/g,";").trim()}}return""}
function parseIcs(text){text=unfoldIcs(text);const blocks=text.split("BEGIN:VEVENT").slice(1).map(b=>b.split("END:VEVENT")[0]);return blocks.map(block=>{const summary=getIcsField(block,"SUMMARY")||"Workout";const description=getIcsField(block,"DESCRIPTION");const location=getIcsField(block,"LOCATION");const dtstart=getIcsField(block,"DTSTART");let date="";const match=dtstart.match(/(\d{8})/);if(match){const d=match[1];date=`${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}`}const day=date?new Date(date+"T12:00:00").toLocaleDateString("en-GB",{weekday:"long"}):"";return{summary,date,day,description,location}}).filter(e=>e.summary&&(e.date||e.description||e.location))}

async function loadTrainerRoadJson(){try{const res=await fetch("data/trainerroad-plan.json?ts="+Date.now());if(!res.ok)throw new Error("No JSON feed found");const data=await res.json();const arr=Array.isArray(data)?data:data.sessions||[];setStore("sessions",arr);document.getElementById("jsonStatus").innerHTML=`<p class='score-good'>Loaded ${arr.length} sessions from JSON feed.</p>`;renderAll()}catch(e){document.getElementById("jsonStatus").innerHTML=`<p class='score-bad'>Could not load JSON feed. If testing locally, use manual .ics import first.</p>`}}
function importIcs(){const text=document.getElementById("icsText").value.trim();if(!text){alert("Paste .ics content first.");return}const parsed=parseIcs(text);if(!parsed.length){alert("No sessions found.");return}setStore("sessions",parsed);renderAll();alert(`Imported ${parsed.length} sessions.`)}
function importIcsFile(){const f=document.getElementById("icsFile").files[0];if(!f){alert("Choose a .ics file first.");return}const r=new FileReader();r.onload=()=>{const parsed=parseIcs(String(r.result));if(!parsed.length){alert("No sessions found.");return}setStore("sessions",parsed);renderAll();alert(`Imported ${parsed.length} sessions.`)};r.readAsText(f)}
function clearSessions(){setStore("sessions",[]);renderAll()}

function getReadinessState(score){if(score>=80)return"high";if(score>=60)return"moderate";if(score>=40)return"low";return"recovery"}
function calculateReadiness(entry){if(!entry)return 0;const sleepScore=entry.sleep?Math.min(entry.sleep/8,1)*25:0;const hrvScore=entry.hrv?Math.min(entry.hrv/80,1)*25:0;const rhrScore=entry.resting_hr?(1-Math.min(entry.resting_hr/70,1))*25:0;const stressScore=entry.stress?(1-Math.min(entry.stress/100,1))*25:0;return Math.round(sleepScore+hrvScore+rhrScore+stressScore)}
function planForToday(){const base=DEFAULT_WEEK.find(x=>x.day===todayName())||DEFAULT_WEEK[0];const latest=metrics()[0];const readiness=latest?calculateReadiness(latest):0;const state=getReadinessState(readiness);if(state==="recovery")return{...base,type:"Recovery override",training:"Light movement only / mobility",load:"recovery"};if(state==="low"&&base.load==="hard")return{...base,type:"Reduced load",training:"Convert to Zone 2 / technique work",load:"moderate"};if(state==="high"&&base.load!=="hard")return{...base,type:"Upgraded session",training:base.training+" (push intensity)",load:"hard"};return base}
function dailyTarget(){return kcalFor(planForToday().load)}
function latestWeight(){const m=metrics().find(x=>x.weight);return m?m.weight+" kg":settings().weight+" kg"}
function todayFoods(){return foods().filter(f=>f.date===todayIso())}
function todayHydration(){return hydrations().filter(h=>h.date===todayIso())}
function sumFood(date=todayIso()){return foods().filter(f=>f.date===date).reduce((a,f)=>({cal:a.cal+(+f.calories||0),p:a.p+(+f.protein||0),c:a.c+(+f.carbs||0),fat:a.fat+(+f.fat||0)}),{cal:0,p:0,c:0,fat:0})}
function sumHydration(date=todayIso()){return hydrations().filter(h=>h.date===date).reduce((a,h)=>a+(+h.ml||0),0)}
function macroAssessment(){const s=settings(),total=sumFood(),target=dailyTarget(),proteinTarget=Math.round(s.weight*s.proteinGkg),hyd=sumHydration(),hydTarget=s.hydrationTarget;let notes=[];if(total.cal<target-500)notes.push("Calories are very low for an endurance day; performance/recovery may suffer.");else if(total.cal>target+250)notes.push("Calories are above today’s fat-loss target.");else notes.push("Calories are broadly aligned to today’s target.");if(total.p<proteinTarget-25)notes.push("Protein is low; add lean protein to protect muscle.");else notes.push("Protein is on track.");if(hyd<hydTarget*0.7)notes.push("Hydration is behind target.");else notes.push("Hydration is reasonable.");return{total,target,proteinTarget,hyd,hydTarget,notes}}

function calculateTrainingLoad(activities){if(!activities||!activities.length)return[];const daily={};activities.forEach(a=>{const date=a.start_date_local.slice(0,10);let load=0;if(a.weighted_average_watts){load=a.weighted_average_watts*(a.moving_time/3600)}else if(a.average_heartrate){load=a.average_heartrate*(a.moving_time/3600)}else{load=a.moving_time/60}daily[date]=(daily[date]||0)+load});const dates=Object.keys(daily).sort();let ctl=0;let atl=0;return dates.map(date=>{const load=daily[date];ctl=ctl+(load-ctl)*(1/42);atl=atl+(load-atl)*(1/7);return{date,load:Math.round(load),ctl:Math.round(ctl),atl:Math.round(atl),tsb:Math.round(ctl-atl)}})}

async function loadStravaDashboard(){const box=document.getElementById("stravaDashboard");if(!box)return;box.innerHTML="<p>Loading Strava activities...</p>";try{const res=await fetch(stravaApiUrl("/api/strava-activities"));const data=await res.json();if(!res.ok||!data.activities){const msg=data?.status||data?.error||"Could not load Strava activities.";box.innerHTML=`<p>${msg}</p><p><small>Endpoint: <code>${stravaApiUrl("/api/strava-activities")}</code></small></p>${!STRAVA_API_BASE?"<p><small>Tip: GitHub Pages is static. Set <code>window.STRAVA_API_BASE_URL</code> to your backend URL (e.g. Vercel).</small></p>":""}`;return}const latest=data.activities.slice(0,5);box.innerHTML=latest.map(a=>{const km=(a.distance/1000).toFixed(1);const mins=Math.round(a.moving_time/60);const hr=a.average_heartrate?` · Avg HR ${Math.round(a.average_heartrate)}`:"";const watts=a.weighted_average_watts?` · NP ${Math.round(a.weighted_average_watts)}W`:"";return`<div class="session"><strong>${a.name}</strong><span>${a.sport_type} · ${km} km</span><small>${mins} min${hr}${watts}</small></div>`}).join("")}catch(e){box.innerHTML=`<p>Strava connection error: ${e.message}</p><p><small>Endpoint: <code>${stravaApiUrl("/api/strava-activities")}</code></small></p>${!STRAVA_API_BASE?"<p><small>Tip: on GitHub Pages, host the Strava API separately and set <code>window.STRAVA_API_BASE_URL</code>.</small></p>":""}`}}

function renderDashboard(){const plan=planForToday();const todaySessions=sessions().filter(s=>s.date===todayIso()).slice(0,5);const assess=macroAssessment();const latest=metrics()[0];const readiness=latest?calculateReadiness(latest):0;const fuelHint=plan.load==="hard"?"Hard day: prioritize carbs + sodium early and hit hydration before training.":plan.load==="moderate"?"Moderate day: balanced carbs/protein across meals; hydrate steadily.":"Recovery day: keep protein high and don't under-eat.";document.getElementById("summaryCards").innerHTML=`<div class="stat-card"><span>Weight</span><strong>${latestWeight()}</strong><small>current recorded value</small></div><div class="stat-card"><span>Calories Today</span><strong>${Math.round(assess.total.cal)}</strong><small>target ${assess.target}</small></div><div class="stat-card"><span>Hydration</span><strong>${assess.hyd} ml</strong><small>target ${assess.hydTarget} ml</small></div><div class="stat-card"><span>Readiness</span><strong>${readiness}</strong><small>${getReadinessState(readiness)}</small></div>`;document.getElementById("todayPlan").innerHTML=`<div class="plan-card ${dayClass(plan.load)} readiness-${getReadinessState(readiness)}"><h3>${todayName()}: ${plan.type}</h3><p><strong>Training:</strong> ${plan.training}</p><p><strong>Weights:</strong> ${plan.weights}</p><p><strong>Calories:</strong> ${kcalLabel(plan.load)}</p><p><strong>Fuel Guidance:</strong> ${fuelHint}</p>${todaySessions.length?("<h3>TrainerRoad</h3>"+todaySessions.map(s=>`<div class="session"><strong>${s.summary}</strong><span>${s.date||""}</span><small>${s.location||""}</small></div>`).join("")):"<p>No imported TrainerRoad sessions for today.</p>"}<h3>Latest Strava Activities</h3><div id="stravaDashboard"></div></div>`;loadStravaDashboard();renderNutritionScore();renderHydrationStatus();document.getElementById("latestMetrics").innerHTML=metrics().length?metricCard(metrics()[0])+`<p><strong>Readiness decision:</strong> ${getReadinessState(readiness)==="high"?"Green light — full session permitted.":getReadinessState(readiness)==="moderate"?"Proceed as planned, monitor fatigue.":getReadinessState(readiness)==="low"?"Reduce intensity if today is hard.":"Recovery override — light movement only."}</p>`:"<p>No Garmin-style metrics saved yet.</p>"}
function renderNutritionScore(){const a=macroAssessment();const pct=Math.min(140,Math.round((a.total.cal/a.target)*100));document.getElementById("dailyNutritionScore").innerHTML=`<span class="pill">Calories ${Math.round(a.total.cal)} / ${a.target}</span><span class="pill">Protein ${Math.round(a.total.p)} / ${a.proteinTarget} g</span><span class="pill">Carbs ${Math.round(a.total.c)} g</span><span class="pill">Fat ${Math.round(a.total.fat)} g</span><div class="progress"><div class="bar" style="width:${Math.min(100,pct)}%"></div></div>${a.notes.map(n=>`<p>${n}</p>`).join("")}`}
function renderHydrationStatus(){const a=macroAssessment();const pct=Math.min(100,Math.round((a.hyd/a.hydTarget)*100));document.getElementById("hydrationStatus").innerHTML=`<span class="pill">${a.hyd} / ${a.hydTarget} ml</span><div class="progress"><div class="bar" style="width:${pct}%"></div></div><p>${pct<70?"Behind target — add fluids earlier in the day.":pct<100?"On the way — keep sipping steadily.":"Target met — maintain electrolytes around training."}</p>`}
function metricCard(m){return`<div class="metric-card"><h4>${m.date}</h4><span class="pill">Weight: ${m.weight||"-"} kg</span><span class="pill">Sleep: ${m.sleep||"-"} h</span><span class="pill">Steps: ${m.steps||"-"}</span><span class="pill">RHR: ${m.resting_hr||"-"}</span><span class="pill">Battery: ${m.body_battery||"-"}</span><p>${m.notes||""}</p></div>`}
function renderSessions(){const list=sessions();document.getElementById("sessionsList").innerHTML=list.length?list.map(s=>`<div class="session"><strong>${s.summary}</strong><span>${s.day||""} ${s.date||""}</span><small>${s.location||""}</small></div>`).join(""):"<p>No sessions imported yet.</p>"}
function saveMetric(){const entry={date:metricDate.value||todayIso(),weight:metricWeight.value,sleep:metricSleep.value,steps:metricSteps.value,resting_hr:metricRhr.value,body_battery:metricBattery.value,hrv:metricHRV.value,stress:metricStress.value,calories:metricCalories.value,notes:metricNotes.value};const all=metrics().filter(x=>x.date!==entry.date);all.unshift(entry);setStore("metrics",all.sort((a,b)=>b.date.localeCompare(a.date)));metricWeight.value=metricSleep.value=metricSteps.value=metricRhr.value=metricBattery.value=metricHRV.value=metricStress.value=metricCalories.value=metricNotes.value="";renderAll()}
function parseCsv(text){const lines=text.trim().split(/\r?\n/);if(lines.length<2)return[];const headers=lines[0].split(",").map(h=>h.trim().toLowerCase());return lines.slice(1).map(line=>{const vals=line.split(",");let obj={};headers.forEach((h,i)=>obj[h]=vals[i]?.trim()||"");return obj}).filter(x=>x.date)}
function importCsvFile(){const f=document.getElementById("csvFile").files[0];if(!f){alert("Choose a CSV file first.");return}const r=new FileReader();r.onload=()=>{const parsed=parseCsv(String(r.result));if(!parsed.length){alert("No metric rows found.");return}setStore("metrics",parsed.sort((a,b)=>b.date.localeCompare(a.date)));renderAll();alert(`Imported ${parsed.length} metric rows.`)};r.readAsText(f)}
function renderMetrics(){document.getElementById("metricsList").innerHTML=metrics().length?metrics().slice(0,10).map(metricCard).join(""):"<p>No metric data saved yet.</p>"}
function parseQuantityMultiplier(qty,unit){const q=(qty||"").toLowerCase().trim();if(!q)return 1;const n=(q.match(/\d+(?:\.\d+)?/)||[])[0];const amount=n?parseFloat(n):null;const hasG=q.includes("g");const hasMl=q.includes("ml");if((unit.includes("100g")&&hasG&&amount)||(unit.includes("100ml")&&hasMl&&amount))return amount/100;if(unit.includes("1 whole")&&amount)return amount/150;if(unit.includes("1 cup")&&amount&&hasG)return amount/180;if(unit.includes("1 medium")&&amount&&hasG)return amount/150;if(unit.includes("1 slice")&&amount&&hasG)return amount/40;return 1}
function autoEstimateFood(){const name=foodName.value.toLowerCase().trim();const keys=Object.keys(FOOD_DB).sort((a,b)=>b.length-a.length);const match=FOOD_DB[name]?name:keys.find(k=>name.includes(k)||k.includes(name));if(!match){alert("No food match found. Enter macros manually or try a simpler food name.");return}const item=FOOD_DB[match];const mult=parseQuantityMultiplier(foodQty.value,item.unit);foodCalories.value=Math.round(item.cal*mult);foodProtein.value=Math.round((item.p*mult)*10)/10;foodCarbs.value=Math.round((item.c*mult)*10)/10;foodFat.value=Math.round((item.f*mult)*10)/10;foodQty.value=foodQty.value||item.unit;document.getElementById("foodAutoHint")&&(document.getElementById("foodAutoHint").innerHTML=`<small>Auto-filled from <strong>${match}</strong> using quantity multiplier ×${mult.toFixed(2)}.</small>`) }
function saveFood(){const entry={date:foodDate.value||todayIso(),meal:foodMeal.value,name:foodName.value||"Food",qty:foodQty.value,calories:+foodCalories.value||0,protein:+foodProtein.value||0,carbs:+foodCarbs.value||0,fat:+foodFat.value||0};saveFoodToDatabaseIfNew(entry);const all=foods();all.unshift(entry);setStore("foods",all);foodName.value=foodQty.value=foodCalories.value=foodProtein.value=foodCarbs.value=foodFat.value="";renderAll()}
function renderFood(){const list=todayFoods();const dbEntries=Object.entries(FOOD_DB).sort(([a],[b])=>a.localeCompare(b));const suggestionList=document.getElementById("foodSuggestions");if(suggestionList){suggestionList.innerHTML=dbEntries.map(([k])=>`<option value="${k}"></option>`).join("")}document.getElementById("foodDbList").innerHTML=dbEntries.map(([k,v])=>`<div class="session"><strong>${k}</strong><span>${v.unit}</span><small>${v.cal} kcal · P${v.p} C${v.c} F${v.f}</small></div>`).join("");document.getElementById("foodList").innerHTML=list.length?list.map(f=>`<div class="session"><strong>${f.meal}: ${f.name}</strong><span>${f.qty||""}</span><small>${f.calories} kcal · P${f.protein} C${f.carbs} F${f.fat}</small></div>`).join(""):"<p>No food logged today.</p>"}
function renderHydration(){const list=todayHydration();const target=settings().hydrationTarget;const total=sumHydration();document.getElementById("hydrationGuidance").innerHTML=`<span class="pill">${total} / ${target} ml</span><p>On hard bike/swim days, add electrolytes around longer or sweaty sessions. Keep most fluid earlier rather than catching up late at night.</p>`;document.getElementById("hydrationList").innerHTML=list.length?list.map(h=>`<div class="session"><strong>${h.context}</strong><span>${h.ml} ml</span><small>Electrolytes: ${h.electrolytes}</small></div>`).join(""):"<p>No hydration logged today.</p>"}
function renderNutrition(){const s=settings();document.getElementById("proteinTarget").textContent=`${Math.round(s.weight*s.proteinGkg)} g`;document.getElementById("runCap").textContent=`${s.runLimit} min`;document.getElementById("nutritionList").innerHTML=DEFAULT_WEEK.map(d=>`<div class="session"><strong>${d.day}</strong><span>${d.type}</span><small>${kcalLabel(d.load)}</small></div>`).join("")}
function renderSettings(){const s=settings();setWeight.value=s.weight;setBodyFat.value=s.bodyFat;setProtein.value=s.proteinGkg;setRunLimit.value=s.runLimit;setHydration.value=s.hydrationTarget}
function saveSettings(){const cur=settings();const next={weight:parseFloat(setWeight.value)||cur.weight,bodyFat:parseFloat(setBodyFat.value)||cur.bodyFat,proteinGkg:parseFloat(setProtein.value)||cur.proteinGkg,runLimit:parseInt(setRunLimit.value)||cur.runLimit,hydrationTarget:parseInt(setHydration.value)||cur.hydrationTarget};setStore("settings",next);renderAll();alert("Settings saved.")}
function exportData(){const blob=new Blob([JSON.stringify({settings:settings(),sessions:sessions(),metrics:metrics(),foods:foods(),hydrations:hydrations()},null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="jpn-performance-hub-v4-backup.json";a.click()}
function resetData(){if(confirm("Reset all local app data?")){localStorage.clear();renderAll()}}
function loadDemoData(){setStore("metrics",[{date:todayIso(),weight:"100.0",sleep:"7.2",steps:"8420",resting_hr:"54",body_battery:"68",hrv:"45",stress:"25",notes:"Demo readiness entry."}]);setStore("sessions",[{summary:"TrainerRoad Endurance Ride",date:todayIso(),day:todayName(),description:"Demo session",location:"TrainerRoad"}]);setStore("foods",[{date:todayIso(),meal:"Lunch",name:"Chicken breast and rice",qty:"manual",calories:620,protein:55,carbs:70,fat:12}]);setStore("hydrations",[{date:todayIso(),ml:750,electrolytes:"Yes",context:"During workout"}]);renderAll()}

function renderCharts(){const metricData=metrics().slice(0,7).reverse();const labels=metricData.length?metricData.map(m=>m.date.slice(5)):["No data"];const weightData=metricData.length?metricData.map(m=>parseFloat(m.weight)||null):[null];const readinessData=metricData.length?metricData.map(m=>calculateReadiness(m)):[null];const loadData=metricData.length?metricData.map(m=>{const steps=parseFloat(m.steps)||0;const stress=parseFloat(m.stress)||0;const sleep=parseFloat(m.sleep)||0;return Math.round((steps/120)+(stress*1.2)+Math.max(0,(8-sleep)*8))}):[null];const fatigueData=metricData.length?metricData.map((_,i)=>{const slice=loadData.slice(Math.max(0,i-2),i+1).filter(v=>v!=null);if(!slice.length)return null;return Math.round(slice.reduce((a,v)=>a+v,0)/slice.length)}):[null];makeChart("weightChart",labels,weightData,"Body Weight");makeChart("readinessChart",labels,readinessData,"Readiness");makeChart("loadChart",labels,loadData,"Training Load (Estimated)");makeChart("fatigueChart",labels,fatigueData,"Fatigue (3-day avg)")}
function makeChart(canvasId,labels,data,label){const canvas=document.getElementById(canvasId);if(!canvas)return;if(chartInstances[canvasId])chartInstances[canvasId].destroy();chartInstances[canvasId]=new Chart(canvas,{type:"line",data:{labels:labels,datasets:[{label:label,data:data,tension:0.35}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#dce6f2",boxWidth:12}}},scales:{x:{ticks:{color:"#9fb0c3"},grid:{color:"rgba(255,255,255,0.08)"}},y:{ticks:{color:"#9fb0c3"},grid:{color:"rgba(255,255,255,0.08)"}}}}})}

function renderAll(){renderDashboard();renderSessions();renderMetrics();renderFood();renderHydration();renderNutrition();renderSettings();renderCharts()}

if("serviceWorker" in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(reg=>{reg.update();setInterval(()=>reg.update(),60*1000)}).catch(()=>{});let refreshing=false;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(refreshing)return;refreshing=true;window.location.reload()})})}
foodQty&&foodQty.addEventListener("input",()=>{if(foodName.value.trim())autoEstimateFood()});
foodName&&foodName.addEventListener("change",()=>{if(foodName.value.trim())autoEstimateFood()});
loadCustomFoodDb();
initNav();
renderAll();


function hasTodayMetrics(){return metrics().some(m=>m.date===todayIso())}
function enableReminder(){if(!("Notification" in window)){alert("Notifications are not supported on this device/browser.");return}Notification.requestPermission().then(p=>{const box=document.getElementById("reminderStatus");if(p!=="granted"){if(box)box.innerHTML="<p class='score-bad'>Notification permission not granted.</p>";return}localStorage.setItem("dailyReminderEnabled","1");if(box)box.innerHTML="<p class='score-good'>8:00 PM reminder enabled.</p>";scheduleReminderCheck()})}
function scheduleReminderCheck(){if(localStorage.getItem("dailyReminderEnabled")!=="1")return;const now=new Date();const target=new Date();target.setHours(20,0,0,0);if(now>target)target.setDate(target.getDate()+1);const delay=target-now;setTimeout(()=>{if(!hasTodayMetrics()&&Notification.permission==="granted"){new Notification("JPN Performance Hub",{body:"Reminder: add Garmin data before day end.",icon:"assets/jpn-logo.svg"})}scheduleReminderCheck()},delay)}
