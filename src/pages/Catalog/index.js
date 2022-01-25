import Intl from 'intl/lib/core';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';
import {
    Container,
    PriceContainer,
    Product,
    ProductButtonText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
    ProductButton,
} from './styles';
import FloatCart from '../../components/Teste';
export const App = () => {
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 149.9,
        },
        {
            id: '2',
            title: 'Assinatura mensal',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 49.9,
        },
        {
            id: '3',
            title: 'Assinatura anual',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 599,
        },
    ]);

    return (
        <>
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
                                <ProductImage
                                    source={{ uri: item.image_url }}
                                />
                                <ProductTitle>{item.title}</ProductTitle>
                                <PriceContainer>
                                    <ProductPrice>
                                        {formatValue(item.price)}
                                    </ProductPrice>
                                    <ProductButton onPress={() => {}}>
                                        <ProductButtonText>
                                            Adicionar
                                        </ProductButtonText>
                                        <FeatherIcon
                                            size={30}
                                            name="plus-circle"
                                            color="#D1D7E9"
                                        />
                                    </ProductButton>
                                </PriceContainer>
                            </Product>
                        )}
                    />
                </ProductContainer>
                <Teste />
                {/* O componente Teste é o FloatingCart, está dando algum erro que não consegui saber qual é ainda */}
            </Container>
        </>
    );
};

export default App;
