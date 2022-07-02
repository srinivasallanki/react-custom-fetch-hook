import React from 'react'
import useFetch from './../../hooks/useFetch'
import GalleryImage from './GalleryImage'

const Gallery = () => {
  const { response, error, loading } = useFetch(
    'https://dog.ceo/api/breeds/image/random/30',
    'message'
  )

  const renderItems =
    response &&
    response.message.map((dog) => <GalleryImage key={dog.id} dog={dog} />)

  return (
    <>
      <div className='container'>
        <div className='row' data-masonry='{"percentPosition": true }'>
          {renderItems}
        </div>
      </div>
    </>
  )
}

export default Gallery
