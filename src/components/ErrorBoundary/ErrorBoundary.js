import React from 'react';
import ErrorTemplate from './ErrorTemplate';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // update the state for fallback ui
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorTemplate />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
