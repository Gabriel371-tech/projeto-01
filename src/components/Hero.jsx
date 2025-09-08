
import React from "react";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">TESTE TESTE TESTE TESTE</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">TESTE TESTE TESTE.</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5x1 sm:text-4x1 text-xl font-bold">teste, teste teste e teste</p>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">teste teste teste teste teste</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Teste Teste</button>
            </div>
        </div>
    );
        
   
};

export default Hero;