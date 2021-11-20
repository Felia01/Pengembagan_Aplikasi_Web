import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
  NavLink
} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.myRef = React.createRef();
  }

  componentDidMount(){
    this.myRef.current.style.height = '100vh';
    this.myRef.current.style.width = '100%'
  }

  setBackground(bgColor, txtColor){
    this.myRef.current.style.background = bgColor;
    this.myRef.current.style.color = txtColor;
  }

  render(){
    return(
      <div ref={this.myRef}>
        <p>Belajar pengembangan aplikasi web dengan Reactjs
          dengan topik Router dan Refs</p>
        <button onClick={this.setBackground.bind(
          this, 'white', 'black')}>WHITE</button>
        <button onClick={this.setBackground.bind(
          this, 'red', 'white')}>RED</button>
        <button onClick={this.setBackground.bind(
          this, 'green', 'white')}>GREEN</button>
        <button onClick={this.setBackground.bind(
          this, 'blue', 'white')}>BLUE</button>
      </div>
    )
  }


  //latihan 6.4 dan  6.5
  // constructor(){
  //   super()
  //   this.state = {
  //     isAuth : false
  //   }
  // }

  // render(){
  //   const LoginButton = withRouter (({history}) =>(
  //     <button onClick={()=>{
  //       this.setState({isAuth : true})
  //       history.push('/profile')
  //     }}>Login</button>
  //   ))
  //   const LogoutButton = withRouter (({history}) =>(
  //     <button onClick={()=>{
  //       this.setState({isAuth : false})
  //       history.push('/login')
  //     }}>Logout</button>
  //   ))
    
  //   const routes = [{
  //     path : '/',
  //     exact : true,
  //     render : ()=> <div>Ini halaman Home</div>
  //   },{
  //     path : '/news',
  //     render : ()=> <div>Ini halaman News</div>
  //   },{
  //     path : '/login',
  //     render : ()=> <LoginButton />
  //   },{
  //     path : '/profile',
  //     render : ()=> this.state.isAuth ? <div>Ini 
  //     halaman Profile <br /> <LogoutButton /> </div> : <Redirect
  //     to='/login'/>
  //   }]

  //   return(
  //     <Router>
  //       <div>
  //         <ul style={{listStyle: 'none'}}>
  //           <li><NavLink exact activeStyle={{fontWeight :'bold',
  //             color:'red'}} to='/'>Home</NavLink></li>
  //           <li><NavLink activeClassName='active-link'
  //            to='/news'>News</NavLink></li>
  //           <li><NavLink activeClassName='active-link'
  //            to='/profile'>Profile</NavLink></li>
  //         </ul>

  //         <Switch>
  //           {
  //             routes.map((item, index)=>(
  //               <Route path={item.path} exact={item.exact}
  //               render={item.render} />
  //             ))
  //           }
  //         </Switch>
  //       </div>
  //     </Router>
  //   )
  // }

  // Latihan 6.2 dan 6.3
  // render(){
  //   const LoginButton = withRouter (({history}) =>(
  //     <button onClick={()=>{
  //       this.setState({isAuth : true})
  //       history.push('/profile')
  //     }}>Login</button>
  //   ))
  //   const LogoutButton = withRouter (({history}) =>(
  //     <button onClick={()=>{
  //       this.setState({isAuth : false})
  //       history.push('/login')
  //     }}>Logout</button>
  //   ))
  //   return(
  //     <Router>
  //       <div>
  //         <ul style={{listStyle: 'none'}}>
  //           <li><Link to='/'>Home</Link></li>
  //           <li><Link to='/news'>News</Link></li>
  //           <li><Link to='/profile'>Profile</Link></li>
  //         </ul>

  //         <Switch>
  //           <Route path='/' exact render={()=> <div>Ini halaman Home</div>} />
  //           <Route path='/news' render={()=> <div>Ini halaman News</div>} />
  //           <Route path='/login' render={()=> <LoginButton />} />
  //           <Route path='/profile' render={()=> this.state.isAuth ? <div>Ini 
  //             halaman Profile <br /> <LogoutButton /> </div> : <Redirect
  //             to='/login'/>} />
  //         </Switch>
  //       </div>
  //     </Router>
  //   )
  // }

  //Latihan 6.1 ROUTE RENDER
  // render(){
  //   return(
  //     <Router>
  //       <div>
  //         <ul style={{ listStyle: 'none'}}>
  //           <li><Link to='/'>Home</Link></li>
  //           <li><Link to='/news'>News</Link></li>
  //         </ul>

  //         <Switch>
  //           <Route path='/' exact render={()=> <div>Ini Halaman Home</div>} />
  //           <Route path='/news' render={()=> <div>Ini Halaman News</div>} />
  //         </Switch>
  //       </div>
  //     </Router>
  //   )
  // }
}

export default App;
