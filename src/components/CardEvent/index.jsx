import './card-event.styles.css';

export function CardEvent({ event }) {
    return (
        <div className='card-event'>
            <img src={event.folder} alt={event.title} />
            <div className='card-body'>
                <p className='card-tag'>
                    {event.theme.name}
                </p>
                <p>
                    {event.date.toLocaleDateString('pt-BR')}
                </p>
                <h4 className='card-title'>
                    {event.title}
                </h4>
            </div>
        </div>
    )
}