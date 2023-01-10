import React from "react";
import { data } from "./Api";
import './HomePage.css'

export default function HomePage() {
    console.log(data)
  return (
    <main>
      <section>
        <div className="title-container">
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos
              dignissimos maiores voluptas, veniam commodi pariatur accusamus
              iure et sed maxime esse optio eveniet? Reiciendis voluptatum quis
              obcaecati sed fugiat.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>
      <section>
        <div class="home-title-container">
            <h3>Classes</h3>
            <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
         <div className="map-Container">
            {data.map((element, index) =>{
                return(
                    <div key={element.ID}>
                        <img src={element.ImageUrl} alt="" />
                        <h3>{element.Name}</h3>
                        <p>{element.ShortDesc}</p>
                        <button>View</button>
                    </div>
                )
            })}
         </div>
      </section>
    </main>
  );
}
