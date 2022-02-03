interface term {
    title: string,
    paragraph: string
}

export const terms: term[] = [
    {
        title: "Firma electrónica",
        paragraph: `
        Realizar una firma electrónica quiere decir que una persona física verifica una acción o procedimiento mediante un medio electrónico, dejando un registro de la fecha y hora de la misma.Existen diferentes tipos de firmas electrónicas, cada una con su propio conjunto de requisitos y métodos. De esta forma, se dice que esta firma es un concepto jurídico y un método de identificación, que se sirve de diversos soportes electrónicos.
        Las formas de firma electrónica son:
        - Usando una firma biométrica.
        - Firmando con un lápiz electrónico al usar una tarjeta de crédito o débito en un comercio.
        - Marcando una casilla en una computadora, a máquina, o aplicada con el ratón o incluso con el dedo del usuario en una pantalla táctil.
        - Usando una firma digital.
        - Usando un sistema que obligue a establecer usuario y contraseña.
        - Usando una tarjeta de coordenadas.
        Una firma electrónica crea un historial de auditoría que incluye la verificación de quién envía el documento firmado y un sello con la fecha y hora.
        `,
    },
    {
        title: "Normativa CNV",
        paragraph: `
        Modalidad de Contacto con los clientes:

ARTÍCULO 21.- Para recibir órdenes e instrucciones de los clientes a los fines de realizar operaciones, los Agentes podrán utilizar los medios o modalidades de contacto convenidos con el cliente en el Convenio de Apertura de Cuenta oportunamente suscripto, previo cumplimiento de los requisitos exigidos por las Normas. 

En todos los casos, los mecanismos a implementarse deben garantizar la correcta identificación del cliente, la inalterabilidad, trazabilidad –incluyendo fecha, hora y minutos- y disponibilidad de la información relativa a las órdenes impartidas, así como los procedimientos de resguardo de la información y planes de contingencia.
Ante la ausencia de prueba en contrario se presumirá que la operación realizada por el agente a nombre del cliente no contó con el consentimiento de este último.
        `,
    },
    {
        title: "Internet",
        paragraph: `
        ARTÍCULO 23.- La modalidad de contacto vía internet exige el cumplimiento a los siguientes requisitos:

        a) Aprobación de la modalidad por parte del órgano de administración del Agente.
        b) Disponer de un Manual de Procedimiento aplicable a la operatoria, en el cual deberá constar:
        1) Descripción general del sistema, incluyendo detalle de cada una de las pantallas involucradas.
        2) Ámbito de aplicación de la modalidad, indicando si se encuentra abierta al público en general o si se halla restringida a clientes previamente registrados, acompañando detalle de los requisitos en cada caso.
        3) Planes y políticas de seguridad y contingencia del sistema.
        c) El sistema deberá:
        c.1) Contemplar obligatoriamente un mecanismo que verifique que el cliente cuenta con una clave para acceder al envío de órdenes por medio del sistema.
        c.2) En caso afirmativo, desplegar una pantalla para el envío de la orden por parte del cliente.
        c.3) En caso negativo, contemplar un mecanismo que impida el envío de órdenes por parte del cliente.
        c.4) Registrar para cada cliente que opere por esta vía la fecha, hora, minuto y segundo del envío de la orden.
        c.5) Desplegar una pantalla con la opción de impresión, guardado, y envío por correo electrónico para el cliente, de la orden remitida al Agente, de donde surja la hora, minuto, segundo y demás detalles de la orden impartida.
        d) Dictamen de auditor externo en sistemas, sobre el nivel de seguridad del sistema, planes de contingencia y políticas de seguridad y cumplimientos de los requisitos exigidos en el presente Capítulo.`,
    },
    {
        title: "Artículo 26 - Aceptación e identificación de Clientes no presenciales",
        paragraph: `
        ARTÍCULO 26.- Aceptación e identificación de Clientes no presenciales.

La aceptación de Clientes no presenciales estará sometida a la identificación por medios electrónicos sustitutivos de la presencia física, conforme las especificaciones establecidas en el presente artículo.
a) La identificación de Clientes personas humanas conforme lo dispuesto en el artículo 23, se podrá realizar por medios electrónicos sustitutivos de la presencia física con uso de técnicas biométricas rigurosas o métodos tecnológicos alternativos de igual rigurosidad, almacenables y no manipulables, con arreglo a las siguientes especificaciones:
1. Podrá utilizarse cualquier procedimiento que incluya la exhibición en original del documento de identificación del Cliente como, por ejemplo, el procedimiento de identificación no presencial mediante videoconferencia.
2. El Sujeto Obligado deberá realizar el análisis de riesgo del procedimiento de identificación no presencial a implementar, el cual deberá ser gestionado por personal capacitado específicamente en su utilización. Dicha capacitación deberá quedar acreditada de conformidad con lo dispuesto en el artículo 18.
3. El proceso de identificación no presencial deberá ser almacenado con constancia de fecha y hora, conservándose de conformidad con lo dispuesto en el artículo 17.
4. El informe del revisor externo independiente al que refiere el inciso a) del artículo 19, deberá pronunciarse expresamente sobre la adecuación y eficacia operativa del procedimiento de identificación no presencial implementado.
5. Será responsabilidad del Sujeto Obligado implementar los requerimientos técnicos que aseguren la autenticidad, vigencia e integridad de los documentos de identificación utilizados y la correspondencia del titular del documento con el Cliente objeto de identificación, así como también la confidencialidad e inalterabilidad de la información obtenida en el proceso de identificación.
6. Los procedimientos específicos de identificación no presencial que los Sujetos Obligados implementen de conformidad con el presente artículo no requerirán de autorización particular por parte de la UIF, sin perjuicio de que se pueda proceder a su control en ejercicio de las potestades de supervisión.

b) Alternativamente, se podrán aceptar Clientes no presenciales, con sujeción a las siguientes reglas:
1. El Cliente podrá solicitar su aceptación a través del sitio de Internet de la Entidad u otros canales alternativos (telemáticos, telefónicos o asimilables), remitiendo los documentos establecidos en los artículos 23 y 24, que correspondan a su naturaleza y características.
2. La Entidad entregará una clave personal e intransferible, que incluya preguntas de control, que deberá ser utilizada por el Cliente para operar.
3. La Entidad deberá considerar la necesidad de visitar al Cliente dejando constancia de tal hecho.

Será aceptable la realización de tal visita por agentes contratados por la Entidad.
        `,
    },
]
