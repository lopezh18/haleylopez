import React, { Fragment } from 'react';

const ListComponent = ({header, items}) => (
    <Fragment>
        <p className='text-4xl font-bold'>{header}</p>
        <ul className='list-disc mx-5'>
            {items.map((item, idx) => {
                return (<li key={`${header}-${idx+1}`}>{item}</li>)
            })}
        </ul>
    </Fragment>
);

export default ListComponent;