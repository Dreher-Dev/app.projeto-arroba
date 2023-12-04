import style from "./Image.module.css"

export function Image() {
    return(
        <div className={style.containerImage}>
            <img src="/assets/imgs/imgLogin.png" alt="Image de pessoas trabalhando" className="imagem"/>
        </div>
    )
}