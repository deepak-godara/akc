import React, { useState } from "react";
import styled from "styled-components";
import CourseRenderer, { AdminCourseView } from "./CourseRenderer";

// styled-components----
const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 1.25rem;
`;
//----------------------
function CourseView({ items }: { items: AdminCourseView[] }) {
  const [active, setActive] = useState<number>();
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <CourseRenderer
            id={index}
            key={index}
            onClick={() => {
              setActive(index);
            }}
            handleActive={(id) => {
              if (id === active) {
                setActive(undefined);
              } else {
                setActive(id);
              }
            }}
            active={index === active}
            item={item}
          />
        );
      })}
    </Container>
  );
}

export default CourseView;
