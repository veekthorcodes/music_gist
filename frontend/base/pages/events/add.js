import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";
import Form from "@/components/Form";
import { API_URL } from "@/config/index";

function AddEventPage() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(values).some((value) => value === "");

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
      return;
    }

    const res = await fetch(`${API_URL}/api/events/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const event = await res.json()
    
    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      toast.success("Event added successfully");
      router.push(`/events/${event.slug}`);
    }
  };

  return (
    <Layout title="Add New Event">
      <Link href={"/events"}>
        <a>{"<"} Go back</a>
      </Link>
      <ToastContainer />
      <h1>Add Event</h1>
      <Form handleInputChage={handleInputChange} handleSubmit={handleSubmit} />
    </Layout>
  );
}

export default AddEventPage;
