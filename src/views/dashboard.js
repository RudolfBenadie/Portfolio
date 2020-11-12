import React from "react";
import { Col, Row } from "reactstrap";
import EmploymentStatus from "../widgets/employmentStatusWidget";
import CurrentLocationWidget from "../widgets/currentLocationWidget";

const Dashboard = (props) => {
  return (
    <div id="dashboard" className="content" >
      <div className="view">
        <Row>
          <Col lg="6" md="6" sm="12" >
            <EmploymentStatus />
          </Col>
          <Col lg="6" md="6" sm="12" >
            <CurrentLocationWidget />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard;

