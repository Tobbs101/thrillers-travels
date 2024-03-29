import Each from "./Each";
import TripItem from "./TripItem";
import { trip_data } from "./utils";

const TripsList = () => {
  return (
    <div className="flex-[4] border border-white bg-white rounded-3xl">
      <Each
        of={trip_data}
        render={(item: any, index: any) => {
          return <TripItem item={item} index={index} />;
        }}
      />
    </div>
  );
};

export default TripsList;
