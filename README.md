### Group project completed with teammates at Brainstation:


### Frontend Functionality Summary:

- **React Routing**: Utilization of `react-router-dom` for handling navigation within the application, including routes for listing, adding, editing, and deleting warehouses and inventory items.

- **Component-Based Architecture**: Development using React components to build a modular and maintainable user interface. Key components include:
  - `Header` and `Footer` for consistent layout across pages.
  - `WarehouseList` and `InventoryListItems` for displaying lists of warehouses and their inventory items.
  - `AddInventory` and `AddWarehouse` for forms to add new inventory items and warehouses.
  - `EditWarehouse` and `EditInventoryItem` for editing existing warehouse and inventory details.
  - `DeleteInventory` and `DeleteWarehouse` for handling the deletion of inventory items and warehouses.
  - `ItemDetails` for detailed view of individual inventory items.

- **State Management**: Use of React's `useState` for local state management within components to handle form inputs, validation, and UI state.

- **API Integration**: Performing asynchronous operations with `axios` to interact with the backend for CRUD operations on warehouses and inventory items.

- **Dynamic Form Handling**:
  - Dynamic forms in `AddInventory` and `EditInventoryItem` that respond to user input and validation feedback.
  - Conditional rendering based on inventory status to show different input fields (e.g., hiding the quantity input when the item is out of stock).

- **Navigation and User Feedback**:
  - Use of `useNavigate` from `react-router-dom` to programmatically navigate users after actions such as form submission.
  - Implementing feedback mechanisms like alerts and error messages to enhance user interaction and error handling.

- **Custom Form Field Component**:
  - Reusable `FormField` component to standardize the form inputs across different forms, improving consistency and reducing code duplication.

- **Styling**:
  - Application of SCSS for styling, using separate style sheets for different components to keep styles modular and manageable.
  - Responsive design considerations to ensure the application is usable on different devices.

- **Validation and Error Handling**:
  - Frontend validation to ensure all required fields are filled and formats are correct before submission.
  - Error handling to display meaningful error messages based on the API response or validation results.

- **Environmental Configuration**:
  - Use of environment variables for managing API URLs and other configuration settings, enhancing security and flexibility in deployment.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
