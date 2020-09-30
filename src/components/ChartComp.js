/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React, { Component, Fragment } from 'react'
import Chart from "chart.js";

//modul-modul css Chart
import classes from "./ChartComp.module.css";

//Variabel global di luar file (window)
import { timestampDummyBuff,dummyBuff} from './RandomGen'
import { localDataset } from './WebSocketFetcher';
//import scaleEU, { EngUnitConfig } from '../config/EngUnitConfig'
import { EngUnitConfig } from '../config/EngUnitConfig'
import ScaleDummy from '../config/ScaleDummy'
//asdf
/************************ Deklarasi objek/variabel ***************************/
Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 0;

let theChart;
let theSelectedDevice;
//let theSelectedDeviceInt;
let theDataset,theTimestamp;
let thelabel1Ref, thelabel2Ref, thelabel3Ref, thelabel4Ref;
let convertedDummyBuff;

var randomID = 4;

/************************ Deklarasi kelas/komponen ***************************/
class ChartComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            deviceId: '1'
        }
        this.refSelector = React.createRef();
        this.label1Ref = React.createRef();
        this.label2Ref = React.createRef();
        this.label3Ref = React.createRef();
        this.label4Ref = React.createRef();
        //this.changeDevice = this.changeDevice.bind(this);
    }
    static getDerivedStateFromProps(props,state){
        if (props.selectedDevice !== state.deviceId) {
            return {
                deviceId: String(props.selectedDevice),
            };
          }
        
        return null;
    }
    
    chartCompTimer=0;
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }
    componentDidUpdate() {
        clearInterval(this.chartCompTimer);
        this.buildChart();
        //console.log(`Device change to : ${this.state.deviceId}`);
    }
    componentWillUnmount(){
        clearInterval(this.chartCompTimer);
    }    

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        theSelectedDevice = this.state.deviceId;
        //theSelectedDeviceInt = parseInt(this.state.deviceId);
        thelabel1Ref = this.label1Ref;
        thelabel2Ref = this.label2Ref;
        thelabel3Ref = this.label3Ref;
        thelabel4Ref = this.label4Ref;

        this.chartCompTimer = setInterval(function(){
            /*
            convertedDummyBuff = dummyBuff;
            ScaleDummy(randomID,convertedDummyBuff,EngUnitConfig);
            */
            convertedDummyBuff = ScaleDummy(randomID,dummyBuff,EngUnitConfig);
            //console.log(`Device change to : ${theSelectedDevice}`);
            switch (theSelectedDevice) {
                case '1':
                    /*
                    theDataset = [
                        {label: "Voltage 1", data: Buff_Unit_A1[0], fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: Buff_Unit_A1[1], fill: false, borderColor: "#FF0000"},
                        {label: "Voltage 3", data: Buff_Unit_A1[2], fill: false, borderColor: "#0000FF"},
                        {label: "Voltage 4", data: Buff_Unit_A1[3], fill: false, borderColor: "#FFFF00"}
                    ];
                    */
                    theDataset = [
                        {label: "Voltage 1", data: localDataset[0].voltage1, fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: localDataset[0].voltage2, fill: false, borderColor: "#FF0000"},
                        {label: "Voltage 3", data: localDataset[0].voltage3, fill: false, borderColor: "#0000FF"},
                        {label: "Voltage 4", data: localDataset[0].voltage4, fill: false, borderColor: "#FFFF00"}
                    ];
                    
                    theTimestamp = localDataset[0].timestamp;
                    //theTimestamp = timestampBuff_Unit_A1[0];
                    thelabel1Ref.current.innerHTML = "<b>Voltage 1 : </b>" + String(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
                    thelabel2Ref.current.innerHTML = "<b>Voltage 2 : </b>" + String(localDataset[0].voltage2[localDataset[0].voltage2.length-1]);
                    thelabel3Ref.current.innerHTML = "<b>Voltage 3 : </b>" + String(localDataset[0].voltage3[localDataset[0].voltage3.length-1]);
                    thelabel4Ref.current.innerHTML = "<b>Voltage 4 : </b>" + String(localDataset[0].voltage4[localDataset[0].voltage4.length-1]);
                    break;
                case '2':
                    theDataset = [
                        {label: "Voltage 1", data: localDataset[1].voltage1, fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: localDataset[1].voltage2, fill: false, borderColor: "#FF0000"}
                    ];

                    theTimestamp = localDataset[0].timestamp;
                    thelabel1Ref.current.innerHTML = "<b>Voltage 1 : </b>" + String(localDataset[1].voltage1[localDataset[1].voltage1.length-1]);
                    thelabel2Ref.current.innerHTML = "<b>Voltage 2 : </b>" + String(localDataset[1].voltage2[localDataset[1].voltage2.length-1]);
                    thelabel3Ref.current.innerHTML = "<b>Voltage 3 : </b>" + String(localDataset[1].voltage3[localDataset[1].voltage3.length-1]);
                    thelabel4Ref.current.innerHTML = "<b>Voltage 4 : </b>" + String(localDataset[1].voltage4[localDataset[1].voltage4.length-1]);
                    break;
                case '3':
                    theDataset = [
                        {label: "Voltage 1", data: localDataset[2].voltage1, fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: localDataset[2].voltage2, fill: false, borderColor: "#FF0000"}
                    ];
                    theTimestamp = localDataset[0].timestamp;
                    thelabel1Ref.current.innerHTML = "<b>Voltage 1 : </b>" + String(localDataset[2].voltage1[localDataset[2].voltage1.length-1]);
                    thelabel2Ref.current.innerHTML = "<b>Voltage 2 : </b>" + String(localDataset[2].voltage2[localDataset[2].voltage2.length-1]);
                    break;
                case '4':
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: convertedDummyBuff[0],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: convertedDummyBuff[1],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: convertedDummyBuff[2],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: convertedDummyBuff[3],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = timestampDummyBuff[0];
                    thelabel1Ref.current.innerHTML = "<b>Voltage 1 : </b>" + String(dummyBuff[0][dummyBuff[0].length-1]);
                    thelabel2Ref.current.innerHTML = "<b>Voltage 2 : </b>" + String(dummyBuff[1][dummyBuff[1].length-1]);
                    thelabel3Ref.current.innerHTML = "<b>Voltage 3 : </b>" + String(dummyBuff[2][dummyBuff[2].length-1]);
                    thelabel4Ref.current.innerHTML = "<b>Voltage 4 : </b>" + String(dummyBuff[3][dummyBuff[3].length-1]);
                    break;
                default:
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 12, 11],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 9],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [11, 10, 11],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: [9, 11, 11],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    thelabel1Ref.current.innerHTML = "<b>Voltage 1 : </b>" + String(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
                    thelabel2Ref.current.innerHTML = "<b>Voltage 2 : </b>" + String(localDataset[0].voltage2[localDataset[0].voltage2.length-1]);
                    thelabel3Ref.current.innerHTML = "<b>Voltage 3 : </b>" + String(localDataset[0].voltage3[localDataset[0].voltage3.length-1]);
                    thelabel4Ref.current.innerHTML = "<b>Voltage 4 : </b>" + String(localDataset[0].voltage4[localDataset[0].voltage4.length-1]);
                    break;
            }
            

            theChart = new Chart(myChartRef, {
                type: "line",
                data: {
                    //Bring in data
                    labels: theTimestamp,
                    datasets: theDataset
                },
                options: {
                    //Customize chart options
                    // 2 item ini untuk membuat grafik bagus di mobile
                    responsive: true,
                    maintainAspectRatio: false,
                    // atur angka sumbu di sini
                    scales: {
                        yAxes: [{
                            ticks: {
                                //nilai minimal sumbu y
                                suggestedMin: 0,
                                //nilai maksimal sumbu y
                                suggestedMax: 15
                            }
                        }]
                    },
                    // untuk mematikan interaksi (mouseover,click), kosongkan array
                    events:[]
                }
            });

        //aslinya setinterval disini
            
            theChart.data.labels = theTimestamp;
            //console.log(theChart.data);
            theChart.data.datasets = theDataset;
            
            theChart.update();
            //console.log('Chart Updated!');
          },1000);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p className="centeredText">
                        <span id="Label1" ref={this.label1Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label2" ref={this.label2Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label3" ref={this.label3Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label4" ref={this.label4Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                </div>
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                    
                </div>
            </Fragment>
        );
    }
}

export default ChartComp;