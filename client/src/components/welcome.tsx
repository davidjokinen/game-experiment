import * as React from 'react';

interface WelcomeProps {
  firstName: string;
  middleName?: string;
  lastName?: string;
}

export default function Welcome(props: WelcomeProps) {
  return <h1>Hello, {props.firstName}</h1>;
}