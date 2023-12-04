// components/Field.tsx
import React, { useEffect } from "react";
import { Application } from "pixi.js";
import renderCatSprite from "./Cat";

const CatContainer: React.FC = () => {
  useEffect(() => {
    const loadCatSprites = async () => {
      const app = new Application({
        backgroundColor: 0x1099bb,
        resizeTo: window,
      });

      const container = document.getElementById('animal-container');
      if (container) {
        //@ts-expect-error
        container.appendChild(app.view);
      }

      const waggingCat = await renderCatSprite({
        animationJson: 'spritesheets/cat/waggingCat.json', 
        animationName: 'catWagging', 
        animationSpeed: 0.1, 
        position: {x: 0, y: 0}, 
        scale: {x: 4, y: 4}
      });

      const angryCat = await renderCatSprite({
        animationJson: 'spritesheets/cat/angryCat.json', 
        animationName: 'angry', 
        animationSpeed: 0.1, 
        position: {x: 100, y: 100}, 
        scale: {x: 4, y: 4}
      });

      const heartCats = await renderCatSprite({
        animationJson: 'spritesheets/cat/heartCats.json', 
        animationName: 'heart', 
        animationSpeed: 0.1, 
        position: {x: 300, y: 100}, 
        scale: {x: 4, y: 4}
      });

      if (waggingCat) {
        app.stage.addChild(waggingCat);
      }

      if (angryCat) {
        app.stage.addChild(angryCat);
      }

      if (heartCats) {
        app.stage.addChild(heartCats);
      }

      app.start();
    };

    loadCatSprites();
  }, []);

  return <div id='animal-container'></div>;
};

export default CatContainer;
