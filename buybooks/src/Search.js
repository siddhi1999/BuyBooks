import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./List.css";

const Search = (props) => {
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        try{
            axios({
                method: "get",
                url: `https://www.googleapis.com/books/v1/volumes?q=${props.searchValue}+intitle`
            })
            .then(res => {
                // console.log(res.data.items);
                const result = Object.values(res.data.items);
                setSearchList([...result]);
            });
        } catch(error) {
            console.log(error);
        }
    },[]); 

    return (
        <div className="movie-card-wrapper">

            {searchList.map((data, index) => {
                // console.log('data', data);
                return (
                    <Link
                        to={"/Details/" + data.id}
                        style={{ textDecoration: "none" }}
                        key={index}
					>
                    <Card  sx={{ width: 210, display: "flex", flexWrap: "wrap" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={data.volumeInfo.imageLinks.thumbnail}
                            alt="book image"
                            />
                            <CardContent>
                            <Typography gutterBottom component="div" style= {{color: 'red'}}>
                                {data.saleInfo.saleability === 'FOR_SALE'
                                    ? 'INR ' + data.saleInfo.listPrice.amount
                                    : data.saleInfo.saleability}
                            </Typography>
                            <Typography variant="body2">
                                {data.volumeInfo.title}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Link>
                )
            })}
        </div>
    );
};

export default Search;