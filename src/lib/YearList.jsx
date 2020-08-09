import React, {Component} from 'react';
import styled from 'styled-components'
import ScrollArea from "react-scrollbar";
import moment from "moment";


export default class YearList extends Component {
    componentDidMount() {
        this.scrollRef.content.children[this.currentYearId].scrollIntoView({block:'center'});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollRef.content.children[this.currentYearId].scrollIntoView({block:'center'});
    }
    currentYearId = 25;
    renderYearItem = (i, n) => {
        let itemClass = 's-option';
        if(i.isSame(this.props.selected, 'year')){
            itemClass += ' i-current';
            this.currentYearId = n
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
        const years = [];
        for (let i = p.selected.year() - 50; i<p.selected.year() + 50;i++){
            years.push(moment(p.selected).year(i))
        }

        return (

            <ScrollArea className="f-l-scrolling h-months"
                        ref={e => {this.scrollRef = e}}>
                {years.map(this.renderYearItem)}
            </ScrollArea>
        )
    }
}