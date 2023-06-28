import Container from '../components/Container'
import ProductCard from '../components/ProductCard';
import { products } from '../static/products';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate()
  
  const handleOnDelete = (productId: string) => {
    
  }
  const handleOnEdit = (productId: string) => {
    navigate(`edit/product/${productId}`)
  }
  return (
    <Container>
        {products.map((product) =>(
            <ProductCard 
              onDelete = {handleOnDelete}
              onEdit={handleOnEdit} 
              productDetail={product}
            />
        ))}
    </Container>
  );
}

