import { useEffect, useState } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const { postData, data, error } = useFetch(
    "http://localhost:3111/posts/",
    "POST"
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, content, img: "./images/image.png" });
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="formArea">
      <h1 className="header">پست حدید</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>:عنوان</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>:متن پست</span>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
            rows="6"
          />
        </label>
        <label>
          <span>:تصویر</span>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            required
          />
        </label>
        <button className="btn">ایجاد پست</button>
      </form>
    </div>
  );
}
