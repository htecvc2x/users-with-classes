import React, {Component} from 'react';

import UserList from '../user-list';
import UserListForm from '../user-list-form';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            users: [
                {id: 1, name : 'name1', username : 'username1', email: 'email1'},
                {id: 2, name : 'name2', username : 'username2', email: 'email2'},
                {id: 3, name : 'name3', username : 'username3', email: 'email3'},
                {id: 4, name : 'name4', username : 'username4', email: 'email4'},
                {id: 5, name : 'name5', username : 'username5', email: 'email5'},
            ],
            userFormSearchValue : ''
        };

        this.baseState = this.state ;
    }


    onInputChanged = (e) => {
        this.setState({
            userFormSearchValue : e.target.value
        });
        this.onFormRestored();
    }

    onFormSubmitted = () => {
        const v =  this.state.userFormSearchValue;
        if (v) {
            const users = [...this.state.users]
            const a = users.filter((user) => {
                return user.name.indexOf(v) + 1;
            }); 
            this.setState({users: a});
        }
    }

    onFormRestored = () => {
        this.setState({users: this.baseState.users});
    }

    render() {
        return (
            <div className="app">
                <UserListForm
                    onInputChanged={this.onInputChanged}
                    onFormSubmitted={this.onFormSubmitted}
                    onFormRestored={this.onFormRestored}
                    userFormSearchValue={this.state.userFormSearchValue} 
                    />
                <UserList
                    users={this.state.users} 
                />
            </div>
        );
    }
}
