import React from "react";
import { useDispatch } from "react-redux";
import { useGetTrendingQuery } from "../slices/trendingApiSlice";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IMG_URL, SIZE_IMG } from "../constants";
import Loader from "../components/Loader";
import Slide from "../components/Slide";

function HomePage() {
  const { data: trending, isLoading, isError: error } = useGetTrendingQuery();
  console.log(trending?.results);
  return (
    <>
      <Container className="position-relative">
      {isLoading ? <Loader /> : <>{<Slide movies={trending?.results} />}</>}
      </Container>

      <Container>
      <div className="text-white">hi</div>
      </Container>
    </>
  );
}

export default HomePage;
