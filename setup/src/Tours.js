import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div>
        <h2>Available tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/> /// ... means will have access to all properties of object
        }
        )}
      </div>
    </section>
  );
};

export default Tours;

