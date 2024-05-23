import React from 'react';

function WeatherSearchList({ searchList }) {
    return (
        <div>
            {searchList.length > 0 ? (
                <>
                    {searchList.map((item, index) => (
                        <p key={index}>
                            <>{item.address_name}</>
                        </p>
                    ))}
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default WeatherSearchList;