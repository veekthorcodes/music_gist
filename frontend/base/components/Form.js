import React from "react";
import styles from "@/styles/Form.module.css";

function Form({ handleSubmit, handleInputChage }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <div>
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="performers">Perfomers</label>
          <input
            type="text"
            name="performers"
            id="performers"
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            name="venue"
            id="venue"
            onChange={handleInputChage}
          />
        </div>{" "}
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            onChange={handleInputChage}
          />
        </div>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleInputChage}
        />
      </div>
      <input type="submit" value="Add Event" className="btn" />
    </form>
  );
}

export default Form;
