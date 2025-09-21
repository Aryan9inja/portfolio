"use client"

import ItemList from "./itemList";
import { AI_ML, backendItems, devOps, frontendItems, languages, otherToolsAndTechItems } from "./items";

export default function Main() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-highlight text-shadow-current text-shadow-sm mb-6">
        Skills And Technologies
      </h1>
      <h2 className="text-3xl md:text-5xl text-center font-playfair mb-6">
        Backend
      </h2>
      <ItemList items={backendItems}/>
      <h2 className="text-3xl md:text-5xl text-center font-playfair my-6">
        Frontend
      </h2>
      <ItemList items={frontendItems}/>
      <h2 className="text-3xl md:text-5xl text-center font-playfair my-6">
        DevOps/Cloud
      </h2>
      <ItemList items={devOps}/>
      <h2 className="text-3xl md:text-5xl text-center font-playfair my-6">
        AI/ML
      </h2>
      <ItemList items={AI_ML}/>
      <h2 className="text-3xl md:text-5xl text-center font-playfair my-6">
        Other tools and tech
      </h2>
      <ItemList items={otherToolsAndTechItems}/>
      <h2 className="text-3xl md:text-5xl text-center font-playfair my-6">
        Programming Languages
      </h2>
      <ItemList items={languages}/>
    </div>
  );
}
