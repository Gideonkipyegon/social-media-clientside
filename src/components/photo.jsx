import React from 'react';
import './photo.css';
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';

function Photo() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, 'image/');

    const uploadImage = () => {
        if (imageUpload === null) {
            return;
        }
        const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imageListRef)
            .then((response) => {
                Promise.all(response.items.map((item) => getDownloadURL(item))).then((urls) => {
                    setImageList(urls);
                });
            });
    }, []);

    return (
        <div className='photo'>
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
            <button onClick={uploadImage}>Upload Image</button>
            {imageList.map((url) => (
                <img key={url} src={url} alt="Uploaded" />
            ))}
        </div>
    );
}

export default Photo;
