import React, {useState} from 'react'
import './Table.css'
import {getDateValue} from '../../helpers';
import HtmlRender from '../HtmlRender';

const Table = (props) => {
    const {list, tableHeaders, onUpdateList, activeTr, field, orderDir} = props;

    function kitcut(text, limit) {
        text = text.trim();
        if (text.length <= limit) return text;

        text = text.slice(0, limit);

        return text.trim() + "...";
    }

    const openTrBodyHandler = (el) => {
        if (activeTr === el) {
            onUpdateList({activeTr: null})
        } else {
            onUpdateList({activeTr: el})
        }
    }

    const updateSortHandler = (el) => {
        if (field === el.field) {
          if (orderDir === null) {
              onUpdateList({dir: 'asc', activeTr: null})
          } else if (orderDir === 'asc') {
              onUpdateList({dir: 'desc', activeTr: null})
          } else{
              onUpdateList({dir: null, activeTr: null})
          }
        } else {
            onUpdateList({dir: 'asc', field: el.field, activeTr: null})
        }
        onUpdateList({field: el.field, activeTr: null})
    }

    const changeShortIco = (el) => {
        if (el.field === field) {
          if (orderDir === 'desc') {
            return '-down'
          } else if (orderDir === 'asc') {
              return '-up'
          }
        }
        return '';
    }

    return (
        <table>
            <thead>
            <tr>
                {tableHeaders.map((el, i) => {
                    return <th
                        onClick={() => updateSortHandler(el)}
                        key={i}
                    >
                        {el.name}
                        <i className={`fas fa-sort${changeShortIco(el)}`}/>
                    </th>
                })}
            </tr>
            </thead>
            <tbody>
            {list && list.map((el, i) => {
                return <React.Fragment key={el.id}>
                    <tr onClick={() => openTrBodyHandler(el.id)} className={`tr-head ${activeTr === el.id ? 'active' : ''}`}>
                        <td>{el.firstname}</td>
                        <td>{el.surname}</td>
                        <td>{el.sex === 'f' ? 'Naine' : 'Mees'}</td>
                        <td>{getDateValue(el.date)}</td>
                        <td>{el.phone}</td>
                    </tr>
                    <tr className={`tr-body ${activeTr === el.id ? 'active' : ''}`}>
                        <td colSpan="100%">
                            <div>
                                <img key={el.images[0].alt} src={el.images[0].medium} alt={el.images[0].alt} title={el.images[0].title}/>
                                <HtmlRender>{kitcut(el.intro, 300)}</HtmlRender>
                            </div>
                        </td>
                    </tr>
                </React.Fragment>
            })}
            </tbody>
        </table>
    )
}

export default Table