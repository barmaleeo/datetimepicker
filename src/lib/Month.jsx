import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment';
import Week from "./Week";

const MonthStyled = styled.table`
    border-collapse: collapse;
    width: 100%;
    min-width: 225px;
`;


export default class Month extends Component {
    render() {
        const p = this.props;
        const startDate = moment(p.selected);
        startDate.subtract(startDate.date() - 1, 'days')
        startDate.subtract(startDate.days(), 'days')
        const weeks = [startDate];
        let startWeek = moment(startDate);
        do {
            startWeek = moment(startWeek);
            startWeek.add(7, 'days');
            if(p.selected.isSame(startWeek, 'month')){
                weeks.push(startWeek);
            }else{
                break;
            }
        }while (true);
        return (
            <MonthStyled className="">
                <thead>
                    <Week start={startDate} head/>
                </thead>
                <tbody>
                {weeks.map((w,n) =>
                    <Week key={n} start={w} value={p.value}
                          dateMin={p.dateMin} dateMax={p.dateMax}
                          onChange={p.onChange}/>
                )}
                </tbody>
            </MonthStyled>
        )
    }
}