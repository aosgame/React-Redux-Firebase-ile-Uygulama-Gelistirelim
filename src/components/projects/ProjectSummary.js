import React from 'react';
import moment from 'moment';

const ProjectSummary=({project})=>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.baslik}</span>
                <p>Yazan {project.isim} {project.soyisim}</p>
                <p className="grey-text">{moment(project.olusturulmaTarihi.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary