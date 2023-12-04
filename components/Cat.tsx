// components/PixelAnimation.tsx
import { AnimatedSprite, Assets } from 'pixi.js';

type Params = {
  animationJson: string;
  animationName: string;
  animationSpeed: number;
  position: { x: number, y: number };
  scale: { x: number, y: number };
}

const renderCatSprite = async (params: Params) => {
  const animations  = Assets.cache.get(params.animationJson).data.animations;
  const character = AnimatedSprite.fromFrames(animations[params.animationName]);

  // configure + start animation:
  character.animationSpeed = params.animationSpeed                     // 6 fps
  character.position.set(params.position.x, params.position.y);
  character.scale.set(params.scale.x, params.scale.y);
  character.play();
  return character;
};

export default renderCatSprite;
