document.addEventListener('DOMContentLoaded', () => {
    const projects = {
        'fitbook': `
            <div class="project-content-title">
                <p class="project-content-title-text">
                    TITLE
                </p>
                <p class="project-content-title-text2">
                    Fitbook
                </p>
            </div>
            <div class="project-content-description">
                <p class="project-content-description-text">
                    DESCRIPTION
                </p>
                <p class="project-content-description-text2">
                    FitBook is a fitness social media app that combines fitness tracking with social connectivity. 
                    The motivation behind this project is to address the challenge of maintaining the consistent motivation 
                    to work out. FitBook aims to motivate users to engage in regular physical activities by fostering a 
                    supportive community and promoting healthy competition. Users can share their workouts, repost fitness content, 
                    and track their personal progress.
                </p>
                <p class="project-content-description-text2">
                    The project was realized in a team of <strong>7</strong> students throughout the summer semester of 2023. We had daily standups, 
                    2 synchronous and 3 asynchornous per week on <strong>Slack</strong> in a <strong>Scrum</strong> software developmenet process. We used <strong>Github</strong> 
                    for version control and <strong>Jira</strong> for progress and bug tracking for developing features and epics. Additionally, we 
                    also had deadlines to meet since our project was divided into <strong>5 sprints</strong>, each sprint spanning for about 2 weeks, 
                    including mockups, planning, retrospective, and analytical meetings. As for my personal contribution to this project, 
                    I designed the entire application workflow and prototypes, facilatated the meetings, developed <strong>3 features</strong> as well 
                    as helped the Scrum master with PR reviews.
                </p>
                <p class="project-content-description-text2">
                    Furthermore, we also conducted a usability and UI design study that resulted in a <strong>55%</strong> retention 
                    rate, meaning that users that have tested our prototype would most likely want to use this app again more than 
                    half the time. This prototype was constructed through the help of individual interviews and online surveys that 
                    were conducted prior to the prototype's final version, which yielded mostly positive comments but also constructive 
                    criticism about the app's overall usability. The prototype can be viewed from the YouTube link below as a video 
                    demonstrating the different transitions between pages.
                </p>
            </div>
            <div class="project-content-skills">
                <p class="project-content-skills-text">
                    SKILLS
                </p>
                <div class="project-content-skills-container">
                    <div class="project-content-skills-item-react-native">
                        <a href="https://reactnative.dev/">
                            <p class="project-content-skills-text2">
                                React Native
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href = "https://expressjs.com/">
                            <p class="project-content-skills-text2">
                                Express.js
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://nodejs.org/en/">
                            <p class="project-content-skills-text2">
                                Node.js
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://www.mongodb.com/">
                            <p class="project-content-skills-text2">
                                MongoDB
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item-typescript">
                        <a href="https://www.typescriptlang.org/">
                            <p class="project-content-skills-text2">
                                Typescript
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content-links">
                <p class="project-content-links-text">
                    LINKS
                </p>
                <div class="project-content-links-container">
                    <div class="project-content-links-item">
                        <a href="https://github.com/jerry-dang/fitbook">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                    <div class="project-content-links-item">
                        <a href="https://www.youtube.com/watch?v=Zw5hjnGOpbs&ab_channel=JDS">
                            <img src="./img/youtubeicon.png" alt="Youtube" class="link-icon">
                        </a>
                    </div>
                </div>
            </div>
        `,
        'langchain': `
            <div class="project-content-title">
                <p class="project-content-title-text">
                    TITLE
                </p>
                <p class="project-content-title-text2">
                    Langchain Open-Source Contribution
                </p>
            </div>
            <div class="project-content-description">
                <p class="project-content-description-text">
                    DESCRIPTION
                </p>
                <p class="project-content-description-text2">
                    Langchain is a powerful framework for developing apps powered by LLMs. Simpliflying the lifecycle of an
                    LLM application through the use of chains that can be monitored with LangSmith. 
                </p>
                <p class="project-content-description-text2">
                    As a team of 4 members, we successfully finished a Github issues ticket from the langchainjs repository and got it 
                    merged to the main branch! The ticket consisted of an implementation issue with the conversation token buffer memory 
                    feature in the js repository. This class keeps a buffer of recent interactions in memory, and uses token length rather 
                    than number of interactions to determine when to flush interactions with an AI chatbot for example. More about this 
                    feature can be learned <a href="https://python.langchain.com/v0.1/docs/modules/memory/types/token_buffer/" class="langchain-text">here</a>.
                </p>
            </div>
            <div class="project-content-skills">
                <p class="project-content-skills-text">
                    SKILLS
                </p>
                <div class="project-content-skills-container">
                    <div class="project-content-skills-item">
                        <a href="https://git-scm.com/">
                            <p class="project-content-skills-text2">
                                Git
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://nodejs.org/en/">
                            <p class="project-content-skills-text2">
                                Node.js
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://www.javascript.com/">
                            <p class="project-content-skills-text2">
                                Javascript
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item-typescript">
                        <a href="https://www.typescriptlang.org/">
                            <p class="project-content-skills-text2">
                                Typescript
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content-links">
                <p class="project-content-links-text">
                    LINKS
                </p>
                <div class="project-content-links-container">
                    <div class="project-content-links-item">
                        <a href="https://github.com/langchain-ai/langchainjs/issues/2753">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                    <div class="project-content-links-item">
                        <a href="https://github.com/ychen5601/langchainjs/tree/test-token-buffer-memory">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                </div>
            </div>
        `,
        'linux-monitor': `
            <div class="project-content-title">
                <p class="project-content-title-text">
                    TITLE
                </p>
                <p class="project-content-title-text2">
                    Linux System Monitor
                </p>
            </div>
            <div class="project-content-description">
                <p class="project-content-description-text">
                    DESCRIPTION
                </p>
                <p class="project-content-description-text2">
                    A concurrent implementation of an interactive and visual linux system monitor in the terminal in C. After running 
                    the program, the terminal will display information about:
                </p>
                <ul>
                    <li class="linux-sysmon-item">
                        Current and change in memory usage (Virtual & RAM)
                    </li>
                    <li class="linux-sysmon-item">
                        Current active users on the machine
                    </li>
                    <li class="linux-sysmon-item">
                        Current and change in cpu utilization by the machine
                    </li>
                    <li class="linux-sysmon-item">
                        Information about the current machine
                    </li>
                </ul>
                <p class="project-content-description-text2">
                    The amount of delay and samples can be chosen by the user to see different types of outcomes including a graphics option 
                    where the change in memory and cpu can be visualized in real-time. The concurrency is achieved by using pipes and forks using 
                    libraries in C.
                </p>
                <p class="project-content-description-text2">
                    <strong>Notice:</strong> Tutorial video on examples and how to use the program coming out soon!
                </p>
            </div>
            <div class="project-content-skills">
                <p class="project-content-skills-text">
                    SKILLS
                </p>
                <div class="project-content-skills-container">
                    <div class="project-content-skills-item">
                        <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                            <p class="project-content-skills-text2">
                                C
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href = "https://www.gnu.org/software/make/manual/make.html">
                            <p class="project-content-skills-text2">
                                Makefile
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://unix.org/">
                            <p class="project-content-skills-text2">
                                Unix
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://www.gnu.org/software/bash/">
                            <p class="project-content-skills-text2">
                                Bash
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content-links">
                <p class="project-content-links-text">
                    LINKS
                </p>
                <div class="project-content-links-container">
                    <div class="project-content-links-item">
                        <a href="https://github.com/jerry-dang/linux-monitoring-system">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                </div>
            </div>
        `,
        'splitify': `
            <div class="project-content-title">
                <p class="project-content-title-text">
                    TITLE
                </p>
                <p class="project-content-title-text2">
                    Splitify - App for Splitting Bills <strong>(In-Progress)<strong>
                </p>
            </div>
            <div class="project-content-description">
                <p class="project-content-description-text">
                    DESCRIPTION
                </p>
                <p class="project-content-description-text2">
                    Splitify is an app designed to make splitting bills easy. Ever gone out with friends and when the waiter or 
                    waitress gives 1 bill and one person pays but it takes years for others to pay them back? With splitify, 
                    getting your money back is a guarantee!
                </p>
                <p class="project-content-description-text2">
                    As this project is in-progress, there is no detailed drescription of it yet. However, I am planning on using AWS 
                    and SQL for the database, Express for the backend, and Flutter for the frontend framework which will be integrated 
                    with iOS and Android devices. As for the caviat, I want to tap in to the Interac API to provide a smoother experience 
                    when requesting money back from other users and currently also learning about Dart!
                </p>
            </div>
            <div class="project-content-skills">
                <p class="project-content-skills-text">
                    SKILLS
                </p>
                <div class="project-content-skills-container">
                    <div class="project-content-skills-item">
                        <a href="https://flutter.dev/">
                            <p class="project-content-skills-text2">
                                Flutter
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href = "https://expressjs.com/">
                            <p class="project-content-skills-text2">
                                Express.js
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://www.w3schools.com/sql/">
                            <p class="project-content-skills-text2">
                                SQL
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://aws.amazon.com/">
                            <p class="project-content-skills-text2">
                                AWS
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item-typescript">
                        <a href="https://innovation.interac.ca/interac-e-transfer-api-3-4/">
                            <p class="project-content-skills-text2">
                                Interac API
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item-typescript">
                        <a href="https://dart.dev/">
                            <p class="project-content-skills-text2">
                                Dart
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content-links">
                <p class="project-content-links-text">
                    LINKS
                </p>
                <div class="project-content-links-container">
                    <div class="project-content-links-item">
                        <a href="https://github.com/splitify-app/splitify">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                </div>
            </div>
        `,
        'chess': `
            <div class="project-content-title">
                <p class="project-content-title-text">
                    TITLE
                </p>
                <p class="project-content-title-text2">
                    Chess Website (Web Sockets and Stockfish API Integration)
                </p>
            </div>
            <div class="project-content-description">
                <p class="project-content-description-text">
                    DESCRIPTION
                </p>
                <p class="project-content-description-text2">
                    This web application consists of an online chess game where two players are able to connect to a 
                    single server and play against each other in real-time. The players should be able to create/access 
                    a link that connects them to the same game and be able to start by making the first move (as white) 
                    and have the other player play as the black pieces and finish the game abiding chess rules. As for an 
                    interesting part of this app, we would like to add a unique feature of invigilation in two different 
                    ways: where the two players will have to be on camera and where we will use an open-source API 
                    (Stockfish) for positional analysis. In addition, the application will have an authentication 
                    system where users will be able to sign up/login where they can see other users' profiles and add 
                    them as friends along with a notifications panel. This was created in a team of 2 members throughout 6 
                    weeks.
                </p>
                <p class="project-content-description-text2">
                    For the website deployment, we used GCP (Google Compute Engine) and Docker to create a frontend and a backend 
                    container. We also had to configure the CORS properly so that the frontend would communicate seamlessly with the 
                    backend. The containers were built from installing and updating docker on the VM instance of the compute engine.
                </p>
                <p class="project-content-description-text2">
                    <strong>Notice:</strong> This project is currently not deployed since it is not secured (not certificate) and I ran 
                    out of GCP credits. There were also some issues with the backend handling on the game creation and P2P connection, 
                    so that will be something I have to look into for the time being.
                </p>
            </div>
            <div class="project-content-skills">
                <p class="project-content-skills-text">
                    SKILLS
                </p>
                <div class="project-content-skills-container">
                    <div class="project-content-skills-item">
                        <a href="https://nextjs.org/">
                            <p class="project-content-skills-text2">
                                Next.js
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://expressjs.com/">
                            <p class="project-content-skills-text2">
                                Express.js
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://www.mongodb.com/">
                            <p class="project-content-skills-text2">
                                MongoDB
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item">
                        <a href="https://socket.io/">
                            <p class="project-content-skills-text2">
                                Socket.io
                            </p>
                        </a>
                    </div>
                    <div class="project-content-skills-item-typescript">
                        <a href="https://nodejs.org/en">
                            <p class="project-content-skills-text2">
                                Node.js
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content-links">
                <p class="project-content-links-text">
                    LINKS
                </p>
                <div class="project-content-links-container">
                    <div class="project-content-links-item">
                        <a href="https://github.com/UTSCC09/project-nnc">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                    <div class="project-content-links-item">
                        <a href="https://www.youtube.com/watch?v=hI9_24moX0s&ab_channel=Tom">
                            <img src="./img/youtubeicon.png" alt="Youtube" class="link-icon">
                        </a>
                    </div>
                </div>
            </div>
        `,
        'webgallery': `
        <div class="project-content-title">
            <p class="project-content-title-text">
                TITLE
            </p>
            <p class="project-content-title-text2">
                Web Gallery
            </p>
        </div>
        <div class="project-content-description">
            <p class="project-content-description-text">
                DESCRIPTION
            </p>
            <p class="project-content-description-text2">
                The objective of this project is to build an application called The Web Gallery where users can share 
                pictures and comments. This application is similar to existing web applications such as Facebook, 
                Instagram or Google Photos. In this project, I will concentrate on <strong>user authentication</strong>, 
                <strong>authorization</strong>, and <strong>security</strong>, the must-have basics of a web-based application.
            </p>
            <p class="project-content-description-text2">
                The key points of this project include creating a well-designed REST API that is structured optimally with endpoints 
                that are accessible to authorized and authenticated users. Additionally, it must be secure from attackers such as SQL 
                injections, XSS attacks, and Cross-Site Origin Forgery. Most importantly, I focused a lot on the functionality of this 
                application so that it could handle all the edge cases and have a smooth UI for users to look at.
            </p>
        </div>
        <div class="project-content-skills">
            <p class="project-content-skills-text">
                SKILLS
            </p>
            <div class="project-content-skills-container">
                <div class="project-content-skills-item">
                    <a href="https://www.javascript.com/">
                        <p class="project-content-skills-text2">
                            Javacsript
                        </p>
                    </a>
                </div>
                <div class="project-content-skills-item">
                    <a href="https://expressjs.com/">
                        <p class="project-content-skills-text2">
                            Express.js
                        </p>
                    </a>
                </div>
                <div class="project-content-skills-item">
                    <a href="https://github.com/louischatriot/nedb">
                        <p class="project-content-skills-text2">
                            NeDB
                        </p>
                    </a>
                </div>
                <div class="project-content-skills-item-typescript">
                    <a href="https://nodejs.org/en">
                        <p class="project-content-skills-text2">
                            Node.js
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content-links">
            <p class="project-content-links-text">
                LINKS
            </p>
            <div class="project-content-links-container">
                <div class="project-content-links-item">
                    <a href="https://github.com/jerry-dang/webgallery">
                        <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                    </a>
                </div>
            </div>
        </div>
    `,
    'PintOS': `
    <div class="project-content-title">
        <p class="project-content-title-text">
            TITLE
        </p>
        <p class="project-content-title-text2">
            PintOS - Operating System
        </p>
    </div>
    <div class="project-content-description">
        <p class="project-content-description-text">
            DESCRIPTION
        </p>
        <p class="project-content-description-text2">
            Contributed to building the Stanford PintOS operating system course in a team of 3 members. This project consisted of 
            4 main parts:
        </p>
        <ul>
            <li class="os-item">
                Threads
            </li>
            <li class="os-item">
                User Programs
            </li>
            <li class="os-item">
                VM (Virtual Memory)
            </li>
            <li class="os-item">
                File Systems
            </li>
        </ul>
        <p class="project-content-description-text2">
            Throughout the semester, we used Docker that created a container and completed each part of the project (except for buffer 
            cache in <strong>File Systems</strong>). I learned a lot about how operating systems work at the lowest level and how memory 
            works behind the scenes.
        </p>
        <p class="project-content-description-text2">
            The link to the PintOS project can be accessed <a href="https://www.scs.stanford.edu/10wi-cs140/pintos/pintos_1.html" class="os-text">here</a>.
        </p>
    </div>
    <div class="project-content-skills">
        <p class="project-content-skills-text">
            SKILLS
        </p>
        <div class="project-content-skills-container">
            <div class="project-content-skills-item">
                <a href="https://www.w3schools.com/c/c_intro.php">
                    <p class="project-content-skills-text2">
                        C 
                    </p>
                </a>
            </div>
            <div class="project-content-skills-item">
                <a href="https://www.gnu.org/software/make/manual/make.html">
                    <p class="project-content-skills-text2">
                        Makefile
                    </p>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content-links">
        <p class="project-content-links-text">
            LINKS
        </p>
        <div class="project-content-links-container">
            <div class="project-content-links-item">
                <a href="https://github.com/CSCC69-S23/team-galvanic-goats">
                    <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                </a>
            </div>
        </div>
    </div>
`   ,
    'website': `
    <div class="project-content-title">
        <p class="project-content-title-text">
            TITLE
        </p>
        <p class="project-content-title-text2">
            Personal Website <strong>(In-Progress)</strong>
        </p>
    </div>
    <div class="project-content-description">
        <p class="project-content-description-text">
            DESCRIPTION
        </p>
        <p class="project-content-description-text2">
            My personal website which includes work experiences, projects I have done in the past and current ones, courses I have taken, 
            my personal information, and perhaps highlights and updates of my life. This website will be updated from time to time, not only 
            to showcase my design skills but also to capture the progress of my career.
        </p>
        <p class="project-content-description-text2">
            This website is currently coded only in HTML, CSS, and Javascript since I wanted a clean slate but I will most likely transition 
            to a framework like React or Vue and create a backend in order to handle email requests in the contact section.
        </p>
    </div>
    <div class="project-content-skills">
        <p class="project-content-skills-text">
            SKILLS
        </p>
        <div class="project-content-skills-container">
            <div class="project-content-skills-item">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
                    <p class="project-content-skills-text2">
                        HTML
                    </p>
                </a>
            </div>
            <div class="project-content-skills-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    <p class="project-content-skills-text2">
                        CSS
                    </p>
                </a>
            </div>
            <div class="project-content-skills-item">
                <a href="https://www.javascript.com/">
                    <p class="project-content-skills-text2">
                        Javascript
                    </p>
                </a>
            </div>
            <div class="project-content-skills-item">
                <a href="https://www.figma.com/">
                    <p class="project-content-skills-text2">
                        Figma
                    </p>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content-links">
        <p class="project-content-links-text">
            LINKS
        </p>
        <div class="project-content-links-container">
            <div class="project-content-links-item">
                <a href="https://github.com/jerry-dang/jerry-dang.github.io">
                    <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                </a>
            </div>
        </div>
    </div>
`   ,
    };

    const projectIcons = document.querySelectorAll('.projects-icons-container > div');

    projectIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const projectId = icon.getAttribute('data-project');
            const projectContentDisplay = document.getElementById('project-content-display')

            projectContentDisplay.classList.add('hidden');
            projectContentDisplay.innerHTML = projects[projectId] || '<p class="not-available">Content not available :(</p>';
            projectContentDisplay.classList.remove('hidden');
        })
    })
})