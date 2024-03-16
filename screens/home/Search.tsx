import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
}

const ProductComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`http://10.0.2.2:3000/api/Flowershop/product`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, []);

    useEffect(() => {
        const results = searchProductByName(products, searchTerm);
        setSearchResults(results);
    }, [searchTerm, products]);

    function searchProductByName(products: Product[], query: string): Product[] {
        query = query.toLowerCase();
        return products.filter(product => product.name.toLowerCase().includes(query));
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                //onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {searchResults.map(product => (
                    <li key={product.id}>
                        <div>{product.name}</div>
                        <div>Price: {product.price}</div>
                        <div><img src={product.image} alt={product.name} /></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductComponent;
