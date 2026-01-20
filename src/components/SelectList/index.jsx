import './select-list.styles.css';

export function SelectList({ items, ...rest }) {
    return (
        <select {...rest} className='select-list-form' defaultValue="">
            <option value="" key="0" disabled>
                Select an option
            </option>
            {items.map(function (item) {
                return <option value={item.id} key={item.id}>
                    {item.name}
                </option>
            })}
        </select>
    )
}