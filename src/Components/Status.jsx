export default function Status({status}){
    if(status=="completed"){
       return(
       <div className="completed">
        <span className="btn btn-success disabled w-100">Completed</span>
        </div>
    ) 
    }
    else if(status=="pending"){
        return(
        <div className="pending">
        <span className="btn btn-warning disabled w-100">Pending</span>
        </div>
        )
    }
    else if(status=="failed"){
        return(
            <div className="failed">
        <span className="btn btn-danger disabled w-100">Failed</span>
        </div>
        )
    }
    
}