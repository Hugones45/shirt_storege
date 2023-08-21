import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store"

export const ColorPicker = () => {

    const snap = useSnapshot(state)

    return (
    <div className="absolute left-full ml-3">

<SketchPicker
color={snap.color}
disableAlpha
presetColors={[
    "#1e90ff",
    "#ffd700",
    "#7cfc00",
    "#add8e6",
    "#ffb6c1",
    "#cd853f",
    "#ff4500",
    "#FF00FF",
    "#ffebcd",
    "#FFFF00",
    "#9370db",
    "#ffa500"
]}

onChange={(color) =>state.color = color.hex}
/>

    </div>)
};
