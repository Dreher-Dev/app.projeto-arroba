import style from "./Imagem.module.css"

export function Imagem() {
    return(
        <div className={style.containerImage}>
            <img src="/assets/imgs/imgLogin.png" alt="qualquer coisa" className="imagem"/>
        </div>
    )
}