import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText:'Start',
            myInterval: null,
            timerCount: 100
        };
    }
    //Reduce counter by 1 for every second
    countDown = () => {
        if( this.state.timerCount > 0) {
            this.setState({timerCount : this.state.timerCount-1});
        } else {
            clearInterval(this.state.myInterval);
        }
    }

    timerAction = () => {
        if (this.state.buttonText === 'Start') {
            this.setState({
                myInterval : setInterval(this.countDown, 1000), 
                buttonText: 'Pause'});
        } else {
            clearInterval(this.state.myInterval);
            this.setState({
                buttonText: 'Start'});
        }
    }

    render() {
        return(
            <div style={{height:'150px', width:'350px', backgroundColor: '#4caf50', display:'inline-flex', border: 'solid'}}>
                <div style={{margin:'auto'}}>
                    <div style={{marginBottom: '15px', fontSize: '30px', fontWeight:'bold' }}> 
                        {this.state.timerCount}
                    </div>
                    <button type='button' style={{fontSize: '15px', border: 'none', color: 'black', backgroundColor: '#4bc150'}} 
                        onClick={this.timerAction}>
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;

// Paytm HakerRank Question 