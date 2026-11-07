# Dijital Adım – Trafik Cezası Sorgulama Eğitimi

## Nasıl çalıştırılır?
1. ZIP dosyasını bir klasöre çıkarın.
2. `index.html` dosyasını güncel Chrome veya Edge tarayıcısında açın.
3. Açılış bilgilendirmesini okuyup **Eğitime başla** düğmesine basın.

## Klasör yapısı
- `index.html` – sayfa yapısı ve başlangıç bilgilendirmesi
- `css/style.css` – görünüm ve mobil uyumluluk
- `js/data.js` – tüm yazılar ve ses dosya adları (metinleri buradan değiştirin)
- `js/app.js` – ekranlar, arama, etkileşimler ve ses kontrolleri
- `js/assets.js` – uygulamanın görsel verileri (elle düzenlemeyin)
- `KOD_REHBERI.md` – kodların görevlerini açıklayan rehber
- `sounds/` – isteğe bağlı kişisel MP3 kayıtları

## Sesler
Kendi sesinizle kaydettiğiniz MP3 dosyalarını `sounds/` klasörüne koyun. Dosya adları ve okunacak metinler `sounds/README.md` içindedir (toplam 55 kayıt).

- **Talimat ve bilgi:** "Dinle" düğmesiyle çalar. Kayıt yoksa tarayıcının Türkçe sesi yedek olarak okur.
- **Başarı, tebrik ve hata:** Kayıt varsa kendiliğinden çalar. Yanlış dokunuşta üç kayıt sırayla çalar: yumuşak giriş, açıklama ve ipucu.
- Sayfanın üstündeki **Ses** düğmesi bu otomatik sesleri ve başarı tıngısını açıp kapatır. "Dur" ve "Durdur" düğmeleri çalan kaydı duraklatır veya keser.

## Eğitim güvenliği
Bu uygulama yalnızca eğitim simülasyonudur. Gerçek e-Devlet hesabına bağlanmaz ve gerçek kimlik/şifre bilgisi girilmemelidir.

## Son ekran düzenlemeleri
- Deneme telefonunun içeriği kaydırılabilir; kaydırma çubuğu görsel olarak gizlidir.
- Eğitim tamamlandığında başarı ekranı tam ekran açılır.
- Telefon/tablet düzeninde metin boyutları küçültülmek yerine okunabilir kalacak şekilde yeniden ayarlanmıştır.
- Masaüstünde telefon simülasyonu ekran yüksekliğine uyum sağlar.

## Kaydırmasız düzen (65+ kullanıcı için)
Sayfa hiçbir ekranda kaydırma istemez. Sığmayan içerik kaydırılmaz; metin 24 px'ten en fazla 19 px'e kadar küçülür, telefon ekranı ölçeklenir ve gerekirse süs öğeleri gizlenir.

- **Geniş ekran (laptop/tablet yatay):** Solda talimat, sağda telefon yan yana görünür. Sayfa ekran yüksekliğine tam oturur.
- **Dar ekran (telefon/tablet dikey):** İçerik sırayla gösterilir:
  1. **Talimat:** Ne yapacağımız ve büyük yeşil "Telefon ekranına geç" düğmesi.
  2. **Telefon:** Deneme ekranı tam boyutta; üstte ne yapılacağı tek satırlık ipucu olarak durur. Geri dönmek için ← düğmesi vardır.
  3. **Başarı:** Doğru dokunuştan kısa süre sonra "Harika!" ve açıklama gelir; "Sonraki" düğmesi görünür.
- Başarı kartında "Bunu bilmek iyi olur" açıklaması, eylemden sonra gösterilir.
- Telefon yatay tutulursa "Lütfen telefonu dik tutun" uyarısı çıkar.
- Önerilen en küçük ekran 360 × 640'tır. Daha küçük ekranlarda içerik kendi içinde kaydırılabilir (son çare).
- Eğitim ekranının güvenlik notu açılış ekranında ve telefonun üstündeki "DENEME" şeridinde durur.

Düzen şu cihaz boyutlarında otomatik olarak denenmiştir: 360×640, 390×844, 768×1024, 1024×768, 1280×720, 1366×768, 1440×900, 1536×730, 1920×1080.
