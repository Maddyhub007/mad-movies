import {MovieList} from "../pages";
import {Route, Routes} from "react-router-dom";
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/"  element={<MovieList title="Your Guide to Mad Movies"/>} />
            <Route path="movies/popular"  element={<MovieList title="Popular Movies"/>} />
            <Route path="movies/top"  element={<MovieList title="Top Rated Movies"/>} />
            <Route path="movies/upcoming"  element={<MovieList title="Upcoming Movies"/>} />
        </Routes>
    </>
  )
}

export default AllRoutes
