import React from 'react';

export const createMarkup = (string) => {
    if (string) {
        return {
            __html: string
        };
    }
};
export const getImage = (arr) => {
    if (arr) {
      return <img src={arr[0].large} alt={arr[0].alt} title={arr[0].title}/>
    }
};
export const getDateValue = (dateValue) => {
    if (dateValue) {
        const date = new Date(dateValue);
        const dateString = `${date.getFullYear()}.${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

        return dateString;
    }
    return '';
};
