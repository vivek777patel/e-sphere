import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

$(document).ready(function(){
  var link = window.location.origin+"/graphiql";
  $('#graphiql').attr('href', link);
});

const Board = () => (
    <div className="datatable-wrapper">
        <h1>Employee Details</h1>
        <hr/>
        <div className="input-group">
            <input type="text" id="searchIdTxtBx" className="form-control" placeholder="Search based on ID"/>
            <div className="input-group-btn">
                <button className="btn btn-default" onClick={getSingleEmployee} type="submit">Search
                    <i className="glyphicon glyphicon-search"></i>
                </button>
            </div>
        </div>
        <hr/>
        <div className="table-responsive">
            <table id="example" className="display table table-hover hscrollbar" width="100%"></table>
        </div>
    </div>
)
const Message = () => (
    <div className="datatable-wrapper">
        <h1>Employee Sphere</h1>
        <hr/>
        <p>This is an application which gives the information about the employees</p>
    </div>
)

const Profile = () => (
    <div className="datatable-wrapper">
        <h1>Employee Profile</h1>
    </div>
)

const Navigation = () => (
    <div className="middle_-area-2_1_3 white-area">
          <nav className="vertical-menu middleDivs">
            <ul className="navULClass">
              <li>
                {/*<Link to="/" onClick={() => console.log('Heading to /')} >*/}
                <Link to="/" onClick={getSingleEmployee} >
                  <span><img className="menu-icons" src="/dist/images/icons/home.ico"/></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/message">
                  <span><img className="menu-icons" src="/dist/images/icons/message.ico"/></span>
                  <span>Messages</span>
                  </Link>
              </li>
              <li>
                <a target="_newtab" id="graphiql">
                  <span><img className="menu-icons" src="/dist/images/icons/graphql.svg"/></span>
                  <span>GraphiQL</span>
                </a>
                </li>
            </ul>
          </nav>
    </div>
)

const Tcontent = () => (
  <Router>
    <div className="middle-area-2_1 white-area" >
      <div className="middle_-area-2_1_1 white-area">
        <Route exact path="/" component={Board}/>
        <Route path="/message" component={Message}/>
        <Route path="/graphiql" target="_blank"/>
      </div>
      <div className="middle_-area-2_1_2 grey-area"></div>
        <Navigation />
    </div>
  </Router>
)


ReactDOM.render(<Tcontent />, document.getElementById('app'));
