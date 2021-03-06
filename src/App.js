import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/scss/main.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import BaseLayout from "./layout/base";
import AuthLayout from "./layout/auth";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleLeft,
  faAngleRight,
  faBan,
  faBrain,
  faCaretDown,
  faCaretSquareDown,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faCode,
  faCog,
  faCogs,
  faFilePdf,
  faMailBulk,
  faMapMarkerAlt,
  faMoneyBillWave,
  faPaperPlane,
  faPencilAlt,
  faShare,
  faSearch,
  faSlash,
  faTachometerAlt,
  faThumbsDown,
  faThumbsUp,
  faTools,
  faTrash,
  faTrashAlt,
  faUndo,
  faUser,
  faUsersCog,
  faUserSlash,
  faUserTie,

  faCoffee
} from '@fortawesome/free-solid-svg-icons';
library.add(
  fab, 

  faAngleLeft,
  faAngleRight,
  faBan,
  faBrain,
  faCaretDown,
  faCaretSquareDown,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faCode,
  faCog,
  faCogs,
  faFilePdf,
  faMailBulk,
  faMapMarkerAlt,
  faMoneyBillWave,
  faPaperPlane,
  faPencilAlt,
  faShare,
  faSearch,
  faSlash,
  faTachometerAlt,
  faThumbsDown,
  faThumbsUp,
  faTools,
  faTrash,
  faTrashAlt,
  faUndo,
  faUser,
  faUsersCog,
  faUserSlash,
  faUserTie,

  faCoffee
);

function App() {
  let currentUser = {};
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/terminal" render={props => <BaseLayout currentUser={currentUser} {...props} />} />
          <Route path="/auth" render={props => <AuthLayout currentUser={currentUser} {...props} />} />
          {currentUser ? <Redirect to="/terminal/dashboard" /> : <Redirect to="/uath" />}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
