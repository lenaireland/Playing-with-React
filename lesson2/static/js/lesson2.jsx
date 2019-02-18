// // React componenet using class

// class Hi extends React.Component {
//     render() {
//         return <div><b>Hello World!!</b></div>;
//     }
// }

// ReactDOM.render(
//     <Hi/>, document.getElementById('root')
// );



// // React component using function (regular evolve to arrow)

// function Hi({ name }) {
//     return <div>Hellooooo {name}!</div>;
// }

// const Hi = function ({ name }) {
//     return <div>Hello {name}!</div>;
// }

// const Hi = ({ name }) => {
//     return <div>Hello {name}!</div>;
// }

// const Hi = ({ name }) => (
//     <div>Hello {name}!</div>
// )

const Hi = ({ name }) => <div>Hello {name}!</div>;

ReactDOM.render(
    <Hi name="Buddy"/>, document.querySelector('#root')
);

// new component that takes 3 props 
const MediaCard = ({ title, body, imageUrl }) => (
    <div><h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl}/></div>
)

// passing props, with one as JSX element
ReactDOM.render(
    <MediaCard 
    title="React" 
    body={<span>Am <b>I</b> doing this right?</span>} 
    imageUrl="/static/image/react.svg"/>, 
    document.querySelector('#MediaCard')
);

// using ternary for conditional
const Gate = ({ isOpen }) => {
    console.log(isOpen)
    console.log(typeof(isOpen))
    return <div>{ isOpen ? "open" : "closed"}</div>;

}

ReactDOM.render(
    <Gate isOpen={true}/>, document.querySelector('#gate')
)