import { Modules } from '@rusthorizons/common/network';

import type { Plugin } from '.';
import type { ItemData } from '@rusthorizons/common/types/item';
import type Player from '@rusthorizons/server/src/game/entity/character/player/player';

export default class HealingItem implements Plugin {
    private healAmount = 0;
    private healPercent = 0;
    private driveAmount = 0;

    public constructor(data: ItemData) {
        this.healAmount = data.healAmount || 0;
        this.driveAmount = data.driveAmount || 0;
        this.healPercent = (data.healPercent || 0) / 100;
    }

    public onUse(player: Player): boolean {
        if (this.driveAmount) {
            if (player.drive.isFull()) {
                player.notify(`You are already at full drive.`);
                return false;
            }

            player.heal(this.driveAmount, 'drive');
        }

        if (this.healAmount || this.healPercent) {
            if (player.hitPoints.isFull()) {
                player.notify(`You are already at full health.`);
                return false;
            }

            if (this.healPercent) {
                player.heal(player.hitPoints.getMaxHitPoints() * this.healPercent, 'hitpoints');
                return true;
            }

            player.heal(this.healAmount, 'hitpoints');

            // Apply eating experience to the player.
            player.skills
                .get(Modules.Skills.Eating)
                .addExperience(Math.floor(this.healAmount / 10));
        }

        return true;
    }
}
