import React, { createContext, useState } from 'react';
export const WeatherContext = createContext();

function WeatherProvider({ children }) {
    const [selectedAddress, setSelectedAddress] = useState('서울 관악구 신림동');
    const [selectedX, setSelectedX] = useState(37);
    const [selectedY, setSelectedY] = useState(126);

    const selectContact = (address, x, y) => {
        setSelectedAddress(address);
        setSelectedX(x);
        setSelectedY(y);
    }

    return (
        <WeatherContext.Provider value={{ selectedAddress, selectedX, selectedY, selectContact }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherProvider;