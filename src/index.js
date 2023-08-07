import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/*
padding
not overlay
take in the right
*/

const appContainer = document.createElement('div')
//document.body.style.display = "flex";
//appContainer.style.width = "100vw";
//appContainer.classList.add("w-2/5","lg:w-2/5","xl:w-2/6","2xl:w-1/4")
document.body.appendChild(appContainer)
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(appContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);