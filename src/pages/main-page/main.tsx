import CoursesPage from "../courses/Courses";
import EBooks from "../e-books/Ebooks";
import { StyledAppWrapper, StyledContainer } from "./Main.styles";

function MainPage() {
  return (
    <StyledAppWrapper>
      <h1>My Learning App</h1>
      <StyledContainer>
        <p>
          Discover literature step by step in a space designed for thoughtful
          learning. Explore structured courses that guide you through literary
          movements, authors, and ideas. Deepen your understanding with
          carefully selected eBooks that support and expand each topic.{" "}
        </p>

        <p>
          As you progress, apply what you've learned through assignments that
          encourage close reading, critical thinking, and interpretation.
          Whether you are studying independently or following a guided path, the
          platform helps you build knowledge gradually and meaningfully.
        </p>

        <p>
          Register to unlock full access to courses, readings, and assignments,
          and to track your learning journey from start to finish.
        </p>
      </StyledContainer>
      <CoursesPage></CoursesPage>
      <EBooks></EBooks>
    </StyledAppWrapper>
  );
}

export default MainPage;
