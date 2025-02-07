import { useRef } from "react";
import "./VideoPlayerStyle.css";
import { testVideo } from "../../assets";

type VideoPlayerProps = {
  playState: boolean;
  setPlayState: (value: boolean) => void;
};

export default function VideoPlayer({
  playState,
  setPlayState,
}: VideoPlayerProps) {
  const player = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closePlayer = (e: any) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={testVideo} autoPlay muted controls></video>
    </div>
  );
}
