import React, {useEffect, useMemo, useState} from 'react';
import {usePagination} from "../hooks/usePagination";
import {useFetching} from "../hooks/useFetching";
import PostServicePagination from "../components/API/PostServicePagination";
import {getPageCount} from "../components/Utilities/pages";
import MyModal from "../components/UI/Modal/MyModal";
import PostForm12 from "../components/PostForm12";
import PostFilter from "../components/PostFilter";
import MyButton from "../components/UI/Button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import PostListWithDeleteAndAnimations from "../components/PostListWithDeleteAndAnimations";
import Pagination from "../components/UI/Pagination/Pagination";
import {usePosts} from "../hooks/usePost";
import MySelect from "../components/UI/Select/MySelect";

function Posts() {
    const options = [
        {value : 5, name : '5'},
        {value : 10, name : '10'},
        {value : 20, name : '20'},
        {value : 25, name : '25'},
        {value : -1, name : 'Все'}
    ];

    const[posts12, setPosts12] = useState([]);

    const [filter, setFilter] = useState({fSearchQuery: '', fSelectedSort: ''});

    let fSortedAndSearched = usePosts(posts12, filter.fSelectedSort, filter.fSearchQuery);

    const[visible, setVisible] = useState(false);

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

    let pagesArray = usePagination(totalPages);
    console.log(pagesArray);

    const [fetchPosts3, isPostLoading3, postError2] = useFetching( async () => {
        const response = await PostServicePagination.getAll(limit, page);
        setPosts12(response.data);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));

    })
    useEffect(()=>{fetchPosts3()}, [page, limit]);

    const changePage = (currentPage) => {
        setPage(currentPage);
    }
    return (
        <div className="App">

            <MyModal
                visible={visible}
                setVisible={setVisible}>

                <PostForm12 props={createPost3}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value = {limit}
                changer = {value => setLimit( value )}
                defaultOption = "Кол-во"
                options={options}

            />

            <MyButton onClick ={ () => setVisible(true) }>Создать пост</MyButton>

            {isPostLoading3//Если посты еще не загрузились, то выведем "крутилку"
                ?<div className="loader"><Loader/></div>
                :<PostListWithDeleteAndAnimations posts = {fSortedAndSearched} title = 'Посты' remove={removePost2}/>
            }
            <Pagination
                totalPages = {totalPages}
                page = {page}
                changePage = {changePage}
            />
        </div>
    );
};

export default Posts;