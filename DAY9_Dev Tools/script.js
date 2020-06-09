const dogs = [
    { name: "Snickers", age: 24 },
    { name: "hugo", age: 84 },
  ];

  function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "55px";
  }

  // Regular
  console.log("Hello , Hi ,Bye");

  // Interpolated
  console.log("Hello this %s is an interpolated string element", "'this'");

  // Styled
  console.log("%cError", "color: white; background-color: red; ");

  // warning!
  console.warn("Something went wrong");

  // Error :|
  console.error("error");

  // Info
  console.info("crocodiles eat 5-6 people per year");

  // Testing
  console.assert(1 === 2, "You did not select the right element");

  // clearing
  

  // Viewing DOM Elements
  const p = document.querySelector("p");
  console.log(p);
  console.dir(p);

  // Grouping together
  console.group("This is a group");
  console.log("This is first child");
  console.log("This is the last child");
  console.groupEnd();

  // counting
  console.count("this");
  console.count("this");
  console.count("this");

  // timing
  console.time("fetching data");
  console.timeEnd("fetching data");