import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state={
        baslik:'',
        icerik:''
    }

    handleChange=(e)=>{
       this.setState({
           [e.target.id]:e.target.value
       })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push('/');
        
    }
  render() {
      const {auth}=this.props;
      if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="brown-text text-darken-3">Yazılım Oluştur</h5>
            <div className="input-field">
                <label htmlFor="baslik">Yazılım Başlık</label>
                <input type="text" id="baslik" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="icerik">Yazılım İçerik</label>
                <textarea  id="icerik" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn brown lighten-1 z-depth-0">Kaydet</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
