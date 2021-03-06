
# ZENDESK POC 

This repo is regard utilization of modules to connect and use ZENDESK Chat.

## Configuration

### IOS

To configure the IOS on RN >= 0.60

```bash
  pod install
```

### Android

-  android/build.gradle

```bash

allprojects {
    repositories {
    ...
    maven { url 'https://zendesk.jfrog.io/zendesk/repo' }
    ...
    }
}
```

-  android/app/build.gradle

```bash
dependencies {
    ...

    compile project(':react-native-zendesk-chat')
    
    ...
}
```


-  android/settings.gradle

```bash
...
include ':react-native-zendesk-chat'
project(':react-native-zendesk-chat').projectDir = new File(rootProject.projectDir,	'../node_modules/@zanechua/react-native-zendesk-chat/android')
include ':app' 
```
## Installation

```bash
  npm install 
  npm run ios / npm run android
```


## Initialization
[@zanechua/React-Native-zendesk-chat](https://www.npmjs.com/package/@zanechua/react-native-zendesk-chat)


```bash
import ZendeskChat from '@zanechua/react-native-zendesk-chat';
    
ZendeskChat.init('ACCOUNT_KEY');.
```

**Initialization**

Zendesk can be initiate by JS (No need native initialization) and can be call anywhere on the app (recomend on root to be available on all pages).

---



## Features

[Behaviour Cases](https://developer.zendesk.com/documentation/classic-web-widget-sdks/chat-sdk-v2/working-with-the-chat-sdk/chat-sdk-what-happens-when-all-agents-are-offline-away-or-busy-/)

Function  | Available Function | Available On
------------- | ------------- | -----------
Init Chat  | ✅ | Package
Start Chat  |  ✅ | Package
Using Providers | ❌ | SDK CHAT V2 - No stable Package
Push Notifications | ❌ | SDK CHAT V2 - No Stable Package

**Providers**

Providers are used to create rules based on informations about the configurations of the chat, such as agents, threads, attachments, rating, etc.

---

