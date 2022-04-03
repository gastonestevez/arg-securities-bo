import React from "react"
import NumberFormat from "react-number-format"

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void
    name: string
}

export const CustomNumberFormat = React.forwardRef<NumberFormat, CustomProps>(
    function CustomNumberFormat(props, ref) {
        const { onChange, ...other } = props

        return (
            <NumberFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    })
                }}
                thousandSeparator="."
                decimalSeparator=","
                isNumericString
            />
        )
    }
)
