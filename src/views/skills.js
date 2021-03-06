import React from "react";
import {
  Col,
  Row
} from "reactstrap";
import ProductOwnerSkillsWidget from "../widgets/productOwnerSkillsWidget";
import SoftwareDevelopmentSkillsWidget from "../widgets/softwareDevelopmentSkillsWidget";
import EducationWidget from "../widgets/educationWidget";

const Skills = (props) => {
  return (
    <div id="skills" className="content" >
      <div className="view">
        <Row>
          <Col lg="12" md="12" sm="12" className="card-holder" >
            <ProductOwnerSkillsWidget />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12" className="card-holder" >
          <SoftwareDevelopmentSkillsWidget />
          </Col>
        </Row>
        <EducationWidget />
      </div>
    </div>
  )
}

export default Skills;

