// import { useState } from "react";
import React, { useState } from "react";
import "./FormCompStyle.css";
export const style = {
  table: {
    borderCollapse: "collapse"
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px"
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px"
    },
    inputs: {
      marginBottom: "5px",
      display: "block"
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      color: "#fff"
    }
  }
};

const FormComp = ({ data }) => {
  const [first, setFirst] = useState("coder");
  const [last, setLast] = useState("Byte");
  const [phone, setPhone] = useState(8885559999);
  const [val, setVal] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setVal({ ...val, first, last, phone });

    data({ ...val, first, last, phone });
    console.log("Data =>", val);
    setFirst("coder");
    setLast("Byte");
    setPhone(8885559999);
  };
  return (
    <form style={style.form.container} className="input_form">
      <div className="input">
        <label>First Name </label>
        <input
          type="text"
          style={style.form.inputs}
          name="firstName"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </div>
      <br />
      <div className="input">
        <label> Last Name </label>
        <input
          type="text"
          style={style.form.inputs}
          name="lastName"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
      </div>
      <br />

      <div className="input">
        <label> Phone Number </label>
        <input
          type="number"
          style={style.form.inputs}
          name="phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <br />
      <button
        type="submit"
        style={style.form.submitBtn}
        onClick={submitHandler}
      >
        Submit
      </button>
    </form>
  );
};
export default FormComp;
