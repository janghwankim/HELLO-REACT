import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Mycomponent extends React.Component{
    static defaultProps = {
        name: '기본 이름'
    };
    
    static propTypes = {
        name: PropTypes.string,
        favoritNumber: PropTypes.number.isRequired
    };
    render(){
    const  {name, children, favoritNumber} =this.props;
    return (
    <div>
    안녕하세요 제이름은 {name} 입니다.<br/>
    children 값은 {children}입니다.
    <br/>
    제가 좋아하는 숫자는 {favoritNumber} 입니다.
    </div>
    );
}
}

export default Mycomponent;
