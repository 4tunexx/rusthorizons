import type { EntityData } from '@rusthorizons/common/types/entity';

export interface PetData extends EntityData {
    owner: string;
    movementSpeed: number;
}
