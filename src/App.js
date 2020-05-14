import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";


// funtion App
const App = () => {
  // qui retourne toujour UNE div
  return (
      <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
          <Route path="/profile" component={Profile}/>{/*pour afficher le lien exact url onutilise le exact path=*/}
          <Route path="/dialogs" component={Dialogs}/> {/*/dialogs/spam/blabla*/}
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
