---
title: 标准备份格式开发者信息
stub: otp-backup-developer
canonical_url: 'https://authenticator.cc/docs/zh_CN/otp-backup-developer/'
lang: zh_CN
ver: 1
---

备份是包含每行一个otpauth URI的文本文件。有关otpauth URI的文档可以参见[这里](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)。比如，一个备份文件可能是这样的：

```
otpauth://totp/example.com?secret=FLIQ7AABIXF2DBUYE7VYAV2T7232KVYB
otpauth://totp/Test%20Account:?secret=R6TTJ5T26NWTHPIPXAOYQ6BVWEBLE6W2&issuer=Test%20Account
otpauth://totp/Another%20Test%20Account:example.com?secret=5W6HHVETUEPLR26KRQOPHTR6Q4JYRVJQ&issuer=Another%20Test%20Account
otpauth://totp/?secret=AFKVXHTAZZQKCHI3XSZPX5NKQRFXL3AD
otpauth://totp/Account%20with%20Period:example.com?secret=LJL6765YQRQQ533ACSI6YUXTLZYY7GBI&issuer=Account%20with%20Period&period=60
```

提示：

- 请注意issuer和account name中不能包含冒号（`:`或`%3A`）
- 保存文件为`text/plain`

如果你的应用可以导入或者导出这种格式，请在[此处](https://github.com/Authenticator-Extension/authenticator.cc/issues/new)填写表单，我们会将其添加到[这个列表](otp-backup)中。
