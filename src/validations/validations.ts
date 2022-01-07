import * as yup from "yup"

export const personaFisicaValidationSchema = yup.object({
    datosPrincipalesFisicas: yup.object().shape({
        nombre: yup.string().required("Este campo es requerido."),
        apellido: yup.string().required("Este campo es requerido."),
        tipoID: yup.string().required("Este campo es requerido."),
        id: yup.string().required("Este campo es requerido."),
    }),
    datosFiscales: yup.object().shape({
        tipoCodigo: yup.string().required("Este campo es requerido."),
        cuit: yup.string().required("Este campo es requerido."),
        tipoResponsableIVA: yup
            .string()
            .required("Este campo es requerido."),
        tipoResponsableGanancias: yup
            .string()
            .required("Este campo es requerido."),
    }),
    datosPersonales: yup.object().shape({
        fechaNacimiento: yup.date().required("Este campo es requerido."),
        sexo: yup.string().required("Este campo es requerido."),
        estadoCivil: yup.string().required("Este campo es requerido."),
        idioma: yup.string().required("Este campo es requerido."),
        nacionalidad: yup.string().required("Este campo es requerido."),
        paisResidencia: yup.string().required("Este campo es requerido."),
        paisOrigen: yup.string().notRequired(),
        lugarNacimiento: yup.string().required("Este campo es requerido."),
        cie: yup.string().notRequired(),
        actividad: yup.string().required("Este campo es requerido."),
    }),
    medioComunicacion: yup.object().shape({
        tipo: yup.string().required("Este campo es requerido."),
        medio: yup.string().required("Este campo es requerido."),
        uso: yup.string().required("Este campo es requerido."),
        notas: yup.string().notRequired(),
    }),
    domiciliosUrbanos: yup.object().shape({
        uso: yup.string().required("Este campo es requerido."),
        barrio: yup.string().notRequired(),
        calle: yup.string().required("Este campo es requerido."),
        numero: yup.number().required("Este campo es requerido."),
        torre: yup.string().notRequired(),
        piso: yup.number().notRequired(),
        departamento: yup.string().notRequired(),
        lugar: yup.string().required("Este campo es requerido."),
        codigoPostal: yup.string().required("Este campo es requerido."),
        notas: yup.string().notRequired(),
    }),
    cuentaBancaria: yup.object().shape({
        cbu: yup.string().required("Este campo es requerido."),
        alias: yup.string().notRequired(),
        tipo: yup.string().required("Este campo es requerido."),
        moneda: yup.string().required("Este campo es requerido."),
        numero: yup.string().notRequired(),
        denominacion: yup.string().notRequired(),
        uso: yup.string().required("Este campo es requerido."),
        notas: yup.string().notRequired(),
        tipoID: yup.string().required("Este campo es requerido."),
    }),
    cuentaBancariaExterior: yup.object().shape({
        cuenta: yup.string().required("Este campo es requerido."),
        moneda: yup.string().required("Este campo es requerido."),
        banco: yup.string().required("Este campo es requerido."),
        denominacion: yup.string().required("Este campo es requerido."),
        direccion: yup.string().required("Este campo es requerido."),
        holderType: yup.string().notRequired(),
        accountType: yup.string().notRequired(),
        nroBancoABA: yup.string().required("Este campo es requerido."),
        idSWIFT: yup.string().required("Este campo es requerido."),
        notas: yup.string().notRequired(),
    }),
    datosConyuge: yup.object().shape({
        nombre: yup.string().required("Este campo es requerido."),
        apellido: yup.string().required("Este campo es requerido."),
        tipoID: yup.string().required("Este campo es requerido."),
        id: yup.string().required("Este campo es requerido."),
        tipoFiscal: yup.string().notRequired(),
        claveFiscal: yup.string().notRequired(),
    }),
    actividadPersona: yup.object().shape({
        actividad: yup.string().required("Este campo es requerido."),
        rubro: yup.string().notRequired(),
        puesto: yup.string().notRequired(),
        departamento: yup.string().notRequired(),
        organizacion: yup.string().notRequired(),
        inicio: yup.string().notRequired(),
        fin: yup.string().notRequired(),
        observaciones: yup.string().notRequired(),
        codigoTipoActividad: yup.string().notRequired(),
    }),
    declaracionesPF: yup.object().shape({
        expuestaPoliticamente: yup.bool().required(),
        detalleExpPoliticamente: yup.string().notRequired(),
        sujetoObligado: yup.bool().notRequired(),
        numeroInscripcion: yup.number().notRequired(),
        sujetoObligadoUIF: yup.string().notRequired(),
        personaEEUU: yup.bool().notRequired(),
        observacionesFATCA: yup.string().notRequired()
    })
})