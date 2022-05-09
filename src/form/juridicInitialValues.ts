export const personaJuridicaInitialValues = {
    recaptcha: "",
    // terminosCondiciones: false,
    datosPrincipalesIdeal: {
        denominacion: "",
        tipoDeOrganizacion: "",
        tipoID: "",
        id: "",
    },
    datosFiscales: {
        tipoCodigo: "",
        cuit: "",
        tipoResponsableIVA: "",
        tipoResponsableGanancias: "",
        codigosActividades: [],
    },
    datosOrganizacion: {
        fechaConstitucion: "",
        actaConstitucion: "",
        paisOrigen: "",
        paisResidencia: "",
        cierreBalance: "",
    },
    registro: {
        tipo: "",
        numero: "",
        lugar: "",
        fecha: "",
        folio: "",
        libro: "",
        tomo: "",
    },
    mediocomunicacion: [
        {
            tipo: "E-Mail",
            medio: "",
            uso: "",
            notas: "",
            principal: false,
        },
        {
            tipo: "Teléfono",
            medio: "",
            uso: "",
            notas: "",
            principal: true,
        },
    ],
    domicilioUrbano: [],
    cuentaBancaria: [],
    patrimonioYBalance: {
        fecha: "",
        activos: 0,
        activosCorrientes: 0,
        pasivos: 0,
        patrimonio: 0,
        ingresos: 0,
        egresos: 0,
    },
    actividadOrganizacion: {
        actividad: ""
    },
    declaracionesPI: {
        inscripcionSujetoObligado: "",
    },
    datosConyuge: []
}
