import { MainHeader } from './UI/mainHeader';
import { Carousel } from './UI/Carousel';

class App {
    static init() {
        const mainHeader = new MainHeader();

        const carousel = new Carousel();

        // I put a long time for the slide of the form when working on it.
        carousel.constactmeForm.fillingContacteForm = () => {
            carousel.setItemTime('_carouselItemContactMe', 10000000);
        }

        // I restar the time for the contact for when we are on others slides
        carousel.onHome = () => {
            carousel.setItemTime('_carouselItemContactMe', 8000);
            mainHeader.highlightItem('_nav-bar__item--home');
        }

        carousel.onAboutMe = () => {
            carousel.setItemTime('_carouselItemContactMe', 8000);
            mainHeader.highlightItem('_nav-bar__item--about');
        }

        carousel.onMySkills = () => {
            carousel.setItemTime('_carouselItemContactMe', 8000);
            mainHeader.highlightItem('_nav-bar__item--skills');
        }

        carousel.onContactMe = () => {
            mainHeader.highlightItem('_nav-bar__item--contact');
        }

        carousel.onMyLocation = () => {
            carousel.setItemTime('_carouselItemContactMe', 8000);
            mainHeader.highlightItem('_nav-bar__item--location');
        }

        // set my skills
        carousel.skills.setProgres('_content__skill--html',60);
        carousel.skills.setProgres('_content__skill--css',96);
        carousel.skills.setProgres('_content__skill--js',95);
        carousel.skills.setProgres('_content__skill--react',90);
        carousel.skills.setProgres('_content__skill--node',50);
        carousel.skills.setProgres('_content__skill--python',85);
        carousel.skills.setProgres('_content__skill--perl',80);
        
        // I put my location on google map
        carousel.locationMap.render({ lat: -34.88761217420463, lng: -56.17486101765247 });

    }
}

App.init();




