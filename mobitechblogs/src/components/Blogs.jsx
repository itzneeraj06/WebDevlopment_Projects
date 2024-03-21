import React from 'react'
import '../index.css'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'
const Blogs = () => {
  const { loading, posts } = useContext(AppContext)

  return (
    <div>
      {
        loading ? (<Spinner />) : (posts.length === 0 ? (<p>post not found</p>) : (posts.map((item, i) => (<Card key={i} title={item.title} author={item.author} category={item.category} date={item.date} content={item.content} tag={item.tags} />))))

      }

    </div>
  )
}

export default Blogs



