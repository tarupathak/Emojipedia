import React from "react";
import emojipedia from "./components/emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((item) => {
          return (
            <div className="term">
              <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                  {item.emoji}
                </span>
                <span>{item.name}</span>
              </dt>
              <dd>{item.meaning}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default App;
