import React from "react";
import styles from "@/styles/Form.module.css";

function Form({ handleSubmit, handleInputChage, btnTitle, values }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <div>
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="performers">Perfomers</label>
          <input
            type="text"
            name="performers"
            id="performers"
            value={values.performers}
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            name="venue"
            id="venue"
            value={values.venue}
            onChange={handleInputChage}
          />
        </div>{" "}
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={values.date}
            onChange={handleInputChage}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            value={values.time}
            onChange={handleInputChage}
          />
        </div>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={values.description}
          onChange={handleInputChage}
        />
      </div>
      <input type="submit" value={btnTitle} className="btn" />
    </form>
  );
}

export default Form;
