import React from 'react'
import worker from '../../../assets/mascotte/greeting_worker.png'

export const GreetingWorker = () => {
  return (
    <figure>
      <img
        src={worker}
        alt="ouvrier qui veut vous serrer la main"
        style={{ width: "100%" }}
      />
    </figure>
  );
}