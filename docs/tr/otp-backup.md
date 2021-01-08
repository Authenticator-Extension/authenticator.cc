---
title: Standard Backup Format
stub: otp-backup
lang: en
ver: 1
---

Some 2FA applications support interoperable backups. In other words, if you make a backup with an application listed below, you can use that backup with any other application on this list.

| Uygulama                                                | Sürüm   | Notes                                |
| ------------------------------------------------------- | ------- | ------------------------------------ |
| [Kimlik Doğrulayıcı Uzantısı](https://authenticator.cc) | v5.3.0+ | Encrypted backups not supported      |
| [FreeOTP+](https://github.com/helloworld1/FreeOTPPlus)  | 1.3+    |                                      |
| [Aegis](https://getaegis.app/)                          | v1.2+   | Import only, use "Plain text" option | {: .table .table-striped} 

Planned Support:

- [Gnome Authenticator](https://gitlab.gnome.org/World/Authenticator)

[Developer information](otp-backup-developer)