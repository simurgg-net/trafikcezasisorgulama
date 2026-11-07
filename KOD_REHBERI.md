# Kodları anlama rehberi

## Dosyalar
- `index.html`: Sayfa iskeleti, açılış bilgilendirmesi ve butonlar.
- `css/style.css`: Renkler, yerleşim ve telefon/tablet uyumu.
- `js/data.js`: Tüm yazılar (adım başlıkları, açıklamalar, ipuçları, başarı ve hata cümleleri) ve ses dosyası adları. Bir cümleyi değiştirmek için sadece bu dosyayı düzenleyin.
- `js/app.js`: Eğitim adımları, arama, tıklamalar, ilerleme ve ses kontrolleri.
- `js/assets.js`: Gömülü ikon/görsel verileri. Otomatik oluşturulur; elle düzenlemeyin.
- `sounds/`: İsteğe bağlı MP3 kayıtları.

## `app.js` içindeki temel parçalar
1. `ST`: Beş ana aşamanın başlıkları.
2. `S`: Eğitim adımlarının verileri. Her satır başlık, açıklama, ipucu ve beklenen kullanıcı hareketini tanımlar.
3. `W`: Yanlış yere tıklanınca gösterilen açıklamalar.
4. `SERVICE_ITEMS`: Arama alanında listelenen örnek hizmetler.
5. `searchResults()`: Yazılan kelimelere göre sonuçları filtreler.
6. `screen()`: Telefon simülasyonunda gösterilecek ekranı üretir.
7. `render()`: Mevcut adımı ve ilerleme durumunu ekrana çizer.
8. `done()`: Doğru hareket yapıldığında adımı tamamlar.
9. Sesli anlatım bölümü: Önce ilgili MP3'ü çalar; MP3 yoksa tarayıcının Türkçe metin okumasını kullanır.

## Trafik cezası araması
Arama sekmesine gidin, kutuya `trafik cezası sorgulama` yazın. Sonuçlar her harfte filtrelenir. Arama metni tamamlanınca sonraki adıma geçilir ve kullanıcı listeden **Araç Plakasına Yazılan Ceza Sorgulama** hizmetini seçer. Simülasyonda ayrı bir “Hizmeti Ara” düğmesi bulunmaz.

## Kendi sesinizi ekleme
Dosya adları `sounds/README.md` içinde listelenmiştir. Kendi MP3 kayıtlarınızı eklemek isteğe bağlıdır; kayıt yoksa tarayıcı seslendirmesi çalışır.

## Kaydırmasız düzen nasıl çalışıyor?
Bu kısım `js/app.js` dosyasının sonunda, "KAYDIRMASIZ DÜZEN" başlıklı bölümdedir.

1. `setView("card" | "phone")`: Dar ekranda talimat kartı ile telefonu sırayla gösterir. `<body data-view>` ve `data-state` (todo/done) niteliklerini CSS okur.
2. `fitCard()`: Talimat kartındaki yazı sığmıyorsa `--cfs` değişkenini 24 px'ten 19 px'e (çok kısa ekranda 18 px) kadar azaltır.
3. `fitPhone()`: Telefon ekranını ölçer ve sığmıyorsa sırayla şunları yapar:
   - `compact`: `class="opt"` olan süs bölümleri (Hızlı Erişim, Duyurular, kartlar) gizlenir, boşluklar daralır.
   - `compact2`: Arama sonuçları 3 satıra iner.
   - Son olarak içerik ölçeklenir (en fazla %65'e kadar).
4. Bir bölümün sığmazsa gizlenebilir olması için HTML'ine `class="opt"` ekleyin.
5. Görseller sonradan yüklendiği için `load` olayında telefon yeniden ölçülür.

Yerleşim kuralları `css/style.css` dosyasının "DİJİTAL ADIM – YERLEŞİM" bölümündedir.

## Yazı ve ses kuralları (`js/data.js`)
- Her adımda başlık, açıklama, ipucu, yazılacak örnek ve "Bunu bilmek iyi olur" bilgisi vardır. Hepsi 4-5 satırı geçmeyecek kadar kısadır.
- `OK`: Doğru dokunuştan sonra gösterilen yumuşak cümleler. `WO`: Yanlış dokunuşta ilk söylenen yumuşak cümleler.
- `MESAJ` ve `W`: Yanlış dokunulan yerin ne işe yaradığını anlatan kısa cümleler ve hangi öğenin hangi cümleyi kullandığı.
- `SES_METIN`: Her ses dosyasının adı ve okunacak metni. `sounds/README.md` bu listeden hazırlanmıştır.

## Ses sırası (`js/app.js`, "SESLİ ANLATIM" bölümü)
- `playFiles([...])`: Verilen kayıtları sırayla çalar. Dosya yoksa atlar; yalnızca "Dinle" düğmesinde yedek olarak tarayıcı sesi kullanılır.
- `sesGeri([...])`: Başarı, hata ve tebrik seslerini çalar; üstteki Ses düğmesi kapalıysa çalmaz.
