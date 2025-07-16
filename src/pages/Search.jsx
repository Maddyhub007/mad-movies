import {useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {Card} from "../components/Card";
import {useFetch} from "../hooks/useFetch";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryterm = searchParams.get("q");
  const {data: movies} = useFetch(apiPath, queryterm);

  useEffect(() =>{
    document.title = `Search Results for "${queryterm}"`;
  });
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">Search</h5>
      {movies.length == 0 ? `No results found for ${queryterm}` :`result for ${queryterm}`}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) =>{
          return <Card key={movie.id} movie={movie} />
        })}
      </div>
    </main>
  )
}

