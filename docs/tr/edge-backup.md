---
title: Eski Edge'de yedekleme
stub: edge-backup
lang: en
ver: 1
---

1. Kimlik Doğrulayıcı'yı açın, sağ tıklayın ve "Öğeyi İncele" yi seçin

![step1](/assets/edge-backup-screenshots/step1.PNG)

2. Yeni pencerenin üst kısmındaki "Konsol" sekmesine gidin
3. Bunu konsola yapıştırın ve enter tuşuna basın

```javascript
browser.storage.local.get(d=>console.log(JSON.stringify(d,null,2)))
```

![step3](/assets/edge-backup-screenshots/step3.PNG)

4. Sonucu not defterine kopyala

![step4](/assets/edge-backup-screenshots/step4.PNG)

5. `.json` ile biten bir dosya olarak kaydedin

![step5](/assets/edge-backup-screenshots/step5.PNG)