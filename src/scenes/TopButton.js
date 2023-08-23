import React from 'react'
import { useState,useEffect } from 'react'
import './TopButton.css'

const TopButton = () => {
    const [topButton,setTopButton] = useState(false)

    useEffect(() =>
    {
       window.addEventListener("scroll" , () =>
       {
        if(window.scrollY > 100)
        {
            setTopButton(true)
        }
        else
        {
            setTopButton(false)
        }
       })
    },[])

    const scrollOn = () =>
    {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <div>
        {topButton && (
            <button 
            type="button"
            class="btn btn-danger btn-floating btn-lg"
            id="btn-back-to-top"
            >
            <i class="fas fa-arrow-up"></i>
            </button>
        )}
    </div>
  )
}

export default TopButton