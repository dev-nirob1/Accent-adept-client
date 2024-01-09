// Get role
export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_API}/users/${email}`)
    const user = await response.json()
    return user?.role
  }
  