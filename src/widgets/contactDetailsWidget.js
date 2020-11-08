import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Table
} from "reactstrap";

const ContactDetailsWidget = (props) => {
  return (
    <Card className="widget granite smaller-font">
      <CardHeader>
        <Container fluid>
          <h2>Contact details</h2>
        </Container>
      </CardHeader>
      <CardBody className="no-padding" >
        <Table hover responsive size="sm" >
          <tbody>
            <tr>
              <td className="label">Address:</td><td className="data">36A Northmere Road</td>
            </tr>
            <tr>
              <td className="label"></td><td className="data">Poole</td>
            </tr>
            <tr>
              <td className="label"></td><td className="data">BH12 4DY</td>
            </tr>
          <tr>
            <td className="label">Mobile:</td><td className="data">+44 78 5782 9084</td>
          </tr>
          <tr>
            <td className="label">Email:</td><td className="data">rudolf.benadie@outlook.com</td>
          </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card >
  )
}

export default ContactDetailsWidget;

