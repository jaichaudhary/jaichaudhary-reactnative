To run Android build run the following commands in the root directory:

```sh
1. yarn
2. npx react-native run-android
```

To run app on iOS Simulator run the following commands in the root directory:

```sh
1. yarn
2. cd ios && pod install
3. npx react-native run-ios
```

To build Android APK, run the following commands in the root directory

```sh
1. yarn
2. mkdir -p android/app/src/main/assets
3. npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
4. cd android && ./gradlew assembleDebug
```

APK will be available at android/app/build/outputs/apk/

### DEMO
