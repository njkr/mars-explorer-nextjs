# Marsx Mint Lands App.
# land-marsx-io

Marsx mint app to mint players' lands.

## using ...
- ### React
- ### Javascript
- ### Tailwind

## To Run The project

In the project directory, you can run:

### `npm install`

### `npm start`


## CI/CD Deployment for React App

To deploy your React app using a CI/CD pipeline, follow these steps:

### Steps:

1. **Navigate to Your Project Directory**:
   ```bash
   cd /path/to/your/project
2. **Pull the Latest Code from Git**:
    ```bash
   git pull origin main
3. **Install Dependencies**:
    ```bash
   npm install
4. **Build the React App**:
    ```bash
   npm run build
    This will generate an optimized production version of your app, and the files will be output to a build folder (by default).
5. **Set the Correct Path for the Build Folder**:
    The production build will be placed in the build/ directory, which contains the static files (HTML, CSS, JS) that your server needs to serve.
6. **so in the server configuration file (for example nginx), you have to add this path as the root**:
    ```bash
   root /path/to/your/project/build

# SonarQube Code Quality Analysis result....

[![Quality gate](https://sonarqube.marsx.io/api/project_badges/quality_gate?project=land_marsx_io&token=sqp_32d24c92c2ed053616091b788f8b925726d1c661)](https://sonarqube.marsx.io/dashboard?id=land_marsx_io)