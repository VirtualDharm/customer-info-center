import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '../services/api';
import CustomerCard from './CustomerCard';
import CustomerDetails from './CustomerDetails';
import { Customer } from './types';

const CustomerList: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    useEffect(() => {
        fetchCustomers(10)
        .then(data => {
            setCustomers(data);
            if (data.length > 0) {
                setSelectedCustomer(data[0]);
            }
        })
        .catch(error => {
            console.error('Failed to fetch customers:', error);
        });
    }, []);

    return (
        <div className="content">
            <div className="customer-list">
                {customers.map((customer) => (
                    <CustomerCard
                        key={customer.login.uuid}
                        name={`${customer.name.first}`}
                        title={customer.name.title}
                        imageUrl={customer.picture.medium}
                        isSelected={selectedCustomer?.login.uuid === customer.login.uuid}
                        onClick={() => setSelectedCustomer(customer)}
                    />
                ))}
            </div>
            {selectedCustomer && ( <CustomerDetails customer={selectedCustomer}/> )}
        </div>
    );
};

export default CustomerList;
