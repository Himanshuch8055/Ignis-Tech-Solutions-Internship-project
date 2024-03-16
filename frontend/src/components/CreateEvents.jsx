import React, { useEffect } from 'react'
import axios from 'axios'
import FullCard from './FullCard';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
});

function CreateEvents() {

  useEffect(() => {
    client.get("/user")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  return (
    <>
      <h1>Create event</h1>
    </>
  )
}

export default CreateEvents