import React, {Component} from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import Foto from "./Foto.jpg";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {isAuth: false,};
  }

  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}>
        Login
      </button>
    ));
    
    const LogoutButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}>
        Logout
      </button>
    ));
    
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <div className="container text-center font-weight-bold">Welcome to my Home</div>,
      },
      {
        path: "/login",
        render: () => <LoginButton />,
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div>
              <h1 className="text-center">Profile Mahasiswa</h1>
              <div className="container text-center">
                <table className="table table-borderless text-start">
                  <tbody>
                    <tr>
                      <td>Foto Profil</td>
                      <td>:</td>
                      <td>
                        <img src={Foto} className="w-25 h-5 border border-1" />
                      </td>
                    </tr>
                    <tr>
                      <td>Nama</td>
                      <td>:</td>
                      <td>Felia Isabel</td>
                    </tr>
                    <tr>
                      <td>NIM</td>
                      <td>:</td>
                      <td>192110452</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>:</td>
                      <td>Perempuan</td>
                    </tr>
                    <tr>
                      <td>Tempat Tanggal Lahir</td>
                      <td>:</td>
                      <td>Medan, 01 Juni 2001</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td><LogoutButton /></td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          ),
      },
    ];

    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;