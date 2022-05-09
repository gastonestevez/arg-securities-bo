import React from "react"
import Message from "../Message"

function WelcomeDisclaimer() {
    return (
        <>
            <Message
                type="info"
                title="Estimado Inversor:"
                message={`
                Estimado Inversor:
                Bienvenido a ARG SECURITIES ADVISORS S.A. Agente de Negociación Matricula CNV Nro. 719. Para iniciar la pre-apertura de cuenta comitente deberá completar el siguiente formulario con la información de cada uno de los titulares. Una vez enviado, nos estaremos comunicando con Ud. para la finalización de la misma. ¡Muchas Gracias!
                
                `}
            />
        </>
    )
}

export default WelcomeDisclaimer
