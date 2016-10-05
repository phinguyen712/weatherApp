var React = require('react');
/*global Foundation $ */
var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  
  
  getInitialState: function () {
    return {
        title:"Error!"
        };
    },
      
  propTypes:{
    title:React.PropTypes.string,
    message:React.PropTypes.string.isRequired
  },
  
  render: function () {
    var {title,message} = this.props;
    console.log(this.props.message);
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
