export const fetchTokens = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tokens');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tokens:', error);
      return [];
    }
  };
  