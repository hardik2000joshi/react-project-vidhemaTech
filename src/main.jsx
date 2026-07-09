import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App";
import {Abc} from './App';
import {Message } from './App';
import Student from './student';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // App()
    <div>
       <App />
       <Message />
       <Abc />
       <Student />
    </div>
   
  // </StrictMode>,
)

