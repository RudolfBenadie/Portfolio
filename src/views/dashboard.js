import React from "react";
import { Col, Row } from "reactstrap";
import ContactDetails from "../widgets/contactDetailsWidget";

const Dashboard = (props) => {
  return (
    <div id="dashboard" className="content" >
      <div className="view">
        <Row>
          <Col sm="12" md="6" lg="6">
            <ContactDetails />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard;

