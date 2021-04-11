import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = { apps: null };
  }

  getApps = () => {
        fetch("http://localhost:5000/api/apps")
        .then(res => res.json())
        .then(res => this.setState({ apps: Array.from(res) }))
        .catch(err => console.log(err));
  }

  addApp1 = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                linkto: "https://www.facebook.com",
                imagelink: "https://www.flaticon.com/svg/vstatic/svg/1384/1384053.svg?token=exp=1618180589~hmac=b5a309fc40bd5484fd61be0f83a016e4",
            })
        })
        .then(() => this.getApps())
        .catch(err => console.log(err));
  }

  addApp2 = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                linkto: "https://www.linkedin.com/in/vikram-ramavarapu-972433195/",
                imagelink: "https://media-exp1.licdn.com/dms/image/C4D03AQHrqn3uJItkCA/profile-displayphoto-shrink_400_400/0/1570387182417?e=1623888000&v=beta&t=nqFZuw-9sNU1x2ttE5v0SanGIicGnHca5oDk6wOOmd0",
            })
        })
        .then(() => this.getApps())
        .catch(err => console.log(err));
  }

  addApp3 = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                linkto: "https://www.linkedin.com/in/joung-won-b43988207/",
                imagelink: "https://media-exp1.licdn.com/dms/image/C4E03AQFeWjkdUbNRRw/profile-displayphoto-shrink_400_400/0/1618011029572?e=1623888000&v=beta&t=0MSnWTZ1q3rGUvHmji52FSzWcp6dP08XucIJgfWWd5U",
            })
        })
        .then(() => this.getApps())
        .catch(err => console.log(err));
  }

  deleteApp = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:5000/api/apps/${e.target.id.value}`, {
            method: 'DELETE',
        })
        .then(() => this.getApps())
        .catch(err => console.log(err));
    }

  componentDidMount() {
        this.getApps();
  }

  

  render() {
        let appList = "";
        if (this.state.apps) {
            appList = this.state.apps.map((app, i) =>
              <li>
                <form class="deleteicon" onSubmit = {this.deleteApp}>
                <input type="hidden" name="id" value={app._id} />
                <input type="submit" value="Remove" class="deleter" />
                </form>
                <a href={app.linkto}>
                  <img src={app.imagelink} class="img-fluid" alt="mac"/>
                </a>
              </li>);
        } else {
            appList = "Loading...";
        }

        return (
          <div>
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>

            <div class="main-contain">
              <div class="container">
                <div class="dock">
                  <span>
                    <img src="https://image.ibb.co/mHAnwK/nav.png" class="img-fluid" alt="nav"/>
                  </span>
                  <div class="dock-nav">
                    <ul>              
                      {appList}
                    </ul>
                  </div>
                </div>
              </div>      
            </div>
            <div id="mybutton" class="dropup">
              <button class="dropbtn"></button>
              <div class="dropup-content">
              <button id = "inner1" class="innerbtn" onClick={this.addApp1}/>
              <button id = "inner2" class="innerbtn" onClick={this.addApp2}/>
              <button id = "inner3" class="innerbtn" onClick={this.addApp3}/>
              </div>
            </div>
            
            </div>
        );
  }
}

export default App;
