import '../pages/Contact.css'
const ContactUS = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center" style={{  backgroundSize: 'cover',
    backgroundPosition: 'center',backgroundRepeat: 'no-repeat' ,backgroundImage: "url('https://c1.wallpaperflare.com/preview/882/551/718/black-and-white-chrome-close-up-dark.jpg')" }}>
      
        <form className='rounded-lg blur-form'>
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-white">Contact Us Form</h1>
          <div className="p-8 flex flex-col items-center md:flex-row md:space-x-24 mb ">
            <div className="text-white blur flex flex-col mb-4 md:mb-0 ">
              <input type="text" placeholder="Full Name" required className="input custom-input" />
              <input type="email" placeholder="Email" required className="input custom-input" />
              <input type="text" placeholder="Mobile" required className="input custom-input " />

              <textarea
                placeholder="Enter Your Queries"
                required
                defaultValue={""}
                className="input custom-input"
                style={{ resize: 'none' }}
              />
              <button type="submit" className="bg-gray-900 text-white md:w-auto">
                Send
              </button>
            </div>
            <div className="flex flex-col space-y-4 mb-12">
              
                <p>President: 154</p>
                <p>Jees: 456</p>
                <p>Hari: 54578</p>
                <p>President: 154</p>
                <p>Jees: 456</p>
                <p>Hari: 54578</p>
        
            </div>
          </div>
        </form>
      </div>
  
  );
};

export default ContactUS;
