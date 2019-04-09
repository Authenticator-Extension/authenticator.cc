---
title: 策略配置
stub: policy-config
canonical_url: 'https://authenticator.cc/docs/zh_CN/policy-config/'
lang: zh_CN
ver: 1
---

此页面只针对管理员。支持的设置参见[schema-chrome.json](https://github.com/Authenticator-Extension/Authenticator/blob/release/schema-chrome.json)。更多信息请参见下面的信息。如有新的策略控制需求，请在Issues中填写表单。

#### 扩展ID

Chrome: `bhghoamapcdpbohphigoooaddinpkbai`

Firefox: `authenticator@mymindstorm`

## Firefox

文档：[部署](https://support.mozilla.org/en-US/kb/deploying-firefox-with-extensions)，[配置](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#Managed_storage_manifests)

示例：
```jsonc
{
  "name": "authenticator@mymindstorm",
  "description": "ignored",
  "type": "storage",
  "data":
  {
    // Your settings here
  }
}
```
## Chrome

文档：[部署](https://support.google.com/chrome/a/answer/6306504)，[配置](https://chromium.org/administrators/configuring-policy-for-extensions)

Chrome中策略的格式在不同操作系统中有所不同，下面是一个可以在Linux环境中正常工作的示例：
```jsonc
{
  "3rdparty": {
    "extensions": {
      "bhghoamapcdpbohphigoooaddinpkbai": {
        // Your settings here
      }
    }
  }
}
```