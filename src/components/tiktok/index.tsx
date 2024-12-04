import Container from "./Container";
import { tracks } from "./data";
import { SlideComponent, SlideItem } from "./VerticalSlider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TikTok = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Dialog>
        <DialogTrigger asChild>
          <button>Click Here :)</button>
        </DialogTrigger>
        <DialogContent className=" flex flex-col justify-center items-center h-screen w-screen data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
          {/* <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader> */}

          <div className="h-full w-[400px]">
            <SlideComponent items={tracks} index={0}>
              {({ item }) => (
                <SlideItem key={item.id}>
                  <Container track={item} key={item.id}></Container>
                </SlideItem>
              )}
            </SlideComponent>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TikTok;
