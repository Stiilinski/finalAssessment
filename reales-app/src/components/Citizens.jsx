import React, { useState } from 'react'
import Citizen from './Citizen'
import SearchFilter from './searchFilter'

export default function Citizens() {
  const [citizens, setCitizens] = useState([
    {
      id: 1,
      name: 'John',
      age: 28,
      address: 'Detroit',
      status: false,
    },

    {
      id: 2,
      name: 'Miles',
      age: 20,
      address: 'Harlem',
      status: false,
    },

    {
      id: 3,
      name: 'Jane',
      age: 25,
      address: 'Greenwich Village',
      status: true,
    },

    {
      id: 4,
      name: 'Stiles',
      age: 22,
      address: 'Beacon Hills',
      status: true,
    },

    {
      id: 5,
      name: 'Mike',
      age: 32,
      address: 'Seattle',
      status: false,
    },

    {
      id: 6,
      name: 'Peter',
      age: 24,
      address: 'East Village',
      status: true,
    },

    {
      id: 7,
      name: 'Lisa',
      age: 27,
      address: 'Yaowarat District',
      status: false,
    },

    {
      id: 8,
      name: 'Freya',
      age: 70,
      address: 'Vanaheim',
      status: true,
    },

    {
      id: 9,
      name: 'Kratos',
      age: 45,
      address: 'Sparta',
      status: true,
    },

    {
      id: 10,
      name: 'Mimir',
      age: 53,
      address: 'Jotunheim',
      status: true,
    },
  ])

  const toggleStatus = id => {
    const updatedCitizens = citizens.map(citizen =>
      citizen.id === id ? { ...citizen, status: !citizen.status } : citizen
    )
    setCitizens(updatedCitizens)
  }

  const [searchQuery, setSearchQuery] = useState('')
  const filteredCitizens = citizens.filter(citizen =>
    citizen.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  )

  return (
    <div className="container">
      <div className="headerArea">
        <h1>Citizens</h1>
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <ul>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={citizen.id}
            index={index}
            id={citizen.id}
            name={citizen.name}
            age={citizen.age}
            address={citizen.address}
            status={citizen.status ? 'Active' : 'Inactive'}
            toggleStatus={() => toggleStatus(citizen.id)}
          />
        ))}
      </ul>
    </div>
  )
}
