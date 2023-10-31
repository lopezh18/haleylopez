import React from 'react';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { icons } from '../constants';

const timelineColors = {
  job: 'black',
  school: 'orange',
  volunteer: 'rgb(33, 150, 243)',
};

const timelineStyle = {
  job: {
    contentArrowStyle: {
      borderRight: `7px solid  ${timelineColors.job}`
    },
    contentStyle: {
      background: `${timelineColors.job}`,
      color: '#fff',
    },
    iconStyle: {
      background: `${timelineColors.job}`,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  school: {
    contentArrowStyle: {
      borderRight: `7px solid ${timelineColors.school}`
    },
    contentStyle: {
      background: `${timelineColors.school}`,
      color: '#fff',
    },
    iconStyle: {
      background: `${timelineColors.school}`,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  volunteer: {
    contentArrowStyle: {
      borderRight: `7px ${timelineColors.volunteer}`,
    },
    contentStyle: {
      background: `${timelineColors.volunteer}`,
      color: '#fff',
    },
    iconStyle: {
      background: `${timelineColors.volunteer}`,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
};

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline
        lineColor='lightGrey'
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ ...timelineStyle.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date="2023 - present"
          dateClassName='text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className="vertical-timeline-element-title">Founder, Eleven11</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco Bay Area</h4>
          <p>
            Created a digital agency to provide strategic consulting to non-profits and small-businesses to improve their online presence. Click <Link className='hover:underline mr-1' to='/eleven11'>here</Link>
            to learn more about Eleven11.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date="2022 - 2023"
          dateClassName='text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className="vertical-timeline-element-title">Frontend Engineer, Amazon</h3>
          <h4 className="vertical-timeline-element-subtitle">Hybrid - San Francisco, CA</h4>
          <p>
            Collaborated with product and design teams to deliver engaging customer features based on customer behaviors and feedback,
            created and maintained frontend and middle tier services for 33% of the application, rewrote tests for a major refactor that
            resulted in a 5% increase in developer productivity, and improved application stability by 12% by using SQL and Hubble to
            analyze and remedy an application crash. 
          </p>
          <p>
            TypeScript | Kotlin | JavaScript | React | SQL | CSS | CI/CD Pipelines
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ ...timelineStyle.volunteer.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.volunteer.contentStyle }}
          date="2022 - 2023"
          dateClassName='text-black'
          icon={icons.volunteerIcon}
          iconStyle={{ ...timelineStyle.volunteer.iconStyle }}
        >
          <h3 className="vertical-timeline-element-title">Board Member, KIPP Public Schools Northern California</h3>
          <h4 className="vertical-timeline-element-subtitle">Northern California</h4>
          <i class="fa fa-briefcase" aria-hidden="true"></i>
          <p>
            Co-chair of the development advisory committee (raised more than $11 million in my first year as co-chair), meet with finance team
            to review and approve budgets to ensure fiscal responsibility and alignment with organizational objectives, and foster relationships
            with key stakeholders: partners, community groups, and state and local officials. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date='2021 - 2022'
          dateClassName='text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer, Encantos</h3>
          <h4 className='vertical-timeline-element-subtitle'>Remote</h4>
          <p>
            Built an NFT minting site that placed Encantos on the Ethereum blockchain and led to a 3X increase to total revenue, collaborated
            with designers to plan and build a marketing site that reduced costs by $5,000, and led the front-end implementation of our web applications
          </p>
          <p>
            React | TailwindCSS | Next.js | GraphQL | StyledComponents | AWS Cognito | AWS resolvers | AWS S3 | Docker | GraphQL | Moralis
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date='2019 - 2021'
          dateClassName='text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer & Software Engineer Team Lead, Dovenmuehle Mortgage, Inc.</h3>
          <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
          <p>
            Started at Dovenmuehle Mortgage, Inc. (DMI) as a software engineer and after 1.5 years I was promoted to software engineer
            team lead. As a software engineer I increased VoiceOver and Narrator functionality and accuracy by 100%, maintained and improved
            existing codebase, and collaborated cross-functionally to build user friendly interfaces. As a software engineer team lead I lead a
            team of 5 software engineers and 3 quality assurance engineers, converted business requirements to technical work items, advocated for
            my team of web developers to get time to learn react native and mobile development to create a mobile app, and continued my software
            engineer responsibilities.
          </p>
          <p>
            React | React Native | Express.js | Material UI | Redux | Redux Saga | Heap | Docker
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.school.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.school.contentStyle }}
          date='2019'
          dateClassName='text-black'
          icon={icons.schoolIcon}
          iconStyle={{ ...timelineStyle.school.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Fullstack Development Bootcamp</h3>
          <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
          <p>
            Attended a fullstack development bootcamp whose curriculum included: HTML, CSS, JavaScript, Python, SQL, Node.js, and React. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date='2017 - 2019'
          dateClassName='text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Development Associate, Boys & Girls Clubs of San Francisco</h3>
          <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
          <p>
            Lead gift processing, ensured grant compliance, handled corporate group logistics for events, and planned marketing initiatives throughout San Francisco. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.school.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.school.contentStyle }}
          date='2014 - 2017'
          dateClassName='text-black'
          icon={icons.schoolIcon}
          iconStyle={{ ...timelineStyle.school.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>B.S. Business Administration, Saint Mary's College of California</h3>
          <h4 className='vertical-timeline-element-subtitle'>Moraga, CA</h4>
          <p>
            Graduated cum laude from Saint Mary's College of California (SMC) where I studied abroad in Spain and India. At SMC, I found my love for travel, finance, and entrepreneurship. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;