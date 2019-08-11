import { connect } from "react-redux";

import { deletePicture } from "../../redux/actions";

const mapState = ({ savedPictures }) => ({
  savedPictures
});

const mapDispatch = dispatch => ({
  deletePicture: id => dispatch(deletePicture(id))
});

const SavedConnect = connect(
  mapState,
  mapDispatch
);

export default SavedConnect;
