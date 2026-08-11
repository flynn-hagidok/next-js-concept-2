"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const AddFeedbackForm = () => {

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        const feedbackData = {
            message
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedbackData)
        });
        const data = await res.json();
        if (data.insertedId) {
            alert("success");
            form.reset();
            router.push("/feedback");
        }
    };

    return (
        <form onSubmit={handleSubmit} className=''>
            <textarea
                required
                name="message"
                id=""
                cols={80}
                rows={10}
                placeholder='write your feedback here'
                className='p-2 border rounded'>
            </textarea> <hr />
            <button type='submit' className="bg-blue-400 px-4 py-3 rounded font-semibold text-black cursor-pointer">
                Send
            </button>
        </form>
    );
};

export default AddFeedbackForm;