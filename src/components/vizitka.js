import React, {Component} from "react";
import './vizitka.css';

export default class Vizitka extends Component{
    render() {
        return (
            <div style={{
                background:this.props.fonColor,
                backgroundImage: `url(${this.props.bImage})`
            }}>
                <img src={this.props.icon} width="100" height="100"/>
                <h3 style={{color:this.props.textColor}} id="name">{this.props.name}</h3>
                <h3 style={{color:this.props.textColor}} id="company">{this.props.company}</h3>
                <h3 style={{color:this.props.textColor}} id="phone">{this.props.phone}</h3>
                <h3 style={{color:this.props.textColor}} id="email">{this.props.email}</h3>
            </div>
        );
    }
}