import React from 'react'

export default function SectionHeader(props) {
    const header = props.props;



    return (
      <div className="section-header js-toggle_title">
          <div className="section-title"><h3>{header.title}</h3></div>
          <div className="toggle_title-arrow"><i className="fa fa-angle-up"></i></div>
      </div>
    )
}
