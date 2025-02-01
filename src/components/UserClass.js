import React from "react"


class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            userinfo: {
                name: 'dummy',
                loction: 'dummy',
                avatar_url: ''
            }
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/manisha3july');
        const json = await data.json()
        this.setState({
            userinfo: json
        })

    }

    componentDidUpdate(){
        console.log('after update it will run');
    }
    componentWillUnmount(){
        console.log('after rmoving data and unmoount');
    }
    render() {

        const { count } = this.state
        const { name, location, avatar_url } = this.state.userinfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>{name}</h2>
                <h3>Location {location}</h3>
                <h4>Email {this.props.email}</h4>
                <h1>count ====  {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>click me</button>

            </div>

        )
    }



}




export default UserClass