import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap"

const Skills = (props) => {
  return (
    <div id="skills" className="content" >
      <div className="view">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Product Owner
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
                Developer
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

export default Skills;

