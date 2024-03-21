import React, { createContext, useEffect, useState } from 'react';
import { url } from './Url';

// Step 1: Create context
export const AppContext = createContext(null);

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPages] = useState(6);

    async function fetchBlog(page=1) {
        setLoading(true);
        let Url = `${url}?page=${page}`;
        try {
            const result = await fetch(Url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("API is not working.");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchBlog()
    },[])

    function handlePageChange(newPage) {
        setPage(newPage);
        fetchBlog(newPage);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPages,
        fetchBlog,
        handlePageChange
    };

    // Step 2: Provide context
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;
