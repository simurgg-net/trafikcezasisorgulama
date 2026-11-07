
/* =========================================================================
   DİJİTAL ADIM – METİNLER VE SES ADLARI

   Hedef kitle: 65 yaş ve üzeri kullanıcılar.
   Metinler: Sade, açıklayıcı ve kolay okunabilir.
   Tasarım ve font boyutları bu dosyadan etkilenmez.
   ========================================================================= */

const ST = [
  "Hazırlık",
  "Giriş",
  "Hizmeti bulma",
  "Hizmeti inceleme",
  "Güvenli çıkış"
];

// Her satır:
// [aşama, ekran, hedef, önceden dolu alan sayısı,
//  başlık, açıklama, ipucu, yazılacak örnek, bilgilendirme]

const S = [
  [0, "home", "egovapp", 0,
    "e-Devlet uygulamasını açalım",
    "Öncelikle telefonumuzun ekranına bakalım. Kırmızı renkli e-Devlet simgesini bulalım. Uygulamayı açmak için simgeye parmağımızla dokunalım.",
    "Kırmızı renkli e-Devlet simgesini bulun ve üzerine dokunun."
  ],

  [1, "login", "tc", 0,
    "T.C. Kimlik No kutusuna yazalım",
    "Öncelikle T.C. Kimlik No yazan kutuya dokunalım. Ardından ekranda gördüğümüz örnek numarayı yazalım. Gerçek işlemlerde kendi kimlik numaramızı kullanırız.",
    "T.C. Kimlik No kutusuna dokunarak örnek numarayı girin.",
    "12345678910",
    "Bu eğitimde güvenliğiniz için örnek bir numara kullanıyoruz. Gerçek e-Devlet işlemlerinde kendi kimlik numaranızı yazmalısınız."
  ],

  [1, "login", "pwd", 1,
    "Şifre kutusuna yazalım",
    "Şimdi e-Devlet Şifresi yazan kutuya dokunalım. Ekranda gösterilen örnek şifreyi yazalım. Şifreyi yazarken karakterlerin nokta şeklinde görünmesi normaldir.",
    "e-Devlet Şifresi kutusuna dokunun ve örnek şifreyi yazın.",
    "12345",
    "e-Devlet şifreniz size özeldir. Şifrenizi hiç kimseyle paylaşmayın. Bu eğitimde gerçek şifreniz yerine örnek bir şifre kullanıyoruz."
  ],

  [1, "login", "enter", 2,
    "Giriş Yap düğmesine basalım",
    "T.C. Kimlik No ve şifre alanlarını doldurduk. Şimdi yazdığımız bilgileri kontrol edelim. Her şey doğruysa mavi renkli Giriş Yap düğmesine dokunalım.",
    "Mavi renkli Giriş Yap düğmesine dokunarak devam edin."
  ],

  [2, "dash", "tSearch", 0,
    "Arama bölümüne gidelim",
    "Hesabımıza giriş yaptık. Şimdi trafik cezası sorgulama hizmetini bulacağız. Bunun için ekranın alt kısmındaki büyüteç işaretine, yani Arama sekmesine dokunalım.",
    "Ekranın altındaki büyüteç işaretine, yani Arama sekmesine dokunun."
  ],

  [2, "search", "sbox", 0,
    "Hizmet Ara kutusuna yazalım",
    "Aradığımız hizmeti bulmak için Hizmet Ara kutusunu kullanacağız. Önce kutunun içine dokunalım. Ardından trafik cezası sorgulama yazalım. Böylece ilgili hizmetler ekranda listelenecek.",
    "Hizmet Ara kutusuna dokunun ve trafik cezası sorgulama yazın.",
    "trafik cezası sorgulama",
    "Arama yaptığımızda birden fazla hizmet listelenebilir. Bir sonraki adımda doğru hizmeti birlikte bulacağız."
  ],

  [2, "search", "plate", 1,
    "Doğru hizmeti bulalım",
    "Şimdi karşımıza çıkan hizmetleri dikkatlice inceleyelim. Araç Plakasına Yazılan Ceza Sorgulama isimli hizmeti bulalım. Hizmetin altında Emniyet Genel Müdürlüğü yazdığını da kontrol edelim.",
    "Araç Plakasına Yazılan Ceza Sorgulama yazan satırı bulun ve üzerine dokunun.",
    null,
    "e-Devlet'te birbirine benzeyen hizmet adları bulunabilir. İşlem yapmadan önce doğru hizmeti seçtiğimizden emin olalım."
  ],

  [3, "svc", "info", 0,
    "Açıklama kutusunu okuyalım",
    "Doğru hizmeti açtık. Şimdi sayfanın en üst kısmında bulunan açıklama kutusuna bakalım. Bu bölümde hizmetin ne işe yaradığını öğrenebiliriz. Bilgileri dikkatlice inceleyelim.",
    "Hizmet sayfasının üst kısmındaki açıklama kutusuna dokunun.",
    null,
    "Bu hizmet, adınıza kayıtlı aracın plakasına son bir yılda yazılan trafik cezalarını sorgulamanızı sağlar. Bu ekrandan ödeme işlemi yapılmaz."
  ],

  [3, "svc", "warn", 0,
    "Sonuç kutusunu okuyalım",
    "Şimdi sarı üçgen işaretinin bulunduğu Uyarı kutusunu inceleyelim. Bu bölümde sorgulama sonucuyla ilgili bilgi yer alır. Ekrandaki açıklamayı dikkatlice okuyalım.",
    "Sarı üçgen işaretli Uyarı kutusunu inceleyin.",
    null,
    "Ekranda Ceza bulunamadı yazıyorsa sorgulanan son bir yıl içinde aracınıza ait ceza kaydı bulunmadığı belirtilir. Uyarı kelimesinden endişelenmenize gerek yoktur."
  ],

  [4, "svc", "close", 0,
    "Hizmeti kapatalım",
    "Sorgulama işlemimizi tamamladık. Artık bu hizmeti kullanmamıza gerek yok. Sayfanın sağ üst köşesindeki Hizmeti Kapat düğmesine dokunarak hizmet sayfasından çıkalım.",
    "Sayfanın sağ üst köşesindeki Hizmeti Kapat düğmesine dokunun."
  ],

  [4, "dash", "tProf", 0,
    "Profilim bölümüne gidelim",
    "Hizmet sayfasından çıktık. Şimdi e-Devlet hesabımızdan güvenli şekilde çıkış yapmaya hazırlanıyoruz. Çıkış düğmesini bulmak için ekranın alt kısmındaki Profilim sekmesine dokunalım.",
    "Ekranın alt kısmında sağ tarafta bulunan Profilim sekmesine dokunun."
  ],

  [4, "prof", "power", 0,
    "Çıkış simgesine dokunalım",
    "Profilim bölümünü açtık. Şimdi ekranın sağ üst köşesine bakalım. Daire içerisinde dikey çizgi bulunan simge, hesabımızdan çıkış yapmamızı sağlar.",
    "Ekranın sağ üst köşesindeki çıkış simgesine dokunun.",
    null,
    "İşimiz bittiğinde e-Devlet hesabımızdan çıkış yapmamız önemlidir. Böylece telefonumuzu başka biri kullandığında hesabımıza kolayca erişemez."
  ],

  [4, "profd", "exit", 0,
    "Çıkışı onaylayalım",
    "Ekranda çıkış yapmak isteyip istemediğimiz soruluyor. Bu, hesabımızı korumak için yapılan normal bir güvenlik kontrolüdür. Çıkış yapmak için sağ taraftaki ÇIKIŞ YAP düğmesine dokunalım.",
    "Sağ taraftaki ÇIKIŞ YAP düğmesine dokunarak çıkışı onaylayın."
  ],

  [4, "end", null, 0,
    "Tebrikler, tamamladınız!",
    "Harika! e-Devlet hesabınızdan güvenli bir şekilde çıkış yaptınız. Trafik cezası sorgulama işlemini baştan sona tamamladınız. Artık bu adımları öğrendiniz.",
    "Eğitimi dilediğiniz zaman yeniden yapabilirsiniz."
  ]
];

// Başarı mesajları
const DEVAM = "Hazır olduğunuzda devam edebilirsiniz.";

const OK = [
  "Tebrikler! Bu işlemi başarıyla tamamladınız. Şimdi bir sonraki adıma güvenle geçebilirsiniz.",
  "Harika gidiyorsunuz! Doğru seçeneği buldunuz. Birlikte devam edelim.",
  "Çok güzel! Bu adımı da tamamladınız. E-Devlet işlemlerini öğrenme yolunda ilerliyorsunuz.",
  "Harika! Bir adımı daha başarıyla tamamladınız. Her geçen adımda işlemi daha iyi öğreniyorsunuz.",
  "Çok güzel ilerliyorsunuz! Doğru seçimler yaparak hedefimize biraz daha yaklaştık.",
  "Başarılı bir şekilde devam ediyorsunuz. Kendinize güvenin, öğrenmek için çok güzel bir iş çıkarıyorsunuz."
];

// Başarısızlık mesajları
const WO = [
  "Henüz doğru seçeneği bulamadık. Hiç sorun değil, ekrana dikkatlice bakarak tekrar deneyebilirsiniz.",
  "Bu seçim aradığımız seçenek değil. Endişelenmeyin, doğru seçeneği birlikte bulabiliriz.",
  "Bir kez daha deneyelim. Doğru seçeneği bulmak için ekrandaki bilgileri dikkatlice inceleyebilirsiniz. Acele etmenize gerek yok."
];

// Yanlış dokunma açıklamaları
const MESAJ = {
  genel: "Şu an ihtiyacımız olan yer burası değil.",
  bos: "Burada dokunulacak bir şey yok. Hiçbir şey olmadı.",
  uygulama: "Bu başka bir uygulama. Biz kırmızı e-Devlet uygulamasını açıyoruz.",
  sonra: "Bu kutuya biraz sonra yazacağız. Şimdi sırası değil.",
  giris_yolu: "Bu da bir giriş yolu. Biz bugün şifreyle giriş yapıyoruz.",
  unuttum: "Şifreyi unutanlar içindir. Bizim şifremiz hazır.",
  yardim: "Burası yardım bölümü. İleride bakabilirsiniz.",
  kisayol: "Bu bir kısayol. Şimdilik gerek yok.",
  aramadan: "Bu da aynı hizmete götürür. Biz arama yapmayı öğreniyoruz.",
  sekme: "Bu sekmeye şimdi gerek yok.",
  benzer: "Bu hizmetin adı benziyor ama başka iş içindir. Biz Araç Plakasına Yazılan Ceza Sorgulama hizmetini arıyoruz.",
  baska_hizmet: "Bu başka bir iş için. Biz trafik cezasına bakıyoruz.",
  geri: "Geri oku bir önceki ekrana döndürür. Hizmeti Hizmeti Kapat düğmesiyle kapatalım.",
  profil: "Buradan bir şey değiştirmeyeceğiz. Hiçbir şey değişmedi.",
  iptal: "İptal, çıkıştan vazgeçmek içindir. Biz çıkış yapacağız."
};

// Ekrandaki öğe -> hata açıklaması grubu
const W = {
  "": "bos",
  phone: "uygulama",
  msg: "uygulama",
  cam: "uygulama",
  chrome: "uygulama",
  tc: "sonra",
  pwd: "sonra",
  sign: "giris_yolu",
  onay: "giris_yolu",
  kare: "giris_yolu",
  forgot: "unuttum",
  yardim: "yardim",
  phelp: "yardim",
  hava: "kisayol",
  eczane: "kisayol",
  acil: "kisayol",
  fav: "kisayol",
  mesajlarim: "kisayol",
  atam: "kisayol",
  duyuru: "kisayol",
  feat: "aramadan",
  tHome: "sekme",
  tServ: "sekme",
  tSearch: "sekme",
  kgm: "benzer",
  lic: "benzer",
  odeme: "benzer",
  tuzel: "benzer",
  vergi: "baska_hizmet",
  sgk: "baska_hizmet",
  hat: "baska_hizmet",
  dava: "baska_hizmet",
  sicil: "baska_hizmet",
  back: "geri",
  edit: "profil",
  kimlik: "profil",
  sifre: "profil",
  iki: "profil",
  gecmis: "profil",
  cancel: "iptal"
};

// Eğitim bitince açılan başarı kartı
const FINAL = {
  baslik: "Eğitimi başarıyla tamamladınız!",
  metin: "Bu adımların hepsini siz yaptınız. Gerçek uygulamada da aynı yolu izleyebilirsiniz."
};

/* =========================================================================
   SES DOSYALARI VE OKUNACAK METİNLER
   Tüm ses dosyaları sounds/ klasöründedir.
   ========================================================================= */

const sesNo = i => String(i + 1).padStart(2, "0");
const cumle = t => (/[.!?”"]$/.test(t) ? t : t + ".");

const SES_METIN = {};

S.forEach((s, i) => {
  if (i === S.length - 1) return;

  SES_METIN["adim-" + sesNo(i)] = [
    cumle(s[4]),
    cumle(s[5]),
    cumle(s[6]),
    s[7] ? `Yazacağımız örnek: ${s[7]}.` : ""
  ].filter(Boolean).join(" ");

  if (s[8]) {
    SES_METIN["bilgi-" + sesNo(i)] = s[8];
  }

  SES_METIN["ipucu-" + sesNo(i)] =
    "Şimdi şunu yapalım: " + cumle(s[6]);
});

// Altı başarı kaydı
OK.forEach((t, i) => {
  SES_METIN["basari-" + (i + 1)] = t;
});

// Üç başarısızlık kaydı
WO.forEach((t, i) => {
  SES_METIN["basarisizlik-" + (i + 1)] = t;
});

// Hata açıklamaları
Object.keys(MESAJ).forEach(g => {
  SES_METIN["hata-" + g] = MESAJ[g];
});

// Son aşama ses kaydı
SES_METIN["son"] =
  "Harika! e-Devlet hesabınızdan güvenli bir şekilde çıkış yaptınız. Şimdi eğitimimizi tamamlamak üzeresiniz.";

// Tebrikler ekranı
SES_METIN["final"] =
  cumle(FINAL.baslik) + " " + FINAL.metin;
