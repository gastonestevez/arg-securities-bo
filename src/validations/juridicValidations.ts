import * as yup from "yup"

export const personaJuridicaValidationSchema = yup.object({
    recaptcha: yup.string().nullable().required("Debe completar el captcha."),
    datosPrincipalesIdeal: yup.object().shape({
        denominacion: yup.string().required("Este campo es requerido."),
        tipoDeOrganizacion: yup.string().required("Este campo es requerido."),
        tipoID: yup.string().required("Este campo es requerido."),
        id: yup.string().required("Este campo es requerido."),
    }),
    datosFiscales: yup.object().shape({
        tipoCodigo: yup.string().required("Este campo es requerido."),
        cuit: yup.string().required("Este campo es requerido."),
        tipoResponsableIVA: yup.string().required("Este campo es requerido."),
        tipoResponsableGanancias: yup
            .string()
            .required("Este campo es requerido."),
        codigosActividades: yup
            .array()
            .of(yup.string().required("Este campo es requerido.")),
    }),
    datosOrganizacion: yup.object().shape({
        fechaConstitucion: yup.date().required("Este campo es requerido."),
        actaConstitucion: yup.string().required("Este campo es requerido."),
        paisOrigen: yup.string().required("Este campo es requerido."),
        paisResidencia: yup.string().required("Este campo es requerido."),
        cierreBalance: yup.date().required("Este campo es requerido."),
    }),
    registro: yup
        .object()
        .shape({
            tipo: yup.string().required("Este campo es requerido."),
            numero: yup.string().required("Este campo es requerido."),
            lugar: yup.string().required("Este campo es requerido."),
            fecha: yup.date().required("Este campo es requerido."),
            folio: yup.string().notRequired(),
            libro: yup.string().notRequired(),
            tomo: yup.string().notRequired(),
        })

        .required("Los campos son requeridos."),
    mediocomunicacion: yup
        .array()
        .of(
            yup.object().shape({
                tipo: yup.string().required("Este campo es requerido."),
                medio: yup.string().required("Este campo es requerido."),
            })
        )
        .required("Los campos son requeridos."),
    domicilioUrbano: yup
        .array()
        .of(
            yup.object().shape({
                calle: yup.string().required("Este campo es requerido."),
                numero: yup.number().required("Este campo es requerido."),
                piso: yup.string().notRequired(),
                departamento: yup.string().notRequired(),
                lugar: yup.string().required("Este campo es requerido."),
                codigoPostal: yup.string().required("Este campo es requerido."),
            })
        )
        .required("Los campos son requeridos."),
    cuentaBancaria: yup
        .array()
        .of(
            yup.object().shape({
                cbu: yup.string().required("Este campo es requerido."),
                tipo: yup.string().required("Este campo es requerido."),
                numero: yup.string().notRequired(),
            })
        )
        .required("Los campos son requeridos."),
    patrimonioYBalance: yup
        .object()
        .shape({
            fecha: yup.string().required("Este campo es requerido."),
            activos: yup.number().required("Este campo es requerido."),
            activosCorrientes: yup
                .number()
                .required("Este campo es requerido."),
            pasivos: yup.number().required("Este campo es requerido."),
            patrimonio: yup.number().required("Este campo es requerido."),
            ingresos: yup.number().required("Este campo es requerido."),
            egresos: yup.number().required("Este campo es requerido."),
        })
        .required("Los campos son requeridos."),
    actividadOrganizacion: yup
        .object()
        .shape({
            actividad: yup.string().required("Este campo es requerido."),
        })
        .required("Este campo es requerido."),
    declaracionesPI: yup.object().shape({
        inscripcionSujetoObligado: yup
            .bool()
            .notRequired(),
    }),
    // terminosCondiciones: yup.boolean().oneOf([true],'Debe aceptar los términos y condiciones.'),
})
