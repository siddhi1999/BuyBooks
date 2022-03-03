import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Details = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://www.googleapis.com/books/v1/volumes/${id}`
        })
        .then(res => {
            // console.log('result', res.data);
            setDetails([res.data]);
        })
    },[]);
    return (
        <div>
            {details.map((data, index) => {
                return (
                    <Card sx={{ display: 'flex' }} key= {index}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={data.volumeInfo.imageLinks.thumbnail}
                            alt="book image"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {data.volumeInfo.title}
                            </Typography>
                            <Typography component="div" color= "text.secondary">
                                {data.volumeInfo.authors ? data.volumeInfo.authors : 'Unknown'} <br />
                                Publish Date- {data.volumeInfo.publishedDate}
                            </Typography>
                            <Typography variant="subtitle1" color= 'red' component="div">
                                {data.saleInfo.saleability === 'FOR_SALE'
                                    ? 'INR ' + data.saleInfo.listPrice.amount
                                    : data.saleInfo.saleability}
                            </Typography>
                            <Typography component="div">
                                Average Rating: {data.volumeInfo.averageRating}
                            </Typography>
                            </CardContent>
                        </Box>
                        </Card>
                )
            })}
        </div>
    );
};

export default Details;