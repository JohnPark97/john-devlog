// components/PixelAnimation.tsx
import { Application, Sprite, Texture, AnimatedSprite } from 'pixi.js';

const CatSprite = (x?: number, y?: number) => {
  // const catTexture = Texture.from('/images/cat1.png');
  // // const catTexture = Texture.from('https://pixijs.com/assets/panda.png');
  // const catSprite = new Sprite(catTexture);

  // // Customize the cat's position, scale, etc.
  // catSprite.position.set(x || 50, y || 50);
  // catSprite.scale.set(5, 5); // Adjust the scale to fit the canvas better

  const sleepingCat = () => {
    const catImages = ['/images/cat1.png', '/images/cat2.png'];
    const textureArray = [];
    
    for (let i = 0; i < 2; i++)
    {
        const texture = Texture.from(catImages[i]);
        textureArray.push(texture);
    }
    const animatedSprite = new AnimatedSprite(textureArray);
    animatedSprite.position.set(x || 50, y || 50);
    animatedSprite.scale.set(5, 5); // Adjust the scale to fit the canvas better
  
    animatedSprite.animationSpeed = 0.1;
    animatedSprite.play();

    return animatedSprite;
  }

  return sleepingCat();
};

export default CatSprite;
