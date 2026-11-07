// Görsel verileri assets.js dosyasından alınır.
const IMG = window.DIGITAL_ADIM_ASSETS;
const I=(k,w,s)=>`<img src="data:${IMG[k][0]};base64,${IMG[k][1]}" alt="" style="width:${w}px;${s||""}">`;
const V=(p,x)=>`<svg class="i" viewBox="0 0 24 24" ${x||""}>${p}</svg>`;
const ic={home:V('<path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/>','fill="currentColor"'),search:V('<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>','fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"'),list:V('<rect x="2" y="4" width="7" height="4.5" rx="1"/><rect x="11" y="4" width="11" height="4.5" rx="1"/><rect x="2" y="10" width="7" height="4.5" rx="1"/><rect x="11" y="10" width="11" height="4.5" rx="1"/><rect x="2" y="16" width="7" height="4.5" rx="1"/><rect x="11" y="16" width="11" height="4.5" rx="1"/>','fill="currentColor"'),user:V('<circle cx="12" cy="8" r="5"/><path d="M3 22c0-5 4-8 9-8s9 3 9 8z"/>','fill="currentColor"'),
star:V('<path d="m12 1.5 3.2 7 7.6.8-5.7 5.2 1.6 7.5L12 18l-6.7 4 1.6-7.5L1.2 9.3l7.6-.8z"/>','fill="#ffb800" style="width:44px;height:44px"'),starO:V('<path d="m12 2.5 2.9 6.4 7 .7-5.2 4.7 1.5 6.9L12 17.6l-6.2 3.6 1.5-6.9L2.1 9.6l7-.7z"/>','fill="none" stroke="#9aa0ab" stroke-width="1.6" stroke-linejoin="round" style="width:34px;height:34px"'),
chat:V('<path fill="#2f7de1" d="M3 3h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H10l-6 5v-5H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>','style="width:44px;height:44px"'),
warn:V('<path fill="#f5a300" d="M12 2 1 21h22z"/><path stroke="#262b33" stroke-width="2.4" stroke-linecap="round" d="M12 9v5m0 3v.5"/>','style="width:34px;height:34px"'),back:V('<path d="M20 12H5m6-7-7 7 7 7"/>','fill="none" stroke="#9aa0ab" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="width:32px;height:32px"'),
info:V('<circle cx="12" cy="12" r="11" fill="#b8bec9"/><path stroke="#17181c" stroke-width="2.6" stroke-linecap="round" d="M12 11v6m0-9.5v.5"/>','style="width:34px;height:34px"'),x:V('<path d="m5 5 14 14M19 5 5 19"/>','fill="none" stroke="#c8cdd6" stroke-width="2.6" stroke-linecap="round" style="width:22px;height:22px"'),menu:V('<path d="M3 6h18M3 12h18M3 18h18"/>','fill="none" stroke="#c8cdd6" stroke-width="2.2" stroke-linecap="round"'),chev:V('<path d="m9 5 7 7-7 7"/>','fill="none" stroke="#4da3ff" stroke-width="3" stroke-linecap="round" style="width:16px;height:16px"'),
lens:V('<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>','fill="none" stroke="#9aa0ab" stroke-width="2.6" stroke-linecap="round" style="width:40px;height:40px"'),ok:V('<circle cx="12" cy="12" r="11" fill="#2fa36b"/><path d="m6.5 12.5 3.5 3.5 7-8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>','style="width:70px;height:70px"')};
// Kullanıcının eğitime başlamadan önce göreceği beş ana aşama.
// Metinler (ST, S, W, OK, WO ...) js/data.js içindedir.
let n=0,d=false;const $=i=>document.getElementById(i),ph=$("ph");
const b=(k,l,c,h)=>`<button class="t ${c}" data-k="${k}" data-l="${l}">${h||l}</button>`;
const N=s=>s.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i").replace(/\s+/g," ").trim();
const tabs=a=>`<div class="tabs">${[["tHome","Anasayfa",ic.home],["tSearch","Arama",ic.search],["tServ","Hizmetler",ic.list],["tProf","Profilim",ic.user]].map(x=>b(x[0],x[1]+" sekmesi",x[1]==a?"on":"",x[2]+"<br>"+x[1])).join("")}</div>`;
const R=(k,lg,t,o)=>b(k,t,"res",I(lg,56,"border-radius:10px;flex:none")+`<span><b>${t}</b><br><small>${o}</small></span>`);
// Arama sonuçlarında gösterilen örnek e-Devlet hizmetleri.
const EGM="Emniyet Genel Müdürlüğü",GIB="Gelir İdaresi Başkanlığı";
window.searchQuery = "";
const SERVICE_ITEMS = [
  ["plate","egm","Araç Plakasına Yazılan Ceza Sorgulama",EGM,"trafik cezası plaka araç plakası araca yazılan ceza"],
  ["vergi","gib","Vergi Borcu Sorgulama ve Ödeme",GIB,"vergi borcu ödeme"],
  ["kgm","kgm","Trafik İdari Para Cezası Sorgulama","Karayolları Genel Müdürlüğü","trafik cezası idari para cezası karayolları"],
  ["lic","egm","Sürücü Belgesi ve Şahıslara Yazılan Ceza Sorgulama",EGM,"ehliyet sürücü şahıs cezası"],
  ["odeme","gib","Trafik Para Cezası Ödemeleri Sorgulama",GIB,"ödenmiş ceza ödeme"],
  ["tuzel","egm","Araç Plakasına Yazılan Ceza Sorgulama (Tüzel Kişi)",EGM,"şirket tüzel kişi kurumsal plaka"],
  ["sgk","sgk","SGK Tescil ve Hizmet Dökümü / İşyeri Ünvan Listesi","Sosyal Güvenlik Kurumu"],
  ["hat","btk","Mobil Hat Sorgulama","Bilgi Teknolojileri ve İletişim Kurumu"],
  ["dava","adl","Dava Dosyası Sorgulama","Adalet Bakanlığı"],
  ["sicil","sicil","Adli Sicil Kaydı Sorgulama","Adalet Bakanlığı"]
];
// Arama kutusundaki metni Türkçe karakterleri dikkate alarak normalize eder.
// Her kelime sonuç başlığında veya kurum/açıklama alanında aranır.
function searchResults(query) {
  const q = N(query || "");
  const terms = q.split(" ").filter(Boolean);
  const items = terms.length
    ? SERVICE_ITEMS.filter(x => {
        const haystack = N(`${x[2]} ${x[3]} ${x[4] || ""}`);
        return terms.every(term => haystack.includes(term));
      })
    : SERVICE_ITEMS.slice(0, 6);
  return items.length
    ? items.map(x => R(x[0], x[1], x[2], x[3])).join("")
    : `<p class="empty-results">Aramanızla eşleşen hizmet bulunamadı. Yazımınızı kontrol edip tekrar deneyin.</p>`;
}

const F=(k,l,p,v,ty,ac,pre)=>`<div class="t fld ${pre||""}" data-k="${k}" data-l="${l}">${pre?'':''}<input id="in_${k}" type="${ty}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${p}" value="${v}" ${ac?"":"readonly tabindex=-1"}></div>`;
// Eğitim telefonunun o anki ekranını üretir. Gerçek bir e-Devlet bağlantısı yoktur.
function screen(s,f){const T=S[n][2],tc=f>=1||(d&&T==="tc"),pw=f>=2||(d&&T==="pwd"),ty=f||d,a1=T==="tc"&&!d,a2=T==="pwd"&&!d,a3=T==="sbox"&&!d;
 const H={
 home:()=>`<div style="background:#000;min-height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:16px"><div style="width:90px">${b("egovapp","e-Devlet uygulaması simgesi","ap",I("app",62,"border-radius:16px")+"e-Devlet")}</div><div class="q" style="background:#1c1c1e;border-radius:26px;padding:10px">${b("phone","Telefon simgesi","ap",I("phone",62))}${b("msg","Mesajlar simgesi","ap",I("msg",62))}${b("chrome","Chrome simgesi","ap",I("chrome",62))}${b("cam","Kamera simgesi","ap",I("cam",62))}</div></div>`,
 login:()=>`<div class="pad" style="text-align:center"><div style="display:flex;justify-content:space-between;align-items:center">${I("siber",150)}${ic.menu}</div><div style="margin:10px 0">${I("lg2",250)}</div>${F("tc","T.C. Kimlik No kutusu","T.C. Kimlik No",tc?"12345678910":"","text",a1)}${F("pwd","e-Devlet Şifresi kutusu","e-Devlet Şifresi",pw?"12345":"","password",a2)}<div style="text-align:right">${b("forgot","Şifremi Unuttum","lnk sm","<u><b>Şifremi Unuttum</b></u>")}</div>${b("enter","Giriş Yap","btn")}${b("sign","Mobil İmza ile Giriş Yap","lnk")}<div class="opt2"><hr class="hr"><div class="q">${b("onay","Mobil Onay","qk",I("onay",56)+"<br>Mobil Onay")}${b("kare","Karekod Okut","qk",I("kare",56)+"<br>Karekod Okut")}${b("yardim","Yardım","qk",I("yrd",56)+"<br>YARDIM")}</div></div><div class="opt"><hr class="hr"><div class="ph">HIZLI ERİŞİM</div><div class="q">${b("hava","Hava Durumu","qk",I("hava",56)+"<br>Hava Durumu")}${b("eczane","Nöbetçi Eczane Sorgulama","qk",I("ecz",56)+"<br>Nöbetçi Eczane Sorgulama")}${b("acil","Acil Toplanma Alanları","qk",I("acil",56)+"<br>Acil Toplanma Alanları")}</div></div></div>`,
 dash:()=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px">${I("logo",190)}${ic.info}</div><div class="pad" style="padding-top:0"><div class="q">${b("fav","Favori Hizmetlerim","","<span class='rw'>"+ic.star+"<b>Favori Hizmetlerim</b></span>")}${b("mesajlarim","Mesajlarım","","<span class='rw'>"+ic.chat+"<b>Mesajlarım</b></span>")}</div>${b("atam","ATAM","","<span class='rw'>"+I("atam",58,"border-radius:50%")+"<span><b>ATAM</b><br><small class='ph'>Atatürk Araştırma Merkezi İnternet sitesini ziyaret edin.</small></span></span>")}<div class="opt"><h3>Duyurular</h3>${b("duyuru","Duyuru kartı","",I("banner",290,"display:block;border-radius:6px")+"<small>Digital@UNGA 2026’da Türkiye, dijital devlet alanında uluslararası bir başarıya imza attı.</small><div style='text-align:right;color:#4da3ff;font-weight:700'>Detaylı Bilgi "+ic.chev+"</div>")}<div style="display:flex;justify-content:space-between;align-items:center"><h3>Öne Çıkan Hizmetler</h3><span style="color:#4da3ff;font-weight:700">Tümü ${ic.chev}</span></div>${R("feat","egm","Araç Plakasına Yazılan Ceza Sorgulama",EGM)}</div></div>${tabs("Anasayfa")}`,
 search:()=>`<div class="pad"><h3 style="margin:4px 0 12px">Arama</h3><div class="t sb fld" data-k="sbox" data-l="Hizmet Ara kutusu"><span class="rw">${ic.lens}<input id="in_sbox" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Hizmet Ara" value="${window.searchQuery || ""}" ${a3?"":"readonly tabindex=-1"} style="border-bottom:3px solid ${a3?"#3d8bfd":"#9aa0ab"}"></span></div><div id="searchResults" aria-live="polite">${searchResults(window.searchQuery || "")}</div></div>${tabs("Arama")}`,
 svc:()=>`<div style="display:flex;align-items:center;gap:12px;padding:12px 14px">${b("back","Geri oku","lnk sm",ic.back)}<b style="flex:1;font-size:20px">Araç Plakasına Yazılan…</b>${ic.starO}</div><div style="text-align:right;padding:0 14px 12px;border-bottom:1px solid #3a4049">${b("close","Hizmeti Kapat","sm","<b>Hizmeti Kapat</b>")}</div><div class="pad">${b("info","Açıklama kutusu","","Bu hizmeti kullanarak, adınıza tescilli araç plakasına son bir yıl içerisinde yazılan trafik cezalarını sorgulayabilirsiniz.")}${b("warn","Uyarı kutusu","","<span class='rw'>"+ic.warn+"<b style='color:#f5b324;font-size:22px'>Uyarı</b></span>Son bir yıl içerisinde adınıza kayıtlı araç plakasına yazılan herhangi bir ceza bulunamadı.")}</div>`,
 prof:()=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px"><h3 style="margin:0;font-size:26px">Profilim</h3><span style="display:flex;gap:10px">${b("phelp","Yardım simgesi","ap",I("help",40))}${b("power","Çıkış simgesi","ap",I("pow",40))}</span></div><div class="pad" style="padding-top:0"><div class="card2"><div style="font-size:22px;font-weight:700;margin:8px 0 22px">DENEME</div><div class="kv"><span class="ph">Telefon No</span><span>05000000000</span></div><div class="gr">SMS ve Kimlik Kartı ile doğrulandı.</div><div class="kv"><span class="ph">E-Posta</span><span>deneme123@gmail.com</span></div><div class="gr">Doğrulanmış E-posta adresi</div><p class="ph opt" style="font-size:15px">Bilgilendirme e-postaları doğrulanmış eposta adresinize gönderilecektir.</p><div style="text-align:right">${b("edit","Bilgilerimi Düzenle","btn sm","<b>BİLGİLERİMİ DÜZENLE</b>")}</div></div><div class="g2 opt">${b("kimlik","Kimlik ve Adres Bilgileri","tile",I("idc",52)+"<b>Kimlik ve<br>Adres Bilgileri</b>")}${b("sifre","Şifre Değiştir","tile",I("lock",46)+"<b>Şifre Değiştir</b>")}${b("iki","İki Aşamalı Giriş İşlemleri","tile",I("shd",46)+"<b>İki Aşamalı<br>Giriş İşlemleri</b>")}${b("gecmis","Kullanım Geçmişi","tile",I("hist",52)+"<b>Kullanım<br>Geçmişi</b>")}</div></div>${tabs("Profilim")}`,
 end:()=>`<div class="pad" style="text-align:center;padding-top:60px">${ic.ok}<h3>Güvenle çıkış yaptınız</h3></div>`};
 H.profd=H.prof;return H[s]()}
// Adım tamamlandığında kısa bir başarı sesi ve titreşim verir.
function chime(){if(!sesAcik)return;try{const a=new(window.AudioContext||window.webkitAudioContext)();[660,880].forEach((f,i)=>{const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+i*.16;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.2,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+.4);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+.45)});navigator.vibrate&&navigator.vibrate(60)}catch(e){}}
function done(){d=true;const st=n;render();chime();/* Otomatik anlatım modunda bu adımın sesi bittiyse sessiz kalır. Yeni anlatım yalnızca kullanıcı Sonraki/Önceki adımla ilerlediğinde başlar. */if(!continuousNarration)setTimeout(()=>{if(d&&n===st)sesGeri(["basari-"+(n%3+1)])},500);/* Telefonda sonucu görsün diye kısa bekle, sonra başarı ekranına geç (dar ekran). */setTimeout(()=>{if(d&&n===st)setView("card")},900)}
// Aktif adımın metnini, telefon ekranını ve ilerleme çubuğunu yeniler.
function render(){const s=S[n];$("stg").textContent=`Adım ${s[0]+1} / 5 · ${ST[s[0]]}`;document.body.dataset.state=d?"done":"todo";$("hintTx").textContent=s[6];
 $("steps").innerHTML=ST.map((t,i)=>`<div class="${i<s[0]?"ok":i==s[0]?"on":""}">${i<s[0]?"✓ ":(i+1)+". "}${t}</div>`).join("");
 $("ti").textContent=s[4];$("tx").textContent=s[5];$("hi").textContent="👆 "+s[6];
 $("ex").innerHTML=s[7]&&!d?`Yazacağınız örnek: <b>${s[7]}</b>`:"";$("ex").style.display=s[7]&&!d?"block":"none";
 $("exbar").innerHTML=s[7]&&!d?`Yazacağınız örnek: <b>${s[7]}</b>`:"";
 $("xt").innerHTML=s[8]?`<b>Bunu bilmek iyi olur</b><br>${s[8]}`:"";$("xt").style.display=s[8]?"block":"none";
 $("scr").innerHTML='<div id="scrIn">'+screen(s[1],s[3])+'</div>';const ov=$("ov");$("hl").style.display="none";
 ov.style.display=s[1]=="profd"?"block":"none";ov.innerHTML=s[1]=="profd"?`<div class="dim"></div><div class="dlgb"><p>Çıkış yapmak istediğinizden emin misiniz?</p><div style="text-align:right">${b("cancel","İPTAL","lnk sm","<b>İPTAL</b>")}${b("exit","ÇIKIŞ YAP","lnk sm","<b>ÇIKIŞ YAP</b>")}</div></div>`:"";
 const last=n==S.length-1||S[n+1][0]!=s[0];
 $("fb").innerHTML=(n===S.length-1)?`<div class="completion-card"><div class="completion-icon">🏆</div><h3>${FINAL.baslik}</h3><p>${FINAL.metin}</p><button class="nx" id="againNow" type="button">Baştan tekrar et</button></div>`:d?`<div class="good"><svg class="pop" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#fff"/><path d="m6.5 12.5 3.5 3.5 7-8" stroke="#0b7a6b" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div>${OK[n%3]} <span class="nexthint">${DEVAM}</span>${last?`<br><b>“${ST[s[0]]}” aşamasını tamamladınız!</b>`:""}</div></div>`:"";
 const tg=ph.querySelector(`[data-k="${s[2]}"]`);if(tg)tg.classList.add(d?"won":"soft");
 if(s[7]&&!d)setTimeout(()=>{const i=$("in_"+s[2]);i&&i.focus({preventScroll:true})},60);
 $("next").disabled=!d;$("next").innerHTML=n==S.length-1?'Baştan<span class="wide"> başla</span> ↻':'Sonraki<span class="wide"> adım</span> →';$("prev").disabled=n==0;
 $("nxt").textContent=`Şu an: ${ST[s[0]]} • Adım ${n+1} / ${S.length}`;fitAll();}
// Ekrandaki hedefin üzerine yönlendirme balonunu konumlandırır.
function place(){const t=ph.querySelector(`[data-k="${S[n][2]}"]`),h=$("hl");if(!t||d){h.style.display="none";return}
 const P=ph.getBoundingClientRect(),r=t.getBoundingClientRect();h.style.display="block";const w=h.offsetWidth,hh=h.offsetHeight,up=r.top-P.top>hh+44;
 h.className=up?"up":"dn";h.style.top=(up?r.top-P.top-hh-12:Math.min(r.bottom-P.top+12,P.height-hh-8))+"px";
 h.style.left=Math.max(6,Math.min(r.left-P.left+r.width/2-w/2,P.width-w-6))+"px";h.style.setProperty("--ax",Math.max(14,Math.min(r.left-P.left+r.width/2-parseFloat(h.style.left),w-14))+"px")}
function show(){const t=ph.querySelector(`[data-k="${S[n][2]}"]`);if(!t||d)return;$("hl").innerHTML="Buraya dokunun";if($("scr").classList.contains("over"))t.scrollIntoView({block:"center",behavior:"auto"});t.classList.add("hint");place()}
$("scr").addEventListener("scroll",()=>{if($("hl").style.display=="block")place()});
ph.addEventListener("click",e=>{if(!e.target.closest("#scr,#ov"))return;const s=S[n],t=e.target.closest(".t")||{dataset:{k:"",l:"ekranın boş bir yeri"}};if(d)return;
 if(t.dataset.k===s[2]){if(s[7]){const i=$("in_"+s[2]);i&&i.focus()}else done();return}
 const g=(W[t.dataset.k]!==undefined?W[t.dataset.k]:"genel"),k=(n+(t.dataset.k||"").length)%3;
 $("dm").innerHTML=`<b>${WO[k]}</b><br><br>${MESAJ[g]}<br><br>Şimdi şunu yapalım:<br><b>${s[6]}</b>`;$("dlg").showModal();
 sesGeri(["hata-giris-"+(k+1),"hata-"+g,"ipucu-"+sesNo(n)])});
ph.addEventListener("input",e=>{
 const s=S[n];
 if(d || e.target.id!=="in_"+s[2]) return;
 const v=e.target.value;
 if(s[2]==="sbox") {
   window.searchQuery=v;
   const results=$("searchResults");
   if(results) results.innerHTML=searchResults(v);fitPhone();
   if (N(v).includes(N(s[7]))) {
     // Bu deneme ekranında ayrı bir “Hizmeti Ara” düğmesi bulunmaz.
     // Arama metni tamamlanınca bu adım biter; sonraki adımda sonuç seçilir.
     done();
   } else {
     $("fb").innerHTML=v.trim()
       ? `<div class="tip-live">Yazdıkça sonuçlar daralıyor. “${s[7]}” yazdığınızda sonuç seçme adımına geçeceğiz.</div>`
       : "";
   }
   return;
 }
 if(!s[7]) return;
 const ok=v.trim()===s[7];
 if(ok){e.target.blur();done();return}
 $("fb").innerHTML=`<div class="warnb">${v.length>=s[7].length?"Örneği kontrol edin; bir rakam farklı olabilir.":"Güzel gidiyorsunuz, yazmaya devam edin."} (${v.length} / ${s[7].length})</div>`;
});
$("dok").onclick=()=>$("dlg").close();$("dshow").onclick=()=>{$("dlg").close();show()};
$("dlg").addEventListener("close",()=>stopAudio(true));
$("help").onclick=()=>{setView("phone");setTimeout(show,80)};
$("next").onclick=()=>{const oncekiAsama=S[n][0];setView("card");if(n==S.length-1)n=0;else n++;d=n==S.length-1;if(S[n][2]==="sbox")window.searchQuery="";render();if(continuousNarration){setTimeout(()=>readStepWithStageIntro(oncekiAsama),120)}else if(n===S.length-1){chime();sesGeri(["final"])}};
$("prev").onclick=()=>{const oncekiAsama=S[n][0];setView("card");if(n>0){n--;d=false;if(S[n][2]==="sbox")window.searchQuery="";render();if(continuousNarration)setTimeout(()=>readStepWithStageIntro(oncekiAsama),120)}};
$("restart").onclick=()=>{stopAudio();setView("card");n=0;d=false;window.searchQuery="";render()};
/* -------------------------------------------------------------------------
   SESLİ ANLATIM
   - Önce sounds/adim-XX.mp3 dosyası varsa onu çalar.
   - Kayıt dosyası eklenmemişse tarayıcının Türkçe seslendirmesine geçer.
   - Böylece ses özelliği, kullanıcının ayrıca kayıt hazırlamasını beklemez.
   ------------------------------------------------------------------------- */
let activeAudio = null;
let usingSpeech = false;
let speechPaused = false;
let audioQueue = [];
let continuousNarration = false; // Bir kez Dinle denince kullanıcı Durdur diyene kadar adımlar arası sesli anlatım açık kalır.
let narrationPaused = false;
let sesAcik = true; // Otomatik sesler (başarı, hata, tebrik, çalma sesi). Üstteki 🔊 düğmesiyle açılıp kapanır.
try { sesAcik = localStorage.getItem("sesAcik") !== "0"; } catch (e) {}

const sesYolu = ad => `sounds/${ad}.m4a`;

function updateAudioButtons(playing = false, paused = false) {
  const session = continuousNarration;
  $("listen").textContent = session ? "🔊 Anlatım açık" : (playing ? "↻ Baştan" : "▶ Dinle");
  $("pauseAudio").disabled = !session;
  $("stopAudio").disabled = !session;
  $("pauseAudio").textContent = narrationPaused || paused ? "▶ Devam" : "⏸ Beklet";
}

function stopAudio(keepContinuous = false) {
  if (!keepContinuous) { continuousNarration = false; narrationPaused = false; }
  audioQueue = [];
  if (activeAudio) {
    const eski = activeAudio;
    activeAudio = null;
    eski.pause();
    eski.currentTime = 0;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  usingSpeech = false;
  speechPaused = false;
  updateAudioButtons(false, false);
}

// Kayıt dosyası yoksa tarayıcı sesi sadece "Dinle" düğmesinde yedek olarak kullanılır.
function speakText(metin, tamamlaninca) {
  if (!("speechSynthesis" in window)) {
    $("fb").innerHTML = '<div class="warnb">Bu tarayıcı sesli okumayı desteklemiyor. Chrome veya Edge ile deneyebilirsiniz.</div>';
    return;
  }
  stopAudio(true);
  const utterance = new SpeechSynthesisUtterance(metin);
  utterance.lang = "tr-TR";
  utterance.rate = 0.92;
  utterance.pitch = 1;
  utterance.onend = () => {
    usingSpeech = false;
    speechPaused = false;
    updateAudioButtons(false, false);
    if (typeof tamamlaninca === "function" && continuousNarration) tamamlaninca();
  };
  utterance.onerror = () => {
    usingSpeech = false;
    speechPaused = false;
    updateAudioButtons(false, false);
  };
  usingSpeech = true;
  speechPaused = false;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  updateAudioButtons(true, false);
}

/* Dosya listesini sırayla çalar (örn. hata cümlesi + ipucu).
   - yedekMetin verilirse ve ilk dosya yoksa tarayıcı sesi kullanılır (sadece "Dinle" düğmesi).
   - Dosya yoksa geri bildirimler sessizce atlanır. */
function playFiles(dosyalar, yedekMetin) {
  stopAudio(true);
  audioQueue = dosyalar.slice();
  let ilk = true;
  const sonraki = () => {
    if (!audioQueue.length) {
      activeAudio = null;
      updateAudioButtons(false, false);
      return;
    }
    const ad = audioQueue.shift();
    const bu = ilk;
    ilk = false;
    const audio = new Audio(sesYolu(ad));
    let islendi = false;
    activeAudio = audio;
    audio.preload = "auto";
    const yedegeGec = () => {
      if (islendi || audio !== activeAudio) return;
      islendi = true;
      if (bu && yedekMetin) {
        activeAudio = null;
        audioQueue = [];
        speakText(yedekMetin);
      } else {
        sonraki();
      }
    };
    audio.addEventListener("ended", () => {
      if (islendi || audio !== activeAudio) return;
      islendi = true;
      sonraki();
    }, { once: true });
    audio.addEventListener("error", yedegeGec, { once: true });
    audio.play().then(() => updateAudioButtons(true, false)).catch(yedegeGec);
  };
  sonraki();
}

// Başarı, hata ve tebrik sesleri: sadece "Ses açık" iken ve kayıt varsa çalar.
function sesGeri(dosyalar) {
  if (!sesAcik) return;
  playFiles(dosyalar);
}

// Sürekli anlatım: kullanıcı Dinle'ye bir kez basar; her Sonraki/Önceki adımda ses kendiliğinden başlar.
function playSuccessNarration() {
  const k = n % 3;
  playFiles(["basari-" + (k + 1)], SES_METIN["basari-" + (k + 1)]);
}
function playCurrentStepNarration() {
  if (!continuousNarration || narrationPaused) return;

  // Son aşama
  if (n === S.length - 1) {
    playFiles(["son"]);
    return;
  }

  if (d) return playSuccessNarration();

  const s = S[n];
  playFiles(["adim-" + sesNo(n)]);
}
function readStepWithStageIntro(previousStage) {
  if (!continuousNarration || narrationPaused) return;
  if (n === S.length - 1) return playCurrentStepNarration();
  const currentStage = S[n][0];
  if (currentStage !== previousStage && "speechSynthesis" in window) {
    speakText("Şimdi " + ST[currentStage] + " aşamasına geçiyoruz.", playCurrentStepNarration);
  } else {
    playCurrentStepNarration();
  }
}

// "Dinle" düğmesi: adım henüz yapılmadıysa talimatı, yapıldıysa bilgiyi/tebriği okur.
$("listen").onclick = () => {
  continuousNarration = true;
  narrationPaused = false;
  const s = S[n];
  if (n === S.length - 1) return playCurrentStepNarration();
  if (d) {
    if (s[8]) return playFiles(["bilgi-" + sesNo(n)], s[8]);
    return playSuccessNarration();
  }
  playCurrentStepNarration();
};

function sesDurumu() {
  const b = $("sesToggle");
  b.innerHTML = sesAcik ? '<span aria-hidden="true">🔊</span><span class="wide"> Ses: Açık</span>' : '<span aria-hidden="true">🔇</span><span class="wide"> Ses: Kapalı</span>';
  b.setAttribute("aria-pressed", String(sesAcik));
  b.title = sesAcik ? "Otomatik sesler açık. Kapatmak için dokunun." : "Otomatik sesler kapalı. Açmak için dokunun.";
  b.setAttribute("aria-label", b.title);
}
$("sesToggle").onclick = () => {
  sesAcik = !sesAcik;
  try { localStorage.setItem("sesAcik", sesAcik ? "1" : "0"); } catch (e) {}
  if (!sesAcik) stopAudio();
  sesDurumu();
};
sesDurumu();

$("pauseAudio").onclick = () => {
  if (!continuousNarration) return;
  if (!narrationPaused) {
    narrationPaused = true;
    if (usingSpeech && "speechSynthesis" in window) window.speechSynthesis.pause();
    else if (activeAudio) activeAudio.pause();
    updateAudioButtons(Boolean(activeAudio || usingSpeech), true);
    return;
  }
  narrationPaused = false;
  if (usingSpeech && "speechSynthesis" in window) {
    window.speechSynthesis.resume();
  } else if (activeAudio && activeAudio.paused) {
    activeAudio.play().catch(() => {});
  } else {
    playCurrentStepNarration();
  }
  updateAudioButtons(Boolean(activeAudio || usingSpeech), false);
};

$("stopAudio").onclick = stopAudio;

// Son ekrandaki tekrar başlat düğmesi tüm ilerlemeyi güvenli biçimde sıfırlar.
$("fb").addEventListener("click", event => {
  if (event.target && event.target.id === "againNow") {
    stopAudio();
    setView("card");
    n = 0;
    d = false;
    window.searchQuery = "";
    render();
  }
});
// Başlangıç bilgilendirme ekranından eğitim akışına geçiş.
const startTrainingButton = $("startTraining");
if (startTrainingButton) {
  startTrainingButton.addEventListener("click", () => {
    $("welcomeScreen").hidden = true;
    $("welcomeScreen").style.display = "none";
    fitAll();
  });
}

/* -------------------------------------------------------------------------
   KAYDIRMASIZ DÜZEN
   - setView: dar ekranda "card" (talimat/başarı) ile "phone" (deneme) arasında geçer.
   - fitCard: talimat yazısı sığmazsa 24 px'ten en fazla 19 px'e kadar küçültür.
   - fitPhone: telefon ekranı sığmazsa önce süsleri gizler, sonra ölçekler.
   Böylece kullanıcı hiçbir ekranda kaydırma yapmak zorunda kalmaz.
   ------------------------------------------------------------------------- */
function setView(v){document.body.dataset.view=v;requestAnimationFrame(fitAll)}
function fitCard(){
  const c=$("card");
  if(!c||!c.offsetParent)return;
  c.classList.remove("over");
  let f=innerWidth>860?27:24;
  c.style.setProperty("--cfs",f+"px");
  const min=innerWidth>860?22:(innerHeight<700?18:19);
  while(c.scrollHeight>c.clientHeight+1&&f>min){f--;c.style.setProperty("--cfs",f+"px")}
  if(c.scrollHeight>c.clientHeight+1)c.classList.add("over");
}
function fitPhone(){
  const sc=$("scr"),inn=$("scrIn");
  if(!sc||!inn||!sc.clientHeight)return;
  // Doğal (ölçeksiz) yüksekliği ölç: ekran genişleyip küçüldükçe satırlar değişir, bu yüzden birkaç tur.
  const measure=()=>{
    inn.style.transform="";inn.style.width="100%";inn.style.height="auto";
    let nh=inn.scrollHeight,s=1;
    for(let k=0;k<3;k++){s=Math.min(1,sc.clientHeight/nh);inn.style.width=(100/s)+"%";nh=inn.scrollHeight}
    return Math.min(1,sc.clientHeight/nh);
  };
  const apply=s=>{
    inn.style.transformOrigin="top left";
    inn.style.transform=s<1?`scale(${s})`:"";
    inn.style.width=(100/s)+"%";
    inn.style.height=(sc.clientHeight/s)+"px";
  };
  // Uygula, sonra gerçekten sığdığını doğrula; taşıyorsa biraz daha küçült.
  const solve=()=>{
    let s=measure();apply(s);
    for(let k=0;k<6&&inn.scrollHeight>inn.clientHeight+2;k++){
      s=Math.max(.4,s*inn.clientHeight/inn.scrollHeight*.985);apply(s);
    }
    return s;
  };
  inn.classList.remove("compact","compact2");sc.classList.remove("over");
  let s=solve();
  if(s<.88){inn.classList.add("compact");s=solve()}
  if(s<.75){inn.classList.add("compact2");s=solve()}
  if(s<.65){s=.65;apply(s);sc.classList.add("over")}
}
function fitAll(){fitCard();fitPhone()}
// Görseller sonradan yüklenince yükseklik değişir; yeniden ölç.
$("scr").addEventListener("load",()=>fitPhone(),true);
$("goPhone").onclick=()=>{
  setView("phone");
  const s=S[n];
  if(s[7]&&!d){const i=$("in_"+s[2]);i&&i.focus()}
};
$("toCard").onclick=()=>setView("card");
window.addEventListener("resize",fitAll);
window.addEventListener("orientationchange",()=>setTimeout(fitAll,250));
window.addEventListener("load",fitAll);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitAll);

render();
/* ============================================================
   DİJİTAL ADIM - BAŞARI VE HATA SES SİSTEMİ
   - Başarılı işlemlerde sesli geri bildirim.
   - Yanlış dokunuşlarda sesli geri bildirim.
   - Yanlış yazımlarda sesli uyarı.
   - MP3 bulunamazsa Türkçe tarayıcı sesi.
   ============================================================ */

// Yanlış yazım için yeni ses metni
MESAJ.yanlis_yazim =
  "Yazdığınız bilgi örnekle eşleşmedi. Lütfen tekrar kontrol edelim.";

SES_METIN["hata-yanlis_yazim"] = MESAJ.yanlis_yazim;


// Ses dosyası bulunamadığında Türkçe seslendirme yap.
function sesGeri(dosyalar) {
  if (!sesAcik) return;

  const yedekMetin = dosyalar
    .map(ad => SES_METIN[ad] || "")
    .filter(Boolean)
    .join(" ");

  playFiles(dosyalar, yedekMetin);
}


// Başarılı işlem tamamlandığında seslendir.
function done() {
  d = true;

  const st = n;

  render();
  chime();

  // Otomatik anlatım açık olsa bile başarı sesini çal.
  sesGeri(["basari-" + (n % 3 + 1)]);

  // Sonucu göstermek için kısa süre bekle.
  setTimeout(() => {
    if (d && n === st) {
      setView("card");
    }
  }, 900);
}


// Yanlış yazım kontrolü.
// Aynı adımda tekrar tekrar konuşmasını engeller.
let sonYanlisYazimAdimi = -1;

ph.addEventListener("input", function (e) {
  const s = S[n];

  if (d || !s || e.target.id !== "in_" + s[2]) {
    return;
  }

  if (!s[7]) return;

  const girilen = e.target.value.trim();
  const beklenen = s[7].trim();

  // Doğru yazılmışsa uyarı verme.
  if (N(girilen) === N(beklenen)) {
    return;
  }

  // Kullanıcı henüz yazmaya devam ediyorsa bekle.
  if (girilen.length < beklenen.length) {
    return;
  }

  // Aynı adımda yalnızca bir kez uyar.
  if (sonYanlisYazimAdimi === n) {
    return;
  }

  sonYanlisYazimAdimi = n;

  sesGeri(["hata-yanlis_yazim"]);
});


// Kullanıcı yeni adıma geçtiğinde yanlış yazım kilidini sıfırla.
const eskiSonrakiTiklama = $("next").onclick;

$("next").onclick = function () {
  sonYanlisYazimAdimi = -1;

  if (eskiSonrakiTiklama) {
    eskiSonrakiTiklama();
  }
};

const eskiOncekiTiklama = $("prev").onclick;

$("prev").onclick = function () {
  sonYanlisYazimAdimi = -1;

  if (eskiOncekiTiklama) {
    eskiOncekiTiklama();
  }
};


// Baştan başlatıldığında da kilidi sıfırla.
const eskiYenidenBaslat = $("restart").onclick;

$("restart").onclick = function () {
  sonYanlisYazimAdimi = -1;

  if (eskiYenidenBaslat) {
    eskiYenidenBaslat();
  }
};

/* ============================================================
   DİJİTAL ADIM - YENİ SES SİSTEMİ
   - Tarayıcı seslendirmesi tamamen devre dışı.
   - Bütün anlatımlar M4A kayıtlarından yapılır.
   - Başarıda 6 farklı kayıt kullanılır.
   - Hatalarda 3 farklı kayıt ve ardından ipucu kullanılır.
   - Eksik ses dosyasında tarayıcı konuşmaz.
   ============================================================ */

// Başarı ve hata kayıtlarının sırayla kullanılmasını sağlar.
let hataSesSayaci = 0;

// M4A dosyalarını sırayla çalan, tarayıcı sesine geçmeyen sistem.
playFiles = function (dosyalar, yedekMetin) {
  stopAudio(true);
  audioQueue = dosyalar.slice();

  const sonraki = () => {
    if (!audioQueue.length) {
      activeAudio = null;
      updateAudioButtons(false, false);
      return;
    }

    const ad = audioQueue.shift();
    const audio = new Audio(sesYolu(ad));
    let islendi = false;

    activeAudio = audio;
    audio.preload = "auto";

    const devamEt = () => {
      if (islendi || audio !== activeAudio) return;

      islendi = true;
      activeAudio = null;
      sonraki();
    };

    audio.addEventListener("ended", devamEt, { once: true });
    audio.addEventListener("error", devamEt, { once: true });

    audio.play()
      .then(() => updateAudioButtons(true, false))
      .catch(devamEt);
  };

  sonraki();
};

// Hata seslerini yeni kayıtlarına yönlendir.
sesGeri = function (dosyalar) {
  if (!sesAcik) return;

  const hataVar = dosyalar.some(ad =>
    ad.startsWith("hata-giris-") ||
    ad === "hata-yanlis_yazim"
  );

  if (hataVar) {
    hataSesSayaci = (hataSesSayaci % 3) + 1;

    const yeniDosyalar = [
      "basarisizlik-" + hataSesSayaci,
      ...dosyalar.filter(ad => ad.startsWith("ipucu-"))
    ];

    playFiles(yeniDosyalar);
    return;
  }

  // Eski hata dosyalarını arama; yalnızca mevcut kayıtları çal.
  playFiles(dosyalar.filter(ad =>
    !ad.startsWith("hata-")
  ));
};

// Başarı sesleri 6 kayıt arasından seçilir.
playSuccessNarration = function () {
  const k = (n % 6) + 1;
  playFiles(["basari-" + k]);
};

// Aşama başında tarayıcı konuşmaz.
// Doğrudan senin adım kaydın çalar.
readStepWithStageIntro = function () {
  if (!continuousNarration || narrationPaused) return;
  playCurrentStepNarration();
};

// Tarayıcı seslendirmesine başka bir yerden de geçilmesini engelle.
speakText = function () {
  usingSpeech = false;
  speechPaused = false;
  updateAudioButtons(false, false);
};

// Başarı tamamlandığında kendi ses kaydını çal.
done = function () {
  d = true;

  const st = n;

  render();
  chime();

  sesGeri(["basari-" + ((n % 6) + 1)]);

  setTimeout(() => {
    if (d && n === st) {
      setView("card");
    }
  }, 900);
};

console.log("Dijital Adım yeni M4A ses sistemi etkin.");

/* ============================================================
   SON AŞAMA SESİ - TEK VE SABİT AKIŞ
   Önce son.m4a çalar, ardından tebrikler ekranı açılır.
   ============================================================ */

// Sonraki butonunun davranışını düzenle.
$("next").onclick = function () {
  sonYanlisYazimAdimi = -1;

  // Zaten son ekrandaysak başa dön.
  if (n === S.length - 1) {
    stopAudio();
    setView("card");
    n = 0;
    d = false;
    window.searchQuery = "";
    render();
    return;
  }

  const sonrakiAdim = n + 1;
  const oncekiAsama = S[n][0];

  // Son aşamaya geçiyorsak önce son.m4a çalsın.
  if (sonrakiAdim === S.length - 1) {
    stopAudio(true);

    let tamamlandi = false;

    const tebrikleriGoster = () => {
      if (tamamlandi) return;
      tamamlandi = true;

      activeAudio = null;
      updateAudioButtons(false, false);

      n = sonrakiAdim;
      d = true;
      render();
      setView("card");
    };

    if (!sesAcik) {
      tebrikleriGoster();
      return;
    }

    const audio = new Audio(sesYolu("son"));
    activeAudio = audio;
    audio.preload = "auto";

    audio.addEventListener("ended", tebrikleriGoster, { once: true });
    audio.addEventListener("error", tebrikleriGoster, { once: true });

    audio.play().catch(tebrikleriGoster);
    return;
  }

  // Normal adımların mevcut akışı.
  setView("card");
  n = sonrakiAdim;
  d = false;

  if (S[n][2] === "sbox") {
    window.searchQuery = "";
  }

  render();

  if (continuousNarration) {
    setTimeout(() => readStepWithStageIntro(oncekiAsama), 120);
  }
};

console.log("Son aşama ses geçişi düzeltildi.");