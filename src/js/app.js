import { customCheckbox } from "./UI/customCheckBox";
import { customInput } from "./UI/customInput";
import { customSelect } from "./UI/customSelect";
import { customSubmitButton } from "./UI/customSubmitButton";

class App {
    static init() {

        // footer
        customInput("userNameDatas", "NOMBRE", "Nombre");
        customInput("userNameDatas", "APELLIDO", "Apellido");
        customInput("userEmailDatas", "E-MAIL", "e-Mail", "email");
        customSelect("userLocationDatas", "Departamento");
        customSelect("userLocationDatas", "Localidad");
        customInput("userCiDatas", "CI", "1.111.111-1");
        customCheckbox("userCiDatas", "Acepto las bases y condiciones")
        customSubmitButton("submitButton", "ENVIAR");
    }
}

App.init();




