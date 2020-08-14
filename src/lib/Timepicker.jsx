import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment';
import ScrollArea from 'react-scrollbar';

const TimepickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    &.b-top{
      float: none;
      height: 15px;
      width: 30px;
      display: block;
      //margin-left: 14px;
      background-position: -40px 0;
      margin-bottom: 7px;
      margin-top: 9px;
    }
    &.b-bottom{
      float: none;
      background-position: -40px -15px;
      height: 15px;
      width: 30px;
      display: block;
      margin-bottom: 4px;
      margin-top: 7px;
    }
    &:hover{
      opacity: 1;
    } 
  }
  .tp-scroll{
    width: 56px;
  }
  .tp-item{
    background: #f5f5f5;
    border-top: 1px solid #ddd;
    color: #666;
    font-size: 12px;
    text-align: center;
    border-collapse: collapse;
    cursor: pointer;
    border-bottom-width: 0;
    height: 25px;
    line-height: 25px;
    &.i-current{
      background: #33aaff;
      box-shadow: #178fe5 0 1px 3px 0 inset;
      color: #fff;
      font-weight: 700;
    }
    &.i-disabled{
      opacity: 0.5;
      cursor: default;
    }
    &:hover{
      color: #fff !important;
      background: #ff8000 !important;
      box-shadow: none !important;
    }
  }
`;


export default class Timepicker extends Component {
    componentDidMount() {
        const content = this.scrollRef.content;
        const current = content.children[this.current];
        const parent = content.parentNode;
        parent.scrollTop = current.offsetTop - (parent.clientHeight - current.offsetHeight)/2;
    }
    current = 0;
    renderItem = (i, n) => {
        let itemClass = 'tp-item';
        let onClick= this.props.onChange.bind(this, i);
        if(this.props.value.isSame(i)){
            itemClass += ' i-current';
            this.current = n;
        }
        if(this.props.dateMin && i.isBefore(this.props.dateMin)){
            itemClass += ' i-disabled';
            onClick = null;
        }else if(this.props.dateMax && i.isAfter(this.props.dateMax)){
            itemClass += ' i-disabled';
            onClick = null;
        }
        return (
            <div key={n} className={itemClass}
                 onClick={onClick}>
                {i.format('HH:mm')}
            </div>
        )
    }
    onClickUp = () => {
        const content = this.scrollRef.content;
        const parent = content.parentNode;
        parent.scrollTop -=  parent.clientHeight;
    }
    onClickDown = () => {
        const content = this.scrollRef.content;
        const parent = content.parentNode;
        parent.scrollTop +=  parent.clientHeight;
    }

    render() {
        const p = this.props;
        const times = [];
        const minParts = p.min?p.min.split(':'):[];
        let time = moment(p.selected);
        if(minParts[0]>=0){
            time.hour(minParts[0])
        }else{
            time.hour(0)
        }
        if(minParts[1]>=0){
            time.minute(minParts[1])
        }else{
            time.minute(0)
        }
        if(minParts[2]>=0){
            time.second(minParts[2])
        }else{
            time.second(0)
        }
        time.millisecond(0);

        const maxParts = p.max?p.max.split(':'):[];
        const maxTime = moment(p.selected)
            .hour(maxParts[0]>=0?maxParts[0]:23)
            .minute(maxParts[1]>=0?maxParts[1]:59)
            .second(maxParts[2]>=0?maxParts[2]:59)
            .millisecond(999);

        while(time.isSameOrBefore(maxTime)){
            times.push(time)
            time = moment(time).add(p.step>0?p.step:60, 'minutes');
        }
        return (
            <TimepickerStyled className="">
                <button className="dtp-img-btn b-top"
                        onClick={this.onClickUp}/>
                <ScrollArea className="tp-scroll"
                            ref={e=>{this.scrollRef = window.scrollRef = e}}
                            style={{maxHeight: (p.rows*26-1) +'px'}}
                           horisontal={false} stopScrollPropagation>
                    {times.map(this.renderItem)}
                </ScrollArea>
                <button className="dtp-img-btn b-bottom"
                        onClick={this.onClickDown}/>
            </TimepickerStyled>
        )
    }
}