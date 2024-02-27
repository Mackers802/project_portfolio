import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function Calculator() {
    const [ value, setValue ] = useState('0')
    const [ memory, setMemory ] = useState(null)
    const [ operator, setOperator ] = useState(null)

    const handleSetMemory = (operator) => {
        if (operator !== null) {
            if (operator === '+') {
                setMemory(memory + parseFloat(value));
            } else if (operator === '-') {
                setMemory(memory - parseFloat(value));
            } else if (operator === 'x') {
                setMemory(memory * parseFloat(value));
            } else if (operator === '/') {
                setMemory(memory / parseFloat(value));
            }
        } else {
            setMemory(parseFloat(value));
        }
    }

    const commaValue = value => {
        if (value === '0') return value;
        let output = '';
        let decimal = '';
        let isNeg = false;

        if (value.includes('.')) {
            output = value.substring(0, value.indexOf('.'));
            decimal = value.substring(value.indexOf('.'));
        } else {
            output = value;
        }

        if (parseFloat(value) < 0) {
            isNeg = true;
            output = output.substring(1);
        }
      
        return isNeg
            ? '-' + parseFloat(output).toLocaleString() + decimal
            : parseFloat(output).toLocaleString() + decimal;
    };
    
    const handle_btn_press = (e) =>  { 
        const $this = $(e.target);
        const num = parseFloat(value);
        const content = $this.text();

        if (content === 'AC') {
            setValue('0');
            setMemory(null);
            setOperator(null);
            return;
        }

        if (content === '+/-') {
            setValue((num * -1).toString());
            return;
        }

        if (content === '%') {
            setValue((num / 100).toString());
            setMemory(null);
            setOperator(null);
            return;
         }

        if (content === '.') {
            if (value.includes('.')) return;
      
            setValue(value + '.');
            return;
        }

        if (content === '+') {
            handleSetMemory(operator);
            setValue('0');
            setOperator('+');
            return;
        }

        if (content === '-') {
            handleSetMemory(operator);
            setValue('0');
            setOperator('-');
            return;
        }
        
        if (content === 'x') {
            handleSetMemory(operator);
            setValue('0');
            setOperator('x');
            return;
        }

        if (content === '/') {
            handleSetMemory(operator);
            setValue('0');
            setOperator('/');
            return;
        }

        if (content === '=') {
            if (!operator) return;
      
            if (operator === '+') {
                setValue((memory + parseFloat(value)).toString());
            } else if (operator === '-') {
                 setValue((memory - parseFloat(value)).toString());
            } else if (operator === 'x') {
                setValue((memory * parseFloat(value)).toString());
            } else if (operator === '/') {
                setValue((memory / parseFloat(value)).toString());
            }

            setMemory(null);
            setOperator(null);
            return;
        }

        if (value[value.length - 1] === '.') {
            setValue(value + content);
        } else {
            setValue(parseFloat(num + content).toString());
        }

        e.preventDefault();
    }

    const calc_buttons = {
        basic: [
            {id: 'ac', class: 'btn-light', content: 'AC', type: 'operator'},
            {id: 'special', class: 'btn-light', content: '+/-', type: 'operator'},
            {id: 'percentage', class: 'btn-light', content: '%', type: 'operator'},
            {id: 'division', class: 'btn-light', content: '/', type: 'operator'},
            {id: 'seven', class: 'btn-dark', content: '7', type: 'number'},
            {id: 'eight', class: 'btn-dark', content: '8', type: 'number'},
            {id: 'nine', class: 'btn-dark', content: '9', type: 'number'},
            {id: 'multiplication', class: 'btn-operator', content: 'x', type: 'operator'},
            {id: 'four', class: 'btn-dark', content: '4', type: 'number'},
            {id: 'five', class: 'btn-dark', content: '5', type: 'number'},
            {id: 'six', class: 'btn-dark', content: '6', type: 'number'},
            {id: 'subtraction', class: 'btn-operator', content: '-', type: 'operator'},
            {id: 'one', class: 'btn-dark', content: '1', type: 'number'},
            {id: 'two', class: 'btn-dark', content: '2', type: 'number'},
            {id: 'three', class: 'btn-dark', content: '3', type: 'number'},
            {id: 'addition', class: 'btn-operator', content: '+', type: 'operator'},
            {id: 'zero', class: 'btn-long btn-dark', content: '0', type: 'number'},
            {id: 'decimal', class: 'btn-decimal btn-dark', content: '.', type: 'operator'},
            {id: 'equals', class: 'btn-equal btn-operator', content: '=', type: 'operator'},
        ],
        advanced: [
            
        ]
    }

    const basic_buttons = calc_buttons.basic.map((btn, i) => {
        return <span key={i} id={btn.id} className={'btn ' + btn.class} onClick={handle_btn_press} type={btn.type}>{btn.content}</span>
    })

    // const advanced_buttons = calc_buttons.advanced.map((btn, i) => {
    //     return <span id={btn.id} className={'btn ' + btn.class} onClick={handle_btn_press} >{btn.content}</span>
    // })
    // <div className="advanced">{advanced_buttons}</div>

    useEffect(() => {
        checkPhoneOrientation();
    });
    function checkPhoneOrientation() {
        var orientations = $('.orientation');
        orientations.each((i, el) => {
            const $this = $(el);
            $this.on('click', () => { 
                const $calculator = $('#calculator');
                if ($calculator.length > 0){
                    if ($this.hasClass('vertical'))
                        $calculator.addClass('horizontal').removeClass('vertical');
                    else
                        $calculator.addClass('vertical').removeClass('horizontal');
                };
            })
        })
    }

    return (
        <div id="calculator">
            <div className="display-value">{commaValue(value)}</div>
            <div className="basic">{basic_buttons}</div>
        </div>
  )
}
