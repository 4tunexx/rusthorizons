import Packet from '../packet';

import { Packets } from '@rusthorizons/common/network';

import type { Modules } from '@rusthorizons/common/network';

export interface HealPacketData {
    instance: string;
    type: Modules.HealTypes;
    amount: number;
}

export type HealPacketCallback = (info: HealPacketData) => void;

export default class HealPacket extends Packet {
    public constructor(data: HealPacketData) {
        super(Packets.Heal, undefined, data);
    }
}
