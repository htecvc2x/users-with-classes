import React, {Component} from 'react';

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
