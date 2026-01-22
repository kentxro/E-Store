import Logs from "./partials/logs";

export default function Register({on_switch}) {
    return(
        <Logs page_name={'this is register page'} submit_button={'Register'} next_page={'Login Page'} on_btnClick={on_switch}></Logs>
    );
};