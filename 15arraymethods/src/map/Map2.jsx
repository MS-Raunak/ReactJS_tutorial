import React from 'react'

//map with array of objects
function Map2() {
    const products = [
      {  
        "id" : 1,
        "pname" : "Product-1",
        "price" : 1000
    },
    {  
        "id" : 2,
        "pname" : "Product-2",
        "price" : 2000
    },
    {  
        "id" : 3,
        "pname" : "Product-3",
        "price" : 3000
    },
    {  
        "id" : 4,
        "pname" : "Product-4",
        "price" : 4000
    }
]
  return (
    <div>
         <h2>Example-2</h2>
      <ul>
        {
            products.map( (product) => (
                <li key={product.id}>{product.pname} - {product.price}</li>
            ) )
        }
      </ul>
    </div>
  )
}

export default Map2
