import React, {Component} from 'react';
import styled from 'styled-components'
import ScrollArea from "react-scrollbar";
import moment from "moment";


export default class YearList extends Component {
    componentDidMount() {
        const content = this.scrollRef.content;
        const current = content.children[this.currentId];
        const parent = content.parentNode;
        parent.scrollTop = current.offsetTop - (parent.clientHeight - current.offsetHeight)/2;
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.scrollRef.content.children[this.currentId].scrollIntoView({block:'center'});
    // }
    currentId = 25;
    renderYearItem = (i, n) => {
        let itemClass = 's-option';
        if(i.isSame(this.props.selected, 'year')){
            itemClass += ' i-current';
            this.currentId = n
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