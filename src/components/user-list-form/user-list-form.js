import React, {Component} from 'react';

export default class UserListFrom extends Component{
    render() {
        const {onInputChanged, onFormSubmitted, onFormRestored} = this.props;
        return (
            <div>
            <input type="text" onChange={onInputChanged} />
            <input type="button" value="submit" onClick={onFormSubmitted} />
            <input type="button" value="reset" onClick={onFormRestored} />
            </div>
        );
    }
}

