import React from 'react';
import { UserData } from '../../game/userdata';

import './index.css';

import { Table } from '@mantine/core';
import { Accordion } from '@mantine/core';

export default function Stats(props: UserData) {

  // const [money, setMoney] = React.useState(props.money);

  // const addMoreMoney = () => {
  //   setMoney(money + 10);
  // }

  return <div>
    <Accordion initialItem={0} iconPosition="right">
      <Accordion.Item label="Current Sim">
        Name: {props.name} <br/>
        Age: {props.age} <br/>
        Money: {props.money} <br/>
        Mood: {props.mood} <br/>
      </Accordion.Item>
    </Accordion>
    <Accordion initialItem={0} iconPosition="right">
      <Accordion.Item label="Needs">
        <Table>
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
        </Table>
      </Accordion.Item>
    </Accordion>
    <Accordion initialItem={0} iconPosition="right">
      <Accordion.Item label="Stats">
        <Table>
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
        </Table>
      </Accordion.Item>
    </Accordion>
    
    
    
  </div>;
}