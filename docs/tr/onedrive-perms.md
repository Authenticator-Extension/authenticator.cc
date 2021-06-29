---
title: OneDrive İzinleri
stub: onedrive-perms
lang: en
ver: 1
---

Kurumsal OneDrive hesapları "Kullanıcı dosyalarına tam erişim" iznini gerektirir. Normally, Authenticator would request "Have full access to the application's folder." This is due to Microsoft not implementing the more restrictive app folder permission for business accounts.

[Microsoft'a göre](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/concepts/special-folders-appfolder?view=odsp-graph-online#getting-authorization-from-the-user):

> To have your own app's folder, you must request either the Files.ReadWrite.AppFolder or Files.ReadWrite permission scope when getting an access token. For more details, see authentication. Kurumsal OneDrive hesaplarının şu anda Files.ReadWrite.AppFolder iznini desteklemediğini unutmayın.