import React from 'react'
import './Table.css'
import {getDateValue} from '../../helpers';

const Table = (props) => {
    const {list} = props


    return (
        <table>
            <thead>
            <tr>
                <th> Eesnimi <i className="fas fa-sort"></i></th>
                <th> Perekonnanimi <i className="fas fa-sort-down"></i></th>
                <th> Sugu <i className="fas fa-sort-up"></i></th>
                <th> Sünnikuupäev <i className="fas fa-sort"></i></th>
                <th> Telefon <i className="fas fa-sort"></i></th>
            </tr>
            </thead>
            <tbody>
            {list && list.map(el => {
                return <tr key={el.id}>
                    <td>{el.firstname}</td>
                    <td>{el.surname}</td>
                    <td>{el.sex === 'f' ? 'Naine' : 'Mees'}</td>
                    <td>{getDateValue(el.date)}</td>
                    <td>{el.phone}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}

export default Table