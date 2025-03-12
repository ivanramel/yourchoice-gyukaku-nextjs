'use client';

import { Container, Button } from 'react-bootstrap';

const BottomButtons = () => (
  <>
    <Container className="pt-4 pb-4">
      <Button variant="light" className="three-btns">MAKE A RESERVATION</Button>
      <Button variant="light" className="three-btns">ORDER NOW</Button>
    </Container>
    <Container>
      <Button variant="light" className="three-btns">DOWNLOAD GYU-KAKU APP</Button>
    </Container>
  </>
);

export default BottomButtons;
