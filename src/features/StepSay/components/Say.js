import React, {Component} from 'react';

class Say extends Component {

    render() {

        return (
            <div>
                <h1 className="main-title">Say</h1>
                <h2 className="">You are authorized with following email :
                    <strong>{this.props.userEmail}</strong>
                </h2>
            </div>
        );
    }
}

export default Say;
