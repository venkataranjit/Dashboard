import React, { useEffect, useState } from 'react';

const MenuMaster = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // Step 1: Authenticate and obtain session or token
        const loginResponse = await fetch('https://uat-tscms.aptonline.in:9443/QPDSAPI/Account/Login?Userid=TE02&Password=Password@3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!loginResponse.ok) {
          throw new Error('Login failed');
        }

        const loginData = await loginResponse.json();
        // Assuming the login API returns a token or session id
        const token = loginData.token;

        // Step 2: Fetch menu data using the obtained token
        const menuResponse = await fetch('https://uat-tscms.aptonline.in:9443/QPDSAPI/MenuMaster/GetMenuMaster?UserId=TE02', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Adjust based on how the token should be used
          },
        });

        if (!menuResponse.ok) {
          throw new Error('Failed to fetch menu data');
        }

        const menuData = await menuResponse.json();
        setMenuData(menuData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Menu Master Data</h1>
      <pre>{JSON.stringify(menuData, null, 2)}</pre>
    </div>
  );
};

export default MenuMaster;
