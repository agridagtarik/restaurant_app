import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard.js";
import { fetchPlas } from "../API/FetchPlaces.js";
import { getGeoLocation } from "../helper/getGeoLocation.js";
import InfiniteScroll from "react-infinite-scroll-component";
import NotFound from "./NotFound.js";
import EndMessage from "./EndMessage.js";
import LoadingPage from "./LoadingPage.js";

function Places() {
  const [places, setPlaces] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [limit, setLimit] = useState(13);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getGeoLocation(setLatitude, setLongitude);
    if (latitude || longitude) {
      fetchPlas(skip, limit, latitude, longitude, setPlaces);
    }
  }, [latitude, longitude, limit, skip]);

  const fetchData = async () => {
    setSkip((prev) => prev + 3);
    setLimit((prev) => prev + 7);
    if (places.length === 0 && places.length < 20) {
      setHasMore(false);
    }
  };

  return (
    <>
      <InfiniteScroll
        className="d-flex flex-column align-items-center"
        dataLength={places.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<LoadingPage className="mt-4" />}
        endMessage={<EndMessage />}
      >
        {places.length === 0 ? (
          <NotFound />
        ) : (
          places.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              latitude={latitude}
              longitude={longitude}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}

export default Places;
