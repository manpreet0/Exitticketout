var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./components/Navbar');
var Textbox = require('./components/DisplaytextBox');
var {render} = require('react-dom');
var MainComponent = React.createClass({
  render: function(){
    return(
      <div>
         <Navbar/>
           <div className="col-md-12">
              <Textbox/>
          </div>
      </div>
)
  }
});
render(<MainComponent />,document.getElementById('app'));
