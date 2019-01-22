import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const ProjectDetails=(props)=>{
    //console.log(props);
    //const id=props.match.params.id;

    const {project,auth}=props;
    if(!auth.uid) return <Redirect to='/signin' />
    
    if(project){
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                 <div className="card-content">
                     <span className="card-title">{project.baslik}</span>
                     <p>{project.icerik}</p>      
                 </div>
                 <div className="card-action grey lighten-4 grey-text">
                     <div>{project.isim} {project.soyisim}</div>
                     <div>{moment(project.olusturulmaTarihi.toDate().toString()).calendar()}</div>
                 </div>
            </div>
        </div>
    )}else{
        return(
            <div className="container center">
                <p>Veriler Yükleniyor</p>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    //console.log(state);
    
    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects;
    const project=projects ? projects[id] :null

    return{
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails)