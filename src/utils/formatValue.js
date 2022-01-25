import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

const formatValue = (number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
};

export default formatValue;
