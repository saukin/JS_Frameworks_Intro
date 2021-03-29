import React, { Component } from 'react';
import '../App.css';

function Clicked(props) {
    return (
        <li onClick={() => { props.hobbyClicked(props.hobbyName) }}>
            {props.hobbyName}
        </li>
    );
}


class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputHobby: '',
            buttonName: 'add hobby to the list',
            deleteMeassage: 'click on item to delete',
            hobbyListName: 'my hobbies (click on item to delete): ',
            deletedHobbiesListName: 'past hobbies',
            hobbies: [],
            deletedHobbies: []
        }
    }

    changeInputHobby(event) {
        this.setState({
            inputHobby: event.target.value
        });
    }

    addHobby() {
        const oh = this.state.hobbies;
        const input = this.state.inputHobby;
        this.setState({
            hobbies: oh.concat(input)
        });
    }

    removeHobby(value) {
        console.log(value);
        const od = this.state.deletedHobbies;
        const num = this.state.hobbies.indexOf(value);
        console.log(num);
        this.setState({
            deletedHobbies: od.concat(this.state.hobbies.splice(num, 1))
        });
    } 
 
    render() {

        let hobbiesStyle = 'hidden';
        let deletedStyle = 'hidden';

        let hobbyList = this.state.hobbies.map((hobby, index) => {
            return <Clicked
                key={index.toString()}
                hobbyName={hobby}
                hobbyClicked={this.removeHobby.bind(this)} />
        });

        let hobbyHistory = this.state.deletedHobbies.map((hobby, index) => {
            return <li key={index.toString()}>{hobby}</li>
        });

        if (this.state.hobbies.length !== 0) {
            hobbiesStyle = '';
        } else {
            hobbiesStyle = 'hidden';
        }
        if (this.state.deletedHobbies.length !== 0) {
            deletedStyle = '';
        } else {
            deletedStyle = 'hidden';
        }

    
        return (
            <div>
                <h1>HEllo from Account</h1>
                <div>
                    <input 
                        type = 'text'
                        placeholder='input a hobby'
                        value = {this.state.inputHobby}
                        onChange = {this.changeInputHobby.bind(this)}
                    />
                    <button
                        onClick = {this.addHobby.bind(this)}
                        >{this.state.buttonName}
                    </button>
                    <ul class={hobbiesStyle}>hobbies
                        {hobbyList}
                    </ul>
                    <ul class={deletedStyle}>hobbyHistory
                        {hobbyHistory}
                    </ul>
                </div>
            </div>
        )
    }    
}

export default Account;

