Day Counter - Count Up / Count Down Web Uygulaması

📋 Proje Açıklaması

Bu proje, kullanıcıların bir etkinlik tarihi belirleyerek o etkinliğe kalan süreyi (Count Down) veya geçmiş bir etkinliğin üzerinden geçen süreyi (Count Up) görmesini sağlayan basit bir web uygulamasıdır. Tüm veriler tarayıcının localStorage alanında saklanır.

⚙ Nasıl Çalışır?

Kullanıcı bir etkinlik adı ve tarih seçer.

Etkinlik tarihi gelecekteyse geri sayım (Count Down) başlar.

Etkinlik tarihi geçmişteyse ileri sayım (Count Up) başlar.

Sayaçlar her saniye otomatik güncellenir.

Sayaçlar tarayıcı kapansa bile kaybolmaz.

Sayaçlar silinebilir veya düzenlenebilir.

🛠 Kod Yapısı

index.html

Web sayfasının çatısı.

Bootstrap ile responsive bir tasarım kullanıldı.

js/app.js

Uygulamanın ana kontrol noktaları.

Sayfa yüklendiğinde kayıtlı sayaçları çeker ve ekranda gösterir.

js/storage.js

Sayaçları localStorage'a kaydetme ve çağırma işlemlerini yapar.

js/time.js

Belirtilen tarihe kalan veya geçen süre hesaplamasını yapar.

js/ui.js

Sayaç kartlarını oluşturur.

Sayaçların güncellenmesini ve ekranda gösterilmesini sağlar.

📂 Klasör Yapısı

DayCounterProject_Modified/
├── index.html
├── .vscode/
│   └── settings.json
└── js/
    ├── app.js
    ├── storage.js
    ├── time.js
    └── ui.js

🚀 Kurulum ve Kullanım

Bu projeyi bilgisayarınıza indirin veya GitHub'dan klonlayın:

git clone https://github.com/kullanici-adi/DayCounterProject_Modified.git

index.html dosyasını bir tarayıcıda açarak kullanmaya başlayın.

Etkinlik adınızı ve tarihini girin. Sayaç otomatik olarak oluşacaktır.

📢 Notlar

Uygulama sadece tarayıcı ortamında çalışır.

Sunucuya veya backend koduna ihtiyaç duymaz.

Bootstrap kullanılarak temel tasarım iyileştirilmeleri yapılmıştır.

Bu proje, basit bir zaman takibi ihtiyacını pratik bir şekilde karşılamak için tasarlanmıştır.
Keyifli kullanımlar!
