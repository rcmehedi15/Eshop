import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [brandname, setBrandname] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [short_descript, setShortDescript] = useState('');
    const [rating, setRating] = useState('');
    const [photo, setPhoto] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleBrandChange = (event) => {
        setBrandname(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleShortDescriptChange = (event) => {
        setShortDescript(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handlePhotoChange = (event) => {
        setPhoto(event.target.value);
    };

    const handleBrandProducts = (event) => {
        event.preventDefault();

        const newProduct = {
            name,
            brandname,
            type,
            price,
            short_descript,
            rating,
            photo,
        };
console.log(newProduct);
        fetch('http://localhost:3000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    // Reset the form fields
                    setName('');
                    setBrandname('');
                    setType('');
                    setPrice('');
                    setShortDescript('');
                    setRating('');
                    setPhoto('');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error, e.g., show an error message
            });
    };

    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold text-amber-300 text-center">Add Your Products</h2>
                <form onSubmit={handleBrandProducts}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Product Name"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select
                                    name="brandname"
                                    value={brandname}
                                    onChange={handleBrandChange}
                                    className="input input-bordered w-full"
                                    required
                                >
                                    <option value="">Select a brand</option>
                                    <option value="Nike">Nike</option>
                                    <option value="Adidas">Adidas</option>
                                    <option value="Gucci">Gucci</option>
                                    <option value="">Zara</option>
                                    <option value="H&M">H&M</option>
                                    <option value="Levi's">Levi's</option>
                                    <option value="other">other</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl">Type</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="type"
                                    value={type}
                                    onChange={handleTypeChange}
                                    placeholder="Type"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl">Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={handlePriceChange}
                                    placeholder="Price"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md-w-1/2">
                            <label className="label">
                                <span className="label-text text-xl">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="short_descript"
                                    value={short_descript}
                                    onChange={handleShortDescriptChange}
                                    placeholder="Short Description"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="rating"
                                    value={rating}
                                    onChange={handleRatingChange}
                                    placeholder="Rating"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="photo"
                                    value={photo}
                                    onChange={handlePhotoChange}
                                    placeholder="Photo URL"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Products" className="btn btn-block bg-amber-200" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
