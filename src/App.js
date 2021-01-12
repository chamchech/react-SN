import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


// function App
const App = (props) => {
    // qui retourne toujour UNE div
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
          {/*<Route path="/profile" component={Profile}/>*/}{/*pour afficher le lien exact url onutilise le exact path=*/}
          {/*<Route path="/dialogs" component={Dialogs}/>*/} {/*/dialogs/spam/blabla*/}
          <Route path='/profile/:userId?' render={() => <ProfileContainer/* store={props.store}*//>}/>
          <Route path="/dialogs" render={() => <DialogsContainer /*store={props.store}*//>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>

  );
}

export default App;
