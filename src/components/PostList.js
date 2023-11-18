import "./PostList.css";
import { Link } from "react-router-dom";

export default function PostList({ postData }) {
  return (
    <div>
      {postData.map((post) => (
        <div className="post" key={post.id}>
          <img className="postImage" src={post.img} alt="" />
          <main>
            <h1>{post.title}</h1>
            <p>{post.content.substring(0, 300)}</p>
            <Link to={`/posts/${post.id}`}>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                ...ادامه
              </button>
            </Link>
          </main>
        </div>
      ))}
    </div>
  );
}
