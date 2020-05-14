import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 2.4.0
                    </div>
                    <strong>
                        Copyright © 2014-2020{" "}
                        <a href="https://dish.com">Dish</a>.
                    </strong>{" "}
                    All rights reserved.
                </footer>
            </div>
        );
    }
}
