import React, { useEffect, useState } from 'react';
import { Text } from './Filter.styled'
import { useDispatch } from 'react-redux';

import { filterContacts } from '../../redux/contacts/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(filterContacts(filter));
    },[dispatch, filter] );

    return (
        <div >
            <Text>Find contacts by name</Text>
            <input type="text" value={filter} onChange={evt => setFilter(evt.target.value)}
            />
        </div>
    );
};
export default Filter;