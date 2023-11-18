import { useFetch } from "../../hooks/useFetch";

import PostList from "../../components/PostList";
import "./Home.css";

export default function Home() {
  const { data, isLoading, error } = useFetch("http://localhost:3111/posts");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">LOding...</p>}
      {data && <PostList postData={data} />}
    </div>
  );
}
