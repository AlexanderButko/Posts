import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaultOption, changer, value}) => {
    return (
        <select className={classes.mySelect}
                value={value}
                onChange={event => changer(event.target.value)}
        >
            <option disabled>{defaultOption}</option>
            {options.map( option =>
                <option key = {option.value} value= {option.value}>
                    {option.name}
                </option>
            ) }
        </select>
    );
};

export default MySelect;