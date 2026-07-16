import { createRoot } from 'react-dom/client'
import "./index.css";
import App, {Design} from "./App";
import {Abc} from './App';
import {Message } from './App';
import { GetStudent } from './components/Header';
import { Header } from './components/Header';
import ComponentClass from './components/Header';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // App()
    <div>
       <App />
       <Message />
       <Abc />
       <Header />
       <GetStudent />
       <ComponentClass />
       <Design />
    </div>
   
  // </StrictMode>,
)

