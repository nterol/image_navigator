import { connect } from "react-redux";

import { savePicture } from "../../redux/actions";

const mapState = ({ allPictures: { error, picturesList } }) => ({
  error,
  picturesList
});

const mapDispatch = dispatch => ({
  savePicture: id => dispatch(savePicture(id))
});

const GalleryConnect = connect(
  mapState,
  mapDispatch
);

export default GalleryConnect;
