 
import React from 'react';
import { connect } from 'react-redux';
const  Home=(props)=>{
    return <div onClick={()=>alert(props.age)}>homessssssasdas aaaa</div>
}
const mapStateToProps=state=>({
    age:state.age
})
export default connect(mapStateToProps,null)(Home);