import React from 'react';
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";


const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MySelect
                value={filter.fSelectedSort}
                changer={selectedSort => setFilter({...filter, fSelectedSort: selectedSort})}
                defaultOption = 'Сортировка по...'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
            <MyInput
                placeholder = 'Поиск...'
                value={filter.fSearchQuery} //реализ управл инпут, двустороннее связывание
                onChange={e => setFilter({...filter, fSearchQuery : e.target.value})}
            />
        </div>
    );
};

export default PostFilter;