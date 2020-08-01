import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Datetimepicker from "./lib/Datetimepicker";
import moment from "moment";

class App extends Component {
    state = {value: moment()}
    onChange = (name, value) => {
        console.log(name, value)
        this.setState({value: value});
    }
    render() {
        const s= this.state;
        return (
            <div className="App">
                <Datetimepicker sm onChange={this.onChange} value={s.value}
                                format="DD/MM/YYYY HH:mm"
                                dateMin={moment('2020-08-04 16:30:00')}
                                dateMax={moment('2020-08-06 18:45:00')}
                                timeMin="08:00:00" timeMax="22:00:00" timeStep="15"/>
            </div>
        );
    }
}

export default App;
