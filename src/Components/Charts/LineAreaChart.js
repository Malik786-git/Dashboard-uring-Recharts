import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 2000,
    pv: 8800,
    amt: 2290,
  },
  {
    name: "3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "7",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "8",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "9",
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: "10",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function LineAreaChart() {
  return (
    <>
        <div className="col-6 mx-auto">
          <div className="main-chart-container mx-auto">
            <h5 className="ms-2">WEEKLY TRENDS</h5>

            <div style={{ width: "100%", height: "80%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid height={10} strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#1976D2"
                    fill="#1C61A9"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* <div className="col-6 mx-auto">
          <div className="main-chart-container mx-auto">
            <h5 className="ms-2">AVG. LWOS AND BALKING FOR Q LENGTH</h5>
            <div className="chart-nav">
              <div class="btn-group me-2">
                <button
                  class="btn chart-nav-btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Based on past 6 month
                </button>
                <ul class="dropdown-menu">
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
            <div
              style={{ width: "100%", height: "80%" }}
              className="d-flex align-items-center justify-content-center"
            >
              <PieChart width={300} height={300}>
                <Pie
                  data={dataPie}
                  cx={100}
                  cy={150}
                  innerRadius={80}
                  outerRadius={100}
                  fill="#8884d8"
                  stroke="0"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      dataKey={entry.name}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="chart-field">
                <span><i class="fa fa-stop chart-flied-icon1" aria-hidden="true"></i> Q Lenght</span>
                <span><i class="fa fa-stop chart-flied-icon2" aria-hidden="true"></i> Balking</span>
                <span><i class="fa fa-stop chart-flied-icon3" aria-hidden="true"></i> LWOS</span>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default LineAreaChart;
