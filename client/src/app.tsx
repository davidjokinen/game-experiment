import '../public/index.html';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Welcome from './components/welcome';
import Stats from './components/stats';
import { UserData, CreateNewUserData } from './game/userdata';


const userData : UserData = CreateNewUserData('Player Name');

ReactDOM.render(<div>
    <Welcome firstName='This is a test'/>
    <Stats {...userData} />
  </div>, document.getElementById('root'));
