import React from "react";
import {
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrentLocationWidget = (props) => {
  return (
    <Card className="granite" >
      <CardHeader>
        <p className="card-header-text" >Location</p>
      </CardHeader>
      <CardBody>
        <p><FontAwesomeIcon icon="map-marker-alt" /></p>
        <p>Poole (BH12)</p>
        <p>Dorset</p>
        <p>UK</p>
      </CardBody>
    </Card>
  )
}

export default CurrentLocationWidget;

