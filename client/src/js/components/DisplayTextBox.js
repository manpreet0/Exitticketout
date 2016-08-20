var React = require('react');
var DisplayTextChild= require('./DisplayTextChild');
    var object1={};
var DisplayTextBox = React.createClass({
  getInitialState: function() {
  return ({data:[]});
},
allData: function()
    {
      that=this;
      var obj = {};
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.refs.username.value+',uk&appid=e6625aa774095509d06529ebe80c17ab',
        dataType: 'json',
        type: 'get',
        success: function(data)
        {
          this.setState({obj:data});
          console.log(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
  });
  this.setState({data : obj});
      } ,
render: function(){
  return(
<div className="container mycontainerState">
    <div className="row main">
      <div className="panel-heading">
               <div className="panel-title text-center">
                  <h1 className="title">Enter State</h1>
                  <hr />
                </div>
            </div>
      <div className="main-login main-center">
        <form className="form-horizontal" method="post" action="#">
          <div className="form-group">
            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                <input type="text" className="form-control" name="username" ref="username"  placeholder="Enter State"/>
              </div>
            </div>
          </div>



          <div className="form-group ">
            <button type="button" onClick={this.allData} className="btn btn-primary btn-lg btn-block login-button"  >Search</button>
          </div>

        </form>
        <div>
        <DisplayTextChild data = {this.state.data}/>
      </div>
      </div>
    </div>

  </div>



  );
}
});
// render(<MainComponent/>,document.getElementById('app'));
module.exports = DisplayTextBox;
