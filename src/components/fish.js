import axios from 'axios';

let server = 'http://localhost:8080/fish/';

export const getFish = async () => {
  try {
    const response = await axios.get(server + 'all');
    return (response.data);
  } catch (error) {
    throw new Error('Search not working');
  }
}

export const addFish = async (fish) => {
  try {
    await axios.post(server + 'add', fish);  // post tiedot http:n sisällä siksi parametrina
  } catch (error) {
    throw new Error('Add not successful')
  }
}

export const deleteFish = async (id) => {
  try {
    await axios.get(server + 'delete/' + id); // get tieto selaimen osoiterivillä siksi + 
  } catch (error) {
    throw new Error('Delete not successful')
  }
}
