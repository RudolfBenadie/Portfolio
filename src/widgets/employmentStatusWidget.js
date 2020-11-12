import React from "react";
import{
  Card,
  CardBody,
  CardHeader
} from "reactstrap"

const EmploymentStatus = (props) => {
  return (
    <Card className="employment-status granite">
      <CardHeader>
        <p className="card-header-text" >Employment status</p>
      </CardHeader>
      <CardBody className="unemployed">
        <p className="font-weight-bold">UNEMPLOYED</p>
        <p className="smaller-font">Available Immediately</p>
      </CardBody>
    </Card>
  )
}

export default EmploymentStatus;

