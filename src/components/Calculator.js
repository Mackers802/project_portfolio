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

        if($this.hasClass('advanced'))
            return;

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

    const calc_buttons = [
        {id: 'paren-l', class: 'btn-xtra-dark advanced', content: '(', type: 'operator'},
        {id: 'paren-r', class: 'btn-xtra-dark advanced', content: ')', type: 'operator'},
        {id: 'mc', class: 'btn-xtra-dark advanced', content: 'MC', type: 'operator'},
        {id: 'm-plus', class: 'btn-xtra-dark advanced', content: 'M+', type: 'operator'},
        {id: 'm-minus', class: 'btn-xtra-dark advanced', content: 'M-', type: 'operator'},
        {id: 'mr', class: 'btn-xtra-dark advanced', content: 'MR', type: 'operator'},
        {id: 'ac', class: 'btn-light', content: 'AC', type: 'operator'},
        {id: 'special', class: 'btn-light', content: '+/-', type: 'operator'},
        {id: 'percentage', class: 'btn-light', content: '%', type: 'operator'},
        {id: 'division', class: 'btn-light', content: '/', type: 'operator'},
        {id: '2nd', class: 'btn-xtra-dark advanced', content: '2nd', type: 'operator'},
        {id: 'x-squared', class: 'btn-xtra-dark advanced', content: 'x²', type: 'operator'},
        {id: 'x-cubed', class: 'btn-xtra-dark advanced', content: 'x³', type: 'operator'},
        {id: 'x-y', class: 'btn-xtra-dark advanced', content: 'x^y', type: 'operator'},
        {id: 'e-x', class: 'btn-xtra-dark advanced', content: 'e^x', type: 'operator'},
        {id: 'ten-x', class: 'btn-xtra-dark advanced', content: '10^x', type: 'operator'},
        {id: 'seven', class: 'btn-dark', content: '7', type: 'number'},
        {id: 'eight', class: 'btn-dark', content: '8', type: 'number'},
        {id: 'nine', class: 'btn-dark', content: '9', type: 'number'},
        {id: 'multiplication', class: 'btn-operator', content: 'x', type: 'operator'},
        {id: 'one-div-x', class: 'btn-xtra-dark advanced', content: '1/x', type: 'operator'},
        {id: 'two-x', class: 'btn-xtra-dark advanced', content: '2√x', type: 'operator'},
        {id: 'three-x', class: 'btn-xtra-dark advanced', content: '3√x', type: 'operator'},
        {id: 'y-x', class: 'btn-xtra-dark advanced', content: 'y√x', type: 'operator'},
        {id: 'ln', class: 'btn-xtra-dark advanced', content: 'ln', type: 'operator'},
        {id: 'log-10', class: 'btn-xtra-dark advanced', content: '10log', type: 'operator'},
        {id: 'four', class: 'btn-dark', content: '4', type: 'number'},
        {id: 'five', class: 'btn-dark', content: '5', type: 'number'},
        {id: 'six', class: 'btn-dark', content: '6', type: 'number'},
        {id: 'subtraction', class: 'btn-operator', content: '-', type: 'operator'},
        {id: 'x!', class: 'btn-xtra-dark advanced', content: 'x!', type: 'operator'},
        {id: 'sin', class: 'btn-xtra-dark advanced', content: 'sin', type: 'operator'},
        {id: 'cos', class: 'btn-xtra-dark advanced', content: 'cos', type: 'operator'},
        {id: 'tan', class: 'btn-xtra-dark advanced', content: 'tan', type: 'operator'},
        {id: 'e', class: 'btn-xtra-dark advanced', content: 'e', type: 'operator'},
        {id: 'ee', class: 'btn-xtra-dark advanced', content: 'EE', type: 'operator'},
        {id: 'one', class: 'btn-dark', content: '1', type: 'number'},
        {id: 'two', class: 'btn-dark', content: '2', type: 'number'},
        {id: 'three', class: 'btn-dark', content: '3', type: 'number'},
        {id: 'addition', class: 'btn-operator', content: '+', type: 'operator'},
        {id: 'rad', class: 'btn-xtra-dark advanced', content: 'Rad', type: 'operator'},
        {id: 'sinh', class: 'btn-xtra-dark advanced', content: 'sinh', type: 'operator'},
        {id: 'cosh', class: 'btn-xtra-dark advanced', content: 'cosh', type: 'operator'},
        {id: 'tanh', class: 'btn-xtra-dark advanced', content: 'tanh', type: 'operator'},
        {id: 'pie', class: 'btn-xtra-dark advanced', content: 'π', type: 'operator'},
        {id: 'rand', class: 'btn-xtra-dark advanced', content: 'Rand', type: 'operator'},
        {id: 'zero', class: 'btn-long btn-dark', content: '0', type: 'number'},
        {id: 'decimal', class: 'btn-decimal btn-dark', content: '.', type: 'operator'},
        {id: 'equals', class: 'btn-equal btn-operator', content: '=', type: 'operator'},
    ];

    const btns = calc_buttons.map((btn, i) => {
        return <span key={i} id={btn.id} className={'btn ' + btn.class} onClick={handle_btn_press} >{btn.content}</span>
    })

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
        <div id="calculator" className="vertical">
            <div className="display-value">{commaValue(value)}</div>
            <div className="buttons_wrapper">{btns}</div>
        </div>
  )
}
