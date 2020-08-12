import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
class Child extends Component {
    render() {
        console.log(`%c Child 类的 props`,"color:red",this.props);
        return(
            <Fragment>
                <h1>我是Child页面</h1>
            </Fragment>
        )
    }
}
export default connect((state,props)=>{
    return {
        state,
        props
    }
})(Child)