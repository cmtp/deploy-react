import { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import PostService from '../../services/PostService';

// GET, POST, PUT, DELETE
export default function useFetch(api, method, body = null) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  let service;

  if (api === 'User') {
    service = UserService;
  }
  if (api === 'Post') {
    service = PostService;
  }

  const fetchUrl = async () => {
    let dataItems;
    if (method === 'GET') dataItems = await service.getUsers();
    if (method === 'POST') dataItems = await service.addUser(body);
    setData(dataItems.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
