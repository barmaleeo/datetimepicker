import React, {Component} from 'react';
import styled from 'styled-components'
import moment from "moment";

const DayStyled = styled.td`
    width: 14.2857142%;
    background: #f5f5f5;
    border: 1px solid #ddd;
    color: #666;
    font-size: 12px;
    text-align: right;
    vertical-align: middle;
    padding: 0 5px 0 0;
    border-collapse: collapse;
    cursor: pointer;
    height: 25px;
    opacity: 0.5;
    &.d-disabled{
      opacity: 0.2;
      cursor: default;
    }
    &.m-same{
      opacity: 1;
      &.d-disabled{
        opacity: 0.5;
      }
    }
    &.d-same{
       background: #33aaff;
       box-shadow: #178fe5 0 1px 3px 0 inset;
       color: #fff;
       font-weight: 700;
    }
    &:hover{
      color: #fff !important;
      background: #ff8000 !important;
      box-shadow: none !important;
    }
`;

export default class Day extends Component {
    onChange = (e) => {
        const p = this.props;
        let date = moment(p.value)
            .year(p.day.year())
            .month(p.day.month())
            .date(p.day.date());
        if(p.min && date.isBefore(p.min)){
            date = p.min;
        }else if(p.max && date.isAfter(p.max)){
            date = p.max;
        }
        p.onChange(date, e);
    }
    render() {
        const p = this.props;
        let dayClass = '';
        let delimiter = '';
        if(p.day.isSame(p.value, 'month')){
            dayClass += delimiter + 'm-same';
            delimiter = ' ';
        }
        if(p.day.isSame(p.value, 'day')){
            dayClass += delimiter + 'd-same';
            delimiter = ' ';
        }
        let onClick = this.onChange;
        if((p.min && p.day.isBefore(p.min, 'day'))
            || (p.max && p.day.isAfter(p.max, 'day'))){
            dayClass += delimiter + 'd-disabled';
            onClick = null;
            //delimiter = ' ';
        }
        return (
            <DayStyled className={dayClass} onClick={onClick}>
                {p.day.date()}
            </DayStyled>
        )
    }
}