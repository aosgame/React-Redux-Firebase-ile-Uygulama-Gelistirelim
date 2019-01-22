import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    state={
        email:'',
        password:'',
        isim:'',
        soyisim:''
    }

    handleChange=(e)=>{
       this.setState({
           [e.target.id]:e.target.value
       })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       // console.log(this.state);
       this.props.signUp(this.state);
        
    }
  render() {
    const {authError,auth}=this.props;
    if(auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="red-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Parola</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="isim">İsminiz</label>
                <input type="text" id="isim" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="soyisim">Soyisminiz</label>
                <input type="text" id="soyisim" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Sign Up</button>
                <div className="red-text center">
                    {authError ? <p>{authError}</p>:null}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signUp:(yeni)=>dispatch(signUp(yeni))
    }
}

const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
