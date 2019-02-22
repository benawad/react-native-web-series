import React from "react";
export declare class ErrorBoundary extends React.Component {
    state: {
        error: null;
    };
    static getDerivedStateFromError(error: any): {
        error: any;
    };
    componentDidMount(): void;
    componentDidCatch(...args: any): void;
    logError(args: any): void;
    render(): {} | null | undefined;
}
