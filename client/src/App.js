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

  addApp = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                linkto: "http://comingsoon.com/",
                imagelink: "https://www.flaticon.com/premium-icon/icons/svg/2847/2847520.svg",
            })
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
            appList = this.state.app.map((app, i) =>
              <li>
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
            <div id="mybutton">
              <button onlick={this.addApp} class="feedback">Add Final Project to Dock!</button>
            </div>
            </div>
        );
  }
}

export default App;
