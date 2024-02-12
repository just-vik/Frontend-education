import { title } from "process";
import React, { useState } from "react"

export default function AddProduct() {

    type Product = {
        title: string,
        price: number,
        count: number
    };

    const [formData, setFormData] = useState<Product>({ title: "", price: 0, count: 0 });

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        formData["title"] = event.target.value;
        setFormData({ ...formData });
        console.log(formData);
    }

    const submitHandler = (event: React.FormEvent): void => {
        event.preventDefault();

    }

    return (
        <div>
            <p>Form for adding a product:</p>
            <form onSubmit={submitHandler}>
                <input value={formData.title} type="text" name="title" placeholder="title" onChange={changeHandler} />
                <input type="text" name="price" placeholder="price" />
                <input type="text" name="count" placeholder="count" />
                <button>Add</button>
            </form>
        </div>

    )
}