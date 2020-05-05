import React, {Component} from 'react';

import UserList from '../user-list';
import UserListForm from '../user-list-form';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            users: [],
            userFormSearchValue : ''
        };

        this.baseState = this.state ;
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.baseState.users = json;
                this.setState(state => {
                    return {
                        users: json
                    }
                });
            })
    }


    onInputChanged = (e) => {
        const v = e.target.value;
        const self = this;
        this.setState(state => {
            return {
                userFormSearchValue : v
            }
        }, () => {
            self.onFormSubmitted();
        });

    }

    onFormSubmitted = () => {
        let v =  this.state.userFormSearchValue;
        if (v) {
            v = v.toLowerCase();
            const users = [...this.baseState.users]
            const a = users.filter((user) => {
                return user.name.toLowerCase().indexOf(v) + 1;
            }); 
            this.setState(state => {
                return {
                    users: a
                }
            });
        }
    }

    onFormRestored = () => {
        this.setState(state => {
            return {
                users : this.baseState.users,
                userFormSearchValue : ''
            }
        }, () => {
            this.onFormSubmitted();
        });
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
