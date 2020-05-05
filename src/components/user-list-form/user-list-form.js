import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserListFrom extends Component{
    render() {
        const {userFormSearchValue, onInputChanged, onFormSubmitted, onFormRestored} = this.props;
        return (
            <div>
            <input type="text" onChange={onInputChanged} value={userFormSearchValue} />
            <input type="button" value="reset" onClick={onFormRestored} />
            </div>
        );
    }
}

UserListFrom.propTypes = {
    userFormSearchValue: PropTypes.string,
    onInputChanged: PropTypes.func,
    onFormSubmitted: PropTypes.func,
    onFormRestored: PropTypes.func
};
