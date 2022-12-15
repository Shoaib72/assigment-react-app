import React from 'react';
import bg from './../Assets/BG.mp4'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import swal from 'sweetalert';


const Home = () => {
    const handleSubmit = () => {
        swal("Good job!", "Data Saved!", "success");
        this.form.reset()

    }
    return (
        <div>
            <video src={bg} autoPlay muted loop relative></video>

            <form className='my-3' onSubmit={handleSubmit}>
                <h2 className="text-white font-bold mb-10">PLEASE ENTER YOUR NAME AND PICK THE
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[' SECTORS YOU CURRENTLY INVOLVED IN..']}
                            loop={40}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <div className='md:flex md:flex-row md:gap-3 gap-6 justify-center items-center flex-col sm:mb-3 my-4'>
                    <input type="text" required placeholder="Name" className="input w-full max-w-xs mb-3 md:mb-[0px]" />
                    <select className="select w-full max-w-xs">
                        <option disabled defaultValue="Manufactering">Sectors</option>
                        <option>Manufactering</option>
                        <option>Construction Materials</option>
                        <option>Electronics and Optics</option>
                        <option>Food and Beverage</option>
                        <option>Bakery & Confectionery Products</option>
                        <option>Fish and Fish products</option>
                        <option>Meat and Meat Products</option>
                        <option>Milk and Dairy Products</option>
                    </select>

                </div>
                <div className="form-control flex gap-3 justify-center items-center">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-secondary bg-red-600" />
                        <span className="label-text ml-2 text-white">AGREE TO TERMS</span>
                    </label>
                </div>
                <button type="submit" className="btn btn-outline bg-red-600 mt-4 text-white">Save</button>
            </form>
        </div>
    );
};

export default Home;