import React from 'react';
import { Button } from 'react-bootstrap';

const App = () => {
  const handleClick = () => console.log('you tapped to Button');
  return (
    <Button>Click me</Button>
  );
};

export default App;
