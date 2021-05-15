import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/sass/app.scss';
import axios from 'axios';
import URL from './const';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Multimedia from './components/Multimedia';
import FormLogin from './components/admin/FormLogin';
import Dashboard from './components/admin/Dashboard';
import FormPost from './components/admin/FormPost';
import FormSocial from './components/admin/FormSocial';

class App extends Component{

  state = {

    seeding: false, 
    socialOwners: []

  }

  handleLoginUser = async(username, pass) => {

    this.setState({

      seeding: true

    });

    var data = {

      username,
      pass

    }

    await axios.post(URL + '/users/validateUser.php', data)
    .then(res => {

      if(!res.data){

        console.log('Incorrect password or username.');

      } else {

        this.setState({

          seeding: false

        });

        sessionStorage.setItem('clientAccessToken', res.data.accessToken);

        setTimeout(() => {
          window.location = 'dashboard'; //Redirecciona desde FormLogin hasta Dashboard
        }, 1000);

      }

    })
    .catch(error => {

      console.log('Error: ' + error);

    })

  }

  getSocialOwners = async() => {

    await axios.get(URL + '/social/getSocialOwners.php')
    .then(res => {

      this.setState({

        socialOwners: res.data

      });

      console.log(res.data)

    })
    .catch(error => {

      console.log(error)

    });

  }

  componentDidMount(){

    this.getSocialOwners();

  }

    render(){

      return(

        <div className='app container-fluid p-0'>
      
          <Router>

            <NavBar user={ sessionStorage.getItem('clientAccessToken') } />
            <Switch>

              <Route exact path='/dramachado/dashboard'>
                <Dashboard />
              </Route>
              <Route exact path='/dramachado/editar-contactos'>
                <FormSocial loading={ this.state.seeding } owners={ this.state.socialOwners } />
              </Route>
              <Route exact path='/dramachado/nueva-publicacion'>
                <FormPost />
              </Route>
              <Route exact path='/dramachado'>
                <Home /> 
              </Route>
              <Route exact path='/dramachado/multimedia'>
                <Multimedia />
              </Route>
              <Route exact path='/dramachado/admin-login'>
                <FormLogin submit={ this.handleLoginUser } loading={ this.state.seeding } />
              </Route>

            </Switch>
            <Footer />
    
          </Router>
        
        </div>

      )

    }

}

export default App;
