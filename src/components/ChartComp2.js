/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React, { Component, Fragment } from 'react'
import Chart from "chart.js";

//modul-modul css Chart
import classes from "./ChartComp.module.css";

//Variabel global di luar file (window)
import { timestampDummyBuff,dummyBuff } from './RandomGen'
import { localDataset } from './WebSocketFetcher';
import { EngUnitConfig } from '../config/EngUnitConfig'
import ScaleDummy from '../config/ScaleDummy'

/************************ Deklarasi objek/variabel ***************************/
Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 0;

let theChart;
let theSelectedDevice;
let theDataset,theTimestamp;
let thelabel1Ref;
let convertedDummyBuff;

var randomID = 4;

/************************ Deklarasi kelas/komponen ***************************/
class ChartComp2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            deviceId: '1'
        }
        this.refSelector = React.createRef();
        this.label1Ref = React.createRef();
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
        thelabel1Ref = this.label1Ref;

        this.chartCompTimer = setInterval(function(){
            //console.log(`Device change to : ${theSelectedDevice}`);
            convertedDummyBuff = ScaleDummy(randomID,dummyBuff,EngUnitConfig);
            switch (theSelectedDevice) {
                case '1':
                    theDataset = [
                        {label: "Arus", data: localDataset[0].voltage1, fill: false, borderColor: "#FF00FF"}
                    ];
                    
                    theTimestamp = localDataset[0].timestamp;
                    //theTimestamp = timestampBuff_Unit_A1[0];
                    thelabel1Ref.current.innerHTML = "<b>Arus : </b>" + String(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
                    break;
                case '2':
                case '3':
                    theDataset = [];
                    theTimestamp = [];
                    thelabel1Ref.current.innerHTML = "<b>Arus : </b>" + String(0);
                    break;
                case '4':
                    theDataset = [
                        {
                            label: "Arus",
                            data: convertedDummyBuff[4],
                            fill: false,
                            borderColor: "#FF00FF"
                        }
                    ];
                    theTimestamp = timestampDummyBuff[0];
                    thelabel1Ref.current.innerHTML = "<b>Arus : </b>" + String(dummyBuff[4][dummyBuff[4].length-1]);
                    break;
                default:
                    theDataset = [
                        {
                            label: "Arus",
                            data: [10, 12, 11],
                            fill: false,
                            borderColor: "#FF00FF"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    thelabel1Ref.current.innerHTML = "<b>Arus : </b>" + String(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
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
                                suggestedMax: 10
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
                        <span id="Label1" ref={this.label1Ref}></span>
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

export default ChartComp2;