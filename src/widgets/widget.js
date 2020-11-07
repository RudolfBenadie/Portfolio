import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container
} from "reactstrap";

const WidgetOne = (props) => {
  return (
    <Card className="widget granite smaller-font">
      <CardHeader>
        <Container fluid>
          <h2>Widget</h2>
        </Container>
      </CardHeader>
      <CardBody className="no-padding" >
        {/* <ResponsiveContainer width={470} height="100%">
          <BarChart data={practiceMonthlyRevenueStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={`${previousYear}`} className="series1" />
            <Bar dataKey={`${currentYear}`} className="series2" />
          </BarChart>
        </ResponsiveContainer> */}
      </CardBody>
    </Card>
  )
}

export default WidgetOne;

