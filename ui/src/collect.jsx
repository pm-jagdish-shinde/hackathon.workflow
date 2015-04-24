'use strict';

import React from 'react';

class CollectForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        var pubId = React.findDOMNode(this.refs.pubId).value.trim();
        var siteId = React.findDOMNode(this.refs.siteId).value.trim();
        if (!pubId) {
            return;
        }

        // TODO: send request to the server
        React.findDOMNode(this.refs.pubId).value = '';
        React.findDOMNode(this.refs.siteId).value = '';
        this.props.onSubmit(pubId, siteId);
        return;
    }

    render() {
        return (
            <div className="collect-form">
                <p className="lead">
                    To start capturing data enter publisher id,
                    site Id (optional) and click the start button.
                </p>
                <form className="initial-filters form-inline" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Publisher Id"
                               required="required"
                               ref="pubId"
                               name="pubId"/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Site Id"
                               ref="siteId"
                               name="siteId"/>
                    </div>
                    <button type="submit" className="btn btn-success">
                        <span className="glyphicon glyphicon-play"></span>
                        Start
                    </button>
                </form>
            </div>
        );
    }
}
CollectForm.propTypes = { onSubmit: React.PropTypes.func };
CollectForm.defaultProps = { onSubmit: () => {} };

class CollectData extends React.Component {
    render() {
        return (
            <div>
                Starting capture for {this.props.pubId} and {this.props.siteId}
            </div>
        );
    }
}

export default class Collect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collecting: false,
            pubId: -1,
            siteId: -1
        };
    }

    handleSubmit(pubId, siteId) {
        this.setState({
            collecting: true,
            pubId: pubId,
            siteId: siteId
        });
    }

    render() {
        var body = null;

        if (this.state.collecting) {
            body = <CollectData pubId={this.state.pubId} siteId={this.state.siteId}/>
        } else {
            body = <CollectForm onSubmit={this.handleSubmit.bind(this)}/>
        }
        return (
            <div className="collect">
                {body}
            </div>
        );
    }
}
