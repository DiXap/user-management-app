# User Management App

The main focus of this project was to practice React development. And it consists of a minimal
CRUD to manage Users.

## Project structure
Project follows typical directories/files organization for a React application. Such as:
```zsh
.
├── README.md
├── eslint.config.js
├── index.html
├── notes.md
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Toolbar.jsx
│   │   ├── UserAddButton.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserForm.jsx
│   │   └── UserList.jsx
│   ├── contexts
│   │   └── UserContext.jsx
│   ├── data
│   │   └── mock-data.js
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```
> [!NOTE]  
> Some notes that were taken during development process can be found 
> inside the `notes.md` file.

## Project requirements - setting up your environment
Since it's a simple React app we just need to make sure to have `node` and `npm` on its long-term 
support (LTS) version (preferably). Specifically, project run on:
  - `node` 22.13.1
  - `npm` 10.9.2
  > So make sure to have those or posterior versions

You can check you current installation by executing the following:
```zsh
node --version
npm --version
```
If either of them throws an error or doesn't output anything at all, then you can get the installer 
for node's LTS version [here](https://nodejs.org/es).

> [!TIP]  
> Both `npm` and `node` will be installed alongside each other, though I encourage 
> you to explore other alternatives such as [bun](https://bun.sh)

## Launching project
Once you made sure to have your environment ready, then you need to open a terminal inside the 
root directory to:
  1. Install dependencies:
```zsh
npm install
```
  2. Run project:
```zsh
npm run dev
```
Then, open your preferred browser on the URL that the prompt shows to use the app.

## Acknowledgments
Special thanks to all my instructors, none of this would be possible without their hard work.
