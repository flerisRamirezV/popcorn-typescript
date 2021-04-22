import React from "react";
import "../styles/popular.css";

export default function TitleMovies(props: { title: string }) {
  return (
    <article className="popular">
      <h2 className="popular__title">{props.title}</h2>
      <hr />
    </article>
  );
}
