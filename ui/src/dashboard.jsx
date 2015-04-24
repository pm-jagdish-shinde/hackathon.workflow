'use strict';

import React from 'react';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <h2>Real time impression logger tool</h2>
                <p className="lead">
                    Using this tool you can monitor the impressions for a particular publisher and also
                    capture snapshot of the data for further analysis.
                </p>
                <a href="#/collect"
                    className="btn btn-primary btn-lg btn-block start-capture">
                    Start capturing now
                </a>
            </div>
        );
    }
}

