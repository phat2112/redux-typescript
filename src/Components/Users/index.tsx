import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux'
import * as UserACtions from '../../Stores/Users/Actions'
import {UserSelectors} from '../../Stores/Users/Selectors'
import {AppState} from '../../Stores/Reducers'

const Users = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state => UserSelectors.getUserList(state))
    useEffect(() => {
        dispatch(UserACtions.getUserList(1))
    }, [])
    useEffect(() => {
        console.log('userList', userList)
    }, [userList])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;