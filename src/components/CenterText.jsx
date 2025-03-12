'use client';

import { Row, Col } from 'react-bootstrap';
import { Asterisk } from 'react-bootstrap-icons';
import GapSpacer from './GapSpacer';
import BottomButtons from './BottomButtons';
import OrderButton from './OrderButton';

const CenterText = () => (
  <Row id="centerText" className="align-items-center justify-content-center">
    <Col xs={8} className="text-center">
      <h1>Gyu-Kaku</h1>
      <h2>Japanese BBQ</h2>
      <Asterisk className="text-warning" />
      <BottomButtons />
      <GapSpacer />
      <OrderButton />
    </Col>
  </Row>
);

export default CenterText;
