import Packet from '../packet';

import { Packets } from '@rusthorizons/common/network';

import type { PlayerData } from './player';

export type WelcomePacketCallback = (data: PlayerData) => void;

export default class WelcomePacket extends Packet {
    public constructor(data: PlayerData) {
        super(Packets.Welcome, undefined, data);
    }
}
