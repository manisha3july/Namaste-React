import User from "./User"
import UserClass from "./UserClass"
import {Component} from "react"

class About extends Component {


    componentDidMount(){
        console.log('parent did')
    }
    render(){
        return(
            <>
            <h1>
                About Manisha
            </h1>
             
              <UserClass name='Manisha Class'  email="manisha.agrawal@impelsys.com" />
              <User/>
            </>
          
        )
    }
   
}

export default About