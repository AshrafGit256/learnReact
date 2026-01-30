import { Fragment } from 'react';

function ListGroup() {
    let items  = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    items = [];

    const message = items.length === 0 ? <p>No Item Found!!</p> : null;

    return (
        <Fragment>
            <h1>List</h1>
            {items.length === 0 && <p>No Item Found!!</p> }
            <ul className="list-group">
            { items.map((item) => 
            <li key={item}>{item}</li>) }
            </ul>
        </Fragment>
    );
}

export default ListGroup;
