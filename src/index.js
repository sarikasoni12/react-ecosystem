import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import {Provider} from 'react-redux';
import { store } from './store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = createRoot(document.getElementById("root"));
const persistor = persistStore(store);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate 
                loading={<div>loading</div>}
                persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>  
    </React.StrictMode>
);