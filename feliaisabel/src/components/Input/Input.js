//latihan web 5.10
import React, { Component } from "react";
import './Input.css';

export default class Input extends Component {
   constructor(props){
       super(props);
       this.state ={status :''}
   }
    render() {
        return (
            <div className="input">
                <input type="text" name="status" placeholder="Enter Your Name"
                onChange={(ev)=> this.props.getvalues(ev.target.name,ev.target.value)} />
                <p>Your Status : {this.state.status}</p>

                <input type="text" name="status" placeholder="Enter Your Status"
                onChange={(ev)=> this.props.getvalues(ev.target.name,ev.target.value)} />
                <p>Your Status : {this.state.status}</p>
            </div>
        );
    }
}

//latihan web 5.9
// import React, { Component } from "react";
// import './Input.css';

// export default class Input extends Component {
//    constructor(){
//        super();
//        this.state ={status :''}
//    }
//     render() {
//         return (
//             <div className="input">
//                 <input type="text" name="status" placeholder="Enter Your Status"
//                 onChange={(ev)=> this.setState({status :ev.target.value})} />
//                 <p>Your Status : {this.state.status}</p>
//             </div>
//         );
//     }
// }