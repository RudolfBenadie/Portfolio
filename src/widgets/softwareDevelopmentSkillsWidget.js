import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table
} from "reactstrap";

const SoftwareDevelopmentSkillsWidget = (props) => {
  return (
    <Card className="granite" >
      <CardHeader>
        <p className="card-header-text" >Software Development</p>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <tr>
            <td className="data" >
              <ul>
                <li>Delphi-Pascal</li>
                <li>C#/.Net/.Net Core</li>
                <li>Javascript/NodeJS</li>
                <li>HTML &amp; CSS/SCSS</li>
                <li>Python</li>
                <li>GitHub/GIT/TFS</li>
                <li>MSSQL</li>
              </ul>
            </td>
            <td className="data" >
              <ul>
                <li>GraphQL</li>
                <li>React/Redux/Bootstrap</li>
                <li>React Native</li>
                <li>GCP/Firebase</li>
                <li>AWS</li>
                <li>Oracle Cloud</li>
              </ul>
            </td>
            <td className="data" >
              <ul>
                <li>Desktop development</li>
                <li>Web development</li>
                <li>Powershell scripting</li>
                <li>Containerisation</li>
                <li>CI/CD: Jenkins</li>
                <li>VR/AR beginner(Expo,ViroMedia)</li>
              </ul>
            </td>
          </tr>
        </Table>
      </CardBody>
    </Card>
  )
}

export default SoftwareDevelopmentSkillsWidget;

