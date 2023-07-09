import React, { Component } from 'react'

export default class DimaNavbarSE extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light" style={{backgroundcolor:'#00ff80'}}>
                <form class="form-inline">
                    <a className="btn btn-success" href="/special">Display Special Events</a>
                </form>
                </nav>
            </div>
        )
    }
}
