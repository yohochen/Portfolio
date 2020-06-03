import React from 'react';
import './Timeline.css'

function Timeline() {
    return (
        <section id="timeline" className="section-timeline">
            <div className="row timelineTitle">
              <h2>Timeline</h2>
            </div>
            <div id="cd-timeline" className="cd-container">

        		<div className="cd-timeline-block">
        			<div className="cd-timeline-img cd-movie">
        			</div>

        			<div className="cd-timeline-content">
        				<h2>Software Engineer - AWS </h2>
        				<p>Worked to launch a PaaS product in Amazon Web Service using various native AWS technologies. Focused on microserice API design and implmentation, NoSQL database building, operational metrics monitoring and maintainance.</p>
        				<span className="cd-date">2018-2019</span>
        			</div>
        		</div>

        		<div className="cd-timeline-block">
        			<div className="cd-timeline-img cd-picture">
        			</div>

        			<div className="cd-timeline-content">
        				<h2>Software Engineering BS - SJSU </h2>
        				<p>Bachelor degree of Software Engineer @ San Jose State Univeristy</p>
        				<span className="cd-date">2014-2017</span>
        			</div>
        		</div>
    	    </div>
        </section>
    )
}

export default Timeline;
