import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";

class Main extends React.Component{
  render() {
    return(
      <>
      <div className="all-beasts">
        {/* creates a HornedBeast component for each object in the json file */}
          {data.map(beast =>
            <HornedBeast
              title={beast.title}
              img={beast.image_url}
              description={beast.description}>
            </HornedBeast>
          )}
      </div>
      </>
    )
  }
}

export default Main;