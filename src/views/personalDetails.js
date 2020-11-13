import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table
} from "reactstrap"

const PersonalDetails = (props) => {

  return (
    <div id="personal-details" className="content" >
      <div className="view">
        <Row>
          <Col className="card-holder">
            <Card className="granite" >
              <CardHeader>
              <p className="card-header-text" >Personal data</p>
              </CardHeader>
              <CardBody>
                <Table responsive hover size="sm">
                  <tbody>
                    <tr>
                      <td className="label" >Name</td>
                      <td className="data" >Rudolf Johannes Benadie</td>
                    </tr>
                    <tr>
                      <td className="label" >Date of birth</td>
                      <td className="data" >9 May 1970</td>
                    </tr>
                    <tr>
                      <td className="label" >Age</td>
                      <td className="data" >{new Date().getFullYear() - 1970}</td>
                    </tr>
                    <tr>
                      <td className="label" >Gender</td>
                      <td className="data" >Male</td>
                    </tr>
                    <tr>
                      <td className="label" >Place of birth</td>
                      <td className="data" >Messina, South Africa</td>
                    </tr>
                    <tr>
                      <td className="label" >Country of residence</td>
                      <td className="data" >UK</td>
                    </tr>
                    <tr>
                      <td className="label" >Drivers licence</td>
                      <td className="data" >Yes (South Africa)</td>
                    </tr>
                    <tr>
                      <td className="label" >Elegibility to work</td>
                      <td className="data" >Spousal visa</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="granite">
              <CardHeader>
              <p className="card-header-text" >Residence</p>
              </CardHeader>
              <CardBody>
                <address>36a Northmere Road</address>
                <address>Parkstone</address>
                <address>Poole</address>
                <address>BH124DY</address>
                <address>UK</address>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PersonalDetails;

