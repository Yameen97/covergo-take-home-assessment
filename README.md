Project Title: 
Multi Step Form

Description: 
First page is Start page with Start button and description. User can click on the start button and form would start and show second page. In second page we have name, age, user country name and user selected package according to country currency. Each country is representing particular currency which is selected by user. User can see which package is selected and what is outputs on second page below the inputs. User can also go back to page 2. Each country is displaying its own currency so that the user can view premium calculations in the appropriate currency. HKD representing Hong Kong Dollar, AUD representing Australian Dollar and USD is USA dollar. User can choose any package and calculation will show on screen. First package is Standard Package, Safe is 50% more than standard and Super safe is 75% of Standard. Formula for premium package is 10*Age. The premium will be adjusted appropriately depending on the rate 10 * Age * Rate for the chosen nation. Premium will be change and show on screen according to user selected. Error page is created for Age condition.
•	When the customer clicks the Next button and his age is greater than 100, we direct him to Page Error.
•	On Error page user can go back to main or first page
•	If not, the user can revert or move on to the next page.
Final or Last Page will show User Summary Name, Age, where he/ she live and package which was selected according to given formula and condition with Country currency.
Approach
We use React JS and Vanilla CSS. With Simple JavaScript was very messy and lengthy we can easily manage with useState hook of React JS. We can easily manage state with hooks in React JS. React code is easier to maintain and is flexible due to its modular structure.

Dependencies
React JS 17.0.2, Vanilla CSS

Browsers
Chrome, Safari and FireFox




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
