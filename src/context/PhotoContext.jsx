import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext();

export default function PhotosProvider({children}){

    const [photos, setPhotos] = useState([]);
const getPhotos = async()=>{
    const response = await fetch("/photos.json");
    const {photos:photosdb} = await response.json();
    setPhotos(photosdb)

}

useEffect(()=>{getPhotos()},[])
    return(
        <PhotoContext.Provider value = {{photos,setPhotos}}>
            {children}
        </PhotoContext.Provider>
    );
}