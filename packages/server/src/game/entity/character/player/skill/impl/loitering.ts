import Skill from '../skill';

import { Modules } from '@rusthorizons/common/network';

export default class Loitering extends Skill {
    public constructor() {
        super(Modules.Skills.Loitering);
    }
}
