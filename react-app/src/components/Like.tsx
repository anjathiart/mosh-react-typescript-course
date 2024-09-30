import React from 'react'

import { LuHeart } from "react-icons/lu";
import { LuHeartOff } from "react-icons/lu";

interface LikeProps {
    onClick: () => void;
    liked: boolean;
}

function Like({ onClick, liked = false }: LikeProps) {
    const size = 40;
  return (
    <>
        { liked ? <LuHeart onClick={onClick} size={size} color="magenta"/> : <LuHeartOff onClick={onClick} size={size} color="lightgray" width={size} height={size} /> }
    </>
  )
}

export default Like