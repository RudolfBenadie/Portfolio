import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table
} from "reactstrap";

const EducationWidget = (props) => {
  return (
    <>
      <Row>
        <Col lg="6" md="6" sm="12" className="card-holder" >
          <Card className="granite" >
            <CardHeader>
              <p className="card-header-text" >Microsoft, ​MCID: ​9877234</p>
            </CardHeader>
            <CardBody>
              <h5>Microsoft Certification - ​Johannesburg</h5>
              <ul>
                <li className="data" >Microsoft Certified Solutions Associate: September 26, 2016</li>
                <li className="data" >Microsoft Certified Solutions Developer(Inactive): December 20, 2013</li>
                <li className="data" >Microsoft Certified Specialist: March 18, 2013</li>
                <li className="data" >Microsoft Specialist: March 18, 2013</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col className="card-holder">
          <Card className="granite">
            <CardHeader>
              <p className="card-header-text" >UNISA, ​2005</p>
            </CardHeader>
            <CardBody>
              <h5>Higher Certificate in Datametrics - ​Pretoria</h5>
              <ul>
                <li className="data" >Majored in Computer Science</li>
                <li className="data" >Minored in Mathematics</li>
                <li className="data" >Minored in Statistics</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="6" sm="12" className="card-holder" >
          <Card className="granite" >
            <CardHeader>
              <p className="card-header-text" >Secondary School</p>
            </CardHeader>
            <CardBody>
              <h5>Agricultural High School Kuschke - ​Pietersburg</h5>
              <ul>
                <li className="data" >Afrikaans - First language</li>
                <li className="data" >English - Second language</li>
                <li className="data" >Mathematics</li>
                <li className="data" >Science (Physics and Chemistry)</li>
                <li className="data" >Biology</li>
                <li className="data" >Agricultural Sciences</li>
                <li className="data" >Computer Science</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EducationWidget;

