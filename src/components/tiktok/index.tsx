import Container from "./Container";
import { tracks } from "./data";
import { SlideComponent, SlideItem } from "./VerticalSlider";

const TikTok = () => {
  return (
    <div className="w-full flex justify-center">
      <SlideComponent items={tracks} index={0}>
        {({ item }) => (
          <SlideItem key={item.id}>
            <Container track={item} key={item.id}></Container>
          </SlideItem>
        )}
      </SlideComponent>
    </div>
  );
};

export default TikTok;
