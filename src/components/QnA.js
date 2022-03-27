import React from "react";

const qnaData = [
  {
    q: "How React Works",
    a: [
      "React.JS is a JavaScript library for creating user interfaces that make it easy to create a single-page application. React.js work by using components, elements, props, hook, virtual DOM, rendering. Feedback elements that provide some response elements using JSX, javascript XML. JSX is converted to react.createElement function. A reaction element is a class or a function that makes an element tree. The feedback class creates a new example and is called the render method. Response creates a virtual DOM with a virtual DOM. If there is a change in the coding or React component, first create a Virtual DOM and then react with ReactDOM.recder () to update that specific section to Real DOM. So whenever an update to the UI is needed, just call the component that works for that particular update and it appears in the DOM.",
    ],
  },
  {
    q: "Props vs States",
    a: [
      "Props are used to pass data from one component to another component and State data is passed inside the component only.",
      "Props can be used to populate state and can be used with any kind of components. But at earlier days state was only used in a class component",
      "You cannot the data of Props, but you can change sate data as many times as you want.",
      "You can only read Props, but States can be both read and written",
      "Props is passed as an attribute or key from an component to other, and State can be declared using useState hook in functional component",
    ],
  },
  {
    q: "How useState works",
    a: [
      "The useState() is a React Hook that allows you to have state variables in functional components. useState () gives 2 array elements in the output.One is an update function and the other is a variable. When useState () is called as: const [cart, setCart] = useState (). Then useState () gives a function output setCart (). With this function, the value of cart variable can be updated. and we also set defualt value for useState() ; for example: const [ cart, setCart] = useState(0); here cart defualt value 0; we set useSate(0) as defualt now update setCart(2) then cart value is 2; here useState() react hook use its setCart function to update cart value . useState() always use to update variable by its defualt function",
    ],
  },
];

const QnA = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center text-success">Ques And Answer Part</h2>
      <div className="qna-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-3">
        {qnaData.map((item, index) => (
          <div key={index} className="col">
            <article
              style={styles.article}
              className="qna border border-success rounded shadow"
            >
              <div
                style={styles.qContainer}
                className="q-container d-flex align-items-center justify-content-between bg-light p-3"
              >
                <h3 className="fs-4 text-danger">{item.q}</h3>
                <i className="fa-solid fs-4 text-primary"></i>
              </div>
              <div className="a-container p-3">
                <ul style={styles.answer}>
                  {item.a.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  qContainer: {
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderColor: "gray",
  },

  answer: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  article: { height: "100%" },
};

export default QnA;
