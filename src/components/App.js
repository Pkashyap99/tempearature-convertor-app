import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import  {useDarkMode} from "./useDarkMode"
import Toggle from "./Toggler"
import { lightTheme, darkTheme } from "./Themes"
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react';

const App = () => {

    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const tempreatureUnits = [
        { key: 'Celsius', text: 'Celsius [°C]', value: 'Celsius' },
        { key: 'Fahrenheit', text: 'Fahrenheit [°F]', value: 'Fahrenheit' },
        { key: 'Kelvin', text: 'Kelvin [K]', value: 'Kelvin' },
    ]

    const [value1, setValue1] = useState('Celsius');
    const [value2, setValue2] = useState('Select Unit');
    const [valueConvert, setValueConvert] = useState(0);


    const swapOperation = () => {
        setValue1(value2);
        setValue2(value1);
    }

    const calculatedValue = () => {

        let convertedValue = 0;

        //======================= Celsius ============================
        if (value1 === "Celsius" && value2 === "Celsius") {
            convertedValue = Number(valueConvert);
        }
        if (value1 === "Celsius" && value2 === "Fahrenheit") {
            convertedValue = 1.8 * Number(valueConvert) + 32;
        }
        if (value1 === "Celsius" && value2 === "Kelvin") {
            convertedValue = Number(valueConvert) + 273;
        }

        //======================= Fahrenheit =========================
        if (value1 === "Fahrenheit" && value2 === "Fahrenheit") {
            convertedValue = Number(valueConvert);
        }
        if (value1 === "Fahrenheit" && value2 === "Celsius") {
            convertedValue = (Number(valueConvert) - 32) * 5 / 9;
        }
        if (value1 === "Fahrenheit" && value2 === "Kelvin") {
            convertedValue = (Number(valueConvert) + 459.67) * 5 / 9;
        }

        //======================= KELVIN =============================
        if (value1 === "Kelvin" && value2 === "Kelvin") {
            convertedValue = Number(valueConvert);
        }
        if (value1 === "Kelvin" && value2 === "Celsius") {
            convertedValue = Number(valueConvert) - 273.15;
        }
        if (value1 === "Kelvin" && value2 === "Fahrenheit") {
            convertedValue = (Number(valueConvert) * 9 / 5) - 459.67;
        }

        if (value1 === "Rankine" && value2 === "Celsius") {
            convertedValue = (Number(valueConvert) - 491.67) * 5 / 9;
        }
        if (value1 === "Rankine" && value2 === "Fahrenheit") {
            convertedValue = Number(valueConvert) - 459.67;
        }
        if (value1 === "Rankine" && value2 === "Kelvin") {
            convertedValue = Number(valueConvert) * 5 / 9;
        }

        if (value1 === "Réaumur" && value2 === "Celsius") {
            convertedValue = Number(valueConvert) * 5 / 4;
        }
        if (value1 === "Réaumur" && value2 === "Fahrenheit") {
            convertedValue = (Number(valueConvert) * 9 / 4) + 32;
        }
        if (value1 === "Réaumur" && value2 === "Kelvin") {
            convertedValue = (Number(valueConvert) * 5 / 4) + 273.15;
        }

        return convertedValue;
    }


    return (
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
        <div>
        <Toggle theme={theme} toggleTheme={themeToggler} />
            <div className="ui raised very padded container segment" style={{ marginTop: "10px", width: "930px" }}>

                <h2 className="ui header block aligned icon center">
                    <div className="ui pointing below label swaptext" theme={theme} toggleTheme={themeToggler}>
                        Click to swap.
                    </div>
                    <i style={{ cursor: "pointer" }} className="circular exchange icon"
                        onClick={() => swapOperation()}></i>
                    Temperature Converter
                </h2>

                <div className="ui placeholder segment">

                    <div className="ui two column stackable very relaxed grid">

                        <div className="ui vertical divider">
                            {value1 === "Select Unit" ? "" : value1} To {value2 === "Select Unit" ? "" : value2}
                        </div>

                        <div className="middle aligned column">
                            <div className="ui form">
                                <div className="field">
                                    <div className="ui input focus ">
                                        <input type="number" onChange={(e) => setValueConvert(e.target.value)}
                                            value={valueConvert} placeholder="Value to convert" />
                                    </div>
                                </div>
                                <div className="field">
                                    <Dropdown
                                        onChange={(event, data) => setValue1(data.value)}
                                        button
                                        className='icon'
                                        floating
                                        labeled
                                        icon='caret down'
                                        options={tempreatureUnits}
                                        search
                                        text={value1}

                                    />
                                </div>
                            </div>
                        </div>


                        <div className="middle aligned column">
                            <div className="ui form">
                                <div className="field">
                                    <div className="ui label big">
                                        {calculatedValue()}
                                    </div>
                                </div>
                                <div className="field">
                                    <Dropdown
                                        onChange={(event, data) => setValue2(data.value)}
                                        button
                                        className='icon'
                                        floating
                                        labeled
                                        icon='caret down'
                                        options={tempreatureUnits}
                                        search
                                        text={value2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </>
    </ThemeProvider>

    );

}


export default App;