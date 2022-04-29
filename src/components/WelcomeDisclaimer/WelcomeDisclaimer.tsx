import React from 'react';
import Message from "../Message";

function WelcomeDisclaimer() {
    return (
        <>
            <Message
                type="info"
                title="Estimado Inversor:"
                message={`
                Bienvenido a ARG SECURITIES ADVISORS S.A. Agente de Negociación Matricula CNV Nro. 719
                Para iniciar el proceso de apertura de cuenta comitente deberá completar el siguiente formulario con la información de cada uno de los titulares.  
                Una vez recibida la información, nos pondremos en contacto con Ud. a la brevedad para finalizar el proceso de apertura.
                Muchas gracias!
                
                `}
            />
        </>
    );
}

export default WelcomeDisclaimer;