import React, {Component} from 'react';
import LoginForm from '../Components/LoginForm';

export default class LoginView extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <LoginForm/>
            </div>
        );
    }
}

