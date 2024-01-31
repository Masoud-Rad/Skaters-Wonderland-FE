import React from 'react'


const About = () => {
  return (
    <>
    <section className='border-2 rounded-lg mt-2 
   mb-2 border-t-0 text-center shadow-lg p-9'>
        <h1 className='sm:text-lg md:text-xl 2xl:text-2xl font-bold mb-8'>Welcome to Skaters-Wonderland!</h1>
        <p className='sm:text-sm md:text-lg '>
        At Skaters-Wonderland, we've built more than just a platform; we've created a thriving community for skaters, trainers, and enthusiasts to come together, connect, and explore the wonderful world of skating. Our mission is to provide a space where individuals passionate about skating can share experiences, discover new spots, connect with like-minded individuals, and support local businesses.
        </p>
        <h2 className='sm:text-sm md:text-lg lg:text-xl font-semibold my-4'>Why Skaters-Wonderland?</h2>
        <ul className='sm:text-sm md:text-lg '>
            <li className=' m-5'>
                <p className=' text-blue-500'>
                Explore Skate Spots:
                </p>
                <p>
                Find and explore amazing skating spots around the globe, contributed by fellow skaters.
                </p>
            </li>
            <li className=' m-5'>
                <p className=' text-blue-500'>
                Connect with Skaters:
                </p>
                <p>
                Connect with skaters from different backgrounds, share your stories, and build a global network of friends who share your love for skating.
                </p>
            </li>
            <li className=' m-5'>
                <p className=' text-blue-500'>
                Discover Local Businesses: 
                </p>
                <p>
                Support local skate businesses and discover new spots, trainers, and gear in your area.
                </p>
            </li>
            <li className=' m-5'>
                <p className=' text-blue-500'>
                Buy and Sell Gear: 
                </p>
                <p>
                Looking to upgrade your gear or sell equipment you no longer need? Skaters-Wonderland provides a marketplace for buying and selling second-hand skating gear.
                </p>
            </li>
        </ul>

        <p className='glass border-2 rounded-full mt-6 text-center shadow-lg  p-9 font-medium'>
            Join us on Skaters-Wonderland, where the joy of skating meets the spirit of community. Let's roll together!
        </p>
        
    </section>
    </>
  )
}

export default About