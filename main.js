import { LevelUpGame } from './shujahhhub-level-up-game.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize and start the Level Up game.
    const game = new LevelUpGame();
    game.start();
});

export function getDeviceType() {
    const width = window.innerWidth;

    if (width > 1766) {
        return 'desktop';
    } else if (width > 700) {
        return 'tablet';
    } else if (width > 450) {
        return 'mobile';
    } else {
        return 'phone'
    }
}
 
