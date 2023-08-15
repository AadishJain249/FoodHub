import React, { useState } from "react";

export const Section = (props) => {
  console.log(props);
  return (
    <>
    <h2>{props.title}</h2>
    {props.isActive?(<p>{props.desc}</p>):(<button onClick={props.onShow}>Show</button>)}
    </>
  );
};
// in this we can see we have 3 componets of section if we show one component others still follow this component
// to resolve this we use share state

//  parent
//  child child child (we are making states of child)
// resolve
// we will make a common state for parent
// remove cbild states
// will pass states from parent
function InstaMart() {
  const [visible, isVisible] = useState(0); // parent state
  return (
    <React.Fragment>
      <Section
        title={"About InstaMart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isActive={visible === 0}
        onShow={() => isVisible(0)}
      ></Section>
      <Section
        title={"About InstaMart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isActive={visible === 1}
        onShow={() => isVisible(1)}
      ></Section>
      <Section
        title={"About InstaMart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isActive={visible === 2}
        onShow={() => isVisible(2)}
      ></Section>
    </React.Fragment>
  );
}

export default InstaMart;
