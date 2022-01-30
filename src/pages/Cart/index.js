import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
    ActionButton,
    ActionContainer,
    Container,
    Product,
    ProductContainer,
    ProductImage,
    ProductPrice,
    ProductPriceContainer,
    ProductQuantity,
    ProductSinglePrice,
    ProductTitle,
    ProductTitleContainer,
    SubTotalValue,
    TotalContainer,
    TotalProductsContainer,
    TotalProductsText,
} from './styles';
import formatValue from '../../utils/formatValue';
import { ProductList } from '../Catalog/styles';
import EmptyCart from '../../components/EmptyCart';
import * as CartAction from '../../store/modules/cart/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(({ cart }) => cart);

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((acumulator, product) => {
            const totalPrice = acumulator + product.price * product.amount;
            return totalPrice;
        }, 0);
        return formatValue(cartAmount);
    }, [products]);

    const handleIncrement = (product) => {
        dispatch(
            CartAction.updateAmountRequest(product.id, product.amount + 1)
        );
    };
    const handleDecrement = (product) => {
        dispatch(
            CartAction.updateAmountRequest(product.id, product.amount - 1)
        );
    };

    const handleRemove = (id) => {
        dispatch(CartAction.removeFromCart(id));
    };
    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<EmptyCart />}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductSinglePrice>
                                        {formatValue(item.price)}
                                    </ProductSinglePrice>
                                    <TotalContainer>
                                        <ProductQuantity>
                                            {item.amount}x
                                        </ProductQuantity>
                                        <ProductPrice>
                                            {formatValue(
                                                item.price * item.amount
                                            )}
                                        </ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton
                                    onPress={() => {
                                        handleIncrement(item);
                                    }}
                                >
                                    <FeatherIcon
                                        name="plus"
                                        color="#e83f5b"
                                        size={16}
                                    />
                                </ActionButton>
                                <ActionButton
                                    onPress={() => {
                                        item.amount > 1
                                            ? handleDecrement(item)
                                            : handleRemove(item.id);
                                    }}
                                >
                                    <FeatherIcon
                                        name="minus"
                                        color="#e83f5b"
                                        size={16}
                                    />
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>

            <TotalProductsContainer>
                <FeatherIcon name="shopping-cart" color="#fff" size={24} />
                <TotalProductsText>
                    {cartSize === 1 ? cartSize + ' item' : cartSize + ' itens'}
                </TotalProductsText>
                <SubTotalValue>{cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    );
};

export default Cart;
