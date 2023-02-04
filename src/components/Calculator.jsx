import React from "react";
import { useState } from "react";
import "./Calculator.css";
export default function Calculator(){

    const[num, setNum] = useState(0);
    const[oldNum, setoldNum] = useState("");
    const[history, setHistory] = useState("");
    const[operator, setOperator] = useState("");

    function inputNum(e){
        setNum(num === 0 ? e.target.value : num + e.target.value);
    }

    function clear(){
        setNum(0);
        setoldNum(null);
        setHistory(null);
    }

    function percentual(e){
        setNum(num/100)
    }

    function signChanger(){
        num > 0 ? setNum(-num) : setNum(Math.abs(num));
    }

    function operationHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setoldNum(num);
        setHistory(num + " " + operatorInput);
        setNum(0);
    }

    function calculation(){
        if(operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num));//parseFloat avoids concatenation of numbers as strings
            setHistory(history + " " + num + " =");
        }else if(operator === "-"){
            setNum(oldNum - num);
            setHistory(history + " " + num + " =");
        }else if(operator === "X"){
            setNum(oldNum * num);
            setHistory(history + " " + num + " =");
        }else if(operator === "/"){
            setNum(oldNum / num);
            setHistory(history + " " + num + " =");
        }
    }

    return(
            <div className='wrapper'>
                <div className="history">
                    <h3>{history}</h3>
                </div>
            <h1 className="result">{num}</h1>
            <div className="row">
                <div className="col-3">
                    <button className="btn light-gray" onClick={clear}>AC</button>
                </div>
                <div className="col-3">
                    <button className="btn light-gray" onClick={signChanger}>+/-</button>
                </div>
                <div className="col-3">
                    <button className="btn light-gray" onClick={percentual}>%</button>
                </div>
                <div className="col-3">
                    <button className="btn light-gray" value={"/"} onClick={operationHandler}>/</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn gray" value="7" onClick={inputNum}>7</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value="8" onClick={inputNum}>8</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value="9" onClick={inputNum}>9</button>
                </div>
                <div className="col-3">
                    <button className="btn cyan" value={"X"} onClick={operationHandler}>X</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn gray" value="4" onClick={inputNum}>4</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value="5" onClick={inputNum}>5</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value="6" onClick={inputNum}>6</button>
                </div>
                <div className="col-3">
                    <button className="btn cyan" value={"-"} onClick={operationHandler}>-</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn gray" value="1" onClick={inputNum}>1</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value="2" onClick={inputNum}>2</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value="3" onClick={inputNum}>3</button>
                </div>
                <div className="col-3">
                    <button className="btn cyan" value={"+"} onClick={operationHandler}>+</button>
                </div>
            </div>
            <div className="row">
                
                <div className="col-6">
                    <button className="zero gray" value="0" onClick={inputNum}>0</button>
                </div>
                <div className="col-3">
                    <button className="btn gray" value={"."} onClick={inputNum}>,</button>
                </div>
                <div className="col-3">
                    <button className="btn cyan" onClick={calculation}>=</button>
                </div>
            </div>
            </div>
    )
}