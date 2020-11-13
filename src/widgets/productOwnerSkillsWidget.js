import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table
} from "reactstrap";

const ProductOwnerSkillsWidget = (props) => {
  return (
    <Card className="granite" >
      <CardHeader>
        <p className="card-header-text" >Product Owner</p>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <tr>
            <td className="data" >
              <ul>
                <li>Agile</li>
                <li>Scrum</li>
                <li>Kanban</li>
                <li>Agile ceremonies</li>
                <li>Backlog management</li>
                <li>Prioritization of backlog</li>
                <li>JIRA</li>
              </ul>
            </td>
            <td className="data" >
              <ul>
                <li>End user requirement analysis</li>
                <li>Story refinement and capturing</li>
                <li>Technical specifications creation</li>
                <li>System analysis</li>
                <li>Microservices</li>
                <li>DDD</li>
              </ul>
            </td>
            <td className="data" >
              <ul>
                <li>End user liaison</li>
                <li>Oral and written communication</li>
                <li>Project documentation</li>
                <li>Hardware documentation</li>
                <li>New employee mentoring</li>
                <li>Problem Resolution</li>
              </ul>
            </td>
          </tr>
        </Table>
      </CardBody>
    </Card>
  )
}

export default ProductOwnerSkillsWidget;

