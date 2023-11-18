import "./Posts.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
export default function Posts() {
  const { id } = useParams();
  const url = "http://localhost:3111/posts/" + id;
  const { data: post, isLoading, error } = useFetch(url);
  return (
    <div className="postContent">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">LOding...</p>}
      {post && (
        <>
          <h1 className="header">{post.title}</h1>
          <img className="image" src={`./.${post.img}`} alt="" />
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
}
