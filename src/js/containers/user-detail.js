import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    if(!this.props.user) {
      return(
        <h4>Select a user ...</h4>
      );
    }


    return(
      <div>
        <h3><u><strong>{this.props.user.first} {this.props.user.last}</strong></u></h3>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
