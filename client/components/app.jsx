import React from 'react';
import Header from './header';
import ProductListItems from './product-list-items';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div>
        <div className="header-row">
          <div className="container">
            <Header />
          </div>
        </div>
        <ProductList />
      </div>

    );
  }
}

// this.state.isLoading
//   ? <h1>Testing connections...</h1>
//   : <h1>{this.state.message}</h1>;
