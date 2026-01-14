import './fieldset.styles.css'

export function FieldSet({ children }) {
    return (
        <fieldset className="field-form">
            {children}
        </fieldset>
    )
}