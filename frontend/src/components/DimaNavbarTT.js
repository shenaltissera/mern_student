import React, { Component } from 'react'

export default class DimaNavbarTT extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light" style={{backgroundcolor:'#00ff80'}}>
                <form class="form-inline">
                    <a className="btn btn-success" href="/displaytimetables">Download Time Tables</a>
                </form>
                </nav>
            </div>
        )
    }
}
