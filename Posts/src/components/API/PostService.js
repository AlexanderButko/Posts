import axios from "axios";

//Сервис загрузки постов
export default class PostService {

    static async getAll(){
       // try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
      //  }
       // catch(e){
          //  console.log(e);
       // } В 18 обработали ошибку на уровне сервиса. Так лучше не делать, т.к. в 19 обработали ошибку загрузки
        // на уровне app.js, но она не была обработана, и все приложение рухнуло. Поэтому закомменчено
    }

}