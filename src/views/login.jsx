import Logs from "./partials/logs";

export default function Login({on_switch}) {
    return(
        <Logs page_name={'this is login page'} submit_button={'Login'} next_page={'Register Page'} on_btnClick={on_switch}></Logs>
    );
};