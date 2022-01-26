import Intl from 'intl/lib/core';
import React, { useEffect, useState } from 'react';
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
import Teste from '../../components/Teste';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { useDispatch } from 'react-redux';

export const Catalog = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            setProducts(data);
        }
        loadProducts();
    }, []);

    const handleAddToCart = (id) => {
        dispatch(CartActions.addToCartRequest(id));
    };

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
                                    <ProductButton
                                        onPress={() => {
                                            handleAddToCart(item.id);
                                        }}
                                    >
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

export default Catalog;
