import * as React from 'react';

import { Title } from '@mantine/core';

interface WelcomeProps {
  firstName: string;
  middleName?: string;
  lastName?: string;
}

export default function Welcome(props: WelcomeProps) {
  return <Title>Hello, {props.firstName}</Title>;
}