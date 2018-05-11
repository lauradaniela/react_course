var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World laura esta ok se esta refrescando!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
