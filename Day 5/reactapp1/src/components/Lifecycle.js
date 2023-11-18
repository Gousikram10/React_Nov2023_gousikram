import React, { Component } from "react";
class LifeCycle extends Component{
    //Mounting phase
    constructor(props){
        super(props);
        console.log("1. Constructor called");
        this.state = {data: null};
    }
    componentDidMount(){
        console.log("3. componentDidMount called");
        //Perform actions after the component is mounted,like fetching data
        //and updating the state.
        this.setState({data :" Hello, World!"});
    }
    //Updating phase
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("4. shouldComponent called");
        return true;//Return false to prevent the component from updating
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("5. getSnapshotBeforeUpdate called");
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log("6. componentDidUpdate called");
    }
    //Unmounting phase
    componentWillUnmount()
    {
        console.log("7. componentWillUnmount called");
        //perform cleanup before component in unmounted.
    }
    render(){
        console.log("8. Render called");
        return(
            <div>
                <h1>Component LifeCycle Example</h1>
                <p>{this.state.data}</p>
            </div>
        );

    }

}export default LifeCycle;