import React, {Component, ReactNode} from "react";

interface ErrorBoundaryProps {children: ReactNode;}

interface ErrorBoundaryState {hasError: boolean; error: Error | null;}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {return { hasError: true, error };}

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger mt-3">
          <strong>Error Boundary:</strong> {this.state.error?.message}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
