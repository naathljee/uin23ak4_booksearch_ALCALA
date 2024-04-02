import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Komponenter/Categories'
import Main from './Komponenter/Main'

import { booksApi } from './assets/booksApi'


function App() {
  console.log(booksApi)


  return (
    <Layout>
      <Routes>
        <Route element={<Main/>}/>
        <Route path="characters/*" element={<Categories />}>
          <Route index element={<CategoriesIndex content={content} setQuery={setQuery} setCurrentId={setCurrentId} />}/>
          <Route path=':slug' element={<Category posts={posts} currentId={currentId} />}/>
          <Route path=':slug/:postid' element={<PostPage posts={posts} />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
