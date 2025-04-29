⏳ Day Counter - Count Up / Count Down Web Uygulaması

📋 Proje Açıklaması

Kullanıcının belirlediği bir etkinlik tarihine kalan süreyi (Count Down) veya o tarihten itibaren geçen süreyi (Count Up) gösteren modern, hızlı ve sade bir web uygulamasıdır. Tüm sayaçlar, tarayıcı kapatılsa bile localStorage sayesinde kaybolmaz.

⚙️ Nasıl Çalışır?

Etkinlik adını ve tarihini girin

Gelecek tarih için geri sayım, geçmiş tarih için ileri sayım başlar

Sayaçlar her saniye güncellenir

Sayaçlar tarayıcı belleğine kaydedilir

Sayaçlar silinebilir ve düzenlenebilir

🛠️ Kod Yapısı

index.html

Uygulamanın HTML yapısı

Bootstrap 5 ile responsive tasarım

js/app.js

Ana kontrol akışı ve sayaçların başlatılması

js/storage.js

Sayaçların localStorage'a kaydedilmesini ve alınmasını sağlar

js/time.js

Tarih hesaplamalarını (kalan/geçen süre) yapar

js/ui.js

Sayaç arayüzünü oluşturur ve günceller

📂 Klasör Yapısı


    DayCounterProject_Modified/

    ├──  index.html

    └──  js/

     ├── app.js

     ├── storage.js

     ├── time.js

     └── ui.js


🚀 Kurulum ve Kullanım

Bu projeyi bilgisayarınıza indirin veya GitHub'dan klonlayın:

git clone https://github.com/kullanici-adi/DayCounterProject_Modified.git

index.html dosyasını bir tarayıcıda açın.

Etkinlik adınızı ve tarihini girin – sayaç otomatik olarak oluşacaktır.

💡 Ek Bilgiler

Sunucu veya veritabanı gerekmez, tamamen tarayıcıda çalışır

Sade, hızlı ve kullanıcı dostu

Bootstrap sayesinde mobil uyumlu

🕓 Günlerin değerini bilmek isteyenler için mükemmel bir araç.
Keyifli kullanımlar dileriz!
