# iFridge-It

A mobile companion app to the Fridge-It website, for keeping track of the items in your own fridge.

## Introduction

iFridge-It is a personal companion app to the Fridge-It website built by Team TADA, whose demo is available here:

https://github.com/TEAM-TADA/Fridge-It

As a mobile app, iFridge-It gets rid of the extra overhead by only keeping track of the items in your fridge and not others.  It is fully synced with the website so any changes you make in one location will appear on the other.

## Demo Screenshots
![alt text](https://i.imgur.com/Q3bUXLb.png "Fridge Screen")
![alt text](https://i.imgur.com/t2AEVTI.png "Add Item Screen")
![alt text](https://i.imgur.com/HoYDrqn.png "Category List")

## Usage
This is a demo application, and this repo contains only the react-native code for the mobile front-end.  The back-end server code is available from the team who built the original parent site here:

https://github.com/TEAM-TADA/Fridge-It

For instructions on how to run the app locally with an iPhone simulator, please see below.

## Local Installation

### Requirements
This application requires node and npm to install all other dependencies including: 
- React/Redux
- React-Native and other React-Native dependencies
- Firebase

This application uses the same Firebase login credentials as the companion website in order to sync them together.  If you are just interested in demoing the app, the Firebase credentials used can be different.

In addition, this project uses React-Native and so will require XCode and the accompanying iPhone simulator to run the demo project.

### Installation
First fork a copy of this repo, then clone/download your forked copy or this repo by copying the link from github.  If cloning make a local copy using:

```
git clone <git link here>
```

Once dowloaded, navigate to the directory in a terminal window and run:

```
npm install
```

You can now run a demo version of the application on an iPhone simulator by using the following command:

```
react-native run-ios
```

Make sure the back-end server is running as well.  See above for link to the server repo if you are running your own back-end.

### Configuration
This project utilizes the react-native-dotenv package to have a .env file for holding secure API information for Firebase authentication.  Please see the README for the parent website repo on more information about setting up Firebase.  You will need to have the following fields in a .env file at the root level of your project files:

```
FB_API_KEY=[...]
FB_AUTH_DOMAIN=[...]
FB_DATABASE_URL=[...]
FB_PROJECT_ID=[...]
FB_STORAGE_BUCKET=[...]
FB_SENDER_ID=[...]
```

## Credits

This project was built by team Not-Kosher as part of the software engineering immersive program at Hack Reactor LA.

### Team Members

- Tyler Vander Maas - tvmaasjazz@gmail.com
- Lillian Anderson - lilliananderson@ucla.edu
- Philip Marazita - pmarazita@gmail.com

## Contact

Inquiries can be made to any of the team members' emails lsited above.