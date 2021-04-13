import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import styles from './App.module.scss';
import { Details } from './components/details/details'
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {Releases} from "./components/newRelease/NewRelease";
import {Result} from "./components/result/Result";
import {Search} from "./components/search/Search";
import {Watchlist} from "./components/watchlist/Watchlist"
import {Trending} from "./components/trending/Trending";
import {Rated} from "./components/topRated/Rated";

function App() {
  return (
      <div className={styles.app}>
          <Header />
          <Search />
          <Nav />
              <div className={styles.appWrapperContent}>
                  <Route exact path="/">
                      <Redirect to="/main" />
                  </Route>
                  <Route path='/main/:page?' render={() => <Releases/>}/>
                  <Route path='/trending' render={() => <Trending />}/>
                  <Route path='/rated' render={() => <Rated />}/>
                  <Route path='/details/:id?' render={() => <Details /> }/>
                  <Route path='/result/' render={() => <Result /> }/>
                  <Route path='/watchlist/' render={() => <Watchlist /> }/>
              </div>

      </div>

  );
}

export default App;
