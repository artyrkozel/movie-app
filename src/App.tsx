import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import styles from './App.module.scss';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {Releases} from "./components/newRelease/NewRelease";
import {Search} from "./components/sezrch/Search";

function App() {
  return (
      <div className={styles.app}>
          <Header />
          <Search />
          <Nav />
              <div className={styles.appWrapperContent}>
                  <Route path='/main' render={() => <Releases/>}/>
                  <Route path='/trending' render={() => <div>trending</div>}/>
                  <Route path='/soon' render={() => <div>soon</div>}/>
                  <Route path='/favorite' render={() => <div>favorite</div>}/>
              </div>

      </div>

  );
}

export default App;
