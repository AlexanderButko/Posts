import {useMemo} from "react";

export const usePagination = (totalPages) =>{// кастомный хук создания массива для пагинации
    let pagArr = [];
    let pagesArray = useMemo( () => {
            for (let i = 0; i < totalPages; i++) {
                pagArr.push(i + 1);
            }
            return pagArr;
        } ,
        [totalPages]);//Перерендер произойдет только в случае изменения количества страниц - либо изм число постов на сервере, либо пользователь
                            //изменит количество постов на страницу
    return pagesArray;
}