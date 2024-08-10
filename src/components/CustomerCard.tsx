import React from 'react';

interface CustomerCardProps {
    name: string;
    title: string;
    imageUrl: string;
    isSelected: boolean;
    onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, title, imageUrl, isSelected, onClick }) => {
    return (
        <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={imageUrl} alt={name} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
                <h3 style={{ margin: 0 }}>{name}</h3>
                {/* <p style={{ margin: 0 }}>{title}</p> */}
            </div>
        </div>
    );
};

export default CustomerCard;
