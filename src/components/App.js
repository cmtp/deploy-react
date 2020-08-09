import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

// import Home from './Home/Home';
// import Todo from './Todo/Todo';
// import Numbers from './Numbers/Numbers';
// import Chart from './Chart/Chart';
// import Timer from './Pomodoro/Timer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   chartType: 'bar',
    // };

    this.columns = [
      ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
      ['ETH', 2000, 3000, 50000, 4000, 3000, 940],
      ['XRP', 100, 200, 300, 500, 400, 300],
    ];
  }

  // setBarChart = () => {
  //   this.setState({
  //     chartType: 'bar'
  //   });
  // }

  // setAreaChart = () => {
  //   this.setState({
  //     chartType: 'area'
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header title="Bienvenidos a React" />
        <Content>
          {this.props.children}
          {/* <Home /> */}
          {/* <Todo /> */}
          {/* <Numbers /> */}
          {/* <div>
            <Chart columns={this.columns} chartType={this.state.chartType} />
            <p>
              Chart Type
              <button type="button" onClick={this.setBarChart}>Bar Chart</button>
              <button type="button" onClick={this.setAreaChart}>Area Chart</button>
            </p>
          </div> */}
          {/* <Timer /> */}
        </Content>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
