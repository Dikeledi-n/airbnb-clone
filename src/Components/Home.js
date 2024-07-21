import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Cards from "./Cards";
import "./Home.css";
import { listListing } from "../Actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();
  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList || {};

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <div className="home_section">
            {Array.isArray(listings) && listings.length > 0 &&
              listings.map((listing) => (
                <Cards
                  key={listing.id}
                  src={listing.img}
                  title={listing.title}
                  description={listing.description}
                  price={listing.price}
                />
              ))
            }
          </div>
          <div className="home_section">
            <Cards
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1200&im_q=highq"
              title="Stay in Prince’s Purple Rain house"
              description="For the first time ever, celebrate the life and music of our friend and The Revolution’s legendary frontman, Prince, by staying at the actual Purple Rain house from the film. Enjoy an intimate tour, groove to some rare Prince songs, and get some sleep in The Kid’s bedroom. Wear your finest purple fits, and when you step into history, feel free to unleash your royal rockstar. Stay tuned."
            />
            <Cards
              src="https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b16970cf-1d55-4edd-bb1f-e1735d0a228e.jpeg?im_w=960&im_q=highq"
              title="Shrek’s Swamp"
              description="Located in the hills of the Scottish Highlands, Shrek’s Swamp is a stumpy, secluded haven fit for a solitude-seeking ogre… and for the first time ever, a handful of his biggest fans, thanks to yours truly. I’m swamp-sitting while Shrek’s away this Halloween, and I’m absolutely delighted to invite you in for a fairytale stay. Oh, and never mind the “BEWARE” signs. They’re probably for decoration."
            />
            <Cards
              src="https://a0.muscache.com/im/pictures/be0957a9-da56-47d6-89ca-223b6e75321a.jpg?im_w=960&im_q=highq"
              title="The Last Blockbuster"
              description="Hey Deschutes County residents! Dust off those membership cards for a sleepover inside the world’s last BLOCKBUSTER. When you call dibs on this stay, you’re booking a night back in the 90s, but this time you won’t have to beg your parents to rent the latest horror flick–we’ll give you the keys to the entire store!
              On 8/17 at 1PM PT, we’re inviting movie lovers from the area to request to book one of these three, one-night stays that will take place on 9/18, 9/19 and 9/20 for up to four people."
            />
            <Cards
              src="https://a0.muscache.com/im/pictures/miso/Hosting-49960055/original/8c9b6f68-c194-4497-880b-d9b24858ec8e.jpeg?im_w=960"
              title="Farm stay in Stellenbosch, South Africa"
              description="Avo cottage is one of three new cabins on the edge of a lake in the heart of the Banhoek conservancy. It is a light, modern cabin with access to endless hiking and the finest mountain biking trails in the western cape. Although it is styled as a two person cabin, there is an open queen sized pod attached to the living room which can sleep 2 children or an extra guest for a small extra fee. The deck of this cottage reaches out over the lake to allow you to jump into the icy water on a hot day."
              price="R2850/night"
            />
          </div>
          <div className="home_section">
            <Cards
              src="https://a0.muscache.com/im/pictures/miso/Hosting-17352041/original/b6a3cfe7-ff98-41b2-9d2d-642929632976.jpeg?im_w=960"
              title="Entire vacation home in Johannesburg, South Africa"
              description="This top-floor self-catering penthouse is elegantly furnished, large covered balcony and spectacular views of Joburg. Well located in Splice Riviera, a secure complex with strictly controlled access. This popular 3 bedroom penthouse can sleep up to 6 people. Lockable inter-leading door to the Hazel Penthouse to accommodate up to 12 guests."
              price="R2275/night"
            />
            <Cards
              src="https://a0.muscache.com/im/pictures/miso/Hosting-874686035326211853/original/ce3819b6-38cc-43b7-98b1-d0583a999752.jpeg?im_w=1200"
              title="Entire villa in Cape Town, South Africa"
              description="From the back terrace, soaring ocean views set the tone for a relaxing Cape Town getaway. Off the front of the property, soaring mountain views hint at adventure. If you’re up for a morning hike, the trail up Lion’s Head takes about 2 hours round-trip for the best views in the city. At home, a refreshing pool and cozy outdoor lounge are ready for a night of star gazing and local wine."
              price="R30354/night"
            />
            <Cards
              src="https://a0.muscache.com/im/pictures/b5fb382b-1bb8-4541-9851-7a8433d430eb.jpg?im_w=1200"
              title="Entire villa in Ehlanzeni, South Africa"
              description="Kingfisher River Lodge is a modern, exclusive-use haven situated on the banks of the Crocodile River in Mjejane Private Game Reserve, with direct views of the world renowned Kruger National Park.
              With all the urban comforts in a wild bushveld setting, this is self-catering on a very luxury level, with beautifully decorated spaces, sublime bed linen and luxurious bathrooms. The grey tones within mimic the characteristic bark of the ancient Leadwood clinging to the banks of the river outside"
              price="R6950/night"
            />
            <Cards
              src="https://a0.muscache.com/im/pictures/miso/Hosting-678629633136325541/original/a45039d0-198b-4087-8d3d-94c9a4d3c153.png?im_w=960"
              title="Entire villa in Vagia, Greece"
              description="Chill back and enjoy in this (61sqm) elite minimal style villa(1of3) the sun, the pool or crystal clear blue waters of the Aegean sea in the magnificent Vagia beach in Serifos Greece.
              Homa in Greek means the earthy soil the inspiration to the earthy tint that prevails. The barren, rocky and wild surroundings embrace the construction. The embrace of nature to our souls. Our home. Homa."
              price="R16754/night"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
