import { useState, useEffect } from "react";
import axios from "axios";
import search from "../assets/search.png";
import PostSearchBar from "../components/PostSearchBar.component"
import PostPreviewList from "../components/PostPreviewList.component";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [sortType, setSortType] = useState("desc");
  const [searchValue, setSearchValue] = useState("");
  const [amountPosts, setAmountPosts] = useState(10);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/posts?sort=date:${sortType}&pagination[page]=0&pagination[pageSize]=${amountPosts}`).then(function (response) {
      const responseData = response.data.data;
      setPosts(responseData);
    }).catch(function(error) {
      setPosts("Error receiving data");
    })
  }, [sortType, amountPosts]);

  const handleFormSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.search.value);
    axios.get(`http://localhost:1337/api/posts?filters[title][$contains]=${searchValue}&sort=date:${sortType}&pagination[page]=0&pagination[pageSize]=${amountPosts}`).then(function (response) {
      const responseData = response.data.data;
      setPosts(responseData);
    }).catch(function(error) {
      setPosts("Error receiving data");
    })
  }

  const toggleSort = (e) => {
    setSortType(sortType === "desc" ? "asc" : "desc");
  }

  const increaseAmountPosts = () =>{
    setAmountPosts(amountPosts + 5);
  }

  return (
  <div className="mx-auto max-w-3xl w-11/12 md:w-2/3">
    <PostSearchBar handleFormSearch={handleFormSearch} toggleSort={toggleSort} sortType={sortType} search={search}  />
    {
      posts.length > 0 ?
        <PostPreviewList  posts={posts} />
      :
        <p>Couldn't find blog with name: <b className="font-bold">{searchValue}</b></p>
    }
    <button className="font-bold w-full bg-gray-200 hover:bg-gray-400 dark:bg-gray-800 mt-3 py-2 text-xl hover:dark:bg-gray-600" onClick={increaseAmountPosts}>V</button>
  </div>);
}
  