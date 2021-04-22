import React from "react";
type AppProps = {
  backdrop_path: string;
  handleDetail: any;
  poster_path: string;
};
export default function Movies({
  backdrop_path,
  handleDetail,
  poster_path,
}: AppProps) {
  return (
    <div className="container__image">
      <img
        src={
          backdrop_path == null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://image.tmdb.org/t/p/w500${backdrop_path}`
        }
        className="image"
        onClick={handleDetail}
        alt="movie"
      />
    </div>
  );
}
