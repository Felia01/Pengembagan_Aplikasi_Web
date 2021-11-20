
//latihan web 5.5
import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {name : this.props.name}
    }
    reader(){
        return(
        <div>
             <h2>Title Home Component</h2>
             <p>Hello my name is {this.state.name}</p>
            <button onClick={()=> this.setState({name : 'Tyrion Lannister'})}>
                Change my name
            </button>
         </div>
        )
    }
}

// latihan web 5.4
// import React from 'react';

// export default class Home extends React.Component{

//     reader(){
//         return(
//         <div>
//              <h2>Title Home Component</h2>
//              <p>Content Home Component</p>
//          </div>
//         )
//     }
// }


//latihan web 5.3
// import React from 'react';

// export default class Home extends React.Component{

// reader(){
//     return(
//         <div>
//             <h2>Title Home Component</h2>
//             <p>Content Home Component</p>
//         </div>
//     )
// }
// }