import { connect } from "react-redux";
import { fetchFromAPI, errorReset } from "../../redux/actions";

const mapState = ({ allPictures: { error } }) => ({ error });

const mapDispatch = dispatch => ({
  fetchAPI: () => dispatch(fetchFromAPI()),
  resetError: () => dispatch(errorReset())
});

const ControllerConnect = connect(
  mapState,
  mapDispatch
);

export default ControllerConnect;
