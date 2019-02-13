// React componenet using class

class Hi extends React.Component {
    render() {
        return <div><b>Hello World!</b>
                    <h1>{5 + 10}</h1>
                    <ul>
                    <li>one</li>
                    <li>two</li>
                    </ul></div>;
    }
}

ReactDOM.render(
    <Hi/>, document.getElementById('root')
);

// React component using function

// function Hi() {
//     return <div>Hellooooo World!</div>;
// }

// ReactDOM.render(
//     <Hi/>, document.querySelector('#root')
// );