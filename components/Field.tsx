import React, { useEffect, useRef } from "react";
import { Application } from "pixi.js";
import CatSprite from "./Cat";
import Link from "next/link";

const Field: React.FC = () => {
    useEffect(() => {

        // Create PixiJS Application
        const app = new Application({
            backgroundColor: 0x1099bb,
            resizeTo: window,
        });
    
        const container = document.getElementById('animal-container');
        if (container) {
          //@ts-expect-error
          container.appendChild(app.view);
        }
    
        const catSprite = CatSprite();
        // Add the cat sprite to the stage
        app.stage.addChild(catSprite);
    }, []);

    return <div id='animal-container'></div>;
};

export default Field;