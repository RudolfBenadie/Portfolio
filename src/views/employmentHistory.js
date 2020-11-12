import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap"

const EmploymenyHistory = (props) => {
  return (
    <div id="employment-history" className="content" >
      <div className="view">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Unemployed
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
                IRESS
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

export default EmploymenyHistory;

