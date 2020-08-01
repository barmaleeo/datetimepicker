import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment';
import Month from "./Month";
import Timepicker from "./Timepicker";
import ScrollArea from 'react-scrollbar';


const DatetimepickerStyled = styled.div`
  position: relative;
  display: inline-block;
  font-size: 14px;
  .dtp-floating{
    position: absolute;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.506);
    background: #fff;
    border: 1px solid #ccc;
    border-bottom-color:  #bbb;
    color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 8px;
//    padding-left: 0;
    padding-top: 2px;
    z-index: 9999;
    box-sizing: border-box;
    display: flex;
    //display: none;
    >div:last-child{
      margin-left: 8px;
    }
  }
  &:hover{
    .dtp-floating{
      display: flex;
    }
  }

  
  .dtp-img-btn{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0NBRjI1NjM0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NBRjI1NjQ0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQ0FGMjU2MTQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0FGMjU2MjQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoNEP54AAAIOSURBVHja7Jq9TsMwEMcxrZD4WpBYeKUCe+kTMCACHZh4BFfHO/AAIHZGFhYkBBsSEqxsLCAgXKhbXYOTxh9pfJVP+qutnZ5s/5Lz2Y5I03QhWji2GIcgAokWgfCxNvcOCCGKqiSqhUp0laHOne05vdEyGMfkdxJDVjgwDlEQgYQBgx+ULJaWSXXS6r/ER5FBVR8VfGftTKcITNs+a1XpcFoExREIDF14AVIFxgQUS+h520cdud6wNkC0UBw6BCO/HoCYwBhD8QCkQ/x1mwDyD4plh4D6DDV0TAGyo4HcawLIBBSLDkHeH0Mg2yVP3l4TQMZQDDsEOl/MgHQqhMNuE0D+oBh0CIr8MAKyazBH9WyBuKxDWgbXfjNf32TZ1KWm/Ap1oSk/R53UtQ5xTh3LUlMmT8gt6g51Q9p+SobxgJQ/qmsfZhWywGFSl0yBjCLJCMgXail3b7+rumdVJ2YRss4cN+r6qAHDkPWjPjdJCF4n9RmAD/V9A/Wp4NQassDjwlB6XBiCxcJQWmZZb8THFilfy/lfrTvLghq2TqTHrRMTKNJ0sIhdo15RT+RpyWwFdY96UZ/LdQKBGjcXpcc1AlSFEfLmouD+1knuxBDUVrvOBmoOC/rEcN7OQxKVeJTCiAdUzUJhA2Oez9QTkp72OTVcxDcXY8iKNkxGAJXmJCOQwOa6dhyXsOa6XwEGAKdeb5ET3rQdAAAAAElFTkSuQmCC);
    background-color: transparent;
    background-repeat: no-repeat;
    border: 0 none;
    cursor: pointer;
    display: block;
    height: 30px;
    opacity: 0.5;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    outline: medium none;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-indent: 100%;
    white-space: nowrap;
    width: 20px;
    min-width: 0;
    &.b-prev{
      background-position: -20px 0;
    }
    &.b-caret{
      background-position: -92px -19px;
      display: inline-block;
      width: 9px;
      height: 20px;
      vertical-align: middle;
    }
    &.b-home{
      background-position: -70px 0;
    }
    &:hover{
      opacity: 1;
    }
    
  }
  .dtp-header{
    width: 100%;
    display: flex;
    align-items: center;
    .f-label{
      position: relative;
      padding: 5px 3px;
      line-height: 20px;
      font-weight: bold;
      color: rgb(51,51,51);
      cursor: pointer;
      &.h-month{
        flex:1;
        text-align: right;
      }
      .f-l-scrolling{
        display: none;
        position: absolute;
        background: #fff;
        width: 100%;
        height: 155px;
        z-index: 10;
        padding-right: 10px;
        padding-bottom: 10px;
        border: 1px solid #ccc;
        box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.506);
        .s-option{
          padding: 2px 10px 2px 5px;

          &:hover{
            color: #fff !important;
            background: #ff8000 !important;
            box-shadow: none !important;
          }
          &.i-current{
            background: #33aaff;
            box-shadow: #178fe5 0 1px 3px 0 inset;
            color: #fff;
            font-weight: 700;
          }
        }
      }
      &:hover{
        text-decoration: underline;
        .dtp-img-btn{
          opacity: 1.0;
        }
        .f-l-scrolling{
          display: block;
        }
      }
    }
  }
  .dtp-body{
    display: flex;
  }
`;


export default class Datetimepicker extends Component {
    state = {value:null, year: 0, month: 0}
    static getDerivedStateFromProps(nextProps, prevState){
        const ns = {}
        //ns.selected = moment(ns.value).hour(0).minute(0).second(0).millisecond(0);
        if(nextProps.value !== prevState.value){
            if(!nextProps.value){
                ns.value = moment().hour(12).minute(15).second(0).millisecond(0)
            }else{
                ns.value = moment(nextProps.value);
            }
        }
        if(!prevState.selected){
            ns.selected = Datetimepicker.getHomeDate(ns.value);
        }
        if(ns !== {}){
            return ns;
        }else {
            return null;
        }
    }
    static getHomeDate = (value) => {
        return moment(value).hour(0).minute(0).second(0).millisecond(0)
    }
    onChange = (value)=>{
        this.props.onChange(this.props.name, value)
    }
    onClickHome = () => {
        this.setState({selected: Datetimepicker.getHomeDate(this.state.value)})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }
    renderMonthItem = (i, n) => {
        let itemClass = 's-option';
        if(i.isSame(this.state.selected, 'month')){
            itemClass += ' i-current';
        }
        return (
            <div key={n} className={itemClass}
                 onClick={e=>{this.setState({selected:i})}}>
                {i.format('MMMM')}
            </div>
        )
    }
    renderYearItem = (i, n) => {
        let itemClass = 's-option';
        if(i.isSame(this.state.selected, 'year')){
            itemClass += ' i-current';
        }
        return (
            <div key={n} className={itemClass}
                 onClick={e=>{this.setState({selected:i})}}>
                {i.format('YYYY')}
            </div>
        )
    }
    render() {
        const p = this.props;
        const s = this.state;
        const months = [];
        for (let i = 0; i<12;i++){
            months.push(moment(s.selected).month(i))
        }
        const years = [];
        for (let i = s.selected.year() - 50; i<s.selected.year() + 50;i++){
            years.push(moment(s.selected).year(i))
        }
        return (
            <DatetimepickerStyled className={'input-group' + (p.sm?' input-group-sm':'')}>
                <input value={p.format?s.value.format(p.format):s.value.toString()}/>
                <div className="dtp-floating">
                    <div className="dtp-f-date">
                        <div className="dtp-header">
                            <button className="dtp-img-btn b-prev"
                                    onClick={e=>{this.setState({selected: moment(s.selected).subtract(1, 'month')})}}/>
                            <button className="dtp-img-btn b-home"
                                    onClick={this.onClickHome}/>
                            <div className="f-label h-month">
                                <span>{s.selected.format('MMMM')}</span>
                                <i className="dtp-img-btn b-caret"/>
                                <ScrollArea className="f-l-scrolling h-months">
                                    {months.map(this.renderMonthItem)}
                                </ScrollArea>
                            </div>
                            <div className="f-label f-year">
                                <span>{s.selected.format('YYYY')}</span>
                                <i className="dtp-img-btn b-caret"/>
                                <ScrollArea className="f-l-scrolling h-months">
                                    {years.map(this.renderYearItem)}
                                </ScrollArea>
                            </div>
                            <button className="dtp-img-btn b-next"
                                    onClick={e=>{this.setState({selected: moment(s.selected).add(1, 'month')})}}/>
                        </div>
                        <div className="dtp-body">
                            <Month value={s.value} selected={s.selected}
                                   dateMin={p.dateMin} dateMax={p.dateMax}
                                   onChange={this.onChange}/>
                        </div>
                    </div>
                    <Timepicker value={s.value} selected={s.value} rows={6}
                                dateMin={p.dateMin} dateMax={p.dateMax}
                                min={p.timeMin} max={p.timeMax} step={p.timeStep}
                                onChange={this.onChange}/>
                </div>
            </DatetimepickerStyled>
        )
    }
}