import {useMemo} from "react";

export const usePagination = (totalPages) =>{
    let pagArr = [];
    let pagesArray = useMemo( () => {
            for (let i = 0; i < totalPages; i++) {
                pagArr.push(i + 1);
            }
            return pagArr;
        } ,
        [totalPages]);

    return pagesArray;
}