import "./App.css";

function App() {
  const query = [
    {
      id: 1,
      message: "Top Cloud costs service in production account",
    },
    {
      id: 2,
      message: "Which application's cost are increasing the fastest?",
    },
    {
      id: 3,
      message:
        "How much money are we losing by not moving to gravition instances?",
    },
    {
      id: 4,
      message: "Which are the largest s3 bucket by size?",
    },
  ];
  return (
    <div className="App">
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="avatar">Me</div>
            <div className="message">Hello World</div>
          </div>
        </div>
        <div className="chat-input-holder">
          <div className="query-section">
            {/* {query?.map((item) => (
              <div className="individual-query-section" key={item?.id}>
                {item?.message}
              </div>
            ))} */}
          </div>
          <textarea
            rows="1"
            className="chat-input-textarea"
            placeholder="Start typing you query here..."
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
