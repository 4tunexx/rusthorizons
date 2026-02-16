import Skill from '../skill';

import { Modules } from '@rusthorizons/common/network';

export default class Fletching extends Skill {
    public constructor() {
        super(Modules.Skills.Fletching);
    }
}
