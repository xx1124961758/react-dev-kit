import React, { Component, useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

function Demo(props) {
    let [age, setAge] = useState(0);
    console.log('demo', props);
    return <div>
        <div>age:{age}</div>
        <div>props.count: {props.count}</div>
    </div>;
}

function Help(props) {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(10);
    const sss = useMemo(() => {
        console.log('count change', count);
    }, [count]);
    console.log('sss', sss);
    useEffect(function () {
        console.error('use effect');
    }, []);
    return (
        <div>
            {props.age}
            <div>count 是{count}</div>
            <button onClick={() => setCount(count)}>count: +1</button>
            <Demo count={count1} />
        </div>
    );
}

class DDD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 1
        }
    }
    clickHandle = () => {
        this.setState({
            age: this.state.age
        })
    }
    render() {
        return (
            <div>
                <Help age={this.state.age} />
                <div onClick={this.clickHandle}>sss</div>
            </div>
        );
    }
}

ReactDOM.render(<DDD />, document.getElementById('root'));