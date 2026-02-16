import Skill from '../skill';

import { Modules } from '@rusthorizons/common/network';

export default class Defense extends Skill {
    public override combat = true;

    public constructor() {
        super(Modules.Skills.Defense);
    }
}
