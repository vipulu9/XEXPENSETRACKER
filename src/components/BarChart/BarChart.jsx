/* eslint-disable react/prop-types */
//import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    
    ResponsiveContainer,
  } from "recharts";
  import styles from "./BarChart.module.css";
  
  export default function BarChartComponent({ data }) {
    return (
      <div className={styles.expenseChart}>
        <h2>Top Expenses</h2>
  
        <div className={styles.barWrapper}>
          {data?.length ? (
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={data} layout="vertical">
                <XAxis type="number" axisLine={false} display="none" />
                <YAxis
                  type="category"
                  width={100}
                  dataKey="name"
                  axisLine={false}
                />
                <Bar dataKey="value" fill="#8884d8" barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "280px",
              }}
            >
              No transactions!
            </div>
          )}
        </div>
      </div>
    );
  }