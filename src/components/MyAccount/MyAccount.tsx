// import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/authContext/useAuth';
// // import { Samples } from '../../hooks/useSamples';
// import Login from '../Login/Login';
// import UserAccount from '../UserAccount/UserAccount';
// import './MyAccount.css';
// import { CircularProgress } from '@mui/material';

// // type AccountProps = {
// //   samples: Samples;
// // };

// const MyAccount = () => {
//   const { authUser, isLoading } = useAuth();
//   const navigate = useNavigate();

//   return isLoading ? (
//     <CircularProgress
//       color="inherit"
//       sx={{ marginLeft: '50%', marginTop: '25%' }}
//     />
//   ) : authUser ? (
//     <UserAccount />
//   ) : (
//     <Login />
//   );
// };

// export default MyAccount;
