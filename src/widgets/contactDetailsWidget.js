import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Table
} from "reactstrap";

const ContactDetails = (props) => {
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
              <td className="label">Name:</td><td className="data">Rudolf Johannes Benadie</td>
            </tr>
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
      {/* <div>
          <p><span className="label">Name:</span><span className="data">Rudolf Johannes Benadie</span></p>
          <p><span className="label">Address:</span><span className="data">36A Northmere road</span></p>
          <p><span className="label"></span><span className="data">Poole</span></p>
          <p><span className="label"></span><span className="data">BH12 4DY</span></p>
          <p><span className="label">Mobile:</span><span className="data">+44 78 578 29084</span></p>
          <p><span className="label">Email:</span><span className="data">rudolf.benadie@outlook.com</span></p>
        </div> */}
      </CardBody>
    </Card >
  )
}

export default ContactDetails;

