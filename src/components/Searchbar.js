import { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [term, setTerm] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };
  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">جستجو</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
