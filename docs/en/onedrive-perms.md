---
title: Edge Privacy Policy
stub: edge-privacy
layout: no-sidebar
lang: en
ver: 1
---

Business OneDrive accounts require the "Have full access to user files" permission. Normally, Authenticator would request "Have full access to the application's folder." This is due to Microsoft not implementing the more restrictive app folder permission for business accounts. 

[According to Microsoft](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/concepts/special-folders-appfolder?view=odsp-graph-online#getting-authorization-from-the-user):

> To have your own app's folder, you must request either the Files.ReadWrite.AppFolder or Files.ReadWrite permission scope when getting an access token. For more details, see authentication. Note, Business OneDrive accounts do not currently support the Files.ReadWrite.AppFolder permission.