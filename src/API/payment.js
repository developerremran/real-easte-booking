export const getBookingsData = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        },
      })
    const bookings = await response.json()
    return bookings
  }