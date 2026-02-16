import Resource from '../resource';
import rocks from '../../../../../../data/rocks.json';

import Utils from '@rusthorizons/common/util/utils';
import { Modules } from '@rusthorizons/common/network';

export default class Rock extends Resource {
    public constructor(key: string, x: number, y: number) {
        super(Utils.createInstance(Modules.EntityType.Rock), key, x, y);

        this.setData(rocks[key as keyof typeof rocks]);
    }
}
