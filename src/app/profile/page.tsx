'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';

const ProfilePage = () => {
  const [data, setData] = useState('nothing');

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    setData(res.data.data._id);
  };

  const myPromise = getUserDetails();

  const notify = () =>
    toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Redirecting',
      error: 'Something went wrong',
    });

  useEffect(() => {
    getUserDetails();
    if (data !== 'nothing') redirect(`/profile/${data}`);
  }, [data]);

  return <div></div>;
};

export default ProfilePage;
