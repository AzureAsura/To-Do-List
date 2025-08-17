import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const ViewAll = () => {
  return (
    <section class="m-auto max-w-lg px-6 py-4">
      
      <Button
        to={`/all-listings`}
        variant="primary"
        icon="fa-solid fa-pen-to-square"
        className="bg-black py-4 px-50"
      >
        View All
      </Button>
    </section>
  )
}

export default ViewAll