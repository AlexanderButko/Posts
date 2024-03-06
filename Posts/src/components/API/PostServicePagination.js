import axios from "axios";

//Сервис загрузки постов
export  default class PostServicePagination {
    //статический метод на уровне класса, а не экземпляра класса
    static async getAll(limit = 10, page = 1){//лимит постов на страницу (по умолч 10) и число страниц,
                                                              // на которое разбиваем получаемые посты (по умолч 1)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {           // спец объект библиотеки axios, используется для подстановки в url qeury parameters
                    _limit: limit,
                    _page: page
                }

            } );

        return response;
    }
    static async getById(id) {//21. Функция загрузки данных отдельного поста для страницы отдельного поста

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id);

        return response;
    }

    static async getCommById(id) {//21. Функция загрузки комментариев отдельного поста для страницы отдельного поста

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }
}