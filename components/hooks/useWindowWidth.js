// import { useState, useEffect, useContext } from 'react';

// function useWindowWidth() {
//   const [isSmallerDevice, setIsSmallerDevice] = useContext();

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsSmallerDevice(width < 500);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return { isSmallerDevice };
// }

// export default useWindowWidth;
