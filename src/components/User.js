import { useState } from "react"



const User = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="user-container">
            <div className="user-card">
                <h1> count == {count}</h1>
                <h2>Manisha Agrawal</h2>
                <h3>Dheradun</h3>
                <h4>manisha3july@gmail.com</h4>
            </div>

        </div>
    )
}

export default User