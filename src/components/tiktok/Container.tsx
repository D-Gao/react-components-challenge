import { FC } from "react";
import { Track } from "./types";

type Props = {
  track: Track;
};

const Container: FC<Props> = ({ track }) => {
  return (
    <div className="border w-[50vw] h-[100vh] rounded-xl bg-[#1D1D1B] p-4 flex flex-col gap-4">
      <img
        draggable={false}
        className=" rounded-lg"
        src={`https://ixwoqmuatxxtenrlpjed.supabase.co/storage/v1/render/image/public/entry_cover_art/${track.id}.jpg`}
      />
      <div className="bg-[#FFFFFF1A] flex-grow rounded-lg">
        <div className="flex h-full justify-center items-center">
          <div>
            <p className="text-center">{track.title}</p>
            <p className="text-center">{track.artist.name}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full gap-2">
        <button className=" bg-white w-full rounded-sm text-black px-6 py-2">
          Earn on social
        </button>
        <button className="bg-yellow-400 w-full rounded-sm px-6 py-">
          Buy 3.99$
        </button>
      </div>
    </div>
  );
};

export default Container;
