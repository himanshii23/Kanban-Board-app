import axios from 'axios';

const API_BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment'; // Replace with your API URL

export const fetchTickets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};
