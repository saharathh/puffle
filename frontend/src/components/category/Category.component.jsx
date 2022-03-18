import React from 'react';
import { Box, Card, CardActionArea, CardContent, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Category = ({id, product_name, page, photo}) => {
    let navigate = useNavigate();
    return (
        <Grid item key={id} xs={12} sm={12} md={6} lg={6}>
            <Card elavation={0} sx={{
                display: 'flex',
                justifyContent: 'center',
                height: 550,
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                }}>
                { `${product_name}` === 'puffle'
                ? <CardActionArea href="https://instagram.com/puffle.co?utm_medium=copy_link">
                    <CardContent>
                        <Typography variant="h3" textAlign="center" sx={{justifyContent: 'center', color: 'white', fontWeight: 400}}>
                            {product_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                :<CardActionArea onClick={() => {navigate(`${page}`)}}>
                    <CardContent>
                        <Typography variant="h3" textAlign="center" sx={{justifyContent: 'center', color: 'white', fontWeight: 400}}>
                            {product_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                }
            </Card>
        </Grid>
    )
}

export default Category;