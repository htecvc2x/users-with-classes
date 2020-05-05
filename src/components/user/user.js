import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class User extends Component{
    render() {
        const {name, username, email} = this.props;
        return (
            <div>
                <span>Name: {name} </span> 
                <span>userName: {username} </span>
                <span>Email: {email} </span> 

            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};
