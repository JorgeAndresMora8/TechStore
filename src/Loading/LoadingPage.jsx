import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@mui/material";

export default function LoadingPage() {
  return (
    <div className="loading-page-container">
      <div className="loading-page-text-area">
        <FontAwesomeIcon style={{color: "#166cfd"}} className="fa-3x" icon={faBarsProgress} />
        <b>Loading Page</b>
        <p>
          
Page loading. Please wait a moment for full functionality.
        </p>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
}
