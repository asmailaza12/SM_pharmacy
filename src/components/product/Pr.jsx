import React, { useState } from "react"
import { product } from "../../assets/data/data"
import "./pr.css"
import { ProductCart } from "./ProductCart"

export const Pr = () => {
  const [filter, setFilter] = useState('')
  return (
    <>
      <div className="btnssd">
        <button className={filter === '' ? "actv" : null } onClick={() => setFilter('')}>All</button>
        <button className={filter === 'beauty' ? "actv" : null  } onClick={() => setFilter('beauty')}>Beauty</button>
        <button className={filter === 'medicine' ? "actv" : null  } onClick={() => setFilter('medicine')}>Medicine</button>
        <button className={filter === 'baby care' ? "actv" : null  } onClick={() => setFilter('baby care')}>Baby Care</button>
      </div>
      <section className='product'>

        <div className='container grid3'>
          {product.filter(p => p.category.toLowerCase().indexOf(filter) != -1).map((item) => (
            <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
          ))}
        </div>
      </section>
    </>
  )
}
