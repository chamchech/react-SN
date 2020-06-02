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
import {addPost, updateNewPostText} from "./Redux/state";

// funtion App
const App = (props) => {


    // qui retourne toujour UNE div
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
          {/*<Route path="/profile" component={Profile}/>*/}{/*pour afficher le lien exact url onutilise le exact path=*/}
          {/*<Route path="/dialogs" component={Dialogs}/>*/} {/*/dialogs/spam/blabla*/}
          <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}/>
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>

  );
}

export default App;
