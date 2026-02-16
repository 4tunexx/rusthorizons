import Skill from '../skill';

import { Modules } from '@rusthorizons/common/network';

export default class Cooking extends Skill {
    public constructor() {
        super(Modules.Skills.Cooking);
    }
}
