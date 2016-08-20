var React = require('react');
var {render} = require('react-dom');
var DataBase = React.createClass({
 componentDidMount : function(){
   console.log(this.props.data);
   var saveDetail = this.props.data;
  $.ajax({
     url : 'http://localhost:8085/data',
     dataType : 'json',
     data : saveDetail,
     type : 'POST',
     async : false,
     success : function(data){
       console.log(data.response);
     },
     error : function(xhr, status, err){
       console.log("Inside save error");
     }
   });
 },
 render : function(){
     var d =new Date(this.props.data.sunrise);
     return(<div><table><tr><th>Name</th><th>Value</th></tr>
       <tr><td>Wind</td><td>{this.props.data.speed}m/s</td></tr>
       <tr><td>Cloudiness</td><td>{this.props.data.description}</td></tr>
       <tr><td>Pressure</td><td>{this.props.data.pressure}</td></tr>
       <tr><td>Humidity</td><td>{this.props.data.humidity}%</td></tr>
       <tr><td>Sunrise</td><td>{d.getHours()}</td></tr>
       <tr><td>Sunset</td><td>{this.props.data.sunset}</td></tr>
       <tr><td>GeoCords</td><td>{this.props.data.lat}</td></tr>
       </table></div>);
 }
});

module.exports = DataBase;
