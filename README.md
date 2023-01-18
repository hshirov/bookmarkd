# Bookmarkd
A React Native book tracking app using Google's Books API.

## Description
The app allows users to search for books and add them to a list of their choice (Want To Read, Reading or Finished). Book results are fetched from the Google Books API. Saved books are only persisted on the user's device.

## Screens
### Home
<img src="https://user-images.githubusercontent.com/47268844/213294761-4e11ef0e-2010-40bf-ae40-e238ec4c6620.png" width=300>
Shows currently reading books (if any) and random books from 3 different genres.

### Explore
<img src="https://user-images.githubusercontent.com/47268844/213296504-85a43cee-da7a-4183-8f16-2382962ce4e5.png" width=300>
Allows users to search for books by name or author. Tap on a book items opens the details screen.

### Profile
<img src="https://user-images.githubusercontent.com/47268844/213297937-f1b205ea-c279-42d2-bd5a-f813978790c7.png" width=300>
Shows all the user's lists and a settings option. Currently, the settings allow for toggling between light and dark mode.


## Development Setup
1. Make sure you have the latest stable version of npm. To get the latest version run `npm install -g npm@latest`.
2. Make sure you have the latest stable version of node. You can download the latest stable version from <https://nodejs.org/en/download/>.
3. Setup ESLint for your IDE. Rules can be found in `.eslintrc.json`
4. Setup Prettier for your IDE. Rules can be found in `.prettierrc.json`
5. Setup EditorConfig for your IDE. Rules can be found in `.editorconfig.json`
