import { useSelector } from "react-redux";
import "./genres.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((gen) => {
        if (!genres[gen]?.name) return;
        return (
          <div className="genre" key={gen}>
            {genres[gen]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
