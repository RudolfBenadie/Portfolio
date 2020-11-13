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
      <p className="card-header-text" >Name</p>
      </CardHeader>
      <CardBody>
        <p>Rudolf Johannes Benadie</p>
      </CardBody>
    </Card>
  )
}

export default TitleWidget;

