import { FormLogin } from "../../components/FormLogin/FormLogin"
import { Imagem } from "../../components/Imagem/Imagem"
import { VerticalLine  } from "../../components/VerticalLine /VerticalLine "
import style from "./Login.module.css"

function Login() {
    return (
        <>
            <div className="flex align-center">
                <div>                
                    <FormLogin/>
                </div>
                <div className={style.containerVerticalLine }>
                    <VerticalLine />
                </div>
                <div>
                    <Imagem/>
                </div>    
            </div>
        </>
    )
}

export default Login