import React from 'react'

function Example2() {
    const nestedData = [
        { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
        { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
        { category: "Drinks", items: ["Water", "Juice", "Tea", "Coffee"] },
      ];
  return (
    <div>
        <h2>Exampl-2</h2>
      <ul>
        {
            nestedData.map((nestedDataObj, index)=>(
                <li key={index}>
                    <strong>{nestedDataObj.category}</strong>
                    <ol>
                        {
                            nestedDataObj.items.map((item, index)=> (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ol>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Example2
