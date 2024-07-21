import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stay . 11 June to 15 June . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-45971177/original/3590b9d5-742b-4999-be7c-85910e39c9cd.jpeg?im_w=960"
      location="Bantry Bay, Cape Town"
      title="Bantry Bay Condo, on the Rocks with Vast Sea Views"
      description="Bantry Bay with its boulder-clad shoreline and smashing cliff-edge waves, is home to Condo Odessa. Step into your minimalist, crisp, beach-infused apartment. The sound and sight of the ocean upfront and center melts your tension away. An impeccable and stylish 2 bedrooms apartment means you can bring the kids or another couple along to bask in your seaside escape. Special features include two built in room dividers, giving you multiple layout options."
      star={4.94}
      price="R2527 / night"
      total="R10509 total"
      />

     <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-697545699203669818/original/5bfa5df8-7850-4cd6-a546-e788cd7f4257.jpeg?im_w=960"
      location="George, Western Cape"
      title="Sand Cabin: Nima Lodge"
      description="Our three Sand cabins are architectural highlights. They were designed with an eye towards privacy, leading to their curving, organic shape and incredible form."
      star={4.96}
      price="R3900 / night"
      total="R15600 total"
      />

      <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-840408257959360007/original/c01aa19d-81bc-482f-9faa-9a5e20ad0073.jpeg?im_w=960"
      location="Wag 'n Bietjie Draai, Limpopo"
      title="The Pods"
      description="Just off the R511 near Thabazimbi you will find The Pods @ Thaba eNtle. Totally private and exclusively available to booked guests only, this wooden container home provides a luxury bushveld experience, overlooking the Thaba eNtle private boutique game lodge. The Pods have wood-fired hot tubs, are fully solar operational & self catering."
      star={4.77}
      price="R2725  / night"
      total="R10900 total"
      />
    </div>
  );
};

export default SearchPage;