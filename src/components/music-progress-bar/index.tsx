import CustomAnalyzer from "./CustomAnalyzer";
import { tracks as audioUrls } from "./data";
const MusicProgressBar = () => {
  return <CustomAnalyzer url={audioUrls[0]} />;
};

export default MusicProgressBar;
