<table>
        <tr>
            <td><img width="20" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/archive.svg" alt="archived" /></td>
            <td><strong>Archived Repository</strong><br />
            This code is no longer maintained. Feel free to fork it, but use it at your own risks.
        </td>
        </tr>
</table>

# Admin-on-rest GraphQL Demo

This is a demo of the [admin-on-rest](https://github.com/marmelab/admin-on-rest) library for React.js. It creates a working administration for a fake poster shop named Posters Galore. You can test it online at http://marmelab.com/admin-on-rest-graphql-demo.

Admin-on-rest usually requires a REST server to provide data. In this demo however, a GraphQL endoint is simulated by the browser (using [apollographql/graphql-tools](https://github.com/apollographql/graphql-tools)). You can see the source data in [public/data.js](https://github.com/marmelab/admin-on-rest-graphql-demo/tree/master/public/data.js).

To explore the source code, start with [src/index.js](https://github.com/marmelab/admin-on-rest-graphql-demo/blob/master/src/index.js).

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Deploy the build to GitHub gh-pages.
