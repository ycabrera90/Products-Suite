
const GITHUB_URL = 'https://github.com/ycabrera90';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ingenier%C3%ADacubana';

export class MainHeader {
    constructor() {
        this.mainHeader_NavBar = document.getElementById('_mainHeader_NavBar');

        this.toggleIconExpand = document.getElementById('_toggleIconExpand');
        this.toggleButtonCollapse = document.getElementById('_toggleButtonCollapse');
        this.mainNavBackdrop = document.getElementById('_navBarBackdrop');

        this.navBarItems = document.getElementById('_navBarItems');
        this.allNavBarItems = document.querySelectorAll('#_navBarItems li');

        this.toggleIconExpand.addEventListener('click', this.expandBar.bind(this));
        this.toggleButtonCollapse.addEventListener('click', this.collapseBar.bind(this));
        this.mainNavBackdrop.addEventListener('click', this.collapseBar.bind(this));

        this.navBarItems.addEventListener('click', () => {
            this.goTo(window.event.path[2].id)      // call goTo with id element
        });
    }

    highlightItem(navBarItem_className) {
        for (const navItem of this.allNavBarItems) {
            if (navItem.classList.contains(navBarItem_className)) {
                if (!navItem.classList.contains('_highlighted')) {
                    navItem.classList.add('_highlighted');
                }
            } else {
                if (navItem.classList.contains('_highlighted')) {
                    navItem.classList.remove('_highlighted');
                }
            }
        }
    }

    expandBar() {
        this.mainHeader_NavBar.classList.remove('_hide');
        this.mainNavBackdrop.classList.remove('_hide');
        this.toggleIconExpand.classList.add('_hide');
        this.toggleButtonCollapse.classList.remove('_hide');
    }

    collapseBar() {
        this.mainHeader_NavBar.classList.add('_hide');
        this.mainNavBackdrop.classList.add('_hide');
        this.toggleIconExpand.classList.remove('_hide');
        this.toggleButtonCollapse.classList.add('_hide');
    }

    goTo(items_Id) {
        if (items_Id === '_itemHome') {
            document.getElementById('carouselExampleIndicators').querySelector('#_firstIndicator').click();

        }
        if (items_Id === '_itemAbout') {
            document.getElementById('carouselExampleIndicators').querySelector('#_secondIndicator').click();

        }
        if (items_Id === '_itemSkills') {
            document.getElementById('carouselExampleIndicators').querySelector('#_thirdIndicator').click();

        }
        if (items_Id === '_itemContact') {
            if (window.innerWidth > 640) {
                document.getElementById('carouselExampleIndicators').querySelector('#_thirdIndicator').click();
            }
            else {
                document.getElementById('carouselExampleIndicators').querySelector('#_fourthIndicator').click();
            }
        }
        if (items_Id === '_itemLocation') {
            document.getElementById('carouselExampleIndicators').querySelector('#_fifthIndicator').click();

        }
        if (items_Id === '_itemGithub') {
            window.location.href = GITHUB_URL;

        }
        if (items_Id === '_itemLinkedin') {
            window.location.href = LINKEDIN_URL;

        }
        this.collapseBar();
    }
}




