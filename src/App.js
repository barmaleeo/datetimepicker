import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React,{Component} from 'react';
import './App.css';
import Datetimepicker from "./lib/Datetimepicker";
import moment from "moment";
import './lib/style.css';

class App extends Component {
    state = {value: moment().minute(45).second(0).millisecond(0)}
    onChange = (value) => {
        console.log(value)
        this.setState({
            value: moment(value, 'DD/MM/YYYY HH:mm'),
            valueChange:true,
            valueChangeErr:false,
        });
        setTimeout(()=>{
            this.setState({
                value: moment(value, 'DD/MM/YYYY HH:mm'),
                valueChange:false,
                valueChangeErr:false,
            });

        }, 1000)
    }
    render() {
        const s= this.state;
        return (
            <div className="App">
                <Datetimepicker sm onChange={this.onChange}
                                data={s} name="value"
                                request
                                format="DD/MM/YYYY HH:mm"
                                min={moment().subtract(1, 'day')}
                                max={moment().add(1, 'day')}
                                timeMin="08:00:00" timeMax="22:00:00" timeStep="15"/>
            </div>
        );
    }
}

export default App;
