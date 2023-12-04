import { FormLogin } from "../../components/FormLogin/FormLogin"
import { Image } from "../../components/Image/Image"
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
                    <Image/>
                </div>    
            </div>
        </>
    )
}

export default Login