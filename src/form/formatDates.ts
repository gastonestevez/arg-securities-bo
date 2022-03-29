import { format } from "date-fns"

const defaultFormat = "dd/MM/yyyy"

const processDate = (newdt: Date): Date => {
    const dt = new Date(newdt)
    return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)
}

export const formatDates = (payload: any) => {
    const { datosPersonales, infoPatrimonial } = payload.titular
    const { personaRelacionada } = payload
    console.log(`FORMAT PERSSONA RELACIONADA`)
    console.log({personaRelacionada})
    const formattedPersonaRelacionada = personaRelacionada.map(p => {
        console.log({p})
        return {
            ...p,
            persona: {
                ...p.persona,
    
                datosPersonales: {
                    ...p.persona.datosPersonales,
                    fechaNacimiento: format(processDate(p.persona.datosPersonales.fechaNacimiento), defaultFormat)
                },
                infoPatrimonial: p.persona.infoPatrimonial.map(ip => {
                    return {
                        ...ip,
                        procedenciaFondos: [ip.procedenciaFondos],
                        fecha: format(processDate(ip.fecha), defaultFormat)
                    }
                })
            }
        }
    })
    console.log({formattedPersonaRelacionada})
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
        personaRelacionada: formattedPersonaRelacionada
    }
}

export const formatJuridicDates = (payload: any) => {
    const { patrimonioYBalance, datosOrganizacion, registro } = payload.titular
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
