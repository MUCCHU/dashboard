import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#EAF2FE', '#FFBB28', '#FF8042'];

export default class ExamplePieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  constructor(props) {
    super(props);
    // Initialize state with data from props
    this.state = {
      data: [
        { name: 'Group A', value: Number(props.score) },
        { name: 'Group B', value: 15 - Number(props.score) },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    // Update state if props.score changes
    if (prevProps.score !== this.props.score) {
      this.setState({
        data: [
          { name: 'Group A', value: Number(this.props.score) },
          { name: 'Group B', value: 15 - Number(this.props.score) },
        ],
      });
    }
  }

  render() {
    const { data } = this.state; // Use data from state
    return (
      <PieChart width={200} height={300}>
        <Pie
          data={data}
          cx={"50%"}
          cy={"50%"}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
