import { format } from "date-fns"

const defaultFormat = "dd/MM/yyyy"

const processDate = (newdt: Date): Date => {
    const dt = new Date(newdt)
    return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)
}

export const formatDates = (payload: any) => {
    const { datosPersonales, infoPatrimonial } = payload.titular

    const formattedDatosPersonales = {
        ...datosPersonales,
        fechaNacimiento: format(
            processDate(datosPersonales.fechaNacimiento),
            defaultFormat
        ),
    }

    const formattedInfoPatrimonial = infoPatrimonial.map((i) => {
        return {
            ...i,
            procedenciaFondos: [i.procedenciaFondos],
            fecha: format(processDate(i.fecha), defaultFormat),
        }
    })

    return {
        ...payload,
        titular: {
            ...payload.titular,
            datosPersonales: formattedDatosPersonales,
            infoPatrimonial: formattedInfoPatrimonial,
        },
    }
}

export const formatJuridicDates = (payload: any) => {
    const { patrimonioYBalance, datosOrganizacion, registro } = payload.titular
    console.log({patrimonioYBalance, datosOrganizacion, registro})
    console.log(registro[0])
    const formattedDatosOrganizacion = {
        ...datosOrganizacion,
        cierreBalance: format(
            processDate(datosOrganizacion.cierreBalance),
            defaultFormat
        ),
        fechaConstitucion: format(
            processDate(datosOrganizacion.fechaConstitucion),
            defaultFormat
        ),
    }

    const formattedPatrimonioYBalance = patrimonioYBalance.map((i) => {
        return {
            ...i,
            procedenciaFondos: ['ninguno'],
            fecha: format(processDate(i.fecha), defaultFormat),
        }
    })

    const formattedRegistro = registro.map((i) => {
        return {
            ...i,
            fecha: format(processDate(i.fecha), defaultFormat),
        }
    })

    return {
        ...payload,
        titular: {
            ...payload.titular,
            datosOrganizacion: formattedDatosOrganizacion,
            patrimonioYBalance: formattedPatrimonioYBalance,
            registro: formattedRegistro,
        },
    }
}
