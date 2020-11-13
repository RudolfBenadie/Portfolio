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
import githubIcon from "../assets/images/GitHub-Mark-64px.png";

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
                <CardLink href="https://www.linkedin.com/in/rudolf-benadie-47a85a80" target="blank" >
                  <img className="social-media-icon" src={linkedinIcon} alt="Social media LinkedIn"/>
                </CardLink>
                <CardLink href="https://twitter.com/RudolfB"  target="blank">
                  <img className="social-media-icon" src={twitterIcon} alt="Social media Twitter" />
                </CardLink>
                <CardLink href="https://github.com/RudolfBenadie" target="blank" >
                  <img className="social-media-icon" src={githubIcon} alt="Social media GitHub"/>
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

