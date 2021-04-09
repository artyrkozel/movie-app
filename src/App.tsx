import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import styles from './App.module.scss';
import { Details } from './components/details/details'
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {Releases} from "./components/newRelease/NewRelease";
import {Result} from "./components/result/Result";
import {Search} from "./components/search/Search";


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
                  <Route path='/details/:id?' render={() => <Details /> }/>
                  <Route path='/result/' render={() => <Result /> }/>
                  <Redirect from="/main" to="/result" />
              </div>

      </div>

  );
}

export default App;
