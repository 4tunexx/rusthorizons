import { t } from '@rusthorizons/common/i18n';

import type { Plugin } from '.';
import type Player from '@rusthorizons/server/src/game/entity/character/player/player';

export default class BlackPotion implements Plugin {
    public onUse(player: Player): boolean {
        player.notify(t('misc:BLACK_POTION'));

        setTimeout(() => player.hit(player.hitPoints.getHitPoints() - 1), 5000);

        return true;
    }
}
