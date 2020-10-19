import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    render(){
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                내이름은 {name} <br/>
                children is {children} <br/>
                숫자는 {favoriteNumber}
            </div>
        )

    }


}
MyComponent.defaultProps = {
    name : '기본 이름'
};
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;