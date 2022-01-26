import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
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

const Cart = () => {
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 149.9,
            quantity: 1,
        },
        {
            id: '2',
            title: 'Assinatura trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 149.99,
            quantity: 1,
        },
    ]);

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((acumulator, product) => {
            const totalPrice = acumulator + product.price * product.quantity;
            return totalPrice;
        }, 0);
        return formatValue(cartAmount);
    }, [products]);
    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFootComponentStyle={{
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
                                            {item.quantity}x
                                        </ProductQuantity>
                                        <ProductPrice>
                                            {formatValue(
                                                item.price * item.quantity
                                            )}
                                        </ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton onPress={() => {}}>
                                    <FeatherIcon
                                        name="plus"
                                        color="#e83f5b"
                                        size={16}
                                    />
                                </ActionButton>
                                <ActionButton onPress={() => {}}>
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
