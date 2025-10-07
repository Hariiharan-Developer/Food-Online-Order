import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';
import Spinner from '../../context/Spinner'; // optional full-screen spinner

const Verify = () => {
  const [searchParams] = useSearchParams();
  const successParam = searchParams.get('success') === 'true'; // convert to boolean
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + '/api/order/verify', {
        success: successParam,
        orderId
      });

      console.log(response.data); // debug response

      if (response.data.success) {
        navigate('/myorders');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      navigate('/'); // fallback if API fails
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className='verify'>
      <div className="spinner"></div>
      <p>Verifying order ...</p>
    </div>
  );
};

export default Verify;
