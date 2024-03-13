import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostServicePagination from "../components/API/PostServicePagination";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";


const PostIdPage = () => {

   const params = useParams();
   const [post, setPost] = useState({});
   const [comments,setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const response = await PostServicePagination.getById(params.id);
        setPost(response.data);
        }
    );

    const [fetchCommById, isCommLoading, errorComm] = useFetching( async () => {
            const response = await PostServicePagination.getCommById(params.id);
            setComments(response.data);
        }
    );

    useEffect(() => {
            fetchPostById();
            fetchCommById();
    }
    , []);

    return (
        <div>
            <h1>Вы попали на страницу поста {params.id}</h1>

            {isLoading
                ? <div className="loader"><Loader/></div>
                : <div>
                    <h2>{post.title}</h2>
                    <div>{post.body}</div>
                  </div>

            }
          <h1>Комментарии</h1>
            {isCommLoading
                ? <div className="loader"><Loader/></div>
                : <div>
                    { comments.map(comment =>
                        <div>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>}
        </div>
    );
};

export default PostIdPage;