const getIsLoggedIn = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };


  export default getIsLoggedIn