import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { icons } from '../../constants';

const timelineColors = {
  volunteer: '#BA98DE',
  job: '#B9B73A',
  school: '#3C6C5D',
};

const timelineStyle = {
  job: {
    contentArrowStyle: {
      borderRight: `7px solid  ${timelineColors.job}`
    },
    contentStyle: {
      background: `${timelineColors.job}`,
      color: '#fff',
      'opacity': 1,
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
      borderRight: `7px solid ${timelineColors.volunteer}`,
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
          dateClassName='text-white xl:text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className="vertical-timeline-element-title">Founder, Haley Lopez Strategies</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco Bay Area</h4>
          <p>
            Created a digital strategy consulting firm dedicated to helping small businesses and nonprofits navigate the complex digital landscape.
            I believe that every business is unique and am committed to understanding my clients' goals and challenges to develop digital
            strategies that are tailored to their specific needs and objectives.
          </p>
          <p>
            Webflow | Zoom | Notion | Google Docs | Squarespace | Canva | Figma
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date="2022 - 2023"
          dateClassName='text-white xl:text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className="vertical-timeline-element-title">Frontend Engineer, Amazon</h3>
          <h4 className="vertical-timeline-element-subtitle">Hybrid - San Francisco, CA</h4>
          <p>
            By working closely with product and design teams, I turned customer feedback into compelling features, notably the My Music feature,
            which became the flagship feature for our public release. My proactive approach to problem-solving an ongoing issue resulted in a proposal and ultimately the implementation
            of a solution that led to:
          </p>
          <ol className='px-4 list-decimal'>
            <li>reduction in automated test errors</li>
            <li>decrease in the quantity of low impact tasks for our engineering and QA teams</li>
            <li>efficient communication and increased overall efficiency</li>
          </ol>
          <p>
            I improved application stability by 12% through analysis with SQL and resolved the application crash. The solution required cross functional communication and collaboration
            to address and resolve the crash and adhere to our latency SLAs. 
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
          dateClassName='text-white xl:text-black'
          icon={icons.volunteerIcon}
          iconStyle={{ ...timelineStyle.volunteer.iconStyle }}
        >
          <h3 className="vertical-timeline-element-title">Board Member, KIPP Public Schools Northern California</h3>
          <h4 className="vertical-timeline-element-subtitle">Northern California</h4>
          <p>
            As a board member and co-chair of the development advisory committee, I supported the development team in securing over $11 million in funding in my first year. Through
            consistent and ongoing collaboration with the finance team, I ensure fiscal responsibility and alignment with organizational objectives. My efforts to foster
            meaningful relationships with partners, community groups, and state and local officials, paired with leveraging real stories and data, have significantly amplified
            our community impact. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date='2021 - 2022'
          dateClassName='text-white xl:text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer, Encantos</h3>
          <h4 className='vertical-timeline-element-subtitle'>Remote</h4>
          <p>
            Built and launched an NFT minting site that placed Encantos on the Ethereum blockchain, a groundbreaking achievement, that led to a 3X increase to our total revenue. 
            I led the front-end implementation of our web applications, most notable the rapid and cost-effective development of a marketing site featuring our creators, saving $5,000 
            and accelerating our go-to-market strategy. Partnered with designers to enhance content accessibility and engagement. I created and led professional development
            sessions to empower our marketing team to independently update site content, optimizing our digital presence and fostering a culture of autonomy.
          </p>
          <p>
            React | TailwindCSS | Next.js | GraphQL | StyledComponents | AWS Cognito | AWS resolvers | AWS S3 | Docker | GraphQL | Moralis | Jira | Confluence
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date='2019 - 2021'
          dateClassName='text-white xl:text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer & Software Engineer Team Lead, Dovenmuehle Mortgage, Inc.</h3>
          <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
          <p>
            Started at Dovenmuehle Mortgage, Inc. (DMI) as a Software Engineer and after 1.5 years was promoted to Software Engineer
            Team Lead. As a software engineer I increased VoiceOver and Narrator functionality and accuracy. I maintained and improved the 
            existing codebase, and collaborated cross-functionally to build user friendly interfaces. As a team lead I led a
            team of 5 software engineers and 3 quality assurance engineers. We successfully shipped a feature that required adapting to mid-sprint
            changes without changing the timeline, the feature resulted in a considerable reduction in customer support calls. In partnership with
            business leaders, designers, and engineers I defined implementation approaches for a mobile application with feature parity to the website. My advocacy
            for professional development in mobile engineering frameworks reduced development errors and expedited the launch of a mobile
            application that expanded our product offering and enhanced the customer experience. 
          </p>
          <p>
            React | React Native | Express.js | Material UI | Redux | Redux Saga | Heap | Docker | Jira | Confluence | Sketch
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.school.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.school.contentStyle }}
          date='2019'
          dateClassName='text-white opacity-100 xl:text-black'
          icon={icons.schoolIcon}
          iconStyle={{ ...timelineStyle.school.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Fullstack Development Bootcamp</h3>
          <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
          <p>
            Completed a comprehensive fullstack development bootcamp that covered: HTML, CSS, JavaScript, Python, SQL, Node.js, and React. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.job.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.job.contentStyle }}
          date='2017 - 2019'
          dateClassName='text-white xl:text-black'
          icon={icons.workIcon}
          iconStyle={{ ...timelineStyle.job.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>Development Associate, Boys & Girls Clubs of San Francisco</h3>
          <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
          <p>
            Led gift processing and ensured strict compliance with grant requirements. I coordinated corporate group logistics for events, and planned marketing initiatives throughout San Francisco. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ ...timelineStyle.school.contentArrowStyle }}
          contentStyle={{ ...timelineStyle.school.contentStyle }}
          date='2014 - 2017'
          dateClassName='text-white xl:text-black'
          icon={icons.schoolIcon}
          iconStyle={{ ...timelineStyle.school.iconStyle }}
        >
          <h3 className='vertical-timeline-element-title'>B.S. Business Administration, Saint Mary's College of California</h3>
          <h4 className='vertical-timeline-element-subtitle'>Moraga, CA</h4>
          <p>
            Graduated cum laude from Saint Mary's College of California (SMC) where I studied abroad in Spain and India. At SMC, I found my love for travel, finance, marketing, and entrepreneurship. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;