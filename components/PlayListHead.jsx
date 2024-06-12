"use client";
import React from "react";
import IconButton from "./elements/IconButton";
import { FiMoreVertical, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";
import { FiFolderPlus } from "react-icons/fi";
import usePlayerState from "@/hooks/usePlayerState";

const PlayListHead = ({ playlist }) => {
  const { playlistName, owner, songList } = playlist;
  const randomSong = getRandomElementFromArray(songList);

  const { addSongList } = usePlayerState();

  const onClickPlay = () => {
    addSongList(songList);
  };

  return (
    <section>
      <div className="flex gap-[50px] flex-row">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image src={randomSong.imageSrc} fill alt="songImg" />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div>
            <div className="text-neutral-400 mt-4 text-[14px]">{`앨범 • ${owner} • 2024`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton
              onClick={onClickPlay}
              className={"w-[88px]"}
              icon={<FiPlay />}
              label={"재생"}
            />
            <DarkButton
              icon={<FiFolderPlus />}
              label={"보관함에 저장"}
              className={"w-[145px] text-[14px]"}
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          className={"w-[88px]"}
          icon={<FiPlay />}
          label={"재생"}
          onClick={onClickPlay}
        />
        <DarkButton
          icon={<FiFolderPlus />}
          label={"보관함에 저장"}
          className={"w-[145px] text-[14px]"}
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;
