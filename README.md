# OP Hackathon code templates

To get started building, we provide some template source code which you can use as a starting point. This repository contains web and mobile clients that access OP's APIs. There are three applications:

- A Web Single-Page Application (SPA) built with Cycle.js
- An Android app built with React Native and Cycle.js
- An iOS app built with React Native and Cycle.js

The apps are simple, because the codebase is meant to be a template on which you can easily hack and get started experimenting with OP's APIs.

## Getting started

Download the repository:
```
git clone git@github.com:futurice/op-hackathon-templates.git
```

Make sure you have `npm` and Node.js v4 installed. If you don't have them yet installed, we recommend using [`nvm`](https://github.com/creationix/nvm).

Install necessary packages:
```
npm install
```

### Initial setup

Once you register to OP's Developer Portal, you can add a new "app" in order to get authentication keys to use the APIs.

**Create the file `src/apikey.js` and insert your "Consumer Key" found from the Developer Portal". Follow the template file given at `src/apikey.js.example`.**

### To run the Web SPA

Execute
```
npm run web
```

This will create a single JavaScript bundle file and open your default browser with the page shown. You might need to refresh that page.

### To run the Android app

You need to have the [latest JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and the Android SDK installed. For Mac, download it with `brew install android-sdk`, and for other operating systems, read [this](https://developer.android.com/sdk/installing/index.html). Read [these instructions](http://facebook.github.io/react-native/docs/android-setup.html#content) if your setup isn't working.

- Open an Android emulator
- Execute `npm run android`
- To reload the JavaScript, you need to open the app menu (using `F2` in the stock emulator)
- You might need to run the app in debug mode, in case you see errors

### To run the iOS app

You need a Mac OS X computer and [Xcode](https://developer.apple.com/xcode/downloads/) 6.3 or higher. It can be installed from the App Store. You might need to install also [watchman](https://facebook.github.io/watchman/docs/install.html), for instance with `brew install watchman`.

- Open `ios/OPMobileTemplate.xcodeproj` in Xcode and press "run" (arrow button).
- Press ⌘-R in your iOS simulator to reload the app after changing code.

