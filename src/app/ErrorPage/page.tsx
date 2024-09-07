import error from "@/assets/error.svg";
import Image from "next/image";
import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <section className="errorpage-section">
            <div className="errorpage-div">
            <Image src={error} alt="Error icon" className="errorpage-icon"></Image>
            <p className="errorpage-title">Tivemos um erro ao carregar os cards e conteúdos no portals</p>
            <p className="errorpage-description">Não foi possível realizar o processamento solicitado. <b>Verifique sua conexão</b> com a internet e <b>tente novamente.</b></p>
            <button className="errorpage-button">Tentar novamente</button>
            </div>
        </section>
    )
}