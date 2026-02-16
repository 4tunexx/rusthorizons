import Packet from '../packet';

import { Packets } from '@rusthorizons/common/network';

import type { Modules, Opcodes } from '@rusthorizons/common/network';

export interface EffectPacketData {
    instance: string;
    effect: Modules.Effects;
}

export type EffectPacketCallback = (opcode: Opcodes.Effect, info: EffectPacketData) => void;

export default class EffectPacket extends Packet {
    public constructor(opcode: Opcodes.Effect, data: EffectPacketData) {
        super(Packets.Effect, opcode, data);
    }
}
