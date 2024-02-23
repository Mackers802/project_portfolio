import React, { useEffect } from 'react';
import $ from 'jquery';
import gsap from "gsap";

export default function Section(props) {
    const header = props.props.title;
    const content = props.props.child;

    useEffect(() => {
      assignSectionToggle();
  });

  function toggleSectionBody(e){
      const $this = $(e.target);
      const $section = $this.parent();
      const $body = $this.siblings('.section-body');
      const $arrow = $this.children('.toggle_title-arrow').children('i')

      if($body.attr('data-status') === 'closed' ){
          $body.removeClass('remove-padding');
          $section.removeClass('closed-header');
          const tl = gsap.timeline({ defaults: {duration: .25}, onComplete:function(){
            $arrow.addClass('fa-angle-up').removeClass('fa-angle-down');
            $body.attr('data-status', 'open').removeClass('am-none').css({height: 'auto'})
          }})
            tl
              .fromTo($body, {height:'0px', opacity:0}, {height: $body.data('height') + 'px', opacity:1}, 'ease')
      }else{
          $body.attr('data-height', $body.height());
          $section.addClass('closed-header');
          const tl = gsap.timeline({ defaults: {duration: .25}, onComplete:function(){
            $arrow.addClass('fa-angle-down').removeClass('fa-angle-up');
            $body.attr('data-status','closed').addClass('remove-padding')
          }})
            tl
              .fromTo($body, {height: $body.data('height'), opacity:1}, {height:'0px', opacity:0}, 'ease')
      }
  }

  function assignSectionToggle() {
      const $styles = $('.page');
      var sections = $styles.children('.section');
      sections.each((i, el) => {
          const $section = $(el);
          const $toggleHeader = $section.children('.js-toggle_title');
          $toggleHeader.on('click', (e) => { e.preventDefault(); toggleSectionBody(e); })
      })
  }


    return (
      <div className='section'>
        <div className="section-header js-toggle_title">
          <div className="section-title"><h3>{header}</h3></div>
          <div className="toggle_title-arrow"><i className="fa fa-angle-up"></i></div>
        </div>
        <div className='section-body' data-status="open" >
          {content}
        </div>
      </div>
    )
}
