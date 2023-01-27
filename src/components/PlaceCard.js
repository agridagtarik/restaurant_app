import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import haversine from "haversine";

const PlaceCard = ({ place, latitude, longitude }) => {
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <div
        className="shadow m-4 bg-body rounded-3 position-relative"
        style={{ width: 700, height: 350 }}
      >
        {place.images.length === 0 ? (
          <div
            style={{ maxWidth: 700, height: 260 }}
            className="card-img-top rounded-3 bg-body-secondary text-white text-center p-4"
          >
            Images not Found
          </div>
        ) : (
          <img
            src={place.images[0].base64}
            alt={place.images[0].itemId}
            style={{ maxWidth: 700, height: 260 }}
            className="card-img-top rounded-3"
          />
        )}
        <span
          className="rounded badge position-absolute d-flex align-items-center"
          style={{
            width: 56,
            height: 32,
            left: 8,
            top: 8,
            backgroundColor: "#B70014",
          }}
        >
          <StarRoundedIcon
            style={{ width: 13, height: 12.35, marginRight: 3 }}
          />{" "}
          {place.storeInfo.rate.toFixed(1)}
        </span>
        <div className="card-body px-2">
          <h5
            className="card-title"
            style={{
              fontSize: 18,
              marginTop: "0.75rem",
              marginBottom: 0,
              paddingBottom: 0,
              height: "2rem",
              color: "rgba(26, 24, 36, 1)",
            }}
          >
            {place.title}{" "}
          </h5>
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: 12, color: "rgba(26, 24, 36, .5)" }}>
              Coffee,Tatli
            </div>
            <div>
              <ShoppingBasketIcon
                className="mx-1"
                style={{ fontSize: "0.75rem" }}
              />
              <span style={{ fontSize: 12, color: "rgba(26, 24, 36, .5)" }}>
                Min. Sipariş Tutarı: ₺{place.storeInfo.minOrderPrice}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <span
                className="mx-1"
                style={{
                  fontSize: 10,
                  color: "rgba(26, 24, 36, 1)",
                  fontWeight: "bold",
                }}
              >
                {haversine(
                  { latitude, longitude },
                  {
                    latitude: place.storeInfo.geoLocation.latitude,
                    longitude: place.storeInfo.geoLocation.longitude,
                  },
                  { unit: "km" }
                ).toFixed(1)}
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(26, 24, 36, 1)",
                  fontWeight: "bold",
                }}
              >
                km Yakininda
              </span>
            </div>
            <div className="text-secondary">
              {place.storeInfo.workingHours.length === 0 ? (
                <p
                  className="d-inline-block text-danger"
                  style={{ fontSize: 10 }}
                >
                  Calisma saati bilgisi yok.
                </p>
              ) : (
                <>
                  {place.storeInfo.workingHours[0].closed ? (
                    <p
                      className="d-inline-block text-danger"
                      style={{ fontSize: 10 }}
                    >
                      Isletme Kapali
                    </p>
                  ) : (
                    <p
                      className="d-inline-block"
                      style={{ fontSize: 10, color: "#34C47C" }}
                    >
                      Isletme Acik
                    </p>
                  )}
                  <span> </span>
                  <p
                    className="d-inline-block text-secondary"
                    style={{ fontSize: 10, color: "rgba(26, 24, 36, 0.5)" }}
                  >
                    {place.storeInfo.workingHours[0].open} /{" "}
                    {place.storeInfo.workingHours[0].close}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
