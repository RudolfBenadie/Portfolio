import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container
} from "reactstrap";

const WidgetOne = (props) => {
  return (
    <Card className="widget granite smaller-font">
      <CardHeader>
        <Container fluid>
          <h2>Widget</h2>
        </Container>
      </CardHeader>
      <CardBody className="no-padding" >
      </CardBody>
    </Card>
  )
}

export default WidgetOne;

