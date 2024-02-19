import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import Buttons from '../components/Buttons';
import $ from 'jquery';
import gsap from "gsap";

export default function Styles() {
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
        const $styles = $('#styles');
        var sections = $styles.children('.section');
        sections.each((i, el) => {
            const $section = $(el);
            const $toggleHeader = $section.children('.js-toggle_title');
            $toggleHeader.on('click', (e) => { e.preventDefault(); toggleSectionBody(e); })
        })
    }

  return (
    <>
        <Navbar />
            <div id="styles">
                <div className='section'>
                    <SectionHeader  props={{ title: 'Buttons' }} />
                    <div className='section-body' data-status="open" >
                        <Buttons />
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}
