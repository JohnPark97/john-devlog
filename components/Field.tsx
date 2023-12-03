// components/Field.tsx
import React, { useEffect } from "react";
import { Application } from "pixi.js";
import CatSprite from "./Cat";
import { Assets } from "pixi.js";

const Field: React.FC = () => {
  useEffect(() => {
    const loadCatSprites = async () => {
      await Assets.load(['spritesheets/cat/cat.json']);
      const app = new Application({
        backgroundColor: 0x1099bb,
        resizeTo: window,
      });

      const container = document.getElementById('animal-container');
      if (container) {
        //@ts-expect-error
        container.appendChild(app.view);
      }

      const catSprite = await CatSprite();

      const waggingCat = await CatSprite('wagging');

      if (catSprite) {
        app.stage.addChild(catSprite);
      }

      if (waggingCat) {
        app.stage.addChild(waggingCat);
      }

      app.start();
    };

    loadCatSprites();
  }, []);

  return <div id='animal-container'></div>;
};

export default Field;
