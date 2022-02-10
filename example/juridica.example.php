$json = [
            "titular" => [
                "personaFisica" => false,
                "datosPrincipalesIdeal" => [
                    "denominacion" => $data['name'],
                    "tipoDeOrganizacion" => $data['orgType'],
                    "tipoID" => $data['documentType'],
                    "id" => $data['document']
                ],
                "datosFiscales" => [
                    "tipoCodigo" => $data['fiscalDocumentType'],
                    "cuit" => $data['fiscalDocument'],
                    "tipoResponsableIVA" => $data['iva'],
                    "tipoResponsableGanancias" => $data['earnings'],
                    "actividades" => []
                ],
                "residenciaFiscalExterior" => [],
                "datosOrganizacion" => [
                    "fechaConstitucion" => $data['contractDate'],
                    "actaConstitucion" => $data['inscriptionDate'],
                    "paisOrigen" => null,
                    "paisResidencia" => null,
                    "cierreBalance" => null,
                    "idioma" => "español",
                    "cie" => null,
                    "lei" => null,
                    "observaciones" => null
                ],
                "registro" => [
                    [
                        "tipo" => $data['inscriptionType'],
                        "numero" => $data['inscriptionNumber'],
                        "lugar" => null,
                        "fecha" => null,
                        "folio" => null,
                        "libro" => null,
                        "tomo" => null
                    ]
                ],
                "mediocomunicacion" => [
                    [
                        "tipo" => "E-Mail",
                        "medio" => $data['email'],
                        "uso" => "Personal",
                        "principal" => true,
                        "notas" => null
                    ],
                    [
                        "tipo" => "Teléfono",
                        "medio" => $data['phone'],
                        "uso" => "Laboral",
                        "principal" => false,
                        "notas" => null
                    ],
                    [
                        "tipo" => "Movil",
                        "medio" => $data['cellphone'],
                        "uso" => "Personal",
                        "principal" => false,
                        "notas" => null
                    ]
                ],
                "domicilioUrbano" => [],
                "domicilioSimple" => [
                    [
                        "uso" => $data['address'][0]['use'],
                        "pais" => $data['address'][0]['country'],
                        "direccion" => $data['address'][0]['address'],
                        "ubicacion" => $data['address'][0]['location'],
                        "ciudad" => $data['address'][0]['city'],
                        "codigoPostal" => $data['address'][0]['zipcode'],
                        "provincia" => $data['address'][0]['province'],
                        "notas" => $data['address'][0]['notes']
                    ],
                    [
                        "uso" => $data['address'][0]['use'],
                        "pais" => $data['address'][0]['country'],
                        "direccion" => $data['address'][0]['address'],
                        "ubicacion" => $data['address'][0]['location'],
                        "ciudad" => $data['address'][0]['city'],
                        "codigoPostal" => $data['address'][0]['zipcode'],
                        "provincia" => $data['address'][0]['province'],
                        "notas" => $data['address'][0]['notes']
                    ]
                ],
                "domicilioRural" => [],
                "cuentaBancaria" => [],
                "cuentaBancariaExterior" => [],
                "autoridad" => [],
                "accionista" => [],
                "patrimonioYBalance" => [[
                        "fecha" => $data['resultDate'],
                        "activos" => $data['resultActive'],
                        "pasivos" => $data['resultPassive'],
                        "patrimonio" => $data['resultPN'],
                        "ingresos" => $data['resultIncome'],
                        "egresos" => $data['resultOutcome'],
                        "inversion" => $data['resultInv'],
                        "procedenciaFondos" => [
                            $data['resultSource']
                        ]
                ]],
                "actividadOrganizacion" => [
                ],
                "declaracionesPI" => [
                    "inscripcionSujetoObligado" => null,
                    "numeroInscripcionSujetoObligado" => null,
                    "observacionesInscripcionSujetoObligado" => null,
                    "esEstadounidense" => null
                ],
                "perfilInversor" => [
                    "experiencia" => null,
                    "operoBolsa" => null,
                    "perfilPersonal" => null,
                    "clasificacionUIF" => null,
                    "cantidadCuentas" => null
                ],
            ],
            "disposicionesGenerales" => [
                "horizonteInversion" => null,
                "perfilDeInversion" => null
            ],
            "personaRelacionada" => $rels,
            "usoFirma" => [],
            "medioComunicacion" => [],
            "domicilioUrbano" => [],
            "domicilioSimple" => [],
            "domicilioRural" => [],
            "cuentaBancaria" => []
        ];