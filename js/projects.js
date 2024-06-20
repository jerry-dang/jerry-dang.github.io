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
                    Fitbook is a mobile app for tracking workouts and self-improvement built using React Native.
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
                    A concurrent implementation of an interactive and visual linux system monitor in the terminal in C.
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
                    Splitify - App for Splitting Bills
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
                        <a href="https://github.com/jerry-dang/fitbook">
                            <img src="./img/github-icon.png" alt="GitHub" class="link-icon">
                        </a>
                    </div>
                </div>
            </div>
        `,
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