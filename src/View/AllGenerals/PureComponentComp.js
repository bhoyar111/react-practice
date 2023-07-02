import React, { PureComponent } from 'react'

export default class PureComponentComp extends PureComponent {
    constructor() {
        super()
        this.state = {
            data:'Aaksh'
        }
    }
    render() {
        console.log(this.state);
        return (
        <div>
            <h1>PureComponentComp{this.state.data}</h1>
            <button onClick={() => {this.setState({data:10})}}>Update</button>
        </div>
        )
    }
}
