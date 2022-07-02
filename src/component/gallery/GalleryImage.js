import React from 'react'

const GalleryImage = ({ dog }) => {
  return (
    <>
      <div className='col-sm-6 col-lg-4 mb-4'>
        <div className='card'>
          <img src={dog} alt='img' />
        </div>
      </div>
    </>
  )
}

export default GalleryImage
