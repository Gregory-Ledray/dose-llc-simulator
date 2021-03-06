# Pill Despenser Simulator
I can probably create a virtual version of a pill dispenser. The main pro of this approach is that you can write tests for the server application which interact with the pill dispenser in complex ways and you'll be able to ensure the pill dispenser responds correctly in those situations.

## Pill Dispenser Behavior
* Include the current time at the top of the dispenser.
* Allow time travel via a control at the bottom of the page. Once you time travel, disable the automatic time incrementer.
* Include a battery indicator. Allow adjusting the battery status at the bottom of the page.
* Include a WiFi indicator. Allow the WiFi to be turned on / off with a control at the bottom of the page.
* Two buttons at the bottom of the Pill Dispenser screen allow you to navigate backwards or forwards.
* The screens show dispense times and clicking Back / Next lets you move between them. There should be three dispense times: 8am, 12pm, and 6pm. Each dispense time takes up half the available screen space so only 2 fit on the screen at once.
* If you can't navigate backwards or forwards on a particular screen, disable the button which allows for that navigation.
* If the time is 10 minutes prior to the time to dispense, display a "Dispense" button. Once clicked, show an alert, "Dispense Slot 1" or "Dispense Slot 2" depending on the appropriate pill. When clicked, return to the screen showing the pills which need to be taken. If there are multiple slots to dispense, show them one after another.
* If the time is after when the pill was supposed to be taken but the dispense button was never clicked, show the dispense button. This should happen frequently if the app is re-initialized and you time-travel to a time past when the pill was supposed to be dispensed.

## Server Code
There must have a server application or something else which can help you interact with the pill dispenser. I assume the server application must:
* Have a screen where you can view a patient's pills they need to take, the dosage amounts, and the frequency of the pills. For instance, "John Doe" may have 3 prescriptions. One is dispensed every day at 1pm and 3pm. The other is dispensed every other day at 6am and 6pm. The final pill is dispensed once a week on Monday. This information should have a read-only view and an Edit view, and you should be able to remove dispense lines and delete the entire patient.
* Have a screen where you can view all pills which need to be dispensed for a given day, like Monday the 3rd of March.

## Want-To-Haves
* It would be nice if the application ran in AWS, and...
* It would be nice if the application was accessible at a human-readable website or subdomain while it is running in the cloud.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
