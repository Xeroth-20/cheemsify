import React, { useState, useEffect } from 'react';

/* Components */
import { CheemsifyCardList } from './../cheemsify-card-list/CheemsifyCardList';
import { Pagination } from './../pagination/Pagination';

/* Functions */
import { getCardList } from './../../functions/apicalls';

/* Styles */
import './Showcase.scss';

const validDateList = [
    {
        title: '24 horas',
        value: 'last24hours'
    },
    {
        title: '3 días',
        value: 'last3days'
    },
    {
        title: '7 días',
        value: 'lastweek'
    }
];

export const Showcase = (props) => {
    const [status, setStatus] = useState({
        cardList: [],
        totalPages: 1
    });
    const [dateToken, setDateToken] = useState('');
    const [filters, setFilters] = useState({
        dateValue: validDateList[0].value,
        page: 1,
        perpage: 12
    });

    useEffect(() => {
        getCardList(dateToken, filters.dateValue, filters.page, filters.perpage).then((response) => {
            if (!response.error) {
                setStatus({
                    cardList: response.data,
                    totalPages: response.totalPages
                });
                setDateToken(response.dateToken);
            } else {
                const { error } = response;
                props.showPopUp(error.type, error.message);
            }

        });
    }, [filters]);

    const handleDateChange = (newDateValue) => {
        setDateToken('');
        setFilters((prevFilters) => {
            return {
                ...prevFilters,
                dateValue: newDateValue,
                page: 1
            };
        });
    };

    const handlePageChange = (value) => {
        setFilters((prevFilters) => {
            return {
                ...prevFilters,
                page: value
            };
        });
    };

    return (
        <div className="showcase">

            <div className="showcase-header">
                <h2 className="title">
                    Traducciones
                </h2>
            </div>

            <div className="showcase-container top">
                <div className="showcase-action-group">
                    {
                        validDateList.map((validDate) => {
                            return (
                                <div className="showcase-action-item unselectable"
                                    key={validDate.title}
                                    onClick={() => handleDateChange(validDate.value)}>
                                    {validDate.title}
                                </div>
                            );
                        })
                    }
                </div>
                <Pagination handlePageChange={handlePageChange}
                    value={filters.page}
                    currentPage={filters.page}
                    totalPages={status.totalPages} />
            </div>

            <div className="showcase-body">
                <CheemsifyCardList cardList={status.cardList} />
            </div>

            <div className="showcase-container bottom">
                <Pagination handlePageChange={handlePageChange}
                    value={filters.page}
                    currentPage={filters.page}
                    totalPages={status.totalPages} />
            </div>

        </div>
    );
};