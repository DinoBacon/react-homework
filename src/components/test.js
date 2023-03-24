import React, {Component} from 'react';
/*import './Container.css';*/

class Container extends Component{
    constructor(props) {
        super(props);

        this.state = {
            myList: [1,2,3],
            myName: "Bob"
        };
    }
    render() {
        return(
            <div>
            <h1>{this.state.myName}</h1>
            </div>
        )
    }
}

export default Container;


/*class myList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            myList: [1,2,3]
        };
    }
    render() {
        return(
            </ol>
            this.state.myList.nap((item) => {
            return <li><{item}</li>
            })
            </ol>
        )
    }
}

export default myList;*/