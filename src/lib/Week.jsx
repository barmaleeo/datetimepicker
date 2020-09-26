import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment';
import Day from "./Day";

const WeekStyled = styled.tr`
`;


const DayHeadStyled = styled.th`
    width: 14.2857142%;
    border: 1px solid #ddd;
    color: #666;
    font-size: 12px;
    vertical-align: middle;
    padding: 0;
    border-collapse: collapse;
    height: 25px;
    background: #f1f1f1;
    font-weight: 700;
    text-align: center;
    //color: #999;
    cursor: default;
`;




export default class Week extends Component {

    render() {
        const p = this.props;
        const days = [];
        for(let i= 0; i< 7; i++){
            days.push(moment(p.start).add(i, 'days'))
        }
        return (
            <WeekStyled className="">
                {days.map((i, k) => p.head?
                    <DayHeadStyled key={k}>{i.format('ddd')}</DayHeadStyled>:
                    <Day key={k} day={i} value={p.value}
                         disabled={p.disabled}
                         min={p.min} max={p.max}
                         onChange={p.onChange}/>)
                }
            </WeekStyled>
        )
    }
}