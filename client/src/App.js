import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseNav from "./pages/CourseNav";
import MainNav from "./pages/MainNav";

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BOOK CATALOG &nbsp;
              {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


// const App = () => (
//   <Router>
//     <div>
//       {/* <Nav /> */}
//       <Switch>
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/mainnav" component={MainNav} />
//         <Route exact path="/coursenav" component={CourseNav} />
//         <Route exact path="/courses" component={Courses} />

//         {/* <Route component={NoMatch} /> */}
//       </Switch>
//     </div>
//   </Router>
// );

export default App;


