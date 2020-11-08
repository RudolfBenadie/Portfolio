import React from "react";
import { Col, Row } from "reactstrap";
import TitleWidget from "../widgets/titleWidget";
import ContactDetailsWidget from "../widgets/contactDetailsWidget";

const Dashboard = (props) => {
  return (
    <div id="dashboard" className="content" >
      <div className="view">
        <Row>
          <Col lg="12" md="12" sm="12" >
            <TitleWidget />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6" lg="6">
            <ContactDetailsWidget />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard;

