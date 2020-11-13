import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap"

const EmploymenyHistory = (props) => {
  return (
    <div id="employment-history" className="content" >
      <div className="view">
        <Row>
          <Col lg="6" md="6" sm="12" className="card-holder" >
            <Card className="granite" >
              <CardHeader>
                <p className="card-header-text" >Unemployed, ​Jul 2019 - current</p>
              </CardHeader>
              <CardBody>
                <h5>Poole, UK</h5>
                <ul>
                  <li className="data" >Private projects and research in cloud based development</li>
                  <li className="data" >GCP - Firebase, Firestore, Auth, Functions (GraphQL server as GCPFunction).</li>
                  <li className="data" >Document data storage</li>
                  <li className="data" >Oracle cloud: set up and configure Blynk server for IoT</li>
                  <li className="data" >GraphQL-Firestore</li>
                  <li className="data" >Implement Apollo GraphQL datasource for Google Firestore</li>
                  <li className="data" >Open source NPM package and Git repository for apollo-datasource-firebase</li>
                  <li className="data" >Mobile development with React Native</li>
                  <li className="data" >AR with ViroMedia</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12" className="card-holder" >
            <Card className="granite" >
              <CardHeader>
                <p className="card-header-text" >Product owner, ​Aug 2017 - Jul 2019</p>
              </CardHeader>
              <CardBody>
                <h5>IRESS - ​Johannesburg</h5>
                <ul>
                  <li className="data" >Owned and prioritized product backlog</li>
                  <li className="data" >Collaborated with clients from concept through final delivery of product or service</li>
                  <li className="data" >Managed the implementation of new features by outlining plans and specifications such as how, where and when each piece would work</li>
                  <li className="data" >Focused on building critical features up front in order to identify constraints and technical challenges</li>
                  <li className="data" >Provided continued maintenance and development of bug fixes and patch sets for existing applications</li>
                  <li className="data" >Diagnose and troubleshoot Windows processing problems and applied solutions to increase company efficiency</li>
                  <li className="data" >Implemented company policies, technical procedures and standards for preserving the integrity and security of data, reports and access</li>
                  <li className="data" >Recommended architectural improvements, design solutions and integration solutions</li>
                  <li className="data" >Attended and facilitated Agile ceremonies with delivery team</li>
                  <li className="data" >Present sprint reviews and product demos</li>
                  <li className="data" >Collaborate with the delivery team regarding technology and implementation strategies</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="card-holder" >
            <Card className="granite" >
              <CardHeader>
                <p className="card-header-text" >Snr Software Developer, ​Apr 2007 - Jul 2017</p>
              </CardHeader>
              <CardBody>
                <h5>IRESS - ​Johannesburg</h5>
                <ul>
                  <li className="data" >Reviewed user requirements, analyzed, designed, implemented, installed and delivered training for new applications</li>
                  <li className="data" >Collaborated with end users to ensure proper delivery of business features</li>
                  <li className="data" >Developed databases, programs and processes for integration and implementation of the system</li>
                  <li className="data" >Met with management to provide detailed project reports and milestone updates</li>
                  <li className="data" >Delivered solutions for Securities Lending and Borrowing management systems to provide businesses with detailed recordkeeping and smooth operations</li>
                  <li className="data" >Designed and documented systems based on the results of analysis</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12" className="card-holder" >
            <Card className="granite" >
              <CardHeader>
                <p className="card-header-text" >Statistical Analyst, ​Jan 2006 - Aug 2006</p>
              </CardHeader>
              <CardBody>
                <h5>Statistics South Africa Head Office - ​Pretoria</h5>
                <ul>
                  <li className="data" >Acquired data from primary or secondary data sources</li>
                  <li className="data" >Analyze and interpret statistical data to identify trends and relationships</li>
                  <li className="data" >Evaluated reliability of source information by weighing raw data</li>
                  <li className="data" >Filtered data by reviewing computer reports, printouts and performance indicators</li>
                  <li className="data" >Developed software applications for statistical modeling and graphic analysis</li>
                  <li className="data" >Investigation of non-responses, checking company status: dormant, liquidated, change of name or address (tracing correct contact details), reclassification of industry and refusals</li>
                  <li className="data" >Reporting on daily progress</li>
                  <li className="data" >Organize trips to do interviews with respondents, and then do the visits to collect or complete the questionnaires with respondents</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="card-holder" >
            <Card className="granite" >
              <CardHeader>
                <p className="card-header-text" >Ass Statistical Officer - Tourism, ​Jul 2004 - Dec 2005</p>
              </CardHeader>
              <CardBody>
                <h5>Statistics South Africa Head Office - ​Pretoria</h5>
                <ul>
                  <li className="data" >Collection of data from respondents by telephone, post or visitation</li>
                  <li className="data" >Capturing data for use is statistical analysis</li>
                  <li className="data" >Verified data integrity and accuracy</li>
                  <li className="data" >Performed initial client assessment and analysis to begin research process</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" >Assistant Statistical Officer - Agriculture, ​Nov 2003 - Jun 2004</p>
              </CardHeader>
              <CardBody>
                <h5>Statistics South Africa Head Office - ​Pretoria</h5>
                <ul>
                  <li className="data" >Collection of data from respondents by telephone, post or visitation</li>
                  <li className="data" >Capturing data for use is statistical analysis</li>
                  <li className="data" >Verified data integrity and accuracy</li>
                  <li className="data" >Performed initial client assessment and analysis to begin research process</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" >Assistant Statistical Officer - Mortality, ​Apr 2003 - Oct 2003</p>
              </CardHeader>
              <CardBody>
                <h5>Statistics South Africa Head Office - ​Pretoria</h5>
                <ul>
                  <li className="data" >ICD 10 Coding of Death Certificates</li>
                  <li className="data" >Collection of data from respondents by telephone, post or visitation</li>
                  <li className="data" >Capturing data for use is statistical analysis</li>
                  <li className="data" >Verified data integrity and accuracy</li>
                  <li className="data" >Performed initial client assessment and analysis to begin research process</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" >Event Staff (Contract), ​May 2002 - Mar 2003</p>
              </CardHeader>
              <CardBody>
                <h5>Lodge Security Pty (Ltd) - ​Johannesburg</h5>
                <ul>
                  <li className="data" >Prepare and set up facilities to prepare for events</li>
                  <li className="data" >Performed post-event tasks such as breaking down areas, removing trash and cleaning facilities</li>
                  <li className="data" >Access and crowd control, accomplishing all assigned tasks with efficiency and accuracy</li>
                  <li className="data" >Oversee general security of the premises and visitors at all times</li>
                  <li className="data" >Patrol and safeguard perimeter and premises during non-business hours</li>
                  <li className="data" >Ensure general safety of visitors and exhibitors</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" >Courier Driver ​Oct 2001 - Apr 2002</p>
              </CardHeader>
              <CardBody>
                <h5>SPX Courier services - ​Pretoria</h5>
                <ul>
                  <li className="data" >Planning route for delivery and collections</li>
                  <li className="data" >Timely delivery and collection of parcels and packages</li>
                  <li className="data" >Liaise with clients and suppliers</li>
                  <li className="data" >Write documents for and liaise with air freight companies</li>
                  <li className="data" >Ensure vehicle is good running order</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" >Bartender, ​May 2001 - Sep 2001</p>
              </CardHeader>
              <CardBody>
                <h5>Hoop &amp; Grapes - ​Greater London</h5>
                <ul>
                  <li className="data" >Maintained accurate cash drawer of $1000 per shift</li>
                  <li className="data" >Took customer orders and capitalized on opportunities to sell special beverage and food options</li>
                  <li className="data" >Checked customers' identification to confirm legal drinking age</li>
                  <li className="data" >Set up glassware, liquor and other necessary supplies for special events</li>
                  <li className="data" >Consulted with managers to organize special events and promotions such as trivia nights to bring in new customers</li>
                  <li className="data" >Checked ID cards and verified bar guests were of legal age</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" ></p>
              </CardHeader>
              <CardBody>
                <h5></h5>
                <ul>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" ></p>
              </CardHeader>
              <CardBody>
                <h5></h5>
                <ul>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" ></p>
              </CardHeader>
              <CardBody>
                <h5></h5>
                <ul>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" ></p>
              </CardHeader>
              <CardBody>
                <h5></h5>
                <ul>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" ></p>
              </CardHeader>
              <CardBody>
                <h5></h5>
                <ul>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-holder">
            <Card className="granite">
              <CardHeader>
                <p className="card-header-text" ></p>
              </CardHeader>
              <CardBody>
                <h5></h5>
                <ul>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                  <li className="data" ></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default EmploymenyHistory;

