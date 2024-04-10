const CustomerReviews = () => {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Doubting the deliciousness? <br />
          Let our reviews win you over!
          </h2>
  
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <p className="text-xl font-semibold mb-4">"Fantastic Experience"</p>
              <p className="text-lg text-gray-700">"I am thoroughly impressed with the quality of the food and drinks offered on this platform. The menu is well-curated, featuring a wide range of options to satisfy any craving. The ordering process was seamless, and my meal arrived fresh and delicious. A fantastic service for anyone looking for a convenient and satisfying dining experience!"</p>
              <p className="mt-4 text-gray-600">- Emily L.</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="h-6 w-6 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19.6569 21.6569C18.5851 22.7287 16.8284 22.7287 15.7566 21.6569L12 17.9023L8.24342 21.6569C7.17157 22.7287 5.41493 22.7287 4.34315 21.6569C3.27136 20.5851 3.27136 18.8284 4.34315 17.7566L8.09872 14L4.34315 10.2434C3.27136 9.17157 3.27136 7.41493 4.34315 6.34315C5.41493 5.27136 7.17157 5.27136 8.24342 6.34315L12 10.0987L15.7566 6.34315C16.8284 5.27136 18.5851 5.27136 19.6569 6.34315C20.7287 7.41493 20.7287 9.17157 19.6569 10.2434L15.9013 14L19.6569 17.7566C20.7287 18.8284 20.7287 20.5851 19.6569 21.6569Z"/>
                  </svg>
                ))}
              </div>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <p className="text-xl font-semibold mb-4">"Amazing"</p>
              <p className="text-lg text-gray-700">"My experience with this website has been nothing short of exceptional. The food and drinks are of the highest quality, and the ordering process is incredibly user-friendly. Whether I'm craving a hearty meal or a refreshing beverage, I can always count on this platform to deliver. Highly recommended for anyone seeking convenience without compromising on taste!"</p>
              <p className="mt-4 text-gray-600">- Alex D.</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="h-6 w-6 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19.6569 21.6569C18.5851 22.7287 16.8284 22.7287 15.7566 21.6569L12 17.9023L8.24342 21.6569C7.17157 22.7287 5.41493 22.7287 4.34315 21.6569C3.27136 20.5851 3.27136 18.8284 4.34315 17.7566L8.09872 14L4.34315 10.2434C3.27136 9.17157 3.27136 7.41493 4.34315 6.34315C5.41493 5.27136 7.17157 5.27136 8.24342 6.34315L12 10.0987L15.7566 6.34315C16.8284 5.27136 18.5851 5.27136 19.6569 6.34315C20.7287 7.41493 20.7287 9.17157 19.6569 10.2434L15.9013 14L19.6569 17.7566C20.7287 18.8284 20.7287 20.5851 19.6569 21.6569Z"/>
                  </svg>
                ))}
              </div>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <p className="text-xl font-semibold mb-4">"Fantastic Experience"</p>
              <p className="text-lg text-gray-700">"Absolutely mouthwatering! The food selection is diverse and caters to all tastes. From savory burgers to refreshing drinks, every item is a delight to the palate. Ordering was a breeze, and my meal arrived promptly, exceeding my expectations. A definite go-to for my culinary cravings!"</p>
              <p className="mt-4 text-gray-600">- Mark S.</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="h-6 w-6 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19.6569 21.6569C18.5851 22.7287 16.8284 22.7287 15.7566 21.6569L12 17.9023L8.24342 21.6569C7.17157 22.7287 5.41493 22.7287 4.34315 21.6569C3.27136 20.5851 3.27136 18.8284 4.34315 17.7566L8.09872 14L4.34315 10.2434C3.27136 9.17157 3.27136 7.41493 4.34315 6.34315C5.41493 5.27136 7.17157 5.27136 8.24342 6.34315L12 10.0987L15.7566 6.34315C16.8284 5.27136 18.5851 5.27136 19.6569 6.34315C20.7287 7.41493 20.7287 9.17157 19.6569 10.2434L15.9013 14L19.6569 17.7566C20.7287 18.8284 20.7287 20.5851 19.6569 21.6569Z"/>
                  </svg>
                ))}
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    );
  };
  
  export default CustomerReviews;
  