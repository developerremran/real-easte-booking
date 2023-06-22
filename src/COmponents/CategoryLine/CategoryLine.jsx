import React from 'react'
import { categories } from './categoryDat'
import CategoryBox from './CategoryBox'
import { useSearchParams } from 'react-router-dom'
const CategoryLine = () => {

  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  
  // **
  // The best way to declere and find category option in your local data 
    // your data to need import then map or filter do it 
  //
  
  return (
    <div>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryLine
