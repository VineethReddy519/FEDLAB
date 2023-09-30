import React, { Component } from "react";

class ArrayofObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdata: [
        { sid:1, sname: "Vineeth", sadd: "Kollipara" },
        { sid:2, sname: "Lokesh", sadd: "Chennai" },
        { sid:3, sname: "Jagadesh", sadd: "Vijaywada" }
      ]
    };
  }

  render() {
    const { sdata } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>sid</th>
              <th>sname</th>
              <th>sadd</th>
            </tr>
          </thead>
          <tbody>
            {sdata.map((item) => (
              <tr key={item.sid}>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.sadd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArrayofObj;