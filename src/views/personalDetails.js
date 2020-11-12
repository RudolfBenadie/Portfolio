import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap"

const PersonalDetails = (props) => {
  return (
    <div id="personal-details" className="content" >
      <div className="view">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Personal data
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Residence
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PersonalDetails;

