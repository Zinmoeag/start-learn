import { Component } from "react";
import ErrorHandler from "../ErrorHandler";
import type { Fallback, errorKindsType } from "../types";
import type { ReactNode } from "react";

interface AppErrorBoundaryWithChildren {
  children: ReactNode;
  fallback?: Fallback;
}

class AppErrorBoundary extends Component<AppErrorBoundaryWithChildren> {
  state: {
    hasError: boolean;
    error: null | Error;
    fallback: Fallback | null;
  };

  constructor(props: AppErrorBoundaryWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      fallback: props.fallback ?? null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error): void {
    this.setState({ error });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.state.error) {
        if (this.state.error instanceof Error) {
          return (
            <ErrorHandler
              errorType={this.state.error.message as errorKindsType}
              fallback={this.state.fallback ?? undefined}
            />
          );
        }
      }

      return <>error</>;
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
