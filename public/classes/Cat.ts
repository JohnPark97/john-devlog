import { AnimatedSprite, Assets } from 'pixi.js'

class Cat {
    name: string;
    animationJson: string;
    animationName: string;
    animationSpeed: number;
    position: { x: number, y: number };
    scale: { x: number, y: number };
    inMotion: boolean;

    constructor(name: string, animationJson: string, animationName: string, animationSpeed: number, position: { x: number, y: number }, scale: { x: number, y: number }) {
        this.name = name;
        this.animationJson = animationJson;
        this.animationName = animationName;
        this.animationSpeed = animationSpeed || 0.15;
        this.position = position;
        this.scale = scale;
        this.inMotion = true;
    }

    async loadAssets(path: string): Promise<void> {
        if (Assets.cache.has(path)) {
          return;
        } else {
          await Assets.load([path]);
        }
    }

    public async loadAnimatedSprite(): Promise<AnimatedSprite> {
        await this.loadAssets(this.animationJson);
        const animations  = Assets.cache.get(this.animationJson).data.animations;
        const character = AnimatedSprite.fromFrames(animations[this.animationName]);
        
        // configure + start animation:
        character.animationSpeed = this.animationSpeed                     // 6 fps
        character.position.set(this.position.x, this.position.y);
        character.scale.set(this.scale.x, this.scale.y);
        character.play();
        return character;
    }
    
    public getName(): string {
        return this.name;
    }

    public getAnimationJson(): string {
        return this.animationJson;
    }

    public getAnimationName(): string {
        return this.animationName;
    }

    public getAnimationSpeed(): number {
        return this.animationSpeed;
    }

    public getPosition(): { x: number, y: number } {
        return this.position;
    }

    public getScale(): { x: number, y: number } {
        return this.scale;
    }

    public setPosition(position: { x: number, y: number }): void {
        this.position = position;
    }
}

export default Cat;