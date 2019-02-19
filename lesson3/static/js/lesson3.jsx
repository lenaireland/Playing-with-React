class Room extends React.Component {
    state = {
        isLit: false,
        temp: 72
    };

    flipLight = () => {
        this.setState({
            isLit: !this.state.isLit
        });
    };

    flipON = () => {
        this.setState({
            isLit: true
        });
    };

    flipOFF = () => {
        this.setState({
            isLit: false
        });
    };

    incTemp = () => {
        this.setState({
            temp: this.state.temp + 1
        });
    };

    decTemp = () => {
        this.setState({
            temp: this.state.temp - 1
        });
    };

    render() {

        const brightness = this.state.isLit ? "lit" : "dark";
        return (
            <div className={`room ${brightness}`}>
                The room is {this.state.isLit ? 'lit' : 'dark'}.
                <br />
                The room is set to {this.state.temp} degrees F.
                { this.state.temp > 70 ? ' Cozy' : ' Brrrr'}
                <br />
                <button onClick={this.flipLight}>Flip</button>
                <button onClick={this.flipON}>ON</button>
                <button onClick={this.flipOFF}>OFF</button>
                <br />
                <button onClick={this.incTemp}>+</button>
                <button onClick={this.decTemp}>-</button>
            </div>
        );
    }
}

ReactDOM.render(<Room />, document.getElementById('root'));