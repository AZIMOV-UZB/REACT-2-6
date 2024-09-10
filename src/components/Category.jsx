import React, { useState } from 'react'
import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery } from '../redux/api/category-api'

const Category = () => {
  const[updateCategoryItem, setUpdateCategoryItem]=useState(null)
  const {isLoading, data, isSuccess, isError, error} = useGetCategoryQuery()
  const [creteCategory, {data:creteDate , isLoading:creteLoading}]=useCreateCategoryMutation()
const [del,{}] =useDeleteCategoryMutation()
  const handleCateBlog = (event)=>{
    event.preventDefault()
    let formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries());


    creteCategory(data).unwrap()
    .then(()=>{
      event.target.reset()
    })


  }
  console.log(data);

  return (
    <div>
        <h2>Category</h2>

        <form onSubmit={handleCateBlog} action="">
          <input type="text"  name='title' />
          <button >{creteLoading ? "Loading... " : "Create"}</button>

        </form>
        {
          updateCategoryItem && 
          <form action=''>
            <input defaultValue={useCreateCategoryItem.title} type="text" name='title' />
            <button>save</button>
            <button onClick={()=>setUpdateCategoryItem(null)}>cancel</button>
          </form>
        }
        {isLoading && <h3>Loading...</h3>}
        {
            data?.map((category)=>(
                <div key={category.id}>
                    <h5>{category.title}</h5>
                    <button onClick={()=>del(category.id)}>delete</button>
                    <button onClick={()=>setUpdateCategoryItem(category)}>edit</button>
                    </div>
            ))
        }
        
    </div>
  )
}

export default Category