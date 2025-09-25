"use client"

import ItemList from "./itemList";
import { AI_ML, backendItems, devOps, frontendItems, languages, otherToolsAndTechItems } from "./items";

export default function Main() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-4xl md:text-6xl text-highlight font-bold text-center mb-2 drop-shadow-lg">Skills & Technologies</h1>
      <div className="grid gap-8">
        <div className="bg-bg-muted/80 rounded-xl shadow-md p-6">
          <h2 className="text-2xl md:text-4xl text-accent font-playfair mb-4 text-center">Backend</h2>
          <ItemList items={backendItems} />
        </div>
        <div className="bg-bg-muted/80 rounded-xl shadow-md p-6">
          <h2 className="text-2xl md:text-4xl text-highlight font-playfair mb-4 text-center">Frontend</h2>
          <ItemList items={frontendItems} />
        </div>
        <div className="bg-bg-muted/80 rounded-xl shadow-md p-6">
          <h2 className="text-2xl md:text-4xl text-accent font-playfair mb-4 text-center">DevOps / Cloud</h2>
          <ItemList items={devOps} />
        </div>
        <div className="bg-bg-muted/80 rounded-xl shadow-md p-6">
          <h2 className="text-2xl md:text-4xl text-highlight font-playfair mb-4 text-center">AI / ML</h2>
          <ItemList items={AI_ML} />
        </div>
        <div className="bg-bg-muted/80 rounded-xl shadow-md p-6">
          <h2 className="text-2xl md:text-4xl text-accent font-playfair mb-4 text-center">Other Tools & Tech</h2>
          <ItemList items={otherToolsAndTechItems} />
        </div>
        <div className="bg-bg-muted/80 rounded-xl shadow-md p-6">
          <h2 className="text-2xl md:text-4xl text-highlight font-playfair mb-4 text-center">Programming Languages</h2>
          <ItemList items={languages} />
        </div>
      </div>
    </section>
  );
}
