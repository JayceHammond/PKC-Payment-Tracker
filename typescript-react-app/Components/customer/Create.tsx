import * as React from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';

export interface IValues {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    description: string,
}
export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

function NewCustomer(){
    return(
        <Form method="post" action="/events">
            <input type="text" name="First Name: " />
            <input type="text" name="Last Name: " />
            <input type="text" name="e-mail: " />
            <input type="text" name="Phone Number: " />
        </Form>
    )
}