/************************** Import library/fungsi ****************************/
import React, { Component } from'react';
import ChartComp from './ChartComp'
import ChartComp2 from './ChartComp2'

//modul-modul Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
class Selector extends Component {
    constructor(){
        super()
        this.state ={
            deviceId: '1'
        }
        this.selectRef = React.createRef();
        this.namaDeviceRef = React.createRef();
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({
            deviceId: String(this.selectRef.current.value)
        })
        this.namaDeviceRef.current.innerHTML = this.selectRef.current.options[this.selectRef.current.selectedIndex].text;
        //console.log('Device change!');
    }

    render() {
        return(
            <div>
                <h3 hidden className="centeredH1" id="namaDevice" ref={this.namaDeviceRef}>Unit_A1</h3>
                {/*<button onClick={()=> this.changeResult()}>penced akuh</button>*/}
                <div className="text-center">
                    <span>Choose Device: </span>
                    <select id="nama" ref={this.selectRef} onChange={this.changeName}>
                        <option value="1">Battery</option>
                        <option value="2">Motor_Stepper</option>
                        <option value="3">Controller</option>
                        <option value="4">Dummy</option>
                    </select>
                </div>
                <Container>
                    <Row>
                        <Col md={6}><ChartComp selectedDevice={this.state.deviceId}/></Col>
                        <Col md={6}><ChartComp2 selectedDevice={this.state.deviceId}/></Col>
                    </Row>
                    {/*
                    <Row>
                        <Col>asdf</Col><Col>jkll</Col>
                    </Row>
                    */}
                </Container>
            </div>
        );
    }
}

export default Selector;