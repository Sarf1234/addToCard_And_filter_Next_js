import getToken from '../utils/GetAuthrization'

const AllProductDAta = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/af35b536915ec576818d468cf2a6505c/reactjsTest/products`, {
        method: 'GET',
        headers: {
          Authorization: getToken(),
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const FeatureProductDAta = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/af35b536915ec576818d468cf2a6505c/reactjsTest/featured`, {
        method: 'GET',
        headers: {
          Authorization: getToken(),
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const ColorDAta = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/af35b536915ec576818d468cf2a6505c/reactjsTest/colors`, {
        method: 'GET',
        headers: {
          Authorization: getToken(),
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const ProductMaterial = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/af35b536915ec576818d468cf2a6505c/reactjsTest/material`, {
        method: 'GET',
        headers: {
          Authorization: getToken(),
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };


  export {AllProductDAta, ColorDAta, ProductMaterial, FeatureProductDAta}