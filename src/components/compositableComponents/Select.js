
const Select = (props) => {
    return (
        <select 
            name={props.name} 
            id={props.name}
            value={props.value}
            onChange={e => props.setvalue(e.target.value)}
            aria-describedby={`description-${props.name}`}
            required={props.require}
            disabled={props.disable}
        >
            {props.options.map((option) => (
                <option key={option.value}  value={option.value}>{option.text}</option>
            ))}
        </select>
    )
}

Select.defaultProps = {
    name: "select",
    value: "select",
    options: []
}

export default Select;