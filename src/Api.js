const API_URL = 'https://645cf892250a246ae313d573.mockapi.io/api/users/count';

export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching books:', error);
    return [];
  }
};

export const createBook = async (book) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error creating book:', error);
    return null;
  }
};

export const updateBook = async (book) => {
  try {
    const response = await fetch(`${API_URL}/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error updating book:', error);
    return null;
  }
};

export const deleteBook = async (bookId) => {
  try {
    await fetch(`${API_URL}/${bookId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log('Error deleting book:', error);
  }
};
