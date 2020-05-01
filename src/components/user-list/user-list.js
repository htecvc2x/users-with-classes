import React, {Component} from 'react';

import User from '../user';

export default class UserList extends Component{

    constructor() {
        super();
    }

    render() {
        const {users} = this.props;
        //console.log(items);
        const elements = users.map((user) => {
            const {id, ...rest} = user;
            return (
                <li key={id}>
                    <User
                        {...rest} />
                </li>
            );
        });

        return (
            <ul className="">
            {elements}
            </ul>
        );
    }
}
