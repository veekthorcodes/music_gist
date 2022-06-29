import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";
import Form from "@/components/Form";
import { API_URL } from "@/config/index";

function EditEventPage({ event }) {
  const router = useRouter();
  const [values, setValues] = useState({
    name: event.name,
    performers: event.performers,
    venue: event.venue,
    address: event.address,
    date: event.date,
    time: event.time,
    description: event.description,
    slug: event.slug
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

    const res = await fetch(`${API_URL}/api/events/${values.slug}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const event = await res.json();

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      toast.success("Event updated successfully");
      router.push(`/events/${event.slug}`);
    }
  };

  return (
    <Layout title="Edit Event">
      <Link href={"/events"}>
        <a>{"<"} Go back</a>
      </Link>
      <ToastContainer />
      <h1>Edit Event</h1>
      <Form
        handleInputChage={handleInputChange}
        handleSubmit={handleSubmit}
        btnTitle={"Update Event"}
        values={values}
      />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`${API_URL}/api/events/${params.slug}/`);
  const event = await res.json();
  console.log(event)
  return {
    props: {
      event,
    },
  };
}

export default EditEventPage;
