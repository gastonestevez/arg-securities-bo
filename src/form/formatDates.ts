import { format } from "date-fns"

const defaultFormat = 'dd/MM/yyyy'


const processDate = (newdt: Date): Date => {
    const dt = new Date(newdt)
    return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
}

export const formatDates = (payload: any) => {
    const { datosPersonales, infoPatrimonial,  } = payload.titular
    

    const formattedDatosPersonales = {
        ...datosPersonales,
        fechaNacimiento: format(processDate(datosPersonales.fechaNacimiento), defaultFormat)
    }

    const formattedInfoPatrimonial = infoPatrimonial.map(i => {
        return {
            ...i,
            procedenciaFondos: [i.procedenciaFondos],
            fecha: format(processDate(i.fecha), defaultFormat)
        }
    })

    return {
        ...payload,
        titular: {
            ...payload.titular,
            datosPersonales: formattedDatosPersonales,
            infoPatrimonial: formattedInfoPatrimonial
        }
    }
} 

export const formatJuridicDates = (payload: any) => {
    const { datosPersonales, patrimonioYBalance, datosOrganizacion, registro  } = payload.titular
    

    const formattedDatosPersonales = {
        ...datosPersonales,
        fechaNacimiento: format(processDate(datosPersonales.fechaNacimiento), defaultFormat)
    }

    const formattedDatosOrganizacion = {
        ...datosOrganizacion,
        cierreBalance: format(processDate(datosOrganizacion.cierreBalance), defaultFormat),
        fechaConstitucion: format(processDate(datosOrganizacion.fechaConstitucion), defaultFormat)
    }

    const formattedPatrimonioYBalance = {
        ...patrimonioYBalance,
        fecha: format(processDate(patrimonioYBalance.fecha), defaultFormat),
    }

    const formattedRegistro = {
        ...registro,
        fecha: format(processDate(registro.fecha), defaultFormat),
    }

    
    return {
        ...payload,
        titular: {
            ...payload.titular,
            datosPersonales: formattedDatosPersonales,
            datosOrganizacion: formattedDatosOrganizacion,
            patrimonioYBalance: formattedPatrimonioYBalance,
            registro: formattedRegistro
        }
    }
}