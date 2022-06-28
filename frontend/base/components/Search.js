import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/Search.module.css'


function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter()

  const formHandler = (e) => {
    e.preventDefault()
    router.push(`/events/search/?search=${term}`)
    setTerm('')
  };

  return (
    <div className={styles.search}>
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button type="submit" className="btn">search</button>
      </form>
    </div>
  );
}

export default Search;
