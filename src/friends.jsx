
import {use} from 'react';
export default function Friends({friendPromise}){
    const Friends = use(friendPromise)
    console.log(Friends)
    return(
        <div className="card">
            <h3>Friends</h3>

        </div>
    )
}