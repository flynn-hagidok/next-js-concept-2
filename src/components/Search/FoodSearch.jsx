"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const FoodSearch = () => {

    const router = useRouter();
    const params = useSearchParams();

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const value = form.search.value;

        const newParams = new URLSearchParams(params.toString());
        newParams.set("search", value);

        router.push(`?${newParams.toString()}`)
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="search here..." className="px-2 py-2 bg-gray-300 w-xl text-black" />
            <button type='button' className="px-4 py-2 bg-orange-500">Search</button>
        </form>
    );
};

export default FoodSearch;