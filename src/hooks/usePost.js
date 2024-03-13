import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    function getSortedPost() {
        if (sort) {
            return [...posts].sort((objA, objB) => objA[sort].localeCompare(objB[sort]))
        }
        return posts;
    }
    const sortedPosts = useMemo( getSortedPost, [sort, posts] );
    return sortedPosts;
}

export const usePosts  = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearched = useMemo( () => {
            return sortedPosts.filter( post => post.title.toLowerCase().includes(query));
        },
        [query, sortedPosts]
    );

    return sortedAndSearched;
}