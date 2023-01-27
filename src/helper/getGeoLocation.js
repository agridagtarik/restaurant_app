export const getGeoLocation = async (setLatitude, setLongitude) => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    },
    (err) => {
      console.log("Geolocation Error Msg: ", err.message);
      alert(
        "Konum bilgisine erisilemedi. Tarayicinizdan konum bilgisine izin vererek, sayfanizi yenileyiniz."
      );
    }
  );
};
