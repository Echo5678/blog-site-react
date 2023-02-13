import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.component";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function({}){

    const [post, setPost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1337/api/posts/${id}`).then(function (response) {
            const responseData = response.data.data.attributes;
            setPost(responseData);
        }).catch(function(error) {
            setPost("Error receiving data");
        })
    }, []);
    return(
        <div>
            <PostCard post={post}/>
        </div>
    )
}