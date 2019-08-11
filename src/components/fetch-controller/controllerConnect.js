import { connect } from "react-redux";
import { fetchFromAPI } from "../../redux/actions";

const mapState = ({ allPictures: { error } }) => ({ error });

const mapDispatch = dispatch => ({
  fetchAPI: () => dispatch(fetchFromAPI())
});

const ControllerConnect = connect(
  mapState,
  mapDispatch
);

export default ControllerConnect;
