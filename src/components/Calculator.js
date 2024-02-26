import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Calculator() {

    function checkPhoneOrientation() {
        var orientations = $('.orientation');
        orientations.each((i, el) => {
            const $this = $(el);
            $this.on('click', () => { 
                const $calculator = $('#calculator');
                if($calculator.length > 0){
                    if($this.hasClass('vertical'))
                        $calculator.addClass('horizontal').removeClass('vertical');
                    else
                        $calculator.addClass('vertical').removeClass('horizontal');
                };
            })
        })
    }

    useEffect(() => {
        checkPhoneOrientation();
    });

  return (
    <div id="calculator">
        <div className="display-value">0</div>
        <div className="advanced"></div>
        <div className="basic">
            <span id="ac" className="btn btn-light">AC</span>
            <span id="special" className="btn btn-light">+/-</span>
            <span id="percentage" className="btn btn-light">%</span>
            <span id="division" className="btn btn-operator">/</span>

            <span id="seven" className="btn btn-dark">7</span>
            <span id="eight" className="btn btn-dark">8</span>
            <span id="nine" className="btn btn-dark">9</span>
            <span id="multiplication" className="btn btn-operator">X</span>

            <span id="four" className="btn btn-dark">4</span>
            <span id="five" className="btn btn-dark">5</span>
            <span id="six" className="btn btn-dark">6</span>
            <span id="subtraction" className="btn btn-operator">-</span>

            <span id="one" className="btn btn-dark">1</span>
            <span id="two" className="btn btn-dark">2</span>
            <span id="three" className="btn btn-dark">3</span>
            <span id="addition" className="btn btn-operator">+</span>

            <span id="zero" className="btn btn-long btn-dark">0</span>
            <span id="decimal" className="btn btn-decimal btn-dark">.</span>
            <span id="equals" className="btn btn-equal btn-operator">=</span>
        </div>
    </div>
  )
}
