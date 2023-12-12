import React from 'react'
import { useDispatch } from 'react-redux'
import { useGetTrendingQuery } from '../slices/trendingApiSlice'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { IMG_URL,SIZE_IMG } from '../constants'
import Loader from '../components/Loader'
function HomePage() {
  const { data: trending, isLoading, isError:error } = useGetTrendingQuery()
  console.log(trending?.results)
  return (
      <div className='text-white'>
      <Container>
        {isLoading?<Loader/>: (<>
          {trending?.results.map((movie, index) => {
            return (
              // <div key={index}>
              //   <img src={`${IMG_URL}${movie.backdrop_path}`} />
              // </div>
              <Link key={index} to={"/movie/:id"}>
                <img src={`${IMG_URL}/${SIZE_IMG.backdrop.larger}${movie.backdrop_path}`} />
                <div>
                    <h2>{movie.name ? movie.name : movie.title}</h2>
                    <p>Type : {movie.media_type}</p>
                    <p>
                      {movie.first_air_date
                        ? movie.first_air_date
                        : movie.release_date}
                    </p>
                </div>
              </Link>
            );
          })}</>)}
      </Container>
          <div>
              <div><h3>Today</h3><h3>This Week</h3></div>
              <div><h3>free to watch</h3><span>movies</span><span>tv</span></div>
          </div>
    </div>
  )
}

export default HomePage