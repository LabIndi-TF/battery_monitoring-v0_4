/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React,{Component} from 'react'

//modul-modul Bootstrap
//modul-modul Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import {EngUnitConfig} from '../config/EngUnitConfig'

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/

class EngUnitSetup extends Component{
    constructor(props){
        super(props);
        this.state = {
            deviceId:'1',
            config:{
                label1Min:EngUnitConfig[0].V1min,
                label1Max:EngUnitConfig[0].V1max,
                label2Min:EngUnitConfig[0].V2min,
                label2Max:EngUnitConfig[0].V2max,
                label3Min:EngUnitConfig[0].V3min,
                label3Max:EngUnitConfig[0].V3max,
                label4Min:EngUnitConfig[0].V4min,
                label4Max:EngUnitConfig[0].V4max,
                labelIMin:EngUnitConfig[0].Imin,
                labelIMax:EngUnitConfig[0].Imax,
            },
            status:'Config Loaded'
        }

        this.chosenDeviceId=0;

        this.changeDevice = this.changeDevice.bind(this);
        this.handleApply = this.handleApply.bind(this);
        
        this.configSpanRef = React.createRef();
        
        this.selectRef = React.createRef();

        this.label1minRef = React.createRef();
        this.label1maxRef = React.createRef();

        this.label2minRef = React.createRef();
        this.label2maxRef = React.createRef();

        this.label3minRef = React.createRef();
        this.label3maxRef = React.createRef();

        this.label4minRef = React.createRef();
        this.label4maxRef = React.createRef();
    }

    componentDidMount(){
        this.label1minRef.current.value = this.state.config.label1Min;
        this.label1maxRef.current.value = this.state.config.label1Max;
        this.label2minRef.current.value = this.state.config.label2Min;
        this.label2maxRef.current.value = this.state.config.label2Max;
        this.label3minRef.current.value = this.state.config.label3Min;
        this.label3maxRef.current.value = this.state.config.label3Max;
        this.label4minRef.current.value = this.state.config.label4Min;
        this.label4maxRef.current.value = this.state.config.label4Max;
        /*
        this.labelIminRef.current.value = this.state.config.labelIMin;
        this.labelImaxRef.current.value = this.state.config.labelIMax;
        */
    }

    componentDidUpdate(){}

    changeDevice() {
        this.chosenDeviceId = parseInt(this.selectRef.current.value)-1;
        this.setState({
            deviceId: String(this.chosenDeviceId),
        },()=>{
            this.label1minRef.current.value = EngUnitConfig[this.chosenDeviceId].V1min;
            this.label1maxRef.current.value = EngUnitConfig[this.chosenDeviceId].V1max;
            this.label2minRef.current.value = EngUnitConfig[this.chosenDeviceId].V2min;
            this.label2maxRef.current.value = EngUnitConfig[this.chosenDeviceId].V2max;
            this.label3minRef.current.value = EngUnitConfig[this.chosenDeviceId].V3min;
            this.label3maxRef.current.value = EngUnitConfig[this.chosenDeviceId].V3max;
            this.label4minRef.current.value = EngUnitConfig[this.chosenDeviceId].V4min;
            this.label4maxRef.current.value = EngUnitConfig[this.chosenDeviceId].V4max;
            //console.log(`Device changed to ${this.chosenDeviceId}`);
        });
        
    }

    handleApply(){
        this.chosenDeviceId = parseInt(this.selectRef.current.value)-1;
        EngUnitConfig[this.chosenDeviceId].V1min = this.label1minRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V1max = this.label1maxRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V2min = this.label2minRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V2max = this.label2maxRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V3min = this.label3minRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V3max = this.label3maxRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V4min = this.label4minRef.current.value;
        EngUnitConfig[this.chosenDeviceId].V4max = this.label4maxRef.current.value;

        this.setState({
            status:'Default config changed!'
        },() => {
            alert('Config change success!');
        });
    }

    render(){
        return(
            <>
                <div className="text-center">
                    <hr/>
                    <span hidden>Current State : <span id="configSpan" ref={this.configSpanRef}/>{this.state.status}</span>
                    <hr/>
                    <div>
                        <select id="nama" ref={this.selectRef} onChange={this.changeDevice}>
                            <option value="1">Unit_A1</option>
                            <option value="2">Unit_A2</option>
                            <option value="3">Unit_B1</option>
                            <option value="4">Dummy</option>
                        </select>
                        <div className="text-center"> <pre>&nbsp;</pre>
                            <Container className="SetupContainer">
                                <Row>
                                    <Col><b>Param</b></Col>
                                    <Col>0%</Col><Col>100%</Col>
                                </Row>
                                <Row>
                                    <Col><b>Voltage 1 : </b></Col>
                                    <Col><input ref={this.label1minRef}/></Col>
                                    <Col><input ref={this.label1maxRef}/></Col>
                                </Row> &nbsp; &nbsp; &nbsp; &nbsp;
                                <Row>
                                    <Col><b>Voltage 2 : </b></Col>
                                    <Col><input ref={this.label2minRef}/></Col>
                                    <Col><input ref={this.label2maxRef}/></Col>
                                </Row> &nbsp; &nbsp; &nbsp; &nbsp;
                                <Row>
                                    <Col><b>Voltage 3 : </b></Col>
                                    <Col><input ref={this.label3minRef}/></Col>
                                    <Col><input ref={this.label3maxRef}/></Col>
                                </Row> &nbsp; &nbsp; &nbsp; &nbsp;
                                <Row>
                                    <Col><b>Voltage 4 : </b></Col>
                                    <Col><input ref={this.label4minRef}/></Col>
                                    <Col><input ref={this.label4maxRef}/></Col>
                                </Row> &nbsp; &nbsp; &nbsp; &nbsp;
                            </Container>
                            <Button onClick={this.handleApply}>Apply</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EngUnitSetup