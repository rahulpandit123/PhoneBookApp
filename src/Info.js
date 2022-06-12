// import React, { useState } from "react";
import "./FormCompStyle.css";
import { style } from "./FormComp";

const Info = (props) => {
  const sortedUsers = props.dat.sort((a, b) => a.last.localeCompare(b.last));

  return (
    <>
      <hr />
      <h2>Contact List </h2>
      <table style={style.table} className="form">
        <thead>
          <tr>
            <td style={style.tableCell}>First Name </td>
            <td style={style.tableCell}>Last Name </td>
            <td style={style.tableCell}>Phone Number </td>
          </tr>
        </thead>
        {sortedUsers.map((item, index) => {
          return (
            <tbody>
              <tr>
                <td style={style.tableCell}>{item.first} </td>
                <td style={style.tableCell}>{item.last} </td>
                <td style={style.tableCell}>{item.phone} </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
export default Info;
