import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Posts from './container/Posts/Posts';
import Fav from './container/Favmenu/favmenu';
import Comments from './container/Comments/Comments';
import Albums from './container/Albums/Albums';
import Users from './container/Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/posts"  component={Posts}/>
          <Route path="/comments"  component={Comments}/>
          <Route path="/albums" component={Albums} />
          <Route path="/users" render={()=><Users name='nikki'/>}/>
          <Route path="/fav"   component={Fav}/>
          <Route path="/" exact component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default App;
