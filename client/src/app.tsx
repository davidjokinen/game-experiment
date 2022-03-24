import '../public/index.html';
import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/welcome';
import Stats from './components/stats';
import { UserData, CreateNewUserData } from './game/userdata';

import { Avatar, Button, Grid, Group, MultiSelect, Navbar, UnstyledButton, Text, Title } from '@mantine/core';

const userData : UserData = CreateNewUserData('Player Name');

const data = [
  { value: 'work', label: 'Work' },
  { value: 'sleep', label: 'Sleep' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'learning', label: 'Learning' },
];

ReactDOM.render(<div>
    <Grid>
      <Grid.Col span={3}>
        <Navbar width={{ base: 300 }} >
          <Navbar.Section>
            <Title>Game Title</Title>
          </Navbar.Section>
          <Navbar.Section>
            <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
              <Group>
                {/* <Avatar size={40} color="blue">0</Avatar> */}
                <div>
                  <Text>Event Log</Text>
                  <Text size="xs" color="gray">Things happen</Text>
                </div>
              </Group>
            </UnstyledButton>
          </Navbar.Section>
          <Navbar.Section>
            <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
              <Group>
                {/* <Avatar size={40} color="blue">0</Avatar> */}
                <div>
                  <Text>Priorities</Text>
                  <Text size="xs" color="gray">Set goals</Text>
                </div>
              </Group>
            </UnstyledButton>
          </Navbar.Section>
          <Navbar.Section>
            <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
              <Group>
                {/* <Avatar size={40} color="blue">0</Avatar> */}
                <div>
                  <Text>Test one</Text>
                  <Text size="xs" color="gray">Set goals</Text>
                </div>
              </Group>
            </UnstyledButton>
          </Navbar.Section>
        </Navbar>
      </Grid.Col>
      <Grid.Col span={5}>
        <Welcome firstName='This is a test2'/>
        <Button>Hello there</Button>  
        <MultiSelect
          data={data}
          label="Actions to focus"
          placeholder=""
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Stats {...userData} />
      </Grid.Col>
    </Grid>
  </div>, document.getElementById('root'));
