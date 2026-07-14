import { useNavigate } from "react-router-dom";
import CoursesPage from "../courses/Courses";
import { useCourses } from "../courses/hooks/useCourses";
import {
  BtnGhost,
  BtnOutline,
  BtnPrimary,
  ContinueBody,
  ContinueCap,
  ContinueCard,
  ContinueImg,
  ContinueMedia,
  ContinuePlaceholder,
  Hero,
  HeroActions,
  HeroCopy,
  HeroText,
  HeroTitle,
  Kicker,
  ProgressFill,
  ProgressRow,
  ProgressTrack,
  StyledAppWrapper,
  Veil,
} from "./Main.styles";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const { courses } = useCourses();

  // Feature the first course as the "continue learning" item.
  const featured = courses[0];
  const resume = () =>
    navigate(featured ? `/courses/${featured.id}` : "/courses");

  return (
    <StyledAppWrapper>
      <Hero>
        <HeroCopy>
          <Kicker>Welcome back</Kicker>
          <HeroTitle>My Learning App</HeroTitle>
          <HeroText>
            <p>
              Discover literature step by step in a space designed for
              thoughtful learning. Explore structured courses that guide you
              through literary movements, authors, and ideas — deepened by
              carefully selected eBooks that expand each topic.
            </p>
            <p>
              As you progress, apply what you've learned through assignments
              that encourage close reading, critical thinking, and
              interpretation.
            </p>
          </HeroText>
          <HeroActions>
            <BtnPrimary onClick={() => navigate("/courses")}>
              Explore courses
            </BtnPrimary>
            <BtnOutline onClick={() => navigate("/e-books")}>
              Browse the library
            </BtnOutline>
          </HeroActions>
        </HeroCopy>

        <ContinueCard>
          <ContinueMedia>
            {featured?.image?.url ? (
              <ContinueImg src={featured.image.url} alt={featured.title} />
            ) : (
              <ContinuePlaceholder />
            )}
            <Veil />
            <ContinueCap>
              <div className="eyebrow">CONTINUE LEARNING</div>
              <div className="title">
                {featured?.title ?? "Start your first course"}
              </div>
            </ContinueCap>
          </ContinueMedia>
          <ContinueBody>
            <ProgressRow>
              <span>Course progress</span>
              <strong>Lesson 3 of 8</strong>
            </ProgressRow>
            <ProgressTrack>
              <ProgressFill style={{ width: "38%" }} />
            </ProgressTrack>
            <BtnGhost onClick={resume}>Resume course</BtnGhost>
          </ContinueBody>
        </ContinueCard>
      </Hero>

      <CoursesPage mode="home" />
    </StyledAppWrapper>
  );
};

export default MainPage;
