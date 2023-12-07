import React, { useEffect } from "react";
import { Application, Container, Assets, Ticker, DisplayObject } from "pixi.js";
import Cat from "public/classes/Cat";
import { initializeCats } from "services/CatLogic";

const CatContainer: React.FC = () => {
  useEffect(() => {
    const init = async () => {
      const app = new Application({
        backgroundColor: 0x1099bb,
        resizeTo: window,
      });

      const container = new Container();
      app.stage.addChild(container);

      const cats = initializeCats();

      // Add cats to the container
      cats.forEach(async (cat) => {
        const catSprite = await cat.loadAnimatedSprite();
        container.addChild(catSprite);
      });

      Ticker.shared.add(() => {
        // container.children[0].x += 1
        const catSprites: DisplayObject[] = container.children
        update(catSprites);
      });

      const containerElement = document.getElementById('animal-container');
      if (containerElement) {
        //@ts-expect-error
        containerElement.appendChild(app.view);
      }
    };

    init();
  }, []);

  function update(children: DisplayObject[]) {
    //TODO enhance this logic
    // children.forEach((child) => {
    //   child.x += 1;
    // })
  }

  async function loadAssets(path: string): Promise<void> {
    if (Assets.cache.has(path)) {
      return;
    } else {
      Assets.load([path]);
    }
}
  return <div id='animal-container'></div>;
};

export default CatContainer;
