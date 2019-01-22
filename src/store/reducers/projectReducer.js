const initState={
    projects:[
        {id:'1',baslik:'React Yazılım',icerik:'React yazılımının geliştirilmesi'},
        {id:'2',baslik:'Redux Yazılım',icerik:'Redux yazılımının geliştirilmesi'},
        {id:'3',baslik:'Firebase Yazılım',icerik:'Firebase yazılımının geliştirilmesi'}
    ]
}

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('proje oluşturuldu',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('hata oluştu',action.err);
            return state
        default:
            return state;
    }
}

export default projectReducer