import Packet from '../packet';

import { Packets } from '@rusthorizons/common/network';

import type { Modules, Opcodes } from '@rusthorizons/common/network';

export interface InterfacePacketData {
    identifier: Modules.Interfaces;
}

export type InterfacePacketCallback = (
    opcode: Opcodes.Interface,
    data: InterfacePacketData
) => void;

export default class Interface extends Packet {
    public constructor(opcode: Opcodes.Interface, data: InterfacePacketData) {
        super(Packets.Interface, opcode, data);
    }
}
