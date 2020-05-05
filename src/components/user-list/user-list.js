import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from '../user';

export default class UserList extends Component{

    render() {
        const {users} = this.props;
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

UserList.propTypes = {
    users: PropTypes.array,
};
