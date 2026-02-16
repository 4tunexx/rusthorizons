import type Player from '../entity/character/player/player';

/**
 * The header is the GUI on top of the screen that displays
 * the user's hitPoints, and exp bar. Every time there's
 * an update to the game's player, it gets relayed here.
 */

export default class Header {
    // Containers used for dimension calculations.
    private health: HTMLElement = document.querySelector('#health')!; // The health bar container element
    private drive: HTMLElement = document.querySelector('#drive')!; // The drive bar container element

    // Masks used to display remaining hit points and drive.
    private healthMask: HTMLElement = document.querySelector('#health-mask')!; // The red element within the health bar.
    private driveMask: HTMLElement = document.querySelector('#drive-mask')!;

    // Text properties for the health and drive bars.
    private healthText: HTMLElement = this.health.querySelector('.health-text')!; // Numerical value of the health bar.
    private driveText: HTMLElement = this.drive.querySelector('.drive-text')!;

    private hudLevel: HTMLElement | null = document.querySelector('#hud-level');
    private hudRoot: HTMLElement | null = document.querySelector('#player-info');

    public constructor(private player: Player) {
        this.player.onHitPoints(this.handleHitPoints.bind(this));
        this.player.onDrive(this.handleDrive.bind(this));
        this.player.onPoison(this.handlePoison.bind(this));
        this.player.onSync(this.handleSync.bind(this));

        this.handleSync();
    }

    /**
     * Updates level text when the player syncs.
     */

    private handleSync(): void {
        if (this.hudLevel) this.hudLevel.textContent = `${this.player.level}`;

        this.updateHudXp();
    }

    /**
     * Updates the HUD XP ring using the average skill progress percentage.
     */

    public updateHudXp(): void {
        if (!this.hudRoot) return;

        let skills = Object.values(this.player.skills);
        let total = 0;
        let count = 0;

        for (let skill of skills) {
            if (typeof skill.percentage !== 'number') continue;
            total += skill.percentage;
            count++;
        }

        let average = count > 0 ? total / count : 0;
        let clamped = Math.max(0, Math.min(1, average));

        this.hudRoot.style.setProperty('--hud-xp', clamped.toString());
    }

    /**
     * Updates the health bar on the game screen.
     * @param hitPoints Current hit points of the player.
     * @param maxHitPoints Maximum attainable hit points (used to calcualte percentages).
     * @param decrease Whether or not the hit points are decreasing.
     */

    private handleHitPoints(hitPoints: number, maxHitPoints: number, decrease?: boolean): void {
        this.setPoints(
            this.health,
            this.healthMask,
            this.healthText,
            hitPoints,
            maxHitPoints,
            decrease
        );
    }

    /**
     * Updates the drive bar on the game screen.
     * @param drive Current drive of the player.
     * @param maxDrive Maximum attainable drive (used to calcualte percentages).
     */

    public handleDrive(drive: number, maxDrive: number): void {
        this.setPoints(this.drive, this.driveMask, this.driveText, drive, maxDrive);
    }

    /**
     * Updates the poison status by changing the colour of the health bar.
     * @param status The current status of the player's poison.
     */

    public handlePoison(status: boolean): void {
        if (status) this.healthMask.classList.add('health-mask-poison');
        else this.healthMask.classList.remove('health-mask-poison');
    }

    /**
     * Updates the width of all the bars when the window is resized.
     */

    public resize(): void {
        this.handleHitPoints(this.player.hitPoints, this.player.maxHitPoints);
        this.handleDrive(this.player.drive, this.player.maxDrive);
    }

    /**
     * Responsible for updating the width of the mask element to represent
     * the percentage of points remaining. The mask element uses the width
     * of the container element (since they're the same original width) to
     * calculate the percentage of points remaining.
     * @param element The element we are updating the width of.
     * @param maskElement Used to compare against the element's width.
     * @param textElement The text element we are adding the points info to.
     * @param points The points value we are updating the element with.
     * @param maxPoints The maximum points value.
     * @param decrease Whether or not the points value is decreasing.
     */

    private setPoints(
        element: HTMLElement,
        maskElement: HTMLElement,
        textElement: HTMLElement,
        points: number,
        maxPoints: number,
        decrease?: boolean
    ): void {
        let percentage = points / maxPoints;

        maskElement.style.width = `${Math.floor(element.offsetWidth * percentage).toString()}px`;

        textElement.textContent = `${points}/${maxPoints}`;

        if (decrease) this.flash();
    }

    /**
     * Temporarily replaces the mask of the health bar with the white version
     * and then quickly changes it back. This gives the illusion of the health
     * bar flashing white.
     */

    private flash(): void {
        this.healthMask.classList.add('health-mask-white');

        window.setTimeout(() => this.healthMask.classList.remove('health-mask-white'), 150);
    }
}
