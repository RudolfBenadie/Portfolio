import React from "react";
import { 
  Card,
  CardBody, 
  CardHeader 
} from "reactstrap";

const TitleWidget = (props) => {
  return (
    <Card>
      <CardHeader>
        <h2>Name</h2>
      </CardHeader>
      <CardBody>
        <p>Rudolf Johannes Benadie</p>
      </CardBody>
    </Card>
  )
}

export default TitleWidget;

