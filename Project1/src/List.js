import React from 'react'
import ListChild from './ListChild';

function List() {

    const data = [
        {id:1, person: 'Ali', age: 32, skill: 'React'},
        {id:2, person: 'Ahemd', age: 31, skill: 'Angular'},
        {id:3, person: 'Aun', age: 22, skill: 'Vue'}
    ];

    const list = data.map(data => <ListChild key={data.id} dat={data} />)

    return (
        <div>
            {list}
        </div>
    )
}

export default List
