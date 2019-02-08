import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './pages/FetchData';
import { FetchDataHooks } from './pages/FetchDataHooks';
import { Counter } from './pages/Counter';
import { CounterHooks } from './pages/CounterHooks';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/counter-hooks' component={CounterHooks} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/fetch-data-hooks' component={FetchDataHooks} />
      </Layout>
    );
  }
}
