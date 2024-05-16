import React, { useRef, useState } from 'react';
import { Card } from './Card';

export const Foreground = () => {
    const ref = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({ desc: "", fileSize: "", tagTitle: "", tagColor: "green" });
    const [data, setData] = useState([
        {
            desc: "This is the data that will be displayed",
            fileSize: "0.9mb",
            close: "true",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Add some data here",
            fileSize: "1.9mb",
            close: "true",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        // Add other existing data here
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddCard = () => {
        const newCardData = {
            desc: formData.desc,
            fileSize: formData.fileSize,
            tag: { isOpen: true, tagTitle: formData.tagTitle, tagColor: formData.tagColor }
        };
        setData([...data, newCardData]);
        setFormData({ desc: "", fileSize: "", tagTitle: "", tagColor: "green" });
        setModalOpen(false);
    };

    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-8 p-4'>
                {data.map((item, index) => (
                    <Card key={index} data={item} reference={ref}/>
                ))}
            </div>

            <button onClick={() => setModalOpen(true)} className="fixed bottom-8 right-8 z-[4] bg-blue-500 text-white px-4 py-2 rounded-lg">Add Card</button>
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-[4]">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Add Card Information</h2>
                        <input type="text" name="desc" placeholder="Description" value={formData.desc} onChange={handleInputChange} className="input mb-4" />
                        <input type="text" name="fileSize" placeholder="File Size" value={formData.fileSize} onChange={handleInputChange} className="input mb-4" />
                        <input type="text" name="tagTitle" placeholder="Tag Title" value={formData.tagTitle} onChange={handleInputChange} className="input mb-4" />
                        <select name="tagColor" value={formData.tagColor} onChange={handleInputChange} className="input mb-4">
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </select>
                        <button onClick={handleAddCard} className="btn bg-green-500 px-3 m-4 rounded-lg text-white">Add Card</button>
                    </div>
                </div>
            )}

        </>
    );
};
