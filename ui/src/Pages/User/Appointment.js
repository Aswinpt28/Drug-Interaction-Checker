import React from "react";

const App = () => {
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <p>Schedule a meeting:</p>
      <iframe
        title="Calendly Scheduling"
        src="https://calendly.com/aswinptoffical/appointment"
        style={{ width: "100%", height: "600px", border: "0" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default App;
