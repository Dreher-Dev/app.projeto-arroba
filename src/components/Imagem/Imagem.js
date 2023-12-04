import style from "./Imagem.module.css"

export function Imagem() {
    return(
        <div className={style.containerImage}>
            <img src="/assets/imgs/imgLogin.png" alt="Imagem de pessoas trabalhando" className="imagem"/>
        </div>
    )
}