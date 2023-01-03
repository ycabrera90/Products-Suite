export class Skills {
    constructor() {
        this.oppenedSkillInfo = null;
        this.caroussel = document.getElementById('carouselExampleIndicators');
        this.contentSkills = document.querySelectorAll('._content__skill');

        this.contentSkills.forEach(contentSkill => {
            contentSkill.addEventListener('click', event => {
                // detect if was clicked the backdrop or a skill element
                if (event.target.classList.contains('_content-backdrop')) {
                    this.hideSkillInfo(this.oppenedSkillInfo);
                }
                else {
                    this.showSkillInfo(event.target.closest('._skill-container'));
                }
            })
        });
    }

    setProgres(skillClass, progress) {
        // scan all skills for both small and large screens
        for (const skill of this.caroussel.querySelectorAll(`.${skillClass} .progress-bar`)) {
            skill.style.width = `${progress}%`;
        }
    }

    showSkillInfo(DomSkill) {
        if (!this.oppenedSkillInfo) {
            const skillInfo = DomSkill.querySelector('._skill-info');
            const skillBackdrop = DomSkill.parentElement.querySelector('._content-backdrop');


            // Calculate the best position of the element in the screen after translate
            const translateX = (innerWidth / 2) - (DomSkill.getBoundingClientRect().left + DomSkill.clientWidth / 2);
            const translateY = (innerHeight / 4.25) - DomSkill.getBoundingClientRect().top;

            DomSkill.style = `  transition: transform 500ms 0s ease-out;
                                transform: translate(${translateX}px, ${translateY}px);
                                cursor: auto;
                                z-index: 2`;


            skillInfo.style = ` display: block;
                                height: auto;`;
            const skillInfo_height = skillInfo.clientHeight;  // get the height when the element has a height as auto
            skillInfo.style = ` display: block;
                                height: 0;`;
            setTimeout(() => {
                skillInfo.style = ` transition: height 500ms 0.5s ease-out, opacity 500ms 0.5s ease-out;
                                    height: ${skillInfo_height}px; 
                                    opacity: 1;
                                    z-index: 2;
                                    display: block`;
            }, 1);


            skillBackdrop.style = ` display: block`;
            setTimeout(() => {
                skillBackdrop.style = ` display: block;
                                        transition: opacity 500ms 0s ease-out;
                                        opacity: 0.8`;
            }, 1);

            this.oppenedSkillInfo = DomSkill;           // enable a flag for say which skill is oppened
        }
    }

    hideSkillInfo(DomSkill) {
        if (this.oppenedSkillInfo) {
            const skillInfo = DomSkill.querySelector('._skill-info');
            const skillBackdrop = DomSkill.parentElement.querySelector('._content-backdrop');

            skillInfo.style = ` transition: height 500ms 0s ease-out, opacity 500ms 0s ease-out;
                                height: 0rem; 
                                opacity: 0;
                                z-index: 2;
                                display: block`;
            setTimeout(() => {
                skillInfo.style = ` display: none; 
                                    z-index: 0`;
            }, 500);

            DomSkill.style = `  transition: transform 500ms 0.5s ease-out;
                                transform: translate(0px, 0px);
                                z-index: 2;
                                cursor: pointer`;
            setTimeout(() => {
                DomSkill.style = ` z-index: 0`;
            }, 1000);

            skillBackdrop.style = ` display: block;
                                    transition: opacity 500ms 1s ease-out;
                                    opacity: 0`;
            setTimeout(() => {
                skillBackdrop.style = ` display: none`;
            }, 1500);

            this.oppenedSkillInfo = null;           // enable a flag for say which skill is oppened
        }






    }
}