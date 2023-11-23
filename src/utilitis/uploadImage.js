export const uploadImage = async (file, imageUrl) => {
    const formData = new FormData();
    formData.append('image', file);
  
    const response = await fetch(imageUrl, {
      method: 'POST',
      body: formData,
    });
  
   const data = response.json();
   return data
  };