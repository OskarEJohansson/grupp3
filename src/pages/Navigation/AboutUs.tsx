const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end font-serif relative">
      <div className="flex flex-col justify-center items-center px-4 py-12 md:px-8 relative z-10">
        <div className="w-full md:w-4/5 flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 md:pr-2">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-left text-gray-800 font-sans antialiased mb-8" style={{ maxHeight: "80vh" }} >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">About us</h1>
              <p className="text-base md:text-lg mb-6">
                Taste Trails is a virtual restaurant that opened for business in the start of 2024. We, a group of friends with a shared vision, created it with the aim of bringing restaurant-standard food to people in the comfort of their own homes.
                <br /> Our goal is to empower you to make informed decisions about what to eat, providing transparent information and easy-to-order menus.
                <br /> By operating in the virtual realm, we spare you from the hustle and bustle of a physical location. This enables us to handle any assistance you may need personally, professionally, and most importantly, directly.
                <br /> Based in Stockholm, Sweden, all of us founders hail from IT development backgrounds and converged through our mutual passion for the culinary experience.
                <br /> We sincerely hope to serve you well, ensuring that your experience with us is nothing short of pleasant.
                <br />
                <br /> <em>Sincerely, the Taste Trails team.</em>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-2 relative flex justify-center items-center" style={{ height: "80vh" }}>
    <img
        src="https://www.mark.se/globalassets/a-invanare/barn--och-utbildning/vuxenutbildningen/bilder/1200x600/kock.jpg?mode=crop&w=1200&h=600&scale=both"
        alt="About Us"
        className="w-full h-full object-cover rounded-lg shadow-md"
    />
</div>
</div>
</div>

      <section className="bg-gray-100 py-8 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">The Dream Team</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Oskar Johansson</h3>
              <p>Scrum Master</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Tove Larsson</h3>
              <p>Product Owner</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Hampus Borg</h3>
              <p>Developer</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Rasmus Nilsson</h3>
              <p>Developer</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Niklas Odell</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
