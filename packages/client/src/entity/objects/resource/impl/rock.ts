import Resource from '../resource';

import { Modules } from '@rusthorizons/common/network';

export default class Rock extends Resource {
    public constructor(instance: string) {
        super(instance, Modules.EntityType.Rock);
    }
}
