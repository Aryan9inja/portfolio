export default function Hobbies() {
  return (
    <section className="bg-bg-muted/80 rounded-2xl shadow-lg p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-highlight">
          Hobbies: yes, I touch grass sometimes
        </h1>
      </div>

      <ul className="grid md:grid-cols-3 gap-6 text-center text-text/80">
        <li className="p-4 bg-bg-muted rounded-xl shadow-md hover:shadow-lg transition">
          Stargazing from the roof
        </li>
        <li className="p-4 bg-bg-muted rounded-xl shadow-md hover:shadow-lg transition">
          Reading Space facts
        </li>
        <li className="p-4 bg-bg-muted rounded-xl shadow-md hover:shadow-lg transition">
          Travelling
        </li>
        <li className="p-4 bg-bg-muted rounded-xl shadow-md hover:shadow-lg transition">
          Listening to music
        </li>
        <li className="p-4 bg-bg-muted rounded-xl shadow-md hover:shadow-lg transition">
          Eating unhealty 😅
        </li>
        <li className="p-4 bg-bg-muted rounded-xl shadow-md hover:shadow-lg transition">
          Learn about new tech
        </li>
      </ul>
    </section>
  );
}
