import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  CardLink,
  Row
} from "reactstrap";
import linkedinIcon from "../assets/images/linkedin.svg";
import twitterIcon from "../assets/images/Twitter_Social_Icon_Rounded_Square_Color.svg";

const OnlinePresence = (props) => {
  return(
    <div id="online-presence" className="content" >
      <div className="view">
        <Row>
          <Col>
            <Card>
              <CardHeader>
              <p className="card-header-text" >Social media</p>
              </CardHeader>
              <CardBody>
                <CardLink href="www.linkedin.com/in/rudolf-benadie-47a85a80">
                  <img className="social-media-icon" src={linkedinIcon} alt="Social media LinkedIn" target="blank" />
                </CardLink>
                <CardLink href="https://twitter.com/RudolfB">
                  <img className="social-media-icon" src={twitterIcon} alt="Social media Twitter" target="blank" />
                </CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default OnlinePresence;

