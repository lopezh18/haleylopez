import encantos from './assets/encantos.png';
import amp from './assets/amp.png';
import bridge from './assets/bridge.png';
import dmi from './assets/dmi.png';
import warbler from './assets/warbler.png';
import jobly from './assets/jobly.png';

const projectsData = [
    {
        "name": "Bridge",
        "details": {
            "id": "a05f6394-af1b-43a6-bfed-9a823bb5149f",
            "fullName": "Bridge",
            "image": `${bridge}`,
            "milestones": ["Protoyped my first screen in Figma", "Conducted user research"],
            "problem": "Making new friends shouldn't be so hard.\nIn 2023, a Surgeon's General Advisory was released, calling attention to the “public health crisis of loneliness, isolation, and lack of connection in our country.” The current market solutions for making friends lack a sound understanding of how friendships are formed and maintained, often placing equal value on online and offline relationships while ignoring the negative influence technology has had on our social lives.",
            "responsibilities":[
                "Collaborated with UX Designer to create wireframes, prototypes, and MVP",
                "Led the product development process by defining requirements, creating user stories, and prioritizing features based on user feedback and market research",
                "Defined the problem, product vision, and product roadmap to keep our 2-person team inspired and on-task",
                "Conducted user research with Google Forms and Zoom to understand and identify our target customer and their problems",
                "Summarized key research findings and maintained organization of insights to inform strategic decision-making and project direction",
                "Created documentation in Confluence and performed task management in Jira",
            ],
            "role": "Product Manager",
            "shortDescription": "Bridging the gap between online and in person relationships to address the growing crisis of loneliness and isolation.",
            "solution": "Bridge is designed to help those struggling with loneliness by leveraging our scientific understanding of the loneliness crisis, empathizing with those struggling with the issue, and bridging the gap between online and in-person communication to allow for new relationships to form in an easy, fun, and stress-free way.",
            "sortOrder": 6,
            "stack": ["Figma", "Google Forms", "Jira", "Confluence"],
            "team": "Leadership"
        },
    },
    {
        "name": "AMP",
        "details": {
            "id": "6f8f3a9b-5c6e-4ab0-ba63-1d64c1665a5f",
            "fullName": "AMP",
            "image": `${amp}`,
            "milestones": [
                "Demo'd an entire feature my first month on the job in front of the entire AMP organization",
                "Completed my first feature, My Music, in my first month at Amazon. My Music became the flagship feature for our public release. I collaborated with the TPM to make sure we could test My Music incrementally.",
                "Participated in a hackathon, I added pagination to a list to decrease latency",
                "Proposed and implemented a solution to an ongoing issue that reduced automated test errors, decreasing the quantity of low impact tasks for our engineering and QA teams and facilitating efficient team communication and increased overall efficiency",
            ],
            "problem": "The idea of radio has not met the 21st century.\nThere are very few opportunities for people to engage in live audio communities. Imagine if you were inventing the medium for the first time today. You'd combine what people love about radio—spontaneous talk, new music discovery, diverse personalities, and broad programming—with all that's made possible by today's technology.",
            "responsibilities":[
                "Collaborated with product and design teams to deliver engaging customer features based on customer behaviors and feedback",
                "Used TypeScript, React, JavaScript, and Kotlin to create and maintain frontend and middle tier services for 33% of the application",
                "Rewrote tests for a major refactor that resulted in a 5% increase in developer productivity",
                "Improved application stability by 12% by using SQL and Hubble to analyze and remedy an application crash",
                "Communicated an application crash cross functionally - with product and design - to create a solution to address the issue and adhere to our latency SLA",
                "Contributed to both frontend and middle tier services"
            ],
            "role": "Frontend Engineer",
            "shortDescription": "A groundbreaking platform reshaping the world of radio.",
            "solution": "Amazon Music created AMP, a dynamic live audio app where people become hosts of their own shows, offering a diverse range of possibilities. Hosts curate music, seamlessly engage with callers, and explore limitless creativity in show formats. Listeners immerse themselves in an interactive space, discovering fresh music and vibrant communities.",
            "sortOrder": 5,
            "stack": ["TypeScript","Kotlin","JavaScript","React","SQL","CSS","CI/CD Pipelines"],
            "team": "Discovery"
        }
    },
    {
        "name": "Encantos",    
        "details": {
            "id": "490e2282-4648-4492-ba7e-2eb94729cb5e",
            "fullName": "Encantos",
            "image": `${encantos}`,
            "milestones": [
                "Convinced CEO to shift marketing site development in-house by planning each sprint and presenting data illustrating cost reduction benefits",
                "Quickly gained knowledge into the Ethereum blockchain, NFTs, and Moralisdb to empower creators with another income source"
            ],
            "problem": "Overall, Encantos is working to address 2 issues in our current academic and cultural landscape.\n1. The lack of cultural diversity in children's media and educational content.\n2. The skills gap between Millennials and Gen Z as a result of varying exposure to evolving digital tools and skills needed in the modern workplace.",
            "responsibilities": [
                "Built an NFT Minting site that placed Encantos on the Ethereum blockchain and led to a 3X increase to total revenue",
                "Collaborated with designers to plan and build a marketing site for our creators and their content in one week which resulted in a cost reduction of $5,000 and was delivered ahead of our marketing release",
                "Led the front-end implementation and delivery of our parent portal web application that increased mobile app subscriptions by 3%",
                "Led the development of a platform for creators, parents, and educators with Next.js, GraphQL, StyledComponents, AWS cognito, AWS resolvers, and AWS S3",
                "Organized and led engaging professional development sessions for the marketing team, resulting in 100\% of the team being able to independently update site content"
            ],
            "role": "Full-stack Engineer",
            "shortDescription": "Transformed education for the 21st century.\nDelivered engaging multimedia educational materials in collaboration with creators, parents, guardians, and teachers to reimagine learning for the 21st century.",
            "solution":"Encantos is addressing the lack of diversity in children's media and the absence of 21st century skills in today's curriculum in a few different ways.\n1. Creating culturally rich, captivating, and diverse stories that promote inclusivity,  curiosity, and global citizenship.\n2. Empowering creators from underrepresented groups to showcase their content with parents, guardians, and teachers. Encantos provides additional support in the realm of NFTs, enabling creators to monetize their art and engage with their audience in new ways.\n3. By recognizing the importance of preparing kids for the modern world, Encantos carefully selects the creators they collaborate with. The creators and content selected aim to teach essential 21st century skills such as: critical thinking, collaboration, creativity, empathy, and global awareness. ",
            "sortOrder": 4,
            "stack": ["React", "TailwindCSS", "Next.js", "GraphQL", "StyledComponents", "AWS Cognito", "AWS resolvers", "AWS S3", "Docker", "GraphQL", "Moralisdb"],
            "team": "Engineering"
        }
    },
    {
        "name": "Dovenmuehle",
        "details": {
            "id": "69b3dc27-2c02-45de-9638-e5ac0dedad9d",
            "fullName": "Dovenmuehle Mortgage",
            "image": `${dmi}`,
            "milestones": [
                "As part of a growing technical team, I played a role in supporting a large established company to embrace the internet era.",
                "Promoted from software engineer to team lead - had the opportunity to plan and run sprints"
            ],
            "problem": "Dovenmuehle aims to solve the challenge of efficiently managing and servicing mortgage loans for various financial institutions while improving the overall borrower experience.",
            "responsibilities": [
                "Led a team of 5 software engineers and 3 quality assurance engineers to successfully ship a feature that required adapting to mid-sprint changes without changing the timeline, the feature resulted in a considerable reduction in customer support calls",
                "Collaborated with business leaders, designers, and engineers to define implementation approaches for a mobile app with feature parity to the website",
                "Advocated for a team of engineers to learn mobile development with a goal to reduce development errors and expedite the launch of a mobile application that expanded our product offering and enhanced the customer experience",
                "Continued software engineer responsibilities in React, Redux, Saga, Node, and heap",
                "Performed an accessibility audit to follow WCAG AA standards - increasing Narrator and VoiceOver functionality ",
                "Collected, analyzed, and summarized user data for clients"
            ],
            "role": "Team Lead & Full-stack Engineer",
            "shortDescription": "Provides services for residential and commercial loans on behalf of mortgage bankers, credit unions, and financial institutions.",
            "solution": "Dovenmuehle's (DMI) solution is to offer comprehensive mortgage servicing solutions to financial institutions. Recently, DMI has moved towards extending their services to the web for residential and commercial loans. DMI's years of experience in the mortgage space has positioned them well for bringing efficient and effective loan management to the web.",
            "sortOrder": 3,
            "stack": ["React", "React Native", "Express.js", "Material UI", "Redux", "Redux Saga", "Heap", "Docker"],
            "team": "Engineering"
        }
    },
    {
        "name": "Warbler",
        "details": {
            "id": "ac09586e-7f87-4d17-a216-4f85f66c246a",
            "fullName": "Warbler",
            "image": `${warbler}`,
            "milestones": ["Deepened my understanding of Python and backend technologies"],
            "problem": "As I continue to learn new skills and technologies, I am eager to apply them in practical projects. Applying what I learn to meaningful projects or challenges enables me to deepen my understanding and proficiency in these areas.",
            "responsibilities": [
                "Designed the architecture and technical solutions for the project. Considering scalability and performance.",
                "Wrote the code, implement features, and developed the project to use the new skills I learned",
                "Defined the project scope",
                "Managed time between learning and completing project within the allocated timeframe"
            ],
            "role": "Full-stack Engineer",
            "shortDescription": "Python-based Twitter clone",
            "solution": "I wanted to apply the technologies I learned by building clones of websites I frequently use. Building clones helps me solidify my understanding of these technologies and allows me to explore potential improvements or customizations that could enhance my user experience. These projects, ensure that I can replicate the core functionalities of these websites while also adding my own innovations, all within a reasonable timeframe",
            "sortOrder": 2,
            "stack": ["Python", "Flask", "SQL Alchemy", "Jinja", "HTML", "CSS"],
            "team": "Sole Contributor"
        }
    },
    {
        "name": "Jobly",
        "details": {
            "id": "436799de-4e72-4859-bed5-b424e3a4596a",
            "fullName": "Jobly",
            "image": `${jobly}`,
            "milestones": ["Deepened my understanding of full-stack JavaScript"],
            "problem": "As I continue to learn new skills and technologies, I am eager to apply them in practical projects. Applying what I learn to meaningful projects or challenges enables me to deepen my understanding and proficiency in these areas.",
            "responsibilities": [
                "Designed the architecture and technical solutions for the project. Considering scalability and performance.",
                "Wrote the code, implement features, and developed the project to use the new skills I learned",
                "Defined the project scope",
                "Managed time between learning and completing project within the allocated timeframe"
            ],
            "role": "Full-stack Engineer",
            "shortDescription": "Full-stack JavaScript job search website",
            "sortOrder": 1,
            "solution": "I wanted to apply the technologies I learned by building clones of websites I frequently use. Building clones helps me solidify my understanding of these technologies and allows me to explore potential improvements or customizations that could enhance my user experience. These projects, ensure that I can replicate the core functionalities of these websites while also adding my own innovations, all within a reasonable timeframe",
            "stack": ["React", "JavaScript", "Node", "Express", "PostgreSQL", "HTML", "CSS"],
            "team": "Sole Contributor"
        }
    }
]

export default projectsData