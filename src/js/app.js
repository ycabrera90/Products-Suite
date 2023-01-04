// import { MainHeader } from './UI/mainHeader';
// import { Carousel } from './UI/Carousel';

import { customInput } from "./UI/customInput";


class App {
    static init() {
        customInput('userNameDatas', 'NOMBRE', 'Nombre');
        customInput('userNameDatas', 'APELLIDO', 'Apellido');
        customInput('userEmailDatas', 'E-MAIL', 'e-Mail', 'email');
    }
}

App.init();




