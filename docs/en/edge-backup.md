---
title: Backing up in Edge
stub: edge-backup
canonical_url: 'https://authenticator.cc/docs/en/edge-backup/'
lang: en
ver: 1
---

1. Open Authenticator, right click, and choose "Inspect Element"

![step1](/assets/edge-backup-screenshots/step1.PNG)

2. Go to the "Console" tab at the top of the new window
3. Paste this into the console and hit enter
```javascript
browser.storage.local.get(d=>console.log(JSON.stringify(d,null,2)))
```

![step3](/assets/edge-backup-screenshots/step3.PNG)

4. Copy the result to notepad

![step4](/assets/edge-backup-screenshots/step4.PNG)

5. Save as a file ending in `.json`

![step5](/assets/edge-backup-screenshots/step5.PNG)
