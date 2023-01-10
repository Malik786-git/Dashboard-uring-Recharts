import React from "react";
import { PieChart, Cell, Pie } from "recharts";

const dataPie = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 700 },
];
const COLORS = ["#45A321", "#CD4D4D", "#1976D2"];

const ChartPie = () => {
  return (
    <>
      <div className="col-6 mx-auto">
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
              <span>
                <i class="fa fa-stop chart-flied-icon1" aria-hidden="true"></i>{" "}
                Q Lenght
              </span>
              <span>
                <i class="fa fa-stop chart-flied-icon2" aria-hidden="true"></i>{" "}
                Balking
              </span>
              <span>
                <i class="fa fa-stop chart-flied-icon3" aria-hidden="true"></i>{" "}
                LWOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartPie;
