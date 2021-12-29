import React from "react";
import useForms from "../hooks/useForms";

function WallProperties() {
    const {onChange, form} = useForms({wallWidth: 0, wallHeight: 0, wallWindows: 0, wallDoors: 0})

    return (
        <form>
            <input type="number" name="wallwallWidth" value={form.wallWidth} onChange={onChange}/>
            <input type="number" name="wallHeight" value={form.wallHeight} onChange={onChange}/>
            <input type="number" name="wallWindows" value={form.wallWindows} onChange={onChange}/>
            <input type="number" name="wallDoors" value={form.wallDoors} onChange={onChange}/>
        </form>
    );
};

export default WallProperties;