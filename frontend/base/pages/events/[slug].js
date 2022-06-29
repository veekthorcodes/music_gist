import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

function EventPage({ event }) {
  const router = useRouter();

  const deleteEvent = async (e) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/api/events/${event.id}/delete/`, {
        method: "delete",
      });

      if (!res.ok) {
        toast.error("Something went wrong");
      } else {
        toast.success("Event deleted");
      }
    }

    router.push("/");
  };

  return (
    <Layout>
      <ToastContainer />
      <div className={styles.event}>
        <Link href={"/events"}>
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.id}`}>
            <a>
              <FaPencilAlt /> Edit
            </a>
          </Link>
          <a
            style={{ cursor: "pointer" }}
            className={styles.delete}
            onClick={deleteEvent}
          >
            <FaTimes /> Delete
          </a>
        </div>

        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image ? (
          <div className={styles.img}>
            <Image src={event.image} width={960} height={500} />
          </div>
        ) : (
          <p>No Image Added</p>
        )}

        <h3>Performers:</h3>
        <p>{event.performers}</p>
        <h3>Description:</h3>
        {<p>{event.descriptioin}</p> && "no description"}
        <h3>Venue: {event.venue}</h3>
        <p>Location: {event.address}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events/`);

  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${API_URL}/api/events/${params.slug}/`);
  const event = await res.json();

  return {
    props: { event },
  };
}

export default EventPage;
