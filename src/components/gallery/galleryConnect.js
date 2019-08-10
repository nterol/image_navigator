import { connect } from "react-redux";

const mapState = ({ allPictures: { error, picturesList } }) => ({
  error,
  picturesList
});

const GalleryConnect = connect(mapState);

export default GalleryConnect;
