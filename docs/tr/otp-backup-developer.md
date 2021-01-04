---
title: Standard Backup Format Developer Info
stub: otp-backup-developer
lang: en
ver: 1
---

Backups are just text files with one otpauth URI per line. Otpauth URI'lerine ilişkin belgelere [buradan](https://github.com/google/google-authenticator/wiki/Key-Uri-Format) ulaşılabilir. For example, a backup could look like this:

    otpauth://totp/example.com?secret=FLIQ7AABIXF2DBUYE7VYAV2T7232KVYB
    otpauth://totp/Test%20Account:?secret=R6TTJ5T26NWTHPIPXAOYQ6BVWEBLE6W2&issuer=Test%20Account
    otpauth://totp/Another%20Test%20Account:example.com?secret=5W6HHVETUEPLR26KRQOPHTR6Q4JYRVJQ&issuer=Another%20Test%20Account
    otpauth://totp/?secret=AFKVXHTAZZQKCHI3XSZPX5NKQRFXL3AD
    otpauth://totp/Account%20with%20Period:example.com?secret=LJL6765YQRQQ533ACSI6YUXTLZYY7GBI&issuer=Account%20with%20Period&period=60
    

İpuçları:

- Yayınlayan kuruluş ve hesap adının iki nokta üst üste içeremeyeceğini unutmayın (`:` veya `%3A`) 
- Dosyayı `düz metin` olarak kaydedin

If your application can import and export backups in this format please [raise an issue](https://github.com/Authenticator-Extension/authenticator.cc/issues/new) so we can put you on [the list](otp-backup).