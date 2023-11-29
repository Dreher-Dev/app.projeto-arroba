import { FormLogin } from "../../components/FormLogin/FormLogin"
import { Imagem } from "../../components/Imagem/Imagem"
import { Traco } from "../../components/Traco/Traco"
import style from "./Login.module.css"

function Login() {
    return (
        <>
            <div className="flex align-center">
                <div>                
                    <FormLogin/>
                </div>
                <div className={style.containerTraco}>
                    <Traco/>
                </div>
                <div>
                    <Imagem/>
                </div>    
            </div>
        </>
    )
}

export default Login