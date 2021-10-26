---
title: Export and Import Backups
stub: quickstart
lang: en
ver: 1
---

This guide explains how to export backups from Authenticator Extension and import previous backups to Authenticator Extension.

## Prerequisites

Install Authenticator Extension ([Chrome](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/auth-helper/), [Edge](https://microsoftedge.microsoft.com/addons/detail/ocglkepbibnalbgmbachknglpdipeoio))

When you first install Authenticator Extension in Chrome, you should pin its icon to the toolbar.

![pin to toolbar](/assets/quickstart/pin-to-toolbar.png)

## Export backup file to local machine

![backup menu](/assets/quickstart/backup-menu1.png)

Go to **Settings -> Backup** menu, click **Download Backup File** or **Download Password-Protected Backup** button to export backup file to your local machine.

If you haven't set a password in **Security** menu, **Download Password-Protected Backup** button will be hidden.

Unencrupted backup file uses standardized backup format with every OTP URL per line, and you can import it to other OTP clients. See [Standard Backup Format](https://authenticator.cc/docs/en/otp-backup) to learn more.

> If you have Steam or Blizzard accounts, unencrupted backup file will not use standardized backup format.

> Stongly recommend to always export password-protected backup for security reason.

## Export backup file to 3rd party storage services

Authenticator extension supports to export backup files to Google Drive, OneDrive and Dropbox automatically. To enabled cloud storage backup, click the service button to link to your cloud storage service account.

![backup menu](/assets/quickstart/backup-menu2.png)

> You may wait for a few seconds before the service login page shows.

You can see your linked cloud account in cloud backup page. There is also manual backup button to make a backup immediately.

![cloud backup](/assets/quickstart/cloud-backup.png)

## Import backup files

To import backup files to Authenticator extension, open **Backup** menu and click **Import Backup** button.

![backup menu](/assets/quickstart/backup-menu1.png)

In the new page, you will see three options: **Import Backup File**, **Import QR Image Backup** and **Import Text Backup**.

![import backup](/assets/quickstart/import-backup.png)

To choose which way to import the backup depends on your backup format.

1. `authenticator.json` or `authenticator.txt`. If your backup file is plain text with `.json` or `.txt` file extension, use **Import Backup File**. You may be asked to enter a password if the backup is encrpted.
   > The file name may be different if you changed it when you export the backup file or you use cloud backup.
   >
   > If you exported the backup file by clicking **Download Backup File** or **Download Password-Protected Backup** button, look for your backup in your local machine.
   >
   > If you setup cloud backup, look for your backup in your cloud account, Authenticator uses **Authenticator Backups**. Backup file is named by **yyyymmdd.json** with the generation date.

2. QR images. If you have a screenshot of QR images, use **Import QR Image Backup**. You can select mutiple images to export mutiple accounts at one time.
   > You can also import Google Authenticator accounts. Tap on the three dots in the upper right-hand corner of the screen. Tap on Transfer Accounts. Tap on Export Accounts. Verify your identity. Choose the account information you wish to transfer from the list. Tap on Next. Take a screenshot to save the QR image \(iPhone\), or take a picture with another phone/camera \(Android\). Then use **Import QR Image Backup** to import the accounts.
   >
   > Google Authenticator app supports to export up to 10 accounts at one time. However, 5 accounts to export one time is recommend. Or you may meet issues to import to Authenticator extension.

3. If you saved your backup with a string instead of a file, or you get some OTP URLs from other OTP clients, use **Import Text Backup**.