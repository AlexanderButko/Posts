import {useMemo} from "react";
// Создаем кастомный хук сортировки постов
export const useSortedPosts = (posts, sort) => {

    function getSortedPost() {
        console.log('Отработала функция сортировки постов кастомным хуком')
        if (sort) {
            return [...posts].sort((objA, objB) => objA[sort].localeCompare(objB[sort]))
        }
        return posts;
    }
    const sortedPosts = useMemo( getSortedPost, [sort, posts] );
    return sortedPosts;
}

//Создаем кастомный хук фильтрации постов
export const usePosts  = (posts, sort, query) => {
    //Внутри этого кастомного хука используем хук, созданный выше
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearched = useMemo( () => {
            return sortedPosts.filter( post => post.title.toLowerCase().includes(query));
        },
        [query, sortedPosts]
    );

    return sortedAndSearched;
}