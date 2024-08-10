// This fetches the customer data from the API and logs it.
export const fetchCustomers = async (count: number = 10) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    console.log(`data is here for ${count} is : ${JSON.stringify(data)}`); // Log data to console for debugging
    return data.results; // Return only the results portion of the API response
  } catch (error) {
    console.error('Error fetching customers:', error);
    return []; // Return an empty array in case of an error
  }
};
