import Skill from '../skill';

import { Modules } from '@rusthorizons/common/network';

export default class Eating extends Skill {
    public constructor() {
        super(Modules.Skills.Eating);
    }
}
