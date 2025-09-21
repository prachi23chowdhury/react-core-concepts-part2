
import {use} from "react"
export default function Users({fetchUser}) {
    const user = use(fetchUser)
    console.log(user)
    return(
        <div className="card">
            <h3>Users: {user.length}</h3>
        </div>
    )
}