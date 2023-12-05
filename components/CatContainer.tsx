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

      //TODO can we simplify this repetition
      const waggingCat = await renderCatSprite({
        animationJson: 'spritesheets/cat/waggingCat.json', 
        animationName: 'catWagging', 
        animationSpeed: 0.2, 
        position: {x: 0, y: 0}, 
        scale: {x: 3, y: 3}
      });

      const angryCat = await renderCatSprite({
        animationJson: 'spritesheets/cat/angryCat.json', 
        animationName: 'angry', 
        animationSpeed: 0.1, 
        position: {x: 100, y: 100}, 
        scale: {x: 3, y: 3}
      });

      const heartCats = await renderCatSprite({
        animationJson: 'spritesheets/cat/heartCats.json', 
        animationName: 'heart', 
        animationSpeed: 0.1, 
        position: {x: 400, y: 100}, 
        scale: {x: 3, y: 3}
      });

      const pullupCat = await renderCatSprite({
        animationJson: 'spritesheets/cat/pullupCat.json', 
        animationName: 'pullup', 
        animationSpeed: 0.2, 
        position: {x: 500, y: 100}, 
        scale: {x: 3, y: 3}
      });

      const drawingCat = await renderCatSprite({
        animationJson: 'spritesheets/cat/drawingCat.json', 
        animationName: 'draw', 
        animationSpeed: 0.2, 
        position: {x: 300, y: 100}, 
        scale: {x: 3, y: 3}
      });

      app.stage.addChild(waggingCat, angryCat, heartCats, pullupCat, drawingCat);
      app.start();
    };

    loadCatSprites();
  }, []);

  return <div id='animal-container'></div>;
};

export default CatContainer;
