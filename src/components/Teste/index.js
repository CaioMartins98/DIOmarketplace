import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
    CartButton,
    CartButtonText,
    CartPricing,
    CartTotalPrice,
    Container,
} from './styles';

const Teste = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <CartButton
                onPress={() => {
                    navigation.navigate('Cart');
                }}
            >
                <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
                <CartButtonText>1 item</CartButtonText>
                <CartPricing>
                    <CartTotalPrice>R$200,00</CartTotalPrice>
                </CartPricing>
                <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
            </CartButton>
        </Container>
    );
};

export default Teste;
