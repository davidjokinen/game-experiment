import * as React from 'react';
import { UserData } from '../../game/userdata';

import './index.css';



export default function Stats(props: UserData) {

  // const [money, setMoney] = React.useState(props.money);

  // const addMoreMoney = () => {
  //   setMoney(money + 10);
  // }

  return <div>
    Name: {props.name} <br/>
    Age: {props.age} <br/>
    Money: {props.money} <br/>
    Mood: {props.mood} <br/>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Need</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>energy</td>
          <td>{props.needs.energy}</td>
        </tr>
        <tr>
          <td>food</td>
          <td>{props.needs.food}</td>
        </tr>
        <tr>
          <td>fun</td>
          <td>{props.needs.fun}</td>
        </tr>
      </tbody>
    </table>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Stats</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>str</td>
          <td>{props.stats.str}</td>
        </tr>
        <tr>
          <td>dex</td>
          <td>{props.stats.dex}</td>
        </tr>
        <tr>
          <td>con</td>
          <td>{props.stats.con}</td>
        </tr>
        <tr>
          <td>wis</td>
          <td>{props.stats.wis}</td>
        </tr>
        <tr>
          <td>chr</td>
          <td>{props.stats.chr}</td>
        </tr>
      </tbody>
    </table>
  </div>;
}