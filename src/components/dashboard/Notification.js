import React from 'react';
import moment from 'moment';

const Notifications=(props)=>{
    const {notifications}=props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Bildirimler</span>
                    <ul> 
                        {notifications && notifications.map(item=>{
                            return(
                                <li key={item.id}>
                                    <span className="teal-text">{item.uye} </span>
                                    <span>{item.icerik}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.zaman.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications