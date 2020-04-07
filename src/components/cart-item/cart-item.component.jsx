import React from 'react'
import { CartItemContainer, ItemDetailsContainer, ImageContainer, NameContainer } from './cart-item.styles'

const CartItem = ({ item : {imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <ImageContainer src={ imageUrl } alt="item"/>
        <ItemDetailsContainer>
            <NameContainer>
                { name }
            </NameContainer>
            <NameContainer>
                { quantity } x { price } € 
            </NameContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem