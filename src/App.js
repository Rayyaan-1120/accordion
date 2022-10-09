import "./App.css";
import Accordion from "./components/Accordion";
import QuestionBox from "./components/QuestionBox";

const questions = [
  {
    questionText: "Is the end to end  process clear to the customer?",
    boolean: false,
  },
  {
    questionText: "Lacus luctus accumsan tortor posuere? ",
    boolean: true,
  },
  {
    questionText:
      "Sed felis eget velit aliquet sagittis id consectetur purus ut? ",
    boolean: false,
  },
  {
    questionText: "Feugiat vivamus at augue eget arcu dictum varius duis at. ",
    boolean: true,
  },
  {
    questionText: "Commodo sed egesta phasellus faucibus scelerisque eleifend?",
    boolean: false,
  },
];

const accordions = [
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #FF2E00 7.76%, rgba(255, 219, 28, 0.494792) 53.88%, #B5C1FF 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #EE0F44 7.76%, rgba(225, 26, 230, 0.494792) 53.88%, #2143F2 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #8CEE0F 7.76%, rgba(196, 255, 30, 0.494792) 53.88%, #2143F2 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #16FFAB 7.76%, rgba(35, 255, 229, 0.494792) 53.88%, #2143F2 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #12C6FF 7.76%, rgba(27, 49, 255, 0.494792) 53.88%, #2143F2 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #EED80F 7.76%, rgba(255, 85, 32, 0.494792) 53.88%, #2143F2 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
  {
    initial: "S",
    bgGradient:
      "linear-gradient(224.37deg, #7E1AFF 7.76%, rgba(223, 29, 255, 0.494792) 53.88%, #2143F2 100%)",
    title: "The Super Company",
    url: "www.thesuperservice.com",
    rating: 4,
  },
];

function App() {
  return (
    <div className="App">
      <div className="accordion-container">
        {accordions.map(
          ({ initial, bgGradient, title, url, rating }, index) => {
            return (
              <Accordion
                key={index}
                initial={initial}
                bgGradient={bgGradient}
                title={title}
                url={url}
                rating={rating}
              >
                <div className="accordionContentContainer">
                  {questions.map(({ questionText, boolean }, index) => {
                    return (
                      <QuestionBox
                        questionText={questionText}
                        boolean={boolean}
                        key={index}
                        index={index}
                      />
                    );
                  })}
                </div>
              </Accordion>
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
