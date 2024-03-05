import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../redux/Good';
import { useEffect } from 'react';
import React from 'react';
import GalleryItem from './GalleryItem';
import './Masseuses.scss';

const Masseuses = () => {
    
    const { goods } = useSelector((state: RootState) => state.good);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      const getGood = async () => {
        dispatch(getGoods());
      };
    
      getGood();
    }, [dispatch]);
    

    return (
        <>
            <div className='masseuses__section'>
                <div className="masseuses__title h2">Masseuses</div>
            </div>
            <div className="gallery__carousel">
                <Card className="gallery__carousel__title start">
                    <CardActionArea>
                        <div className="item__text">Наши товары</div>
                    </CardActionArea>
                </Card>
                <div className="gallery__carousel-items">
                    <GalleryItem items={goods} />
                </div>
            </div>
        </>
    );
};

export default Masseuses;
