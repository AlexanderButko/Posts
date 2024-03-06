import axios from "axios";

//Сервис загрузки постов
export  default class PostServicePagination {

    static async getAll(limit = 10, page = 1){

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }

            } );

        return response;
    }
    static async getById(id) {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id);

        return response;
    }

    static async getCommById(id) {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }
}