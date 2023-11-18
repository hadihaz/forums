import { useLocation } from "react-router-dom";
import "./Search.css";
import { useFetch } from "../../hooks/useFetch";
import PostList from "../../components/PostList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:3111/posts?q=" + query;
  const { error, isLoading, data } = useFetch(url);
  return (
    <div className="searchLisr">
      <h2 className="title">جستجو برای : {query} </h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">LOding...</p>}
      {data && <PostList postData={data} />}
    </div>
  );
}
