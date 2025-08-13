import React from 'react'
import { Link } from 'react-router-dom'

const ViewAll = () => {
  return (
    <section class="m-auto max-w-lg px-6 py-4">
      <Link
        to="/all-listings"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</Link>
    </section>
  )
}

export default ViewAll