import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from "@mui/material"
import React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface iTermsAndConditions {
    title: string
    paragraph: string
}

export const TermsAndCondition = (props: iTermsAndConditions) => {
    const { title, paragraph } = props
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{paragraph}</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
