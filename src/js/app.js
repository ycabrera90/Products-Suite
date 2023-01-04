import { customCheckbox } from "./UI/customCheckBox";
import { customInput } from "./UI/customInput";
import { customSelect } from "./UI/customSelect";
import { customSubmitButton } from "./UI/customSubmitButton";

import { dptosLocs } from "./Mocks/departments";

class App {
    static init() {

        // render of form fields 
        customInput("userNameDatas", "NOMBRE", "Nombre");
        customInput("userNameDatas", "APELLIDO", "Apellido");
        customInput("userEmailDatas", "E-MAIL", "e-Mail", "email");
        customSelect("userLocationDatas", "Departamento", dptosLocs);
        customSelect("userLocationDatas", "Localidad", dptosLocs, "Departamento");
        customInput("userCiDatas", "CI", "1.111.111-1");
        customCheckbox("userCiDatas", "Acepto las bases y condiciones")
        customSubmitButton("submitButton", "ENVIAR");

        // document.getElementById('Departamento').addEventListener("change", (e) => {
        //     console.log('sadf')
        //   });
    }

}

App.init();




