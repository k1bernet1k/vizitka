import React, {Component} from "react";
import Vizitka from "./vizitka";
import './main.css';

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Name",
            company: "Company",
            phone: "Phone",
            email: "Email",
            fonColor:"",
            textColor: "black",
            icon: "/icons/1.svg",
            bImage: ""
        };
        this.changeName = this.changeName.bind(this);
        this.changeCompany = this.changeCompany.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.fonChange = this.fonChange.bind(this);
        this.textColorChange = this.textColorChange.bind(this);
        this.iconChange = this.iconChange.bind(this);
        this.bImageChange = this.bImageChange.bind(this);
    }
    changeName(e) {
        var val = e.target.value;
        this.setState({name: val});
    }
    changeCompany(e) {
        var val = e.target.value;
        this.setState({company: val});
    }
    changePhone(e) {
        var val = e.target.value;
        this.setState({phone: val});
    }
    changeEmail(e) {
        var val = e.target.value;
        this.setState({email: val});
    }
    fonChange(event) {
        this.setState({fonColor: event.target.value});
    }
    textColorChange(e){
        this.setState({textColor: e.target.value});
    }
    iconChange(e){
        this.setState({icon: e.target.value});
    }
    bImageChange(e){
        this.setState({bImage: e.target.value});
    }

    render() {
        return(
            <div>
                <Vizitka
                    name={this.state.name}
                    company={this.state.company}
                    phone={this.state.phone}
                    email={this.state.email}
                    fonColor={this.state.fonColor}
                    textColor={this.state.textColor}
                    icon={this.state.icon}
                    bImage={this.state.bImage}
                />

                <p>Имя:
                    <input type="text" onChange={this.changeName}/>
                </p>
                <p>Компания:
                    <input type="text" onChange={this.changeCompany}/>
                </p>
                <p>Телефон:
                    <input type="text" onChange={this.changePhone}/>
                </p>
                <p>Email:
                    <input type="text" onChange={this.changeEmail}/>
                </p>
                <p>Фон:
                    <select value={this.state.fonColor} onChange={this.fonChange}>
                        <option value="blue" style={{background:'blue'}}>blue</option>
                        <option value="green" style={{background:'green'}}>green</option>
                        <option value="purple" style={{background:'purple'}}>purple</option>
                        <option value="" selected>Нет</option>
                    </select>
                </p>
                <p>Цвет текста:
                    <select value={this.state.textColor} onChange={this.textColorChange}>
                        <option value="black" style={{background:'black'}}>black</option>
                        <option value="red" style={{background:'red'}}>red</option>
                        <option value="orange" style={{background:'orange'}}>orange</option>
                    </select>
                </p>
                <p>Иконка:
                    <select value={this.state.icon} onChange={this.iconChange}>
                        <option value="/icons/1.svg" selected>1</option>
                        <option value="/icons/2.svg">2</option>
                        <option value="/icons/3.svg">3</option>
                        <option value="/icons/4.svg">4</option>
                        <option value="/icons/5.svg">5</option>
                    </select>
                </p>
                <p>Фоновое изображение:
                    <select value={this.state.bImage} onChange={this.bImageChange}>
                        <option value="/backImages/1.webp">1</option>
                        <option value="/backImages/2.webp">2</option>
                        <option value="/backImages/3.webp">3</option>
                        <option value="" selected>Нет</option>
                    </select>
                </p>
            </div>
        );
    }
}