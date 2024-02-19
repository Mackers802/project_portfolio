import React from 'react';

export default function Buttons() {
    const buttons_data = [ {class: 'btn-1', text: 'Button' }, {class: 'btn-2', text: 'Button' }, {class: 'btn-3', text: 'Button' }, {class: 'btn-4', text: 'Button' }, {class: 'btn-5', text: 'Button' }, {class: 'btn-6', text: 'Button', addElm: <span className="text">Button</span> }, {class: 'btn-7', addElm: <span className="text">Button</span> }, {class: 'btn-8', text: 'Button' }, {class: 'btn-9', text: 'Button' } ]
    const formatted_buttons = buttons_data.map((d, i) => {
        let button = <div key={i} className="button-tile" ><button type="button" id={i} className={d.class} > { d.text } </button> </div>
        if(d.class === 'btn-6' || d.class === 'btn-7')
            button = <div key={i} className="button-tile" ><button type="button" id={i} className={d.class} > { d.addElm ? d.addElm : d.text} {d.text} </button> </div>
        return button;
    })
    return (
        <div className="buttons">
            {formatted_buttons}
        </div>
    )
}
