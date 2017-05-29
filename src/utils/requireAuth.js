import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuth) {
        this.context.router.push('/server/login');
      }
    }
    
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuth) {
        this.context.router.push('/server/login');
      }
    }
    
    render() {
      return (
        <div>
          { this.props.isAuth && <ComposedComponent {...this.props} />}
        </div>
      );
    }
  }
  
  Authenticate.propTypes = {
    isAuth: React.PropTypes.bool.isRequired
  }
  
  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  
  function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuth
    }
  }
  
  return connect(mapStateToProps)(Authenticate);
}

