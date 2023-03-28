import { useEffect, useState } from 'react';
import axios from 'axios';

function useRenderPaintings(pageNumber) {

    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [ hookPaintings, setHookPaintings ] = useState([])
    const [ hasMore, setHasMore ] = useState(false)
    const [ currentUser, setCurrentUser ] = useState(null)

      // fetches data of current user
  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  },[])
    
    useEffect(() => {
        setLoading(true)
        setError(false)

        axios({
            method: 'GET',
            url: '/paintings',
            params: { page: pageNumber }
        }).then(res => {
            setHookPaintings(prevHookPaintings => {
                return [...prevHookPaintings, ...res.data]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
            console.log(res.data)
        })

    }, [pageNumber, currentUser])

    return { loading, error, hookPaintings, hasMore }
}

export default useRenderPaintings;