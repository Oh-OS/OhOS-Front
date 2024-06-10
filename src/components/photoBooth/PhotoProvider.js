import React, { createContext, useState } from 'react';
export const PhotoContext = createContext();

function PhotoProvider({ children }) {
    const [ images, setImages ] = useState([]);

    return (
        <PhotoContext.Provider value={{ images, setImages }}>
          {children}
        </PhotoContext.Provider>
    );
}

export default PhotoProvider;
