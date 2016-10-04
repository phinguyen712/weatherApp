var React = require('react');
var {Link} = require("react-router");


var Examples = (props) => {
   return (
      <div>
         <h1 className="text-Center">Examples</h1>
         <p>Here are a few queries to try out</p>
         <ol>
            <li>
               <Link to="/?location=Florida">Florida</Link>
            </li>
            <li>
               <Link to="/?Location=Taipei">TaiPei</Link>
            </li>
         </ol>
      </div>
    );
};

module.exports = Examples;
