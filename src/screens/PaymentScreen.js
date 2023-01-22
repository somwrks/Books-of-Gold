import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';
import { useForm } from "react-hook-form";

const PaymentScreen = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="mx-auto p-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="cardNumber">Card Number</Label>
          <Input type="text" name="cardNumber" id="cardNumber" placeholder="Enter card number"
                 innerRef={register({ required: true })}
          />
          {errors.cardNumber && <FormText color="danger">This field is required</FormText>}
        </FormGroup>
        <FormGroup>
          <Label for="expiry">Expiry</Label>
          <Input type="text" name="expiry" id="expiry" placeholder="MM/YY"
                 innerRef={register({ required: true })}
          />
          {errors.expiry && <FormText color="danger">This field is required</FormText>}
        </FormGroup>
        <FormGroup>
          <Label for="cvv">CVV</Label>
          <Input type="text" name="cvv" id="cvv" placeholder="CVV"
                 innerRef={register({ required: true })}
          />
          {errors.cvv && <FormText color="danger">This field is required</FormText>}
        </FormGroup>
        <Button color="primary">Submit Payment</Button>
      </Form>
    </div>
  );
};

export default PaymentScreen;
