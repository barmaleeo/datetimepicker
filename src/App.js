import React,{Component} from 'react';
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
                <Datetimepicker sm onChange={this.onChange}
                                data={s} name="value"
                                format="DD/MM/YYYY HH:mm"
                                min={moment().subtract(1, 'day')}
                                max={moment().add(1, 'day')}
                                timeMin="08:00:00" timeMax="22:00:00" timeStep="15"/>
            </div>
        );
    }
}

export default App;
