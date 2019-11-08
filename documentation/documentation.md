![ionBooking2](../resources/splash.png)

# ionBooking 2 - Ionic 4 Hotel Booking Theme

Ionic 4 Hotel Booking theme, truly focused in hotel reservation with Rent a Car and Tour Activities flow. Optmized to be performatic at any platform app (Android & iOS) and Web Apps (PWA).

## Changelog
* [https://ionictheme.com/ionbooking2-changelog](https://ionictheme.com/ionbooking2-changelog)

## Features
* 25+ Pages and Actions
* Truly focused in Hotels
* Optimized for Mobile platforms (Android & iOS) and PWA.
* Services/Mock Data and API sample
* Ionic 4 Components samples
* Built with Ionic 4, Angular 6
* Easy do change color theme with Sass/CSS vars
* @Angular Lazy load
* @Angular Animations
* @Angular Routing
* @AGM (Angular Google Maps)
* @NGX-Translate (i18n)
* @Angular/PWA

## Introduction

**First of all, I would like to thank you for purchasing ionBooking 2!** 

I invite you to go through this **documentation** that we have prepared especially for you. Head over to the **Starting Setup** section to guide you into **installing** and **knowing** **ionBooking 2** to your development environment. If you have further suggestions, inquiries, or just anything, you may reach me at: [**firminoata@gmail.com](mailto:firminoata@gmail.com).**

## Theme Structure

```
ionBooking2/
├─ e2e/
│  ├─ src/
│  │  ├─ app.e2e-spec.ts
│  │  └─ app.po.ts
│  ├─ protractor.conf.js
│  └─ tsconfig.e2e.json
├─ resources/
│  ├─ icon.png
│  └─ splash.png
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  └─ popmenu/
│  │  │  │  ├─ popmenu.component.html
│  │  │  │  ├─ popmenu.component.scss
│  │  │  │  ├─ popmenu.component.spec.ts
│  │  │  │  └─ popmenu.component.ts
│  │  ├─ interfaces/
│  │  │  │  └─ pages.ts
│  │  ├─ pages/
│  │  │  ├─ about/
│  │  │  ├─ activities/
│  │  │  ├─ activity-checkout/
│  │  │  ├─ activity-detail/
│  │  │  ├─ activity-list/
│  │  │  ├─ booking-list/
│  │  │  ├─ car-checkout/
│  │  │  ├─ car-detail/
│  │  │  ├─ car-list/
│  │  │  ├─ edit-profile/
│  │  │  ├─ extras/
│  │  │  │  ├─ authentication/
│  │  │  │  ├─ charts/
│  │  │  │  ├─ popupmenu/
│  │  │  │  ├─ post/
│  │  │  │  ├─ profile-one/
│  │  │  │  ├─ profile-two/
│  │  │  │  └─ timeline/
│  │  │  ├─ favorites/
│  │  │  ├─ home/
│  │  │  ├─ hotel-checkout/
│  │  │  ├─ hotel-detail/
│  │  │  ├─ hotel-list/
│  │  │  ├─ local-weather/
│  │  │  ├─ login/
│  │  │  ├─ message/
│  │  │  ├─ messages/
│  │  │  ├─ modal/
│  │  │  │  ├─ image/
│  │  │  │  └─ location/
│  │  │  ├─ register/
│  │  │  ├─ rentcar/
│  │  │  ├─ settings/
│  │  │  ├─ support/
│  │  │  └─ walkthrough/
│  │  ├─ providers/
│  │  │  ├─ activities/
│  │  │  ├─ cars/
│  │  │  ├─ hotel/
│  │  │  ├─ message/
│  │  │  ├─ translate/
│  │  │  ├─ weather/
│  │  │  └─ index.ts
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  └─ app.module.ts
│  ├─ assets/
│  │  ├─ i18n/
│  │  ├─ icon/
│  │  ├─ icons/
│  │  ├─ img/
│  │  └─ video/
│  ├─ environments/
│  ├─ theme/
│  ├─ global.scss
│  ├─ index.html
│  ├─ karma.conf.js
│  ├─ main.ts
│  ├─ manifest.json
│  ├─ pollyfills.ts
│  ├─ robots.txt
│  ├─ text.ts
│  ├─ tsconfig.app.json
│  └─ tsconfig.spec.json
├─ .editorconfig
├─ .esdoc.json
├─ .firebaserc
├─ .gitignore
├─ angular.json
├─ config.xml
├─ firebase.json
├─ ionic.config.json
├─ ngsw-config.json
├─ package.json
├─ tsconfig.json
└─ tslint.json
```

## Starting Setup

### Environment Setup

Before you can start building your **ionBooking 2**, you need to get everything setup on your computer first. If you have already installed Node.js along with **Ionic (ionic-cli 4+)** and **Cordova (7+)**, you may skip this step.

First you'll need to install **Node.js** on your machine. **Ionic** requires Node.js in order to run properly and even need it to install some packages that the project needs later on. Make sure the latest version of **[Node.js](https://beta.ionicframework.com/docs/faq/glossary#node)** and **[npm](https://beta.ionicframework.com/docs/faq/glossary#npm)** are installed. See **[Environment Setup](https://beta.ionicframework.com/docs/installation/environment)** for details. Install the Ionic CLI globally with npm:

After installing Node.js, you may now proceed with downloading Ionic and Cordova packages, by opening the terminal and calling the following npm command:

> `$ npm install -g ionic cordova typescript`

*Depending on your operating system (Linux or Mac) you might have to add **sudo** before the npm install.*

If you run into trouble installing **Ionic**, please update your **Node.js** to the latest version and try the following commands:

```
npm uninstall -g ionic
npm cache clean
```

Before attempting to install **Ionic** and **Cordova** again.


### Setting Up ionBooking 2

Now that you have installed **Ionic** and **Cordova**, it's time to start a configure and run your **ionBooking 2**.

unzip your **ionBooking 2** on your projetcs folder, Open the terminal acessing your unziped starter, and call the following command:

```
// sample folder...
cd ~/Projects/Ionic/ionBooking2/

$ npm install
```

This will install all the plugins and dependencies that is required by the app. Although all the packages are already installed, there are still some specific package and app configurations that you need to manually set - to hook the app to your own app.

Now, follow these bellow steps to run:

1. Run `$ ionic cordova resources` (optional) to generate all platforms icons and splash.

2. Run `$ ionic serve -l`, it will automatically generate a local **www** build and open this in your browser.

    2.1 Run `ionic serve -l -p *PORT Number*` for multiple Ionic projects at same time, Ex: `$ ionic serve -l -p 8210` 

If you would like to check which version and packages are installed or any dependencie issue that is denying to run, tip the command:

```
$ ionic doctor check
```

Ionic doctor will check anything wrong with your packages version and anything else more.

Although all of the required packages of the app are already installed by calling **npm install**, there are still some specific packages (cordova plugins) you need set by adding platform and preparing it - to hook the app to your own app.

### **For build PWA, follow these Steps:**

Run `ionic build --prod`, to generate and optimize all resources (Angular/PWA and Service Worker) for Web Apps. Test localhost your build running: `ng serve`.

To simulate as a localhost server! install globally running: `npm i -g http-server` and then, inside the **www** folder run: `$ http-server`.

### iOS Setup
* https://beta.ionicframework.com/docs/installation/ios

### Android Setup
* https://beta.ionicframework.com/docs/installation/android


## Deploying

### PWA (Firebase)

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDN's, HTTPS enabled by default, and support for HTTP2 push.

First, install the Firebase CLI:

```
$ npm install -g firebase-tools
```

> NOTE: before firebase init, backup! the **firebase.json** contained at this ionBooking2 project folder, after the init command has been executed, replace the firebase.json created by the backup. 

With the Firebase CLI installed run `firebase init` in the project. This will set generate a **firebase.json** config file and configure the app for deployment.

> firebase init will present a few question, including one about redirecting URLs to /index.html. Make sure to choose yes for this option, but no to overwriting your index.html. This will ensure that routing, hard reload, and deep linking work in the app.

The app can now be deployed by running

```
$ firebase deploy
```

After this completes the app will be live.

### Publishing to app store
* https://beta.ionicframework.com/docs/publishing/app-store

### Android Play Store
* https://beta.ionicframework.com/docs/publishing/play-store

### Electron Desktop App
* https://beta.ionicframework.com/docs/publishing/desktop-app


## Ionic Docs

### Ionic CLI Overview
* https://beta.ionicframework.com/docs/cli/overview

### Ionic 4 Components
* https://beta.ionicframework.com/docs/components

### Native APIs
* https://beta.ionicframework.com/docs/native

### API Reference
* https://beta.ionicframework.com/docs/api