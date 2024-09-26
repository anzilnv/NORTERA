import React from 'react'
import logo from '../assets/logonorteraremoved.png'

function LOading() {

    return (
        <div className="bg-[#1b3d37] flex justify-center items-center h-screen  custom-slide-in">
            <div>
                <img src={logo} alt="Logo" className="w-40 h-40 animate-spin" />
            </div>
        </div>

    )
}

export default LOading