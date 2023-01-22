import React, { useState } from 'react';
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
  Dropdown,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PlaceOrder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, product, quantity });
    // Add code to send the order to the server
  }

  return (
    <Container className="px-5 py-5">
      <Form>
        <FormControl className="mb-3">
          <FormLabel>Name</FormLabel>
          <InputGroup type="text" value={name} onChange={e => setName(e.target.value)} />
        </FormControl>
        <FormControl className="mb-3">
          <FormLabel>Email</FormLabel>
          <InputGroup type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormControl>
        <FormControl className="mb-3">
          <FormLabel>Product</FormLabel>
          <Dropdown value={product} onChange={e => setProduct(e.target.value)}>
            <option value="">Dropdown a product</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </Dropdown>
        </FormControl>
        <FormControl className="mb-3">
          <FormLabel>Quantity</FormLabel>
          <InputGroup type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </FormControl>
        <Link to="/payment">
        <Button variant="primary" className="mt-3" onClick={handleSubmit}>Place Order</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default PlaceOrder;
