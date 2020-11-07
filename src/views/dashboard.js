import React from "react";
import { Col, Row } from "reactstrap";
import WidgetOne from "../widgets/widget";

const Dashboard = (props) => {
  return (
    <div id="dashboard" className="content" >
      <div className="view">
        <Row>
          <Col md="12" lg="12">
            <WidgetOne />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard;

