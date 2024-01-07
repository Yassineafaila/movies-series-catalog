import React from "react";
import { useDispatch } from "react-redux";
import { useGetTrendingQuery } from "../slices/trendingApiSlice";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IMG_URL, SIZE_IMG } from "../constants";
import Loader from "../components/Loader";
import Slide from "../components/Slide";
import "./HomePage.scss";
function HomePage() {
  const { data: trending, isLoading, isError: error } = useGetTrendingQuery();
  console.log(trending?.results);
  return (
    <>
      <Container  fluid>
        {isLoading ? <Loader /> : <>{<Slide movies={trending?.results} />}</>}
      </Container>
    
      <Container className="mx-auto">
        <div className="text-white">hi</div>
      </Container>
    </>
  );
}

export default HomePage;
