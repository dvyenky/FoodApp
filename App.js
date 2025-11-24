/*
 *
<div>
    <h1>Hello World From React</h1>
    <p>Create a Element</p>
    <h2>
        This is the Heading Tag
        <div>Hello World From Heading Div Tag</div>
    </h2>
</div> 
 */

const reactElement = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "world" }, "Hello World From React"),
  React.createElement("p", { id: "element" }, "Create a Element"),
  React.createElement("h2", { id: "tag" }, [
    "This is the Heading Tag",
    React.createElement(
      "div",
      { id: "hello" },
      "Hello World From Heading Div Tag"
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);

console.log(root);
