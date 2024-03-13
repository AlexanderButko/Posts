import React, {useEffect, useRef, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostServicePagination from "../components/API/PostServicePagination";
import {getPageCount} from "../components/Utilities/pages";
import MyModal from "../components/UI/Modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyButton from "../components/UI/Button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import {usePosts} from "../hooks/usePost";
import {useObserver} from "../hooks/useObserver";


function Posts() {
    const[posts12, setPosts12] = useState([]);
    const [filter, setFilter] = useState({fSearchQuery: '', fSelectedSort: ''});
    let fSortedAndSearched = usePosts(posts12, filter.fSelectedSort, filter.fSearchQuery);
    const[visible, setVisible] = useState(false);

    const lastElem = useRef();

    const createPost3 = (newPost) => {
        setPosts12( [...posts12, newPost]);
        setVisible( false);
    }

    const removePost2 = (postFromComp) => {
        setPosts12(posts12.filter(p => p.id !== postFromComp.id  ));
    }

    const[totalPages, setTotalPages] = useState(0);

    const[limit, setLimit] = useState(10);
    const[page, setPage] = useState(1);




    const [fetchPosts3, isPostLoading3, postError2] = useFetching( async () => {
        const response = await PostServicePagination.getAll(limit, page);
        setPosts12([...posts12, ...response.data]);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));

    })


    useObserver(lastElem, page < totalPages, isPostLoading3, () => {
        setPage( page + 1 );
    });

    useEffect(()=>{fetchPosts3()}, [page, limit]);

    const changePage = (currentPage) => {
        setPage(currentPage);
    }
    return (
        <div className="App">

            <MyModal
                visible={visible}
                setVisible={setVisible}>

                <PostForm props={createPost3}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />


            <MyButton onClick ={ () => setVisible(true) }>Создать пост</MyButton>

            {isPostLoading3 &&
                <div className="loader"><Loader/></div>
            }

            <PostList posts = {fSortedAndSearched} title = 'Посты' remove={removePost2}/>
            <div ref={lastElem} className="footer" >

            </div>


        </div>
    );
};

export default Posts;