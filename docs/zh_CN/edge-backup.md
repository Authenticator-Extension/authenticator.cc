---
title: 在Edge中备份
stub: edge-backup
canonical_url: 'https://authenticator.cc/docs/zh_CN/edge-backup/'
lang: zh_CN
ver: 1
---

1. 打开身份验证器，点击右键选择“审查元素”

![step1](/assets/edge-backup-screenshots/step1.PNG)

2. 在新窗口中打开“控制台”标签
3. 向控制台中粘贴以下代码，然后按回车键运行
```javascript
browser.storage.local.get(d=>console.log(JSON.stringify(d,null,2)))
```

![step3](/assets/edge-backup-screenshots/step3.PNG)

4. 将结果复制到记事本中

![step4](/assets/edge-backup-screenshots/step4.PNG)

5. 以`.json`为后缀名保存文件

![step5](/assets/edge-backup-screenshots/step5.PNG)
