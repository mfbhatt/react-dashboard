// import axios from 'axios';
// import { useEffect, useState } from "react";


// export default function useFetch(url, params) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     reFetchData();
//   }, [url]);

//   const reFetchData = () => {
//     setLoading(true);

//     axios.get(url, params).then(result => {
//         setData(result);
//         setLoading(false);
//     },err =>{
//         console.log(err);
//         setError(err.message);
//         setLoading(false);
//     });
//   };

//   return {
//     data,
//     loading,
//     error,
//     reFetchData,
//   };
// }
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { useEffect, useState } from "react";


export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    reFetchData();
  }, [url]);

  const reFetchData = () => {
    setLoading(true);
    client
  .query({
    query: gql`
      query Query {
        getAllUsers {
          id
          firstName
          lastName
          fullName
        }
      }
    `,
  })
  .then((result) => {
      setData(result.data.getAllUsers);
      setLoading(false);
  },err =>{
    console.log(err);
    setError(err.message);
    setLoading(false);
  });
  };

  return {
    data,
    loading,
    error,
    reFetchData,
  };
}