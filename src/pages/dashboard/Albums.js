import PageContainer from '../../components/layout/Container';
import AlbumsList from '../../components/AlbumsList';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ReturnButton from "../../components/ui/ReturnButton";


function Albums() {
    const [albums, setAlbums] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then((res) => {
                setAlbums(res.data);
            }, []);
    });

    return (
        <PageContainer>
            <ReturnButton />
            <div className="h2">List of Albums</div>
            <AlbumsList albums={albums}/>
        </PageContainer>
    );
}

export default Albums;
