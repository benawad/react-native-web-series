import React from "react";
export class ErrorBoundary extends React.Component {
    state = {
        error: null
    };
    static getDerivedStateFromError(error: any) {
        return { error };
    }
    componentDidMount() {
        window.onerror = this.logError;
    }
    componentDidCatch(...args: any) {
        this.logError(args);
    }
    logError(args: any) {
        try {
            fetch("/error", {
                method: "post",
                body: JSON.stringify(args)
            });
        } catch (e) {
            /* fuck it */
        }
    }
    render() {
        if (this.state.error) {
            return (
                <>
                    <h2>An error occurred!</h2>
                    <p>
                        Here is all the info we have, dude:
                        <pre>{this.state.error}</pre>
                    </p>
                </>
            );
        }
        return this.props.children;
    }
}
