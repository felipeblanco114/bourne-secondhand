import React from 'react';
import ItemListBrand from '../ItemListBrand/ItemListBrand';
import {useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const ItemContainerBrand = ({ cartId, setCartId }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();

    const handleLinkCategory = (link) => {
        history.push(link);
        handleClose();
    }

    return (
        <>
        <div className='category-container'>
            <Button
                id="fade-button"
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <h2>CATEGORÍAS</h2>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => handleLinkCategory('/products')}>TODO</MenuItem>
                <MenuItem onClick={() => handleLinkCategory('/products/category/remeras')}>REMERAS</MenuItem>
                <MenuItem onClick={() => handleLinkCategory('/products/category/sweaters')}>SWEATERS</MenuItem>
                <MenuItem onClick={() => handleLinkCategory('/products/category/camisas')}>CAMISAS</MenuItem>
                <MenuItem onClick={() => handleLinkCategory('/products/category/accesorios')}>ACCESORIOS</MenuItem>
                <MenuItem onClick={() => handleLinkCategory('/products/category/pantalones')}>PANTALONES</MenuItem>
            </Menu>
        </div>
        <div className='item-list-container'>
            <ItemListBrand cartId={cartId} setCartId={setCartId} />
        </div>
        </>
    )
}

export default ItemContainerBrand;