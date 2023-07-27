import axios from 'axios';

let server = 'http://localhost:9000/equipment/';

export const getEquipment = async () => {
  try {
    const response = await axios.get(server + 'all');
    return (response.data);
  } catch (error) {
    throw new Error('Search not working');
  }
}

export const addEquipment = async (equipment) => {
  try {
    await axios.post(server + 'add', equipment);  // post tiedot http:n sisällä siksi parametrina
  } catch (error) {
    throw new Error('Add not successful')
  }
}

export const deleteEquipment = async (id) => {
  try {
    await axios.get(server + 'delete/' + id); // get tieto selaimen osoiterivillä siksi + 
  } catch (error) {
    throw new Error('Delete not successful')
  }
}
