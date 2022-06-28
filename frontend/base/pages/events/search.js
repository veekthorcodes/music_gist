import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import Link from "next/link";


export default function EventsPage({ events }) {
  const router = useRouter();
  return (
    <Layout>
      <Link href='/events'>
        <a>{'<'} Back to events</a>
      </Link>
      <h1>Search Results for '{router.query.search}'</h1>
      {events.length === 0 && <h3>No events found!</h3>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({query:{search}}) {
  const res = await fetch(`${API_URL}/api/events/?search=${search}`);
  const events = await res.json();
  return {
    props: { events},
  };
}
