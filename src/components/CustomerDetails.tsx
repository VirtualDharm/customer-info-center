import React, { useState } from 'react';
import { Customer } from './types';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [showSensitiveData, setShowSensitiveData] = useState(false);
  const [isPasswordPromptVisible, setPasswordPromptVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = () => {
    if (password === '123456') {
      setShowSensitiveData(true);
      setPasswordPromptVisible(false);
    } else {
      alert('Incorrect password!');
    }
  };

  const toggleSensitiveData = () => {
    if (showSensitiveData) {
      setShowSensitiveData(false); // Hide sensitive data
    } else {
      setPasswordPromptVisible(true); // Show password prompt if trying to view sensitive data again
    }
  };

  return ( 
    <div className="customer-details">
      <div style={{margin: '0'}}>
        <h2>{`${customer.name.title} ${customer.name.first} ${customer.name.last}`}</h2>
        <p>Email: {customer.email}</p>
        <p>DOB: {new Date(customer.dob.date).toLocaleDateString()} (Age: {customer.dob.age})</p>
        <p>Registered: {new Date(customer.registered.date).toLocaleDateString()} (Years: {customer.registered.age})</p>
        <p>Phone: {customer.phone}</p>
        <p>Cell: {customer.cell}</p>
        <p className="address">Address: {`${customer.location.street.name}, ${customer.location.city}, ${customer.location.state}, ${customer.location.country}`}</p>
        {showSensitiveData && (
          <div className="sensitive-data">
            <p>Username: {customer.login.username}</p>
            <p>Password: {customer.login.password}</p>
            <p>Salt: {customer.login.salt}</p>
            {/* <p>MD5: {customer.login.md5}</p> */}
            {/* <p>SHA1: {customer.login.sha1}</p> */}
            {/* <p>SHA256: {customer.login.sha256}</p> */}
          </div>
        )}
      </div>
      <div style={{ width: '150px', height: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} className="profile" src={customer.picture.large} alt={`${customer.name.first} ${customer.name.last}`} />
        <button onClick={toggleSensitiveData}>
          {showSensitiveData ? 'Hide Sensitive Data' : 'Show Sensitive Data'}
        </button>
        {isPasswordPromptVisible && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter password: "123456"'
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', textAlign: 'center' }}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handlePasswordSubmit} 
              style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
            >
              Submit
            </button>
            <button 
              onClick={() => setPasswordPromptVisible(false)} 
              style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#ccc', color: '#000', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        </div>        
        )}
      </div>
      <div>
        <PhotoGrid />
      </div>
    </div>
  );
};

export default CustomerDetails;
