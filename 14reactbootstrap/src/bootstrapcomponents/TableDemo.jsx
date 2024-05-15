import React from 'react'
import Table from 'react-bootstrap/Table';

function TableDemo() {
    const users = [
        {"userid" : 1, "name" : "Chhaya", "age" : 2.5 },
        {"userid" : 2, "name" : "Jaya", "age" : 30 },
        {"userid" : 3, "name" : "Ms", "age" : 52 },
        {"userid" : 4, "name" : "Taylor", "age" : 25 }
    ]

  return (
    <div>
      <Table striped bordered hover size="sm" >
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        </thead>
        <tbody>
            {
                users.map((user) => (
                    <tr key={user.userid}>
                        <td>{user.userid}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))
            }
        </tbody>
      </Table>
    </div>
  )
}

export default TableDemo
