import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [ipInfo, setIpInfo] = useState<any>(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const ipResponse = await fetch(`${proxyUrl}https://api.ipify.org?format=json`);
        const ipData = await ipResponse.json();

        const infoResponse = await fetch(`${proxyUrl}https://ipinfo.io/${ipData.ip}/geo`);
        const infoData = await infoResponse.json();
        setIpInfo(infoData);
      } catch (error) {
        console.error('Error fetching IP information:', error);
      }
    };

    fetchIp();
  }, []);

  return (
    <header>
      <h1>Customer Details Portal</h1>
      {ipInfo ? (
        <div>
          <p>IP Address: {ipInfo.ip}</p>
          <p>Location: {ipInfo.city}, {ipInfo.region}, {ipInfo.country}, {ipInfo.postal}</p>
        </div>
      ) : (
        <p>Loading IP information...</p>
      )}
    </header>
  );
};

export default Header;
