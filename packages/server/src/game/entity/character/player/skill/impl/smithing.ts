import Skill from '../skill';

import { Modules } from '@rusthorizons/common/network';

export default class Smithing extends Skill {
    public constructor() {
        super(Modules.Skills.Smithing);
    }
}
